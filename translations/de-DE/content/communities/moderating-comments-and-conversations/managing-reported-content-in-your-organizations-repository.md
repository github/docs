---
title: Gemeldete Inhalte im Repository Deiner Organisation verwalten
intro: 'Nachdem ein Mitwirkender einen störenden Inhalt in einem Repository gemeldet hat, können die Repository-Betreuer den Bericht ansehen und verwalten.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - Community
shortTitle: Manage reported content
ms.openlocfilehash: 6b2107acd7a045e089814177dbabae24915d7ae1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105420'
---
Personen mit Administratorberechtigungen auf ein Repository können gemeldete Inhalte für das Repository anzeigen und verwalten.

## Über die Verwaltung von gemeldeten Inhalten

Bevor Du gemeldete Inhalte anzeigen oder verwalten kannst, musst Du „gemeldete Inhalte" für das Repository aktivieren. Weitere Informationen findest du unter [Verwalten der Meldung von Missbrauch durch Mitwirkende im Repository deiner Organisation](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository).

Du kannst Berichte über störende Inhalte verfolgen, bewerten und darauf reagieren. In der Liste "Missbrauchsberichte" kannst Du alle Berichte anzeigen und direkt zu jedem gemeldeten Kommentar auf {% data variables.product.prodname_dotcom %} navigieren.

{% data reusables.community.tools-for-moderating %}

Nachdem Du die Moderation des störenden Inhalts abgeschlossen hast, kannst Du den Bericht als erledigt markieren. Wenn Du entscheidest, dass Du die Moderation noch nicht beendet hast, kannst Du den Bericht auch als ungelöst markieren.

## Inhalte anzeigen, die ein Mitwirkender gemeldet hat

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. Klicke rechts neben dem gemeldeten Inhalt, den du ansehen möchtest, auf {% octicon "kebab-horizontal" aria-label="The edit icon" %} und dann auf **Inhalt anzeigen**.
  ![„Inhalt anzeigen“ im Dropdownmenü „Bearbeiten“ für gemeldeten Inhalt](/assets/images/help/repository/reported-content-report-view-content.png)

## Einen Bericht erledigen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. Klicke rechts neben der Meldung, die du auflösen möchtest, auf {% octicon "kebab-horizontal" aria-label="The edit icon" %} und dann auf **Als gelöst markieren**.
  ![„Als gelöst markieren“ im Dropdownmenü „Bearbeiten“ für gemeldeten Inhalt](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

## Einen Bericht als ungelöst markieren

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %} {% data reusables.repositories.reported-content-resolved-tab %}
5. Klicke rechts neben der Meldung, die du als ungelöst markieren möchtest, auf {% octicon "kebab-horizontal" aria-label="The edit icon" %} und dann auf **Als ungelöst markieren**.
  ![„Als ungelöst markieren“ im Dropdownmenü „Bearbeiten“ für gemeldeten Inhalt](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

## Weiterführende Themen

- [Informationen zur Communityverwaltung und -moderation](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)
