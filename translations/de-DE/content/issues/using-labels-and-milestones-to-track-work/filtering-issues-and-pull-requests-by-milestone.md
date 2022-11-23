---
title: Issues und Pull Requests nach Meilenstein filtern
intro: 'Issues und Pull Requests können nach dem Meilenstein gefiltert werden, mit dem sie verknüpft sind. Wenn du [ein Issue oder einen Pull Request mit einem Meilenstein verknüpft hast](/articles/associating-milestones-with-issues-and-pull-requests), kannst du Elemente anhand ihrer Meilensteine finden. Innerhalb eines Meilensteins kannst du Issues und Pull Requests priorisieren.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
ms.openlocfilehash: 6eda4a52df3212b37c3052832291f03aa2285fd5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130922'
---
{% tip %}

**Tipps:**

- Wenn du Issues und Pull Requests lieber über die Suchleiste filtern möchtest, kannst du die Meilenstein-Such-Syntax verwenden. Für einen Meilenstein mit dem Namen „My Milestone“ sieht die Suchsyntax wie folgt aus: `milestone:"My Milestone"`.
- Klicke zum Zurücksetzen des ausgewählten Filters auf **Aktuelle Suchabfrage, Filter und Sortierung löschen**.
-  Du kannst Issues oder Pull Requests auch mithilfe der {% data variables.product.prodname_cli %} filtern. Weitere Informationen findest du unter [`gh issue list`](https://cli.github.com/manual/gh_issue_list) oder unter [`gh pr list`](https://cli.github.com/manual/gh_pr_list) in der Dokumentation zur {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Wähle **Meilensteine** aus, um eine Liste aller Meilensteine anzuzeigen, die für das Repository verfügbar sind.
  ![Schaltfläche „Meilensteine“](/assets/images/help/issues/issues_milestone_button.png)
4. Wähle den Meilenstein, für den du dich interessierst, aus der Liste aus. Auf der Meilenstein-Seite kannst du relevante Informationen für den Meilenstein anzeigen, einschließlich aller mit ihm verknüpften Issues und Pull Requests. Weitere Informationen findest du unter [Informationen zu Meilensteinen](/articles/about-milestones).

## Weiterführende Themen

- [Filtern und Suchen von Issues und Pull Requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)
- [Tickets auf einem Projektboard filtern](/articles/filtering-cards-on-a-project-board)
