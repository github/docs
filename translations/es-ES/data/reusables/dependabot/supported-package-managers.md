---
ms.openlocfilehash: 073c21c1480e0f9f699687c730aef2bb670654e7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146689025"
---
La siguiente tabla muestra, para cada administrador de paquetes:
- El valor YAML a utilizar en el archivo *dependabot.yml*
- Las versiones compatibles del administrador de paquetes
- Si las dependencias en los repositorios o registros privados de {% data variables.product.prodname_dotcom %} son compatibles
- Si las dependencias delegadas a proveedores son compatibles

Administrador de paquetes | El valor de YAML      | Versiones compatibles | Los repositorios privados | Registros privados | Delegamiento a proveedores
---------------|------------------|------------------|:---:|:---:|:---:
Bundler        | `bundler`        | v1, v2           | | **✓** | **✓** |
Cargo          | `cargo`          | v1               | **✓** | **✓** | |
Composer       | `composer`       | v1, v2           | **✓** | **✓** | |
Docker         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
submódulo de git  | `gitsubmodule`   | N/A (sin versión) | **✓** | **✓** | |
Acciones de GitHub | `github-actions` | N/A (sin versión) | **✓** | **✓** | |
Módulos de Go     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | N/A (sin versión)<sup>[1]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | N/A (sin versión)<sup>[2]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6, v7, v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[3]</sup> | **✓** | **✓** | |
pip            | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile    | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
pub            | `pub`            | v2 <sup>[4]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13, <= 1.2.x  | **✓** | **✓** | |
yarn           | `npm`            | v1               | **✓** | **✓** | |

{% tip %}

**Sugerencia:** Para los administradores de paquetes tales como `pipenv` y `poetry`, necesitas utilizar el valor `pip` de YAML. Por ejemplo, si utilizas `poetry` para administrar tus dependencias de Python y quieres que el {% data variables.product.prodname_dependabot %} monitoree el archivo de manifiesto de tu dependencia para encontrar versiones, utiliza `package-ecosystem: "pip"` en tu archivo de *dependabot.yml*.

{% endtip %}

[1] El {% data variables.product.prodname_dependabot %} no ejecuta Gradle pero es compatible con las actualizaciones de los siguientes archivos: `build.gradle`, `build.gradle.kts` (para los proyectos de Kotlin), y los archivos que se incluyen a través de la declaración `apply` que tengan `dependencies` en el nombre de archivo. Ten en cuenta que `apply` no es compatible con `apply to`, con la recursión o con las sintaxis avanzadas (por ejemplo, el `apply` de Kotlin con `mapOf`, que son nombres de archivo que se definen por propiedad).

[2] El {% data variables.product.prodname_dependabot %} no ejecuta Maven, pero es compatible con las actualizaciones a los archivos `pom.xml`.

[3] El {% data variables.product.prodname_dependabot %} no ejecuta el CLI de NuGet pero sí es compatible con la mayoría de las características hasta la versión 4.8.

La compatibilidad con {% ifversion fpt or ghec or ghes > 3.4 %} [4] {% ifversion ghes = 3.5 %}`pub` está actualmente en versión beta. Las limitaciones conocidas están sujetas a cambios. Ten en cuenta que {% data variables.product.prodname_dependabot %}:
   - No admite la actualización de dependencias de git para `pub`. 
   - No realizará una actualización cuando se omita la versión a la que intenta actualizar, incluso si hay disponible una versión anterior.

   Para obtener información sobre cómo configurar el archivo _dependabot.yml_ para `pub`, consulta "[Habilitación de la compatibilidad con ecosistemas de nivel beta](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)".
   {%- else %}{% data variables.product.prodname_dependabot %} no realizará una actualización de `pub` cuando la versión que intenta actualizar se omite, incluso si hay una versión anterior disponible.{% endif %} {% endif %} 
