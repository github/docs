---
title: Criar e testar .NET
intro: Você pode criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto .NET.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

### Introdução

Este guia mostra como criar, testar e publicar um pacote no .NET.

Os executores hospedados em {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com software pré-instalado, que inclui o .NET Core SDK. Para uma lista completa de software atualizado e as versões pré-instaladas do .NET Core SDK, consulte [o software instalado nos executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners).

### Pré-requisitos

Você já deve estar familiarizado com a sintaxe YAML e como é usado com {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

Recomendamos que você tenha um entendimento básico do .NET Core SDK. Para obter mais informações, consulte [Primeiros passos com o .NET](https://dotnet.microsoft.com/learn).

### Começando com o modelo do fluxo de trabalho do .NET

{% data variables.product.prodname_dotcom %} fornece um modelo de fluxo de trabalho do .NET que deve funcionar para a maioria dos projetos .NET e este guia inclui exemplos que mostram como personalizar este modelo. Para obter mais informações, consulte o [modelo do fluxo de trabalho do .NET](https://github.com/actions/setup-dotnet).

Para iniciar rapidamente, adicione o modelo ao diretório `.github/workflows` do repositório.

{% raw %}
```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '2.2.103', '3.0', '3.1.x' ]

    steps:
    - uses: actions/checkout@v2
    - name: Setup .NET Core SDK ${{ matrix.dotnet }}
      uses: actions/setup-dotnet@v1.6.0
      with:
        dotnet-version: {{ matrix.dotnet-version }}
    - name: Install dependencies
      run: dotnet restore
    - name: Build
      run: dotnet build --configuration Release --no-restore
    - name: Test
      run: dotnet test --no-restore --verbosity normal
```
{% endraw %}

### Especificando uma versão do .NET

Para usar uma versão pré-instalada do .NET Core SDK em um executor hospedado em {% data variables.product.prodname_dotcom %}, use a ação `setup-dotnet`. Esta ação encontra uma versão específica do .NET do cache de ferramentas em cada executor e adiciona os binários necessários para `PATH`. Estas alterações persistirão para o resto do trabalho.

A ação `setup-dotnet` é a forma recomendada de usar .NET com {% data variables.product.prodname_actions %}, porque garante um comportamento consistente em executores diferentes e versões diferentes do .NET. Se você estiver usando um executor auto-hospedado, você deverá instalar o .NET e adicioná-lo ao `PATH`. Para obter mais informações, consulte a [`configuração-dotnet`](https://github.com/marketplace/actions/setup-dotnet).

#### Usar múltiplas versões do .NET

{% raw %}
```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet: [ '2.2.103', '3.0', '3.1.x' ]

    steps:
    - uses: actions/checkout@v2
    - name: Setup dotnet ${{ matrix.dotnet-version }}
      uses: actions/setup-dotnet@v1.6.0
      with:
        dotnet-version: ${{ matrix.dotnet-version }}
    # You can test your matrix by printing the current dotnet version
    - name: Display dotnet version
      run: dotnet --version
```
{% endraw %}

#### Usar uma versão específica do .NET

Você pode configurar o seu trabalho para usar uma versão específica do .NET, como `3.1.3`. Como alternativa, você pode usar a sintaxe da versão semântica para obter a última versão secundária. Este exemplo usa a versão mais recente do .NET 3.

{% raw %}
```yaml
    - name: Setup .NET 3.x
      uses: actions/setup-dotnet@v2
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x' 
```
{% endraw %}

### Instalar dependências

Os executores hospedados em {% data variables.product.prodname_dotcom %} têm o gerenciador do pacote NuGet instalado. Você pode usar o dotnet CLI para instalar dependências do registro do pacote NuGet antes de criar e testar seu código. Por exemplo, o YAML abaixo instala o pacote `Newtonsoft`.

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.6.0
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```
{% endraw %}

{% if currentVersion == "free-pro-team@latest" %}

#### Memorizar dependências

Você pode armazenar em cache dependências do NuGet usando uma chave única, o que lhe permite restaurar as dependências para futuros fluxos de trabalho com a ação [`cache`](https://github.com/marketplace/actions/cache). Por exemplo, o YAML abaixo instala o pacote `Newtonsoft`.

Para obter mais informações, consulte "[Memorizar dependências para acelerar fluxos de trabalho](/actions/guides/caching-dependencies-to-speed-up-workflows)".

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.6.0
  with:
    dotnet-version: '3.1.x'
- uses: actions/cache@v2
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: ${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```
{% endraw %}

{% note %}

**Observação:** Dependendo do número de dependências, pode ser mais rápido para usar o armazenamento de dependências. Os projetos com muitas dependências grandes devem ver um aumento no desempenho conforme reduz o tempo necessário para fazer o download. Os projetos com menos dependências podem não ver um aumento significativo no desempenho e até mesmo ver um ligeiro diminuir devido à forma como o NuGet instala dependências armazenadas em cache. O desempenho varia de projeto para projeto.

{% endnote %}

{% endif %}

### Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código. Este exemplo demonstra como usar a `dotnet build` e o `dotnet test` em um trabalho:

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Setup dotnet
  uses: actions/setup-dotnet@v1.6.0
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```
{% endraw %}

### Empacotar dados do fluxo de trabalho como artefatos

Após a conclusão de um fluxo de trabalho, você poderá fazer o upload dos artefatos resultantes para análise. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. O exemplo a seguir demonstra como você pode usar a ação `upload-artefato` para fazer o upload de resultados de testes.

Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

{% raw %}
```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '2.2.103', '3.0', '3.1.x' ]

      steps:
      - uses: actions/checkout@v2
      - name: Setup dotnet
        uses: actions/setup-dotnet@v1.6.0
        with:
          dotnet-version: ${{ matrix.dotnet-version }}
      - name: Install dependencies
        run: dotnet restore
      - name: Test with dotnet
        run: dotnet test --logger trx --results-directory "TestResults-${{ matrix.dotnet-version }}"
      - name: Upload dotnet test results
        uses: actions/upload-artifact@v2
        with:
          name: dotnet-results-${{ matrix.dotnet-version }}
          path: TestResults-${{ matrix.dotnet-version }}
        # Use always() to always run this step to publish test results when there are test failures
        if: ${{ always() }}
```
{% endraw %}

### Publicar nos registros do pacote

É possível configurar o seu fluxo de trabalho para publicar o pacote Dotnet em um pacote de registro quando o CI teste passa. Você pode usar segredos do repositório para armazenar quaisquer tokens ou credenciais necessárias para publicar seu binário. O exemplo a seguir cria e publica um pacote em {% data variables.product.prodname_registry %} usando `dotnet core cli`.

{% raw %}
```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-dotnet@v1
    with:
        dotnet-version: '3.1.x' # SDK Version to use.
        source-url: https://nuget.pkg.github.com/<owner>/index.json
    env:
        NUGET_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
    - run: dotnet build <my project>
    - name: Create the package
    run: dotnet pack --configuration Release <my project>
    - name: Publish the package to GPR
    run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
{% endraw %}
