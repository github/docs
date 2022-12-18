---
title: Überwachungsprotokollereignisse für dein Unternehmen
intro: 'Erfahre mehr über Überwachungsprotokollereignisse, die für dein Unternehmen aufgezeichnet wurden.'
shortTitle: Audit log events
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can interact with the audit log.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/articles/audited-actions
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
  - /admin/user-management/monitoring-activity-in-your-enterprise/audited-actions
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 5a936791aff8706cd04773bb0f7428cd11f29329
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183948'
---
{% ifversion ghec%}
## Überwachungsprotokollereignisse für dein Unternehmen

Der Umfang der Ereignisse, die im Überwachungsprotokoll deines Unternehmens angezeigt werden, hängt davon ab, ob dein Unternehmen {% data variables.product.prodname_emus %} verwendet. Weitere Informationen zu {% data variables.product.prodname_emus %} findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users).

- Wenn dein Unternehmen {% data variables.product.prodname_emus %} nicht verwendet, enthält das Überwachungsprotokoll nur Ereignisse im Zusammenhang mit dem Unternehmenskonto und den in diesem Artikel aufgeführten Organisationen innerhalb des Unternehmenskontos.
- Wenn dein Unternehmen {% data variables.product.prodname_emus %} verwendet, enthält das Überwachungsprotokoll auch Benutzerereignisse für {% data variables.enterprise.prodname_managed_users %}, z. B. jede Anmeldung der Benutzer bei {% data variables.product.product_name %} und Aktionen, die sie innerhalb ihres Benutzerkontos durchführen. Eine Liste dieser Benutzerkontoereignisse findest du unter [Überprüfen deines Sicherheitsprotokolls](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log#security-log-actions).
{% endif %}

{%- ifversion fpt or ghec %}
## `account`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `account.billing_plan_change` | Der Abrechnungszyklus einer Organisation wurde geändert. Weitere Informationen findest du unter [Ändern der Dauer des Abrechnungszyklus](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle).
| `account.plan_change` | Das Abonnement einer Organisation wurde geändert. Weitere Informationen findest du unter [Informationen zur Abrechnung für GitHub-Konten](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts).
| `account.pending_plan_change` | Ein Organisationsbesitzer oder Abrechnungsmanager hat ein kostenpflichtiges Abonnement gekündigt oder herabgestuft. Weitere Informationen findest du unter [Auswirkungen von Upgrades oder Downgrades auf den Abrechnungsprozess](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process).
| `account.pending_subscription_change` | Eine kostenlose Testversion von {% data variables.product.prodname_marketplace %} wurde gestartet oder ist abgelaufen. Weitere Informationen findest du unter [Informationen zur Abrechnung für den GitHub Marketplace](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace).
{%- endif %}

{%- ifversion fpt or ghec %}
## `advisory_credit`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `advisory_credit.accept` | Jemand hat eine Gutschrift für einen Sicherheitshinweis akzeptiert. Weitere Informationen findest du unter [Bearbeiten eines Sicherheitshinweises](/github/managing-security-vulnerabilities/editing-a-security-advisory).
| `advisory_credit.create` | Der Administrator eines Sicherheitshinweises hat jemanden dem Gutschriftenabschnitt hinzugefügt.
| `advisory_credit.decline` | Jemand hat eine Gutschrift für einen Sicherheitshinweis abgelehnt.
| `advisory_credit.destroy` | Der Administrator eines Sicherheitshinweises hat jemanden aus dem Gutschriftenabschnitt entfernt.
{%- endif %}

## `artifact`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `artifact.destroy`    | Ein Workflowausführungsartefakt wurde manuell gelöscht.

{%- ifversion audit-log-streaming %}
## `audit_log_streaming`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `audit_log_streaming.check` | Eine manuelle Überprüfung des Endpunkts wurde vorgenommen, der für das Streaming von Überwachungsprotokollen konfiguriert ist.
| `audit_log_streaming.create` | Ein Endpunkt für das Streaming von Überwachungsprotokollen wurde hinzugefügt.
| `audit_log_streaming.update` | Eine Endpunktkonfiguration wurde für das Streaming von Überwachungsprotokollen aktualisiert, z. B. wurde der Stream angehalten, aktiviert oder deaktiviert.
| `audit_log_streaming.destroy` | Ein Überwachungsprotokoll-Streamingendpunkt wurde gelöscht.
{%- endif %}

{%- ifversion fpt or ghec %}
## `billing`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `billing.change_billing_type` | Eine Organisation hat die Zahlungsmethode für {% data variables.product.prodname_dotcom %} geändert. Weitere Informationen findest du unter [Hinzufügen oder Bearbeiten einer Zahlungsmethode](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method).
| `billing.change_email` | Die Rechnungs-E-Mail-Adresse einer Organisation wurde geändert. Weitere Informationen findest du unter [Festlegen deiner Rechnungs-E-Mail-Adresse](/billing/managing-your-github-billing-settings/setting-your-billing-email).
{%- endif %}

## `business`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `business.add_admin` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} wurde einem Unternehmen hinzugefügt.
{%- ifversion ghec %} | `business.add_billing_manager` | Ein Abrechnungsmanager wurde einem Unternehmen hinzugefügt.
{%- endif %} | `business.add_organization` | Eine Organisation wurde einem Unternehmen hinzugefügt.
{%- ifversion ghec %} | `business.add_support_entitlee` | Eine Supportberechtigung wurde einem Mitglied eines Unternehmens hinzugefügt. Weitere Informationen findest du unter [Verwalten von Supportberechtigungen für dein Unternehmen](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).
{%- endif %} {%- ifversion ghes or ghae %} | `business.advanced_security_policy_update` | Ein*e Unternehmensbesitzer*in{% ifversion ghes %} oder Websiteadministrator*in{% endif %} hat eine Richtlinie für {% data variables.product.prodname_GH_advanced_security %} erstellt, aktualisiert oder entfernt. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_advanced_security %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise).
{%- endif %} {%- ifversion ghec %} | `business.cancel_admin_invitation` | Eine Einladung zum Übernehmen der Rolle eines Besitzers{% ifversion ghes %} oder Websiteadministrators{% endif %} eines Unternehmens wurde abgebrochen.
| `business.cancel_billing_manager_invitation` | Eine Einladung zum Übernehmen der Rolle eines Abrechnungsmanagers eines Unternehmens wurde abgebrochen.
{%- endif %} {%- ifversion ghes %} | `business.clear_actions_settings` | Ein Unternehmensbesitzer oder Websiteadministrator hat {% data variables.product.prodname_actions %}-Richtlinieneinstellungen für ein Unternehmen gelöscht. Weitere Informationen findest du unter [Erzwingen von Richtlinien für GitHub Actions in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).
{%- endif %} | `business.clear_default_repository_permission` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Richtlinieneinstellung für Basisrepositoryberechtigungen für ein Unternehmen gelöscht. Weitere Informationen findest du unter [Erzwingen einer Richtlinie für Basisrepositoryberechtigungen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions).
| `business.clear_members_can_create_repos`      | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat eine Einschränkung für die Repositoryerstellung in Organisationen im Unternehmen gelöscht. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation).
| `business.create`                              | Ein Unternehmen wurde erstellt.
{%- ifversion ghec %} | `business.disable_oidc` | OIDC-SSO (Single Sign-On) wurde für ein Unternehmen deaktiviert. Weitere Informationen findest du unter [Konfigurieren von OIDC für {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users).
| `business.disable_saml` | SAML-SSO (Single Sign-On) wurde für ein Unternehmen deaktiviert.
{%- endif %} | `business.disable_two_factor_requirement` | Die Anforderung, dass Mitglieder für den Zugriff auf ein Unternehmen die zweistufige Authentifizierung aktiviert haben müssen, wurde deaktiviert.
{%- ifversion ghec %} | `business.enable_oidc` | OIDC-SSO (Single Sign-On) wurde für ein Unternehmen aktiviert. Weitere Informationen findest du unter [Konfigurieren von OIDC für {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users).
| `business.enable_saml` | SAML-SSO (Single Sign-On) wurde für ein Unternehmen aktiviert.
{%- endif %} | `business.enable_two_factor_requirement` | Die Anforderung, dass Mitglieder für den Zugriff auf ein Unternehmen die zweistufige Authentifizierung aktiviert haben müssen, wurde aktiviert.
{%- ifversion ghec %} | `business.enterprise_server_license_download` | Eine {% data variables.product.prodname_ghe_server %}-Lizenz wurde heruntergeladen.
| `business.import_license_usage` | Lizenznutzungsinformationen wurden aus einer {% data variables.product.prodname_ghe_server %}-Instanz in ein Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} importiert.
| `business.invite_admin` | Eine Einladung zum Übernehmen der Rolle eines Unternehmensbesitzers{% ifversion ghes %} oder Websiteadministrators{% endif %} eines Unternehmens wurde gesendet.
| `business.invite_billing_manager` | Eine Einladung zum Übernehmen der Rolle eines Abrechnungsmanagers eines Unternehmens wurde gesendet.
{%- endif %} | `business.members_can_update_protected_branches.clear` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Festlegung einer Richtlinie aufgehoben, die steuert, ob Mitglieder eines Unternehmens geschützte Branches in Repositorys für einzelne Organisationen aktualisieren können. Organisationsadministratoren können auswählen, ob die Aktualisierung von Einstellungen geschützter Branches zulässig ist.
| `business.members_can_update_protected_branches.disable` | Die Möglichkeit für Unternehmensmitglieder, Branchschutzregeln zu aktualisieren, wurde deaktiviert. Nur Unternehmensbesitzer können geschützte Branches aktualisieren.
| `business.members_can_update_protected_branches.enable` | Die Möglichkeit für Unternehmensmitglieder, Branchschutzregeln zu aktualisieren, wurde aktiviert. Unternehmensbesitzer und Mitglieder können geschützte Branches aktualisieren.
| `business.remove_admin` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} wurde aus einem Unternehmen entfernt.
{%- ifversion ghes %} | `business.referrer_override_enable` | Ein*e Unternehmensbesitzer*in oder Websiteadministrator*in hat die Außerkraftsetzung der Referrerrichtlinie aktiviert. Weitere Informationen findest du unter [Konfigurieren der Referrerrichtlinie für dein Unternehmen](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise).
| `business.referrer_override_disable` | Ein Unternehmensbesitzer oder Websiteadministrator hat die Außerkraftsetzung der Referrerrichtlinie deaktiviert. Weitere Informationen findest du unter [Konfigurieren der Referrerrichtlinie für dein Unternehmen](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise).
{%- endif %} {%- ifversion ghec %} | `business.remove_billing_manager` | Ein Abrechnungsmanager wurde aus einem Unternehmen entfernt.
| `business.remove_member` | Ein Mitglied wurde aus einem Unternehmen entfernt.
{%- endif %} | `business.remove_organization` | Eine Organisation wurde aus einem Unternehmen entfernt.
{%- ifversion ghec %} | `business.remove_support_entitlee` | Eine Supportberechtigung wurde für ein Mitglied eines Unternehmens entfernt. Weitere Informationen findest du unter [Verwalten von Supportberechtigungen für dein Unternehmen](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).
{%- endif %} | `business.rename_slug` | Das Platzhalterfeld für die Unternehmens-URL wurde umbenannt.
{%- ifversion ghec %} | `business.revoke_external_identity` | Die externe Identität für ein Mitglied in einem Unternehmen wurde widerrufen.
| `business.revoke_sso_session` | Die SAML-SSO-Sitzung für ein Mitglied in einem Unternehmen wurde widerrufen.
{%- endif %} {%- ifversion ghec %} | `business.set_actions_fork_pr_approvals_policy` | Die Einstellung zum Anfordern von Genehmigungen für Workflows aus öffentlichen Forks wurde für ein Unternehmen geändert. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).
{%- endif %} | `business.set_actions_retention_limit` | Der Aufbewahrungszeitraum für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle wurde für ein Unternehmen geändert. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in einem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise).
{%- ifversion ghec or ghes %} | `business.set_fork_pr_workflows_policy` | Die Richtlinie für Workflows für private Repositoryforks wurde geändert. Weitere Informationen findest du unter {% ifversion ghec %}[Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in einem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Aktivieren von Workflows für private Repositoryforks](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}.
{%- endif %} {%- ifversion audit-log-sso-response-events %} |`business.sso_response` | Beim Versuch eines Mitglieds, sich bei deinem Unternehmen zu authentifizieren, wurde eine SAML-SSO-Antwort (Single Sign-On) generiert. Dieses Ereignis steht nur über die Überwachungsprotokollstreaming und die REST-API zur Verfügung.
{%- endif %} {%- ifversion ghes %} | `business.update_actions_settings` | Ein Unternehmensbesitzer oder Websiteadministrator hat {% data variables.product.prodname_actions %}-Richtlinieneinstellungen für ein Unternehmen aktualisiert. Weitere Informationen findest du unter [Erzwingen von Richtlinien für GitHub Actions in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).
{%- endif %} | `business.update_default_repository_permission` | Die Einstellung für die Basisrepositoryberechtigung wurde für alle Organisationen in einem Unternehmen aktualisiert. Weitere Informationen findest du unter [Erzwingen einer Richtlinie für Basisrepositoryberechtigungen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions).
| `business.update_member_repository_creation_permission` | Die Einstellung für die Repositoryerstellung wurde für ein Unternehmen aktualisiert. Weitere Informationen findest du unter [Erzwingen einer Richtlinie für die Repositoryerstellung](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation).
| `business.update_member_repository_invitation_permission` | Die Richtlinieneinstellung für Unternehmensmitglieder, die externe Mitarbeiter zu Repositorys einladen, wurde aktualisiert. Weitere Informationen findest du unter [Erzwingen einer Richtlinie zum Einladen externer Mitarbeiter zu Repositorys](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories).
{%- ifversion ghec %} | `business.update_saml_provider_settings` | Die SAML-Single Sign-On-Anbietereinstellungen für ein Unternehmen wurden aktualisiert.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## `business_advanced_security`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `business_advanced_security.disabled` | {% data variables.product.prodname_GH_advanced_security %} wurde für dein Unternehmen deaktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_advanced_security.enabled` | {% data variables.product.prodname_GH_advanced_security %} wurde für dein Unternehmen aktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_advanced_security.disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} wurde für neue Repositorys in deinem Unternehmen deaktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_advanced_security.enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} wurde für neue Repositorys in deinem Unternehmen aktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `business_secret_scanning.disable` | {% data variables.product.prodname_secret_scanning_caps %} wurde für dein Unternehmen deaktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning.enable` | {% data variables.product.prodname_secret_scanning_caps %} wurde für dein Unternehmen aktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning.disabled_for_new_repos` | {% data variables.product.prodname_secret_scanning_caps %} wurde für neue Repositorys in deinem Unternehmen deaktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning.enabled_for_new_repos` | {% data variables.product.prodname_secret_scanning_caps %} wurde für neue Repositorys in deinem Unternehmen aktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## `business_secret_scanning_custom_pattern`-Kategorieaktionen

