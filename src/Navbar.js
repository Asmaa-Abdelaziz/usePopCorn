import { useEffect, useRef } from "react";
import { useKey } from "./useKey";

export function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
export function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useKey("enter", function () {
    if (document.activeElement === inputElement.current) return;

    inputElement.current.focus();
    setQuery("");
  });
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
export function Numresults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
