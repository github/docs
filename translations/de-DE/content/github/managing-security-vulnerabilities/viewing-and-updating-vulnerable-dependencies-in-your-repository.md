---
title: Angreifbare Abhängigkeiten in Deinem Repository anzeigen und aktualisieren
intro: 'If {{ site.data.variables.product.product_name }} discovers vulnerable dependencies in your project, you can view them on the Dependabot alerts tab of your repository. Then, you can update your project to resolve or dismiss the vulnerability.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
versions:
  free-pro-team: '*'
---

Your repository's {{ site.data.variables.product.prodname_dependabot }} alerts tab lists all open and closed {{ site.data.variables.product.prodname_dependabot_alerts }} and corresponding {{ site.data.variables.product.prodname_dependabot_security_updates }}. Mithilfe des Dropdownmenü kannst Du die Liste der Warnungen sortieren, und Du kannst auf bestimmte Warnungen klicken, um weitere Details anzuzeigen. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)." |

You can enable automatic security updates for any repository that uses {{ site.data.variables.product.prodname_dependabot_alerts }} and the dependency graph. For more information, see "[Configuring {{ site.data.variables.product.prodname_dependabot_security_updates }}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)."

### About updates for vulnerable dependencies in your repository

{{ site.data.variables.product.product_name }} sends {{ site.data.variables.product.prodname_dependabot_alerts }} when we detect vulnerabilities affecting your repository. For repositories where {{ site.data.variables.product.prodname_dependabot_security_updates }} are enabled, when {{ site.data.variables.product.product_name }} detects a vulnerable dependency {{ site.data.variables.product.prodname_dependabot_short }} creates a pull request to fix it. {{ site.data.reusables.dependabot.upgrade-dependency-to-minimum-secure-version }}

### Viewing and updating vulnerable dependencies

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-security }}
{{ site.data.reusables.repositories.sidebar-dependabot-alerts }}
1. Klicke auf die Warnung, die angezeigt werden soll. ![In der Liste ausgewählte Warnung](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. Überprüfe die Details der Schwachstelle und wenn verfügbar des Pull Requests, der das automatisierte Sicherheitsupdate enthält.
1. Optionally, if there isn't already a {{ site.data.variables.product.prodname_dependabot_security_updates }} update for the alert, to create a pull request to resolve the vulnerability, click **Create {{ site.data.variables.product.prodname_dependabot_short }} security update**. ![Create {{ site.data.variables.product.prodname_dependabot_short }} security update button](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. Wenn Sie zum Aktualisieren Ihrer Abhängigkeit und zum Beheben Ihrer Schwachstelle bereit sind, mergen Sie den Pull Request. Each pull request raised by {{ site.data.variables.product.prodname_dependabot_short }} includes information on commands you can use to control {{ site.data.variables.product.prodname_dependabot_short }}. For more information, see "[Managing pull requests for dependency updates](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-github-dependabot-pull-requests-with-comment-commands)."
1. Optionally, if the alert is being fixed, if it's incorrect, or located in unused code, use the "Dismiss" drop-down, and click a reason for dismissing the alert. ![Choosing reason for dismissing the alert via the "Dismiss" drop-down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

### Weiterführende Informationen

- "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Configuring {{ site.data.variables.product.prodname_dependabot_security_updates }}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)"
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
