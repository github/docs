---
title: Enabling or disabling {% data variables.copilot.sandbox %} for your organization
shortTitle: Enable or disable sandboxes
allowTitleToDifferFromFilename: true
intro: 'You can control whether members of your organization can use {% data variables.copilot.sandbox %} by managing the sandbox access policy in your organization settings.'
permissions: Organization owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Manage cloud and local sandboxes for your organization
---

{% data reusables.cli.public-preview-sandbox %}

## About enabling and disabling {% data variables.copilot.sandbox %}

Organization owners can control whether members of their organization have access to {% data variables.copilot.sandbox %} by configuring the sandbox access policy. By default, sandbox access is disabled for organization members.

When sandbox access is **Disabled**, sandboxes are not available for any organization members. When sandbox access is **Enabled for all members**, all organization members can use {% data variables.copilot.sandbox_short %}.

For more information about {% data variables.copilot.sandbox %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

## Enabling or disabling {% data variables.copilot.sandbox %}

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
