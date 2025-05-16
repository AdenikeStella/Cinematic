import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q")

    const {data: movies} = useFetch(apiPath, queryTerm);
    useTitle(`Search result for ${queryTerm}`);



  return (
    <main>
      <p className="text-2xl text-gray-900 py-4 dark:text-gray-100">
        {movies.length === 0 ? `No result for ${queryTerm}` : `Result for ${queryTerm}`}
      </p>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>

          ))}
        </div>
      </section>
    </main>
    )
}
