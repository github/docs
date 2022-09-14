---
title: Habilitando o gráfico de dependências para a sua empresa
intro: Você pode permitir que os usuários identifiquem as dependências dos seus projetos habilitando o gráfico de dependências.
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: 6d4ba1a4e69c557a359bb0e99b02d92ff5fb99e0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '147062279'
---
## <a name="about-the-dependency-graph"></a>Sobre o gráfico de dependências

{% data reusables.dependabot.about-the-dependency-graph %} Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"

Depois de habilitar o grafo de dependência da empresa, você pode habilitar o {% data variables.product.prodname_dependabot %} para detectar as dependências vulneráveis no repositório{% ifversion ghes > 3.2 %} e corrigir as vulnerabilidades automaticamente{% endif %}. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% ifversion ghes %} Você pode habilitar o grafo de dependência por meio do {% data variables.enterprise.management_console %} ou do shell administrativo. Recomendamos usar o {% data variables.enterprise.management_console %}, a menos que {% data variables.product.product_location %} use clustering.

## <a name="enabling-the-dependency-graph-via-the--data-variablesenterprisemanagement_console-"></a>Habilitando o gráfico de dependências por meio do {% data variables.enterprise.management_console %}

Se o seu {% data variables.product.product_location %} usar clustering, você não poderá habilitar o gráfico de dependências com o {% data variables.enterprise.management_console %} e deverá usar o shell administrativo. Para obter mais informações, confira "[Como habilitar o grafo de dependência por meio do shell administrativo](#enabling-the-dependency-graph-via-the-administrative-shell)".

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", clique em **Grafo de dependência**.
![Caixa de seleção usada para habilitar ou desabilitar o grafo de dependência](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. Clique em **Acessar sua instância**.

## <a name="enabling-the-dependency-graph-via-the-administrative-shell"></a>Habilitando o gráfico de dependências por meio do shell administrativo

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. No shell administrativo, habilite o grafo de dependência no {% data variables.product.product_location %}:  {% ifversion ghes %}```shell  ghe-config app.dependency-graph.enabled true
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
3. Volte para o {% data variables.product.prodname_ghe_server %}.
