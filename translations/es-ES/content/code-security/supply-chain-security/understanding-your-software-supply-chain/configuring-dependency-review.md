---
title: Configuración de la revisión de dependencias
intro: Puedes usar la revisión de dependencias para detectar vulnerabilidades antes de que se agreguen al proyecto.
miniTocMaxHeadingLevel: 3
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
ms.openlocfilehash: b5e5ccb5107cd96d1a88f896fd46d5b948a365cd
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163356'
---
## Acerca de la revisión de dependencias

{% data reusables.dependency-review.feature-overview %}   

Para obtener más información, consulta «[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)» y «[Revisión de los cambios de dependencia en una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)».

## Acerca de la configuración de la revisión de dependencias

{% ifversion fpt %} La revisión de dependencias está disponible en todos los repositorios públicos de todos los productos y no puede deshabilitarse. La revisión de dependencias está disponible en repositorios privados propiedad de las organizaciones que usan GitHub Enterprise Cloud y que tienen una licencia para [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security). Para más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %} La revisión de dependencias se incluye en {% data variables.product.product_name %} para los repositorios públicos. Para usar la revisión de dependencias en repositorios privados propiedad de las organizaciones, debes tener una licencia para [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) y tener habilitado el gráfico de dependencias.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. Si «{% data variables.product.prodname_GH_advanced_security %}» no está habilitado, haz clic en **Habilitar** junto a la característica.
   ![Captura de pantalla de la característica de seguridad avanzada de GitHub con el botón «Habilitar» resaltado](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes or ghae %}

La revisión de dependencias está disponible cuando el gráfico de dependencias está habilitado para {% data variables.location.product_location %} y {% data variables.product.prodname_advanced_security %} está habilitado para la organización o el repositorio.{% ifversion ghes %} Para obtener más información, consulta "[Habilitación de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)".{% endif %}

### Comprobación de si el gráfico de dependencias está habilitado

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. En «Configurar características de seguridad y análisis», comprueba si el gráfico de dependencias está habilitado. 
1. Si el gráfico de dependencias está habilitado, haz clic en **Habilitar** junto a «{% data variables.product.prodname_GH_advanced_security %}» para habilitar {% data variables.product.prodname_advanced_security %}, incluida la revisión de dependencias. El botón Habilitar está deshabilitado si tu empresa no tiene licencias disponibles para{% data variables.product.prodname_advanced_security %}.{% ifversion ghes %} ![Captura de pantalla de la configuración de características de seguridad y análisis.](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}

{% endif %}

{% ifversion dependency-review-action-configuration %}
## Acerca de la configuración de la {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-overview %}

Están disponibles las siguientes opciones de configuración.

