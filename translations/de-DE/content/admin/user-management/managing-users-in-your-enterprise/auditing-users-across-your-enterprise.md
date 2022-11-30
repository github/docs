---
title: Auditing users across your enterprise
intro: 'The audit log dashboard shows site administrators the actions performed by all users and organizations across your enterprise within the past 90 days, including details such as who performed the action, what the action was, and when the action was performed.'
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization/
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Organizations
  - Security
  - User account
---
### Zugriff auf das Auditprotokoll

The audit log dashboard gives you a visual display of audit data across your enterprise.

![Instanzweites Auditprotokoll-Dashboard](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

Auf der Karte können Sie schwenken und zoomen, um Ereignisse auf der gesamten Welt zu sehen. Bewegen Sie den Mauszeiger über ein Land, um eine schnelle Zählung der Ereignisse für dieses Land zu sehen.

### Searching for events across your enterprise

The audit log lists the following information about actions made within your enterprise:

* [das Repository](#search-based-on-the-repository), in dem eine Aktion ausgeführt wurde
* [den Benutzer](#search-based-on-the-user), der die Aktion ausgeführt hat
* auf [welche Organisation](#search-based-on-the-organization) sich eine Aktion bezieht
* [die Aktion](#search-based-on-the-action-performed), die ausgeführt wurde
* in [welchem Land](#search-based-on-the-location) die Aktion stattfand
* [Datum und Uhrzeit](#search-based-on-the-time-of-action) der Aktion

{% warning %}

**Hinweise:**

- Sie können zwar keinen Text für die Suche nach Audit-Einträgen verwenden, aber Sie können Suchabfragen mit einer Vielzahl von Filtern erstellen. {% data variables.product.product_name %} supports many operators for searching across {% data variables.product.product_name %}. Weitere Informationen findest Du unter „[Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github).“
- Verwenden Sie den Kennzeichner `created`, wenn Sie nach Ereignissen suchen möchten, die länger als 90 Tage zurückliegen.

{% endwarning %}

#### Repository-basierte Suche

Der Kennzeichner `repo` begrenzt die Aktionen auf ein bestimmtes Repository, das Ihrer Organisation gehört. Ein Beispiel:

* `repo:my-org/our-repo` findet alle Ereignisse, die im Repository `our-repo` der Organisation `my-org` aufgetreten sind.
* `repo:my-org/our-repo repo:my-org/another-repo` findet alle Ereignisse, die in den Repositorys `our-repo` und `another-repo` der Organisation `my-org` aufgetreten sind.
* `-repo:my-org/not-this-repo` schließt alle Ereignisse aus, die im Repository `not-this-repo` der Organisation `my-org` aufgetreten sind.

Sie müssen den Kennzeichner `repo` in den Namen Ihrer Organisation aufnehmen. Die bloße Suche nach `repo:our-repo` funktioniert nicht.

#### Suche nach Benutzer

Der Kennzeichner </code>actor</code> analysiert die Ereignisse anhand der Mitglieder Ihrer Organisation, welche die Aktion durchgeführt haben. Ein Beispiel:

* `actor:octocat` findet alle Ereignisse in Verbindung mit Aktionen, die von `octocat` ausgeführt wurden.
* `actor:octocat actor:hubot` findet alle Ereignisse in Verbindung mit Aktionen, die von `octocat` oder `hubot` ausgeführt wurden.
* `-actor:hubot` schließt alle Ereignisse in Verbindung mit Aktionen aus, die von `hubot` ausgeführt wurden.

Sie können nur einen {% data variables.product.product_name %}-Benutzernamen verwenden, nicht den wirklichen Namen einer Einzelperson.

#### Organisationsbasierte Suche

Der Kennzeichner `org` begrenzt Aktionen auf eine bestimmte Organisation. Ein Beispiel:

* `org:my-org` finds all events that occurred for the `my-org` organization.
* `org:my-org action:team` sucht nach allen Teamereignissen, die in der Organisation `my-org` durchgeführt wurden.
* `-org:my-org` excludes all events that occurred for the `my-org` organization.

#### Suche nach der Art der durchgeführten Aktion

Der Kennzeichner `action` sucht nach bestimmten Ereignissen, gruppiert in Kategorien. Weitere Informationen zu diesen Kategorien zugeordneten Ereignissen finden Sie unter „[Überwachte Aktionen](/admin/user-management/audited-actions)“.

| Kategoriename | Beschreibung                                                                              |
| ------------- | ----------------------------------------------------------------------------------------- |
| `Hook`        | Umfasst alle Aktivitäten in Verbindung mit Webhooks.                                      |
| `org`         | Umfasst alle Aktivitäten in Verbindung mit der Organisationsmitgliedschaft.               |
| `repo`        | Umfasst alle Aktivitäten in Verbindung mit den Ihrer Organisation gehörenden Repositorys. |
| `Team`        | Umfasst alle Aktivitäten in Verbindung mit Teams in Ihrer Organisation.                   |

Mit den folgenden Suchbegriffen kannst Du nach bestimmten Aktionsgruppen suchen. Ein Beispiel:

* `action:team` findet alle Ereignisse innerhalb der Kategorie „Team“.
* `-action:billing` schließt alle Ereignisse in der Abrechnungskategorie aus.

Zu jeder Kategorie gehört eine Gruppe zugehöriger Ereignisse, auf die Du filtern kannst. Ein Beispiel:

* `action:team.create` findet alle Ereignisse in Verbindung mit der Erstellung eines Teams.
* `-action:billing.change_email` schließt alle Ereignisse aus, bei denen die E-Mail-Adresse für die Abrechnung geändert wurde.

#### Standortbasierte Suche

Der Kennzeichner `country` filtert Aktionen nach dem Ursprungsland.
- Hierzu verwenden Sie den zweistelligen Kurzcode oder den vollständigen Namen des Landes.
- Ländernamen mit Leerzeichen müssen in Anführungszeichen eingeschlossen sein. Ein Beispiel:
  * `country:de` findet alle Ereignisse, die in Deutschland aufgetreten sind.
  * `country:Mexico` findet alle Ereignisse, die in Mexiko aufgetreten sind.
  * `country:"United States"` findet alle Ereignisse, die in den USA aufgetreten sind.

#### Aktionszeitpunktbasierte Suche

Der Kennzeichner `created` filtert Aktionen nach dem Zeitpunkt ihres Auftretens.
- Definieren Sie Datumswerte im Format `YYYY-MM-DD`, also nach Jahr, Monat, Tag.
- Datumswerte unterstützen die [Kennzeichner „greater than“, „less than“ und „range“](/enterprise/{{ currentVersion }}/user/articles/search-syntax). Ein Beispiel:
  * `created:2014-07-08` findet alle Ereignisse vom 8. Juli 2014.
  * `created:>=2014-07-01` findet alle Ereignisse vom und vor dem 8. Juli 2014.
  * `created:<=2014-07-01` findet alle Ereignisse vom und vor dem 1. Juli 2014.
  * `created:2014-07-01..2014-07-31` findet alle Ereignisse im Juli 2014.
