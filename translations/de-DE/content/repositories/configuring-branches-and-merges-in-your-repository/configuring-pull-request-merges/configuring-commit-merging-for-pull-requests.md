---
title: Konfigurieren des Commitmergings für Pull Requests
intro: 'Du kannst das Merging mit einem Mergecommit für alle Pull-Request-Merges auf {% data variables.product.product_location %} in deinem Repository erzwingen, zulassen oder deaktivieren.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit merging
ms.openlocfilehash: 322f74168935175a75f3a8f19cc4faca2cde174b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580739'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Wähle unter {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}„Pull Requests“{% else %}die Schaltfläche „Mergen“ und{% endif %} **Mergecommits zulassen** aus. Dadurch können Mitwirkende einen Pull Request mit dem gesamten Commitverlauf mergen.{% ifversion default-merge-squash-commit-message %} ![Screenshot: Einstellungen für Pull Requests mit hervorgehobenem Kontrollkästchen „Mergecommits zulassen“](/assets/images/help/repository/allow-merge-commits.png){% endif %}{% ifversion ghes = 3.6 %} ![Screenshot: Einstellungen für Pull Requests mit hervorgehobenem Kontrollkästchen „Mergecommits zulassen“](/assets/images/help/repository/allow-merge-commits-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. Verwende optional unter **Mergecommits zulassen** das Dropdownmenü, um das Format der Commitmeldung auszuwählen, die Mitwirkenden beim Mergen angezeigt wird. Standardmäßig enthält die Meldung die Nummer und den Titel des Pull Request. Beispiel: `Merge pull request #123 from patch-1`. Du kannst auch nur den Pull-Request-Titel oder den Titel und die Beschreibung des Pull Request verwenden. 
![Screenshot: Hervorgehobenes Dropdownmenü für die Standardmeldung beim Committen](/assets/images/help/repository/default-commit-message-dropdown.png) {% endif %}

Wenn du mehrere Zusammenführungsmethoden auswählst, können Projektmitarbeiter auswählen, welche Art von Zusammenführungs-Commit verwendet werden soll, wenn sie ein Pull Request zusammenführen. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Weiterführende Themen

- [Informationen zum Zusammenführen von Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- „[zusammenführen eines Pull Request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)“
