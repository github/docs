---
title: Removing workflow artifacts
intro: 'Artifacts automatically expire after 90 days, but you can always reclaim used {% data variables.product.prodname_actions %} storage by deleting artifacts before they expire on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% warning %}

**Warning:** Once you delete an artifact, it can not be restored.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under **Artifacts**, click {% octicon "trashcan" aria-label="The trashcan icon" %} next to the artifact you want to remove.
    ![Delete artifact drop-down menu](/assets/images/help/repository/actions-delete-artifact.png)
