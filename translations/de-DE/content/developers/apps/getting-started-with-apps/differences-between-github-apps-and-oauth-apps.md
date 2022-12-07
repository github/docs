---
title: Unterschiede zwischen GitHub-Apps und OAuth-Apps
intro: 'Das Verständnis der Unterschiede zwischen {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %} hilft dir dabei, zu entscheiden, welche App du erstellen möchtest. Eine {% data variables.product.prodname_oauth_app %} fungiert als GitHub-Benutzer*in, während eine {% data variables.product.prodname_github_app %} eine eigene Identität verwendet, wenn sie in einer Organisation oder in Repositorys innerhalb einer Organisation installiert ist.'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type
  - /apps/differences-between-apps
  - /developers/apps/differences-between-github-apps-and-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
  - OAuth Apps
shortTitle: GitHub Apps & OAuth Apps
ms.openlocfilehash: d70304b71de11a4a24f2acc6c2545e78cbd19b0c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008176'
---
## Wer kann GitHub-Apps installieren und OAuth-Apps autorisieren?

Du kannst GitHub-Apps in deinem persönlichen Konto oder in Organisationen installieren, deren Besitzer*in du bist. Wenn du über Administratorberechtigungen in einem Repository verfügst, kannst du GitHub-Apps in Organisationskonten installieren. Wenn eine GitHub-App in einem Repository installiert wird und Organisationsberechtigungen erforderlich sind, muss die bzw. der Organisationsbesitzer*in die Anwendung genehmigen.

{% data reusables.apps.app_manager_role %}

Im Gegensatz dazu werden OAuth-Apps von Benutzer*innen autorisiert. Dadurch kann die App als authentifizierte*r Benutzer*in agieren. Du kannst beispielsweise eine OAuth-App autorisieren, mit der alle Benachrichtigungen für die oder den authentifizierte*n Benutzer*in ermittelt werden. Die Berechtigungen einer OAuth-App können immer widerrufen werden.

{% ifversion limit-app-access-requests %} {% data reusables.organizations.restricted-app-access-requests %}{% endif %}

{% data reusables.apps.deletes_ssh_keys %}

| GitHub Apps | OAuth-Apps im Vergleich |
| ----- | ------ |
| Du musst Organisationsbesitzer*in sein oder über Administratorberechtigungen in einem Repository verfügen, um eine GitHub-App in einer Organisation zu installieren. Wenn eine GitHub-App in einem Repository installiert wird und Organisationsberechtigungen erforderlich sind, muss die bzw. der Organisationsbesitzer*in die Anwendung genehmigen. | Du kannst eine OAuth-App autorisieren, um Zugriff auf Ressourcen zu erhalten. |
| Eine GitHub-App kann in deinem persönlichen Repository installiert werden. | Du kannst eine OAuth-App autorisieren, um Zugriff auf Ressourcen zu erhalten.|
| Du musst Organisationsbesitzer*in oder Besitzer*in eines persönlichen Repositorys sein bzw. über Administratorberechtigungen in einem Repository verfügen, um eine GitHub-App zu deinstallieren und den Zugriff zu entfernen. | Du kannst ein OAuth-Zugriffstoken löschen, um den Zugriff zu entfernen. |
| Du musst Organisationsbesitzer*in sein oder über Administratorberechtigungen in einem Repository verfügen, um die Installation einer GitHub-App anzufordern. | Ist eine Organisationsanwendungsrichtlinie aktiv, können alle Organisationsmitglieder die Installation einer OAuth-App in einer Organisation anfordern. Die oder der Organisationsbesitzer*in muss die Anforderung genehmigen oder ablehnen. |

## Worauf können GitHub-Apps und OAuth-Apps zugreifen?

