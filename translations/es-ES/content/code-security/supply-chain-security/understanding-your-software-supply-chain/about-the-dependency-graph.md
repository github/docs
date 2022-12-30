---
title: Acerca del gráfico de dependencias
intro: Puedes utilizar la gráfica de dependencias para identificar todas las dependencias de tus proyectos. La gráfica de dependencias es compatible con una variedad de ecosistemas de paquetes populares.
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
ms.openlocfilehash: 4a8d58f0844337e7b8f88aabe72690a9a46bfaa0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106497'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## Acerca del gráfico de dependencias

{% data reusables.dependabot.about-the-dependency-graph %}

Al insertar una confirmación en {% data variables.product.product_name %} que cambie o agregue un archivo de bloqueo o de manifiesto admitido a la rama predeterminada, el gráfico de dependencias se actualizará de forma automática.{% ifversion fpt or ghec %} Además, el gráfico se actualiza cuando alguien inserte un cambio en el repositorio de una de las dependencias.{% endif %} Para más información sobre los ecosistemas y archivos de manifiesto admitidos, vea "[Ecosistemas de paquetes admitidos](#supported-package-ecosystems)" a continuación.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Cuando creas una solicitud de cambios que contenga los cambios de las dependencias que apuntan a la rama predeterminada, {% data variables.product.prodname_dotcom %} utiliza la gráfica de dependencias para agregar revisiones de dependencia a la solicitud de cambios. Estas indican si las dependencias contendrán vulnerabilidades y, si es el caso, la versión de la dependencia en la cual se arregló la vulnerabilidad. Para más información, vea "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".

## Disponibilidad de la gráfica de dependencias

{% ifversion fpt or ghec %}El gráfico de dependencias está disponible para cada repositorio público que defina las dependencias en un ecosistema de paquetes compatible con un formato de archivo admitido. Los administradores de repositorio también pueden configurar la gráfica de dependencias para los repositorios privados. {% endif %}Para obtener más información {% ifversion ghes %}sobre la configuración del gráfico de dependencias{% endif %}, consulta "[Configuración del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)".

