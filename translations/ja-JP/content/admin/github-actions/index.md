---
title: Enterprise 向けの GitHub Actions を管理する
intro: '{% if currentVersion == "github-ae@latest" %}{% data variables.product.prodname_ghe_managed %}{% else %}{% data variables.product.prodname_ghe_server %}{% endif %} で {% data variables.product.prodname_actions %} を有効にし、{% data variables.product.prodname_actions %} のポリシーと設定を管理します。'
redirect_from:
  - /enterprise/admin/github-actions
versions:
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Enterprise
---

{% data reusables.actions.ae-beta %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 目次

{% topic_link_in_list /using-github-actions-in-github-ae %}
  {% link_in_list /getting-started-with-github-actions-for-github-ae %}
  {% link_in_list /using-actions-in-github-ae %}

{% topic_link_in_list /enabling-github-actions-for-github-enterprise-server %}
  {% link_in_list /getting-started-with-github-actions-for-github-enterprise-server %}
  {% link_in_list /enabling-github-actions-with-azure-blob-storage %}
  {% link_in_list /enabling-github-actions-with-amazon-s3-storage %}
  {% link_in_list /enabling-github-actions-with-minio-gateway-for-nas-storage %}

{% link_in_list /enforcing-github-actions-policies-for-your-enterprise %}

{% topic_link_in_list /managing-access-to-actions-from-githubcom %}
  {% link_in_list /about-using-actions-on-github-enterprise-server %}
  {% link_in_list /enabling-automatic-access-to-githubcom-actions-using-github-connect %}
  {% link_in_list /manually-syncing-actions-from-githubcom %}
  {% link_in_list /using-the-latest-version-of-the-official-bundled-actions %}
  {% link_in_list /setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access %}

{% topic_link_in_list /advanced-configuration-and-troubleshooting %}
  {% link_in_list /high-availability-for-github-actions %}
  {% link_in_list /backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled %}
  {% link_in_list /using-a-staging-environment %}
  {% link_in_list /troubleshooting-github-actions-for-your-enterprise %}
