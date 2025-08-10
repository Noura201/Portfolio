window.onload = function() {
    let barDiv = document.getElementById('bar-div');
    let tabletNavbarULDiv = document.getElementById('tablet-navbar-ul-div');
    barDiv.onclick = function() {
        if(tabletNavbarULDiv.style.maxHeight === "") {
            tabletNavbarULDiv.style.maxHeight="400px";
            tabletNavbarULDiv.style.paddingBlock="15px"; 
        }
        else {
            tabletNavbarULDiv.style.maxHeight="";
            tabletNavbarULDiv.style.paddingBlock="";
        }
    }
}