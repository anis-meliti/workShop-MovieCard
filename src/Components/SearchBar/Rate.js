import React from "react";

const Rate = ({ rating, rateChange, isClickeble }) => {
  let starArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starArray.push(
        <span
          key={i}
          style={{ cursor: "pointer" }}
          onClick={() => isClickeble && rateChange(i + 1)}
        >
          ★
        </span>
      );
    } else {
      starArray.push(
        <span
          key={i}
          style={{ cursor: "pointer" }}
          onClick={() => isClickeble ? rateChange(i + 1):null}
        >
          ☆
        </span>
      );
    }
  }
  return <>{starArray}</>;
};

export default Rate;
