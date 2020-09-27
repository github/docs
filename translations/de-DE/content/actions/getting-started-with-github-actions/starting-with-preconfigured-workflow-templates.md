---
title: Einstieg mit vorkonfigurierten Workflow-Vorlagen
intro: '{{ site.data.variables.product.prodname_dotcom }} bietet vorkonfigurierte Workflow-Vorlagen, um Deinen Workflow zu automatisieren oder einen CI-Workflow für bestimmte Sprachen und Frameworks zu erstellen.'
product: '{{ site.data.reusables.gated-features.actions }}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### Informationen zu Workflow-Vorlagen

{{ site.data.variables.product.product_name }} analysiert Deinen Code und zeigt Dir die CI-Vorlagen an, die am besten zu Deinem Repository passen. Wenn Dein Repository beispielsweise Node.js-Code enthält, werden Vorschläge für Node.js-Projekte angezeigt. Du kannst Workflow-Vorlagen als Ausgangspunkt verwenden, um Deinen benutzerdefinierten Workflow zu erstellen, oder Du kannst sie unverändert zu verwenden.

Du kannst die komplette Liste der CI-Vorlagen im Repository [actions/starter-workflows](https://github.com/actions/starter-workflows/tree/master/ci) durchsuchen. Du findest auch Vorlagen zur Automatisierung Deines Workflows. Du findest auch Vorlagen zur Automatisierung Deines Workflows.

### Deine erste Workflow-Vorlage hinzufügen

Wenn Du Deinem Repository noch keinen Workflow hinzugefügt hast, wird eine Liste der Workflow-Vorlagen angezeigt, aus denen Du auswählen kannst.

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.actions-tab }}
{{ site.data.reusables.repositories.actions-set-up-workflow-template }}

### Zusätzliche Workflow-Vorlagen hinzufügen

Wenn Du bereits über einen Workflow verfügst und eine neue Workflow-Vorlagen hinzufügen möchtest, kannst Du zu den Workflow-Vorlagen navigieren.

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.actions-tab }}
{{ site.data.reusables.repositories.actions-new-workflow }}
{{ site.data.reusables.repositories.actions-set-up-workflow-template }}
