---
title: 'Änderungen an einem Pull-Request-Branch zulassen, der von einem Fork erstellt wurde'
intro: 'Für eine bessere Zusammenarbeit kannst du Commits für Branches erlauben, die du aus Forks im Besitz deines persönlichen Kontos erstellt hast.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a personal account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Allow changes to a branch
ms.openlocfilehash: 26255f5aeab3bcaa5ecc1aa6cf865981990c456a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133694'
---
Nur die Ersteller von Pull Requests können Betreuern von vorgelagerten Repositorys oder Benutzern mit Push-Zugriff auf das vorgelagerte Repository die Berechtigung erteilen, in einer benutzereigenen Fork Commits an den Vergleichs-Branch ihres Pull Requests vorzunehmen. Weitere Informationen zu vorgelagerten Repositorys findest du unter [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

Pull-Request-Autoren können diese Berechtigungen erteilen, wenn sie initial einen Pull Request aus einer benutzereigenen Fork erstellen oder nachdem sie den Pull Request erstellt haben. Weitere Informationen findest du unter [Erstellen eines Pull Requests aus einem Fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

Du kannst Commit-Berechtigungen festlegen, wenn du erstmalig einen Pull Request von einem Fork erstellst. Weitere Informationen findest du unter [Erstellen eines Pull Requests aus einem Fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork). Zusätzlich kannst du einen vorhandenen Pull Request ändern, um Repository-Betreuern Commits an deinem Branch zu ermöglichen.

## Repository-Betreuer-Berechtigungen auf vorhandene Pull Requests aktivieren

1. Navigiere auf {% data variables.product.product_name %} zur Hauptseite des vorgelagerten Repositorys deines Pull Requests.
2. Klicke unter dem Namen des vorgelagerten Repositorys auf {% octicon "git-pull-request" aria-label="The pull request icon" %} **Pull Requests**.
![Registerkartenauswahl Issues und Pull Requests](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. Navigiere in der Liste der Pull Requests zu dem Pull Request, für den du Commits zulassen möchtest.
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![Kontrollkästchen in Seitenleiste, um Bearbeitung durch Maintainer zuzulassen](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

## Weitere Informationsquellen

- [Committen von Änderungen an einen Pull-Request-Branch, der aus einem Fork erstellt wurde](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)
