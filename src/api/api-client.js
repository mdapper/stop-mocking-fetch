const apiURL = process.env.REACT_APP_API_URL;

export function isResponseError(statusCode) {
  return statusCode >= 400;
}

async function client(
  endpoint,
  { data, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return window.fetch(`${apiURL}${endpoint}`, config).then(async (response) => {
    if (isResponseError(response.status)) {
      return response;
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { client };
