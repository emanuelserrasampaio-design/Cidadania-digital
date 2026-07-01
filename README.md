<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cidadania Digital e IA</title>
    <style>
        /* ==========================================================================
           🎨 ESTILIZAÇÃO E DESIGN (CSS3) - Inclui Flexbox e Variáveis de Cor
           ========================================================================== */
        :root {
            --bg-color: #f4f7f6;
            --text-color: #333333;
            --card-bg: #ffffff;
            --primary-color: #007bff;
            --footer-bg: #222222;
            --footer-text: #ffffff;
        }

        /* Classe controlada pelo JavaScript para o Modo Escuro */
        body.dark-mode {
            --bg-color: #1e1e1e;
            --text-color: #f4f7f6;
            --card-bg: #2d2d2d;
            --primary-color: #375a7f;
            --footer-bg: #111111;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            transition: background-color 0.3s, color 0.3s;
        }

        /* Header com Flexbox */
        header {
            background-color: var(--primary-color);
            color: white;
            padding: 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        header button {
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: var(--card-bg);
            color: var(--text-color);
            font-weight: bold;
            transition: transform 0.1s;
        }

        header button:active {
            transform: scale(0.98);
        }

        /* Main com Flexbox (Alinhamento Vertical por padrão - Telemóveis) */
        main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            gap: 20px;
        }

        /* Cartões de Conteúdo */
        .card {
            background-color: var(--card-bg);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            max-width: 600px;
            width: 100%;
            box-sizing: border-box;
        }

        .question {
            margin-bottom: 20px;
        }

        button[type="submit"] {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }

        .result-message {
            margin-top: 15px;
            font-weight: bold;
        }

        /* Rodapé */
        footer {
            background-color: var(--footer-bg);
            color: var(--footer-text);
            text-align: center;
            padding: 15px;
            font-size: 0.9rem;
        }

        /* --- RESPONSIVIDADE (Media Query para Computadores/Telas Maiores) --- */
        @media (min-width: 768px) {
            main {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
            }
            .card {
                width: 45%;
                min-height: 220px;
            }
            .form-section {
                width: 93%; /* O quiz ganha destaque na linha de baixo */
            }
        }
    </style>
</head>
<body>

    <header>
        <h1>Cidadania Digital &amp; Inteligência Artificial</h1>
        <p>Desmistificando as Deepfakes e a Desinformação</p>
        <button id="toggle-dark-mode">Alternar Modo Escuro</button>
    </header>

    <main>
        <section class="card">
            <h2>O que são Deepfakes?</h2>
            <p>Deepfakes são vídeos, áudios ou imagens gerados por Inteligência Artificial que imitam a aparência e a voz de pessoas reais de forma muito convincente. Embora a tecnologia tenha usos legítimos no cinema, ela frequentemente é usada para espalhar desinformação e criar notícias falsas.</p>
        </section>

        <section class="card">
            <h2>Como identificar a Desinformação?</h2>
            <ul>
                <li><strong>Preste atenção aos detalhes:</strong> Piscares de olhos não naturais, falhas na iluminação ou áudio dessincronizado.</li>
                <li><strong>Verifique a fonte:</strong> O site ou perfil que compartilhou é confiável?</li>
                <li><strong>Cruze informações:</strong> Procure a mesma notícia em veículos de comunicação conhecidos.</li>
            </ul>
        </section>

        <section class="card form-section">
            <h2>Quiz da Verdade: É Fake ou Fato?</h2>
            <form id="quiz-form">
                <div class="question">
                    <p>1. Se um vídeo de uma pessoa famosa parece real, posso compartilhar sem checar?</p>
                    <label><input type="radio" name="q1" value="errado"> Sim, se parece real deve ser verdade.</label><br><br>
                    <label><input type="radio" name="q1" value="certo"> Não, tecnologias de IA criam vídeos falsos idênticos aos reais.</label>
                </div>
                <button type="submit">Enviar Resposta</button>
            </form>
            <div id="quiz-result" class="result-message"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - Projeto de Educação Digital e IA. Desenvolvido para fins educacionais.</p>
    </footer>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // 1. Funcionalidade do Modo Escuro
            const toggleButton = document.getElementById("toggle-dark-mode");
            toggleButton.addEventListener("click", () => {
                document.body.classList.toggle("dark-mode");
            });

            // 2. Validação do Quiz Interativo (Manipulação do DOM)
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
    </script>
</body>
</html>
