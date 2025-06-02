import Card from "./components/Card";
import usePokemon from "./hooks/usePokemon";

function App() {
  const { pokemons } = usePokemon();

  if (!pokemons) return <></>;

  return (
    <>
      <div className="flex justify-center text-4xl m-8">
        Pokemon Card LazyLoad
      </div>
      <div className="flex flex-row flex-wrap justify-between m-4 gap-4">
        {pokemons.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

export default App;
