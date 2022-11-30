---
title: Criando e testando aplicativos Xamarin
intro: É possível criar um fluxo de trabalho de integração contínua (CI) no GitHub Actions para construir e testar o seu aplicativo Xamarin.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CI
  - Xamarin
  - Xamarin.iOS
  - Xamarin.Android
  - Android
  - iOS
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

Este guia mostra como criar um fluxo de trabalho que executa a integração contínua (CI) para o seu projeto Xamarin. O fluxo de trabalho que você criar permitirá que você veja quando commits em um pull request gerarão falhas de criação ou de teste em comparação com o seu branch-padrão. Essa abordagem pode ajudar a garantir que seu código seja sempre saudável.

O executor do macOS hospedado em {% data variables.product.prodname_actions %} armazena versões do Xamarin SDK e versões Mono associadas como links simbólicos para as localidades o Xamarin SDK que estão disponíveis por um link simbólico único do pacote. Para obter uma lista completa das versões do Xamarin SDK e seus pacotes correspondentes, consulte a documentação dos executores:

* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md#xamarin-bundles)
* [macOS 11.0](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11.0-Readme.md#xamarin-bundles)

{% data reusables.github-actions.macos-runner-preview %}

### Pré-requisitos

Recomendamos que você tenha um entendimento básico do Xamarin, .NET Core SDK, YAML, opções de configuração do fluxo de trabalho e como criar um arquivo de fluxo de trabalho. Para obter mais informações, consulte:

- "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Começando com o .NET](https://dotnet.microsoft.com/learn)"
- "[Conheça o Xamarin](https://dotnet.microsoft.com/learn/xamarin)"

### Criando aplicativos Xamarin.iOS

O exemplo abaixo demonstra como alterar o pacote padrão do Xamarin e criar um aplicativo Xamarin.iOS.

{% raw %}
```yaml
name: Build Xamarin.iOS app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v2
      - name: Select default Xamarin bundle to 6_12_6
        run: |
          XAMARIN_SDK=6_12_6
          $VM_ASSETS/select-xamarin-sdk.sh $XAMARIN_SDK

      - name: Set default Xcode 12.3
        run: |
          XCODE_ROOT=/Applications/Xcode_12.3.0.app
          echo "MD_APPLE_SDK_ROOT=$XCODE_ROOT" >> $GITHUB_ENV
          sudo xcode-select -s $XCODE_ROOT

      - name: Setup .NET Core SDK 5.0.x
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: '5.0.x'

      - name: Install dependencies
        run: nuget restore <sln_file_path>

      - name: Build
        run: msbuild <csproj_file_path> /p:Configuration=Debug /p:Platform=iPhoneSimulator /t:Rebuild
```
{% endraw %}

### Criando aplicativos Xamarin.Android

O exemplo abaixo demonstra como alterar o padrão do pacote Xamarin e construir um aplicativo Xamarin.Android.

{% raw %}
```yaml
name: Build Xamarin.Android app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v2
      - name: Select default Xamarin bundle to 6_12_6
        run: |
          XAMARIN_SDK=6_12_6
          $VM_ASSETS/select-xamarin-sdk.sh $XAMARIN_SDK

      - name: Setup .NET Core SDK 5.0.x
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: '5.0.x'

      - name: Install dependencies
        run: nuget restore <sln_file_path>

      - name: Build
        run: msbuild <csproj_file_path> /t:PackageForAndroid /p:Configuration=Debug
```
{% endraw %}

### Especificando uma versão do .NET

Para usar uma versão pré-instalada do .NET Core SDK em um executor hospedado em {% data variables.product.prodname_dotcom %}, use a ação `setup-dotnet`. Esta ação encontra uma versão específica do .NET do cache de ferramentas em cada executor e adiciona os binários necessários para `PATH`. Estas alterações persistirão para o resto do trabalho.

A ação `setup-dotnet` é a forma recomendada de usar .NET com {% data variables.product.prodname_actions %}, porque garante um comportamento consistente em executores diferentes e versões diferentes do .NET. Se você estiver usando um executor auto-hospedado, você deverá instalar o .NET e adicioná-lo ao `PATH`. Para obter mais informações, consulte a ação [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).
