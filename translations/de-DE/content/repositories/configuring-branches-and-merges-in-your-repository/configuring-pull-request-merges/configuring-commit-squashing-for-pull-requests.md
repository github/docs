---
title: Commit-Squashing für Pull Requests konfigurieren
intro: 'Du kannst das Commitsquashing für alle Pull-Request-Merges auf {% data variables.product.product_location %} in deinem Repository erzwingen, zulassen oder deaktivieren.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit squashing
ms.openlocfilehash: 8d53a558163b6a847fa4fb509399b1e7b7c6c05c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580711'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Wähle unter {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}„Pull Requests“{% else %}die Schaltfläche „Mergen“ und{% endif %} **Squashmerges zulassen** aus. Dadurch können Mitarbeiter einen Pull Request zusammenführen, indem sie alle Commits in einen einzigen Commit squashen. Mitwirkenden wird beim Mergen standardmäßig eine Meldung mit dem Committitel und der Commitnachricht angezeigt, wenn der Pull Request nur einen Commit enthält, oder eine Meldung mit dem Pull-Request-Titel und der Liste der Commits, wenn der Pull Request zwei oder mehr Commits enthält. {% ifversion ghes = 3.6 %} Damit unabhängig von der Anzahl der Commits im Pull Request immer der Titel des Pull Request angezeigt wird, wähle **Bei Squashmergecommits standardmäßig PR-Titel verwenden** aus.{% endif %}{% ifversion default-merge-squash-commit-message %} ![Gesquashte Pull-Request-Commits](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![Screenshot: Einstellungen für Pull Requests mit hervorgehobenem Kontrollkästchen „Mergecommits zulassen“](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Gesquashte Pull-Request-Commits](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. Verwende optional unter **Squashmerging zulassen** das Dropdownmenü, um das Format der Standardmeldung für Squashcommits auszuwählen, die Mitwirkenden beim Mergen angezeigt wird. Die Standardmeldung verwendet den Committitel und die Commitnachricht, wenn der Pull Request nur einen Commit enthält, oder den Pull-Request-Titel und eine Liste der Commits, wenn der Pull Request zwei oder mehr Commits enthält. Du kannst auch nur den Pull-Request-Titel, den Pull-Request-Titel und die Commitdetails oder den Titel und die Beschreibung des Pull Request verwenden.
![Screenshot: Hervorgehobenes Dropdownmenü für die Standardmeldung beim Squashen](/assets/images/help/repository/default-squash-message-dropdown.png) {% endif %}

Wenn du mehrere Zusammenführungsmethoden auswählst, können Projektmitarbeiter auswählen, welche Art von Zusammenführungs-Commit verwendet werden soll, wenn sie ein Pull Request zusammenführen. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Weiterführende Themen

- [Informationen zum Zusammenführen von Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- „[zusammenführen eines Pull Request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)“
