---
title: Habilitando o gráfico de dependências para a sua empresa
intro: Você pode permitir que os usuários identifiquem as dependências dos seus projetos habilitando o gráfico de dependências.
shortTitle: Habilitar gráfico de dependências
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
---

## Sobre o gráfico de dependências

{% data reusables.dependabot.about-the-dependency-graph %} Para obter mais informações, consulte "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"

Depois de habilitar o gráfico de dependências para a sua empresa, você poderá habilitar {% data variables.product.prodname_dependabot %} para detectar dependências inseguras no seu repositório{% ifversion ghes > 3.2 %} e corrigir automaticamente as vulnerabilidades{% endif %}. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% ifversion ghes %}
Você pode habilitar o gráfico de dependências por meio do {% data variables.enterprise.management_console %} ou do shell administrativo. Recomendamos usar o {% data variables.enterprise.management_console %}, a menos que {% data variables.product.product_location %} use clustering.

## Habilitando o gráfico de dependências por meio do {% data variables.enterprise.management_console %}

Se o seu {% data variables.product.product_location %} usar clustering, você não poderá habilitar o gráfico de dependências com o {% data variables.enterprise.management_console %} e deverá usar o shell administrativo. Para obter mais informações, consulte[Habilitando o gráfico de dependências por meio do shell administrativo](#enabling-the-dependency-graph-via-the-administrative-shell)".

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", clique em **Gráfico de dependência**. ![Caixa de seleção para habilitar ou desabilitar o gráfico de dependências](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Clique **Visit your instance** (Visite sua instância).

## Habilitando o gráfico de dependências por meio do shell administrativo

{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. No shell administrativo, habilite o gráfico de dependências em {% data variables.product.product_location %}:
    {% ifversion ghes %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Aplique a configuração.
    ```shell
    $ ghe-config-apply
    ```
3. Volte para o {% data variables.product.prodname_ghe_server %}.
