---
title: Disabling passkeys for your instance
intro: 'Learn how to disable passkeys for all users on your instance.'
permissions: 'Site administrators'
versions:
  ghes: '>=3.14'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Disable passkeys
---

Passkeys are enabled by default.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. In the "Passkeys" section, deselect **Enable passkeys**.
{% data reusables.enterprise_management_console.save-settings %}

## Further reading

* "[AUTOTITLE](/authentication/authenticating-with-a-passkey/about-passkeys)"
