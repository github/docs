---
title: Configuring default setup for code scanning at scale
shortTitle: Code scanning at scale
intro: You can quickly configure {% data variables.product.prodname_code_scanning %} for repositories across your organization using default setup.
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-at-scale
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-default-setup-for-code-scanning-at-scale
  - /code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale
permissions: '{% data reusables.permissions.security-org-enable %}'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
category:
  - Secure at scale
---

With default setup for {% data variables.product.prodname_code_scanning %}, you can quickly secure code in repositories across your organization. For more information, see [AUTOTITLE](/code-security/concepts/code-scanning/setup-types).

For repositories that are not suitable for default setup, you can configure advanced setup at the repository level, or at the organization level using a script.

## Prerequisites

A repository must meet all the following criteria to be eligible for default setup:

* Advanced setup for {% data variables.product.prodname_code_scanning %} is not already enabled.
{% data reusables.code-scanning.require-actions-ghcs %}

## Configuring default setup for all eligible repositories in an organization

 You can enable default setup for all eligible repositories in your organization. For more information, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).

### Extending {% data variables.product.prodname_codeql %} coverage in default setup

Through your organization's security settings page, you can extend coverage in default setup using model packs for all eligible repositories in your organization. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup#extending-coverage-for-all-repositories-in-an-organization).

## Configuring default setup for a subset of repositories in an organization

You can filter for specific repositories you would like to configure default setup for. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

{% ifversion org-private-registry %}

## Providing default setup access to private registries

When a repository uses code stored in a private registry, default setup needs access to the registry to work effectively. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/giving-org-access-private-registries).

{% endif %}

{% ifversion ghes or ghec %}

## Configuring merge protection for all repositories in an organization

You can use rulesets to prevent pull requests from being merged when one of the following conditions is met:

{% data reusables.code-scanning.merge-protection-rulesets-conditions %}

For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/set-code-scanning-merge-protection#creating-a-merge-protection-ruleset-for-all-repositories-in-an-organization). For more general information about rulesets, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

{% endif %}
