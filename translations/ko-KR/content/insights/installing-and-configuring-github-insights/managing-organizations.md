---
title: Managing organizations
intro: 'You can manage the {{ site.data.variables.product.prodname_enterprise }} organizations that are included in metrics.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-organizations
permissions: 'People with admin permissions in {{ site.data.variables.product.prodname_insights }} can manage organizations.'
versions:
  enterprise-server: '*'
---

### About organization management

When you add an organization to {{ site.data.variables.product.prodname_insights }}, repositories owned by that organization are included in metrics. You can choose to add all repositories or select specific repositories to add.

You can add an organization to {{ site.data.variables.product.prodname_insights }} if you are an owner of that organization in {{ site.data.variables.product.prodname_enterprise }}. If you are not an owner of the organization, you can send a request for an owner to add the organization to {{ site.data.variables.product.prodname_insights }}.

### Adding an organization to {{ site.data.variables.product.prodname_insights }}

Adding an organization to {{ site.data.variables.product.prodname_insights }} installs the {{ site.data.variables.product.prodname_github_app }} for {{ site.data.variables.product.prodname_insights }} in that organization. For more information about the {{ site.data.variables.product.prodname_github_app }}, see "[Installing {{ site.data.variables.product.prodname_insights }}](/github/installing-and-configuring-github-insights/installing-github-insights)."

{{ site.data.reusables.github-insights.settings-tab }}
{{ site.data.reusables.github-insights.repositories-tab }}
{{ site.data.reusables.github-insights.add-organizations }}
4. Click the organization you want to add to {{ site.data.variables.product.prodname_insights }}.
5. Select whether to add all repositories or to specify repositories to include. ![Checkboxes to add all repositories or select repositories](/assets/images/help/insights/all-or-select-repos.png)
6. If you chose to install {{ site.data.variables.product.product_name }} on select repositories, use the drop-down menu and select the repositories you want to include. ![Drop-down menu to select repositories](/assets/images/help/insights/select-repos.png)
5. Click **Install** or **Request**.

### Removing an organization from {{ site.data.variables.product.prodname_insights }}

Removing an organization from {{ site.data.variables.product.prodname_insights }} uninstalls the {{ site.data.variables.product.prodname_github_app }} for {{ site.data.variables.product.prodname_insights }} from the organization. For more information about the {{ site.data.variables.product.prodname_github_app }}, see "[Installing {{ site.data.variables.product.prodname_insights }}](/github/installing-and-configuring-github-insights/installing-github-insights)."

{{ site.data.reusables.github-insights.settings-tab }}
{{ site.data.reusables.github-insights.repositories-tab }}
{{ site.data.reusables.github-insights.add-organizations }}
4. Click the organization you want to remove from {{ site.data.variables.product.prodname_insights }}.
4. Under "Uninstall {{ site.data.variables.product.prodname_insights }}", click **Uninstall**. ![Uninstall button](/assets/images/help/insights/uninstall-button.png)
5. Click **OK**.
