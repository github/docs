---
title: Branches in Deinem Repository anzeigen
intro: 'Branches sind entscheidend für die Zusammenarbeit auf {% data variables.product.product_name %}. Du lässt dich bestmöglich auf der Branches-Seite anzeigen.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
  - /github/administering-a-repository/viewing-branches-in-your-repository
  - /github/administering-a-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View branches
ms.openlocfilehash: 286c8eb8c717f5a002db0059e65c416ccc3981e8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132352'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
3. Mithilfe der im oberen Bereich der Seite befindlichen Navigation kannst Du spezifische Listen der Branches anzeigen:
    - **Your branches** (Ihre Branches): In Repositorys, auf die Du per Push-Vorgang zugreifen kannst, zeigt die Ansicht **Yours** (Ihre) alle Branches an, an die Du Elemente per Push-Vorgang übertragen hast, wobei die neuesten Branches zuerst angezeigt werden.
    - **Active branches** (Aktive Branches): Die Ansicht **Active** (Aktiv) zeigt alle Branches an, zu denen in den letzten drei Monaten Commits beigetragen wurden, wobei die Reihenfolge so lautet, dass zunächst die Branches mit den neuesten Commits angezeigt werden.
    - **Stale branches** (Alte Branches): Die Ansicht **Stale** (Alt) zeigt alle Branches an, zu denen in den letzten drei Monaten keine Commits beigetragen wurden, wobei die Reihenfolge so lautet, dass zunächst die Branches mit den ältesten Commits angezeigt werden. Verwende diese Liste, um zu bestimmen, welche [Branches gelöscht werden sollen](/articles/creating-and-deleting-branches-within-your-repository).
    - **All branches** (Alle Branches): Die Ansicht **All** (Alle) zeigt den Standardbranch, gefolgt von allen anderen Branches, wobei die Reihenfolge so lautet, dass zunächst die Branches mit den neuesten Commits angezeigt werden.

4. Verwende optional das Suchfeld oben rechts. Es bietet eine einfache, von Groß- und Kleinschreibung unabhängige Suche nach Teilstrings des Branchnamens. Es unterstützt keine zusätzliche Abfragesyntax.

![Die Branches-Seite für das Atom-Repository](/assets/images/help/branches/branches-overview-atom.png)

## Weiterführende Themen

- [Erstellen und Löschen von Branches innerhalb deines Repositorys](/articles/creating-and-deleting-branches-within-your-repository)
- „[Löschen nicht verwendeter Branches](/articles/deleting-unused-branches)“
