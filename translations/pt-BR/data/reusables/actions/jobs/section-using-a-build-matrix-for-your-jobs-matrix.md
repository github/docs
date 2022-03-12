
Use `jobs.<job_id>.strategy.matrix` para definir uma matriz de diferentes configurações de trabalho. Uma matriz permite que você crie vários trabalhos que realizam a substituição de variável em uma definição de trabalho único. Por exemplo, você pode usar uma matriz para criar trabalhos para mais de uma versão compatível de uma linguagem de programação, sistema operacional ou ferramenta. Uma matriz reutiliza a configuração do trabalho e cria trabalho para cada matriz que você configurar.

{% data reusables.actions.usage-matrix-limits %}

Cada opção que você define na `matriz` tem uma chave e um valor. As chaves que você define tornam-se propriedades no contexto da `matriz` e você pode fazer referência à propriedade em outras áreas do seu arquivo de fluxo de trabalho. Por exemplo, se você definir a chave `os` que contém um array de sistemas operacionais, você poderá usar a propriedade `matrix.os` como o valor da palavra-chave `runs-on` para criar um trabalho para cada sistema operacional. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts)".

A ordem que você define uma `matriz` importa. A primeira opção que você definir será a primeira que será executada no seu fluxo de trabalho.

#### Exemplo: Executando várias versões do Node.js

Você pode especificar uma matriz ao fornecer um array para as opções de configuração. Por exemplo, se o executor for compatível com as versões 10, 12 e 14 do Node.js, você poderá especificar uma matriz dessas versões na `matriz`.

Este exemplo cria uma matriz de três trabalhos, definindo a chave `nó` para um array de três versões do Node.js. Para usar a matriz, o exemplo define a propriedade do contexto `matrix.node` como o valor do parâmetro `setup-node` de entrada da ação `node-version`. Como resultado, três trabalhos serão executados, cada uma usando uma versão diferente do Node.js.

{% raw %}
```yaml
strategy:
  matrix:
    node: [10, 12, 14]
steps:
  # Configures the node version used on GitHub-hosted runners
  - uses: actions/setup-node@v2
    with:
      # The Node.js version to configure
      node-version: ${{ matrix.node }}
```
{% endraw %}

A ação setup-node `` é a forma recomendada de configurar uma versão do Node.js ao usar executores hospedados em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte a ação [`setup-node`](https://github.com/actions/setup-node).

#### Exemplo: Executando com vários sistemas operacionais

Você pode criar uma matriz para executar fluxos de trabalho em mais de um sistema operacional do executor. Você também pode especificar mais de uma configuração da matriz. Este exemplo cria uma matriz de 6 trabalhos:

- 2 sistemas operacionais especificados na array `os`
- 3 versões do Node.js especificadas na array do `nó`

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-18.04, ubuntu-20.04]
    node: [10, 12, 14]
steps:
  - uses: actions/setup-node@v2
    with:
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% ifversion ghae %}
Para obter mais informações sobre a configuração de executores auto-hospedados, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."
{% else %}Para encontrar opções de configuração compatíveis com executores hospedados em {% data variables.product.prodname_dotcom %}, consulte "[Ambientes virtuais para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."
{% endif %}

#### Exemplo: Incluindo valores adicionais em combinações

Você pode adicionar opções de configurações para um trabalho de matriz de compilação existente. Por exemplo, se você quer usar uma versão específica do `npm` quando o trabalho que usa o `windows-latest` e a versão 8 do `nó` é executado, você pode usar `incluir` para especificar a opção adicional.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    include:
      # includes a new variable of npm with a value of 6
      # for the matrix leg matching the os and version
      - os: windows-latest
        node: 8
        npm: 6
```
{% endraw %}

#### Exemplo: Incluindo novas combinações

Você pode usar `incluir` para adicionar novos trabalhos a uma matriz de criação. Qualquer configuração sem correspondência de incluir será adicionadas à matriz. Por exemplo, se você quiser usar a versão 14 do `nó` para compilar em vários sistemas operacionais, mas quiser uma tarefa experimental extra a versão 15 do nó no Ubuntu, você poderá usar `incluir` para especificar essa tarefa adicional.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [14]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

#### Exemplo: Excluindo configurações de uma matriz

Você pode remover uma configuração específica definida na matriz de compilação usando a opção `exclude` (excluir). `exclude` remove um trabalho definido pela matriz de compilação. O número de trabalhos é o produto cruzado do número de sistemas operacionais (`os`) incluídos nos arrays fornecidos por você, menos quaisquer subtrações (`exclude`).

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    exclude:
      # excludes node 8 on macOS
      - os: macos-latest
        node: 8
```
{% endraw %}

{% note %}

**Observação:** Todas as combinações de `incluir` são processadas depois de `excluir`. Isso permite que você use `incluir` para voltar a adicionar combinações que foram excluídas anteriormente.

{% endnote %}

### Usando variáveis de ambiente em uma matriz

Você pode adicionar variáveis de ambiente personalizadas para cada combinação de testes usando a chave `include`. Em seguida, você pode se referir às variáveis de ambiente personalizadas em um passo posterior.

{% data reusables.actions.matrix-variable-example %}
