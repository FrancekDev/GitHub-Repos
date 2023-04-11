//style
import "./Section.scss";
//components
import React from "react";
import Statefull from "../Statefull/Statefull";

export const Section = () => {
  return (
    <>
      <section className="Section">
        <div className="Section-Inner">
          <Statefull />
        </div>
      </section>
    </>
  );
};

export default Section;
