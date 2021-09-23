export interface PersonApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: 'Male' | 'Female';
  location: string;
  image: string;
  episode: Array<string>;
}
