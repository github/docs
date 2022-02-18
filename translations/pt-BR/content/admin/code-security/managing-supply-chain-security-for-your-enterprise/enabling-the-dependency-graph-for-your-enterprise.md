---
title: Enabling the dependency graph for your enterprise
intro: You can allow users to identify their projects' dependencies by enabling the dependency graph.
shortTitle: Enable dependency graph
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

{% data reusables.dependabot.about-the-dependency-graph %} For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"

After you enable the dependency graph for your enterprise, you can enable {% data variables.product.prodname_dependabot %} to detect vulnerable dependencies in your repository{% ifversion ghes > 3.2 %} and automatically fix the vulnerabilities{% endif %}. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% ifversion ghes > 3.1 %}
Você pode habilitar o gráfico de dependências por meio do {% data variables.enterprise.management_console %} ou do shell administrativo. We recommend using the {% data variables.enterprise.management_console %} unless {% data variables.product.product_location %} uses clustering.

## Habilitando o gráfico de dependências por meio do {% data variables.enterprise.management_console %}

If your {% data variables.product.product_location %} uses clustering, you cannot enable the dependency graph with the {% data variables.enterprise.management_console %} and must use the administrative shell instead. For more information, see "[Enabling the dependency graph via the administrative shell](#enabling-the-dependency-graph-via-the-administrative-shell)."

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", clique em **Gráfico de dependência**. ![Caixa de seleção para habilitar ou desabilitar o gráfico de dependências](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Clique **Visit your instance** (Visite sua instância).

## Habilitando o gráfico de dependências por meio do shell administrativo

{% endif %}{% ifversion ghes < 3.2 %}
## Habilitar o gráfico de dependências
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. No shell administrativo, habilite o gráfico de dependências em {% data variables.product.product_location %}:
    {% ifversion ghes > 3.1 %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Aplique a configuração.
    ```shell
    $ ghe-config-apply
    ```
3. Volte para o {% data variables.product.prodname_ghe_server %}.
