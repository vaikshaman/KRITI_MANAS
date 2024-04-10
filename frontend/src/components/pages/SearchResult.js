import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SearchResult() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const receivedData = params.get("target");
  const [searchResult, setsearchResult] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/searchProjects?target=${receivedData}`)
      .then((response) => {
        // console.log(response.data)
        setsearchResult(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [receivedData]);
  //   console.log(searchResult);

  return (
    <div className="master_div_search">
      {searchResult &&
        searchResult.map((element) => (
          <div className="search_result">
            <div>Project: {element.projectName}</div>
            <div>Description: {element.description}</div>
          </div>
        ))}

      {!searchResult && <div className="no_match">No Match Found</div>}
    </div>
  );
}

export default SearchResult;
