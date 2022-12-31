---
title: Verwaltung Deiner Abonnements
intro: 'Um Dir zu helfen, Deine Benachrichtigungen effizient zu verwalten, gibt es mehrere Möglichkeiten, Dich abzumelden.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions
shortTitle: Manage your subscriptions
ms.openlocfilehash: 750a3a9ad87ff9aa709b84a98f548d85d53072ee
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091458'
---
Weitere Informationen zu Abonnements und dazu, wann du ein Abonnement kündigen solltest, findest du unter [Anzeigen deiner Abonnements](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions).

{% note %}

**Hinweis:** Anstatt dein Abonnement zu kündigen, hast du die Möglichkeit, ein Repository zu ignorieren. Wenn Du ein Repository ignorierst, erhältst du keine Benachrichtigungen. Es wird nicht empfohlen, Repositorys zu ignorieren, da du in diesem Fall auch keine Benachrichtigung erhältst, wenn du @mentioned wirst. {% ifversion fpt or ghec %}Wenn du Missbrauch feststellst und ein Repository ignorieren möchtest, wende dich an {% data variables.contact.contact_support %}, damit wir dir helfen können. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## Wähle die Art der Abmeldung

Um schnell die Überwachung von Repositorys zu beenden (oder sie zu kündigen), navigierst du zu [github.com/watching](https://github.com/watching). Dort werden alle Repositorys angezeigt, denen du folgst. Weitere Informationen findest du unter [Beobachtungen für Repositorys deaktivieren](#unwatching-repositories).

Um mehrere Benachrichtigungen gleichzeitig abzumelden, kannst Du Dich über Deinen Posteingang oder über die Abonnementseite abmelden. Beide Optionen bieten mehr Kontext über Deine Abonnements als die Seite „Watched repositories" (beobachtete Repositorys).

### Vorteile der Abmeldung über Deinen Posteingang

Wenn du Benachrichtigungen in Deinem Posteingang abmeldest, hast Du mehrere weitere Selektionsoptionen und kannst Deine Benachrichtigungen nach benutzerdefinierten Filtern und Diskussionstypen auswählen. Weitere Informationen findest du unter [Verwalten von Benachrichtigungen aus deinem Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox).

### Vorteile der Abmeldung von der Abonnementseite

Wenn Du Benachrichtigungen auf der Abonnementseite abmeldest, kannst Du mehr Details der von Dir abonnierten Benachrichtigungen sehen und sie nach „Most recently subscribed" (neueste Abonnements) oder „Least recently subscribed" (älteste Abonnements) sortieren.

Auf der Seite „Abonnements“ findest du alle Benachrichtigungen, die du derzeit abonniert hast, einschließlich Benachrichtigungen, die du in deinem Posteingang als **Erledigt** markiert hast.

Du kannst Deine Abonnements nur nach Repository und dem Grund filtern, warum Du die Benachrichtigung erhältst.

## Abmelden von Benachrichtigungen in Deinem Posteingang

Wenn Du Benachrichtigungen in Deinem Posteingang abmeldest, werden diese automatisch aus Deinem Posteingang verschwinden.

{% data reusables.notifications.access_notifications %}
1. Wähle im Posteingang für Benachrichtigungen diejenige Benachrichtigungen aus, die Du abmelden möchtest.
2. Klicke auf **Kündigen**
  ![Option „Kündigen“ im Hauptposteingang](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png).

## Abmeldung von Benachrichtigungen auf der Abonnementseite

{% data reusables.notifications.access_notifications %}
1. Wähle auf der linken Randleiste unter der Liste der Repositorys das Dropdownmenü „Benachrichtigungen verwalten“ aus, und klicke auf **Abonnements**.
  ![Dropdownmenüoptionen zum Verwalten von Benachrichtigungen](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Wähle die Benachrichtigungen, die Du abmelden möchtest. Klicke rechts oben auf **Kündigen**
  ![Seite „Abonnements“](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png).

## Beobachtungen für Repositorys deaktivieren

Wenn du ein Repository nicht mehr beobachtest, meldest du dich von zukünftigen Updates dieses Repositorys ab, außer du nimmst an einer Unterhaltung teil oder wirst @mentioned.

{% data reusables.notifications.access_notifications %}
1. Wähle auf der linken Randleiste unter der Liste der Repositorys das Dropdownmenü „Benachrichtigungen verwalten“ aus, und klicke auf **Beobachtete Repositorys**.

  ![Dropdownmenü-Optionen „Manage notifications" (Benachrichtigungen verwalten)](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Nimm auf der Seite der beobachteten Repositorys eine Bewertung dieser Repositorys vor und wähle dann aus:
   
   - Ein Repository nicht mehr beobachten
   - Ignorieren aller Benachrichtigungen für ein Repository
   - Bei der Aktivierung kannst du die Ereignistypen anpasse, für die du Benachrichtigungen erhältst ({% data reusables.notifications-v2.custom-notification-types %}).
   
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. Wenn du optional alle Repositorys kündigen möchtest, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, wähle die Dropdownliste **Alle Beobachtungen deaktivieren** aus, und klicke auf die Organisation, deren Repositorys du kündigen möchtest. Die Schaltfläche zum Deaktivierung der Beobachtung aller Repositorys ist nur verfügbar, wenn du alle Aktivitäten beobachtest oder benutzerdefinierte Benachrichtigungen für mehr als 10 Repositorys verwendest.

   ![Screenshot der Schaltfläche „Alle Beobachtungen deaktivieren“](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - Klicke auf **Beobachtung deaktivieren**, um zu bestätigen, dass du die Repositorys im Besitz des ausgewählten Benutzers oder der ausgewählten Organisation nicht mehr beobachten möchtest, oder klicke auf **Abbrechen**, um den Vorgang abzubrechen.

   ![Screenshot des Bestätigungsdialogfelds für das Deaktivieren aller Beobachtungen](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
