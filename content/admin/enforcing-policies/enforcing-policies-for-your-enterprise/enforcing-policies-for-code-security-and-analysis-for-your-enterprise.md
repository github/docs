---
title: Enforcing policies for code security and analysis for your enterprise
intro: 'You can enforce policies to manage the use of code security and analysis features within your enterprise''s organizations.'
permissions: 'Enterprise owners can enforce code security and analysis policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.'
product: '{% data reusables.gated-features.ghas %}'
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
shortTitle: Code security & analysis
---

## About policies for code security and analysis in your enterprise

You can enforce policies to manage the use of code security and analysis features within organizations owned by your enterprise. You can allow or disallow people with admin access to a repository to enable or disable the security and analysis features.

Additionally, you can enforce policies for the use of {% data variables.product.prodname_GH_advanced_security %} in your enterprise's organizations and repositories.

{% ifversion ghec %}

## Enforcing a policy for visibility of dependency insights

Dependency insights show all open source projects that repositories within your enterprise's organizations depend on. Dependency insights include aggregated information about security advisories and licenses. For more information, see [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-dependencies-in-your-organization).

Across all organizations owned by your enterprise, you can control whether organization members can view dependency insights. You can also allow owners to administer the setting on the organization level. For more information, see [AUTOTITLE](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "Dependency insights", review the information about changing the setting.
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
1. Under "Enable or disable {% data variables.product.prodname_dependabot_alerts %} by repository admins", use the dropdown menu to choose a policy.

{% endif %}

## Enforcing a policy for the use of {% data variables.product.prodname_GH_advanced_security %} in your enterprise's organizations

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise.role-permission-hierarchy %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "{% data variables.product.prodname_GH_advanced_security %} policies" section, under "{% data variables.product.prodname_GH_advanced_security %} availability", select the dropdown menu and click a policy for the organizations owned by your enterprise.

{% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %}
{% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_GH_advanced_security %} features in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage the use of {% data variables.product.prodname_GH_advanced_security %} features in the repositories. {% data reusables.advanced-security.ghas-must-be-enabled %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "{% data variables.product.prodname_GH_advanced_security %} policies" section, under "Enable or disable {% data variables.product.prodname_GH_advanced_security %} by repository admins", select the dropdown menu and click a policy.

## Enforcing a policy to manage the use of {% data variables.product.prodname_secret_scanning %} in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage and configure {% data variables.product.prodname_secret_scanning %} for the repositories. {% data reusables.advanced-security.ghas-must-be-enabled %}

{% data reusables.enterprise.role-permission-hierarchy %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "{% data variables.product.prodname_GH_advanced_security %} policies" section, under "Enable or disable {% data variables.product.prodname_secret_scanning %} by repository admins", select the dropdown menu and click a policy.

{% ifversion secret-scanning-ai-generic-secret-detection %}

## Enforcing a policy to manage the use of {% data variables.secret-scanning.generic-secret-detection %} for {% data variables.product.prodname_secret_scanning %} in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage and configure AI detection in {% data variables.product.prodname_secret_scanning %} for the repositories. {% data reusables.advanced-security.ghas-must-be-enabled %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "{% data variables.product.prodname_GH_advanced_security %} policies" section, under "AI detection in {% data variables.product.prodname_secret_scanning %}", select the dropdown menu and click a policy.

{% endif %}

{% ifversion code-scanning-autofix %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_autofix_short %} in your enterprise's repositories

Across all of your enterprise's organizations, you can allow or disallow people with admin access to repositories to manage where {% data variables.product.prodname_copilot_autofix_short %} is enabled. {% data reusables.advanced-security.ghas-must-be-enabled %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. In the "{% data variables.product.prodname_GH_advanced_security %} policies" section, under "{% data variables.product.prodname_copilot_autofix_short %}", select the dropdown menu and click a policy.

{% endif %}
