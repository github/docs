---
title: Websiteadministrator-Dashboard
intro: 'Das Websiteadministrator-Dashboard bietet eine Reihe an Tools zum Verwalten von {% data variables.product.product_location_enterprise %}.'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard/
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
versions:
  enterprise-server: '*'
---

Klicken Sie in der oberen rechten Ecke einer beliebigen Seite auf {% octicon "rocket" aria-label="The rocket ship" %}, um auf das Dashboard zuzugreifen.![Raumschiffsymbol für den Zugriff auf die Einstellungen des Websiteadministrators](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Suche

Hier können Sie die {% data variables.enterprise.management_console %} starten, um die Einstellungen der virtuellen Appliance zu verwalten, also beispielsweise die Domain, die Authentifizierung und SSL.

{% else %}

### Lizenzinformationen und Suche

In diesem Abschnitt des Websiteadministrator-Dashboards können Sie Ihre aktuelle {% data variables.product.prodname_enterprise %}-Lizenz überprüfen, nach Benutzern und Repositorys suchen und das [Auditprotokoll](#audit-log) abfragen.

{% endif %}

### {% data variables.enterprise.management_console %}

Hier können Sie die {% data variables.enterprise.management_console %} starten, um die Einstellungen der virtuellen Appliance zu verwalten, also beispielsweise die Domain, die Authentifizierung und SSL.

### Erkunden

Die Daten für die [Seite mit Trends][] für GitHub wird für Repositorys und Entwickler in täglichen, wöchentlichen und monatlichen Zeiträumen berechnet. Im Abschnitt **Erkunden** können Sie sehen, wann diese Daten letztmals zwischengespeichert wurden. Zudem können Sie darin neue Aufträge zur Berechnung von Trends in die Warteschlange versetzen.

### Auditprotokoll

{% data variables.product.prodname_enterprise %} speichert ein Ablaufprotokoll der überwachten Aktionen, die Sie abfragen können.

Das Auditprotokoll zeigt standardmäßig eine Liste sämtlicher überwachter Aktionen in umgekehrt chronologischer Reihenfolge an. Sie können diese Liste filtern. Geben Sie dazu im Textfeld **Query** (Abfragen) Schlüsselwertpaare ein, und klicken Sie anschließend auf **Search** (Suchen), wie dies unter „[Auditprotokoll durchsuchen](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log)“ erläutert ist.

For more information on audit logging in general, see "[Audit logging](/enterprise/{{ currentVersion }}/admin/guides/installation/audit-logging)." For a full list of audited actions, see "[Audited actions](/enterprise/{{ currentVersion }}/admin/guides/installation/audited-actions)."

### Berichte

Zum Abrufen von Informationen zu Benutzern, Organisationen und Repositorys in {% data variables.product.product_location_enterprise %} würden Sie normalerweise über die [GitHub-API](/rest) JSON-Daten abrufen. Leider stellt die API nicht alle gewünschten Daten bereit und erfordert ein gewisses technisches Know-how. Das Websiteadministrator-Dashboard bietet alternativ den Abschnitt **Reports** (Berichte). In diesem können Sie ohne Weiteres CSV-Berichte mit den meisten Informationen herunterladen, die Sie wahrscheinlich für Benutzer, Organisationen und Repositorys benötigen.

Insbesondere können Sie CSV-Berichte herunterladen, die Folgendes auflisten:

- alle Benutzer
- alle Benutzer, die im letzten Monat aktiv waren
- alle Benutzer, die mindestens für einen Monat inaktiv waren
- alle Benutzer, die gesperrt wurden
- alle Organisationen
- alle Repositorys

Darüber hinaus können Sie mit einem Websiteadministratorkonto über die HTTP-Standardauthentifizierung programmatisch auf diese Berichte zugreifen. Du musst ein persönliches Zugangs-Token mit dem „scope“ (Anwendungsbereich) `site_admin` verwenden. Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."

So würden Sie beispielsweise den Bericht „all users“ (alle Benutzer) mit der cURL herunterladen:

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

Ersetzen Sie für den programmatischen Zugriff auf die anderen Berichte `all_users` durch `active_users`, `dormant_users`, `suspended_users`, `all_organizations` oder `all_repositories`.

{% note %}

**Hinweis:** Die anfängliche `curl`-Anforderung gibt eine 202 HTTP-Antwort zurück, wenn keine zwischengespeicherten Berichte verfügbar sind. Im Hintergrund wird ein Bericht generiert. Sie können eine zweite Anforderung senden, um den Bericht herunterzuladen. Sie können ein Passwort oder ein OAuth-Token mit dem Umfang `site_admin` anstelle eines Passworts verwenden.

{% endnote %}

#### Benutzerberichte

|         Schlüssel | Beschreibung                                                                         |
| -----------------:| ------------------------------------------------------------------------------------ |
|      `created_at` | Zeitpunkt der Benutzerkontoerstellung (als ein ISO 8601-Zeitstempel)                 |
|              `id` | Konto-ID für den Benutzer oder für die Organisation                                  |
|           `login` | Anmeldename des Kontos                                                               |
|          `E-Mail` | Primäre E-Mail-Adresse des Kontos                                                    |
|           `Rolle` | Gibt an, ob es sich um ein Administrator- oder um ein normales Benutzerkonto handelt |
|      `suspended?` | Gibt an, ob das Konto gesperrt wurde                                                 |
|  `last_logged_ip` | Neueste IP-Adresse für Kontoanmeldung                                                |
|           `repos` | Anzahl der dem Konto gehörenden Repositorys                                          |
|        `ssh_keys` | Anzahl der für das Konto registrierten SSH-Schlüssel                                 |
| `org_memberships` | Anzahl der Organisationen, zu denen das Konto gehört                                 |
|        `dormant?` | Gibt an, ob das Konto inaktiv ist                                                    |
|     `last_active` | Gibt den Zeitpunkt der letzten Kontoaktivität an (als ein ISO 8601-Zeitstempel)      |
|       `raw_login` | Unformatierte Anmeldeinformationen (im JSON-Format)                                  |
|    `2fa_enabled?` | Gibt an, ob der Benutzer die Zwei-Faktor-Authentifizierung aktiviert hat             |

#### Organisationsberichte

|       Schlüssel | Beschreibung                                                                        |
| ---------------:| ----------------------------------------------------------------------------------- |
|            `id` | Organisations-ID                                                                    |
|    `created_at` | Zeitpunkt der Organisationserstellung                                               |
|         `login` | Anmeldename der Organisation                                                        |
|        `E-Mail` | Primäre E-Mail-Adresse der Organisation                                             |
|        `owners` | Anzahl der Organisationsinhaber                                                     |
|       `members` | Anzahl der Organisationsmitglieder                                                  |
|         `teams` | Anzahl der Organisationsteams                                                       |
|         `repos` | Anzahl der Organisations-Repositorys                                                |
| `2fa_required?` | Gibt an, ob für die Organisation die Zwei-Faktor-Authentifizierung erforderlich ist |

#### Repository-Berichte

|                  Schlüssel | Beschreibung                                                             |
| --------------------------:| ------------------------------------------------------------------------ |
|               `created_at` | Zeitpunkt der Repository-Erstellung                                      |
|                 `owner_id` | ID des Repository-Inhabers                                               |
|               `owner_type` | Gibt an, ob das Repository einem Benutzer oder einer Organisation gehört |
|               `owner_name` | Name des Repository-Inhabers                                             |
|                       `id` | Repository-ID                                                            |
|                     `name` | Repository-Name                                                          |
| `Transparenz/Sichtbarkeit` | Gibt an, ob das Repository öffentlich oder privat ist                    |
|            `readable_size` | Größe des Repositorys in einem visuell lesbaren Format                   |
|                 `raw_size` | Größe des Repositorys als eine Zahl                                      |
|            `collaborators` | Anzahl der Repository-Mitarbeiter                                        |
|                    `fork?` | Gibt an, ob das Repository ein Fork ist                                  |
|                 `deleted?` | Gibt an, ob das Repository gelöscht wurde                                |

### Indizierung

Die GitHub-Features zur [Codesuche][] werden von [ElasticSearch][] unterstützt. Dieser Abschnitt des Websiteadministrator-Dashboards zeigt den aktuellen Status Ihres ElasticSearch-Clusters und stellt Ihnen verschiedene Tools bereit, mit denen Sie das Verhalten der Suchvorgänge und Indizierung steuern können. Diese Tools sind in die folgenden drei Kategorien unterteilt.

#### Codesuche

Dadurch können Sie Such- und Indizierungsvorgänge im Quellcode aktivieren oder deaktivieren.

#### Reparatur des Codesuche-Index

Dadurch wird gesteuert, wie der Index für die Codesuche repariert wird. Sie können

- Indexreparaturaufträge aktivieren oder deaktivieren,
- einen neuen Indexreparaturauftrag starten,
- den gesamten Indexreparaturzustand zurücksetzen.

{% data variables.product.prodname_enterprise %} verwendet Reparaturaufträge, um den Zustand des Suchindex mit den in einer Datenbank (Issues, Pull Requests, Repositorys und Benutzer) gespeicherten Daten und mit den in Git-Repositorys (Quellcode) gespeicherten Daten abzustimmen. Dies ist der Fall, wenn

- ein neuer Suchindex erstellt wird,
- fehlende Daten abgeglichen oder
- alte Suchdaten aktualisiert werden müssen.

Reparaturaufträge werden demnach nach Bedarf gestartet und im Hintergrund ausgeführt. Sie werden nicht von Websiteadministratoren geplant.

Zudem verwenden Reparaturaufträge einen „Reparaturversatz“ zur Parallelisierung. Dies ist ein Versatz in der Datenbanktabelle für den abzustimmenden Datensatz. Anhand dieses Versatzes können mehrere Hintergrundaufträge die Arbeit synchronisieren.

Eine Fortschrittsanzeige zeigt den aktuellen Status eines Reparaturauftrags auf den gesamten Hintergrund-Workern an. Hierbei handelt es sich um die prozentuale Abweichung des Reparaturversatzes mit der höchsten Datensatz-ID in der Datenbank. Machen Sie sich keine Sorgen hinsichtlich des nach Abschluss eines Reparaturauftrags in der Fortschrittsanzeige angezeigten Werts. Dieser zeigt nämlich den Unterschied zwischen dem Reparaturversatz und der höchsten Datensatz-ID in der Datenbank. Der Wert wird kleiner, wenn mehr Repositorys zu {% data variables.product.product_location_enterprise %} hinzugefügt werden, auch wenn diese Repositorys tatsächlich indiziert sind.

Reparaturaufträge des Codesuche-Index können jederzeit gestartet werden. Diese verwenden eine einzelne CPU und stimmen den Suchindex mit den Datenbank- und Git-Repository-Daten ab. Versuchen Sie, einen Reparaturauftrag zunächst außerhalb der Hauptauslastungszeiten durchzuführen, um die Auswirkungen auf die E/A-Leistung zu minimieren und die Wahrscheinlichkeit von Betriebsunterbrechungen zu verringern. Mit einem Dienstprogramm wie `top` können Sie die durchschnittliche Auslastung und CPU-Auslastung Ihres Systems überwachen. Wenn Sie keine erheblichen Änderungen feststellen, können Sie einen Indexreparaturauftrag auch in Spitzenzeiten ohne Weiteres ausführen.

#### Indexreparatur für Issues

Dadurch wird gesteuert, wie der [Issues][]-Index repariert wird. Sie können

- Indexreparaturaufträge aktivieren oder deaktivieren,
- einen neuen Indexreparaturauftrag starten,
- den gesamten Indexreparaturzustand zurücksetzen.

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Alle Benutzer

Hier können Sie alle Benutzer anzeigen, die auf {% data variables.product.product_location_enterprise %} gesperrt wurden, und [eine SSH-Schlüsselüberwachung initiieren](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

{% endif %}

### Repositorys

Dies ist eine Liste der Repositorys auf {% data variables.product.product_location_enterprise %}. Sie können auf einen Repository-Namen klicken und auf Funktionen zum Verwalten des Repositorys zugreifen.

- [Erzwungene Push-Vorgänge an ein Repository blockieren](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [{% data variables.large_files.product_name_long %} konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [Repositorys archivieren und deren Archivierung aufheben](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/)

### Alle Benutzer

Hier können Sie alle Benutzer auf Ihrer {% data variables.product.product_location_enterprise %} anzeigen und  [eine SSH-Schlüsselüberwachung initiieren](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

### Websiteadministratoren

Hier können Sie alle Administratoren auf Ihrer {% data variables.product.product_location_enterprise %} anzeigen und [eine SSH-Schlüsselüberwachung initiieren](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

### Inaktive Benutzer

Hier können Sie alle inaktiven Benutzer auf {% data variables.product.product_location_enterprise %} anzeigen und [sperren](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users). In den folgenden Fällen wird ein Benutzerkonto als inaktiv angesehen:

- Es besteht schon länger als die für {% data variables.product.product_location_enterprise %} festgelegte Inaktivitätsschwelle.
- Es hat in diesem Zeitraum keine Aktivitäten generiert.
- Es ist kein Websiteadministrator.

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} Weitere Informationen finden Sie unter „[Inaktive Benutzer verwalten](/enterprise/{{ currentVersion }}/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)“.

### Gesperrte Benutzer

Hier können Sie alle Benutzer anzeigen, die auf {% data variables.product.product_location_enterprise %} gesperrt wurden, und [eine SSH-Schlüsselüberwachung initiieren](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

  [Seite mit Trends]: https://github.com/blog/1585-explore-what-is-trending-on-github

  [Codesuche]: https://github.com/blog/1381-a-whole-new-code-search
  [ElasticSearch]: http://www.elasticsearch.org/

  [Issues]: https://github.com/blog/831-issues-2-0-the-next-generation
