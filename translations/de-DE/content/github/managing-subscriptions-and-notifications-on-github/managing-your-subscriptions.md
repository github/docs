---
title: Verwaltung Deiner Abonnements
intro: 'Um Dir zu helfen, Deine Benachrichtigungen effizient zu verwalten, gibt es mehrere Möglichkeiten, Dich abzumelden.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
---

Um Dir zu helfen, Deine Abonnements zu verstehen und zu entscheiden, ob du Dich abmelden sollst, findest Du weitere Informationen auf „[Deine Abonnements ansehen](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)."

{% note %}

**Hinweis:** Anstatt Dich abzumelden, hast Du die Möglichkeit, ein Repository zu ignorieren. Wenn Du ein Repository ignorierst, erhältst du keine Benachrichtigungen. Es wird nicht empfohlen, Repositorys zu ignorieren, da Du in diesem Fall auch keine Benachrichtigung erhältst, wenn Du @erwähnt wirst. {% if currentVersion == "free-pro-team@latest" %}If you're experiencing abuse and want to ignore a repository, please contact {% data variables.contact.contact_support %} so we can help. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### Wähle die Art der Abmeldung

Um die Beobachtung von Repositorys schnell zu beenden oder Dich abzumelden, gehe auf die Seite „Watched repositories" (Beobachtete Repositorys), auf der Du alle von Dir beobachteten Repositorys siehst. Weitere Informationen findest Du unter „[Ein Repository nicht mehr beobachten](#unwatch-a-repository)."

Um mehrere Benachrichtigungen gleichzeitig abzumelden, kannst Du Dich über Deinen Posteingang oder über die Abonnementseite abmelden. Beide Optionen bieten mehr Kontext über Deine Abonnements als die Seite „Watched repositories" (beobachtete Repositorys).

#### Vorteile der Abmeldung über Deinen Posteingang

Wenn du Benachrichtigungen in Deinem Posteingang abmeldest, hast Du mehrere weitere Selektionsoptionen und kannst Deine Benachrichtigungen nach benutzerdefinierten Filtern und Diskussionstypen auswählen. Weitere Informationen findest du unter „[Benachrichtigungen über Deinen Posteingang verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)."

#### Vorteile der Abmeldung von der Abonnementseite

Wenn Du Benachrichtigungen auf der Abonnementseite abmeldest, kannst Du mehr Details der von Dir abonnierten Benachrichtigungen sehen und sie nach „Most recently subscribed" (neueste Abonnements) oder „Least recently subscribed" (älteste Abonnements) sortieren.

Die Abonnements-Seite zeigt Dir alle Benachrichtigungen, die Du gerade abonniert hast, einschließlich Benachrichtigungen, die Du in Deinem Posteingang als **Done** (Erledigt) markiert hast.

Du kannst Deine Abonnements nur nach Repository und dem Grund filtern, warum Du die Benachrichtigung erhältst.

### Abmelden von Benachrichtigungen in Deinem Posteingang

Wenn Du Benachrichtigungen in Deinem Posteingang abmeldest, werden diese automatisch aus Deinem Posteingang verschwinden.

{% data reusables.notifications.access_notifications %}
1. Wähle im Posteingang für Benachrichtigungen diejenige Benachrichtigungen aus, die Du abmelden möchtest.
2. Use the **selected** {% octicon "triangle-down" aria-label="The down triangle icon" %} drop-down to click **Unsubscribe.** ![Unsubscribe option from main inbox](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

### Abmeldung von Benachrichtigungen auf der Abonnementseite

{% data reusables.notifications.access_notifications %}
1. Verwende in der linken Seitenleiste, unterhalb der Liste der Repositorys, das Dropdownmenü „Manage Notifications" (Benachrichtigungen verwalten) und klicke auf **Subscriptions** (Abonnements). ![Dropdownmenü-Optionen „Manage Notifications" (Benachrichtigungen verwalten)](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Wähle die Benachrichtigungen, die Du abmelden möchtest. Klicke oben rechts auf **Unsubscribe** (Abmelden). ![Abonnementseite](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

### Ein Repository nicht mehr beobachten

Wenn Du ein Repository nicht mehr beobachtest, meldest Du Dich von zukünftigen Aktualisierungen dieses Repositorys ab, außer wenn du an einer Unterhaltung teilnimmst oder @erwähnt wirst.

{% data reusables.notifications.access_notifications %}
1. Verwende in der linken Seitenleiste, unterhalb der Liste der Repositorys, das Dropdownmenü „Manage Notifications" (Benachrichtigungen verwalten) und klicke auf **Watched repositories** (beobachtete Repositorys). ![Dropdownmenü-Optionen „Manage Notifications" (Benachrichtigungen verwalten)](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Nimm auf der Seite der beobachteten Repositorys eine Bewertung dieser Repositorys vor und wähle dann aus:
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
    - ein Repository nicht mehr beobachten
    - nur Releases für ein Repository beobachten
    - ignoriere alle Benachrichtigungen für ein Repository
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
    - ein Repository nicht mehr beobachten
    - ignoriere alle Benachrichtigungen für ein Repository
    - customize the types of event you receive notifications for (issues, pull requests, releases or discussions, if enabled)
{% endif %}
