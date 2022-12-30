---
title: Informationen zu Branches
intro: 'Verwende einen Branch, um die Entwicklungsarbeit ohne Auswirkungen auf andere Branches im Repository zu isolieren. Jedes Repository hat einen Standardbranch und kann mehrere weitere Branches haben. Du kannst einen Branch mit einem anderen Branch über einen Pull Request zusammenführen.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches
  - /articles/about-branches
  - /github/collaborating-with-issues-and-pull-requests/about-branches
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 0262a7a8fb0bb8556c3f6062e3fc8512eb9fa1c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133934'
---
## Informationen zu Branches

Branches ermöglichen dir das Entwickeln von Features, Beheben von Fehlern und sichere Experimentieren mit neuen Ideen in einem Bereich deines Repositorys.

Du erstellst einen Branch immer aus einem existierenden Branch. Normalerweise würdest du einen neuen Branch aus dem Standardbranch deines Repositorys erstellen. Da kannst dann in diesem Branch unabhängig von Änderungen arbeiten, die andere Personen im Repository machen. Ein Branch, den Du zur Erstellung einer Funktion aufbaust, wird häufig als Funktions-Branch oder Themen-Branch bezeichnet. Weitere Informationen findest du unter [Erstellen und Löschen von Branches innerhalb deines Repositorys](/articles/creating-and-deleting-branches-within-your-repository/).

Du kannst einen Branch auch verwenden, um eine {% data variables.product.prodname_pages %}-Website zu veröffentlichen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %}](/articles/what-is-github-pages).

Du benötigst Schreibzugriff auf ein Repository, um einen Branch zu erstellen, einen Pull Request zu öffnen oder Branches in einem Pull Request zu löschen und wiederherzustellen. Weitere Informationen findest du unter [Zugriffsberechtigungen für {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github).

## Informationen zum Standardbranch

{% data reusables.branches.new-repo-default-branch %} Der Standardbranch ist der Branch, den {% data variables.product.prodname_dotcom %} anzeigt, wenn eine Person dein Repository aufruft. Der Standardbranch ist auch der erste Branch, den Git lokal auscheckt, wenn eine jemand dein Repository klont. {% data reusables.branches.default-branch-automatically-base-branch %}

Der Standardbranch wird von {% data variables.product.product_name %} in jedem neuen Repository standardmäßig `main` genannt.

{% data reusables.branches.change-default-branch %}

{% data reusables.branches.set-default-branch %}

## Mit Branches arbeiten

Wenn du mit deiner Arbeit zufrieden bist, kannst du einen Pull Request öffnen, um die Änderungen im aktuellen Branch (*Headbranch*) in einen anderen Branch (*Basisbranch*) zu mergen. Weitere Informationen findest du unter [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Nachdem ein Pull Request zusammengeführt oder geschlossen wurde, kannst Du den Head-Branch löschen, da dieser nicht mehr länger benötigt wird. Du benötigst Schreibzugriff auf dem Repository, um Branches zu löschen. Du kannst keine Branches löschen, die direkt mit einem offenen Pull Request verbunden sind. Weitere Informationen findest du unter [Löschen und Wiederherstellen von Branches in einem Pull Request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request).

{% data reusables.pull_requests.retargeted-on-branch-deletion %} Die folgenden Diagramme veranschaulichen diesen Vorgang.

 In diesem Fall hat jemand einen Branch namens `feature1` aus dem `main`-Branch erstellt, und du hast dann einen Branch namens `feature2` aus `feature1` erstellt. Es gibt für beide Branches offene Pull Requests. Der Pfeil zeigt den aktuellen Basis-Branch für jeden Pull Request an. Zu diesem Zeitpunkt ist `feature1` der Basisbranch für `feature2`. Wenn der Pull Request für `feature2` jetzt gemergt wird, wird der `feature2`-Branch in `feature1` gemergt.

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram1.png)

Im nächsten Diagramm hat jemand den Pull Request für `feature1` in den `main`-Branch gemergt und den `feature1`-Branch gelöscht. Daher hat {% data variables.product.prodname_dotcom %} den Pull Request für `feature2` automatisch umgeleitet, sodass dessen Basisbranch nun `main` ist.

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram2.png)

Wenn du nun den Pull Request `feature2` mergst, wird er in den `main`-Branch gemergt.

## Mit geschützten Branches arbeiten

Repository-Administratoren können den Schutz für einen Branch aktivieren. Wenn Du auf einem geschützten Branch arbeitest, kannst Du den Push an den Branch nicht löschen oder erzwingen. Repository-Administratoren können zusätzlich mehrere andere Einstellungen für geschützte Branches aktivieren, um verschiedene Workflows zu erzwingen, bevor ein Branch zusammengeführt werden kann.

{% note %}

**Hinweis:** Wenn du Repositoryadministrator*in bist, kannst du Pull Requests in Branches mit aktivierten Branchschutzmechanismen mergen, auch wenn der Pull Request die Anforderungen nicht erfüllt, es sei denn, die Branchschutzmechanismen wurden auf „Administratoren einbeziehen“ festgelegt.

{% endnote %}

Navigiere zum Mergefeld unten auf der Registerkarte **Konversation** des Pull Requests, um herauszufinden, ob dein Pull Request gemergt werden kann. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/articles/about-protected-branches).

Wenn ein Branch geschützt ist, trifft Folgendes zu:

- Du kannst einen Push an den Branch nicht löschen oder erzwingen.
- Wenn die erforderlichen Statuschecks für den Branch aktiviert sind, kannst Du Änderungen erst dann in den Branch zusammenführen, wenn alle erforderlichen CI-Tests bestanden sind. Weitere Informationen findest du unter [Informationen zu Statusüberprüfungen](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).
- Wenn erforderliche Pull-Request-Reviews auf dem Branch aktiviert sind, kannst Du Änderungen erst dann in den Branch zusammenführen, wenn alle Anforderungen der Richtlinie für Pull-Request-Reviews erfüllt sind. Weitere Informationen findest du unter [Mergen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).
- Wenn der erforderliche Review von einem Codeinhaber auf einem Branch aktiviert ist und der Code mit einem Inhaber durch einen Pull Request geändert wird, muss ein Codeinhaber den Pull Request genehmigen, bevor er zusammengeführt werden kann. Weitere Informationen findest du unter [Informationen zu Codebesitzern](/articles/about-code-owners).
- Wenn die obligatorische Commit-Signatur auf einem Branch aktiviert ist, kannst Du keine Commits an den Branch übertragen, die nicht signiert und verifiziert sind. Weitere Informationen findest du unter [Informationen zur Überprüfung der Commitsignatur](/articles/about-commit-signature-verification) und [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-signed-commits).
- Wenn du den Konflikt-Editor von {% data variables.product.prodname_dotcom %} benutzt, um Konflikte für einen Pull Request zu beheben, den du aus einem geschützten Branch erstellt hast, hilft dir {% data variables.product.prodname_dotcom %} dabei, einen alternativen Branch für den Pull Request zu erstellen, sodass deine Auflösung der Konflikte gemergt werden kann. Weitere Informationen findest du unter [Auflösen eines Mergekonflikts unter {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github).

## Weiterführende Themen

- [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Branch](/articles/github-glossary/#branch) im {% data variables.product.prodname_dotcom %}-Glossar
- [Übersicht über Branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) in der Git-Dokumentation
