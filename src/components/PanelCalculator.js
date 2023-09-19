import { useEffect, useState } from "react";

function PanelCalculator() {

  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState (1);
  

  function operation () {
      
      let resultOperation
        if (operator == 1) {
          resultOperation = parseFloat(numA) + parseFloat(numB);
        }
        if (operator == 2) {
          resultOperation = parseFloat(numA) - parseFloat(numB);
        }
        if (operator == 3) {
          resultOperation = parseFloat(numA) * parseFloat(numB);
        }
        if (operator == 4) {
          resultOperation = parseFloat(numA) / parseFloat(numB);
        }
      setResult(resultOperation);
  }

  useEffect(() => {
    operation();
  },[operator]);

  return (
    <div className="container p-5 w-50 bg-light rounded">
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Numero A</label>
        <div className="col-sm-10">
          <input type="number"  value = {numA} onChange={(e) => setNumA(e.target.value)}  className="form-control"/>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Numero B</label>
        <div className="col-sm-10">
          <input type="number" value = {numB} onChange={(e) =>  setNumB(e.target.value)} className="form-control"/>
        </div>
      </div>
      <div className="mb-3 row">
      <label className="col-sm-2 col-form-label">Operacion</label>
      <div className="col-sm-10">
        <select class="form-select form-select-sm" aria-label="Small select example" value = {operator} onChange={ (e) => (setOperator(e.target.value))} >
          <option value="1" selected>Suma</option>
          <option value="2">Resta</option>
          <option value="3">Multiplicacion</option>
          <option value="4">Division</option>
        </select>
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-sm-2">
          <button type="button" class="btn btn-primary" onClick={ () => operation()}>Resultado</button>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Resultado</label>
        <div className="col-sm-10">
          <input type="number" readOnly value = {result} className="form-control"/>
        </div>
      </div>
    </div>
  );
}

export default PanelCalculator;
