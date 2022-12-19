---
title: Richtlinien für Repository-Mitarbeiter festlegen
intro: 'Du kannst Richtlinien erstellen, wie Personen zu Deinem Projekt beitragen sollten.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
shortTitle: Contributor guidelines
ms.openlocfilehash: b418c5a3d10f8b8f7572f33b17a9ebfbb3de27d3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578788'
---
## Informationen zu Beitragsrichtlinien
Um deine Projektmitarbeiter bei ihrer Arbeit zu unterstützen, kannst du dem Stammverzeichnis, dem Verzeichnis `docs` oder dem Verzeichnis `.github` deines Projektrepositorys ein Dokument mit Beitragsrichtlinien hinzufügen. Bei der Eröffnung eines Pull-Requests oder der Erstellung eines Issues wird dem betreffenden Mitarbeiter dann ein Link zu dieser Datei angezeigt. Der Link zu den Beitragsrichtlinien wird auch auf der Seite `contribute` deines Repositorys angezeigt. Ein Beispiel für eine Seite `contribute` findest du unter [github/docs/contribute](https://github.com/github/docs/contribute). 

![Beitragsrichtlinien](/assets/images/help/pull_requests/contributing-guidelines.png)

Für den Repositoryinhaber stellen Beitragsrichtlinien eine Möglichkeit dar, Mitarbeitern die Regeln für Beiträge zu kommunizieren.

Mitarbeitern helfen die Richtlinien, korrekt formulierte Pull Requests einzureichen und sinnvolle Issues zu eröffnen.

Sowohl Inhaber als auch Mitarbeiter sparen dank Beitragsrichtlinien Zeit und Mühen, die durch fehlerhaft formulierte Pull Requests oder Issues entstehen, die abgelehnt und erneut eingereicht werden müssen.

{% ifversion fpt or ghes or ghec %}

Du kannst Standardvorlagen für Beitragsrichtlinien für dein Organisationskonto{% ifversion fpt or ghes or ghec %} oder dein persönliches Konto{% endif %} festlegen. Weitere Informationen findest du unter [Erstellen einer Standard-Communityintegritätsdatei](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

{% endif %}

{% tip %}

**Tipp**: Repositorybetreuer können spezifische Richtlinien für Issues festlegen, indem sie eine Issue- oder Pull Request-Vorlage für das Repository einrichten. Weitere Informationen findest du unter [Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates).

{% endtip %}

## Hinzufügen einer Datei *CONTRIBUTING*

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Entscheide, ob deine Beitragsrichtlinien im Stammverzeichnis, im Verzeichnis `docs` oder im Verzeichnis `.github` deines Repositorys gespeichert werden sollen. Gib danach im Feld „Filename“ (Dateiname) den Namen und die Erweiterung der Datei ein. Bei Dateinamen für Beitragsrichtlinien wird die Groß-/Kleinschreibung nicht berücksichtigt. Dateien werden im Rich-Text-Format gerendert, wenn die Dateierweiterung einem unterstützten Format entspricht. Weitere Informationen findest du unter [Arbeiten mit Nicht-Codedateien](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents).
  ![Neuer Dateiname](/assets/images/help/repository/new-file-name.png)
    - Um deine Beitragsrichtlinien im Stammverzeichnis deines Repositorys sichtbar zu machen, gib *CONTRIBUTING* ein.
    - Um deine Beitragsrichtlinien im Verzeichnis `docs` deines Repositorys sichtbar zu machen, gib *docs/* ein, um das neue Verzeichnis zu erstellen, um gibt dann *CONTRIBUTING* ein.
    - Enthält ein Repository mehrere *CONTRIBUTING*-Dateien, wird die in Links angezeigte Datei in der folgenden Reihenfolge aus den Speicherorten ausgewählt: Zuerst wird das `.github`-Verzeichnis, dann das Stammverzeichnis des Repositorys und schließlich das `docs`-Verzeichnis berücksichtigt.
4. Füge der neuen Datei Beitragsrichtlinien hinzu. Diese könnten beinhalten:
    - Schritte zur Erstellung korrekt formulierter Issues oder Pull Requests.
    - Links zu externer Dokumentation, zu Verteilerlisten oder zu einem Verhaltenskodex.
    - Erwartungen der Community und Verhaltensregeln
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Beispiele für Beitragsrichtlinien

Wenn Du nun nicht sicher bist, was Du hier festlegen sollst, findest Du nachfolgend einige gute Beispiele für Beitragsrichtlinien:

- Die [Beitragsrichtlinien](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) des Atom-Editors.
- Die [Beitragsrichtlinien](https://github.com/rails/rails/blob/main/CONTRIBUTING.md) für Ruby on Rails.
- Die [Beitragsrichtlinien](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md) von Open Government.

## Weiterführende Themen
- Abschnitt [Starten eines Open-Source-Projekts](https://opensource.guide/starting-a-project/) in den Open Source Guides{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- [Hinzufügen einer Lizenz zu einem Repository](/articles/adding-a-license-to-a-repository){% endif %}
