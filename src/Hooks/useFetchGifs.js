import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGif";
export const useFetchGifs = (categorie, limit, endpoint) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(categorie, limit, endpoint).then((img) => {
      setState({
        data: img,
        loading: false,
      });
    });
  }, [categorie]);

  return state;
};
