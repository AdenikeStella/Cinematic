import {Link} from 'react-router-dom'
export const Footer = () => {
  return (
    

<footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="#" className="hover:underline">Cinematic</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:text-center dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="#" className="hover:underline me-4 md:me-6">Instagram</Link>
        </li>
        <li>
            <Link to="#" className="hover:underline me-4 md:me-6">Facebook</Link>
        </li>
        <li>
            <Link to="#" className="hover:underline me-4 md:me-6">X</Link>
        </li>
        <li>
            <Link to="www.linkedin.com/in/adenike-turton-33a6b7a6" className="hover:underline me-4 md:me-6">LinkedIn</Link>
        </li>
        <li>
            <Link to="https://github.com/AdenikeStella" className="hover:underline me-4 md:me-6">Github</Link>
        </li>
        <li>
            <Link to="mailto:turtonadenike@gmail.com" className="hover:underline">Gmail</Link>
        </li>
    </ul>
    </div>
</footer>

    )
}
