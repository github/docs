---
title: Managing security and analysis settings for your organization
intro: 'You can control features that secure and analyze the code in your organization''s projects on {% data variables.product.prodname_dotcom %}.'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage security & analysis
---

## About management of security and analysis settings

{% data variables.product.prodname_dotcom %} can help you to secure the repositories in your organization. You can manage the security and analysis features for all existing or new repositories that members create in your organization. {% ifversion ghec %}If you have a license for {% data variables.product.prodname_GH_advanced_security %} then you can also manage access to these features. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can also manage access to these features. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% ifversion security-configurations %}
{% data reusables.security-configurations.enable-security-features-with-gh-config %}

{% endif %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% ifversion pre-security-configurations %}

## Displaying the security and analysis settings

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

The page that's displayed allows you to enable or disable all security and analysis features for the repositories in your organization.

If you have a license for {% data variables.product.prodname_GH_advanced_security %}, the page will also contain options to enable and disable {% data variables.product.prodname_advanced_security %} features. Any repositories that use {% data variables.product.prodname_GH_advanced_security %} are listed at the bottom of the page.

## Enabling or disabling a feature for all existing repositories

You can enable or disable features for all repositories.

{% ifversion code-security-multi-repo-enablement %}
You can use security overview to find a set of repositories and enable or disable security features for them all at the same time. For more information, see [AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories).
{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

> [!NOTE]
> If you encounter an error that reads "GitHub Advanced Security cannot be enabled because of a policy setting for the organization," contact your enterprise admin and ask them to change the GitHub Advanced Security policy for your enterprise. For more information, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).

{% ifversion dependabot-alerts-enterprise-enablement %}

> [!NOTE]
> When {% data variables.product.prodname_dependabot_alerts %} are enabled or disabled at the enterprise level, it overrides the organization level settings for {% data variables.product.prodname_dependabot_alerts %}. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts#managing-dependabot-alerts-for-your-enterprise).

{% endif %}

1. Go to the security and analysis settings for your organization. For more information, see [Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings).
1. Under "Code security and analysis", to the right of the feature, click **Disable all** or **Enable all** to display a confirmation dialog box. The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if you have no available licenses for {% data variables.product.prodname_GH_advanced_security %}.
1. Review the information in the dialog box.
1. Optionally, if you are enabling private vulnerability reporting, dependency graph, or {% data variables.product.prodname_dependabot %}, select **Enable by default for new repositories**.

    ![Screenshot of the "Enable FEATURE" modal dialog, with the "Enable by default for new private repositories" option outlined in orange.](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)

1. When you are ready to make the changes, click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories in your organization.
1. Optionally, in your feature's section of the security and analysis settings, select additional enablement settings. Additional enablement settings may include:
     * Automatic enablement for a specific type of repository
     * Feature-specific settings, such as recommending the extended query suite for {% data variables.product.prodname_code_scanning %} default setup throughout your organization, or automatic secret validation for {% data variables.product.prodname_secret_scanning %}

   > [!NOTE]
   > * {% data reusables.code-scanning.limitation-org-enable-all %}{% ifversion bulk-code-scanning-query-suite %}
   > * Enabling {% data variables.product.prodname_code_scanning %} for all eligible repositories in an organization will not override existing {% data variables.product.prodname_code_scanning %} configurations. For information on configuring default setup with different settings for specific repositories, see [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning){% ifversion code-security-multi-repo-enablement %} and [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale#configuring-default-setup-for-a-subset-of-repositories-in-an-organization){% endif %}.{% endif %}

{% data reusables.security.displayed-information %}

## Enabling or disabling a feature automatically when new repositories are added

1. Go to the security and analysis settings for your organization. For more information, see [Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings).
1. Under "Code security and analysis", locate the feature, enable or disable the feature by default for new repositories in your organization.

{% endif %}

## Allowing {% data variables.product.prodname_dependabot %} to access private{% ifversion ghec or ghes %} or internal{% endif %} dependencies

{% data variables.product.prodname_dependabot %} can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, {% data variables.product.prodname_dependabot %} must have access to all of the targeted dependency files. Typically, version updates will fail if one or more dependencies are inaccessible. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates).

