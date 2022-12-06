---
title: Informationen zu README-Dateien
intro: 'Du kannst eine README-Datei zu Deinem Repository hinzufügen, um anderen Personen mitzuteilen, warum Dein Projekt nützlich ist, was sie mit Deinem Projekt machen können und wie sie es nutzen können.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 146f1a33eb4de224625b9603b27d2f383e55c54d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163336'
---
## Informationen zu README-Dateien

{% data reusables.repositories.about-READMEs %}

Weitere Informationen zur Bereitstellung von Richtlinien für Dein Projekt findest Du unter {% ifversion fpt or ghec %}"[Hinzufügen von Verhaltensregeln zu Deinem Projekt](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" und {% endif %}"[Einrichten Deines Projekts für hilfreiche Beiträge](/communities/setting-up-your-project-for-healthy-contributions)".

Die README-Datei ist oft das erste Element, das ein Benutzer beim Besuch Deines Repositorys sieht. README-Dateien enthalten in der Regel folgende Informationen:
- Was ist die Aufgabe des Projekts?
- Warum ist das Projekt sinnvoll?
- Wie können Benutzer am Projekt mitwirken?
- Wo erhalten Benutzer Hilfe zu Ihrem Projekt?
- Wer verwaltet das Projekt und trägt dazu bei?

Wenn Du Deine README-Datei im ausgeblendeten `.github`, im Stamm oder im `docs`-Verzeichnis Deines Repositorys ablegst, erkennt {% data variables.product.product_name %} Deine README-Datei und stellt sie automatisch den Besuchern des Repositorys zur Verfügung.

Enthält ein Repository mehrere README-Dateien, wird die angezeigte Datei aus Speicherorten in der folgenden Reihenfolge ausgewählt: das `.github`-Verzeichnis, dann das Stammverzeichnis des Repositorys und schließlich das `docs`-Verzeichnis.

![Hauptseite des github/scientist-Repositorys und seiner README-Datei](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![README-Datei zu Deinem Benutzernamen/Benutzernamen-Repository](/assets/images/help/repository/username-repo-with-readme.png)

## Automatisch generiertes Inhaltsverzeichnis für README-Dateien

Für die gerenderte Ansicht einer Markdown-Datei in einem Repository einschließlich README-Dateien generiert {% data variables.product.product_name %} automatisch ein Inhaltsverzeichnis basierend auf Abschnittsüberschriften. Du kannst das Inhaltsverzeichnis für eine README-Datei anzeigen, indem Du oben links neben der gerenderten Seite auf das Menüsymbol {% octicon "list-unordered" aria-label="The unordered list icon" %} klickst.

![README-Datei mit automatisch generiertem Inhaltsverzeichnis](/assets/images/help/repository/readme-automatic-toc.png)

## Links zu Abschnitten in README-Dateien und auf Blob-Seiten

{% data reusables.repositories.section-links %}

## Relative Links und Bildpfade in README-Dateien

{% data reusables.repositories.relative-links %}

## Wikis

Eine README-Datei sollte nur die Informationen enthalten, die Entwickler für ihre ersten Schritte benötigen und die für ihr Projekt relevant sind. Längere Dokumentationen eignen sich am besten für Wikis. Weitere Informationen findest Di unter [Informationen zu Wikis](/communities/documenting-your-project-with-wikis/about-wikis).

## Weiterführende Themen

- [Hinzufügen einer Datei zu einem Repository](/articles/adding-a-file-to-a-repository)
- [Lesbarmachen von Infodateien](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md) von 18F {%- ifversion fpt or ghec %} 
- [Hinzufügen eines Badges „In GitHub Codespaces öffnen“](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge) {%- endif %}   
