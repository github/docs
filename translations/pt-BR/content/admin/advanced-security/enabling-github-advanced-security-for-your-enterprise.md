---
title: Habilitar o GitHub Advanced Security para a sua empresa
shortTitle: Habilitar o GitHub Advanced Security
intro: 'Você pode configurar {% data variables.product.product_name %} para incluir {% data variables.product.prodname_GH_advanced_security %}. Isso fornece funcionalidades extras que ajudam os usuários a encontrar e corrigir problemas de segurança no seu código.'
product: '{% data reusables.gated-features.ghas %}'
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

## Sobre habilitar {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes > 3.0 %}
Ao habilitar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa, os administradores de repositórios em todas as organizações poderão habilitar as funcionalidades, a menos que você configure uma política para restringir o acesso. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_advanced_security %} na sua empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{% else %}
Ao habilitar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa, os administradores de repositórios em todas as organizações podem habilitar as funcionalidades. {% ifversion ghes = 3.0 %}Para obter mais informações, consulte "[Gerenciar as configurações de segurança e análise de sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" e "[Gerenciar as configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).{% endif %}
{% endif %}

## Pré-requisitos para habilitar {% data variables.product.prodname_GH_advanced_security %}

1. Upgrade your license for {% data variables.product.product_name %} to include {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes > 3.0 %} For information about licensing, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}
2. Download the new license file. For more information, see "[Downloading your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."
3. Upload the new license file to {% data variables.product.product_location %}. For more information, see "[Uploading a new license to {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% ifversion ghes > 2.22 %}
4. Revise os pré-requisitos para as funcionalidades que você pretende habilitar.

    - {% data variables.product.prodname_code_scanning_capc %}, consulte "[Configurando {% data variables.product.prodname_code_scanning %} para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)."
    - {% data variables.product.prodname_secret_scanning_caps %}, consulte "[Configurando {% data variables.product.prodname_secret_scanning %} para seu dispositivo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)."{% endif %}
    - {% data variables.product.prodname_dependabot %}, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."

## Verificando se a sua licença inclui {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes > 3.0 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, a página de licença incluirá uma seção que mostra os detalhes do uso atual. ![Seção de {% data variables.product.prodname_GH_advanced_security %} de licença empresarial](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
{% endif %}

{% ifversion ghes = 2.22 or ghes = 3.0 %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Se a sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, haverá uma entrada de **{% data variables.product.prodname_advanced_security %}** na barra lateral esquerda. ![Barra lateral de segurança avançada](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}
{% endif %}

## Habilitar e desabilitar funcionalidades de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes > 2.22 %}
1. Under "{% ifversion ghes < 3.2 %}{% data variables.product.prodname_advanced_security %}{% else %}Security{% endif %}," select the features that you want to enable and deselect any features you want to disable. ![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% else %}
1. Em "{% data variables.product.prodname_advanced_security %}," clique em **{% data variables.product.prodname_code_scanning_capc %}**. ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

Quando {% data variables.product.product_name %} terminar de reiniciar, você estará pronto para definir todas as funcionalidades adicionais necessárias para recursos recém-habilitados. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_code_scanning %} para seu aplicativo ](/admin/advanced-security/configuring-code-scanning-for-your-appliance)".

## Enabling or disabling {% data variables.product.prodname_GH_advanced_security %} features via the administrative shell (SSH)

Você pode habilitar ou desabilitar as funcionalidades programaticamente em {% data variables.product.product_location %}. Para mais informações sobre o shell administrativo e os utilitários da linha de comando para {% data variables.product.prodname_ghe_server %}, consulte "[Acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" e "[Utilitários de linha de comando](/admin/configuration/command-line-utilities#ghe-config)".

For example, you can enable any {% data variables.product.prodname_GH_advanced_security %} feature with your infrastructure-as-code tooling when you deploy an instance for staging or disaster recovery.

1. SSH em {% data variables.product.product_location %}.
1. Enable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To enable {% data variables.product.prodname_code_scanning_capc %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - To enable {% data variables.product.prodname_secret_scanning_caps %}, enter the following command.
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - To enable {% data variables.product.prodname_dependabot %}, enter the following command.
    ```shell
    {% ifversion ghes > 3.1 %}ghe-config app.dependency-graph.enabled true{% else %}ghe-config app.github.dependency-graph-enabled true{% endif %}
    ```
2. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - To disable {% data variables.product.prodname_secret_scanning %}, enter the following command.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - To disable {% data variables.product.prodname_dependabot %}, enter the following command.
    ```shell
    {% ifversion ghes > 3.1 %}ghe-config app.dependency-graph.enabled false{% else %}ghe-config app.github.dependency-graph-enabled false{% endif %}
    ```

3. Aplique a configuração.
    ```shell
    ghe-config-apply
    ```
