---
title: Managing GitHub Advanced Security features for your enterprise
intro: 'You can control {% data variables.product.prodname_GH_advanced_security %} features that secure and analyze code across all organizations owned by your enterprise.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_advanced_security %} features for organizations in an enterprise.'
versions:
  feature: secret-scanning-enterprise-level
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage GitHub Advanced Security
---

## About management of {% data variables.product.prodname_advanced_security %} features

You can use {% data variables.product.prodname_advanced_security %} features to harden security for the organizations in your enterprise. To streamline management of {% data variables.product.prodname_advanced_security %}, you can enable or disable each feature for all existing and/or new repositories within the organizations owned by your enterprise.

{% ifversion ghes or ghec %}For information about buying a license for {% data variables.product.prodname_GH_advanced_security %}, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghae %}There is no charge for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_ghe_managed %} during the beta release.{% endif %}

If you have disallowed {% data variables.product.prodname_GH_advanced_security %} for an organization, that organization will not be affected by enabling a feature for all existing repositories or for all new repositories. For more information about disallowing {% data variables.product.prodname_GH_advanced_security %} for an organization, see "[Enforcing policies for Advanced Security in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise)."

When you enable one or more security and analysis features for existing repositories, you will see any results displayed on {% data variables.product.prodname_dotcom %} within minutes.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Managing {% data variables.product.prodname_advanced_security %} features

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security & analysis**. 
1. Optionally, enable or disable a feature for all existing repositories.

   - To the right of the feature, click **Disable all** or **Enable all**. {% ifversion ghes or ghec %}If the control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled, you have no available seats in your {% data variables.product.prodname_GH_advanced_security %} license.{% endif %}
   
   ![Screenshot of "Enable all" or "Disable all" buttons for "Configure security and analysis" features](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png)

   - To confirm the change, click **Enable/Disable all** or **Enable/Disable for eligible repositories**.
   
     ![Screenshot of button to enable feature for all the eligible repositories in the organization](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-secret-scanning.png)

1. Optionally, to enable or disable a feature automatically when new repositories are added, select the checkbox below the feature.
   
   ![Screenshot of a checkbox for enabling a feature for new repositories](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-or-disable-feature-checkbox.png){% ifversion secret-scanning-custom-link-on-block %}

1. Optionally, to include a resource link in the message that members will see when they attempt to push a secret, select **Add a resource link in the CLI and web UI when a commit is blocked**, then type a URL, and click **Save link**.
  
  {% note %}

  **Note**: When a custom link is configured for an organization, the organization-level value overrides the custom link set for the enterprise. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".

  {% endnote %}

   ![Screenshot showing checkbox and text field for enabling a custom link](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}

