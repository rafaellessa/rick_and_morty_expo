import { useEffect, useState } from "react";
import { Person } from "./../redux/types/types.person";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useAddPersonFavorites = () => {
  const [favorites, setFavorites] = useState<Person[]>([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const localFavorites = await AsyncStorage.getItem("favorites");
    const parsedFavorites =
      localFavorites !== null ? (JSON.parse(localFavorites) as Person[]) : null;

    if (parsedFavorites) {
      setFavorites(parsedFavorites);
    }
  };

  const handleAddFavorite = async (item: Person) => {
    if (favorites) {
      const isAlreadyFavorite = favorites.some(
        (favorite) => favorite.id === item.id
      );

      if (isAlreadyFavorite) {
        const filteredFavorites = favorites.filter(
          (favorite) => favorite.id !== item.id
        );

        setFavorites(filteredFavorites);
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify([...filteredFavorites])
        );
      } else {
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify([...favorites, item])
        );
        setFavorites([...favorites, item]);
      }
    } else {
      await AsyncStorage.setItem("favorites", JSON.stringify([item]));
      setFavorites([item]);
    }
  };

  return {
    favorites,
    addFavorite: async (item: Person) => handleAddFavorite(item),
    fetchFavorites: async () => fetchFavorites(),
  };
};
