function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main_container_id").style.marginLeft = "250px";
    document.getElementById("main_container_id").style.width = "83%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main_container_id").style.marginLeft = "0";
    document.getElementById("main_container_id").style.width = "100%";
}
