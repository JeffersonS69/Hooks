import { LoadingQuote, Quote } from "../03-examples/components";
import { useCounter, useFetch } from "../hooks";


export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { status, species, name, image } = !!data && data;

  return (
    <>
      <h1>RickAndMorty Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote status={status} species={species} name={name} image={image} />
      )}

      <button
        className="btn btn-primary"
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
