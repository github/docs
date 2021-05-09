---
title: About managing vulnerable dependencies
intro: '{% data variables.product.prodname_dotcom %} helps you to avoid using third-party software that contains known vulnerabilities.'
redirect_from:
  - /github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies
versions:
  free-pro-team: '*'
topics:
  - Security
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Managing vulnerabilities in your project’s dependencies ".-->

{% data variables.product.prodname_dotcom %} provides the following tools for removing and avoiding vulnerable dependencies.

#### Dependency graph
The dependency graph is a summary of the manifest and lock files stored in a repository. It shows you the ecosystems and packages your codebase depends on (its dependencies) and the repositories and packages that depend on your project (its dependents). The information in the dependency graph is used by dependency review and {% data variables.product.prodname_dependabot %}. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."

#### Dependency review
By checking the dependency reviews on pull requests you can avoid introducing vulnerabilities from dependencies into your codebase. If the pull requests adds a vulnerable dependency, or changes a dependency to a vulnerable version, this is highlighted in the dependency review. You can change the dependency to a patched version before merging the pull request. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."

#### {% data variables.product.prodname_dependabot_alerts %}
{% data variables.product.prodname_dotcom %} can create {% data variables.product.prodname_dependabot_alerts %} when it detects vulnerable dependencies in your repository. The alert is displayed on the Security tab for the repository. The alert includes a link to the affected file in the project, and information about a fixed version. {% data variables.product.prodname_dotcom %} also notifies the maintainers of the repository, according to their notification preferences. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)." |

#### {% data variables.product.prodname_dependabot_security_updates %}
When {% data variables.product.prodname_dotcom %} generates a {% data variables.product.prodname_dependabot %} alert for a vulnerable dependency in your repository, {% data variables.product.prodname_dependabot %} can automatically try to fix it for you. {% data variables.product.prodname_dependabot_security_updates %} are automatically generated pull requests that update a vulnerable dependency to a fixed version. Weitere Informationen findest Du unter „[ Über {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."


#### {% data variables.product.prodname_dependabot_version_updates %}
Enabling {% data variables.product.prodname_dependabot_version_updates %} takes the effort out of maintaining your dependencies. With {% data variables.product.prodname_dependabot_version_updates %}, whenever {% data variables.product.prodname_dotcom  %} identifies an outdated dependency, it raises a pull request to update the manifest to the latest version of the dependency. By contrast, {% data variables.product.prodname_dependabot_security_updates %} only raises pull requests to fix vulnerable dependencies. For more information, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates)."
