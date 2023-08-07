---
title: Enabling private mode
intro: 'In private mode, {% data variables.product.prodname_ghe_server %} requires every user to sign in to access the installation.'
redirect_from:
  - /enterprise/admin/articles/private-mode
  - /enterprise/admin/guides/installation/security
  - /enterprise/admin/guides/installation/securing-your-instance
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
  - /admin/configuration/configuring-your-enterprise/enabling-private-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
---
You must enable private mode if {% data variables.location.product_location %} is publicly accessible over the Internet. In private mode, users cannot anonymously clone repositories over `git://`. If built-in authentication is also enabled, an administrator must invite new users to create an account on the instance. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)."

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

With private mode enabled, you can allow unauthenticated Git operations (and anyone with network access to {% data variables.location.product_location %}) to read a public repository's code on your instance with anonymous Git read access enabled. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
1. Select **Private mode**.
{% data reusables.enterprise_management_console.save-settings %}
