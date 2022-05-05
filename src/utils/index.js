export async function apiPost(path, body) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.AUTHORIZATION_BEARER,
  };

  const response = await fetch(process.env.BASE_URL + path, {
    method: "post",
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();

  console.log("api post response",response);

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}
