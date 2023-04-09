import apiOrigin from "./api";

export const githubUsers = (user) => {
  return fetch(`${apiOrigin}`).then((result) => {
    if (!result.ok) {
      throw result;
    }
    return result.json();
  });
};

export const githubRepos = (repos) => {
  return fetch(`${apiOrigin}/repos`).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};
