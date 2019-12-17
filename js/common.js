clickHumburger.addEventListener('click', openNav);
clickClose.addEventListener('click', closeNav);
function openNav() {
    let sidenav = document.getElementById("sideNav");
    sidenav.style.width = "100%";
    let humb = document.getElementById("clickHumburger");
    humb.style.opacity = "0";
}
function closeNav() {
    let sidenav = document.getElementById("sideNav");
    let humb = document.getElementById("clickHumburger");
    sidenav.style.width = "0";
    humb.style.opacity = "1";
}