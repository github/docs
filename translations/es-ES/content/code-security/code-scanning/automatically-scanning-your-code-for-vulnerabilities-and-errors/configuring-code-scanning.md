---
title: Configurar el escaneo de código
intro: 'Puedes configurar la forma en que {% data variables.product.prodname_dotcom %} escanea el código en tu proyecto para encontrar vulnerabilidades y errores.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: Configure code scanning
ms.openlocfilehash: cad147292c113d749004f2fe303b27a4dada1456
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182318'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

{% ifversion ghes or ghae %} {% note %}

**Nota:** En este artículo se describen las características disponibles con la versión de la acción CodeQL y el paquete CodeQL CLI asociado que se incluye en la versión inicial de esta versión de {% data variables.product.product_name %}. Si en la empresa se usa una versión más reciente de la acción CodeQL, consulte el [artículo {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning) para obtener información sobre las características más recientes. {% ifversion not ghae %} Para obtener información sobre el uso de la versión más reciente, consulte "[Configuración del análisis de código para el dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

## Acerca de la configuración de {% data variables.product.prodname_code_scanning %}

Puedes ejecutar el {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_name %} si utilizas las {% data variables.product.prodname_actions %} o desde tu sistema de integración continua (IC). Para obtener más información, consulte "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" o "[Acerca de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} en su sistema de CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)."

Este artículo se trata de ejecutar el {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_name %} utilizando acciones.

Antes de que puedas configurar el {% data variables.product.prodname_code_scanning %} para un repositorio, debes configurar el {% data variables.product.prodname_code_scanning %} agregando un flujo de trabajo de {% data variables.product.prodname_actions %} a este. Para obtener más información, consulte "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% data reusables.code-scanning.edit-workflow %}

El análisis de {% data variables.product.prodname_codeql %} es tan solo un tipo de {% data variables.product.prodname_code_scanning %} que puedes hacer en {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% ifversion ghes %} en {% data variables.product.prodname_dotcom_the_website %}{% endif %} contiene otros flujos de trabajo del {% data variables.product.prodname_code_scanning %} que puedes utilizar. {% ifversion fpt or ghec %}Encontrará una selección en la página "Introducción a {% data variables.product.prodname_code_scanning %}", a la cual puede acceder desde la pestaña **{% octicon "shield" aria-label="The shield symbol" %} Security**.{% endif %} Los ejemplos específicos que se mencionan en este artículo se relacionan con el archivo {% data variables.code-scanning.codeql_workflow %}.

## Editar un flujo de trabjo de {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_dotcom %} guarda los archivos de flujo de trabajo en el directorio de _.github/workflows_ de su repositorio. Para encontrar un flujo de trabajo que haya agregado, busque su nombre de archivo. Por ejemplo, de manera predeterminada, el archivo de flujo de trabajo del {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} se llama _codeql-analysis.yml_.

1. En tu repositorio, navega hasta el archivo de flujo de trabajo que deseas editar.
1. En la esquina superior derecha de la vista del archivo, haga clic en {% octicon "pencil" aria-label="The edit icon" %} para abrir el editor de flujos de trabajo.
![Botón para editar un archivo de flujo de trabajo](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. Una vez editado el archivo, haga clic en **Start commit** (Iniciar confirmación) y complete el formulario "Commit changes" (Confirmar cambios). Puede elegir entre confirmar directamente en la rama actual o crear una rama e iniciar una solicitud de incorporación de cambios.
![Confirmar la actualización del flujo de trabajo de codeql.yml](/assets/images/help/repository/code-scanning-workflow-update.png)

Para obtener más información sobre cómo editar un archivo de flujo de trabajo, consulte "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

## Configurar la frecuencia

Puedes configurar el {% data variables.code-scanning.codeql_workflow %} para que escanee código en horarios programados o cuando ocurran eventos específicos en un repositorio.

Escanear el código en cada carga al repositorio, y cada vez que se crea una solicitud de extracción, previene que los desarrolladores introduzcan vulnerabilidades y errores nuevos en dicho código. Escanear el código con una programación definida te informará de las últimas vulnerabilidades y errores que {% data variables.product.company_short %}, los investigadores de seguridad, y la comunidad descubren, aún cuando los desarrolladores no estén manteniendo el repositorio activamente.

### Escanear cuando se carga información

De manera predeterminada, el {% data variables.code-scanning.codeql_workflow %} utiliza el evento `on.push` para activar un análisis de código en cada subida a la rama predeterminada del repositorio y de cualquier rama protegida. Para que el {% data variables.product.prodname_code_scanning %} se active en una rama específica, el flujo de trabajo debe existir en ella. Para obtener más información, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)".

Si el examen se realiza al enviar cambios, los resultados aparecen en la pestaña **Security** del repositorio. Para obtener más información, consulte "[Administrar alertas de análisis de código para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

Además, cuando un examen `on:push` devuelve resultados que se pueden asignar a una solicitud de incorporación de cambios abierta, estas alertas aparecerán automáticamente en la solicitud de incorporación de cambios en el mismo lugar que otras alertas de solicitud de incorporación de cambios. Las alertas se identifican comparando el análisis existente del encabezado de la rama con el análisis de la rama de destino. Para obtener más información sobre las alertas de {% data variables.product.prodname_code_scanning %} en las solicitudes de incorporación de cambios, consulte "[Evaluación de prioridades de las alertas de {% data variables.product.prodname_code_scanning %} en las solicitudes de incorporación de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

### Escanear las solicitudes de extracción

El {% data variables.code-scanning.codeql_workflow %} predeterminado utiliza el evento `pull_request` para activar un análisis de código en las solicitudes de incorporación de cambios relativas a la rama predeterminada. {% ifversion ghes %} El evento `pull_request` no se activará si la solicitud de incorporación de cambios se abrió desde una bifurcación privada.{% else %}Si una solicitud de incorporación de cambios es de una bifurcación privada, el evento de `pull_request` solo se activará si seleccionó la opción "Run workflows from fork pull requests" en la configuración del repositorio. Para obtener más información, consulte "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)".{% endif %}

Para obtener más información sobre el evento `pull_request`, consulte "[Eventos que desencadenan flujos de trabajo](/actions/learn-github-actions/events-that-trigger-workflows#pull_request)".

Si examina las solicitudes de incorporación de cambios, los resultados aparecen como alertas en una comprobación de solicitudes de incorporación de cambios. Para obtener más información, consulte "[Evaluación de prioridades de alertas de análisis de código en solicitudes de incorporación de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Cuando se usa el desencadenador `pull_request`, configurado para examinar la confirmación de combinación de la solicitud de incorporación de cambios en lugar de la confirmación del encabezado, se generarán resultados más eficaces y precisos que el examen del encabezado de la rama en cada envío de cambios de cambios. Sin embargo, si usa un sistema de CI/CD que no se puede configurar para que se desencadene en las solicitudes de incorporación de cambios, puede usar el desencadenador `on:push`, y {% data variables.product.prodname_code_scanning %} asignará los resultados a las solicitudes de incorporación de cambios abiertas en la rama y agregará las alertas como anotaciones en la solicitud de incorporación de cambios. Para obtener más información, consulte "[Examinar al insertar](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)".

### Definición de los niveles de gravedad que provoca un error de comprobación de solicitud de incorporación de cambios

De forma predeterminada, solo las alertas con el nivel de gravedad de `Error` o con el nivel de gravedad de seguridad `Critical` o `High` provocarán un error de comprobación de solicitud de incorporación de cambios, y una comprobación se realizará correctamente con alertas de gravedad más baja. Puede cambiar los niveles de gravedad de las alertas y de gravedad de seguridad que provocarán un error de comprobación de solicitud de incorporación de cambios en la configuración del repositorio. Para obtener más información sobre los niveles de gravedad, consulte "[Acerca de las alertas de análisis de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Debajo de "Escaneo de código", a la derecha de "Fallo de verificación", utiliza el menú desplegable para seleccionar el nivel de gravedad que quisieras que ocasionara un fallo de verificación en la solicitud de cambios.
![Configuración de fallo de verificación](/assets/images/help/repository/code-scanning-check-failure-setting.png)

### Evitar escaneos innecesarios en las solicitudes de cambios

Es posible que quiera evitar que se desencadene un examen de código en solicitudes de incorporación de cambios específicas destinadas a la rama predeterminada, independientemente de los archivos que se hayan cambiado. Puede configurarlo especificando `on:pull_request:paths-ignore` o `on:pull_request:paths` en el flujo de trabajo de {% data variables.product.prodname_code_scanning %}. Por ejemplo, si los únicos cambios en una solicitud de incorporación de cambios se realizan en archivos con las extensiones `.md` o `.txt`, puede usar la matriz `paths-ignore` siguiente.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**Notas**

* `on:pull_request:paths-ignore` y `on:pull_request:paths` establecen condiciones que determinan si las acciones del flujo de trabajo se ejecutarán en una solicitud de incorporación de cambios. No determinan qué archivos se analizarán cuando _se ejecuten_ las acciones. Cuando una solicitud de incorporación de cambios contiene archivos que no coinciden con `on:pull_request:paths-ignore` o `on:pull_request:paths`, el flujo de trabajo ejecuta las acciones y analiza todos los archivos modificados en la solicitud de incorporación de cambios, incluidos los que coinciden con `on:pull_request:paths-ignore` o `on:pull_request:paths`, a menos que se hayan excluido. Para obtener información sobre cómo excluir archivos del análisis, consulte "[Especificar directorios para escanear](#specifying-directories-to-scan)".
* En el caso de los archivos del flujo de trabajo de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, no use las palabras clave `paths-ignore` ni `paths` con el evento `on:push` porque podrían omitirse análisis. Para obtener resultados precisos, el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} necesita poder comparar los cambios nuevos con el análisis de la confirmación previa.

