const fetchUrl = url => {
  return fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  });
};

export default fetchUrl;
