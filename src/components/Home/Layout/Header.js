import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <>
   
      <div className={classes.div}>
        <header className={classes.header}>
          <h1>The Generics</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
      </div>
    </>
  );
};

export default Header;
