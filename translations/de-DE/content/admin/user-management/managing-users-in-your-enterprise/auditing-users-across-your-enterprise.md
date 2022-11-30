---
title: Überwachen von Benutzer*innen in deinem Unternehmen
intro: 'Das Überwachungsprotokolldashboard zeigt Websiteadministratoren die Aktionen aller Benutzer*innen und Organisationen in deinem Unternehmen innerhalb des aktuellen Monats und der vorherigen sechs Monate an. Das Überwachungsprotokoll enthält Details wie den Ausführenden, die Art und den Zeitpunkt der Aktionen.'
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Organizations
  - Security
  - User account
shortTitle: Audit users
ms.openlocfilehash: 18ea00b69f452ff496670fbd31e41bb8038cc46d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331688'
---
## Zugriff auf das Auditprotokoll

Auf dem Dashboard für Überwachungsprotokolle werden die Überwachungsdaten deines Unternehmens visualisiert.

![Instanzweites Auditprotokoll-Dashboard](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}

Auf der Karte kannst du schwenken und zoomen, um Ereignisse auf der gesamten Welt zu sehen. Bewege den Mauszeiger über ein Land, um eine schnelle Zählung der Ereignisse für dieses Land zu sehen.

## Suchen nach Ereignissen in deinem Unternehmen

Im Überwachungsprotokoll werden die folgenden Informationen zu Aktionen aufgeführt, die in deinem Unternehmen durchgeführt wurden:

* [Das Repository](#search-based-on-the-repository), in dem die Aktion durchgeführt wurde
* [Der Benutzer](#search-based-on-the-user), der die Aktion durchgeführt hat
* [Welche Organisation](#search-based-on-the-organization) eine Aktion betrifft
* [Die durchgeführte Aktion](#search-based-on-the-action-performed)
* [Das Land](#search-based-on-the-location), in dem die Aktion durchgeführt wurde
* [Das Datum und den Zeitpunkt](#search-based-on-the-time-of-action) der Aktion

{% warning %}

**Hinweise:**

- Du kannst zwar keinen Text für die Suche nach Audit-Einträgen verwenden, aber du kannst Suchabfragen mit einer Vielzahl von Filtern erstellen. {% data variables.product.product_name %} unterstützt viele Operatoren, mit denen du {% data variables.product.product_name %} durchsuchen kannst. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github).
- Überwachungsdatensätze sind für den aktuellen Monat und jeden Tag der vorangegangenen sechs Monate verfügbar.

{% endwarning %}

### Repository-basierte Suche

Der `repo`-Qualifizierer beschränkt Aktionen auf ein bestimmtes Repository, das sich im Besitz deiner Organisation befindet. Beispiel:

* `repo:my-org/our-repo` sucht alle Ereignisse, die für das `our-repo`-Repository in der `my-org`-Organisation aufgetreten sind.
* `repo:my-org/our-repo repo:my-org/another-repo` sucht alle Ereignisse, die für die `our-repo`- und `another-repo`-Repositorys in der `my-org`-Organisation aufgetreten sind.
* `-repo:my-org/not-this-repo` schließt alle Ereignisse aus, die für das `not-this-repo`-Repository in der `my-org`-Organisation aufgetreten sind.

Du musst den Namen deiner Organisation in den `repo`-Qualifizierer einschließen. Nur nach `repo:our-repo` zu suchen ist nicht möglich.

### Suche nach Benutzer

Der `actor`-Qualifizierer legt den Umfang der Ereignisse auf der Grundlage des Mitglieds deiner Organisation fest, das die Aktion durchgeführt hat. Beispiel:

* `actor:octocat` findet alle Ereignisse, die von `octocat` durchgeführt wurden.
* `actor:octocat actor:hubot` findet alle Ereignisse, die von `octocat` und `hubot` durchgeführt wurden.
* `-actor:hubot` schließt alle Ereignisse aus, die von `hubot` durchgeführt wurden.

Du kannst nur den in {% data variables.product.product_name %} verwendeten Benutzernamen, aber nicht den wirklichen Namen eines Benutzers verwenden.

### Organisationsbasierte Suche

Der `org`-Qualifizierer beschränkt Aktionen auf eine bestimmte Organisation. Beispiel:

* `org:my-org` sucht alle Ereignisse, die für die `my-org`-Organisation aufgetreten sind.
* `org:my-org action:team` sucht alle Teamereignisse, die innerhalb der `my-org`-Organisation aufgetreten sind.
* `-org:my-org` schließt alle Ereignisse aus, die für die `my-org`-Organisation aufgetreten sind.

### Suche nach der Art der durchgeführten Aktion

Der `action`-Qualifizierer sucht nach bestimmten Ereignissen, die in Kategorien gruppiert sind. Unter [Überwachungsprotokoll-Ereignisse für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) findest du Informationen zu den Ereignissen, die diesen Kategorien zugeordnet sind.

| Kategoriename | BESCHREIBUNG
|------------------|-------------------
| `hook` | Umfasst alle Aktivitäten in Verbindung mit Webhooks.
| `org` | Umfasst alle Aktivitäten in Verbindung mit der Organisationsmitgliedschaft.
| `repo` | Umfasst alle Aktivitäten in Verbindung mit den deiner Organisation gehörenden Repositorys
| `team` | Umfasst alle Aktivitäten in Verbindung mit Teams in deiner Organisation

Mit den folgenden Suchbegriffen kannst du nach bestimmten Aktionsgruppen suchen. Beispiel:

* `action:team` sucht alle Ereignisse, die in der Teamkategorie gruppiert sind.
* `-action:billing` schließt alle Ereignisse in der Abrechnungskategorie aus.

Zu jeder Kategorie gehört eine Gruppe zugehöriger Ereignisse, nach der du filtern kannst. Beispiel:

* `action:team.create` sucht alle Ereignisse, bei denen ein Team erstellt wurde.
* `-action:billing.change_email` schließt alle Ereignisse aus, bei denen die Abrechnungs-E-Mail geändert wurde.

### Standortbasierte Suche

Der `country`-Qualifizierer filtert Aktionen nach dem Ursprungsland.
- Hierzu verwendest du den zweistelligen Kurzcode oder den vollständigen Namen des Landes.
- Ländernamen mit Leerzeichen müssen in Anführungszeichen eingeschlossen sein. Beispiel:
  * `country:de` sucht alle Ereignisse, die in Deutschland aufgetreten sind.
  * `country:Mexico` sucht alle Ereignisse, die in Mexiko aufgetreten sind.
  * `country:"United States"` sucht alle Ereignisse, die in den USA aufgetreten sind.

### Aktionszeitpunktbasierte Suche

Der `created`-Qualifizierer filtert Aktionen nach dem Zeitpunkt, an dem sie aufgetreten sind.
- Definiere Datumsangaben im Format `YYYY-MM-DD`, also mit dem Jahr, gefolgt vom Monat und dem Tag.
- Datumsangaben unterstützen [„Größer als“- und „Kleiner als“-Qualifizierer sowie Bereichsqualifizierer](/enterprise/user/articles/search-syntax). Beispiel:
  * `created:2014-07-08` sucht alle Ereignisse, die am 8. Juli 2014 aufgetreten sind.
  * `created:>=2014-07-01` sucht alle Ereignisse, die am oder nach dem 8. Juli 2014 aufgetreten sind.
  * `created:<=2014-07-01` sucht alle Ereignisse, die am oder vor dem 8. Juli 2014 aufgetreten sind.
  * `created:2014-07-01..2014-07-31` sucht alle Ereignisse, die im Juli 2014 aufgetreten sind.
