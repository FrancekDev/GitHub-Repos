import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useFormikContext,
  useFormik,
} from "formik";
import Repo from "../Repo/Repo";
import * as Yup from "yup";
//api
import apiOrigin from "../../api/api";
import axios from "axios";
//Styles
import "./Statefull.scss";

const Statefull = () => {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  return (
    <>
      <Formik
        initialValues={{ userName: "" }}
        validationSchema={Yup.object({
          userName: Yup.string().required(`Username is required !`).min(1),
        })}
        onSubmit={async (values, actions) => {
          const name = values.userName;
          // console.log(name);

          try {
            const reposList = await axios(`${apiOrigin}/${name}/repos`);
            setRepos(reposList);
            // console.log(reposList);

            const user = await axios(`${apiOrigin}/${name}`);

            setUser(user);
            // console.log(user);
          } catch (err) {
            console.log("Greška!");
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <Form className="SearchBar">
            <h1 className="SearchBar-Title">GitHub Repositories</h1>
            <div className="SearchBar-Wrapper">
              <Field
                className="SearchBar-Input"
                type="text"
                placeholder="Enter GitHub username..."
                name="userName"
              />

              <ErrorMessage className="error" component="div" name="userName" />
              <button type="submit" className="SearchBar-Button">
                Search
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Repo user={user} repos={repos}></Repo>
    </>
  );
};

export default Statefull;
