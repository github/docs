---
title: Grundlegendes zur Syntax für die Codesuche (Betaversion) auf GitHub
intro: 'Du kannst Suchabfragen für die gewünschten Ergebnisse mit spezialisierten Codequalifizierern, regulären Ausdrücken und booleschen Vorgängen erstellen.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 098da2b7fe8a8c5466805c583e6b029b5b9b58c1
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159673'
---
{% note %}

**Hinweis:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## Informationen zur Abfragestruktur der neuen Codesuche (Betaversion)

Die Suchsyntax in diesem Artikel gilt nur für die Suche nach Code, wenn die neue Codesuche (Betaversion) aktiviert ist. {% data reusables.search.non-code-search-explanation %}

Suchabfragen bestehen aus Suchbegriffen, die Text enthalten, nach dem du suchen möchtest, sowie aus Qualifizierern, die die Suche einschränken. 

Ein reiner Begriff ohne Qualifizierer entspricht entweder dem Inhalt einer Datei oder dem Pfad der Datei. 

Beispielsweise wird die folgende Abfrage:

```
http-push
```

Die obige Abfrage ermittelt die Datei `docs/http-push.txt`, auch wenn sie nicht den Begriff `http-push` enthält. Sie ermittelt außerdem eine Datei namens `example.txt`, wenn sie den Begriff `http-push` enthält. 

Du kannst mehrere Begriffe durch Leerzeichen getrennt eingeben, um nach Dokumenten zu suchen, die beide Begriffe enthalten. 

Beispielsweise wird die folgende Abfrage:

```
sparse index
```

Die Suchergebnisse beinhalten alle Dokumente, die die beiden Begriffe `sparse` und `index` in beliebiger Reihenfolge enthalten. Sie beinhalten beispielsweise eine Datei, die `SparseIndexVector` enthält, eine Datei mit dem Ausdruck `index for sparse trees` und sogar eine Datei namens `index.txt`, die den Begriff `sparse` enthält.  

