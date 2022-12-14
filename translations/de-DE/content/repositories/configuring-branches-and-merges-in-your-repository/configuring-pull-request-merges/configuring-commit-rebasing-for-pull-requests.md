---
title: Commit-Rebasing für Pull-Requests konfigurieren
intro: 'Du kannst Commit-Rebasing für alle Pull-Request-Merges auf {% data variables.product.product_location %} in deinem Repository erzwingen, zulassen oder deaktivieren.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit rebasing
ms.openlocfilehash: e2614349b5baab9be33d1fe6d80a99a78811d8df
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580527'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Wähle unter {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}„Pull Requests“{% else %}der Schaltfläche „Mergen“{% endif %} die Option **Rebasemerging zulassen** aus. Dadurch können Mitarbeiter einen Pull Request durch ein Rebasing ihrer einzelnen Commits auf den Basisbranch zusammenführen. 
{% ifversion default-merge-squash-commit-message %} ![Screenshot: Einstellungen für Pull Requests mit hervorgehobenem Kontrollkästchen „Rebasemerging zulassen“](/assets/images/help/repository/allow-rebase-merging.png){% endif %}{% ifversion ghes = 3.6  %} ![Screenshot: Einstellungen für Pull Requests mit hervorgehobenem Kontrollkästchen „Rebasemerging zulassen“](/assets/images/help/repository/allow-rebase-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Rebasingcommits in einem Pull Request](/assets/images/help/repository/pr-merge-rebase.png){% endif %}

Wenn Du auch eine weitere Merge-Methode auswählst, können Mitarbeiter den Typ des Merge-Commits auswählen, wenn sie einen Pull Request zusammenführen. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
