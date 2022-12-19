---
title: Erstellen einer GitHub-App mithilfe von URL-Parametern
intro: 'Du kannst die Einstellungen einer neuen {% data variables.product.prodname_github_app %} mithilfe von URL-[Abfrageparametern](https://en.wikipedia.org/wiki/Query_string) vorab auswählen, um die Konfiguration der neuen {% data variables.product.prodname_github_app %} schnell einzurichten.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation query parameters
ms.openlocfilehash: 94622bfc2de9ba991758a6d1e465d8eb3d770a5f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064027'
---
## Informationen zu {% data variables.product.prodname_github_app %}-URL-Parametern

Du kannst Abfrageparameter zu diesen URLs hinzufügen, um die Konfiguration einer {% data variables.product.prodname_github_app %} auf einem persönlichen oder Organisationskonto vorab auszuwählen:

* **Persönliches Konto**: `{% data variables.product.oauth_host_code %}/settings/apps/new`
* **Organisationskonto:** `{% data variables.product.oauth_host_code %}/organizations/:org/settings/apps/new`

Die Person, die die App erstellt, kann die vorab ausgewählten Werte von der {% data variables.product.prodname_github_app %}-Registrierungsseite bearbeiten, bevor sie die App übermittelt. Wenn du keine erforderlichen Parameter in die URL-Abfragezeichenfolge einschließt, z. B. `name`, muss die Person, die die App erstellt, einen Wert eingeben, bevor sie die App übermittelt.

Für Apps, die ein Geheimnis zum Sichern ihres Webhooks benötigen, muss der Wert des Geheimnisses durch die Person, die die App erstellt, und nicht mithilfe von Abfrageparametern im Formular festgelegt werden. Weitere Informationen findest du unter [Sichern deiner Webhooks](/developers/webhooks-and-events/webhooks/securing-your-webhooks).

