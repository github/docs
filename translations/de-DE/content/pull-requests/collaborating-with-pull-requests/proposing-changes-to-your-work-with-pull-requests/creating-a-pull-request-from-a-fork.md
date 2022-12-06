---
title: Einen Pull Request von einem Fork erstellen
intro: 'Du kannst einen Pull Request erstellen, um Änderungen vorzuschlagen, die du an einer Fork eines vorgelagerten Repositorys vorgenommen hast.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: 'Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create a PR from a fork
ms.openlocfilehash: 5a4aceef12c214d157dbdac7bf838bbe80e81731
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883287'
---
Wenn Dein Pull Request Deinen Themen-Branch mit einem Branch im vorgelagerten Repository als Basis-Branch vergleicht, wird Dein Themen-Branch auch als Vergleichs-Branch des Pull Requests bezeichnet. Weitere Informationen zu Pull Request-Branches, einschließlich Beispielen, findest du unter [Erstellen eines Pull Requests](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository).

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Navigiere zum ursprünglichen Repository, von dem Du den Fork erstellt hast.
{% data reusables.repositories.new-pull-request %}
3. Klicke auf der Seite „Vergleichen“ auf **Forkübergreifend vergleichen**.
  ![Link zum forkübergreifenden Vergleich](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. Wähle im „base branch" (Basis-Branch) Dropdownmenü den Branch des vorgelagerten Repository, in das Du die Änderungen zusammenführen willst.
  ![Dropdownmenüs zur Auswahl von Basisfork und -branch](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. Wähle im „head fork" (Head-Fork) Dropdownmenü Deinen Fork, dann nutze das compare branch" (Vergleichs-Branch) Dropdownmenü zur Auswahl des Branches, in dem Du die Änderungen gemacht hast.
  ![Dropdownmenüs zum Auswählen von Headfork und Vergleichsbranch](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png) {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## Weiterführende Themen

- [Arbeiten mit Forks](/articles/working-with-forks)
- [Zulassen von Änderungen an einem Pull Request-Branch, der über einen Fork erstellt wurde](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
