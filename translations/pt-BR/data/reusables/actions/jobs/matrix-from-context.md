Você pode usar contextos para criar matrizes. Para obter mais informações sobre os contextos, consulte "[Contextos](/actions/learn-github-actions/contexts)".

Por exemplo, os seguintes gatilhos de fluxo de trabalho no evento `repository_dispatch` e usa informações da carga do evento para criar a matriz. Quando um evento de envio de repositório é criado com uma carga como a abaixo, a variável `versão` da matriz terá um valor de `[12, 14, 16]`. Para obter mais informações sobre o gatilho `repository_dispatch`, consulte "[Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch)".

```json
{
  "event_type": "test",
  "client_payload": {
    "versions": [12, 14, 16]
  }
}
```

```yaml
on:
  repository_dispatch:
    types:
      - test

jobs:
  example_matrix:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        version: {% raw %}${{ github.event.client_payload.versions }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
