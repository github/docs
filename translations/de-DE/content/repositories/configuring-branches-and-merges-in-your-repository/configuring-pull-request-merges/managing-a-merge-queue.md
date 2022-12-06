---
title: Verwalten einer Mergewarteschlange
intro: Du kannst die Entwicklungsgeschwindigkeit mit einer Mergewarteschlange für Pull Requests in deinem Repository erhöhen.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
ms.openlocfilehash: 2cdbbdc72dde5c9970d49f7060e5cb583b6dd1dd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496490'
---
{% data reusables.pull_requests.merge-queue-beta %}

## Informationen zu Mergewarteschlangen

{% data reusables.pull_requests.merge-queue-overview %}

Mit einer Mergewarteschlange werden temporäre Branches mit einem speziellen Präfix erstellt, um Änderungen in Pull Requests zu überprüfen. Die Änderungen im Pull Request werden dann in eine `merge_group` mit der neuesten Version des `base_branch` sowie vorhergehenden Änderungen in der Warteschlange gruppiert. {% data variables.product.product_name %} führt alle diese Änderungen im `base_branch` zusammen, nachdem die für den Branchschutz erforderlichen Überprüfungen vom `base_branch` bestanden wurden.


Weitere Informationen zu Mergemethoden findest du unter [Informationen zu Pull Request-Merges](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges).

{% note %}

**Hinweis:**

* Mergewarteschlangen können nicht mit Branchschutzregeln aktiviert werden, die Platzhalterzeichen (`*`) im Branchnamenmuster enthalten.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Auslösen von Mergegruppenüberprüfungen mit {% data variables.product.prodname_actions %}

Du kannst das `merge_group`-Ereignis verwenden, um deinen {% data variables.product.prodname_actions %}-Workflow auszulösen, wenn ein Pull Request einer Mergewarteschlange hinzugefügt wird. Beachte, dass sich dieses Ereignis von den `pull_request`- und `push`-Ereignissen unterscheidet.

Ein Workflow, der eine vom Schutz des Zielbranch verlangte Überprüfung meldet, sieht wie folgt aus:

```yaml
on:
  pull_request:
  merge_group:
```

Weitere Informationen findest du unter [Ereignisse, die Workflows auslösen](/actions/using-workflows/events-that-trigger-workflows#merge-group).

### Auslösen von Mergegruppenüberprüfungen bei anderen CI-Anbietern

Bei anderen CI-Anbietern musst du möglicherweise deine CI-Konfiguration aktualisieren, damit sie ausgeführt wird, wenn ein mit dem speziellen Präfix `gh-readonly-queue/{base_branch}` beginnender Branch erstellt wird.

## Verwalten einer Mergewarteschlange

Repositoryadministrator*innen können eine Zusammenführung erfordern, indem sie die Branchschutzeinstellung „Erfordern von Mergewarteschlangen“ in den Schutzregeln für den Basisbranch aktivieren.

Informationen zum Aktivieren von Schutzeinstellungen für die Mergewarteschlange findest du unter [Verwalten einer Branchschutzregel](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule).

## Weiterführende Themen

* [Zusammenführen eines Pull Requests mit einer Mergewarteschlange](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)
* [Informationen zu geschützten Branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
