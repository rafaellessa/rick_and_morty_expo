import {Person} from '../../../redux/types/types.person';
import {PersonApi} from './types';
export const factoryPersons = (data: PersonApi[]): Person[] => {
  const result: Person[] = data.map(item => {
    return {
      id: item.id,
      status: item.status,
      gender: item.gender === 'Male' ? 'masculino' : 'feminino',
      name: item.name,
      species: item.species,
      type: item.type,
      location: item.location,
      image: item.image,
      episode: item.episode,
    };
  });

  return result;
};
