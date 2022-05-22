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

You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_short %} alerts and the dependency graph. Weitere Informationen findest Du unter „[ Über {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-github-dependabot-security-updates)."

You can disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository or for all repositories owned by your user account or organization. For more information, see "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-github-dependabot-security-updates-for-your-repositories)" below.

{% data reusables.dependabot.dependabot-tos %}

### Unterstützte Repositorys

{% data variables.product.prodname_dotcom %} automatically enables {% data variables.product.prodname_dependabot_security_updates %} for every repository that meets these prerequisites.

{% note %}

**Note**: You can manually enable {% data variables.product.prodname_dependabot_security_updates %}, even if the repository doesn't meet some of the prerequisites below. For example, you can enable {% data variables.product.prodname_dependabot_security_updates %} on a fork, or for a package manager that isn't directly supported by following the instructions in "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-github-dependabot-security-updates-for-your-repositories)."

{% endnote %}

| Automatic enablement prerequisite                                                                                                                                                                                              | Weitere Informationen                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Das Repository ist kein Fork                                                                                                                                                                                                   | „[Über Forks](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                  |
| Das Repository ist nicht archiviert                                                                                                                                                                                            | „[Repositorys archivieren](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                          |
| Das Repository ist öffentlich, oder es ist privat und Du hast Nur-Lesen-Analysen durch {% data variables.product.prodname_dotcom %}, Abhängigkeitsdiagramme und Sicherheitswarnungen in den Repository-Einstellungen aktiviert | "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)." |
| Das Repository enthält eine Abhängigkeits-Manifestdatei aus einem Paket-Ökosystem, das {% data variables.product.prodname_dotcom %} unterstützt                                                                                | „[Unterstützte Paket-Ökosysteme](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                                       |
| {% data variables.product.prodname_dependabot_security_updates %} are not disabled for the repository                                                                                                                        | "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repository](#managing-github-dependabot-security-updates-for-your-repositories)"         |
| Das Repository benutzt noch keine Integration für die Abhängigkeits-Verwaltung                                                                                                                                                 | „[Informationen zu Integrationen](/github/customizing-your-github-workflow/about-integrations)“                                                                                  |

If security updates are not enabled for your repository and you don't know why, first try enabling them using the instructions given in the procedural sections below. If security updates are still not working, you can [contact support](https://support.github.com/contact).

### Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories

You can enable or disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository.

You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

{% data variables.product.prodname_dependabot_security_updates %} require specific repository settings. Weitere Informationen findest Du unter „[Unterstützte Repositorys](#supported-repositories)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Above the list of alerts, use the drop-down menu and select or unselect **{% data variables.product.prodname_dependabot_short %} security updates**. ![Drop-down menu with the option to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/enable-dependabot-security-updates-drop-down.png)

### Weiterführende Informationen

- "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)"
- „[Unterstützte Paket-Ökosysteme](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