{% endnote %}

Para obtener más información sobre el uso de `on:pull_request:paths-ignore` y `on:pull_request:paths` para determinar cuándo se ejecutará un flujo de trabajo para una solicitud de incorporación de cambios, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".

### Escanear de forma pre-programada

Si utilizas el {% data variables.code-scanning.codeql_workflow %} predeterminado, este escaneará el código en tu repositorio una vez a la semana adicionalmente a los escaneos que se activen con los eventos. Para ajustar esta programación, edite el valor `cron` en el flujo de trabajo. Para obtener más información, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule)".

{% note %}

**Nota**: {% data variables.product.prodname_dotcom %} solo ejecuta trabajos programados previamente que se encuentren en flujos de trabajo de la rama predeterminada. Cambiar la programación en un flujo de trabajo en cualquier otra rama no tendrá efecto hasta que fusiones esta rama con la predeterminada.

{% endnote %}

### Ejemplo

En el siguiente ejemplo se muestra un {% data variables.code-scanning.codeql_workflow %} para un repositorio en particular que tiene una rama predeterminada que se llama `main` y una protegida que se llama `protected`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

Este flujo de trabajo examina lo siguiente:
* Cada envío de cambios a la rama predeterminada y a la rama protegida
* Cada solicitud de incorporación de cambios a la rama predeterminada
* La rama predeterminada todos los lunes a las 14:20 UTC

