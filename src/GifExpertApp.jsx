import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./Componets/Add/Category";
import GifGrid from "./Componets/Gif/Grid/Grid";

const GifExpertApp = () => {
  const [Categories, setCategories] = useState([]);
  // const handleCategorie = () => {
  //   // setCategories([...Categories, "HunterXHunter"]);
  //   setCategories((categories) => [...categories, "Jujutsu Kaisen"]);
  // };

  return (
    <section>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol className="gifs">
        {Categories.map((categorie) => (
          <GifGrid key={categorie} categorie={categorie} />
        ))}
      </ol>
    </section>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
