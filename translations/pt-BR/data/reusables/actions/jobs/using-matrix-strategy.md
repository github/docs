Use `jobs.<job_id>.strategy.matrix` para definir uma matriz de diferentes configurações de trabalho. Dentro da sua matriz, defina uma ou mais variáveis seguidas por uma matriz de valores. Por exemplo, a seguinte matriz tem uma variável denominada `versão` com o valor `[10, 12, 14]` e uma variável denominada `os` com o valor `[ubuntu-latest, windows-latest]`:

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

Um trabalho será executado para cada combinação das variáveis possível. Neste exemplo, o fluxo de trabalho irá executar seis trabalhos, um para cada combinação das variáveis `os` e `versão`.

Por padrão, {% data variables.product.product_name %} maximizará o número de trabalhos executados em paralelo dependendo da disponibilidade do executor. A ordem das variáveis na matriz determina a ordem em que os trabalhos são criados. A primeira variável que você definir será o primeiro trabalho criado na execução do fluxo de trabalho. Por exemplo, a matriz acima irá criar os trabalhos na seguinte ordem:

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

Uma matriz gerará no máximo 256 trabalhos por execução do fluxo de trabalho. Este limite aplica-se tanto a executores hospedados em {% data variables.product.product_name %} quanto a executores auto-hospedados.

As variáveis que você define tornam-se propriedades no contexto da `matriz` e você pode fazer referência à propriedade em outras áreas do seu arquivo de fluxo de trabalho. Neste exemplo, você pode usar a `matriz.version` e `matrix.os` para acessar o valor atual de `versão` e `os` que o trabalho está usando. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)".
