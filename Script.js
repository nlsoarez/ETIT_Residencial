const metas = {
    "Móvel": { "ETIT": 80, "Assertividade": 85, "DPA": 90 },
    "Empresarial": { "ETIT": 85, "Assertividade": 85, "DPA": 90 },
    "Residencial": { "ETIT": 85, "Assertividade": 98, "DPA": 90 }
};

const dados = [
    {"Matricula": "F204763", "Nome": "RODRIGO REIS DUARTE", "Setor": "Móvel", "ETIT": "98%", "Assertividade": "96%", "DPA": "92,76%"},
    {"Matricula": "N6104793", "Nome": "BRUNO MARIANO VILACA", "Setor": "Móvel", "ETIT": "82%", "Assertividade": "98%", "DPA": "84,61%"},
    {"Matricula": "N6071740", "Nome": "THIAGO BARBOZA DOS SANTOS", "Setor": "Móvel", "ETIT": "100%", "Assertividade": "100%", "DPA": "-"},
    {"Matricula": "N6173067", "Nome": "JULIANA RIBEIRO GALHÃO", "Setor": "Móvel", "ETIT": "93%", "Assertividade": "98%", "DPA": "84,20%"},
    {"Matricula": "N6172207", "Nome": "CHARLES DOS SANTOS PAIVA", "Setor": "Móvel", "ETIT": "-", "Assertividade": "-", "DPA": "83,17%"},
    {"Matricula": "N5737414", "Nome": "SANDRO DA SILVA CARVALHO", "Setor": "Residencial", "ETIT": "60%", "Assertividade": "100%", "DPA": "93,53%"},
    {"Matricula": "N5577565", "Nome": "MARISTELLA MARCIA DOS SANTOS", "Setor": "Residencial", "ETIT": "60%", "Assertividade": "100%", "DPA": "85,65%"},
    {"Matricula": "N5972428", "Nome": "CRISTIANE HERMOGENES DA SILVA", "Setor": "Residencial", "ETIT": "56%", "Assertividade": "100%", "DPA": "95,16%"},
    {"Matricula": "N0255801", "Nome": "ELBERTON ANICETO HENRIQUE", "Setor": "Residencial", "ETIT": "58%", "Assertividade": "77%", "DPA": "81,37%"}
];

// Função para converter percentual para número
function parsePercent(value) {
    return value === "-" ? null : parseFloat(value.replace(",", "."));
}

// Função para verificar se atingiu a meta
function verificarMetas(colaborador) {
    const setorMetas = metas[colaborador.Setor];
    if (!setorMetas) return {};
    
    return {
        "ETIT": setorMetas.ETIT ? parsePercent(colaborador.ETIT) >= setorMetas.ETIT : false,
        "Assertividade": setorMetas.Assertividade ? parsePercent(colaborador.Assertividade) >= setorMetas.Assertividade : false,
        "DPA": setorMetas.DPA ? parsePercent(colaborador.DPA) >= setorMetas.DPA : false
    };
}

// Verificando metas de cada colaborador
const resultado = dados.map(colaborador => ({
    ...colaborador,
    "AtingiuMeta": verificarMetas(colaborador)
}));

console.log(resultado);
