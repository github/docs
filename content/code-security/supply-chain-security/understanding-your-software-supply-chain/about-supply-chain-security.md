---
title: About supply chain security
intro: '{% data variables.product.product_name %} helps you secure your supply chain, from understanding the dependencies in your environment, to knowing about vulnerabilities in those dependencies, and patching them.'
shortTitle: Supply chain security
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
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

When developing a software project, you likely use other software to build and run your application, such as open-source libraries, frameworks or other tools. These resources are collectively referred to as your “dependencies”, because your project depends on them to function properly. Your project could rely on hundreds of these dependencies, forming what is known as your "supply chain".

Your supply chain can pose a security problem. If one of your dependencies has a known security weakness or a bug, malicious actors could exploit this vulnerability to, for example, insert malicious code ("malware"), steal sensitive data, or cause some other type of disruption to your project. This type of threat is called a "supply chain attack". Having vulnerable dependencies in your supply chain compromises the security of your own project, and you put your users at risk, too.

One of the most important things you can do to protect your supply chain is to patch your vulnerable dependencies and replace any malware.

You add dependencies directly to your supply chain when you specify them in a manifest file or a lockfile. Dependencies can also be included transitively, that is, even if you don’t specify a particular dependency, but a dependency of yours uses it, then you’re also dependent on that dependency.

{% data variables.product.product_name %} offers a range of features to help you understand the dependencies in your environment, know about vulnerabilities in those dependencies, and patch them.

The supply chain features on {% data variables.product.product_name %} are:
* **Dependency graph**
* **Dependency review**
* **{% data variables.product.prodname_dependabot_alerts %}**
* **{% data variables.product.prodname_dependabot_updates %}**
  * **{% data variables.product.prodname_dependabot_security_updates %}**
  * **{% data variables.product.prodname_dependabot_version_updates %}**

The dependency graph is central to supply chain security. The dependency graph identifies all upstream dependencies and public downstream dependents of a repository or package. You can see your repository’s dependencies and some of their properties, like vulnerability information, on the dependency graph for the repository.

Other supply chain features on {% data variables.product.prodname_dotcom %} rely on the information provided by the dependency graph.

* Dependency review uses the dependency graph to identify dependency changes and help you understand the security impact of these changes when you review pull requests.
* {% data variables.product.prodname_dependabot %} cross-references dependency data provided by the dependency graph with the list of advisories published in the {% data variables.product.prodname_advisory_database %}, scans your dependencies and generates {% data variables.product.prodname_dependabot_alerts %} when a potential vulnerability is detected.
* {% data variables.product.prodname_dependabot_security_updates %} use the dependency graph and  {% data variables.product.prodname_dependabot_alerts %} to help you update dependencies with known vulnerabilities in your repository.

{% data variables.product.prodname_dependabot_version_updates %} don't use the dependency graph and rely on the semantic versioning of dependencies instead. {% data variables.product.prodname_dependabot_version_updates %} help you keep your dependencies updated, even when they don’t have any vulnerabilities.

For best practice guides on end-to-end supply chain security including the protection of personal accounts, code, and build processes, see "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)."

## Feature overview

### What is the dependency graph

To generate the dependency graph, {% data variables.product.company_short %} looks at a repository’s explicit dependencies declared in the manifest and lockfiles. When enabled, the dependency graph automatically parses all known package manifest files in the repository, and uses this to construct a graph with known dependency names and versions.

* The dependency graph includes information on your _direct_ dependencies and _transitive_ dependencies.
* The dependency graph is automatically updated when you push a commit to {% data variables.product.company_short %} that changes or adds a supported manifest or lock file to the default branch, and when anyone pushes a change to the repository of one of your dependencies.
* You can see the dependency graph by opening the repository's main page on {% data variables.product.product_name %}, and navigating to the **Insights** tab.
* {% data reusables.dependency-graph.sbom-export %}

{% data reusables.dependency-submission.dependency-submission-link %}

For more information about the dependency graph, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."

### What is dependency review

Dependency review helps reviewers and contributors understand dependency changes and their security impact in every pull request.

* Dependency review tells you which dependencies were added, removed, or updated, in a pull request. You can use the release dates, popularity of dependencies, and vulnerability information to help you decide whether to accept the change.
* You can see the dependency review for a pull request by showing the rich diff on the **Files Changed** tab.

For more information about dependency review, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)."

### What is Dependabot

{% data variables.product.prodname_dependabot %} keeps your dependencies up to date by informing you of any security vulnerabilities in your dependencies, and automatically opens pull requests to upgrade your dependencies to the next available secure version when a {% data variables.product.prodname_dependabot %} alert is triggered, or to the latest version when a release is published.

The term "{% data variables.product.prodname_dependabot %}" encompasses the following features:
* {% data variables.product.prodname_dependabot_alerts %}—Displayed notification on the **Security** tab for the repository, and in the repository's dependency graph. The alert includes a link to the affected file in the project, and information about a fixed version.
* {% data variables.product.prodname_dependabot_updates %}:
  * {% data variables.product.prodname_dependabot_security_updates %}—Triggered updates to upgrade your dependencies to a secure version when an alert is triggered.
  * {% data variables.product.prodname_dependabot_version_updates %}—Scheduled updates to keep your dependencies up to date with the latest version.