## Especificar un sistema operativo

Si tu código requiere un sistema operativo específico para compilar, puedes configurarlo en tu {% data variables.code-scanning.codeql_workflow %}. Edite el valor de `jobs.analyze.runs-on` para especificar el sistema operativo de la máquina que ejecuta las acciones de {% data variables.product.prodname_code_scanning %}. {% ifversion ghes %}Para especificar el sistema operativo, use la etiqueta adecuada como el segundo elemento en una matriz de dos elementos, después de `self-hosted`.{% else %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

Si decide utilizar un ejecutor autohospedado para el análisis de código, puede especificar un sistema operativo mediante la etiqueta adecuada como el segundo elemento en una matriz de dos elementos, después de `self-hosted`.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

El {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} es compatible con las versiones más recientes de Ubuntu, Windows y macOS. Por lo tanto, los valores típicos de esta configuración son: `ubuntu-latest`, `windows-latest` y `macos-latest`. Para obtener más información, consulta «[Elección del ejecutor de un trabajo](/actions/using-jobs/choosing-the-runner-for-a-job)» y «[Uso de etiquetas con ejecutores autohospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)».

{% ifversion ghes %}Debes asegurarte de que Git esté en la variable PATH en los ejecutores autohospedados.{% else %}Si usas un ejecutor autohospedado, debes asegurarte de que Git esté en la variable PATH.{% endif %} Para obtener más información, consulta «[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)» y «[Agregar ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)».

Para obtener especificaciones recomendadas (RAM, núcleos de CPU y disco) para ejecutar el análisis de {% data variables.product.prodname_codeql %}{% ifversion not ghes %} en máquinas autohospedadas{% endif %}, consulte "[Recursos de hardware recomendados para ejecutar {% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)".

## Especificar la ubicación de las bases de datos de {% data variables.product.prodname_codeql %}

En general, no necesitas preocuparte por dónde {% data variables.code-scanning.codeql_workflow %} coloca las bases de dato de {% data variables.product.prodname_codeql %}, ya que los pasos subsecuentes encontrarán automáticamente las bases de datos que crearon los pasos previos. Sin embargo, si está escribiendo un paso de un flujo de trabajo personalizado que requiera que la base de datos de {% data variables.product.prodname_codeql %} esté en una ubicación de disco específica, por ejemplo, para cargar la base de datos como un artefacto de flujo de trabajo, puedes especificar esa ubicación utilizando el parámetro `db-location` de la acción `init`.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    db-location: {% raw %}'${{ github.workspace }}/codeql_dbs'{% endraw %}
```

El {% data variables.code-scanning.codeql_workflow %} esperará a que la ruta proporcionada por `db-location` sea grabable y que no exista o sea un directorio vacío. Cuando utilizamos este parámetro en un job que se ejecuta en un ejecutor auto-hospedado o utilizando un contenedor de Docker, es responsabilidad del usuario garantizar que el directorio elegido se limpie entre ejecuciones o que las bases de datos se eliminen una vez que ya no se necesiten. {% ifversion fpt or ghec or ghes %}Esto no es necesario para los jobs que se ejecutan en los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, los cuales obtienen una instancia nueva y un sistema de archivos limpio cada vez que se ejecutan. Para obtener más información, consulte "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".{% endif %}

Si no se utiliza este parámetro, el {% data variables.code-scanning.codeql_workflow %} creará bases de datos en una ubicación temporal de su propia elección.

## Cambiar los lenguajes que se analizan

El {% data variables.product.prodname_codeql %} del {% data variables.product.prodname_code_scanning %} detecta automáticamente el código que se escribe en los lenguajes compatibles.

{% data reusables.code-scanning.codeql-languages-bullets %}

El archivo predeterminado {% data variables.code-scanning.codeql_workflow %} contiene una matriz de compilación denominada `language` que muestra los lenguajes del repositorio que se han analizado. El {% data variables.product.prodname_codeql %} llena automáticamente esta matriz cuando agregas el {% data variables.product.prodname_code_scanning %} a un repositorio. Cuando se utiliza la matriz de `language`, se optimiza {% data variables.product.prodname_codeql %} para ejecutar cada análisis en paralelo. Se recomienda que todos los flujos de trabajo adopten esta configuración debido a las ventajas de rendimiento de paralelizar las compilaciones. Para obtener más información sobre las matrices, consulta «[Uso de una matriz para los trabajos](/actions/using-jobs/using-a-matrix-for-your-jobs)».

{% data reusables.code-scanning.specify-language-to-analyze %}

Si su flujo de trabajo utiliza la matriz `language`, {% data variables.product.prodname_codeql %} se codifica para analizar únicamente los lenguajes de esa matriz. Para cambiar los lenguajes que desea analizar, edite el valor de la variable de matriz. Puedes eliminar un lenguaje para que no se analice, o puedes agregar alguno que no estuviera presente en el repositorio cuando se configuró el {% data variables.product.prodname_code_scanning %}. Por ejemplo, si inicialmente el repositorio solo contenía JavaScript cuando se configuró {% data variables.product.prodname_code_scanning %} y posteriormente se agregó el código de Python, deberá agregar `python` a la matriz.

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

Si su flujo de trabajo no contiene una matriz que se llame `language`, {% data variables.product.prodname_codeql %} se configurará para ejecutar un análisis es secuencias. Si no especificas los lenguajes en los flujos de trabajo, {% data variables.product.prodname_codeql %} detectará e intentará analizar cualquier lenguaje compatible que haya en el repositorio. Si desea elegir qué lenguajes se deben analizar sin usar una matriz, puede usar el parámetro `languages` en la acción `init`.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: cpp, csharp, python
```
{% ifversion fpt or ghec %}
## Analizar las dependencias de Python

Para los ejecutores hospedados en GitHub que utilicen solo Linux, el {% data variables.code-scanning.codeql_workflow %} intentará instalar automáticamente las dependencias de Python para dar más resultados para el análisis de CodeQL. Puede controlar este comportamiento especificando el parámetro `setup-python-dependencies` de la acción a la que se llama en el paso "Initialize CodeQL". De manera predeterminada, este parámetro está establecido en `true`:

-  Si el repositorio contiene còdigo escrito en Python, el paso "Initialize CodeQL" instala las dependencias necesarias en el ejecutor hospedado en GitHub. Si se ejecuta correctamente la instalación automática, la acción también define la variable de entorno `CODEQL_PYTHON` en el archivo ejecutable de Python que incluye las dependencias.

- Si el repositorio no tiene ninguna dependencia de Python o si las dependencias se especifican en una forma inesperada, obtendràs una advertencia y la acciòn seguirà con los jobs restantes. La acciòn puede ejecutarse exitosamente aùn cuando existan problemas para interpretar las dependencias, pero los resultados podrìan estar incompletos.

Como alternativa, puedes instalar las dependencias de Python manualmente en cualquier sistema operativo. Tendrá que agregar `setup-python-dependencies` y establecerlo en `false`, así como establecer `CODEQL_PYTHON` en el ejecutable de Python que incluya las dependencias, como se muestra en este extracto de flujo de trabajo:

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

## Configurar una cateogría para el análisis

Use `category` para distinguir varios análisis de la misma herramienta y confirmación que se ejecutan en distintos lenguajes o partes del código. La categoría que especificas en tu flujo de trabajo se incluirá en el archivo de resultados de SARIF.

Este parámetro es particularmente útil si trabajas en monorepositorios y tienes vrios archivos SARIF para diferentes componentes de este.

``` yaml
    - name: Perform CodeQL Analysis
      uses: {% data reusables.actions.action-codeql-action-analyze %}
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

Si no especifica ningún parámetro de `category` en su flujo de trabajo, {% data variables.product.product_name %} generará un nombre de categoría en función del nombre del archivo de flujo de trabajo que activa la acción, el nombre de la acción y cualquier variable de la matriz. Por ejemplo:
- El flujo de trabajo `.github/workflows/codeql-analysis.yml` y la acción `analyze` generarán la categoría `.github/workflows/codeql.yml:analyze`.
- El flujo de trabajo `.github/workflows/codeql-analysis.yml`, la acción `analyze` y las variables de matriz `{language: javascript, os: linux}` generarán la categoría `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`.

El valor `<run>.automationDetails.id` aparecerá como la propiedad `category` en SARIF v2.1.0. Para obtener más información, consulte "[Compatibilidad con SARIF para {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object)".

La categoría especificada no sobrescribirá los detalles del objeto `runAutomationDetails` en el archivo SARIF, si se incluye.

## Ejecutar consultas adicionales

{% data reusables.code-scanning.run-additional-queries %}

{% ifversion codeql-packs %}
### Utilizar los paquetes de consultas de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Para agregar uno o varios paquetes de consulta de {% data variables.product.prodname_codeql %} (beta), agregue una entrada `with: packs:` dentro de la sección `uses: {% data reusables.actions.action-codeql-action-init %}` del flujo de trabajo. Dentro de `packs`, especifique uno o varios paquetes para usar y, opcionalmente, la versión que desea descargar. Cuando no se especifica una versión, se descarga la más reciente. Si quiere usar paquetes que no están disponibles públicamente, debe establecer la variable de entorno `GITHUB_TOKEN` en un secreto que tenga acceso a los paquetes. Para obtener más información, consulte "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)" y "[Secretos cifrados](/actions/reference/encrypted-secrets)".

{% note %}

**Nota:** En el caso de los flujos de trabajo que generan bases de datos de {% data variables.product.prodname_codeql %} para varios lenguajes, debe especificar los paquetes de consultas de {% data variables.product.prodname_codeql %} en un archivo de configuración. Para obtener más información, consulte "[Especificar paquetes de consultas de {% data variables.product.prodname_codeql %}](#specifying-codeql-query-packs)" a continuación.

{% endnote %}

En el ejemplo siguiente, `scope` es la cuenta personal o de la organización que ha publicado el paquete. Cuando se ejecuta el flujo de trabajo, los cuatro paquetes de consulta de {% data variables.product.prodname_codeql %} se descargan de {% data variables.product.product_name %} y se ejecutan las consultas predeterminadas o conjunto de consultas para cada paquete:
- Se descarga la versión más reciente de `pack1` y se ejecutan todas las consultas predeterminadas.
- Se descarga la versión 1.2.3 de `pack2` y se ejecutan todas las consultas predeterminadas.
- Se descarga la versión más reciente de `pack3` que es compatible con la versión 3.2.1 y se ejecutan todas las consultas.
- Se descarga la versión 4.5.6 de `pack4` y solo se ejecutan las consultas que se encuentran en `path/to/queries`.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~3.2.1,scope/pack4@4.5.6:path/to/queries
```

### Descarga de paquetes de {% data variables.product.prodname_codeql %} desde el {% data variables.product.prodname_ghe_server %}

Si en el flujo de trabajo se usan paquetes publicados en un {% data variables.product.prodname_ghe_server %}, debes indicar al flujo de trabajo dónde encontrarlos. Para ello, usa la entrada `registries` de la acción {% data reusables.actions.action-codeql-action-init %}. Esta entrada acepta una lista de propiedades `url`, `packages` y `token`, como se muestra a continuación.

```
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    registries: {% raw %}|
      # URL to the container registry, usually in this format
      - url: https://containers.GHEHOSTNAME1/v2/

        # List of package glob patterns to be found at this registry
        packages:
          - my-company/*
          - my-company2/*

        # Token, which should be stored as a secret
        token: ${{ secrets.GHEHOSTNAME1_TOKEN }}

      # URL to the default container registry
      - url: https://ghcr.io/v2/
        # Packages can also be a string
        packages: "*/*"
        token: ${{ secrets.GHCR_TOKEN }}

    {% endraw %}
```

Los patrones de paquete de la lista de registros se examinan en orden, por lo que generalmente debes colocar primero los patrones de paquete más específicos. El valor de `token` debe ser un {% data variables.product.pat_v1 %} generado por la instancia de GitHub desde la que estés realizando la descarga con el permiso `read:packages`.

Fíjate en `|` después del nombre de la propiedad `registries`. Es importante, ya que {% data variables.product.prodname_actions %} solo acepta cadenas. El uso de `|` convierte el texto subsiguiente en una cadena, que se analiza más adelante mediante la acción {% data reusables.actions.action-codeql-action-init %}.

### Utilizar las consultas en los paquetes de QL
{% endif %} Para agregar una o varias consultas, agregue una entrada `with: queries:` dentro de la sección `uses: {% data reusables.actions.action-codeql-action-init %}` del flujo de trabajo. Si las consultas están en un repositorio privado, use el parámetro `external-repository-token` para especificar un token que tenga acceso para extraer del repositorio privado.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

También puede especificar conjuntos de consultas en el valor de `queries`. Los conjuntos de consultas son colecciones de consultas, normalmente agrupadas por propósito o lenguaje.

{% data reusables.code-scanning.codeql-query-suites-explanation %}

{% ifversion codeql-packs %}
### Trabajar con archivos de configuración personalizados
{% endif %}

Si también usas un archivo de configuración para los ajustes personalizados, se usará cualquier {% ifversion codeql-packs %}paquete o{% endif %}consulta adicional que se especifique en tu flujo de trabajo, en vez de lo que se especifique en el archivo de configuración. Si quieres ejecutar el conjunto combinado de {% ifversion codeql-packs %}paquetes o {% endif %}consultas adicionales, antepón el valor de {% ifversion codeql-packs %}`packs` o {% endif %}`queries` en el flujo de trabajo con el símbolo `+`. Para obtener más información, consulte "[Uso de un archivo de configuración personalizado](#using-a-custom-configuration-file)".

En el ejemplo siguiente, el símbolo `+` garantiza que {% ifversion codeql-packs %}los paquetes y {% endif %}las consultas adicionales que se especifiquen se usen junto con lo que se especifique en el archivo de configuración al que se hace referencia.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- ifversion codeql-packs %}
    packs: +scope/pack1,scope/pack2@1.2.3,scope/pack3@4.5.6:path/to/queries
    {%- endif %}
