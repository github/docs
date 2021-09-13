---
title: Configuring GitHub Dependabot security updates
intro: 'You can use {% data variables.product.prodname_dependabot_security_updates %} or manual pull requests to easily update vulnerable dependencies.'
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
shortTitle: Configuring Dependabot security updates
versions:
  free-pro-team: '*'
---

### About configuring {% data variables.product.prodname_dependabot_security_updates %}

You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_short %} alerts and the dependency graph. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-github-dependabot-security-updates)."

You can disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository or for all repositories owned by your user account or organization. For more information, see "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-github-dependabot-security-updates-for-your-repositories)" below.

{% data reusables.dependabot.dependabot-tos %}

### Supported repositories

{% data variables.product.prodname_dotcom %} automatically enables {% data variables.product.prodname_dependabot_security_updates %} for every repository that meets these prerequisites.

{% note %}

**Note**: You can manually enable {% data variables.product.prodname_dependabot_security_updates %}, even if the repository doesn't meet some of the prerequisites below. For example, you can enable {% data variables.product.prodname_dependabot_security_updates %} on a fork, or for a package manager that isn't directly supported by following the instructions in "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-github-dependabot-security-updates-for-your-repositories)."

{% endnote %}

| Automatic enablement prerequisite                                                                                                                                                                               | More information                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository is not a fork                                                                                                                                                                                        | "[About forks](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                 |
| Repository is not archived                                                                                                                                                                                      | "[Archiving repositories](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                           |
| Repository is public, or repository is private and you have enabled read-only analysis by {% data variables.product.prodname_dotcom %}, dependency graph, and vulnerability alerts in the repository's settings | "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)." |
| Repository contains dependency manifest file from a package ecosystem that {% data variables.product.prodname_dotcom %} supports                                                                                | "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                                        |
| {% data variables.product.prodname_dependabot_security_updates %} are not disabled for the repository                                                                                                         | "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repository](#managing-github-dependabot-security-updates-for-your-repositories)"         |
| Repository is not already using an integration for dependency management                                                                                                                                        | "[About integrations](/github/customizing-your-github-workflow/about-integrations)"                                                                                              |

If security updates are not enabled for your repository and you don't know why, first try enabling them using the instructions given in the procedural sections below. If security updates are still not working, you can [contact support](https://support.github.com/contact).

### Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories

You can enable or disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository.

You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

{% data variables.product.prodname_dependabot_security_updates %} require specific repository settings. For more information, see "[Supported repositories](#supported-repositories)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Above the list of alerts, use the drop-down menu and select or unselect **{% data variables.product.prodname_dependabot_short %} security updates**. ![Drop-down menu with the option to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/enable-dependabot-security-updates-drop-down.png)

### Дополнительная литература

- "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)"
- "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
