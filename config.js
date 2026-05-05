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
    URL_VALIDACAO: "https://rsblisboa.github.io/Certificados/validar.html"
};
