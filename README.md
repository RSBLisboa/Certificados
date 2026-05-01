# Certificados RSB Lisboa

Sistema de emissão e validação de certificados de participação para sessões técnicas do **Regimento de Sapadores Bombeiros de Lisboa**.

Página alojada em GitHub Pages → o Access gera links únicos por participante e envia por email via Outlook. O destinatário clica no link, vê o certificado renderizado no browser, e pode guardá-lo em PDF ou imprimi-lo.

---

## Como funciona

1. **Access** mantém a tabela de participantes (Nome, Cargo, Email, Nº Certificado, etc.)
2. Para cada participante, o Access:
   - Calcula um **hash SHA-256** dos dados + chave secreta (impede edição manual do URL)
   - Constrói o URL: `https://rsblisboa.github.io/Certificados/?n=...&c=...&id=...&v=HASH`
   - Cria e envia o email com o link via **Outlook**
3. O participante abre o link → o JS lê os parâmetros, valida o hash, preenche o certificado e mostra os botões **Guardar PDF** / **Imprimir**

---

## Estrutura do repositório

```
/
├── index.html              ← certificado dinâmico (esta página)
├── assets/
│   ├── rsb-brasao.png
│   ├── lisboa-cml-transparent.png
│   └── barra.png
└── README.md
```

---

## Deploy no GitHub Pages

1. Faz push de todos estes ficheiros para o repositório `https://github.com/RSBLisboa/Certificados`
2. No GitHub: **Settings → Pages**
3. Em **Source**, escolhe `Deploy from a branch`
4. **Branch**: `main` · **Folder**: `/ (root)`
5. Guarda. Em ~1 minuto o site fica disponível em:
   `https://rsblisboa.github.io/Certificados/`

### Verificar deploy

Abre `https://rsblisboa.github.io/Certificados/?preview=1` — deve mostrar o certificado com dados de exemplo.

---

## Parâmetros do URL

| Parâmetro | Descrição | Exemplo |
|---|---|---|
| `n` | **Nome** do participante (obrigatório) | `João Silva` |
| `c` | **Cargo / Posto** | `Bombeiro Sapador` |
| `id` | **Nº do Certificado** (obrigatório) | `2026/0001` |
| `d` | **Data da Sessão** (opcional, sobrepõe o template) | `18 de maio de 2026` |
| `e` | **Data de Emissão** (opcional, default: hoje) | `19 de maio de 2026` |
| `h` | **Carga Horária** (opcional) | `3 horas` |
| `t` | **Título da Sessão** (opcional) | `Substâncias Perigosas` |
| `l` | **Local** (opcional) | `Auditório do Metropolitano de Lisboa` |
| `v` | **Hash de validação** (obrigatório) | primeiros 12 chars do SHA-256 |
| `preview` | Se `=1`, ignora a validação de hash (apenas para teste) | `1` |

Os parâmetros `t`, `d`, `l`, `h` são **fixos no template** — só os indica no URL se forem diferentes para uma sessão específica. Por defeito, são os valores da sessão atual definida no `index.html`.

---

## Configuração da chave secreta

A chave secreta tem de ser a **mesma** em dois sítios:

1. **`index.html`**, linha do topo do `<script>`:
   ```js
   const SECRET = "RSBLisboa-2026-CertificadoSecretKey-MudarEstaChave";
   ```

2. **`Access_VBA.bas`**, módulo do Access:
   ```vb
   Const SECRET As String = "RSBLisboa-2026-CertificadoSecretKey-MudarEstaChave"
   ```

⚠️ **Muda esta chave** antes de pôr em produção! Qualquer pessoa com acesso ao código pode forjar certificados se conhecer o SECRET.

---

## Construção do hash

```
canonical = n + "|" + c + "|" + id + "|" + d + "|" + e + "|" + h + "|" + t + "|" + l + "|" + SECRET
hash = primeiros 12 caracteres do SHA-256(canonical) em hexadecimal
```

Campos opcionais que não estejam no URL são tratados como string vazia. **A ordem é fixa.**

---

## Suporte

Para dúvidas técnicas, ver o ficheiro `Access_VBA.bas` no projeto Access do RSBL.