Kontobesitzer*innen können eine {% data variables.product.prodname_github_app %} in einem Konto verwenden, ohne Zugriff auf weitere Ressourcen zu gewähren. Du kannst beispielsweise den Builddienst eines Drittanbieters in der Organisation deines Arbeitgebers installieren, diesem Builddienst jedoch keinen Zugriff auf Repositorys in deinem persönlichen Konto gewähren. Wenn die Person, die eine GitHub-App eingerichtet hat, die Organisation verlässt, bleibt die App installiert.

Eine _autorisierte_ OAuth-App hat Zugriff auf alle Ressourcen, auf die eine oder ein Benutzer*in oder Organisationsbesitzer*in zugreifen kann.

| GitHub Apps | OAuth-Apps im Vergleich |
| ----- | ------ |
| Durch die Installation einer GitHub-App erhält die App Zugriff auf die ausgewählten Repositorys eines Benutzer- oder Organisationskontos. | Durch die Autorisierung wird einer OAuth-App Zugriff auf die zugänglichen Ressourcen des Benutzers gewährt. Beispielsweise auf die Repositorys, auf die sie zugreifen können. |
| Das Installationstoken aus einer GitHub-App verliert den Zugriff auf Ressourcen, wenn ein*e Administrator*in Repositorys aus der Installation entfernt. | Ein OAuth-Zugriffstoken verliert den Zugriff auf Ressourcen, wenn die oder der Benutzer*in den Zugriff verliert (wenn z. B. ihr oder sein Schreibzugriff auf ein Repository entfernt wird). |
| Die Zugriffstoken für die Installation werden mit den vom Ersteller der Anwendung gewählten Berechtigungen auf bestimmte Repositorys beschränkt. | Ein OAuth-Zugriffstoken wird über Geltungsbereiche beschränkt. |
| GitHub-Apps können separaten Zugriff auf Issues und Pull Requests anfordern, ohne auf den tatsächlichen Inhalt des Repositorys zuzugreifen. | OAuth-Apps müssen den `repo`-Bereich anfordern, um Zugriff auf Issues, Pull Requests oder Ressourcen zu erhalten, deren Besitzer das Repository ist. |
| GitHub-Apps unterliegen nicht den Anwendungsrichtlinien der Organisation. Eine GitHub-App hat nur Zugriff auf die Repositorys, die ein Organisationsbesitzer gewährt hat. | Wenn eine Anwendungsrichtlinie einer Organisation aktiv ist, kann die Installation einer OAuth-App nur durch einen Organisationsbesitzer autorisiert werden. Wenn die OAuth-App installiert ist, erhält sie Zugriff auf alles, was für das Token sichtbar ist, über das der Organisationsbesitzer innerhalb der genehmigten Organisation verfügt. |
| Eine GitHub-App empfängt ein Webhookereignis, wenn eine Installation geändert oder entfernt wird. Dadurch wird die oder der App-Ersteller*in informiert, wenn sie oder er mehr oder weniger Zugriff auf die Ressourcen einer Organisation erhalten hat. | Abhängig davon, wie sich der Zugriff der gewährenden Benutzer*innen ändert, können OAuth-Apps den Zugriff auf eine Organisation oder ein Repository jederzeit verlieren. Die OAuth-App informiert dich nicht, wenn sie Zugriff auf eine Ressource verliert. |

## Tokenbasierte Identifizierung

{% note %}

**Hinweis:** GitHub-Apps können auch ein benutzerbasiertes Token verwenden. Weitere Informationen findest du unter [Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) („Identifizieren und Autorisieren von Benutzer*innen für GitHub-Apps“).

{% endnote %}

