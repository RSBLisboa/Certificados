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
    SECRET: "26gEzbRXW5tGN8wLuKnjMkOq1QePxZrCfhoAiya3",
    ENTIDADE_NOME: "Regimento de Sapadores Bombeiros de Lisboa",
    ENTIDADE_SUPERIOR: "Câmara Municipal de Lisboa",
    URL_VALIDACAO: "https://rsblisboa.github.io/Certificados/validar.html",

    // Endpoint do bridge Apps Script (preencher após Deploy > New deployment > Web app).
    // Usado pela página apreciacao.html para submeter respostas.
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
