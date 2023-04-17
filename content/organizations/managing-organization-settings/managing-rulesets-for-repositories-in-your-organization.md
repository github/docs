---
title: Managing rulesets for repositories in your organization
intro: 'You can create a ruleset to target multiple repositories in your organization.'
versions:
  feature: repo-rules-enterprise
permissions: 'Organization owners can manage rulesets at the organization level.'
topics:
  - Organizations
shortTitle: Manage rulesets
---

{% data reusables.repositories.rulesets-public-beta %}

## About managing rulesets for an organization

You can create rulesets in your organization to control how users can interact with repositories in your organization. You can control things like who can push commits to a certain branch and how the commits must be formatted, or who can delete or rename a tag. You can also prevent people from renaming repositories.

When you create a ruleset for an organization, you use `fnmatch` syntax to define which repositories in your organization, and which branches or tags in those repositories, are targeted by the ruleset. For more information, see "[Using fnmatch syntax](#using-fnmatch-syntax)." This provides a quicker way for managing rulesets than creating a separate ruleset for each repository you want to target.

{% data reusables.repositories.ruleset-bypass %}

You can use the REST API to manage rulesets. For more information, see "[AUTOTITLE](/rest/orgs/rules)."

If a repository is targeted by a ruleset created at organization level, only owners of the organization can edit this ruleset. However, people with admin access to the repository, or with a custom role including the "edit repository rules" permission, can create additional rulesets at the repository level. The rules in these rulesets will be aggregated with the rules defined at organization level. The result is that creating a new ruleset can make the rules targeting a branch or tag more restrictive, but never less restrictive. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

{% data reusables.repositories.rulesets-sudo-mode %}

Forks do not inherit rulesets from their upstream repositories. However, forks owned by your organization are subject to the rulesets you create, like any other repository.

{% data reusables.repositories.rulesets-anyone-can-view %}

## Creating a ruleset

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.create-ruleset-step %}
{% data reusables.repositories.rulesets-general-step %}
{% data reusables.repositories.rulesets-bypass-step %}
1. In the "Target repositories" section, select **Add a target** to add repositories. You can include all repositories in your organization, or you can use `fnmatch` syntax to include or exclude repository names based on a pattern. For more information, see "[Using `fnmatch` syntax](#using-fnmatch-syntax)."

   You can add multiple targeting criteria to the same ruleset. For example, you could include any repositories matching the pattern `*cat*`, then specifically exclude a repository matching the pattern `not-a-cat`.

   Optionally, to prevent users from renaming any of the targeted repositories, select **Prevent renaming of target repositories**.
{% data reusables.repositories.rulesets-target-branches %}
{% data reusables.repositories.rulesets-protections-step %}
{% data reusables.repositories.rulesets-metadata-step %}
{% data reusables.repositories.rulesets-create-step %}

## Editing a ruleset

{% data reusables.repositories.about-editing-rulesets %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.edit-ruleset-steps %}

## Deleting a ruleset

{% data reusables.repositories.deleting-ruleset-tip %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
{% data reusables.repositories.delete-ruleset-steps %}

## Viewing insights for rulesets

You can view insights for rulesets to see how rulesets are affecting the repositories in your organization. {% data reusables.repositories.about-ruleset-insights %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, in the "Code, planning, and automation" section, click **{% octicon "repo" aria-hidden="true" %} Repository**, then click **Repository rule insights**.

   ![Screenshot of an organization's settings page. In the sidebar, a link labeled "Repository rule insights" is outlined in orange.](/assets/images/help/organizations/repository-rule-insights.png)
1. On the "Rule Insights" page, use the dropdown menus at the top of the page to filter the actions by ruleset, repository, actor, and time period.
{% data reusables.repositories.rulesets-view-rule-runs %}

## Using `fnmatch` syntax

{% data reusables.repositories.rulesets-fnmatch %}

## Using regular expressions for commit metadata

{% data reusables.repositories.rulesets-commit-regex %}