function verificarPassword() {
    var pass1 = login.pass.value;
    var pass2 = login.pass2.value;
    if (pass1 === pass2) {
        var user = login.user.value;
        alert("Bem-vindo ao five " + user);
    } else {
        alert("Reintroduza corretamente a password!");
        login.pass.focus();
    }
}

/* Smooth scroll */
var scroll = new SmoothScroll('.topnav a[href*="#"]', {
	speed: 500
});