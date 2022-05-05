export async function apiPost(path, body) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.AUTHORIZATION_BEARER,
  };

  const response = await fetch(window.location.origin + path, {
    method: "post",
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}
