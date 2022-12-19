---
title: Schließen eines Problems
intro: 'Du kannst ein Issue schließen, wenn Fehler behoben wurden, Feedback umgesetzt wurde oder um zu zeigen, dass keine weiteren Aktivitäten geplant sind.'
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue
ms.openlocfilehash: 889775474dc94f10c62e59916e1fa13b263b3474
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060426'
---
{% note %}

**Hinweis**: Du kannst Issues auch automatisch mittels Schlüsselwörtern in Pull Requests und Commitnachrichten schließen. Weitere Informationen findest du unter [Verknüpfen eines Pull Requests mit einem Issue](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword).

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
1. Klicke in der Issueliste auf das Issue, das du schließen möchtest.
{%- ifversion issue-close-reasons %}
1. Wenn du den Grund für das Schließen des Issues ändern möchtest, wähle {% octicon "triangle-down" aria-label="The down triangle octicon" %} neben „Issue schließen“ aus und klicke auf einen Grund.
   ![Screenshot des Dropdownmenüs mit Gründen zum Schließen des Issues](/assets/images/help/issues/close-issue-select-reason.png)
2. Klicke auf **Issue schließen**.
   ![Screenshot der Schaltfläche „Issue schließen“](/assets/images/help/issues/close-issue-with-reason.png) {%- else %}
1. Klicke unten auf der Seite auf **Issue schließen**.
   ![Screenshot der Schaltfläche „Issue schließen“](/assets/images/help/issues/close-issue.png) {% endif %}
