function goToNav(idElem) {
   // document.getElementsByClassName("nav").style.display = 'none';
    document.getElementById(idElem).style.display = 'flex';

    if(idElem === "home") {
        window.location.href = "/";
    } else {
        window.location.href = "/" + idElem; 
    }

}