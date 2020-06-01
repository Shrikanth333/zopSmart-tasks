const ApiRequest = (url) => {
  return fetch(url).then((response) => response.json());
};

export default ApiRequest;
