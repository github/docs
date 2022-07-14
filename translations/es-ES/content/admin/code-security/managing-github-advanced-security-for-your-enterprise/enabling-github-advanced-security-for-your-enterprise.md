---
title: Habilitar la Seguridad Avanzada de GitHub para tu empresa
shortTitle: Habilitar la Seguridad Avanzada de GitHub
intro: 'Puedes configurar {% data variables.product.product_name %} para que incluya la {% data variables.product.prodname_GH_advanced_security %}. Esto proporciona características adicionales que ayudan a los usuarios a encontrar y solucionar problemas de seguridad en su código.'
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
---

## Acerca de habilitar la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %}
Cuando habilitas la {% data variables.product.prodname_GH_advanced_security %} para tu empresa, los administradores de repositorio de todas las organizaciones pueden habilitar las características a menos de que configures una política para restringir el acceso. Para obtener más información, consulta la sección "[Requerir políticas para la {% data variables.product.prodname_advanced_security %} en tu empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{% else %}
Cuando habilitas la {% data variables.product.prodname_GH_advanced_security %} para tu empresa, los administradores de repositorio en todas las organizaciones pueden habilitar las características.
{% endif %}

{% ifversion ghes %}
Para obtener orientación sobre cómo hacer un despliegue en fases de GitHub Advanced Security, consulta la sección "[Desplegar GitHub Advanced Security en tu empresa](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)".
{% endif %}

## Verificar si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}, la página de licencia incluirá una sección que muestra los detalles de uso actuales. ![Sección de {% data variables.product.prodname_GH_advanced_security %} de la licencia empresarial](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
{% endif %}

## Prerequisitos para habilitar la {% data variables.product.prodname_GH_advanced_security %}

1. Mejora tu licencia para que {% data variables.product.product_name %} incluya la {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes %} Para obtener más información sobre el licenciamiento, consulta la sección "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% endif %}
2. Descarga el archivo de licencia nuevo. Paa obtener más información, consulta la sección "[Descargar tu licencia para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)".
3. Carga el archivo de licencia nuevo en {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Cargar una licencia nueva en {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% ifversion ghes %}
4. Revisa los prerequisitos para las características que piensas habilitar.

    - {% data variables.product.prodname_code_scanning_capc %}, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} para tu aplicativo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)".
    - {% data variables.product.prodname_secret_scanning_caps %}, consulta la sección "[Configurar el {% data variables.product.prodname_secret_scanning %} para tu aplicativo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)".{% endif %}
    - {% data variables.product.prodname_dependabot %}, consulta la sección "[Habilitar al {% data variables.product.prodname_dependabot %} para tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

## Habilitar e inhabilitar las característcicas de la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. Under "Security," select the features that you want to enable and deselect any features you want to disable.
{% ifversion ghes %}![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. Debajo de "{% data variables.product.prodname_advanced_security %}", da clic en **{% data variables.product.prodname_code_scanning_capc %}**. ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

Cuando {% data variables.product.product_name %} termina de reiniciarse, estás listo para configurar cualquier recurso adicional que se requiera para las características recién habilitadas. Para obtener más información, consulta "[Configurar el {% data variables.product.prodname_code_scanning %} en tu aplicativo](/admin/advanced-security/configuring-code-scanning-for-your-appliance)."

## Habilitar o inhabilitar las características de la {% data variables.product.prodname_GH_advanced_security %} a través del shell administrativo (SSH)

Puedes habilitar o inhabilitar las características mediante programación en {% data variables.product.product_location %}. Para obtener más información acerca de las utilidades del shell administrativo y de la línea de comandos para {% data variables.product.prodname_ghe_server %}, consulta las secciones "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" y "[Utilidades de la línea de comandos](/admin/configuration/command-line-utilities#ghe-config)".

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
    - Para habilitar la gráfica de dependencias, {% ifversion ghes %}ingresa el siguiente comando{% else %}ingresa los siguientes comandos{% endif %}.
    {% ifversion ghes %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
    ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
2. Opcionalmente, inhabilita las características de {% data variables.product.prodname_GH_advanced_security %}.

    - Para inhabilitar el {% data variables.product.prodname_code_scanning %}, ingresa los siguientes comandos.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - Para inhabilitar el {% data variables.product.prodname_secret_scanning %}, ingresa el siguiente comando.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - Para inhabilitar la gráfica de dependencias, {% ifversion ghes %}ingresa el siguiente comando{% else %}ingresa los siguientes comandos{% endif %}.
    {% ifversion ghes %}```shell
    ghe-config app.dependency-graph.enabled false
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled false
    ghe-config app.github.vulnerability-alerting-and-settings-enabled false
    ```{% endif %}
3. Aplica la configuración
    ```shell
    ghe-config-apply
    ```
