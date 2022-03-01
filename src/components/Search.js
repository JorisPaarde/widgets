import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("stuff");
  const [results, setResults] = useState([]);

  const BASEURL =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=";

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(BASEURL, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: query,
        },
      });
      setResults(data.query.search);
    };
    if (!results.length && query) {
      search();
    } else {
      const timeOut = setTimeout(() => {
        if (query) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [query, results.length]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            className="input"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
