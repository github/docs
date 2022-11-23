---
title: Informationen in Tabellen organisieren
intro: 'Du kannst Tabellen erstellen, um Informationen in Kommentaren, Issues, Pull Requests und Wikis zu organisieren.'
redirect_from:
  - /articles/organizing-information-with-tables
  - /github/writing-on-github/organizing-information-with-tables
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Organized data with tables
ms.openlocfilehash: 6045e9f27432233cbfcdb654c303bc02ea5666cd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068604'
---
## Erstellen einer Tabelle

Du kannst Tabellen mit Pipes `|` und Bindestrichen `-` erstellen. Mit Bindestrichen werden die Überschriften der Spalten erstellt, mit senkrechten Strichen die Spalten voneinander getrennt. Vor der Tabelle musst Du eine Zeile frei lassen, damit sie korrekt dargestellt wird.

```markdown

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

![Gerenderte Tabelle](/assets/images/help/writing/table-basic-rendered.png)

Die senkrechten Striche am linken und rechten Rand der Tabelle sind optional.

Die Zellen können unterschiedlich breit sein und müssen nicht perfekt an den Spalten ausgerichtet sein. In jeder Spalte der Überschriftenzeile müssen mindestens drei Bindestriche vorhanden sein.

```markdown
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![Gerenderte Tabelle mit unterschiedlicher Zellenbreite](/assets/images/help/writing/table-varied-columns-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Inhalt innerhalb der Tabelle formatieren

Du kannst [Formatierungen](/articles/basic-writing-and-formatting-syntax) wie Links, Inline-Codeblöcke und Textformatierung in Deiner Tabelle verwenden:

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![Gerenderte Tabelle mit formatiertem Text](/assets/images/help/writing/table-inline-formatting-rendered.png)

Du kannst Text links, rechts oder mittig in einer Spalte ausrichten, indem Du Doppelpunkte `:` links, rechts oder auf beiden Seiten der Bindestriche in der Kopfzeile einschließt.

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![Gerenderte Tabelle mit nach links, nach rechts oder zentriert ausgerichtetem Text](/assets/images/help/writing/table-aligned-text-rendered.png)

Um ein Pipe `|` als Inhalt in Deine Zelle einzuschließen, verwende ein `\` vor dem Pipe:

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![Gerenderte Tabelle mit einem maskierten senkrechten Strich](/assets/images/help/writing/table-escaped-character-rendered.png)

## Weiterführende Themen

- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
- [Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax)
