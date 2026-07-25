const OFFICIAL_MARKETING_HOSTS = new Set([
  "multica.ai",
  "www.multica.ai",
  "provincialabs.com.br",
  "www.provincialabs.com.br",
  "app.provincialabs.com.br",
]);

export function isOfficialMarketingHost(hostname: string): boolean {
  const normalized = hostname.trim().toLowerCase().replace(/\.$/, "");
  return OFFICIAL_MARKETING_HOSTS.has(normalized);
}