Aktion                        | BESCHREIBUNG
----------------------------- | -----------------------------------------------
| `business_secret_scanning_custom_pattern.create` | Ein benutzerdefiniertes Muster auf Unternehmensebene wird für die Geheimnisüberprüfung veröffentlicht. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account).
| `business_secret_scanning_custom_pattern.delete` | Ein benutzerdefiniertes Muster auf Unternehmensebene wird aus der Geheimnisüberprüfung entfernt.
| `business_secret_scanning_custom_pattern.update` | Änderungen an einem benutzerdefinierten Muster auf Unternehmensebene werden für die Geheimnisüberprüfung gespeichert.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning_push_protection`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `business_secret_scanning_push_protection.disable` | Pushschutz für {% data variables.product.prodname_secret_scanning %} wurde für dein Unternehmen deaktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection.enable` | Pushschutz für {% data variables.product.prodname_secret_scanning %} wurde für dein Unternehmen aktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection.disabled_for_new_repos` | Pushschutz für {% data variables.product.prodname_secret_scanning %} wurde für neue Repositorys in deinem Unternehmen deaktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection.enabled_for_new_repos` | Pushschutz für {% data variables.product.prodname_secret_scanning %} wurde für neue Repositorys in deinem Unternehmen aktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning_push_protection_custom_message`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `business_secret_scanning_push_protection_custom_message.disable` | Benutzerdefinierte Nachrichten, die von einem versuchten Push an ein Repository mit Pushschutz ausgelöst werden, wurden für dein Unternehmen deaktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection_custom_message.enable` | Benutzerdefinierte Nachrichten, die von einem versuchten Push an ein Repository mit Pushschutz ausgelöst werden, wurden für dein Unternehmen aktiviert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection_custom_message.update` | Benutzerdefinierte Nachrichten, die von einem versuchten Push an ein Repository mit Pushschutz ausgelöst werden, wurden für dein Unternehmen aktualisiert. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endif %}

## `checks`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `checks.auto_trigger_disabled` | Die automatische Erstellung von Überprüfungssammlungen wurde für ein Repository in der Organisation oder im Unternehmen deaktiviert. Weitere Informationen findest du unter [Aktualisieren von Repositoryeinstellungen für Überprüfungssammlungen](/rest/reference/checks#update-repository-preferences-for-check-suites).
| `checks.auto_trigger_enabled` | Die automatische Erstellung von Überprüfungssammlungen wurde für ein Repository in der Organisation oder im Unternehmen aktiviert. Weitere Informationen findest du unter [Aktualisieren von Repositoryeinstellungen für Überprüfungssammlungen](/rest/reference/checks#update-repository-preferences-for-check-suites).
{%- ifversion fpt or ghec %} | `checks.delete_logs` | Protokolle in einer Überprüfungssammlung wurden gelöscht.
{%- endif %}

{%- ifversion fpt or ghec %}
## `codespaces`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `codespaces.connect` | Ein Codespace wurde gestartet.
| `codespaces.create` | Ein Benutzer [hat einen Codespace erstellt](/github/developing-online-with-codespaces/creating-a-codespace).
| `codespaces.destroy` | Ein Benutzer [hat einen Codespace gelöscht](/github/developing-online-with-codespaces/deleting-a-codespace).
| `codespaces.allow_permissions` | Ein Codespace mit benutzerdefinierten Berechtigungen aus der Datei `devcontainer.json` wurde gestartet.
| `codespaces.attempted_to_create_from_prebuild` | Es wurde versucht, einen Codespace aus einem Vorabbuild zu erstellen.
| `codespaces.create_an_org_secret` | Ein*e Benutzer*in hat ein [Geheimnis für {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) auf Organisationsebene erstellt.
| `codespaces.update_an_org_secret` | Ein*e Benutzer*in hat ein [Geheimnis für {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) auf Organisationsebene aktualisiert.
| `codespaces.remove_an_org_secret` | Ein*e Benutzer*in hat ein [Geheimnis für {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) auf Organisationsebene entfernt.
| `codespaces.manage_access_and_security` | Ein Benutzer hat aktualisiert, [auf welche Repositorys ein Codespace zugreifen kann](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{%- endif %}

{%- ifversion fpt or ghec %}
## `commit_comment`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `commit_comment.destroy` | Ein Commitkommentar wurde gelöscht.
| `commit_comment.update` | Ein Commitkommentar wurde aktualisiert.
{%- endif %}

{%- ifversion ghes %}
## `config_entry`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `config_entry.create` | Eine Konfigurationseinstellung wurde erstellt. Diese Ereignisse sind nur im Überwachungsprotokoll des Websiteadministrators sichtbar. Die Art der aufgezeichneten Ereignisse bezieht sich auf Folgendes:</br>– GitHub Enterprise-Einstellungen und -richtlinien</br>– Berechtigungen und Einstellungen für Organisationen und Repositorys</br>– Git-, Git LFS-, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}-, Projekt- und Codesicherheitseinstellungen
| `config_entry.destroy` | Eine Konfigurationseinstellung wurde gelöscht. Diese Ereignisse sind nur im Überwachungsprotokoll des Websiteadministrators sichtbar. Die Art der aufgezeichneten Ereignisse bezieht sich auf Folgendes:</br>– GitHub Enterprise-Einstellungen und -richtlinien</br>– Berechtigungen und Einstellungen für Organisationen und Repositorys</br>– Git-, Git LFS-, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}-, Projekt- und Codesicherheitseinstellungen
| `config_entry.update` | Eine Konfigurationseinstellung wurde bearbeitet. Diese Ereignisse sind nur im Überwachungsprotokoll des Websiteadministrators sichtbar. Die Art der aufgezeichneten Ereignisse bezieht sich auf Folgendes:</br>– GitHub Enterprise-Einstellungen und -richtlinien</br>– Berechtigungen und Einstellungen für Organisationen und Repositorys</br>– Git-, Git LFS-, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}-, Projekt- und Codesicherheitseinstellungen
{%- endif %}

## `dependabot_alerts`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `dependabot_alerts.disable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat {% data variables.product.prodname_dependabot_alerts %} für alle vorhandenen {% ifversion fpt or ghec %}privaten {% endif %}Repositorys deaktiviert. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependabot_alerts.enable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat {% data variables.product.prodname_dependabot_alerts %} für alle vorhandenen {% ifversion fpt or ghec %}privaten {% endif %}Repositorys aktiviert.

## `dependabot_alerts_new_repos`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `dependabot_alerts_new_repos.disable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat {% data variables.product.prodname_dependabot_alerts %} für alle neuen {% ifversion fpt or ghec %}privaten {% endif %}Repositorys deaktiviert. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependabot_alerts_new_repos.enable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat {% data variables.product.prodname_dependabot_alerts %} für alle neuen {% ifversion fpt or ghec %}privaten {% endif %}Repositorys aktiviert.

## `dependabot_repository_access`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `dependabot_repository_access.repositories_updated` | Die Repositorys, auf die {% data variables.product.prodname_dependabot %} zugreifen kann, wurden aktualisiert.

{%- ifversion fpt or ghec or ghes %}
## `dependabot_security_updates`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `dependabot_security_updates.disable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat {% data variables.product.prodname_dependabot_security_updates %} für alle vorhandenen Repositorys deaktiviert. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependabot_security_updates.enable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat {% data variables.product.prodname_dependabot_security_updates %} für alle vorhandenen Repositorys aktiviert.

## `dependabot_security_updates_new_repos`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `dependabot_security_updates_new_repos.disable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat {% data variables.product.prodname_dependabot_security_updates %} für alle neuen Repositorys deaktiviert. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependabot_security_updates_new_repos.enable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat {% data variables.product.prodname_dependabot_security_updates %} für alle neuen Repositorys aktiviert.
{%- endif %}

## `dependency_graph`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `dependency_graph.disable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat das Abhängigkeitsdiagramm für alle vorhandenen Repositorys deaktiviert. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependency_graph.enable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat das Abhängigkeitsdiagramm für alle vorhandenen Repositorys aktiviert.

## `dependency_graph_new_repos`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `dependency_graph_new_repos.disable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat das Abhängigkeitsdiagramm für alle neuen Repositorys deaktiviert. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependency_graph_new_repos.enable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat das Abhängigkeitsdiagramm für alle neuen Repositorys aktiviert.

{%- ifversion fpt or ghec %}
## `discussion`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `discussion.destroy` | Eine Teamdiskussion wurde gelöscht.

## `discussion_comment`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `discussion_comment.destroy` | Ein [Kommentar zu einem Teamdiskussionsbeitrag wurde gelöscht](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_comment.update` | Ein [Kommentar zu einem Teamdiskussionsbeitrag wurde bearbeitet](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).

## `discussion_post`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `discussion_post.destroy` | Ein [Teamdiskussionsbeitrag wurde gelöscht](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).
| `discussion_post.update` | Ein [Teamdiskussionsbeitrag wurde bearbeitet](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).

## `discussion_post_reply`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `discussion_post_reply.destroy` | Eine [Antwort auf einen Teamdiskussionsbeitrag wurde gelöscht](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_post_reply.update` | Eine [Antwort auf einen Teamdiskussionsbeitrag wurde bearbeitet](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).
{%- endif %}

{%- ifversion ghec or ghes %}
## `dotcom_connection`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `dotcom_connection.create` | Eine {% data variables.product.prodname_github_connect %}-Verbindung mit {% data variables.product.prodname_dotcom_the_website %} wurde erstellt.
| `dotcom_connection.destroy` | Eine {% data variables.product.prodname_github_connect %}-Verbindung mit {% data variables.product.prodname_dotcom_the_website %} wurde gelöscht.
| `dotcom_connection.token_updated` | Das {% data variables.product.prodname_github_connect %}-Verbindungstoken für {% data variables.product.prodname_dotcom_the_website %} wurde aktualisiert.
| `dotcom_connection.upload_license_usage` | Die {% data variables.product.prodname_ghe_server %}-Lizenznutzung wurde manuell in die {% data variables.product.prodname_ghe_cloud %} hochgeladen.
| `dotcom_connection.upload_usage_metrics` | {% data variables.product.prodname_ghe_server %}-Nutzungsmetriken wurden nach {% data variables.product.prodname_dotcom_the_website %} hochgeladen.
{%- endif %}

