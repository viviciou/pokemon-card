import type { PokemonDetail } from "../../service/pokemonService.types";

type CardProps = { pokemon: PokemonDetail };

const Card = ({ pokemon }: CardProps) => {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl hover:drop-shadow-md">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-contain md:h-full md:w-64"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="p-8 bg-zinc-50">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {pokemon.id}
          </div>
          <a
            href="#"
            className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
          >
            {pokemon.name}
          </a>
          <div className="flex items-center mt-2">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
          </div>
          <p className="mt-2 text-gray-500 ">
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