```

## Uso de un archivo de configuración personalizado

Un archivo de configuración personalizado es una forma alternativa de especificar {% ifversion codeql-packs %}paquetes y{% endif %} consultas adicionales para su ejecución. También puedes usar el archivo para deshabilitar las consultas predeterminadas{% ifversion code-scanning-exclude-queries-from-analysis %}, excluir o incluir consultas específicas,{% endif %} y especificar los directorios que se van a examinar durante el análisis.

En el archivo de flujo de trabajo, use el parámetro `config-file` de la acción `init` para especificar la ruta de acceso al archivo de configuración que desea usar. En este ejemplo se carga el archivo de configuración _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

Si el archivo de configuración se encuentra en un repositorio privado externo, use el parámetro `external-repository-token` de la acción `init` para especificar un token que tenga acceso al repositorio privado.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

Los valores del archivo de configuración se escriben en formato YAML.

{% ifversion codeql-packs %}
### Especificar paquetes de consultas de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Especificas paquetes de consultas de {% data variables.product.prodname_codeql %} en un arreglo. Tenga en cuenta que el formato es diferente del que utiliza el archivo del flujo de trabajo.

{% raw %}
``` yaml
packs:
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1
  # Use version 1.2.3 of 'pack2'
  - scope/pack2@1.2.3
  # Use the latest version of 'pack3' compatible with 3.2.1
  - scope/pack3@~3.2.1
  # Use pack4 and restrict it to queries found in the 'path/to/queries' directory
  - scope/pack4:path/to/queries
  # Use pack5 and restrict it to the query 'path/to/single/query.ql'
  - scope/pack5:path/to/single/query.ql
  # Use pack6 and restrict it to the query suite 'path/to/suite.qls'
  - scope/pack6:path/to/suite.qls
