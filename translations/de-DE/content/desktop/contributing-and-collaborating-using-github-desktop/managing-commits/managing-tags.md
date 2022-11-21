---
title: „Tags“ (Schlagworte) verwalten
intro: 'Du kannst {% data variables.product.prodname_desktop %} für die Erstellung, den Pushvorgang und die Anzeige von Tags verwenden.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-tags
versions:
  fpt: '*'
ms.openlocfilehash: 980e47f6e3300995f6312499b23768d6f0401f36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090127'
---
## Informationen zu „Tags“ (Schlagworten) in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} ermöglicht Dir, kommentierte Tags zu erstellen. Tags sind mit Commits verknüpft, sodass du ein Tag verwenden kannst, um einen einzelnen Punkt im Verlauf deines Repositorys zu markieren, einschließlich einer Versionsnummer für eine Freigabe („Release“). Weitere Informationen zu Releasetags findest du unter „[Informationen zu Versionen](/github/administering-a-repository/about-releases)“.

{% data reusables.desktop.tags-push-with-commits %}

## Ein Tag erstellen

{% data reusables.desktop.history-tab %} {% data reusables.desktop.create-tag %} {% data reusables.desktop.name-tag %} {% data reusables.desktop.confirm-tag %}

## Tags anzeigen

{% data reusables.desktop.history-tab %}
2. Klicke auf den Commit.
  {% note %}

  **Hinweis**: {% data variables.product.prodname_desktop %} zeigt einen Pfeil {% octicon "arrow-up" aria-label="The up arrow icon" %} an, falls das Tag nicht per Push in das Remote-Repository übertragen wurde.

  {% endnote %}

  ![Ein Tag in der Historie anzeigen](/assets/images/help/desktop/viewing-tags-in-history.png)

3. Alle dem Commit zugeordneten Tags sind in den Metadaten dieses Commits sichtbar.
![Anzeigen eines Tags im Commit](/assets/images/help/desktop/viewing-tags-in-commit.png)

## Löschen von Tags

{% note %}

**Hinweis**: Du kannst nur Tags löschen, die mit Commits verknüpft sind, die noch nicht mithilfe von Push verschoben wurden.

{% endnote %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.delete-tag %}

## Weiterführende Themen

- „[Git Basics – Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)“ (Git-Grundlagen – Tagging) in der Git-Dokumentation
