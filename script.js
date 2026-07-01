document.addEventListener("DOMContentLoaded", () => {
    // 1. Funcionalidade do Modo Escuro
    const toggleButton = document.getElementById("toggle-dark-mode");
    
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // 2. Validação do Quiz
    const quizForm = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede a página de recarregar

        const resposta = quizForm.elements["q1"].value;

        if (!resposta) {
            resultDiv.textContent = "Por favor, selecione uma resposta antes de enviar!";
            resultDiv.style.color = "orange";
            return;
        }

        if (resposta === "certo") {
            resultDiv.textContent = "Correto! Sempre cheque as informações, as IAs estão cada vez mais realistas.";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "Incorreto. Cuidado! Vídeos gerados por IA podem enganar facilmente.";
            resultDiv.style.color = "red";
        }
    });
});
