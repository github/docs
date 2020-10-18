---
title: Sponsorenschaltfläche in Deinem Repository anzeigen
intro: Du kannst eine Sponsorenschaltfläche zu Deinem Repository hinzufügen, um die Sichtbarkeit von Finanzierungsmöglichkeiten für Dein Open-Source-Projekt zu erhöhen.
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
versions:
  free-pro-team: '*'
---

### Informationen zu FUNDING-Dateien

Du kannst Deine Sponsorenschaltfläche konfigurieren, indem Du die Datei _FUNDING.yml_ im `.github`-Ordner auf dem Standardbranch Deines Repositorys bearbeitest. Die Schaltfläche kann so konfiguriert werden, dass sie unterstützte Entwickler in {% data variables.product.prodname_sponsors %}, externen Finanzierungsplattformen oder einer benutzerdefinierten Sponsoring-URL enthält. Weitere Informationen zu {% data variables.product.prodname_sponsors %} findest Du unter „[Informationen zu GitHub-Sponsoren](/articles/about-github-sponsors).“

Du kannst einen Benutzernamen, Paketnamen oder Projektnamen pro externer Finanzierungsplattform und bis zu vier benutzerdefinierte URLs hinzufügen. Du kannst bis zu vier unterstützten Entwickler oder Organisationen in {% data variables.product.prodname_sponsors %} hinzufügen. Füge jede Plattform auf einer neuen Zeile hinzu, und verwende dabei die folgende Syntax:

| Plattform                                                                     | Syntax                                                                     |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [CommunityBridge](https://communitybridge.org)                                | `community_bridge: PROJECT-NAME`                                           |
| [{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` oder `github: [USERNAME, USERNAME, USERNAME, USERNAME]` |
| [IssueHunt](https://issuehunt.io/)                                            | `issuehunt: USERNAME`                                                      |
| [Ko-fi](https://ko-fi.com/)                                                   | `ko_fi: USERNAME`                                                          |
| [Liberapay](https://en.liberapay.com/)                                        | `liberapay: USERNAME`                                                      |
| [Open Collective](https://opencollective.com/)                                | `open_collective: USERNAME`                                                |
| [Otechie](https://otechie.com/)                                               | `otechie: USERNAME`                                                        |
| [Patreon](https://www.patreon.com/)                                           | `patreon: USERNAME`                                                        |
| [Tidelift](https://tidelift.com/)                                             | `tidelift: PLATFORM-NAME/PACKAGE-NAME`                                     |
| Benutzerdefinierte URL                                                        | `custom: LINK1` oder `custom: [LINK1, LINK2, LINK3, LINK4]`                |

Verwende bei Tidelift die Syntax `platform-name/package-name` mit den folgenden Plattform-Namen:

| Sprache    | Plattform-Name |
| ---------- | -------------- |
| JavaScript | `npm`          |
| Python     | `pypi`         |
| Ruby       | `rubygems`     |
| Java       | `maven`        |
| PHP        | `packagist`    |
| C#         | `nuget`        |

Hier ist ein Beispiel für eine _FUNDING.yml_-Datei:
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Hinweis:** Wenn eine benutzerdefinierte URL in einem Array einen Doppelpunkt (`:`) enthält, musst Du die URL in Anführungszeichen setzen. Beispiel: `"https://www.paypal.me/octocat"`.

{% endnote %}

Da kannst eine Standard-Sponsorenschaltfläche für Deine Organisation oder Dein Benutzerkonto erstellen. Weitere Informationen findest Du unter „[Eine Standard Community-Unterstützungsdatei erstellen](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% note %}

Finanzierungslinks sind eine gute Möglichkeit für die Community, Open-Source-Projekte direkt finanziell zu unterstützen. Wir unterstützen den Einsatz von Finanzierungslinks nicht für andere Zwecke wie Werbung oder die Unterstützung politischer, gemeinschaftlicher oder wohltätiger Gruppen. Wenn Du Dir nicht sicher sind, ob Deine beabsichtigte Nutzung unterstützt wird, wende Dich an {% data variables.contact.contact_support %}.

{% endnote %}

### Sponsorenschaltfläche in Deinem Repository anzeigen

Jeder, der über Administratorberechtigungen verfügt, kann eine Sponsorenschaltfläche in einem Repository ermöglichen.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Wähle unter „Features“ (Funktionen) **Sponsorships** (Sponsoring) aus. ![Kontrollkästchen zum Aktivieren von Sponsoring](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. Klicke unter „Sponsorships" (Sponsoring) auf **Set up sponsor button** (Eine Sponsorenschaltfläche erstellen) or **Override funding links** (Finanzierungslinks überschreiben). ![Schaltfläche zum Einrichten der Sponsorenschaltfläche](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. Befolge im Datei-Editor die Anweisungen aus der Datei _FUNDING.yml_, um Links zu Deinen Finanzierungsstandorten hinzuzufügen. ![FUNDING-Datei bearbeiten um Links zu Finazierungsstandorten hinzuzufügen](/assets/images/help/sponsors/funding-yml-file.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Weiterführende Informationen
- „[Über {% data variables.product.prodname_sponsors %} für Open-Source-Mitarbeiter](/github/supporting-the-open-source-community-with-github-sponsors/about-github-sponsors-for-open-source-contributors)"
- „[Häufig gestellte Fragen mit dem {% data variables.product.prodname_sponsors %}-Team](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)“ auf {% data variables.product.prodname_blog %}
