---
title: Administrar organizaciones
intro: 'Puedes administrar las organizaciones {{ site.data.variables.product.prodname_enterprise }} que están incluidas en las métricas.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-organizations
permissions: 'Las personas con permisos de administrador en {{ site.data.variables.product.prodname_insights }} pueden administrar organizaciones.'
versions:
  enterprise-server: '*'
---

### Acerca de la administración de la organización

Cuando agregas una organización a {{ site.data.variables.product.prodname_insights }}, los repositorios que son propiedad de esa organización se incluyen en las métricas. Puedes elegir agregar todos los repositorios o seleccionar repositorios específicos para agregar.

Puedes agregar una organización a {{ site.data.variables.product.prodname_insights }} si eres propietario de esa organización en {{ site.data.variables.product.prodname_enterprise }}. Si no eres propietario de la organización, puedes enviar una solicitud para que un propietario agregue la organización a {{ site.data.variables.product.prodname_insights }}.

### Agregar una organización a {{ site.data.variables.product.prodname_insights }}

Agregar una organización a {{ site.data.variables.product.prodname_insights }} instala el {{ site.data.variables.product.prodname_github_app }} para {{ site.data.variables.product.prodname_insights }} en esa organización. Para obtener más información acerca de {{ site.data.variables.product.prodname_github_app }}, consulta [Instalar {{ site.data.variables.product.prodname_insights }}](/github/installing-and-configuring-github-insights/installing-github-insights)".

{{ site.data.reusables.github-insights.settings-tab }}
{{ site.data.reusables.github-insights.repositories-tab }}
{{ site.data.reusables.github-insights.add-organizations }}
4. Haz clic en la organización que deseas agregar a {{ site.data.variables.product.prodname_insights }}.
5. Selecciona si deseas agregar todos los repositorios o especificar los repositorios que deseas incluir. ![Casillas de verificación para agregar todos los repositorios o seleccionar repositorios](/assets/images/help/insights/all-or-select-repos.png)
6. Si eliges instalar {{ site.data.variables.product.product_name }} en repositorios selectos, usa el menú desplegable y selecciona los repositorios que deseas incluir. ![Menú desplegable para seleccionar repositorios](/assets/images/help/insights/select-repos.png)
5. Haz clic en **Install** (instalar) o **Request** (solicitar).

### Eliminar una organización de {{ site.data.variables.product.prodname_insights }}

Eliminar una organización de {{ site.data.variables.product.prodname_insights }} desinstala el {{ site.data.variables.product.prodname_github_app }} para {{ site.data.variables.product.prodname_insights }} de la organización. Para obtener más información acerca de {{ site.data.variables.product.prodname_github_app }}, consulta [Instalar {{ site.data.variables.product.prodname_insights }}](/github/installing-and-configuring-github-insights/installing-github-insights)".

{{ site.data.reusables.github-insights.settings-tab }}
{{ site.data.reusables.github-insights.repositories-tab }}
{{ site.data.reusables.github-insights.add-organizations }}
4. Haz clic en la organización que deseas eliminar de {{ site.data.variables.product.prodname_insights }}.
4. En "Uninstall (desinstalar) {{ site.data.variables.product.prodname_insights }}", haz clic en **Uninstall**. ![Botón desinstalar](/assets/images/help/insights/uninstall-button.png)
5. Haz clic en **OK** (aceptar).