## `enterprise`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `enterprise.config.disable_anonymous_git_access`   | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat den anonymen Git-Lesezugriff für Repositorys im Unternehmen deaktiviert. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access).
| `enterprise.config.enable_anonymous_git_access`   | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat den anonymen Git-Lesezugriff für Repositorys im Unternehmen aktiviert. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access).
| `enterprise.config.lock_anonymous_git_access`   | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat den anonymen Git-Lesezugriff gesperrt, um zu verhindern, dass Repositoryadministratoren vorhandene Einstellungen für den anonymen Git-Lesezugriff für Repositorys im Unternehmen ändern. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access).
| `enterprise.config.unlock_anonymous_git_access` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Sperre des anonymen Git-Lesezugriffs aufgehoben, um Repositoryadministratoren das Ändern vorhandener Einstellungen für den anonymen Git-Lesezugriff für Repositorys im Unternehmen zu gestatten. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access).
| `enterprise.register_self_hosted_runner` | Ein neuer selbstgehosteter {% data variables.product.prodname_actions %}-Runner wurde registriert. Weitere Informationen findest du unter [Hinzufügen eines selbstgehosteten Runners zu einem Repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository).
| `enterprise.remove_self_hosted_runner` | Ein selbstgehosteter {% data variables.product.prodname_actions %}-Runner wurde entfernt. Weitere Informationen findest du unter [Entfernen eines Runners aus einem Repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).
| `enterprise.runner_group_created` | Eine selbstgehostete {% data variables.product.prodname_actions %}-Runnergruppe wurde erstellt. Weitere Informationen findest du unter [Erstellen einer selbstgehosteten Runnergruppe für eine Organisation](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization).
| `enterprise.runner_group_removed` | Eine selbstgehostete {% data variables.product.prodname_actions %}-Runnergruppe wurde entfernt. Weitere Informationen findest du unter [Entfernen einer selbstgehosteten Runnergruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group).
| `enterprise.runner_group_renamed` | Eine selbstgehostete {% data variables.product.prodname_actions %}-Runnergruppe wurde umbenannt. Weitere Informationen findest du unter [Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `enterprise.runner_group_updated` | Die Konfiguration einer selbstgehosteten {% data variables.product.prodname_actions %}-Runnergruppe wurde geändert. Weitere Informationen findest du unter [Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `enterprise.runner_group_runner_removed` |  Die REST-API wurde verwendet, um einen selbstgehosteten {% data variables.product.prodname_actions %}-Runner aus einer Gruppe zu entfernen. Weitere Informationen findest du unter [Entfernen eines selbstgehosteten Runners aus einer Gruppe für eine Organisation](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization).
| `enterprise.runner_group_runners_added` | Ein selbstgehosteter {% data variables.product.prodname_actions %}-Runner wurde einer Gruppe hinzugefügt. Weitere Informationen findest du unter [Verschieben eines selbstgehosteten Runners in eine Gruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `enterprise.runner_group_runners_updated`|  Die Mitgliederliste einer {% data variables.product.prodname_actions %}-Runnergruppe wurde aktualisiert. Weitere Informationen findest du unter [Festlegen selbstgehosteter Runner in einer Gruppe für eine Organisation](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization).
{%- ifversion ghec %} | `enterprise.runner_group_visiblity_updated` | Die Sichtbarkeit einer selbstgehosteten {% data variables.product.prodname_actions %}-Runnergruppe wurde über die REST-API aktualisiert. Weitere Informationen findest du unter [Aktualisieren einer selbstgehosteten Runnergruppe für eine Organisation](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `enterprise.self_hosted_runner_online` | Die {% data variables.product.prodname_actions %}-Runneranwendung wurde gestartet. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `enterprise.self_hosted_runner_offline` | Die {% data variables.product.prodname_actions %}-Runneranwendung wurde beendet. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
{%- endif %} {%- ifversion ghec or ghes %} | `enterprise.self_hosted_runner_updated` | Die {% data variables.product.prodname_actions %}-Runneranwendung wurde aktualisiert. Kann über die REST-API und die Benutzeroberfläche angezeigt werden. Im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)“.
{%- endif %}

{%- ifversion ghec %}
## `enterprise_domain`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `enterprise_domain.approve` | Eine Unternehmensdomäne wurde für ein Unternehmen genehmigt. Weitere Informationen findest du unter [Genehmigen einer Domäne für dein Unternehmenskonto](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account).
| `enterprise_domain.create` | Eine Unternehmensdomäne wurde einem Unternehmen hinzugefügt. Weitere Informationen findest du unter [Überprüfen einer Domäne für dein Unternehmenskonto](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account).
| `enterprise_domain.destroy` | Eine Unternehmensdomäne wurde aus einem Unternehmen entfernt. Weitere Informationen findest du unter [Entfernen einer genehmigten oder überprüften Domäne](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain).
| `enterprise_domain.verify` | Eine Unternehmensdomäne wurde für ein Unternehmen überprüft. Weitere Informationen findest du unter [Überprüfen einer Domäne für dein Unternehmenskonto](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account).

## `enterprise_installation`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `enterprise_installation.create` | Die einer {% data variables.product.prodname_github_connect %}-Unternehmensverbindung zugeordnete {% data variables.product.prodname_github_app %} wurde erstellt.
| `enterprise_installation.destroy` | Die einer {% data variables.product.prodname_github_connect %}-Unternehmensverbindung zugeordnete {% data variables.product.prodname_github_app %} wurde gelöscht.
| `enterprise_installation.token_updated` | Das Token einer {% data variables.product.prodname_github_app %}, die einer {% data variables.product.prodname_github_connect %}-Unternehmensverbindung zugeordnet ist, wurde aktualisiert.
{%- endif %}

{%- ifversion fpt or ghec %}
## `environment`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `environment.add_protection_rule` | Eine {% data variables.product.prodname_actions %}-Umgebungsschutzregel wurde über die API erstellt. Weitere Informationen findest du unter [Umweltschutzregeln](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules).
| `environment.create_actions_secret` | Ein Geheimnis für eine {% data variables.product.prodname_actions %}-Umgebung wurde über die API erstellt. Weitere Informationen findest du unter [Umgebungsgeheimnisse](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).
| `environment.delete` | Eine Umgebung wurde über die API gelöscht. Weitere Informationen findest du unter [Löschen einer Umgebung](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment).
| `environment.remove_actions_secret` | Ein Geheimnis für eine {% data variables.product.prodname_actions %}-Umgebung wurde über die API gelöscht. Weitere Informationen findest du unter [Umgebungsgeheimnisse](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).
| `environment.remove_protection_rule` | Eine {% data variables.product.prodname_actions %}-Umgebungsschutzregel wurde über die API gelöscht. Weitere Informationen findest du unter [Umweltschutzregeln](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules).
| `environment.update_actions_secret` | Ein Geheimnis für eine {% data variables.product.prodname_actions %}-Umgebung wurde über die API aktualisiert. Weitere Informationen findest du unter [Umgebungsgeheimnisse](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).
| `environment.update_protection_rule` | Eine {% data variables.product.prodname_actions %}-Umgebungsschutzregel wurde über die API aktualisiert. Weitere Informationen findest du unter [Umweltschutzregeln](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules).
{%- endif %}

{%- ifversion ghae %}
## `external_group`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `external_group.delete` | Eine Okta-Gruppe wurde gelöscht. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_group.link` | Eine Okta-Gruppe wurde einem {% data variables.product.prodname_ghe_managed %}-Team zugeordnet. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_group.provision` | Eine Okta-Gruppe wurde einem Team auf {% data variables.product.prodname_ghe_managed %} zugeordnet. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_group.unlink` | Die Zuordnung einer Okta-Gruppe zu einem {% data variables.product.prodname_ghe_managed %}-Team wurde aufgehoben. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_group.update` | Die Einstellungen einer Okta-Gruppe wurden aktualisiert. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).

## `external_identity`-Kategorieaktionen
| Aktion | BESCHREIBUNG
|--------|-------------
| `external_identity.deprovision` | Ein Benutzer wurde aus einer Okta-Gruppe entfernt, und die Bereitstellung in {% data variables.product.prodname_ghe_managed %} wurde anschließend aufgehoben. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_identity.provision` | Ein Okta-Benutzer wurde einer Okta-Gruppe hinzugefügt und anschließend dem zugeordneten Team auf {% data variables.product.prodname_ghe_managed %} bereitgestellt. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_identity.update` | Die Einstellungen eines Okta-Benutzers wurden aktualisiert. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
{%- endif %}

## `gist`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `gist.create` | Ein Gist wurde erstellt.
| `gist.destroy` | Ein Gist wurde gelöscht.
| `gist.visibility_change` | Die Sichtbarkeit eines Gists wurde geändert.

{% ifversion git-events-audit-log %}
## `git`-Kategorieaktionen

{% ifversion enable-git-events %} Bevor du `git`-Kategorieaktionen siehst, musst du Git-Ereignisse im Überwachungsprotokoll aktivieren. Weitere Informationen findest du unter [Konfigurieren des Überwachungsprotokolls für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise#managing-git-events-in-the-audit-log).
{% endif %}

{% data reusables.audit_log.git-events-not-in-search-results %}

| Aktion | BESCHREIBUNG
|--------|-------------
| `git.clone` | Ein Repository wurde geklont.
| `git.fetch` | Änderungen wurden aus einem Repository abgerufen.
| `git.push`  | Änderungen wurden an ein Repository gepusht.
{% endif %}

## `hook`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
{%- ifversion ghes or ghae %} | `hook.active_changed`             | Der aktive Status eines Hooks wurde aktualisiert.
{%- endif %} | `hook.config_changed`             | Die Konfiguration eines Hooks wurde geändert.
| `hook.create`                     | Ein neuer Hook wurde hinzugefügt.
| `hook.destroy`                    | Ein neuer Hook wurde gelöscht.
| `hook.events_changed`             | Die konfigurierten Ereignisse eines Hooks wurden geändert.

## `integration`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `integration.create` | Eine Integration wurde erstellt.
| `integration.destroy` | Eine Integration wurde gelöscht.
| `integration.manager_added` | Ein Mitglied eines Unternehmens oder einer Organisation wurde als Integrationsmanager hinzugefügt.
| `integration.manager_removed` | Ein Mitglied eines Unternehmens oder einer Organisation wurde als Integrationsmanager entfernt.
| `integration.transfer` | Der Besitz einer Integration wurde an einen anderen Benutzer oder eine andere Organisation übertragen.
| `integration.remove_client_secret` | Ein geheimer Clientschlüssel für eine Integration wurde entfernt.
| `integration.revoke_all_tokens` | Für alle Benutzertoken für eine Integration wurde ein Widerruf angefordert.
| `integration.revoke_tokens` | Token für eine Integration wurde(n) widerrufen.

## `integration_installation`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `integration_installation.contact_email_changed` | Eine Kontakt-E-Mail-Adresse für eine Integration wurde geändert.
| `integration_installation.create` | Eine Integration wurde installiert.
| `integration_installation.destroy` | Eine Integration wurde deinstalliert.
| `integration_installation.repositories_added` | Repositorys wurden einer Integration hinzugefügt.
| `integration_installation.repositories_removed` | Repositorys wurden aus einer Integration entfernt.
{%- ifversion fpt or ghec %} | `integration_installation.suspend` | Eine Integration wurde angehalten.
| `integration_installation.unsuspend` | Eine Integration wurde fortgesetzt.
{%- endif %} | `integration_installation.version_updated` | Berechtigungen für eine Integration wurden aktualisiert.

## `integration_installation_request`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `integration_installation_request.create` | Ein Mitglied hat angefordert, dass ein Besitzer eine Integration zur Verwendung in einem Unternehmen oder einer Organisation installiert.
| `integration_installation_request.close` | Eine Installationsanforderung für eine Integration zur Verwendung in einem Unternehmen oder einer Organisation wurde entweder von einem Besitzer genehmigt oder abgelehnt oder von dem Mitglied, das die Anforderung gestellt hat, zurückgezogen.

{%- ifversion ghec or ghae %}
## `ip_allow_list`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `ip_allow_list.enable`               | Eine Positivliste für IP-Adressen wurde aktiviert.
| `ip_allow_list.enable_for_installed_apps` | Eine Positivliste für IP-Adressen wurde für installierte {% data variables.product.prodname_github_apps %} aktiviert.
| `ip_allow_list.disable`              | Eine Positivliste für IP-Adressen wurde deaktiviert.
| `ip_allow_list.disable_for_installed_apps` | Eine Positivliste für IP-Adressen wurde für installierte {% data variables.product.prodname_github_apps %} deaktiviert.

## `ip_allow_list_entry`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `ip_allow_list_entry.create` | Eine IP-Adresse wurde einer Positivliste für IP-Adressen hinzugefügt.
| `ip_allow_list_entry.update` | Eine IP-Adresse oder ihre Beschreibung wurde geändert.
| `ip_allow_list_entry.destroy` | Eine IP-Adresse wurde aus einer Positivliste für IP-Adressen gelöscht.
{%- endif %}

## `issue`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `issue.destroy`                      | Ein Issue wurde aus dem Repository gelöscht. Weitere Informationen findest du unter [Löschen eines Issues](/issues/tracking-your-work-with-issues/deleting-an-issue).
| `issue.pinned`                       | Ein Issue wurde an ein Repository angeheftet. Weitere Informationen findest du unter [Anheften eines Issues an dein Repository](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository).
| `issue.transfer`                     | Ein Issue wurde an ein anderes Repository übertragen. Weitere Informationen findest du unter [Übertragen eines Issues an ein anderes Repository](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository).
| `issue.unpinned`                     | Ein Issue wurde von einem Repository gelöst. Weitere Informationen findest du unter [Anheften eines Issues an dein Repository](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository).

## `issue_comment`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `issue_comment.destroy`  | Ein Kommentar zu einem Issue wurde aus dem Repository gelöscht.
| `issue_comment.pinned`   | Ein Kommentar zu einem Issue wurde an ein Repository angeheftet.
| `issue_comment.unpinned` | Ein Kommentar zu einem Issue wurde von einem Repository gelöst.
| `issue_comment.update`   | Ein Kommentar zu einem Issue (nicht der ursprüngliche) wurde geändert.

## `issues`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `issues.deletes_disabled` | Die Möglichkeit zum Löschen von Issues wurde für Unternehmensmitglieder deaktiviert. Mitglieder können keine Issues in Organisationen in einem Unternehmen löschen. Weitere Informationen findest du unter [Erzwingen einer Richtlinie zum Löschen von Issues](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues).
| `issues.deletes_enabled` | Die Möglichkeit zum Löschen von Issues wurde für Unternehmensmitglieder aktiviert. Mitglieder können Issues in Organisationen in einem Unternehmen löschen. Weitere Informationen findest du unter [Erzwingen einer Richtlinie zum Löschen von Issues](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues).
| `issues.deletes_policy_cleared` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Richtlinieneinstellung gelöscht, die Mitgliedern das Löschen von Issues in einem Unternehmen gestattet. Weitere Informationen findest du unter [Erzwingen einer Richtlinie zum Löschen von Issues](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues).

{%- ifversion fpt or ghec %}
## `marketplace_agreement_signature`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `marketplace_agreement_signature.create` | Ein Benutzer hat den {% data variables.product.prodname_marketplace %}-Entwicklervertrag im Namen einer Organisation unterzeichnet.

## `marketplace_listing`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `marketplace_listing.approve` | Die Aufnahme eines Listings im {% data variables.product.prodname_marketplace %} wurde genehmigt.
| `marketplace_listing.change_category` | Eine Kategorie für ein Listing für eine App im {% data variables.product.prodname_marketplace %} wurde geändert.
| `marketplace_listing.create` | Ein Listing für eine App im {% data variables.product.prodname_marketplace %} wurde erstellt.
| `marketplace_listing.delist` | Ein Listing wurde aus dem {% data variables.product.prodname_marketplace %} entfernt.
| `marketplace_listing.redraft` | Ein Listing wurde in den Entwurfszustand zurückversetzt.
| `marketplace_listing.reject` | Die Aufnahme eines Listings im {% data variables.product.prodname_marketplace %} wurde abgelehnt.
{%- endif %}

## `members_can_create_pages`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `members_can_create_pages.disable` | Die Möglichkeit zum Veröffentlichen von {% data variables.product.prodname_pages %} wurde für Mitglieder deaktiviert. Mitglieder können {% data variables.product.prodname_pages %} nicht in einer Organisation veröffentlichen. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von GitHub Pages-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
| `members_can_create_pages.enable` | Die Möglichkeit zum Veröffentlichen von {% data variables.product.prodname_pages %} wurde für Mitglieder aktiviert. Mitglieder können {% data variables.product.prodname_pages %} in einer Organisation veröffentlichen. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von GitHub Pages-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

## `members_can_create_private_pages`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `members_can_create_private_pages.disable` | Die Möglichkeit zum Veröffentlichen privater {% data variables.product.prodname_pages %} wurde für Mitglieder deaktiviert. Mitglieder können private {% data variables.product.prodname_pages %} nicht in einer Organisation veröffentlichen. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von GitHub Pages-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
| `members_can_create_private_pages.enable` |  Die Möglichkeit zum Veröffentlichen privater {% data variables.product.prodname_pages %} wurde für Mitglieder aktiviert. Mitglieder können private {% data variables.product.prodname_pages %} in einer Organisation veröffentlichen. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von GitHub Pages-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

## `members_can_create_public_pages`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `members_can_create_public_pages.disable` |  Die Möglichkeit zum Veröffentlichen öffentlicher {% data variables.product.prodname_pages %} wurde für Mitglieder deaktiviert. Mitglieder können öffentliche {% data variables.product.prodname_pages %} nicht in einer Organisation veröffentlichen. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von GitHub Pages-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
| `members_can_create_public_pages.enable` |  Die Möglichkeit zum Veröffentlichen öffentlicher {% data variables.product.prodname_pages %} wurde für Mitglieder aktiviert. Mitglieder können öffentliche {% data variables.product.prodname_pages %} in einer Organisation veröffentlichen. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von GitHub Pages-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

{%- ifversion ghec or ghes or ghae %}
## `members_can_delete_repos`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `members_can_delete_repos.clear` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Richtlinieneinstellung zum Löschen oder Übertragen von Repositorys in Organisationen in einem Unternehmen gelöscht. Weitere Informationen findest du unter [Erzwingen einer Richtlinie zum Löschen und Übertragen von Repositorys](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer).
| `members_can_delete_repos.disable` | Die Möglichkeit zum Löschen von Repositorys wurde für Unternehmensmitglieder deaktiviert. Mitglieder können Repositorys in Organisationen in einem Unternehmen nicht löschen oder übertragen. Weitere Informationen findest du unter [Erzwingen einer Richtlinie zum Löschen und Übertragen von Repositorys](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer).
| `members_can_delete_repos.enable` |  Die Möglichkeit zum Löschen von Repositorys wurde für Unternehmensmitglieder aktiviert. Mitglieder können Repositorys in Organisationen in einem Unternehmen löschen oder übertragen. Weitere Informationen findest du unter [Erzwingen einer Richtlinie zum Löschen und Übertragen von Repositorys](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer).

## `members_can_view_dependency_insights`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `members_can_view_dependency_insights.clear` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Richtlinieneinstellung zum Anzeigen von Abhängigkeitserkenntnissen in allen Organisationen in einem Unternehmen gelöscht.{% ifversion ghec %} Weitere Informationen findest du unter [Erzwingen einer Richtlinie für die Sichtbarkeit von Abhängigkeitserkenntnissen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise).{% endif %}
| `members_can_view_dependency_insights.disable` | Die Möglichkeit zum Anzeigen von Abhängigkeitserkenntnissen wurde für Unternehmensmitglieder deaktiviert. Mitglieder können keine Abhängigkeitserkenntnisse in Organisationen in einem Unternehmen anzeigen.{% ifversion ghec %} Weitere Informationen findest du unter [Erzwingen einer Richtlinie für die Sichtbarkeit von Abhängigkeitserkenntnissen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise).{% endif %}
| `members_can_view_dependency_insights.enable` |  Die Möglichkeit zum Anzeigen von Abhängigkeitserkenntnissen wurde für Unternehmensmitglieder aktiviert. Mitglieder können Abhängigkeitserkenntnisse in Organisationen in einem Unternehmen anzeigen.{% ifversion ghec %} Weitere Informationen findest du unter [Erzwingen einer Richtlinie für die Sichtbarkeit von Abhängigkeitserkenntnissen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise).{% endif %}

## `migration`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `migration.create` | Eine Migrationsdatei zum Übertragen von Daten von einer *Quelle* (einer {% data variables.product.prodname_dotcom_the_website %}-Organisation oder einer {% data variables.product.prodname_ghe_server %}-Instanz) an eine {% data variables.product.prodname_ghe_server %}-*Zielinstanz* wurde erstellt.
| `migration.destroy_file` | Eine Migrationsdatei zum Übertragen von Daten von einer *Quelle* (einer {% data variables.product.prodname_dotcom_the_website %}-Organisation oder einer {% data variables.product.prodname_ghe_server %}-Instanz) an eine {% data variables.product.prodname_ghe_server %}-*Zielinstanz* wurde gelöscht.
|  `migration.download` | Eine Migrationsdatei zum Übertragen von Daten von einer *Quelle* (einer {% data variables.product.prodname_dotcom_the_website %}-Organisation oder einer {% data variables.product.prodname_ghe_server %}-Instanz) an eine {% data variables.product.prodname_ghe_server %}-*Zielinstanz* wurde heruntergeladen.
{%- endif %}

## `oauth_access`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
`oauth_access.create`   | Ein [OAuth-Zugriffstoken][] wurde für ein Benutzerkonto generiert. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
`oauth_access.destroy`  | Ein [OAuth-Zugriffstoken][] wurde aus einem Benutzerkonto gelöscht.

  [OAuth-Zugriffstoken]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

## `oauth_application`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `oauth_application.create`           | Eine [OAuth-Anwendung][] wurde für ein Benutzer- oder Organisationskonto erstellt.
| `oauth_application.destroy`          | Eine [OAuth-Anwendung][] wurde aus einem Benutzer- oder Organisationskonto gelöscht.
{%- ifversion fpt or ghec %} | `oauth_application.generate_client_secret`   | Der geheime Schlüssel einer [OAuth-Anwendung][] wurde generiert.
| `oauth_application.remove_client_secret`     | Der geheime Schlüssel einer [OAuth-Anwendung][] wurde gelöscht.
{%- endif %} | `oauth_application.reset_secret`      | Der geheime Schlüssel einer [OAuth-Anwendung][] wurde zurückgesetzt.
{%- ifversion fpt or ghec %} | `oauth_application.revoke_all_tokens` | Für alle Benutzertoken für eine [OAuth-Anwendung][] wurde ein Widerruf angefordert.
{%- endif %} | `oauth_application.revoke_tokens`     | Token für eine [OAuth-Anwendung][] wurde(n) widerrufen.
| `oauth_application.transfer`          | Eine [OAuth-Anwendung][] wurde von einem Benutzer- oder Organisationskonto in ein anderes übertragen.
{%- ifversion ghes or ghae %} | `oauth_application.unsuspend`         | Eine [OAuth-Anwendung][] wurde für ein Benutzer- oder Organisationskonto fortgesetzt.
{%- endif %}

  [OAuth-Anwendung]: /guides/basics-of-authentication/#registering-your-app

{%- ifversion fpt or ghec %}
## `oauth_authorization`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `oauth_authorization.create`          | Eine Autorisierung für eine OAuth-Anwendung wurde erstellt. Weitere Informationen findest du unter [Autorisieren von OAuth-Apps](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps).
| `oauth_authorization.destroy`          | Eine Autorisierung für eine OAuth-Anwendung wurde gelöscht. Weitere Informationen findest du unter [Autorisieren von OAuth-Apps](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps).
| `oauth_authorization.update`          | Eine Autorisierung für eine OAuth-Anwendung wurde aktualisiert. Weitere Informationen findest du unter [Autorisieren von OAuth-Apps](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps).
{%- endif %}

## `org`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `org.accept_business_invitation` | Eine an eine Organisation gesendete Einladung für den Beitritt zu einem Unternehmen wurde akzeptiert. {% ifversion ghec %}Weitere Informationen findest du unter [Einladen einer Organisation zum Beitritt zu deinem Unternehmenskonto](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account).{% endif %}
| `org.add_billing_manager` | Ein Abrechnungsmanager wurde einer Organisation hinzugefügt. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Hinzufügen eines Abrechnungsmanagers zu deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).{% endif %}
| `org.add_member` | Ein Benutzer ist einer Organisation beigetreten.
| `org.advanced_security_disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} wurde für neue Repositorys in einer Organisation deaktiviert.
| `org.advanced_security_disabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} wurde für alle Repositorys in einer Organisation deaktiviert.
| `org.advanced_security_enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} wurde für neue Repositorys in einer Organisation aktiviert.
| `org.advanced_security_enabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} wurde für alle Repositorys in einer Organisation aktiviert.
| `org.advanced_security_policy_selected_member_disabled` | Ein*e Unternehmensbesitzer*in hat verhindert, dass {% data variables.product.prodname_GH_advanced_security %}-Features für Repositorys im Besitz der Organisation aktiviert werden. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_selected_member_enabled` | Ein*e Unternehmensbesitzer*in hat zugelassen, dass {% data variables.product.prodname_GH_advanced_security %}-Features für Repositorys im Besitz der Organisation aktiviert werden. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_update` | Ein*e Organisationsbesitzer*in hat Richtlinien für {% data variables.product.prodname_GH_advanced_security %} in einem Unternehmen aktualisiert. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.async_delete` | Ein*e Benutzer*in hat einen Hintergrundauftrag zum Löschen einer Organisation initiiert.
{%- ifversion ghec %} | `org.audit_log_export` | Ein Organisationsbesitzer hat einen Export des Organisationsüberwachungsprotokolls erstellt. Wenn der Export eine Abfrage enthält, listet das Protokoll diese Abfrage sowie die Anzahl der Auditprotokolleinträge auf, die mit der Abfrage übereinstimmen. Weitere Informationen findest du unter [Exportieren von Überwachungsprotokollaktivitäten für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise).
{%- endif %} | `org.block_user` | Ein Organisationsbesitzer hat den Zugriff eines Benutzers auf die Repositorys der Organisation blockiert. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Aussperren eines Benutzers aus deiner Organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).{% endif %} | `org.cancel_business_invitation` | Eine Einladung für eine Organisation zum Beitritt zu einem Unternehmen wurde widerrufen. {% ifversion ghec %}Weitere Informationen findest du unter [Einladen einer Organisation zum Beitritt zu deinem Unternehmenskonto](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account).{% endif %} | `org.cancel_invitation` | Eine an einen Benutzer gesendete Einladung zum Beitritt zu einer Organisation wurde widerrufen.
| `org.clear_actions_settings` |  Ein Organisationsbesitzer hat {% data variables.product.prodname_actions %}-Richtlinieneinstellungen für eine Organisation gelöscht. Weitere Informationen findest du unter [Verwalten von GitHub Actions-Berechtigungen für deine Organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization).
| `org.clear_default_repository_permission` | Ein Organisationsbesitzer hat die Richtlinieneinstellung für die Basisrepositoryberechtigung für eine Organisation gelöscht. Weitere Informationen findest du unter [Festlegen von Basisberechtigungen](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions).
| `org.clear_member_team_creation_permission` | Ein Organisationsbesitzer hat die Einstellung für die Erstellung neuer Teams für eine Organisation gelöscht. Weitere Informationen findest du unter [Festlegen von Teamerstellungsberechtigungen in deiner Organisation](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization).
| `org.clear_reader_discussion_creation_permission` | Ein Organisationsbesitzer hat die Einstellung für die Erstellung neuer Diskussionen für eine Organisation gelöscht. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Zulassen oder Ablehnen der Erstellung von Diskussionen durch Benutzer mit Lesezugriff](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization).{% endif %} | `org.clear_members_can_create_repos`                 | Ein Organisationsbesitzer hat eine Einschränkung der Repositoryerstellung in einer Organisation gelöscht. Weitere Informationen findest du unter [Einschränken der Erstellung von Repositorys in deiner Organisation](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
| `org.clear_members_can_invite_outside_collaborators` | Ein Organisationsbesitzer hat die Richtlinie zum Einladen externer Mitarbeiter für eine Organisation gelöscht. Weitere Informationen findest du unter [Festlegen von Berechtigungen zum Hinzufügen externer Mitarbeiter](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators).
| `org.clear_new_repository_default_branch_setting`    | Ein Organisationsbesitzer hat die Branchnamen-Standardeinstellung für neue Repositorys für eine Organisation gelöscht. Weitere Informationen findest du unter [Festlegen des Standardbranchnamens](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name).
{%- ifversion fpt or ghec %} | `org.codespaces_trusted_repo_access_granted`         | {% data variables.product.prodname_github_codespaces %} wurde vertrauenswürdiger Repositoryzugriff auf alle anderen Repositorys in einer Organisation gewährt. Weitere Informationen findest du unter [Verwalten des Repositoryzugriffs für die Codespaces deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).
| `org.codespaces_trusted_repo_access_revoked`         | Der vertrauenswürdige Repositoryzugriff von {% data variables.product.prodname_github_codespaces %} auf alle anderen Repositorys in einer Organisation wurde widerrufen. Weitere Informationen findest du unter [Verwalten des Repositoryzugriffs für die Codespaces deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).
{%- endif %}                                                                                                             | | `org.config.disable_collaborators_only` | Die Interaktionsgrenze für Mitarbeiter nur für eine Organisation wurde deaktiviert. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Einschränken von Interaktionen in deiner Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.disable_contributors_only` | Die Interaktionsgrenze für vorherige Mitwirkende nur für eine Organisation wurde deaktiviert. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Einschränken von Interaktionen in deiner Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.disable_sockpuppet_disallowed` | Die Interaktionsgrenze für vorhandene Benutzer nur für eine Organisation wurde deaktiviert. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Einschränken von Interaktionen in deiner Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.enable_collaborators_only` | Die Interaktionsgrenze für Mitwirkende nur für eine Organisation wurde aktiviert. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Einschränken von Interaktionen in deiner Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.enable_contributors_only` | Die Interaktionsgrenze für vorherige Mitwirkende nur für eine Organisation wurde aktiviert. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Einschränken von Interaktionen in deiner Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.enable_sockpuppet_disallowed` | Die Interaktionsgrenze für vorhandene Benutzer nur für eine Organisation wurde aktiviert. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Begrenzen von Interaktionen in deiner Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.confirm_business_invitation` | Eine Einladung für eine Organisation zum Beitritt zu einem Unternehmen wurde bestätigt. {% ifversion ghec %}Weitere Informationen findest du unter [Einladen einer Organisation zum Beitritt zu deinem Unternehmenskonto](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account).{% endif %} | `org.create` | Eine Organisation wurde erstellt. Weitere Informationen findest du unter [Erstellen einer neuen Organisation von Grund auf](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).
{%- ifversion fpt or ghec or ghes %} | `org.create_actions_secret` | Ein {% data variables.product.prodname_actions %}-Geheimnis wurde für eine Organisation erstellt. Weitere Informationen findest du unter [Erstellen verschlüsselter Geheimnisse für eine Organisation](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization).
{%- endif %} | `org.create_integration_secret` | Ein {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %}- oder {% data variables.product.prodname_github_codespaces %}{% endif %}-Integrationsgeheimnis wurde für eine Organisation erstellt.
| `org.delete`       | Eine Organisation wurde durch einen von einem Benutzer initiierten Hintergrundauftrag gelöscht.
| `org.disable_member_team_creation_permission` | Ein Organisationsbesitzer hat die Teamerstellung auf Besitzer beschränkt. Weitere Informationen findest du unter [Festlegen von Teamerstellungsberechtigungen in deiner Organisation](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization).
| `org.disable_reader_discussion_creation_permission` | Ein Organisationsbesitzer hat die Diskussionserstellung auf Benutzer mit mindestens Selektierungsberechtigung in einer Organisation beschränkt. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Zulassen oder Ablehnen der Erstellung von Diskussionen durch Benutzer mit Lesezugriff](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization).{% endif %} {%- ifversion fpt or ghec %} | `org.disable_oauth_app_restrictions` | Anwendungszugriffseinschränkungen von Drittanbietern für eine Organisation wurden deaktiviert. Weitere Informationen findest du unter [Deaktivieren von OAuth-App-Zugriffseinschränkungen für deine Organisation](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization).
{%- endif %} {%- ifversion ghec %} | `org.disable_saml` | Ein Organisationsbesitzer hat SAML-SSO für eine Organisation deaktiviert.
{%- endif %} {%- ifversion not ghae %} | `org.disable_two_factor_requirement` | Ein Organisationsbesitzer hat eine zweistufige Authentifizierungsanforderung für alle Mitglieder{% ifversion fpt or ghec %}, Abrechnungsmanager{% endif %} und externe Mitarbeiter in einer Organisation deaktiviert.
{%- endif %} | `org.display_commenter_full_name_disabled` | Ein Organisationsbesitzer hat die Anzeige des vollständigen Namens eines Kommentarverfassers in einer Organisation deaktiviert. Mitgliedern wird der vollständige Name eines Kommentarverfassers nicht angezeigt.
| `org.display_commenter_full_name_enabled` | Ein Organisationsbesitzer hat die Anzeige des vollständigen Namens eines Kommentarverfassers in einer Organisation aktiviert. Mitgliedern wird der vollständige Name eines Kommentarverfassers angezeigt.
| `org.enable_member_team_creation_permission` | Ein Organisationsbesitzer hat Mitgliedern das Erstellen von Teams erlaubt. Weitere Informationen findest du unter [Festlegen von Teamerstellungsberechtigungen in deiner Organisation](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization).
| `org.enable_reader_discussion_creation_permission` | Ein Organisationsbesitzer hat Benutzern mit Lesezugriff das Erstellen von Diskussionen in einer Organisation erlaubt. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Zulassen oder Ablehnen der Erstellung von Diskussionen durch Benutzer mit Lesezugriff](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization).{% endif %} {%- ifversion fpt or ghec %} | `org.enable_oauth_app_restrictions` | Anwendungszugriffseinschränkungen von Drittanbietern für eine Organisation wurden aktiviert. Weitere Informationen findest du unter [Aktivieren von OAuth-App-Zugriffseinschränkungen für deine Organisation](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization).
{%- endif %} {%- ifversion ghec %} | `org.enable_saml` | Ein Organisationsbesitzer hat [SAML-SSO für eine Organisation aktiviert](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization).
{%- endif %} {%- ifversion not ghae %} | `org.enable_two_factor_requirement` | Ein Organisationsbesitzer fordert die zweistufige Authentifizierung für alle Mitglieder{% ifversion fpt or ghec %}, Abrechnungsmanager{% endif %} und externe Mitarbeiter in einer Organisation an.
{%- endif %} | `org.integration_manager_added` | Ein Organisationsbesitzer hat einem Mitglied Zugriff auf die Verwaltung aller GitHub-Apps im Besitz einer Organisation gewährt.
| `org.integration_manager_removed` | Ein Organisationsbesitzer hat den Zugriff auf die Verwaltung aller GitHub-Apps im Besitz einer Organisation für ein Organisationsmitglied aufgehoben.
| `org.invite_member` | Ein neuer Benutzer wurde zum Beitritt zu einer Organisation eingeladen. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Einladen von Benutzern zum Beitritt zu deiner Organisation](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization). {% endif %} | `org.invite_to_business` | Eine Organisation wurde zum Beitritt zu einem Unternehmen eingeladen.
| `org.members_can_update_protected_branches.clear` | Ein Organisationsbesitzer hat die Festlegung einer Richtlinie aufgehoben, die steuert, ob Mitglieder einer Organisation geschützte Branches für Repositorys in einer Organisation aktualisieren können. Organisationsadministratoren können auswählen, ob die Aktualisierung von Einstellungen geschützter Branches zulässig ist.
| `org.members_can_update_protected_branches.disable` | Die Möglichkeit für Unternehmensmitglieder, geschützte Branches zu aktualisieren, wurde deaktiviert. Nur Unternehmensbesitzer können geschützte Branches aktualisieren.
| `org.members_can_update_protected_branches.enable` | Die Möglichkeit für Unternehmensmitglieder, geschützte Branches zu aktualisieren, wurde aktiviert. Mitglieder einer Organisation können geschützte Branches aktualisieren.
{%- ifversion fpt or ghec %} | `org.oauth_app_access_approved` | Ein Besitzer [hat Organisationszugriff auf eine {% data variables.product.prodname_oauth_app %} gewährt](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
| `org.oauth_app_access_denied` | Ein Besitzer [hat den zuvor genehmigten {% data variables.product.prodname_oauth_app %}-Zugriff auf eine Organisation deaktiviert](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization).
| `org.oauth_app_access_requested` | Ein Organisationsmitglied hat angefordert, dass ein Besitzer einer Organisation {% data variables.product.prodname_oauth_app %}-Zugriff gewährt.
{%- endif %} | `org.recreate` | Eine Organisation wurde wiederhergestellt.
| `org.register_self_hosted_runner` | Ein neuer selbstgehosteter Runner wurde registriert. Weitere Informationen findest du unter [Hinzufügen eines selbstgehosteten Runners zu einer Organisation](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization).
| `org.remove_actions_secret` | Ein {% data variables.product.prodname_actions %}-Geheimnis wurde entfernt.
| `org.remove_integration_secret` | Ein {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %}- oder {% data variables.product.prodname_github_codespaces %}{% endif %}-Integrationsgeheimnis wurde aus einer Organisation entfernt.
| `org.remove_billing_manager` | Ein Besitzer hat einen Abrechnungsmanager aus einer Organisation entfernt. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Entfernen eines Abrechnungsmanagers aus deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization){% endif %}{% ifversion not ghae %}, oder [die zweistufige Authentifizierung war in einer Organisation erforderlich](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), und ein Abrechnungsmanager hat 2FA nicht verwendet oder hat 2FA deaktiviert.{% endif %} | `org.remove_member` | Ein [Besitzer hat ein Mitglied aus einer Organisation entfernt](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %}, oder [die zweistufige Authentifizierung war in einer Organisation erforderlich](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), und ein Organisationsmitglied verwendet 2FA nicht oder hat 2FA deaktiviert{% endif %}. Außerdem hat sich ein [Organisationsmitglied selbst aus einer Organisation entfernt](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization).
| `org.remove_outside_collaborator` | Ein Besitzer hat einen externen Mitarbeiter aus einer Organisation entfernt{% ifversion not ghae %}, oder die [zweistufige Authentifizierung war in einer Organisation erforderlich](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), und ein externer Mitarbeiter hat 2FA nicht verwendet oder hat 2FA deaktiviert{% endif %}.
| `org.remove_self_hosted_runner` | Ein selbstgehosteter Runner wurde entfernt. Weitere Informationen findest du unter [Entfernen eines Runners aus einer Organisation](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).
| `org.rename` | Eine Organisation wurde umbenannt.
| `org.restore_member` | Ein Organisationsmitglied wurde wiederhergestellt. Weitere Informationen findest du unter [Reaktivieren eines ehemaligen Mitglieds deiner Organisation](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).
{%- ifversion ghec %} | `org.revoke_external_identity` | Ein Organisationsbesitzer hat die verknüpfte Identität eines Mitglieds widerrufen. Weitere Informationen findest du unter [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity).
| `org.revoke_sso_session` | Ein Organisationsbesitzer hat die SAML-Sitzung eines Mitglieds widerrufen. Weitere Informationen findest du unter [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity).
{%- endif %} | `org.runner_group_created` | Eine selbstgehostete Runnergruppe wurde erstellt. Weitere Informationen findest du unter [Erstellen einer selbstgehosteten Runnergruppe für eine Organisation](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization).
| `org.runner_group_removed` | Eine selbstgehostete Runnergruppe wurde entfernt. Weitere Informationen findest du unter [Entfernen einer selbstgehosteten Runnergruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group).
{%- ifversion fpt or ghec %} | `org.runner_group_renamed` | Eine selbstgehostete Runnergruppe wurde umbenannt. Weitere Informationen findest du unter [Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
{%- endif %} | `org.runner_group_updated` | Die Konfiguration einer selbstgehosteten Runnergruppe wurde geändert. Weitere Informationen findest du unter [Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `org.runner_group_runner_removed` | Die REST-API wurde verwendet, um einen selbstgehosteten Runner aus einer Gruppe zu entfernen. Weitere Informationen findest du unter [Entfernen eines selbstgehosteten Runners aus einer Gruppe für eine Organisation](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization).
| `org.runner_group_runners_added` | Ein selbstgehosteter Runner wurde einer Gruppe hinzugefügt. Weitere Informationen findest du unter [Verschieben eines selbstgehosteten Runners in eine Gruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `org.runner_group_runners_updated`| Die Liste der Mitglieder einer Runnergruppe wurde aktualisiert. Weitere Informationen findest du unter [Festlegen selbstgehosteter Runner in einer Gruppe für eine Organisation](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization).
{%- ifversion fpt or ghec %} | `org.runner_group_visiblity_updated` | Die Sichtbarkeit einer selbstgehosteten Runnergruppe wurde über die REST-API aktualisiert. Weitere Informationen findest du unter [Aktualisieren einer selbstgehosteten Runnergruppe für eine Organisation](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization).
{%- endif %} {%- ifversion code-security-audit-log-events %} | `org.secret_scanning_push_protection_custom_message_disabled` | Benutzerdefinierte Nachrichten, die von einem versuchten Push an ein Repository mit Pushschutz ausgelöst werden, wurden für deine Organisation deaktiviert. Weitere Informationen findest du unter [Schützen von Pushes mit {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
| `org.secret_scanning_push_protection_custom_message_enabled` | Benutzerdefinierte Nachrichten, die von einem versuchten Push an ein Repository mit Pushschutz ausgelöst werden, wurden für deine Organisation aktiviert. Weitere Informationen findest du unter [Schützen von Pushes mit {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
| `org.secret_scanning_push_protection_custom_message_updated` | Benutzerdefinierte Nachrichten, die von einem versuchten Push an ein Repository mit Pushschutz ausgelöst werden, wurden für deine Organisation aktualisiert. Weitere Informationen findest du unter [Schützen von Pushes mit {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org.secret_scanning_push_protection_disable` | Ein*e Organisationsbesitzer*in oder Administrator*in hat den Pushschutz für die Geheimnisüberprüfung deaktiviert. Weitere Informationen findest du unter [Schützen von Pushs mit Geheimnisüberprüfung](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
| `org.secret_scanning_push_protection_enable` | Ein Organisationsbesitzer oder Administrator hat den Pushschutz für Geheimnisüberprüfungen aktiviert.
{%- endif %} | `org.self_hosted_runner_online` | Die Runneranwendung wurde gestartet. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `org.self_hosted_runner_offline` | Die Runneranwendung wurde beendet. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) („Überprüfen des Status eines selbstgehosteten Runners“).
{%- ifversion fpt or ghec or ghes %} | `org.self_hosted_runner_updated` | Die Runneranwendung wurde aktualisiert. Kann über die REST-API und die Benutzeroberfläche angezeigt werden. Im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)“.
{%- endif %} {%- ifversion fpt or ghec %} | `org.set_actions_fork_pr_approvals_policy` | Die Einstellung zum Anfordern von Genehmigungen für Workflows aus öffentlichen Forks wurde für eine Organisation geändert. Weitere Informationen findest du unter [Anfordern einer Genehmigung für Workflows aus öffentlichen Forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks).
{%- endif %} | `org.set_actions_retention_limit` | Der Aufbewahrungszeitraum für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle in einer Organisation wurde geändert. Weitere Informationen findest du unter [Konfigurieren des Aufbewahrungszeitraums für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle in deiner Organisation](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization).
{%- ifversion fpt or ghec or ghes %} | `org.set_fork_pr_workflows_policy` | Die Richtlinie für Workflows für private Repositoryforks wurde geändert. Weitere Informationen findest du unter [Aktivieren von Workflows für private Repositoryforks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks).
{%- endif %} {%- ifversion ghes or audit-log-sso-response-events %} | `org.sso_response` | Beim Versuch eines Mitglieds, sich bei deiner Organisation zu authentifizieren, wurde eine SAML-SSO-Antwort (Single Sign-On) generiert. Dieses Ereignis steht nur über die Überwachungsprotokollstreaming und die REST-API zur Verfügung.
{%- endif %} {%- ifversion ghec %} | `org.transfer` | Eine Organisation wurde zwischen Unternehmenskonten übertragen. Weitere Informationen findest du unter [Hinzufügen von Organisationen zu deinem Unternehmen](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts).
{%- endif %} {%- ifversion not ghae %} | `org.transform`    | Ein Benutzerkonto wurde in eine Organisation konvertiert. Weitere Informationen findest du unter [Konvertieren eines Benutzers in eine Organisation](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization).
{%- endif %} | `org.unblock_user` | Ein Organisationsbesitzer hat die Sperre eines Benutzers für eine Organisation aufgehoben. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Aufheben der Sperre eines Benutzers für deine Organisation](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %} {%- ifversion fpt or ghec or ghes %} | `org.update_actions_secret` | Ein {% data variables.product.prodname_actions %}-Geheimnis wurde aktualisiert.
{%- endif %} | `org.update_integration_secret` | Ein {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %}- oder {% data variables.product.prodname_github_codespaces %}{% endif %}-Integrationsgeheimnis wurde für eine Organisation aktualisiert.
| `org.update_default_repository_permission` | Ein Organisationsbesitzer hat die Standardberechtigungsebene für Repositorys für Organisationsmitglieder geändert.
| `org.update_member` | Ein Organisationsbesitzer hat die Rolle einer Person von Besitzer in Mitglied oder von Mitglied in Besitzer geändert.
| `org.update_member_repository_creation_permission` | Ein Organisationsbesitzer hat die Berechtigung zum Erstellen von Repositorys für Organisationsmitglieder geändert.
| `org.update_member_repository_invitation_permission` | Ein Organisationsbesitzer hat die Richtlinieneinstellung für Organisationsmitglieder geändert, die externe Mitarbeiter zu Repositorys einladen. Weitere Informationen findest du unter [Festlegen von Berechtigungen zum Hinzufügen externer Mitarbeiter](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators).
| `org.update_new_repository_default_branch_setting` | Ein Organisationsbesitzer hat den Namen des Standardbranchs für neue Repositorys in der Organisation geändert. Weitere Informationen findest du unter [Verwalten des Standardbranchnamens für Repositorys in deiner Organisation](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization).
{%- ifversion ghec or ghae %} | `org.update_saml_provider_settings` | Die SAML-Anbietereinstellungen einer Organisation wurden aktualisiert.
| `org.update_terms_of_service` | Eine Organisation hat zwischen den Standardvertragsbedingungen und den unternehmenseigenen Vertragsbedingungen gewechselt. {% ifversion ghec %}Weitere Informationen findest du unter [Upgrade auf die Vertragsbedingungen für Unternehmen](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service).{% endif %} {%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `org_credential_authorization`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `org_credential_authorization.deauthorized` | Ein Mitglied hat die Autorisierung von Anmeldeinformationen für die Verwendung mit SAML-SSO aufgehoben. {% ifversion ghec or ghae %}Weitere Informationen findest du unter [Authentifizieren mit SAML-SSO](/authentication/authenticating-with-saml-single-sign-on).{% endif %}
| `org_credential_authorization.grant` | Ein Mitglied hat Anmeldeinformationen für die Verwendung mit SAML-SSO autorisiert. {% ifversion ghec or ghae %}Weitere Informationen findest du unter [Authentifizieren mit SAML-SSO](/authentication/authenticating-with-saml-single-sign-on).{% endif %}
| `org_credential_authorization.revoke` | Ein Besitzer hat autorisierte Anmeldeinformationen widerrufen. {% ifversion ghec %}Weitere Informationen findest du unter [Anzeigen und Verwalten deiner aktiven SAML-Sitzungen](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).{% endif %}
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## `org_secret_scanning_custom_pattern`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|---------------
| `org_secret_scanning_custom_pattern.create` | Ein benutzerdefiniertes Muster wird für die Geheimnisüberprüfung in einer Organisation veröffentlicht. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization).
| `org_secret_scanning_custom_pattern.delete` | Ein benutzerdefiniertes Muster wird für die Geheimnisüberprüfung in einer Organisation entfernt. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern).
| `org_secret_scanning_custom_pattern.update` |Änderungen an einem benutzerdefinierten Muster werden für die Geheimnisüberprüfung in einer Organisation gespeichert. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern).
{%- endif %}