```
{% endraw %}

El formato completo para especificar un paquete de consulta es `scope/name[@version][:path]`. `version` y `path` son opcionales. `version` es el intervalo de versiones de SemVer. Si falta, se usa la versión más reciente. Para obtener más información sobre los intervalos de SemVer, consulta la [documentación de SemVer en npm](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges).

Si tienes un flujo de trabajo que genere más de una base de datos de {% data variables.product.prodname_codeql %}, puedes especificar cualquier paquete de consultas de {% data variables.product.prodname_codeql %} para que se ejecute en un archivo de configuración personalizado utilizando un mapa de paquetes anidado.

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript and TypeScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java and Kotlin analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %} {% endif %}

### Especificar consultas adicionales

Especifique las consultas adicionales en una matriz de `queries`. Cada elemento de la matriz contiene un parámetro `uses` con un valor que identifica un único archivo de consulta, un directorio que contiene archivos de consulta o un archivo de definición de un conjunto de consultas.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

Opcionalmente, puedes otorgar un nombre a cada elemento de la matriz, como se muestra en los siguientes ejemplos de archivos de configuración. Para obtener más información sobre las consultas adicionales, consulte la sección anterior "[Ejecución de consultas adicionales](#running-additional-queries)".

### Inhabilitar las consultas predeterminadas

Si solo desea ejecutar consultas personalizadas, puede deshabilitar las consultas de seguridad predeterminadas mediante `disable-default-queries: true`.

{% ifversion code-scanning-exclude-queries-from-analysis %}
### Exclusión de consultas específicas del análisis

Puedes agregar filtros `exclude` y `include` al archivo de configuración personalizado para especificar las consultas que deseas excluir o incluir en el análisis.

Esto es útil si deseas excluir, por ejemplo:
- Consultas específicas de los conjuntos predeterminados (`security``security-extended` y `security-and-quality`).
- Consultas específicas cuyos resultados no te interesan.
- Todas las consultas que generan advertencias y recomendaciones.

Puedes usar `exclude` filtros similares a los del archivo de configuración siguiente para excluir las consultas que deseas quitar del análisis predeterminado. En el ejemplo de archivo de configuración siguiente, las consultas `js/redundant-assignment` y `js/useless-assignment-to-local` se excluyen del análisis.

```yaml
query-filters:
  - exclude:
      id: js/redundant-assignment
  - exclude:
      id: js/useless-assignment-to-local
