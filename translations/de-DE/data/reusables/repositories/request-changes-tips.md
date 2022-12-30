---
ms.openlocfilehash: e4a946e027ffef0f6e52a55d3591eb0a00556625
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145090565"
---
{% tip %}

**Tipps**:
- Wenn erforderliche Reviews aktiviert sind und ein Mitarbeiter mit _Schreib_-, _Administrator_- oder _Besitzer_-Zugriff auf das Repository einen Review sendet, in dem Änderungen angefordert werden, kann der Pull Request erst gemergt werden, wenn derselbe Mitarbeiter einen weiteren Review sendet, in dem die Änderungen am Pull Request genehmigt werden.
- Repository-Inhaber und -Administratoren können einen Pull Request sogar dann zusammenführen, wenn er keinen genehmigenden Review erhalten hat oder wenn ein Reviewer, der die Änderungen verlangt hat, die Organisation verlassen hat oder nicht verfügbar ist.
- Wenn sowohl erforderliche Reviews wie das Verwerfen veralteter Reviews aktiviert sind und ein den Code verändernder Commit an den Branch eines genehmigten Pull Requests übermittelt wird, dann wird die Genehmigung verworfen. Der Pull Request muss erneut überprüft und genehmigt werden, bevor er zusammengeführt werden kann.
- Wenn verschiedene offene Pull Requests jeweils einen Head-Branch aufweisen, der auf denselben Commit verweist, kannst Du sie nicht zusammenführen, wenn der Review bei einer oder bei beiden ausstehend ist oder abgelehnt wurde.
- Wenn dein Repository Genehmigungsreviews von Personen mit Schreib- oder Administratorberechtigungen erfordert, werden alle Genehmigungen von Personen mit diesen Berechtigungen mit einem grünen Häkchen markiert, Genehmigungen von Personen ohne diese Berechtigungen erhalten ein graues Häkchen. Genehmigungen mit einem grauen Häkchen wirken sich nicht darauf aus, ob der Pull Request gemergt werden kann.
- Ersteller von Pull Requests können ihre Pull Requests nicht selbst genehmigen.

{% endtip %}
