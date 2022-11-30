---
title: Blockieren von Benutzer*innen für dein persönliches Konto
intro: 'Du kannst Benutzer*innen blockieren, damit sie nicht auf deine Aktivitäten und Repositorys zugreifen und dir keine Benachrichtigungen senden können.'
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your account
ms.openlocfilehash: bd657c221b007b6b574e97f54f2b330401b8fd9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422876'
---
## Informationen zum Blockieren von Benutzern

Du kannst Benutzer*innen in deinen Kontoeinstellungen oder über deren Profil blockieren. Die Benutzer*innen werden von {% data variables.product.prodname_dotcom %} nicht benachrichtigt, wenn du sie blockierst. Wenn du vermeiden möchtest, dass du zu demselben Projekt beiträgst wie jemand, den du blockiert hast, kannst du eine Warnung für Repositorys mit vorherigen Beiträgen eines blockierten Benutzers anzeigen. Weitere Informationen findest du unter [Blockieren eines Benutzers in deinen Kontoeinstellungen](#blocking-a-user-in-your-account-settings). Die Aktivität blockierter Benutzer in freigegebenen Räumen wird dir weiterhin angezeigt, und blockierte Benutzer können ihre vorhandenen Inhalte löschen.

{% tip %}

**Tipp**: Wenn du einen Benutzer aufgrund einer Auseinandersetzung blockierst, solltest du die Unterhaltung sperren, damit nur Mitarbeiter kommentieren können. Weitere Informationen findest du unter [Sperren von Unterhaltungen](/communities/moderating-comments-and-conversations/locking-conversations).

{% endtip %}

Wenn du einen Benutzer blockierst:
- Folgt er dir nicht mehr
- Beobachtet er deine Repositorys nicht mehr und löst sie
- Kann er keinen Organisationen beitreten, die dir gehören
- Werden die Sternmarkierungen und Issuezuweisungen des Benutzers aus deinen Repositorys entfernt
- Werden die Abstimmungen des Benutzers zu Diskussionen oder Kommentaren in deinen Repositorys gelöscht
- Wird er als Mitarbeiter aus deinen Repositorys entfernt
- Werden die Beiträge des Benutzers zu deinen Repositorys nicht mehr als Beiträge für ihn gezählt
- Werden deine Beiträge zu den Repositorys des Benutzers nicht mehr als Beiträge für dich gezählt
- Wirst du als Mitarbeiter von seinen Repositorys entfernt
- Wird sein Sponsoring für dich beendet
- Werden alle ausstehenden Repository- oder Kontonachfolgeeinladungen an oder von dem blockierten Benutzer storniert
- Wird der Benutzer als Mitarbeiter aus allen deinen Projekten und {% data variables.projects.projects_v1_boards %} entfernt
- Wirst du als Mitarbeiter*in aus allen Projekten und {% data variables.projects.projects_v1_boards %} des Benutzers entfernt

Ein blockierter Benutzer kann Folgendes nicht mehr tun:
- Benachrichtigungen an dich senden, auch nicht durch Erwähnen deines Benutzernamens über [@mentioning](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)
- Von dir erstellte Issues und Pull Requests kommentieren oder bearbeiten
- Auf deine Kommentare zu Issues, Pull Requests und Commits reagieren
- Dir folgen oder deine Inhalte in seinem Aktivitätsfeed sehen
- Dich Issues oder Pull Requests zuweisen
- Dich als Mitarbeiter für seine Repositorys einladen
- Dich als Mitarbeiter zu einem Sicherheitshinweis einladen
- Querverweise auf deine Repositorys in Kommentaren vornehmen
- Deine Repositorys forken, beobachten, anheften oder mit Stern markieren
- Dich finanziell unterstützten
- Dich seinen Projekten und {% data variables.projects.projects_v1_boards %} als Mitarbeiter hinzufügen
- Änderungen an deinen öffentlichen Projekten und {% data variables.projects.projects_v1_boards %} vornehmen

In deinen Repositorys können blockierte Benutzer*innen außerdem Folgendes nicht tun:
- Eröffnen von Issues
- Senden, Schließen oder Mergen von Pull Requests
- Issues, Pull Requests oder Commits zu kommentieren,
- Wiki-Seiten hinzufügen oder bearbeiten

## Benutzer*innen in deinen Kontoeinstellungen blockieren

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.blocked_users %}
3. Gib unter „Benutzer blockieren“ den Benutzernamen der Person ein, die du blockieren möchtest. Klicke dann auf **Benutzer blockieren**.
  ![Feld „Benutzername“ und Schaltfläche „Blockieren“](/assets/images/help/settings/user-settings-block-user.png)
4. Um eine Warnung anzuzeigen, wenn du ein Repository aufrufst, zu dem ein blockierter Benutzer beiträgt, klicke auf **Mich warnen, wenn ein blockierter Benutzer bereits an einem Repository mitgearbeitet hat**.
  ![Option zum Warnen bei blockierten Benutzern](/assets/images/help/settings/warn-block-user.png)

## Einen Benutzer über seine Profilseite blockieren

{% data reusables.profile.user_profile_page_navigation %} {% data reusables.profile.user_profile_page_block_or_report %}
3. Klicke auf **Benutzer blockieren**.
   ![Modales Feld mit Optionen zum Blockieren von Benutzern oder zum Melden von Missbrauch](/assets/images/help/profile/profile-blockuser.png)

{% note %}

Kontaktiere uns unter {% data variables.contact.report_abuse %}, wenn du belästigt wirst. {% data reusables.policies.abuse %}

{% endnote %}

## Weiterführende Themen

- [Anzeigen von Benutzern, die für dein persönliches Konto blockiert wurden](/communities/maintaining-your-safety-on-github/viewing-users-youve-blocked-from-your-personal-account)
- [Aufheben der Blockierung eines Benutzers für dein persönliches Konto](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)
- [Blockieren eines Benutzers für deine Organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)
- [Entsperren eines Benutzers für deine Organisation](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)
- [Melden von Missbrauch oder Spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Einschränken von Interaktionen mit dem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)
