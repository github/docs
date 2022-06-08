Você pode especificar diversas variáveis para criar uma matriz multidimensional. Um trabalho será executado para cada combinação das variáveis possível.

Por exemplo, o fluxo de trabalho a seguir especifica duas variáveis:

- Dois sistemas operacionais especificados na variável `os`
- Três versões do Node.js especificadas na variável `versão`

O fluxo de trabalho irá executar seis trabalhos, um para cada combinação das variáveis `os` e `versão`. Cada trabalho irá definir o valor `runs-on` para o valor atual de `os` e vai passar o valor atual de `versão` para a ação `actions/setup-node`.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-18.04, ubuntu-20.04]
        version: [10, 12, 14]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
