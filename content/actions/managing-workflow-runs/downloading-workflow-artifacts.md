---
title: Downloading workflow artifacts
intro: You can download artifacts that were archived during a workflow run. Artifacts automatically expire after 90 days.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under **Artifacts**, click the artifact you want to download.
    ![Download artifact drop-down menu](/assets/images/help/repository/artifact-drop-down.png)
