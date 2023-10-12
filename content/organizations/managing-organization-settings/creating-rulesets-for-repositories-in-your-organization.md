---
title: Creating rulesets for repositories in your organization
intro: 'You can create a ruleset to target multiple repositories in your organization.'
versions:
  feature: repo-rules-enterprise
permissions: 'Organization owners can create rulesets at the organization level.'
topics:
  - Organizations
shortTitle: Create rulesets
---

## Introduction

You can create rulesets in your organization to control how users can interact with repositories in your organization. You can control things like who can push commits to a certain branch and how the commits must be formatted, or who can delete or rename a tag. You can also prevent people from renaming repositories.

When you create a ruleset for an organization, you use `fnmatch` syntax to define which repositories in your organization, and which branches or tags in those repositories, are targeted by the ruleset. This provides a quicker way to target repositories in your organization than creating a separate ruleset for each repository. For more information, see "[About `fnmatch` patterns for branches, tags, and repositories](#about-fnmatch-patterns-for-branches-tags-and-repositories)."

Forks do not inherit rulesets from their upstream repositories. However, forks owned by your organization are subject to the rulesets you create, like any other repository.

{% ifversion repo-rules-management %}

{% data reusables.repositories.import-a-ruleset-conceptual %} For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#using-ruleset-history)."

{% endif %}

To create a ruleset, complete the following procedures:

- [Creating a branch or tag ruleset](#creating-a-branch-or-tag-ruleset)
- [Granting bypass permissions for your ruleset](#granting-bypass-permissions-for-your-ruleset)
- [Choosing which repositories to target in your organization](#choosing-which-repositories-to-target-in-your-organization)
- [Choosing which branches or tags to target](#choosing-which-branches-or-tags-to-target)
- [Selecting branch or tag protections](#selecting-branch-or-tag-protections)
- [Adding metadata restrictions](#adding-metadata-restrictions)
- [Finalizing your ruleset and next steps](#finalizing-your-ruleset-and-next-steps)

## Creating a branch or tag ruleset

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.create-ruleset-step %}
{% data reusables.repositories.rulesets-general-step %}

## Granting bypass permissions for your ruleset

{% data reusables.repositories.rulesets-bypass-step %}

## Choosing which repositories to target in your organization

With your ruleset, you can choose to target all repositories in your organization, repositories in your organization that match a certain naming convention, or a list of manually selected repositories in your organization.

If a repository is targeted by a ruleset created at the organization level, only owners of the organization can edit the ruleset. However, people with admin access to the repository, or with a custom role including the "edit repository rules" permission, can create additional rulesets at the repository level. The rules in these rulesets will be aggregated with the rules defined at the organization level. The result is that creating a new ruleset can make the rules targeting a branch or tag more restrictive, but never less restrictive. For more information on creating rulesets, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

### Targeting all repositories in your organization

To target all repositories in your organization, in the "Target repositories" section, select {% octicon "goal" aria-hidden="true" %} **Target: REPOSITORIES**, then click **All repositories**.

### Targeting repositories by naming convention in your organization

1. To target a dynamic list of repositories in your organization by naming convention, in the "Target repositories" section, select {% octicon "goal" aria-hidden="true" %} **Target: REPOSITORIES**, then click **Dynamic list of repositories**.
1. To begin defining a targeting pattern, in the "Targeting criteria" section, select **Add a target** {% octicon "triangle-down" aria-hidden="true" %}, then click **Include by pattern** or **Exclude by pattern**.
1. In the modal dialog that appears, enter a repository naming pattern using `fnmatch` syntax, then click **Add Inclusion pattern** or **Add Exclusion pattern**. For more information on `fnmatch` syntax, see "[Using `fnmatch` syntax](#using-fnmatch-syntax)."

   {% note %}

    **Note:** You can add multiple targeting criteria to the same ruleset. For example, you could include any repositories matching the pattern `*cat*`, then specifically exclude a repository matching the pattern `not-a-cat`.

   {% endnote %}

1. Optionally, on the ruleset configuration page, select **Prevent renaming of target repositories**.

{% ifversion repository-properties %}

### Targeting repositories by properties in your organization

{% note %}

**Note:** Repository properties are in public beta and subject to change.

{% endnote %}

You can target repositories in your organization by custom properties. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)."

1. To target a dynamic list of repositories in your organization by properties, in the "Target repositories" section, select {% octicon "goal" aria-hidden="true" %} **Target: REPOSITORIES**, then click **Dynamic list by property**.
1. To add a target, in the "Targeting criteria" section, select **Add a target** {% octicon "triangle-down" aria-hidden="true" %}, then click **Include by property** or **Exclude by property**.
1. In the modal dialog that appears, select a property from the dropdown menu, then select a value for the property.
1. Click **Add target**.

{% endif %}

### Targeting select repositories in your organization

1. To target a static, manually selected list of repositories in your organization, in the "Target repositories" section, select {% octicon "goal" aria-hidden="true" %} **Target: REPOSITORIES**, then click **Select repositories**.
1. To select repositories to target, in the "Targeting criteria" section, select {% octicon "repo" aria-hidden="true" %} **Select repositories**, then search for the name of each repository you would like to target. Select each repository from the search results.

## Choosing which branches or tags to target

{% data reusables.repositories.rulesets-target-branches %}

## Selecting branch or tag protections

{% data reusables.repositories.rulesets-protections-step %}

## Adding metadata restrictions

{% data reusables.repositories.rulesets-metadata-step %}

## Finalizing your ruleset and next steps

{% data reusables.repositories.rulesets-create-and-insights-step %}

## About `fnmatch` patterns for branches, tags, and repositories

{% data reusables.repositories.rulesets-fnmatch %}

## About regular expressions for commit metadata

{% data reusables.repositories.rulesets-commit-regex %}
