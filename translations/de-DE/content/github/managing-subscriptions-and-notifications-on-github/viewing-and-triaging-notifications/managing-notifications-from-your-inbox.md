---
title: Benachrichtigungen über Deinen Posteingang verwalten
intro: 'Use your inbox to quickly triage and sync your notifications across email{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} and mobile{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---
{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### Über Deinen Posteingang

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} Weitere Informationen findest Du unter „[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings).“
{% endif %}

Um auf Deinen Posteingang für Benachrichtigungen zuzugreifen, klicke in der rechten oberen Ecke einer beliebigen Seite auf {% octicon "bell" aria-label="The notifications bell" %}.

  ![Benachrichtigung, die auf eine ungelesene Mitteilung hinweist](/assets/images/help/notifications/notifications_general_existence_indicator.png)

Dein Posteingang zeigt alle Benachrichtigungen, die Du nicht abgemeldet oder als **Done** (Erledigt) markiert hast. Du kannst Deinen Posteingang so anpassen, dass er Deinem Workflow am besten entspricht, indem Du Filter verwendest, alle oder nur ungelesene Benachrichtigungen anzeigst und Deine Benachrichtigungen gruppierst, um eine schnelle Übersicht zu erhalten.

  ![Posteingangsansicht](/assets/images/help/notifications-v2/inbox-view.png)

Standardmäßig werden in Deinem Posteingang gelesene und ungelesene Benachrichtigungen angezeigt. Um nur ungelesene Benachrichtigungen zu sehen, klicke auf **Unread** (Ungelesen) oder verwende die Abfrage `is:unread` (ist ungelesen).

  ![Posteingangsansicht ungelesene Benachrichtigungen](/assets/images/help/notifications-v2/unread-inbox-view.png)

### Selektionsoptionen

Du hast mehrere Optionen, um Benachrichtigungen in Deinem Posteingang zu selektieren.

| Selektionsoptionen | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Save (Gesichert)   | Sichert Deine Benachrichtigung für spätere Überprüfung. Um eine Benachrichtigung zu sichern, klicke rechts neben der Benachrichtigung auf {% octicon "bookmark" aria-label="The bookmark icon" %}. <br> <br> Gesicherte Benachrichtigungen werden unbegrenzt gespeichert und können durch klicken auf **Saved** (Gesichert) in der Seitenleiste angezeigt werden oder mit der Abfrage `is:saved` (ist gesichert). Wenn Deine gesicherte Benachrichtigung älter als 5 Monate ist und Du sie nicht mehr sicherst, wird die Benachrichtigung innerhalb eines Tages aus Deinem Posteingang entfernt. |
| Done (Erledigt)    | Markiert eine Benachrichtigung als erledigt und entfernt die Benachrichtigung aus Deinem Posteingang. Du kannst alle abgeschlossenen Benachrichtigungen sehen, indem Du in der Seitenleiste auf **Done** (erledigt) klickst oder die Abfrage `is:done` (ist erledigt) verwendest. Benachrichtigungen mit Markierung **Done** (erledigt) werden für 5 Monate gespeichert.                                                                                                                                                                                                                                     |
| Kündigen           | Löscht automatisch die Benachrichtigung aus Deinem Posteingang und meldet Dich von der Unterhaltung ab, bis Du @erwähnt wirst, ein Team, dem Du angehörst, wird @erwähnt, oder Du wirst zur Überprüfung angefordert.                                                                                                                                                                                                                                                                                                                                                                                         |
| Read (Gelesen)     | Markiert eine Benachrichtigung als gelesen. Um nur gelesene Benachrichtigungen in Deinem Posteingang anzuzeigen, verwende die Abfrage `is:read` (ist gelesen). Diese Abfrage enthält keine Benachrichtigungen mit Markierung **Done** (erledigt).                                                                                                                                                                                                                                                                                                                                                            |
| Unread (Ungelesen) | Markiert Benachrichtigungen als ungelesen. Um nur ungelesene Benachrichtigungen in Deinem Posteingang anzuzeigen, verwende die Abfrage `is:unread` (ist ungelesen).                                                                                                                                                                                                                                                                                                                                                                                                                                          |

