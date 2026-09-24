// ========================================
// BOTÃO DE TEMA
// ========================================

const temaBtn = document.getElementById("temaBtn");


// ========================================
// ALTERAR TEMA
// ========================================

temaBtn.addEventListener("click", function () {

    // Adiciona ou remove a classe "dark"

    document.body.classList.toggle("dark");


    // Verifica qual tema está ativo

    if (document.body.classList.contains("dark")) {

        // Tema escuro

        temaBtn.textContent = "☀️";

    } else {

        // Tema claro

        temaBtn.textContent = "🌙";

    }

});


// ========================================
// BOTÕES DE INTERESSE
// ========================================

function mostrarMensagem() {

    alert(
        "🚗 Obrigado pelo interesse!\n\n" +
        "Nossa equipe entrará em contato com você."
    );

}