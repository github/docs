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
shortTitle: Manage security & analysis
category:
  - Secure and monitor your organization
---

## About management of security and analysis settings

{% data variables.product.prodname_dotcom %} can help you to secure the repositories in your organization. You can manage the security and analysis features for all existing or new repositories that members create in your organization. If you have a license for {% data variables.product.prodname_GH_cs_or_sp %} then you can also manage access to these features. {% data reusables.advanced-security.more-info-ghas %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security-configurations.enable-security-features-with-gh-config %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Allowing {% data variables.product.prodname_dependabot %} to access private{% ifversion ghec or ghes %} or internal{% endif %} dependencies

{% data variables.product.prodname_dependabot %} can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, {% data variables.product.prodname_dependabot %} must have access to all of the targeted dependency files. Typically, version updates will fail if one or more dependencies are inaccessible. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates).

By default, {% data variables.product.prodname_dependabot %} can't update dependencies that are located in private{% ifversion ghec or ghes %} or internal{% endif %} repositories, or private{% ifversion ghec or ghes %} or internal{% endif %} package registries. However, if a dependency is in a private{% ifversion ghec or ghes %} or internal{% endif %} {% data variables.product.prodname_dotcom %} repository within the same organization as the project that uses that dependency, you can allow {% data variables.product.prodname_dependabot %} to update the version successfully by giving it access to the host repository.

If your code depends on packages in a private{% ifversion ghec or ghes %} or internal{% endif %} registry, you can allow {% data variables.product.prodname_dependabot %} to update the versions of these dependencies by configuring this at the repository level. You do this by adding authentication details to the `dependabot.yml` file for the repository. For more information, see [Top-level `registries` key](/code-security/reference/supply-chain-security/dependabot-options-reference#top-level-registries-key).

{% ifversion ghec %}

> [!NOTE]
> For the option to grant {% data variables.product.prodname_dependabot %} access to private or internal repositories to be available, you need {% data variables.product.prodname_dependabot_version_updates %} or {% data variables.product.prodname_dependabot_security_updates %} to be enabled on at least one repository within the organization.

{% endif %}

 For more information on how to grant {% data variables.product.prodname_dependabot %} access to private{% ifversion ghec or ghes %} or internal{% endif %} dependencies, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#granting-dependabot-access-to-private-and-internal-repositories).

## Removing access to {% data variables.product.prodname_GHAS %} features from individual repositories in an organization

You can use {% data variables.product.prodname_security_configurations %} to remove access to {% data variables.product.prodname_GHAS %} features from individual repositories in an organization. For more information, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/managing-your-github-advanced-security-license-usage#turning-off-github-advanced-security-features-on-select-repositories-in-your-organization).

## Further reading

* [AUTOTITLE](/code-security/getting-started/securing-your-repository)
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)
* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)
