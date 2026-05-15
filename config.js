// ============================================================================
// Configuração pública do site de certificados RSB Lisboa.
//
// ⚠ A SECRET deve ser idêntica em 3 sítios:
//   1. tblConfiguracao.SECRET_HASH (Access — APP/BD/Gestão de Eventos.accdb)
//   2. Sheet "Configuracao" do Excel Online (linha SECRET_HASH)
//   3. Aqui (este ficheiro, commitado ao repo)
//
// Sempre que alterares a SECRET tens de a actualizar nos 3 sítios e fazer push.
// ============================================================================
window.RSBL_CONFIG = {
    SECRET: "iuBmxMkUtiCPd6EUc2gkr+5WhORtU9lecR2cgxshb+Lk4tT2qHcBxm1jEftML8LT",
    ENTIDADE_NOME: "Regimento de Sapadores Bombeiros de Lisboa",
    ENTIDADE_SUPERIOR: "Câmara Municipal de Lisboa",
    URL_VALIDACAO: "https://rsblisboa.github.io/Certificados/validar.html",

    // URL do Microsoft Forms de apreciacao, com placeholders para pre-fill.
    // Placeholders suportados: {id}, {nome}, {cargo}, {entidade}
    // Exemplo: "https://forms.office.com/r/XXXXXXXXXX?r1={nome}&r2={id}"
    // Onde r1, r2 sao os IDs das perguntas no Forms (visiveis no URL de partilha
    // pre-preenchida que o Forms gera ao copiar link com respostas pre-preenchidas).
    MS_FORMS_URL: "",

    // (Deprecated) URL do bridge Apps Script. Mantido para compat se necessario.
    BRIDGE_URL: "",

    // Comandante
    COMANDANTE_NOME: "Alexandre Rodrigues",
    COMANDANTE_PATENTE: "TCor Eng.",

    // Documento mestre da sessão assinado pelo comandante via Cartão de Cidadão.
    // Substitui no formato AAAA-MM-DD HH:MM:SS+01'00' depois do PDF assinado ser
    // adicionado ao repositório em /sessoes/.
    SESSAO_ASSINATURA: {
        data: "",                            // Ex: "2026-05-04 18:00:09+01'00'"
        pdfMestre: ""                        // Ex: "sessoes/2026-05-18-presencas-assinado.pdf"
    }
};
