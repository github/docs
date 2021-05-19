---
title: Configuring Dependabot security updates
intro: 'You can use {% data variables.product.prodname_dependabot_security_updates %} or manual pull requests to easily update vulnerable dependencies.'
shortTitle: Configuring Dependabot security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
versions:
  free-pro-team: '*'
topics:
  - Security
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

### About configuring {% data variables.product.prodname_dependabot_security_updates %}

You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. Weitere Informationen findest Du unter „[ Über {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

You can disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository or for all repositories owned by your user account or organization. For more information, see "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-dependabot-security-updates-for-your-repositories)" below.

{% data reusables.dependabot.dependabot-tos %}

### Unterstützte Repositorys

{% data variables.product.prodname_dotcom %} automatically enables {% data variables.product.prodname_dependabot_security_updates %} for every repository that meets these prerequisites.

{% note %}

**Note**: You can manually enable {% data variables.product.prodname_dependabot_security_updates %}, even if the repository doesn't meet some of the prerequisites below. For example, you can enable {% data variables.product.prodname_dependabot_security_updates %} on a fork, or for a package manager that isn't directly supported by following the instructions in "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-dependabot-security-updates-for-your-repositories)."

{% endnote %}

| Automatic enablement prerequisite                                                                                                                                                                                              | Weitere Informationen                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Das Repository ist kein Fork                                                                                                                                                                                                   | „[Über Forks](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                  |
| Das Repository ist nicht archiviert                                                                                                                                                                                            | „[Repositorys archivieren](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                          |
| Das Repository ist öffentlich, oder es ist privat und Du hast Nur-Lesen-Analysen durch {% data variables.product.prodname_dotcom %}, Abhängigkeitsdiagramme und Sicherheitswarnungen in den Repository-Einstellungen aktiviert | "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)." |
| Das Repository enthält eine Abhängigkeits-Manifestdatei aus einem Paket-Ökosystem, das {% data variables.product.prodname_dotcom %} unterstützt                                                                                | „[Unterstützte Paket-Ökosysteme](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                                       |
| {% data variables.product.prodname_dependabot_security_updates %} are not disabled for the repository                                                                                                                        | "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repository](#managing-dependabot-security-updates-for-your-repositories)"                |
| Das Repository benutzt noch keine Integration für die Abhängigkeits-Verwaltung                                                                                                                                                 | „[Informationen zu Integrationen](/github/customizing-your-github-workflow/about-integrations)“                                                                                  |

If security updates are not enabled for your repository and you don't know why, first try enabling them using the instructions given in the procedural sections below. If security updates are still not working, you can [contact support](https://support.github.com/contact).

### Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories

You can enable or disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository (see below).

You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% data variables.product.prodname_dependabot_security_updates %} require specific repository settings. Weitere Informationen findest Du unter „[Unterstützte Repositorys](#supported-repositories)."

#### Enabling or disabling {% data variables.product.prodname_dependabot_security_updates %} for an individual repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. Under "Configure security and analysis features", to the right of "{% data variables.product.prodname_dependabot %} security updates", click **Enable** or **Disable**. !["Configure security and analysis features" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/enable-dependabot-security-updates-button.png)

### Weiterführende Informationen

- "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)"
- „[Unterstützte Paket-Ökosysteme](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
