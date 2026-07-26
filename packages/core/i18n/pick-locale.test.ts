import { describe, expect, it } from "vitest";
import { DEFAULT_LOCALE } from "@multica/core/i18n";
import { matchLocale, pickLocale } from "./pick-locale";
import type { LocaleAdapter } from "./types";

function makeAdapter(
  overrides: Partial<LocaleAdapter> = {},
): LocaleAdapter {
  return {
    getUserChoice: () => null,
    getSystemPreferences: () => [],
    persist: () => {},
    ...overrides,
  };
}

describe("matchLocale", () => {
  it("returns DEFAULT_LOCALE when given an empty list", () => {
    expect(matchLocale([])).toBe(DEFAULT_LOCALE);
  });

  it("matches a clean supported tag", () => {
    expect(matchLocale(["zh-Hans"])).toBe("zh-Hans");
    expect(matchLocale(["ko"])).toBe("ko");
    expect(matchLocale(["ja"])).toBe("ja");
    expect(matchLocale(["en"])).toBe("en");
    expect(matchLocale(["pt-BR"])).toBe("pt-BR");
  });

  it("collapses region-tagged BCP-47 to the supported base", () => {
    expect(matchLocale(["en-US"])).toBe("en");
    expect(matchLocale(["zh-Hans-CN"])).toBe("zh-Hans");
    expect(matchLocale(["ko-KR"])).toBe("ko");
    expect(matchLocale(["ja-JP"])).toBe("ja");
    expect(matchLocale(["pt-BR-BR"])).toBe("pt-BR");
    expect(matchLocale(["pt"])).toBe("pt-BR");
  });

  it("falls back to DEFAULT_LOCALE when no candidate matches", () => {
    expect(matchLocale(["fr", "de"])).toBe(DEFAULT_LOCALE);
  });

  it("zh-Hant (traditional) collapses to zh-Hans — same base subtag, better UX than English fallback", () => {
    expect(matchLocale(["zh-Hant"])).toBe("zh-Hans");
  });

  it("uses the first supported candidate when multiple appear", () => {
    expect(matchLocale(["fr", "zh-Hans", "en"])).toBe("zh-Hans");
    expect(matchLocale(["fr", "ko-KR", "en"])).toBe("ko");
    expect(matchLocale(["fr", "ja-JP", "en"])).toBe("ja");
  });

  it("returns DEFAULT_LOCALE for malformed BCP-47 tags rather than throwing", () => {
    expect(matchLocale(["----"])).toBe(DEFAULT_LOCALE);
    expect(matchLocale(["x-private-only"])).toBe(DEFAULT_LOCALE);
  });
});

describe("pickLocale", () => {
  it("prefers explicit user choice over system signal", () => {
    const adapter = makeAdapter({
      getUserChoice: () => "zh-Hans",
      getSystemPreferences: () => ["en-US"],
    });
    expect(pickLocale(adapter)).toBe("zh-Hans");
  });

  it("falls back to system preferences when no user choice", () => {
    const adapter = makeAdapter({
      getSystemPreferences: () => ["zh-Hans-CN", "en-US"],
    });
    expect(pickLocale(adapter)).toBe("zh-Hans");
  });

  it("returns DEFAULT_LOCALE when neither choice nor preference yields a match", () => {
    const adapter = makeAdapter({
      getUserChoice: () => null,
      getSystemPreferences: () => ["fr", "de"],
    });
    expect(pickLocale(adapter)).toBe(DEFAULT_LOCALE);
  });

  it("ignores empty-string user choice and falls through to system", () => {
    const adapter = makeAdapter({
      getUserChoice: () => "",
      getSystemPreferences: () => ["zh-Hans"],
    });
    expect(pickLocale(adapter)).toBe("zh-Hans");
  });
});
