---
title: Informationen zu Serverstatistiken
intro: 'Du kannst {% data variables.product.prodname_server_statistics %} verwenden, um deine eigenen aggregierten Daten von {% data variables.product.prodname_ghe_server %} zu analysieren, und uns helfen, {% data variables.product.company_short %}-Produkte zu verbessern.'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
ms.openlocfilehash: 3d17df54cd5dcf9ad102ab5079794a9bcb3e664b
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185185'
---
## Informationen zu den Vorteilen von {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} können dazu beitragen, die Bedürfnisse deiner Organisation zu antizipieren, die Arbeit deines Teams nachzuvollziehen und den Nutzen darzustellen, den du aus {% data variables.product.prodname_ghe_server %} ziehst.

Nach der Aktivierung sammelt {% data variables.product.prodname_server_statistics %} aggregierte Daten zur Nutzung bestimmter Features auf deiner Instanz im Laufe der Zeit. Im Gegensatz zu anderen [API-Endpunkten für Administratorstatistiken](/rest/reference/enterprise-admin#admin-stats), die nur Daten für den letzten Tag zurückgeben, stellt {% data variables.product.prodname_server_statistics %} Verlaufsdaten für alle {% data variables.product.prodname_server_statistics %}-Metriken zur Verfügung, die seit der Aktivierung des Features gesammelt wurden. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_server_statistics %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise).

Wenn du {% data variables.product.prodname_server_statistics %} aktivierst, trägst du zur Verbesserung von {% data variables.product.prodname_dotcom %} bei. Durch die von dir bereitgestellten aggregierten Daten können wir Erkenntnisse dazu gewinnen, welchen Nutzen {% data variables.product.prodname_dotcom %} unseren Kunden bietet. Anhand dieser Informationen kann {% data variables.product.company_short %} bessere und fundiertere Produktentscheidungen treffen, von denen letztendlich auch du profitierst.

## Informationen zur Datensicherheit

Wir respektieren deine Daten. Wir geben keine Daten von {% data variables.location.product_location %} weiter, sofern du uns nicht ausdrücklich die Berechtigung dazu erteilt hast.

Wir sammeln keine personenbezogenen Daten. Wir sammeln auch keine {% data variables.product.company_short %}-Inhalte wie Code, Issues, Kommentare oder Pull Requests.

Nur die Besitzer*innen des verbundenen Unternehmenskontos oder der Organisation in {% data variables.product.prodname_ghe_cloud %} können auf die Daten zugreifen.

Nur bestimmte Aggregatmetriken werden aus Repositorys, Issues, Pull Requests und anderen Features gesammelt. Eine Liste der erfassten Aggregatmetriken findest du unter [Erfasste {% data variables.product.prodname_server_statistics %}-Daten](#server-statistics-data-collected). 

Jegliche Updates an den gesammelten Metriken erfolgen in Featurereleases von {% data variables.product.prodname_ghe_server %} und werden in den [Versionshinweisen von {% data variables.product.prodname_ghe_server %}](/admin/release-notes) erläutert. Darüber hinaus wird dieser Artikel mit sämtlichen Metrikupdates aktualisiert.

Weitere Informationen dazu, wie wir {% data variables.product.prodname_server_statistics %}-Daten speichern und schützen, findest du unter [GitHub-Sicherheit](https://github.com/security).

### Informationen zur Datenaufbewahrung und -löschung

{% data variables.product.company_short %} sammelt {% data variables.product.prodname_server_statistics %} Daten, solange deine {% data variables.product.prodname_ghe_server %}-Lizenz aktiv und das {% data variables.product.prodname_server_statistics %}-Feature aktiviert ist.

Wenn du deine Daten löschen möchtest, kannst du dich an den GitHub-Support, deine*n {% data variables.product.prodname_dotcom %}-Kundenbetreuer*in oder deinen Customer Success Manager wenden.  Im Allgemeinen löschen wir Daten in dem in unseren Datenschutzbestimmungen angegebenen Zeitrahmen. Weitere Informationen findest du in der [Datenschutzerklärung von {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data) in der Dokumentation auf {% data variables.product.prodname_dotcom_the_website %}.

### Informationen zur Datenportabilität

Als Organisations- oder Unternehmensbesitzer*in auf {% data variables.product.prodname_ghe_cloud %} kannst du auf {% data variables.product.prodname_server_statistics %}-Daten zugreifen, indem du diese als CSV- oder JSON-Datei exportierst. Auch der Zugriff über die {% data variables.product.prodname_server_statistics %}-REST-API ist möglich. Weitere Informationen findest du unter [Anfordern von {% data variables.product.prodname_server_statistics %} über die REST-API](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api) oder [Exportieren von {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics).

## Informationen zum Deaktivieren der Datensammlung

Du kannst das {% data variables.product.prodname_server_statistics %}-Feature jederzeit deaktivieren. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_server_statistics %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise).

## Gesammelte {% data variables.product.prodname_server_statistics %}-Daten

Nachdem du {% data variables.product.prodname_server_statistics %} aktiviert hast, werden Metriken mithilfe eines täglichen Auftrags gesammelt, der in {% data variables.location.product_location %} ausgeführt wird. Die Aggregatmetriken werden in deiner Organisation oder deinem Unternehmenskonto in {% data variables.product.prodname_ghe_cloud %} gespeichert, nicht in {% data variables.location.product_location %}.

Die folgenden Aggregatmetriken werden täglich gesammelt und übertragen und stellen die Gesamtanzahl für den Tag dar.

CSV-Spalte | Name | BESCHREIBUNG |
---------- | ---- | ----------- |
Ein   | `github_connect.features_enabled` | Array von {% data variables.product.prodname_github_connect %}-Funktionen, die für deine Instanz aktiviert sind (siehe „[Informationen zu {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features)“) |
B   | `host_name` | Der Hostname für deine Instanz |
C   | `dormant_users.dormancy_threshold` | Die Zeitspanne welche ein Benutzer inaktiv sein muss um als ruhend betrachtet zu werden |
D   | `dormant_users.total_dormant_users` | Anzahl ruhender Benutzerkonten |
E   | `ghes_version` | Die Version von {% data variables.product.product_name %}, die von deiner Instanz ausgeführt wird |
F   | `server_id` | Die für deine Instanz generierte UUID
G   | `collection_date` | Das Datum, an dem die Metriken erfasst wurden |
H   | `schema_version` | Die Version des Datenbankschemas, das zum Speichern dieser Daten verwendet wird |
I   | `ghe_stats.comments.total_commit_comments` | Anzahl der Kommentare zu Commits |
J   | `ghe_stats.comments.total_gist_comments` | Anzahl der Kommentare zu Gists |
K   | `ghe_stats.comments.total_issue_comments` | Anzahl der Kommentare zu Problemen | 
L   | `ghe_stats.comments.total_pull_request_comments` | Anzahl der Kommentare zu Pull Requests |
M   | `ghe_stats.gists.total_gists` | Anzahl der Gists (sowohl geheim als auch öffentlich) |
N   | `ghe_stats.gists.private_gists` | Anzahl der geheimen Gists |
O   | `ghe_stats.gists.public_gists` | Anzahl der öffentlichen Gists |
P   | `ghe_stats.hooks.total_hooks` | Anzahl der Pre-Receive-Hooks (sowohl aktiv als auch inaktiv) |
Q   | `ghe_stats.hooks.active_hooks` | Anzahl der aktiven Pre-Receive-Hooks |
R   | `ghe_stats.hooks.inactive_hooks` | Anzahl der inaktiven Pre-Receive-Hooks |
E   | `ghe_stats.issues.total_issues` | Anzahl der Probleme (sowohl offen als auch geschlossen) |
T   | `ghe_stats.issues.open_issues` | Anzahl der offenen Probleme |
U   | `ghe_stats.issues.closed_issues` | Anzahl der geschlossenen Probleme |
V   | `ghe_stats.milestones.total_milestones` | Anzahl der Meilensteine (sowohl offen als auch geschlossen) |
W   | `ghe_stats.milestones.open_milestones` | Anzahl der offenen Meilensteine |
X   | `ghe_stats.milestones.closed_milestones` | Anzahl der geschlossenen Meilensteine |
J   | `ghe_stats.orgs.total_orgs` | Anzahl der Organisationen (sowohl aktiviert als auch deaktiviert) |
Z   | `ghe_stats.orgs.disabled_orgs` | Anzahl der deaktivierten Organisationen |
AA | `ghe_stats.orgs.total_teams` | Die Anzahl der Teams |
AB | `ghe_stats.orgs.total_team_members` | Anzahl der Teammitglieder |
Netzbetrieb | `ghe_stats.pages.total_pages` | Anzahl der {% data variables.product.prodname_pages %}-Websites |
AD | `ghe_stats.pulls.total_pulls` | Anzahl der Pull Requests |
AE | `ghe_stats.pulls.merged_pulls` | Anzahl der zusammengeführten Pull Requests |
AF | `ghe_stats.pulls.mergeable_pulls` | Anzahl der Pull Requests, die derzeit zusammengeführt werden können |
Verfügbarkeitsgruppe | `ghe_stats.pulls.unmergeable_pulls` | Anzahl der Pull Requests, die derzeit nicht zusammengeführt werden können |
AH | `ghe_stats.repos.total_repos` | Anzahl der Repositorys (sowohl Upstreamrepositorys als auch Forks) |
KI | `ghe_stats.repos.root_repos` | Anzahl der Upstreamrepositorys |
AJ | `ghe_stats.repos.fork_repos` | Anzahl der Forks |
AK | `ghe_stats.repos.org_repos` | Anzahl der Repositorys im Besitz von Organisationen |
AL | `ghe_stats.repos.total_pushes` | Anzahl der Pushvorgänge an Repositorys |
AM | `ghe_stats.repos.total_wikis` | Anzahl der Wikis |
AN | `ghe_stats.users.total_users` | Anzahl der Benutzerkonten |
AO | `ghe_stats.users.admin_users` | Anzahl der Benutzerkonten, die Websiteadministratoren sind |
AP | `ghe_stats.users.suspended_users` | Anzahl der gesperrten Benutzerkonten |

## Beispiele für {% data variables.product.prodname_server_statistics %}-Daten

Um ein Beispiel für die Überschriften zu sehen, die im CSV-Export für {% data variables.product.prodname_server_statistics %} enthalten sind, lädst du das [CSV-Beispiel {% data variables.product.prodname_server_statistics %}](/assets/server-statistics-csv-example.csv) herunter.

Ein Beispiel für die Antwortnutzdaten der {% data variables.product.prodname_server_statistics %}-API findest du unter [Anfordern von {% data variables.product.prodname_server_statistics %} über die REST-API](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api).