{% data reusables.code-scanning.enterprise-enable-dependency-graph %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## Dependencias que se incluyen

El gráfico de dependencias incluye todas las dependencias de un repositorio que se detallan en los archivos de manifiesto y bloqueo, o su equivalente, para los ecosistemas admitidos{% ifversion dependency-submission-api %}, así como las dependencias que se envían mediante la API de envío de dependencias (en beta){% endif %}. Esto incluye:

- Las dependencias directas, que se definen explícitamente en un archivo de manifiesto o bloqueo {% ifversion dependency-submission-api %} o se han enviado mediante la API de envío de dependencias (en beta){% endif %}
- Las dependencias indirectas de estas dependencias directas, también conocidas como dependencias transitorias o sub-dependencias

El gráfico de dependencias identifica dependencias indirectas{% ifversion fpt or ghec %} ya sea de forma explícita desde un archivo de bloqueo o mediante la comprobación de las dependencias de las dependencias directas. Para la gráfica más confiable, debes utilizar archivos de bloqueo (o su equivalente), ya que estos definen exactamente qué versiones de las dependencias directas e indirectas estás utilizando actualmente. Si utilizas archivos de bloqueo, también te aseguras de que todos los contribuyentes del repositorio están utilizando las mismas versiones, lo cual te facilitará el probar y depurar el código{% else %} de los archivos de bloqueo{% endif %}.

Para obtener más información sobre cómo {% data variables.product.product_name %} te ayuda a comprender las dependencias de tu entorno, consulta "[Acerca de la seguridad de la cadena de suministro](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)".

{% ifversion fpt or ghec %}

## Dependientes incluídos

Para los repositorios públicos, únicamente se reportan los repositorios públicos que dependen de éste o de los paquetes que publicas. Esta información no se reporta para los repositorios privados.{% endif %}

## Utiizar la gráfica de dependencias

Puedes utilizar la gráfica de dependencias para:

- Explore los repositorios de los que depende el código en{% ifversion fpt or ghec %} y los que dependen de él{% endif %}. Para obtener más información, consulte "[Exploración de las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)". {% ifversion ghec %}
- Ver en un solo tablero un resumen de las dependencias que se utilizan en los repositorios de tu organización. Para más información, vea "[Visualización de conclusiones de la organización](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)".{% endif %}
- Ver y actualizar las dependencias vulnerables de tu repositorio. Para más información, consulta "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".{% ifversion fpt or ghes or ghec %}
- Consulta la información sobre las dependencias vulnerables en las solicitudes de cambios. Para más información, vea "[Revisión de los cambios de dependencias en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".{% endif %}

## Ecosistemas de paquetes compatibles

Los formatos recomendados definen explícitamente qué versiones se utilizan para todas las dependencias directas e indirectas. Si usa estos formatos, el gráfico de dependencias será más preciso. También refleja la configuración de compilación actual y permite que el gráfico de dependencias notifique vulnerabilidades tanto en las dependencias directas como en las indirectas.{% ifversion fpt or ghec %} Las dependencias indirectas que se infieren de un archivo de manifiesto (o equivalente) se excluyen de las comprobaciones de dependencias no seguras.{% endif %}

| Administrador de paquetes | Idiomas | Formatos recomendados | Todos los formatos admitidos |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %} | Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` | {%- endif %} | Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` | | NuGet | Lenguajes de .NET (C#, F#, VB), C++  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` | {%- ifversion github-actions-in-dependency-graph %} | Flujos de trabajo de {% data variables.product.prodname_actions %}<sup>[†]</sup> | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` | {%- endif %} | Módulos de Go | Go | `go.sum` | `go.mod`, `go.sum` | | Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`| | pip             | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`<sup>[‡]</sup> | {%- ifversion dependency-graph-dart-support %} | pub             | Dart                    | `pubspec.lock` | `pubspec.yaml`, `pubspec.lock` | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` | {%- endif %} | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% ifversion github-actions-in-dependency-graph %} [†] {% data reusables.enterprise.3-5-missing-feature %} Los flujos de trabajo de {% data variables.product.prodname_actions %} se deben ubicar en el directorio `.github/workflows/` de un repositorio para que se reconozcan como manifiestos. Las acciones o flujos de trabajo a los que se hace referencia mediante la sintaxis `jobs[*].steps[*].uses` o `jobs.<job_id>.uses` se analizarán como dependencias. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions)".

{% endif %}

[‡] Si enumeras las dependencias de Python dentro de un archivo `setup.py`, es posible que no podamos analizar y enumerar cada una de las dependencias del proyecto.

{% ifversion github-actions-in-dependency-graph %} {% note %}

**Nota:** Las dependencias de flujos de trabajo de {% data variables.product.prodname_actions %} se muestran en el gráfico de dependencias con fines informativos. Las alertas del dependabot no son compatibles actualmente con los flujos de trabajo de {% data variables.product.prodname_actions %}.

{% endnote %} {% endif %}

{% ifversion dependency-submission-api %}Puedes usar la API de envío de dependencias (en beta) para agregar dependencias desde el administrador de paquetes o el ecosistema de tu elección al gráfico de dependencias, incluso si el ecosistema no está en la lista de ecosistemas compatibles anterior. El gráfico de dependencias mostrará las dependencias enviadas agrupadas por ecosistema, pero por separado de las dependencias analizadas de los archivos de manifiesto o de bloqueo. Solo obtendrás {% data variables.product.prodname_dependabot_alerts %} para las dependencias que proceden de uno de los [ecosistemas compatibles](https://github.com/github/advisory-database#supported-ecosystems) de {% data variables.product.prodname_advisory_database %}. Para obtener más información sobre la API de envío de dependencias, consulta "[Uso de la API de envío de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".{% endif %}
## Información adicional

- "[Gráfico de dependencias](https://en.wikipedia.org/wiki/Dependency_graph)" en Wikipedia
- "[Exploración de las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
- "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Solución de problemas en la detección de dependencias vulnerables](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
