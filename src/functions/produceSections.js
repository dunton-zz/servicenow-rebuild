import React from "react";
import Question from "../components/Question";

export const produceSections = (data, key) => {
  return data.map((obj, i) => (
    <div className="section" key={key}>
      <Question data={obj} count={i} />
    </div>
  ));
};
