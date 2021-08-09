import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [colon, setColon] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDolar((tipo != 10.28) ? (Math.round(((total * tipo) / 0.85) * 100) / 100) : (Math.round(((total / tipo) / 0.85) * 100) / 100));
    setEuro((tipo != 10.28) ? (Math.round(((total * tipo) / 1) * 100) / 100) : (Math.round(((total / tipo) / 1) * 100) / 100));
    setColon((tipo != 10.28) ? (Math.round(((total * tipo) * 10.28) * 100) / 100) : (Math.round(((total * tipo) / 10.28) * 100) / 100));
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de unidades</h1>

      <p>Dolar Estadounidense: {dolar}</p>
      <p>Euro: {euro}</p>
      <p>Colón Salvadoreño: {colon}</p>
      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={0.85}>Dolar Estadounidense</option>
        <option value={1}>Euro</option>
        <option value={10.28}>Colón Salvadoreño</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
