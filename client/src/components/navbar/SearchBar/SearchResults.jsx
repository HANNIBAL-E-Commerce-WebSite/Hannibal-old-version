import React, { useRef } from "react";
import "./popup.css";

const SearchResults = ({ results }) => {
  const popupRef = useRef(null);

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="popup" ref={popupRef}>
      <div className="popup-content">
        {results.map((result, i) => (
          <div key={i} className="result-item">
            <p>
              <img
                src={result.image.slice(1, result.image.length - 1)}
                alt=""
              />{" "}
              {result.name} {result.price}Dt
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
