---
title: Managing permissions in GitHub Insights
intro: 'You can update a user''s permissions in {{ site.data.variables.product.prodname_insights }}.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
permissions: 'People with admin permissions to {{ site.data.variables.product.prodname_insights }} can manage permissions.'
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.github-insights.permissions-levels }}

If you want to give admin permissions to someone who is not a site administrator in {{ site.data.variables.product.prodname_enterprise }}, contact {{ site.data.variables.contact.github_support }}. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Submitting a ticket](/github/working-with-github-support/submitting-a-ticket)."{% else %}"[Reaching {{ site.data.variables.contact.github_support }}](/enterprise/{{ currentVersion }}/admin/enterprise-support/reaching-github-support)."{% endif %}

To remove a user's access from {{ site.data.variables.product.prodname_insights }}, you must remove the user from {{ site.data.variables.product.prodname_enterprise }}.