## `organization_default_label`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `organization_default_label.create` | Eine Standardbezeichnung für Repositorys in einer Organisation wurde erstellt. Weitere Informationen findest du unter [Erstellen einer Standardbezeichnung](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label).
| `organization_default_label.update` | Eine Standardbezeichnung für Repositorys in einer Organisation wurde bearbeitet. Weitere Informationen findest du unter [Bearbeiten einer Standardbezeichnung](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label).
| `organization_default_label.destroy` | Eine Standardbezeichnung für Repositorys in einer Organisation wurde gelöscht. Weitere Informationen findest du unter [Löschen einer Standardbezeichnung](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label).

{%- ifversion fpt or ghec or ghes %}
## `organization_domain`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `organization_domain.approve` | Eine Unternehmensdomäne wurde für eine Organisation genehmigt. Weitere Informationen findest du unter [Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization).
| `organization_domain.create` | Eine Unternehmensdomäne wurde einer Organisation hinzugefügt. Weitere Informationen findest du unter [Überprüfen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization).
| `organization_domain.destroy` | Eine Unternehmensdomäne wurde aus einer Organisation entfernt. Weitere Informationen findest du unter [Entfernen einer genehmigten oder überprüften Domäne](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain).
| `organization_domain.verify` | Eine Unternehmensdomäne wurde für eine Organisation überprüft. Weitere Informationen findest du unter [Überprüfen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization).

