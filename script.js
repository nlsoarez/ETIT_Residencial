<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta de Cidades - Claro</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 90%;
            max-width: 400px;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 40px auto;
        }
        img {
            width: 120px;
            margin-bottom: 15px;
        }
        h1 {
            font-size: 22px;
            color: #333;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
        button {
            width: 100%;
            padding: 12px;
            background: red;
            color: white;
            border: none;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }
        button:hover {
            background: darkred;
        }
        .resultado {
            text-align: left;
            margin-top: 20px;
            padding: 10px;
            border-top: 2px solid #ccc;
        }
        .resultado h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }
        .resultado p {
            font-size: 16px;
            margin: 5px 0;
        }
        .bold {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="claro_logo.png" alt="Claro">
        <h1>Consulta de Cidades</h1>
        <input type="text" id="cidade" placeholder="Digite o nome da cidade" onkeypress="if(event.key === 'Enter') consultarCidade()">
        <button onclick="consultarCidade()">Consultar</button>
        <div id="resultado" class="resultado"></div>
    </div>

    <script>
        function consultarCidade() {
            var cidade = document.getElementById("cidade").value.trim();
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            
            if (cidade === "") {
                resultado.innerHTML = "<p style='color: red;'>Por favor, digite uma cidade válida.</p>";
                return;
            }
            
            var dados = {
                "Passos MG": {
                    tipo: "GPON RESIDENCIAL REC RAL",
                    empresa: "CARSO",
                    contatos: [
                        { nome: "Geraldo Neto da Silva Neto", cargo: "Supervisor Técnico", telefone: "035-98472-4808" },
                        { nome: "Sebastião Carlos da Silva", cargo: "Supervisor Técnico", telefone: "035-98462-8006" },
                        { nome: "Rodrigo Rolim Lucinda", cargo: "Supervisor Técnico", telefone: "035-98407-4156" },
                        { nome: "Wladimir Eustáquio", cargo: "Coordenador Técnico II", telefone: "031-98205-4986" },
                        { nome: "Diogo Borba", cargo: "Gerente Técnico", telefone: "031-98445-5190" },
                        { nome: "Hermes Hofmann", cargo: "Gerente Técnico", telefone: "031-98205-4837" }
                    ]
                }
                // Adicione mais cidades aqui
            };
            
            if (dados[cidade]) {
                var info = dados[cidade];
                resultado.innerHTML = `
                    <h2>${cidade.toUpperCase()}</h2>
                    <p><span class="bold">Tipo:</span> ${info.tipo}</p>
                    <p><span class="bold">Empresa:</span> ${info.empresa}</p>
                    <ul>
                        ${info.contatos.map(c => `<li><span class="bold">${c.nome}</span> - ${c.cargo} - ${c.telefone}</li>`).join('')}
                    </ul>
                `;
            } else {
                resultado.innerHTML = "<p style='color: red;'>Cidade não encontrada.</p>";
            }
        }
    </script>
</body>
</html>
