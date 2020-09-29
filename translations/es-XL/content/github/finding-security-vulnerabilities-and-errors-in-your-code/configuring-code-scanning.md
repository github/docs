---
title: Configurar el escaneo de código
intro: 'Puedes configurar la forma en que {% data variables.product.prodname_dotcom %} escanea el código en tu proyecto para encontrar vulnerabilidades y errores.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Las personas con permisos de escritura en un repositorio pueden configurar {% data variables.product.prodname_code_scanning %} para el mismo.'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}


### Acerca de la configuración de {% data variables.product.prodname_code_scanning %}

You can run {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_location %}, using {% data variables.product.prodname_actions %}, or from your continuous integration (CI) system, using the {% data variables.product.prodname_codeql_runner %}. Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)". For more information about the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)."

{% data variables.product.prodname_code_scanning_capc %} detecta y escanea automáticamente el código que se escribe en los lenguajes compatibles.

Antes de que puedas configurar {% data variables.product.prodname_code_scanning %} para un repositorio, debes habilitar {% data variables.product.prodname_code_scanning %} agregando un flujo de trabajo de {% data variables.product.prodname_actions %} a dicho repositorio. El flujo de trabajo predeterminado de {% data variables.product.prodname_code_scanning %} utiliza el evento `on.push` para activar el escaneo de código cada vez que alguien carga información a cualquier rama que contenga el archivo de flujo de trabajo.

{% data reusables.code-scanning.edit-workflow %}

{% data variables.product.prodname_codeql %} analysis is just one type of {% data variables.product.prodname_code_scanning %} you can do in {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% if currentVersion ver_gt "enterprise-server@2.21" %} on  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contains other {% data variables.product.prodname_code_scanning %} workflows you can use. {% if currentVersion == "free-pro-team@latest" %}You can find a selection of these on the "Get started with {% data variables.product.prodname_code_scanning %}" page, which you can access from the **{% octicon "shield" aria-label="The shield symbol" %} Security** tab.{% endif %} The specific examples given in this article relate to the {% data variables.product.prodname_codeql_workflow %} file.

### Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} guarda los archivos de flujo de trabajo en el directorio de _.github/workflows_ de tu repositorio. You can find the workflow by searching for its file name. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

1. En tu repositorio, navega hasta el archivo de flujo de trabajo que deseas editar.
1. En el ángulo superior derecho de la vista del archivo, para abrir el editor de flujo de trabajo, haz clic en {% octicon "pencil" aria-label="The edit icon" %}.![Botón para editar un archivo de flujo de trabajo](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. Después de que hayas editado el archivo, da clic en **Iniciar confirmación** y completa el formato de "Cambios de la confirmación". Puedes elegir confirmar directamente en la rama actual, o crear una rama nueva e iniciar una solicitud de extracción. ![Confirmar la actualización del flujo de trabajo de codeql.yml](/assets/images/help/repository/code-scanning-workflow-update.png)

Para obtener más información acerca de la edición de flujos de trabajo, consulta la sección "[Configurar un flujo de trabajo](/actions/configuring-and-managing-workflows/configuring-a-workflow)".

### Configurar la frecuencia

Puedes escanear código con cierta programación o cuando ocurren eventos específicos en un repositorio.

Escanear el código en cada carga al repositorio, y cada vez que se crea una solicitud de extracción, previene que los desarrolladores introduzcan vulnerabilidades y errores nuevos en dicho código. Escanear el código con una programación definida te informará de las últimas vulnerabilidades y errores que {% data variables.product.company_short %}, los investigadores de seguridad, y la comunidad descubren, aún cuando los desarrolladores no estén manteniendo el repositorio activamente.

#### Escanear cuando se carga información

Si utilizas el flujo de trabajo predeterminado, el {% data variables.product.prodname_code_scanning %} escaneará el código en tu repositorio una vez por semana, adicionalmente a los escaneos activados por los eventos. Para ajustar este programa, edita el valor `cron` en el flujo de trabajo. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on)".

#### Escanear las solicitudes de extracción

**Nota**: Las palabras clave `paths` y `paths-ignore` que se utilizan en el contexto del archivo de configuración de {% data variables.product.prodname_code_scanning %} no deberán confundirse con las mismas palabras clave cuando se utilicen para `on.<push|pull_request>.paths`. Cuando se tulizan para modificar `on.<push|pull_request>` en un archivo de flujo de trabajo, éstas determinan si las acciones se ejecutarán cuando alguien modifique el código en los directorios especificados. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".

