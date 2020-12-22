---
title: Deine Abonnements anzeigen
intro: 'Um zu verstehen, woher und wie viele Benachrichtigungen Du erhältst, empfehlen wir Dir, Deine Abonnements und Deine beobachteten Repositorys regelmäßig zu überprüfen.'
redirect_from:
  - /articles/subscribing-to-conversations/
  - /articles/unsubscribing-from-conversations/
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories/
  - /articles/unwatching-repositories/
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories/
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
---

Du erhältst Benachrichtigungen zu Deinen Abonnements über laufende Aktivitäten auf {% data variables.product.product_name %}. Es gibt mehrere Gründe, warum Du eine Unterhaltung abonniert haben kannst. Weitere Informationen findest Du unter „[Über Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)."

Wir empfehlen Dir, Deine Abonnements als Teil eines effizienten Workflows für Benachrichtigungen zu überprüfen und allenfalls abzubestellen. Weitere Informationen über Deine Abmeldeoptionen findest Du unter „[Abonnements verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

### Feststellen, warum Du zu viele Benachrichtigungen erhältst

Wenn Dein Posteingang zu viele Benachrichtigungen zum Verwalten hat, überlege Dir, ob du zu viele Abonnements hast oder wie Du Deine Benachrichtigungseinstellungen ändern kannst, um Deine Abonnements zu reduzieren und die Art von Benachrichtigungen, die Du erhältst. Beispielsweise kannst Du erwägen, die Einstellungen zum automatischen Beobachten aller Repositorys und Teamdiskussionen zu deaktivieren, wenn Du einem Team oder Repository beitrittst.

![Automatisches Beobachten](/assets/images/help/notifications-v2/automatic-watching-example.png)

Weitere Informationen findest Du unter „[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)."

Eine Übersicht Deiner Repository-Abonnements findest Du unter „[Repositorys überprüfen, die Du beobachtest](#reviewing-repositories-that-youre-watching).
{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**Tip:** You can select the types of event to be notified of by using the **Custom** option of the **Watch/Unwatch** dropdown list in your [watching page](https://github.com/watching) or on any repository page on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Configuring your watch settings for an individual repository](#configuring-your-watch-settings-for-an-individual-repository)" below.

{% endtip %}
{% endif %}

Viele Personen vergessen Repositorys, die sie in der Vergangenheit beobachtet haben. Über die Seite „Watched repositories" (beobachtete Repositorys) kannst Du die Beobachtung von Repositorys schnell deaktivieren. For more information on ways to unsubscribe, see "[Unwatch recommendations](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)" on {% data variables.product.prodname_blog %} and "[Managing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)." You can also create a triage workflow to help with the notifications you receive. For guidance on triage workflows, see "[Customizing a workflow for triaging your notifications](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)."

### Alle Deine Abonnements überprüfen

{% data reusables.notifications.access_notifications %}
1. Verwende in der linken Seitenleiste, unterhalb der Liste der Repositorys, von denen Du Benachrichtigungen erhältst, das Dropdownmenü „Manage notifications" (Benachrichtigungen verwalten) und klicke auf **Subscriptions** (Abonnements). ![Dropdownmenü-Optionen „Manage Notifications" (Benachrichtigungen verwalten)](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Verwende Filter und Sortierung, um die Liste der Abonnements einzuschränken, und beginne Dich von Unterhaltungen abzumelden, von denen Du keine Benachrichtigungen mehr erhalten willst.

  ![Abonnementseite](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**Tipps:**
- Um Abonnements zu überprüfen, die du vergessen hast, sortiere nach „least recently subscribed" (älteste Abonnements).

- Um eine Liste von Repositories zu überprüfen, für die Du noch Benachrichtigungen erhalten kannst, erstelle die Repository-Liste im Dropdownmenü „filter by repository" (nach Repository filtern).

{% endtip %}

### Repositorys überprüfen, die Du beobachtest

1. Verwende in der linken Seitenleiste, unterhalb der Liste der Repositorys, das Dropdownmenü „Manage Notifications" (Benachrichtigungen verwalten) und klicke auf **Watched repositories** (beobachtete Repositorys). ![Dropdownmenü-Optionen „Manage Notifications" (Benachrichtigungen verwalten)](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Evaluiere die von Dir beobachteten Repositorys und entscheide, ob deren Aktualisierungen für Dich immer noch relevant und hilfreich sind. Wenn Du ein Repository beobachtest, wirst Du über alle Unterhaltungen für dieses Repository benachrichtigt.
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![Seite der beobachteten Benachrichtigungen](/assets/images/help/notifications-v2/watched-notifications.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
  ![Seite der beobachteten Benachrichtigungen](/assets/images/help/notifications-v2/watched-notifications-custom.png)
{% endif %}

  {% tip %}

  **Tip:** Instead of watching a repository, consider only receiving notifications {% if currentVersion == "free-pro-team@latest" %}when there are updates to issues, pull requests, releases or discussions (if enabled for the repository), or any combination of these options,{% else %}for releases in a repository,{% endif %} or completely unwatching a repository.

  Wenn Du ein Repository nicht mehr beobachtest, kannst du immer noch benachrichtigt werden, wenn Du @erwähnt wirst oder in einem Thread teilnimmst. When you configure to receive notifications for certain event types, you're only notified when there are updates to these event types in the repository, you're participating in a thread, or you or a team you're on is @mentioned.

  {% endtip %}

### Konfiguration der Beobachtungseinstellungen für ein einzelnes Repository

Du kannst wählen, ob Du ein einzelnes Repository ansehen möchtest oder nicht mehr. You can also choose to only be notified of {% if currentVersion == "free-pro-team@latest" %}certain event types such as issues, pull requests, discussions (if enabled for the repository) and {% endif %}new releases, or completely ignore an individual repository.

{% data reusables.repositories.navigate-to-repo %}
2. Klicke in der oberen rechten Ecke auf das Dropdownmenü „Watch" (Beobachten), um eine der Beobachtungsoptionen zu wählen.
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![Beobachtungsoptionen in einem Dropdownmenü für ein Repository](/assets/images/help/notifications-v2/watch-repository-options.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
   ![Beobachtungsoptionen in einem Dropdownmenü für ein Repository](/assets/images/help/notifications-v2/watch-repository-options-custom.png)
{% data reusables.notifications-v2.custom-notifications-beta %}
The **Custom** option allows you to further customize notifications so that you're only notified when specific events happen in the repository, in addition to participating and @mentions.

   ![Custom watch options in a drop-down menu for a repository](/assets/images/help/notifications-v2/watch-repository-options-custom2.png)

If you select "Issues", you will be notified about, and subscribed to, updates on every issue (including those that existed prior to you selecting this option) in the repository. If you're @mentioned in a pull request in this repository, you'll receive notifications for that too, and you'll be subscribed to updates on that specific pull request, in addition to being notified about issues.

{% endif %}
