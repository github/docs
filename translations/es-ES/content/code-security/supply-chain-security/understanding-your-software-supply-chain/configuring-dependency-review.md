---
title: Configuración de la revisión de dependencias
intro: Puedes usar la revisión de dependencias para detectar vulnerabilidades antes de que se agreguen al proyecto.
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
ms.openlocfilehash: e7fae5d42e4f7c14098414c28e5b5eb857c39687
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107505'
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
## Configuración de la {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-beta-note %} {% data reusables.dependency-review.dependency-review-action-overview %}

Están disponibles las siguientes opciones de configuración.

| Opción | Obligatorio | Uso |
|------------------|-------------------------------|--------|
| `fail-on-severity` | Opcionales | Define el umbral del nivel de gravedad (`low`, `moderate`, `high` y `critical`).</br>La acción generará un error en las solicitudes de incorporación de cambios que introduzcan vulnerabilidades del nivel de gravedad especificado o superior. |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | Opcional | Contiene una lista de licencias permitidas. Encontrarás los valores posibles para este parámetro en la página [Licencias](/rest/licenses) de la documentación de la API.</br>La acción producirá un error en las solicitudes de incorporación de cambios que introducen dependencias con licencias que no coinciden con la lista.{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | Opcional | Contiene una lista de licencias prohibidas. Encontrarás los valores posibles para este parámetro en la página [Licencias](/rest/licenses) de la documentación de la API.</br>La acción producirá un error en las solicitudes de incorporación de cambios que introducen dependencias con licencias que coincidan con las de la lista.|{% endif %}

{% ifversion dependency-review-action-licenses %} {% tip %}

**Sugerencia**: Las opciones `allow-licenses` y `deny-licenses` se excluyen mutuamente.

{% endtip %} {% endif %}

En este archivo de ejemplo de {% data variables.product.prodname_dependency_review_action %} se muestra cómo se pueden usar estas opciones de configuración. Observa que en el ejemplo se usa el número de versión corta para la acción (`v2`) en lugar de un número de versión de gravedad (por ejemplo, `v2.0.8`). Esto garantiza que uses la versión secundaria más reciente de la acción.

```yaml{:copy}
name: 'Dependency Review'
on: [pull_request]

permissions:
  contents: read

jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
      - name: Dependency Review
        uses: actions/dependency-review-action@v2
        with:
          # Possible values: "critical", "high", "moderate", "low" 
          fail-on-severity: critical
{% ifversion dependency-review-action-licenses %}
          # You can only can only include one of these two options: `allow-licenses` and `deny-licences`
          # ([String]). Only allow these licenses (optional)
          # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # allow-licenses: GPL-3.0, BSD-3-Clause, MIT

          # ([String]). Block the pull request on these licenses (optional)
          # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # deny-licenses: LGPL-2.0, BSD-2-Clause
{% endif %}
```

Para obtener más información sobre las opciones de configuración, consulta [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}
