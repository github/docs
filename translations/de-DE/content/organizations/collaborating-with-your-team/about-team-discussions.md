---
title: Informationen zu Teamdiskussionen
intro: 'Dein Team kann in Diskussionsbeiträgen auf der Teamseite einer Organisation gemeinsam planen, sich gegenseitig auf den neuesten Stand bringen oder über jedes beliebige Thema sprechen.'
redirect_from:
  - /articles/about-team-discussions
  - /github/building-a-strong-community/about-team-discussions
  - /github/setting-up-and-managing-organizations-and-teams/about-team-discussions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 173a067c99ff6ab10ceb6d7f0a7ef288de58b658
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130866'
---
{% data reusables.organizations.team-discussions-purpose %}

Jedes Organisationsmitglied kann Beiträge auf der Seite deines Teams veröffentlichen oder an einer öffentlichen Diskussion teilnehmen. {% data reusables.organizations.team-discussions-permissions %}

![Registerkarte mit Diskussionen auf einer Teamseite mit öffentlichen und privaten Diskussionen](/assets/images/help/organizations/team-page-discussions-tab.png)

Du kannst auf jede Teamdiskussion verknüpfen, um sie an anderer Stelle zu referenzieren. Du kannst wichtige Beiträge an die Seite deines Teams anheften, um sie später schnell wiederzufinden. Weitere Informationen findest du unter [Anheften einer Teamdiskussion](/organizations/collaborating-with-your-team/pinning-a-team-discussion).

![Registerkarte mit angehefteten Diskussionen auf einer Teamseite mit angehefteter Diskussion](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %}-Inhaber können Teamdiskussionen für die gesamte Organisation deaktivieren. Weitere Informationen findest du unter [Deaktivieren von Teamdiskussionen für deine Organisation](/articles/disabling-team-discussions-for-your-organization).

## Benachrichtigungen für Teamdiskussionen

Wenn jemand eine öffentliche Diskussion auf der Seite eines Teams veröffentlicht oder beantwortet, erhalten Mitglieder des Teams und Mitglieder von untergeordneten Teams E-Mail- oder Webbenachrichtigungen. Wenn jemand eine private Diskussion auf der Seite eines Teams veröffentlicht oder beantwortet, erhalten nur Mitglieder des Teams Benachrichtigungen.

{% tip %}

**Tipp:** Abhängig von deinen Benachrichtigungseinstellungen erhältst du Aktualisierungen per E-Mail, über die Seite mit den Webbenachrichtigungen auf {% data variables.product.product_name %} oder beides. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications).

{% endtip %}

Wenn dein Benutzername in einer Teamdiskussion erwähnt wird, erhältst du standardmäßig Benachrichtigungen für den Beitrag, in dem dein Benutzername erwähnt wird, und alle Antworten auf diesen Beitrag. Außerdem erhältst du standardmäßig Benachrichtigungen für andere Antworten auf einen von Dir beantworteten Beitrag.

Um Benachrichtigungen für Teamdiskussionen zu deaktivieren, kannst du einen bestimmten Diskussionsbeitrag kündigen oder deine Benachrichtigungseinstellungen so ändern, dass du die Diskussionen eines bestimmten Teams nicht mehr beobachtest oder vollständig ignorierst. Du kannst Benachrichtigungen für einen bestimmten Diskussionsbeitrag abonnieren, auch wenn du die Diskussionen dieses Teams nicht beobachtest.

Weitere Informationen findest du unter [Anzeigen deiner Abonnements](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions) und [Geschachtelte Teams](/articles/about-teams/#nested-teams).

{% ifversion fpt or ghec %}

## Organisationsdiskussionen

Du kannst auch Organisationsdiskussionen verwenden, um Unterhaltungen in deiner Organisation zu erleichtern. Weitere Informationen findest du unter [Aktivieren oder Deaktivieren von GitHub Discussions für eine Organisation](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization).

{% endif %}

## Weiterführende Themen

- [Schnellstart für die Kommunikation mit {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)
- [Informationen zu Teams](/articles/about-teams)
- [Erstellen einer Teamdiskussion](/organizations/collaborating-with-your-team/creating-a-team-discussion)
- [ bearbeiten oder löschen einer Teamdiskussion](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)
