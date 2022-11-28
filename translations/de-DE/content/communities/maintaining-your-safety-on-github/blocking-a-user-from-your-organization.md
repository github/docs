---
title: Blockieren von Benutzer*innen für deine Organisation
intro: 'Organisationsbesitzer und -moderatoren können alle Personen von der Mitarbeit an den Repositorys der Organisation ausschließen, die keine Mitglieder dieser Organisation sind.'
redirect_from:
  - /articles/blocking-a-user-from-your-organization
  - /github/building-a-strong-community/blocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your org
ms.openlocfilehash: 527ce4fcf92946836f7a3d93e5caf07193561d4b
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164355'
---
Du kannst Nicht-Mitglieder über die Einstellungen deiner Organisation oder über einen bestimmten Kommentar eines Benutzers blockieren. Wenn du einen Benutzer in einem Kommentar blockierst, kannst du auswählen, dem Benutzer eine Benachrichtigung über die Sperre und den Grund dazu zu senden. Andernfalls wird er nicht direkt über die Sperre informiert. Blockierte Benutzer können weiterhin ihre vorhandenen Inhalte löschen.

{% data reusables.organizations.blocking-a-user %}

{% tip %}

**Tipp**: Wenn du einen Benutzer aufgrund einer Auseinandersetzung blockierst, solltest du die Unterhaltung sperren, damit nur Mitarbeiter kommentieren können. Weitere Informationen findest du unter [Sperren von Unterhaltungen](/communities/moderating-comments-and-conversations/locking-conversations).

{% endtip %}

Wenn du einen Benutzer für deine Organisation blockieren:
- beobachtet der Benutzer die Repositorys deiner Organisation nicht mehr
- Werden die Sternmarkierungen und Issue-Zuweisungen des Benutzers von ´Deinen Repositorys entfernt
- Werden die Abstimmungen des Benutzers zu Diskussionen oder Kommentaren in den Repositorys deiner Organisation gelöscht
- wird der Benutzer als Mitarbeiter aus den Repositorys deiner Organisation entfernt
- Werden die Beiträge des Benutzers zu den Repositorys deiner Organisation nicht mehr als Beiträge für ihn gezählt
- Werden alle ausstehenden Repository- oder Organisationseinladungen an den blockierten Benutzer storniert

Wenn du einen Benutzer für deine Organisation blockiert hast, kann er nicht mehr:
- in Kommentaren Querverweise auf die Repositorys deiner Organisation machen
- die Repositorys deiner Organisation forken, beobachten, anheften oder mit Sternen markieren

Außerdem können blockierte Benutzer in den Repositorys deiner Organisation nicht:
- Eröffnen von Issues
- Senden, Schließen oder Mergen von Pull Requests
- Issues, Pull Requests oder Commits zu kommentieren,
- Wiki-Seiten hinzufügen oder bearbeiten

## Benutzer in einem Kommentar blockieren

1. Navigiere zum Kommentar, dessen Verfasser du blockieren möchtest.
2. Klicke in der oberen rechten Ecke des Kommentars auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und dann auf **Benutzer blockieren**.
![Das horizontale 3-Punkte-Symbol und das Menü zum Moderieren der Unterhaltung, das die Option zum Blockieren eines Benutzers zeigt](/assets/images/help/repository/comment-menu-block-user.png)
3. Wenn du die Sperre zeitlich beschränken möchtest, wähle aus dem Dropdownmenü „Block user“ (Benutzer blockieren) den Zeitraum aus, für den du den Benutzer blockieren möchtest.
![Zeitliche Beschränkung für eine Blockierung im Dropdownmenü „Benutzer blockieren“](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. Wenn du alle Kommentare, die der Benutzer in der Organisation verfasst hat, ausblenden möchtest, wähle **Kommentare dieses Benutzers ausblenden** aus, und gib einen Grund dafür an.
![„Benachrichtigung senden“ im Dropdownmenü „Benutzer blockieren“](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. Wenn du den Benutzer darüber informieren möchtest, warum er blockiert wurde, wähle **Benachrichtigung an diesen Benutzer senden** aus.
![„Benachrichtigung senden“ im Dropdownmenü „Benutzer blockieren“](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. Um den Benutzer zu blockieren, klicke auf **Benutzer von Organisation blockieren** oder auf **Benutzer von Organisation blockieren und Nachricht senden**.
![Schaltfläche „Benutzer blockieren“](/assets/images/help/organizations/org-block-user-button-in-comment.png)

## Benutzer in den Einstellungen der Organisation blockieren

1. Um ein Organisationsmitglied zu blockieren, [entferne den Benutzer](/articles/removing-a-member-from-your-organization) zuerst aus der Organisation.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
6. Gib unter „Block a user“ (Einen Benutzer blockieren) den Benutzernamen der Person ein, die du blockieren möchtest.
![Feld für Benutzernamen](/assets/images/help/organizations/org-block-username-field.png)
7. Wenn du die Sperre zeitlich beschränken möchtest, wähle aus dem Dropdownmenü mit den Sperr-Optionen den Zeitraum aus, für den du den Benutzer blockieren möchtest.
![Dropdownmenü mit Optionen für das Blockieren](/assets/images/help/organizations/org-block-options-menu.png)
8. Klicke auf **Benutzer blockieren**.
![Schaltfläche „Blockieren“](/assets/images/help/organizations/org-block-user-button.png)

## Weiterführende Themen

- [Anzeigen der für deine Organisation blockierten Benutzer](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)
- [Aufheben der Blockierung eines Benutzers für deine Organisation](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)
- [Blockieren eines Benutzers für dein persönliches Konto](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)
- [Aufheben der Blockierung eines Benutzers für dein persönliches Konto](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)
- [Melden von Missbrauch oder Spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
