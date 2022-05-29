Por exemplo, o fluxo de trabalho a seguir irá executar seis trabalhos, um para cada combinação de `os` e `node`. Quando o valor do trabalho para o `os` de `windows-latest` e o valor `node` de `16` for executado, uma variável adicional chamada `npm` com o valor de `6` será incluída no trabalho.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [windows-latest, ubuntu-latest]
        node: [12, 14, 16]
        include:
          - os: windows-latest
            node: 16
            npm: 6
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - if: {% raw %}${{ matrix.npm }}{% endraw %}
        run: npm install -g npm@{% raw %}${{ matrix.npm }}{% endraw %}
      - run: npm --version
```
