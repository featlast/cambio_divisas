import React from "react";
import PropTypes from "prop-types";
import "./Style/StyleMonedaInput.css";

const Moneda2 = (props) => {
  return (
    <div className="container">
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

Moneda2.propTypes = {
  currencies: PropTypes.array,
  currency: PropTypes.string.isRequired,
};

export default Moneda2;
