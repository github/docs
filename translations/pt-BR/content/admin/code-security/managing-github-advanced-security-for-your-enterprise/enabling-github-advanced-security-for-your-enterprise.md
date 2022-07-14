---
title: Habilitar o GitHub Advanced Security para a sua empresa
shortTitle: Habilitar o GitHub Advanced Security
intro: 'Você pode configurar {% data variables.product.product_name %} para incluir {% data variables.product.prodname_GH_advanced_security %}. Isso fornece funcionalidades extras que ajudam os usuários a encontrar e corrigir problemas de segurança no seu código.'
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

## Sobre habilitar {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %}
Ao habilitar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa, os administradores de repositórios em todas as organizações poderão habilitar as funcionalidades, a menos que você configure uma política para restringir o acesso. Para obter mais informações, consulte "[Aplicar políticas para {% data variables.product.prodname_advanced_security %} na sua empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{% else %}
Ao habilitar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa, os administradores de repositórios em todas as organizações podem habilitar as funcionalidades.
{% endif %}

{% ifversion ghes %}
Para obter orientação sobre uma implantação em fases da segurança avançada do GitHub, consulte "[Implantando a segurança avançada do GitHub na sua empresa](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)".
{% endif %}

## Verificando se a sua licença inclui {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, a página de licença incluirá uma seção que mostra os detalhes do uso atual. ![Seção de {% data variables.product.prodname_GH_advanced_security %} de licença empresarial](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
{% endif %}

## Pré-requisitos para habilitar {% data variables.product.prodname_GH_advanced_security %}

1. Atualize a sua licença para {% data variables.product.product_name %} para incluir {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes %} Para obter informações sobre a licença, consulte "[Sobre cobrança para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}
2. Faça o download do novo arquivo de licença. Para obter mais informações, consulte "[Fazer o download da sua licença para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)".
3. Faça o upload do novo arquivo de licença para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Fazer o upload de uma nova licença para {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% ifversion ghes %}
4. Revise os pré-requisitos para as funcionalidades que você pretende habilitar.

    - {% data variables.product.prodname_code_scanning_capc %}, consulte "[Configurando {% data variables.product.prodname_code_scanning %} para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)."
    - {% data variables.product.prodname_secret_scanning_caps %}, consulte "[Configurando {% data variables.product.prodname_secret_scanning %} para seu dispositivo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)."{% endif %}
    - {% data variables.product.prodname_dependabot %}, consulte "[Habilitando {% data variables.product.prodname_dependabot %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

## Habilitar e desabilitar funcionalidades de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. Em "Segurança", selecione as funcionalidades que você deseja habilitar e desmarque todas as funcionalidades que deseja desabilitar.
{% ifversion ghes %}![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. Em "{% data variables.product.prodname_advanced_security %}," clique em **{% data variables.product.prodname_code_scanning_capc %}**. ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

Quando {% data variables.product.product_name %} terminar de reiniciar, você estará pronto para definir todas as funcionalidades adicionais necessárias para recursos recém-habilitados. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_code_scanning %} para seu aplicativo ](/admin/advanced-security/configuring-code-scanning-for-your-appliance)".

## Habilitar ou desabilitar as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} por meio do shell administrativo (SSH)

Você pode habilitar ou desabilitar as funcionalidades programaticamente em {% data variables.product.product_location %}. Para mais informações sobre o shell administrativo e os utilitários da linha de comando para {% data variables.product.prodname_ghe_server %}, consulte "[Acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" e "[Utilitários de linha de comando](/admin/configuration/command-line-utilities#ghe-config)".

Por exemplo, você pode habilitar qualquer recurso de {% data variables.product.prodname_GH_advanced_security %} com as suas ferramentas de código de infraestrutura ao implantar uma instância para preparação ou recuperação de desastres.

1. SSH em {% data variables.product.product_location %}.
1. Habilitar funcionalidades para {% data variables.product.prodname_GH_advanced_security %}.

    - Para habilitar {% data variables.product.prodname_code_scanning_capc %}, digite os comandos a seguir.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - Para habilitar {% data variables.product.prodname_secret_scanning_caps %}, digite o comando a seguir.
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - Para habilitar o gráfico de dependência, digite o comando a seguir{% ifversion ghes %}{% else %}comandos{% endif %}.
    {% ifversion ghes %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
    ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
2. Opcionalmente, desabilite as funcionalidades para {% data variables.product.prodname_GH_advanced_security %}.

    - Para desabilitar {% data variables.product.prodname_code_scanning %}, digite os seguintes comandos.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - Para desabilitar {% data variables.product.prodname_secret_scanning %}, digite o seguinte comando.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - Para desabilitar o gráfico de dependência, insira o seguinte {% ifversion ghes %}comando{% else %}comando{% endif %}.
    {% ifversion ghes %}```shell
    ghe-config app.dependency-graph.enabled false
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled false
    ghe-config app.github.vulnerability-alerting-and-settings-enabled false
    ```{% endif %}
3. Aplique a configuração.
    ```shell
    ghe-config-apply
    ```
