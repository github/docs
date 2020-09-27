---
title: Removing workflow artifacts
intro: 'Artifacts automatically expire after 90 days, but you can always reclaim used {{ site.data.variables.product.prodname_actions }} storage by deleting artifacts before they expire on {{ site.data.variables.product.product_name }}.'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

{% warning %}

**Warning:** Once you delete an artifact, it can not be restored.

{% endwarning %}

{{ site.data.reusables.repositories.permissions-statement-write }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.actions-tab }}
{{ site.data.reusables.repositories.navigate-to-workflow }}
{{ site.data.reusables.repositories.view-run }}
1. Under **Artifacts**, click {% octicon "trashcan" aria-label="The trashcan icon" %} next to the artifact you want to remove.
    ![Delete artifact drop-down menu](/assets/images/help/repository/actions-delete-artifact.png)
