---
title: Como habilitar a Segurança Avançada do GitHub para sua empresa
shortTitle: Enabling GitHub Advanced Security
intro: 'É possível configurar o {% data variables.product.product_name %} para incluir o {% data variables.product.prodname_GH_advanced_security %}. Isso fornece recursos extras que ajudam os usuários a encontrar e corrigir problemas de segurança em seu código.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875525'
---
## Sobre habilitar {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %} Quando você habilita o {% data variables.product.prodname_GH_advanced_security %} para sua empresa, os administradores de repositório em todas as organizações podem habilitar os recursos, a menos que você configure uma política para restringir o acesso. Para obter mais informações, confira "[Como impor políticas à {% data variables.product.prodname_advanced_security %} na sua empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{% else %} Quando você habilita o {% data variables.product.prodname_GH_advanced_security %} para sua empresa, os administradores de repositório em todas as organizações podem habilitar os recursos. {% endif %}

{% ifversion ghes %} Para obter diretrizes sobre uma implantação em fases do GitHub Advanced Security, confira "[Introdução à adoção do GitHub Advanced Security em escala](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)".
{% endif %}

## Verificando se a sua licença inclui {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, a página de licença incluirá uma seção que mostra os detalhes do uso atual.
![Seção {% data variables.product.prodname_GH_advanced_security %} da licença Enterprise](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png) {% endif %}

## Pré-requisitos para habilitar {% data variables.product.prodname_GH_advanced_security %}

1. Faça upgrade da sua licença do {% data variables.product.product_name %} para incluir o {% data variables.product.prodname_GH_advanced_security %}.{% ifversion ghes %} Para obter informações sobre licenciamento, confira "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% endif %}
2. Faça o download do novo arquivo de licença. Para obter mais informações, confira "[Como baixar sua licença do {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)".
3. Faça o upload do novo arquivo de licença para {% data variables.product.product_location %}. Para obter mais informações, confira "[Como carregar uma nova licença do {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% ifversion ghes %}
4. Revise os pré-requisitos para as funcionalidades que você pretende habilitar.

    - {% data variables.product.prodname_code_scanning_capc %}, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)".
    - {% data variables.product.prodname_secret_scanning_caps %}, confira "[Como configurar a {% data variables.product.prodname_secret_scanning %} para seu dispositivo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)".{% endif %}
    - {% data variables.product.prodname_dependabot %}, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)". 

## Habilitar e desabilitar funcionalidades de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. Em "Segurança", marque os recursos que deseja habilitar e desmarque os que deseja desabilitar.
{% ifversion ghes %}![Caixa de seleção para habilitar ou desabilitar recursos do {% data variables.product.prodname_advanced_security %}](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![Caixa de seleção para habilitar ou desabilitar recursos do {% data variables.product.prodname_advanced_security %}](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. Em "{% data variables.product.prodname_advanced_security %}", clique em **{% data variables.product.prodname_code_scanning_capc %}** .
![Caixa de seleção usada para habilitar ou desabilitar a {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

Quando {% data variables.product.product_name %} terminar de reiniciar, você estará pronto para definir todas as funcionalidades adicionais necessárias para recursos recém-habilitados. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance)".

## Habilitar ou desabilitar as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} por meio do shell administrativo (SSH)

Você pode habilitar ou desabilitar as funcionalidades programaticamente em {% data variables.product.product_location %}. Para obter mais informações sobre o shell administrativo e os utilitários de linha de comando do {% data variables.product.prodname_ghe_server %}, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" e "[Utilitários de linha de comando](/admin/configuration/command-line-utilities#ghe-config)".

Por exemplo, você pode habilitar qualquer recurso de {% data variables.product.prodname_GH_advanced_security %} com as suas ferramentas de código de infraestrutura ao implantar uma instância para preparação ou recuperação de desastres.

1. Entre com o SSH no {% data variables.product.product_location %}.
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
    - Para habilitar o grafo de dependência, insira {% ifversion ghes %}o comando{% else %}os comandos{% endif %} a seguir.
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
    - Para desabilitar {% data variables.product.prodname_secret_scanning %}, digite o seguinte comando.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - Para desabilitar o grafo de dependência, insira {% ifversion ghes %}o comando{% else %}os comandos{% endif %} a seguir.
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
