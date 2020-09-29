---
title: Eine Standard-Community-Unterstützungsdatei erstellen
intro: 'Du kannst Standard-Community-Unterstützungsdateien wie zum Beispiel CONTRIBUTING oder CODE_OF_CONDUCT erstellen. Standarddateien werden für alle öffentlichen Repositorys eines Kontos verwendet, das keine eigenen Dateien dieser Art enthält.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zu Standard-Community-Unterstützungsdateien

Du kannst Standard-Community-Unterstützungsdateien dem Stammverzeichnis eines öffentlichen Repositorys mit Namen `.github` hinzufügen, welches einer Organisation{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} oder einem Benutzerkonto{% endif %} gehört.

{% data variables.product.product_name %} wird Standarddateien für ein öffentliches Repository benutzen und anzeigen, sofern das Konto, dem das Repository gehört, über keine eigenen Dateien dieses Typs an den folgenden Stellen verfügt:
- im Root des Repositorys
- im Ordner `.github`
- im Ordner `docs`

Wenn z. B. jemand einen Issue oder Pull Request in einem öffentlichen Repository erstellt, das keine eigene CONTRIBUTING-Datei enthält, wird ein Link zur standardmäßigen CONTRIBUTING-Datei angezeigt. Wenn ein Repository solche Dateien in seinem eigenen `.github/ISSUE_TEMPLATE`-Verzeichnis hat{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}, inbegriffen Issuevorlagen oder eine *config.yml*-Datei{% endif %}, werden keine Inhalte des Standard `.github/ISSUE_TEMPLATE`-Verzeichnisses verwendet.

Standarddateien sind nicht in Klonen, Paketen oder Downloads von einzelnen Repositorys enthalten, da sie nur im `.github`-Repository gespeichert sind.

### Unterstützte Dateitypen

Du kannst Standards in Deiner Organisation{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} oder Deinem Benutzerkonto{% endif %} für die folgenden Community-Unterstützungsdateien erstellen:

| Community-Unterstützungsdatei                                                                                               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                                      | Eine CODE_OF_CONDUCT-Datei legt die Standards für die Interaktion in einer Community fest. Weitere Informationen findest Du unter „[Deinem Projekt einen Verhaltenskodex hinzufügen](/articles/adding-a-code-of-conduct-to-your-project/)“.{% endif %}
| *CONTRIBUTING.md*                                                                                                           | Eine CONTRIBUTING-Datei erläutert, wie zu Deinem Projekt beigetragen werden soll. Weitere Informationen findest Du unter „[Richtlinien für Repository-Mitarbeiter festlegen](/articles/setting-guidelines-for-repository-contributors/)“.{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                               | Eine FUNDING-Datei zeigt eine Sponsorenschaltfläche in Deinem Repository an, um die Sichtbarkeit von Finanzierungsoptionen für Dein Open-Source-Projekt zu erhöhen. Weitere Informationen findest Du unter „[Sponsorenschaltfläche in Deinem Repository anzeigen](/articles/displaying-a-sponsor-button-in-your-repository)“{% endif %}
| Issue- und Pull-Request-Vorlagen{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} und *config.yml*{% endif %} | Mit den Vorlagen für Issues und Pull Requests kannst Du die Informationen anpassen und standardisieren, die Mitarbeiter beim Öffnen von Issues und Pull Requests in Deinem Repository berücksichtigen sollen. Weitere Informationen finden Sie unter „[Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates/)“.{% if currentVersion == "free-pro-team@latest" %}
| *SECURITY.md*                                                                                                               | Eine SECURITY-Datei enthält Anweisungen zum verantwortungsvollen Melden einer Sicherheitslücke in Ihrem Projekt. Weitere Informationen findest Du unter „[Eine Sicherheitsrichtlinie zum Repository hinzufügen](/articles/adding-a-security-policy-to-your-repository)“.{% endif %}
| *SUPPORT.md*                                                                                                                | Mit einer SUPPORT-Datei kannst Du anderen mitteilen, wie sie Unterstützung bei Deinem Projekt erhalten können. Weitere Informationen findest Du unter „[Support-Ressourcen zu Deinem Projekt hinzufügen](/articles/adding-support-resources-to-your-project/).“                                                                                                                                      |

Du kannst keine Standard-Lizenzdatei erstellen. Lizenzdateien müssen zu individuellen Repositorys hinzugefügt werden, damit die Datei bei Klonen, Paketieren und Herunterladen des Projekts enthalten ist.

### Ein Repository für Standarddateien erstellen

{% data reusables.repositories.create_new %}
2. Benutze das **Owner** (Inhaber) Dropdownmenü und wähle die Organisation{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} oder das Benutzerkonto{% endif %}, für welche Du Standarddateien erstellen willst. ![Dropdownmenü „Owner" (Inhaber)](/assets/images/help/repository/create-repository-owner.png)
3. Gib **.github** als Namen für Dein Repository sowie optional eine Beschreibung ein. ![Feld „Create repository" (Erstellen eines Repositorys)](/assets/images/help/repository/default-file-repository-name.png)
4. Wähle, dass das Repository öffentlich sein soll. ![Optionsfelder zum Auswählen des privaten oder öffentlichen Status](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. Erstelle im Repository eine der möglichen Community-Unterstützungsdateien. Issuevorlagen{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} und ihre Konfigurationsdateien{% endif %} müssen sich in einem Verzeichnis namens `.github/ISSUE_TEMPLATE` befinden. Alle anderen unterstützten Dateien müssen sich im Root des Repositorys befinden. Weitere Informationen findest Du unter „[Neue Dateien erstellen](/articles/creating-new-files/).“
