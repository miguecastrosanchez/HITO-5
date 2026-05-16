import Button from 'react-bootstrap/Button';

function Navbar(){

let precio = 25000;
let logeado = false;


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Button variant="dark">🍕 Home</Button>
          
        </li>

        {logeado == true ? <li className="nav-item">
         <Button variant="dark">🔒Profile</Button>
        </li> 
        :  <li className="nav-item">
            <Button variant="dark">🔐Register</Button>
        </li>}

        {logeado == true ? <li className="nav-item">
         <Button variant="dark">🔒Logout</Button>
        </li> 
        :  <li className="nav-item">
         <Button variant="dark">🔐Login</Button>
        </li>}

      </ul>
    </div>
    <div className="Carrito">
        <Button variant="dark">🛒 Total: ${precio.toLocaleString()} </Button> </div>
  </div>
</nav>
        </>
    )
}

export default Navbar