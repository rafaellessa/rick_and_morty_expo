export interface PersonApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: "Male" | "Female";
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
}
