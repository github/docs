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
ms.openlocfilehash: 39fb5e8eb74518dc4614d5494ec04427b5e12399
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135676'
---
## Sobre o gráfico de dependências

{% data reusables.dependabot.about-the-dependency-graph %} Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

Depois de habilitar o grafo de dependência da empresa, você pode habilitar o {% data variables.product.prodname_dependabot %} para detectar as dependências vulneráveis no repositório{% ifversion ghes %} e corrigir as vulnerabilidades automaticamente{% endif %}. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% ifversion ghes %} Você pode habilitar o grafo de dependência por meio do {% data variables.enterprise.management_console %} ou do shell administrativo. Recomendamos usar o {% data variables.enterprise.management_console %}, a menos que a {% data variables.location.product_location %} use clustering.

## Habilitando o gráfico de dependências por meio do {% data variables.enterprise.management_console %}

Se a {% data variables.location.product_location %} usar clustering, não será possível habilitar o grafo de dependência com o {% data variables.enterprise.management_console %}. Nesse caso, use o shell administrativo. Para obter mais informações, confira "[Como habilitar o grafo de dependência por meio do shell administrativo](#enabling-the-dependency-graph-via-the-administrative-shell)".

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", clique em **Grafo de dependência**.
![Caixa de seleção usada para habilitar ou desabilitar o grafo de dependência](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. Clique em **Acessar sua instância**.

## Habilitando o gráfico de dependências por meio do shell administrativo

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. No shell administrativo, habilite o grafo de dependência em {% data variables.location.product_location %}: {% ifversion ghes %}```shell  ghe-config app.dependency-graph.enabled true
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
