---
title: Issue auf ein anderes Repository übertragen
intro: 'Wenn du einen offenen Issue in ein geeigneteres Repository verschieben möchtest, kannst du ihn in ein anderes Repository übertragen.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
ms.openlocfilehash: ee17296217027d2de9805a905aaec187f53e5614
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710419'
---
Für die Übertragung eines offenen Issues in ein anderes Repository benötigst du Schreibzugriff sowohl für das Repository, aus dem das Issue stammt, als auch für das Repository, in das das Issue übertragen wird. Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% note %}

**Hinweis**: Du kannst Issues nur zwischen Repositorys übertragen, die demselben Benutzer- oder Organisationskonto angehören. {% ifversion fpt or ghes or ghec %} Ein Issue eines privaten Repositorys kann nicht in ein öffentliches Repository übertragen werden.{% endif %}

{% endnote %}

Wenn du ein Issue überträgst, bleiben Kommentare und zugewiesene Personen erhalten. Bezeichnungen und Meilensteine werden ebenfalls beibehalten, wenn sie im Zielrepository vorhanden sind, wobei Bezeichnungen anhand des Namens und Meilensteine sowohl anhand des Namens als auch anhand des Fälligkeitsdatums abgeglichen werden. Dieses Issue bleibt bei allen benutzereigenen oder organisationsweiten Projektboards erhalten und wird aus allen Repository-Projektboards entfernt. Weitere Informationen findest du unter [Informationen zu Projektboards](/articles/about-project-boards).

Im Issue erwähnte Personen und Teams werden über die Übertragung des Issues in ein neues Repository benachrichtigt. Die ursprüngliche URL wird an die neue URL des Issues weitergeleitet. Personen, die für das neue Repository über keine Leseberechtigung verfügen, wird ein Banner angezeigt, das sie darüber informiert, dass der Issue in ein Repository übertragen wurde, auf das sie keinen Zugriff haben.

## Offener Issue in ein anderes Repository übertragen

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Klicke in der Liste der Issues auf den Issue, den du übertragen möchtest.
4. Klicke auf der rechten Randleiste auf **Issue übertragen**.
![Schaltfläche zum Übertragen eines Issues](/assets/images/help/repository/transfer-issue.png)
5. Wähle im Dropdownmenü **Repository auswählen** das Repository aus, in das du das Issue übertragen möchtest.
![Auswahl eines Repositorys](/assets/images/help/repository/choose-a-repository.png)
6. Klicke auf **Issue übertragen**.
![Schaltfläche „Issue übertragen“](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Führe zum Übertragen eines Issues den Unterbefehl `gh issue transfer` aus. Ersetze den `issue`-Parameter durch die Nummer oder URL des Issues. Ersetze den `{% ifversion ghes %}hostname/{% endif %}owner/repo`-Parameter durch den {% ifversion ghes %}URL-{% else %}Namen{% endif %} des Repositorys, in das du das Issue übertragen möchtest, z. B. `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## Weitere Informationsquellen

- [Informationen zu Issues](/articles/about-issues)
- [Sicherheitsprotokoll überprüfen](/articles/reviewing-your-security-log)
- [Überprüfen des Auditprotokolls deiner Organisation](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)
