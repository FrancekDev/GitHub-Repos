import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Repo from "../Repo/Repo";
//api
import apiOrigin from "../../api/api";
import axios from "axios";
//Styles
import "./SearchBar.scss";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    const searchUser = e.target.value.tolowerCase();

    setSearchInput(searchUser);
  };

  return (
    <>
      <Formik
        initialValues={{ repoName: "" }}
        onSubmit={async (values, actions) => {
          try {
            const reposResult = await axios(
              `${apiOrigin}${values.repoName}/repos`
            );
            setRepos(reposResult);

            const user = await axios(`${apiOrigin}${values.repoName}`);
            setUser(user);
          } catch (err) {
            console.log(err);
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        <Form className="SearchBar">
          <h1 className="SearchBar-Title">GitHub Repositories</h1>
          <div className="SearchBar-Wrapper">
            <Field
              className="SearchBar-Input"
              type="text"
              placeholder="Search repo on GitHub..."
              name="repoName"
            />
            <ErrorMessage name="repoName" />
            <button type="submit" className="SearchBar-Button">
              Search
            </button>
          </div>
        </Form>
      </Formik>
      <Repo user={user} repos={repos}></Repo>
    </>
  );
};

export default SearchBar;
