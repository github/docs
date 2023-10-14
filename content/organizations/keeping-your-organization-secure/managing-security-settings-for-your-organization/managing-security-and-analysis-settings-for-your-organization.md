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
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage security & analysis
---

## About management of security and analysis settings

{% data variables.product.prodname_dotcom %} can help you to secure the repositories in your organization. You can manage the security and analysis features for all existing or new repositories that members create in your organization. {% ifversion ghec %}If you have a license for {% data variables.product.prodname_GH_advanced_security %} then you can also manage access to these features. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can also manage access to these features. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Displaying the security and analysis settings

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

The page that's displayed allows you to enable or disable all security and analysis features for the repositories in your organization.

{% ifversion ghec %}If your organization belongs to an enterprise with a license for {% data variables.product.prodname_GH_advanced_security %}, the page will also contain options to enable and disable {% data variables.product.prodname_advanced_security %} features. Any repositories that use {% data variables.product.prodname_GH_advanced_security %} are listed at the bottom of the page.{% endif %}

{% ifversion ghes %}If you have a license for {% data variables.product.prodname_GH_advanced_security %}, the page will also contain options to enable and disable {% data variables.product.prodname_advanced_security %} features. Any repositories that use {% data variables.product.prodname_GH_advanced_security %} are listed at the bottom of the page.{% endif %}

{% ifversion ghae %}The page will also contain options to enable and disable {% data variables.product.prodname_advanced_security %} features. Any repositories that use {% data variables.product.prodname_GH_advanced_security %} are listed at the bottom of the page.{% endif %}

## Enabling or disabling a feature for all existing repositories

You can enable or disable features for all repositories.
{% ifversion fpt or ghec %}The impact of your changes on repositories in your organization is determined by their visibility:

- **Private vulnerability reporting** - Your changes affect public repositories only.
- **Dependency graph** - Your changes affect only private repositories because the feature is always enabled for public repositories.
- **{% data variables.product.prodname_dependabot_alerts %}** - Your changes affect all repositories.
- **{% data variables.product.prodname_dependabot_security_updates %}** - Your changes affect all repositories.
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}** - Your changes affect only private repositories because {% data variables.product.prodname_GH_advanced_security %} and the related features are always enabled for public repositories.{% endif %}
- **{% data variables.product.prodname_secret_scanning_caps %}** - Your changes affect {% ifversion fpt %}public repositories and public npm packages these repositories may depend on.{% endif %}{% ifversion ghec %}public repositories, and private or internal repositories where {% data variables.product.prodname_GH_advanced_security %} is enabled.{% endif %} This option controls whether or not {% data variables.secret-scanning.user_alerts %} are enabled. {% data variables.secret-scanning.partner_alerts_caps %} always runs on all public repositories.

{%- ifversion org-enable-code-scanning %}
- **{% data variables.product.prodname_code_scanning_caps %}** - Your changes affect {% ifversion fpt %}public repositories{% elsif ghec %}public repositories, and private or internal repositories where {% data variables.product.prodname_GH_advanced_security %} is enabled{% elsif ghes or ghae %}repositories that are eligible for default setup using {% data variables.product.prodname_codeql %} where {% data variables.product.prodname_GH_advanced_security %} is enabled{% endif %}. {% data reusables.code-scanning.default-setup-info-link %} For repositories that are not eligible for default setup, you can configure advanced setup at the repository level. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."
{%- endif %}

{% endif %}

{% ifversion code-security-multi-repo-enablement %}
You can use security overview to find a set of repositories and enable or disable security features for them all at the same time. For more information, see "[AUTOTITLE](/code-security/security-overview/enabling-security-features-for-multiple-repositories)."
{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% ifversion ghes or ghec or ghae %}
{% note %}

**Note:** If you encounter an error that reads "GitHub Advanced Security cannot be enabled because of a policy setting for the organization," contact your enterprise admin and ask them to change the GitHub Advanced Security policy for your enterprise. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)."
{% endnote %}
{% endif %}

{% ifversion dependabot-alerts-enterprise-enablement %}

{% note %}

**Note:** When {% data variables.product.prodname_dependabot_alerts %} are enabled or disabled at the enterprise level, it overrides the organization level settings for {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts#managing-dependabot-alerts-for-your-enterprise)."

{% endnote %}

{% endif %}

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "Code security and analysis", to the right of the feature, click **Disable all** or **Enable all** to display a confirmation dialog box. {% ifversion ghes or ghec %}The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if you have no available {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} for {% data variables.product.prodname_GH_advanced_security %}.{% endif %}
1. Review the information in the dialog box.
1. Optionally, if you are enabling private vulnerability reporting, dependency graph, or {% data variables.product.prodname_dependabot %}, select **Enable by default for new {% ifversion fpt or ghec %}private {% endif %}repositories**.

    ![Screenshot of the "Enable FEATURE" modal dialog, with the "Enable by default for new private repositories" option highlighted with a dark orange outline.](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)

1. When you are ready to make the changes, click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories in your organization.
1. Optionally, in your feature's section of the security and analysis settings, select additional enablement settings. Additional enablement settings may include:
     - Automatic enablement for a specific type of repository
     - Feature-specific settings, such as recommending the extended query suite for {% data variables.product.prodname_code_scanning %} default setup throughout your organization, or automatic secret validation for {% data variables.product.prodname_secret_scanning %}

{% ifversion org-enable-code-scanning %}
   {% note %}

   **Notes:**
   - {% data reusables.code-scanning.limitation-org-enable-all %}{% ifversion bulk-code-scanning-query-suite %}
   - Enabling {% data variables.product.prodname_code_scanning %} for all eligible repositories in an organization will not override existing {% data variables.product.prodname_code_scanning %} configurations. For information on configuring default setup with different settings for specific repositories, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning){% ifversion code-security-multi-repo-enablement %}" and "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale#configuring-default-setup-for-a-subset-of-repositories-in-an-organization){% endif %}."{% endif %}

   {% endnote %}
{% endif %}

