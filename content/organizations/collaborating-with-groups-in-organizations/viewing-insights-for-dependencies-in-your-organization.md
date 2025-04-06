---
title: Viewing insights for dependencies in your organization
intro: Organization dependency insights provide data about your organization dependencies.
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
  - /organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Dependency insights
permissions: Organization members can view organization insights.
---

{% note %}

**Note:** To view organization dependency insights, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Viewing organization dependency insights

Dependency insights can help you track, report, and act on your organization's open source usage.

{% note %}

**Note:** Please make sure you have enabled the [Dependency Graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).

{% endnote %}

With dependency insights you can view vulnerabilities, licenses, and other important information for the open source projects your organization depends on.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.insights %}
1. Optionally, to view dependency insights for all your organizations, click **My organizations**.

   ![Screenshot of the "Dependency insights" page. A button, labeled "My organizations," is outlined in dark orange.](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
1. To filter by a vulnerability status, a license, or a combination of the two, click the results in the **Open security advisories** and **Licenses** graphs.
1. To see which dependents in your organization are using each library, next to a vulnerability, click {% octicon "package" aria-hidden-"true" %} **X dependents**.

## Further reading

* "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
* "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)"
* "[AUTOTITLE](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)"
* "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-for-visibility-of-dependency-insights)"
