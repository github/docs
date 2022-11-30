---
title: Habilitación del gráfico de dependencias para la empresa
intro: Puedes permitir que los usuarios identifiquen las dependencias de sus proyectos si habilitas el gráfico de dependencias.
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: 39fb5e8eb74518dc4614d5494ec04427b5e12399
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135683'
---
## Acerca del gráfico de dependencias

{% data reusables.dependabot.about-the-dependency-graph %} Para más información, vea "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

Después de habilitar el gráfico de dependencias para tu empresa, puedes habilitar {% data variables.product.prodname_dependabot %} a fin de detectar dependencias poco seguras en el repositorio{% ifversion ghes %} y corregir automáticamente las vulnerabilidades{% endif %}. Para obtener más información, consulte "[Habilitación de {% data variables.product.prodname_dependabot %} para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% ifversion ghes %} Puedes habilitar el gráfico de dependencias mediante {% data variables.enterprise.management_console %} o el shell administrativo. Se recomienda usar {% data variables.enterprise.management_console %}, a menos que {% data variables.location.product_location %} uses la agrupación en clústeres.

## Habilitar la gráfica de dependencias a través de la {% data variables.enterprise.management_console %}

Si {% data variables.location.product_location %} usa la agrupación en clústeres, no puedes habilitar el gráfico de dependencias con {% data variables.enterprise.management_console %} y debes usar el shell administrativo en su lugar. Para obtener más información, consulte "[Habilitación del gráfico de dependencias mediante el shell administrativo](#enabling-the-dependency-graph-via-the-administrative-shell)".

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. En "Security" (Seguridad), haga clic en **Dependency graph** (Gráfico de dependencias).
![Casilla para habilitar o deshabilitar el gráfico de dependencias](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. Haga clic en **Visit your instance** (Visitar la instancia).

## Habilitar la gráfica de dependencias a través del shell administrativo

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. En el shell administrativo, habilita el gráfico de dependencias en {% data variables.location.product_location %}:  {% ifversion ghes %}```shell  ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Apply the configuration.
    ```shell
    $ ghe-config-apply
    ```
3. Regresar a {% data variables.product.prodname_ghe_server %}.
