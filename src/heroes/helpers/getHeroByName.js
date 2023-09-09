import { heroes } from "../data/heroes";

export const getHerosByName = (name = '') => {
  name = name.toLowerCase().trim()
  if (name.length > 0) {
    return heroes.filter(h => h.superhero.toLocaleLowerCase().includes(name))
  }
  return [];
}