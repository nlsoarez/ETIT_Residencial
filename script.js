document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("cidadeInput");
    const button = document.getElementById("buscarBtn");
    const resultado = document.getElementById("resultado");

    button.addEventListener("click", buscarCidade);
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            buscarCidade();
        }
    });

    function buscarCidade() {
        const cidades = {
            "ITAJUBÁ": { tipo: "GPON RESIDENCIAL REC RAL", empresa: "HABLE", contatos: [
                { nome: "SEBASTIAO CARLOS DA SILVA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98462-8006" },
                { nome: "GERALDO NETO DA SILVA NETO", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98472-4808" },
                { nome: "RODRIGO ROLIM LUCINDA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98407-4156" },
                { nome: "WLADIMIR EUSTAQUIO", cargo: "COORDENADOR TÉCNICO II", telefone: "031-98205-4986" },
                { nome: "DIOGO BORBA", cargo: "GERENTE TÉCNICO", telefone: "031-98445-5190" },
                { nome: "HERMES HOFMANN", cargo: "GERENTE TÉCNICO", telefone: "031-98205-4837" }
            ]},
            "PASSOS MG": { tipo: "GPON RESIDENCIAL REC RAL", empresa: "CARSO", contatos: [
                { nome: "GERALDO NETO DA SILVA NETO", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98472-4808" },
                { nome: "SEBASTIAO CARLOS DA SILVA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98462-8006" },
                { nome: "RODRIGO ROLIM LUCINDA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98407-4156" },
                { nome: "WLADIMIR EUSTAQUIO", cargo: "COORDENADOR TÉCNICO II", telefone: "031-98205-4986" },
                { nome: "DIOGO BORBA", cargo: "GERENTE TÉCNICO", telefone: "031-98445-5190" },
                { nome: "HERMES HOFMANN", cargo: "GERENTE TÉCNICO", telefone: "031-98205-4837" }
            ]},
            "POÇOS DE CALDAS MG": { tipo: "GPON RESIDENCIAL REC RAL", empresa: "HABLE", contatos: [
                { nome: "GERALDO NETO DA SILVA NETO", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98472-4808" },
                { nome: "SEBASTIAO CARLOS DA SILVA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98462-8006" },
                { nome: "RODRIGO ROLIM LUCINDA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98407-4156" },
                { nome: "WLADIMIR EUSTAQUIO", cargo: "COORDENADOR TÉCNICO II", telefone: "031-98205-4986" },
                { nome: "DIOGO BORBA", cargo: "GERENTE TÉCNICO", telefone: "031-98445-5190" },
                { nome: "HERMES HOFMANN", cargo: "GERENTE TÉCNICO", telefone: "031-98205-4837" }
            ]},
            "POUSO ALEGRE - MG": { tipo: "GPON RESIDENCIAL REC RAL", empresa: "HABLE", contatos: [
                { nome: "SEBASTIAO CARLOS DA SILVA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98462-8006" },
                { nome: "GERALDO NETO DA SILVA NETO", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98472-4808" },
                { nome: "RODRIGO ROLIM LUCINDA", cargo: "SUPERVISOR TÉCNICO", telefone: "035-98407-4156" },
                { nome: "WLADIMIR EUSTAQUIO", cargo: "COORDENADOR TÉCNICO II", telefone: "031-98205-4986" },
                { nome: "DIOGO BORBA", cargo: "GERENTE TÉCNICO", telefone: "031-98445-5190" },
                { nome: "HERMES HOFMANN", cargo: "GERENTE TÉCNICO", telefone: "031-98205-4837" }
            ]}
        };

        const cidade = input.value.toUpperCase();
        if (cidades[cidade]) {
            const data = cidades[cidade];
            let html = `<h2>${cidade}</h2><p><strong>Tipo:</strong> ${data.tipo}</p><p><strong>Empresa:</strong> ${data.empresa}</p><ul>`;
            data.contatos.forEach(contato => {
                html += `<li><strong>${contato.nome}</strong> - ${contato.cargo} - ${contato.telefone}</li>`;
            });
            html += "</ul>";
            resultado.innerHTML = html;
        } else {
            resultado.innerHTML = "<p>Cidade não encontrada.</p>";
        }
    }
});
