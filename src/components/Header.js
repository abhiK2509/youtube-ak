import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { HAMBURGER_MENU_LOGO, USER_LOGO, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../redux/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchResults(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
    const json = await data.json();
    setSearchResults(json?.[1]);
    dispatch(cacheResults({ [searchQuery]: json?.[1] }));
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => dispatch(toggleMenu())}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HAMBURGER_MENU_LOGO}
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>
      <div className="col-span-10 px-20">
        <div>
          <input
            value={searchQuery}
            className="w-2/3 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setShowSuggestions(false)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && searchResults.length !== 0 && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {searchResults.map((item) => (
                <li
                  key={item}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-logo"
          src={USER_LOGO}
        />
      </div>
    </div>
  );
};

export default Header;
