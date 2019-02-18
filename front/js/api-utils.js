export function getQueryParams() {
  const URLString = document.URL;
  const paramsString = URLString.split('?')[1];

  const params = {}
  if (!paramsString) {
    return params;
  }

  const pairs = paramsString.split('&');

  pairs.map((pair) => {
    const [ key, value ] = pair.split('=');
    params[key] = value;
  });

  return params;
}
