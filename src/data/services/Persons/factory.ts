import { Person } from "../../../redux/types/types.person";
import { PersonApi } from "./types";
export const factoryPersons = (data: PersonApi[]): Person[] => {
  const result: Person[] = data.map((item) => {
    const person: Person = {
      id: item.id,
      gender: item.gender === "Male" ? "masculino" : "feminino",
      name: item.name,
      species: item.species,
      type: item.type,
      location: item.location.name,
      image: item.image,
      episode: item.episode,
    };

    if (item.status === "Alive") {
      person.status = "vivo";
    } else if (item.status === "Dead") {
      person.status = "morto";
    } else {
      person.status = "desconhecido";
    }

    return person;
  });

  return result;
};
