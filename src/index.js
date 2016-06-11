export default ({
  fetch,
  headers: defaultHeaders,
  method: defaultMethod,
  url,
}) => (graphQLParams, {headers, method} = {}) =>
  fetch(url, {
    method: method || defaultMethod || 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...defaultHeaders,
      ...headers,
    },
    body: JSON.stringify(graphQLParams),
    credentials: 'include',
  })
  .then((response) => response.text())
  .then((responseBody) => {
    try {
      return JSON.parse(responseBody);
    } catch (error) {
      return responseBody;
    }
  });

