import React from "react";
import classes from "./Header.module.css";
import FoodBanner from "../../assets/food-banner.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <img className={classes["main-image"]} src={FoodBanner}></img>
    </React.Fragment>
  );
};

export default Header;