Die folgende URL erstellt eine neue öffentliche App namens `octocat-github-app` mit einer vorkonfigurierten Beschreibung und Rückruf-URL. Diese URL wählt auch Lese- und Schreibberechtigungen für `checks`, abonniert die Webhook-Ereignisse `check_run` und `check_suite` und wählt die Option zum Anfordern der Benutzerautorisierung (OAuth) während der Installation aus:

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&events[]=check_run&events[]=check_suite
```

Die vollständige Liste der verfügbaren Abfrageparameter, Berechtigungen und Ereignisse wird in den folgenden Abschnitten aufgeführt.

## {% data variables.product.prodname_github_app %}-Konfigurationsparameter

 Name | type | BESCHREIBUNG
-----|------|-------------
`name` | `string` | Der Name der {% data variables.product.prodname_github_app %}. Gib deiner App einen klaren und kurzen Namen. Deine App kann nicht denselben Namen wie ein vorhandener GitHub-Benutzer haben, es sei denn, es handelt sich um deinen eigenen Benutzer- oder Organisationsnamen. Eine Slugversion des Namens deiner App wird in der Benutzeroberfläche angezeigt, wenn deine Integration eine Aktion ausführt.
`description` | `string` | Eine Beschreibung der {% data variables.product.prodname_github_app %}.
`url` | `string` | Die vollständige URL der Startseite der Website deiner {% data variables.product.prodname_github_app %}.
`callback_urls` | `array of strings` | Vollständige URL, an die Benutzer*innen nach der Autorisierung einer Installation umgeleitet werden. Du kannst bis zu zehn Rückruf-URLs bereitstellen. Diese URLs werden verwendet, wenn deine App Benutzer-zu-Server-Anforderungen identifizieren und autorisieren muss. Beispiel: `callback_urls[]=https://example.com&callback_urls[]=https://example-2.com`.
`request_oauth_on_install` | `boolean` | Wenn deine App Benutzer mit dem OAuth-Flow autorisiert, kannst du diese Option auf `true` festlegen, damit Personen die App während der Installation autorisieren können, was einen Schritt einspart. Wenn du diese Option auswählst, ist die `setup_url` nicht mehr verfügbar, und Benutzer werden nach der Installation der App an deine `callback_url` weitergeleitet.
`setup_url` | `string` | Die vollständige URL zum Umleiten nach der Installation der {% data variables.product.prodname_github_app %}, wenn die App nach der Installation ein zusätzliches Setup erfordert.
`setup_on_update` | `boolean` | Lege diesen Parameter auf `true` fest, um Personen an die Setup-URL umzuleiten, wenn Installationen aktualisiert wurden, z. B. nach dem Hinzufügen oder Entfernen von Repositorys.
`public` | `boolean` | Lege diesen Parameter auf `true` fest, wenn deine {% data variables.product.prodname_github_app %} öffentlich verfügbar sein soll, oder auf `false`, wenn nur der Besitzer der App darauf zugreifen darf.
`webhook_active` | `boolean` | Lege diesen Parameter auf `false` fest, um den Webhook zu deaktivieren. Der Webhook ist standardmäßig aktiviert.
`webhook_url` | `string` | Die vollständige URL, an die du Webhook-Ereignisnutzdaten senden möchtest.
{% ifversion ghae %}`webhook_secret` | `string` | Du kannst ein Geheimnis angeben, um deine Webhooks zu sichern. Weitere Informationen findest du unter [Sichern deiner Webhooks](/webhooks/securing/).
{% endif %}`events` | `array of strings` | Webhook-Ereignisse. Einige Webhook-Ereignisse erfordern `read`- oder `write`-Berechtigungen für eine Ressource, bevor du das Ereignis auswählen kannst, wenn du eine neue {% data variables.product.prodname_github_app %} registrierst. Verfügbare Ereignisse und deren erforderliche Berechtigungen findest du im Abschnitt [{% data variables.product.prodname_github_app %}-Webhook-Ereignisse](#github-app-webhook-events). Du kannst mehrere Ereignisse in einer Abfragezeichenfolge auswählen. Beispiel: `events[]=public&events[]=label`.{% ifversion ghes < 3.4 %}
`domain` | `string` | Die URL eines Inhaltsverweises.{% endif %}
`single_file_name` | `string` | Dies ist eine stark begrenzte Berechtigung, mit der die App auf eine einzelne Datei in einem beliebigen Repository zugreifen kann. Wenn du die `single_file`-Berechtigung auf `read` oder `write` festlegst, stellt dieses Feld den Pfad zur einzelnen Datei bereit, die deine {% data variables.product.prodname_github_app %} verwaltet. {% ifversion fpt or ghes or ghec %} Wenn du mehrere Dateien verwalten musst, lies unten `single_file_paths`. {% endif %}{% ifversion fpt or ghes or ghec %}
`single_file_paths` | `array of strings` | Dadurch kann die App auf bis zu zehn angegebene Dateien in einem Repository zugreifen. Wenn du die `single_file`-Berechtigung auf `read` oder `write` festlegst, kann dieses Array die Pfade für bis zu zehn Dateien speichern, die deine {% data variables.product.prodname_github_app %} verwaltet. Diese Dateien erhalten alle die gleiche Berechtigung, die von `single_file` festgelegt ist, und verfügen nicht über separate individuelle Berechtigungen. Wenn zwei oder mehr Dateien konfiguriert sind, gibt die API `multiple_single_files=true` zurück, anderenfalls `multiple_single_files=false`.{% endif %}

## {% data variables.product.prodname_github_app %}-Berechtigungen

Du kannst Berechtigungen in einer Abfragezeichenfolge mithilfe des Berechtigungsnamens in der folgenden Tabelle als Abfrageparameternamen und den Berechtigungstyp als Abfragewert auswählen. Wenn du beispielsweise `Read & write`-Berechtigungen in der Benutzeroberfläche für `contents` auswählen möchtest, würde deine Abfragezeichenfolge `&contents=write` enthalten. Für die Auswahl von `Read-only`-Berechtigungen auf der Benutzeroberfläche von `blocking` würde deine Abfragezeichenfolge `&blocking=read` enthalten. Für die Auswahl von `no-access` auf der Benutzeroberfläche von `checks` würde deine Abfragezeichenfolge die `checks`-Berechtigung nicht enthalten.

Berechtigung | BESCHREIBUNG
---------- | -----------
[`administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-administration) | Gewährt Zugriff auf verschiedene Endpunkte für die Organisations- und Repositoryverwaltung. Kann `none`, `read` oder `write` sein.{% ifversion fpt or ghec %}
[`blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-blocking) | Gewährt Zugriff auf die [API zum Blockieren von Benutzern](/rest/reference/users#blocking). Kann `none`, `read` oder `write` sein.{% endif %}
[`checks`](/rest/reference/permissions-required-for-github-apps/#permission-on-checks) | Gewährt Zugriff auf die [API für Überprüfungen](/rest/reference/checks). Kann `none`, `read` oder `write` sein.{% ifversion ghes < 3.4 %}
`content_references` | Gewährt Zugriff auf den Endpunkt [Inhaltsanlage erstellen](/rest/reference/apps#create-a-content-attachment). Kann `none`, `read` oder `write` sein.{% endif %}
[`contents`](/rest/reference/permissions-required-for-github-apps/#permission-on-contents) |  Gewährt Zugriff auf verschiedene Endpunkte, mit denen du Repositoryinhalte ändern kannst. Kann `none`, `read` oder `write` sein.
[`deployments`](/rest/reference/permissions-required-for-github-apps/#permission-on-deployments) | Gewährt Zugriff auf die [Bereitstellungs-API](/rest/reference/repos#deployments). Kann `none`, `read` oder `write` sein.{% ifversion fpt or ghes or ghec %}
[`emails`](/rest/reference/permissions-required-for-github-apps/#permission-on-emails) | Gewährt Zugriff auf die [E-Mail-API](/rest/reference/users#emails). Kann `none`, `read` oder `write` sein.{% endif %}
[`followers`](/rest/reference/permissions-required-for-github-apps/#permission-on-followers) | Gewährt Zugriff auf die [Follower-API](/rest/reference/users#followers). Kann `none`, `read` oder `write` sein.
[`gpg_keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-gpg-keys) | Gewährt Zugriff auf die [GPG-Schlüssel-API](/rest/reference/users#gpg-keys). Kann `none`, `read` oder `write` sein.
[`issues`](/rest/reference/permissions-required-for-github-apps/#permission-on-issues) | Gewährt Zugriff auf die [Issue-API](/rest/reference/issues). Kann `none`, `read` oder `write` sein.
[`keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-keys) | Gewährt Zugriff auf die [API für öffentliche Schlüssel](/rest/reference/users#keys). Kann `none`, `read` oder `write` sein.
[`members`](/rest/reference/permissions-required-for-github-apps/#permission-on-members) |  Gewährt Zugriff zum Verwalten der Mitglieder einer Organisation. Kann `none`, `read` oder `write` sein.{% ifversion fpt or ghec %}
[`metadata`](/rest/reference/permissions-required-for-github-apps/#metadata-permissions) | Gewährt Zugriff auf schreibgeschützte Endpunkte, die keine vertraulichen Daten offenlegen. Kann `read` oder `none` sein. Der Standardwert ist `read`, wenn du eine Berechtigung festlegst, oder `none`, wenn du keine Berechtigungen für die {% data variables.product.prodname_github_app %} festlegst.
[`organization_administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-administration) | Gewährt Zugriff auf den Endpunkt [Organisation aktualisieren](/rest/reference/orgs#update-an-organization) und die [API für Interaktionseinschränkungen für eine Organisation](/rest/reference/interactions#set-interaction-restrictions-for-an-organization). Kann `none`, `read` oder `write` sein.{% endif %}
[`organization_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-hooks) | Gewährt Zugriff auf die [Organisationswebhook-API](/rest/reference/orgs#webhooks/). Kann `none`, `read` oder `write` sein.
`organization_plan` | Gewährt Zugriff zum Abrufen von Informationen über den Plan einer Organisation mithilfe des Endpunkts [Organisation abrufen](/rest/reference/orgs#get-an-organization). Kann `none` oder `read` sein.
[`organization_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) |  Gewährt Zugriff auf die [Projekt-API](/rest/reference/projects). Kann `none`, `read`, `write` oder `admin` sein.{% ifversion fpt or ghec %}
[`organization_user_blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) | Gewährt Zugriff auf die [API zum Blockieren von Organisationsbenutzern](/rest/reference/orgs#blocking). Kann `none`, `read` oder `write` sein.{% endif %}
[`pages`](/rest/reference/permissions-required-for-github-apps/#permission-on-pages) | Gewährt Zugriff auf die [Seiten-API](/rest/reference/repos#pages). Kann `none`, `read` oder `write` sein.
`plan` | Gewährt Zugriff zum Abrufen von Informationen über den GitHub-Plan eines Benutzers mithilfe des Endpunkts [Benutzer abrufen](/rest/reference/users#get-a-user). Kann `none` oder `read` sein.
[`pull_requests`](/rest/reference/permissions-required-for-github-apps/#permission-on-pull-requests) | Gewährt Zugriff auf verschiedene Pull Request-Endpunkte. Kann `none`, `read` oder `write` sein.
[`repository_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-hooks) | Gewährt Zugriff auf die [Repository-Webhooks-API](/rest/reference/repos#hooks). Kann `none`, `read` oder `write` sein.
[`repository_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-projects) |  Gewährt Zugriff auf die [Projekt-API](/rest/reference/projects). Kann `none`, `read`, `write` oder `admin` sein.{% ifversion ghes or ghec %}
[`secret_scanning_alerts`](/rest/reference/permissions-required-for-github-apps/#permission-on-secret-scanning-alerts) |  Gewährt Zugriff auf die [API zur Überprüfung von Geheimnissen](/rest/reference/secret-scanning). Kann `none`, `read` oder `write` sein.{% endif %}{% ifversion fpt or ghes or ghec %}
[`security_events`](/rest/reference/permissions-required-for-github-apps/#permission-on-security-events) |  Gewährt Zugriff auf die [API zur Codeüberprüfung](/rest/reference/code-scanning/). Kann `none`, `read` oder `write` sein.{% endif %}
[`single_file`](/rest/reference/permissions-required-for-github-apps/#permission-on-single-file) | Gewährt Zugriff auf die [Inhalts-API](/rest/reference/repos#contents). Kann `none`, `read` oder `write` sein.
[`starring`](/rest/reference/permissions-required-for-github-apps/#permission-on-starring) | Gewährt Zugriff auf die [API zum Versehen mit einem Stern](/rest/reference/activity#starring). Kann `none`, `read` oder `write` sein.
[`statuses`](/rest/reference/permissions-required-for-github-apps/#permission-on-statuses) | Gewährt Zugriff auf die [Status-API](/rest/reference/commits#commit-statuses). Kann `none`, `read` oder `write` sein.
[`team_discussions`](/rest/reference/permissions-required-for-github-apps/#permission-on-team-discussions) | Gewährt Zugriff auf die [Teamdiskussions-API](/rest/reference/teams#discussions) und die [Teamdiskussionskommentar-API](/rest/reference/teams#discussion-comments). Mögliche Werte: `none`, `read` oder `write`.
`vulnerability_alerts`| Gewährt den Zugriff für den Empfang von {% data variables.product.prodname_dependabot_alerts %} in einem Repository Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts). Kann `none` oder `read` sein.
`watching` | Gewährt Zugriff zum Auflisten und Ändern von Repositorys, die ein Benutzer abonniert hat. Kann `none`, `read` oder `write` sein.

## {% data variables.product.prodname_github_app %}-Webhook-Ereignisse

Name von Webhook-Ereignis | Erforderliche Berechtigung | BESCHREIBUNG
------------------ | ------------------- | -----------
[`check_run`](/webhooks/event-payloads/#check_run) |`checks` | {% data reusables.webhooks.check_run_short_desc %}
[`check_suite`](/webhooks/event-payloads/#check_suite) |`checks` | {% data reusables.webhooks.check_suite_short_desc %}
[`commit_comment`](/webhooks/event-payloads/#commit_comment) | `contents` | {% data reusables.webhooks.commit_comment_short_desc %}{% ifversion ghes < 3.4 %}
[`content_reference`](/webhooks/event-payloads/#content_reference) |`content_references` | {% data reusables.webhooks.content_reference_short_desc %}{% endif %}
[`create`](/webhooks/event-payloads/#create) | `contents` | {% data reusables.webhooks.create_short_desc %}
[`delete`](/webhooks/event-payloads/#delete) | `contents` | {% data reusables.webhooks.delete_short_desc %}
[`deployment`](/webhooks/event-payloads/#deployment) | `deployments` | {% data reusables.webhooks.deployment_short_desc %}
[`deployment_status`](/webhooks/event-payloads/#deployment_status) | `deployments` | {% data reusables.webhooks.deployment_status_short_desc %}
[`fork`](/webhooks/event-payloads/#fork) | `contents` | {% data reusables.webhooks.fork_short_desc %}
[`gollum`](/webhooks/event-payloads/#gollum) | `contents` | {% data reusables.webhooks.gollum_short_desc %}
[`issues`](/webhooks/event-payloads/#issues) | `issues` | {% data reusables.webhooks.issues_short_desc %}
[`issue_comment`](/webhooks/event-payloads/#issue_comment) | `issues` | {% data reusables.webhooks.issue_comment_short_desc %}
[`label`](/webhooks/event-payloads/#label) | `metadata` | {% data reusables.webhooks.label_short_desc %}
[`member`](/webhooks/event-payloads/#member) | `members` | {% data reusables.webhooks.member_short_desc %}
[`membership`](/webhooks/event-payloads/#membership) | `members` | {% data reusables.webhooks.membership_short_desc %}
[`milestone`](/webhooks/event-payloads/#milestone) | `pull_request` | {% data reusables.webhooks.milestone_short_desc %}{% ifversion fpt or ghec %}
[`org_block`](/webhooks/event-payloads/#org_block) | `organization_administration` | {% data reusables.webhooks.org_block_short_desc %}{% endif %}
[`organization`](/webhooks/event-payloads/#organization) | `members` | {% data reusables.webhooks.organization_short_desc %}
[`page_build`](/webhooks/event-payloads/#page_build) | `pages` | {% data reusables.webhooks.page_build_short_desc %}
[`project`](/webhooks/event-payloads/#project) | `repository_projects` oder `organization_projects` | {% data reusables.webhooks.project_short_desc %}
[`project_card`](/webhooks/event-payloads/#project_card) | `repository_projects` oder `organization_projects` | {% data reusables.webhooks.project_card_short_desc %}
[`project_column`](/webhooks/event-payloads/#project_column) | `repository_projects` oder `organization_projects` | {% data reusables.webhooks.project_column_short_desc %}
[`public`](/webhooks/event-payloads/#public) | `metadata` | {% data reusables.webhooks.public_short_desc %}
[`pull_request`](/webhooks/event-payloads/#pull_request) | `pull_requests` | {% data reusables.webhooks.pull_request_short_desc %}
[`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | `pull_request` | {% data reusables.webhooks.pull_request_review_short_desc %}
[`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | `pull_request` | {% data reusables.webhooks.pull_request_review_comment_short_desc %}
[`pull_request_review_thread`](/webhooks/event-payloads/#pull_request_review_thread) | `pull_request` | {% data reusables.webhooks.pull_request_review_thread_short_desc %}
[`push`](/webhooks/event-payloads/#push) | `contents` | {% data reusables.webhooks.push_short_desc %}
[`release`](/webhooks/event-payloads/#release) | `contents` | {% data reusables.webhooks.release_short_desc %}
[`repository`](/webhooks/event-payloads/#repository) |`metadata` | {% data reusables.webhooks.repository_short_desc %}{% ifversion fpt or ghec %}
[`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) | `contents` | Ermöglicht Integratoren, mithilfe von GitHub Actions benutzerdefinierte Ereignisse auszulösen.{% endif %}
[`status`](/webhooks/event-payloads/#status) | `statuses` | {% data reusables.webhooks.status_short_desc %}
[`team`](/webhooks/event-payloads/#team) | `members` | {% data reusables.webhooks.team_short_desc %}
[`team_add`](/webhooks/event-payloads/#team_add) | `members` | {% data reusables.webhooks.team_add_short_desc %}
[`watch`](/webhooks/event-payloads/#watch) | `metadata` | {% data reusables.webhooks.watch_short_desc %}