By default, {% data variables.product.prodname_dependabot %} can't update dependencies that are located in private{% ifversion ghec or ghes %} or internal{% endif %} repositories, or private{% ifversion ghec or ghes %} or internal{% endif %} package registries. However, if a dependency is in a private{% ifversion ghec or ghes %} or internal{% endif %} {% data variables.product.prodname_dotcom %} repository within the same organization as the project that uses that dependency, you can allow {% data variables.product.prodname_dependabot %} to update the version successfully by giving it access to the host repository.

If your code depends on packages in a private{% ifversion ghec or ghes %} or internal{% endif %} registry, you can allow {% data variables.product.prodname_dependabot %} to update the versions of these dependencies by configuring this at the repository level. You do this by adding authentication details to the `dependabot.yml` file for the repository. For more information, see [Top-level `registries` key](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#top-level-registries-key).

{% ifversion ghec %}

> [!NOTE]
> For the option to grant {% data variables.product.prodname_dependabot %} access to private or internal repositories to be available, you need {% data variables.product.prodname_dependabot_version_updates %} or {% data variables.product.prodname_dependabot_security_updates %} to be enabled on at least one repository within the organization.

{% endif %}

{% ifversion security-configurations %}

 For more information on how to grant {% data variables.product.prodname_dependabot %} access to private{% ifversion ghec or ghes %} or internal{% endif %} dependencies, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#granting-dependabot-access-to-private-and-internal-repositories).

{% else %}

To allow {% data variables.product.prodname_dependabot %} to access a private or internal {% data variables.product.prodname_dotcom %} repository:

1. Go to the security and analysis settings for your organization. For more information, see [Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings).
1. Under "Grant {% data variables.product.prodname_dependabot %} private repository access", click **Add internal and private repositories** to display a repository search field.

   ![Screenshot of the search dropdown. As you type, repository names that match your search are shown. The search text field is outlined in orange.](/assets/images/help/organizations/dependabot-private-repo-choose.png)

1. Start typing the name of the repository you want to grant {% data variables.product.prodname_dependabot %} access to.
1. A list of matching repositories in the organization is displayed, click the repository you want to allow access to and this adds the repository to the allowed list.
1. Optionally, to remove a repository from the list, to the right of the repository, click {% octicon "x" aria-label="The X icon" %}.

{% endif %}

## Removing access to {% data variables.product.prodname_GH_advanced_security %} from individual repositories in an organization

{% ifversion security-configurations %}

You can use {% data variables.product.prodname_security_configurations %} to remove access to {% data variables.product.prodname_GH_advanced_security %} from individual repositories in an organization. For more information, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/managing-your-github-advanced-security-license-usage#turning-off-github-advanced-security-features-on-select-repositories-in-your-organization).

{% else %}

You can manage access to {% data variables.product.prodname_GH_advanced_security %} features for a repository from its "Settings" tab. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository). However, you can also disable {% data variables.product.prodname_GH_advanced_security %} features for a repository from the "Settings" tab for the organization.

1. Go to the security and analysis settings for your organization. For more information, see [Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings).
1. To see a list of all the repositories in your organization with {% data variables.product.prodname_GH_advanced_security %} enabled, scroll to the "{% data variables.product.prodname_GH_advanced_security %} repositories" section.

  The table lists the number of unique committers for each repository. This is the number of licenses you could free up by removing access to {% data variables.product.prodname_GH_advanced_security %}. For more information, see [AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).
1. To remove access to {% data variables.product.prodname_GH_advanced_security %} from a repository and free up licenses used by any active committers that are unique to the repository, click the adjacent {% octicon "x" aria-label="X symbol" %}.
1. In the confirmation dialog, click **Remove repository** to remove access to the features of {% data variables.product.prodname_GH_advanced_security %}.

> [!NOTE]
> If you remove access to {% data variables.product.prodname_GH_advanced_security %} for a repository, you should communicate with the affected development team so that they know that the change was intended. This ensures that they don't waste time debugging failed runs of code scanning.

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/getting-started/securing-your-repository){% ifversion not fpt %}
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning){% endif %}
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)