| GitHub Apps | OAuth-Apps im Vergleich |
| ----- | ----------- |
| Eine GitHub-App kann out-of-band mithilfe eines privaten Schlüssels mit einem JSON-Webtokenformat ein Installationszugriffstoken anfordern. | Eine OAuth-App kann ein Anforderungstoken nach einer Umleitung über eine Webanforderung gegen ein Zugriffstoken tauschen. |
| Mit einem Installationstoken wird die App als GitHub-Apps-Bot identifiziert (z. B. @jenkins-bot). | Mit einem Zugriffstoken wird die App als diejenige oder derjenige Benutzer*in identifiziert, die bzw. der das Token für die App gewährt hat (z. B. @octocat). |
| Installationstoken laufen nach einer vordefinierten Zeit ab (derzeit nach 1 Stunde). | OAuth-Token bleiben aktiv, bis sie vom Kunden widerrufen werden. |
| Für {% data variables.product.prodname_github_apps %}, die in Organisationen oder Repositorys installiert sind, gelten die Ratenlimits für Server-zu-Server-Anforderungen. Weitere Informationen findest du unter [Rate limits for {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/rate-limits-for-github-apps) („Ratenlimits für GitHub-Apps“). | Für OAuth-Token gilt das Benutzerratenlimit von {% ifversion fpt or ghec or ghes %}5.000{% elsif ghae %}15.000{% endif %} Anforderungen pro Stunde. |
| Die Ratenbegrenzung kann sowohl auf Ebene der GitHub-Apps (für alle Installationen) als auch auf Ebene der einzelnen Installationen erhöht werden. | Die Ratenbegrenzung wird pro OAuth-App erweitert. Jedes Token, das der jeweiligen OAuth-App zugewiesen wird, verfügt über das erhöhte Limit. |
| {% data variables.product.prodname_github_apps %} können sich im Namen der Benutzerin oder des Benutzers authentifizieren. Dies wird als Benutzer-zu-Server-Anforderung bezeichnet. Der Autorisierungsflow entspricht dem Autorisierungsflow bei OAuth-Apps. Benutzer-zu-Server-Token können ablaufen und mit einem Aktualisierungstoken verlängert werden. Weitere Informationen findest du unter [Refreshing user-to-server access tokens](/apps/building-github-apps/refreshing-user-to-server-access-tokens/) („Aktualisieren von Benutzer-zu-Server-Zugriffstoken“) und [Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) („Identifizieren und Autorisieren von Benutzer*innen für GitHub-Apps“). | Beim von {% data variables.product.prodname_oauth_apps %} verwendeten OAuth-Flow wird eine {% data variables.product.prodname_oauth_app %} im Namen der Benutzerin bzw. des Benutzers autorisiert. Dies ist derselbe Flow, der bei der Benutzer-zu-Server-Autorisierung der {% data variables.product.prodname_github_app %} verwendet wird. |

## Anfordern von Berechtigungsstufen für Ressourcen

Im Gegensatz zu OAuth-Apps verfügen GitHub-Apps über gezielte Berechtigungen, mit denen sie lediglich Zugriff auf Ressourcen anfordern können, die sie benötigen. Beispielsweise kann eine GitHub-App für Continuous Integration (CI) Lesezugriff auf Repositoryinhalte und Schreibzugriff auf die Status-API anfordern. Eine andere GitHub-App kann keinen Lese- oder Schreibzugriff auf Code haben, aber trotzdem Issues, Bezeichnungen und Meilensteine verwalten können. OAuth-Apps können keine präzisen Berechtigungen verwenden.

| Zugriff | GitHub-Apps (`read`- oder `write`-Berechtigungen) | OAuth-Apps im Vergleich |
| ------ | ----- | ----------- |
| **Für Zugriff auf öffentliche Repositorys** | Das öffentliche Repository muss während der Installation ausgewählt werden. | Der Bereich `public_repo`. |
| **Für Zugriff auf Repositorycode/-inhalte** | Repository-Inhalt | Der Bereich `repo`. |
| **Für Zugriff auf Issues, Bezeichnungen und Meilensteine** | Probleme | Der Bereich `repo`. |
| **Für Zugriff auf Pull Requests, Bezeichnungen und Meilensteine** | Pull Requests | Der Bereich `repo`. |
| **Für Zugriff auf Commitstatus (für CI-Builds)** | Commitstatus | Der Bereich `repo:status`. |
| **Für Zugriff auf Bereitstellungen und Bereitstellungsstatus** | Bereitstellungen | Der Bereich `repo_deployment`. |
| **Für den Empfang von Ereignissen über einen Webhook** | Eine GitHub-App umfasst standardmäßig einen Webhook. | Der Bereich `write:repo_hook` oder `write:org_hook`. |

## Repositoryermittlung

| GitHub Apps | OAuth-Apps im Vergleich |
| ----- | ----------- |
| GitHub-Apps können anhand von `/installation/repositories` ermitteln, auf welche Repositorys die Installation zugreifen kann. | OAuth-Apps erhalten anhand von `/user/repos` eine Benutzeransicht und anhand von `/orgs/:org/repos` eine Organisationsansicht mit Informationen zu den Repositorys, auf die zugegriffen werden kann. |
| GitHub-Apps empfangen Webhooks, wenn Repositorys hinzugefügt oder aus der Installation entfernt werden. | OAuth-Apps erstellen Organisationswebhooks für Benachrichtigungen, wenn ein neues Repository innerhalb einer Organisation erstellt wird. |

## webhooks

| GitHub Apps | OAuth-Apps im Vergleich |
| ----- | ----------- |
| Standardmäßig verfügen GitHub-Apps über einen einzelnen Webhook. Dieser empfängt die konfigurierten Ereignisse für alle Repositorys, auf die er zugreifen kann. | OAuth-Apps fordern den Webhookbereich an, um einen Repositorywebhook für jedes Repository zu erstellen, von dem sie Ereignisse empfangen müssen. |
| GitHub-Apps empfangen bestimmte Ereignisse auf Organisationsebene mit der Berechtigung des Organisationsmitglieds. | OAuth-Apps fordern den Webhookbereich der Organisation an, um einen Organisationswebhook für jede Organisation zu erstellen, von der sie Ereignisse auf Organisationsebene empfangen müssen. |
| Webhooks werden automatisch deaktiviert, wenn die GitHub-App deinstalliert wird. | Webhooks werden nicht automatisch deaktiviert, wenn das Zugriffstoken einer OAuth-App gelöscht wird, und es gibt keine Möglichkeit, sie automatisch zu bereinigen. Du musst die Benutzer*innen bitten, dies manuell zu tun.|

## Git-Zugriff

| GitHub Apps | OAuth-Apps im Vergleich |
| ----- | ----------- |
| GitHub-Apps fordern die Berechtigung für Repositoryinhalte an und verwenden dein Installationstoken für die Authentifizierung über [HTTP-basierten Git-Zugriff](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation). | OAuth-Apps fordern über die API den Geltungsbereich für `write:public_key` an und [erstellen einen Bereitstellungsschlüssel](/rest/reference/deployments#create-a-deploy-key). Diesen Schlüssel kannst du dann zum Ausführen von Git-Befehlen verwenden. |
| Das Token wird als HTTP-Kennwort verwendet. | Das Token wird als HTTP-Benutzername verwendet. |

## Computer- und Botkonten im Vergleich

Computerbenutzerkonten sind OAuth-basierte persönliche Konten, die automatisierte Systeme mithilfe des GitHub-Benutzersystems trennen.

Botkonten sind ein spezifisches Element von GitHub-Apps und in jede GitHub-App integriert.

| GitHub Apps | OAuth-Apps im Vergleich |
| ----- | ----------- |
| Für GitHub-App-Bots wird kein {% data variables.product.prodname_enterprise %}-Arbeitsplatz verwendet. | Für Computerbenutzerkonten wird ein {% data variables.product.prodname_enterprise %}-Arbeitsplatz verwendet. |
| Da einem GitHub-App-Bot niemals ein Kennwort zugewiesen wird, können Kunden sich nicht direkt bei dem Bot anmelden. | Computerbenutzerkonten werden Benutzernamen und Kennwörter zugewiesen, die vom Kunden verwaltet und geschützt werden. |
