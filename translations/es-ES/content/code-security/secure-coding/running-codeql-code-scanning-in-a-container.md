---
title: Ejecutarel escaneo de código de CodeQL en un contenedor
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} en un contenedor'
intro: 'Puedes ejecutar el {% data variables.product.prodname_code_scanning %} en un contenedor si garantizas que todos los procesos se ejecutan en el mismo contenedor.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}

### Acerca del {% data variables.product.prodname_code_scanning %} con una compilación en contenedor

Si estás configurando el {% data variables.product.prodname_code_scanning %} para un lenguaje compilado, y estás compilando el código en un ambiente contenido, el análisis podría fallar con el mensaje de error "No source code was seen during the build". Esto indica que {% data variables.product.prodname_codeql %} no fue capaz de monitorear tu código mientras se compilaba.

Debes ejecutar {% data variables.product.prodname_codeql %} en el mismo contenedor en donde compilaste tu código. Esto aplica ya sea que estés utilizando el {% data variables.product.prodname_codeql_runner %} o {% data variables.product.prodname_actions %}. Si estás utilizando el {% data variables.product.prodname_codeql_runner %}, ejecútalo en el contenedor en donde se compila tu código. Para obtener más información acerca del {% data variables.product.prodname_codeql_runner %}, consulta la sección "[Ejecutar el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} en tu sistema de IC](/code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system)". Si estás utilizando {% data variables.product.prodname_actions %}, configura tu flujo de trabajo para ejecutar todas las acciones en el mismo contenedor. Para obtener más información, consulta la sección "[Ejemplo de flujo de trabajo](#example-workflow)".

### Dependencias

Es posible que tengas alguna dificultad para ejecutar el {% data variables.product.prodname_code_scanning %} si el contenedor que estás utilizando carece de ciertas dependencias (Por ejemplo, Git debe instalarse y agregarse a la variable PATH). Si te encuentras con algún problema en las dependencias, revisa la lista de software que habitualmente se incluye en los ambientes virtuales de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta los archivos `readme` específicos de la versión en estas ubicaciones:

* Linux: https://github.com/actions/virtual-environments/tree/main/images/linux
* macOS: https://github.com/actions/virtual-environments/tree/main/images/macos
* Windows: https://github.com/actions/virtual-environments/tree/main/images/win

### Ejemplo de flujo de trabajo

Este flujo de trabajo de muestra utiliza {% data variables.product.prodname_actions %} para ejecutar un análisis de {% data variables.product.prodname_codeql %} en un ambiente contenido. El valor de `container.image` identifica el contenedor que se debe utilizar. En este ejemplo, se le llama a la imagen `codeql-container`, con una etiqueta de `f0f91db`. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)".

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

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Initialize {% data variables.product.prodname_codeql %}
      uses: github/codeql-action/init@v1
      with:
        languages: {% raw %}${{ matrix.language }}{% endraw %}
    - name: Build
      run: |
        ./configure
        make
    - name: Perform {% data variables.product.prodname_codeql %} Analysis
      uses: github/codeql-action/analyze@v1
```
