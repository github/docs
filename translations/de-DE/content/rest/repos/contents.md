---
title: Repository-Inhalt
allowTitleToDifferFromFilename: true
shortTitle: Contents
intro: 'Mit diesen API-Endpunkten kannst du Base64-codierte Inhalte in einem Repositorys erstellen, ändern und löschen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 50875021a506201a90cbac62db521604a390a586
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060330'
---
## Informationen zur Repositoryinhalts-API

Um das Roh-oder gerenderte HTML-Format (sofern unterstützt) anzufordern, verwende benutzerdefinierte Medientypen für Repositoryinhalte.

### Benutzerdefinierte Medientypen für Repositoryinhalte

[READMEs](/rest/reference/repos#get-a-repository-readme), [Dateien](/rest/reference/repos#get-repository-content) und [Symlinks](/rest/reference/repos#get-repository-content) unterstützen die folgenden benutzerdefinierten Medientypen:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Verwende den Medientyp `.raw`, um den Inhalt der Datei abzurufen.

Bei Markupdateien wie Markdown oder AsciiDoc kannst du den gerenderten HTML-Code mit dem Medientyp `.html` abrufen. Markupsprachen werden mit unserer Open-Source-[Markup-Bibliothek](https://github.com/github/markup) in HTML gerendert.

[Alle Objekte](/rest/reference/repos#get-repository-content) unterstützen den folgenden benutzerdefinierten Medientyp:

    application/vnd.github.VERSION.object

Verwende den Medientypparameter `object`, um den Inhalt unabhängig vom Inhaltstyp in einem einheitlichen Objektformat abzurufen. Anstelle eines Arrays von Objekten für ein Verzeichnis ist die Antwort beispielsweise ein Objekt mit einem `entries`-Attribut mit dem Array von Objekten.

Weitere Informationen zur Verwendung von Medientypen in der API findest du [hier](/rest/overview/media-types).