{% ifversion fpt or ghec %}Pull requests opened by {% data variables.product.prodname_dependabot %} can trigger workflows that run actions. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)."{% endif %}

{% ifversion dependabot-on-actions-opt-in %}By default:

* If {% data variables.product.prodname_actions %} is enabled for the repository, {% data variables.product.prodname_dotcom %} runs {% data variables.product.prodname_dependabot_updates %} on {% data variables.product.prodname_actions %}.

* If {% data variables.product.prodname_actions %} is not enabled for the repository, {% data variables.product.prodname_dotcom %} generates {% data variables.product.prodname_dependabot_alerts %} using the built-in {% data variables.product.prodname_dependabot %} application in {% data variables.product.product_name %}.

For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners)."

{% else %}

{% data variables.product.prodname_dependabot_security_updates %} and {% data variables.product.prodname_dependabot_version_updates %} require {% data variables.product.prodname_actions %} to run on {% data variables.product.product_name %}. {% data variables.product.prodname_dependabot_alerts %} do not require {% data variables.product.prodname_actions %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% endif %}

{% data reusables.dependabot.dependabot-actions-support %} For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."

#### What are Dependabot alerts

{% data variables.product.prodname_dependabot_alerts %} highlight repositories affected by a newly discovered vulnerability based on the dependency graph and the {% data variables.product.prodname_advisory_database %}, which contains advisories for known vulnerabilities.

* {% data variables.product.prodname_dependabot %} performs a scan to detect insecure dependencies and sends {% data variables.product.prodname_dependabot_alerts %} when:
{% ifversion fpt or ghec %}
  * A new advisory is added to the {% data variables.product.prodname_advisory_database %}.{% else %}
  * New advisory data is synchronized to your instance each hour from {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
  * The dependency graph for the repository changes.
* {% data variables.product.prodname_dependabot_alerts %} are displayed on the **Security** tab for the repository and in the repository's dependency graph. The alert includes a link to the affected file in the project, and information about a fixed version.

For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

#### What are Dependabot updates

There are two types of {% data variables.product.prodname_dependabot_updates %}: {% data variables.product.prodname_dependabot %} _security_ updates and _version_ updates. {% data variables.product.prodname_dependabot %} generates automatic pull requests to update your dependencies in both cases, but there are several differences.

{% data variables.product.prodname_dependabot_security_updates %}:
* Triggered by a {% data variables.product.prodname_dependabot %} alert
* Update dependencies to the minimum version that resolves a known vulnerability
* Supported for ecosystems the dependency graph supports
* Does not require a configuration file, but you can use one to override the default behavior

{% data variables.product.prodname_dependabot_version_updates %}:
* Requires a configuration file
* Run on a schedule you configure
* Update dependencies to the latest version that matches the configuration
* Supported for a different group of ecosystems

For more information about {% data variables.product.prodname_dependabot_updates %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)" and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."

## Feature availability

{% ifversion fpt or ghec %}

Public repositories:
* **Dependency graph**—enabled by default and cannot be disabled.
* **Dependency review**—enabled by default and cannot be disabled.
* **{% data variables.product.prodname_dependabot_alerts %}**—not enabled by default. {% data variables.product.prodname_dotcom %} detects insecure dependencies and displays information in the dependency graph, but does not generate {% data variables.product.prodname_dependabot_alerts %} by default. Repository owners or people with admin access can enable {% data variables.product.prodname_dependabot_alerts %}.
  You can also enable or disable Dependabot alerts for all repositories owned by your user account or organization. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" or "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

Private repositories:
* **Dependency graph**—not enabled by default. The feature can be enabled by repository administrators. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)."
{% ifversion fpt %}
* **Dependency review**—available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
* **Dependency review**—available in private repositories owned by organizations provided you have a license for {% data variables.product.prodname_GH_advanced_security %} and the dependency graph enabled. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)" and "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)."
{% endif %}
* **{% data variables.product.prodname_dependabot_alerts %}**—not enabled by default. Owners of private repositories, or people with admin access, can enable {% data variables.product.prodname_dependabot_alerts %} by enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for their repositories.
  You can also enable or disable Dependabot alerts for all repositories owned by your user account or organization. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" or "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

Any repository type:
* **{% data variables.product.prodname_dependabot_security_updates %}**—not enabled by default. You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For information about enabling security updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."
* **{% data variables.product.prodname_dependabot_version_updates %}**—not enabled by default. People with write permissions to a repository can enable {% data variables.product.prodname_dependabot_version_updates %}. For information about enabling version updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."
{% endif %}

{% ifversion ghes %}
* **Dependency graph** and **{% data variables.product.prodname_dependabot_alerts %}**—not enabled by default. Both features are configured at an enterprise level by the enterprise owner. For more information, see {% ifversion ghes %}"[AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)" and {% endif %}"[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
* **Dependency review**—available when dependency graph is enabled for your instance and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."
{% endif %}
{% ifversion ghes %}
* **{% data variables.product.prodname_dependabot_security_updates %}**—not enabled by default. You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For information about enabling security updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."
* **{% data variables.product.prodname_dependabot_version_updates %}**—not enabled by default. People with write permissions to a repository can enable {% data variables.product.prodname_dependabot_version_updates %}. For information about enabling version updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."
{% endif %}
