import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import { useState } from 'react';
import PanelCalculator from './PanelCalculator';
import Form from './Form';
import ViewList from './ViewList';
import ConfirmationModal from './ConfirmationModal';

function MainMenu() {
    let currentUrl = window.location.pathname;
    currentUrl === "/TestingPage/" ? currentUrl = '/TestingPage/calculator': currentUrl = currentUrl;
    const itemsMenu = [
            {id: 1, name: "Calculadora", url: "/calculator", className: currentUrl === "/TestingPage/calculator" ? "nav-link active": "nav-link"},
            {id: 2, name: "Formulario", url: "/form", className: currentUrl === "/TestingPage/form" ? "nav-link active": "nav-link"},
            {id: 3, name: "Tabla de registro", url: "/viewlist", className: currentUrl === "/TestingPage/viewlist" ? "nav-link active": "nav-link"},
            {id: 4, name: "Tabla con submenus", url: "/viewsubmenu", className: currentUrl === "/TestingPage/viewsubmenu" ? "nav-link active": "nav-link"}
        ];
    const [items, setItems] = useState(itemsMenu);
    const setActiveNav = (itemId) => {
        const update = items.map(it =>
            it.id === itemId ? {...it, className: "nav-link active"}:{...it, className: "nav-link"}
        );
        setItems(update);
    };
    return (
        <BrowserRouter basename='/TestingPage'>
            <div className ="container">
                <header className = "d-flex justify-content-center py-3 border-bottom">
                    <ul className ="nav nav-pills">
                        {   
                            items.map((item) =>{
                                return( <li key = {item.id} ><Link className={item.className} onClick={() =>setActiveNav(item.id)} to ={item.url}>{item.name}</Link></li>)
                            }
                            )
                        }
                    </ul>
                </header>
            </div>
            <Routes>
                <Route path='/' Component={PanelCalculator}>
                </Route>
                <Route path='/calculator' Component={PanelCalculator}>
                </Route>
                <Route path='/form' Component={Form}>
                </Route>
                <Route path='/viewlist' Component={ViewList}>
                </Route>
                <Route path='/viewsubmenu' Component={ConfirmationModal}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainMenu;
