---
title: Enabling or disabling cloud sandboxes for your organization or enterprise
shortTitle: Enable or disable cloud sandboxes
allowTitleToDifferFromFilename: true
intro: 'You can control whether members of your organization or enterprise can use cloud sandboxes by managing the cloud sandbox access policy in your organization or enterprise settings.'
permissions: Enterprise owners and organization owners
redirect_from:
  - /copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-and-local-sandboxes-for-your-organization
versions:
  feature: copilot
contentType: how-tos
category:
  - Manage cloud and local sandboxes for your organization
---

{% data reusables.cli.public-preview-sandbox %}

## About enabling and disabling cloud sandboxes

Organization owners can control whether members of their organization have access to cloud sandboxes by configuring the cloud sandbox access policy. Enterprise owners can control cloud sandbox access for all organizations in the enterprise. By default, cloud sandbox access is disabled.

For more information about cloud sandboxes, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

## Enabling or disabling cloud sandboxes for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. {% data reusables.user-settings.code-planning-automation %} click **Sandboxes**.
1. Under "Cloud sandbox access", select your preferred setting:
   * **Disabled**: Cloud sandbox access is not available for organization members.
   * **Enabled**: Members of this organization can use cloud sandboxes.
1. Click **Save**.

## Enabling or disabling cloud sandboxes for your enterprise

Enterprise owners can control cloud sandbox access for all organizations in the enterprise from the **Policies** tab of the enterprise settings. By default, cloud sandbox access is disabled for all organizations in the enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Click **Sandboxes**.
1. Under "Cloud sandbox access", select your preferred setting:
   * **Disabled**: Cloud sandbox access is not available for any organizations in this enterprise.
   * **Let organizations enable (opt-in)**: Organization owners can choose to enable cloud sandbox access for their members. New organizations default to disabled.
   * **Enabled by default for all organizations (opt-out)**: Cloud sandbox access is enabled for all organizations. Organization owners can still disable access for their organization if needed.
1. Click **Save**.

## Further reading

* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/billing/concepts/product-billing/cloud-and-local-sandboxes)
