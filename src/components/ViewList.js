import { useState } from "react";
import { useData } from "../contexts/DataContext";
import ConfirmationModal from "./ConfirmationModal";
import EditModal from "./EditModal";
function ViewList () {

    const {dataList, setDataList} = useData();
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [idElement, setIdElement] = useState();
    function openEditModal(index) {
        setIdElement(index);
        setEditModalVisible(true);        
    }

    const updateTest = (test) =>{
        alert(test);
        alert(idElement);
    }

    function closeEditModal() {
        setEditModalVisible(false);
    }

    function closeModal() {
        setModalVisible(false);
    }

    function deleteData(id) {
        setIdElement(id);
        setModalVisible(true);
    }

    function confirmationDeleteData() {
        const nuevosDatos = dataList.filter((item, index) => index !== idElement);
        setDataList(nuevosDatos);
        setModalVisible(false);
    }
    return (
        <div className="container p-5 bg-light rounded">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#R</th>
                        <th scope="col">Nombres</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Fecha Nacimiento</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Ciudad Residencia</th>
                        <th scope="col">Domicilio</th>
                        <th scope="col">Estado civil </th>
                        <th scope="col">Celular/Telefono</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    dataList.map((item, index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.lastName}</td>
                            <td>{item.bithday.toLocaleDateString()}</td>
                            <td>{item.gender}</td>
                            <td>{item.residenceCity}</td>
                            <td>{item.streetName}</td>
                            <td>{item.maritalStatus}</td>
                            <td>{item.celNumber}</td>
                            <td><button onClick={() => {openEditModal(index)}}>Editar</button></td>
                            <td><button onClick={() => {deleteData(index)}}>Eliminar</button></td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            <ConfirmationModal modalValue = {modalVisible} closeModal ={closeModal} confirmationDeleteData= {confirmationDeleteData}></ConfirmationModal>    
            <EditModal editModalVisible = {editModalVisible} closeEditModal = {closeEditModal} updateTest = {updateTest} idElement = {idElement}></EditModal>
        </div>
    );
}


export default ViewList;