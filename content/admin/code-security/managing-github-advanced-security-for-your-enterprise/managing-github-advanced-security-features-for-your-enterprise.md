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

You can use {% data variables.product.prodname_advanced_security %} features to harden security for the organizations in your enterprise. {% ifversion security-configurations %}{% data reusables.security-configurations.enable-security-features-with-gh-config %}

{% note %}

**Note:** {% data reusables.security-configurations.security-configurations-beta-note-short %}

{% endnote %}

To manage individual {% data variables.product.prodname_GH_advanced_security %} features, {% else %}To streamline management of {% data variables.product.prodname_advanced_security %}, {% endif %}you can enable or disable each feature for all existing and/or new repositories within the organizations owned by your enterprise.

{% ifversion secret-scanning-enterprise-level-api %}{% data reusables.secret-scanning.secret-scanning-enterprise-level-api %}{% endif %}

{% ifversion ghes %}For information about buying a license for {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% elsif ghec %}For information about buying a license for {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security)."{% endif %}

If you have disallowed {% data variables.product.prodname_GH_advanced_security %} for an organization, that organization will not be affected by enabling a feature for all existing repositories or for all new repositories. For more information about disallowing {% data variables.product.prodname_GH_advanced_security %} for an organization, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."

When you enable one or more security and analysis features for existing repositories, you will see any results displayed on {% data variables.product.prodname_dotcom %} within minutes.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Managing {% data variables.product.prodname_advanced_security %} features

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security & analysis**.
1. Optionally, enable or disable a feature for all existing repositories.

   - To the right of the feature, click **Disable all** or **Enable all**. {% ifversion ghes or ghec %}If the control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled, you have no available {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} for {% data variables.product.prodname_GH_advanced_security %}.{% endif %}

     {% ifversion ghec %}
     ![Screenshot of the "Configure security and analysis features" section of the enterprise settings. To the right of each setting are "Enable all" and "Disable all" buttons, which are outlined in dark orange.](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all-with-user-namespace.png)

     {% elsif ghes > 3.12 %}
     ![Screenshot of the "Configure security and analysis features" section of the enterprise settings. To the right of each setting are "Enable all" and "Disable all" buttons, which are outlined in dark orange.](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all-without-validity-check.png)

     {% else %}
     ![Screenshot of the "Configure security and analysis features" section of the enterprise settings. To the right of each setting are "Enable all" and "Disable all" buttons, which are outlined in dark orange.](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png){% endif %}
   - To confirm the change, click the **Enable/Disable all** or **Enable/Disable for eligible repositories** button in the dialog that is displayed.
1. Optionally, to enable or disable a feature automatically when new private and internal repositories{% ifversion secret-scanning-user-owned-repos %}, user namespace repositories {% ifversion ghec %}belonging to {% data variables.product.prodname_emus %}{% endif %}{% endif %}, or public repositories and repositories with {% data variables.product.prodname_GH_advanced_security %} enabled are created, select the checkbox below the feature.
{% ifversion secret-scanning-validity-check-partner-patterns %}
1. Optionally, to automatically allow {% data variables.product.prodname_secret_scanning %} to check the validity of a secret by sending it to the relevant partner, select the relevant checkbox under "{% data variables.product.prodname_secret_scanning_caps %}". You can also enable the validity check for a single repository or organization. For more information, see "[AUTOTITLE](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#enabling-validity-checks-for-partner-patterns)," and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#allowing-validity-checks-for-partner-patterns-in-an-organization)."

   For information on using the REST API to enable validity checks for partner patterns for your enterprise, see "[AUTOTITLE](/rest/enterprise-admin/code-security-and-analysis#update-code-security-and-analysis-features-for-an-enterprise)."

   {% data reusables.secret-scanning.validity-check-partner-patterns-beta %}

{%- endif %}
{% ifversion secret-scanning-custom-link-on-block %}
1. Optionally, to include a resource link in the message that members will see when they attempt to push a secret, select **Add a resource link in the CLI and web UI when a commit is blocked**, then type a URL, and click **Save link**.

   {% note %}

   **Note**: When a custom link is configured for an organization, the organization-level value overrides the custom link set for the enterprise. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."

   {% endnote %}

   ![Screenshot of the "Push protection" section of the settings for security and analysis features. The checkbox and the text field used for enabling a custom link are outlined in dark orange.](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}
