---
title: Auditprotokoll deiner Organisation überprüfen
intro: Im Auditprotokoll können die Administratoren einer Organisation die von den Mitgliedern der Organisation durchgeführten Aktionen überprüfen. Es enthält Details wie den Ausführenden sowie die Art und den Zeitpunkt der Aktionen.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
  - /organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review audit log
ms.openlocfilehash: 430cf928f91cad2851c9ad0c661f159177866463
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180677'
---
## Zugriff auf das Auditprotokoll

Im Überwachungsprotokoll sind Ereignisse aufgeführt, die durch Aktivitäten ausgelöst wurden, die sich im aktuellen Monat auf deine Organisation auswirken bzw. innerhalb der vorherigen sechs Monate ausgewirkt haben. Nur Organisationsinhaber können auf das Auditprotokoll einer Organisation zugreifen.

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Auditprotokoll durchsuchen

{% data reusables.audit_log.audit-log-search %}

### Suche nach der Art der durchgeführten Aktion

Verwende für die Suche nach bestimmten Ereignissen in deiner Abfrage den Qualifizierer `action`. Die im Sicherheitsprotokoll aufgezeichneten Aktionen unterteilen sich in die folgenden Kategorien:

| Kategoriename | Beschreibung |------------------|-------------------{% ifversion fpt or ghec %} | [`account`](#account-category-actions) | Umfasst alle Aktivitäten in Zusammenhang mit deinem Organisationskonto{% endif %}{% ifversion fpt or ghec %} | [`advisory_credit`](#advisory_credit-category-actions) | Umfasst alle Aktivitäten in Zusammenhang mit dem Angeben von Mitwirkenden bei Sicherheitsempfehlungen in der {% data variables.product.prodname_advisory_database %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dotcom %}-Sicherheitsempfehlungen](/github/managing-security-vulnerabilities/about-github-security-advisories).{% endif %}{% ifversion pat-v2%} | [`auto_approve_personal_access_token_requests`](#auto_approve_personal_access_token_requests-category-actions) | Umfasst Aktivitäten im Zusammenhang mit der Genehmigungsrichtlinie deiner Organisation für {% data variables.product.pat_v2 %}. Weitere Informationen findest du unter [Festlegen einer Richtlinie für {% data variables.product.pat_generic %} für deine Organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).{% endif %}{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit der Abrechnung in deiner Organisation{% endif %}{% ifversion fpt or ghec %} | [`business`](#business-category-actions) | Umfasst Aktivitäten im Zusammenhang mit Geschäftseinstellungen für ein Unternehmen |{% endif %}{% ifversion fpt or ghec %} | [`codespaces`](#codespaces-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit den Codespaces deiner Organisation |{% endif %} | [`dependabot_alerts`](#dependabot_alerts-category-actions) | Umfasst Konfigurationsaktivitäten auf Organisationsebene für {% data variables.product.prodname_dependabot_alerts %} in vorhandenen Repositorys Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | Umfasst Konfigurationsaktivitäten auf Organisationsebene für {% data variables.product.prodname_dependabot_alerts %} in neuen Repositorys, die in der Organisation erstellt wurden{% ifversion fpt or ghec or ghes %} | [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | Umfasst Konfigurationsaktivitäten auf Organisationsebene für {% data variables.product.prodname_dependabot_security_updates %} in vorhandenen Repositorys. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates).
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | Umfasst Konfigurationsaktivitäten auf Organisationsebene für {% data variables.product.prodname_dependabot_security_updates %} für neue Repositorys, die in der Organisation erstellt werden.{% endif %}{% ifversion fpt or ghec %} | [`dependency_graph`](#dependency_graph-category-actions) | Umfasst Konfigurationsaktivitäten auf Organisationsebene für Abhängigkeitsdiagramme für Repositorys. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | Umfasst Konfigurationsaktivitäten auf Organisationsebene für neue Repositorys, die in der Organisation erstellt werden.{% endif %} | [`discussion_post`](#discussion_post-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit Diskussionen, die auf einer Teamseite veröffentlicht werden.
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit Antworten in Diskussionen, die auf einer Teamseite veröffentlicht werden.{% ifversion fpt or ghes or ghec %} | [`enterprise`](#enterprise-category-actions) | Umfasst Aktivitäten im Zusammenhang mit Unternehmenseinstellungen. |{% endif %} | [`hook`](#hook-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit Webhooks
| [`integration_installation`](#integration_installation-category-actions)  | Umfasst Aktivitäten im Zusammenhang mit Integrationen, die in einem Konto installiert sind. | | [`integration_installation_request`](#integration_installation_request-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit Anforderungen, die von Organisationsmitgliedern an Besitzer*innen gesendet werden, um Integrationen zur Verwendung innerhalb der Organisation genehmigen zu lassen. |{% ifversion ghec or ghae %} | [`ip_allow_list`](#ip_allow_list-category-actions) | Umfasst Aktivitäten im Zusammenhang mit dem Aktivieren oder Deaktivieren der IP-Zulassungsliste für eine Organisation.
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions) | Umfasst Aktivitäten im Zusammenhang mit dem Erstellen, Löschen und Bearbeiten eines IP-Zulassungslisteneintrags für eine Organisation.{% endif %} | [`issue`](#issue-category-actions) | Umfasst Aktivitäten im Zusammenhang mit dem Löschen eines Issues. {% ifversion fpt or ghec %} | [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit dem Unterzeichnen der {% data variables.product.prodname_marketplace %}-Entwicklervereinbarung.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit dem Eintragen von Apps im {% data variables.product.prodname_marketplace %}.{% endif %}{% ifversion fpt or ghes or ghec %} | [`members_can_create_pages`](#members_can_create_pages-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit dem Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für Repositorys in der Organisation. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization). | {% endif %} | [`org`](#org-category-actions) | Umfasst Aktivitäten im Zusammenhang mit der Organisationsmitgliedschaft.{% ifversion ghec %} | [`org_credential_authorization`](#org_credential_authorization-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit dem Autorisieren von Anmeldeinformationen für die Verwendung mit SAML-SSO.{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`org_secret_scanning_custom_pattern`](#org_secret_scanning_custom_pattern-category-actions) | Umfasst Aktivitäten auf Organisationsebene im Zusammenhang mit benutzerdefinierten Mustern für die Geheimnisüberprüfung. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). {% endif %} | [`organization_default_label`](#organization_default_label-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit Standardbezeichnungen für Repositorys in deiner Organisation.
| [`oauth_application`](#oauth_application-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit OAuth-Apps.
| [`packages`](#packages-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit {% data variables.product.prodname_registry %}{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit dem Bezahlen für GitHub durch deine Organisation{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Umfasst Aktivitäten im Zusammenhang mit {% data variables.product.pat_v2 %} in deiner Organisation. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).{% endif %} | [`profile_picture`](#profile_picture-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit dem Profilbild deiner Organisation
| [`project`](#project-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit Projektboards.
| [`protected_branch`](#protected_branch-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit geschützten Branches.
| [`repo`](#repo-category-actions) | Umfasst Aktivitäten im Zusammenhang mit Repositorys, die sich im Besitz deiner Organisation befinden.{% ifversion fpt or ghec %} | [`repository_advisory`](#repository_advisory-category-actions) | Umfasst Aktivitäten auf Repositoryebene im Zusammenhang mit Sicherheitsempfehlungen in der {% data variables.product.prodname_advisory_database %}.  Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dotcom %}-Sicherheitshinweisen](/github/managing-security-vulnerabilities/about-github-security-advisories).
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit dem [Aktivieren oder Deaktivieren der Datenverwendung für ein privates Repository](/articles/about-github-s-use-of-your-data).{% endif %}{% ifversion fpt or ghec %} | [`repository_dependency_graph`](#repository_dependency_graph-category-actions) | Umfasst Aktivitäten auf Repositoryebene im Zusammenhang mit dem Aktivieren oder Deaktivieren des Abhängigkeitsdiagramms für ein {% ifversion fpt or ghec %}privates {% endif %}Repository. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).{% endif %}{% ifversion ghes or ghae or ghec %} | [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | Umfasst Aktivitäten auf Repositoryebene im Zusammenhang mit der Geheimnisüberprüfung. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning). {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_custom_pattern`](#repository_secret_scanning_custom_pattern-category-actions) | Umfasst Aktivitäten auf Repositoryebene im Zusammenhang mit benutzerdefinierten Mustern für die Geheimnisüberprüfung. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_push_protection`](#repository_secret_scanning_push_protection-category-actions) | Umfasst Aktivitäten auf Repositoryebene im Zusammenhang mit benutzerdefinierten Mustern für die Geheimnisüberprüfung. Weitere Informationen findest du unter [Schützen von Pushs mit Geheimnisüberprüfung](/code-security/secret-scanning/protecting-pushes-with-secret-scanning). {% endif %} | [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).{% ifversion fpt or ghec %} | [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) | Umfasst Konfigurationsaktivitäten auf Repositoryebene für {% data variables.product.prodname_dependabot_alerts %}.{% endif %}{% ifversion custom-repository-roles %} | [`role`](#role-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit [benutzerdefinierten Repositoryrollen](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}{% ifversion ghes or ghae or ghec %} | [`secret_scanning`](#secret_scanning-category-actions) | Umfasst Konfigurationsaktivitäten auf Organisationsebene für die Geheimnisüberprüfung in vorhandenen Repositorys. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning).
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | Umfasst Konfigurationsaktivitäten auf Organisationsebene für die Geheimnisüberprüfung für neue Repositorys, die in der Organisation erstellt werden. {% endif %}{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Umfasst alle Ereignisse im Zusammenhang mit Sponsorschaltflächen (siehe [Anzeigen einer Sponsorschaltfläche in deinem Repository](/articles/displaying-a-sponsor-button-in-your-repository)){% endif %} | [`team`](#team-category-actions) | Umfasst alle Aktivitäten im Zusammenhang mit Teams in deiner Organisation.
| [`team_discussions`](#team_discussions-category-actions) | Umfasst Aktivitäten im Zusammenhang mit der Verwaltung von Teamdiskussionen für eine Organisation.
| [`workflows`](#workflows-category-actions) | Umfasst Aktivitäten im Zusammenhang mit {% data variables.product.prodname_actions %}-Workflows.

Mit den folgenden Suchbegriffen kannst du nach bestimmten Aktionsgruppen suchen. Beispiel:

  * `action:team` sucht alle Ereignisse, die in der Teamkategorie gruppiert sind.
  * `-action:hook` schließt alle Ereignisse in der Webhookkategorie aus.

Bei jeder Kategorie gibt es eine Gruppe von zugeordneten Aktionen, nach denen du filtern kannst. Beispiel:

  * `action:team.create` sucht alle Ereignisse, bei denen ein Team erstellt wurde.
  * `-action:hook.events_changed` schließt alle Ereignisse aus, bei denen die Ereignisse in einem Webhook geändert wurden.

### Suche nach dem Zeitpunkt der Aktion

Verwende den Qualifizierer `created`, um Ereignisse im Überwachungsprotokoll basierend auf dem Zeitpunkt, an dem sie aufgetreten sind, zu filtern. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Beispiel:

  * `created:2014-07-08` sucht alle Ereignisse, die am 8. Juli 2014 aufgetreten sind.
  * `created:>=2014-07-08` sucht alle Ereignisse, die am oder nach dem 8. Juli 2014 aufgetreten sind.
  * `created:<=2014-07-08` sucht alle Ereignisse, die am oder vor dem 8. Juli 2014 aufgetreten sind.
  * `created:2014-07-01..2014-07-31` sucht alle Ereignisse, die im Juli 2014 aufgetreten sind.

{% note %}

**Hinweis**: Das Überwachungsprotokoll enthält Daten für den aktuellen Monat sowie jeden Tag der vergangenen sechs Monate.

{% endnote %}

### Suche nach Standort

Mithilfe des Qualifizierers `country` kannst du Ereignisse im Überwachungsprotokoll basierend auf dem Ursprungsland filtern. Hierzu verwendest du den zweistelligen Kurzcode oder den vollständigen Namen des Landes. Ländernamen mit Leerzeichen müssen in Anführungszeichen eingeschlossen sein. Beispiel:

  * `country:de` sucht alle Ereignisse, die in Deutschland aufgetreten sind.
  * `country:Mexico` sucht alle Ereignisse, die in Mexiko aufgetreten sind.
  * `country:"United States"` sucht alle Ereignisse, die in den USA aufgetreten sind.

{% ifversion fpt or ghec %}
## Auditprotokoll exportieren

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %} {% endif %}

## Verwenden der Überwachungsprotokoll-API

{% ifversion fpt %}

Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können über die GraphQL-API und die REST-API mit dem Überwachungsprotokoll interagieren. Weitere Informationen findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

{% else %}

Du kannst mit dem Überwachungsprotokoll mithilfe der GraphQL-API{% ifversion fpt or ghec %} oder der REST-API{% endif %} interagieren.{% ifversion read-audit-scope %} Du kannst den `read:audit_log`-Bereich verwenden, um über die APIs auf das Überwachungsprotokoll zuzugreifen.{% endif %}

{% ifversion ghec %}

{% note %}

**Hinweis:** Für die Verwendung der Überwachungsprotokoll-API muss deine Organisation {% data variables.product.prodname_ghe_cloud %} verwenden. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### Verwenden der GraphQL-API

{% endif %}

Damit der Schutz deines geistigen Eigentums sichergestellt ist und die Compliancevorgaben für deine Organisation eingehalten werden, kannst du über die GraphQL-API des Überwachungsprotokolls Kopien deiner Überwachungsprotokolldaten aufbewahren und überwachen: {% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %} Hinweis: Mit der GraphQL-API können keine Git-Ereignisse abgerufen werden. Verwende zum Abrufen von Git-Ereignissen stattdessen die REST-API. Weitere Informationen findest du unter [Aktionen der `git`-Kategorie](#git-category-actions).
{% endif %}

Die GraphQL-Antwort kann Daten für bis zu 90 bis 120 Tage beinhalten.

Du kannst beispielsweise eine GraphQL-Anforderung erstellen, die alle deiner Organisation neu hinzugefügten Organisationsmitglieder anzeigt. Weitere Informationen findest du im [GraphQL-API-Überwachungsprotokoll](/graphql/reference/interfaces#auditentry/).

{% ifversion ghec %}

### Verwenden der REST-API

Damit der Schutz deines geistigen Eigentums sichergestellt ist und die Compliancevorgaben für deine Organisation eingehalten werden, kannst du über die REST-API des Überwachungsprotokolls Kopien deiner Überwachungsprotokolldaten aufbewahren und überwachen: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

Standardmäßig werden nur Ereignisse aus den letzten drei Monaten zurückgegeben. Wenn ältere Ereignisse eingeschlossen werden sollen, musst du in deiner Abfrage einen Zeitstempel angeben.

Weitere Informationen zur REST-API für das Überwachungsprotokoll findest du unter [Organisationen](/rest/reference/orgs#get-the-audit-log-for-an-organization).

{% endif %} {% endif %}

## Überwachungsprotokollaktionen

Eine Übersicht über einige der häufigsten Aktionen, die als Ereignisse im Überwachungsprotokoll aufgezeichnet werden.

{% ifversion fpt or ghec %}
### `account`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `billing_plan_change` | Wird ausgelöst, wenn sich der [Abrechnungszyklus](/articles/changing-the-duration-of-your-billing-cycle) einer Organisation ändert.
| `plan_change` | Wird ausgelöst, wenn sich das [Abonnement](/articles/about-billing-for-github-accounts) einer Organisation ändert.
| `pending_plan_change` | Wird ausgelöst, wenn Organisationsbesitzer*innen oder Abrechnungs-Manager*innen [ein kostenpflichtiges Abonnement kündigen oder herabstufen](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/).
| `pending_subscription_change` | Wird ausgelöst, wenn der Testzeitraum einer [kostenlosen {% data variables.product.prodname_marketplace %}-Testversion beginnt oder abläuft](/articles/about-billing-for-github-marketplace/).
{% endif %}

{% ifversion fpt or ghec %}
### `advisory_credit`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `accept` | Wird ausgelöst, wenn jemand die Angabe zur Mitwirkung an einer Sicherheitsempfehlung bestätigt. Weitere Informationen findest du unter [Bearbeiten eines Sicherheitshinweises](/github/managing-security-vulnerabilities/editing-a-security-advisory).
| `create` | Wird ausgelöst, wenn die*der Administrator*in einer Sicherheitsempfehlung jemanden als Mitwirkende*n hinzufügt.
| `decline` | Wird ausgelöst, wenn jemand die Angabe zur Mitwirkung an einer Sicherheitsempfehlung ablehnt.
| `destroy` | Wird ausgelöst, wenn die*der Administrator*in einer Sicherheitsempfehlung jemanden als Mitwirkende*n entfernt.
{% endif %}

{% ifversion pat-v2 %}

### `auto_approve_personal_access_token_requests`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn die Organisation {% data variables.product.pat_v2 %} genehmigen muss, bevor die Token auf die Organisationsressourcen zugreifen können. Weitere Informationen findest du unter [Festlegen einer Richtline für {% data variables.product.pat_generic %} für deine Organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).
| `enable` | Wird ausgelöst, wenn {% data variables.product.pat_v2 %} ohne vorherige Genehmigung auf Organisationsressourcen zugreifen können. Weitere Informationen findest du unter [Festlegen einer Richtline für {% data variables.product.pat_generic %} für deine Organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% endif %}

{% ifversion fpt or ghec %}
### `billing`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `change_billing_type` | Wird ausgelöst, wenn deine Organisation [ändert, wie sie für {% data variables.product.prodname_dotcom %} bezahlt](/articles/adding-or-editing-a-payment-method).
| `change_email` | Wird ausgelöst, wenn sich die [Abrechnungs-E-Mail-Adresse](/articles/setting-your-billing-email) deiner Organisation ändert.
{% endif %}

### `business`-Kategorieaktionen

| Aktion | Beschreibung |------------------|-------------------{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Wird ausgelöst, wenn die Einstellung für erforderliche Genehmigungen für Workflows aus öffentlichen Forks für ein Unternehmen geändert wird. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).{% endif %} | `set_actions_retention_limit` | Wird ausgelöst, wenn der Aufbewahrungszeitraum für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle für ein Unternehmen geändert wird. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise).{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Wird ausgelöst, wenn die Richtlinie für Workflows in privaten Repositoryforks geändert wird. Weitere Informationen findest du unter {% ifversion fpt or ghec%}[Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Aktivieren von Workflows für private Repositoryforks](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}.{% endif %}

{% ifversion fpt or ghec %}
### `codespaces`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn Benutzer*innen [einen Codespace erstellen](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Wird ausgelöst, wenn Benutzer*innen einen angehaltenen Codespace fortsetzen.
| `delete` | Wird ausgelöst, wenn Benutzer*innen [einen Codespace löschen](/github/developing-online-with-codespaces/deleting-a-codespace).
| `create_an_org_secret` | Wird ausgelöst, wenn Benutzer*innen auf Organisationsebene ein [Geheimnis für {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) erstellen
| `update_an_org_secret` | Wird ausgelöst, wenn Benutzer*innen auf Organisationsebene ein [Geheimnis für {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) aktualisieren
| `remove_an_org_secret` | Wird ausgelöst, wenn Benutzer*innen auf Organisationsebene ein [Geheimnis für {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) entfernen
| `manage_access_and_security` | Wird ausgelöst, wenn Benutzer*innen aktualisieren, [auf welche Repositorys ein Codespace zugreifen kann](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{% endif %}

### `dependabot_alerts`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn Organisationsbesitzer*innen {% data variables.product.prodname_dependabot_alerts %} für alle vorhandenen {% ifversion fpt or ghec %}privaten {% endif %}Repositorys deaktivieren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Wird ausgelöst, wenn Organisationsbesitzer*innen {% data variables.product.prodname_dependabot_alerts %} für alle vorhandenen {% ifversion fpt or ghec %}privaten {% endif %}Repositorys aktivieren.

### `dependabot_alerts_new_repos`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn Organisationsbesitzer*innen {% data variables.product.prodname_dependabot_alerts %} für alle neuen {% ifversion fpt or ghec %}privaten {% endif %}Repositorys deaktivieren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Wird ausgelöst, wenn Organisationsbesitzer*innen {% data variables.product.prodname_dependabot_alerts %} für alle neuen {% ifversion fpt or ghec %}privaten {% endif %}Repositorys aktivieren.

{% ifversion fpt or ghec or ghes %}
### `dependabot_security_updates`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn Organisationsbesitzer*innen {% data variables.product.prodname_dependabot_security_updates %} für alle vorhandenen Repositorys deaktivieren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Wird ausgelöst, wenn Organisationsbesitzer*innen {% data variables.product.prodname_dependabot_security_updates %} für alle vorhandenen Repositorys aktivieren.

### `dependabot_security_updates_new_repos`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn Organisationsbesitzer*innen {% data variables.product.prodname_dependabot_security_updates %} für alle neuen Repositorys deaktivieren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Wird ausgelöst, wenn Organisationsbesitzer*innen {% data variables.product.prodname_dependabot_security_updates %} für alle neuen Repositorys aktivieren.
{% endif %}

{% ifversion fpt or ghec %}
### `dependency_graph`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn Organisationsbesitzer*innen das Abhängigkeitsdiagramm für alle vorhandenen Repositorys deaktivieren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Wird ausgelöst, wenn Organisationsbesitzer*innen das Abhängigkeitsdiagramm für alle vorhandenen Repositorys aktivieren.

### `dependency_graph_new_repos`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn Organisationsbesitzer*innen das Abhängigkeitsdiagramm für alle neuen Repositorys deaktivieren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Wird ausgelöst, wenn Organisationsbesitzer*innen das Abhängigkeitsdiagramm für alle neuen Repositorys aktivieren.
{% endif %}

### `discussion_post`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `update` | Wird ausgelöst, wenn [ein Beitrag in einer Teamdiskussion bearbeitet wird](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Wird ausgelöst, wenn [ein Beitrag in einer Teamdiskussion gelöscht wird](/articles/managing-disruptive-comments/#deleting-a-comment).

### `discussion_post_reply`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `update` | Wird ausgelöst, wenn [eine Antwort auf einen Beitrag in einer Teamdiskussion bearbeitet wird](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Wird ausgelöst, wenn [eine Antwort auf einen Beitrag in einer Teamdiskussion gelöscht wird](/articles/managing-disruptive-comments/#deleting-a-comment).

{% ifversion fpt or ghes or ghec %}
### `enterprise`-Kategorieaktionen

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### `environment`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create_actions_secret` | Wird ausgelöst, wenn ein Geheimnis in einer Umgebung erstellt wird. Weitere Informationen findest du unter [Environment secrets](/actions/reference/environments#environment-secrets) („Umgebungsgeheimnisse“).
| `delete` | Wird ausgelöst, wenn eine Umgebung gelöscht wird. Weitere Informationen findest du unter [Deleting an environment](/actions/reference/environments#deleting-an-environment) („Löschen einer Umgebung“).
| `remove_actions_secret` |  Wird ausgelöst, wenn ein Geheimnis aus einer Umgebung entfernt wird. Weitere Informationen findest du unter [Environment secrets](/actions/reference/environments#environment-secrets) („Umgebungsgeheimnisse“).
| `update_actions_secret` | Wird ausgelöst, wenn ein Geheimnis in einer Umgebung aktualisiert wird. Weitere Informationen findest du unter [Environment secrets](/actions/reference/environments#environment-secrets) („Umgebungsgeheimnisse“).
{% endif %}

{% ifversion ghae %}
### `external_group`-Kategorieaktionen

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### `external_identity`-Kategorieaktionen

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### `git`-Kategorieaktionen

{% note %}

**Hinweis:** Für den Zugriff auf Git-Ereignisse im Überwachungsprotokoll muss die REST-API des Überwachungsprotokolls verwendet werden. Die Überwachungsprotokoll-REST-API ist ausschließlich für Benutzer*innen von {% data variables.product.prodname_ghe_cloud %} verfügbar. Weitere Informationen findest du unter [Organisationen](/rest/reference/orgs#get-the-audit-log-for-an-organization).

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| Aktion  | BESCHREIBUNG
|---------|----------------------------
| `clone` | Wird ausgelöst, wenn ein Repository geklont wird.
| `fetch` | Wird ausgelöst, wenn Änderungen aus einem Repository abgerufen werden.
| `push`  | Wird ausgelöst, wenn Änderungen in ein Repository gepusht werden.

{% endif %}

### `hook`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn [ein neuer Hook](/articles/creating-webhooks) zu einem Repository hinzugefügt wurde, das sich im Besitz deiner Organisation befindet.
| `config_changed` | Wird ausgelöst, wenn die Konfiguration eines vorhandenen Hooks geändert wird.
| `destroy` | Wird ausgelöst, wenn ein vorhandener Hook aus einem Repository entfernt wird.
| `events_changed` | Wird ausgelöst, wenn sich die Ereignisse eines Hooks ändern.

### `integration_installation`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `contact_email_changed` | Eine Kontakt-E-Mail-Adresse für eine Integration wurde geändert.
| `create` | Eine Integration wurde installiert.
| `destroy` | Eine Integration wurde deinstalliert.
| `repositories_added` | Repositorys wurden einer Integration hinzugefügt.
| `repositories_removed` | Repositorys wurden aus einer Integration entfernt.
{%- ifversion fpt or ghec %} | `suspend` | Eine Integration wurde angehalten.
| `unsuspend` | Eine Integration wurde fortgesetzt.
{%- endif %} | `version_updated` | Berechtigungen für eine Integration wurden aktualisiert.

### `integration_installation_request`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn ein Mitglied der Organisation bei einem Organisationsinhaber die Installation einer Integration zur Verwendung innerhalb der Organisation anfordert.
| `close` | Wird ausgelöst, wenn ein Antrag zur Integrations-Installation zur Verwendung innerhalb der Organisation von einem Organisationsinhaber genehmigt oder abgelehnt wird oder wenn die Anforderung von dem Organisationsmitglied, das die Anfrage gestellt hat, zurückgezogen wird.

{% ifversion ghec or ghae %}
### `ip_allow_list`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `enable` | Wird ausgelöst, wenn eine IP-Zulassungsliste für eine Organisation aktiviert wurde.
| `disable` | Wird ausgelöst, wenn eine IP-Zulassungsliste für eine Organisation deaktiviert wurde.
| `enable_for_installed_apps` | Wird ausgelöst, wenn eine IP-Zulassungsliste für installierte {% data variables.product.prodname_github_apps %} aktiviert wurde.
| `disable_for_installed_apps` | Wird ausgelöst, wenn eine IP-Zulassungsliste für installierte {% data variables.product.prodname_github_apps %} deaktiviert wurde.

### `ip_allow_list_entry`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn eine IP-Adresse zu einer IP-Zulassungsliste hinzugefügt wurde.
| `update` | Wird ausgelöst, wenn eine IP-Adresse oder die zugehörige Beschreibung geändert wurde.
| `destroy` | Wird ausgelöst, wenn eine IP-Adresse aus einer IP-Zulassungsliste gelöscht wurde.
{% endif %}

### `issue`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `destroy`        | Wird ausgelöst, wenn ein Organisationsinhaber oder eine Person mit Administratorberechtigungen für ein Repository einen Issue aus einem Repository der Organisation löscht.

{% ifversion fpt or ghec %}

### `marketplace_agreement_signature`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn du die {% data variables.product.prodname_marketplace %}-Entwicklervereinbarung unterzeichnest.

### `marketplace_listing`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `approve` | Wird ausgelöst, wenn dein Eintrag für die Aufnahme auf {% data variables.product.prodname_marketplace %} genehmigt wird.
| `create` | Wird ausgelöst, wenn du einen Eintrag für deine App auf {% data variables.product.prodname_marketplace %} erstellst.
| `delist` | Wird ausgelöst, wenn dein Eintrag von {% data variables.product.prodname_marketplace %} entfernt wird.
| `redraft` | Wird ausgelöst, wenn dein Eintrag in den Entwurfsstatus zurückversetzt wird.
| `reject` | Wird ausgelöst, wenn dein Eintrag nicht für die Eintragung auf {% data variables.product.prodname_marketplace %} genehmigt wird.

{% endif %}

{% ifversion fpt or ghes or ghec %}

### `members_can_create_pages`-Kategorieaktionen

Weitere Informationen findest du unter [Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

| Aktion | BESCHREIBUNG |
| :- | :- |
| `enable` | Wird ausgelöst, wenn Organisationsbesitzer*innen die Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für Repositorys in der Organisation aktivieren. |
| `disable` | Wird ausgelöst, wenn Organisationsbesitzer*innen die Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für Repositorys in der Organisation deaktivieren. |

{% endif %}

### `oauth_application`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn eine neue {% data variables.product.prodname_oauth_app %} erstellt wird.
| `destroy` | Wird ausgelöst, wenn eine vorhandene {% data variables.product.prodname_oauth_app %} gelöscht wird.
| `reset_secret` | Wird ausgelöst, wenn das Client-Geheimnis einer {% data variables.product.prodname_oauth_app %} zurückgesetzt wird.
| `revoke_tokens` | Wird ausgelöst, wenn die Benutzertoken einer {% data variables.product.prodname_oauth_app %} zurückgezogen werden.
| `transfer` |  Wird ausgelöst, wenn eine vorhandene {% data variables.product.prodname_oauth_app %} auf eine neue Organisation übertragen wird.

### `org`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `add_member` | Wird ausgelöst, wenn Benutzer*innen einer Organisation beitreten.
| `advanced_security_policy_selected_member_disabled` | Wird ausgelöst, wenn Unternehmensbesitzer*innen das Aktivieren von {% data variables.product.prodname_GH_advanced_security %}-Features für Repositorys verhindern, die sich im Besitz der Organisation befinden. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | Wird ausgelöst, wenn Unternehmensbesitzer*innen das Aktivieren von {% data variables.product.prodname_GH_advanced_security %}-Features für Repositorys zulassen, die sich im Besitz der Organisation befinden. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | Wird ausgelöst, wenn Organisationsadministrator*innen [einen Export des Überwachungsprotokolls der Organisation erstellen](#exporting-the-audit-log). Wenn der Export eine Abfrage enthält, listet das Protokoll diese Abfrage sowie die Anzahl der Auditprotokolleinträge auf, die mit der Abfrage übereinstimmen.
| `block_user` | Wird ausgelöst, wenn Organisationsbesitzer*innen [den Zugriff von Benutzer*innen auf die Repositorys der Organisation blockieren](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).
| `cancel_invitation` | Wird ausgelöst, wenn die Einladung zu einer Organisation widerrufen wird. {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis für eine Organisation erstellt wird. Weitere Informationen findest du unter [Erstellen von verschlüsselten Geheimnissen für eine Organisation](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization).{% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | Wird ausgelöst, wenn Besitzer*innen [{% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen](/articles/disabling-oauth-app-access-restrictions-for-your-organization) für deine Organisation deaktivieren.{% ifversion ghec %}
| `disable_saml` | Wird ausgelöst, wenn Organisationsadministrator*innen SAML Single Sign-On für eine Organisation deaktivieren.{% endif %}{% endif %}
| `disable_member_team_creation_permission` | Wird ausgelöst, wenn ein Organisationsinhaber die Möglichkeit der Teamerstellung auf Inhaber beschränkt. Weitere Informationen findest du unter [Festlegen von Teamerstellungsberechtigungen in deiner Organisation](/articles/setting-team-creation-permissions-in-your-organization). |{% ifversion not ghae %}
| `disable_two_factor_requirement` | Wird ausgelöst, wenn Besitzer*innen die Anforderung an eine zweistufige Authentifizierung für alle Mitglieder{% ifversion fpt or ghec %}, Abrechnungs-Manager*innen{% endif %} und externen Mitarbeiter*innen in einer Organisation deaktiviert.{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | Wird ausgelöst, wenn Besitzer*innen [{% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen](/articles/enabling-oauth-app-access-restrictions-for-your-organization) für deine Organisation aktivieren.{% ifversion ghec %}
| `enable_saml` | Wird ausgelöst, wenn Organisationsadministrator*innen [SAML Single Sign-On](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) für eine Organisation aktivieren.{% endif %}{% endif %}
| `enable_member_team_creation_permission` | Wird ausgelöst, wenn ein Organisationsinhaber Mitgliedern die Erstellung von Teams erlaubt. Weitere Informationen findest du unter [Festlegen von Teamerstellungsberechtigungen in deiner Organisation](/articles/setting-team-creation-permissions-in-your-organization). |{% ifversion not ghae %}
| `enable_two_factor_requirement` | Wird ausgelöst, wenn Besitzer*innen die zweistufige Authentifizierung für alle Mitglieder{% ifversion fpt or ghec %}, Abrechnungs-Manager*innen{% endif %} und externen Mitarbeiter*innen in einer Organisation als erforderlich festlegen.{% endif %}{% ifversion fpt or ghec %}
| `invite_member` | Wird ausgelöst, wenn [ein*e neue*r Benutzer*in zu deiner Organisation eingeladen wurde](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
| `oauth_app_access_approved` | Wird ausgelöst, wenn ein*e Besitzer*in [Organisationszugriff auf eine {% data variables.product.prodname_oauth_app %} gewährt](/articles/approving-oauth-apps-for-your-organization/).
| `oauth_app_access_denied` | Wird ausgelöst, wenn ein*e Besitzer*in [den Zugriff einer zuvor genehmigten {% data variables.product.prodname_oauth_app %}](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization) auf deine Organisation deaktiviert.
| `oauth_app_access_requested` | Wird ausgelöst, wenn ein Organisationsmitglied anfordert, dass ein*e Besitzer*in einer {% data variables.product.prodname_oauth_app %} Zugriff auf deine Organisation erteilt.{% endif %}
{%- ifversion ghec %} | `org.transfer` | Wird ausgelöst, wenn eine Organisation zwischen Unternehmenskonten übertragen wird. Weitere Informationen findest du unter [Übertragen einer Organisation zwischen Unternehmenskonten](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts).
{%- endif %} | `register_self_hosted_runner` | Wird ausgelöst, wenn ein neuer selbstgehosteter Runner registriert wird. Weitere Informationen findest du unter [Hinzufügen eines selbstgehosteten Runners zu einer Organisation](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization).
| `remove_actions_secret` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis entfernt wird.{% ifversion fpt or ghec %} | `remove_billing_manager` | Wird ausgelöst, wenn ein [Besitzer einen Abrechnungsmanager aus einer Organisation entfernt](/articles/removing-a-billing-manager-from-your-organization/) oder wenn [die Zwei-Faktor-Authentifizierung in einer Organisation erforderlich ist](/articles/requiring-two-factor-authentication-in-your-organization) und ein Abrechnungsmanager keine Zwei-Faktor-Authentifizierung verwendet oder diese deaktiviert. |{% endif %} | `remove_member` | Wird ausgelöst, wenn ein [Besitzer ein Mitglied aus einer Organisation entfernt](/articles/removing-a-member-from-your-organization/){% ifversion not ghae %} oder wenn die [Zwei-Faktor-Authentifizierung in einer Organisation erforderlich ist](/articles/requiring-two-factor-authentication-in-your-organization) und ein Organisationsmitglied keine Zwei-Faktor-Authentifizierung verwendet oder diese deaktiviert{% endif %}. Wird auch ausgelöst, wenn ein [Organisationsmitglied sich selbst aus einer Organisation entfernt](/articles/removing-yourself-from-an-organization/).| | `remove_outside_collaborator` | Wird ausgelöst, wenn ein Besitzer einen externen Projektmitarbeiter aus einer Organisation entfernt{% ifversion not ghae %} oder wenn die [Zwei-Faktor-Authentifizierung in einer Organisation erforderlich ist](/articles/requiring-two-factor-authentication-in-your-organization) und ein externer Projektmitarbeiter keine Zwei-Faktor-Authentifizierung verwendet oder diese deaktiviert{% endif %}. | | `remove_self_hosted_runner` | Wird ausgelöst, wenn ein selbstgehosteter Runner entfernt wird. Weitere Informationen findest du unter [Entfernen eines Runners aus einer Organisation](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization). {% ifversion ghec %} | `revoke_external_identity` | Wird ausgelöst, wenn ein Organisationsbesitzer die verknüpfte Identität eines Mitarbeiters widerruft. Weitere Informationen findest du unter [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity).
| `revoke_sso_session` | Wird ausgelöst, wenn ein Organisationsbesitzer die SAML-Sitzung eines Mitglieds widerruft. Weitere Informationen findest du unter [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity). {% endif %} | `runner_group_created` | Wird ausgelöst, wenn eine selbstgehostete Runnergruppe erstellt wird. Weitere Informationen findest du unter [Creating a self-hosted runner group for an organization](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization) („Erstellen einer selbstgehosteten Runnergruppe für eine Organisation“).
| `runner_group_removed` | Wird ausgelöst, wenn eine selbstgehostete Runnergruppe entfernt wird. Weitere Informationen findest du unter [Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) („Entfernen einer selbstgehosteten Runnergruppe“).
| `runner_group_updated` | Wird ausgelöst, wenn die Konfiguration einer selbstgehosteten Runnergruppe geändert wird. Weitere Informationen findest du unter [Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) („Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe“).
| `runner_group_runners_added` | Wird ausgelöst, wenn ein selbstgehosteter Runner zu einer Gruppe hinzugefügt wird. Weitere Informationen findest du unter [Verschieben eines selbstgehosteten Runners in eine Gruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `runner_group_runner_removed` | Wird ausgelöst, wenn die REST-API verwendet wird, um einen selbstgehosteten Runner aus einer Gruppe zu entfernen. Weitere Informationen findest du unter [Entfernen eines selbstgehosteten Runners aus einer Gruppe für eine Organisation](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization).
| `runner_group_runners_updated` | Wird ausgelöst, wenn die Mitgliederliste einer Runnergruppe aktualisiert wird. Weitere Informationen findest du unter [Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) („Festlegen von selbstgehosteten Runnern in einer Gruppe für eine Organisation“).
{%- ifversion code-security-audit-log-events %} | `secret_scanning_push_protection_custom_message_disabled` | Wird ausgelöst, wenn Organisationsbesitzer*innen oder -administrator*innen die benutzerdefinierte Nachricht deaktivieren, die bei einem versuchten Push an ein Repository mit Pushschutz ausgelöst wird. Weitere Informationen findest du unter [Schützen von Pushes mit {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
| `secret_scanning_push_protection_custom_message_enabled` | Wird ausgelöst, wenn Organisationsbesitzer*innen oder -administrator*innen die benutzerdefinierte Nachricht aktivieren, die bei einem versuchten Push an ein Repository mit Pushschutz ausgelöst wird. Weitere Informationen findest du unter [Schützen von Pushes mit {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
| `secret_scanning_push_protection_custom_message_updated` | Wird ausgelöst, wenn Organisationsbesitzer*innen oder -administrator*innen die benutzerdefinierte Nachricht aktualisieren, die bei einem versuchten Push an ein Repository mit Pushschutz ausgelöst wird. Weitere Informationen findest du unter [Schützen von Pushes mit {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `secret_scanning_push_protection_disable ` | Wird ausgelöst, wenn Organisationsbesitzer*innen oder Personen mit Administratorzugriff auf die Organisation den Pushschutz für die Geheimnisüberprüfung deaktivieren. Weitere Informationen findest du unter [Schützen von Pushs mit Geheimnisüberprüfung](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
| `secret_scanning_push_protection_enable ` | Wird ausgelöst, wenn Organisationsbesitzer*innen oder Personen mit Administratorzugriff auf die Organisation den Pushschutz für {% data variables.product.prodname_secret_scanning %} aktivieren{%- endif %} | `self_hosted_runner_online` | Wird ausgelöst, wenn die Runneranwendung gestartet wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) („Überprüfen des Status eines selbstgehosteten Runners“).
| `self_hosted_runner_offline` | Wird ausgelöst, wenn die Runneranwendung angehalten wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runnern](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).{% ifversion fpt or ghes or ghec %} | `self_hosted_runner_updated` | Wird ausgelöst, wenn die Runneranwendung aktualisiert wird. Kann über die REST-API und die Benutzeroberfläche angezeigt werden. Im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners). {% endif %} {% ifversion fpt or ghec %}| `set_actions_fork_pr_approvals_policy` | Wird ausgelöst, wenn die Einstellung für erforderliche Genehmigungen für Workflows aus öffentlichen Forks für eine Organisation geändert wird. Weitere Informationen findest du unter [Erforderliche Genehmigung für Workflows aus öffentlichen Forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks). {% endif %} | `set_actions_retention_limit` | Wird ausgelöst, wenn der Aufbewahrungszeitraum für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle geändert wird. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise).{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Wird ausgelöst, wenn die Richtlinie für Workflows in privaten Repositoryforks geändert wird. Weitere Informationen findest du unter [Aktivieren von Workflows für private Repositoryforks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks).{% endif %}{% ifversion fpt or ghec %} | `unblock_user` | Wird ausgelöst, wenn Organisationsbesitzer*innen [Benutzer*innen bei einer Organisation entsperren](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization){% endif %}{% ifversion fpt or ghes or ghec %} | `update_actions_secret` |Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis aktualisiert wird{% endif %} | `update_new_repository_default_branch_setting` | Wird ausgelöst, wenn Besitzer*innen den Namen des Standardbranch für neue Repositorys in der Organisation ändern. Weitere Informationen findest du unter [Verwalten des Standardbranchnamens für Repositorys in deiner Organisation](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization).
| `update_default_repository_permission` | Wird ausgelöst, wenn Besitzer*innen die Standardberechtigungsebene für Repositorys für die Organisationsmitglieder ändern
| `update_member` | Wird ausgelöst, wenn Besitzer*innen die Rolle einer Person von „Besitzer“ in „Mitglied“ oder von „Mitglied“ in „Besitzer“ ändern
| `update_member_repository_creation_permission` | Wird ausgelöst, wenn Besitzer*innen die Berechtigung zum Erstellen eines Repositorys für Organisationsmitglieder ändert {% ifversion fpt or ghec %} | `update_saml_provider_settings` | Wird ausgelöst, wenn die SAML-Anbietereinstellungen einer Organisation aktualisiert werden
| `update_terms_of_service` | Wird ausgelöst, wenn eine Organisation von den Standardnutzungsbedingungen auf die Nutzungsbedingungen für Unternehmen umsteigt. Weitere Informationen findest du unter [Upgrade auf die Vertragsbedingungen für Unternehmen](/articles/upgrading-to-the-corporate-terms-of-service).{% endif %}

{% ifversion ghec %}
### `org_credential_authorization`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `grant` | Wird ausgelöst, wenn ein Mitglied [Anmeldeinformationen für die Verwendung mit SAML Single Sign-On autorisiert](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `deauthorized` | Wird ausgelöst, wenn ein Mitglied [die Autorisierung von Anmeldeinformationen für die Verwendung mit SAML Single Sign-On aufhebt](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `revoke` | Wird ausgelöst, wenn ein*e Besitzer*in [autorisierte Anmeldeinformationen widerruft](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `org_secret_scanning_custom_pattern`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn ein benutzerdefiniertes Muster für die Geheimnisüberprüfung in einer Organisation veröffentlicht wird. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization).
| `update` | Wird ausgelöst, wenn Änderungen an einem benutzerdefinierten Muster für die Geheimnisüberprüfung in einer Organisation gespeichert werden. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern).
| `delete` | Wird ausgelöst, wenn ein benutzerdefiniertes Muster für die Geheimnisüberprüfung in einer Organisation entfernt wird. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern).

{% endif %}
### `organization_default_label`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn eine Standardkennzeichnung erstellt wird.
| `update` | Wird ausgelöst, wenn eine Standardkennzeichnung bearbeitet wird.
| `destroy` | Wird ausgelöst, wenn eine Standardkennzeichnung gelöscht wird.

### `packages`-Kategorieaktionen

| Aktion | BESCHREIBUNG |
|--------|-------------|
| `package_version_published` | Wird ausgelöst, wenn eine Paketversion veröffentlicht wird. |
| `package_version_deleted` | Wird ausgelöst, wenn eine bestimmte Paketversion gelöscht wird. Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).
| `package_deleted` | Wird ausgelöst, wenn ein gesamtes Paket gelöscht wird. Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).
| `package_version_restored` | Wird ausgelöst, wenn eine bestimmte Paketversion gelöscht wird. Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).
| `package_restored` | Wird ausgelöst, wenn ein gesamtes Paket wiederhergestellt wird. Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).

{% ifversion fpt or ghec %}

### `payment_method`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` |  Wird ausgelöst, wenn eine Zahlungsmethode, beispielsweise eine Kreditkarte oder ein PayPal-Konto, hinzugefügt wird.
| `update` | Wird ausgelöst, wenn eine vorhandene Zahlungsmethode geändert wird.

{% endif %}

{% ifversion pat-v2 %}

### `personal_access_token`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `access_granted` | Wird ausgelöst, wenn einem {% data variables.product.pat_v2 %} Zugriff auf Organisationsressourcen gewährt wird. Weitere Informationen findest du unter [Verwalten von Anforderungen für {% data variables.product.pat_generic %} in deiner Organisation](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization).
| `access_revoked` | Wird ausgelöst, wenn der Zugriff auf Organisationsressourcen für ein {% data variables.product.pat_v2 %} widerrufen wird. Das Token kann weiterhin öffentliche Organisationsressourcen lesen. Weitere Informationen findest du unter [Überprüfen und Widerrufen von {% data variables.product.pat_generic %} in deiner Organisation](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization).
| `request_cancelled` | Wird ausgelöst, wenn Mitglieder der Organisation eine Anforderung für das Zugreifen ihres {% data variables.product.pat_v2 %} auf Organisationsressourcen abbrechen
| `request_created` | Wird ausgelöst, wenn Mitglieder der Organisation ein {% data variables.product.pat_v2 %} zum Zugreifen auf Organisationsressourcen erstellen, und die Organisation eine Genehmigung erfordert, bevor ein {% data variables.product.pat_v2 %} auf Organisationsressourcen zugreifen kann. Weitere Informationen findest du unter [Verwalten von Anforderungen für {% data variables.product.pat_generic %} in deiner Organisation](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization).
| `request_denied` | Wird ausgelöst, wenn eine Anforderung für ein {% data variables.product.pat_v2 %} zum Zugreifen auf Organisationsressourcen verweigert wird. Weitere Informationen findest du unter [Verwalten von Anforderungen für {% data variables.product.pat_generic %} in deiner Organisation](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization).

{% endif %}

### `profile_picture`-Kategorieaktionen
| Aktion | BESCHREIBUNG
|------------------|-------------------
| aktualisieren | Wird ausgelöst, wenn du das Profilbild deiner Organisation festlegst oder änderst.

### `project`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------------------|---------------------
| `create` | Wird bei der Erstellung eines Projektboards ausgelöst.
| `link` | Wird ausgelöst, wenn ein Repository mit einem Projektboard verknüpft wird.
| `rename` | Wird ausgelöst, wenn ein Projektboard umbenannt wird.
| `update` | Wird ausgelöst, wenn ein Projektboard geändert wird.
| `delete` | Wird ausgelöst, wenn ein Projektboard gelöscht wird.
| `unlink` | Wird ausgelöst, wenn die Verknüpfung eines Repositorys mit einem Projektboard aufgehoben wird.
| `update_org_permission` | Wird ausgelöst, wenn die Basis-Berechtigungen für alle Organisationsmitglieder geändert oder entfernt werden. |
| `update_team_permission` | Wird ausgelöst, wenn sich die Berechtigungsebene eines Teams für ein Projektboard ändert oder wenn ein Team in einem Projektboard hinzugefügt oder entfernt wird. |
| `update_user_permission` | Wird ausgelöst, wenn ein Organisationsmitglied oder ein externer Mitarbeiter in einem Projektboard hinzugefügt oder entfernt wird oder wenn sich dessen Berechtigungsebene ändert.|

### `protected_branch`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------------------|---------------------
| `create ` | Wird ausgelöst, wenn für einen Branch der Branch-Schutz aktiviert wird.
| `destroy` | Wird ausgelöst, wenn für einen Branch der Branch-Schutz deaktiviert wird.
| `update_admin_enforced ` | Wird ausgelöst, wenn der Branch-Schutz für Repository-Administratoren erzwungen wird.
| `update_require_code_owner_review ` | Wird ausgelöst, wenn die Erzwingung erforderlicher Reviews durch einen Codeinhaber für einen Branch aktualisiert wird.
| `dismiss_stale_reviews ` | Wird ausgelöst, wenn die Erzwingung des Verwerfens veralteter Pull Requests für einen Branch aktualisiert wird.
| `update_signature_requirement_enforcement_level ` | Wird ausgelöst, wenn die Erzwingung der obligatorischen Commit-Signatur für einen Branch aktualisiert wird.
| `update_pull_request_reviews_enforcement_level ` | Wird ausgelöst, wenn die Erzwingung erforderlicher Pull-Request-Reviews für einen Branch aktualisiert wird. Der Wert kann `0` (deaktiviert), `1` (Nicht-Administratoren) oder `2` (jeder) lauten.
| `update_required_status_checks_enforcement_level ` | Wird ausgelöst, wenn die Erzwingung erforderlicher Statuschecks für einen Branch aktualisiert wird.
| `update_strict_required_status_checks_policy` | Wird ausgelöst, wenn die Anforderung, dass ein Branch vor dem Zusammenführen auf dem neuesten Stand sein muss, geändert wird.
| `rejected_ref_update ` | Wird ausgelöst, wenn eine Branch-Aktualisierung abgelehnt wird.
| `policy_override ` | Wird ausgelöst, wenn die geltende Anforderung des Branch-Schutzes von einem Repository-Administrator überschrieben wird.
| `update_allow_force_pushes_enforcement_level ` | Wird ausgelöst, wenn erzwungene Pushes für einen geschützten Branch aktiviert oder deaktiviert werden.
| `update_allow_deletions_enforcement_level ` | Wird ausgelöst, wenn die Branch-Löschung für einen geschützten Branch aktiviert oder deaktiviert wird.
| `update_linear_history_requirement_enforcement_level ` | Wird ausgelöst, wenn der erforderliche lineare Commit-Verlauf für einen geschützten Branch aktiviert oder deaktiviert wird.

### `pull_request`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn ein Pull Request erstellt wird.
| `close` | Wird ausgelöst, wenn ein Pull Request geschlossen wird, ohne zusammengeführt zu werden.
| `reopen` | Wird ausgelöst, wenn ein Pull Request nach dem Schließen erneut geöffnet wird.
| `merge` | Wird ausgelöst, wenn ein Pull Request zusammengeführt wird.
| `indirect_merge` | Wird ausgelöst, wenn ein Pull Request als zusammengeführt betrachtet wird, weil die Commits des Pull Requests im Zielbranch zusammengeführt wurden.
| `ready_for_review` | Wird ausgelöst, wenn ein Pull Request als bereit für die Überprüfung gekennzeichnet wird.
| `converted_to_draft` | Wird ausgelöst, wenn ein Pull Request in einen Entwurf konvertiert wird.
| `create_review_request` | Wird ausgelöst, wenn ein Review angefordert wird.
| `remove_review_request` | Wird ausgelöst, wenn eine Reviewanforderung entfernt wird.

### `pull_request_review`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `submit` | Wird ausgelöst, wenn ein Review übermittelt wird.
| `dismiss` | Wird ausgelöst, wenn ein Review verworfen wird.
| `delete` | Wird ausgelöst, wenn ein Review gelöscht wird.

### `pull_request_review_comment`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn ein Reviewkommentar hinzugefügt wird.
| `update` | Wird ausgelöst, wenn ein Reviewkommentar geändert wird.
| `delete` | Wird ausgelöst, wenn ein Reviewkommentar gelöscht wird.

### `repo`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `access` | Wird ausgelöst, wenn ein*e Benutzerin die [Sichtbarkeit](/github/administering-a-repository/setting-repository-visibility) eines Repositorys in der Organisation ändert.
| `actions_enabled` | Wird ausgelöst, wenn {% data variables.product.prodname_actions %} für ein Repository aktiviert wird. Kann über die Benutzeroberfläche angezeigt werden. Dieses Ereignis ist nicht enthalten, wenn du über die REST-API auf das Überwachungsprotokoll zugreifst. Weitere Informationen findest du unter [Using the REST API](#using-the-rest-api) („Verwenden der REST-API“).
| `add_member` | Wird ausgelöst, wenn ein*e Benutzer*in eine [Einladung für den Mitarbeiterzugriff auf ein Repository akzeptiert](/articles/inviting-collaborators-to-a-personal-repository).
| `add_topic` | Wird ausgelöst, wenn Repositoryadministrator*innen einem Repository [ein Thema hinzufügen](/articles/classifying-your-repository-with-topics).
| `advanced_security_disabled` | Wird ausgelöst, wenn ein*e Repositoryadministrator*in {% data variables.product.prodname_GH_advanced_security %}-Features für das Repository deaktiviert. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).
| `advanced_security_enabled` | Wird ausgelöst, wenn ein*e Repositoryadministrator*in {% data variables.product.prodname_GH_advanced_security %}-Features für das Repository aktiviert. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).
| `archived` | Wird ausgelöst, wenn Repositoryadministrator*innen [ein Repository archivieren](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Wird ausgelöst, wenn in einem öffentlichen Repository der [anonyme Git-Lesezugriff deaktiviert wird](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository).
| `config.enable_anonymous_git_access` | Wird ausgelöst, wenn in einem öffentlichen Repository der [anonyme Git-Lesezugriff aktiviert wird](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository).
| `config.lock_anonymous_git_access` | Wird ausgelöst, wenn in einem Repository die [anonyme Git-Lesezugriffseinstellung gesperrt wird](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
| `config.unlock_anonymous_git_access` | Wird ausgelöst, wenn in einem Repository die [anonyme Git-Lesezugriffseinstellung entsperrt wird](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create` | Wird ausgelöst, wenn [ein neues Repository erstellt wird](/articles/creating-a-new-repository).{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis für ein Repository erstellt wird. Weitere Informationen findest du unter [Erstellen von verschlüsselten Geheimnissen für ein Repository](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).{% endif %}
| `destroy` | Wird ausgelöst, wenn [ein Repository gelöscht wird](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Wird ausgelöst, wenn ein Repository deaktiviert wird (z. B. aufgrund [unzureichender Mittel](/articles/unlocking-a-locked-account)).{% endif %}
| `enable` | Wird ausgelöst, wenn ein Repository erneut aktiviert wird.{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis entfernt wird.{% endif %}
| `remove_member` | Wird ausgelöst, wenn ein*e Benutzer*in [als Mitarbeiter*in aus einem Repository entfernt wird](/articles/removing-a-collaborator-from-a-personal-repository).
| `register_self_hosted_runner` | Wird ausgelöst, wenn ein neuer selbstgehosteter Runner registriert wird. Weitere Informationen findest du unter [Adding a self-hosted runner to a repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository) („Hinzufügen eines selbstgehosteten Runners zu einem Repository“).
| `remove_self_hosted_runner` | Wird ausgelöst, wenn ein selbstgehosteter Runner entfernt wird. Weitere Informationen findest du unter [Entfernen eines Runners aus einem Repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).
| `remove_topic` | Wird ausgelöst, wenn ein Repository-Administrator ein Thema aus einem Repository entfernt.
| `rename` | Wird ausgelöst, wenn [ein Repository umbenannt wird](/articles/renaming-a-repository).
| `self_hosted_runner_online` | Wird ausgelöst, wenn die Runneranwendung gestartet wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) („Überprüfen des Status eines selbstgehosteten Runners“).
| `self_hosted_runner_offline` | Wird ausgelöst, wenn die Runneranwendung angehalten wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | Wird ausgelöst, wenn die Runneranwendung aktualisiert wird. Kann über die REST-API und die Benutzeroberfläche angezeigt werden. Im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners).{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Wird ausgelöst, wenn die Einstellung für erforderliche Genehmigungen für Workflows aus öffentlichen Forks geändert wird. Weitere Informationen findest du unter [Verwalten von Einstellungen für {% data variables.product.prodname_actions %} für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks).{% endif %}
| `set_actions_retention_limit` | Wird ausgelöst, wenn der Aufbewahrungszeitraum für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle geändert wird. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository).{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Wird ausgelöst, wenn die Richtlinie für Workflows in privaten Repositoryforks geändert wird. Weitere Informationen findest du unter [Verwalten von Einstellungen für {% data variables.product.prodname_actions %} für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks).{% endif %}
| `staff_unlock` | Wird ausgelöst, wenn ein Unternehmensbesitzer oder {% data variables.contact.github_support %} (mit der Genehmigung durch einen Repositoryadministrator) das Repository vorübergehend entsperrt hat. Die Sichtbarkeit des Repositorys wird nicht geändert.
| `transfer` | Wird ausgelöst, wenn [ein Repository übertragen wird](/articles/how-to-transfer-a-repository).
| `transfer_start` | Wird ausgelöst, wenn die Übertragung eines Repositorys initiiert wurde.
| `unarchived` | Wird ausgelöst, wenn ein*e Repositoryadministrator*in die Archivierung eines Repositorys aufhebt.{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis aktualisiert wird.{% endif %}

{% ifversion fpt or ghec %}

### `repository_advisory`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `close` | Wird ausgelöst, wenn jemand eine Sicherheitsempfehlung schließt. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dotcom %}-Sicherheitshinweisen](/github/managing-security-vulnerabilities/about-github-security-advisories).
| `cve_request` | Wird ausgelöst, wenn jemand eine CVE-Nummer (Common Vulnerabilities and Exposures, allgemeine Sicherheitsrisiken und Schwachstellen) von {% data variables.product.prodname_dotcom %} für den Entwurf einer Sicherheitsempfehlung anfordert.
| `github_broadcast` | Wird ausgelöst, wenn {% data variables.product.prodname_dotcom %} eine Sicherheitsempfehlung in der {% data variables.product.prodname_advisory_database %} veröffentlicht.
| `github_withdraw` | Wird ausgelöst, wenn {% data variables.product.prodname_dotcom %} eine Sicherheitsempfehlung zurückzieht, die fälschlicherweise veröffentlicht wurde.
| `open` | Wird ausgelöst, wenn jemand einen Entwurf einer Sicherheitsempfehlung öffnet.
| `publish` | Wird ausgelöst, wenn jemand eine Sicherheitsempfehlung veröffentlicht.
| `reopen` | Wird ausgelöst, wenn jemand einen Entwurf einer Sicherheitsempfehlung erneut öffnet.
| `update` | Wird ausgelöst, wenn jemand den Entwurf einer Sicherheitsempfehlung oder eine veröffentlichte Sicherheitsempfehlung bearbeitet.

### `repository_content_analysis`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `enable` | Wird ausgelöst, wenn ein*e Organisationsbesitzer*in oder eine Person mit Administratorzugriff auf das Repository [Datennutzungseinstellungen für ein privates Repository aktiviert](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `disable` | Wird ausgelöst, wenn ein*e Organisationsbesitzer*in oder eine Person mit Administratorzugriff auf das Repository [Datennutzungseinstellungen für ein privates Repository deaktiviert](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

{% endif %}{% ifversion fpt or ghec %}

### `repository_dependency_graph`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn ein*e Repositorybesitzer*in oder eine Person mit Administratorzugriff auf das Repository das Abhängigkeitsdiagramm für ein {% ifversion fpt or ghec %}privates {% endif %}Repository deaktiviert. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
| `enable` | Wird ausgelöst, wenn ein*e Repositorybesitzer*in oder eine Person mit Administratorzugriff auf das Repository das Abhängigkeitsdiagramm für ein {% ifversion fpt or ghec %}privates {% endif %}Repository aktiviert.

{% endif %}{% ifversion ghec or ghes or ghae %}
### `repository_secret_scanning`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn ein*e Repositorybesitzer*in oder eine Person mit Administratorzugriff auf das Repository die Geheimnisüberprüfung für ein Repository deaktiviert. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning).
| `enable` | Wird ausgelöst, wenn ein*e Repositorybesitzer*in oder eine Person mit Administratorzugriff auf das Repository die Geheimnisüberprüfung für ein Repository aktiviert.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `repository_secret_scanning_custom_pattern`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn ein benutzerdefiniertes Muster für die Geheimnisüberprüfung in einem Repository veröffentlicht wird. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository).
| `update` | Wird ausgelöst, wenn Änderungen an einem benutzerdefinierten Muster für die Geheimnisüberprüfung in einem Repository gespeichert werden. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern).
| `delete` | Wird ausgelöst, wenn ein benutzerdefiniertes Muster für die Geheimnisüberprüfung in einem Repository entfernt wird. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern).

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `repository_secret_scanning_push_protection`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn ein*e Repositorybesitzer*in oder eine Person mit Administratorzugriff auf das Repository die Geheimnisüberprüfung für ein Repository deaktiviert. Weitere Informationen findest du unter [Schützen von Pushs mit Geheimnisüberprüfung](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
| `enable` | Wird ausgelöst, wenn ein*e Repositorybesitzer*in oder eine Person mit Administratorzugriff auf das Repository die Geheimnisüberprüfung für ein Repository aktiviert.

{% endif %}
### `repository_vulnerability_alert`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn {% data variables.product.product_name %} eine {% data variables.product.prodname_dependabot %}-Warnung für ein Repository erstellt, das eine Abhängigkeit mit Sicherheitsrisiken verwendet. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).
| `dismiss` | Wird ausgelöst, wenn ein*e Organisationsbesitzer*in oder eine Person mit Administratorzugriff auf ein Repository eine {% data variables.product.prodname_dependabot %}-Warnung zu einer Abhängigkeit mit Sicherheitsrisiko verwirft.
| `resolve` | Wird ausgelöst, wenn jemand mit Schreibzugriff auf ein Repository Änderungen gepusht hat, um ein Sicherheitsrisiko in einer Projektabhängigkeit zu aktualisieren und aufzulösen.
{% ifversion fpt or ghec %}
### `repository_vulnerability_alerts`-Kategorieaktionen

| Aktion | Beschreibung
|------------------|-------------------
| `authorized_users_teams` | Wird ausgelöst, wenn Organisationsbesitzer*innen oder Personen mit Administratorberechtigungen für das Repository die Liste der Personen oder Teams aktualisieren, die für den Empfang von {% data variables.product.prodname_dependabot_alerts %} für das Repository berechtigt sind. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).
| `disable` | Wird ausgelöst, wenn Repositorybesitzer*innen oder Personen mit Administratorzugriff auf das Repository {% data variables.product.prodname_dependabot_alerts %} deaktivieren.
| `enable` | Wird ausgelöst, wenn Repositorybesitzer*innen oder Personen mit Administratorzugriff auf das Repository {% data variables.product.prodname_dependabot_alerts %} aktivieren.

{% endif %}{% ifversion custom-repository-roles %}
### `role`-Kategorieaktionen
| Aktion | BESCHREIBUNG
|------------------|-------------------
|`create` | Wird ausgelöst, wenn Organisationsbesitzer*innen eine neue benutzerdefinierte Repositoryrolle erstellen. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
|`destroy` | Wird ausgelöst, wenn ein Organisationsbesitzer eine benutzerdefinierte Repositoryrolle löscht. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
|`update` | Wird ausgelöst, wenn Organisationsbesitzer*innen eine vorhandene benutzerdefinierte Repositoryrolle bearbeiten. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).

{% endif %} {% ifversion ghec or ghes or ghae %}
### `secret_scanning`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn ein*e Organisationsbesitzer*in die Geheimnisüberprüfung für alle vorhandenen{% ifversion ghec %} privaten oder internen{% endif %} Repositorys deaktiviert. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning).
| `enable` | Wird ausgelöst, wenn ein*e Organisationsbesitzer*in die Geheimnisüberprüfung für alle vorhandenen{% ifversion ghec %} privaten oder internen{% endif %} Repositorys aktiviert.
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}
### `secret_scanning_alert`-Kategorieaktionen

| Aktion | Beschreibung
|------------------|-------------------
| `create` | Wird ausgelöst, wenn {% data variables.product.prodname_dotcom %} ein offengelegtes Geheimnis erkennt und eine {% data variables.product.prodname_secret_scanning %}-Warnung erstellt. Weitere Informationen findest du unter [Verwalten von Warnungen von {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning).
| `reopen` | Wird ausgelöst, wenn ein*e Benutzer*in eine {% data variables.product.prodname_secret_scanning %}-Warnung erneut öffnet.
| `resolve` | Wird ausgelöst, wenn ein*e Benutzer*in eine {% data variables.product.prodname_secret_scanning %}-Warnung auflöst.
{% endif %}

{% ifversion ghec or ghes or ghae %}
### `secret_scanning_new_repos`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `disable` | Wird ausgelöst, wenn ein*e Organisationsbesitzer*in die Geheimnisüberprüfung für alle neuen{% ifversion ghec %} privaten oder internen{% endif %} Repositorys deaktiviert. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning).
| `enable` | Wird ausgelöst, wenn ein*e Organisationsbesitzer*in die Geheimnisüberprüfung für alle neuen{% ifversion ghec %} privaten oder internen{% endif %} Repositorys aktiviert.
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
### `secret_scanning_push_protection`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `bypass` | Wird ausgelöst, wenn ein*e Benutzer*in den Pushschutz für ein Geheimnis umgeht, das durch geheimes Scannen erkannt wurde. Weitere Informationen findest du unter [Umgehen des Pushschutzes für ein Geheimnis](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret).
{% endif %}

{% ifversion fpt or ghec %}
### `sponsors`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `custom_amount_settings_change` | Wird ausgelöst, wenn du benutzerdefinierte Beträge aktivierst oder deaktivierst oder den vorgeschlagenen benutzerdefinierten Betrag änderst (siehe [Verwalten deiner Sponsoringebenen](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)).
| `repo_funding_links_file_action` | Wird ausgelöst, wenn du die FUNDING-Datei in deinem Repository änderst (siehe [Anzeigen einer Sponsorschaltfläche in deinem Repository](/articles/displaying-a-sponsor-button-in-your-repository)).
| `sponsor_sponsorship_cancel` | Wird ausgelöst, wenn du ein Sponsoring kündigst (siehe [Herabstufen eines Sponsorings](/articles/downgrading-a-sponsorship)).
| `sponsor_sponsorship_create` | Wird ausgelöst, wenn du ein Konto sponserst (siehe [Unterstützen eines Open-Source-Mitwirkenden](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)).
| `sponsor_sponsorship_payment_complete` | Wird ausgelöst, nachdem du ein Konto gesponsert hast und deine Zahlung verarbeitet wurde (siehe [Unterstützen eines Open-Source-Mitwirkenden](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor).)
| `sponsor_sponsorship_preference_change` | Wird ausgelöst, wenn du änderst, ob du E-Mail-Updates von einem gesponserten Konto empfängst (siehe [Verwalten deines Sponsorings](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)).
| `sponsor_sponsorship_tier_change` | Wird ausgelöst, wenn du dein Sponsoring aktualisierst oder herabstufst (siehe [Aktualisieren eines Sponsorings](/articles/upgrading-a-sponsorship) und [Herabstufen eines Sponsorings](/articles/downgrading-a-sponsorship)).
| `sponsored_developer_approve` | Wird ausgelöst, wenn dein {% data variables.product.prodname_sponsors %}-Konto genehmigt wurde (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für deine Organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)).
| `sponsored_developer_create` | Wird ausgelöst, wenn dein {% data variables.product.prodname_sponsors %}-Konto erstellt wurde (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für deine Organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)).
| `sponsored_developer_disable` | Wird ausgelöst, wenn dein {% data variables.product.prodname_sponsors %}-Konto deaktiviert wird.
| `sponsored_developer_redraft` | Wird ausgelöst, wenn dein {% data variables.product.prodname_sponsors %}-Konto vom genehmigten Zustand in den Entwurfszustand zurückversetzt wurde.
| `sponsored_developer_profile_update` | Wird ausgelöst, wenn du dein gesponsertes Organisationsprofil bearbeitest (siehe [Bearbeiten deiner Profildetails für {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)).
| `sponsored_developer_request_approval` | Wird ausgelöst, wenn du deine Anwendung für {% data variables.product.prodname_sponsors %} zur Genehmigung übermittelst (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für deine Organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)).
| `sponsored_developer_tier_description_update` | Wird ausgelöst, wenn du die Beschreibung für eine Sponsoringebene änderst (siehe [Verwalten deiner Sponsoringebenen](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)).
| `sponsored_developer_update_newsletter_send` | Wird ausgelöst, wenn du ein E-Mail-Update an deine Sponsoren sendest (siehe [Kontaktieren deiner Sponsoren](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)).
| `waitlist_invite_sponsored_developer` | Wird ausgelöst, wenn du eingeladen wirst, {% data variables.product.prodname_sponsors %} von der Warteliste beizutreten (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für deine Organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)).
| `waitlist_join` | Wird ausgelöst, wenn du dich auf die Warteliste setzen lässt, um eine gesponserte Organisation zu werden (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für deine Organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)).
{% endif %}

### `team`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `add_member` | Wird ausgelöst, wenn ein Organisationsmitglied [zu einem Team hinzugefügt wird](/articles/adding-organization-members-to-a-team).
| `add_repository` | Wird ausgelöst, wenn ein Team die Kontrolle über ein Repository erhält.
| `change_parent_team` | Wird ausgelöst, wenn ein untergeordnetes Team erstellt oder [das übergeordnete Team eines untergeordneten Teams geändert wird](/articles/moving-a-team-in-your-organization-s-hierarchy).
| `change_privacy` | Wird ausgelöst, wenn die Datenschutzstufe eines Teams geändert wird.
| `create` | Wird bei der Erstellung eines neuen Teams ausgelöst.
| `demote_maintainer` | Wird ausgelöst, wenn ein*e Benutzer*in von einem Teambetreuer zu einem Teammitglied herabgestuft wurde. Weitere Informationen findest du unter [Zuweisen der Maintainerrolle für ein Team zu einem Teammitglied](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).
| `destroy` | Wird ausgelöst, wenn ein Team aus der Organisation gelöscht wird.
| `team.promote_maintainer` | Wird ausgelöst, wenn ein*e Benutzer*in von einem Teammitglied zu einem Teambetreuer hochgestuft wurde. Weitere Informationen findest du unter [Zuweisen der Maintainerrolle für ein Team zu einem Teammitglied](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).
| `remove_member` | Wird ausgelöst, wenn ein Mitglied einer Organisation [aus einem Team entfernt](/articles/removing-organization-members-from-a-team) wird.
| `remove_repository` | Wird ausgelöst, wenn ein Repository nicht mehr unter der Kontrolle eines Teams steht.

### `team_discussions`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|---|---|
| `disable` | Wird ausgelöst, wenn ein Organisationsinhaber für eine Organisation Teamdiskussionen deaktiviert. Weitere Informationen findest du unter [Deaktivieren von Teamdiskussionen für deine Organisation](/articles/disabling-team-discussions-for-your-organization).
| `enable` | Wird ausgelöst, wenn ein Organisationsinhaber für eine Organisation Teamdiskussionen aktiviert.

### `workflows`-Kategorieaktionen

{% data reusables.actions.actions-audit-events-workflow %}
## Weiterführende Themen

- [Schützen deiner Organisation](/articles/keeping-your-organization-secure){% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {%- ifversion fpt or ghec %}
- [Exportieren von Mitgliedsinformationen für deine Organisation](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization){% endif %} {%- endif %}
