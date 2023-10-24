import { FavoritePokemons } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: "Favorites",
  description: "151 Pokemons from 1st Generation",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        List of Favorite&apos;s Pokemons{" "}
        <strong className="text-blue-500">Global State</strong>
      </span>
      <FavoritePokemons />
    </div>
  );
}