## `organization_projects_change`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `organization_projects_change.clear` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Richtlinieneinstellung für organisationsweite Projektboards in einem Unternehmen gelöscht. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Projekte in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards).
| `organization_projects_change.disable` | Organisationsprojekte wurden für alle Organisationen in einem Unternehmen deaktiviert. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Projekte in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards).
| `organization_projects_change.enable` | Organisationsprojekte wurden für alle Organisationen in einem Unternehmen aktiviert. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Projekte in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards).
{%- endif %}

## `packages`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `packages.insecure_hash` | Maven hat einen unsicheren Hash für eine bestimmte Paketversion veröffentlicht.
| `packages.package_deleted` | Ein Paket wurde aus einer Organisation gelöscht.{% ifversion fpt or ghec or ghes %} Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}
| `packages.package_published` | Ein Paket wurde in einer Organisation veröffentlicht oder erneut veröffentlicht.
| `packages.package_restored` | Ein ganzes Paket wurde wiederhergestellt.{% ifversion fpt or ghec or ghes %} Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}
| `packages.package_version_deleted` | Eine bestimmte Paketversion wurde gelöscht.{% ifversion fpt or ghec or ghes %} Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}
| `packages.package_version_published` | Eine bestimmte Paketversion wurde in einem Paket veröffentlicht oder erneut veröffentlicht.
| `packages.package_version_restored` | Eine bestimmte Paketversion wurde gelöscht.{% ifversion fpt or ghec or ghes %} Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}
| `packages.part_upload` | Eine bestimmte Paketversion wurde teilweise in eine Organisation hochgeladen.
| `packages.upstream_package_fetched` | Eine bestimmte Paketversion wurde vom npm-Upstreamproxy abgerufen.
| `packages.version_download` | Eine bestimmte Paketversion wurde heruntergeladen.
| `packages.version_upload` | Eine bestimmte Paketversion wurde hochgeladen.

{%- ifversion fpt or ghec %}
## `pages_protected_domain`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `pages_protected_domain.create` | Eine überprüfte {% data variables.product.prodname_pages %}-Domäne wurde für eine Organisation oder ein Unternehmen erstellt. Weitere Informationen findest du unter [Überprüfen deiner benutzerdefinierten Domäne für {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
| `pages_protected_domain.delete` | Eine überprüfte {% data variables.product.prodname_pages %}-Domäne wurde aus einer Organisation oder einem Unternehmen gelöscht. Weitere Informationen findest du unter [Überprüfen deiner benutzerdefinierten Domäne für {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
| `pages_protected_domain.verify`  | Eine {% data variables.product.prodname_pages %}-Domäne wurde für eine Organisation oder ein Unternehmen überprüft. Weitere Informationen findest du unter [Überprüfen deiner benutzerdefinierten Domäne für {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

## `payment_method`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `payment_method.create` | Eine neue Zahlungsmethode, beispielsweise eine neue Kreditkarte oder ein PayPal-Konto, wurde hinzugefügt.
| `payment_method.remove` | Eine Zahlungsmethode wurde entfernt.
| `payment_method.update` | Eine vorhandene Zahlungsmethode wurde aktualisiert.

## `prebuild_configuration`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `prebuild_configuration.create` | Eine {% data variables.product.prodname_github_codespaces %}-Prebuildkonfiguration für ein Repository wurde erstellt. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_github_codespaces %}-Präbuilds](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).
| `prebuild_configuration.destroy` | Eine {% data variables.product.prodname_github_codespaces %}-Prebuildkonfiguration für ein Repository wurde gelöscht. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_github_codespaces %}-Präbuilds](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).
| `prebuild_configuration.run_triggered` | Ein Benutzer/eine Benutzerin hat eine Ausführung einer {% data variables.product.prodname_github_codespaces %}-Prebuildkonfiguration für einen Repositorybranch eingeleitet. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_github_codespaces %}-Präbuilds](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).
| `prebuild_configuration.update` | Eine {% data variables.product.prodname_github_codespaces %}-Prebuildkonfiguration für ein Repository wurde bearbeitet. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_github_codespaces %}-Präbuilds](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).
{%- endif %}

{%- ifversion ghes %}
## `pre_receive_environment`-Kategorieaktionen

| Aktion | BESCHREIBUNG
| ------ | -----------
| `pre_receive_environment.create` | Eine Pre-Receive-Hook-Umgebung wurde erstellt. Weitere Informationen findest du unter [Erstellen einer Pre-Receive-Hook-Umgebung](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment).
| `pre_receive_environment.destroy` | Eine Pre-Receive-Hook-Umgebung wurde gelöscht. Weitere Informationen findest du unter [Erstellen einer Pre-Receive-Hook-Umgebung](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment).
| `pre_receive_environment.download` | Eine Pre-Receive-Hook-Umgebung wurde heruntergeladen. Weitere Informationen findest du unter [Erstellen einer Pre-Receive-Hook-Umgebung](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment).
| `pre_receive_environment.update` | Eine Pre-Receive-Hook-Umgebung wurde aktualisiert. Weitere Informationen findest du unter [Erstellen einer Pre-Receive-Hook-Umgebung](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment).

## `pre_receive_hook`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `pre_receive_hook.create` | Ein Pre-Receive-Hook wurde erstellt. Weitere Informationen findest du unter [Erstellen von Pre-Receive-Hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks).
| `pre_receive_hook.destroy` | Ein Pre-Receive-Hook wurde gelöscht. Weitere Informationen findest du unter [Löschen von Pre-Receive-Hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks).
| `pre_receive_hook.enforcement` | Eine Einstellung für die Erzwingung von Pre-Receive-Hooks, mit der Repository- und Organisationsadministratoren die Hookkonfiguration außer Kraft setzen können, wurde aktiviert oder deaktiviert. Weitere Informationen findest du unter [Verwalten von Pre-Receive-Hooks auf der GitHub Enterprise Server-Appliance](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance).
| `pre_receive_hook.rejected_push` | Ein Pre-Receive-Hook hat einen Push abgelehnt.
| `pre_receive_hook.update` | Ein Pre-Receive-Hook wurde erstellt. Weitere Informationen findest du unter [Bearbeiten von Pre-Receive-Hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks).
| `pre_receive_hook.warned_push` | Ein Pre-Receive-Hook hat vor einem Push gewarnt.
{%- endif %}

