---
title: Durchsuchen des Überwachungsprotokolls für dein Unternehmen
intro: Du kannst eine umfangreiche Liste der überwachten Aktionen in deinem Unternehmen durchsuchen.
shortTitle: Search audit logs
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can search the audit log.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
  - /admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 12bc44b7d81df55366f8b839261cf8899a53729d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183996'
---
## Informationen zur Suche beim Überwachungsprotokoll für dein Unternehmen

Du kannst das Überwachungsprotokoll für dein Unternehmens direkt über die Benutzeroberfläche mithilfe der Dropdownliste **Filter** oder durch Eingabe einer Suchabfrage durchsuchen.

  ![Suchabfrage](/assets/images/enterprise/site-admin-settings/search-query.png)

Weitere Informationen zum Anzeigen des Überwachungsprotokolls für dein Unternehmen findest du unter „[Zugreifen auf das Überwachungsprotokoll für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)“. 

{% data reusables.audit_log.git-events-not-in-search-results %}

Außerdem kannst du mithilfe der API Überwachungsprotokollereignisse abrufen. Weitere Informationen findest du unter „[Verwenden der Überwachungsprotokoll-API für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)“.

Du kannst nicht mit Text nach Einträgen suchen. Du kannst jedoch Suchabfragen mit den verschiedensten Filtern erstellen. Viele Operatoren, die beim Abfragen des Protokolls verwendet werden, z. B. `-`, `>` oder `<`, entsprechen demselben Format wie beim Durchsuchen von {% data variables.product.product_name %}. Weitere Informationen findest du unter [Suchen auf {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% note %}

**Hinweis**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Suchabfragefilter

Filtern| BESCHREIBUNG
--------------:| -----------
`Yesterday's activity` | Alle Aktionen, die am letzten Tag erstellt wurden
`Enterprise account management` | Alle Aktionen in der Kategorie `business`
`Organization membership` | Alle Aktionen für den Zeitpunkt, an dem ein neuer Benutzer zum Beitritt zu einer Organisation eingeladen wurde
`Team management` | Alle Aktionen im Zusammenhang mit der Teamverwaltung<br/>– Wenn ein Benutzerkonto oder Repository einem Team hinzugefügt oder daraus entfernt wurde<br/>– Wenn ein Teambetreuer höhergestuft oder herabgestuft wurde<br/>– Wenn ein Team gelöscht wurde
`Repository management` | Alle Aktionen für die Repositoryverwaltung<br/>– Wenn ein Repository erstellt oder gelöscht wurde<br/>– Wenn die Sichtbarkeit des Repositorys geändert wurde<br/>– Wenn ein Team einem Repository hinzugefügt oder daraus entfernt wurde{% ifversion ghec %}
`Billing updates` | Alle Aktionen in Bezug darauf, wie dein Unternehmen für {% data variables.product.prodname_dotcom %} bezahlt und wann deine E-Mail-Adresse für die Abrechnung geändert wurde{% endif %}
`Hook activity` | Alle Aktionen für Webhooks und Pre-Receive-Hooks
`Security management` | Alle Aktionen in Bezug auf SSH-Schlüssel, Bereitstellungsschlüssel, Sicherheitsschlüssel, Zweistufige Authentifizierung (2FA) und Autorisierung von SAML Single Sign-On (SSO)-Anmeldeinformationen sowie Sicherheitsrisikowarnungen für Repositorys

## Suchabfragesyntax

Du kannst eine Suchabfrage aus mindestens einem `key:value`-Paar erstellen, das durch die logischen Operatoren UND/ODER getrennt wird. So kannst du beispielsweise alle Aktionen anzeigen, die sich seit Anfang 2017 auf das Repository `octocat/Spoon-Knife` ausgewirkt haben:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

Die folgenden `key:value`-Paare können in einer Suchabfrage verwendet werden:

Schlüssel            | Wert
--------------:| --------------------------------------------------------
`actor_id`     | ID des Benutzerkontos, das die Aktion initiiert hat
`actor`        | Name des Benutzerkontos, der die Aktion initiiert hat
`oauth_app_id` | ID der mit der Aktion verknüpften OAuth-Anwendung
`action`       | Name der überwachten Aktion
`user_id`      | ID des von der Aktion betroffenen Benutzers
`user`         | Name des von der Aktion betroffenen Benutzers
`repo_id`      | ID des von der Aktion betroffenen Repositorys (sofern zutreffend)
`repo`         | Name des von der Aktion betroffenen Repositorys (sofern zutreffend)
`actor_ip`     | IP-Adresse, über welche die Aktion initiiert wurde
`created`      | Zeitpunkt, zu dem die Aktion ausgeführt wurde{% ifversion ghes %} Wenn du das Überwachungsprotokoll über das Websiteadministrator-Dashboard abfragst, verwende stattdessen `created_at` {% endif %}
`from`         | Ansicht, von wem die Aktion initiiert wurde
`note`         | Verschiedene ereignisspezifische Informationen (im Nur-Text- oder JSON-Format)
`org`          | Name der von der Aktion betroffenen Organisation (sofern zutreffend)
`org_id`       | ID der von der Aktion betroffenen Organisation (sofern zutreffend)
`business` | Name des von der Aktion betroffenen Unternehmens (sofern zutreffend)
`business_id` | ID des von der Aktion betroffenen Unternehmens (sofern zutreffend)
{%- ifversion token-audit-log %} `hashed_token` | Das Token, das für die Authentifizierung für die Aktion verwendet wird (siehe ggf. [Identifizieren von Überwachungsprotokollereignissen, die von einem Zugriffstoken ausgeführt werden](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)) {%- endif %}

Wenn du Aktionen nach Kategorie gruppiert anzeigen möchtest, kannst du auch den Aktionsqualifizierer als `key:value`-Paar verwenden. Weitere Informationen findest du unter „[Suchen basierend auf der ausgeführten Aktion](#search-based-on-the-action-performed)“.

Eine vollständige Liste der Aktionen im Überwachungsprotokoll deines Unternehmens findest du unter „[Überwachungsprotokollaktionen für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)“.

## Auditprotokoll durchsuchen

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### Suche nach der Art der durchgeführten Aktion

Verwende für die Suche nach bestimmten Ereignissen in deiner Abfrage den Qualifizierer `action`. Beispiel:

  * `action:team` sucht alle Ereignisse, die in der Teamkategorie gruppiert sind.
  * `-action:hook` schließt alle Ereignisse in der Webhookkategorie aus.

Bei jeder Kategorie gibt es eine Gruppe von zugeordneten Aktionen, nach denen du filtern kannst. Beispiel:

  * `action:team.create` sucht alle Ereignisse, bei denen ein Team erstellt wurde.
  * `-action:hook.events_changed` schließt alle Ereignisse aus, bei denen die Ereignisse in einem Webhook geändert wurden.

Aktionen, die im Überwachungsprotokoll deines Unternehmens zu finden sind, werden in die folgenden Kategorien gruppiert:

{% data reusables.audit_log.audit-log-action-categories %}

### Suche nach dem Zeitpunkt der Aktion

Verwende den Qualifizierer `created`, um Ereignisse im Überwachungsprotokoll basierend auf dem Zeitpunkt, an dem sie aufgetreten sind, zu filtern.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Beispiel:

  * `created:2014-07-08` sucht alle Ereignisse, die am 8. Juli 2014 aufgetreten sind.
  * `created:>=2014-07-08` sucht alle Ereignisse, die am oder nach dem 8. Juli 2014 aufgetreten sind.
  * `created:<=2014-07-08` sucht alle Ereignisse, die am oder vor dem 8. Juli 2014 aufgetreten sind.
  * `created:2014-07-01..2014-07-31` sucht alle Ereignisse, die im Juli 2014 aufgetreten sind.

### Suche nach Standort

Mithilfe des Qualifizierers `country` kannst du Ereignisse im Überwachungsprotokoll basierend auf dem Ursprungsland filtern. Dazu kannst du den Kurzcode aus zwei Buchstaben oder den vollständigen Namen eines Landes verwenden. Ländernamen mit Leerzeichen müssen in Anführungszeichen eingeschlossen werden. Beispiel:

  * `country:de` sucht alle Ereignisse, die in Deutschland aufgetreten sind.
  * `country:Mexico` sucht alle Ereignisse, die in Mexiko aufgetreten sind.
  * `country:"United States"` sucht alle Ereignisse, die in den USA aufgetreten sind.

{% ifversion token-audit-log %}
### Suchen basierend auf dem Token, das die Aktion ausgeführt hat

Verwende den Qualifizierer `hashed_token`, um basierend auf dem Token zu suchen, das die Aktion ausgeführt hat. Damit du nach einem Token suchen kannst, musst du einen SHA-256-Hash generieren. Weitere Informationen findest du unter [Identifizieren von Überwachungsprotokollereignissen, die von einem Zugriffstoken ausgeführt werden](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).
{% endif %}
