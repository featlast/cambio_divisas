import React from "react";
import "./Style/StyleMonedaInput.css";

export const Resultado = ({ amount1, amount2, currency1, currency2 }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#350",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
        <p>{`${amount1} ${currency1} = ${amount2} ${currency2}`}</p>
      </div>
    </div>
  );
};
