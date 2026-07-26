import type { LocaleResources, SupportedLocale } from "@multica/core/i18n";
import enCommon from "./en/common.json";
import enAuth from "./en/auth.json";
import enSettings from "./en/settings.json";
import enIssues from "./en/issues.json";
import enAgents from "./en/agents.json";
import enEditor from "./en/editor.json";
import enOnboarding from "./en/onboarding.json";
import enInvite from "./en/invite.json";
import enLabels from "./en/labels.json";
import enMembers from "./en/members.json";
import enMyIssues from "./en/my-issues.json";
import enSearch from "./en/search.json";
import enInbox from "./en/inbox.json";
import enWorkspace from "./en/workspace.json";
import enProjects from "./en/projects.json";
import enAutopilots from "./en/autopilots.json";
import enSkills from "./en/skills.json";
import enChat from "./en/chat.json";
import enModals from "./en/modals.json";
import enRuntimes from "./en/runtimes.json";
import enLayout from "./en/layout.json";
import enUsage from "./en/usage.json";
import enUi from "./en/ui.json";
import enSquads from "./en/squads.json";
import enBilling from "./en/billing.json";
import zhHansCommon from "./zh-Hans/common.json";
import zhHansAuth from "./zh-Hans/auth.json";
import zhHansSettings from "./zh-Hans/settings.json";
import zhHansIssues from "./zh-Hans/issues.json";
import zhHansAgents from "./zh-Hans/agents.json";
import zhHansEditor from "./zh-Hans/editor.json";
import zhHansOnboarding from "./zh-Hans/onboarding.json";
import zhHansInvite from "./zh-Hans/invite.json";
import zhHansLabels from "./zh-Hans/labels.json";
import zhHansMembers from "./zh-Hans/members.json";
import zhHansMyIssues from "./zh-Hans/my-issues.json";
import zhHansSearch from "./zh-Hans/search.json";
import zhHansInbox from "./zh-Hans/inbox.json";
import zhHansWorkspace from "./zh-Hans/workspace.json";
import zhHansProjects from "./zh-Hans/projects.json";
import zhHansAutopilots from "./zh-Hans/autopilots.json";
import zhHansSkills from "./zh-Hans/skills.json";
import zhHansChat from "./zh-Hans/chat.json";
import zhHansModals from "./zh-Hans/modals.json";
import zhHansRuntimes from "./zh-Hans/runtimes.json";
import zhHansLayout from "./zh-Hans/layout.json";
import zhHansUsage from "./zh-Hans/usage.json";
import zhHansUi from "./zh-Hans/ui.json";
import zhHansSquads from "./zh-Hans/squads.json";
import zhHansBilling from "./zh-Hans/billing.json";
import koCommon from "./ko/common.json";
import koAuth from "./ko/auth.json";
import koSettings from "./ko/settings.json";
import koIssues from "./ko/issues.json";
import koAgents from "./ko/agents.json";
import koEditor from "./ko/editor.json";
import koOnboarding from "./ko/onboarding.json";
import koInvite from "./ko/invite.json";
import koLabels from "./ko/labels.json";
import koMembers from "./ko/members.json";
import koMyIssues from "./ko/my-issues.json";
import koSearch from "./ko/search.json";
import koInbox from "./ko/inbox.json";
import koWorkspace from "./ko/workspace.json";
import koProjects from "./ko/projects.json";
import koAutopilots from "./ko/autopilots.json";
import koSkills from "./ko/skills.json";
import koChat from "./ko/chat.json";
import koModals from "./ko/modals.json";
import koRuntimes from "./ko/runtimes.json";
import koLayout from "./ko/layout.json";
import koUsage from "./ko/usage.json";
import koUi from "./ko/ui.json";
import koSquads from "./ko/squads.json";
import koBilling from "./ko/billing.json";
import jaCommon from "./ja/common.json";
import jaAuth from "./ja/auth.json";
import jaSettings from "./ja/settings.json";
import jaIssues from "./ja/issues.json";
import jaAgents from "./ja/agents.json";
import jaEditor from "./ja/editor.json";
import jaOnboarding from "./ja/onboarding.json";
import jaInvite from "./ja/invite.json";
import jaLabels from "./ja/labels.json";
import jaMembers from "./ja/members.json";
import jaMyIssues from "./ja/my-issues.json";
import jaSearch from "./ja/search.json";
import jaInbox from "./ja/inbox.json";
import jaWorkspace from "./ja/workspace.json";
import jaProjects from "./ja/projects.json";
import jaAutopilots from "./ja/autopilots.json";
import jaSkills from "./ja/skills.json";
import jaChat from "./ja/chat.json";
import jaModals from "./ja/modals.json";
import jaRuntimes from "./ja/runtimes.json";
import jaLayout from "./ja/layout.json";
import jaUsage from "./ja/usage.json";
import jaUi from "./ja/ui.json";
import jaSquads from "./ja/squads.json";
import jaBilling from "./ja/billing.json";
import ptBrCommon from "./pt-BR/common.json";
import ptBrAuth from "./pt-BR/auth.json";
import ptBrSettings from "./pt-BR/settings.json";
import ptBrIssues from "./pt-BR/issues.json";
import ptBrAgents from "./pt-BR/agents.json";
import ptBrEditor from "./pt-BR/editor.json";
import ptBrOnboarding from "./pt-BR/onboarding.json";
import ptBrInvite from "./pt-BR/invite.json";
import ptBrLabels from "./pt-BR/labels.json";
import ptBrMembers from "./pt-BR/members.json";
import ptBrMyIssues from "./pt-BR/my-issues.json";
import ptBrSearch from "./pt-BR/search.json";
import ptBrInbox from "./pt-BR/inbox.json";
import ptBrWorkspace from "./pt-BR/workspace.json";
import ptBrProjects from "./pt-BR/projects.json";
import ptBrAutopilots from "./pt-BR/autopilots.json";
import ptBrSkills from "./pt-BR/skills.json";
import ptBrChat from "./pt-BR/chat.json";
import ptBrModals from "./pt-BR/modals.json";
import ptBrRuntimes from "./pt-BR/runtimes.json";
import ptBrLayout from "./pt-BR/layout.json";
import ptBrUsage from "./pt-BR/usage.json";
import ptBrUi from "./pt-BR/ui.json";
import ptBrSquads from "./pt-BR/squads.json";
import ptBrBilling from "./pt-BR/billing.json";

