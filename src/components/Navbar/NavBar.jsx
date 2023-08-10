import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" >
            {/*brand*/}
            <a href="#" className="navbar-brand">Carniceria EL GORDO</a>
            {/* links*/}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" href= "#">Cortes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href= "#">Promos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href= "#">Contacto</a>
                </li>
            </ul>
            <span className="navbar-text">
            <CartWidget/>
            </span>
            
           </div>
        </nav>
    );

};
export default NavBar