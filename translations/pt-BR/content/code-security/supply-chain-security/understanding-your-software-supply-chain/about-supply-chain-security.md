---
title: About supply chain security
intro: '{% data variables.product.product_name %} helps you secure your supply chain, from understanding the dependencies in your environment, to knowing about vulnerabilities in those dependencies{% ifversion fpt or ghec or ghes > 3.2 %}, and patching them{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Supply chain security
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
---

## About supply chain security at GitHub

With the accelerated use of open source, most projects depend on hundreds of open-source dependencies. This poses a security problem: what if the dependencies you're using are vulnerable? You could be putting your users at risk of a supply chain attack. One of the most important things you can do to protect your supply chain is to patch your vulnerable dependencies{% ifversion GH-advisory-db-supports-malware %} and replace any malware{% endif %}.

You add dependencies directly to your supply chain when you specify them in a manifest file or a lockfile. Dependencies can also be included transitively, that is, even if you don’t specify a particular dependency, but a dependency of yours uses it, then you’re also dependent on that dependency.

{% data variables.product.product_name %} offers a range of features to help you understand the dependencies in your environment{% ifversion ghes < 3.3 or ghae %} and know about vulnerabilities in those dependencies{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}, know about vulnerabilities in those dependencies, and patch them{% endif %}. 

The supply chain features on {% data variables.product.product_name %} are:
- **Dependency graph**
- **Dependency review**
- **{% data variables.product.prodname_dependabot_alerts %} **
{% ifversion fpt or ghec or ghes > 3.2 %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}**{% endif %}

The dependency graph is central to supply chain security. The dependency graph identifies all upstream dependencies and public downstream dependents of a repository or package. You can see your repository’s dependencies and some of their properties, like vulnerability information, on the dependency graph for the repository. 

Other supply chain features on {% data variables.product.prodname_dotcom %} rely on the information provided by the dependency graph.

- Dependency review uses the dependency graph to identify dependency changes and help you understand the security impact of these changes when you review pull requests.
- {% data variables.product.prodname_dependabot %} cross-references dependency data provided by the dependency graph with the list of advisories published in the {% data variables.product.prodname_advisory_database %}, scans your dependencies and generates {% data variables.product.prodname_dependabot_alerts %} when a potential vulnerability {% ifversion GH-advisory-db-supports-malware %}or malware{% endif %} is detected.
{% ifversion fpt or ghec or ghes > 3.2 %}- {% data variables.product.prodname_dependabot_security_updates %} use the dependency graph and  {% data variables.product.prodname_dependabot_alerts %} to help you update dependencies with known vulnerabilities in your repository.

{% data variables.product.prodname_dependabot_version_updates %} don't use the dependency graph and rely on the semantic versioning of dependencies instead. {% data variables.product.prodname_dependabot_version_updates %} help you keep your dependencies updated, even when they don’t have any vulnerabilities.
{% endif %}

{% ifversion fpt or ghec or ghes %}
For best practice guides on end-to-end supply chain security including the protection of personal accounts, code, and build processes, see "[Securing your end-to-end supply chain](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)."
{% endif %}

## Feature overview

### What is the dependency graph

To generate the dependency graph, {% data variables.product.company_short %} looks at a repository’s explicit dependencies declared in the manifest and lockfiles. When enabled, the dependency graph automatically parses all known package manifest files in the repository, and uses this to construct a graph with known dependency names and versions.

- The dependency graph includes information on your _direct_ dependencies and _transitive_ dependencies. 
- The dependency graph is automatically updated when you push a commit to {% data variables.product.company_short %} that changes or adds a supported manifest or lock file to the default branch, and when anyone pushes a change to the repository of one of your dependencies.
- You can see the dependency graph by opening the repository's main page on {% data variables.product.product_name %}, and navigating to the **Insights** tab.

{% ifversion dependency-submission-api %} 
{% data reusables.dependency-submission.dependency-submission-link %}
{% endif %}

For more information about the dependency graph, see "[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

### What is dependency review

Dependency review helps reviewers and contributors understand dependency changes and their security impact in every pull request. 

- Dependency review tells you which dependencies were added, removed, or updated, in a pull request. You can use the release dates, popularity of dependencies, and vulnerability information to help you decide whether to accept the change.
- You can see the dependency review for a pull request by showing the rich diff on the **Files Changed** tab.

For more information about dependency review, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

### What is Dependabot

{% data variables.product.prodname_dependabot %} keeps your dependencies up to date by informing you of any security vulnerabilities in your dependencies{% ifversion fpt or ghec or ghes > 3.2 %}, and automatically opens pull requests to upgrade your dependencies to the next available secure version when a {% data variables.product.prodname_dependabot %} alert is triggered, or to the latest version when a release is published{% else %} so that you can update that dependency{% endif %}.

{% ifversion fpt or ghec or ghes > 3.2 %}
The term "{% data variables.product.prodname_dependabot %}" encompasses the following features:
- {% data variables.product.prodname_dependabot_alerts %}—Displayed notification on the **Security** tab for the repository, and in the repository's dependency graph. The alert includes a link to the affected file in the project, and information about a fixed version.
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %}—Triggered updates to upgrade your dependencies to a secure version when an alert is triggered.
   - {% data variables.product.prodname_dependabot_version_updates %}—Scheduled updates to keep your dependencies up to date with the latest version.

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dependabot_security_updates %}, and {% data variables.product.prodname_dependabot_version_updates %} do not use {% data variables.product.prodname_actions %} when they run on {% data variables.product.product_name %}. However, pull requests opened by {% data variables.product.prodname_dependabot %} can trigger workflows that run actions. For more information, see "[Automating {% data variables.product.prodname_dependabot %} with {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)."

