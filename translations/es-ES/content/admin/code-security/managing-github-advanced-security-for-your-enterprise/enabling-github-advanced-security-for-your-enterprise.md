---
title: Habilitación de GitHub Advanced Security para su empresa
shortTitle: Enabling GitHub Advanced Security
intro: 'Puedes configurar {% data variables.product.product_name %} para que incluya {% data variables.product.prodname_GH_advanced_security %}. Esto proporciona características adicionales que ayudan a los usuarios a encontrar y solucionar problemas de seguridad en su código.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/enabling-github-advanced-security-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: bc516af0c0788eeafe1b833c5627e471982e1c05
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878564'
---
## Acerca de habilitar la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %} Cuando habilita {% data variables.product.prodname_GH_advanced_security %} para la empresa, los administradores de repositorios de todas las organizaciones pueden habilitar las características, a menos que configure una directiva para restringir el acceso. Para más información, vea "[Aplicación de directivas para {% data variables.product.prodname_advanced_security %} en la empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{% else %} Cuando habilita {% data variables.product.prodname_GH_advanced_security %} para la empresa, los administradores de repositorios de todas las organizaciones pueden habilitar las características. {% endif %}

{% ifversion ghes %} Para obtener instrucciones sobre cómo hacer una implementación por fases de GitHub Advanced Security, consulta "[Introducción a la adopción de GitHub Advanced Security a gran escala](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)".
{% endif %}

## Verificar si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}, la página de licencia incluirá una sección que muestra los detalles de uso actuales.
![Sección de {% data variables.product.prodname_GH_advanced_security %} de la licencia Enterprise](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png) {% endif %}

## Prerequisitos para habilitar la {% data variables.product.prodname_GH_advanced_security %}

1. Actualice la licencia de {% data variables.product.product_name %} para incluir {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes %} Para obtener información sobre las licencias, vea "[Acerca de la facturación para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% endif %}
2. Descarga el archivo de licencia nuevo. Para más información, vea "[Descarga de la licencia para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)".
3. Carga el archivo de licencia nuevo en {% data variables.product.product_location %}. Para obtener más información, vea "[Carga de una nueva licencia en {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% ifversion ghes %}
4. Revisa los prerequisitos para las características que piensas habilitar.

    - {% data variables.product.prodname_code_scanning_capc %}, vea "[Configuración de {% data variables.product.prodname_code_scanning %} para el dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)".
    - {% data variables.product.prodname_secret_scanning_caps %}, vea "[Configuración de {% data variables.product.prodname_secret_scanning %} para el dispositivo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)".{% endif %}
    - {% data variables.product.prodname_dependabot %}, vea "[Habilitación de {% data variables.product.prodname_dependabot %} para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)". 

## Habilitar e inhabilitar las característcicas de la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. Debajo de "Seguridad", selecciona las características que quieres habilitar y quita la selección las que quieres deshabilitar.
{% ifversion ghes %}![Casilla para habilitar o deshabilitar las características de {% data variables.product.prodname_advanced_security %} ](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![Casilla para habilitar o deshabilitar las características de {% data variables.product.prodname_advanced_security %} ](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. En "{% data variables.product.prodname_advanced_security %}", haga clic en **{% data variables.product.prodname_code_scanning_capc %}** .
![Casilla para habilitar o deshabilitar {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

Cuando {% data variables.product.product_name %} termina de reiniciarse, estás listo para configurar cualquier recurso adicional que se requiera para las características recién habilitadas. Para más información, vea "[Configuración de {% data variables.product.prodname_code_scanning %} para el dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance)".

## Habilitar o inhabilitar las características de la {% data variables.product.prodname_GH_advanced_security %} a través del shell administrativo (SSH)

Puedes habilitar o inhabilitar las características mediante programación en {% data variables.product.product_location %}. Para obtener más información sobre el shell administrativo y las utilidades de línea de comandos para {% data variables.product.prodname_ghe_server %}, vea "[Acceso al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" y "[Utilidades de la línea de comandos](/admin/configuration/command-line-utilities#ghe-config)".

Por ejemplo, puedes habilitar cualquier característica de {% data variables.product.prodname_GH_advanced_security %} con tus herramientas de infraestructura-como-código cuando despliegas una instancia para hacer pruebas o para recuperación de desastres.

1. SSH en {% data variables.product.product_location %}.
1. Habilita las características de {% data variables.product.prodname_GH_advanced_security %}.

    - Para habilitar el {% data variables.product.prodname_code_scanning_capc %}, ingresa los siguientes comandos.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - Para habilitar el {% data variables.product.prodname_secret_scanning_caps %}, ingresa el siguiente comando.
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - Para habilitar el gráfico de dependencias, escribe {% ifversion ghes %}command{% else %}commands{% endif %}.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
    ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
2. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - Para inhabilitar el {% data variables.product.prodname_secret_scanning %}, ingresa el siguiente comando.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - Para deshabilitar el gráfico de dependencias, escribe {% ifversion ghes %}command{% else %}commands{% endif %}.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled false
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled false
    ghe-config app.github.vulnerability-alerting-and-settings-enabled false
    ```{% endif %}
3. Apply the configuration.
    ```shell
    ghe-config-apply
    ```
