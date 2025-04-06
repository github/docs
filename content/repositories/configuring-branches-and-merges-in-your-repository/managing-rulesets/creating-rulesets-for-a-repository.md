---
title: Creating rulesets for a repository
intro: 'You can add rulesets to a repository to control how people can interact with specific branches and tags.'
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  feature: repo-rules
permissions: '{% data reusables.repositories.repo-rules-permissions %}'
topics:
  - Repositories
shortTitle: Create a ruleset
---

## Introduction

You can create rulesets to control how users can interact with selected branches and tags in a repository. You can control things like who can push commits to a certain branch and how the commits must be formatted, or who can delete or rename a tag. You can also prevent people from renaming repositories.

{% ifversion push-rulesets %}

{% data reusables.repositories.rulesets-push-rulesets-intro %}

{% endif %}

When you create a ruleset, you can allow certain users to bypass the rules in the ruleset.

For more information on rulesets, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

{% ifversion repo-rules-enterprise %}
You can also create rulesets for all repositories in an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization)."{% endif %}

{% ifversion repo-rules-management %}

## Importing prebuilt rulesets

To import one of the prebuilt rulesets by {% data variables.product.prodname_dotcom %}, see [`github/ruleset-recipes`](https://github.com/github/ruleset-recipes).

{% data reusables.repositories.import-a-ruleset-conceptual %} For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#using-ruleset-history)."{% endif %}

## Using `fnmatch` syntax

{% data reusables.repositories.rulesets-fnmatch %}
{% ifversion repo-rules-enterprise %}

## Using regular expressions for commit metadata

{% data reusables.repositories.rulesets-commit-regex %}

{% endif %}

## Using ruleset enforcement statuses

{% data reusables.repositories.rulesets-about-enforcement-statuses %}

## Creating a branch or tag ruleset

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.create-ruleset-step %}
{% data reusables.repositories.rulesets-general-step %}

### Granting bypass permissions for your branch or tag ruleset

{% data reusables.repositories.rulesets-bypass-step %}
{% data reusables.repositories.rulesets-branch-tag-bypass-optional-step %}

### Choosing which branches or tags to target

{% data reusables.repositories.rulesets-target-branches %}

### Selecting branch or tag protections

{% data reusables.repositories.rulesets-protections-step %}

### Adding metadata restrictions

{% data reusables.repositories.rulesets-metadata-step %}

### Finalizing your branch or tag ruleset and next steps

{% data reusables.repositories.rulesets-create-and-insights-step %}

{% ifversion push-rulesets %}

## Creating a push ruleset

{% data reusables.repositories.push-rules-fork-network-note %}

You can create a push ruleset for private or internal repositories.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
{% data reusables.repositories.create-push-ruleset-step %}
{% data reusables.repositories.rulesets-general-step %}

### Granting bypass permissions for your push ruleset

>[!NOTE] Bypass permissions for push rulesets in this repository will be inherited by the entire fork network for this repository. {% data reusables.repositories.rulesets-push-rulesets-bypass-permissions %}

{% data reusables.repositories.rulesets-bypass-step %}

### Selecting push protections

{% data reusables.repositories.rulesets-push-rules-step %}

### Finalizing your push ruleset and next steps

{% data reusables.repositories.rulesets-create-and-insights-step %}

{% endif %}
