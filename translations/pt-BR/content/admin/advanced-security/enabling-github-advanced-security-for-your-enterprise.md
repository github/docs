---
title: Habilitar o GitHub Advanced Security para a sua empresa
shortTitle: Habilitar o GitHub Advanced Security
intro: 'Você pode configurar {% data variables.product.product_name %} para incluir {% data variables.product.prodname_GH_advanced_security %}. Isso fornece funcionalidades extras que ajudam os usuários a encontrar e corrigir problemas de segurança no seu código.'
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

### Sobre habilitar {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
Ao habilitar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa, os administradores de repositórios em todas as organizações poderão habilitar as funcionalidades, a menos que você configure uma política para restringir o acesso. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_advanced_security %} na sua empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{% else %}
Ao habilitar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa, os administradores de repositórios em todas as organizações podem habilitar as funcionalidades. {% if currentVersion == "enterprise-server@3.0" %}Para obter mais informações, consulte "[Gerenciar as configurações de segurança e análise de sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" e "[Gerenciar as configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).{% endif %}
{% endif %}

### Pré-requisitos para habilitar {% data variables.product.prodname_GH_advanced_security %}

1. Atualize sua licença para {% data variables.product.product_name %} para incluir {% data variables.product.prodname_GH_advanced_security %}.{% if currentVersion ver_gt "enterprise-server@3.0" %} Para obter informações sobre licenças, consulte "[Sobre licenciamento para {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)".{% endif %}
2. Faça o upload da nova licença para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Gerenciar a sua licença do GitHub Enterprise](/admin/overview/managing-your-github-enterprise-license#uploading-a-new-license-to-github-enterprise-server)."{% if currentVersion ver_gt "enterprise-server@2.22" %}
3. Revise os pré-requisitos para as funcionalidades que você pretende habilitar.

    - {% data variables.product.prodname_code_scanning_capc %}, consulte "[Configurando {% data variables.product.prodname_code_scanning %} para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)."
    - {% data variables.product.prodname_secret_scanning_caps %}, consulte "[Configurando {% data variables.product.prodname_secret_scanning %} para seu dispositivo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)."{% endif %}

### Verificando se a sua licença inclui {% data variables.product.prodname_GH_advanced_security %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, a página de licença incluirá uma seção que mostra os detalhes do uso atual. ![Seção de {% data variables.product.prodname_GH_advanced_security %} de licença empresarial](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
{% endif %}

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Se a sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, haverá uma entrada de **{% data variables.product.prodname_advanced_security %}** na barra lateral esquerda. ![Barra lateral de segurança avançada](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}
{% endif %}

### Habilitar e desabilitar funcionalidades de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. Em "{% data variables.product.prodname_advanced_security %}", selecione as funcionalidades que você deseja habilitar e desmarque quaisquer funcionalidades que deseja desabilitar. ![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% else %}
1. Em "{% data variables.product.prodname_advanced_security %}," clique em **{% data variables.product.prodname_code_scanning_capc %}**. ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

Quando {% data variables.product.product_name %} terminar de reiniciar, você estará pronto para definir todas as funcionalidades adicionais necessárias para recursos recém-habilitados. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_code_scanning %} para seu aplicativo ](/admin/advanced-security/configuring-code-scanning-for-your-appliance)".

### Habilitar ou desabilitar {% data variables.product.prodname_GH_advanced_security %} através do shell administrativo (SSH)

Você pode habilitar ou desabilitar as funcionalidades programaticamente em {% data variables.product.product_location %}. Para mais informações sobre o shell administrativo e os utilitários da linha de comando para {% data variables.product.prodname_ghe_server %}, consulte "[Acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" e "[Utilitários de linha de comando](/admin/configuration/command-line-utilities#ghe-config)".

Por exemplo, você pode habilitar {% data variables.product.prodname_code_scanning %} com suas ferramentas de código de infraestrutura quando e quando você implantar uma instância para preparação ou recuperação de desastres.

1. SSH em {% data variables.product.product_location %}.
1. Habilite {% data variables.product.prodname_code_scanning %}.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
2. Opcionalmente, desabilite {% data variables.product.prodname_code_scanning %}.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
3. Aplique a configuração.
    ```shell
  ghe-config-apply
  ```

{% if currentVersion ver_gt "enterprise-server@2.22" %}Para habilitar e desabilitar {% data variables.product.prodname_secret_scanning %} da mesma forma, defina: `app ghe-config. ecret-scanning.enabled` como verdadeiro ou falso e aplique a configuração.{% endif %}
