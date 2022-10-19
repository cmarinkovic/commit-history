/**
 * Commit
 */
export interface Commits {
  author: null | PurpleSimpleUser;
  comments_url: string;
  commit: CommitObject;
  committer: null | FluffySimpleUser;
  files?: DiffEntry[];
  html_url: string;
  node_id: string;
  parents: Parent[];
  sha: string;
  stats?: Stats;
  url: string;
}

/**
 * Simple User
 */
export interface PurpleSimpleUser {
  avatar_url: string;
  email?: null | string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: null | string;
  html_url: string;
  id: number;
  login: string;
  name?: null | string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_at?: string;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface CommitObject {
  author: null | PurpleGitUser;
  comment_count: number;
  committer: null | FluffyGitUser;
  message: string;
  tree: Tree;
  url: string;
  verification?: Verification;
}

/**
 * Metaproperties for Git author/committer information.
 */
export interface PurpleGitUser {
  date?: string;
  email?: string;
  name?: string;
}

/**
 * Metaproperties for Git author/committer information.
 */
export interface FluffyGitUser {
  date?: string;
  email?: string;
  name?: string;
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  payload: null | string;
  reason: string;
  signature: null | string;
  verified: boolean;
}

/**
 * Simple User
 */
export interface FluffySimpleUser {
  avatar_url: string;
  email?: null | string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: null | string;
  html_url: string;
  id: number;
  login: string;
  name?: null | string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_at?: string;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

/**
 * Diff Entry
 */
export interface DiffEntry {
  additions: number;
  blob_url: string;
  changes: number;
  contents_url: string;
  deletions: number;
  filename: string;
  patch?: string;
  previous_filename?: string;
  raw_url: string;
  sha: string;
  status: Status;
}

export enum Status {
  Added = 'added',
  Changed = 'changed',
  Copied = 'copied',
  Modified = 'modified',
  Removed = 'removed',
  Renamed = 'renamed',
  Unchanged = 'unchanged',
}

export interface Parent {
  html_url?: string;
  sha: string;
  url: string;
}

export interface Stats {
  additions?: number;
  deletions?: number;
  total?: number;
}
