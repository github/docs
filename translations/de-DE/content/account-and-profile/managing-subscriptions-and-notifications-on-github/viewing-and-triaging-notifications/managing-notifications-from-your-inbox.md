---
title: Benachrichtigungen über deinen Posteingang verwalten
intro: 'Selektiere und synchronisiere deine Benachrichtigungen über deinen Posteingang im Handumdrehen für alle E-Mail-Konten{% ifversion fpt or ghes or ghec %} und mobilen Geräte{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: Manage from your inbox
ms.openlocfilehash: d3e0d5eb5e7cf3e544ab601651951178402e4150
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106805'
---
## Über deinen Posteingang

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings).
{% endif %}

Um auf deinen Posteingang für Benachrichtigungen zuzugreifen, klicke in der rechten oberen Ecke einer beliebigen Seite auf {% octicon "bell" aria-label="The notifications bell" %}.

  ![Benachrichtigung, die auf eine ungelesene Mitteilung hinweist](/assets/images/help/notifications/notifications_general_existence_indicator.png)

Dein Posteingang zeigt alle Benachrichtigungen an, die du nicht deaktiviert oder als **Erledigt** markiert hast. Du kannst deinen Posteingang an deinen Workflow anpassen, indem du Filter verwendest, alle oder nur ungelesene Benachrichtigungen anzeigst und deine Benachrichtigungen gruppierst, um eine schnelle Übersicht zu erhalten.

  ![Posteingangsansicht](/assets/images/help/notifications-v2/inbox-view.png)

Standardmäßig werden in deinem Posteingang gelesene und ungelesene Benachrichtigungen angezeigt. Um nur ungelesene Benachrichtigungen anzuzeigen, klicke auf **Ungelesen**, oder verwende die Abfrage `is:unread`.

  ![Posteingangsansicht ungelesene Benachrichtigungen](/assets/images/help/notifications-v2/unread-inbox-view.png)

## Selektionsoptionen

Du hast mehrere Optionen, um Benachrichtigungen in deinem Posteingang zu selektieren.

| Selektionsoptionen | BESCHREIBUNG |
|-----------------|-------------|
| Speichern            | Sichert deine Benachrichtigung für spätere Überprüfung. Um eine Benachrichtigung zu speichern, klicke rechts neben der Benachrichtigung auf {% octicon "bookmark" aria-label="The bookmark icon" %}. <br> <br> Gespeicherte Benachrichtigungen werden unbegrenzt aufbewahrt und können angezeigt werden, indem du auf der Randleiste auf **Gespeichert** klickst oder die Abfrage `is:saved` verwendest. Wenn deine gesicherte Benachrichtigung älter als 5 Monate ist und du sie nicht mehr sicherst, wird die Benachrichtigung innerhalb eines Tages aus deinem Posteingang entfernt. |
| Fertig            | Markiert eine Benachrichtigung als erledigt und entfernt die Benachrichtigung aus deinem Posteingang. Du kannst alle abgeschlossenen Benachrichtigungen anzeigen, indem du auf der Randleiste auf **Erledigt** klickst oder die Abfrage `is:done` verwendest. Benachrichtigungen, die als **Erledigt** gekennzeichnet sind, werden fünf Monate lang gespeichert.
| Abbestellen     | Entfernt die Benachrichtigung automatisch aus deinem Posteingang und gekündigt dich von der Unterhaltung, bis du bist @mentioned, ein Team, auf dem du @mentioneddich befindest, oder du wirst zur Überprüfung angefordert.
| Lesen            | Markiert eine Benachrichtigung als gelesen. Um nur gelesene Benachrichtigungen in deinem Posteingang anzuzeigen, verwende die Abfrage `is:read`. Diese Abfrage enthält keine Benachrichtigungen, die als **Erledigt** gekennzeichnet sind.
| Unread          | Markiert Benachrichtigungen als ungelesen. Um nur ungelesene Benachrichtigungen in deinem Posteingang anzuzeigen, verwende die Abfrage `is:unread`. |

