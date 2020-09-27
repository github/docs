---
title: Gestionar permisos en GitHub Insights
intro: 'Puedes actualizar los permisos de un usuario en {{ site.data.variables.product.prodname_insights }}.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
permissions: 'Las personas con permisos de administrador para {{ site.data.variables.product.prodname_insights }} pueden administrar los permisos.'
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.github-insights.permissions-levels }}

Si deseas otorgar permisos de administrador a alguien que no sea un administrador del sitio en {{ site.data.variables.product.prodname_enterprise }}, contacta a {{ site.data.variables.contact.github_support }}. Para obtener más información, consulta {% if currentVersion == "free-pro-team@latest" %}"[Enviar un ticket](/github/working-with-github-support/submitting-a-ticket)."{% else %}"[Contactar a {{ site.data.variables.contact.github_support }}](/enterprise/{{ currentVersion }}/admin/enterprise-support/reaching-github-support)."{% endif %}

Para eliminar el acceso de un usuario de {{ site.data.variables.product.prodname_insights }}, debes eliminar al usuario de {{ site.data.variables.product.prodname_enterprise }}.
