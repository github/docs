---
title: Informationen zum persönlichen Dashboard
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
  - /articles/opting-into-the-public-beta-for-a-new-dashboard
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: 'Über dein persönliches Dashboard kannst du über Issues und Pull Requests, die du bearbeitest oder verfolgst, auf dem Laufenden bleiben .Du kannst zu deinen wichtigsten Repositorys und Teamseiten navigieren, dich über die neuesten Aktivitäten in Organisationen und Repositorys informieren, die du abonniert hast, und empfohlene Repositorys erkunden.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: ee22085e669eedec2e0a9f298cc4d5ad144316c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179151'
---
## Auf dein persönliches Dashboard zugreifen

Dein persönliches Dashboard ist die erste Seite, die du siehst, wenn du dich bei {% data variables.product.product_name %} anmeldest.

Wenn du nach der Anmeldung auf dein persönliches Dashboard zugreifen möchtest, klicke auf das {% octicon "mark-github" aria-label="The github octocat logo" %}-Logo in der oberen linken Ecke einer beliebigen Seite auf {% data variables.product.product_name %}.

## Neueste Aktivitäten finden

Im Abschnitt „Recent activity“ (Neueste Aktivitäten) deines Newsfeed kannst du schnell die zuletzt aktualisierten Issues und Pull Requests, an denen du arbeitest, finden und weiterverfolgen. Im Abschnitt „Letzte Aktivität“ kannst du bis zu vier der letzten Aktualisierungen anzeigen, die in den vergangenen zwei Wochen erfolgt sind.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## Deine wichtigsten Repositorys und Teams finden

Über die linke Seitenleiste deines Dashboards kannst du auf die wichtigsten Repositorys und Teams zugreifen, die du verwendest.

![Liste mit Repositorys und Teams verschiedener Organisationen](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

Die Liste der wichtigsten Repositorys wird automatisch generiert und kann jedes Repository enthalten, mit dem du interagiert hast, unabhängig davon, ob es sich direkt im Besitz deines Kontos befindet oder nicht. Zu diesen Interaktionen gehören das Durchführen von Commits oder das Erstellen oder Kommentieren von Issues und Pull Requests. Die Liste der wichtigsten Repositorys kann nicht bearbeitet werden. Die Repositorys werden vier Monate, nachdem du das letzte Mal mit ihnen interagiert hast, von der Liste genommen.

Wenn du oben auf einer beliebigen Seite auf {% data variables.product.product_name %} in die Suchleiste klickst, findest du außerdem eine Liste deiner zuletzt aufgerufenen Repositorys, Teams und Projektboards.

## Über Aktivitäten in der Community auf dem Laufenden bleiben

{% ifversion for-you-feed %} Im Hauptabschnitt deines Dashboards gibt es zwei Aktivitätsfeeds:

- Ich folge: Aktivitäten von Personen und Repositorys, denen du folgst
- Für dich: Aktivitäten und Empfehlungen, die auf deinem {% data variables.product.product_name %}-Netzwerk basieren

### Der Feed „Ich folge“

In diesem Feed werden Aktivitäten von Repositorys und Benutzer*innen angezeigt, an denen du Interesse gezeigt hast, da du dem*der Benutzer*in oder einem Repository folgst. So werden beispielsweise Updates angezeigt, wenn Benutzer*innen, denen du folgst, Folgendes tun:

{% else %} Im Abschnitt „Alle Aktivitäten“ deines Newsfeeds kannst du Updates zu Repositorys und Benutzer*innen anzeigen, denen du folgst.

In deinem Newsfeed werden Updates angezeigt, wenn Benutzer*innen, denen du folgst, Folgendes tun: {% endif %}


- Ein Repository mit einem Stern versieht.
- Anderen Benutzer*innen folgen{% ifversion fpt or ghes or ghec %}
- Ein öffentliches Repository erstellen{% endif %}
- Einen Issue oder Pull Request mit der Kennzeichnung „help wanted“ oder „good first issue“ in einem von Dir beobachteten Repository öffnet.
- Commits an ein Repository pushen, dem du folgst{% ifversion fpt or ghes or ghec %}
- Ein öffentliches Repository forken{% endif %}
- Ein neues Release veröffentlichen

Weitere Informationen zum Folgen von Personen und Repositorys findest du unter [Folgen von Personen](/get-started/exploring-projects-on-github/following-people) und [Zusammenarbeit](/get-started/quickstart/be-social).

{% ifversion for-you-feed %}
### Der Feed „Für dich“

{% note %}

**Hinweis:** Diese neue Registerkarte befindet sich derzeit in der öffentlichen Betaversion und kann geändert werden. 

{% endnote %}

In diesem Feed werden Aktivitäten und Empfehlungen angezeigt, die auf deinem Netzwerk auf {% data variables.product.product_name %} basieren. Dieser dient dazu, interessante Updates anzuzeigen, dich auf dem neuesten Stand zu halten und dir zu helfen, neue Communitys zu finden, an denen du teilhaben möchtest. Dein Netzwerk umfasst:

- Repositorys, die du mit einem Stern markiert hast
- Repositorys, zu denen du beigetragen hast
- Benutzer*innen, denen du folgst oder die du finanziell unterstützt
- Benutzer*innen, mit denen du zusammengearbeitet hast
- Organisationen, denen du folgst

{% endif %}

## Empfohlene Repositorys erkunden

Im Abschnitt "Explore repositories" (Repositories erkunden) auf der rechten Seite deines Dashboards kannst du empfohlene Repositorys in deinen Communities erkunden. Die Empfehlungen basieren darauf, welche Repositorys du mit einem Stern markiert oder besucht hast, welchen Personen du folgst und auf welche Repositorys du Zugriff hast.{% ifversion fpt or ghec %} Weitere Informationen findest du unter [Beitragen zu Open-Source-Projekten auf {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github).{% endif %}

## Weiterführende Themen

- [Informationen zum Dashboard deiner Organisation](/articles/about-your-organization-dashboard)