## `private_repository_forking`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `private_repository_forking.clear` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Richtlinieneinstellung zum Zulassen von Forks privater und interner Repositorys für ein Repository, eine Organisation oder ein Unternehmen gelöscht. Weitere Informationen findest du unter [Verwalten der Forkrichtlinie für dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), [Verwalten der Forkrichtlinie für deine Organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) und für Unternehmen [Erzwingen einer Richtlinie zum Forken privater oder interner Repositorys](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories).
| `private_repository_forking.disable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Richtlinieneinstellung zum Zulassen von Forks privater und interner Repositorys für ein Repository, eine Organisation oder ein Unternehmen deaktiviert. Private und interne Repositorys dürfen niemals geforkt werden. Weitere Informationen findest du unter [Verwalten der Forkrichtlinie für dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), [Verwalten der Forkrichtlinie für deine Organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) und für Unternehmen [Erzwingen einer Richtlinie zum Forken privater oder interner Repositorys](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories).
| `private_repository_forking.enable` | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat die Richtlinieneinstellung zum Zulassen von Forks privater und interner Repositorys für ein Repository, eine Organisation oder ein Unternehmen aktiviert. Private und interne Repositorys dürfen immer geforkt werden. Weitere Informationen findest du unter [Verwalten der Forkrichtlinie für dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), [Verwalten der Forkrichtlinie für deine Organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) und für Unternehmen [Erzwingen einer Richtlinie zum Forken privater oder interner Repositorys](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories).

{%- ifversion fpt or ghec %}
## `profile_picture`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `profile_picture.update` | Ein Profilbild wurde aktualisiert.
{%- endif %}

## `project`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `project.access` | Die Sichtbarkeit des Projektboards wurde geändert. Weitere Informationen findest du unter [Ändern der Sichtbarkeit von Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility).
| `project.close` | Ein Projektboard wurde geschlossen. Weitere Informationen findest du unter [Schließen eines Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board).
| `project.create` | Ein Projektboard wurde erstellt. Weitere Informationen findest du unter [Erstellen eines Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board).
| `project.delete` | Ein Projektboard wurde gelöscht. Weitere Informationen findest du unter [Löschen eines Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board).
| `project.link` | Ein Repository wurde mit einem Projektboard verknüpft. Weitere Informationen findest du unter [Verknüpfen eines Repositorys mit einem Projektboard](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board).
| `project.open` | Ein Projektboard wurde erneut geöffnet. Weitere Informationen findest du unter [Erneutes Öffnen eines geschlossenen Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board).
| `project.rename` | Ein Projektboard wurde umbenannt. Weitere Informationen findest du unter [Bearbeiten eines Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board).
| `project.unlink` | Die Verknüpfung eines Repositorys mit einem Projektboard wurde aufgehoben. Weitere Informationen findest du unter [Verknüpfen eines Repositorys mit einem Projektboard](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board).
| `project.update_org_permission` | Die Berechtigung auf Basisebene für alle Organisationsmitglieder wurde geändert oder entfernt. Weitere Informationen findest du unter [Verwalten des Zugriffs auf ein Projektboard für Organisationsmitglieder](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members).
| `project.update_team_permission` | Die Berechtigungsebene des Projektboards eines Teams wurde geändert, oder ein Team wurde einem Projektboard hinzugefügt oder daraus entfernt. Weitere Informationen findest du unter [Verwalten des Teamzugriffs auf ein Organisationsprojektboard](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board).
| `project.update_user_permission` | Ein Organisationsmitglied oder ein externer Mitarbeiter wurde einem Projektboard hinzugefügt oder daraus entfernt, oder die Berechtigungsebene wurde ändert. Weitere Informationen findest du unter [Verwalten des Zugriffs einer Einzelperson auf ein Organisationsprojektboard](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board).

{%- ifversion projects-v2 %}
## `project_field`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `project_field.create` | Ein Feld wurde in einem Projektboard erstellt. Weitere Informationen findest du unter [Grundlegendes zu Feldtypen](/issues/planning-and-tracking-with-projects/understanding-field-types).
| `project_field.delete` | Ein Feld wurde in einem Projektboard gelöscht. Weitere Informationen findest du unter [Löschen von Feldern](/issues/planning-and-tracking-with-projects/understanding-field-types/deleting-fields).

## `project_view`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `project_view.create` | Eine Ansicht wurde in einem Projektboard erstellt. Weitere Informationen findest du unter [Verwalten deiner Ansichten](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views).
| `project_view.delete` | Eine Ansicht wurde in einem Projektboard gelöscht. Weitere Informationen findest du unter [Verwalten deiner Ansichten](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views).
{%- endif %}

## `protected_branch`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `protected_branch.create ` | Der Branchschutz wurde für einen Branch aktiviert.
| `protected_branch.destroy` | Der Branchschutz wurde für einen Branch deaktiviert.
| `protected_branch.dismiss_stale_reviews ` | Die Erzwingung des Schließens veralteter Pull Requests wurde für einen Branch aktualisiert.
{%- ifversion ghes %} | `protected_branch.dismissal_restricted_users_teams` | Die Erzwingung der Einschränkung von Benutzern und/oder Teams, die Reviews schließen können, wurde für einen Branch aktualisiert.
{%- endif %} | `protected_branch.policy_override ` | Eine Branchschutzanforderung wurde von einem Repositoryadministrator überschrieben.
| `protected_branch.rejected_ref_update ` | Ein Branchaktualisierungsversuch wurde abgelehnt.
| `protected_branch.required_status_override` | Die Branchschutzanforderung für erforderliche Statusüberprüfungen wurde von einem Repositoryadministrator überschrieben.
| `protected_branch.review_policy_and_required_status_override` | Die Branchschutzanforderungen für erforderliche Reviews und erforderliche Statusüberprüfungen wurden von einem Repositoryadministrator überschrieben.
| `protected_branch.review_policy_override` | Die Branchschutzanforderung für erforderliche Reviews wurde von einem Repositoryadministrator überschrieben.
| `protected_branch.update_admin_enforced ` | Der Branchschutz wurde für Repositoryadministratoren erzwungen.
{%- ifversion ghes %} | `protected_branch.update_allow_deletions_enforcement_level` | Die Erzwingung, dass Benutzer mit Pushzugriff übereinstimmende Branches löschen dürfen, wurde aktualisiert.
| `protected_branch.update_allow_force_pushes_enforcement_level` | Die Erzwingung, dass erzwungene Pushs für alle Benutzer mit Pushzugriff zugelassen werden, wurde für einen Branch aktualisiert.
| `protected_branch.update_linear_history_requirement_enforcement_level` | Die Erzwingung, dass der lineare Commitverlauf erforderlich ist, wurde für einen Branch aktualisiert.
{%- endif %} | `protected_branch.update_pull_request_reviews_enforcement_level ` | Die Erzwingung erforderlicher Pull Request-Reviews wurde für einen Branch aktualisiert. Der Wert kann `0` (deaktiviert), `1` (Nicht-Administratoren) oder `2` (jeder) lauten.
| `protected_branch.update_require_code_owner_review ` | Die Erzwingung erforderlicher Reviews durch Codebesitzer wurde für einen Branch aktualisiert.
| `protected_branch.update_required_approving_review_count` | Die Erzwingung der erforderlichen Anzahl von Genehmigungen vor dem Mergen wurde für einen Branch aktualisiert.
| `protected_branch.update_required_status_checks_enforcement_level ` | Die Erzwingung erforderlicher Statusüberprüfungen wurde für einen Branch aktualisiert.
| `protected_branch.update_signature_requirement_enforcement_level ` | Die Erzwingung der erforderlichen Commitsignatur wurde für einen Branch aktualisiert.
| `protected_branch.update_strict_required_status_checks_policy` | Die Erzwingung erforderlicher Statusüberprüfungen wurde für einen Branch aktualisiert.
| `protected_branch.update_name` | Ein Branchnamensmuster wurde für einen Branch aktualisiert.

## `public_key`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `public_key.create` | Ein SSH-Schlüssel wurde einem Benutzerkonto [hinzugefügt][add key], oder ein [Bereitstellungsschlüssel][] wurde einem Repository hinzugefügt.
| `public_key.delete` | Ein SSH-Schlüssel wurde aus einem Benutzerkonto entfernt, oder ein [Bereitstellungsschlüssel][] wurde aus einem Repository entfernt.
| `public_key.update` | Der SSH-Schlüssel eines Benutzerkontos oder der [Bereitstellungsschlüssel][] eines Repositorys wurde aktualisiert.
| `public_key.unverification_failure` | Die Überprüfung des SSH-Schlüssels eines Benutzerkontos oder des [Bereitstellungsschlüssel][] eines Repositorys konnte nicht aufgehoben werden.
| `public_key.unverify` | Die Überprüfung des SSH-Schlüssels eines Benutzerkontos oder des [Bereitstellungsschlüssel][] eines Repositorys wurde aufgehoben.
| `public_key.verification_failure` | Der SSH-Schlüssel eines Benutzerkontos oder der [Bereitstellungsschlüssel][] eines Repositorys konnte nicht überprüft werden.
| `public_key.verify` | Der SSH-Schlüssel eines Benutzerkontos oder der [Bereitstellungsschlüssel][] eines Repositorys wurde überprüft.

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [Bereitstellungsschlüssel]: /developers/overview/managing-deploy-keys#deploy-keys

## `pull_request`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `pull_request.close` | Ein Pull Request wurde ohne Mergen geschlossen. Weitere Informationen findest du unter [Schließen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request).
| `pull_request.converted_to_draft` | Ein Pull Request wurde in einen Entwurf konvertiert. Weitere Informationen findest du unter [Ändern der Stage eines Pull Requests](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft).
| `pull_request.create` | Ein Pull Request wurde erstellt. Weitere Informationen findest du unter [Erstellen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
| `pull_request.create_review_request` | Ein Review wurde für einen Pull Request angefordert. Weitere Informationen findest du unter [Informationen zu Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).
| `pull_request.in_progress` | Ein Pull Request wurde als in Bearbeitung befindlich markiert.
| `pull_request.indirect_merge` | Ein Pull Request wurde als gemergt betrachtet, weil die Commits des Pull Requests in den Zielbranch gemergt wurden.
| `pull_request.merge` | Ein Pull Request wurde gemergt. Weitere Informationen findest du unter [Mergen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).
| `pull_request.ready_for_review` | Ein Pull Request wurde als zum Review bereit markiert. Weitere Informationen findest du unter [Ändern der Stage eines Pull Requests](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review).
| `pull_request.remove_review_request` | Eine Reviewanforderung wurde von einem Pull Request entfernt. Weitere Informationen findest du unter [Informationen zu Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).
| `pull_request.reopen` | Ein Pull Request wurde erneut geöffnet, nachdem er zuvor geschlossen wurde.
| `pull_request_review.delete` | Ein Review für einen Pull Request wurde gelöscht.
| `pull_request_review.dismiss` | Ein Review für einen Pull Request wurde geschlossen. Weitere Informationen findest du unter [Schließen eines Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).
| `pull_request_review.submit` | Ein Review wurde für einen Pull Request übermittelt. Weitere Informationen findest du unter [Informationen zu Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).

## `pull_request_review`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `pull_request_review.delete` | Ein Review für einen Pull Request wurde gelöscht.
| `pull_request_review.dismiss` | Ein Review für einen Pull Request wurde geschlossen. Weitere Informationen findest du unter [Schließen eines Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).
| `pull_request_review.submit` | Ein Review für einen Pull Request wurde übermittelt. Weitere Informationen findest du unter [Übermitteln deines Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review).

## `pull_request_review_comment`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `pull_request_review_comment.create` | Einem Pull Request wurde ein Reviewkommentar hinzugefügt. Weitere Informationen findest du unter [Informationen zu Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).
| `pull_request_review_comment.delete` | Ein Reviewkommentar für einen Pull Request wurde gelöscht.
| `pull_request_review_comment.update` | Ein Reviewkommentar für einen Pull Request wurde geändert.

## `repo`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repo.access`         | Die Sichtbarkeit eines Repositorys wurde in privat{%- ifversion ghes %}, öffentlich{% endif %} oder intern geändert.
| `repo.actions_enabled` | {% data variables.product.prodname_actions %} wurde für ein Repository aktiviert.
| `repo.add_member`     | Einem Repository wurde ein Mitarbeiter hinzugefügt.
| `repo.add_topic`     | Einem Repository wurde ein Thema hinzugefügt.
| `repo.advanced_security_disabled` | {% data variables.product.prodname_GH_advanced_security %} wurde für ein Repository deaktiviert.
| `repo.advanced_security_enabled` | {% data variables.product.prodname_GH_advanced_security %} wurde für ein Repository aktiviert.
| `repo.advanced_security_policy_selected_member_disabled` | Ein Repositoryadministrator hat verhindert, dass {% data variables.product.prodname_GH_advanced_security %}-Features für ein Repository aktiviert werden.
| `repo.advanced_security_policy_selected_member_enabled` | Ein Repositoryadministrator hat zugelassen, dass {% data variables.product.prodname_GH_advanced_security %}-Features für ein Repository aktiviert werden.
| `repo.archived`       | Ein Repository wurde archiviert. Weitere Informationen findest du unter [Archivieren eines {% data variables.product.prodname_dotcom %}-Repositorys](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository).
| `repo.code_scanning_analysis_deleted` | Die Codescananalyse für ein Repository wurde gelöscht. Weitere Informationen findest du unter [Löschen einer Codescananalyse aus einem Repository](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository).
| `repo.change_merge_setting` | Pull Request-Mergeoptionen wurden für ein Repository geändert.
| `repo.clear_actions_settings` | Ein Repositoryadministrator hat {% data variables.product.prodname_actions %}-Richtlinieneinstellungen für ein Repository gelöscht.
| `repo.config`         | Ein Repositoryadministrator hat erzwungene Pushs blockiert. Weitere Informationen findest du unter [Blockieren erzwungener Pushs an ein Repository](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/).
{%- ifversion fpt or ghec %} | `repo.config.disable_collaborators_only` | Die Interaktionsgrenze nur für Mitarbeiter wurde deaktiviert. Weitere Informationen findest du unter [Einschränken von Interaktionen in deinem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.disable_contributors_only` | Die Interaktionsgrenze nur für vorherige Mitwirkende wurde in einem Repository deaktiviert. Weitere Informationen findest du unter [Einschränken von Interaktionen in deinem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.disable_sockpuppet_disallowed` | Die Interaktionsgrenze nur für vorhandene Benutzer wurde in einem Repository deaktiviert. Weitere Informationen findest du unter [Einschränken von Interaktionen in deinem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.enable_collaborators_only` | Die Interaktionsgrenze nur für Mitarbeiter wurde in einem Repository aktiviert. Benutzer, die keine Mitarbeiter oder Organisationsmitglieder sind, konnten für eine festgelegte Dauer nicht mit einem Repository interagieren. Weitere Informationen findest du unter [Einschränken von Interaktionen in deinem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.enable_contributors_only` | Die Interaktionsgrenze nur für vorherige Mitwirkende wurde in einem Repository aktiviert. Benutzer, die keine vorherigen Mitwirkenden, Mitarbeiter oder Organisationsmitglieder sind, konnten für eine festgelegte Dauer nicht mit einem Repository interagieren. Weitere Informationen findest du unter [Einschränken von Interaktionen in deinem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.enable_sockpuppet_disallowed` | Die Interaktionsgrenze für vorhandene Benutzer wurde in einem Repository aktiviert. Neue Benutzer können für eine festgelegte Dauer nicht mit einem Repository interagieren. Vorhandene Benutzer des Repositorys, Mitwirkende, Mitarbeiter oder Organisationsmitglieder können mit einem Repository interagieren. Weitere Informationen findest du unter [Einschränken von Interaktionen in deinem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
{%- endif %} {%- ifversion ghes %} | `repo.config.disable_anonymous_git_access` | Anonymer Git-Lesezugriff wurde für ein Repository deaktiviert. Weitere Informationen findest du unter [Aktivieren des anonymen Git-Lesezugriffs für ein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository).
| `repo.config.enable_anonymous_git_access` | Der anonyme Git-Lesezugriff wurde für ein Repository aktiviert. Weitere Informationen findest du unter [Aktivieren des anonymen Git-Lesezugriffs für ein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository).
| `repo.config.lock_anonymous_git_access` | Die Einstellung für den anonymen Git-Lesezugriff eines Repositorys wurde gesperrt, wodurch Repositoryadministratoren daran gehindert werden, diese Einstellung zu ändern (zu aktivieren oder zu deaktivieren). Weitere Informationen findest du unter [Verhindern der Änderung des anonymen Git-Lesezugriffs durch Benutzer](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
| `repo.config.unlock_anonymous_git_access` | Die Einstellung für den anonymen Git-Lesezugriff wurde entsperrt, wodurch Repositoryadministratoren diese Einstellung ändern (aktivieren oder deaktivieren) können. Weitere Informationen findest du unter [Verhindern der Änderung des anonymen Git-Lesezugriffs durch Benutzer](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
{%- endif %} | `repo.create` | Ein Repository wurde erstellt.
| `repo.create_actions_secret` | Ein {% data variables.product.prodname_actions %}-Geheimnis wurde für ein Repository erstellt. Weitere Informationen findest du unter [Erstellen verschlüsselter Geheimnisse für ein Repository](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository).
| `repo.create_integration_secret` | Ein {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %}- oder {% data variables.product.prodname_github_codespaces %}{% endif %}-Integrationsgeheimnis wurde für ein Repository erstellt.
| `repo.destroy` | Ein Repository wurde gelöscht.
{%- ifversion ghes %} | `repo.disk_archive` | Ein Repository wurde auf dem Datenträger archiviert. Weitere Informationen findest du unter [Archivieren von Repositorys](/repositories/archiving-a-github-repository/archiving-repositories).
{%- endif %} | `repo.download_zip` | Ein Quellcodearchiv eines Repositorys wurde als ZIP-Datei heruntergeladen.
| `repo.pages_cname` | Eine benutzerdefinierte {% data variables.product.prodname_pages %}-Domäne wurde in einem Repository geändert.
| `repo.pages_create` | Eine {% data variables.product.prodname_pages %}-Website wurde erstellt.
| `repo.pages_destroy` | Eine {% data variables.product.prodname_pages %}-Website wurde gelöscht.
| `repo.pages_https_redirect_disabled` | HTTPS-Umleitungen wurden für eine {% data variables.product.prodname_pages %}-Website deaktiviert.
| `repo.pages_https_redirect_enabled` | HTTPS-Umleitungen wurden für eine {% data variables.product.prodname_pages %}-Website aktiviert.
| `repo.pages_source` | Eine {% data variables.product.prodname_pages %}-Quelle wurde geändert.
| `repo.pages_private` | Die Sichtbarkeit einer {% data variables.product.prodname_pages %}-Website wurde in privat geändert.
| `repo.pages_public` | Die Sichtbarkeit einer {% data variables.product.prodname_pages %}-Website wurde in öffentlich geändert.
| `repo.register_self_hosted_runner` | Ein neuer selbstgehosteter Runner wurde registriert. Weitere Informationen findest du unter [Hinzufügen eines selbstgehosteten Runners zu einem Repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository).
| `repo.remove_self_hosted_runner` | Ein selbstgehosteter Runner wurde entfernt. Weitere Informationen findest du unter [Entfernen eines Runners aus einem Repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).
| `repo.remove_actions_secret` | Ein {% data variables.product.prodname_actions %}-Geheimnis wurde für ein Repository gelöscht.
| `repo.remove_integration_secret` | Ein {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %}- oder {% data variables.product.prodname_github_codespaces %}{% endif %}-Integrationsgeheimnis wurde für ein Repository gelöscht.
| `repo.remove_member` | Ein Mitarbeiter wurde aus einem Repository entfernt.
| `repo.remove_topic` | Ein Thema wurde aus einem Repository entfernt.
| `repo.rename` | Ein Repository wurde umbenannt.
{%- ifversion fpt or ghec %} | `repo.set_actions_fork_pr_approvals_policy` | Die Einstellung zum Anfordern von Genehmigungen für Workflows aus öffentlichen Forks wurde für ein Repository geändert. Weitere Informationen findest du unter [Konfigurieren der erforderlichen Genehmigung für Workflows aus öffentlichen Forks](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks).
{%- endif %} | `repo.set_actions_retention_limit` | Der Aufbewahrungszeitraum für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle in einem Repository wurde geändert. Weitere Informationen findest du unter [Konfigurieren des Aufbewahrungszeitraums für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle in deinem Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository).
| `repo.self_hosted_runner_online` | Die Runneranwendung wurde gestartet. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `repo.self_hosted_runner_offline` | Die Runneranwendung wurde beendet. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `repo.self_hosted_runner_updated` | Die Runneranwendung wurde aktualisiert. Kann über die REST-API und die Benutzeroberfläche angezeigt werden. Im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)“.
| `repo.staff_unlock` | Ein*e Unternehmensadministrator*in oder GitHub-Mitarbeiter*in (mit Berechtigung von einem/einer Repositoryadministrator*in) hat das Repository vorübergehend entsperrt.
| `repo.transfer` | Ein Benutzer hat eine Anforderung zum Empfangen eines übertragenen Repositorys akzeptiert.
| `repo.transfer_outgoing` | Ein Repository wurde in ein anderes Repositorynetzwerk übertragen.
| `repo.transfer_start` | Ein Benutzer hat eine Anforderung gesendet, ein Repository an einen anderen Benutzer oder an eine andere Organisation zu übertragen.
| `repo.unarchived` | Die Archivierung eines Repositorys wurde aufgehoben. Weitere Informationen findest du unter [Archivieren eines {% data variables.product.prodname_dotcom %}-Repositorys](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository).
| `repo.update_actions_settings` | Ein Repositoryadministrator hat {% data variables.product.prodname_actions %}-Richtlinieneinstellungen für ein Repository geändert.
| `repo.update_actions_secret` | Ein {% data variables.product.prodname_actions %}-Geheimnis wurde aktualisiert.
| `repo.update_actions_access_settings` | Die Einstellung zum Steuern der Verwendung eines Repositorys durch {% data variables.product.prodname_actions %}-Workflows in anderen Repositorys wurde geändert.
| `repo.update_default_branch` | Der Standardbranch für ein Repository wurde geändert.
| `repo.update_integration_secret` | Ein {% data variables.product.prodname_dependabot %}- oder {% data variables.product.prodname_github_codespaces %}-Integrationsgeheimnis wurde für ein Repository aktualisiert.
| `repo.update_member` | Die Berechtigung eines Benutzers für ein Repository wurde geändert.

{%- ifversion fpt or ghec %}
## `repository_advisory`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_advisory.close` | Jemand hat einen Sicherheitshinweis geschlossen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dotcom %}-Sicherheitshinweisen](/github/managing-security-vulnerabilities/about-github-security-advisories).
| `repository_advisory.cve_request` | Jemand hat eine CVE-Nummer (Common Vulnerabilities and Exposures, gängige Sicherheitsrisiken und Gefährdungen) von {% data variables.product.prodname_dotcom %} für den Entwurf eines Sicherheitshinweises angefordert.
| `repository_advisory.github_broadcast` | {% data variables.product.prodname_dotcom %} hat einen Sicherheitshinweis in der {% data variables.product.prodname_advisory_database %} veröffentlicht.
| `repository_advisory.github_withdraw` | {% data variables.product.prodname_dotcom %} hat einen Sicherheitshinweis zurückgezogen, der fälschlicherweise veröffentlicht wurde.
| `repository_advisory.open` | Jemand hat den Entwurf eines Sicherheitshinweises geöffnet.
| `repository_advisory.publish` | Jemand veröffentlicht einen Sicherheitshinweis.
| `repository_advisory.reopen` | Jemand hat einen Sicherheitshinweis erneut geöffnet.
| `repository_advisory.update` | Jemand hat einen Entwurf oder einen veröffentlichten Sicherheitshinweis bearbeitet.

## `repository_content_analysis`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_content_analysis.enable` | Ein Organisationsbesitzer oder Repositoryadministrator [hat die Datenverwendungseinstellungen für ein privates Repository aktiviert](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `repository_content_analysis.disable` | Ein Organisationsbesitzer oder Repositoryadministrator [hat die Datenverwendungseinstellungen für ein privates Repository deaktiviert](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

## `repository_dependency_graph`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_dependency_graph.disable` | Ein Repositorybesitzer oder -administrator hat das Abhängigkeitsdiagramm für ein privates Repository deaktiviert. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
| `repository_dependency_graph.enable` | Ein Repositorybesitzer oder -administrator hat das Abhängigkeitsdiagramm für ein privates Repository aktiviert.
{%- endif %}

## `repository_image`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_image.create` | Ein Bild zur Darstellung eines Repositorys wurde hochgeladen.
| `repository_image.destroy` | Ein Bild zur Darstellung eines Repositorys wurde gelöscht.

## `repository_invitation`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_invitation.accept` | Eine Einladung zum Beitreten zu einem Repository wurde angenommen.
| `repository_invitation.create` | Eine Einladung zum Beitreten zu einem Repository wurde gesendet.
| `repository_invitation.reject` | Eine Einladung zum Beitreten zu einem Repository wurde abgelehnt.

## `repository_projects_change`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_projects_change.clear` | Die Repositoryprojektrichtlinie wurde für eine Organisation oder für alle Organisationen im Unternehmen entfernt. Organisationsadministratoren können jetzt ihre Repositoryprojekteinstellungen steuern. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Projekte in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise).
| `repository_projects_change.disable` | Repositoryprojekte wurden für ein Repository, alle Repositorys in einer Organisation oder alle Organisationen in einem Unternehmen deaktiviert.
| `repository_projects_change.enable` | Repositoryprojekte wurden für ein Repository, alle Repositorys in einer Organisation oder alle Organisationen in einem Unternehmen aktiviert.

{%- ifversion ghec or ghes or ghae %}
## `repository_secret_scanning`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_secret_scanning.disable` | Ein Repositorybesitzer oder -administrator hat die Geheimnisüberprüfung für ein {% ifversion ghec %}privates oder internes {% endif %}Repository deaktiviert. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning).
| `repository_secret_scanning.enable` | Ein Repositorybesitzer oder -administrator hat die Geheimnisüberprüfung für ein {% ifversion ghec %}privates oder internes {% endif %}Repository aktiviert.
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}

