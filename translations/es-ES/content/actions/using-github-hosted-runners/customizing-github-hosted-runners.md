---
title: Personalizar los ejecutores hospedados en GitHub
intro: Puedes instalar software adicional en los ejecutores hospedados en GitHub como parte de tu flujo de trabajo.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

Si requieres paquetes de software adicionales en los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, puedes crear un job que instale los paquetes como parte de tu flujo de trabajo.

Para ver los paquetes que ya se instalaron predeterminadamente, consulta la sección "[Software preinstalado](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)".

Esta guía demuestra cómo crear un job que instala software adicional en un ejecutor hospedado en {% data variables.product.prodname_dotcom %}.

### Instalar software en ejecutores Ubuntu

El siguiente ejemplo demuestra cómo instalar un paquete de `apt` como parte de un job.

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

**Nota:** Ejecuta siempre `sudo apt-get update` antes de instalar un paquete. En caso de que el índice de `apt` esté desactualizado, este comando recupera y re-indiza cualquier paquete disponible, lo cual ayuda a prevenir los fallos en la instalación de paquetes.

{% endnote %}

### Instalar el software en los ejecutores de macOS

El siguiente ejemplo demuestra cómo instalar paquetes y barriles de Brew como parte de un job.

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

### Instalar software en ejecutores Windows

El siguiente ejemplo demuestra cómo utilizar [Chocolatey](https://community.chocolatey.org/packages) para instalar el CLI de {% data variables.product.prodname_dotcom %} como parte de un job.

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
