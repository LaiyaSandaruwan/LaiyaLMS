function functionLogin() {
    debugger
    var txtEmailBox = document.getElementById("txtEmail");
    var txtPasswordBox = document.getElementById("txtPassword");
    var txtEmail = txtEmailBox.value; debugger
    var txtPassword = txtPasswordBox.value;
    if (txtEmail != '' && txtPassword != '') {
        window.location.href = "/Home/Index";
    }
    else {
        functionLoginValidation()
    }
}
function functionLoginValidation() {
    var txtEmailBox = document.getElementById("txtEmail");
    var txtPasswordBox = document.getElementById("txtPassword");
    var txtEmail = txtEmailBox.value; debugger
    var txtPassword = txtPasswordBox.value;
    if (txtEmail == '') {
        txtEmailBox.style.borderColor = "red";
    }
    else {
        txtEmailBox.style.borderColor = "green";
    }
    if (txtPassword == '') {
        txtPasswordBox.style.borderColor = "red";
    }
    else {
        txtPasswordBox.style.borderColor = "green";
    }
    if (txtEmail != '' && txtPassword != '') {

    }
};