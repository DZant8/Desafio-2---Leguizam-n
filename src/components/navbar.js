import CartWidget from './CartWidget.js';

function NavBar () {
    return<>
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <h1 class="navbar-brand" href="#"><a href="#">Home</a></h1>
            <h4><a href="#">Productos</a></h4>
            <h4><a href="#">Contacto</a></h4>
            <h4><a href="#">Nosotros</a></h4>
            <CartWidget/>
        </div>
        </nav>
    </>
};

export default NavBar;