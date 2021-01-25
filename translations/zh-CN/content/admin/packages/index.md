---
title: 管理企业的 GitHub Packages
intro: '您可以为企业启用 {% data variables.product.prodname_registry %}，并管理 {% data variables.product.prodname_registry %} 设置和允许的包类型。'
redirect_from:
  - /enterprise/admin/packages
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% link_with_intro /getting-started-with-github-packages-for-your-enterprise %}

  {% link_in_list /enabling-github-packages-with-aws %}{% if currentVersion ver_gt "enterprise-server@2.22" %}
  {% link_in_list /enabling-github-packages-with-azure-blob-storage %}{% endif %}
  {% link_in_list /enabling-github-packages-with-minio %}
  {% link_in_list /quickstart-for-configuring-your-minio-storage-bucket-for-github-packages %}

{% link_with_intro /configuring-package-ecosystem-support-for-your-enterprise %}
