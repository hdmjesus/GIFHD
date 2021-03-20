import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { useFetchGifs } from "../../../Hooks/useFetchGifs";
const GifGrid = ({ categorie }) => {
  const { data: images, loading } = useFetchGifs(categorie, 10);

  return (
    <>
      <h3 className="gifs__category">{categorie}</h3>

      <section className="gifs__grid">
        {images.map((img) => (
          <Item key={img.id} {...img} />
        ))}
      </section>
    </>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
