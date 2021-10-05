---
title: 'Usage limits, billing, and administration'
intro: 'There are usage limits for {% data variables.product.prodname_actions %} workflows. Usage charges apply to repositories that go beyond the amount of free minutes and storage for a repository.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Informationen zur Abrechnung für {% data variables.product.prodname_actions %}

{% ifversion fpt %}
{% data reusables.github-actions.actions-billing %} Weitere Informationen findest Du unter „[Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)“.
{% else %}
GitHub Actions usage is free for {% data variables.product.prodname_ghe_server %}s that use self-hosted runners.
{% endif %}

## Nutzungseinschränkungen

{% ifversion fpt %}
There are some limits on {% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. Die Einschränkungen können sich jederzeit ändern.

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
{% data reusables.github-actions.usage-workflow-queue-limits %}

{% else %}
Usage limits apply to self-hosted runners. Weitere Informationen findest Du unter „[Informationen zu selbst-gehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)“.
{% endif %}

{% ifversion fpt %}
## Nutzungsrichtlinien

Neben den Nutzungsbeschränkungen musst Du auch sicherstellen, dass Du {% data variables.product.prodname_actions %} innerhalb der [GitHub-Nutzungsbedingungen](/articles/github-terms-of-service/) verwendest. Weitere Informationen zu {% data variables.product.prodname_actions %}-spezifischen Bedingungen findest Du unter [Zusätzliche Produktbedingungen für GitHub](/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## Artifact and log retention policy

You can configure the artifact and log retention period for your repository, organization, or enterprise account.

{% data reusables.actions.about-artifact-log-retention %}

Weitere Informationen findest Du unter:

- "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your organization](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your enterprise](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)"
{% endif %}

## {% data variables.product.prodname_actions %} für Dein Repository oder Deine Organisation deaktivieren oder beschränken

{% data reusables.github-actions.disabling-github-actions %}

Weitere Informationen findest Du unter:
- "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"{% ifversion fpt %}
- "[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)" for {% data variables.product.prodname_ghe_cloud %}{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## Disabling and enabling workflows

You can enable and disable individual workflows in your repository on {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

For more information, see "[Disabling and enabling a workflow](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)."
{% endif %}
