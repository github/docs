---
title: Informationen zu Merge-Methoden auf GitHub
intro: 'Du kannst Mitwirkenden mit Pushzugriff auf dein Repository das Mergen ihrer Pull Requests auf {% data variables.product.product_location %} mit unterschiedlichen Mergeoptionen erlauben oder eine bestimmte Mergemethode für alle Pull Requests deiner Repositorys erzwingen.'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
  - /github/administering-a-repository/configuring-pull-request-merges/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: About merge methods
ms.openlocfilehash: 97e8b7159ebadf1fe02ae56f707728c2bc8c439d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882441'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %} Du kannst eine Art von Mergemethode (z. B. Commitsquashing oder Rebasing) erzwingen, indem du nur die gewünschte Methode für dein Repository aktivierst.

{% ifversion fpt or ghec %} {% note %}

**Hinweis**: Wenn du die Mergewarteschlange verwendest, kannst du die Mergemethode nicht mehr auswählen, weil diese von der Warteschlange gesteuert wird. {% data reusables.pull_requests.merge-queue-references %}

{% endnote %} {% endif %}

{% data reusables.pull_requests.default_merge_option %}

Die Standard-Mergemethode erzeugt einen Merge-Commit. Du kannst verhindern, dass Merge-Commits an einen geschützten Branch übertragen werden, indem du einen linearen Commit-Verlauf erzwingst. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-linear-history).

## Deine Merge-Commits squashen

{% data reusables.pull_requests.squash_and_merge_summary %}

Bevor du das Commit-Squashing aktivierst, solltest du diese Nachteile berücksichtigen:
- Du verlierst Informationen darüber, wann bestimmte Änderungen ursprünglich vorgenommen wurden und wer die Squash-Commits erstellt hat.
- Wenn du nach dem Sqashen und Mergen die Arbeit am Headbranch eines Pull Requests fortsetzt und dann einen neuen Pull Request zwischen denselben Branches erstellst, werden zuvor gesquashte und gemergte Commits im neuen Pull Request aufgeführt. Möglicherweise treten auch Konflikte auf, die du in jedem nachfolgenden Pull Request wiederholt auflösen musst. Weitere Informationen findest du unter [Informationen zum Mergen von Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch).
- Die Verwendung einiger Git-Befehle mit der „SHA“- oder „hash“-ID kann schwieriger sein, da die SHA-ID für die ursprünglichen Commits verloren geht. Beispielsweise ist die Verwendung von [`git rerere`](https://git-scm.com/docs/git-rerere) unter Umständen nicht so effektiv.

Weitere Informationen findest du unter [Konfigurieren von Commit-Squashing für Pull Requests](/articles/configuring-commit-squashing-for-pull-requests).

## Rebasing und Zusammenführen deiner Commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

Bevor du das Commit-Rebasing aktivierst, sollten du diese Nachteile berücksichtigen:
- Repositorymitarbeiter müssen unter Umständen ein Rebase in der Befehlszeile ausführen, Konflikte beheben und das Pushen ihrer Änderungen an den Topic-Branch (oder Remoteheadbranch) des Pull Requests erzwingen, damit sie die Option **Rebase ausführen and mergen** auf {% data variables.product.product_location %} verwenden können. Das Erzwingen eines Push muss mit Vorsicht durchgeführt werden, damit die Mitarbeiter die Arbeit nicht überschreiben, auf der andere ihre Arbeit aufgebaut haben. Weitere Informationen dazu, wann die Option **Rebase ausführen und mergen** für {% data variables.product.product_location %} deaktiviert wird, sowie zum Workflow für das erneute Aktivieren der Option findest du unter [Informationen zu Pull Request-Merges](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits).
- {% indented_data_reference reusables.pull_requests.rebase_and_merge_verification spaces=3 %}

Weitere Informationen findest du unter [Konfigurieren eines Commit-Rebase für Pull Requests](/articles/configuring-commit-rebasing-for-pull-requests).
