---
title: Einen Pull Request rückgängig machen
intro: 'Du kannst einen Pull Request rückgängig machen, der in den vorgelagerten Branch zusammengeführt wurde.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 9e94b6e9358089da8f62ff5152800e14556db3e7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133937'
---
## Informationen zum Rückgängigmachen eines Pull Requests

Durch das Rückgängigmachen eines Pull Requests in {% data variables.product.product_name %} wird ein neuer Pull Request erstellt, der ein „Revert“ des Merge-Commits des ursprünglich gemergten Pull Requests enthält. Um Pull Requests rückgängig machen zu können, musst du über [Schreibberechtigungen](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) im Repository verfügen. 

## Einen Pull Request rückgängig machen

{% note %}

**Hinweis**: Möglicherweise musst du die einzelnen Commits in deinem Pull Request rückgängig machen, wenn eine der folgenden Bedingungen zutrifft.

- Die Rückgängigmachung eines Pull Requests verursacht Mergekonflikte
- Der ursprüngliche Pull Request wurde ursprünglich nicht in {% data variables.product.product_name %} gemergt. Beispielsweise könnte jemand den Pull Request per Fast-Forward-Merge in der Befehlszeile gemergt haben.

Weitere Informationen zur manuellen Wiederherstellung einzelner Commits über Git findest du in der Git-Dokumentation unter [Rückgängigmachen in Git](https://git-scm.com/docs/git-revert.html).

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, den Du rückgängig machen möchtest.
3. Klicke am unteren Rand des Pull Requests auf **Rückgängig machen**. Wenn die Option **Rückgängig machen** nicht angezeigt wird, musst du den Repositoryadministrator um Schreibberechtigungen bitten.
  ![Link „Pull Request rückgängig machen“](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. Führe den daraus entstandenen Pull Request zusammen. Weitere Informationen findest du unter [Mergen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).
