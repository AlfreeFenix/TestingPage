import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DatePicker, Stack } from "rsuite";
import Form from 'react-bootstrap/Form';
import { useData } from "../contexts/DataContext";
import { useState } from 'react';
function EditModal({editModalVisible, closeEditModal, updateTest, idElement}) {
    const {dataList, setDataList} = useData();    
    const [editDataList, setEditDatalist] = useState(dataList);
    
    function updateData() {
      if(dataList[idElement].celNumber === undefined || dataList[idElement].celNumber.length <= 4 ||  dataList[idElement].bithday === undefined || dataList[idElement].bithday.length <= 4 || dataList[idElement].name.length <= 4 || dataList[idElement].lastName.length <= 4 ||  dataList[idElement].streetName.length <= 4) {
        alert ('Informacion con errores');
      }
      else {
        alert ('Informacion guardada');
      }
    }
    return (
    <>
      <Modal show={editModalVisible} size="lg" onShow={ () => {setEditDatalist(dataList[idElement])}}>
      <Modal.Header closeButton onClick={closeEditModal}>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control size='sm' type="text" autoFocus value = {dataList[idElement] === undefined? "": dataList[idElement].name} onChange={ (e) => { const updateList = [...dataList]; updateList[idElement] = {...updateList[idElement], name: e.target.value}; setDataList(updateList)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="Text" size='sm' rows={3} value = {dataList[idElement] === undefined? "": dataList[idElement].lastName} onChange={ (e) => { const updateList = [...dataList]; updateList[idElement] = {...updateList[idElement], lastName: e.target.value}; setDataList(updateList)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Stack direction="column" alignItems="flex-start" spacing={6}>
                <DatePicker placeholder ='Seleccione fecha de cumpleaño' size="sm" value = {dataList[idElement] === undefined? null: dataList[idElement].bithday} onChange={ (e) => { const updateList = [...dataList]; updateList[idElement] = {...updateList[idElement], bithday: e.target.value}; setDataList(updateList)}}></DatePicker>
              </Stack>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <Stack direction="column" alignItems="flex-start" spacing={6} >
                <select class="form-select form-select-sm" aria-label="Small select example" value = {dataList[idElement] === undefined? "": dataList[idElement].gender} onChange={ (e) => { const updateList = [...dataList]; updateList[idElement] = {...updateList[idElement], gender: e.target.value}; setDataList(updateList)}}>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </Stack>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ciudad Residencia</Form.Label>
              <Stack direction="column" alignItems="flex-start" spacing={6}>
              <select class="form-select form-select-sm" aria-label="Small select example" value = {dataList[idElement] === undefined? "LA PAZ": dataList[idElement].residenceCity} onChange={ (e) => { const updateList = [...dataList]; updateList[idElement] = {...updateList[idElement], residenceCity: e.target.value}; setDataList(updateList)}}>
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
              </Stack>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Domicilio</Form.Label>
              <Form.Control type="Text" size='sm' rows={3}  value = {dataList[idElement] === undefined? "": dataList[idElement].streetName} onChange={ (e) => { const updateList = [...dataList]; updateList[idElement] = {...updateList[idElement], streetName: e.target.value}; setDataList(updateList)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Estado Civil</Form.Label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" value="Soltero" checked = {dataList[idElement]=== undefined? true : dataList[idElement].maritalStatus === "Soltero" ? true: false} onChange={ (e) => { const updateList = [...dataList]; updateList[idElement] = {...updateList[idElement], maritalStatus: e.target.value}; setDataList(updateList)}}/>
                <label class="form-check-label" for="inlineRadio1">Soltero</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" value="Casado" checked = {dataList[idElement]=== undefined? true : dataList[idElement].maritalStatus === "Casado" ? true: false} onChange={ (e) => { const updateList = [...dataList]; updateList[idElement] = {...updateList[idElement], maritalStatus: e.target.value}; setDataList(updateList)}}/>
                <label class="form-check-label" for="inlineRadio2">Casado</label>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Celular</Form.Label>
              <Form.Control type="number" rows={3} size='sm' value = {dataList[idElement] === undefined? "": dataList[idElement].celNumber} onChange={ (e) => { const updateList = [...dataList]; updateList[idElement] = {...updateList[idElement], celNumber: e.target.value}; setDataList(updateList)}}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {const updateList = [...dataList]; updateList[idElement] = editDataList; setDataList(updateList); closeEditModal();}} size='sm'>
            Close
          </Button>
          <Button variant="primary" size='sm' onClick = { () =>{updateData(); closeEditModal();}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>);
}

export default EditModal;