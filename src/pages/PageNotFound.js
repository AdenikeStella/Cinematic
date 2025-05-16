import { Link } from "react-router-dom";
import  Page  from "../assets/page.png";
import { Button } from "../components";
import { useEffect } from "react";

export const PageNotFound = () => {

  useEffect (() => {
    document.title = `Page not found/cinemate`
  });

  return (
    <section className="px-2 flex flex-col justify-center dark:bg-white">
      <div className="flex flex-col items-center my-4">
        <p className="text-6xl py-2 text-center font-bold text-gray-900 dark:text-gray-900">Oops! Page Does Not Exist.</p>
        <img className="rounded my-2 max-w-lg justify-center mx-auto" src={Page} alt="404 Error" />
        <p className="text-xl py-1 text-center text-gray-900 dark:text-gray-900">Enter correct url and try again.</p>
      </div>

      <div className="flex flex-col items-center">
        <Link to='/'>
        <Button>Back to Cinemate</Button>
        </Link>
      </div>
    </section>
    )
}
