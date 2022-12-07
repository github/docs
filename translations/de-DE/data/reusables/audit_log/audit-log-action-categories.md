---
ms.openlocfilehash: 1dd9305ca2b7cb3e8d25d697de8ae3a83e0c46bb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: "148183980"
---
| Kategoriename | BESCHREIBUNG
|------------------|-------------------
{%- ifversion fpt or ghec %} | `account` | Enthält Aktivitäten im Zusammenhang mit einem Organisationskonto.
| `advisory_credit`   | Enthält Aktivitäten im Zusammenhang mit Angaben dazu, von welchen Mitwirkenden Inhalte für Sicherheitsempfehlungen in der {% data variables.product.prodname_advisory_database %} stammen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dotcom %}-Sicherheitshinweisen](/github/managing-security-vulnerabilities/about-github-security-advisories).
{%- endif %} | `artifact` | Enthält Aktivitäten im Zusammenhang mit {% data variables.product.prodname_actions %}-Artefakten für Workflowausführungen.
{%- ifversion audit-log-streaming %} | `audit_log_streaming` | Enthält Aktivitäten im Zusammenhang mit Streamingüberwachungsprotokollen für Organisationen in einem Unternehmenskonto.
{%- endif %} {%- ifversion fpt or ghec %} | `billing` | Enthält Aktivitäten im Zusammenhang mit der Abrechnung einer Organisation.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `business`  | Enthält Aktivitäten im Zusammenhang mit Geschäftseinstellungen für ein Unternehmen.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_advanced_security` | Enthält Aktivitäten im Zusammenhang mit {% data variables.product.prodname_GH_advanced_security %} in einem Unternehmen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning` | Enthält Aktivitäten im Zusammenhang mit {% data variables.product.prodname_secret_scanning %} in einem Unternehmen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `business_secret_scanning_custom_pattern` | Enthält Aktivitäten im Zusammenhang mit benutzerdefinierten Mustern zur {% data variables.product.prodname_secret_scanning %} in einem Unternehmen.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_secret_scanning_push_protection` | Enthält Aktivitäten im Zusammenhang mit dem Pushschutzfeature von {% data variables.product.prodname_secret_scanning %} in einem Unternehmen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection_custom_message`| Enthält Aktivitäten im Zusammenhang mit der benutzerdefinierten Nachricht, die angezeigt wird, wenn der Pushschutz in einem Unternehmen ausgelöst wird. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_GH_advanced_security %}-Features für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
{%- endif %} | `checks`   | Enthält Aktivitäten im Zusammenhang mit Überprüfungssammlungen und -ausführungen.
{%- ifversion fpt or ghec %} | `codespaces` | Enthält Aktivitäten im Zusammenhang mit den Codespaces einer Organisation.
{%- endif %} | `commit_comment` | Enthält Aktivitäten im Zusammenhang mit dem Aktualisieren oder Löschen von Commitkommentaren.
{%- ifversion ghes %} | `config_entry` |  Enthält Aktivitäten im Zusammenhang mit Konfigurationseinstellungen. Diese Ereignisse sind nur im Überwachungsprotokoll des Websiteadministrators sichtbar.
{%- endif %} | `dependabot_alerts` | Umfasst Konfigurationsaktivitäten auf Organisationsebene für {% data variables.product.prodname_dependabot_alerts %} in vorhandenen Repositorys Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
| `dependabot_alerts_new_repos`   | Enthält Konfigurationsaktivitäten auf Organisationsebene für {% data variables.product.prodname_dependabot_alerts %} in neuen Repositorys, die in der Organisation erstellt wurden.
| `dependabot_repository_access` | Enthält Aktivitäten im Zusammenhang mit den privaten Repositorys in einer Organisation, auf die {% data variables.product.prodname_dependabot %} zugreifen darf.
{%- ifversion fpt or ghec or ghes %} | `dependabot_security_updates`   | Enthält Konfigurationsaktivitäten auf Organisationsebene für {% data variables.product.prodname_dependabot_security_updates %} in vorhandenen Repositorys. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates).
| `dependabot_security_updates_new_repos` | Enthält Konfigurationsaktivitäten auf Organisationsebene für {% data variables.product.prodname_dependabot_security_updates %} für neue Repositorys, die in der Organisation erstellt wurden.
{%- endif %} | `dependency_graph` | Enthält Konfigurationsaktivitäten auf Organisationsebene für Abhängigkeitsdiagramme für Repositorys. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
| `dependency_graph_new_repos`  | Enthält Konfigurationsaktivitäten auf Organisationsebene für neue Repositorys, die in der Organisation erstellt wurden.
{%- ifversion fpt or ghec %} | `discussion` | Enthält Aktivitäten im Zusammenhang mit Teamdiskussionen.
| `discussion_comment` | Enthält Aktivitäten im Zusammenhang mit Kommentaren, die in Diskussionen auf einer Teamseite veröffentlicht wurden.
| `discussion_post`   | Enthält Aktivitäten im Zusammenhang mit Diskussionen, die auf einer Teamseite veröffentlicht wurden.
| `discussion_post_reply`   | Enthält Aktivitäten im Zusammenhang mit Antworten auf Diskussionen, die auf einer Teamseite veröffentlicht wurden.
{%- endif %} {%- ifversion ghec or ghes %} | `dotcom_connection` | Enthält Aktivitäten im Zusammenhang mit {% data variables.product.prodname_github_connect %}.
| `enterprise` | Enthält Aktivitäten im Zusammenhang mit Unternehmenseinstellungen.
{%- endif %} {%- ifversion ghec %} | `enterprise_domain` | Enthält Aktivitäten im Zusammenhang mit überprüften Unternehmensdomänen.
| `enterprise_installation` | Enthält Aktivitäten im Zusammenhang mit {% data variables.product.prodname_github_app %}s, die einer {% data variables.product.prodname_github_connect %}-Unternehmensverbindung zugeordnet sind.
{%- endif %} {%- ifversion fpt or ghec %} | `environment` | Enthält Aktivitäten im Zusammenhang mit {% data variables.product.prodname_actions %}-Umgebungen.
{%- endif %} {%- ifversion ghae %} | `external_group` | Enthält Aktivitäten im Zusammenhang mit Okta-Gruppen.
| `external_identity` | Enthält Aktivitäten im Zusammenhang mit einem Benutzer in einer Okta-Gruppe.
{%- endif %} | `gist` | Enthält Aktivitäten im Zusammenhang mit Gists.
| `hook` | Enthält Aktivitäten im Zusammenhang mit Webhooks.
| `integration` | Enthält Aktivitäten im Zusammenhang mit Integrationen in einem Konto.
| `integration_installation` | Enthält Aktivitäten im Zusammenhang mit Integrationen, die in einem Konto installiert sind.
| `integration_installation_request`  | Enthält Aktivitäten im Zusammenhang mit Anforderungen, die von Organisationsmitgliedern an Besitzer*innen gesendet werden, um Integrationen zur Verwendung innerhalb der Organisation genehmigen zu lassen.
{%- ifversion ghec or ghae %} | `ip_allow_list`   | Enthält Aktivitäten im Zusammenhang mit dem Aktivieren oder Deaktivieren der IP-Zulassungsliste für eine Organisation.
| `ip_allow_list_entry`   | Enthält Aktivitäten im Zusammenhang mit dem Erstellen, Löschen und Bearbeiten eines IP-Zulassungslisteneintrags für eine Organisation.
{%- endif %} | `issue`  | Enthält Aktivitäten im Zusammenhang mit dem Anheften, Übertragen oder Löschen eines Issues in einem Repository.
| `issue_comment` | Enthält Aktivitäten im Zusammenhang mit dem Anheften, Übertragen oder Löschen von Issuekommentaren.
| `issues` | Enthält Aktivitäten im Zusammenhang mit dem Aktivieren oder Deaktivieren der Issueerstellung für eine Organisation.
{%- ifversion fpt or ghec %} | `marketplace_agreement_signature` | Enthält Aktivitäten im Zusammenhang mit der Unterzeichnung der {% data variables.product.prodname_marketplace %}-Entwicklervereinbarung.
| `marketplace_listing` | Enthält Aktivitäten im Zusammenhang mit dem Auflisten von Apps in {% data variables.product.prodname_marketplace %}.
{%- endif %} | `members_can_create_pages`   | Enthält Aktivitäten zum Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für Repositorys in der Organisation. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
| `members_can_create_private_pages` | Enthält Aktivitäten zum Verwalten der Veröffentlichung privater {% data variables.product.prodname_pages %}-Websites für Repositorys in der Organisation.
| `members_can_create_public_pages` | Enthält Aktivitäten zum Verwalten der Veröffentlichung öffentlicher {% data variables.product.prodname_pages %}-Websites für Repositorys in der Organisation.
{%- ifversion ghec or ghes or ghae %} | `members_can_delete_repos` | Enthält Aktivitäten im Zusammenhang mit der Aktivierung oder Deaktivierung der Repositoryerstellung für eine Organisation.
{%- endif %} {%- ifversion fpt or ghec %} | `members_can_view_dependency_insights` | Enthält Konfigurationsaktivitäten auf Organisationsebene, mit denen Organisationsmitglieder Abhängigkeitseinblicke anzeigen können.
| `migration` | Enthält Aktivitäten zum Übertragen von Daten von einem *Quellspeicherort* (z. B. einer {% data variables.product.prodname_dotcom_the_website %}-Organisation oder einer {% data variables.product.prodname_ghe_server %}-Instanz) an eine {% data variables.product.prodname_ghe_server %}-*Zielinstanz*.
{%- endif %} | `oauth_access` | Enthält Aktivitäten im Zusammenhang mit OAuth-Zugriffstoken.
| `oauth_application` | Enthält Aktivitäten im Zusammenhang mit OAuth-Apps.
{%- ifversion fpt or ghec %} | `oauth_authorization` | Enthält Aktivitäten im Zusammenhang mit der Autorisierung von OAuth-Apps.
{%- endif %} | `org`   | Enthält Aktivitäten im Zusammenhang mit der Organisationsmitgliedschaft.
{%- ifversion ghec or ghes or ghae %} | `org_credential_authorization` | Enthält Aktivitäten im Zusammenhang mit der Autorisierung von Anmeldeinformationen für die Verwendung mit SAML Single Sign-On.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org_secret_scanning_custom_pattern` | Enthält Aktivitäten im Zusammenhang mit benutzerdefinierten Mustern zur Geheimnisüberprüfung in einer Organisation. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning).
| `org.secret_scanning_push_protection` | Enthält Aktivitäten im Zusammenhang mit benutzerdefinierten Mustern für die Geheimnisüberprüfung in einer Organisation. Weitere Informationen findest du unter [Schützen von Pushs mit Geheimnisüberprüfung](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
{%- endif %} | `organization_default_label` | Enthält Aktivitäten im Zusammenhang mit Standardbezeichnungen für Repositorys in einer Organisation.
{%- ifversion fpt or ghec or ghes %} | `organization_domain` | Enthält Aktivitäten im Zusammenhang mit überprüften Organisationsdomänen.
| `organization_projects_change` | Enthält Aktivitäten im Zusammenhang mit organisationsweiten Projektboards in einem Unternehmen.
{%- endif %} {%- ifversion fpt or ghec %} | `pages_protected_domain` | Enthält Aktivitäten im Zusammenhang mit überprüften benutzerdefinierten Domänen für {% data variables.product.prodname_pages %}.
| `payment_method`  | Enthält Aktivitäten im Zusammenhang mit der Zahlungsweise einer Organisation für {% data variables.product.prodname_dotcom %}.
| `prebuild_configuration` | Enthält Aktivitäten im Zusammenhang mit Prebuildkonfigurationen für {% data variables.product.prodname_github_codespaces %}.
{%- endif %} {%- ifversion ghes %} | `pre_receive_environment` | Enthält Aktivitäten im Zusammenhang mit Pre-Receive-Hook-Umgebungen.
| `pre_receive_hook` | Enthält Aktivitäten im Zusammenhang mit Pre-Receive-Hooks.
{%- endif %} {%- ifversion ghes %} | `private_instance_encryption` | Enthält Aktivitäten im Zusammenhang mit der Aktivierung des privaten Modus für ein Unternehmen.
{%- endif %} | `private_repository_forking` | Enthält Aktivitäten im Zusammenhang mit der Zulassung von Forks privater und interner Repositorys für ein Repository, eine Organisation oder ein Unternehmen.
{%- ifversion fpt or ghec %} | `profile_picture`   | Enthält Aktivitäten im Zusammenhang mit dem Profilbild einer Organisation.
{%- endif %} | `project` | Enthält Aktivitäten im Zusammenhang mit Projektboards.
| `project_field` | Enthält Aktivitäten im Zusammenhang mit der Felderstellung und -löschung in einem Projektboard.
| `project_view` | Enthält Aktivitäten im Zusammenhang mit der Ansichtserstellung und -löschung in einem Projektboard.
| `protected_branch` | Enthält Aktivitäten im Zusammenhang mit geschützten Branches.
| `public_key` | Enthält Aktivitäten im Zusammenhang mit SSH-Schlüsseln und Bereitstellungsschlüsseln.
| `pull_request` | Enthält Aktivitäten im Zusammenhang mit Pull Requests.
| `pull_request_review` | Enthält Aktivitäten im Zusammenhang mit Pull Request-Überprüfungen.
| `pull_request_review_comment` | Enthält Aktivitäten im Zusammenhang mit Pull Request-Überprüfungskommentaren.
| `repo` | Enthält Aktivitäten im Zusammenhang mit den Repositorys, die einer Organisation gehören.
{%- ifversion fpt or ghec %} | `repository_advisory` | Enthält Aktivitäten auf Repositoryebene im Zusammenhang mit Sicherheitshinweisen in der {% data variables.product.prodname_advisory_database %}.  Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dotcom %}-Sicherheitshinweisen](/github/managing-security-vulnerabilities/about-github-security-advisories).
| `repository_content_analysis`   | Enthält Aktivitäten im Zusammenhang mit der [Aktivierung oder Deaktivierung der Datenverwendung für ein privates Repository](/articles/about-github-s-use-of-your-data).
| `repository_dependency_graph`   | Enthält Aktivitäten auf Repositoryebene im Zusammenhang mit dem Aktivieren oder Deaktivieren des Abhängigkeitsdiagramms für ein {% ifversion fpt or ghec %}privates {% endif %}Repository. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
{%- endif %} | `repository_image` | Enthält Aktivitäten im Zusammenhang mit Bildern für ein Repository.
| `repository_invitation` | Enthält Aktivitäten im Zusammenhang mit Einladungen zum Beitreten zu einem Repository.
| `repository_projects_change` | Enthält Aktivitäten im Zusammenhang mit der Aktivierung von Projekten für ein Repository oder für alle Repositorys in einer Organisation.
{%- ifversion ghec or ghes or ghae %} | `repository_secret_scanning`  | Enthält Aktivitäten auf Repositoryebene im Zusammenhang mit der Geheimnisüberprüfung. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning).
{%- endif %}{%- ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_custom_pattern` | Enthält Aktivitäten im Zusammenhang mit benutzerdefinierten Mustern zur Geheimnisüberprüfung in einem Repository. Weitere Informationen findest du unter [Definieren benutzerdefinierter Muster für Geheimnisüberprüfungen](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_push_protection` | Enthält Aktivitäten im Zusammenhang mit benutzerdefinierten Mustern zur Geheimnisüberprüfung in einem Repository. Weitere Informationen findest du unter [Schützen von Pushs mit Geheimnisüberprüfung](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
{%- endif %} {%- ifversion fpt or ghec %} | `repository_visibility_change` | Enthält Aktivitäten, mit denen Organisationsmitglieder die Sichtbarkeit von Repositorys für die Organisation ändern können.
{%- endif %} | `repository_vulnerability_alert` | Enthält Aktivitäten im Zusammenhang mit [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
{%- ifversion fpt or ghec %} | `repository_vulnerability_alerts` | Enthält Konfigurationsaktivitäten auf Repositoryebene für {% data variables.product.prodname_dependabot_alerts %}.
| `required_status_check` | Enthält Aktivitäten im Zusammenhang mit den erforderlichen Statusüberprüfungen für geschützte Branches.
{%- endif %} {%- ifversion ghec or ghes %} | `restrict_notification_delivery` | Enthält Aktivitäten im Zusammenhang mit der Einschränkung von E-Mail-Benachrichtigungen an genehmigte oder überprüfte Domänen für ein Unternehmen.
{%- endif %} {%- ifversion custom-repository-roles %} | `role` | Enthält Aktivitäten im Zusammenhang mit [benutzerdefinierten Repositoryrollen](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `secret_scanning`   | Enthält Konfigurationsaktivitäten auf Organisationsebene zur Geheimnisüberprüfung in vorhandenen Repositorys. Weitere Informationen findest du unter [Informationen zur Geheimnisüberprüfung](/github/administering-a-repository/about-secret-scanning).
| `secret_scanning_new_repos` | Enthält Konfigurationsaktivitäten auf Organisationsebene für die Geheimnisüberprüfung für neue Repositorys, die in der Organisation erstellt wurden.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `security_key` | Enthält Aktivitäten im Zusammenhang mit der Registrierung und Entfernung von Sicherheitsschlüsseln.
{%- endif %} {%- ifversion fpt or ghec %} | `sponsors`  | Enthält Ereignisse im Zusammenhang mit Sponsorschaltflächen (siehe [Anzeigen einer Sponsorschaltfläche in deinem Repository](/articles/displaying-a-sponsor-button-in-your-repository)).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `ssh_certificate_authority` | Enthält Aktivitäten im Zusammenhang mit einer SSH-Zertifizierungsstelle in einer Organisation oder einem Unternehmen.
| `ssh_certificate_requirement` | Enthält Aktivitäten, mit denen festgelegt wird, dass Mitglieder SSH-Zertifikate verwenden müssen, um auf Organisationsressourcen zuzugreifen.
{%- endif %}{% ifversion sso-redirect %} | `sso_redirect` | Enthält Aktivitäten im Zusammenhang mit der automatischen Umleitung von Benutzern zur Anmeldung (siehe [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)).{% endif %} | `staff` | Enthält Aktivitäten im Zusammenhang mit einem Websiteadministrator, der eine Aktion ausführt.
| `team` | Enthält Aktivitäten im Zusammenhang mit Teams in einer Organisation.
| `team_discussions` | Enthält Aktivitäten im Zusammenhang mit der Verwaltung von Teamdiskussionen für eine Organisation.
{%- ifversion ghec %} | `team_sync_tenant` | Enthält Aktivitäten im Zusammenhang mit der Teamsynchronisierung mit einem IdP für ein Unternehmen oder eine Organisation.
{%- endif %} {%- ifversion fpt or ghes %} | `two_factor_authentication` | Enthält Aktivitäten im Zusammenhang mit der zweistufigen Authentifizierung.
{%- endif %} | `user` | Enthält Aktivitäten im Zusammenhang mit Benutzer*innen in einem Unternehmen oder einer Organisation.
{%- ifversion ghec or ghes %} | `user_license` | Enthält Aktivitäten im Zusammenhang mit Benutzer*innen, die einen lizenzierten Arbeitsplatz in einem Unternehmen belegen, dessen Mitglied sie sind.
{%- endif %} | `workflows` Enthält Aktivitäten im Zusammenhang mit {% data variables.product.prodname_actions %}-Workflows.