```
Para buscar el identificador de una consulta, puedes hacer clic en la alerta en la lista de alertas de la pestaña Seguridad. Se abrirá la página de detalles de la alerta. El campo `Rule ID` contiene el identificador de consulta. Para obtener más información sobre la página de detalles de la alerta, consulta "[Acerca de las alertas de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)".

{% tip %}

**Sugerencias:**
- El orden de los parámetros es importante. La primera instrucción de filtro que aparece después de las instrucciones sobre las consultas y los paquetes de consultas determina si las consultas se incluyen o excluyen de forma predeterminada.
- Las instrucciones posteriores se ejecutan en orden y las instrucciones que aparecen más adelante en el archivo tienen prioridad sobre las instrucciones anteriores.

{% endtip %}

Puedes encontrar otro ejemplo que ilustra el uso de estos filtros en la sección "[Archivos de configuración de ejemplo](#example-configuration-files)".

Para obtener más información sobre el uso de los filtros `exclude` y `include` en el archivo de configuración personalizado, consulta ["Creación de conjuntos de consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/#filtering-the-queries-in-a-query-suite)". Para obtener información sobre los metadatos de consulta en los que puedes filtrar, consulta "[Metadatos para consultas CodeQL](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/)".

{% endif %}

### Especificar directorios para escanear

En los lenguajes interpretados que son compatibles con {% data variables.product.prodname_codeql %} (Python{% ifversion fpt or ghes > 3.3 or ghae > 3.3 %}, Ruby{% endif %} y JavaScript/TypeScript), puedes restringir el {% data variables.product.prodname_code_scanning %} a los archivos de directorios específicos. Para ello, debes agregar una matriz `paths` al archivo de configuración. Puede excluir los archivos de directorios específicos del análisis agregando una matriz `paths-ignore`.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**Nota**:

* Las palabras clave `paths` y `paths-ignore`, que se usan en el contexto del archivo de configuración de {% data variables.product.prodname_code_scanning %}, no deben confundirse con las mismas palabras clave cuando se usan para `on.<push|pull_request>.paths` en un flujo de trabajo. Cuando se usan para modificar `on.<push|pull_request>` en un flujo de trabajo, determinan si las acciones se ejecutarán cuando alguien modifique el código en los directorios especificados. Para obtener más información, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)".
* Los caracteres de patrón de filtro `?`, `+`, `[`, `]` y `!` no se admiten y coincidirán literalmente.
*               Los caracteres `**` solo pueden colocarse al principio o al final de una línea, o rodeados por barras diagonales, y no se puede mezclar `**` ni otros caracteres. Por ejemplo, `foo/**`, `**/foo` y `foo/**/bar` son una sintaxis permitida, pero `**foo` no lo es. Sin embargo, puede usar un solo asterisco junto con otros caracteres, como se muestra en el ejemplo. Tendrá que citar todo lo que contenga un carácter `*`.

{% endnote %}

Para los lenguajes compilados, si quieres limitar el {% data variables.product.prodname_code_scanning %} para directorios específicos en tu proyecto, debes especificar los pasos de compilación adecuados en el flujo de trabajo. Los comandos que debe usar para excluir un directorio de la compilación dependerán del sistema de compilación. Para obtener más información, consulte "[Configuración del flujo de trabajo de {% data variables.product.prodname_codeql %} para lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)".

Puede analizar rápidamente pequeñas partes de un repositorio mono al modificar el código en directorios específicos. Deberá excluir directorios en los pasos de compilación y usar las palabras clave `paths-ignore` y `paths` para [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) en el flujo de trabajo.

### Archivos de configuración de ejemplo

{% data reusables.code-scanning.example-configuration-files %}

## Configurar {% data variables.product.prodname_code_scanning %} para los lenguajes compilados

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obtener más información sobre cómo configurar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} para lenguajes compilados, consulte "[Configuración del flujo de trabajo de {% data variables.product.prodname_codeql %} para lenguajes compilados](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)".

## Carga de datos de {% data variables.product.prodname_code_scanning %} en {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} puede mostrar los datos de análisis de código que se generan externamente con una herramienta de terceros. Puede cargar datos de análisis de código con la acción `upload-sarif`. Para obtener más información, consulte "[Carga de un archivo SARIF en GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".
