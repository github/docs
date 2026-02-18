---
title: Set code scanning merge protection
shortTitle: Set merge protection
intro: 'Secure your codebase by blocking pull requests that fail {% data variables.product.prodname_code_scanning %} checks.'
permissions: '{% data reusables.permissions.security-org-enable %}'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/code-scanning/managing-your-code-scanning-configuration/set-code-scanning-merge-protection
contentType: how-tos
---

## Creating a merge protection ruleset for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New branch ruleset**.
{% data reusables.repositories.rulesets-general-step %}
{% data reusables.repositories.rulesets-require-code-scanning-results %}

For more information about managing rulesets in a repository, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/).

{% ifversion ghec or ghes %}

## Creating a merge protection ruleset for all repositories in an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}
1. Click **New ruleset**.
1. To create a ruleset targeting branches, click **New branch ruleset**.
{% data reusables.repositories.rulesets-general-step %}
{% data reusables.repositories.rulesets-require-code-scanning-results %}

For more information about managing rulesets for repositories in an organization, see [AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization).

{% endif %}

## Creating a merge protection ruleset with the REST API

You can use the REST API to create a ruleset with the `code_scanning` rule, which allows you to define specific tools and set alert thresholds. For more information, see [AUTOTITLE](/rest/repos/rules?apiVersion=2022-11-28#create-a-repository-ruleset).
