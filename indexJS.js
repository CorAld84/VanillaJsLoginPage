var btnLogin = document.getElementById('submitLogin');

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    var name = document.getElementById('nameLogin').value;
    var password = document.getElementById('passwordLogin').value;
    console.log(name);
    console.log(password);
});