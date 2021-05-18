---
title: Administrar organizaciones
intro: 'Puedes administrar las organizaciones {% data variables.product.prodname_enterprise %} que están incluidas en las métricas.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-organizations
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage organizations.'
versions:
  enterprise-server: '*'
---

### Acerca de la administración de la organización

Cuando agregas una organización a {% data variables.product.prodname_insights %}, los repositorios que son propiedad de esa organización se incluyen en las métricas. Puedes elegir agregar todos los repositorios o seleccionar repositorios específicos para agregar.

Puedes agregar una organización a {% data variables.product.prodname_insights %} si eres propietario de esa organización en {% data variables.product.prodname_enterprise %}. Si no eres propietario de la organización, puedes enviar una solicitud para que un propietario agregue la organización a {% data variables.product.prodname_insights %}.

### Agregar una organización a {% data variables.product.prodname_insights %}

Agregar una organización a {% data variables.product.prodname_insights %} instala el {% data variables.product.prodname_github_app %} para {% data variables.product.prodname_insights %} en esa organización. Para obtener más información acerca de {% data variables.product.prodname_github_app %}, consulta [Instalar {% data variables.product.prodname_insights %}](/github/installing-and-configuring-github-insights/installing-github-insights)".

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
{% data reusables.github-insights.add-organizations %}
4. Haz clic en la organización que deseas agregar a {% data variables.product.prodname_insights %}.
5. Selecciona si deseas agregar todos los repositorios o especificar los repositorios que deseas incluir. ![Casillas de verificación para agregar todos los repositorios o seleccionar repositorios](/assets/images/help/insights/all-or-select-repos.png)
6. Si eliges instalar {% data variables.product.product_name %} en repositorios selectos, usa el menú desplegable y selecciona los repositorios que deseas incluir. ![Menú desplegable para seleccionar repositorios](/assets/images/help/insights/select-repos.png)
5. Haz clic en **Install** (instalar) o **Request** (solicitar).

### Eliminar una organización de {% data variables.product.prodname_insights %}

Eliminar una organización de {% data variables.product.prodname_insights %} desinstala el {% data variables.product.prodname_github_app %} para {% data variables.product.prodname_insights %} de la organización. Para obtener más información acerca de {% data variables.product.prodname_github_app %}, consulta [Instalar {% data variables.product.prodname_insights %}](/github/installing-and-configuring-github-insights/installing-github-insights)".

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
{% data reusables.github-insights.add-organizations %}
4. Haz clic en la organización que deseas eliminar de {% data variables.product.prodname_insights %}.
4. En "Uninstall (desinstalar) {% data variables.product.prodname_insights %}", haz clic en **Uninstall**. ![Botón desinstalar](/assets/images/help/insights/uninstall-button.png)
5. Haz clic en **OK** (aceptar).
