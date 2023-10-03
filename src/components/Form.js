import { useEffect, useState } from "react";
import { DatePicker, Stack } from "rsuite";
import { useData } from "../contexts/DataContext";
import 'rsuite/dist/rsuite.min.css';


function Form() {
    const defaultValue = {
      name: '',
      lastName: '',
      bithday: null,
      gender: 'Masculino',
      residenceCity: 'La Paz',
      streetName: '',
      maritalStatus: 'Soltero',
      celNumber: ''
    };

    const [data, setData] = useState(defaultValue);
    const { dataList, setDataList } = useData();

    function saveInformation() {
      if(data.celNumber === undefined || data.celNumber.length <= 4 ||  data.bithday === undefined || data.bithday.length <= 4 || data.name.length <= 4 || data.lastName.length <= 4 ||  data.streetName.length <= 4) {
        alert ('Informacion con errores');
      }
      else {
        alert ('Informacion guardada');
        dataList.push(data);
        setDataList(dataList);
        setData(defaultValue);
      }
    }
    return (
      <div className="container p-5 w-50 bg-light rounded">
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Nombres</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value = {data.name} onChange = { (e) => {setData({...data, name:e.target.value})}}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Apellidos</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value = {data.lastName} onChange = { (e) => {setData({...data, lastName: e.target.value})}}/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Fecha Nacimiento</label>
          <div className="col-sm-3">
          <Stack direction="column" alignItems="flex-start" spacing={6}>
              <DatePicker placeholder ='Seleccione fecha de cumpleaño' size="lg" value={data.bithday} onChange={ (value) => {setData({...data, bithday: value})}}></DatePicker>
          </Stack>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Sexo</label>
          <div className="col-sm-10">
            <select class="form-select form-select-sm-2" aria-label="Small select example" value={data.gender} onChange={ (e) => {setData({...data, gender: e.target.value})}}>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Ciudad Residencia</label>
          <div className="col-sm-10">
            <select class="form-select form-select-sm-2" aria-label="Small select example" value={data.residenceCity} onChange={ (e) => {setData({...data, residenceCity: e.target.value})}}>
              <option value="La Paz" select>La Paz</option>
              <option value="Oruro">Oruro</option>
              <option value="Potosi">Potosi</option>
              <option value="Sucre">Sucre</option>
              <option value="Tarija">Tarija</option>
              <option value="Cochabamba">Cochabamba</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Pando">Pando</option>
              <option value="Beni">Beni</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Domicilio</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={data.streetName} onChange={ (e) => {setData({...data, streetName: e.target.value})}}/>
          </div>
        </div>
        <div className="form-inline">
          <label className="col-sm-2 col-form-label">Estado Civil</label>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" value="Soltero" checked ={data.maritalStatus === 'Soltero'} onChange={ (e) => { setData({...data, maritalStatus: e.target.value})}}/>
            <label class="form-check-label" for="inlineRadio1">Soltero</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" value="Casado" checked ={data.maritalStatus === 'Casado'} onChange={ (e) => { setData({...data, maritalStatus: e.target.value})}}/>
            <label class="form-check-label" for="inlineRadio2">Casado</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Celular</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" value={data.celNumber} onChange={ (e) => {setData({...data, celNumber: e.target.value})}}/>
          </div>
        </div> 
        <div className="mb-3 row">
          <button type="button" class="btn btn-primary" onClick={ () => {saveInformation()}}>Guardar</button>
        </div>       
      </div>
    );
  }
  
  export default Form;
  