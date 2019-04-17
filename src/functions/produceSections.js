import React from "react";
import Question from "../components/Question";

export const produceSections = data => {
  return data.map((obj, i) => (
    <div className="section" key={obj.key}>
      <Question data={obj} count={i} />
    </div>
  ));
};
