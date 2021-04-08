---
title: Setting up continuous integration using workflow templates
shortTitle: Setting up CI using templates
intro: Du kannst die fortlaufende Integration für Dein Projekt mithilfe einer Workflow-Vorlage einrichten, die der Sprache und den Tools entspricht, die Du verwenden möchtest.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Jeder Benutzer mit Schreibberechtigung für ein Repository kann mit {% data variables.product.prodname_actions %} eine fortlaufende Integration (CI) einrichten.

Nach der Einrichtung der CI können Sie den Workflow an Ihre Bedürfnisse anpassen.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Wähle die Vorlage aus, die der Sprache und den Tools entspricht, die Du verwenden möchtest, und klicke dann auf **Set up this workflow** (Diesen Workflow einrichten). ![Schaltfläche „Setup workflow“ (Workflow einrichten)](/assets/images/help/repository/setup-workflow-button.png)
5. Klicke auf **Start commit** (Commit starten). ![Schaltfläche „Start commit“ (Commit starten)](/assets/images/help/repository/start-commit.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

Sobald ein Push an Ihr Repository erfolgt ist, können Sie den Status und die detaillierten Protokolle Ihres fortlaufenden Integrationsworkflows verfolgen, der auf {% data variables.product.prodname_dotcom %} ausgeführt wird, und angepasste Benachrichtigungen erhalten. Weitere Informationen findest Du unter „[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)“ und „[Workflowausführung verwalten](/articles/managing-a-workflow-run)“.

{% data reusables.repositories.actions-workflow-status-badge-into %}

For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

### Weiterführende Informationen

- „[Informationen zur kontinuierlichen Integration](/articles/about-continuous-integration)“
- „[Einen Workflow-Lauf verwalten](/articles/managing-a-workflow-run)“
{% if currentVersion == "free-pro-team@latest" %}
- „[Abrechnung für {{ site.data.variables.product.prodname_actions }} verwalten](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)“
{% endif %}