Para obtener más información acerca del evento `pull_request`, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)".

#### Escanear de forma pre-programada

El flujo de trabajo del {% data variables.product.prodname_code_scanning %} utiliza el evento `pull_request` para activar un escaneo de código en la confirmación `HEAD` de una solicitud de extracción. Para ajustar este programa, edita el valor `cron` en el flujo de trabajo. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule)".

{% note %}

**Nota**: {% data variables.product.prodname_dotcom %} solo ejecuta jobs pre-programados que se encuentren en flujos de trabajo de la rama predeterminada. Cambiar la programación en un flujo de trabajo en cualquier otra rama no tendrá efecto hasta que fusiones esta rama con la predeterminada.

{% endnote %}

#### Ejemplo

The following example shows a {% data variables.product.prodname_codeql_workflow %} for a particular repository that has a default branch called `main` and one protected branch called `protected`.

``` yaml
on:
  push:
  pull_request:
  schedule:
    - cron: '0 15 * * 0'
```

This workflow scans:
* Every push to the default branch and the protected branch
* Every pull request to the default branch
* The default branch at 3 P.M. every Sunday

### Especificar un sistema operativo

Si tu código requiere un sistema operativo específico para compilar, puedes configurarlo en tu flujo de trabajo. Edita el valor de `jobs.<job_id>.runs-on` para especificar el sistema operativo para la máquina que ejecuta tus acciones de {% data variables.product.prodname_code_scanning %}. {% if currentVersion ver_gt "enterprise-server@2.21" %}You specify the operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```
{% endif %}

{% data variables.product.prodname_code_scanning_capc %} es compatible con las últimas versiones de macOs, Ubuntu, y Windows. Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. For more information, see {% if currentVersion ver_gt "enterprise-server@2.21" %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)" and "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}."

### Invalidar la detección automática de lenguaje

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring {% data variables.product.prodname_code_scanning %} for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages)."

{% data reusables.code-scanning.supported-languages %}

{% data reusables.code-scanning.specify-language-to-analyze %}

Para invalidar la detección automática de lenguajes, agrega `with:languages:` a la acción de `init` en tu flujo de trabajo. Las palabras clave para los lenguajes compatibles son `cpp`, `csharp`, `go`, `java`, `javascript`, y `python`.

Por ejemplo, la siguiente configuración limita a {% data variables.product.prodname_code_scanning %} para reconocer C/C++, C#, y Python.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    languages: cpp, csharp, python
```

### Ejecutar consultas adicionales

{% data reusables.code-scanning.run-additional-queries %}

Para agregar uno o más conjuntos de consultas, agrega una sección de `queries` a tu archivo de configuración.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    - queries: COMMA-SEPARATED LIST OF PATHS
```

También puedes ejecutar conjuntos de consultas adicionales si los especificas en un archivo de configuración. Los conjuntos de consultas son colecciones de consultas que a menudo se agrupan por propósito o lenguaje.

{% data reusables.code-scanning.codeql-query-suites %}

Puedes ejecutar consultas adicionales si las especificas en un archivo de configuración. If you want to run the combined set of additional queries specified here and in the configuration file, prefix the value of `queries` in the workflow with the `+` symbol. Para encontrar ejemplos de archivos de configuración, consulta la sección "[Ejemplos de archivos de configuración](#example-configuration-files)".

In the following example, the `+` symbol ensures that the specified additional queries are used together with any queries specified in the referenced configuration file.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    - config-file: ./.github/codeql/codeql-config.yml
    - queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

### Utilizar una herramienta de escaneo de código de terceros

As an alternative to specifying which queries to run in the workflow file, you can do this in a separate configuration file. You can also use a configuration file to disable the default queries and to specify which directories to scan during analysis.

In the workflow file, use the `config-file` parameter of the `init` action to specify the path to the configuration file you want to use. Este ejemplo carga el archivo de configuración _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

The configuration file can be located within the local repository, or in a public, remote repository. For remote repositories, you can use the _owner/repository/file.yml@branch_ syntax. The settings in the file are written in YAML format.

#### Specifying additional queries

You specify additional queries in a `queries` array. Each element of the array contains a `uses` parameter with a value that identifies a single query file, a directory containing query files, or a query suite definition file.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls
```

