---
title: Personalizando executores hospedados no GitHub
intro: Você pode instalar software adicional em executores hospedados no GitHub como parte do seu fluxo de trabalho.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

Se você precisar de pacotes de software adicionais em executores hospedados em {% data variables.product.prodname_dotcom %}, você poderá criar um trabalho que instale os pacotes como parte de seu fluxo de trabalho.

Para ver quais pacotes já estão instalados por padrão, consulte "[Software pré-instalado](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)".

Este guia demonstra como criar um trabalho que instale software adicional em um executor hospedado em {% data variables.product.prodname_dotcom %}.

### Instalando software nos executores do Ubuntu

O exemplo a seguir demonstra como instalar um pacote `apt` como parte de um trabalho.

{% raw %}
```yaml
name: Build on Ubuntu
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Install jq tool
        run: |
          sudo apt-get update
          sudo apt-get install jq
```
{% endraw %}

{% note %}

**Observação:** Sempre execute `sudo apt-get update` antes de instalar um pacote. Caso o índice `apt` seja obsoleto, este comando busca e indexa novamente quaisquer pacotes disponíveis, o que ajuda a prevenir falhas na instalação do pacote.

{% endnote %}

### Instalando o software nos executores do macOS

O exemplo a seguir demonstra como instalar pacotes de Brew e cascas como parte de um trabalho.

{% raw %}
```yaml
name: Build on macOS
on: push

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Install GitHub CLI
        run: |
          brew update
          brew install gh
      - name: Install Microsoft Edge
        run: |
          brew update
          brew install --cask microsoft-edge
```
{% endraw %}

### Instalando software em executores do Windows

O exemplo a seguir demonstra como usar o [Chocolatey](https://community.chocolatey.org/packages) para instalar a CLI de {% data variables.product.prodname_dotcom %} como parte de um trabalho.

{% raw %}
```yaml
name: Build on Windows
on: push
jobs:
  build:
    runs-on: windows-latest
    steps:
      - run: choco install gh
      - run: gh version
```
{% endraw %}
