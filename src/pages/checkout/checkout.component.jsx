import React from "react";
import { createStructuredSelector } from "reselect";
import "./checkout.styles.scss";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";

const headers = ["Product", "Description", "Quantity", "Price", "Remove"];

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      {headers.map((header) => (
        <div className="header-block">
          <span>{header}</span>
        </div>
      ))}
    </div>
    {cartItems.map((item) => item.name)}
    <div className="total">
      <span> TOTAL ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
