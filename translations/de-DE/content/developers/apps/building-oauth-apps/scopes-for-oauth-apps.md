---
title: Bereiche für OAuth-Apps
intro: '{% data reusables.shortdesc.understanding_scopes_for_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps
  - /apps/building-oauth-apps/scopes-for-oauth-apps
  - /apps/building-oauth-apps/understanding-scopes-for-oauth-apps
  - /developers/apps/scopes-for-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 8398a7162b3ab77677651d5404c0738c6d0877b1
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164364'
---
Beim Einrichten einer OAuth-App auf GitHub werden dem Benutzer angeforderte Bereiche im Autorisierungsformular angezeigt.

{% note %}

**Hinweis:** Wenn du eine GitHub-App erstellst, musst du keine Bereiche in deiner Autorisierungsanforderung bereitstellen. Weitere Informationen findest du unter [Identifizieren und Autorisieren von Benutzern für GitHub-Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

{% endnote %}

Wenn deine {% data variables.product.prodname_oauth_app %} keinen Zugriff auf einen Browser hat, z. B. ein CLI-Tool, musst du keinen Bereich für Benutzer angeben, damit diese sich bei der App authentifizieren können. Weitere Informationen findest du unter [Autorisieren von OAuth-Apps](/developers/apps/authorizing-oauth-apps#device-flow).

Überprüfe Kopfzeilen, um festzustellen, über welche OAuth-Bereiche du verfügst und was von der API-Aktion akzeptiert wird:

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

* `X-OAuth-Scopes` listet die Bereiche auf, die dein Token autorisiert hat.
* `X-Accepted-OAuth-Scopes` enthält die Bereiche, auf die durch die Aktion geprüft wird.

## Verfügbare Bereiche

Name | Beschreibung -----|-----------|{% ifversion not ghae %} **`(no scope)`** | Gewährt schreibgeschützten Zugriff auf öffentliche Informationen (einschließlich Benutzerprofilinformationen, Repositoryinformationen und Gists){% endif %}{% ifversion ghes or ghae %} **`site_admin`** | Gewährt Siteadministratorzugriff auf [Verwaltungs-API-Endpunkte für {% data variables.product.prodname_ghe_server %}](/rest/reference/enterprise-admin).{% endif %} **`repo`** | Gewährt vollen Zugriff auf öffentliche{% ifversion ghec or ghes or ghae %}, interne{% endif %} und private Repositorys, einschließlich Lese- und Schreibzugriff auf Code, Commitstatus, Repositoryeinladungen, Mitarbeiter*innen, Bereitstellungsstatus und Repositorywebhooks. **Hinweis**: Zusätzlich zu repositorybezogenen Ressourcen gewährt der `repo`-Bereich auch Zugriff auf die Verwaltung von organisationseigenen Ressourcen, einschließlich Projekten, Einladungen, Teammitgliedschaften und Webhooks. Dieser Bereich gewährt auch die Möglichkeit, Projekte im Besitz von Benutzer*innen zu verwalten.
&emsp;`repo:status`| Gewährt Lese-/Schreibzugriff auf Commitstatus in {% ifversion fpt %}öffentlichen und privaten{% elsif ghec or ghes %}öffentlichen, privaten und internen{% elsif ghae %}privaten und internen{% endif %} Repositorys. Dieser Bereich ist nur dafür erforderlich, anderen Benutzern oder Diensten Zugriff auf Commitstatus privater Repositorys zu gewähren, *ohne* Zugriff auf den Code zu gewähren.
&emsp;`repo_deployment`| Gewährt Zugriff auf [Bereitstellungsstatus](/rest/reference/repos#deployments) für {% ifversion not ghae %}öffentliche{% else %}interne{% endif %} und private Repositorys. Dieser Bereich ist nur dafür erforderlich, anderen Benutzern oder Diensten Zugriff auf Bereitstellungsstatus zu gewähren, *ohne* Zugriff auf den Code zu gewähren.{% ifversion not ghae %} &emsp;`public_repo`| Beschränkt den Zugriff auf öffentliche Repositorys. Das umfasst Lese-/Schreibzugriff auf Code, Commitstatus, Repositoryprojekte, Projektmitarbeiter und Bereitstellungsstatus für öffentliche Repositorys und Organisationen. Auch dafür erforderlich, öffentliche Repositorys mit Sternen zu versehen.{% endif %} &emsp;`repo:invite` | Gewährt die Möglichkeit zum Akzeptieren/Ablehnen von Einladungen zur Zusammenarbeit an einem Repository. Dieser Bereich ist nur dafür erforderlich, anderen Benutzern oder Diensten Zugriff auf Einladungen zu gewähren, *ohne* Zugriff auf den Code zu gewähren.{% ifversion fpt or ghes or ghec %} &emsp;`security_events` | Gewährt: <br/> Lese- und Schreibzugriff auf sicherheitsrelevante Ereignisse in der [{% data variables.product.prodname_code_scanning %}-API](/rest/reference/code-scanning) {%- ifversion ghec %}<br/> Lese- und Schreibzugriff auf sicherheitsrelevante Ereignisse in der [{% data variables.product.prodname_secret_scanning %}-API](/rest/reference/secret-scanning){%- endif %} <br/> Dieser Bereich ist nur dafür erforderlich, anderen Benutzern oder Diensten Zugriff auf sicherheitsrelevante Ereignisse zu gewähren, *ohne* Zugriff auf den Code zu gewähren.{% endif %} **`admin:repo_hook`** | Gewährt Lese-, Schreib-, Ping- und Löschzugriff auf Repositoryhooks in {% ifversion fpt %}öffentlichen oder privaten{% elsif ghec or ghes %}öffentlichen, privaten oder internen{% elsif ghae %}privaten oder internen{% endif %} Repositorys. Der `repo`-{% ifversion fpt or ghec or ghes %} und der `public_repo`-Bereich gewähren{% else %}Bereich gewährt{% endif %} vollständigen Zugriff auf Repositorys, einschließlich Repositoryhooks. Verwende den Bereich `admin:repo_hook`, um den Zugriff ausschließlich auf Repositoryhooks zu beschränken.
&emsp;`write:repo_hook`| Gewährt Lese-, Schreib- und Pingzugriff auf Hooks in {% ifversion fpt %}öffentlichen oder privaten{% elsif ghec or ghes %}öffentlichen, privaten oder internen{% elsif ghae %}privaten oder internen{% endif %} Repositorys.
&emsp;`read:repo_hook`| Gewährt Lese- und Pingzugriff auf Hooks in {% ifversion fpt %}öffentlichen oder privaten{% elsif ghec or ghes %}öffentlichen, privaten oder internen{% elsif ghae %}privaten oder internen{% endif %} Repositorys.
**`admin:org`** | Verwalte die Organisation und ihre Teams, Projekte und Mitgliedschaften vollständig.
&emsp;`write:org`| Lese- und Schreibzugriff auf Organisationsmitgliedschaft, Organisationsprojekte und Teammitgliedschaft.
&emsp;`read:org`| Schreibgeschützter Zugriff auf Organisationsmitgliedschaft, Organisationsprojekte und Teammitgliedschaft.
**`admin:public_key`** | Verwalte öffentliche Schlüssel vollständig.
&emsp;`write:public_key`| Erstelle Details für öffentliche Schlüssel, liste sie auf, und zeige sie an.
&emsp;`read:public_key`| Liste Details für öffentliche Schlüssel auf, und zeige sie an.
**`admin:org_hook`** | Gewährt Lese-, Schreib-, Ping- und Löschzugriff auf Organisationshooks. **Hinweis:** OAuth-Token können diese Aktionen nur mit Organisationshooks ausführen, die von der OAuth-App erstellt wurden. Über ein {% data variables.product.pat_generic_caps %} kann diese Aktionen nur für Organisationshooks ausgeführt werden, die von einem Benutzer erstellt wurden.
**`gist`** | Gewährt Schreibzugriff auf Gists.
**`notifications`** | Gewährt: <br/>* Lesezugriff auf die Benachrichtigungen eines Benutzers <br/>* Markieren als Lesezugriff auf Threads <br/>* Überwachen des Zugriffs auf ein Repository, Beenden des Überwachens des Zugriffs auf ein Repository und <br/>* Lese-, Schreib- und Löschzugriff auf Threadabonnements.
**`user`** | Gewährt nur Lese-/Schreibzugriff auf Profilinformationen.  Beachte, dass dieser Bereich `user:email` und `user:follow` umfasst.
&emsp;`read:user`| Gewährt Lesezugriff auf die Profildaten eines Benutzers.
&emsp;`user:email`| Gewährt Lesezugriff auf die E-Mail-Adressen eines Benutzers.
&emsp;`user:follow`| Gewährt Zugriff, um anderen Benutzer*innen zu folgen bzw. nicht mehr zu folgen.{% ifversion projects-oauth-scope %} **`project`** | Gewährt Lese-/Schreibzugriff auf {% data variables.projects.projects_v2 %} von Benutzer*innen und Organisation.
&emsp;`read:project`| Gewährt schreibgeschützten Zugriff auf {% data variables.projects.projects_v2 %} von Benutzer*innen und Organisation. {% endif %} **`delete_repo`** | Gewährt Zugriff zum Löschen verwaltbarer Repositorys.
**`write:discussion`** | Ermöglicht Lese- und Schreibzugriff für Teamdiskussionen.
&emsp;`read:discussion` | Ermöglicht Lesezugriff auf Teamdiskussionen.
**`write:packages`** | Gewährt Zugriff zum Hochladen oder Veröffentlichen eines Pakets in {% data variables.product.prodname_registry %}. Weitere Informationen findest du unter [Veröffentlichen eines Pakets](/github/managing-packages-with-github-packages/publishing-a-package).
**`read:packages`** | Gewährt Zugriff zum Herunterladen und Installieren von Paketen aus {% data variables.product.prodname_registry %} Weitere Informationen findest du unter [Installieren eines Pakets](/github/managing-packages-with-github-packages/installing-a-package).
**`delete:packages`** | Gewährt Zugriff zum Löschen von Paketen aus {% data variables.product.prodname_registry %} Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).
**`admin:gpg_key`** | Vollständige Verwaltung von GPG-Schlüsseln.
&emsp;`write:gpg_key`| Erstelle Details für GPG-Schlüssel, liste sie auf, und zeige sie an.
&emsp;`read:gpg_key`| Auflisten und Anzeigen von Details für GPG-Schlüssel.{% ifversion fpt or ghec %} **`codespace`** | Gewährt die Möglichkeit, Codespaces zu erstellen und zu verwalten. Codespaces können ein GITHUB_TOKEN verfügbar machen, das möglicherweise andere Bereiche aufweist. Weitere Informationen findest du unter [Sicherheit in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication).{% endif %} **`workflow`** | Gewährt die Möglichkeit, {% data variables.product.prodname_actions %}-Workflowdateien hinzuzufügen und zu aktualisieren. Workflowdateien können ohne diesen Bereich committet werden, wenn dieselbe Datei (mit demselben Pfad und demselben Inhalt) in einem anderen Branch im selben Repository vorhanden ist. Workflowdateien können ein `GITHUB_TOKEN` verfügbar machen, das möglicherweise andere Bereiche aufweist. Weitere Informationen findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token).{% ifversion not fpt %} **`admin:enterprise`** | Bietet vollständige Kontrolle über die Unternehmensfunktionen. Weitere Informationen findest du unter [Verwalten von Unternehmenskonten](/graphql/guides/managing-enterprise-accounts) in der GraphQL-API-Dokumentation.<br><br>Schließt `manage_runners:enterprise`{% ifversion ghec or ghes > 3.3 %}, `manage_billing:enterprise`,{% endif %} und `read:enterprise` ein. &emsp;`manage_runners:enterprise` | Bietet vollständige Kontrolle über selbstgehostete Runner innerhalb des Unternehmens. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners)“. {% ifversion ghec or ghes > 3.3 %} &emsp;`manage_billing:enterprise` | Lesen und Schreiben von Abrechnungsdaten des Unternehmens. Weitere Informationen findest du unter [Abrechnung](/rest/billing) in der REST-API-Dokumentation. {% endif %} &emsp;`read:enterprise` | Lesen aller Daten in einem Unternehmensprofil. Enthält keine Profildaten von Unternehmensmitgliedern oder Organisationen.{% endif %}{% ifversion read-audit-scope %} **`read:audit_log`** | Lesen von Überwachungsprotokolldaten.{% endif %} {% note %}

