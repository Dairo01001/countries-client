/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../features/countries/countriesSlice";
import debounce from "just-debounce-it";

export function useSearch() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const previousSearch = useRef(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { search } = Object.fromEntries(new window.FormData(e.target));
    setSearch(search);
  };

  const debounceSearchMovies = useCallback(
    debounce((search) => dispatch(searchCountries(search)), 250),
    []
  );

  useEffect(() => {
    if (previousSearch.current === search) return;
    previousSearch.current = search;
    debounceSearchMovies(search);
  }, [search, debounceSearchMovies]);

  return { search, handleChange, handleSubmit };
}