## `repository_secret_scanning_custom_pattern`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `repository_secret_scanning_custom_pattern.create` | Ein benutzerdefiniertes Muster wird für die Geheimnisüberprüfung in einem Repository veröffentlicht. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository).
| `repository_secret_scanning_custom_pattern.delete` | Ein benutzerdefiniertes Muster wird für die Geheimnisüberprüfung in einem Repository entfernt. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern).
| `repository_secret_scanning_custom_pattern.update` | Änderungen an einem benutzerdefinierten Muster werden für die Geheimnisüberprüfung in einem Repository gespeichert. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern).

## `repository_secret_scanning_push_protection`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `repository_secret_scanning_push_protection.disable` | Ein Repositorybesitzer oder -administrator hat die Geheimnisüberprüfung für ein Repository deaktiviert. Weitere Informationen findest du unter [Schützen von Pushs mit Geheimnisüberprüfung](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
| `repository_secret_scanning_push_protection.enable` | Ein Repositorybesitzer oder -administrator hat die Geheimnisüberprüfung für ein Repository aktiviert. Weitere Informationen findest du unter [Schützen von Pushs mit Geheimnisüberprüfung](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
{%- endif %}
## `repository_visibility_change`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_visibility_change.clear` | Die Änderungseinstellung für die Repositorysichtbarkeit wurde für eine Organisation oder ein Unternehmen gelöscht. Weitere Informationen findest du unter [Einschränken von Sichtbarkeitsänderungen für Repositorys in deiner Organisation](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization) und [Erzwingen einer Richtlinie für Änderungen an der Repositorysichtbarkeit](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility) für ein Unternehmen.
| `repository_visibility_change.disable` | Die Möglichkeit für Unternehmensmitglieder, die Sichtbarkeit eines Repositorys zu aktualisieren, wurde deaktiviert. Mitglieder können die Repositorysichtbarkeit in einer Organisation oder in allen Organisationen in einem Unternehmen nicht ändern.
| `repository_visibility_change.enable` | Die Möglichkeit für Unternehmensmitglieder, die Sichtbarkeit eines Repositorys zu aktualisieren, wurde aktiviert. Mitglieder können die Repositorysichtbarkeit in einer Organisation oder in allen Organisationen in einem Unternehmen ändern.

## `repository_vulnerability_alert`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_vulnerability_alert.create` | {% data variables.product.product_name %} hat eine {% data variables.product.prodname_dependabot %}-Warnung für ein Repository erstellt, das eine unsichere Abhängigkeit verwendet. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
| `repository_vulnerability_alert.dismiss` | Ein*e Organisationsbesitzer*in oder Repositoryadministrator*in hat eine {% data variables.product.prodname_dependabot %}-Warnung zu einer Abhängigkeit mit Sicherheitsrisiken{% ifversion GH-advisory-db-supports-malware %} oder Malware{% endif %}geschlossen.
| `repository_vulnerability_alert.resolve` | Jemand mit Schreibzugriff auf ein Repository hat Änderungen gepusht, um eine {% data variables.product.prodname_dependabot %}-Warnung in einer Projektabhängigkeit zu aktualisieren und aufzulösen.

{%- ifversion fpt or ghec %}
## `repository_vulnerability_alerts`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `repository_vulnerability_alerts.authorized_users_teams` | Ein*e Organisationsbesitzer*in oder Repositoryadministrator*in hat die Liste der Personen oder Teams aktualisiert, die dazu autorisiert sind, {% data variables.product.prodname_dependabot_alerts %} für das Repository zu erhalten. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).
| `repository_vulnerability_alerts.disable` | Ein Repositorybesitzer oder Repositoryadministrator hat {% data variables.product.prodname_dependabot_alerts %} deaktiviert.
| `repository_vulnerability_alerts.enable` | Ein Repositorybesitzer oder Repositoryadministrator hat {% data variables.product.prodname_dependabot_alerts %} aktiviert.
{%- endif %}

## `required_status_check`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `required_status_check.create` | Eine Statusüberprüfung wurde für einen geschützten Branch als erforderlich markiert. Weitere Informationen findest du unter [Anfordern von Statusüberprüfungen vor dem Mergen](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging).
| `required_status_check.destroy` | Eine Statusüberprüfung ist für einen geschützten Branch nicht mehr als erforderlich markiert. Weitere Informationen findest du unter [Anfordern von Statusüberprüfungen vor dem Mergen](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging).

{%- ifversion ghec or ghes %}
## `restrict_notification_delivery`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `restrict_notification_delivery.enable` | E-Mail-Benachrichtigungseinschränkungen für eine Organisation oder ein Unternehmen wurden aktiviert. Weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization) und [Einschränken von E-Mail-Benachrichtigungen für dein Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).
| `restrict_notification_delivery.disable` | E-Mail-Benachrichtigungseinschränkungen für eine Organisation oder ein Unternehmen wurden deaktiviert. Weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization) und [Einschränken von E-Mail-Benachrichtigungen für dein Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).
{%- endif %}

{%- ifversion custom-repository-roles %}
## `role`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
|`create` | Ein Organisationsbesitzer hat eine neue benutzerdefinierte Repositoryrolle erstellt. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
|`destroy` | Ein Organisationsbesitzer hat eine benutzerdefinierte Repositoryrolle gelöscht. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
|`update` | Ein Organisationsbesitzer hat eine vorhandene benutzerdefinierte Repositoryrolle bearbeitet. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `secret_scanning`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `secret_scanning.disable` | Ein Organisationsbesitzer hat die Geheimnisüberprüfung für alle vorhandenen{% ifversion ghec %} privaten oder internen{% endif %} Repositorys deaktiviert. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning).
| `secret_scanning.enable` | Ein Organisationsbesitzer hat die Geheimnisüberprüfung für alle vorhandenen{% ifversion ghec %} privaten oder internen{% endif %} Repositorys aktiviert.

{% ifversion secret-scanning-alert-audit-log %}
## `secret_scanning_alert`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `secret_scanning_alert.create` | {% data variables.product.prodname_dotcom %} hat ein Geheimnis erkannt und eine {% data variables.product.prodname_secret_scanning %}-Warnung erstellt. Weitere Informationen findest du unter [Verwalten von Warnungen von {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning).
| `secret_scanning_alert.reopen` | Ein*e Benutzer*in hat eine {% data variables.product.prodname_secret_scanning %}-Warnung erneut geöffnet.
| `secret_scanning_alert.resolve` | Ein*e Benutzer*in hat eine {% data variables.product.prodname_secret_scanning %}-Warnung aufgelöst.
{% endif %}

## `secret_scanning_new_repos`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `secret_scanning_new_repos.disable` | Ein Organisationsbesitzer hat die Geheimnisüberprüfung für alle neuen{% ifversion ghec %} privaten oder internen{% endif %} Repositorys deaktiviert. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning).
| `secret_scanning_new_repos.enable` | Ein Organisationsbesitzer hat die Geheimnisüberprüfung für alle neuen{% ifversion ghec %} privaten oder internen{% endif %} Repositorys aktiviert.
{%- endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
## `secret_scanning_push_protection`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `bypass` | Wird ausgelöst, wenn ein*e Benutzer*in den Pushschutz für ein Geheimnis umgeht, das durch geheimes Scannen erkannt wurde. Weitere Informationen findest du unter [Umgehen des Pushschutzes für ein Geheimnis](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret).{% endif %}

{%- ifversion ghec or ghes or ghae %}
## `security_key`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `security_key.register` | Ein Sicherheitsschlüssel wurde für ein Konto registriert.
| `security_key.remove` | Ein Sicherheitsschlüssel wurde von einem Konto entfernt.
{%- endif %}

{%- ifversion fpt or ghec %}
## `sponsors`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `sponsors.agreement_sign` | Ein {% data variables.product.prodname_sponsors %}-Vertrag wurde im Auftrag einer Organisation unterzeichnet.
| `sponsors.custom_amount_settings_change` | Benutzerdefinierte Beträge für {% data variables.product.prodname_sponsors %} wurden aktiviert oder deaktiviert, oder der vorgeschlagene benutzerdefinierte Betrag wurde geändert. Weitere Informationen findest du unter [Verwalten deiner Sponsoringebenen](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers).
| `sponsors.fiscal_host_change` | Der Finanzhost für einen {% data variables.product.prodname_sponsors %}-Eintrag wurde aktualisiert.
| `sponsors.withdraw_agreement_signature` | Eine Signatur wurde aus einem {% data variables.product.prodname_sponsors %}-Vertrag zurückgezogen, der für eine Organisation gilt.
| `sponsors.repo_funding_links_file_action` | Die FUNDING-Datei in einem Repository wurde geändert. Weitere Informationen findest du unter [Anzeigen einer Sponsoringschaltfläche in deinem Repository](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository).
| `sponsors.sponsor_sponsorship_cancel` | Ein Sponsoring wurde abgebrochen. Weitere Informationen findest du unter [Herabstufen eines Sponsorings](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship).
| `sponsors.sponsor_sponsorship_create` | Ein Sponsoring wurde durch das Sponsern eines Kontos erstellt. Weitere Informationen findest du unter [Sponsern eines Open-Source-Mitwirkenden](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor).
| `sponsors.sponsor_sponsorship_payment_complete` | Nachdem du ein Konto gesponsert und eine Zahlung geleistet hast, wurde die Sponsorenzahlung als abgeschlossen gekennzeichnet. Weitere Informationen findest du unter [Sponsern eines Open-Source-Mitwirkenden](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor).
| `sponsors.sponsor_sponsorship_preference_change` | Die Option zum Empfangen von E-Mail-Updates von einem gesponserten Konto wurde geändert. Weitere Informationen findest du unter [Verwalten deines Sponsorings](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship).
| `sponsors.sponsor_sponsorship_tier_change` | Ein Sponsoring wurde hoch- oder herabgestuft. Weitere Informationen findest du unter [Hochstufen eines Sponsorings](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship) und [Herabstufen eines Sponsorings](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship).
| `sponsors.sponsored_developer_approve` | Ein {% data variables.product.prodname_sponsors %}-Konto wurde genehmigt. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_sponsors %} für deine Organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization).
| `sponsors.sponsored_developer_create` | Ein {% data variables.product.prodname_sponsors %}-Konto wurde erstellt. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_sponsors %} für deine Organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization).
| `sponsors.sponsored_developer_disable` | Ein {% data variables.product.prodname_sponsors %}-Konto wurde deaktiviert.
| `sponsors.sponsored_developer_profile_update` | Du bearbeitest ein Profil für gesponserte Organisationen. Weitere Informationen findest du unter [Bearbeiten deiner Profildetails für {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors).
| `sponsors.sponsored_developer_redraft` | Ein {% data variables.product.prodname_sponsors %}-Konto wurde vom genehmigten Zustand in den Entwurfszustand zurückversetzt.
| `sponsors.sponsored_developer_request_approval` | Ein Antrag für {% data variables.product.prodname_sponsors %} wurde zur Genehmigung eingereicht. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_sponsors %} für deine Organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization).
| `sponsors.sponsored_developer_tier_description_update` | Die Beschreibung für eine Sponsoringebene wurde geändert. Weitere Informationen findest du unter [Verwalten deiner Sponsoringebenen](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers).
| `sponsors.update_tier_welcome_message` | Die Willkommensnachricht für eine {% data variables.product.prodname_sponsors %}-Ebene für eine Organisation wurde aktualisiert.
| `sponsors.update_tier_repository` | Eine {% data variables.product.prodname_sponsors %}-Ebene hat den Zugriff für ein Repository geändert.
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `ssh_certificate_authority`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `ssh_certificate_authority.create` | Eine SSH-Zertifizierungsstelle für eine Organisation oder ein Unternehmen wurde erstellt. Weitere Informationen findest du unter [Verwalten von SSH-Zertifizierungsstellen deiner Organisation](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) und [Verwalten von SSH-Zertifizierungsstellen für dein Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise).
| `ssh_certificate_authority.destroy` | Eine SSH-Zertifizierungsstelle für eine Organisation oder ein Unternehmen wurde gelöscht. Weitere Informationen findest du unter [Verwalten von SSH-Zertifizierungsstellen deiner Organisation](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) und [Verwalten von SSH-Zertifizierungsstellen für dein Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise).

