---
title: Informationen in Tabellen organisieren
intro: 'Du kannst Tabellen erstellen, um Informationen in Kommentaren, Issues, Pull Requests und Wikis zu organisieren.'
redirect_from:
  - /articles/organizing-information-with-tables
  - /github/writing-on-github/organizing-information-with-tables
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Eine Tabelle erstellen

Tabellen werden mit senkrechten Strichen (`|`) und Bindestrichen (`-`) erstellt. Mit Bindestrichen werden die Überschriften der Tabelle erstellt; die senkrechten Striche trennen die Spalten voneinander ab. Vor der Tabelle musst Du eine Zeile frei lassen, damit sie korrekt dargestellt wird.

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

### Inhalt innerhalb der Tabelle formatieren

Du kannst [Formatierungen](/articles/basic-writing-and-formatting-syntax) wie Links, Inline-Codeblöcke und Textstile in Deiner Tabelle verwenden:

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![Gerenderte Tabelle mit formatiertem Text](/assets/images/help/writing/table-inline-formatting-rendered.png)

Du kannst den Text links oder rechts ausrichten oder zentrieren, indem Du links oder rechts oder an beiden Seiten der Bindestriche in der Überschriftenzeile einen Doppelpunkt (`:`) hinzufügst.

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![Gerenderte Tabelle mit nach links, nach rechts oder zentriert ausgerichtetem Text](/assets/images/help/writing/table-aligned-text-rendered.png)

Wenn Sie einen senkrechten Strich (`|`) als Inhalt einer Zelle einfügen möchten, verwenden Sie vor dem senkrechten Strich einen Rückwärtsschrägstrich (`\`):

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![Gerenderte Tabelle mit einem maskierten senkrechten Strich](/assets/images/help/writing/table-escaped-character-rendered.png)

### Weiterführende Informationen

- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
- „[Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax)“