// Single source of truth for the resource bundle. Both apps (web layout +
// desktop App.tsx) import from here so adding a locale or namespace happens
// in exactly one place.
const enResources: LocaleResources = {
  common: enCommon,
  auth: enAuth,
  settings: enSettings,
  issues: enIssues,
  agents: enAgents,
  editor: enEditor,
  onboarding: enOnboarding,
  invite: enInvite,
  labels: enLabels,
  members: enMembers,
  "my-issues": enMyIssues,
  search: enSearch,
  inbox: enInbox,
  workspace: enWorkspace,
  projects: enProjects,
  autopilots: enAutopilots,
  skills: enSkills,
  chat: enChat,
  modals: enModals,
  runtimes: enRuntimes,
  layout: enLayout,
  usage: enUsage,
  ui: enUi,
  squads: enSquads,
  billing: enBilling,
};

const ptBrResources: LocaleResources = {
  common: ptBrCommon,
  auth: ptBrAuth,
  settings: ptBrSettings,
  issues: ptBrIssues,
  agents: ptBrAgents,
  editor: ptBrEditor,
  onboarding: ptBrOnboarding,
  invite: ptBrInvite,
  labels: ptBrLabels,
  members: ptBrMembers,
  "my-issues": ptBrMyIssues,
  search: ptBrSearch,
  inbox: ptBrInbox,
  workspace: ptBrWorkspace,
  projects: ptBrProjects,
  autopilots: ptBrAutopilots,
  skills: ptBrSkills,
  chat: ptBrChat,
  modals: ptBrModals,
  runtimes: ptBrRuntimes,
  layout: ptBrLayout,
  usage: ptBrUsage,
  ui: ptBrUi,
  squads: ptBrSquads,
  billing: ptBrBilling,
};

export const RESOURCES: Record<SupportedLocale, LocaleResources> = {
  en: enResources,
  "pt-BR": ptBrResources,
  "zh-Hans": {
    common: zhHansCommon,
    auth: zhHansAuth,
    settings: zhHansSettings,
    issues: zhHansIssues,
    agents: zhHansAgents,
    editor: zhHansEditor,
    onboarding: zhHansOnboarding,
    invite: zhHansInvite,
    labels: zhHansLabels,
    members: zhHansMembers,
    "my-issues": zhHansMyIssues,
    search: zhHansSearch,
    inbox: zhHansInbox,
    workspace: zhHansWorkspace,
    projects: zhHansProjects,
    autopilots: zhHansAutopilots,
    skills: zhHansSkills,
    chat: zhHansChat,
    modals: zhHansModals,
    runtimes: zhHansRuntimes,
    layout: zhHansLayout,
    usage: zhHansUsage,
    ui: zhHansUi,
    squads: zhHansSquads,
    billing: zhHansBilling,
  },
  ko: {
    common: koCommon,
    auth: koAuth,
    settings: koSettings,
    issues: koIssues,
    agents: koAgents,
    editor: koEditor,
    onboarding: koOnboarding,
    invite: koInvite,
    labels: koLabels,
    members: koMembers,
    "my-issues": koMyIssues,
    search: koSearch,
    inbox: koInbox,
    workspace: koWorkspace,
    projects: koProjects,
    autopilots: koAutopilots,
    skills: koSkills,
    chat: koChat,
    modals: koModals,
    runtimes: koRuntimes,
    layout: koLayout,
    usage: koUsage,
    ui: koUi,
    squads: koSquads,
    billing: koBilling,
  },
  ja: {
    common: jaCommon,
    auth: jaAuth,
    settings: jaSettings,
    issues: jaIssues,
    agents: jaAgents,
    editor: jaEditor,
    onboarding: jaOnboarding,
    invite: jaInvite,
    labels: jaLabels,
    members: jaMembers,
    "my-issues": jaMyIssues,
    search: jaSearch,
    inbox: jaInbox,
    workspace: jaWorkspace,
    projects: jaProjects,
    autopilots: jaAutopilots,
    skills: jaSkills,
    chat: jaChat,
    modals: jaModals,
    runtimes: jaRuntimes,
    layout: jaLayout,
    usage: jaUsage,
    ui: jaUi,
    squads: jaSquads,
    billing: jaBilling,
  },
};
