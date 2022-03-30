import './NavBar.css'
import './CartWidget/CartWidget.js'

const NavBar = () => {
    return(        
        <div>
            <h2>Nuestros Productos</h2>
            <img src={cartWidget} alt="logo cart"/>        
            <nav className="NavBar">                    
                <button>Celulares</button>
                <button>Tablet</button>
                <button>Notebooks</button>
            </nav>
        </div>        
    )
}

export default NavBar