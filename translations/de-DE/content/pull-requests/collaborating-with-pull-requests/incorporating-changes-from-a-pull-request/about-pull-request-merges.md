---
title: Informationen zum Zusammenführen von Pull Requests
intro: 'Du kannst [Pull Requests zusammenführen](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request), indem du alle Commits in einem Featurebranch beibehältst, alle Commits per Squash in einen einzigen Commit zusammenführst oder ein Rebasing einzelner Commits vom `head`-Branch auf den `base`-Branch durchführst.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /articles/about-pull-request-merge-squashing
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 512a32eb3f918653eab1127aecb70a2fbc220571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580439'
---
## Mergen von Commits

{% data reusables.pull_requests.default_merge_option %}

## Squashen und Mergen von Commits

{% data reusables.pull_requests.squash_and_merge_summary %}

### Meldung zum Zusammenführen eines Squashmerge

{% ifversion default-merge-squash-commit-message %} Beim Squashen und Mergen generiert {% data variables.product.prodname_dotcom %} eine Standardmeldung für den Commit, die du bearbeiten kannst. Je nachdem, wie das Repository konfiguriert ist und wie viele Commits sich im Pull Request befinden (Mergecommits ausgeschlossen), kann diese Meldung den Titel und die Beschreibung des Pull Request oder Informationen zu den Commits enthalten.
{% else %} Beim Squashen und Mergen generiert {% data variables.product.prodname_dotcom %} eine Standardcommitmeldung, die du bearbeiten kannst. Die Standardnachricht hängt von der Anzahl der Commits im Pull Request ab, ohne Merge-Commits.

Anzahl der Commits | Zusammenfassung | BESCHREIBUNG |
----------------- | ------- | ----------- | 
Ein Commit | Der Titel der Commitnachricht für den einzelnen Commit, gefolgt von der Pull Request-Nummer | Der Textkörper der Commitnachricht für den einzelnen Commit
Mehr als ein Commit | Der Titel des Pull Requests gefolgt von der Nummer des Pull Requests | Eine Liste der Commitnachrichten für alle Squash-Commits in der Datumsreihenfolge
{% endif %}

Anzahl der Commits | Zusammenfassung | BESCHREIBUNG |
----------------- | ------- | ----------- |
Ein Commit | Der Titel der Commitnachricht für den einzelnen Commit, gefolgt von der Pull Request-Nummer | Der Textkörper der Commitnachricht für den einzelnen Commit
Mehr als ein Commit | Der Titel des Pull Requests gefolgt von der Nummer des Pull Requests | Eine Liste der Commitnachrichten für alle Squash-Commits in der Datumsreihenfolge

{% ifversion default-merge-squash-commit-message %} Benutzer*innen mit Maintainer- oder Administratorzugriff auf ein Repository können die Standardmergemeldung für alle gesquashten Commits konfigurieren, damit der Pull-Request-Titel, der Pull-Request-Titel und die Commitdetails oder der Titel und die Beschreibung des Pull Request verwendet wird. Weitere Informationen findest du unter [Konfigurieren des Commitsquashings](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests).{% endif %}

{% ifversion ghes = 3.6 %} Benutzer*innen mit Administratorzugriff auf ein Repository können das Repository so konfigurieren, dass der Titel des Pull Request als Standardmergemeldung für alle gesquashten Commits verwendet wird. Weitere Informationen findest du unter „[Konfigurieren von Commit-Squashing](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)“.
{% endif %}

### Squashen und Zusammenführen eines lang ausgeführten Branches

Wenn du die Arbeit am [Head-Branch](/github/getting-started-with-github/github-glossary#head-branch) eines Pull Requests fortsetzen möchten, nachdem der Pull Request zusammengeführt wurde, empfehlen wir, den Pull Request nicht zu squashen und zusammenzuführen.

Wenn du einen Pull Request erstellst, identifiziert {% data variables.product.prodname_dotcom %} den zuletzt verwendeten Commit, der sich sowohl auf dem [Head-Branch](/github/getting-started-with-github/github-glossary#base-branch) als auch auf dem Basis-Branch befindet: der gemeinsame Vorgänger-Commit. Wenn du den Pull Request squashst und zusammenführst, erstellt {% data variables.product.prodname_dotcom %} einen Commit auf dem Basis-Branch, der alle Änderungen enthält, die du seit dem gemeinsamen Vorgänger-Commit vorgenommen hast.

Da sich dieser Commit nur auf dem Basis-Branch und nicht auf dem Head-Branch befindet, bleibt der gemeinsame Vorgänger der beiden Branches unverändert. Wenn du weiterhin am Head-Branch arbeitest, erstellst du dann einen neuen Pull Request zwischen den beiden Branches. Der Pull Request umfasst alle Commits seit dem gemeinsamen Vorgänger, einschließlich Commits, die du im vorherigen Pull Request gesquasht und zusammengeführt hast. Wenn keine Konflikte vorhanden sind, kannst du diese Commits sicher zusammenführen. Dieser Workflow macht jedoch Mergekonflikte wahrscheinlicher. Wenn du weiterhin Squash und Zusammenführen von Pull Requests für einen lang ausgeführten Head-Branch fortsetzt, musst du dieselben Konflikte wiederholt lösen.

## Rebasing und Merging von Commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

In folgenden Fällen ist kein automatisches Rebasing und Zusammenführen auf {% data variables.product.product_location %} möglich:
- Für den Pull Request liegen Mergekonflikte vor.
- Beim Rebasing der Commits vom Basis-Branch in den Head-Branch kommt es zu Konflikten.
- Das Rebasing der Commits gilt als „unsicher“, beispielsweise wenn ein Rebase ohne Mergekonflikte möglich ist, jedoch ein anderes Ergebnis liefern würde als ein Merge.

Wenn du trotzdem ein Rebasing der Commits durchführen möchtest, aber kein automatischer Rebase auf {% data variables.product.product_location %} möglich ist, musst du folgendermaßen vorgehen:
- Führe ein Rebasing des Themen-Branches (oder Head-Branches) auf den Basis-Branch lokal in der Befehlszeile durch.
- [Behebe alle Mergekonflikte in der Befehlszeile](/articles/resolving-a-merge-conflict-using-the-command-line/).
- Erzwinge den Push der Rebase-Commits an den Themen-Branch (oder Remote-Head-Branch) des Pull Requests.

Alle Benutzer mit Schreibberechtigungen im Repository können dann über die Rebase- und Merge-Schaltfläche auf {% data variables.product.product_location %} [die Änderungen zusammenführen](/articles/merging-a-pull-request/).

## Weiterführende Themen

- [Informationen zu Pull Requests](/articles/about-pull-requests/)
- „[Beheben von Mergekonflikten](/github/collaborating-with-pull-requests/addressing-merge-conflicts)“
