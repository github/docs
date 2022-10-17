---
title: Ejecutarel escaneo de código de CodeQL en un contenedor
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} in a container'
intro: 'Puedes ejecutar el {% data variables.product.prodname_code_scanning %} en un contenedor si garantizas que todos los procesos se ejecutan en el mismo contenedor.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Repositories
  - Containers
  - Java
ms.openlocfilehash: 9f4fb3cd54dda2f31ec6086419078345dad51e8d
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147682680'
---
{% data reusables.code-scanning.beta %}

## Acerca del {% data variables.product.prodname_code_scanning %} con una compilación en contenedor

Si estás configurando el {% data variables.product.prodname_code_scanning %} para un lenguaje compilado, y estás compilando el código en un ambiente contenido, el análisis podría fallar con el mensaje de error "No source code was seen during the build". Esto indica que {% data variables.product.prodname_codeql %} no fue capaz de monitorear tu código mientras se compilaba.

Debes ejecutar a {% data variables.product.prodname_codeql %} dentro del mismo contenedor en el que compilaste tu código. Esto se aplica ya sea si usas la {% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %} el {% data variables.product.prodname_codeql_runner %}{% endif %} o {% data variables.product.prodname_actions %}. Para la {% data variables.product.prodname_codeql_cli %} {% ifversion codeql-runner-supported %}o el {% data variables.product.prodname_codeql_runner %}{% endif %}, consulta "[Instalación de la {% data variables.product.prodname_codeql_cli %} en el sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)"{% ifversion codeql-runner-supported %} o "[Ejecución del {% data variables.product.prodname_codeql_runner %} en el sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)"{% endif %} para obtener más información. Si estás utilizando {% data variables.product.prodname_actions %}, configura tu flujo de trabajo para ejecutar todas las acciones en el mismo contenedor. Para obtener más información, vea "[Flujo de trabajo de ejemplo](#example-workflow)".

{% note %}

**Nota:** {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}

## Dependencias

Es posible que tengas alguna dificultad para ejecutar el {% data variables.product.prodname_code_scanning %} si el contenedor que estás utilizando carece de ciertas dependencias (Por ejemplo, Git debe instalarse y agregarse a la variable PATH). Si te encuentras con algún problema en las dependencias, revisa la lista de software que habitualmente se incluye en las imágenes de ejecutores de {% data variables.product.prodname_dotcom %}. Para obtener más información, vea los archivos `readme` específicos de la versión en estas ubicaciones:

* Linux: https://github.com/actions/runner-images/tree/main/images/linux
* macOS: https://github.com/actions/runner-images/tree/main/images/macos
* Windows: https://github.com/actions/runner-images/tree/main/images/win

## Flujo de trabajo de ejemplo

{% ifversion ghes or ghae %} {% note %}

**Nota:** En este artículo se describen las características disponibles con la versión de la acción CodeQL y el paquete CodeQL CLI asociado que se incluye en la versión inicial de esta versión de {% data variables.product.product_name %}. Si la empresa usa una versión más reciente de la acción CodeQL, vea el [artículo sobre {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container) para obtener información sobre las características más recientes.{% ifversion not ghae %} Para obtener información sobre el uso de la versión más reciente, vea "[Configuración del examen de código para el dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

Este flujo de trabajo de muestra utiliza {% data variables.product.prodname_actions %} para ejecutar un análisis de {% data variables.product.prodname_codeql %} en un ambiente contenido. El valor de `container.image` identifica el contenedor que se va a usar. En este ejemplo, la imagen se denomina `codeql-container`, con una etiqueta de `f0f91db`. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)".

``` yaml
name: "{% data variables.product.prodname_codeql %}"

on: 
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '15 5 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: {% data reusables.actions.action-codeql-action-analyze %}
```
