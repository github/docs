---
title: Downloading workflow artifacts
intro: You can download archived artifacts before they automatically expire.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} By default, {% data variables.product.product_name %} stores build logs and artifacts for 90 days, and you can customize this retention period, depending on the type of repository. For more information, see "[Configuring the retention period for GitHub Actions artifacts and logs in your repository](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)."{% endif %}
{% if currentVersion == "enterprise-server@2.22" %} {% data variables.product.product_name %} stores full build logs and artifacts for 90 days.{% endif %}

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under **Artifacts**, click the artifact you want to download. ![Dropdown-Menü zum Herunterladen von Artefakten](/assets/images/help/repository/artifact-drop-down.png)
