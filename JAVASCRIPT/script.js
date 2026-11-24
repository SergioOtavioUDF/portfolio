var cargos = ["Estudante de Sistemas de Informação", "Entusiasta de Defesa Cibernética", "Aprendiz de Hacking Ético"];
var numeroCargo = 0;
var numeroLetra = 0;
var apagando = false;

function digitar() {
    var textoCompleto = cargos[numeroCargo];
    document.getElementById("cargo").textContent = textoCompleto.substring(0, numeroLetra);
    if (apagando == false) {
        numeroLetra = numeroLetra + 1;
    } else {
        numeroLetra = numeroLetra - 1;
    }
    if (numeroLetra > textoCompleto.length) {
        apagando = true;
        setTimeout(digitar, 1500);
        return;
    }
    if (numeroLetra < 0) {
        apagando = false;
        numeroCargo = numeroCargo + 1;
        if (numeroCargo == cargos.length) {
            numeroCargo = 0;
        }
        numeroLetra = 0;
    }
    setTimeout(digitar, 80);
}

digitar();
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var aviso = document.getElementById("aviso");
    if (nome == "" || email == "" || mensagem == "") {
        aviso.textContent = "Preencha todos os campos.";
        return;
    }
    aviso.textContent = "Abrindo seu aplicativo de e-mail...";
    var assunto = "Contato pelo portfólio: " + nome;
    var texto = mensagem + "\n\nDe: " + nome + " (" + email + ")";
    window.location.href = "mailto:sergiootavio204@gmail.com?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(texto);
});

document.getElementById("ano").textContent = new Date().getFullYear();

var botaoTema = document.getElementById("botao-tema");
botaoTema.addEventListener("click", function () {
    var atual = document.documentElement.getAttribute("data-bs-theme");
    var novo = atual == "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", novo);
    try {
        localStorage.setItem("tema", novo);
    } catch (e) {}
});

var voltarTopo = document.getElementById("voltar-topo");
window.addEventListener("scroll", function () {
    voltarTopo.classList.toggle("visivel", window.scrollY > 400);
});