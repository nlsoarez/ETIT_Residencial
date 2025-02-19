window.onload = function () {
    document.getElementById("buscarBtn").addEventListener("click", buscarCidade);
};

const cidades = {
    "ITAJUBÁ": {
        "tecnologia": "GPON RESIDENCIAL REC RAL",
        "empresa": "HABLE",
        "contatos": [
            { "nome": "SEBASTIAO CARLOS DA SILVA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98462-8006" },
            { "nome": "GERALDO NETO DA SILVA NETO", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98472-4808" },
            { "nome": "RODRIGO ROLIM LUCINDA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98407-4156" },
            { "nome": "WLADIMIR EUSTAQUIO", "cargo": "COORDENADOR TÉCNICO II", "telefone": "031-98205-4986" },
            { "nome": "DIOGO BORBA", "cargo": "GERENTE TÉCNICO", "telefone": "031-98445-5190" },
            { "nome": "HERMES HOFMANN", "cargo": "GERENTE TÉCNICO", "telefone": "031-98205-4837" }
        ]
    },
    "PASSOS MG": {
        "tecnologia": "GPON RESIDENCIAL REC RAL",
        "empresa": "CARSO",
        "contatos": [
            { "nome": "GERALDO NETO DA SILVA NETO", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98472-4808" },
            { "nome": "SEBASTIAO CARLOS DA SILVA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98462-8006" },
            { "nome": "RODRIGO ROLIM LUCINDA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98407-4156" },
            { "nome": "WLADIMIR EUSTAQUIO", "cargo": "COORDENADOR TÉCNICO II", "telefone": "031-98205-4986" },
            { "nome": "DIOGO BORBA", "cargo": "GERENTE TÉCNICO", "telefone": "031-98445-5190" },
            { "nome": "HERMES HOFMANN", "cargo": "GERENTE TÉCNICO", "telefone": "031-98205-4837" }
        ]
    },
    "POÇOS DE CALDAS MG": {
        "tecnologia": "GPON RESIDENCIAL REC RAL",
        "empresa": "HABLE",
        "contatos": [
            { "nome": "GERALDO NETO DA SILVA NETO", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98472-4808" },
            { "nome": "SEBASTIAO CARLOS DA SILVA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98462-8006" },
            { "nome": "RODRIGO ROLIM LUCINDA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98407-4156" },
            { "nome": "WLADIMIR EUSTAQUIO", "cargo": "COORDENADOR TÉCNICO II", "telefone": "031-98205-4986" },
            { "nome": "DIOGO BORBA", "cargo": "GERENTE TÉCNICO", "telefone": "031-98445-5190" },
            { "nome": "HERMES HOFMANN", "cargo": "GERENTE TÉCNICO", "telefone": "031-98205-4837" }
        ]
    },
    "POUSO ALEGRE -MG": {
        "tecnologia": "GPON RESIDENCIAL REC RAL",
        "empresa": "HABLE",
        "contatos": [
            { "nome": "SEBASTIAO CARLOS DA SILVA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98462-8006" },
            { "nome": "GERALDO NETO DA SILVA NETO", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98472-4808" },
            { "nome": "RODRIGO ROLIM LUCINDA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98407-4156" },
            { "nome": "WLADIMIR EUSTAQUIO", "cargo": "COORDENADOR TÉCNICO II", "telefone": "031-98205-4986" },
            { "nome": "DIOGO BORBA", "cargo": "GERENTE TÉCNICO", "telefone": "031-98445-5190" },
            { "nome": "HERMES HOFMANN", "cargo": "GERENTE TÉCNICO", "telefone": "031-98205-4837" }
        ]
    },
    "VARGINHA": {
        "tecnologia": "GPON RESIDENCIAL REC RAL",
        "empresa": "FFA",
        "contatos": [
            { "nome": "RODRIGO ROLIM LUCINDA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98407-4156" },
            { "nome": "GERALDO NETO DA SILVA NETO", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98472-4808" },
            { "nome": "SEBASTIAO CARLOS DA SILVA", "cargo": "SUPERVISOR TÉCNICO", "telefone": "035-98462-8006" },
            { "nome": "WLADIMIR EUSTAQUIO", "cargo": "COORDENADOR TÉCNICO II", "telefone": "031-98205-4986" },
            { "nome": "DIOGO BORBA", "cargo": "GERENTE TÉCNICO", "telefone": "031-98445-5190" },
            { "nome": "HERMES HOFMANN", "cargo": "GERENTE TÉCNICO", "telefone": "031-98205-4837" }
        ]
    }
};

function buscarCidade() {
    const inputField = document.getElementById("cidadeInput");
    if (!inputField) {
        console.error("Elemento cidadeInput não encontrado!");
        return;
    }

    const input = inputField.value.trim().toUpperCase();
    const resultado = document.getElementById("resultado");

    if (cidades[input]) {
        const cidadeInfo = cidades[input];
        let html = `<h3>${input}</h3>
                    <p><strong>Tecnologia:</strong> ${cidadeInfo.tecnologia}</p>
                    <p><strong>Empresa:</strong> ${cidadeInfo.empresa}</p>
                    <h4>Contatos:</h4>
                    <ul>`;
        cidadeInfo.contatos.forEach(contato => {
            html += `<li>${contato.nome} - ${contato.cargo} - ${contato.telefone}</li>`;
        });
        html += `</ul>`;
        resultado.innerHTML = html;
    } else {
        resultado.innerHTML = "<p>Cidade não encontrada.</p>";
    }
}
