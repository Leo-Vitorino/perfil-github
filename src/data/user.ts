import { User } from "../types/User";

export const user: User = {
  name: "Leonardo Vitorino",
  username: "Leo-Vitorino",
  bio: "Estudante de programação 🚀",
  avatar: "https://avatars.githubusercontent.com/u/104877540?s=400&u=e46f14451b0113211742d2532c5c2af53e19369f&v=4",
  location: "Brasil",
  followers: 10,
  following: 9,
  repos: 11,
  pinnedRepos: [
    {
      id: 1,
      name: "DW2-nodejs-express",
      description: "",
      stars: 50,
      language: "JavaScript",
    },
    {
      id: 2,
      name: "API-Games-NomeAPI-Games-Nome",
      description: "API criada durante as aula de DW3",
      stars: 30,
      language: "JavaScript",
    },
  ],
};