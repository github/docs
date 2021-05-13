---
title: Administrar GitHub Packages para tu empresa
intro: 'Puedes habilitar {% data variables.product.prodname_registry %} para tu empresa y administrar la configuración y los tipos de paquetes permitidos de {% data variables.product.prodname_registry %}.'
redirect_from:
  - /enterprise/admin/packages
versions:
  enterprise-server: '>=2.22'
topics:
  - Enterprise
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% link_with_intro /getting-started-with-github-packages-for-your-enterprise %}

  {% link_in_list /enabling-github-packages-with-aws %}{% if currentVersion ver_gt "enterprise-server@2.22" %}
  {% link_in_list /enabling-github-packages-with-azure-blob-storage %}{% endif %}
  {% link_in_list /enabling-github-packages-with-minio %}
  {% link_in_list /quickstart-for-configuring-your-minio-storage-bucket-for-github-packages %}

{% link_with_intro /configuring-package-ecosystem-support-for-your-enterprise %}
