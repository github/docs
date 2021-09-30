---
title: Using workflow templates
shortTitle: Using templates
intro: You can set up CI using a workflow template that matches the language and tooling you want to use.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Jeder Benutzer mit Schreibberechtigung für ein Repository kann mit {% data variables.product.prodname_actions %} eine fortlaufende Integration (CI) einrichten.

Nach der Einrichtung der CI können Sie den Workflow an Ihre Bedürfnisse anpassen.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Wähle die Vorlage aus, die der Sprache und den Tools entspricht, die Du verwenden möchtest, und klicke dann auf **Set up this workflow** (Diesen Workflow einrichten). ![Schaltfläche „Setup workflow“ (Workflow einrichten)](/assets/images/help/repository/setup-workflow-button.png)
5. Klicke auf **Start commit** (Commit starten). ![Schaltfläche „Start commit“ (Commit starten)](/assets/images/help/repository/start-commit.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

Sobald ein Push an Dein Repository erfolgt ist, kannst Du den Status und die detaillierten Protokolle Deines fortlaufenden Integrationsworkflows verfolgen, der auf {% data variables.product.prodname_dotcom %} ausgeführt wird, und angepasste Benachrichtigungen erhalten. Weitere Informationen findest Du unter „[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)“ und „[Workflowausführung verwalten](/articles/managing-a-workflow-run)“.

{% data reusables.repositories.actions-workflow-status-badge-intro %}

For more information, see "[Adding a workflow status badge](/actions/managing-workflow-runs/adding-a-workflow-status-badge)."

## Weiterführende Informationen

- „[Informationen zur kontinuierlichen Integration](/articles/about-continuous-integration)“
- „[Einen Workflow-Lauf verwalten](/articles/managing-a-workflow-run)“
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
{% ifversion fpt %}
- "[ Abrechnung für {% data variables.product.prodname_actions %} verwalten](/billing/managing-billing-for-github-actions)"
{% endif %}
