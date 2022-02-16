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

## Acerca del gráfico de dependencias

{% data reusables.dependabot.about-the-dependency-graph %} For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"

After you enable the dependency graph for your enterprise, you can enable {% data variables.product.prodname_dependabot %} to detect vulnerable dependencies in your repository{% ifversion ghes > 3.2 %} and automatically fix the vulnerabilities{% endif %}. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_dependabot %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% ifversion ghes > 3.1 %}
Puedes habilitar la gráfica de dependencias a través de la {% data variables.enterprise.management_console %} o del shell administrativo. We recommend using the {% data variables.enterprise.management_console %} unless {% data variables.product.product_location %} uses clustering.

## Habilitar la gráfica de dependencias a través de la {% data variables.enterprise.management_console %}

If your {% data variables.product.product_location %} uses clustering, you cannot enable the dependency graph with the {% data variables.enterprise.management_console %} and must use the administrative shell instead. For more information, see "[Enabling the dependency graph via the administrative shell](#enabling-the-dependency-graph-via-the-administrative-shell)."

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Debajo de "Seguridad", haz clic en **Gráfica de dependencias**. ![Casilla de verificación para habilitar o inhabilitar la gráfica de dependencias](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Da clic en **Visitar tu instancia**.

## Habilitar la gráfica de dependencias a través del shell administrativo

{% endif %}{% ifversion ghes < 3.2 %}
## Habilitar la gráfica de dependencias
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. En el shell administrativo, habilita la gráfica de dependencias en {% data variables.product.product_location %}:
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
2. Aplica la configuración
    ```shell
    $ ghe-config-apply
    ```
3. Regresa a {% data variables.product.prodname_ghe_server %}.
