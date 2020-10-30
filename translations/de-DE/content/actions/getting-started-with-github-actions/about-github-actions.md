---
title: Informationen zu GitHub Actions
intro: 'Mit {% data variables.product.prodname_actions %} kannst Du benutzerdefinierte Workflows für den gesamten Lebenszyklus der Softwareentwicklung direkt im {% data variables.product.prodname_dotcom %}-Repository erstellen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax/
  - /articles/about-github-actions
  - /github/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/automating-your-workflow-with-github-actions/about-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %}-Workflows sind benutzerdefinierte automatisierte Prozesse, die Sie in Ihrem Repository einrichten können, um ein Code-Projekt auf {% data variables.product.prodname_dotcom %} zu erstellen, zu testen, zu packen, freizugeben oder bereitzustellen.

{% data variables.product.prodname_actions %} von {% data reusables.repositories.actions-ci-cd %} aktivieren den eingebauten Dienst für kontinuierliche Integrations von {% data variables.product.prodname_dotcom %}. Weitere Informationen finden Sie unter „[Informationen zur fortlaufenden Integration](/articles/about-continuous-integration)“.

Workflows laufen unter Linux, macOS, Windows und in Containern auf {% data variables.product.prodname_dotcom %}-gehosteten Rechnern, ‚Runners‘ genannt. Alternativ kannst Du auch Deine eigenen Runner betreiben, um Workflows auf Maschinen auszuführen, die Du besitzt oder verwaltest. Weitere Informationen findest Du unter "[Informationen zu selbst-gehosteten Runnnern](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)."

Sie können Workflows mithilfe von Aktionen erstellen, die im Repository definiert sind, mit Open-Source-Aktionen in einem öffentlichen Repository in {% data variables.product.prodname_dotcom %} oder mithilfe eines veröffentlichten Docker-Container-Images. Workflows in geforkten Repositorys werden standardmäßig nicht ausgeführt.

Sie können mögliche Aktionen für Ihren Workflow auf {% data variables.product.prodname_dotcom %} erkunden und Aktionen für die Freigabe in der {% data variables.product.prodname_dotcom %}-Community erstellen. For more information on creating a custom action, see "[Creating actions](/actions/creating-actions)."

Sie können eine Workflow-Datei erstellen und für die Ausführung bei bestimmten Ereignissen konfigurieren. Weitere Informationen finden Sie unter „[Einen Workflow konfigurieren](/articles/configuring-a-workflow)“ und „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)“.

Eine Definition von gebräuchlichen Begriffen findest Du unter "[Kernkonzepte für {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)."

### Aktionen in der {% data variables.product.prodname_dotcom %}-Community

{% data variables.product.prodname_marketplace %} ist eine zentrale Stelle, an der Du Aktionen der {% data variables.product.prodname_dotcom %}-Gemeinschaft finden, zur Verfügung stellen und nutzen kannst. Weitere Informationen findest Du unter "[Aktionen vom {% data variables.product.prodname_marketplace %} in Deinem Workflow verwenden](/actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow)."

Du kannst Dein Projekt auch mit Open-Source-Aktionen aus öffentlichen Repositorys auf {% data variables.product.prodname_dotcom %} anpassen und Aktionen verwenden , die von {% data variables.product.prodname_dotcom %} in der Organisation [Aktionen](https://github.com/actions) gebaut wurden.

### {% data variables.product.prodname_actions %} für Dein Repository oder Deine Organisation deaktivieren oder beschränken

{% data reusables.github-actions.disabling-github-actions %}

Weitere Information findest Du unter „[{% data variables.product.prodname_actions %} für ein Repository deaktivieren oder beschränken](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)“ oder „[{% data variables.product.prodname_actions %} für Deine Organisation deaktivieren oder beschränken](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)“.

### Benachrichtigungen für Workflow-Läufe

{% data reusables.repositories.workflow-notifications %}

### Nutzungseinschränkungen

{% data reusables.github-actions.github-actions-usage-limits %}

{% if currentVersion == "free-pro-team@latest" %}

### Nutzungsrichtlinien

Neben den Nutzungsbeschränkungen musst Du auch sicherstellen, dass Du {% data variables.product.prodname_actions %} innerhalb der [GitHub-Nutzungsbedingungen](/articles/github-terms-of-service/) verwendest. Weitere Informationen zu {% data variables.product.prodname_actions %}-spezifischen Bedingungen findest Du unter [Zusätzliche Produktbedingungen für GitHub](/github/site-policy/github-additional-product-terms#a-actions-usage).

### Informationen zur Abrechnung für {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %} Weitere Informationen findest Du unter „[Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)“.

### Support kontaktieren

{% data reusables.github-actions.contacting-support %}

{% endif %}

### Weiterführende Informationen

- „[Einen Workflow-Lauf verwalten](/articles/managing-a-workflow-run)“
- „[Ereignisse, die Workflows auslösen](/articles/events-that-trigger-workflows)“
- „[Virtuelle Umgebungen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)“
„[Abrechnung für {% data variables.product.prodname_actions %} verwalten](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)“
