---
title: Managing {% data variables.product.prodname_GHAS %} features for your enterprise
intro: 'You can control {% data variables.product.prodname_GHAS %} features that secure and analyze code across all organizations owned by your enterprise.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_AS %} features for organizations in an enterprise.'
allowTitleToDifferFromFilename: true
versions:
  ghes: '<= 3.15'
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage {% data variables.product.prodname_GHAS %}
redirect_from:
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise
---

## About management of {% data variables.product.prodname_AS %} features

You can use {% data variables.product.prodname_AS %} features to harden security for the organizations in your enterprise.

{% ifversion security-configurations %}{% data reusables.security-configurations.enable-security-features-with-gh-config %}

To manage individual {% data variables.product.prodname_GHAS %} features, {% else %}To streamline management of {% data variables.product.prodname_AS %}, {% endif %}you can enable or disable each feature for all existing and/or new repositories within the organizations owned by your enterprise.

{% ifversion security-configurations-ghes-only %}

> [!WARNING]
> You should communicate any changes you plan to make to existing feature enablement settings to organization owners before making them, so as not to impact existing security configurations that have been rolled out by organizations in your enterprise.

{% endif %}

{% data reusables.secret-scanning.secret-scanning-enterprise-level-api %}

For information about buying a license for {% data variables.product.prodname_GHAS %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

If you have disallowed {% data variables.product.prodname_GHAS %} for an organization, that organization will not be affected by enabling a feature for all existing repositories or for all new repositories. For more information about disallowing {% data variables.product.prodname_GHAS %} for an organization, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).

When you enable one or more security and analysis features for existing repositories, you will see any results displayed on {% data variables.product.prodname_dotcom %} within minutes.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Managing {% data variables.product.prodname_AS %} features

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.advanced-security-tab %}
1. Optionally, enable or disable a feature for all existing repositories.

   * To the right of the feature, click **Disable all** or **Enable all**. If the control for "{% data variables.product.prodname_GHAS %}" is disabled, you have no available licenses for {% data variables.product.prodname_GHAS %}.
   * To confirm the change, click the **Enable/Disable all** or **Enable/Disable for eligible repositories** button in the dialog that is displayed.
1. Optionally, to enable or disable a feature automatically when new private and internal repositories{% ifversion secret-scanning-user-owned-repos %}, user namespace repositories{% endif %}, or public repositories and repositories with {% data variables.product.prodname_GHAS %} enabled are created, select the checkbox below the feature.{% ifversion org-npp-enablement-security-configurations %}
1. Optionally, to enable the scanning of non-provider patterns, to the right of "Scan for non-provider patterns", click **Enable all**. To learn more about scanning for non-provider patterns, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#non-provider-patterns) and [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts).{% endif %}
1. Optionally, to include a resource link in the message that members will see when they attempt to push a secret, select **Add a resource link in the CLI and web UI when a commit is blocked**, then type a URL, and click **Save link**.

   > [!NOTE]
   > When a custom link is configured for an organization, the organization-level value overrides the custom link set for the enterprise. See [AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).

   ![Screenshot of "Push protection" settings. The checkbox and text field used for enabling a custom link are outlined.](/assets/images/help/organizations/secret-scanning-custom-link.png)
