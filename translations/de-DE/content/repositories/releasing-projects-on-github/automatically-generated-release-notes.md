---
title: Automatisch generierte Versionshinweise
intro: Du kannst Versionshinweise für deine GitHub-Versionen automatisch generieren.
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Automated release notes
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/orgs/community/discussions/categories/general'
ms.openlocfilehash: aee951e6f57492240b5baf8870578409945aefdc
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185194'
---
## Informationen zu automatisch generierten Versionshinweisen

Automatisch generierte Versionshinweise bieten eine automatisierte Alternative zum manuellen Schreiben von Versionshinweisen für deine {% data variables.product.prodname_dotcom %}-Releases. Mit automatisch generierten Versionshinweisen kannst du schnell einen Überblick über den Inhalt einer Version erstellen. Automatisch generierte Versionshinweise umfassen eine Liste der zusammengeführten Pull Requests, eine Liste der Mitwirkenden an der Version und einen Link zu einem vollständigen Änderungsprotokoll.

Du kannst auch deine automatisierten Versionshinweise anpassen, indem du Beschriftungen verwendest, um benutzerdefinierte Kategorien zu erstellen, um Pull Requests zu strukturieren, die du einschließen möchtest, und um bestimmte Bezeichnungen und Benutzer*innen aus der Ausgabe auszuschließen.

## Erstellen von automatisch generierten Versionshinweisen für ein neues Release

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Klicke auf **Neues Release entwerfen**.
   ![Schaltfläche für Release-Entwurf](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %}Klicke auf **Tag auswählen** und gib{% else %}Geben{% endif %} eine Versionsnummer für dein Release ein. Alternativ kannst du ein vorhandenes Tag auswählen.
  {% ifversion fpt or ghec %} ![Eingeben eines Tags](/assets/images/help/releases/releases-tag-create.png)
5. Wenn du ein neues Tag erstellst, klicke auf **Neues Tag erstellen**.
![Bestätigen, dass ein neues Tag erstellt werden soll](/assets/images/help/releases/releases-tag-create-confirm.png) {% else %} ![Tags des Releases](/assets/images/enterprise/releases/releases-tag-version.png) {% endif %}
6. Wenn du ein neues Tag erstellt hast, verwende das Dropdownmenü, um den Branch auszuwählen, der das zu veröffentlichende Projekt enthält.
  {% ifversion fpt or ghec %}![Branch auswählen](/assets/images/help/releases/releases-choose-branch.png) {% else %}![Tag-Branch für Releases](/assets/images/enterprise/releases/releases-tag-branch.png) {% endif %} {%- data reusables.releases.previous-release-tag %}
7. Klicke rechts neben dem Beschreibungstextfeld auf {% ifversion previous-release-tag %}**Versionshinweise generieren**{% else %}**Versionshinweise automatisch generieren**{% endif %}.{% ifversion previous-release-tag %} ![Versionshinweise generieren](/assets/images/help/releases/generate-release-notes.png){% else %} ![Versionshinweise automatisch generieren](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}
8. Überprüfe die generierten Notizen, um sicherzustellen, dass sie alle (und nur) die Informationen enthalten, die du einschließen möchtest.
9. Um optional binäre Dateien wie kompilierte Programme in deinen Release einzubinden, ziehe die Dateien mit Drag-and-Drop herüber oder wähle die Dateien manuell im Feld für Binärdateien.
   ![Bereitstellen einer DMG mit einem Release](/assets/images/help/releases/releases_adding_binary.gif)
10. Um Benutzer*innen darüber zu informieren, dass das Release nicht produktionsbereit und möglicherweise instabil ist, wähle **Dies ist eine Vorabversion** aus.
   ![Kontrollkästchen zum Markieren eines Releases als Vorabversion](/assets/images/help/releases/prerelease_checkbox.png) {%- ifversion fpt or ghec %}
11. Wähle optional **Diskussion für diesen Release erstellen** aus, und wähle dann das Dropdownmenü **Kategorie** aus. Dann klicke auf eine Kategorie für die Releasediskussion.
  ![Kontrollkästchen zum Erstellen einer Releasediskussion und ein Dropdownmenü zum Auswählen einer Kategorie](/assets/images/help/releases/create-release-discussion.png) {%- endif %}
12. Wenn du dein Release veröffentlichen möchtest, klicke auf **Release veröffentlichen**. Wenn du später an dem Release arbeiten möchtest, klicke auf **Entwurf speichern**.
   ![Die Schaltflächen „Release veröffentlichen“ und „Entwurf speichern“](/assets/images/help/releases/release_buttons.png)


## Konfigurieren von automatisch generierten Versionshinweisen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib `.github/release.yml` im Dateinamenfeld ein, um die Datei `release.yml` im Verzeichnis `.github` zu erstellen.
  ![Erstellen einer neuen Datei](/assets/images/help/releases/release-yml.png)
4. Gib in der Datei mithilfe der nachstehenden Konfigurationsoptionen in YAML die Pull-Request-Bezeichnungen und Autoren an, die du aus diesem Release ausschließen möchtest. Du kannst auch neue Kategorien erstellen und die Pull-Request-Bezeichnungen auflisten, die in jede dieser Kategorien einbezogen werden sollen.

### Konfigurationsoptionen

| Parameter | BESCHREIBUNG |
| :- | :- |
| `changelog.exclude.labels` | Eine Liste von Bezeichnungen, die ausschließen, dass ein Pull Request in den Versionshinweisen angezeigt wird. |
| `changelog.exclude.authors` | Eine Liste der Benutzer*innen- oder Bot-Anmeldehhandles, deren Pull Requests aus Versionshinweisen ausgeschlossen werden sollen. |
| `changelog.categories[*].title` | **Erforderlich.** Der Titel einer Kategorie von Änderungen in Versionshinweisen. |
| `changelog.categories[*].labels`| **Erforderlich.** Bezeichnungen, die einen Pull Request für diese Kategorie qualifizieren. Verwende `*` als Catch-All für Pull Requests, die keinen der vorherigen Kategorien entsprechen. |
| `changelog.categories[*].exclude.labels` | Eine Liste der Bezeichnungen, die eine Pull Request ausschließen, die in dieser Kategorie angezeigt wird. |
| `changelog.categories[*].exclude.authors` | Eine Liste der Benutzer*innen- oder Bot-Anmeldehhandles, deren Pull Requests aus dieser Kategorie ausgeschlossen werden sollen. |

### Beispielkonfigurationen

Eine Konfiguration für ein Repository, das SemVer-Releases kennzeichnet

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

Eine Konfiguration für ein Repository, das keine Pull Requests taggt, aber in der automatisierte {% data variables.product.prodname_dependabot %}-Pull Requests in Versionshinweisen getrennt werden sollen (`labels: '*'` ist erforderlich, um eine Catchall-Kategorie anzuzeigen)

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  categories:
    - title: 🏕 Features
      labels:
        - '*'
      exclude:
        labels:
          - dependencies
    - title: 👒 Dependencies
      labels:
        - dependencies
```
{% endraw %}

## Weiterführende Themen

- [Verwalten von Bezeichnungen](/issues/using-labels-and-milestones-to-track-work/managing-labels) 
