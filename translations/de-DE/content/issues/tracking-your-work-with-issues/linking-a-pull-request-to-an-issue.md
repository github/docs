---
title: Einen Pull Request zu einem Issue verknüpfen
intro: 'Du kannst einen Pull Request {% ifversion link-existing-branches-to-issue %}oder Branch {% endif %}mit einem Issue verknüpfen, um anzuzeigen, dass ein Fix in Bearbeitung ist und dass das Issue automatisch geschlossen werden soll, wenn der Pull Request {% ifversion link-existing-branches-to-issue %}oder Branch {% endif %} gemergt wird.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message
  - /articles/closing-issues-via-commit-messages
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Link PR to issue
ms.openlocfilehash: 8c3ec2b778029c91d0e97783ced873e6b9b28a9b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109366'
---
{% note %}

**Hinweis:** Die speziellen Schlüsselwörter in einer Pull Request-Beschreibung werden interpretiert, wenn der Pull Request auf den *Standardbranch* des Repositorys ausgerichtet ist. Wenn die PR-Basis jedoch einen *anderen Branch* ist, werden diese Schlüsselwörter ignoriert, werden keine Links erstellt und das Zusammenführen des PR hat keine Auswirkungen auf die Probleme. **Wenn du eine Pull Request mit einem Schlüsselwort verknüpfen möchtest, muss sich der PR auf der Standardverzweigung befinden.**

{% endnote %}

## Über verknüpfte Issues und Pull Requests

Du kannst einen Pull Request mit einem Issue über unterstützte Schlüsselwörter in der Pull Request-Beschreibung verknüpfen.

Wenn du einen Pull Request mit dem Issue verknüpfst, der vom Pull Request adressiert wird, dann können Mitarbeiter sehen, dass jemand am Issue arbeitet.

Wenn du einen verknüpften Pull Request in den Standard-Branch eines Repository zusammenführst, werden seine verknüpften Issues automatisch geschlossen. Weitere Informationen zum Standardzweig findest du unter „[Ändern der Standardverzweigung](/github/administering-a-repository/changing-the-default-branch)“.

## Einen Pull Request über ein Stichwort mit einem Issue verknüpfen

Du kannst einen Pull Request mit einem Issue über unterstützte Schlüsselwörter in der Pull Request-Beschreibung oder in einer Commit-Meldung verknüpfen. Der Pull Request **muss** sich auf der Standardverzweigung befinden.

* close
* closes (wird geschlossen)
* closed
* Korrektur
* fixes (korrigiert)
* fixed
* resolve
* resolves (löst)
* gelöst

Wenn du ein Schlüsselwort verwendest, um auf einen Pull Request-Kommentar in einem anderen Pull Request zu verweisen, werden die Pull Requests verknüpft. Durch das Zusammenführen des referenzierenden Pull Requests wird auch der referenzierte Pull Request geschlossen.

Die Syntax für schließende Schlüsselwörter hängt davon ab, ob der Issue im gleichen Repository ist wie der Pull Request.

Verknüpfter Issue | Syntax | Beispiel
--------------- | ------ | ------
Issue ist im gleichen Repository | *SCHLÜSSELWORT* #*ISSUE-NUMMER* | `Closes #10`
Issue ist in einem unterschiedlichen Repository | *SCHLÜSSELWORT* *BESITZER*/*REPOSITORY*#*ISSUE-NUMMER* | `Fixes octo-org/octo-repo#100`
Mehrfache Issues | Verwende für jeden Issue die vollständige Syntax | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

Nur manuell verknüpfte Pull Requests können manuell getrennt werden. Um die Verknüpfung eines Issues zu trennen, den du über ein Schlüsselwort verknüpft hast, musst du die Pull Request-Beschreibung bearbeiten, um das Schlüsselwort zu entfernen.

Du kannst schließende Schlüsselwörter auch in einer Commit-Mitteilung verwenden. Der Issue wird geschlossen, wenn du den Commit in den Standardbranch zusammenführst, aber der Pull Request, der den Commit enthält, wird nicht als verknüpfter Pull Request aufgeführt.

## Manuelles Verknüpfen eines Pull Requests mit einem Issue mithilfe der Pull Request-Randleiste

Jeder, der über Schreibberechtigungen für ein Repository verfügt, kann einen Pull Request über die Pull Request-Randleiste manuell mit einem Issue verknüpfen.

Du kannst bis zu 10 Issues manuell mit jedem Pull Request verknüpfen. Der Issue und der Pull Request müssen im gleichen Repository sein.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. Klicke in der Liste der Pull Requests auf den Pull Request, den du mit einem Issue verknüpfen möchtest.
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
4. Klicke in der rechten Querleiste im Abschnitt „Entwicklung“ auf {% octicon "gear" aria-label="The Gear icon" %}.
{% else %}
4. Klicke in der rechten Seitenleiste auf **Verknüpfte Issues**.
  ![Verknüpfte Issues in der rechten Seitenleiste](/assets/images/help/pull_requests/linked-issues.png) {% endif %}
5. Klicke auf den Issue, den du mit dem Pull Request verknüpfen willst.
  ![Dropdownmenü, um Issues zu verknüpfen](/assets/images/help/pull_requests/link-issue-drop-down.png)

{% ifversion link-existing-branches-to-issue %}

## Manuelles Verknüpfen eines Pull Requests oder eines Branchs mit einem Issue mithilfe der Issuerandleiste

Jeder, der über Schreibberechtigungen für ein Repository verfügt, kann einen Pull Request oder einen Branch über die Issuerandleiste manuell mit einem Issue verknüpfen.

Du kannst bis zu 10 Issues manuell mit jedem Pull Request verknüpfen. Das Issue kann sich in einem anderen Repository befinden als der verknüpfte Pull Request oder Branch. Dein zuletzt ausgewähltes Repository wird gespeichert. 

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Klicke in der Liste der Issues auf das Issue, mit dem du einen Pull Request oder einen Branch verknüpfen möchtest.
4. Klicke auf der rechten Randleiste auf **Entwicklung**.
  ![Menü „Entwicklung“ auf der rechten Randleiste](/assets/images/help/issues/development-menu.png)
5. Klicke auf das Repository, das den Pull Request oder den Branch enthält, den du mit dem Issue verknüpfen möchtest.
  ![Dropdown zum Auswählen des Repositorys](/assets/images/help/issues/development-menu-select-repository.png)
6. Klicke den Pull Request oder den Branch, den du mit dem Issue verknüpfen möchtest.
  ![Dropdown zum Verknüpfen eines Pull Requests oder Branchs](/assets/images/help/issues/development-menu-select-pr-or-branch.png)
7. Klicken Sie auf **Anwenden**.
  ![Anwenden](/assets/images/help/issues/development-menu-apply.png)

{% endif %}

## Weitere Informationsquellen

* „[Automatisch verlinkte Verweise und URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)“