Um die verfügbaren Tastaturkürzel zu sehen, lies bitte „[Tastaturkürzel](/github/getting-started-with-github/keyboard-shortcuts#notifications)."

Bevor Du eine Selektionsoption wählst, kannst Du die Details Deiner Benachrichtigung zuerst anzeigen und untersuchen. Weitere Informationen findest Du unter „[Eine einzelne Benachrichtigung auswählen](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)."

### Mehrere Benachrichtigungen gleichzeitig selektieren

Um mehrere Benachrichtigungen gleichzeitig zu selektieren, wähle die entsprechenden Benachrichtigungen aus und verwende das {% octicon "kebab-horizontal" aria-label="The edit icon" %}-Dropdownmenü, um eine Selektionsoption auszuwählen.

![Dropdownmenü mit Selektionsoptionen und ausgewählten Benachrichtigungen](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

### Standard-Benachrichtigungsfilter

Standardmäßig hat Dein Posteingang Filter für Fälle, wenn Du zugewiesen bist, an einem Thread teilnimmst, für einen Pull-Request-Review angefordert bist, wenn Deine Benutzername direkt @erwähnt wird oder wenn ein Team, in dem Du Mitglied bist, @erwähnt wird.

  ![Standardmäßige benutzerdefinierte Filter](/assets/images/help/notifications-v2/default-filters.png)

### Deinen Posteingang mit benutzerdefinierten Filtern anpassen

Du kannst bis zu 15 eigene, benutzerdefinierte Filter hinzufügen.

{% data reusables.notifications.access_notifications %}
2. Um die Filtereinstellungen zu öffnen, klicke in der linken Seitenleiste neben „Filters" (Filter) auf {% octicon "gear" aria-label="The Gear icon" %}.

  {% tip %}

  **Tipp:** Du kannst schnell eine Vorschau des Resultats Deines Posteingang-Filters erstellen, indem Du eine Abfrage in der Ansicht Deines Posteingangs erstellst und **Save** klickst, was die Einstellungen für benutzerdefinierte Filter öffnet.

  {% endtip %}

3. Füge Deinem Filter einen Namen und eine Filterabfrage hinzu. Um beispielsweise nur Benachrichtigungen für ein bestimmtes Repository zu sehen, kannst du einen Filter mit der Abfrage `repo:octocat/open-source-project-name reason:participating` erstellen. Du kannst auch Emojis mit einer lokalen Emoji-Tastatur hinzufügen. Eine Liste der unterstützten Suchanfragen findest Du unter "[Unterstützte Suchanfragen für benutzerdefinierte Filter](#supported-queries-for-custom-filters)."

  ![Beispiel für benutzerdefinierte Filter](/assets/images/help/notifications-v2/custom-filter-example.png)

4. Klicke auf **Create** (Erstellen).

### Beschränkungen für benutzerdefinierte Filter

Benutzerdefinierte Filter unterstützen im Moment nicht:
  - Volltextsuche in Deinem Posteingang, einschließlich die Suche nach Pull-Request- oder Issue-Titeln.
  - Die Unterscheidung zwischen `is:issue`-, `is:pr`-, und `is:pull-request`-Abfragefiltern. Diese Abfragen werden sowohl Issues wie Pull Request zurückgeben.
  - Das Erstellen von mehr als 15 benutzerdefinierten Filtern.
  - Das Ändern der Standardfilter oder deren Reihenfolge.
  - Search [exclusion](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results) using `NOT` or `-QUALIFIER`.

### Unterstützte Abfragen für benutzerdefinierte Filter

These are the types of filters that you can use:
  - Nach Repository filtern mit `Repo:`
  - Nach Diskussionstyp filtern mit `is:`
  - Filter by notification reason with `reason:`{% if currentVersion == "free-pro-team@latest" %}
  - Filter by notification author with `author:`
  - Filter by organization with `org:`{% endif %}

#### Supported `repo:` queries

To add a `repo:` filter, you must include the owner of the repository in the query: `repo:owner/repository`. An owner is the organization or the user who owns the {% data variables.product.prodname_dotcom %} asset that triggers the notification. For example, `repo:octo-org/octo-repo` will show notifications triggered in the octo-repo repository within the octo-org organization.

#### Unterstützte `is:`-Abfragen

Um Benachrichtigungen nach bestimmten Aktivitäten auf {% data variables.product.product_name %} zu filtern, kannst du die Abfrage `is` verwenden. For example, to only see repository invitation updates, use `is:repository-invitation`{% if currentVersion != "github-ae@latest" %}, and to only see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %} security{% endif %} alerts, use `is:repository-vulnerability-alert`.{% endif %}

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`{% if currentVersion != "github-ae@latest" %}
- `is:repository-vulnerability-alert`
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% if currentVersion == "free-pro-team@latest" %}
- `is:discussions`{% endif %}

{% if currentVersion != "github-ae@latest" %}
For information about reducing noise from notifications for
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."
{% endif %}

Du kannst die Abfrage `is:` auch verwenden, um zu beschreiben, wie die Benachrichtigung selektiert wurde.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

#### Unterstützte `reason:`-Abfragen

Um Benachrichtigungen nach dem Grund zu filtern, weshalb Du eine Aktualisierung erhalten hast, kannst Du die Abfrage `reason:` (Grund) verwenden. Um beispielsweise Benachrichtigungen zu sehen, in denen Du (oder ein Team, dem Du angehörst) zu einem Pull-Request-Review aufgefordert bist, benutze die Abfrage `reason:review-requested`. Weitere Informationen findest Du unter „[Informationen zu Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications).“

| Abfrage                   | Beschreibung                                                                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `reason:assign`           | Wenn es eine Aktualisierung zu einem Issue oder Pull Request gibt, denen Du zugewiesen bist.                                                  |
| `reason:author`           | Wenn es eine Aktualisierung oder einen neuen Kommentar zu einem Pull Request oder Issue gibt, die Du eröffnet hast.                           |
| `reason:comment`          | Wenn Du einen Issue, einen Pull Request oder eine Teamdiskussion kommentiert hast.                                                            |
| `reason:participating`    | Wenn Du einen Issue, einen Pull Request oder eine Teamdiskussion kommentiert hast, oder wenn Du @erwähnt wurdest.                             |
| `reason:invitation`       | Wenn Du in ein Team, eine Organisation oder ein Repository eingeladen wirst.                                                                  |
| `reason:manual`           | Wenn Du auf einem Issue oder Pull Request **Subscribe** (Abonnieren) klickst, die Du noch nicht abonniert hattest.                            |
| `reason:mention`          | Du wurdest direkt @erwähnt.                                                                                                                   |
| `reason:review-requested` | You or a team you're on have been requested to review a pull request.{% if currentVersion != "github-ae@latest" %}
| `reason:security-alert`   | When a security alert is issued for a repository.{% endif %}
| `reason:state-change`     | Wenn der Status eines Pull Request oder Issue geändert wird. Beispielsweise wird ein Issue geschlossen oder ein Pull Request zusammengeführt. |
| `reason:team-mention`     | Wenn ein Team, dem Du angehörst, @erwähnt wird.                                                                                               |
| `reason:ci-activity`      | Wenn ein Repository CI-Aktualisierungen hat, wie beispielsweise einen neuen Status für eine Workflow-Ausführung.                              |

{% if currentVersion == "free-pro-team@latest" %}
#### Supported `author:` queries

To filter notifications by user, you can use the `author:` query. An author is the original author of the thread (issue, pull request, gist, discussions, and so on) for which you are being notified. For example, to see notifications for threads created by the Octocat user, use `author:octocat`.

#### Supported `org:` queries

To filter notifications by organization, you can use the  `org` query. The organization you need to specify in the query is the organization of the repository for which you are being notified on {% data variables.product.prodname_dotcom %}. This query is useful if you belong to several organizations, and want to see notifications for a specific organization.

For example, to see notifications from the octo-org organization, use `org:octo-org`.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_dependabot %} custom filters

{% if currentVersion == "free-pro-team@latest" %}
If you use
{% data variables.product.prodname_dependabot %} to keep your dependencies up-to-date, you can use and save these custom filters:
- `is:repository_vulnerability_alert` to show notifications for {% data variables.product.prodname_dependabot_alerts %}.
- `reason:security_alert` to show notifications for {% data variables.product.prodname_dependabot_alerts %} and security update pull requests.
- `author:app/dependabot` to show notifications generated by {% data variables.product.prodname_dependabot %}. This includes {% data variables.product.prodname_dependabot_alerts %}, security update pull requests, and version update pull requests.
For more information about

{% data variables.product.prodname_dependabot %}, see "[About managing vulnerable dependencies](/github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
If you use
{% data variables.product.prodname_dependabot %} to keep your dependencies-up-to-date, you can use and save the `is:repository_vulnerability_alert` custom filter to show notifications for {% data variables.product.prodname_dependabot_alerts %}.
For more information about

{% data variables.product.prodname_dependabot %}, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
{% endif %}

{% endif %}
