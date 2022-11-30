---
title: Sperre eines Benutzers für deine Organisation aufheben
intro: Organisationsinhaber*innen und Moderator*innen können die Sperrung zuvor blockierter Benutzer*innen aufheben. Damit wird deren Zugriff auf die Repositorys der Organisation wiederhergestellt.
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your org
ms.openlocfilehash: 0c7099c21e3342717605f59a94e0025a7949b1cc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105427'
---
Nach der Aufhebung der Sperre kann der Benutzer wieder zu den Repositorys der Organisation beitragen.

Wenn du beim blockieren des Benutzers einen bestimmten Zeitraum für die Sperre ausgewählt hast, wird die Sperre nach diesem Zeitraum automatisch aufgehoben. Weitere Informationen findest du unter [Sperren eines Benutzers für deine Organisation](/articles/blocking-a-user-from-your-organization).

{% tip %}

**Tipp**: Einstellungen, die bei der Blockierung eines Benutzers entfernt wurden, beispielsweise der Mitarbeiterstatus, Sterne und Überwachungselemente, werden bei der Aufhebung der Blockierung nicht wiederhergestellt.

{% endtip %}

## Sperre eines Benutzers für einen Kommentar aufheben

1. Navigiere zu dem Kommentar, dessen Verfassers du entsperren möchtest.
2. Klicke in der oberen rechten Ecke des Kommentars auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und dann auf **Sperrung des Benutzers aufheben**.
![Horizontales 3-Punkte-Symbol und Menü zum Moderieren von Kommentaren mit der Option zum Entsperren eines Benutzers](/assets/images/help/repository/comment-menu-unblock-user.png)
3. Um die Aufhebung der Benutzersperre zu bestätigen, klicke auf **OK**.

## Sperre eines Benutzers in den Organisationseinstellungen aufheben


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
1. Klicke unter „Blockierte Benutzer“ neben dem Benutzer, dessen Blockierung du aufheben möchten, auf **Entsperren**.
![Schaltfläche „Benutzer entsperren“](/assets/images/help/organizations/org-unblock-user-button.png)

## Weiterführende Themen

- [Sperren eines Benutzers für deine Organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)
- [Sperren eines Benutzers für dein persönliches Konto](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)
- [Aufheben der Blockierung eines Benutzers für dein persönliches Konto](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)
- [Melden von Missbrauch oder Spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
