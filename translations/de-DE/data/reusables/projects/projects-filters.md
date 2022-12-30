---
ms.openlocfilehash: 9106c4a2e538e62d23cd0aa2e417758376f6ffcd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158853"
---
- Um nach einer Übereinstimmung mehrerer Werte zu filtern (eine OR-Abfrage), trennst du die Werte mit einem Komma. Zum Beispiel werden durch `label:"good first issue",bug` alle Issues mit der Bezeichnung `good first issue` oder `bug` aufgelistet.
- Um nach fehlenden Werten zu filtern, stellst du deinem Filter `-` voran. Zum Beispiel zeigt `-label:"bug"` nur Elemente an, die nicht die Bezeichnung `bug` aufweisen.
- Um nach allen fehlenden Werten zu filtern, gibst du `no:` gefolgt von dem Feldnamen ein. Mit `no:assignee` werden zum Beispiel nur Elemente angezeigt, die keine zugewiesenen Personen enthalten.
- Um nach dem Zustand zu filtern, gibst du `is:` ein. Zum Beispiel: `is: issue` oder `is:open`.
- Trenne mehrere Filter durch ein Leerzeichen. Zum Beispiel werden mit `status:"In progress" -label:"bug" no:assignee` nur Elemente angezeigt, die den Status `In progress` aufweisen, nicht die Bezeichnung `bug` tragen und keine zugewiesene Person umfassen.
- Um nach der vorherigen, aktuellen oder nächsten Iteration eines Iterationsfelds zu filtern, verwende `@previous`, `@current` oder `@next`. Beispiel: `iteration:@current`.
- Um nach Objekten zu filtern, die der anzeigenden Person zugewiesen sind, verwende `@me`. Beispiel: `assignee:@me`. Alle Personen, die diese Ansicht verwenden, sehen die ihnen zugewiesenen Elemente.
- Um danach zu filtern, wann ein Element zuletzt aktualisiert wurde, verwendest du `last-updated:` gefolgt von der Anzahl der Tage. Dieser Filter unterstützt nur `{number}days` (oder `1day` für einen einzelnen Tag) als Einheit. Beispielsweise zeigt `last-updated:7days` nur Elemente an, die vor sieben oder mehr Tagen aktualisiert wurden.
- Um Datums- und Zahlenfelder zu filtern, verwendest du die Bereichsabfragen `>`, `>=`, `<`, `<=` und `..`. Beispiel: `target:2022-03-01..2022-03-15`. Weitere Informationen findest du unter [Grundlagen der Suchsyntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax). {% ifversion projects-v2-tasklists %}
- Um nach Issues zu filtern, die durch einen angegebenen Issue nachverfolgt werden, verwende `tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"`, und ersetze `<OWNER>` durch den Repositorybesitzer, `<REPO>` durch den Repositorynamen und `<ISSUE NUMBER>` durch die Nummer des Issues. {% endif %}
