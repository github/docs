---
title: Websiteadministrator-Dashboard
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
  - /admin/configuration/site-admin-dashboard
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 5e845824a5216e43f1e4e8f7b73f08963ce1d71b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147763708'
---
Klicke auf einer beliebigen Seite oben rechts auf {% octicon "rocket" aria-label="The rocket ship" %}, um auf das Dashboard zuzugreifen.
![Raketenschiffsymbol für den Zugriff auf die Administratoreinstellungen der Website](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% ifversion ghes or ghae %}

## Suche

In diesem Abschnitt des Websiteadministrator-Dashboards kannst du nach Benutzer*innen und Repositorys suchen sowie das [Überwachungsprotokoll](#audit-log) abfragen.

{% else %}

## Lizenzinformationen & Suche

In diesem Abschnitt des Websiteadministrator-Dashboards kannst du deine aktuelle {% data variables.product.prodname_enterprise %}-Lizenz überprüfen, nach Benutzer*innen und Repositorys suchen sowie das [Überwachungsprotokoll](#audit-log) abfragen.

{% endif %} {% ifversion ghes %}
## {% data variables.enterprise.management_console %}

Hier kannst du die {% data variables.enterprise.management_console %} starten, um die Einstellungen der virtuellen Geräte zu verwalten, beispielsweise die Domain, die Authentifizierung und SSL.
{% endif %}
## Erkunden

Daten für die [Trendseite][] von GitHub werden in täglichen, wöchentlichen und monatlichen Zeiträumen für Repositorys und Entwickler berechnet. Du kannst anzeigen, wann diese Daten zuletzt zwischengespeichert wurden, und neue Aufträge zur Berechnung von Trends aus dem Abschnitt **Erkunden** in die Warteschlange einreihen.

  [Trendseite]: https://github.com/blog/1585-explore-what-is-trending-on-github

## Überwachungsprotokoll

{% data variables.product.product_name %} speichert ein Ablaufprotokoll der überwachten Aktionen, die du abfragen kannst.

Das Auditprotokoll zeigt standardmäßig eine Liste sämtlicher überwachter Aktionen in umgekehrt chronologischer Reihenfolge an. Du kannst diese Liste filtern, indem du Schlüsselwertpaare in das Textfeld **Abfrage** eingibst und dann auf **Suchen** klickst, wie unter [Durchsuchen des Überwachungsprotokolls für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise) beschrieben wird.

Weitere Informationen zur Überwachungsprotokollierung im Allgemeinen findest du unter [Informationen zum Überwachungsprotokoll für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise). Eine vollständige Liste der überwachten Aktionen findest du unter [Überwachungsprotokollereignisse für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

## Berichte

Wenn du Informationen zu Benutzer*innen, Organisationen und Repositorys in {% data variables.product.product_location %} benötigst, rufst du die JSON-Daten normalerweise über die [GitHub-API](/rest) ab. Leider stellt die API nicht alle gewünschten Daten bereit und erfordert ein gewisses technisches Know-how. Das Websiteadministrator-Dashboard bietet den Abschnitt **Berichte** als Alternative, mit dem du einfach CSV-Berichte mit den meisten Informationen herunterladen kannst, die du wahrscheinlich für Benutzer*innen, Organisationen und Repositorys benötigst.

Insbesondere kannst du CSV-Berichte herunterladen, die Folgendes auflisten:

- alle Benutzer
- Alle aktiven Benutzer
- alle [Inaktiven Benutzer](/admin/user-management/managing-dormant-users)
- alle Benutzer, die gesperrt wurden
- alle Organisationen
- alle Repositorys

Darüber hinaus kannst du mit einem Websiteadministrator-Konto über die HTTP-Standardauthentifizierung programmgesteuert auf diese Berichte zugreifen. Du musst ein persönliches Zugriffs-Token mit dem `site_admin`-Geltungsbereich verwenden. Weitere Informationen findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).

So kannst du beispielsweise den Bericht „all users“ (alle Benutzer) mit der cURL herunterladen:

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

Um programmgesteuert auf die anderen Berichte zuzugreifen, ersetze `all_users` durch `active_users`, `dormant_users`, `suspended_users`, `all_organizations` oder `all_repositories`.

{% note %}

**Hinweis:** Die anfängliche `curl`-Anforderung gibt eine 202 HTTP-Antwort zurück, wenn keine zwischengespeicherten Berichte verfügbar sind;.im Hintergrund wird ein Bericht generiert. Du kannst eine zweite Anforderung senden, um den Bericht herunterzuladen. Du kannst entweder ein Kennwort oder ein OAuth-Token mit dem `site_admin`-Geltungsbereich anstelle eines Kennworts verwenden.

{% endnote %}

### Benutzerberichte

Schlüssel               | BESCHREIBUNG
-----------------:| ------------------------------------------------------------
`created_at`      | Zeitpunkt der Benutzerkontoerstellung (als ein ISO 8601-Zeitstempel)
`id`              | Konto-ID für den Benutzer oder für die Organisation
`login`           | Anmeldename des Kontos
`email`           | Primäre E-Mail-Adresse des Kontos
`role`            | Gibt an, ob es sich um ein Administrator- oder um ein normales Benutzerkonto handelt
`suspended?`      | Gibt an, ob das Konto gesperrt wurde
`last_logged_ip`  | Neueste IP-Adresse für Kontoanmeldung
`repos`           | Anzahl der dem Konto gehörenden Repositorys
`ssh_keys`        | Anzahl der für das Konto registrierten SSH-Schlüssel
`org_memberships` | Anzahl der Organisationen, zu denen das Konto gehört
`dormant?`        | Gibt an, ob das Konto inaktiv ist
`last_active`     | Gibt den Zeitpunkt der letzten Kontoaktivität an (als ein ISO 8601-Zeitstempel)
`raw_login`       | Unformatierte Anmeldeinformationen (im JSON-Format)
`2fa_enabled?`    | Gibt an, ob der Benutzer die Zwei-Faktor-Authentifizierung aktiviert hat

### Organisationsberichte

Schlüssel            | BESCHREIBUNG
--------------:| ------------------------------------
`id`           | Organisations-ID
`created_at`   | Zeitpunkt der Organisationserstellung
`login`        | Anmeldename der Organisation
`email`        | Primäre E-Mail-Adresse der Organisation
`owners`       | Anzahl der Organisationsinhaber
`members`      | Anzahl der Organisationsmitglieder
`teams`        | Anzahl der Organisationsteams
`repos`        | Anzahl der Organisations-Repositorys
`2fa_required?`| Gibt an, ob für die Organisation die Zwei-Faktor-Authentifizierung erforderlich ist

### Repository-Berichte

Schlüssel             | BESCHREIBUNG
---------------:| ------------------------------------------------------------
`created_at`    | Zeitpunkt der Repository-Erstellung
`owner_id`      | ID des Repository-Inhabers
`owner_type`    | Gibt an, ob das Repository einem Benutzer oder einer Organisation gehört
`owner_name`    | Name des Repository-Inhabers
`id`            | Repository-ID
`name`          | Name des Repositorys
`visibility`    | Gibt an, ob das Repository öffentlich oder privat ist
`readable_size` | Größe des Repositorys in einem visuell lesbaren Format
`raw_size`      | Größe des Repositorys als eine Zahl
`collaborators` | Anzahl der Repository-Mitarbeiter
`fork?`         | Gibt an, ob das Repository ein Fork ist
`deleted?`      | Gibt an, ob das Repository gelöscht wurde

{% ifversion ghes %}
## Indizierung

Die Suchfunktionen von GitHub werden von Elasticsearch unterstützt. Dieser Abschnitt des Websiteadministrator-Dashboards zeigt den aktuellen Status deines Elasticsearch-Clusters an und stellt dir verschiedene Tools zur Verfügung, mit denen du das Such- und Indizierungsverhalten steuern kannst.

Weitere Informationen zur Codesuche findest du unter [Suchen nach Informationen in {% data variables.product.prodname_dotcom %}](/search-github). Weitere Informationen zu Elasticsearch findest du auf der [Elasticsearch-Website](https://elastic.co).

{% note %}

**Hinweis**: Bei normaler Verwendung müssen Websiteadministratoren keine neuen Indizes erstellen oder Reparaturaufträge planen. Zur Problembehandlung oder zu anderen Supportzwecken kann der {% data variables.contact.github_support %} dich anweisen, einen Reparaturauftrag auszuführen.

{% endnote %}

### Indexverwaltung

{% data variables.product.product_name %} stimmt den Suchindexstatus automatisch und regelmäßig mit Daten in der Instanz ab.

- Issues, Pull Requests, Repositorys und Benutzer in der Datenbank
- Git-Repositorys (Quellcode) auf dem Datenträger

Deine Instanz verwendet Reparaturaufträge, um die Daten abzustimmen und einen Reparaturauftrag im Hintergrund zu planen, wenn die folgenden Ereignisse auftreten.

- Ein neuer Suchindex wird erstellt.
- Fehlende Daten müssen abgeglichen werden.
- Veraltete Suchdaten müssen aktualisiert werden.

Du kannst einen neuen Index erstellen oder in der Liste auf einen vorhandenen Index klicken, um den Index zu verwalten. Für einen Index können die folgenden Vorgänge ausgeführt werden.

- Festlegen des Indexes als durchsuchbar
- Festlegen des Indexes als beschreibbar
- Aktualisieren des Indexes
- Löschen des Indexes
- Zurücksetzen des Indexreparaturzustands
- Starten eines neuen Indexreparaturauftrags
- Aktivieren oder Deaktivieren von Indexreparaturaufträgen

Eine Statusanzeige zeigt den aktuellen Status eines Reparaturauftrags auf allen Hintergrundworkern an. Bei der Anzeige handelt es sich um die prozentuale Abweichung des Reparaturversatzes von der höchsten Datensatz-ID in der Datenbank. Du kannst den Wert in der Statusanzeige ignorieren, nachdem ein Reparaturauftrag abgeschlossen wurde. Die Statusanzeige gibt den Unterschied zwischen dem Reparaturversatz und der höchsten Datensatz-ID in der Datenbank an. Dieser wird kleiner, je mehr Repositorys auf {% data variables.product.product_location %} hinzugefügt werden, selbst wenn diese Repositorys eigentlich indiziert sind.

Um die Auswirkungen auf die E/A-Leistung zu minimieren und die Wahrscheinlichkeit von Timeouts bei Vorgängen zu verringern, führe den Reparaturauftrag außerhalb der Spitzenzeiten durch. Während der Auftrag den Suchindex mit Datenbank- und Git-Repositorydaten abstimmt, wird eine CPU verwendet. Überwache die durchschnittlichen Auslastungswerte und die CPU-Auslastung deines Systems mit einem Hilfsprogramm wie `top`. Wenn du keinen signifikanten Anstieg des Ressourcenverbrauchs feststellst, solltest du einen Indexreparaturauftrag auch während der Spitzenzeiten ausführen können.

Reparaturaufträge verwenden einen „Reparaturversatz“ zur Parallelisierung. Dies ist ein Versatz in der Datenbanktabelle für den abzustimmenden Datensatz. Anhand dieses Versatzes können mehrere Hintergrundaufträge die Arbeit synchronisieren.

### Codesuche

Dadurch kannst du Such- und Indizierungsvorgänge im Quellcode aktivieren oder deaktivieren.

{% endif %}
## Reservierte Anmeldungen

Bestimmte Wörter sind für die interne Verwendung in {% data variables.product.product_location %} reserviert, was bedeutet, dass diese Wörter nicht als Benutzernamen verwendet werden können.

Beispielsweise sind die unter anderem die folgenden Wörter reserviert:

- `admin`
- `enterprise`
- `login`
- `staff`
- `support`

Navigiere für die vollständige Liste oder reservierte Wörter auf dem Websiteadministrator-Dashboard zu „Reservierte Anmeldungen“.

{% ifversion ghas-committers-calculator %}
## {% data variables.product.prodname_advanced_security %}-Committers

Du kannst die Anzahl aktiver Committer anzeigen, die aktuell Arbeitsplätze für {% data variables.product.prodname_GH_advanced_security %} verwenden, und du kannst berechnen, wie viele zusätzliche Arbeitsplätze benötigt werden, solltest du {% data variables.product.prodname_GH_advanced_security %} für weitere Organisationen und Repositorys aktivieren.

Unter „Aktuell aktive Anzahl der Committer“ kannst du die Anzahl der aktiven Committer für Repositorys mit {% data variables.product.prodname_GH_advanced_security %} im aktivierten Zustand anzeigen. Dies ist die Anzahl der lizenzierten Arbeitsplätze, die derzeit verwendet werden.

Unter „Maximale Anzahl der Committer in der gesamten Instanz“ kannst du die Anzahl der aktiven Committer in allen Repositorys in deinem Unternehmen anzeigen. Dies ist die Anzahl der Arbeitsplätze, die verwendet werden würden, wenn du {% data variables.product.prodname_GH_advanced_security %} für jedes Repository in deinem Unternehmen aktivieren würdest.

Unter „Kalkulieren zusätzlicher erweiterter Committer“ kannst du berechnen, wie viele zusätzliche Arbeitsplätze verwendet werden, wenn du {% data variables.product.prodname_GH_advanced_security %} für bestimmte Organisationen und Repositorys aktivierst. Gib unter „Organisationen und Repositorys“ eine Liste an Organisationen und Repositorys mit einer Organisation oder einem Repository pro Zeile ein, oder füge sie ein. 

```
example-org
octo-org/octo-repo
```

Bei dem Ergebnis handelt es sich um die Anzahl zusätzlicher Arbeitsplätze, die verwendet werden würden, wenn du {% data variables.product.prodname_GH_advanced_security %} für diese Organisationen und Repositorys aktivieren würdest.

Weitere Informationen zur Abrechnung für {% data variables.product.prodname_advanced_security %} findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).
{% endif %}

## Alle Benutzer

In diesem Abschnitt des Websiteadministrator-Dashboards kannst du Organisationen, Personen, Richtlinien und Einstellungen verwalten.

## Repositorys

Dies ist eine Liste der Repositorys auf {% data variables.product.product_location %}. Du kannst auf einen Repositorynamen klicken und auf Funktionen zum Verwalten des Repositorys zugreifen.

- [Erzwungene Push-Vorgänge an ein Repository blockieren](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [Konfigurieren von {% data variables.large_files.product_name_long %}](/enterprise/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [Repositorys archivieren und Archivierung aufheben](/enterprise/admin/guides/user-management/archiving-and-unarchiving-repositories/)

## Alle Benutzer

Hier kannst du alle Benutzer*innen auf {% data variables.product.product_location %} anzeigen und [eine SSH-Schlüsselüberwachung initiieren](/enterprise/admin/guides/user-management/auditing-ssh-keys).

## Websiteadministratoren

Hier kannst du alle Administrator*innen auf {% data variables.product.product_location %} anzeigen und [eine SSH-Schlüsselüberwachung initiieren](/enterprise/admin/guides/user-management/auditing-ssh-keys).

## Inaktive Benutzer
{% ifversion ghes %} Hier kannst du alle inaktiven Benutzer*innen auf {% data variables.product.product_location %} anzeigen und [sperren](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users). Ein Benutzerkonto wird als inaktiv („ruhend“) betrachtet, wenn es: {% endif %} {% ifversion ghae %} Hier kannst du alle inaktiven Benutzer*innen auf {% data variables.product.product_location %} anzeigen und sperren. Ein Benutzerkonto wird als inaktiv angesehen („ruhend“) betrachtet, wenn: {% endif %}

- Besteht schon länger als der für {% data variables.product.product_location %} festgelegte Ruheschwellenwert.
- Es hat in diesem Zeitraum keine Aktivitäten generiert.
- Es ist kein Websiteadministrator.

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} Weitere Informationen findest du unter [Verwalten ruhender Benutzer*innen](/enterprise/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold).

## Gesperrte Benutzer

Hier kannst du alle gesperrten Benutzer*innen auf {% data variables.product.product_location %} anzeigen und [eine SSH-Schlüsselüberwachung initiieren](/enterprise/admin/guides/user-management/auditing-ssh-keys).
