function verificarPassword() {
    var pass1 = login.pass.value;
    var pass2 = login.pass2.value;
    var utilizador = login.user.value;
    var mail = login.mail.value;

    if (utilizador == "" || pass1 == "" || mail == "" || pass2 == "") {
        document.getElementById("erro").textContent = "*Preencha todos os campos";
        return false;
    } else if (!mail.includes("@gmail.com")) {
        document.getElementById("erro").textContent = "*Insira um email válido";
        login.mail.focus();
        return false;
    } else if (pass1.length < 6) {
        document.getElementById("erro").textContent = "*A password tem de ter pelo menos 6 caracteres";
        login.pass.focus();
        return false;
    } else if (pass1 != pass2) {
        document.getElementById("erro").textContent = "*Introduza corretamente as passwords";
        login.pass.focus();
        return false;
    }

    document.getElementById("erro").textContent = "Bem-vindo ao five " + utilizador;
    window.location.assign("index.html");

    return false; 
}
