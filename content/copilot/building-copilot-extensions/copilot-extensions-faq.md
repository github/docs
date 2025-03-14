---
title: Copilot Extensions FAQ
intro: 'Find answers to common questions about {% data variables.product.prodname_copilot_extensions %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Extensions FAQ
type: reference
---

## General

This section answers common questions about {% data variables.product.prodname_copilot_extension %}.

* [What is the difference between a {% data variables.product.prodname_copilot_extension %} and a {% data variables.product.prodname_vscode %} chat participant?](#what-is-the-difference-between-a-github-copilot-extension-and-a-visual-studio-code-chat-participant)
* [Is indemnity provided for {% data variables.product.prodname_copilot_extensions_short %}?](#is-indemnity-provided-for-copilot-extensions)

### What is the difference between a {% data variables.product.prodname_copilot_extension %} and a {% data variables.product.prodname_vscode %} chat participant?

{% data variables.product.prodname_copilot_extensions %} and {% data variables.product.prodname_vscode %} chat participants use the same backend platform to route requests to extensions. Both provide similar end-user experiences, integrate with {% data variables.product.prodname_copilot_chat_short %}, and can leverage the {% data variables.product.prodname_copilot_short %} API or other LLMs.

While they share similarities, below are several key differences:
* {% data variables.product.prodname_copilot_extensions %} and {% data variables.product.prodname_vscode %} chat participants are accessed through different marketplaces.
* {% data variables.product.prodname_copilot_extensions %} are server-side extensions, requiring server infrastructure to build. These extensions provide a built-in connection to your {% data variables.product.github %} workspaces, as set by your organization admin.
* {% data variables.product.prodname_vscode %} chat participants are client-side extensions that have read and write access to your local files. They do not require server infrastructure.
* {% data variables.product.prodname_copilot_extensions %} can be used in any editor where extensions are supported, while {% data variables.product.prodname_vscode %} Chat Participants are only available in {% data variables.product.prodname_vscode %}.

For more information, see [AUTOTITLE](/copilot/building-copilot-extensions/about-building-copilot-extensions).

### Is indemnity provided for {% data variables.product.prodname_copilot_extensions_short %}?

No, {% data variables.product.prodname_copilot_extensions_short %} are not covered by {% data variables.product.prodname_copilot %}’s indemnity policy. However, this exclusion applies only to issues that arise within extension chat threads.

Installing and using extensions does not affect indemnity coverage for any issues that occur while using other {% data variables.product.prodname_copilot_short %} features such as code completions and chat.

## Data and Permissions

This section explains what data is collected and shared when using {% data variables.product.prodname_copilot_extensions_short %}.

* [What data is being collected and shared with {% data variables.product.prodname_copilot_extensions_short %}?](#what-data-is-being-collected-and-shared-with-copilot-extensions)
* [What permissions are required for {% data variables.product.prodname_copilot_extensions_short %}?](#what-permissions-are-required-for-copilot-extensions)
* [Who can provide permissions for {% data variables.product.prodname_copilot_extensions_short %} to access organization resources?](#who-can-provide-permissions-for-copilot-extensions-to-access-organization-resources)
* [Can a user use a {% data variables.product.prodname_copilot_extensions_short %} that the organization has not provided permissions for?](#can-a-user-use-a-copilot-extensions-that-the-organization-has-not-provided-permissions-for)

### What data is being collected and shared with {% data variables.product.prodname_copilot_extensions_short %}?

The following data is shared when interacting with {% data variables.product.prodname_copilot_extensions_short %}:
* Data attached to your account and {% data variables.product.prodname_copilot_chat_short %} usage, such as {% data variables.product.github %} user ID, and timestamps of messages.
* Past messages within the chat thread where you are invoking an extension. Only one extension can be used per thread, preventing data sharing across extensions. The data retention period for thread context is 30 days.
* Any additional organization and repository data that is authorized for the extension by your organization admin. Admins installing extensions must approve access to the required permissions prior to completing installation.
* For {% data variables.product.prodname_copilot_chat_dotcom_short %}, if your admin has approved the extension to access repository or organization metadata , that data will be shared as well.

### What permissions are required for {% data variables.product.prodname_copilot_extensions_short %}?

{% data reusables.copilot.copilot-extensions.about-extensions-permissions %}

### Who can provide permissions for {% data variables.product.prodname_copilot_extensions_short %} to access organization resources?

Only organization admins can grant permissions for {% data variables.product.prodname_copilot_extensions_short %} to access organization resources.
Organization members may encounter cases where an extension cannot access a repository or query context. This typically happens because the organization admin has not yet provided permissions or authorized the extension. See [Granting permissions to access organization resources](/copilot/building-copilot-extensions/about-building-copilot-extensions#granting-permissions-to-access-organization-resources).

### Can a user use a {% data variables.product.prodname_copilot_extensions_short %} that the organization has not provided permissions for?

Yes, any user can install and use a {% data variables.product.prodname_copilot_extensions_short %}. However, to query organization resources and repositories, the extension must be installed and authorized by an organization admin. See [Granting permissions to access organization resources](/copilot/building-copilot-extensions/about-building-copilot-extensions#granting-permissions-to-access-organization-resources)

Users should contact their organization admin to request installation and authorization. Company context cannot be accessed without admin permissions.

## Policies

This section covers administrative policies for {% data variables.product.prodname_copilot_extensions_short %}

* [How do I control which {% data variables.product.prodname_copilot_extensions_short %} can be used in my enterprise?](#how-do-i-control-which-copilot-extensions-can-be-used-in-my-enterprise)
* [Is there an allowlist/blocklist at the enterprise level?](#is-there-an-allowlistblocklist-at-the-enterprise-level)
* [As a member of an organization, how can I get access to {% data variables.product.prodname_copilot_extensions_short %}?](#as-a-member-of-an-organization-how-can-i-get-access-to-copilot-extensions)

### How do I control which {% data variables.product.prodname_copilot_extensions_short %} can be used in my enterprise?

Enterprise admins can disable {% data variables.product.prodname_copilot_extensions_short %} across their enterprise by setting the **{% data variables.product.prodname_copilot_extensions_short %}** policy to "Disabled" or "No Policy".

### Is there an allowlist/blocklist at the enterprise level?

No, there is no allowlist or blocklist at the enterprise level.

### As a member of an organization, how can I get access to {% data variables.product.prodname_copilot_extensions_short %}?

To access {% data variables.product.prodname_copilot_extensions_short %} as a member of an organization, the organization that assigned you a {% data variables.product.github %} seat must enable the {% data variables.product.prodname_copilot_extensions_short %} policy. Additionally, the same organization must install and authorize the extension to access any organization owned repositories.

For example, if you are a member of multiple organizations and Organization A has assigned you a {% data variables.product.github %} seat, you will only have access to extensions if Organization A has enabled the policy. If Organization B has enabled extensions but you do not have access, it is because Organization A has disabled the {% data variables.product.prodname_copilot_extensions_short %} policy.
