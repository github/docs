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

{% data variables.product.prodname_dotcom %} can help secure the repositories in your organization. You can manage the security and analysis features for all existing or new repositories that members create in your organization. {% ifversion ghec %}If you have a license for {% data variables.product.prodname_GH_advanced_security %} then you can also manage access to these features. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can also manage access to these features. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).{% endif %}

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

- **Dependency graph** - Your changes affect only private repositories because the feature is always enabled for public repositories.
- **{% data variables.product.prodname_dependabot_alerts %}** - Your changes affect all repositories.
- **{% data variables.product.prodname_dependabot_security_updates %}** - Your changes affect all repositories.
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}** - Your changes affect only private repositories because {% data variables.product.prodname_GH_advanced_security %} and the related features are always enabled for public repositories.
- **{% data variables.product.prodname_secret_scanning_caps %}** - Your changes affect repositories where {% data variables.product.prodname_GH_advanced_security %} is also enabled. This option controls whether or not {% data variables.product.prodname_secret_scanning_GHAS %} is enabled. {% data variables.product.prodname_secret_scanning_partner_caps %} always runs on all public repositories.
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
2. Under "Code security and analysis", to the right of the feature, click **Disable all** or **Enable all**. {% ifversion ghes > 3.0 or ghec %}The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if you have no available seats in your {% data variables.product.prodname_GH_advanced_security %} license.{% endif %}
   {% ifversion fpt %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png)
   {% endif %}
   {% ifversion ghec %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png)
   {% endif %}
   {% ifversion ghes > 3.2 %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
   {% endif %}
   {% ifversion ghes = 3.1 or ghes = 3.2 %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
   {% endif %}
   
   {% ifversion ghae %}
   !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% ifversion fpt or ghec %}
3. Optionally, enable the feature by default for new repositories in your organization.
   {% ifversion fpt or ghec %}
   !["Enable by default" option for new repositories](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% endif %}
   
   {% endif %}
   {% ifversion fpt or ghec %}
4. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories in your organization.
   {% ifversion fpt or ghec %}
   ![Button to disable or enable feature](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
   {% endif %}
   
   {% endif %}
   {% ifversion ghae or ghes %}
3. Click **Enable/Disable all** or **Enable/Disable for eligible repositories** to confirm the change.
   ![Button to enable feature for all the eligible repositories in the organization](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png)
   {% endif %}

   {% data reusables.security.displayed-information %}

## Enabling or disabling a feature automatically when new repositories are added

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
2. Under "Code security and analysis", to the right of the feature, enable or disable the feature by default for new repositories{% ifversion fpt or ghec %}, or all new private repositories,{% endif %} in your organization.
   {% ifversion fpt or ghec %}
   ![Screenshot of a checkbox for enabling a feature for new repositories](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)
   {% endif %}
  {% ifversion ghes > 3.2 %}
   ![Screenshot of a checkbox for enabling a feature for new repositories](/assets/images/enterprise/3.3/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)
   {% endif %}
   {% ifversion ghes = 3.1 or ghes = 3.2 %}
   ![Screenshot of a checkbox for enabling a feature for new repositories](/assets/images/enterprise/3.1/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)
   {% endif %}
   {% ifversion ghes = 3.0 %}
   ![Screenshot of a checkbox for enabling a feature for new repositories](/assets/images/enterprise/3.0/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox.png)
   {% endif %}
   {% ifversion ghae %}
   ![Screenshot of a checkbox for enabling a feature for new repositories](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png)
   {% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}

## Allowing {% data variables.product.prodname_dependabot %} to access private dependencies

{% data variables.product.prodname_dependabot %} can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, {% data variables.product.prodname_dependabot %} must have access to all of the targeted dependency files. Typically, version updates will fail if one or more dependencies are inaccessible. For more information, see "[About {% data variables.product.prodname_dependabot %} version updates](/github/administering-a-repository/about-dependabot-version-updates)."

By default, {% data variables.product.prodname_dependabot %} can't update dependencies that are located in private repositories or private package registries. However, if a dependency is in a private {% data variables.product.prodname_dotcom %} repository within the same organization as the project that uses that dependency, you can allow {% data variables.product.prodname_dependabot %} to update the version successfully by giving it access to the host repository.

If your code depends on packages in a private registry, you can allow {% data variables.product.prodname_dependabot %} to update the versions of these dependencies by configuring this at the repository level. You do this by adding authentication details to the _dependabot.yml_ file for the repository. For more information, see "[Configuration options for the dependabot.yml file](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)."

To allow {% data variables.product.prodname_dependabot %} to access a private {% data variables.product.prodname_dotcom %} repository:

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "{% data variables.product.prodname_dependabot %} private repository access", click **Add private repositories** or **Add internal and private repositories**.
   ![Add repositories button](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. Start typing the name of the repository you want to allow.
   ![Repository search field with filtered dropdown](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. Click the repository you want to allow.

1. Optionally, to remove a repository from the list, to the right of the repository, click {% octicon "x" aria-label="The X icon" %}.
   !["X" button to remove a repository](/assets/images/help/organizations/dependabot-private-repository-list.png)
{% endif %}

{% ifversion ghes or ghec %}

## Removing access to {% data variables.product.prodname_GH_advanced_security %} from individual repositories in an organization

You can manage access to {% data variables.product.prodname_GH_advanced_security %} features for a repository from its "Settings" tab. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)." However, you can also disable {% data variables.product.prodname_GH_advanced_security %} features for a repository from the "Settings" tab for the organization.

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. To see a list of all the repositories in your organization with {% data variables.product.prodname_GH_advanced_security %} enabled, scroll to the "{% data variables.product.prodname_GH_advanced_security %} repositories" section.
  ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png)
  The table lists the number of unique committers for each repository. This is the number of seats you could free up on your license by removing access to {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."
1. To remove access to {% data variables.product.prodname_GH_advanced_security %} from a repository and free up seats used by any committers that are unique to the repository, click the adjacent {% octicon "x" aria-label="X symbol" %}.
1. In the confirmation dialog, click **Remove repository** to remove access to the features of {% data variables.product.prodname_GH_advanced_security %}.

{% note %}

**Note:** If you remove access to {% data variables.product.prodname_GH_advanced_security %} for a repository, you should communicate with the affected development team so that they know that the change was intended. This ensures that they don't waste time debugging failed runs of code scanning.

{% endnote %}

{% endif %}

## Further reading

- "[Securing your repository](/code-security/getting-started/securing-your-repository)"{% ifversion not fpt %}
- "[About secret scanning](/github/administering-a-repository/about-secret-scanning)"{% endif %}{% ifversion not ghae %}
- "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"{% endif %}{% ifversion fpt or ghec or ghes or ghae %}
- "[About supply chain security](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)"{% endif %}
