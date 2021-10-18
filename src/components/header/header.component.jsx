import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP NOW
      </Link>
      <Link to="/" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT{" "}
        </div>
      ) : (
        <Link to="/signIn" className="option">
          {" "}
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
  </div>
);
const mapStateToProps = rootReducer => ({
  currentUser: rootReducer.user.currentUser,
});

export default connect(mapStateToProps)(Header);