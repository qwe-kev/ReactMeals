import React from "react";
import classes from "./Header.module.css";
import FoodBanner from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <img className={classes["main-image"]} src={FoodBanner}></img>
    </React.Fragment>
  );
};

export default Header;
