import React from "react";
import PropTypes from "prop-types";
import "./Style/StyleMonedaInput.css";

const MonedaInput = (props) => {
  return (
    <div className="container">
      <input
        type="number"
        value={props.amount}
        onChange={(ev) => props.onAmountChange(ev.target.value)}
      />
      <select
        value={props.currency}
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}
      >
        {props.currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

MonedaInput.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default MonedaInput;
