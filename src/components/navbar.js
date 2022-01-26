import CartIcon from './CartWidget';

function NavBar () {
    return<>
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <h1 class="navbar-brand" href="#">Home</h1>
            <h4>Productos</h4>
            <h4>Contacto</h4>
            <h4>Nosotros</h4>
            <CartIcon/>
        </div>
        </nav>
    </>
};

export default NavBar;