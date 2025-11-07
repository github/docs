---
title: About GitHub Copilot Extensions
shortTitle: Copilot extensions
intro: 'Learn about {% data variables.copilot.copilot_extensions_short %}.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.copilot-extensions %}'
versions:
  feature: copilot-extensions
topics:
  - Copilot
redirect_from:
  - /copilot/reference/copilot-extensions/copilot-extensions-faq
  - /copilot/reference/copilot-extensions
  - /copilot/concepts/copilot-extensions/about-copilot-extensions
  - /copilot/concepts/copilot-extensions/about-extensions
contentType: concepts
category: 
  - Learn about Copilot
---

<!-- expires 2025-11-19 -->

<!-- When this expires, check with the stakeholder for release #6165 if the knowledge bases content can be deleted -->

{% data reusables.copilot.copilot-extensions.extensions-retirement %}

<!-- end expires 2025-11-19 -->

## About {% data variables.copilot.copilot_extensions_short %}

{% data reusables.copilot.copilot-extensions.about-copilot-extensions %}

## Supported clients and IDEs

{% data reusables.copilot.copilot-extensions.supported-clients-and-ides-table %}

## Visibility of {% data variables.copilot.copilot_extensions %}

{% data variables.copilot.copilot_extensions %} can be private, public and shareable, or public and listed on the {% data variables.product.prodname_marketplace %}. Which visibility option you choose will depend on your use case and the audience you are targeting.

* Private extensions are often preferred by large enterprises or companies that:
    * Want more customization and controls over data access
    * Need to integrate with a large volume of internal documents and databases
    * Have strict security policies making it difficult to authorize permissions for third-parties
* Public extensions are suitable for:
    * Open-source projects
    * Collaborative development and use across organizations within an enterprise
    * Sharing your tool and getting feedback before publishing to the {% data variables.product.prodname_marketplace %}
* {% data variables.product.prodname_marketplace %} extensions are ideal for third-parties that want to:
    * Offer their service to a broader audience
    * Integrate their tool into the developer workflow on {% data variables.product.company_short %} and the IDE
    * Leverage the {% data variables.product.company_short %} ecosystem to raise awareness for their product

## {% data variables.copilot.copilot_extensions %} permissions

Permissions vary by extension, depending on the level of authorization that the extension requires in order to respond to your query. You can view the required permissions on the extension’s installation page, located after the billing information step and before the install and authorize step.

**For extension users**: At a minimum, the **{% data variables.copilot.copilot_chat_short %}** permissions must be set to "Read-only". Additional permissions may include executing write actions on other surfaces and authorizing read access to repository and organization level data in {% data variables.product.github %}.

**For extension creators**: In addition to the above, you may also request local context from a user’s editor to further tailor responses. To do so, the **{% data variables.product.prodname_copilot_short %} Editor Context** permissions must be set to "Read-only". Users will be notified to provide the required authorization.

For more information on {% data variables.product.prodname_github_app %} permissions, see [AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).

### Granting permissions to access organization resources

Users with an individual {% data variables.product.prodname_copilot_short %} subscription can install and use {% data variables.copilot.copilot_extensions_short %}. Users with a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} subscription need an organization administrator to enable this feature.

Only organization administrators can grant permissions for {% data variables.copilot.copilot_extensions_short %} to access organization resources.

To grant organization members access, the organization administrator must:

* Install the extension
* Grant the extension permission to access specific repositories
* Authorize access for all, or specific repositories

### Controlling access at the enterprise level

If you are an enterprise administrator, you can disable {% data variables.copilot.copilot_extensions_short %} across your enterprise by setting the **{% data variables.copilot.copilot_extensions_short %}** policy to "Disabled". The "No Policy" setting allows organization administrators to set their own policy.

No, there is no allowlist or blocklist at the enterprise level.

## Sharing data with {% data variables.copilot.copilot_extensions_short %}

The following data is shared when you interact with {% data variables.copilot.copilot_extensions_short %}:

* Data attached to your account and {% data variables.copilot.copilot_chat_short %} usage, such as {% data variables.product.github %} user ID, and timestamps of messages.
* Past messages within the chat thread where you are invoking an extension. Only one extension can be used per thread, preventing data sharing across extensions. The data retention period for thread context is 30 days.
* Any additional organization and repository data that is authorized for the extension by your organization administrator. Administrators installing extensions must approve access to the required permissions prior to completing installation.
* For {% data variables.copilot.copilot_chat_dotcom_short %}, if your administrator has approved the extension to access repository or organization metadata, that data will be shared as well.

## Further reading

* [AUTOTITLE](/copilot/concepts/extensions/build-extensions)
