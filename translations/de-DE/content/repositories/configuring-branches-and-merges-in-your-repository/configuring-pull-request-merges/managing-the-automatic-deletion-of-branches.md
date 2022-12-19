---
title: Automatische Löschung von Branches verwalten
intro: 'Du kannst festlegen, dass Head-Branches automatisch gelöscht werden, nachdem die Pull Requests in Deinem Repository zusammengeführt wurden.'
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automatic branch deletion
ms.openlocfilehash: feaeb7c2178beab4dc23a310df6924c6e1c52e0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882457'
---
Personen mit Administratorberechtigungen für ein Repository können die automatische Löschung von Branches aktivieren oder deaktivieren.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Aktiviere oder deaktiviere unter {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}„Pull Requests“{% else %}„Schaltfläche Zusammenführen“{% endif %} **Automatically delete head branches (Head Branches automatisch löschen)** .
  ![Kontrollkästchen zum Aktivieren oder Deaktivieren der automatischen Löschung von Branches](/assets/images/help/repository/automatically-delete-branches.png)

## Weiterführende Themen
- „[Einen Pull Request zusammenführen](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)“
- [Erstellen und Löschen von Branches innerhalb deines Repositorys](/articles/creating-and-deleting-branches-within-your-repository)
