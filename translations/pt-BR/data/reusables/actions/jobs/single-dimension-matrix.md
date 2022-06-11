Você pode especificar uma variável única para criar uma matriz de dimensão única.

Por exemplo, o fluxo de trabalho a seguir define a variável `versão` com os valores `[10, 12, 14]`. O fluxo de trabalho irá executar três trabalhos, um por cada valor na variável. Cada trabalho terá acesso ao valor `versão` através do contexto da `matrix.version` e passar o valor como `node-version` para a ação `actions/setup-node`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
