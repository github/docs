---
title: 'Änderungen an einen Pull-Request-Branch committen, der von einem Fork erstellt wurde'
intro: 'Du kannst Änderungen an einen Pull-Request-Branch freigeben, der von einem Fork Deines Repositorys erstellt wurde, wenn die Erlaubnis des Pull-Request-Erstellers vorliegt.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Commit to PR branch from fork
ms.openlocfilehash: 123775ecbcc199382fe2082f22ad04db21fb9661
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132978'
---
Commits sind nur an Pull-Request-Branches möglich, auf die Folgendes zutrifft:
- sie sind in einem Repository geöffnet, auf das Du Push-Zugriff hast, und wurden von einem Fork dieses Repositorys erstellt
- sie sind auf einer benutzereigenen Fork
- sie haben die Berechtigung des Pull-Request-Erstellers erhalten
- sie besitzen keine [Brancheinschränkungen](/github/administering-a-repository/about-protected-branches#restrict-who-can-push-to-matching-branches), die den Commit verhindern.

Nur der Benutzer, der den Pull Request erstellt hat, kann Dir die Erlaubnis erteilen, Commits zu seinem Branch zu übertragen. Weitere Informationen findest du unter [Zulassen von Änderungen an einem Pull Request-Branch, der aus einem Fork erstellt wurde](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

{% note %}

**Hinweis:** Du kannst auch Commits an einen Pull Request-Branch von einem Fork deines Repositorys über {% data variables.product.product_location %} übertragen, indem du deine eigene Kopie (oder einen eigenen Fork) des Forks deines Repositorys erstellst und die Änderungen an denselben Head-Branch committest, auf dem die ursprünglichen Pull-Request-Änderungen vorgenommen wurden. Einige allgemeine Richtlinien findest du unter [Erstellen eines Pull Requests aus einem Fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

{% endnote %}

1. Navigiere auf {% data variables.product.product_name %} zur Hauptseite des Forks (oder der Kopie deines Repositorys), auf dem der Pull-Request-Branch erstellt wurde.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% tip %}

 **Tipp:** Wenn du den Fork lieber mit {% data variables.product.prodname_desktop %} klonen möchtest, sieh dir [Klonen eines Repositorys zu {% data variables.product.prodname_desktop %}](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop) an.

 {% endtip %}
4. Ändere das aktuelle Arbeitsverzeichnis zum Speicherort, in den Du das geklonte Verzeichnis herunterladen möchtest.
  ```shell
  $ cd open-source-projects
  ```
5. Gib `git clone` ein, und füge dann die aus Schritt 3 kopierte URL ein.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. Drücke die **EINGABETASTE**. Dein lokaler Klon wird erstellt.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **Tipp:** Die Fehlermeldung „fatal: destination path 'REPOSITORY-NAME' already exists and is not an empty directory“ bedeutet, dass dein aktuelles Arbeitsverzeichnis bereits ein Repository mit demselben Namen enthält. Um den Fehler zu beheben, musst Du den Fork in ein anderes Verzeichnis klonen.

 {% endtip %}
7. Navigiere in Dein neu geklontes Repository.
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. Wechsle den Branch zu dem Vergleichs-Branch des Pull Requests, auf dem die ursprünglichen Änderungen vorgenommen wurden. Wenn Du zum ursprünglichen Pull Request navigierst, siehst Du den Vergleichs-Branch oben im Pull Request.
![compare-branch-example](/assets/images/help/pull_requests/compare-branch-example.png) In diesem Beispiel ist der Vergleichsbranch`test-branch`:
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **Tipp:** Weitere Informationen zu Pull Request-Branches, einschließlich Beispielen, findest du unter [Erstellen eines Pull Requests](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository).

 {% endtip %}
8. An diesem Punkt kannst Du mit diesem Branch machen, was Du möchtest. Du kannst neue Commits zu ihm pushen, lokale Tests durchführen oder andere Branches m Branch zusammenführen. Nimm nach Bedarf Änderungen vor.
9. Nachdem Du Deine Änderungen an den Head-Branch des Pull-Requests freigegeben hast, kannst Du Deine Änderungen direkt zum ursprünglichen Pull Request übertragen. In diesem Beispiel ist der Headbranch `test-branch`:
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

Deine neuen Commits werden auf dem ursprünglichen Pull Request auf {% data variables.product.product_location %} entsprechend wiedergegeben.

## Weitere Informationen

- [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