**Hinweis:** Von deiner OAuth-App können die Bereiche in der anfänglichen Umleitung angefordert werden. Du kannst mehrere Bereiche angeben, indem du diese mit einem Leerzeichen mit `%20` voneinander trennst:

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

## Angeforderte Bereiche und gewährte Bereiche

Das Attribut `scope` enthält Bereiche, die dem Token zugeordnet sind und vom Benutzer gewährt wurden. Normalerweise sind diese Bereiche identisch mit den angeforderten.
Benutzer können jedoch ihre Bereiche bearbeiten und deiner Anwendung effektiv weniger Zugriff gewähren, als du ursprünglich angefordert hast. Außerdem können Benutzer Tokenbereiche bearbeiten, nachdem der OAuth-Flow abgeschlossen wurde.
Du solltest dir dieser Möglichkeit bewusst sein und das Verhalten deiner Anwendung entsprechend anpassen.

Es ist wichtig, Fehlerfälle zu behandeln, in denen dir ein Benutzer weniger Zugriff gewährt, als du ursprünglich angefordert hast. Von Anwendungen können die Benutzern z. B. gewarnt oder anderweitig informiert werden, dass der Funktionsumfang eingeschränkt wird oder dass sie einige Aktionen nicht ausführen können.

Die Benutzer können von den Anwendungen auch immer wieder durch den Flow zurückgeleitet werden, damit sie zusätzliche Berechtigungen erhalten. Denke aber immer daran, dass die Benutzer immer auch ablehnen können.

Unter [Grundlagen des Authentifizierungshandbuchs](/guides/basics-of-authentication/) findest du Tipps zur Behandlung von modifizierbaren Tokenbereichen.

## Normalisierte Bereiche

Beim Anfordern mehrerer Bereiche wird das Token mit einer normalisierten Liste von Bereichen gespeichert. Dabei werden die Bereiche verworfen, die implizit in einem anderen angeforderten Bereich enthalten sind. Die Anforderung von `user,gist,user:email` führt z. B. zu einem Token mit den Bereichen `user` und `gist`, da der Zugriff, der mit dem Bereich `user:email` gewährt wird, im Bereich `user` enthalten ist.
