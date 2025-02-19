const cidades = {
    "ITAJUBÁ": {
        tecnologia: "GPON RESIDENCIAL REC RAL",
        parceiro: "HABLE",
        contatos: [
            { nome: "SEBASTIAO CARLOS DA SILVA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98462-8006" },
            { nome: "GERALDO NETO DA SILVA NETO", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98472-4808" },
            { nome: "RODRIGO ROLIM LUCINDA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98407-4156" },
            { nome: "WLADIMIR EUSTAQUIO", cargo: "COORDENADOR TÉCNICO II", telefone: "031-98205-4986" },
            { nome: "DIOGO BORBA", cargo: "GERENTE TÉCNICO", telefone: "031-98445-5190" },
            { nome: "HERMES HOFMANN", cargo: "GERENTE TÉCNICO", telefone: "031-98205-4837" }
        ]
    },
    "PASSOS MG": {
        tecnologia: "GPON RESIDENCIAL REC RAL",
        parceiro: "CARSO",
        contatos: [
            { nome: "GERALDO NETO DA SILVA NETO", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98472-4808" },
            { nome: "SEBASTIAO CARLOS DA SILVA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98462-8006" },
            { nome: "RODRIGO ROLIM LUCINDA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98407-4156" },
            { nome: "WLADIMIR EUSTAQUIO", cargo: "COORDENADOR TÉCNICO II", telefone: "031-98205-4986" },
            { nome: "DIOGO BORBA", cargo: "GERENTE TÉCNICO", telefone: "031-98445-5190" },
            { nome: "HERMES HOFMANN", cargo: "GERENTE TÉCNICO", telefone: "031-98205-4837" }
        ]
    },
    "POÇOS DE CALDAS MG": {
        tecnologia: "GPON RESIDENCIAL REC RAL",
        parceiro: "HABLE",
        contatos: [
            { nome: "GERALDO NETO DA SILVA NETO", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98472-4808" },
            { nome: "SEBASTIAO CARLOS DA SILVA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98462-8006" },
            { nome: "RODRIGO ROLIM LUCINDA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98407-4156" },
            { nome: "WLADIMIR EUSTAQUIO", cargo: "COORDENADOR TÉCNICO II", telefone: "031-98205-4986" },
            { nome: "DIOGO BORBA", cargo: "GERENTE TÉCNICO", telefone: "031-98445-5190" },
            { nome: "HERMES HOFMANN", cargo: "GERENTE TÉCNICO", telefone: "031-98205-4837" }
        ]
    },
    "POUSO ALEGRE - MG": {
        tecnologia: "GPON RESIDENCIAL REC RAL",
        parceiro: "HABLE",
        contatos: [
            { nome: "SEBASTIAO CARLOS DA SILVA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98462-8006" },
            { nome: "GERALDO NETO DA SILVA NETO", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98472-4808" },
            { nome: "RODRIGO ROLIM LUCINDA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98407-4156" },
            { nome: "WLADIMIR EUSTAQUIO", cargo: "COORDENADOR TÉCNICO II", telefone: "031-98205-4986" },
            { nome: "DIOGO BORBA", cargo: "GERENTE TÉCNICO", telefone: "031-98445-5190" },
            { nome: "HERMES HOFMANN", cargo: "GERENTE TÉCNICO", telefone: "031-98205-4837" }
        ]
    }
};

document.getElementById("buscarBtn").addEventListener("click", buscarCidade);

function buscarCidade() {
    const input = document.getElementById("cidadeInput").value.toUpperCase();
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    
    if (cidades[input]) {
        const cidade = cidades[input];
        let info = `<h3>${input}</h3>`;
        info += `<p><strong>Tecnologia:</strong> ${cidade.tecnologia}</p>`;
        info += `<p><strong>Parceiro:</strong> ${cidade.parceiro}</p>`;
        info += `<p><strong>Contatos:</strong></p><ul>`;
        cidade.contatos.forEach(contato => {
            info += `<li>${contato.nome} - ${contato.cargo} - ${contato.telefone}</li>`;
        });
        info += "</ul>";
        resultadoDiv.innerHTML = info;
    } else {
        resultadoDiv.innerHTML = "<p>Cidade não encontrada.</p>";
    }
}
