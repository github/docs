---
title: Auditprotokoll Deiner Organisation überprüfen
intro: 'Im Auditprotokoll können die Administratoren einer Organisation die von den Mitgliedern der Organisation durchgeführten Aktionen überprüfen. Es enthält Details wie den Ausführenden, die Art und den Zeitpunkt der Aktionen.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

### Zugriff auf das Auditprotokoll

The audit log lists events triggered by activities that affect your organization within the last 90 days. Nur Organisationsinhaber können auf das Auditprotokoll einer Organisation zugreifen.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

### Auditprotokoll durchsuchen

{% data reusables.audit_log.audit-log-search %}

#### Suche nach der Art der durchgeführten Aktion

Zur Suche nach bestimmten Ereignissen verwende in Deiner Abfrage den Qualifizierer `action`. Die im Auditprotokoll aufgezeichneten Aktionen unterteilen sich in die folgenden Kategorien:

| Kategoriename                                                                                                                                                                                                                                                                                                                                                               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| [`Konto`](#account-category-actions)                                                                                                                                                                                                                                                                                                                                        | Contains all activities related to your organization account.                                                                                                                                                                                                                                                                                                                                                 |
| [`advisory_credit`](#advisory_credit-category-actions)                                                                                                                                                                                                                                                                                                                      | Contains all activities related to crediting a contributor for a security advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."                                                                        |
| [`Abrechnung`](#billing-category-actions)                                                                                                                                                                                                                                                                                                                                   | Contains all activities related to your organization's billing.                                                                                                                                                                                                                                                                                                                                               |
| [`codespaces`](#codespaces-category-actions)                                                                                                                                                                                                                                                                                                                                | Contains all activities related to your organization's codespaces.                                                                                                                                                                                                                                                                                                                                            |
| [`dependabot_alerts`](#dependabot_alerts-category-actions)                                                                                                                                                                                                                                                                                                                  | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot %} alerts in existing repositories. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)." |                                                                                                      |
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions)                                                                                                                                                                                                                                                                                              | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot %} alerts in new repositories created in the organization.                                                                                                                                                                                                                                             |
| [`dependabot_security_updates`](#dependabot_security_updates-category-actions)                                                                                                                                                                                                                                                                                              | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} in existing repositories. For more information, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."                                                      |
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions)                                                                                                                                                                                                                                                                          | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} for new repositories created in the organization.                                                                                                                                                                                                                                |
| [`dependency_graph`](#dependency_graph-category-actions)                                                                                                                                                                                                                                                                                                                    | Contains organization-level configuration activities for dependency graphs for repositories. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."                                                                                                                                                                            |
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions)                                                                                                                                                                                                                                                                                                | Contains organization-level configuration activities for new repositories created in the organization.{% endif %}
| [`discussion_post (Diskussionsbeitrag)`](#discussion_post-category-actions)                                                                                                                                                                                                                                                                                                 | Umfasst alle Aktivitäten in Verbindung mit Diskussionen auf einer Teamseite.                                                                                                                                                                                                                                                                                                                                  |
| [`discussion_post_reply (Antwort auf Diskussionsbeitrag)`](#discussion_post_reply-category-actions)                                                                                                                                                                                                                                                                         | Umfasst alle Aktivitäten in Verbindung mit Antworten auf Diskussionen auf einer Teamseite.                                                                                                                                                                                                                                                                                                                    |
| [`Hook`](#hook-category-actions)                                                                                                                                                                                                                                                                                                                                            | Umfasst alle Aktivitäten in Verbindung mit Webhooks.                                                                                                                                                                                                                                                                                                                                                          |
| [`integration_installation_request (Antrag zur Installation einer Integration)`](#integration_installation_request-category-actions)                                                                                                                                                                                                                                        | Umfasst alle Aktivitäten in Verbindung mit Anfragen von Organisationsmitgliedern an Organisationsinhaber zur Genehmigung von Integrationen zur Verwendung innerhalb der Organisation.                                                                                                                                                                                                                         |
| [`Issue`](#issue-category-actions)                                                                                                                                                                                                                                                                                                                                          | Contains activities related to deleting an issue.                                                                                                                                                                                                                                                                                                                                                             |{% if currentVersion == "free-pro-team@latest" %}
| [`marketplace_agreement_signature (Unterzeichnung Marketplace-Vereinbarung)`](#marketplace_agreement_signature-category-actions)                                                                                                                                                                                                                                            | Umfasst alle Aktivitäten in Verbindung mit der Signierung der {% data variables.product.prodname_marketplace %}-Entwicklervereinbarung.                                                                                                                                                                                                                                                                       |
| [`marketplace_listing (Eintrag auf Marketplace)`](#marketplace_listing-category-actions)                                                                                                                                                                                                                                                                                    | Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| [`members_can_create_pages`](#members_can_create_pages-category-actions)                                                                                                                                                                                                                                                                                                    | Contains all activities related to managing the publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)." |{% endif %}
| [`org`](#org-category-actions)                                                                                                                                                                                                                                                                                                                                              | Contains activities related to organization membership.{% if currentVersion == "free-pro-team@latest" %}
| [`org_credential_authorization`](#org_credential_authorization-category-actions)                                                                                                                                                                                                                                                                                            | Contains all activities related to authorizing credentials for use with SAML single sign-on.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| [`organization_label`](#organization_label-category-actions)                                                                                                                                                                                                                                                                                                                | Contains all activities related to default labels for repositories in your organization.{% endif %}
| [`oauth_application`](#oauth_application-category-actions)                                                                                                                                                                                                                                                                                                                  | Contains all activities related to OAuth Apps.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| [`Pakete`](#packages-category-actions)                                                                                                                                                                                                                                                                                                                                      | Contains all activities related to {% data variables.product.prodname_registry %}.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`payment_method`](#payment_method-category-actions)                                                                                                                                                                                                                                                                                                                        | Umfasst alle Aktivitäten in Verbindung mit der Zahlungsmethode Deiner Organisation für GitHub.{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                                                                                                                                                                                                                                                                                                      | Umfasst alle Aktivitäten in Verbindung mit dem Profilbild Deiner Organisation.                                                                                                                                                                                                                                                                                                                                |
| [`project (Projekt)`](#project-category-actions)                                                                                                                                                                                                                                                                                                                            | Umfasst alle Aktivitäten in Verbindung mit Projektboards.                                                                                                                                                                                                                                                                                                                                                     |
| [`protected_branch`](#protected_branch-category-actions)                                                                                                                                                                                                                                                                                                                    | Umfasst alle Aktivitäten in Verbindung mit geschützten Branches.                                                                                                                                                                                                                                                                                                                                              |
| [`repo`](#repo-category-actions)                                                                                                                                                                                                                                                                                                                                            | Contains activities related to the repositories owned by your organization.{% if currentVersion == "free-pro-team@latest" %}
| [`repository_advisory`](#repository_advisory-category-actions)                                                                                                                                                                                                                                                                                                              | Contains repository-level activities related to security advisories in the {% data variables.product.prodname_advisory_database %}.  For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."                                                                                      |
| [`repository_content_analysis`](#repository_content_analysis-category-actions)                                                                                                                                                                                                                                                                                              | Contains all activities related to [enabling or disabling data use for a private repository](/articles/about-github-s-use-of-your-data).{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`repository_dependency_graph`](#repository_dependency_graph-category-actions)                                                                                                                                                                                                                                                                                              | Contains repository-level activities related to enabling or disabling the dependency graph for a                                                                                                                                                                                                                                                                                                              |
| {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} |                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`repository_secret_scanning`](#repository_secret_scanning-category-actions)                                                                                                                                                                                                                                                                                                | Contains repository-level activities related to secret scanning. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."                                                                                                                                                                                                                               |{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions)                                                                                                                                                                                                                                                                                        | Contains all activities related to [{% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions)                                                                                                                                                                                                                                                                                      | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot %} alerts.                                                                                                                                                                                                                                                                                               |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| [`secret_scanning`](#secret_scanning-category-actions)                                                                                                                                                                                                                                                                                                                      | Contains organization-level configuration activities for secret scanning in existing repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."                                                                                                                                                                                             |
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions)                                                                                                                                                                                                                                                                                                  | Contains organization-level configuration activities for secret scanning for new repositories created in the organization.                                                                                                                                                                                                                                                                                    |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`sponsors`](#sponsors-category-actions)                                                                                                                                                                                                                                                                                                                                    | Umfasst alle Ereignisse in Verbindung mit Sponsorenschaltflächen (siehe „[Sponsorenschaltfläche in Deinem Repository anzeigen](/articles/displaying-a-sponsor-button-in-your-repository)“).{% endif %}
| [`Team`](#team-category-actions)                                                                                                                                                                                                                                                                                                                                            | Umfasst alle Aktivitäten in Verbindung mit Teams in Ihrer Organisation.                                                                                                                                                                                                                                                                                                                                       |
| [`team_discussions`](#team_discussions-category-actions)                                                                                                                                                                                                                                                                                                                    | Umfasst Aktivitäten in Verbindung mit der Verwaltung der Teamdiskussionen für eine Organisation.                                                                                                                                                                                                                                                                                                              |

Mit den folgenden Suchbegriffen kannst Du nach bestimmten Aktionsgruppen suchen. Ein Beispiel:

  * `action:team` findet alle Ereignisse innerhalb der Kategorie „Team“.
  * `-action:hook` schließt alle Ereignisse aus der Kategorie „Webhook “ aus.

Each category has a set of associated actions that you can filter on. Ein Beispiel:

  * `action:team.create` findet alle Ereignisse in Verbindung mit der Erstellung eines Teams.
  * `-action:hook.events_changed` schließt alle Ereignisse in Verbindung mit geänderten Webhook-Ereignissen aus.

#### Suche nach dem Zeitpunkt der Aktion

Use the `created` qualifier to filter events in the audit log based on when they occurred. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Ein Beispiel:

  * `created:2014-07-08` findet alle Ereignisse vom 8. Juli 2014.
  * `created:>=2014-07-08` findet alle Ereignisse vom und nach dem 8. Juli 2014.
  * `created:<=2014-07-08` findet alle Ereignisse vom und vor dem 8. Juli 2014.
  * `created:2014-07-01..2014-07-31` findet alle Ereignisse im Juli 2014.

Das Auditprotokoll enthält Daten der letzten 90 Tage. Mit dem Kennzeichner `created` können Sie jedoch auch nach früheren Ereignissen suchen.

#### Suche nach Standort

Using the qualifier `country`, you can filter events in the audit log based on the originating country. Hierzu verwenden Sie den zweistelligen Kurzcode oder den vollständigen Namen des Landes. Ländernamen mit Leerzeichen müssen in Anführungszeichen eingeschlossen sein. Ein Beispiel:

  * `country:de` findet alle Ereignisse, die in Deutschland aufgetreten sind.
  * `country:Mexico` findet alle Ereignisse, die in Mexiko aufgetreten sind.
  * `country:"United States"` findet alle Ereignisse, die in den USA aufgetreten sind.

{% if currentVersion == "free-pro-team@latest" %}
### Auditprotokoll exportieren

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

### Using the audit log API

You can interact with the audit log using the GraphQL API{% if currentVersion == "free-pro-team@latest" %} or the REST API{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}

#### Using the GraphQL API

{% endif %}

{% note %}

**Note**: The audit log GraphQL API is available for organizations using {% data variables.product.prodname_enterprise %}. {% data reusables.gated-features.more-info-org-products %}

{% endnote %}

To ensure a secure IP and maintain compliance for your organization, you can use the audit log GraphQL API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}

{% if currentVersion == "free-pro-team@latest" %}
Note that you can't retrieve Git events using the GraphQL API. To retrieve Git events, use the REST API instead. For more information, see "[`git` category actions](#git-category-actions)."
{% endif %}

Die GraphQL-Antwort kann Daten für bis zu 90 bis 120 Tage beinhalten.

Sie können beispielsweise eine GraphQL-Anforderung erstellen, die alle Ihrer Organisation neu hinzugefügten Organisationsmitglieder zurückgibt. For more information, see the "[GraphQL API Audit Log](/v4/interface/auditentry/)."

{% if currentVersion == "free-pro-team@latest" %}

#### Using the REST API

{% note %}

**Note:** The audit log REST API is available for users of {% data variables.product.prodname_ghe_cloud %} only.

{% endnote %}

To ensure a secure IP and maintain compliance for your organization, you can use the audit log REST API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}
* Git events, such as cloning, fetching, and pushing

{% data reusables.audit_log.audit-log-git-events-retention %}

For more information about the audit log REST API, see "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)."

{% endif %}

### Audit log actions

An overview of some of the most common actions that are recorded as events in the audit log.

{% if currentVersion == "free-pro-team@latest" %}

#### `account` category actions

| Aktion                        | Beschreibung                                                                                                                                                                                                     |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `billing_plan_change`         | Wird ausgelöst, wenn sich der [Abrechnungszeitraum](/articles/changing-the-duration-of-your-billing-cycle) einer Organisation ändert.                                                                            |
| `plan_change`                 | Wird ausgelöst, wenn sich das [Abonnement](/articles/about-billing-for-github-accounts) einer Organisation ändert.                                                                                               |
| `pending_plan_change`         | Wird ausgelöst, wenn der Inhaber oder Abrechnungsmanager einer Organisation ein [kostenpflichtiges Abonnement kündigt oder herabstuft](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/). |
| `pending_subscription_change` | Wird ausgelöst, wenn eine [auf {% data variables.product.prodname_marketplace %} angebotene kostenlose Testphase startet oder abläuft](/articles/about-billing-for-github-marketplace/).                         |

#### `advisory_credit` category actions

| Aktion    | Beschreibung                                                                                                                                                                                                          |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`  | Triggered when someone accepts credit for a security advisory. Weitere Informationen findest Du unter „[Einen Sicherheitshinweis bearbeiten](/github/managing-security-vulnerabilities/editing-a-security-advisory)." |
| `create`  | Triggered when the administrator of a security advisory adds someone to the credit section.                                                                                                                           |
| `decline` | Triggered when someone declines credit for a security advisory.                                                                                                                                                       |
| `destroy` | Triggered when the administrator of a security advisory removes someone from the credit section.                                                                                                                      |

#### `billing` category actions

| Aktion                | Beschreibung                                                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `change_billing_type` | Wird ausgelöst, wenn Deine Organisation ihre [Zahlungsmethode für {% data variables.product.prodname_dotcom %} ändert](/articles/adding-or-editing-a-payment-method). |
| `change_email`        | Wird ausgelöst, wenn Ihre Organisation ihre [E-Mail-Adresse für Abrechnungen](/articles/setting-your-billing-email) ändert.                                           |

#### `codespaces` category actions

| Aktion                       | Beschreibung                                                                                                                                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                     | Triggered when a user [creates a codespace](/github/developing-online-with-codespaces/creating-a-codespace).                                                                                                                                   |
| `resume`                     | Triggered when a user resumes a suspended codespace.                                                                                                                                                                                           |
| `delete`                     | Triggered when a user [deletes a codespace](/github/developing-online-with-codespaces/deleting-a-codespace).                                                                                                                                   |
| `create_an_org_secret`       | Triggered when a user creates an organization-level [secret for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)  |
| `update_an_org_secret`       | Triggered when a user updates an organization-level [secret for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces). |
| `remove_an_org_secret`       | Triggered when a user removes an organization-level [secret for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces). |
| `manage_access_and_security` | Triggered when a user updates [which repositories a codespace can access](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).                                                                              |



#### `dependabot_alerts` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all existing {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)." |
| `aktivieren`   | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all existing {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories.                                                                                                                                                                                                              |

#### `dependabot_alerts_new_repos` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)." |
| `aktivieren`   | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories.                                                                                                                                                                                                              |

#### `dependabot_security_updates` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `deaktivieren` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)." |
| `aktivieren`   | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories.                                                                                                                                                                                                              |

#### `dependabot_security_updates_new_repos` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)." |
| `aktivieren`   | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories.                                                                                                                                                                                                              |

#### `dependency_graph` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Triggered when an organization owner disables the dependency graph for all existing repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)." |
| `aktivieren`   | Triggered when an organization owner enables the dependency graph for all existing repositories.                                                                                                                                                                                                              |

#### `dependency_graph_new_repos` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Triggered when an organization owner disables the dependency graph for all new repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)." |
| `aktivieren`   | Triggered when an organization owner enables the dependency graph for all new repositories.                                                                                                                                                                                                              |

{% endif %}

#### `discussion_post` category actions

| Aktion          | Beschreibung                                                                                                                           |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `aktualisieren` | Wird ausgelöst, wenn ein [Beitrag zu einer Teamdiskussion bearbeitet wird](/articles/managing-disruptive-comments/#editing-a-comment). |
| `destroy`       | Wird ausgelöst, wenn ein [Beitrag zu einer Teamdiskussion gelöscht wird](/articles/managing-disruptive-comments/#deleting-a-comment).  |

#### `discussion_post_reply` category actions

| Aktion          | Beschreibung                                                                                                                                              |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aktualisieren` | Wird ausgelöst, wenn eine [Antwort auf einen Beitrag zu einer Teamdiskussion bearbeitet wird](/articles/managing-disruptive-comments/#editing-a-comment). |
| `destroy`       | Wird ausgelöst, wenn eine [Antwort auf einen Beitrag zu einer Teamdiskussion gelöscht wird](/articles/managing-disruptive-comments/#deleting-a-comment).  |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
#### `enterprise` category actions

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `environment` category actions

| Aktion                  | Beschreibung                                                                                                                                                    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create_actions_secret` | Triggered when a secret is created in an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."   |
| `delete`                | Triggered when an environment is deleted. For more information, see ["Deleting an environment](/actions/reference/environments#deleting-an-environment)."       |
| `remove_actions_secret` | Triggered when a secret is removed from an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)." |
| `update_actions_secret` | Triggered when a secret in an environment is updated. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."   |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `git` category actions

{% note %}

**Note:** To access Git events in the audit log, you must use the audit log REST API. The audit log REST API is available for users of {% data variables.product.prodname_ghe_cloud %} only. For more information, see "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)."

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| Aktion    | Beschreibung                                          |
| --------- | ----------------------------------------------------- |
| `Klon`    | Triggered when a repository is cloned.                |
| `abrufen` | Triggered when changes are fetched from a repository. |
| `Push`    | Triggered when changes are pushed to a repository.    |

{% endif %}

#### `hook` category actions

| Aktion           | Beschreibung                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `create`         | Wird ausgelöst, wenn einem Repository Ihrer Organisation ein [neuer Hook hinzugefügt wird](/articles/creating-webhooks). |
| `config_changed` | Wird ausgelöst, wenn die Konfiguration eines vorhandenen Hooks geändert wird.                                            |
| `destroy`        | Wird ausgelöst, wenn ein vorhandener Hook aus einem Repository entfernt wird.                                            |
| `events_changed` | Wird ausgelöst, wenn sich die Ereignisse eines Hooks ändern.                                                             |

#### `integration_installation_request` category actions

| Aktion              | Beschreibung                                                                                                                                                                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`            | Wird ausgelöst, wenn ein Mitglied der Organisation bei einem Organisationsinhaber die Installation einer Integration zur Verwendung innerhalb der Organisation anfordert.                                                                                                                |
| `close (schließen)` | Wird ausgelöst, wenn eine Anforderung zur Installation einer Integration zur Verwendung innerhalb der Organisation von einem Organisationsinhaber genehmigt oder abgelehnt wird oder wenn die Anforderung von dem Organisationsmitglied, das die Anfrage gestellt hat, abgebrochen wird. |

#### `issue` category actions

| Aktion    | Beschreibung                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `destroy` | Wird ausgelöst, wenn ein Organisationsinhaber oder eine Person mit Administratorberechtigungen für ein Repository ein Issue aus einem Repository der Organisation löscht. |

{% if currentVersion == "free-pro-team@latest" %}

#### `marketplace_agreement_signature` category actions

| Aktion   | Beschreibung                                                                                                    |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| `create` | Wird ausgelöst, wenn Du die {% data variables.product.prodname_marketplace %}-Entwicklervereinbarung signierst. |

#### `marketplace_listing` category actions

| Aktion       | Beschreibung                                                                                                                  |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `genehmigen` | Wird ausgelöst, wenn Dein Eintrag für die Aufnahme in {% data variables.product.prodname_marketplace %} genehmigt wird.       |
| `create`     | Wird ausgelöst, wenn Du einen Eintrag für Deine App in {% data variables.product.prodname_marketplace %} erstellst.           |
| `delist`     | Wird ausgelöst, wenn Ihr Listing von {% data variables.product.prodname_marketplace %} entfernt wird.                         |
| `redraft`    | Wird ausgelöst, wenn Dein Eintrag in den Entwurfsstatus zurückversetzt wird.                                                  |
| `reject`     | Wird ausgelöst, wenn Dein Eintrag für die Aufnahme in {% data variables.product.prodname_marketplace %} nicht genehmigt wird. |

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

#### `members_can_create_pages` category actions

For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."

| Aktion         | Beschreibung                                                                                                                                         |
|:-------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aktivieren`   | Triggered when an organization owner enables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization.  |
| `deaktivieren` | Triggered when an organization owner disables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. |

{% endif %}

#### `org` category actions

| Aktion                                                                                                                                   | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `advanced_security_policy_selected_member_disabled`                                                                                      | Triggered when an enterprise owner prevents {% data variables.product.prodname_GH_advanced_security %} features from being enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled`                                                                                       | Triggered when an enterprise owner allows {% data variables.product.prodname_GH_advanced_security %} features to be enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `audit_log_export`                                                                                                                       | Wird ausgelöst, wenn der Administrator einer Organisation einen [Export des Auditprotokolls der Organisation erstellt](#exporting-the-audit-log). Wenn der Export eine Abfrage enthält, listet das Protokoll diese Abfrage sowie die Anzahl der Auditprotokolleinträge auf, die mit der Abfrage übereinstimmen.                                                                                                                                                                                                                       |
| `block_user`                                                                                                                             | Wird ausgelöst, wenn ein Organisationsinhaber [den Zugriff eines Benutzers auf die Repositorys der Organisation blockiert](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).                                                                                                                                                                                                                                                                                                                    |
| `cancel_invitation`                                                                                                                      | Wird ausgelöst, wenn die Einladung zu einer Organisation widerrufen wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`                                                                                                                  | Triggered when a {% data variables.product.prodname_actions %} secret is created for an organization. For more information, see "[Creating encrypted secrets for an organization](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)."{% endif %}                                                                                                                                                                                                                                                   |{% if currentVersion == "free-pro-team@latest"%}
| `disable_oauth_app_restrictions`                                                                                                         | Wird ausgelöst, wenn ein Inhaber die [{% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen](/articles/disabling-oauth-app-access-restrictions-for-your-organization) für Deine Organisation deaktiviert.                                                                                                                                                                                                                                                                                                          |
| `disable_saml`                                                                                                                           | Wird ausgelöst, wenn ein Organisationsadministrator SAML Single Sign-On für eine Organisation deaktiviert.{% endif %}
| `disable_member_team_creation_permission`                                                                                                | Wird ausgelöst, wenn ein Organisationsinhaber die Möglichkeit der Teamerstellung auf Inhaber beschränkt. Weitere Informationen findest Du unter „[Berechtigungen für die Teamerstellung in Deiner Organisation festlegen](/articles/setting-team-creation-permissions-in-your-organization).“ |{% if currentVersion != "github-ae@latest" %}
| `disable_two_factor_requirement`                                                                                                         | Triggered when an owner disables a two-factor authentication requirement for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `enable_oauth_app_restrictions`                                                                                                          | Wird ausgelöst, wenn ein Inhaber die [{% data variables.product.prodname_oauth_app %}-Zugriffsbeschränkungen](/articles/enabling-oauth-app-access-restrictions-for-your-organization) für Deine Organisation aktiviert.                                                                                                                                                                                                                                                                                                             |
| `enable_saml`                                                                                                                            | Wird ausgelöst, wenn ein Organisationsadministrator [SAML Single Sign-On für eine Organisation aktiviert](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization).{% endif %}
| `enable_member_team_creation_permission`                                                                                                 | Wird ausgelöst, wenn ein Organisationsinhaber Mitgliedern die Erstellung von Teams erlaubt. Weitere Informationen findest Du unter „[Berechtigungen für die Teamerstellung in Deiner Organisation festlegen](/articles/setting-team-creation-permissions-in-your-organization).“ |{% if currentVersion != "github-ae@latest" %}
| `enable_two_factor_requirement`                                                                                                          | Triggered when an owner requires two-factor authentication for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}
| `invite_member`                                                                                                                          | Triggered when [a new user was invited to join your organization](/articles/adding-organization-members-to-a-team).{% if currentVersion == "free-pro-team@latest" %}
| `oauth_app_access_approved`                                                                                                              | Wird ausgelöst, wenn ein Inhaber [einer {% data variables.product.prodname_oauth_app %} den Zugriff auf die Organisation erteilt](/articles/approving-oauth-apps-for-your-organization/).                                                                                                                                                                                                                                                                                                                                           |
| `oauth_app_access_denied`                                                                                                                | Wird ausgelöst, wenn ein Inhaber [einen zuvor genehmigten Zugriff einer {% data variables.product.prodname_oauth_app %} zu Deiner Organisation deaktiviert](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization).                                                                                                                                                                                                                                                                                     |
| `oauth_app_access_requested`                                                                                                             | Triggered when an organization member requests that an owner grant an {% data variables.product.prodname_oauth_app %} access to your organization.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`                                                                                                            | Triggered when a new self-hosted runner is registered. For more information, see "[Adding a self-hosted runner to an organization](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)."                                                                                                                                                                                                                                                                                     |
| `remove_actions_secret`                                                                                                                  | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% endif %}{% if currentVersion == "free-pro-team@latest"%}
| `remove_billing_manager`                                                                                                                 | Wird ausgelöst, wenn ein [Inhaber einen Abrechnungsmanager aus der Organisation entfernt](/articles/removing-a-billing-manager-from-your-organization/) oder wenn innerhalb der Organisation die [Zwei-Faktor-Authentifizierung verlangt wird](/articles/requiring-two-factor-authentication-in-your-organization) und ein Abrechnungsmanager keine 2FA verwendet bzw. die 2FA deaktiviert. 
{% endif %}
| `remove_member`                                                                                                                          | Triggered when an [owner removes a member from an organization](/articles/removing-a-member-from-your-organization/){% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an organization member doesn't use 2FA or disables 2FA{% endif %}. Wird auch ausgelöst, wenn ein [Organisationsmitglied sich selbst aus einer Organisation entfernt](/articles/removing-yourself-from-an-organization/). |
| `remove_outside_collaborator`                                                                                                            | Triggered when an owner removes an outside collaborator from an organization{% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an outside collaborator does not use 2FA or disables 2FA{% endif %}. |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_self_hosted_runner`                                                                                                              | Triggered when a self-hosted runner is removed. For more information, see "[Removing a runner from an organization](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)."                                                                                                                                                                                                                                                                                                          |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `revoke_external_identity`                                                                                                               | Wird ausgelöst, wenn ein Organisationsinhaber die verknüpfte Identität eines Mitarbeiters widerruft. For more information, see "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."                                                                                                                                             |
| `revoke_sso_session`                                                                                                                     | Wird ausgelöst, wenn ein Organisationsinhaber die SAML-Sitzung eines Mitglieds widerruft. For more information, see "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."                                                                                                                                                        |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `runner_group_created`                                                                                                                   | Triggered when a self-hosted runner group is created. For more information, see "[Creating a self-hosted runner group for an organization](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)."                                                                                                                                                                                                                                           |
| `runner_group_removed`                                                                                                                   | Triggered when a self-hosted runner group is removed. For more information, see "[Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)."                                                                                                                                                                                                                                                                                   |
| `runner_group_updated`                                                                                                                   | Triggered when the configuration of a self-hosted runner group is changed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."                                                                                                                                                                                                                    |
| `runner_group_runners_added`                                                                                                             | Triggered when a self-hosted runner is added to a group. For more information, see [Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).                                                                                                                                                                                                                                                                            |
| `runner_group_runner_removed`                                                                                                            | Triggered when the REST API is used to remove a self-hosted runner from a group. For more information, see "[Remove a self-hosted runner from a group for an organization](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)."                                                                                                                                                                                                                                                                    |
| `runner_group_runners_updated`                                                                                                           | Triggered when a runner group's list of members is updated. For more information, see "[Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)."{% endif %}{% if currentVersion == "free-pro-team@latest"%}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `self_hosted_runner_updated`                                                                                                             | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}
| `unblock_user`                                                                                                                           | Triggered when an organization owner [unblocks a user from an organization](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`                                                                                                                  | Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `update_new_repository_default_branch_setting`                                                                                           | Triggered when an organization owner revokes a member's linked identity. For more information, see "[Managing the default branch name for repositories in your organization](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)."{% endif %}
| `update_default_repository_permission`                                                                                                   | Wird ausgelöst, wenn ein Inhaber die Standard-Berechtigungsebene für Repositorys für die Organisationsmitglieder ändert.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `update_member`                                                                                                                          | Wird ausgelöst, wenn ein Inhaber die Rolle einer Person von Inhaber in Mitglied oder von Mitglied in Inhaber ändert.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `update_member_repository_creation_permission`                                                                                           | Triggered when an owner changes the create repository permission for organization members.{% if currentVersion == "free-pro-team@latest" %}
| `update_saml_provider_settings`                                                                                                          | Wird ausgelöst, wenn sich die SAML-Anbietereinstellungen einer Organisation ändern.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `update_terms_of_service`                                                                                                                | Wird ausgelöst, wenn eine Organisation von den Standardnutzungsbedingungen auf die Nutzungsbedingungen für Unternehmen umsteigt. Weitere Informationen finden Sie unter „[Auf Nutzungsbedingungen für Unternehmen umsteigen](/articles/upgrading-to-the-corporate-terms-of-service)“.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `org_credential_authorization` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `grant`        | Wird ausgelöst, wenn ein Mitglied [Anmeldeinformationen zur Verwendung mit SAML Single Sign-On](/github/authenticating-to-github/authenticating-with-saml-single-sign-on) autorisiert.                       |
| `deauthorized` | Wird ausgelöst, wenn ein Mitglied [die Autorisierung von Anmeldeinformationen zur Verwendung mit SAML Single Sign-On zurückzieht](/github/authenticating-to-github/authenticating-with-saml-single-sign-on). |
| `revoke`       | Triggered when an owner [revokes authorized credentials](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).      |

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
#### `organization_label` category actions

| Aktion          | Beschreibung                                                     |
| --------------- | ---------------------------------------------------------------- |
| `create`        | Wird ausgelöst, wenn eine Standardkennzeichnung erstellt wird.   |
| `aktualisieren` | Wird ausgelöst, wenn eine Standardkennzeichnung bearbeitet wird. |
| `destroy`       | Wird ausgelöst, wenn eine Standardkennzeichnung gelöscht wird.   |

{% endif %}

#### `oauth_application` category actions

| Aktion          | Beschreibung                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `create`        | Wird ausgelöst, wenn eine neue {% data variables.product.prodname_oauth_app %} erstellt wird.                                    |
| `destroy`       | Wird ausgelöst, wenn eine vorhandene {% data variables.product.prodname_oauth_app %} gelöscht wird.                              |
| `reset_secret`  | Wird ausgelöst, wenn das Client-Geheimnis einer {% data variables.product.prodname_oauth_app %} zurückgesetzt wird.              |
| `revoke_tokens` | Wird ausgelöst, wenn die Benutzertoken einer {% data variables.product.prodname_oauth_app %} zurückgezogen werden.               |
| `übertragen`    | Wird ausgelöst, wenn eine vorhandene {% data variables.product.prodname_oauth_app %} auf eine neue Organisation übertragen wird. |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
#### `packages` category actions

| Aktion                      | Beschreibung                                                                                                                                                                            |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `package_version_published` | Triggered when a package version is published.                                                                                                                                          |
| `package_version_deleted`   | Triggered when a specific package version is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)." |
| `package_deleted`           | Triggered when an entire package is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."          |
| `package_version_restored`  | Triggered when a specific package version is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)." |
| `package_restored`          | Triggered when an entire package is restored. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."         |

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

#### `payment_method` category actions

| Aktion          | Beschreibung                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| `clear`         | Wird ausgelöst, wenn eine registrierte Zahlungsmethode [entfernt](/articles/removing-a-payment-method) wird.        |
| `create`        | Wird ausgelöst, wenn eine Zahlungsmethode, beispielsweise eine Kreditkarte oder ein PayPal-Konto, hinzugefügt wird. |
| `aktualisieren` | Wird ausgelöst, wenn eine vorhandene Zahlungsmethode geändert wird.                                                 |

{% endif %}

#### `profile_picture` category actions
| Aktion        | Beschreibung                                                                      |
| ------------- | --------------------------------------------------------------------------------- |
| aktualisieren | Wird ausgelöst, wenn Sie das Profilbild Ihrer Organisation festlegen oder ändern. |

#### `project` category actions

| Aktion                   | Beschreibung                                                                                                                                                                       |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                 | Wird bei der Erstellung eines Projektboards ausgelöst.                                                                                                                             |
| `link`                   | Wird ausgelöst, wenn ein Repository mit einem Projektboard verknüpft wird.                                                                                                         |
| `rename`                 | Wird ausgelöst, wenn ein Projektboard umbenannt wird.                                                                                                                              |
| `aktualisieren`          | Wird ausgelöst, wenn ein Projektboard geändert wird.                                                                                                                               |
| `delete`                 | Wird ausgelöst, wenn ein Projektboard gelöscht wird.                                                                                                                               |
| `unlink`                 | Wird ausgelöst, wenn die Verknüpfung eines Repositorys mit einem Projektboard aufgehoben wird.                                                                                     |
| `update_org_permission`  | Wird ausgelöst, wenn die Berechtigungen auf Basisebene für alle Organisationsmitglieder geändert oder entfernt werden.                                                             |
| `update_team_permission` | Wird ausgelöst, wenn sich die Berechtigungsebene eines Teams für ein Projektboard ändert oder wenn ein Team in einem Projektboard hinzugefügt oder entfernt wird.                  |
| `update_user_permission` | Wird ausgelöst, wenn ein Organisationsmitglied oder ein externer Mitarbeiter in einem Projektboard hinzugefügt oder entfernt wird oder wenn sich dessen Berechtigungsebene ändert. |

#### `protected_branch` category actions

| Aktion                                                | Beschreibung                                                                                                                                                                                                                           |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                                              | Wird ausgelöst, wenn für einen Branch der Branch-Schutz aktiviert wird.                                                                                                                                                                |
| `destroy`                                             | Wird ausgelöst, wenn für einen Branch der Branch-Schutz deaktiviert wird.                                                                                                                                                              |
| `update_admin_enforced`                               | Wird ausgelöst, wenn der Branch-Schutz für Repository-Administratoren erzwungen wird.                                                                                                                                                  |
| `update_require_code_owner_review`                    | Wird ausgelöst, wenn die Erzwingung erforderlicher Reviews durch einen Codeinhaber für einen Branch akualisiert wird.                                                                                                                  |
| `dismiss_stale_reviews`                               | Wird ausgelöst, wenn die Erzwingung des Verwerfens veralteter Pull Requests für einen Branch akualisiert wird.                                                                                                                         |
| `update_signature_requirement_enforcement_level`      | Wird ausgelöst, wenn die Erzwingung der obligatorischen Commit-Signatur für einen Branch akualisiert wird.                                                                                                                             |
| `update_pull_request_reviews_enforcement_level`       | Wird ausgelöst, wenn die Erzwingung erforderlicher Pull-Request-Reviews für einen Branch akualisiert wird.                                                                                                                             |
| `update_required_status_checks_enforcement_level`     | Wird ausgelöst, wenn die Erzwingung erforderlicher Statuschecks für einen Branch akualisiert wird.                                                                                                                                     |
| `update_strict_required_status_checks_policy`         | Triggered when the requirement for a branch to be up to date before merging is changed.                                                                                                                                                |
| `rejected_ref_update`                                 | Wird ausgelöst, wenn eine Branch-Aktualisierung abgelehnt wird.                                                                                                                                                                        |
| `policy_override`                                     | Triggered when a branch protection requirement is overridden by a repository administrator.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| `update_allow_force_pushes_enforcement_level`         | Wird ausgelöst, wenn erzwungene Pushes für einen geschützten Branch aktiviert oder deaktiviert werden.                                                                                                                                 |
| `update_allow_deletions_enforcement_level`            | Wird ausgelöst, wenn die Branch-Löschung für einen geschützten Branch aktiviert oder deaktiviert wird.                                                                                                                                 |
| `update_linear_history_requirement_enforcement_level` | Wird ausgelöst, wenn der erforderliche lineare Commit-Verlauf für einen geschützten Branch aktiviert oder deaktiviert wird.                                                                                                            |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `pull_request` category actions

| Aktion                  | Beschreibung                                                                                               |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| `create`                | Triggered when a pull request is created.                                                                  |
| `close (schließen)`     | Triggered when a pull request is closed without being merged.                                              |
| `reopen`                | Triggered when a pull request is reopened after previously being closed.                                   |
| `Merge`                 | Triggered when a pull request is merged.                                                                   |
| `indirect_merge`        | Triggered when a pull request is considered merged because its commits were merged into the target branch. |
| `ready_for_review`      | Triggered when a pull request is marked as ready for review.                                               |
| `converted_to_draft`    | Triggered when a pull request is converted to a draft.                                                     |
| `create_review_request` | Triggered when a review is requested.                                                                      |
| `remove_review_request` | Triggered when a review request is removed.                                                                |

#### `pull_request_review` category actions

| Aktion      | Beschreibung                          |
| ----------- | ------------------------------------- |
| `absenden`  | Triggered when a review is submitted. |
| `verwerfen` | Triggered when a review is dismissed. |
| `delete`    | Triggered when a review is deleted.   |

#### `pull_request_review_comment` category actions

| Aktion          | Beschreibung                                |
| --------------- | ------------------------------------------- |
| `create`        | Triggered when a review comment is added.   |
| `aktualisieren` | Triggered when a review comment is changed. |
| `delete`        | Triggered when a review comment is deleted. |
{% endif %}

#### `repo` category actions

| Aktion                                | Beschreibung                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                              | Triggered when a user [changes the visibility](/github/administering-a-repository/setting-repository-visibility) of a repository in the organization.                                                                                                                                                                                              |
| `actions_enabled`                     | Triggered when {% data variables.product.prodname_actions %} is enabled for a repository. Can be viewed using the UI. This event is not included when you access the audit log using the REST API. For more information, see "[Using the REST API](#using-the-rest-api)."                                                                          |
| `add_member`                          | Wird ausgelöst, wenn ein Benutzer eine [Einladung für den Zugriff auf ein Repository als Mitarbeiter](/articles/inviting-collaborators-to-a-personal-repository) akzeptiert.                                                                                                                                                                       |
| `add_topic`                           | Triggered when a repository admin [adds a topic](/articles/classifying-your-repository-with-topics) to a repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `advanced_security_disabled`          | Triggered when a repository administrator disables {% data variables.product.prodname_GH_advanced_security %} features for the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."            |
| `advanced_security_enabled`           | Triggered when a repository administrator enables {% data variables.product.prodname_GH_advanced_security %} features for the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).".{% endif %}
| `archived`                            | Wird ausgelöst, wenn ein Repository-Administrator ein [Repository archiviert](/articles/about-archiving-repositories).{% if enterpriseServerVersions contains currentVersion %}
| `config.disable_anonymous_git_access` | Wird ausgelöst, wenn für ein öffentliches Repository der [anonyme Git-Lesezugriff deaktiviert](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) wird.                                                                                                                                           |
| `config.enable_anonymous_git_access`  | Wird ausgelöst, wenn für ein öffentliches Repository der [anonyme Git-Lesezugriff aktiviert](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) wird.                                                                                                                                             |
| `config.lock_anonymous_git_access`    | Wird ausgelöst, wenn für ein Repository die [Einstellung für den anonymen Git-Lesezugriff gesperrt](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) wird.                                                                                                                  |
| `config.unlock_anonymous_git_access`  | Wird ausgelöst, wenn für ein Repository die [Einstellungssperre für den anonymen Git-Lesezugriff aufgehoben](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) wird.{% endif %}
| `create`                              | Triggered when [a new repository is created](/articles/creating-a-new-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`               | Triggered when a {% data variables.product.prodname_actions %} secret is created for a repository. For more information, see "[Creating encrypted secrets for a repository](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."{% endif %}
| `destroy`                             | Wird ausgelöst, wenn ein [Repository gelöscht](/articles/deleting-a-repository) wird.{% if currentVersion == "free-pro-team@latest" %}
| `deaktivieren`                        | Wird ausgelöst, wenn ein Repository deaktiviert wird (z. B. aufgrund [unzureichender Deckung](/articles/unlocking-a-locked-account)).{% endif %}
| `aktivieren`                          | Triggered when a repository is reenabled.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_actions_secret`               | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% endif %}
| `remove_member`                       | Triggered when a user is [removed from a repository as a collaborator](/articles/removing-a-collaborator-from-a-personal-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`         | Triggered when a new self-hosted runner is registered. For more information, see "[Adding a self-hosted runner to a repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)."                                                                                                        |
| `remove_self_hosted_runner`           | Triggered when a self-hosted runner is removed. For more information, see "[Removing a runner from a repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)."                                                                                                                             |{% endif %}
| `remove_topic`                        | Wird ausgelöst, wenn ein Repository-Administrator ein Thema aus einem Repository entfernt.                                                                                                                                                                                                                                                         |
| `rename`                              | Triggered when [a repository is renamed](/articles/renaming-a-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `self_hosted_runner_updated`          | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}
| `übertragen`                          | Wird ausgelöst, wenn ein [Repository übertragen](/articles/how-to-transfer-a-repository) wird.                                                                                                                                                                                                                                                     |
| `transfer_start`                      | Wird ausgelöst, wenn die Übertragung eines Repositorys initiiert wurde.                                                                                                                                                                                                                                                                            |
| `unarchived`                          | Triggered when a repository admin unarchives a repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`               | Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

#### `repository_advisory` category actions

| Aktion              | Beschreibung                                                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `close (schließen)` | Triggered when someone closes a security advisory. For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)." |
| `cve_request`       | Triggered when someone requests a CVE (Common Vulnerabilities and Exposures) number from {% data variables.product.prodname_dotcom %} for a draft security advisory.                                                                 |
| `github_broadcast`  | Triggered when {% data variables.product.prodname_dotcom %} makes a security advisory public in the {% data variables.product.prodname_advisory_database %}.                                                                       |
| `github_withdraw`   | Triggered when {% data variables.product.prodname_dotcom %} withdraws a security advisory that was published in error.                                                                                                               |
| `open`              | Triggered when someone opens a draft security advisory.                                                                                                                                                                              |
| `publish`           | Triggered when someone publishes a security advisory.                                                                                                                                                                                |
| `reopen`            | Triggered when someone reopens as draft security advisory.                                                                                                                                                                           |
| `aktualisieren`     | Triggered when someone edits a draft or published security advisory.                                                                                                                                                                 |

#### `repository_content_analysis` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aktivieren`   | Triggered when an organization owner or person with admin access to the repository [enables data use settings for a private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository).  |
| `deaktivieren` | Triggered when an organization owner or person with admin access to the repository [disables data use settings for a private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository). |

{% endif %}{% if currentVersion != "github-ae@latest" %}

#### `repository_dependency_graph` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Triggered when a repository owner or person with admin access to the repository disables the dependency graph for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)." |
| `aktivieren`   | Triggered when a repository owner or person with admin access to the repository enables the dependency graph for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository.                                                                                                                                        |

{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### `repository_secret_scanning` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Triggered when a repository owner or person with admin access to the repository disables secret scanning for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)." |
| `aktivieren`   | Triggered when a repository owner or person with admin access to the repository enables secret scanning for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository.                                                                                                                 |

{% endif %}{% if currentVersion != "github-ae@latest" %}
#### `repository_vulnerability_alert` category actions

| Aktion      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`    | Triggered when {% data variables.product.product_name %} creates a {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert for a repository that uses a vulnerable dependency. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)." | |
| `verwerfen` | Triggered when an organization owner or person with admin access to the repository dismisses a {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert about a vulnerable dependency.                                                                                                                                                        |
| `beheben`   | Triggered when someone with write access to a repository pushes changes to update and resolve a vulnerability in a project dependency.                                                                                                                                                                                                                                                                                                                                        |

{% endif %}{% if currentVersion == "free-pro-team@latest" %}
#### `repository_vulnerability_alerts` category actions

| Aktion                   | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `authorized_users_teams` | Triggered when an organization owner or a person with admin permissions to the repository updates the list of people or teams authorized to receive {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies in the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)." |
| `deaktivieren`           | Triggered when a repository owner or person with admin access to the repository disables {% data variables.product.prodname_dependabot_alerts %}.                                                                                                                                                                                                                                                                                                                                        |
| `aktivieren`             | Triggered when a repository owner or person with admin access to the repository enables {% data variables.product.prodname_dependabot_alerts %}.                                                                                                                                                                                                                                                                                                                                         |

{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### `secret_scanning` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                                     |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Triggered when an organization owner disables secret scanning for all existing{% if currentVersion == "free-pro-team@latest" %}, private{% endif %} repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)." |
| `aktivieren`   | Triggered when an organization owner enables secret scanning for all existing{% if currentVersion == "free-pro-team@latest" %}, private{% endif %} repositories.                                                                                                                 |

#### `secret_scanning_new_repos` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Triggered when an organization owner disables secret scanning for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)." |
| `aktivieren`   | Triggered when an organization owner enables secret scanning for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories.                                                                                                                 |

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `sponsors` category actions

| Aktion                                        | Beschreibung                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom_amount_settings_change`               | Triggered when you enable or disable custom amounts, or when you change the suggested custom amount (see "[Managing your sponsorship tiers](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")                                                                |
| `repo_funding_links_file_action`              | Wird ausgelöst, wenn Du die FUNDING-Datei in Deinem Repository änderst (siehe „[Sponsorenschaltfläche in Deinem Repository anzeigen](/articles/displaying-a-sponsor-button-in-your-repository)“)                                                                                                                |
| `sponsor_sponsorship_cancel`                  | Wird ausgelöst, wenn Sie ein Sponsoring beenden (siehe „[Sponsoring herabstufen](/articles/downgrading-a-sponsorship)“).                                                                                                                                                                                        |
| `sponsor_sponsorship_create`                  | Triggered when you sponsor an account (see "[Sponsoring an open source contributor](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")                                                                                                                                      |
| `sponsor_sponsorship_preference_change`       | Triggered when you change whether you receive email updates from a sponsored account (see "[Managing your sponsorship](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")                                                                                                               |
| `sponsor_sponsorship_tier_change`             | Wird ausgelöst, wenn Sie Ihr Sponsoring upgraden oder herabstufen (siehe „[Sponsoring upgraden](/articles/upgrading-a-sponsorship)“ und „[Sponsoring herabstufen](/articles/downgrading-a-sponsorship)“).                                                                                                       |
| `sponsored_developer_approve`                 | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")                     |
| `sponsored_developer_create`                  | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")                      |
| `sponsored_developer_disable`                 | Triggered when your {% data variables.product.prodname_sponsors %} account is disabled                                                                                                                                                                                                                          |
| `sponsored_developer_redraft`                 | Triggered when your {% data variables.product.prodname_sponsors %} account is returned to draft state from approved state                                                                                                                                                                                       |
| `sponsored_developer_profile_update`          | Triggered when you edit your sponsored organization profile (see "[Editing your profile details for {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")                                                |
| `sponsored_developer_request_approval`        | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)") |
| `sponsored_developer_tier_description_update` | Triggered when you change the description for a sponsorship tier (see "[Managing your sponsorship tiers](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")                                                                                                            |
| `sponsored_developer_update_newsletter_send`  | Triggered when you send an email update to your sponsors (see "[Contacting your sponsors](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")                                                                                                                                  |
| `waitlist_invite_sponsored_developer`         | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")    |
| `waitlist_join`                               | Triggered when you join the waitlist to become a sponsored organization (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")                                    |
{% endif %}

#### `team` category actions

| Aktion               | Beschreibung                                                                                                                                                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member`         | Wird ausgelöst, wenn ein Mitglied einer Organisation [einem Team hinzugefügt](/articles/adding-organization-members-to-a-team) wird.                                                           |
| `add_repository`     | Wird ausgelöst, wenn ein Team die Kontrolle über ein Repository erhält.                                                                                                                        |
| `change_parent_team` | Wird ausgelöst, wenn ein untergeordnetes Team erstellt wird oder das [übergeordnete Team eines untergeordneten Teams geändert](/articles/moving-a-team-in-your-organization-s-hierarchy) wird. |
| `change_privacy`     | Wird ausgelöst, wenn die Datenschutzstufe eines Teams geändert wird.                                                                                                                           |
| `create`             | Triggered when a new team is created.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}


`demote_maintainer` | Triggered when a user was demoted from a team maintainer to a team member. For more information, see "[Giving "team maintainer" permissions to an organization member](/organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member)."{% endif %} | `destroy` | Triggered when a team is deleted from the organization.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} `team.promote_maintainer` | Triggered when a user was promoted from a team member to a team maintainer. For more information, see "[Giving "team maintainer" permissions to an organization member](/organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member)."{% endif %} | `remove_member` | Triggered when a member of an organization is [removed from a team](/articles/removing-organization-members-from-a-team). | `remove_repository` | Triggered when a repository is no longer under a team's control.

#### `team_discussions` category actions

| Aktion         | Beschreibung                                                                                                                                                                                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deaktivieren` | Wird ausgelöst, wenn ein Organisationsinhaber für eine Organisation Teamdiskussionen deaktiviert. Weitere Informationen findest Du unter „[Teamdiskussionen innerhalb Deiner Organisation deaktivieren](/articles/disabling-team-discussions-for-your-organization).“ |
| `aktivieren`   | Wird ausgelöst, wenn ein Organisationsinhaber für eine Organisation Teamdiskussionen aktiviert.                                                                                                                                                                       |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest"%}
#### `workflows` category actions

{% data reusables.actions.actions-audit-events-workflow %}

{% endif %}

### Weiterführende Informationen

- „[Schutz Ihrer Organisation](/articles/keeping-your-organization-secure)“
