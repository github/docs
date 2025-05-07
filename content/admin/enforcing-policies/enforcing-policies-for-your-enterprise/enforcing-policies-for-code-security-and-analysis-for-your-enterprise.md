---
title: Enforcing policies for code security and analysis for your enterprise
intro: 'You can enforce policies to manage the use of code security and analysis features within your enterprise''s organizations.'
permissions: 'Enterprise owners'
product: '{% data reusables.gated-features.ghas-ghec %}'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Policies
  - Secret scanning
  - Security
redirect_from:
  - /admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-policies-for-advanced-security-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise
  - /articles/enforcing-a-policy-on-dependency-insights
  - /articles/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise
shortTitle: Security & analysis
---

## About policies for using security features in your enterprise

You can enforce policies to manage the use of security features within organizations owned by your enterprise. You can allow or disallow people with admin access to a repository to enable or disable the security and analysis features.

Additionally, you can enforce policies for the use of {% data variables.product.prodname_GHAS %}{% ifversion ghas-products %} products{% endif %} in your enterprise's organizations and repositories.

## Enforcing a policy for the availability of {% data variables.product.prodname_AS %} in your enterprise's organizations

{% data variables.product.github %} bills for {% data variables.product.prodname_AS %} products on a per-committer basis. See [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#managing-committers-and-costs).

You can enforce a policy that controls whether repository administrators are allowed to enable features for {% data variables.product.prodname_AS %} in an organization's repositories. You can configure a policy for all organizations owned by your enterprise account, or for individual organizations that you choose.

Disallowing {% data variables.product.prodname_GH_cs_or_sp %} for an organization prevents repository administrators from enabling {% data variables.product.prodname_GH_cs_or_sp %} features for additional repositories, but does not disable the features for repositories where the features are already enabled.

{% data reusables.enterprise.role-permission-hierarchy %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
{% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %}
{% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}

{% ifversion ghec %}

## Enforcing a policy for visibility of dependency insights

Dependency insights show all open source projects that repositories within your enterprise's organizations depend on. Dependency insights include aggregated information about security advisories and licenses. For more information, see [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization).

Across all organizations owned by your enterprise, you can control whether organization members can view dependency insights. You can also allow owners to administer the setting on the organization level. For more information, see [AUTOTITLE](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "Policies" section, under "Dependency insights", review the information about changing the setting.
1. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Dependency insights", select the dropdown menu and click a policy.

{% endif %}

{% ifversion security-feature-enablement-policies-dependabot %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_dependabot_alerts %} in your enterprise

Across all organizations owned by your enterprise, you can allow members with admin permissions for repositories to enable or disable {% data variables.product.prodname_dependabot_alerts %} and change {% data variables.product.prodname_dependabot_alerts %} settings.

{% data reusables.enterprise.role-permission-hierarchy %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "Policies" section, under "Enable or disable {% data variables.product.prodname_dependabot_alerts %} by repository admins", use the dropdown menu to choose a policy.

{% endif %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_AS %} features in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage the use of {% data variables.product.prodname_AS %} features in the repositories.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
{% ifversion ghas-products %}
1. In the "Policies" section, under "Repository administrators can enable or disable `PRODUCT`", use the dropdown menu to define whether repository administrators can change the enablement of {% data variables.product.prodname_cs_and_sp %}.
{% else %}
1. In the "{% data variables.product.prodname_GHAS %} policies" section, under "Enable or disable {% data variables.product.prodname_GHAS %} by repository admins", select the dropdown menu and click a policy.
{% endif %}

{% ifversion ghas-products %}
<!--This option is included automatically by the "Repository Admins can Enable or Disable Secret Protection" option, which is why this section is omitted for `ghas-products` versions.-->
{% else %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_secret_scanning %} in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage and configure {% data variables.product.prodname_secret_scanning %} for the repositories. {% data variables.product.prodname_GHAS %} must be enabled for the organization for this policy to take effect.

{% data reusables.enterprise.role-permission-hierarchy %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "Policies" section, under "Enable or disable {% data variables.product.prodname_secret_scanning %} by repository admins", select the dropdown menu and click a policy.

{% endif %}

{% ifversion secret-scanning-ai-generic-secret-detection %}

## Enforcing a policy to manage the use of AI detection for {% data variables.product.prodname_secret_scanning %} in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage and configure AI detection in {% data variables.product.prodname_secret_scanning %} for the repositories. This policy only takes effect if repository administrators are also allowed to change enablement of {% data variables.product.prodname_secret_protection %} (controlled by the "Repository administrators can enable or disable Secret Protection" policy).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "Policies" section, under "AI detection in {% data variables.product.prodname_secret_scanning %}", select the dropdown menu and click a policy.

{% endif %}

{% ifversion code-scanning-autofix %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_autofix_short %} in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage where {% data variables.product.prodname_copilot_autofix_short %} is enabled. {% data variables.product.prodname_GH_code_security %} must be enabled for the organization for this policy to take effect.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "Policies" section, under "{% data variables.product.prodname_copilot_autofix_short %}", select the dropdown menu and click a policy.

{% endif %}
