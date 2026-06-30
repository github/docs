---
title: Enabling or disabling cloud sandboxes for your organization
shortTitle: Enable or disable cloud sandboxes
allowTitleToDifferFromFilename: true
intro: 'You can control whether members of your organization can use cloud sandboxes by managing the sandbox access policy in your organization settings.'
permissions: Organization owners
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

Organization owners can control whether members of their organization have access to cloud sandboxes by configuring the sandbox access policy. By default, sandbox access is disabled for organization members.

When cloud sandbox access is **Disabled**, cloud sandboxes are not available for any organization members. When cloud sandbox access is **Enabled for all members**, all organization members can use cloud sandboxes.

For more information about cloud sandboxes, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

## Enabling or disabling cloud sandboxes

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the sidebar, under "Code, planning, and automation," click **Sandboxes**.
1. Under "Sandbox access," select your preferred setting:
   * **Disabled**: Sandboxes are not available for organization members.
   * **Enabled for all members**: All organization members can use {% data variables.copilot.sandbox_short %}.
1. Click **Save**.

## Further reading

* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/billing/concepts/product-billing/cloud-and-local-sandboxes)
