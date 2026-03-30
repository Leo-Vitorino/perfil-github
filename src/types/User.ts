export interface Repo {
  id: number;
  name: string;
  description: string;
  stars: number;
  language: string;
}

export interface User {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  location: string;
  followers: number;
  following: number;
  repos: number;
  pinnedRepos: Repo[];
}