Informationen zu den verfügbaren Tastenkombinationen findest du unter [Tastenkombinationen](/github/getting-started-with-github/keyboard-shortcuts#notifications).

Bevor du eine Selektionsoption wählst, kannst du die Details deiner Benachrichtigung zuerst anzeigen und untersuchen. Weitere Informationen findest du unter [Selektierung einer einzelnen Benachrichtigung](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification).

## Mehrere Benachrichtigungen gleichzeitig selektieren

Um mehrere Benachrichtigungen gleichzeitig zu selektieren, wähle die entsprechenden Benachrichtigungen aus, und verwende das {% octicon "kebab-horizontal" aria-label="The edit icon" %}-Dropdownmenü, um eine Selektionsoption auszuwählen.

![Dropdownmenü mit Selektionsoptionen und ausgewählten Benachrichtigungen](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## Standard-Benachrichtigungsfilter

Standardmäßig verfügt dein Posteingang über Filter, nach denen du zugewiesen wirst, an einem Thread teilnehmen, aufgefordert werden, eine Pullanforderung zu überprüfen, oder wenn dein Benutzername direkt oder ein Team ist @mentioned , bei dem du Mitglied @mentionedbist.

  ![Standardmäßige benutzerdefinierte Filter](/assets/images/help/notifications-v2/default-filters.png)

## Deinen Posteingang mit benutzerdefinierten Filtern anpassen

Du kannst bis zu 15 eigene, benutzerdefinierte Filter hinzufügen.

{% data reusables.notifications.access_notifications %}
2. Um die Filtereinstellungen zu öffnen, klicke auf der linken Randleiste neben „Filter“ auf {% octicon "gear" aria-label="The Gear icon" %}.

  {% tip %}

  **Tipp**: Du kannst schnell eine Vorschau der Ergebnisse deines Posteingangfilters erstellen, indem du eine Abfrage in der Ansicht deines Posteingangs erstellst und auf **Speichern** klickst. Dadurch werden die Einstellungen für benutzerdefinierte Filter geöffnet.

  {% endtip %}

3. Füge deinem Filter einen Namen und eine Filterabfrage hinzu. Um beispielsweise nur Benachrichtigungen für ein bestimmtes Repository anzuzeigen, kannst du einen Filter mithilfe der Abfrage `repo:octocat/open-source-project-name reason:participating` erstellen. Du kannst auch Emojis mit einer lokalen Emoji-Tastatur hinzufügen. Eine Liste der unterstützten Suchabfragen findest du unter [Unterstützte Abfragen für benutzerdefinierte Filter](#supported-queries-for-custom-filters).

  ![Beispiel für benutzerdefinierte Filter](/assets/images/help/notifications-v2/custom-filter-example.png)

4. Klicken Sie auf **Erstellen**.

## Beschränkungen für benutzerdefinierte Filter

Benutzerdefinierte Filter unterstützen im Moment nicht:
  - Volltextsuche in deinem Posteingang, einschließlich die Suche nach Pull-Request- oder Issue-Titeln.
  - Das Unterscheiden zwischen den Abfragefiltern `is:issue`, `is:pr` und `is:pull-request`. Diese Abfragen werden sowohl Issues wie Pull Request zurückgeben.
  - Das Erstellen von mehr als 15 benutzerdefinierten Filtern.
  - Das Ändern der Standardfilter oder deren Reihenfolge.
  - Den [Ausschluss](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results) bei der Suchfunktion durch `NOT` oder `-QUALIFIER`.

## Unterstützte Abfragen für benutzerdefinierte Filter

Es gibt drei Arten von Filtern, die verwendet werden können:
  - Filtern nach Repository mit `repo:`
  - Filtern nach Diskussionstyp mit `is:`
  - Filtern nach Benachrichtigungsgrund mit `reason:`{% ifversion fpt or ghec %}
  - Filtern nach Benachrichtigungsautor mit `author:`
  - Filtern nach Organisation mit `org:`{% endif %}

### Unterstützte `repo:`-Abfragen

Um einen `repo:`-Filter hinzuzufügen, musst du den Besitzer des Repository in die Abfrage einschließen: `repo:owner/repository`. Ein Besitzer ist die Organisation oder die Person, die die {% data variables.product.prodname_dotcom %}-Ressource besitzt, durch die die Benachrichtigung ausgelöst wird. Beispielsweise zeigt `repo:octo-org/octo-repo` Benachrichtigungen an, die im Repository „octo-repo“ innerhalb der Organisation „octo-org“ ausgelöst werden.

### Unterstützte `is:`-Abfragen

Um Benachrichtigungen nach bestimmten Aktivitäten auf {% data variables.location.product_location %} zu filtern, kannst du die Abfrage `is` verwenden. Wenn du z. B. nur Repositoryeinladungsupdates anzeigen möchtest, verwende `is:repository-invitation`{% ifversion not ghae %}, und um nur {% data variables.product.prodname_dependabot_alerts %} anzuzeigen, verwende `is:repository-vulnerability-alert`{% endif %}.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`{% ifversion fpt or ghec %}
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% ifversion fpt or ghec %}
- `is:discussion`{% endif %}

Informationen zum Reduzieren redundanter Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %} findest du unter [Konfigurieren von Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts).

Du kannst auch die Abfrage `is:` verwenden, um zu beschreiben, wie die Benachrichtigung selektiert wurde.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

### Unterstützte `reason:`-Abfragen

Um Benachrichtigungen nach dem Grund zu filtern, aus dem du ein Update erhalten hast, kannst du die Abfrage `reason:` verwenden. Um beispielsweise Benachrichtigungen zu sehen, in denen du oder ein Team, dem du angehörst, zu einem Pull Request-Review aufgefordert wurde, verwende die Abfrage `reason:review-requested`. Weitere Informationen findest du unter [Informationen zu Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications).

| Abfrage | BESCHREIBUNG |
|-----------------|-------------|
| `reason:assign` | Wenn es eine Aktualisierung zu einem Issue oder Pull Request gibt, denen du zugewiesen bist.
| `reason:author` | Wenn es eine Aktualisierung oder einen neuen Kommentar zu einem Pull Request oder Issue gibt, die du eröffnet hast.
| `reason:comment`| Wenn du einen Issue, einen Pull Request oder eine Teamdiskussion kommentiert hast.
| `reason:participating` | Wenn du ein Issue, einen Pull Request oder eine Teamdiskussion kommentiert hast oder über @mentioned erwähnt wurdest.
| `reason:invitation` | Wenn du in ein Team, eine Organisation oder ein Repository eingeladen wirst.
| `reason:manual` | Wenn du für ein Issue oder einen Pull Request, das bzw. den du noch nicht abonniert hast, auf **Abonnieren** klickst.
| `reason:mention` | Du wurdest direkt über @mentioned erwähnt.
| `reason:review-requested` | Du oder ein Team, dem du angehörst, wurden gebeten, einen Pull Request zu prüfen.
| `reason:security-alert` | Wenn eine Sicherheitswarnung für ein Repository ausgegeben wird
| `reason:state-change`  | Wenn der Status eines Pull Request oder Issue geändert wird. Beispielsweise wird ein Issue geschlossen oder ein Pull Request zusammengeführt.
| `reason:team-mention` | Wenn ein Team, dem du angehörst, über @mentioned erwähnt wird.
| `reason:ci-activity` | Wenn ein Repository CI-Aktualisierungen hat, wie beispielsweise einen neuen Status für eine Workflow-Ausführung.

{% ifversion fpt or ghec %}
### Unterstützte `author:`-Abfragen

Um Benachrichtigungen nach Benutzer zu filtern, kannst du die `author:`-Abfrage verwenden. Ein Autor ist der ursprüngliche Verfasser des Threads (z. B. Issue, Pull Request, Gist oder Diskussionen), über den du benachrichtigt wirst. Um beispielsweise Benachrichtigungen für Threads anzuzeigen, die vom Benutzer „Octocat“ erstellt wurden, verwende `author:octocat`.

### Unterstützte `org:`-Abfragen

Um Benachrichtigungen nach Organisation zu filtern, kannst du die `org`-Abfrage verwenden. Die Organisation, die du in der Abfrage angeben musst, ist die Organisation des Repositorys, für das du über {% data variables.product.prodname_dotcom %} benachrichtigt wirst. Diese Abfrage ist nützlich, wenn du mehreren Organisationen angehörst und Benachrichtigungen für eine bestimmte Organisation anzeigen möchtest.

Um beispielsweise Benachrichtigungen aus der Organisation „octo-org“ anzuzeigen, verwende `org:octo-org`. 

{% endif %}

## Benutzerdefinierte {% data variables.product.prodname_dependabot %}-Filter

{% ifversion fpt or ghec or ghes %} Wenn du {% data variables.product.prodname_dependabot %} verwendest, um deine Abhängigkeiten auf dem neuesten Stand zu halten, kannst du diese benutzerdefinierten Filter verwenden und speichern:
- `is:repository_vulnerability_alert` zum Anzeigen von Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %}.
- `reason:security_alert` zum Anzeigen von Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %} und Pull Requests für Sicherheitsupdates.
- `author:app/dependabot` zum Anzeigen von Benachrichtigungen, die von {% data variables.product.prodname_dependabot %} generiert wurden. Dies beinhaltet {% data variables.product.prodname_dependabot_alerts %}, Pull Requests für Sicherheitsupdates und Pull Requests für Versionsupdates.

Weitere Informationen zu {% data variables.product.prodname_dependabot %} findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies).
{% endif %}

{% ifversion ghae %}

Wenn du {% data variables.product.prodname_dependabot %} verwendest, um über unsichere Abhängigkeiten informiert zu werden, kannst du diese benutzerdefinierten Filter zum Anzeigen von Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %} verwenden und speichern:
- `is:repository_vulnerability_alert` 
- `reason:security_alert`

Weitere Informationen zu {% data variables.product.prodname_dependabot %} findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).
{% endif %}

