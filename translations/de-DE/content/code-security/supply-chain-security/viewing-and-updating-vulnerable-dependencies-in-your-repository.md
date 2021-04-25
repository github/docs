---
title: Angreifbare Abhängigkeiten in Deinem Repository anzeigen und aktualisieren
intro: 'If {% data variables.product.product_name %} discovers vulnerable dependencies in your project, you can view them on the Dependabot alerts tab of your repository. Then, you can update your project to resolve or dismiss the vulnerability.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: Repository administrators and organization owners can view and update dependencies.
shortTitle: Viewing and updating vulnerable dependencies
versions:
  free-pro-team: '*'
topics:
  - sicherheit
---

Your repository's {% data variables.product.prodname_dependabot %} alerts tab lists all open and closed {% data variables.product.prodname_dependabot_alerts %} and corresponding {% data variables.product.prodname_dependabot_security_updates %}. Mithilfe des Dropdownmenü kannst Du die Liste der Warnungen sortieren, und Du kannst auf bestimmte Warnungen klicken, um weitere Details anzuzeigen. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)." |

You can enable automatic security updates for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. Weitere Informationen findest Du unter „[ Über {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

{% data reusables.repositories.dependency-review %}

### About updates for vulnerable dependencies in your repository

{% data variables.product.product_name %} generates {% data variables.product.prodname_dependabot_alerts %} when we detect that your codebase is using dependencies with known vulnerabilities. For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, when {% data variables.product.product_name %} detects a vulnerable dependency in the default branch, {% data variables.product.prodname_dependabot %} creates a pull request to fix it. The pull request will upgrade the dependency to the minimum possible secure version needed to avoid the vulnerability.

### Viewing and updating vulnerable dependencies

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Klicke auf die Warnung, die angezeigt werden soll. ![In der Liste ausgewählte Warnung](/assets/images/help/graphs/click-alert-in-alerts-list.png)
1. Überprüfe die Details der Schwachstelle und wenn verfügbar des Pull Requests, der das automatisierte Sicherheitsupdate enthält.
1. Optionally, if there isn't already a {% data variables.product.prodname_dependabot_security_updates %} update for the alert, to create a pull request to resolve the vulnerability, click **Create {% data variables.product.prodname_dependabot %} security update**. ![Create {% data variables.product.prodname_dependabot %} security update button](/assets/images/help/repository/create-dependabot-security-update-button.png)
1. Wenn Sie zum Aktualisieren Ihrer Abhängigkeit und zum Beheben Ihrer Schwachstelle bereit sind, mergen Sie den Pull Request. Each pull request raised by {% data variables.product.prodname_dependabot %} includes information on commands you can use to control {% data variables.product.prodname_dependabot %}. For more information, see "[Managing pull requests for dependency updates](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."
1. Optionally, if the alert is being fixed, if it's incorrect, or located in unused code, use the "Dismiss" drop-down, and click a reason for dismissing the alert. ![Choosing reason for dismissing the alert via the "Dismiss" drop-down](/assets/images/help/repository/dependabot-alert-dismiss-drop-down.png)

### Weiterführende Informationen

- "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)"
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
- "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"