## `ssh_certificate_requirement`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `ssh_certificate_requirement.enable` | Die Anforderung, dass Mitglieder für den Zugriff auf Organisationsressourcen SSH-Zertifikate verwenden, wurde aktiviert. Weitere Informationen findest du unter [Verwalten von SSH-Zertifizierungsstellen deiner Organisation](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) und [Verwalten von SSH-Zertifizierungsstellen für dein Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise).
| `ssh_certificate_requirement.disable` | Die Anforderung, dass Mitglieder für den Zugriff auf Organisationsressourcen SSH-Zertifikate verwenden, wurde deaktiviert. Weitere Informationen findest du unter [Verwalten von SSH-Zertifizierungsstellen deiner Organisation](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) und [Verwalten von SSH-Zertifizierungsstellen für dein Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise).
{%- endif %}

{% ifversion sso-redirect %}
## `sso_redirect`-Kategorieaktionen

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

| Aktion | BESCHREIBUNG |
|--------|------------ |
`sso_redirect.enable` | Automatische Umleitungen für Benutzer zum einmaligen Anmelden (Single Sign-On, SSO) wurden aktiviert. |
`sso_redirect.disable` | Automatische Umleitungen für Benutzer zum einmaligen Anmelden (Single Sign-On, SSO) wurden deaktiviert. |

Weitere Informationen findest du unter [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users).
{% endif %}

## `staff`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `staff.disable_repo`          | Ein Organisations-{% ifversion ghes %}, Repository- oder Website{% else %} oder Repository{% endif %}administrator hat den Zugriff auf ein Repository und alle zugehörigen Forks deaktiviert.
| `staff.enable_repo`           | Ein Organisations-{% ifversion ghes %}, Repository- oder Website{% else %} oder Repository{% endif %}administrator hat den Zugriff auf ein Repository und alle zugehörigen Forks wieder aktiviert.
{%- ifversion ghes or ghae %} | `staff.exit_fake_login`       | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat eine Sitzung zum Identitätswechsel in {% data variables.product.product_name %} beendet.
| `staff.fake_login`            | Ein Unternehmensbesitzer{% ifversion ghes %} oder Websiteadministrator{% endif %} hat sich bei {% data variables.product.product_name %} als anderer Benutzer angemeldet.
{%- endif %} | `staff.repo_lock`             | Ein Organisations-{% ifversion ghes %}, Repository- oder Website{% else %} oder Repository{% endif %}administrator hat das private Repository eines Benutzers gesperrt (vorübergehend Vollzugriff übernommen).
| `staff.repo_unlock`           | Ein Organisations-{% ifversion ghes %}, Repository- oder Website{% else %} oder Repository{% endif %}administrator hat das private Repository eines Benutzers entsperrt (den vorübergehenden Zugriff beendet).
{%- ifversion ghes %} | `staff.search_audit_log` | Ein Websiteadministrator hat das Überwachungsprotokoll des Websiteadministrators durchsucht.
{%- endif %} | `staff.set_domain_token_expiration` | {% ifversion ghes %}Ein Websiteadministrator oder {% endif %}GitHub-Mitarbeiter hat die Ablaufzeit des Prüfcodes für eine Organisations- oder Unternehmensdomäne festgelegt. {% ifversion ghec or ghes %}Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) und [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %} {%- ifversion ghes %} | `staff.unlock`                |Ein*e Websiteadministrator*in hat alle privaten Repositorys eines Benutzers bzw. einer Benutzerin entsperrt (vorübergehend Vollzugriff darauf erhalten).
{%- endif %} | `staff.unverify_domain` | {% ifversion ghes %}Ein Websiteadministrator oder {% endif %}GitHub-Mitarbeiter hat die Überprüfung einer Organisations- oder Unternehmensdomäne aufgehoben. {% ifversion ghec or ghes %}Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) und [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %} | `staff.verify_domain` | {% ifversion ghes %}Ein*e Websiteadministrator*in oder {% endif %}GitHub-Mitarbeiter*in hat eine Organisations- oder Unternehmensdomäne verifiziert. {% ifversion ghec or ghes %}Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) und [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %} {%- ifversion ghes %} | `staff.view_audit_log` | Ein*e Websiteadministrator*in hat das Überwachungsprotokoll des Websiteadministrators bzw. der Websiteadministratorin eingesehen.
{%- endif %}

## `team`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `team.add_member` | Ein Mitglied einer Organisation wurde einem Team hinzugefügt. Weitere Informationen findest du unter [Hinzufügen von Organisationsmitgliedern zu einem Team](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team).
| `team.add_repository` | Ein Team erhielt Zugriff und Berechtigungen für ein Repository.
| `team.change_parent_team` | Ein untergeordnetes Team wurde erstellt, oder das übergeordnete Element eines untergeordneten Teams wurde geändert. Weitere Informationen findest du unter [Verschieben eines Teams in der Hierarchie deiner Organisation](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy).
| `team.change_privacy` | Die Datenschutzebene eines Teams wurde geändert. Weitere Informationen findest du unter [Ändern der Teamsichtbarkeit](/organizations/organizing-members-into-teams/changing-team-visibility).
| `team.create` | Einem Team wurde ein Benutzerkonto oder ein Repository hinzugefügt.
| `team.delete` | Ein Benutzerkonto oder Repository wurde aus einem Team entfernt.
| `team.destroy` | Ein Team wurde gelöscht.
{%- ifversion ghec or ghes or ghae %} | `team.demote_maintainer` | Ein Benutzer wurde von einem Teambetreuer zu einem Teammitglied zurückgestuft.
| `team.promote_maintainer` | Ein Benutzer wurde von einem Teammitglied zu einem Teambetreuer befördert. Weitere Informationen findest du unter [Befördern eines Organisationsmitglieds zum Teambetreuer](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer).
{%- endif %} | `team.remove_member` | Ein Mitglied einer Organisation wurde aus einem Team entfernt. Weitere Informationen findest du unter [Entfernen von Organisationsmitgliedern aus einem Team](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team).
| `team.remove_repository` | Ein Repository stand nicht mehr unter der Kontrolle eines Teams.
| `team.rename` | Der Name eines Teams wurde geändert.
| `team.update_permission` | Der Zugriff eines Teams wurde geändert.
| `team.update_repository_permission` | Die Berechtigung eines Teams für ein Repository wurde geändert.

## `team_discussions`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `team_discussions.clear` | Ein Organisationsbesitzer hat die Einstellung zum Zulassen von Teamdiskussionen für eine Organisation oder ein Unternehmen gelöscht.
| `team_discussions.disable` | Ein Organisationsbesitzer hat Teamdiskussionen für eine Organisation deaktiviert. Weitere Informationen findest du unter [Deaktivieren von Teamdiskussionen für deine Organisation](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization).
| `team_discussions.enable` | Ein Organisationsbesitzer hat Teamdiskussionen für eine Organisation aktiviert.

{%- ifversion ghec %}
## `team_sync_tenant`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `team_sync_tenant.disabled` | Die Teamsynchronisierung mit einem Mandanten wurde deaktiviert. Weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) und [Verwalten der Teamsynchronisierung für Organisationen in deinem Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).
| `team_sync_tenant.enabled` | Die Teamsynchronisierung mit einem Mandanten wurde aktiviert. Weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) und [Verwalten der Teamsynchronisierung für Organisationen in deinem Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).
| `team_sync_tenant.update_okta_credentials` | Die Okta-Anmeldeinformationen für die Teamsynchronisierung mit einem Mandanten wurden geändert.
{%- endif %}

{%- ifversion fpt or ghes %}
## `two_factor_authentication`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `two_factor_authentication.disabled` | Die [zweistufige Authentifizierung][2fa] wurde für ein Benutzerkonto deaktiviert.
| `two_factor_authentication.enabled`  | Die [zweistufige Authentifizierung][2fa] wurde für ein Benutzerkonto aktiviert.
| `two_factor_authentication.password_reset_fallback_sms` | Ein einmaliger Kennwortcode wurde an eine alternative Telefonnummer eines Benutzerkontos gesendet.
| `two_factor_authentication.recovery_codes_regenerated` | Codes für die zweistufige Authentifizierung zur Wiederherstellung wurden für ein Benutzerkonto neu generiert.
| `two_factor_authentication.sign_in_fallback_sms` | Ein einmaliger Kennwortcode wurde an eine alternative Telefonnummer eines Benutzerkontos gesendet.
| `two_factor_authentication.update_fallback` | Das Fallback der zweistufigen Authentifizierung für ein Benutzerkonto wurde geändert.
{%- endif %}

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication

{%- ifversion fpt or ghes or ghae %}
## `user`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `user.add_email`                  | Einem Benutzerkonto wurde eine E-Mail-Adresse hinzugefügt.
| `user.async_delete`               | Ein asynchroner Auftrag wurde gestartet, um ein Benutzerkonto zu zerstören, wodurch schließlich ein `user.delete`-Ereignis ausgelöst wurde.
| `user.audit_log_export` | Überwachungsprotokolleinträge wurden exportiert.
| `user.block_user` | Ein Benutzer wurde von einem anderen Benutzer{% ifversion ghes %} oder einem Websiteadministrator{% endif %} blockiert.
| `user.change_password`            | Ein Benutzer hat sein Passwort geändert.
| `user.create`                     | Ein neues Benutzerkonto wurde erstellt.
| `user.creation_rate_limit_exceeded` | Die Erstellungsrate von Benutzerkonten, Anwendungen, Issues, Pull Requests oder anderen Ressourcen hat die konfigurierten Ratenlimits überschritten, oder zu viele Benutzer hatten zu schnell Follower.
| `user.delete`                     | Ein Benutzerkonto wurde durch einen asynchronen Auftrag vernichtet.
{%- ifversion ghes %} | `user.demote`                     | Ein Websiteadministrator wurde auf ein normales Benutzerkonto zurückgestuft.
{%- endif %} | `user.destroy`                    | Ein Benutzer hat sein Konto gelöscht und damit `user.async_delete` ausgelöst.
| `user.failed_login`               | Ein Benutzer versucht, sich mit einem falschen Benutzernamen, einem falschen Kennwort oder einem falschen Code zur zweistufigen Authentifizierung anzumelden.
| `user.flag_as_large_scale_contributor` | Ein Benutzerkonto wurde als Mitwirkender mit zahlreichen Beiträgen gekennzeichnet. Nur Beiträge aus öffentlichen Repositorys im Besitz des Benutzers werden in seinem Beitragsdiagramm angezeigt, um Timeouts zu verhindern.
| `user.forgot_password`            | Ein Benutzer hat über die Anmeldeseite eine Kennwortzurücksetzung angefordert.
| `user.hide_private_contributions_count` | Ein Benutzer hat die Sichtbarkeit seiner privaten Beiträge geändert. Die Beiträge zu privaten Repositorys im Profil des Benutzers sind jetzt ausgeblendet. Weitere Informationen findest du unter [Veröffentlichen oder Ausblenden deiner privaten Beiträge in deinem Profil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `user.lockout` | Ein Benutzer wurde aus seinem Konto ausgesperrt.
| `user.login`                      | Ein Benutzer hat sich angemeldet.
{%- ifversion ghes or ghae %} | `user.mandatory_message_viewed`   | Ein Benutzer hat eine obligatorische Nachricht angezeigt. Weitere Informationen findest du unter [Anpassen von Benutzernachrichten für dein Unternehmen](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise).
{%- endif %} | `user.minimize_comment` | Ein Kommentar von einem Benutzer wurde minimiert.
{%- ifversion ghes %} | `user.promote`                    | Ein normales Benutzerkonto wurde auf einen Websiteadministrator höhergestuft.
{%- endif %} | `user.recreate` | Das Konto eines Benutzers wurde wiederhergestellt.
| `user.remove_email`               | Eine E-Mail-Adresse wurde aus einem Benutzerkonto entfernt.
| `user.remove_large_scale_contributor_flag` | Ein Benutzerkonto wurde nicht mehr als Mitwirkender mit zahlreichen Beiträgen gekennzeichnet.
| `user.rename`                     | Ein Benutzername wurde geändert.
| `user.reset_password` | Ein Benutzer hat sein Kontokennwort zurückgesetzt.
| `user.show_private_contributions_count` | Ein Benutzer hat die Sichtbarkeit seiner privaten Beiträge geändert. Die Beiträge zu privaten Repositorys im Profil des Benutzers werden jetzt angezeigt. Weitere Informationen findest du unter [Veröffentlichen oder Ausblenden deiner privaten Beiträge in deinem Profil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `user.sign_in_from_unrecognized_device` | Ein Benutzer hat sich von einem nicht erkannten Gerät aus angemeldet.
| `user.sign_in_from_unrecognized_device_and_location` | Ein Benutzer hat sich von einem nicht erkannten Gerät und Standort aus angemeldet.
| `user.sign_in_from_unrecognized_location` | Ein Benutzer hat sich von einem nicht erkannten Standort aus angemeldet.
| `user.suspend`                    | Ein Benutzerkonto wurde von einem Unternehmensbesitzer {% ifversion ghes %}oder Websiteadministrator {% endif %}angehalten.
| `user.two_factor_challenge_failure` | Fehler bei einer 2FA-Herausforderung für ein Benutzerkonto.
| `user.two_factor_challenge_success` | Eine 2FA-Herausforderung für ein Benutzerkonto wurde erfolgreich verarbeitet.
| `user.two_factor_recover` | Ein Benutzer hat seine 2FA-Wiederherstellungscodes verwendet.
| `user.two_factor_recovery_codes_downloaded` | Ein Benutzer hat 2FA-Wiederherstellungscodes für sein Konto heruntergeladen.
| `user.two_factor_recovery_codes_printed` | Ein Benutzer hat 2FA-Wiederherstellungscodes für sein Konto gedruckt.
| `user.two_factor_recovery_codes_viewed` | Ein Benutzer hat 2FA-Wiederherstellungscodes für sein Konto angezeigt.
| `user.two_factor_requested`       | Ein Benutzer wurde zur Eingabe eines Codes zur zweistufigen Authentifizierung aufgefordert.
| `user.unblock_user` | Die Blockierung eines Benutzers wurde von einem anderen Benutzer{% ifversion ghes %} oder einem Websiteadministrator{% endif %} aufgehoben.
| `user.unminimize_comment` | Die Minimierung eines Kommentars von einem Benutzer wurde aufgehoben.
| `user.unsuspend` | Ein Benutzerkonto wurde von einem Unternehmensbesitzer {% ifversion ghes %}oder Websiteadministrator {% endif %}entsperrt.
{%- endif %}

{%- ifversion ghec or ghes %}
## `user_license`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------|-------------
| `user_license.create` | Eine Arbeitsplatzlizenz für einen Benutzer in einem Unternehmen wurde erstellt.
| `user_license.destroy` | Eine Arbeitsplatzlizenz für einen Benutzer in einem Unternehmen wurde gelöscht.
| `user_license.update` | Der Typ einer Arbeitsplatzlizenz für einen Benutzer in einem Unternehmen wurde geändert.
{%- endif %}

## `workflows`-Kategorieaktionen

{% data reusables.audit_log.audit-log-events-workflows %}
