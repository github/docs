---
title: Habilitar la Seguridad Avanzada de GitHub para tu empresa
shortTitle: Habilitar la Seguridad Avanzada de GitHub
intro: 'Puedes configurar {% data variables.product.product_name %} para que incluya la {% data variables.product.prodname_GH_advanced_security %}. Esto proporciona características adicionales que ayudan a los usuarios a encontrar y solucionar problemas de seguridad en su código.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
---

### Acerca de habilitar la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
Cuando habilitas la {% data variables.product.prodname_GH_advanced_security %} para tu empresa, los administradores de repositorio de todas las organizaciones pueden habilitar las características a menos de que configures una política para restringir el acceso. Para obtener más información, consulta la sección "[Requerir políticas para la {% data variables.product.prodname_advanced_security %} en tu empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{% else %}
Cuando habilitas la {% data variables.product.prodname_GH_advanced_security %} para tu empresa, los administradores de repositorio en todas las organizaciones pueden habilitar las características. {% if currentVersion == "enterprise-server@3.0" %}Para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y análisis de tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" y "[Administrar la configuración y análisis de tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".{% endif %}
{% endif %}

### Prerequisitos para habilitar la {% data variables.product.prodname_GH_advanced_security %}

1. Actualiza tu licencia de {% data variables.product.product_name %} para incluir la {% data variables.product.prodname_GH_advanced_security %}.{% if currentVersion ver_gt "enterprise-server@3.0" %} Para encontrar más información sobre el licenciamiento, consulta la sección "[Acerca del licenciamiento para {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)".{% endif %}
2. Carga la licencia nueva en {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Administrar tu licencia de GitHub Enterprise](/admin/overview/managing-your-github-enterprise-license#uploading-a-new-license-to-github-enterprise-server)".{% if currentVersion ver_gt "enterprise-server@2.22" %}
3. Revisa los prerequisitos para las características que piensas habilitar.

    - {% data variables.product.prodname_code_scanning_capc %}, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} para tu aplicativo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)".
    - {% data variables.product.prodname_secret_scanning_caps %}, consulta la sección "[Configurar el {% data variables.product.prodname_secret_scanning %} para tu aplicativo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)".{% endif %}

### Verificar si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}, la página de licencia incluirá una sección que muestra los detalles de uso actuales. ![Sección de {% data variables.product.prodname_GH_advanced_security %} de la licencia empresarial](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
{% endif %}

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Si tu licencia incluye la {% data variables.product.prodname_GH_advanced_security %}, habrá una entrada de **{% data variables.product.prodname_advanced_security %}** en la barra lateral izquierda. ![Barra lateral de seguridad avanzada](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}
{% endif %}

### Habilitar e inhabilitar las característcicas de la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. Debajo de "{% data variables.product.prodname_advanced_security %}", selecciona las características que quieres habilitar y quita la selección las que quieres inhabilitar. ![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% else %}
1. Debajo de "{% data variables.product.prodname_advanced_security %}", da clic en **{% data variables.product.prodname_code_scanning_capc %}**. ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

Cuando {% data variables.product.product_name %} termina de reiniciarse, estás listo para configurar cualquier recurso adicional que se requiera para las características recién habilitadas. Para obtener más información, consulta "[Configurar el {% data variables.product.prodname_code_scanning %} en tu aplicativo](/admin/advanced-security/configuring-code-scanning-for-your-appliance)."

### Habilitar o inhabilitar el {% data variables.product.prodname_GH_advanced_security %} a través del shell administrativo (SSH)

Puedes habilitar o inhabilitar las características mediante programación en {% data variables.product.product_location %}. Para obtener más información acerca de las utilidades del shell administrativo y de la línea de comandos para {% data variables.product.prodname_ghe_server %}, consulta las secciones "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" y "[Utilidades de la línea de comandos](/admin/configuration/command-line-utilities#ghe-config)".

Por ejemplo, puedes habilitar el {% data variables.product.prodname_code_scanning %} con tus herramientas de infraestructura como código cuando despliegas una instancia para pruebas o recuperación de desastres.

1. SSH en {% data variables.product.product_location %}.
1. Habilitar el {% data variables.product.prodname_code_scanning %}.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
2. Opcionalmente, inhabilita el {% data variables.product.prodname_code_scanning %}.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
3. Aplica la configuración
    ```shell
  ghe-config-apply
  ```

{% if currentVersion ver_gt "enterprise-server@2.22" %}Para habilitar e inhabilitar el {% data variables.product.prodname_secret_scanning %} de la misma forma, configura: `ghe-config app.secret-scanning.enabled` como verdadero o falso y aplica la configuración.{% endif %}