Optionally, you can give each array element a name, as shown in the example configuration files below.

For more information about additional queries, see "[Running additional queries](#running-additional-queries)" above.

#### Inhabilitar las consultas predeterminadas

Si solo quieres ejecutar consultas personalizadas, puedes inhabilitar las consultas de seguridad predeterminadas si agregas `disable-default-queries: true` a tu archivo de configuración.

#### Especificar directorios para escanear

For the interpreted languages that {% data variables.product.prodname_codeql %} supports (Python and JavaScript/TypeScript), you can restrict {% data variables.product.prodname_code_scanning %} to files in specific directories by adding a `paths` array to the configuration file. You can exclude the files in specific directories from scans by adding a `paths-ignore` array.

``` yaml
paths: 
  - src 
paths-ignore: 
  - node_modules
  - '**/*.test.js'
```

{% note %}

**Note**:

* The `paths` and `paths-ignore` keywords, used in the context of the {% data variables.product.prodname_code_scanning %} configuration file, should not be confused with the same keywords when used for `on.<push|pull_request>.paths` in a workflow. When they are used to modify `on.<push|pull_request>` in a workflow, they determine whether the actions will be run when someone modifies code in the specified directories. Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)".
* `**` **Note**: `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. Por ejemplo, `foo/**`, `**/foo`, y `foo/**/bar` son todas sintaxis permitidas, pero `**foo` no lo es. Sin embargo, puedes utilizar asteriscos sencillos con otros caracteres, tal como se muestra en el ejemplo. You'll need to quote anything that contains a `*` character.

{% endnote %}

Para C/C++, C# y Java, si quieres limitar el {% data variables.product.prodname_code_scanning %} para directorios específicos en tu proyecto, deberás especificar los pasos de compilación adecuados en el flujo de trabajo. Los comandos que necesites utilizar para excluir un directorio de la compilación dependerán en tu sistema de compilación. For more information, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

Puedes analizar rápidamente partes pequeñas de un monorepo cuando modificas el código en directorios específicos. Necesitarás tanto excluir los directorios en tus pasos de compilación como utilizar las palabras clave `paths-ignore` y `paths` para [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) en tu archivo de flujo de trabajo.

#### Ejemplos de archivos de configuración

{% data reusables.code-scanning.example-configuration-files %}

### Configurar {% data variables.product.prodname_code_scanning %} para los lenguajes compilados

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages)."

### Acceder a repositorios privados

Si tu flujo de trabajo para {% data variables.product.prodname_code_scanning %} accede a repositorios privados en {% data variables.product.prodname_dotcom %}, necesitarás configurar Git para autenticarte con un token de acceso personal. Define el secreto en el ambiente del ejecutor utilizando `jobs.<job_id>.steps.env` en tu flujo de trabajo antes de cualquier acción de {% data variables.product.prodname_codeql %}. Para obtener más información, consulta la sección "[Crear un token de acceso personal para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)" y "[Crear y almacenar secretos cifrados](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)".

Por ejemplo, la siguiente configuración hace que Git reemplace las URL completas en los repositorios `github/foo`, `github/bar`, y `github/baz` en {% data variables.product.prodname_dotcom_the_website %} con las URL que incluyen el token de acceso personal que almacenas en la variable de ambiente `ACCESS_TOKEN`.

{% raw %}
```yaml
steps:
- name: Configure access to private repository on GitHub.com
  env: TOKEN: ${{ secrets. ACCESS_TOKEN }}
  run: |
    git config --global url."https://${TOKEN}@github.com/github/foo".insteadOf "https://github.com/github/foo"
    git config --global url."https://${TOKEN}@github.com/github/bar".insteadOf "https://github.com/github/bar"
    git config --global url."https://${TOKEN}@github.com/github/baz".insteadOf "https://github.com/github/baz"
```
{% endraw %}

### Puedes escribir un archivo de configuración para {% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_dotcom %} can display code analysis data generated externally by a third-party tool. Puedes mostrar el análisis de código de una herramienta de terceros en {% data variables.product.prodname_dotcom %} su agregas la acción `upload-sarif` en tu flujo de trabajo. Para obtener más información, consulta la sección "[Cargar un archivo SARIF a GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)".
