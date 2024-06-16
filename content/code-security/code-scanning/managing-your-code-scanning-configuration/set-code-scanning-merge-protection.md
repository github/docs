---
title: Set code scanning merge protection
shortTitle: Set merge protection
intro: 'You can use rulesets to set {% data variables.product.prodname_code_scanning %} merge protection for pull requests.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  feature: code-scanning-merge-protection-rulesets
type: how_to
topics:
  - Code scanning
  - CodeQL
---

## About using rulesets for {% data variables.product.prodname_code_scanning %} merge protection

{% note %}

**Notes:**

* This feature is currently in beta and subject to change.
* Merge protection with rulesets is not related to status checks. For more information about status checks, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."
* Merge protection with rulesets will not apply to merge queue groups or {% data variables.product.prodname_dependabot %} pull requests analyzed by default setup.

{% endnote %}

You can use rulesets to prevent pull requests from being merged when one of the following conditions is met:

{% data reusables.code-scanning.merge-protection-rulesets-conditions %}

For more information about {% data variables.product.prodname_code_scanning %} alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)."

You can set merge protection with rulesets at the repository {% ifversion ghec or ghes %}or organization levels{% else %}level{% endif %}, and for repositories configured with either default setup or advanced setup. You can also use the REST API to set merge protection with rulesets.

For more information about rulesets, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

## Creating a merge protection ruleset for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New branch ruleset**.
{% data reusables.repositories.rulesets-general-step %}
{% data reusables.repositories.rulesets-require-code-scanning-results %}

For more information about managing rulesets in a repository, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/)."

{% ifversion ghec or ghes %}

## Creating a merge protection ruleset for all repositories in an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New branch ruleset**.
{% data reusables.repositories.rulesets-general-step %}
{% data reusables.repositories.rulesets-require-code-scanning-results %}

For more information about managing rulesets for repositories in an organization, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization)."

{% endif %}

## Creating a merge protection ruleset with the REST API

You can use the REST API to create a ruleset with the `code_scanning` rule, which allows you to define specific tools and set alert thresholds. For more information, see "[AUTOTITLE](/rest/repos/rules?apiVersion=2022-11-28#create-a-repository-ruleset)."
