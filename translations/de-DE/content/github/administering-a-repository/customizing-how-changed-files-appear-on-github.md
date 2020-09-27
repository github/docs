---
title: Darstellung geänderter Dateien auf GitHub anpassen
intro: 'Damit bestimmte Dateien nicht standardmäßig als Diffs angezeigt oder zur Sprache des Repositorys hinzu gezählt werden, kannst Du sie mit dem Attribut `linguist-generated` in einer *.gitattributes*-Datei markieren.'
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Verwende eine *.gitattributes*-Datei, um Dateien zu markieren, die einem bestimmten „Muster“ mit den festgelegten Attributen entsprechen. Eine *.gitattributes*-Datei nutzt dieselben Regeln zum Abgleichen wie _.gitignore_-Dateien. Weitere Informationen findest Du unter „[Muster-Format](https://www.git-scm.com/docs/gitignore#_pattern_format)" in der Git-Dokumentation.

1. Wenn die *.gitattributes*-Datei noch nicht vorhanden ist, erstelle sie im Root-Verzeichnis des Repository.
2. Mit dem Attribut `linguist-generated` kannst Du Pfade markieren respektive deren Markierung aufheben, die bei der Sprachstatistik des Repositorys nicht berücksichtigt und in Diffs standardmäßig ausgeblendet werden sollen.

  Um beispielsweise `search/index.json` als generierte Datei zu markieren, füge die folgende Zeile in der *.gitattributes*-Datei hinzu:

  ```
search/index.json linguist-generated=true
  ```

### Weiterführende Informationen
- „[Generierter Code](https://github.com/github/linguist/#generated-code)" in der Linguist-Dokumentation
- „[Neue Dateien erstellen](/articles/creating-new-files/)“