| Opción | Obligatorio | Uso |
|------------------|-------------------------------|--------|
| `fail-on-severity` | Opcionales | Define el umbral del nivel de gravedad (`low`, `moderate`, `high` y `critical`).</br>La acción generará un error en las solicitudes de incorporación de cambios que introduzcan vulnerabilidades del nivel de gravedad especificado o superior. |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | Opcional | Contiene una lista de licencias permitidas. Encontrarás los valores posibles para este parámetro en la página [Licencias](/rest/licenses) de la documentación de la API.</br>La acción producirá un error en las solicitudes de incorporación de cambios que introducen dependencias con licencias que no coinciden con la lista.{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | Opcional | Contiene una lista de licencias prohibidas. Encontrarás los valores posibles para este parámetro en la página [Licencias](/rest/licenses) de la documentación de la API.</br>La acción producirá un error en las solicitudes de incorporación de cambios que introducen dependencias con licencias que coinciden con la lista.|{% endif %}{% ifversion dependency-review-action-fail-on-scopes %} | `fail-on-scopes` | Opcional | Contiene una lista de cadenas que representan los entornos de compilación que desea admitir (`development`, `runtime`, `unknown`). </br>La acción producirá un error en las solicitudes de incorporación de cambios que introducen vulnerabilidades en los ámbitos que coinciden con la lista.| {% endif %} | `allow-ghsas` | Opcional | Contiene una lista de {% data variables.product.prodname_advisory_database %} Identificadores que se pueden omitir durante la detección. Puedes encontrar los valores posibles para este parámetro en los [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories). | | `config-file` | Opcional | Especifica una ruta de acceso a un archivo de configuración. El archivo de configuración puede ser local en el repositorio o en un archivo ubicado en un repositorio externo.| | `external-repo-token` | Optional | Especifica un token para capturar el archivo de configuración, si este reside en un repositorio externo privado. El token debe tener acceso de lectura al repositorio.|

{% ifversion dependency-review-action-licenses %} {% tip %}

**Sugerencia**: Las opciones `allow-licenses` y `deny-licenses` se excluyen mutuamente.

{% endtip %} {% endif %}

## Configuración de la {% data variables.product.prodname_dependency_review_action %}

Hay dos métodos para configurar la {% data variables.product.prodname_dependency_review_action %}: 
- Insertar las opciones de configuración en el archivo de flujo de trabajo. 
- Hacer referencia a un archivo de configuración en el archivo de flujo de trabajo.

Observa que en todos los ejemplos se usa un número de versión corto para la acción (`v3`) en lugar de un número de versión SemVer (por ejemplo, `v3.0.8`). Esto garantiza que uses la versión secundaria más reciente de la acción.
### Usar la configuración insertada para configurar la {% data variables.product.prodname_dependency_review_action %}

1. Agrega un nuevo flujo de trabajo YAML a la carpeta `.github/workflows`.   
   
   {% ifversion ghes %}Para `runs-on`, la etiqueta predeterminada es `self-hosted`. Puedes reemplazar la etiqueta predeterminada por la etiqueta de cualquiera de los ejecutores.{% endif %}
  ```yaml{:copy}
  name: 'Dependency Review'
  on: [pull_request]

  permissions:
    contents: read

  jobs:
    dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
   ```
1. Especifique su configuración.   

   En este archivo de ejemplo de {% data variables.product.prodname_dependency_review_action %} se muestra cómo se pueden usar las opciones de configuración disponibles.
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
           # Possible values: "critical", "high", "moderate", "low" 
           fail-on-severity: critical
  {% ifversion dependency-review-action-licenses %}
           # You can only include one of these two options: `allow-licenses` and `deny-licences`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           deny-licenses: LGPL-2.0, BSD-2-Clause
  {% endif %}
           # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
           # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
  {% ifversion dependency-review-action-fail-on-scopes %}
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
  {% endif %}
   ```
### Uso de un archivo de configuración para configurar la {% data variables.product.prodname_dependency_review_action %}

1. Agrega un nuevo flujo de trabajo YAML a la carpeta `.github/workflows` y usa `config-file` para especificar que usas un archivo de configuración.

   {% ifversion ghes %}Para `runs-on`, la etiqueta predeterminada es `self-hosted`. Puedes reemplazar la etiqueta predeterminada por la etiqueta de cualquiera de los ejecutores.{% endif %}
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
    contents: read

   jobs:
     dependency-review:
       {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
            # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
            # Possible values: An absolute path to a local file or an external file.
            config-file: './.github/dependency-review-config.yml'   
            # Syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH
            config-file: 'github/octorepo/dependency-review-config.yml@main'

            # ([Token]) Use if your configuration file resides in a private external repository.
            # Possible values: Any GitHub token with read access to the private external repository.  
            external-repo-token: 'ghp_123456789abcde'
   ```
1. Crea el archivo de configuración en la ruta de acceso especificada.   

   En este archivo de ejemplo YAML se ilustra cómo puedes usar las opciones de configuración disponibles. 
   ```yaml{:copy}
     # Possible values: "critical", "high", "moderate", "low" 
     fail-on-severity: critical
   {% ifversion dependency-review-action-licenses %}
     # You can only include one of these two options: `allow-licenses` and `deny-licences`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     allow-licenses: 
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     deny-licenses: 
       - LGPL-2.0
       - BSD-2-Clause
   {% endif %}
      # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
      # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
     allow-ghsas: 
       - GHSA-abcd-1234-5679 
       - GHSA-efgh-1234-5679
   {% ifversion dependency-review-action-fail-on-scopes %}
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes: 
       - development 
       - runtime
  {% endif %}
  ```
Para obtener más información sobre las opciones de configuración, consulta [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}
