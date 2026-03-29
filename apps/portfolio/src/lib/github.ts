export interface GitHubRepo {
  id: string;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const BASE_URL = 'https://api.github.com';

async function fetchGitHub<T>(endpoint: string): Promise<T> {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, { headers });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

export async function getUser(username: string): Promise<GitHubUser> {
  return fetchGitHub<GitHubUser>(`/users/${username}`);
}

export async function getUserRepos(
  username: string,
  options?: {
    sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    direction?: 'asc' | 'desc';
    per_page?: number;
  }
): Promise<GitHubRepo[]> {
  const params = new URLSearchParams({
    sort: options?.sort || 'updated',
    direction: options?.direction || 'desc',
    per_page: String(options?.per_page || 10),
    type: 'owner',
  });

  return fetchGitHub<GitHubRepo[]>(`/users/${username}/repos?${params}`);
}

export async function getRepoByName(
  owner: string,
  repo: string
): Promise<GitHubRepo> {
  return fetchGitHub<GitHubRepo>(`/repos/${owner}/${repo}`);
}

// Filter repos to only show projects (non-forks, with description)
export function filterProjectRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return repos
    .filter((repo) => !repo.fork && repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
}
