import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import PanelCalculator from './PanelCalculator';
import Form from './Form';

function MainMenu() {
    let currentUrl = window.location.pathname;
    currentUrl === "/" ? currentUrl = '/calculator': currentUrl = currentUrl;
    const itemsMenu = [
            {id: 1, name: "Calculadora", url: "/calculator", className: currentUrl === "/calculator" ? "nav-link active": "nav-link"},
            {id: 2, name: "Formulario", url: "/form", className: currentUrl === "/form" ? "nav-link active": "nav-link"},
            {id: 3, name: "Tabla de registro", url: "/viewregister", className: currentUrl === "/viewregister" ? "nav-link active": "nav-link"},
            {id: 4, name: "Tabla con submenus", url: "/viewsubmenu", className: currentUrl === "/viewsubmenu" ? "nav-link active": "nav-link"}
        ];
    const [items, setItems] = useState(itemsMenu);
    const setActiveNav = (itemId) => {
        const update = items.map(it =>
            it.id === itemId ? {...it, className: "nav-link active"}:{...it, className: "nav-link"}
        );
        setItems(update);
    };
    return (
        <BrowserRouter>
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
            </Routes>
        </BrowserRouter>
    );
}

export default MainMenu;