Die Suche nach mehreren Begriffen, die durch Leerzeichen getrennt sind, entspricht der Suche nach `hello AND world`. Andere boolesche Vorgänge, z. B. `hello OR world`, werden in der neuen Codesuche (Betaversion) ebenfalls unterstützt. Weitere Informationen zu booleschen Vorgängen findest du unter [Verwenden boolescher Vorgänge](#using-boolean-operations).

Die neue Codesuche (Betaversion) unterstützt auch die Suche nach einer genauen Zeichenfolge, einschließlich Leerzeichen. Weitere Informationen findest du unter [Abfragen einer genauen Übereinstimmung](#query-for-an-exact-match).

Du kannst die Codesuche mit spezialisierten Qualifizierern wie `repo:`, `language:` und `path:` einschränken. Weitere Informationen zu den Qualifizierern, die du in der neuen Codesuche (Betaversion) verwenden kannst, findest du unter [Verwenden von Qualifizierern](#using-qualifiers).

Du kannst auch reguläre Ausdrücke in deinen Suchvorgängen verwenden, indem du den Ausdruck mit umgekehrten Schrägstrichen umschließt. Weitere Informationen zur Verwendung regulärer Ausdrücke findest du unter [Verwendung regulärer Ausdrücke](#using-regular-expressions).

## Abfragen einer genauen Übereinstimmung

Um nach einer genauen Zeichenfolge zu suchen, einschließlich Leerzeichen, kannst du die Zeichenfolge in Anführungszeichen setzen. Beispiel:

```
"sparse index"
```

Um nach einem Ausdruck zu suchen, der ein Anführungszeichen enthält, kannst du das Anführungszeichen mit einem umgekehrten Schrägstrich als Escapezeichen versehen. Wenn du beispielsweise die genaue Zeichenfolge `name = "tensorflow"` findest möchtest, kannst du wie folgt suchen:

```
"name = \"tensorflow\""
```

Du kannst auch Zeichenfolgen in Anführungszeichen in Qualifizierern verwenden, z. B.:

```
path: git language: "protocol buffers"
```

## Verwenden boolescher Vorgänge

Die neue Codesuche (Betaversion) unterstützt boolesche Ausdrücke. Du kannst die Operatoren `AND`, `OR` und `NOT` verwenden, um Suchbegriffe zu kombinieren.

Standardmäßig sind benachbarte Begriffe, die durch Leerzeichen getrennt sind, gleichbedeutend mit der Verwendung des `AND`-Operators. Die Suchabfrage `sparse index` ist beispielsweise identisch mit `sparse AND index`. Das bedeutet, dass die Suchergebnisse alle Dokumente beinhalten, die sowohl den Begriff `sparse` als auch den Begriff `index` in beliebiger Reihenfolge enthalten.

Um nach Dokumenten zu suchen, die entweder den einen oder den anderen Ausdruck enthalten, kannst du den `OR`-Operator verwenden. Die folgende Abfrage findet z. B. Dokumente, die entweder `sparse` oder `index`enthalten:

```
sparse OR index
```

Um Dateien aus den Suchergebnissen auszuschließen, kannst du den `NOT`-Operator verwenden. Zum Ausschließen einer Datei im Verzeichnis `__testing__` kannst du etwa wie folgt suchen:

```
"fatal error" NOT path:__testing__
```

Du kannst Klammern verwenden, um komplexere boolesche Ausdrücke auszudrücken. Beispiel:

```
(language:ruby OR language:python) AND NOT path:"/tests/"
```

## Verwenden von Qualifizierern

Du kannst spezielle Schlüsselwörter verwenden, um deine Suche zu qualifizieren.
- [Qualifizierer für Repositorys](#repository-qualifier)
- [Qualifizierer für Organisationen und Benutzer](#organization-and-user-qualifiers)
- [Qualifizierer für Sprachen](#language-qualifier)
- [Pfadqualifizierer](#path-qualifier)
- [Symbolqualifizierer](#symbol-qualifier)
- [Inhaltsqualifizierer](#content-qualifier)
- [Is-Qualifizierer](#is-qualifier)

### Qualifizierer für Repositorys

Verwende für die Suche in einem Repository den Qualifizierer `repo:`. Du musst den vollständigen Repositorynamen angeben, einschließlich des Besitzers. Beispiel:

```
repo:github/linguist
```

Um in mehreren Repositorys zu suchen, kannst du mehrere `repo:`-Qualifizierer mit dem booleschen Operator `OR` kombinieren. Zum Beispiel:

```
repo:github/linguist OR repo:tree-sitter/tree-sitter
```

{% note %}

**Hinweis:** Die Betaversion der neuen Codesuche unterstützt derzeit keine regulären Ausdrücke oder Teilübereinstimmungen für Repositorynamen. Daher musst du den gesamten Repositorynamen (einschließlich des Benutzerpräfixes) eingeben, damit der Qualifizierer `repo:` funktioniert.

{% endnote %}

### Qualifizierer für Organisationen und Benutzer

Verwende den Qualifizierer `org:`, um nach Dateien innerhalb einer Organisation zu suchen. Beispiel:

```
org:github
```

Verwende den Qualifizierer `user:`, um nach Dateien innerhalb eines persönlichen Kontos zu suchen. Zum Beispiel:

```
user:octocat
```

{% note %}

**Hinweis:** Die Betaversion der neuen Codesuche unterstützt derzeit keine regulären Ausdrücke oder Teilübereinstimmungen für Organisations- oder Benutzernamen. Daher musst du den gesamten Organisations- oder Benutzernamen eingeben, damit der Qualifizierer funktioniert.

{% endnote %}


### Qualifizierer für Sprachen

Verwende den Qualifizierer `language:`, um die Suche auf eine bestimmte Sprache einzugrenzen. Beispiel: 

```
language: ruby OR language:cpp OR language:csharp
```

Eine vollständige Liste der unterstützten Sprachnamen findest du in [languages.yaml](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) unter [github/linguist](https://github.com/github/linguist). Wenn deine bevorzugte Sprache nicht in der Liste enthalten ist, kannst du einen Pull Request öffnen, um sie hinzuzufügen.

### Pfadqualifizierer

Verwende den Qualifizierer `path:`, um innerhalb von Dateipfaden zu suchen. Dadurch werden Dateien gesucht, die den Begriff an einer beliebigen Stelle im Dateipfad enthalten. Um beispielsweise Dateien zu suchen, die den Begriff `unit_tests` in ihrem Pfad enthalten, verwende Folgendes:

```
path:unit_tests
```
 Die obige Abfrage ermittelt sowohl `src/unit_tests/my_test.py` als auch`src/docs/unit_tests.md`, da beide an einer beliebigen Stelle in ihrem Pfad `unit_test` enthalten. 

 Um nur einen bestimmten Dateinamen (und nicht Teil des Pfads) zu suchen, kannst du einen regulären Ausdruck verwenden:

 ```
 path:/(^|\/)README\.md$/
 ```
Beachte, dass `.` im Dateinamen mit Escapezeichen versehen ist, da `.` für reguläre Ausdrücke eine besondere Bedeutung hat. Weitere Informationen zur Verwendung regulärer Ausdrücke findest du unter [Verwendung regulärer Ausdrücke](#using-regular-expressions).

<br>

Du kannst auch einige eingeschränkte Glob-Ausdrücke im Qualifizierer `path:` verwenden.

Um beispielsweise nach Dateien mit der Erweiterung `txt` zu suchen, kannst du Folgendes verwenden:

```
path:*.txt
```
<br>
Um in einem Verzeichnis vom Typ `src` nach JavaScript-Dateien zu suchen, kannst du Folgendes verwenden:

```
path:src/*.js
```

- Standardmäßig sind Glob-Ausdrücke nicht am Anfang des Pfads verankert, sodass der obige Ausdruck weiterhin einem Pfad wie `app/src/main.js` entspricht. Wenn du dem Ausdruck jedoch das Präfix `/` voranstellst, erfolgt die Verankerung am Anfang. Beispiel:

    ```
    path:/src/*.js
    ```
- Beachte, dass `*` nicht dem Zeichen `/` entspricht, sodass im obigen Beispiel alle Ergebnisse direkte Nachfolger des Verzeichnisses `src` sind. Zum Abgleich innerhalb von Unterverzeichnissen kannst du `**` verwenden, damit die Ergebnisse tief geschachtelte Dateien wie `/src/app/testing/utils/example.js` enthalten. Beispiel:

    ```
    path:/src/**/*.js
    ```
<br>

Du kannst auch das globale Zeichen `?` verwenden. Zum Abgleich des Pfads `file.aac` oder `file.abc` kannst du beispielsweise Folgendes verwenden:

```
path:*.a?c
```
<br>
Um nach einem Dateinamen zu suchen, der ein Sonderzeichen wie `*` oder `?` enthält, verwende einfach eine Zeichenfolge in Anführungszeichen:

```
path:"file?"
```

Da Glob-Ausdrücke für Zeichenfolgen in Anführungszeichen deaktiviert sind, gleicht die obige Abfrage nur Pfade ab, die die Literalzeichenfolge `file?` enthalten. 

### Symbolqualifizierer

Du kannst mit dem Qualifizierer `symbol:` nach Symboldefinitionen im Code suchen, z. B. nach Funktions- oder Klassendefinitionen. Die Symbolsuche basiert auf der Analyse deines Codes mithilfe des Open Source-Parserökosystems [Tree-Sitter](https://github.com/tree-sitter), sodass keine zusätzliche Einrichtung oder Buildtoolintegration erforderlich ist.

So suchst du beispielsweise nach einem Symbol namens `WithContext`:

```
language:go symbol:WithContext
```

In einigen Sprachen kannst du mithilfe eines Präfixes (z. B. einem Präfix ihres Klassennamens) nach Symbolen suchen. Beispielsweise kannst du für die Methode `deleteRows` in einer Struktur vom Typ `Maint` nach `symbol:Maint.deleteRows` suchen, wenn du Go verwendest. In Rust kannst du nach `symbol:Maint::deleteRows` suchen.

Du kannst auch reguläre Ausdrücke mit dem Symbolqualifizierer verwenden. Die folgende Abfrage findet z. B. Konvertierungen, die Personen in Rust für den Typ `String` implementiert haben:

```
language:rust symbol:/^String::to_.*/
```

Beachte, dass mit diesem Qualifizierer nur nach Definitionen und nicht nach Verweisen gesucht wird und noch nicht alle Symboltypen und Sprachen vollständig unterstützt werden. Die Symbolextraktion wird für die folgenden Sprachen unterstützt: 

- C#
- Python
- Go
- Java
- JavaScript
- TypeScript
- PHP
- Protokollpuffer
- Ruby
- Rust

Wir arbeiten daran, Unterstützung für weitere Sprachen hinzuzufügen. Wenn du uns dabei unterstützen möchtest, kannst du Unterstützung für deine Sprache im Open Source-Parserökosystem [Tree-sitter](https://github.com/tree-sitter) hinzufügen, auf dem die Symbolsuche basiert.

### Inhaltsqualifizierer

Standardmäßig durchsuchen reine Begriffe sowohl Pfade als auch Dateiinhalte. Verwende den Qualifizierer `content:`, um eine Suche so einzuschränken, dass sie dem Inhalt einer Datei und nicht den Dateipfaden entspricht. Beispiel:

```
content:README.md
```

Diese Abfrage würde nur Dateien ermitteln, die den Begriff `README.md` enthalten, und nicht Dateien namens `README.md`. 

### Is-Qualifizierer

Zum Filtern basierend auf Dokumenteigenschaften kannst du den Qualifizierer `is:` verwenden. Derzeit wird in diesem Qualifizierer nur der Wert `archived` unterstützt. Er grenzt die Suche auf archivierte Repositorys ein. Beispiel:

```
path:/MIT.txt is:archived
```

Beachte, dass der Qualifizierer `is:` mit dem `NOT`-Operator umgekehrt werden kann. Für die Suche nach nicht archivierten Repositorys kannst du Folgendes verwenden:

```
log4j NOT is:archived
```

## Verwendung regulärer Ausdrücke

Die neue Codesuche (Betaversion) unterstützt reguläre Ausdrücke, um nach Mustern im Code zu suchen. Du kannst reguläre Ausdrücke sowohl in reinen Suchbegriffen als auch in vielen Qualifizierern verwenden, indem du den regulären Ausdruck in umgekehrte Schrägstriche setzt. 

Um beispielsweise nach dem regulären Ausdruck `sparse.*index` zu suchen, verwendest du Folgendes:

```
/sparse.*index/
```

Beachte, dass du alle Schrägstriche innerhalb des regulären Ausdrucks mit Escapezeichen versehen musst. Um beispielsweise nach Dateien im Verzeichnis `App/src` zu suchen, verwendest du Folgendes:

```
/^App\/src\//
```
