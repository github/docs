---
title: Setting permissions for a GitHub Copilot extension in your organization
intro: 'Learn how to control access to {% data variables.copilot.copilot_extensions %}.'
permissions: Organization owners
product: 'Organizations with a {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %} plan'
versions:
  feature: copilot-extensions
allowTitleToDifferFromFilename: true
topics:
  - Copilot
  - Organizations
  - Permissions
shortTitle: Set extension permissions
redirect_from:
  - /copilot/how-tos/administer/organizations/set-extension-permissions
  - /copilot/how-tos/administer/manage-for-organization/set-extension-permissions
contentType: how-tos
category: 
  - Manage Copilot for a team
---

{% data variables.copilot.copilot_extensions %} integrate external tools with {% data variables.copilot.copilot_chat %}. See [AUTOTITLE](/copilot/concepts/copilot-extensions/about-copilot-extensions).

## Prerequisites

* Set a usage policy to enable or disable {% data variables.copilot.copilot_extensions_short %} for all users granted a {% data variables.product.prodname_copilot_short %} license by your organization, controlling your security risk. See [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization).
* Install a {% data variables.copilot.copilot_extension_short %} in your organization. See [AUTOTITLE](/copilot/how-tos/context/install-copilot-extensions/extending-the-capabilities-of-github-copilot-in-your-organization).

## Managing permissions for a {% data variables.copilot.copilot_extension %} in your organization

After you have installed a {% data variables.copilot.copilot_extension_short %} in your organization, you can view the permissions the extension has in your organization, and why those permissions are necessary. If you do not want the {% data variables.copilot.copilot_extension_short %} to have the listed permissions, you can suspend or uninstall the extension.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.apps.access-org-app-settings %}
1. Optionally, to filter your installed {% data variables.product.prodname_github_apps %} for {% data variables.copilot.copilot_extensions_short %}, select the **Filter:** dropdown menu, then click **{% data variables.copilot.copilot_extensions_short %}**.
1. Next to the {% data variables.copilot.copilot_extension_short %} you want to review or modify, click **Configure**.
1. In the "Permissions" section, review the permissions listed for the {% data variables.copilot.copilot_extension_short %}. Optionally, you can block the {% data variables.copilot.copilot_extension_short %}'s access to your organization in one of two ways:
    * To indefinitely suspend the {% data variables.copilot.copilot_extension_short %}'s access to resources in your organization while keeping the extension installed, in the "Danger zone" section, click **Suspend**.
    * To uninstall a {% data variables.copilot.copilot_extension_short %} completely, in the "Danger zone" section, click **Uninstall**.

## Further reading

* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [AUTOTITLE](/copilot/how-tos/context/install-copilot-extensions/using-extensions-to-integrate-external-tools-with-copilot-chat)
* [AUTOTITLE](/copilot/concepts/copilot-extensions/about-copilot-extensions)