{% elsif ghes %}

{% data variables.product.prodname_dependabot_security_updates %} and {% data variables.product.prodname_dependabot_version_updates %} require {% data variables.product.prodname_actions %} to run on {% data variables.product.product_name %}. {% data variables.product.prodname_dependabot_alerts %} do not require {% data variables.product.prodname_actions %}. For more information, see "[Enabling {% data variables.product.prodname_dependabot %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% elsif ghae %}

{% data variables.product.prodname_actions %} is not required for {% data variables.product.prodname_dependabot_alerts %} to run on {% data variables.product.product_name %}.

{% endif %}

#### What are Dependabot alerts

{% data variables.product.prodname_dependabot_alerts %} highlight repositories affected by a newly discovered vulnerability based on the dependency graph and the {% data variables.product.prodname_advisory_database %}, which contains advisories for known vulnerabilities{% ifversion GH-advisory-db-supports-malware %} and malware{% endif %}. 

- {% data variables.product.prodname_dependabot %} performs a scan to detect insecure dependencies and sends {% data variables.product.prodname_dependabot_alerts %} when:
{% ifversion fpt or ghec %}
   - A new advisory is added to the {% data variables.product.prodname_advisory_database %}.{% else %}
   - New advisory data is synchronized to {% data variables.product.product_location %} each hour from {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - The dependency graph for the repository changes. 
- {% data variables.product.prodname_dependabot_alerts %} are displayed {% ifversion fpt or ghec or ghes %} on the **Security** tab for the repository and{% endif %} in the repository's dependency graph. The alert includes {% ifversion fpt or ghec or ghes %}a link to the affected file in the project, and {% endif %}information about a fixed version.

For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)."

{% ifversion fpt or ghec or ghes > 3.2 %}
#### What are Dependabot updates

There are two types of {% data variables.product.prodname_dependabot_updates %}: {% data variables.product.prodname_dependabot %} _security_ updates and _version_ updates. {% data variables.product.prodname_dependabot %} generates automatic pull requests to update your dependencies in both cases, but there are several differences.

{% data variables.product.prodname_dependabot_security_updates %}:
 - Triggered by a {% data variables.product.prodname_dependabot %} alert
 - Update dependencies to the minimum version that resolves a known vulnerability
 - Supported for ecosystems the dependency graph supports
 - Does not require a configuration file, but you can use one to override the default behavior
 
{% data variables.product.prodname_dependabot_version_updates %}:
 - Requires a configuration file
 - Run on a schedule you configure
 - Update dependencies to the latest version that matches the configuration
 - Supported for a different group of ecosystems

For more information about {% data variables.product.prodname_dependabot_updates %}, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)" and "[About {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)."
{% endif %}

## Feature availability

{% ifversion fpt or ghec %}

Public repositories:
- **Dependency graph**—enabled by default and cannot be disabled.
- **Dependency review**—enabled by default and cannot be disabled.
- **{% data variables.product.prodname_dependabot_alerts %}**—not enabled by default. {% data variables.product.prodname_dotcom %} detects insecure dependencies and displays information in the dependency graph, but does not generate {% data variables.product.prodname_dependabot_alerts %} by default. Repository owners or people with admin access can enable {% data variables.product.prodname_dependabot_alerts %}. 
  You can also enable or disable Dependabot alerts for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

Private repositories:
- **Dependency graph**—not enabled by default. The feature can be enabled by repository administrators. For more information, see "[Exploring the dependencies of a repository](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)."
{% ifversion fpt %}
- **Dependency review**—available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Dependency review**—available in private repositories owned by organizations provided you have a license for {% data variables.product.prodname_GH_advanced_security %} and the dependency graph enabled. For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" and "[Exploring the dependencies of a repository](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)." 
{% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}**—not enabled by default. Owners of private repositories, or people with admin access, can enable {% data variables.product.prodname_dependabot_alerts %} by enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for their repositories.
  You can also enable or disable Dependabot alerts for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

Any repository type:
- **{% data variables.product.prodname_dependabot_security_updates %}**—not enabled by default. You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For information about enabling security updates, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."
- **{% data variables.product.prodname_dependabot_version_updates %}**—not enabled by default. People with write permissions to a repository can enable {% data variables.product.prodname_dependabot_version_updates %}. For information about enabling version updates, see "[Configuring {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."
{% endif %}

{% ifversion ghes or ghae %}
- **Dependency graph** and **{% data variables.product.prodname_dependabot_alerts %}**—not enabled by default. Both features are configured at an enterprise level by the enterprise owner. For more information, see {% ifversion ghes %}"[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)" and {% endif %}"[Enabling {% data variables.product.prodname_dependabot %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
- **Dependency review**—available when dependency graph is enabled for {% data variables.product.product_location %} and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository. For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."
{% endif %}
{% ifversion ghes > 3.2 %}
- **{% data variables.product.prodname_dependabot_security_updates %}**—not enabled by default. You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For information about enabling security updates, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."
- **{% data variables.product.prodname_dependabot_version_updates %}**—not enabled by default. People with write permissions to a repository can enable {% data variables.product.prodname_dependabot_version_updates %}. For information about enabling version updates, see "[Configuring {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."
{% endif %}
