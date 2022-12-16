---
title: Erste Schritte mit der Git-Datenbank-API
intro: 'Die Git-Datenbank-API ermöglicht Lese- und Schreibzugriff auf unformatierte Git-Objekte in deiner Git-Datenbank auf {% data variables.product.product_name %} und zum Auflisten und Aktualisieren deiner Verweise (Branchheads und Tags).'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Git Database API
ms.openlocfilehash: b7044e299602de42a2c880df8da4a6f19ef9334b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145131343'
---
## Übersicht 

Dies ermöglicht es dir, viele Git-Funktionen über die API neu zu implementieren. Indem du rohe Objekte direkt in der Datenbank erstellst und Branchreferenzen aktualisierst, kannst du theoretisch sämtliche Git-Funktionen nutzen, ohne Git installiert zu haben.

Git-Datenbank-API-Funktionen geben einen `409 Conflict` zurück, wenn das Git-Repository leer oder nicht verfügbar ist.  Ein nicht verfügbares Repository bedeutet in der Regel, dass das Repository gerade von {% data variables.product.product_name %} erstellt wird. Bei einem leeren Repository kannst du den Endpunkt [Dateiinhalte erstellen oder aktualisieren](/rest/reference/repos#create-or-update-file-contents) verwenden, um Inhalte zu erstellen und das Repository zu initialisieren, damit du die Git-Datenbank-API verwenden kannst. Wende dich an {% data variables.contact.contact_support %}, wenn dieser Antwortstatus weiterhin auftritt.

![Übersicht über die Git-Datenbank](/assets/images/git-database-overview.png)

Weitere Informationen zur Git-Objektdatenbank findest du im Kapitel [Git Internals](http://git-scm.com/book/en/v1/Git-Internals) des Pro Git-Buchs.

Wenn du beispielsweise eine Änderung an einer Datei in deinem Repository committen möchtest, gehe wie folgt vor:

* Rufe das aktuelle Commitobjekt ab.
* Rufe die aufgewiesene Struktur ab.
* Rufe den Inhalt des Blobobjekts ab, über das die Struktur für diesen bestimmten Dateipfad verfügt.
* Ändere den Inhalt, stelle ein neues Blobobjekt mit diesem neuen Inhalt bereit, und erhalte einen Blob-SHA-Wert zurück.
* Stelle ein neues Strukturobjekt bereit, bei dem dieser Dateipfadzeiger durch deinen neuen Blob-SHA-Wert ersetzt ist, und erhalte einen Struktur-SHA-Wert zurück.
* Erstelle ein neues Commitobjekt mit dem aktuellen Commit-SHA-Wert als übergeordnetes Element und des neuen Struktur-SHA-Werts, und erhalte einen Commit-SHA-Wert zurück.
* Aktualisiere den Verweis deines Branch auf den neuen Commit-SHA-Wert.

Der Vorgang mag komplex erscheinen, ist jedoch recht einfach, wenn du das Modell verstehst. Außerdem eröffnet er dir eine Vielzahl an Möglichkeiten, wie du die API nutzen kannst.

## Überprüfen der Zusammenführbarkeit von Pull Requests

{% warning %}

**Warnhinweis:** Vertraue nicht darauf, Git direkt oder [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference)-Updates für `merge`-Git-Referenzen zu verwenden, da diese Inhalte ohne Vorankündigung veralten.

{% endwarning %}

Eine Verbrauchs-API muss explizit ein Pull Request anfordern, um einen _Test_-Mergecommit zu erstellen. Ein _Test_-Mergecommit wird erstellt, wenn du den Pull Request auf der Benutzeroberfläche anzeigst und die Schaltfläche „Zusammenführen“ angezeigt wird, oder wenn du mithilfe der REST-API ein Pull Request [abrufst](/rest/reference/pulls#get-a-pull-request), [erstellst](/rest/reference/pulls#create-a-pull-request) oder [bearbeitest](/rest/reference/pulls#update-a-pull-request). Ohne diese Anforderung veralten die `merge`-Git-Referenzen, bis jemand das nächste Mal den Pull Request anzeigt.

Wenn du derzeit Abrufmethoden verwendest, die veraltete `merge`-Git-Referenzen erzeugen, empfiehlt GitHub die folgenden Schritte, um die neuesten Änderungen aus dem Standardbranch abzurufen:

1. Empfange den Pull-Request-Webhook.
2. Rufe [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) auf, um einen Hintergrundauftrag zum Erstellen des Mergecommitkandidaten zu starten.
3. Rufe dein Repository mit [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) ab, um festzustellen, ob das `mergeable`-Attribut `true` oder `false` ist. Erst nachdem du die vorherigen Schritte ausgeführt hast, kannst du Git direkt oder [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) für Updates für `merge`-Git-Referenzen verwenden.
