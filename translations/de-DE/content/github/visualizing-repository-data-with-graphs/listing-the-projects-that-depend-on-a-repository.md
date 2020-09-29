---
title: Die von einem Repository abhängigen Projekte auflisten
intro: 'Du kannst die Pakete und Projekte, die von einem Repository abhängen, in einem Abhängigkeitsdiagramm anzeigen.'
redirect_from:
  - /articles/listing-the-projects-that-depend-on-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zum Abhängigkeitsdiagramm
Das Abhängigkeitsdiagramm enthält Daten zu Paketen und Anwendungen. Pakete sind Repositorys, die eine Bibliothek in einem Paketmanager enthalten, wohingegen Anwendungen Repositorys sind, die vom ausgewählten Repository abhängen. Die Liste der Anwendungen in einem Abhängigkeitsdiagramm ist nach den neuesten Projekten geordnet, die vom Repository abhängen.

Das Abhängigkeitsdiagramm enthält Daten für die folgenden Sprachen:

- RubyGems
- NPM
- PyPI
- Maven (nur pom.xml)
- Nuget

{% data reusables.repositories.enable-security-alerts %}

{% note %}

**Hinweis:** Die Abhängigenzahlen sind ungefähre Angaben und stimmen möglicherweise nicht mit den aufgelisteten Abhängigen überein.

{% endnote %}

![Abhängige-Diagramm](/assets/images/help/graphs/dependents_graph.png)

### Auf das Abhängige-Diagramm zugreifen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. Klicke unter „Dependency graph“ (Abhängigkeitsdiagramm) auf **Dependents** (Abhängige). ![Registerkarte „Dependents“ (Abhängige) auf der Seite „Dependency graph“ (Abhängigkeitsdiagramm)](/assets/images/help/graphs/dependency-graph-dependents-tab.png)

### Weiterführende Informationen

- „[Pakete auflisten, von denen ein Repository abhängig ist](/articles/listing-the-packages-that-a-repository-depends-on)“{% if currentVersion == "free-pro-team@latest" %}
- „[Einblicke für Deine Organisation anzeigen ](/articles/viewing-insights-for-your-organization)“{% endif %}
