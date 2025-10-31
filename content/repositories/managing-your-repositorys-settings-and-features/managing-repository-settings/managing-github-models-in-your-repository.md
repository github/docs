---
title: Managing {% data variables.product.prodname_github_models %} in your repository
shortTitle: Manage models
intro: You can enable or disable {% data variables.product.prodname_github_models %} in your repository.
versions:
  feature: github-models
permissions: 'Repository administrators'
topics:
  - Repositories
  - AI
  - GitHub Models
allowTitleToDifferFromFilename: true
---

{% data reusables.models.models-preview-note %}

## About {% data variables.product.prodname_github_models %}

{% data reusables.models.feature-overview %}

## Prerequisites

If your repository is organization-owned, an organization owner must first enable {% data variables.product.prodname_github_models %} in your organization.

If your organization owner has restricted access to certain models, you will only see a subset of the total available models.

If the repository is owned by a user, that user has access to all the available models for that repository.

## Enabling or disabling models in your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Code and automation, select **Models**.
1. In the "Models in this repository" section, click {% octicon "chevron-down" aria-label="the down arrow" %} beside **Disabled** and select **Enabled** from the dropdown.
{% data reusables.repositories.navigate-to-models %}
1. You can choose a model, create and test prompts, compare prompts and models, as well as experiment in the playgound. See [AUTOTITLE](/github-models/use-github-models/prototyping-with-ai-models).
