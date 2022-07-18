---
title: Criar e testar .NET
intro: Você pode criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto .NET.
redirect_from:
  - /actions/guides/building-and-testing-net
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Criar & test .NET
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar, testar e publicar um pacote no .NET.

{% ifversion ghae %} Para criar e testar seu projeto .NET no {% data variables.product.prodname_ghe_managed %}, é necessário o SDK Core do .NET. {% data reusables.actions.self-hosted-runners-software %}
Os executores hospedados em {% else %} {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com software pré-instalado, que inclui o SDK Core do .NET. Para uma lista completa de software atualizado e as versões pré-instaladas do .NET Core SDK, consulte [o software instalado nos executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners).
{% endif %}

## Pré-requisitos

Você já deve estar familiarizado com a sintaxe YAML e como é usado com {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

Recomendamos que você tenha um entendimento básico do .NET Core SDK. Para obter mais informações, consulte [Primeiros passos com o .NET](https://dotnet.microsoft.com/learn).

## Usando o fluxo de trabalho inicial do .NET

{% data variables.product.prodname_dotcom %} fornece um fluxo de trabalho inicial do .NET que deve funcionar na maior parte dos projetos do .NET e este guia inclui exemplos que mostram como personalizar este fluxo de trabalho inicial. Para obter mais informações, consulte o [fluxo de trabalho inicial do .NET](https://github.com/actions/setup-dotnet).

Para iniciar rapidamente, adicione o fluxo de trabalho inicial para o diretório `.github/workflows` do seu repositório.

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: ['3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup .NET Core SDK {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      - name: Install dependencies
        run: dotnet restore
      - name: Build
        run: dotnet build --configuration Release --no-restore
      - name: Test
        run: dotnet test --no-restore --verbosity normal
```

## Especificando uma versão do .NET

Para usar uma versão pré-instalada do .NET Core SDK em um executor hospedado em {% data variables.product.prodname_dotcom %}, use a ação `setup-dotnet`. Esta ação encontra uma versão específica do .NET do cache de ferramentas em cada executor e adiciona os binários necessários para `PATH`. Estas alterações persistirão para o resto do trabalho.

A ação `setup-dotnet` é a forma recomendada de usar .NET com {% data variables.product.prodname_actions %}, porque garante um comportamento consistente em executores diferentes e versões diferentes do .NET. Se você estiver usando um executor auto-hospedado, você deverá instalar o .NET e adicioná-lo ao `PATH`. Para obter mais informações, consulte a ação [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).

### Usar múltiplas versões do .NET

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup dotnet {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      # You can test your matrix by printing the current dotnet version
      - name: Display dotnet version
        run: dotnet --version
```

### Usar uma versão específica do .NET

Você pode configurar o seu trabalho para usar uma versão específica do .NET, como `3.1.3`. Como alternativa, você pode usar a sintaxe da versão semântica para obter a última versão secundária. Este exemplo usa a versão mais recente do .NET 3.

```yaml
    - name: Setup .NET 3.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x'
```

## Instalar dependências

Os executores hospedados em {% data variables.product.prodname_dotcom %} têm o gerenciador do pacote NuGet instalado. Você pode usar o dotnet CLI para instalar dependências do registro do pacote NuGet antes de criar e testar seu código. Por exemplo, o YAML abaixo instala o pacote `Newtonsoft`.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% ifversion actions-caching %}

### Memorizar dependências

Você pode armazenar em cache dependências do NuGet usando uma chave única, o que lhe permite restaurar as dependências para futuros fluxos de trabalho com a ação [`cache`](https://github.com/marketplace/actions/cache). Por exemplo, o YAML abaixo instala o pacote `Newtonsoft`.

Para obter mais informações, consulte "[Memorizar dependências para acelerar fluxos de trabalho](/actions/guides/caching-dependencies-to-speed-up-workflows)".

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget{% endraw %}
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% note %}

**Observação:** Dependendo do número de dependências, pode ser mais rápido para usar o armazenamento de dependências. Os projetos com muitas dependências grandes devem ver um aumento no desempenho conforme reduz o tempo necessário para fazer o download. Os projetos com menos dependências podem não ver um aumento significativo no desempenho e até mesmo ver um ligeiro diminuir devido à forma como o NuGet instala dependências armazenadas em cache. O desempenho varia de projeto para projeto.

{% endnote %}

{% endif %}

## Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código. Este exemplo demonstra como usar a `dotnet build` e o `dotnet test` em um trabalho:

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```

## Empacotar dados do fluxo de trabalho como artefatos

Após a conclusão de um fluxo de trabalho, você poderá fazer o upload dos artefatos resultantes para análise. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. O exemplo a seguir demonstra como você pode usar a ação `upload-artefato` para fazer o upload de resultados de testes.

Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

      steps:
        - uses: {% data reusables.actions.action-checkout %}
        - name: Setup dotnet
          uses: {% data reusables.actions.action-setup-dotnet %}
          with:
            dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        - name: Install dependencies
          run: dotnet restore
        - name: Test with dotnet
          run: dotnet test --logger trx --results-directory {% raw %}"TestResults-${{ matrix.dotnet-version }}"{% endraw %}
        - name: Upload dotnet test results
          uses: {% data reusables.actions.action-upload-artifact %}
          with:
            name: {% raw %}dotnet-results-${{ matrix.dotnet-version }}{% endraw %}
            path: {% raw %}TestResults-${{ matrix.dotnet-version }}{% endraw %}
          # Use always() to always run this step to publish test results when there are test failures
          if: {% raw %}${{ always() }}{% endraw %}
```

## Publicar nos registros do pacote

É possível configurar o seu fluxo de trabalho para publicar o pacote .NET em um pacote de registro quando o CI teste é aprovado. Você pode usar segredos do repositório para armazenar quaisquer tokens ou credenciais necessárias para publicar seu binário. O exemplo a seguir cria e publica um pacote em {% data variables.product.prodname_registry %} usando `dotnet core cli`.

```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: '3.1.x' # SDK Version to use.
          source-url: https://nuget.pkg.github.com/<owner>/index.json
        env:
          NUGET_AUTH_TOKEN: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
      - run: dotnet build --configuration Release <my project>
      - name: Create the package
        run: dotnet pack --configuration Release <my project>
      - name: Publish the package to GPR
        run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
