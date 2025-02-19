const employees = [
    { Matricula: "12345", Nome: "ROMULO BARBOSA NICOLAE", Setor: "Empresarial", ETIT: "53%", Assertividade: "-", DPA: "69.47%" },
    { Matricula: "67890", Nome: "JOÃO SILVA", Setor: "Residencial", ETIT: "90%", Assertividade: "99%", DPA: "92%" },
    { Matricula: "11223", Nome: "MARIA OLIVEIRA", Setor: "Móvel", ETIT: "85%", Assertividade: "86%", DPA: "91%" }
];

function definirMeta(setor, tipo) {
    const metas = {
        "ETIT Móvel": 80,
        "ETIT Residencial e Empresarial": 85,
        "Assertividade Móvel": 85,
        "Assertividade Residencial": 98,
        "DPA": 90
    };

    if (tipo === "ETIT") {
        return setor === "Móvel" ? metas["ETIT Móvel"] : metas["ETIT Residencial e Empresarial"];
    }
    if (tipo === "Assertividade") {
        return setor === "Móvel" ? metas["Assertividade Móvel"] : metas["Assertividade Residencial"];
    }
    return metas["DPA"];
}

function considerarDentroMeta(valor, setor, tipo) {
    if (valor === "-" || valor === "Não informado") {
        return true; 
    }

    const valorNumerico = parseFloat(valor.replace("%", ""));
    return valorNumerico >= definirMeta(setor, tipo);
}

function formatarValor(valor, setor, tipo) {
    if (valor === "-" || valor === "Não informado") {
        return "-";
    }

    const valorNumerico = parseFloat(valor.replace("%", ""));
    const dentroDaMeta = valorNumerico >= definirMeta(setor, tipo);
    return dentroDaMeta ? `<span style="color: green;">${valor}</span>` : `<span style="color: red;">${valor}</span>`;
}

function consultar() {
    const matriculaInput = document.getElementById("matricula").value.trim().toUpperCase();
    const resultadoDiv = document.getElementById("resultado");

    if (!matriculaInput) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, digite uma matrícula.</p>";
        return;
    }

    const empregado = employees.find(emp => emp.Matricula === matriculaInput);

    if (empregado) {
        const etitOk = considerarDentroMeta(empregado.ETIT, empregado.Setor, "ETIT");
        const assertividadeOk = considerarDentroMeta(empregado.Assertividade, empregado.Setor, "Assertividade");
        const dpaOk = considerarDentroMeta(empregado.DPA, empregado.Setor, "DPA");

        const certificacaoMsg = etitOk && assertividadeOk && dpaOk ? 
            `<p style="color: green; font-weight: bold;">Você está certificando ✅</p>` : 
            `<p style="color: red; font-weight: bold;">Você não está certificando ❌</p>`;

        resultadoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${empregado.Nome}</p>
            <p><strong>Setor:</strong> ${empregado.Setor}</p>
            <p><strong>ETIT:</strong> ${formatarValor(empregado.ETIT, empregado.Setor, "ETIT")}</p>
            <p><strong>Assertividade:</strong> ${formatarValor(empregado.Assertividade, empregado.Setor, "Assertividade")}</p>
            <p><strong>DPA:</strong> ${formatarValor(empregado.DPA, empregado.Setor, "DPA")}</p>
            ${certificacaoMsg}
        `;
    } else {
        resultadoDiv.innerHTML = "<p style='color: red;'>Matrícula não encontrada.</p>";
    }
}
