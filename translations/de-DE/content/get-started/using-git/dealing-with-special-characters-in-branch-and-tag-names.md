---
title: Umgang mit Sonderzeichen in Branch- und Tagnamen
intro: 'Git ist sehr freizügig, wenn es darum geht, welche Zeichen in Branch- und Tagnamen erlaubt sind. Wenn du Git über eine Befehlszeilenshell verwendest, musst du eventuell Sonderzeichen mit Escape- oder Anführungszeichen versehen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Special characters in names
ms.openlocfilehash: e03b6ba963cef465f775620d353f14f0f5d92d36
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104584'
---
## Informationen zu Branch- und Tagnamen

Die meisten Repositorys verwenden einfache Branchnamen, z. B. `main` oder `update-icons`. Tagnamen folgen in der Regel ebenfalls einem einfachen Format, z. B. einer Versionsnummer wie `v1.2.3`. Sowohl Branchnamen als auch Tagnamen können auch das Pfadtrennzeichen (`/`) für die Struktur verwenden, z.  B. `area/item` oder `level-1/level-2/level-3`. Abgesehen von einigen Ausnahmen (z. B. kein Schrägstrich am Anfang oder Ende eines Namens oder aufeinanderfolgende Schrägstriche im Namen) gibt es bei Git sehr wenige Einschränkungen bei der Verwendung von Branch- und Tagnamen. Weitere Informationen findest du unter „[git-check-ref-format](https://git-scm.com/docs/git-check-ref-format)“ in der Git-Dokumentation.

## Gründe für die Kennzeichnung von Sonderzeichen mit Escapezeichen

Bei Verwendung einer CLI kann es vorkommen, dass ein Branch- oder Tagname Sonderzeichen enthält, die eine besondere Bedeutung für die Shellumgebung haben. Wenn du diese Zeichen sicher in einem Git-Befehl verwenden möchtest, musst du sie in Anführungs- oder Escapezeichen setzen. Andernfalls hat der Befehl möglicherweise eine unbeabsichtigte Wirkung.

Beispielsweise wird das Zeichen `$` von vielen Shells verwendet, um auf eine Variable zu verweisen. Die meisten Shells würden einen gültigen Branchnamen wie `hello-$USER` als das Wort „Hallo“ gefolgt von einem Bindestrich gefolgt vom aktuellen Wert der `USER`-Variable interpretieren und nicht als die Literalzeichenfolge `hello-$USER`. Wenn ein Branchname das Zeichen `$` enthält, muss die Shell davon abgehalten werden, es als Variablenverweis zu erweitern. Genauso wird ein Semikolon (`;`) in einem Branchnamen von den meisten Shells als Befehlstrennzeichen interpretiert. Es muss also in Anführungs- oder Escapezeichen gesetzt werden.

## Kennzeichnung von Sonderzeichen in Branch- und Tagnamen mit Escapezeichen

Branch- und Tagnamen, die Sonderzeichen enthalten, können in den meisten Fällen in einfache Anführungszeichen gesetzt werden, z. B. `'hello-$USER'`.

* In der [Bash](https://www.gnu.org/software/bash/)-Shell wird durch Einschließen einer Zeichenfolge in einfache Anführungszeichen der Literalwert der eingeschlossenen Zeichen beibehalten.
* [Zsh](https://www.zsh.org/) verhält sich ähnlich wie Bash, doch ist dieses Verhalten über die Option `RC_QUOTES` konfigurierbar.
* [PowerShell](https://microsoft.com/powershell) behandelt in einfache Anführungszeichen gesetzte Zeichen ebenfalls literal.

Fälle, in denen der Branch- oder Tagname selbst ein einfaches Anführungszeichen enthält, bilden bei diesen Shells die wesentliche Ausnahme. In diesen Fällen solltest du die offizielle Dokumentation für die Shell zurate ziehen:

* [Bash-Dokumentation](https://www.gnu.org/software/bash/manual/)
* [Zsh-Dokumentation](https://zsh.sourceforge.io/Doc/)
* [Fish-Dokumentation](https://fishshell.com/docs/current/)
* [PowerShell-Dokumentation](https://docs.microsoft.com/en-gb/powershell/)

## Benennen von Branches und Tags

Erstelle nach Möglichkeit Branch- und Tagnamen, die keine Sonderzeichen enthalten, da diese in Escapezeichen gesetzt werden müssten. Der folgende Standardzeichensatz ist für Branch- und Tagnamen sicher:

* Das englische Alphabet (`a` bis `z` und `A` bis `Z`)
* Zahlen (`0` bis `9`)
* Eine begrenzte Reihe von Interpunktionszeichen:
  * Punkt (`.`)
  * Bindestrich (`-`)
  * Unterstrich (`_`)
  * Schrägstrich (`/`)

Um Verwirrung zu vermeiden, solltest du Branchnamen mit einem Buchstaben beginnen.
