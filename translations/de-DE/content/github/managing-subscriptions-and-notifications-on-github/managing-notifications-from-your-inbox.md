---
title: Benachrichtigungen über Deinen Posteingang verwalten
intro: 'Use your inbox to quickly triage and sync your notifications across email{% if currentVersion == "free-pro-team@latest" %} and mobile{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### Über Deinen Posteingang

{% if currentVersion == "free-pro-team@latest" %}
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

### Unterstützte Abfragen für benutzerdefinierte Filter

Es gibt drei Arten von Filtern, die Du verwenden kannst:
  - Nach Repository filtern mit `Repo:`
  - Nach Diskussionstyp filtern mit `is:`
  - Nach Benachrichtigungsgrund filtern mit `reason:`

Um einen `repo:`-Filter hinzuzufügen, musst Du den Inhaber des Repository in der Abfrage einschließen. Beispielsweise repräsentiert `repo:atom/atom` alle Atom-Repositorys, die im Besitz der Atom-Organisation sind.

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
| `reason:review-requested` | Du oder ein Team, in dem du angehörst, wurden gebeten, einen Pull Request zu überprüfen.                                                      |
| `reason:security-alert`   | Wenn eine Sicherheitswarnung für ein Repository ausgegeben wird.                                                                              |
| `reason:state-change`     | Wenn der Status eines Pull Request oder Issue geändert wird. Beispielsweise wird ein Issue geschlossen oder ein Pull Request zusammengeführt. |
| `reason:team-mention`     | Wenn ein Team, dem Du angehörst, @erwähnt wird.                                                                                               |
| `reason:ci-activity`      | Wenn ein Repository CI-Aktualisierungen hat, wie beispielsweise einen neuen Status für eine Workflow-Ausführung.                              |

#### Unterstützte `is:`-Abfragen

Um Benachrichtigungen nach bestimmten Aktivitäten auf {% data variables.product.product_name %} zu filtern, kannst du die Abfrage `is` verwenden. For example, to only see repository invitation updates, use `is:repository-invitation`, and to only see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %} security{% endif %} alerts, use `is:repository-vulnerability-alert`.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`
- `is:repository-advisory`
- `is:team-discussion`

For information about reducing noise from notifications for {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."

Du kannst die Abfrage `is:` auch verwenden, um zu beschreiben, wie die Benachrichtigung selektiert wurde.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`
