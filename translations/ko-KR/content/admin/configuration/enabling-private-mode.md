---
title: Enabling private mode
intro: 'In private mode, {% data variables.product.prodname_ghe_server %} requires every user to sign in to access the installation.'
redirect_from:
  - /enterprise/admin/articles/private-mode/
  - /enterprise/admin/guides/installation/security/
  - /enterprise/admin/guides/installation/securing-your-instance/
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
versions:
  enterprise-server: '*'
topics:
  - 엔터프라이즈
---

You must enable private mode if {% data variables.product.product_location %} is publicly accessible over the Internet. In private mode, users cannot anonymously clone repositories over `git://`. If built-in authentication is also enabled, an administrator must invite new users to create an account on the instance. For more information, see "[Using built-in authentication](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-built-in-authentication)."

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

With private mode enabled, you can allow unauthenticated Git operations (and anyone with network access to {% data variables.product.product_location %}) to read a public repository's code on your instance with anonymous Git read access enabled. For more information, see "[Allowing admins to enable anonymous Git read access to public repositories](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. Select **Private mode**. ![Checkbox for enabling private mode](/assets/images/enterprise/management-console/private-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
