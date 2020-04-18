const githubCredentials = btoa(`${process.env.REACT_APP_GITHUB_CLIENT_ID}:${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

const fetchUrl = url => {
  return fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Basic ${githubCredentials}`,
    },
  });
};

export default fetchUrl;
