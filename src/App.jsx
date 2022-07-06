import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MonedaInput from "./Components/MonedaInput";
import { Resultado } from "./Components/Resultado";
import Moneda2 from "./Components/Moneda2";
import Historial from "./Components/Historial";

function App() {
  const [amount1, setAmount1] = useState();
  const [amount2, setAmount2] = useState();
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("COP");
  const [rates, setRates] = useState([]);

  const url = `https://api.fastforex.io/fetch-all?api_key=a8b3b3c7b3-ffd79e40b0-recrr2`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setRates(response.data.results);
    });
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(2);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div>
      <h1 style={{ backgroundColor: "#350", borderRadius: 15, padding: 3 }}>
        Cambio Divisas
      </h1>
      <MonedaInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      {/* <MonedaInput
        // onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        // amount={amount2}
        currency={currency2}
      /> */}
      <Moneda2
        //onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        currency={currency2}
      />
      <Resultado
        amount1={amount1}
        amount2={amount2}
        currency1={currency1}
        currency2={currency2}
      />
      {/* Componente que iba hacer empleado para el reporte del historial */}
      {/* <Historial /> */}
    </div>
  );
}

export default App;
