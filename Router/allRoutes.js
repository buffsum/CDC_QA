import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/test", "page test", "/pages/test.html", []),
    new Route("/signin", "Connexion", "/pages/Auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/Auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/Auth/account.html", ["connected"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/Auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/CRUD/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/CRUD/reserver.html", ["client"]),
    // new Route ("/Galerie", "Galerie", "/pages/galerie.html", "/js/galerie.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";