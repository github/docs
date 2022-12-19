---
title: Einen Pull Request zusammenführen
intro: 'Führe einen Pull Request in den vorgelagerten Branch zusammen, wenn die Arbeit abgeschlossen ist. Jede Person mit Push-Zugriff auf das Repository kann den Merge abschließen.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: cccb85404c9cfe7305d639911528afed3706edfa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132986'
---
## Informationen zum Zusammenführen von Pull Requests

Mit einem Pull Request schlägst Du vor, dass Änderungen, die Du an einem Head-Branch gemacht hast, in einen Basis-Branch zusammengeführt werden sollten. Standardmäßig kann jeder Pull Request jederzeit zusammengeführt werden, es sei denn, der Head-Branch steht in Konflikt mit dem Basisbranch. Eventuell gibt es jedoch Einschränkungen bezüglich wann du ein Pull Request in einen bestimmten Branch mergen kannst. So kannst du einen Pull Request beispielsweise nur in den Standardbranch mergen, wenn alle erforderlichen Statuschecks bestanden wurden. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches).

{% data reusables.pull_requests.you-can-auto-merge %}

Wenn bei dem Pull Request Mergekonflikte auftreten oder du die Änderungen vor dem Mergen testen möchtest, kannst du [den Pull Request lokal auschecken](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) und ihn mit der Befehlszeile mergen.

Pull-Request-Entwürfe kannst du nicht zusammenführen. Weitere Informationen zu Entwürfen von Pull Requests findest du unter [Informationen zu Pull Requests](/articles/about-pull-requests#draft-pull-requests).

Dein Repository könnte so konfiguriert sein, dass der Headbranch eines Pull Requests automatisch gelöscht wird, wenn du ein Pull Request mergest. Weitere Informationen findest du unter [Verwalten der automatischen Löschung von Branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches).

{% note %}

**Hinweis:** {% data reusables.pull_requests.retargeted-on-branch-deletion %} Weitere Informationen findest du unter [Informationen zu Branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches).

{% endnote %}

Pull Requests werden mithilfe [der `--no-ff`-Option](https://git-scm.com/docs/git-merge#_fast_forward_merge) zusammengeführt, außer [Pull Requests mit Squashcommits oder Commits, für die ein Rebase ausgeführt wurde](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges). Diese werden mit der Fast-Forward-Option zusammengeführt.

{% data reusables.pull_requests.close-issues-using-keywords %}

Wenn du die Änderungen in einem Topic-Branch nicht in den Upstream-Branch mergen möchtest, kannst du ohne Mergen [den Pull Request schließen](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request).

## Einen Pull Request zusammenführen

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste „Pull Requests“ auf den Pull Request, den Du zusammenführen möchtest.
3. Je nach den Merge-Optionen, die für Dein Repository aktiviert sind, stehen Dir folgende Möglichkeiten zur Verfügung:
    - [Führe alle Commits in den Basebranch zusammen](/articles/about-pull-request-merges/), indem du auf **Pull Request mergen** klickst. Wenn die Option **Pull Request mergen** nicht angezeigt wird, klicke auf die Dropdownliste für das Mergen, und wähle **Mergecommit erstellen** aus.
    ![merge-pull-request-button](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Squashe die Commits in ein Commit](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits), indem du auf die Dropdownliste zum Mergen klickst, **Squashen und mergen** auswählst und dann auf die Schaltfläche **Squashen und mergen** klickst.
    ![Klicken auf die Schaltfläche „Squashen und mergen“](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Führe für die Commits separat Rebases auf den Basebranch aus](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits), indem du auf die Dropdownliste zum Mergen klickst, **Rebase ausführen und mergen** auswählst und dann auf die Schaltfläche **Rebase ausführen und mergen** klickst.
    ![Auswählen von „Rebase ausführen und mergen“ aus der Dropdownliste](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Hinweis:** „Rebase ausführen und mergen“ sorgt immer dafür, dass die Committerinformationen aktualisiert und neue Commit-SHAs erstellt werden. Weitere Informationen findest du unter [Informationen zum Mergen von Pull Requests](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits).

    {% endnote %}
4. Wenn Du dazu aufgefordert wirst, gib eine Commit-Mitteilung ein oder akzeptiere die Standardmitteilung.

   {% data reusables.pull_requests.default-commit-message-squash-merge %} ![Commitmeldungsfeld](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Hinweis:** Der E-Mail-Selektor ist für Rebasemerges, die kein Mergecommit erstellen, nicht verfügbar. Das gleiche gilt für Squashmerges, die den oder die Benutzer*in als Autor*in des Squashcommits angeben, der oder die den Pull Request erstellt hat.

   {% endnote %}

6. Klicke auf **Merge bestätigen**, **Squash und Merge bestätigen** oder **Rebase und Merge bestätigen**.
6. [Lösche optional den Branch](/articles/deleting-unused-branches). So bleibt die Liste der Branches in Deinem Repository ordentlich.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Verwende den Unterbefehl `gh pr merge`, um einen Pull Request zu mergen. Ersetze `pull-request` durch die Nummer, die URL oder den HEAD-Branch des Pull Requests.

```shell
gh pr merge <em>pull-request</em>
```

Folge den interaktiven Aufforderungen, um den Merge abzuschließen. Weitere Informationen zu den auswählbaren Mergemethoden findest du unter [Informationen zum Mergen von Pull Requests](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges).

Alternativ kannst du Flags verwenden, um die interaktiven Aufforderungen zu überspringen. Dieser Befehl beispielsweise squasht die Commits mit der Commitmeldung „my squash commit“ in einen einzigen Commit, merget den Squashcommit in den Basebranch und löscht dann den lokalen und den Remotebranch.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## Weiterführende Themen

- [Rückgängigmachen eines Pull Requests](/articles/reverting-a-pull-request)
- [Synchronisieren deines Branches](/desktop/guides/contributing-to-projects/syncing-your-branch/) mithilfe von {% data variables.product.prodname_desktop %}
- [Informationen zum Zusammenführen von Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [Beheben von Mergekonflikten](/github/collaborating-with-pull-requests/addressing-merge-conflicts)
