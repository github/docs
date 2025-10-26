---
title: Managing your team's model usage
shortTitle: Manage Models at scale
intro: Control and secure AI models in your organization with {% data variables.product.prodname_github_models %}.
versions:
  feature: github-models
permissions: Organization owners can manage the models used in an organization
topics:
  - Enterprise
allowTitleToDifferFromFilename: true
---

{% data reusables.models.models-preview-note %}

## Why restrict model usage in your organization?

Limiting the models available to your developers can help **control spend on models and meet your governance, data security, and compliance requirements**.

If you don't manage access, your teams may inadvertently use models that do not meet your organization’s standards, leading to potential risks such as:

* Unexpected costs from high-priced models
* Security or compliance issues caused by unauthorized AI services
* Time wasted integrating unapproved or suboptimal models

For more information about using models at scale, see [AUTOTITLE](/github-models/github-models-at-scale/use-models-at-scale).

## Exceptions to your organization's model settings

While {% data variables.product.prodname_github_models %} for organizations and repositories is in public preview, some of your organization's model settings are not applied in certain circumstances. Your teams will be able to use AI models without limitation in the following places:

* {% data variables.product.prodname_emus %} organizations
* {% data variables.product.prodname_github_models %} extension for {% data variables.product.prodname_cli %}
* {% data variables.product.prodname_github_models %} extension for {% data variables.copilot.copilot_chat %}
* {% data variables.product.prodname_github_models %} VS Code extension
* Playground for {% data variables.product.prodname_github_models %} in the {% data variables.product.prodname_marketplace %} at https://github.com/marketplace/models.

## Enabling {% data variables.product.prodname_github_models %} for an enterprise

{% data reusables.models.prereq-enable-models-in-enterprise %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.models-policies %}
1. Under "Models", in the "Models in your enterprise" section, click {% octicon "chevron-down" aria-label="the down arrow" %} beside **Disabled** and select one of the following options:
    * **Enabled**: Enable {% data variables.product.prodname_github_models %} for all organizations in your enterprise.
    * **No policy**: Allow each organization in your enterprise to manage the enablement of {% data variables.product.prodname_github_models %} independently.

## Controlling model usage in your organization

{% data reusables.models.enterprise-change-models-settings %}

{% data reusables.models.enable-select-models-intro %}

{% data reusables.models.enable-select-models-in-org %}
