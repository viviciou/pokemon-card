import type { PokemonDetail } from "@services/pokemonService.types";

type CardProps = { pokemon: PokemonDetail };

const Card = ({ pokemon }: CardProps) => {
  const { id, name, sprites, types } = pokemon;
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl hover:drop-shadow-md">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-contain md:h-full md:w-64 bg-zinc-50"
            src={sprites.other["official-artwork"].front_default}
            alt={name}
          />
        </div>
        <div className="p-8 bg-zinc-50">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {id}
          </div>
          <a
            href="#"
            className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
          >
            {name}
          </a>
          <div className="flex items-center mt-2">
            <img src={sprites.front_default} alt={name} />
            <img src={sprites.back_default} alt={name} />
          </div>
          <p className="mt-2 text-gray-500 ">
            {types.map((type) => type.type.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
