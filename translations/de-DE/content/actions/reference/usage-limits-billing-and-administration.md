---
title: 'Usage limits, billing, and administration'
intro: 'There are usage limits for {% data variables.product.prodname_actions %} workflows. Usage charges apply to repositories that go beyond the amount of free minutes and storage for a repository.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - Abrechnung
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Informationen zur Abrechnung für {% data variables.product.prodname_actions %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.github-actions.actions-billing %} Weitere Informationen findest Du unter „[Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)“.
{% else %}
GitHub Actions usage is free for
{% data variables.product.prodname_ghe_server %}s that use self-hosted runners.
{% endif %}

### Nutzungseinschränkungen

{% if currentVersion == "free-pro-team@latest" %}
There are some limits on
{% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. Die Einschränkungen können sich jederzeit ändern.

{% note %}

**Note:** For self-hosted runners, different usage limits apply. Weitere Informationen findest Du unter „[Informationen zu selbst-gehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)“.

{% endnote %}

- **Job execution time** (Auftrags-Ausführungszeit) - Jeder Job in einem Workflow kann bis zu 6 Stunden Ausführungszeit laufen. Wenn ein Auftrag dieses Limit erreicht, wird der Auftrag beendet und kann nicht abgeschlossen werden.
{% data reusables.github-actions.usage-workflow-run-time %}
{% data reusables.github-actions.usage-api-requests %}
- **Concurrent Jobs** (parallele Aufträge) - Die Anzahl paralleler Aufträge, die Du in Ihrem Konto ausführen kannst, hängt von Deinem GitHub-Plan ab, wie in der folgenden Tabelle ersichtlich. Bei Überschreitung werden alle zusätzlichen Aufträge in die Warteschlange gestellt.

  | GitHub Plan | Total parallele Aufträge | Maximal parallele macOS-Aufträge |
  | ----------- | ------------------------ | -------------------------------- |
  | Kostenlos   | 20                       | 5                                |
  | Pro         | 40                       | 5                                |
  | Team        | 60                       | 5                                |
  | Enterprise  | 180                      | 50                               |
- **Auftrags-Matrix** - {% data reusables.github-actions.usage-matrix-limits %}
{% else %}
Usage limits apply to self-hosted runners. Weitere Informationen findest Du unter „[Informationen zu selbst-gehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)“.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Nutzungsrichtlinien
In addition to the usage limits, you must ensure that you use

{% data variables.product.prodname_actions %} within the [GitHub Terms of Service](/articles/github-terms-of-service/). Weitere Informationen zu {% data variables.product.prodname_actions %}-spezifischen Bedingungen findest Du unter [Zusätzliche Produktbedingungen für GitHub](/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Artifact and log retention policy

You can configure the artifact and log retention period for your repository, organization, or enterprise account.

{% data reusables.actions.about-artifact-log-retention %}

Weitere Informationen findest Du unter:

- [Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your repository](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)
- [Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your organization](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your enterprise](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)
{% endif %}

### {% data variables.product.prodname_actions %} für Dein Repository oder Deine Organisation deaktivieren oder beschränken

{% data reusables.github-actions.disabling-github-actions %}

Weitere Informationen findest Du unter:
- "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)"
- "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"{% if currentVersion == "free-pro-team@latest" %}
- "[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)" for {% data variables.product.prodname_ghe_cloud %}{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Disabling and enabling workflows

You can enable and disable individual workflows in your repository on {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

For more information, see "[Disabling and enabling a workflow](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)."
{% endif %}
