---
title: Gists erstellen
intro: 'Du kannst zwei Arten von Gists erstellen: {% ifversion ghae %}intern{% else %}öffentlich{% endif %} und geheim. Erstelle {% ifversion ghae %}ein internes{% else %}ein öffentliches{% endif %} Gist, wenn du bereit bist, deine Ideen mit {% ifversion ghae %}Unternehmensmitgliedern{% else %}der Welt{% endif %} oder einem geheimen Gist zu teilen, wenn du es noch nicht bist.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists
  - /articles/cannot-delete-an-anonymous-gist
  - /articles/deleting-an-anonymous-gist
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
  - /github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e0ac449dc71bb0c525ee1559b82e509a281e55ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068679'
---
## Informationen zu Gists

Jeder Gist ist ein Git-Repository, d. h., er kann geforkt und geklont werden. {% ifversion not ghae %}Wenn du bei der Erstellung von Gists bei {% data variables.product.product_name %} angemeldet{% else %}{% endif %} bist, wird das Gist mit deinem Konto verknüpft und in der Liste deiner Gists angezeigt, sobald du deine {% data variables.gists.gist_homepage %} aufrufst.

Gists können {% ifversion ghae %}intern{% else %}öffentlich{% endif %} oder geheim sein. {% ifversion ghae %}Interne{% else %}Öffentliche{% endif %} Gists werden unter {% data variables.gists.discover_url %} angezeigt, wo {% ifversion ghae %}Unternehmensmitglieder{% else %}Benutzer*innen{% endif %} neue Gists durchsuchen können, sobald diese erstellt wurden. Gists können auch durchsucht werden. Du kannst sie also verwenden, wenn du möchtest, dass andere Benutzer*innen deine Arbeit finden und ansehen können.

Geheime Gists werden nicht unter {% data variables.gists.discover_url %} angezeigt und können nicht durchsucht werden. Geheime Gists sind nicht privat. Wenn du die URL eines geheimen Gists an {% ifversion ghae %}ein anderes Unternehmensmitglied{% else %}eine*n Freund*in{% endif %} sendest, ist es für diese Benutzer*innen sichtbar. Wenn jedoch {% ifversion ghae %}ein anderes Unternehmensmitglied{% else %}eine Person, die du nicht kennst{% endif %} die URL entdeckt, ist dein Gist auch für diese Benutzer*innen sichtbar. Um deinen Code vor neugierigen Blicken zu schützen, solltest du gegebenenfalls stattdessen [ein privates Repository](/articles/creating-a-new-repository) erstellen.

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

Wenn dein Websiteadministrator den privaten Modus deaktiviert hat, kannst du auch anonyme Gists verwenden, die öffentlich oder geheim sein können.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

In folgenden Fällen erhältst du eine Benachrichtigung:
- Du bist der Autor eines Gists.
- Jemand erwähnt Dich in einem Gist.
- Klicke oben in der Liste der Gists auf **Abonnieren**, um ein Gist zu abonnieren.

{% ifversion fpt or ghes or ghec %}

Du kannst Gists an deinem Profil anheften, damit andere Personen sie leichter sehen. Weitere Informationen findest du unter [Anheften von Elementen an dein Profil](/articles/pinning-items-to-your-profile).

{% endif %}

Um nach {% ifversion ghae %}internen{% else %}öffentlichen{% endif %} Gists zu suchen, die von anderen Benutzer*innen erstellt wurden, klickst du auf der {% data variables.gists.gist_homepage %} auf **Alle Gists**. Daraufhin wird eine Seite mit allen Gists angezeigt, die nach dem Zeitpunkt der Erstellung oder Aktualisierung sortiert sind. Mit der {% data variables.gists.gist_search_url %} kannst du Gists auch nach Sprache suchen. Für die Suche nach Gists wird dieselbe Suchsyntax verwendet wie bei der [Codesuche](/search-github/searching-on-github/searching-code).

Da es sich bei Gists um Git-Repositorys handelt, kannst du ihren vollständigen Commit-Verlauf anzeigen, einschließlich der Diffs. Du kannst Gists auch forken oder klonen. Weitere Informationen findest du unter [Forken und Klonen von Gists](/articles/forking-and-cloning-gists).

Klicke im oberen Bereich des Gists auf die Schaltfläche **ZIP herunterladen**, um eine ZIP-Datei eines Gists herunterzuladen. Du kannst einen Gist in jedem Textfeld einbetten, das JavaScript unterstützt, z. B. in Blog-Beiträgen. Um den Einbettungscode abzurufen, klickst du neben der **Einbettungs-URL** eines Gists auf das Symbol für die Zwischenablage. Zum Einbetten einer bestimmten Gistdatei fügst du `?file=FILENAME` an die **Einbettungs-URL** an.

{% ifversion fpt or ghec %}

Gists unterstützen den Gebrauch von geoJSON-Dateien. Diese Karten werden in eingebetteten Gists angezeigt, sodass du die Karten leicht freigeben und einbetten kannst. Weitere Informationen findest du unter [Arbeiten mit Nicht-Codedateien](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github).

{% endif %}

## Einen Gist erstellen

Führe die unten aufgeführten Schritte aus, um ein Gist zu erstellen.

{% note %}

Gists können auch über die {% data variables.product.prodname_cli %} erstellt werden. Weitere Informationen findest du unter „[`gh gist create`](https://cli.github.com/manual/gh_gist_create)“ in der Dokumentation zur {% data variables.product.prodname_cli %}.

Alternativ kannst du eine Textdatei per Drag & Drop von deinem Desktop direkt in den Editor ziehen.

{% endnote %}

1. Melde dich bei {% data variables.product.product_name %} an.
2. Navigiere zu deiner {% data variables.gists.gist_homepage %}.
3. Gib eine optionale Beschreibung und einen Namen für deinen Gist ein.
![Name und Beschreibung des Gists](/assets/images/help/gist/gist_name_description.png)

4. Gib den Text für den Gist in das Gist-Textfeld ein.
![Gist-Textfeld](/assets/images/help/gist/gist_text_box.png)

5. Optional klickst du zum Erstellen {% ifversion ghae %}eines internen{% else %}eines öffentlichen{% endif %} Gists auf {% octicon "triangle-down" aria-label="The downwards triangle icon" %} und dann auf **{% ifversion ghae %}Internes{% else %}Öffentliches{% endif %} Gist erstellen**.
![Drop-down menu to select gist visibility]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Klicke auf **Geheimes Gist erstellen** oder **{% ifversion ghae %}Internes{% else %}Öffentliches{% endif %} Gist erstellen**.
  ![Schaltfläche zum Erstellen von Gists](/assets/images/help/gist/create-secret-gist-button.png)
