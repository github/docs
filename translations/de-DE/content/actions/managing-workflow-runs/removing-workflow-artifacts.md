---
title: Removing workflow artifacts
intro: 'You can reclaim used {% data variables.product.prodname_actions %} storage by deleting artifacts before they expire on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Deleting an artifact

{% warning %}

**Warnung:** Sobald Du ein Artefakt löschst, kann es nicht wiederhergestellt werden.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.github-actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under **Artifacts**, click
{% octicon "trash" aria-label="The trash icon" %} next to the artifact you want to remove.
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
 ![Dropdown-Menü zum Löschen von Artefakten](/assets/images/help/repository/actions-delete-artifact-updated.png)
    {% else %}
    ![Dropdown-Menü zum Löschen von Artefakten](/assets/images/help/repository/actions-delete-artifact.png)
    {% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Setting the retention period for an artifact

Retention periods for artifacts and logs can be configured at the repository, organization, and enterprise level. For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)."

You can also define a custom retention period for individual artifacts using the `actions/upload-artifact` action in a workflow. For more information, see "[Storing workflow data as artifacts](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)."

### Finding the expiration date of an artifact

You can use the API to confirm the date that an artifact is scheduled to be deleted. For more information, see the `expires_at` value returned by "[List artifacts for a repository](/rest/reference/actions#artifacts)."
{% endif %}
