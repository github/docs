---
title: Acerca del gráfico de dependencias
intro: Puedes utilizar la gráfica de dependencias para identificar todas las dependencias de tus proyectos. La gráfica de dependencias es compatible con una variedad de ecosistemas de paquetes populares.
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '>=3.0'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Gráfica de dependencias
---

<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## Disponibilidad de la gráfica de dependencias

La gráfica de dependencias se encuentra disponible para cualquier repositorio {% ifversion fpt %}público{% endif %} que defina dependencias en un ecosistema de paquetes compatible utilizando un formato de archivos compatible.{% ifversion fpt %}Los administradores de repositorio también pueden configurar la gráfica de dependencias para los repositorios privados.{% endif %}

## Acerca del gráfico de dependencias

La gráfica de dependencias es un resumen de los archivos de bloqueo y de manifiesto que se almacenan en un repositorio. Para cada repositorio, muestra{% ifversion fpt %}:

- Las dependencias, ecosistemas y paquetes de los cuales depende
- Los dependientes, repositorios y paquetes que dependen de ella{% else %} dependencias, es decir, los ecosistemas y los paquetes de los cuales depende. {% data variables.product.prodname_ghe_server %} no calcula información alguna sobre los dependientes, repositorios y paquetes que dependen de un repositorio.{% endif %}

Cuando cargas una confirmación a {% data variables.product.product_name %} que cambie o agregue un archivo de bloqueo o de manifiesto a la rama predeterminada, la gráfica de dependencias se actualizará automáticamente.{% ifversion fpt %} Adicionalmente, la gráfica se actualiza cuando alguien cargue un cambio en el repositorio de una de tus dependencias.{% endif %} Para obtener más información sobre los sistemas y archivos de manifiesto compatibles, consulta la sección "[Ecosistemas de paquetes compatibles](#supported-package-ecosystems)" a continuación.

{% ifversion fpt or ghes > 3.1 %}
Cuando creas una solicitud de cambios que contenga los cambios de las dependencias que apuntan a la rama predeterminada, {% data variables.product.prodname_dotcom %} utiliza la gráfica de dependencias para agregar revisiones de dependencia a la solicitud de cambios. Estas indican si las dependencias contendrán vulnerabilidades y, si es el caso, la versión de la dependencia en la cual se arregló la vulnerabilidad. Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

## Dependencias que se incluyen

La gráfica de dependencias incluye todas las dependencias de un repositorio que se describan en los archivos de manifiesto y de bloqueo o sus equivalentes para los ecosistemas compatibles. Esto incluye:

- Las dependencias directas que se definen explícitamente en el archivo de manifiesto o de bloqueo
- Las dependencias indirectas de estas dependencias directas, también conocidas como dependencias transitorias o sub-dependencias

La gráfica de dependencias identifica dependencias indirectas{% ifversion fpt %} ya sea explícitamente desde un archivo de bloqueo o mediante la verificación de dependencias de tus dependencias directas. Para la gráfica más confiable, debes utilizar archivos de bloqueo (o su equivalente), ya que estos definen exactamente qué versiones de las dependencias directas e indirectas estás utilizando actualmente. Si utilizas archivos de bloqueo, también te aseguras de que todos los contribuyentes del repositorio están utilizando las mismas versiones, lo cual te facilitará el probar y depurar el código{% else %} de los archivos de bloqueo{% endif %}.

{% ifversion fpt %}
## Dependientes incluídos

Para los repositorios públicos, únicamente se reportan los repositorios públicos que dependen de éste o de los paquetes que publicas. Esta información no se reporta para los repositorios privados.{% endif %}

## Utiizar la gráfica de dependencias

Puedes utilizar la gráfica de dependencias para:

- Explora los repositorios de los cuales depende tu código{% ifversion fpt %}, y aquellos que dependen de éste{% endif %}. Para obtener más información, consulta la sección "[Explorar las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)". {% ifversion fpt %}
- Ver en un solo tablero un resumen de las dependencias que se utilizan en los repositorios de tu organización. Para obtener más información, consulta "[Ver información de tu organización](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)".{% endif %}
- Ver y actualizar las dependencias vulnerables de tu repositorio. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)". |{% ifversion fpt or ghes > 3.1 %}
- Consulta la información sobre las dependencias vulnerables en las solicitudes de cambios. Para obtener más información, consulta la sección "[Revisar los cambios de dependencia en una solicitud de cambios](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)".{% endif %}

## Habilitar la gráfica de dependencias

{% ifversion fpt %}Para generar una gráfica de dependencias, {% data variables.product.product_name %} necesita acceso de solo lectura a los archivos de manifiesto y de bloqueo de un repositorio. La gráfica de dependencias se genera automáticamente para todos los repositorios públicos y puedes elegir habilitarla para los privados. For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."

{% ifversion ghes %}Si la gráfica de dependencias no se encuentra disponible en tu sistema, tu administrador de sitio puede habilitarla junto con las {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Habilitar las alertas para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

Cuando la gráfica de dependencias se habilita por primera vez, cualquier manifiesto y archivo de bloqueo para los ecosistemas compatibles se pasarán de inmediato. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Una vez que se habilita, la gráfica se actualiza automáticamente con cada carga al repositorio{% ifversion fpt %} y con cada carga a cualquier otro repositorio de la gráfica{% endif %}.

## Ecosistemas de paquetes compatibles

Los formatos recomendados definen explícitamente qué versiones se utilizan para todas las dependencias directas e indirectas. Si utilizas estos formatos, tu gráfica de dependencias será más precisa. También refleja la configuración actual de la compilación y habilita a la gráfica de dependencias para que reporte las vulnerabilidades tanto en las dependencias directas como en las indirectas.{% ifversion fpt %} Las dependencias indirectas que se infieren desde un archivo de manifiesto (o equivalente) se excluyen de las verificaciones para dependencias vulnerables.{% endif %}

| Administración de paquetes | Idiomas                          | Formatos recomendados                                  | Todos los formatos compatibles                                            |
| -------------------------- | -------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Composer                   | PHP                              | `composer.lock`                                        | `composer.json`, `composer.lock`                                          |
| `dotnet` CLI               | .NET languages (C#, C++, F#, VB) | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
{%- ifversion fpt or ghes > 3.2 %}
| Go modules | Go | `go.sum` | `go.mod`, `go.sum` |
{%- elsif ghes = 3.2 %}
| Go modules | Go | `go.mod` | `go.mod` |
{%- endif %}
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`| | Python PIP      | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`* | | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% note %}

**Nota:** Si listas tus dependencias de Python dentro de un archivo `setup.py`, es probable que no podamos analizar y listar cada una de las dependencias en tu proyecto.

{% endnote %}

## Leer más

- "[Gráfica de dependencias](https://en.wikipedia.org/wiki/Dependency_graph)" en Wikipedia
- "[Explorar las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"{% ifversion fpt %}
- "[Ver la información de tu organización](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Solucionar problemas en la detección de dependencias vulnerables](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
