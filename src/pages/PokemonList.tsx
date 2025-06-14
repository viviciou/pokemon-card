import Card from "@ui/Card";
import { SkeletonLoading, SkeletonLoadingType } from "@ui/SkeletonLoading";
import { LazyLoad } from "@components/LazyLoad";
import usePokemon from "@hooks/usePokemon";

const PokemonList = () => {
  const { pokemons, updatePokemons } = usePokemon();

  if (!pokemons) return <></>;

  return (
    <>
      <LazyLoad
        initLoaded={pokemons.length < 10}
        loadMoreItems={() => {
          updatePokemons(pokemons.length);
        }}
      >
        {({ isLoaded, ref }) =>
          isLoaded ? (
            <div
              ref={ref}
              className="flex flex-row flex-wrap justify-center m-4 gap-4"
            >
              {pokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          ) : (
            <SkeletonLoading type={SkeletonLoadingType.CARD} />
          )
        }
      </LazyLoad>
    </>
  );
};
export default PokemonList;
