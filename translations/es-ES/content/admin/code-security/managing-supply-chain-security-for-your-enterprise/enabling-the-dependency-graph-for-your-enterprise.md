---
title: Habilitar la gráfica de dependencias para tu empresa
intro: Puedes permitir que los usuarios identifiquen las dependencias de sus proyectos si habilitas la gráfica de dependencias.
shortTitle: Habilitar la gráfica de dependencias
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

{% data reusables.dependabot.about-the-dependency-graph %} Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"

Después de que habilitas la gráfica de dependencias para tu empresa, puedes habilitar el {% data variables.product.prodname_dependabot %} para que detecte dependencias inseguras en tu repositorio{% ifversion ghes > 3.2 %} y corrija las vulnerabilidades automáticamente{% endif %}. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_dependabot %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% ifversion ghes %}
Puedes habilitar la gráfica de dependencias a través de la {% data variables.enterprise.management_console %} o del shell administrativo. Te recomendamos utilizar la {% data variables.enterprise.management_console %} a menos de que {% data variables.product.product_location %} utilice clústering.

## Habilitar la gráfica de dependencias a través de la {% data variables.enterprise.management_console %}

Si tu {% data variables.product.product_location %} utiliza clústering, no puedes habilitar la gráfica de dependencias con la {% data variables.enterprise.management_console %} y debes utilizar el shell administrativo en su lugar. Para obtener más información, consulta la sección "[Habilitar la gráfica de dependencias a través del shell administrativo](#enabling-the-dependency-graph-via-the-administrative-shell)".

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Debajo de "Seguridad", haz clic en **Gráfica de dependencias**. ![Casilla de verificación para habilitar o inhabilitar la gráfica de dependencias](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Da clic en **Visitar tu instancia**.

## Habilitar la gráfica de dependencias a través del shell administrativo

{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. En el shell administrativo, habilita la gráfica de dependencias en {% data variables.product.product_location %}:
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
2. Aplica la configuración
    ```shell
    $ ghe-config-apply
    ```
3. Regresa a {% data variables.product.prodname_ghe_server %}.
