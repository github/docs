---
ms.openlocfilehash: f37c93394be7f73c417b5cd040696b453c82e42d
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/17/2022
ms.locfileid: "148169244"
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
Docker {% ifversion dependabot-version-updates-enhanced-docker-support %}<sup>[1]</sup>{% endif %}         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
submódulo de git  | `gitsubmodule`   | N/A (sin versión) | **✓** | **✓** | |
Acciones de GitHub | `github-actions` | N/A (sin versión) | **✓** | **✓** | |
Módulos de Go     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | N/A (sin versión)<sup>[2]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | N/A (sin versión)<sup>[3]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6, v7, v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[4]</sup> | **✓** | **✓** | |
pip{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}          | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}   | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
pub            | `pub`            | v2 <sup>[6]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13, <= 1.2.x  | **✓** | **✓** | |
{% ifversion dependabot-yarn-v3-update %}yarn           | `npm`            | v1, v2, v3       | **✓** | **✓** | **✓**<sup>[7]</sup> |{% else %}yarn           | `npm`            | v1               | **✓** | **✓** |  |
{% endif %}

{% tip %}

**Sugerencia:** Para los administradores de paquetes tales como `pipenv` y `poetry`, necesitas utilizar el valor `pip` de YAML. Por ejemplo, si utilizas `poetry` para administrar tus dependencias de Python y quieres que el {% data variables.product.prodname_dependabot %} monitoree el archivo de manifiesto de tu dependencia para encontrar versiones, utiliza `package-ecosystem: "pip"` en tu archivo de *dependabot.yml*.

{% endtip %}

{% ifversion dependabot-version-updates-enhanced-docker-support %} [1] {% data variables.product.prodname_dependabot %} puede actualizar etiquetas de imagen de Docker en manifiestos de Kubernetes. Agrega una entrada al elemento `package-ecosystem` de Docker del archivo _dependabot.yml_ para cada directorio que contenga un manifiesto de Kubernetes que haga referencia a etiquetas de imagen de Docker. Los manifiestos de Kubernetes pueden ser archivos YAML de implementación de Kubernetes o gráficos de Helm. Para obtener información sobre cómo configurar el archivo _dependabot.yml_ para `docker`, consulta "`package-ecosystem`" en "[Opciones de configuración para el archivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)".

   {% data variables.product.prodname_dependabot %} admite registros de Docker públicos y privados. Para obtener una lista de los registros admitidos, consulta "`docker-registry`" en "[Opciones de configuración para el archivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)".
{% endif %}

[2] {% data variables.product.prodname_dependabot %} no ejecuta Gradle, pero admite actualizaciones de los siguientes archivos: `build.gradle`, `build.gradle.kts` (para proyectos de Kotlin) y los archivos incluidos en la declaración `apply` que tiene `dependencies` en el nombre de archivo. Ten en cuenta que `apply` no es compatible con `apply to`, con la recursión o con las sintaxis avanzadas (por ejemplo, el `apply` de Kotlin con `mapOf`, que son nombres de archivo que se definen por propiedad).

[3] {% data variables.product.prodname_dependabot %} no ejecuta Maven, pero admite actualizaciones de los archivos `pom.xml`.

[4] {% data variables.product.prodname_dependabot %} no ejecuta la CLI de NuGet, pero sí admite la mayoría de las características hasta la versión 4.8.

{% ifversion dependabot-PEP621-support %} [5] Además de admitir actualizaciones de los archivos `requirements.txt`, {% data variables.product.prodname_dependabot %} admite actualizaciones de los archivos `pyproject.toml` si siguen el estándar PEP 621. {% endif %}

La compatibilidad con {% ifversion fpt or ghec or ghes > 3.4 %} [6] {% ifversion ghes = 3.5 %}`pub` está actualmente en versión beta. Las limitaciones conocidas están sujetas a cambios. Ten en cuenta que {% data variables.product.prodname_dependabot %}:
   - No admite la actualización de dependencias de git para `pub`. 
   - No realizará una actualización cuando se omita la versión a la que intenta actualizar, incluso si hay disponible una versión anterior.

   Para obtener información sobre cómo configurar el archivo _dependabot.yml_ para `pub`, consulta "[Habilitación de la compatibilidad con ecosistemas de nivel beta](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)".
   {%- else %}{% data variables.product.prodname_dependabot %} no realizará una actualización de `pub` cuando la versión que intenta actualizar se omite, incluso si hay una versión anterior disponible.{% endif %} {% endif %} 

{% ifversion dependabot-yarn-v3-update %} [7] Dependabot admite dependencias de proveedor a partir de la versión 2.{% endif %}

