
const navbar = `<nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/index.html">
                            <img src="img/logo.jpg" alt="Logo de Caos News" class="img-fluid rounded-circle" style="max-height: 50px;">
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/views/contacto.html">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/views/suscripcion.html">Suscripción</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/views/login.html">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/views/busqueda.html">Busqueda</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>`



$(document).ready(function(){
    $("header").html(navbar)

})

