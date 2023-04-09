import React from "react";
import PropTypes from "prop-types";
import Repo from "../Repo/Repo";
import SearchBar from "../SearchBar/SearchBar";

import "./Section.scss";

export const Section = () => {
  return (
    <>
      <section className="Section">
        <div className="Section-Inner">
          <SearchBar />
        </div>
      </section>
    </>
  );
};

Section.propTypes = {};

export default Section;
