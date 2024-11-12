export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize; // pour gérer qui peut accéder à la page selon son rôle
    }
}

/* pour les authorize ce sera un tableau :
[] -> tout le monde peut y accéder
["disconnected"] -> seulement les utilisateurs non connectés (login)
["connected"] -> seulement les utilisateurs connectés
["admin"] -> seulement les utilisateurs connectés en tant qu'admin
["client"] -> seulement les utilisateurs connectés en tant que client
["admin", "client"] -> seulement les utilisateurs connectés en tant qu'admin ou client
-> donc 5 cas possibles
*/