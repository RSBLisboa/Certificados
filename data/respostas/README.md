# data/respostas/

Esta pasta é alimentada por um **flow do Power Automate** disparado pelo Microsoft Forms da apreciação.

## Schema esperado

Um ficheiro JSON por inscrito que respondeu, com o ID como nome:

```
data/respostas/27.json
data/respostas/31.json
...
```

Cada ficheiro tem este formato:

```json
{
  "idInscricao": 27,
  "respondidoEm": "2026-05-18T13:15:42",
  "respostaId": "1234"
}
```

## Power Automate flow (a configurar pelo utilizador)

1. **Trigger**: Microsoft Forms · *When a new response is submitted*
2. **Action 1**: Microsoft Forms · *Get response details*
3. **Action 2**: HTTP · `PUT https://api.github.com/repos/RSBLisboa/Certificados/contents/data/respostas/{id}.json`
   - Headers:
     - `Authorization: Bearer <PAT>`
     - `Accept: application/vnd.github+json`
   - Body:
     ```json
     {
       "message": "Resposta MS Forms · id @{questao_id}",
       "content": "@{base64('{\"idInscricao\":@{questao_id},\"respondidoEm\":\"@{utcNow()}\",\"respostaId\":\"@{triggerBody()?['responseId']}\"}')}",
       "branch": "main"
     }
     ```

Quando este ficheiro existe para um inscrito, a `p.html` transita o estado de `aguarda-questionario` para `em-processamento`.
