---
title: Verwalten von Bezeichnungen
intro: 'Du kannst {% ifversion fpt or ghec %}Issues, Pull Requests und Diskussionen klassifizieren{% else %}Issues und Pull Requests{% endif %}, indem du Bezeichnungen erstellst, bearbeitest, anwendest und löschst.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
ms.openlocfilehash: 42feddd5ebbdee81140d3aab48b81f83a2c6e69f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130906'
---
## Informationen zu Kennzeichnungen

Du kannst deine Arbeit auf {% data variables.product.product_name %} verwalten, indem du Bezeichnungen zum Kategorisieren von {% ifversion fpt or ghec %}Issues, Pull Requests und Diskussionen{% else %}Issues und Pull Requests {% endif %} erstellst. Du kannst Bezeichnungen in dem Repository anwenden, in dem die Bezeichnung erstellt wurde. Sobald eine Bezeichnung vorhanden ist, kannst du die Bezeichnung für alle {% ifversion fpt or ghec %}Issues, Pull Requests oder Diskussionen{% else %}Issues oder Pull Requests{% endif %} innerhalb dieses Repositorys verwenden.

## Informationen zu Standardkennzeichnungen

{% data variables.product.product_name %} bietet in jedem neuen Repository Standardkennzeichnungen. Mithilfe dieser Standardkennzeichnungen kannst du einen Standardworkflow in einem Repository erstellen.

Bezeichnung | BESCHREIBUNG
---  | ---
`bug` | Gibt ein unerwartetes Problem oder ein unbeabsichtigtes Verhalten an{% ifversion fpt or ghes or ghec %}
`documentation` | Kennzeichnet die Notwendigkeit für Verbesserungen oder Ergänzungen der Dokumentation{% endif %}
`duplicate` | Gibt ähnliche {% ifversion fpt or ghec %}Issues, Pull Requests oder Diskussionen{% else %}Issues oder Pull Requests{% endif %} an
`enhancement` | Kennzeichnet neue Funktionsanfragen
`good first issue` | Kennzeichnet einen geeigneten Issue für erstmalig Mitwirkende
`help wanted` | Kennzeichnet, dass ein Betreuer Hilfe bei einem Issue oder Pull Request benötigt
`invalid` | Gibt an, dass {% ifversion fpt or ghec %}ein Issue, ein Pull Request oder eine Diskussion{% else %}ein Issue oder ein Pull Request{% endif %} nicht mehr relevant ist
`question` | Gibt an, dass für {% ifversion fpt or ghec %}ein Issue, einen Pull Request oder eine Diskussion{% else %}ein Issue oder einen Pull Request{% endif %} weitere Informationen erforderlich sind
`wontfix` | Gibt an, dass die Arbeit für {% ifversion fpt or ghec %}ein Issue, einen Pull Request oder eine Diskussion{% else %}ein Issue oder einen Pull Request{% endif %} nicht fortgesetzt wird

Standardkennzeichnungen sind in jedem neuen Repository beinhaltet, wenn das Repository erstellt wird, aber du kannst die Kennzeichnungen später bearbeiten oder löschen.

Issues mit der Bezeichnung `good first issue` werden verwendet, um die Seite `contribute` des Repositorys aufzufüllen. Ein Beispiel für eine Seite `contribute` findest du unter [github/docs/contribute](https://github.com/github/docs/contribute). 

{% ifversion fpt or ghes or ghec %} Organisationsbesitzer können die Standardkennzeichnungen für Repositorys in ihrer Organisation anpassen. Weitere Informationen findest du unter [Verwalten von Standardbezeichnungen für Repositorys in deiner Organisation](/articles/managing-default-labels-for-repositories-in-your-organization).
{% endif %}

## Eine Kennzeichnung erstellen

Jeder, der über Schreibzugriff auf ein Repository verfügt, kann eine Bezeichnung erstellen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. Klicke rechts neben dem Suchfeld auf **Neue Bezeichnung**.
{% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Anwenden einer Bezeichnung

Jeder, der über Selektierungszugriff auf ein Repository verfügt, kann Bezeichnungen anwenden und schließen.

1. Navigiere zu {% ifversion fpt or ghec %}dem Issue, dem Pull Request oder der Diskussion{% else %}dem Issue oder Pull Request{% endif %}.
1. Klicke auf der rechten Randleiste rechts neben „Bezeichnungen“ auf {% octicon "gear" aria-label="The gear icon" %} und anschließend auf eine Bezeichnung.
  ![Dropdownmenü „Bezeichnungen“](/assets/images/help/issues/labels-drop-down.png)

## Eine Kennzeichnung bearbeiten

Jeder, der über Schreibzugriff auf ein Repository verfügt, kann vorhandene Bezeichnungen bearbeiten.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Eine Kennzeichnung löschen

Jeder, der über Schreibzugriff auf ein Repository verfügt, kann vorhandene Bezeichnungen löschen.

Durch den Löschvorgang wird die Bezeichnung aus Issues und Pull Requests entfernt.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.delete-label %}

## Weitere Informationsquellen
- [Filtern und Durchsuchen von Issues und Pull Requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests){% ifversion fpt or ghes or ghec %}
- [Verwalten von Standardbezeichnungen für Repositorys in deiner Organisation](/articles/managing-default-labels-for-repositories-in-your-organization){% endif %}{% ifversion fpt or ghec %}
- [Fördern hilfreicher Beiträge zu deinem Projekt über Bezeichnungen](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels){% endif %}
- [Grundlegende Schreib- und Formatierungssyntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#using-emoji)