{% data reusables.security.displayed-information %}

## Enabling or disabling a feature automatically when new repositories are added

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "Code security and analysis", locate the feature, enable or disable the feature by default for new repositories{% ifversion fpt or ghec %}, or all new private repositories,{% endif %} in your organization.

{% ifversion fpt or ghec or ghes %}

## Allowing {% data variables.product.prodname_dependabot %} to access private dependencies

{% data variables.product.prodname_dependabot %} can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, {% data variables.product.prodname_dependabot %} must have access to all of the targeted dependency files. Typically, version updates will fail if one or more dependencies are inaccessible. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."

By default, {% data variables.product.prodname_dependabot %} can't update dependencies that are located in private repositories or private package registries. However, if a dependency is in a private {% data variables.product.prodname_dotcom %} repository within the same organization as the project that uses that dependency, you can allow {% data variables.product.prodname_dependabot %} to update the version successfully by giving it access to the host repository.

If your code depends on packages in a private registry, you can allow {% data variables.product.prodname_dependabot %} to update the versions of these dependencies by configuring this at the repository level. You do this by adding authentication details to the `dependabot.yml` file for the repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-private-registries)."

{% ifversion ghec %}
{% note %}

**Note:** For the option to grant  {% data variables.product.prodname_dependabot %} access to private repositories to be available, you need {% data variables.product.prodname_dependabot_version_updates %} or {% data variables.product.prodname_dependabot_security_updates %} to be enabled on at least one repository within the organization.

{% endnote %}
{% endif %}

To allow {% data variables.product.prodname_dependabot %} to access a private {% data variables.product.prodname_dotcom %} repository:

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "Grant {% data variables.product.prodname_dependabot %} private repository access", click **Add private repositories** or **Add internal and private repositories** to display a repository search field.

   ![Screenshot of the dropdown that you can use to search for repositories. As you type, repositories whose name matches your search criteria will appear in the list. The search text field is highlighted with a dark orange outline.](/assets/images/help/organizations/dependabot-private-repo-choose.png)

1. Start typing the name of the repository you want to grant {% data variables.product.prodname_dependabot %} access to.
1. A list of matching repositories in the organization is displayed, click the repository you want to to allow access to and this adds the repository to the allowed list.
1. Optionally, to remove a repository from the list, to the right of the repository, click {% octicon "x" aria-label="The X icon" %}.

{% endif %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

## Allowing validity checks for partner patterns in an organization

{% data reusables.secret-scanning.validity-check-partner-patterns-beta %}
{% data reusables.gated-features.partner-pattern-validity-check-ghas %}

You can allow {% data variables.product.prodname_secret_scanning %} to automatically check the validity of a secret by sending it to the relevant partner. When you select the checkbox in the organization settings, the feature is enabled for all repositories in the organization. Alternatively, you can enable the validity check for a single repository, or at the enterprise level. For more information, see "[Allowing validity checks for partner patterns in a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#allowing-validity-checks-for-partner-patterns-in-a-repository)" and "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)."

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
{% data reusables.secret-scanning.validity-check-auto-enable %}

{% endif %}

{% ifversion ghes or ghec %}

## Removing access to {% data variables.product.prodname_GH_advanced_security %} from individual repositories in an organization

You can manage access to {% data variables.product.prodname_GH_advanced_security %} features for a repository from its "Settings" tab. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)." However, you can also disable {% data variables.product.prodname_GH_advanced_security %} features for a repository from the "Settings" tab for the organization.

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. To see a list of all the repositories in your organization with {% data variables.product.prodname_GH_advanced_security %} enabled, scroll to the "{% data variables.product.prodname_GH_advanced_security %} repositories" section.

  The table lists the number of unique committers for each repository. This is the number of {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} you could free up by removing access to {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."
1. To remove access to {% data variables.product.prodname_GH_advanced_security %} from a repository and free up {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} used by any active committers that are unique to the repository, click the adjacent {% octicon "x" aria-label="X symbol" %}.
1. In the confirmation dialog, click **Remove repository** to remove access to the features of {% data variables.product.prodname_GH_advanced_security %}.

{% note %}

**Note:** If you remove access to {% data variables.product.prodname_GH_advanced_security %} for a repository, you should communicate with the affected development team so that they know that the change was intended. This ensures that they don't waste time debugging failed runs of code scanning.

{% endnote %}

{% endif %}

## Further reading

- "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"{% ifversion not fpt %}
- "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)"{% endif %}{% ifversion not ghae %}
- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"{% endif %}
- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)"
