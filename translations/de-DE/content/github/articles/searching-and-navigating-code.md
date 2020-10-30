---
title: In Code suchen und navigieren
intro: 'Das Durchsuchen von Code und das Navigieren in Code sind entscheidende Arbeitsschritte des Entwicklungsworkflows, und GitHub hat es sich zur Aufgabe gemacht, diese Bereiche zu optimieren. Wenn Ihre Organisation am Test der privaten Beta-Version von „Code Search and Navigation“ teilnimmt, stehen Ihnen leistungsstarke neue Such- und Navigationstools zur Verfügung. Wenn Sie weitere Informationen zu dieser privaten Beta-Version wünschen, schreiben Sie eine E-Mail an search-beta@github.com.'
hidden: true
redirect_from:
  - /articles/searching-and-navigating-code
versions:
  free-pro-team: '*'
---


### In diesem Handbuch

- [Suche nach Literalen](#literal-code-search)
- [Relevanz](#relevancy)
- [„Jump to“-Navigation](#jump-to-navigation)

### Suche nach Literalen

Vor der Einführung dieser privaten Beta-Version wurden viele Zeichen aus Suchindizes entfernt. Nach gängigen Idiomen wie `>>` konnte daher nicht gesucht werden. Beispielsweise war die Suche in einem Repository nach `>>` ergebnislos. In der privaten Beta-Version können Sie Idiome wie diese in doppelte Anführungszeichen setzen und erhalten so korrekte Ergebnisse. Dieses Feature geht weit über einzelne Zeichen hinaus. So können Sie auch nach Phrasen in Anführungszeichen wie `"return [] unless"` suchen. Dieses Feature wird bei Suchen in Code in allen Sprachen gleich angewendet.

### Relevanz

Bei einigen Programmiersprachen wie Go, JavaScript, Python, Ruby und TypeScript moduliert die Suche in Code die Relevanz der Deklarationen. Die Deklaration der Methode, Funktion, Klasse oder anderen Entität wird vor den Aufrufen oder Kommentaren zurückgegeben, die den jeweiligen Suchstring enthalten.

### „Jump to“-Navigation

Bei einigen Programmiersprachen wie Go, JavaScript, Python, Ruby und TypeScript unterstützt GitHub nun weitere Informationen und Navigationen, wenn Sie auf ein Zeichen klicken. Diese Navigation beinhaltet für Ressourcen innerhalb des Repositorys eine „Jump to Definition“-Navigation, wodurch sich die Navigation beschleunigt und mehr Einblicke bietet.

### Feedback

Alle Benutzer, die derzeit am Test der privaten Beta-Version von „Code Search and Navigation“ teilnehmen, können uns ihr Feedback über [diese Umfrage](https://www.research.net/r/CodeSearch-Navigation) übermitteln. Für weitere Kommentare und Fragen schreiben Sie eine E-Mail an search-beta@github.com.

### Weiterführende Informationen
- [Informationen zur Suche auf GitHub](/articles/about-searching-on-github/)
- [Geänderte Methoden und Funktionen in einem Pull Request suchen](/articles/finding-changed-methods-and-functions-in-a-pull-request/)
