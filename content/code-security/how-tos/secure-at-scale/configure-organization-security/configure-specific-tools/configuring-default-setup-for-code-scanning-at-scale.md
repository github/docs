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
topics:
  - Code Security
  - Code scanning
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
---

With default setup for {% data variables.product.prodname_code_scanning %}, you can quickly secure code in repositories across your organization. For more information, see [AUTOTITLE](/code-security/concepts/code-scanning/setup-types).

For repositories that are not suitable for default setup, you can configure advanced setup at the repository level, or at the organization level using a script.

{% ifversion pre-security-configurations %}

> [!NOTE]
> Configuring default setup for all repositories in an organization through your organization's settings page _will not_ override existing configurations of default setup. However, configuring default setup on a subset of repositories in an organization through security overview _will_ override existing configurations of default setup on those repositories.

{% endif %}

## Prerequisites

A repository must meet all the following criteria to be eligible for default setup:

* Advanced setup for {% data variables.product.prodname_code_scanning %} is not already enabled.
{% data reusables.code-scanning.require-actions-ghcs %}

## Configuring default setup for all eligible repositories in an organization

{% ifversion security-configurations %} You can enable default setup for all eligible repositories in your organization. For more information, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).
{% else %}
Through the "{% data variables.product.UI_advanced_security %}" page of your organization's settings, you can enable default setup for all eligible repositories in your organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Click **Enable all** next to "{% data variables.product.prodname_code_scanning_caps %}."
1. In the "Query suites" section of the "Enable {% data variables.product.prodname_code_scanning %} default setup" dialog box displayed, select the query suite your configuration of default setup will run. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites).
1. To enable your configuration of default setup, click **Enable for eligible repositories**.
1. Optionally, to recommend the "Extended" query suite throughout your organization when enabling default setup, select "Recommend the extended query suite for repositories enabling default setup."

> [!NOTE]
> * {% data reusables.code-scanning.limitation-org-enable-all %}
> * Enabling {% data variables.product.prodname_code_scanning %} for all eligible repositories in an organization will not override existing {% data variables.product.prodname_code_scanning %} configurations. For information on configuring default setup with different settings for specific repositories, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning).
> * Enabling default setup for all eligible repositories in an organization includes eligible repositories without {% data variables.product.prodname_codeql %}-supported languages. If a {% data variables.product.prodname_codeql %}-supported language is later added to one of these repositories, default setup will begin scanning that repository and consuming {% data variables.product.prodname_actions %} minutes.

{% endif %}

### Extending {% data variables.product.prodname_codeql %} coverage in default setup

Through your organization's security settings page, you can extend coverage in default setup using model packs for all eligible repositories in your organization. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup#extending-coverage-for-all-repositories-in-an-organization).

## Configuring default setup for a subset of repositories in an organization

{% ifversion security-configurations %}

You can filter for specific repositories you would like to configure default setup for. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

{% endif %}

{% ifversion pre-security-configurations %}

Through security overview for your organization, you can find eligible repositories for default setup, then enable default setup across each of those repositories simultaneously.

### Finding repositories that are eligible for default setup

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.security-overview-coverage-view %}
1. In the search bar, enter one of the following queries:

{%- ifversion ghes %}
    - `code-scanning-default-setup:eligible is:public` shows repositories that have languages suitable for default setup and are eligible because they are visible to the public.
    - `code-scanning-default-setup:eligible advanced-security:enabled` shows private or internal repositories that have languages suitable for default setup and are eligible because they have {% data variables.product.prodname_GHAS %} enabled.
    - `code-scanning-default-setup:eligible is:private,internal advanced-security:not-enabled` shows private or internal repositories that have languages suitable for default setup but do not have {% data variables.product.prodname_GHAS %} enabled. Once you enable {% data variables.product.prodname_GHAS %} for these repositories, they can also be added to default setup.
{%- else %}
    - `code-scanning-default-setup:eligible advanced-security:enabled` shows which repositories can be added to default setup immediately.
    - `code-scanning-default-setup:eligible advanced-security:not-enabled` shows which repositories have languages suitable for default setup but do not have {% data variables.product.prodname_GHAS %} enabled. Once you enable {% data variables.product.prodname_GHAS %} for these repositories, they can also be added to default setup.
    - `code-scanning-default-setup:not-eligible` shows repositories that are ineligible for default setup enablement at scale for any of the following reasons:
      - The repositories already have existing configurations of advanced setup.
      - The repositories only contain languages that cannot be analyzed by default setup.
      - The repositories do not have {% data variables.product.prodname_GHAS %} enabled.
{%- endif %}

You can select all of the displayed repositories, or a subset of them, and enable or disable default setup for {% data variables.product.prodname_code_scanning %} for them all at the same time. For more information, see step 5 of [Configuring default setup at scale for multiple repositories in an organization](#configuring-default-setup-at-scale-for-multiple-repositories-in-an-organization).

### Configuring default setup at scale for multiple repositories in an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.security-overview-coverage-view %}
1. You can use the search bar to narrow down visible repositories in the "Security coverage" view based on name, or on the enablement status of security features. For example, to filter for repositories that are eligible for default setup and do not currently have default setup enabled, search for `code-scanning-default-setup:eligible`.
1. In the list of repositories, select each repository you want to enable {% data variables.product.prodname_code_scanning %} for.
   * To enable {% data variables.product.prodname_code_scanning %} for all repositories on the page, select the checkbox next to **NUMBER Active**.
   * To enable {% data variables.product.prodname_code_scanning %} for all repositories that match the current search, select the checkbox next to **NUMBER Active**, then click **Select all NUMBER repos**.
1. Click **Security settings** next to **NUMBER selected**.
1. In the side panel, in the "{% data variables.product.prodname_codeql %} Default Setup" section, select **No change**, then click **Enable**.
1. To confirm the enablement of {% data variables.product.prodname_code_scanning %} for the selected repositories, click **Apply changes NUMBER**. Alternatively, to select or deselect more repositories for {% data variables.product.prodname_code_scanning %} enablement, click {% octicon "x" aria-label="Close" %} to close the panel without applying your changes.

> [!NOTE]

{%- ifversion ghes %}
> * Enabling {% data variables.product.prodname_code_scanning %} for multiple repositories in an organization using security overview will override any existing {% data variables.product.prodname_code_scanning %} configurations for the selected repositories, including any previous query suite selections and workflows for advanced setups.
> * You can enable default setup for eligible repositories that do not contain {% data variables.product.prodname_codeql %}-supported languages. If a {% data variables.product.prodname_codeql %}-supported language is later added to one of these repositories, default setup will begin scanning that repository and consuming {% data variables.product.prodname_actions %} minutes.
{%- else %}
> Enabling {% data variables.product.prodname_code_scanning %} for multiple repositories in an organization using security overview will override any existing {% data variables.product.prodname_code_scanning %} configurations for the selected repositories, including any previous query suite selections and workflows for advanced setups.
{%- endif %}

  ![Screenshot of the "Security coverage" view with the side panel open. The "Apply changes" button is highlighted in a dark orange outline.](/assets/images/help/security-overview/security-coverage-view-multi-repo-side-panel.png)

  If you're blocked from enabling {% data variables.product.prodname_code_scanning %} due to an enterprise policy, you will still be able to see the affected repository in the "Security Coverage" view and access the side panel from the **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Security settings** button. However, you will see a message in the side panel indicating that you cannot enable {% data variables.product.prodname_code_scanning %} for the selected repositories. For more information about enterprise policies, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).

{% endif %}

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
