---
title: Verwenden von Aktionen aus dem GitHub Marketplace
intro: 'Du kannst {{ site.data.variables.product.prodname_marketplace }} durchgehen und darin nach Aktionen suchen, um sie in Deinen Workflows zu verwenden.'
product: '{{ site.data.reusables.gated-features.actions }}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Informationen zu Aktionen in {{ site.data.variables.product.prodname_marketplace }}

{{ site.data.variables.product.prodname_marketplace }} ist eine zentrale Stelle, an der Du Aktionen findest, die von der {{ site.data.variables.product.prodname_dotcom }}-Community erstellt wurden.  Aktionen mit einem „Badge“ (Abzeichen) zeigen, dass {{ site.data.variables.product.prodname_dotcom }} den Ersteller der Aktion als Partnerorganisation überprüft hat.

{{ site.data.reusables.actions.enterprise-marketplace-actions }}

Neue Aktionen findest Du im Workflow-Editor auf {{ site.data.variables.product.prodname_dotcom }}und auf der Seite [{{ site.data.variables.product.prodname_marketplace }}](https://github.com/marketplace/actions/).

Aktionen direkt im Workflow-Editor anzuzeigen ermöglicht einen schnellen Zugriff auf alle Aktionen auf dem {{ site.data.variables.product.prodname_marketplace }}. Die Aktionsseite von {{ site.data.variables.product.prodname_marketplace }} bietet mehr Flexibilität, um Aktionen nach Kategorien zu filtern.

### Aktionen im Workflow-Editor durchsuchen

Direkt im Workflow-Editor Deines Repositorys kannst Du Aktionen suchen und durchstöbern und auch suchen. In der Seitenleiste kannst Du nach einer bestimmten Aktion suchen, vorgestellte Aktionen anzeigen und vorgestellte Kategorien durchsuchen. Du kannst auch nach der Anzahl der Sterne schauen, die eine Aktion von der {{ site.data.variables.product.prodname_dotcom }}-Community erhalten hat.

1. Navigiere in Deinem Repository zu der Workflow-Datei, die Du bearbeiten möchtest.
1. Um den Workflow-Editor zu öffnen, klickst Du in der oberen rechten Ecke der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}. ![Schaltfläche zum Editieren der Workflow-Datei](/assets/images/help/repository/actions-edit-workflow-file.png)
1. Rechts vom Editor befindet sich die Seitenleiste {{ site.data.variables.product.prodname_marketplace }} , um Aktionen zu durchsuchen. ![Seitenleiste für den Marktplatz-Workflow](/assets/images/help/repository/actions-marketplace-sidebar.png)

### Aktionen in {{ site.data.variables.product.prodname_marketplace }} durchsuchen

Die gleichen Aktionen findest Du auf der [{{ site.data.variables.product.prodname_marketplace }}-Aktionsseite](https://github.com/marketplace/actions/). Auf der {{ site.data.variables.product.prodname_marketplace }}-Seite kannst Du noch flexibler Aktionen nach Kategorie und Überprüfung zu filtern.

### Vom Worflow-Editor aus eine Aktion zu Deinem Workflow hinzufügen

Die Listing-Seite einer Aktion enthält die Version der Aktion und die erforderliche Workflow-Syntax, um die Aktion zu benutzen.

1. Navigiere zu der Aktion, die Du in Deinem Workflow verwenden möchtest.
1. Klicke unter „Installation“ auf {% octicon "clippy" aria-label="The edit icon" %} , um die Workflow-Syntax zu kopieren. ![Aktionsliste anzeigen](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Füge die Syntax als neuen Schritt in Deinen Workflow ein. Weitere Informationen findest Du unter „[Workflow-Syntax für {{ site.data.variables.product.prodname_actions }}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)“.
1. Wenn für die Aktion Variablen zur Verfügung gestellt werden müssen, lege diese in Deinem Workflow fest. Informationen dazu, welche Variablen eine Aktion benötigen könnte, findest Du in der vollständigen Auflistung der Aktion im {{ site.data.variables.product.prodname_marketplace }}.

{% if currentVersion == "free-pro-team@latest" %}

{{ site.data.reusables.dependabot.version-updates-for-actions }}

{% endif %}
