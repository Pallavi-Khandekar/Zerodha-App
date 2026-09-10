import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBuyClick = async () => {
    const userId =
      new URLSearchParams(window.location.search).get("userId") ||
      localStorage.getItem("userId");
    const qty = Number(stockQuantity);
    const price = Number(stockPrice);

    if (!userId) {
      setError("Please log in before placing an order.");
      return;
    }

    if (!Number.isInteger(qty) || qty < 1 || !Number.isFinite(price) || price <= 0) {
      setError("Enter a valid quantity and price.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty,
        price,
        mode,
        userId,
      });
      generalContext.closeBuyWindow();
    } catch (requestError) {
      setError(
        requestError.response?.data?.message || "Unable to save this order."
      );
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            {isSubmitting ? "Saving..." : mode === "SELL" ? "Sell" : "Buy"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
      {error && <p className="order-error">{error}</p>}
    </div>
  );
};

export default BuyActionWindow;