
const tokenCookieName = "accesstoken";
const roleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");
const apiUrl = "http://localhost:8000/api/";


//**** Gestion des roles + hide****/
function getRole() {
    return getCookie(roleCookieName);
}

function showAndHideElementsForRole() {
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll("[data-show]");

    allElementsToEdit.forEach(element => 
        {
        switch (element.dataset.show) {
            case "disconnected":
                if (userConnected) {
                    element.classList.add("d-none"); // d-none = classe de bootstrap pour cacher un élément
                }
                break;
            case "connected":
                if (!userConnected) {
                    element.classList.add("d-none");
                }
                break;
            case "admin":
                if (!userConnected || role != "admin") {
                    element.classList.add("d-none");
                }
                break;
            case "client":
                if (!userConnected || role != "client") {
                    element.classList.add("d-none");
                }
                break;
        }
    })
} 

/* roles
disconnected
connected (admin ou client)
    - admin
    - client
*/

// ****** FIN de gestion des roles ******

// ****** Gestion de la déconnexion ******
signoutBtn.addEventListener("click", signout);

function signout() {
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
    // window.location.replace("/signin");
    window.location.reload();
}
// ****** FIN de gestion de la déconnexion ******

// ****** Gestion des cookies ******
function setToken(token) {
    // le nom de mon cookie sera "accesstoken", la valeur sera le token, et il expirera dans 7 jours
    setCookie(tokenCookieName, token, 7);
}

function getToken() {
    return getCookie(tokenCookieName);
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function isConnected() {
    if (getToken() == null || getToken == undefined) {
        return false;
    }
    else {
        return true;
    }
}

if (isConnected()) {
    alert("Vous êtes connecté");
}
else {
    alert("Vous n'êtes pas connecté");
}
// ****** FIN de gestion des cookies ******