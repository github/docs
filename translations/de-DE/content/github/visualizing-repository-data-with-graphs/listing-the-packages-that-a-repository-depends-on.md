---
title: 'Pakete auflisten, von denen ein Repository abhängig ist'
intro: Im Abhängigkeitsdiagramm kannst Du die Abhängigkeiten Deines Projekts sowie alle erkannten Schwachstellen sehen.
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zum Abhängigkeitsdiagramm

Das Abhängigkeitsdiagramm ist für jedes{% if currentVersion == "free-pro-team@latest" %} öffentliche{% endif %} Repository verfügbar, das Abhängigkeiten in einem unterstützten Paket-Ökosystem mit einem unterstützten Dateiformat definiert.{% if currentVersion == "free-pro-team@latest" %} Repository-Administratoren können das Abhängigkeitsdiagramm auch für private Repositorys einrichten.{% endif %}

{% data reusables.repositories.enable-security-alerts %}

Du kannst angreifbare Abhängigkeiten im Abhängigkeitsdiagramm Deines Repositorys anzeigen und aktualisieren. Das Abhängigkeitsdiagramm listet angreifbare Abhängigkeiten vor allen anderen Abhängigkeiten auf. Weitere Informationen findest Du unter „[Informationen zu Sicherheitswarnungen für angreifbare Abhängigkeiten](/articles/about-security-alerts-for-vulnerable-dependencies).“

{% if currentVersion == "free-pro-team@latest" %}
Du kannst Abhängigkeiten, die in Organisations-Repositorys verwendet werden, in einem zentralen Dashboard anzeigen. Weitere Informationen findest Du unter „[Einblicke für Deine Organisation anzeigen ](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)“.{% endif %}

### Unterstützte Paket-Ökosysteme

| Paketmanager | Sprachen                        | Empfohlene Formate                                     | Unterstützte Formate                                                      |
| ------------ | ------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Maven        | Java, Scala                     | `pom.xml`                                              | `pom.xml`                                                                 |
| npm          | JavaScript                      | `package-lock.json`                                    | `package-lock.json`, `package.json`                                       |
| Yarn         | JavaScript                      | `yarn.lock`                                            | `package.json`, `yarn.lock`                                               |
| `dotnet` CLI | .NET-Sprachen (C#, C++, F#, VB) | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
| Python PIP   | Python                          | `requirements.txt`, `pipfile.lock`                     | `requirements.txt`, `pipfile.lock`, `setup.py`*                           |
| RubyGems     | Ruby                            | `Gemfile.lock`                                         | `Gemfile.lock`,`Gemfile`, `*.gemspec`                                     |
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |{% endif %}

{% note %}

**Hinweis:** Wenn Du Deine Python-Abhängigkeiten in einer `setup.py`-Datei auflistest, können wir möglicherweise nicht jede Abhängigkeit in Deinem Projekt analysieren, auflisten und melden.

{% endnote %}

### Abhängigkeiten für ein Repository mit aktiviertem Abhängigkeitsdiagramm auflisten

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

{% if currentVersion == "free-pro-team@latest" %}
### Abhängigkeitsdiagramm für ein privates Repository aktivieren

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. Lies die Mitteilung zum Gewähren des {% data variables.product.product_name %}-Zugriffs auf Repository-Daten zum Aktivieren des Abhängigkeitsdiagramms durch, und klicke dann auf **Allow access** (Zugriff erlauben). ![Schaltfläche, um den Zugriff auf Repository-Daten für die Aktivierung des Abhängigkeitsdiagramms zuzulassen](/assets/images/help/repository/dependency-graph-allow-access-button.png)

Weitere Informationen findest Du unter „[Grundlegendes zur Verwendung und zum Schutz Deiner Daten durch {% data variables.product.product_name %}](/categories/understanding-how-github-uses-and-protects-your-data).“

### Abhängigkeitsdiagramm für ein privates Repository deaktivieren

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Hebe unter „Data services“ (Datendienste) die Auswahl von **Dependency graph** (Abhängigkeitsdiagramm) auf. ![Kontrollkästchen zum Deaktivieren des Abhängigkeitsdiagramms](/assets/images/help/repository/private-repo-data-use-dependency-graph-disabled.png)

Informationen zum Ablehnen der Datennutzung für Dein Repository findest Du unter „[Datennutzung für Dein privates Repository zulassen oder ablehnen](/articles/opting-into-or-out-of-data-use-for-your-private-repository).“
{% endif %}

### Fehler beim Abhängigkeitsdiagramm beheben

{% data reusables.repositories.troubleshooting-dependency-graph %}

### Weiterführende Informationen

- „[Die von einem Repository abhängigen Projekte auflisten](/articles/listing-the-projects-that-depend-on-a-repository)“{% if currentVersion == "free-pro-team@latest" %}
- „[Grundlegendes zur Verwendung und zum Schutz Deiner Daten durch {% data variables.product.product_name %}](/categories/understanding-how-github-uses-and-protects-your-data)“
- „[Angreifbare Abhängigkeiten in Deinem Repository anzeigen und aktualisieren](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)“{% endif %}
