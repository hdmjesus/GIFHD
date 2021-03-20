import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [InputValue, setInputValue] = useState(" ");
  const [ShowCategoriAlert, setShowCategoriAlert] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (InputValue.trim().length > 2) {
      setCategories((categories) => [InputValue, ...categories]);
      setInputValue("");
      setShowCategoriAlert(false);
    } else {
      setShowCategoriAlert(true);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="formCategory">
      <input
        type="text"
        name="categories"
        id="categories"
        placeholder="Search Categories"
        value={InputValue}
        onChange={handleInputChange}
      />
      {ShowCategoriAlert && (
        <p className="alertCategory">Ingresa una categoria valida.</p>
      )}
    </form>
  );
};

AddCategory.protoType = {
  setCategories: PropTypes.func.isRequired,
};
export default AddCategory;
