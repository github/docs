---
title: Änderungsverlauf eines Wikis anzeigen
intro: 'Da es sich bei Wikis um Git-Repositorys handelt, ist jede von Dir vorgenommene Änderung ein Commit, den du anzeigen kannst.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: View a history of changes
ms.openlocfilehash: 1c5330a9067749b4bf0d1f2ed4e6fb9f10b38602
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145090313'
---
## Wiki-Verlauf anzeigen

Zum Wiki-Verlauf zählen:
- Der Benutzer, der die Änderung durchgeführt hat
- Die von ihm bereitgestellte Commit-Mitteilung
- Der Zeitpunkt der Änderung

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Navigiere auf der Wiki-Seitenleiste zur Seite, deren Verlauf Du anzeigen möchtest.
4. Klicke im oberen Bereich des Wikis auf den Revisionslink.
   ![Wiki-Revisionslink](/assets/images/help/wiki/wiki_revision_link.png)

## Vorherigen Inhalt anzeigen

In der Wiki-Verlaufstabelle kannst du auf einen [SHA-1-Hash](http://en.wikipedia.org/wiki/SHA-1) (die Abfolge von Buchstaben und Zahlen ganz rechts) klicken, um eine Wiki-Seite so anzuzeigen, wie sie zu einem bestimmten Zeitpunkt vorlag.

![Wiki-SHA-Nummer](/assets/images/help/wiki/wiki_sha_number.png)

## Zwei Revisionen vergleichen

1. Wähle zwei Zeilen aus, die verglichen werden sollen.
2. Klicke oben in der Verlaufstabelle auf **Überarbeitungen vergleichen**.
   ![Wiki-Schaltfläche zum Vergleichen von Überarbeitungen](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Du wirst ein Diff der Änderungen sehen, das aufzeigt, welche Zeilen hinzugefügt, entfernt und geändert wurden.

## Vorherige Änderungen rückgängig machen

Du kannst nur dann Änderungen rückgängig machen, wenn Du berechtigt bist, das Wiki zu bearbeiten.

1. Wähle eine Zeile aus, die zurückgesetzt werden soll.
2. Klicke oben in der Verlaufstabelle auf **Überarbeitungen vergleichen**.
   ![Wiki-Schaltfläche zum Vergleichen von Überarbeitungen](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Du wirst ein Diff der Änderungen sehen, das aufzeigt, welche Zeilen hinzugefügt, entfernt und geändert wurden.
   ![Diff der Wiki-Überarbeitungen](/assets/images/help/wiki/wiki_revision_diff.png)
4. Wenn du die neueren Änderungen zurücksetzen möchtest, klicke auf **Änderungen zurücksetzen**.
   ![Wiki-Schaltfläche zum Rückgängigmachen von Änderungen](/assets/images/help/wiki/wiki_revert_changes.png)
