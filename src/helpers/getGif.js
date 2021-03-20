import { urlApi } from "../settings";
import { apiKey } from "../settings";

export const getGif = async (category, limit = 10, endpoint) => {
  let endponintUrl;
  if (endpoint) {
    endponintUrl = `${endpoint}?${apiKey}&limit=${limit}`;
  } else {
    endponintUrl = `search?q=${encodeURI(category)}&limit=${limit}&${apiKey}`;
  }

  const url = `${urlApi}${endponintUrl}`;
  console.log(url);

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
