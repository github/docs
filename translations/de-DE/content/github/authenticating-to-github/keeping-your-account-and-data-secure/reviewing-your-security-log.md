---
title: Dein Sicherheitsprotokoll überprüfen
intro: 'Du kannst das Sicherheitsprotokoll für Dein Benutzerkonto überprüfen, um Dich betreffende Aktionen besser zu verstehen, die von Dir oder anderen Benutzern durchgeführt wurden.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/reviewing-your-security-log
  - /github/authenticating-to-github/reviewing-your-security-log
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
### Zugriff auf Dein Sicherheitsprotokoll

Das Sicherheitsprotokoll listet alle in den letzten 90 Tagen durchgeführten Aktionen auf{% if currentVersion ver_lt "enterprise-server@2.20" %}, maximal 50{% endif %}.

{% data reusables.user_settings.access_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
2. Klicke in der Seitenleiste für Benutzereinstellungen auf **Security log** (Sicherheitsprotokoll). ![Registerkarte „Security log" (Sicherheitsprotokoll)](/assets/images/help/settings/audit-log-tab.png)
{% else %}
{% data reusables.user_settings.security %}
3. Dein Protokoll wird unter dem Eintrag „Security history“ (Sicherheitsverlauf) angezeigt. ![Sicherheitsprotokoll](/assets/images/help/settings/user_security_log.png)
4. Klicken Sie auf einen Eintrag, um weitere Informationen zum betreffenden Ereignis anzuzeigen. ![Sicherheitsprotokoll](/assets/images/help/settings/user_security_history_action.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Dein Sicherheitsprotokoll durchsuchen

{% data reusables.audit_log.audit-log-search %}

#### Suche nach der Art der durchgeführten Aktion
{% else %}
### Ereignisse im Sicherheitsprotokoll verstehen
{% endif %}

The events listed in your security log are triggered by your actions. Actions are grouped into the following categories:

| Kategoriename                                                                                                                    | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| [`account_recovery_token`](#account_recovery_token-category-actions)                                                             | Umfasst alle Aktivitäten in Verbindung mit dem [Hinzufügen eines Wiederherstellungstokens](/articles/configuring-two-factor-authentication-recovery-methods).                                                                                                                                                                                                                                                                                                       |
| [`Abrechnung`](#billing-category-actions)                                                                                        | Umfasst alle Aktivitäten in Verbindung mit Ihren Abrechnungsinformationen.                                                                                                                                                                                                                                                                                                                                                                                          |
| [`codespaces`](#codespaces-category-actions)                                                                                     | Contains all activities related to {% data variables.product.prodname_codespaces %}. Weitere Informationen findest Du unter „[Über {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces)."                                                                                                                                                                                                                  |
| [`marketplace_agreement_signature (Unterzeichnung Marketplace-Vereinbarung)`](#marketplace_agreement_signature-category-actions) | Umfasst alle Aktivitäten in Verbindung mit der Signierung der {% data variables.product.prodname_marketplace %}-Entwicklervereinbarung.                                                                                                                                                                                                                                                                                                                             |
| [`marketplace_listing (Eintrag auf Marketplace)`](#marketplace_listing-category-actions)                                         | Umfasst alle Aktivitäten in Verbindung mit dem Eintragen von Apps auf {% data variables.product.prodname_marketplace %}.{% endif %}
| [`oauth_access`](#oauth_access-category-actions)                                                                                 | Umfasst alle Aktivitäten in Verbindung mit [{% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps), zu denen Du eine Verbindung hergestellt hast.{% if currentVersion == "free-pro-team@latest" %}
| [`payment_method`](#payment_method-category-actions)                                                                             | Umfasst alle Aktivitäten in Verbindung mit der Bezahlung Deines {% data variables.product.prodname_dotcom %}-Abonnements.{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                                                           | Umfasst alle Aktivitäten in Verbindung mit Deinem Profilbild.                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`project (Projekt)`](#project-category-actions)                                                                                 | Umfasst alle Aktivitäten in Verbindung mit Projektboards.                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`public_key`](#public_key-category-actions)                                                                                     | Umfasst alle Aktivitäten in Verbindung mit [Deinen öffentlichen SSH-Schlüsseln](/articles/adding-a-new-ssh-key-to-your-github-account).                                                                                                                                                                                                                                                                                                                             |
| [`repo`](#repo-category-actions)                                                                                                 | Umfasst alle Aktivitäten in Verbindung mit den Repositorys, deren Inhaber Du bist.{% if currentVersion == "free-pro-team@latest" %}
| [`sponsors`](#sponsors-category-actions)                                                                                         | Contains all events related to {% data variables.product.prodname_sponsors %} and sponsor buttons (see "[About {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)" and "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| [`Team`](#team-category-actions)                                                                                                 | Contains all activities related to teams you are a part of.{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`two_factor_authentication`](#two_factor_authentication-category-actions)                                                       | Contains all activities related to [two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa).{% endif %}
| [`Benutzer`](#user-category-actions)                                                                                             | Umfasst alle Aktivitäten in Verbindung mit Deinem Konto.                                                                                                                                                                                                                                                                                                                                                                                                            |

{% if currentVersion == "free-pro-team@latest" %}

### Dein Sicherheitsprotokoll exportieren

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

### Security log actions

An overview of some of the most common actions that are recorded as events in the security log.

{% if currentVersion == "free-pro-team@latest" %}

#### `account_recovery_token` category actions

| Aktion          | Beschreibung                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `confirm`       | Wird ausgelöst, wenn Du [ein neues Token erfolgreich bei einem Wiederherstellungsanbieter speicherst](/articles/configuring-two-factor-authentication-recovery-methods). |
| `recover`       | Wird ausgelöst, wenn Du [ein Kontowiederherstellungstoken erfolgreich einlöst](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).                      |
| `recover_error` | Wird ausgelöst, wenn ein Token verwendet wird, {% data variables.product.prodname_dotcom %} dieses aber nicht validieren kann.                                           |

#### `billing` category actions

| Aktion                | Beschreibung                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `change_billing_type` | Wird ausgelöst, wenn Sie Ihre [Zahlungsmethode](/articles/adding-or-editing-a-payment-method) für {% data variables.product.prodname_dotcom %} ändern. |
| `change_email`        | Wird ausgelöst, wenn Du [Deine E-Mail-Adresse änderst](/articles/changing-your-primary-email-address).                                                 |

#### `codespaces` category actions

| Aktion                               | Beschreibung                                                                                                                                                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `create`                             | Triggered when you [create a codespace](/github/developing-online-with-codespaces/creating-a-codespace).                                                                                                                 |
| `resume`                             | Triggered when you resume a suspended codespace.                                                                                                                                                                         |
| `delete`                             | Triggered when you [delete a codespace](/github/developing-online-with-codespaces/deleting-a-codespace).                                                                                                                 |
| `manage_access_and_security`         | Triggered when you update [the repositories a codespace has access to](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).                                                           |
| `trusted_repositories_access_update` | Triggered when you change your user account's [access and security setting for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). |

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

#### `oauth_access` category actions

| Aktion    | Beschreibung                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`  | Wird ausgelöst, wenn Sie einer [{% data variables.product.prodname_oauth_app %} Zugriff erteilen](/articles/authorizing-oauth-apps).                                    |
| `destroy` | Wird ausgelöst, wenn Sie einer [{% data variables.product.prodname_oauth_app %} den Zugriff auf Ihr Konto entziehen](/articles/reviewing-your-authorized-integrations). |

{% if currentVersion == "free-pro-team@latest" %}

#### `payment_method` category actions

| Aktion          | Beschreibung                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| `clear`         | Wird ausgelöst, wenn eine [registrierte Zahlungsmethode](/articles/removing-a-payment-method) entfernt wird.        |
| `create`        | Wird ausgelöst, wenn eine Zahlungsmethode, beispielsweise eine Kreditkarte oder ein PayPal-Konto, hinzugefügt wird. |
| `aktualisieren` | Wird ausgelöst, wenn eine vorhandene Zahlungsmethode geändert wird.                                                 |

{% endif %}

#### `profile_picture` category actions

| Aktion          | Beschreibung                                                                                               |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| `aktualisieren` | Wird ausgelöst, wenn Du [Dein Profilbild festlegst oder änderst](/articles/setting-your-profile-picture/). |

#### `project` category actions

| Aktion                   | Beschreibung                                                                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                 | Wird ausgelöst, wenn die Sichtbarkeit eines Projektboards geändert wird.                                                                           |
| `create`                 | Wird bei der Erstellung eines Projektboards ausgelöst.                                                                                             |
| `rename`                 | Wird ausgelöst, wenn ein Projektboard umbenannt wird.                                                                                              |
| `aktualisieren`          | Wird ausgelöst, wenn ein Projektboard geändert wird.                                                                                               |
| `delete`                 | Wird ausgelöst, wenn ein Projektboard gelöscht wird.                                                                                               |
| `link`                   | Wird ausgelöst, wenn ein Repository mit einem Projektboard verknüpft wird.                                                                         |
| `unlink`                 | Wird ausgelöst, wenn die Verknüpfung eines Repositorys mit einem Projektboard aufgehoben wird.                                                     |
| `update_user_permission` | Wird ausgelöst, wenn ein externer Mitarbeiter einem Projektboard hinzugefügt oder entfernt wird oder wenn sich seine Berechtigungsebene verändert. |

#### `public_key` category actions

| Aktion   | Beschreibung                                                                                                                                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `create` | Wird ausgelöst, wenn Sie [Ihrem {% data variables.product.product_name %}-Konto einen neuen öffentlichen SSH-Schlüssel hinzufügen](/articles/adding-a-new-ssh-key-to-your-github-account). |
| `delete` | Wird ausgelöst, wenn Sie [einen öffentlichen SSH-Schlüssel aus Ihrem {% data variables.product.product_name %}-Konto entfernen](/articles/reviewing-your-ssh-keys).                        |

#### `repo` category actions

| Aktion                                | Beschreibung                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                              | Wird ausgelöst, wenn die Sichtbarkeit eines Repositorys, dessen Inhaber Du bist, [von „privat“ auf „öffentlich“ gesetzt wird](/articles/making-a-private-repository-public) (oder umgekehrt).                                                                                                                                                                             |
| `add_member`                          | Wird ausgelöst, wenn ein {% data variables.product.product_name %}-Benutzer für ein Repository {% if currentVersion == "free-pro-team@latest" %}[zum Zugriff als Mitarbeiter eingeladen wird](/articles/inviting-collaborators-to-a-personal-repository){% else %}[Zugriff als Mitarbeiter erhält](/articles/inviting-collaborators-to-a-personal-repository){% endif %}. |
| `add_topic`                           | Wird ausgelöst, wenn ein Repository-Inhaber einem Repository [ein Thema hinzufügt](/articles/classifying-your-repository-with-topics).                                                                                                                                                                                                                                    |
| `archived`                            | Wird ausgelöst, wenn ein Repository-Inhaber ein [Repository archiviert](/articles/about-archiving-repositories).{% if enterpriseServerVersions contains currentVersion %}
| `config.disable_anonymous_git_access` | Wird ausgelöst, wenn für ein öffentliches Repository der [anonyme Git-Lesezugriff deaktiviert](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) wird.                                                                                                                                                                  |
| `config.enable_anonymous_git_access`  | Wird ausgelöst, wenn für ein öffentliches Repository der [anonyme Git-Lesezugriff aktiviert](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) wird.                                                                                                                                                                    |
| `config.lock_anonymous_git_access`    | Wird ausgelöst, wenn für ein Repository die [Einstellung für den anonymen Git-Lesezugriff gesperrt](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) wird.                                                                                                                                         |
| `config.unlock_anonymous_git_access`  | Wird ausgelöst, wenn für ein Repository die [Einstellungssperre für den anonymen Git-Lesezugriff aufgehoben](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) wird.{% endif %}
| `create`                              | Wird bei der [Erstellung eines neuen Repositorys](/articles/creating-a-new-repository) ausgelöst.                                                                                                                                                                                                                                                                         |
| `destroy`                             | Wird ausgelöst, wenn ein [Repository gelöscht](/articles/deleting-a-repository) wird.{% if currentVersion == "free-pro-team@latest" %}
| `deaktivieren`                        | Wird ausgelöst, wenn ein Repository deaktiviert wird (zum Beispiel aufgrund [unzureichender Deckung](/articles/unlocking-a-locked-account)).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `aktivieren`                          | Wird ausgelöst, wenn ein Repository wieder aktiviert wird.{% endif %}
| `remove_member`                       | Wird ausgelöst, wenn ein {% data variables.product.product_name %}-Benutzer [als Mitarbeiter aus einem Repository entfernt wird](/articles/removing-a-collaborator-from-a-personal-repository).                                                                                                                                                                           |
| `remove_topic`                        | Wird ausgelöst, wenn ein Repository-Inhaber ein Thema aus einem Repository entfernt.                                                                                                                                                                                                                                                                                      |
| `rename`                              | Wird ausgelöst, wenn ein [Repository umbenannt](/articles/renaming-a-repository) wird.                                                                                                                                                                                                                                                                                    |
| `übertragen`                          | Wird ausgelöst, wenn ein [Repository übertragen](/articles/how-to-transfer-a-repository) wird.                                                                                                                                                                                                                                                                            |
| `transfer_start`                      | Wird ausgelöst, wenn die Übertragung eines Repositorys initiiert wurde.                                                                                                                                                                                                                                                                                                   |
| `unarchived`                          | Wird ausgelöst, wenn ein Repository-Inhaber die Archivierung eines Repositorys aufhebt.                                                                                                                                                                                                                                                                                   |

{% if currentVersion == "free-pro-team@latest" %}
#### `sponsors` category actions

| Aktion                                        | Beschreibung                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom_amount_settings_change`               | Triggered when you enable or disable custom amounts, or when you change the suggested custom amount (see "[Managing your sponsorship tiers](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")                                                                |
| `repo_funding_links_file_action`              | Wird ausgelöst, wenn Du die FUNDING-Datei in Deinem Repository änderst (siehe „[Sponsorenschaltfläche in Deinem Repository anzeigen](/articles/displaying-a-sponsor-button-in-your-repository)“)                                                                                                                |
| `sponsor_sponsorship_cancel`                  | Wird ausgelöst, wenn Sie ein Sponsoring beenden (siehe „[Sponsoring herabstufen](/articles/downgrading-a-sponsorship)“).                                                                                                                                                                                        |
| `sponsor_sponsorship_create`                  | Triggered when you sponsor an account (see "[Sponsoring an open source contributor](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")                                                                                                                                      |
| `sponsor_sponsorship_preference_change`       | Triggered when you change whether you receive email updates from a sponsored developer (see "[Managing your sponsorship](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")                                                                                                             |
| `sponsor_sponsorship_tier_change`             | Wird ausgelöst, wenn Sie Ihr Sponsoring upgraden oder herabstufen (siehe „[Sponsoring upgraden](/articles/upgrading-a-sponsorship)“ und „[Sponsoring herabstufen](/articles/downgrading-a-sponsorship)“).                                                                                                       |
| `sponsored_developer_approve`                 | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                     |
| `sponsored_developer_create`                  | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                      |
| `sponsored_developer_disable`                 | Triggered when your {% data variables.product.prodname_sponsors %} account is disabled                                                                                                                                                                                                                          |
| `sponsored_developer_redraft`                 | Triggered when your {% data variables.product.prodname_sponsors %} account is returned to draft state from approved state                                                                                                                                                                                       |
| `sponsored_developer_profile_update`          | Triggered when you edit your sponsored developer profile (see "[Editing your profile details for {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")                                                   |
| `sponsored_developer_request_approval`        | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)") |
| `sponsored_developer_tier_description_update` | Triggered when you change the description for a sponsorship tier (see "[Managing your sponsorship tiers](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")                                                                                                            |
| `sponsored_developer_update_newsletter_send`  | Triggered when you send an email update to your sponsors (see "[Contacting your sponsors](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")                                                                                                                                  |
| `waitlist_invite_sponsored_developer`         | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)")    |
| `waitlist_join`                               | Triggered when you join the waitlist to become a sponsored developer (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                                       |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `successor_invitation` category actions

| Aktion    | Beschreibung                                                                                                                                                                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accept`  | Wird ausgelöst, wenn du eine Erneuerungseinladung annimmst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")     |
| `cancel`  | Wird ausgelöst, wenn du eine Erneuerungseinladung kündigst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")     |
| `create`  | Wird ausgelöst, wenn du eine Erneuerungseinladung erstellst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")    |
| `decline` | Wird ausgelöst, wenn du eine Erneuerungseinladung ablehnst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")     |
| `revoke`  | Wird ausgelöst, wenn du eine Erneuerungseinladung zurückziehst (siehe „[Inhaber-Kontinuität Deiner Benutzerkonto-Repositorys aufrechterhalten](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

#### `team` category actions

| Aktion              | Beschreibung                                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member`        | Wird ausgelöst, wenn ein Mitglied einer Organisation, zu der Sie gehören, [Sie zu einem Team hinzufügt](/articles/adding-organization-members-to-a-team).           |
| `add_repository`    | Wird ausgelöst, wenn ein Team, dessen Mitglied Sie sind, die Kontrolle über ein Repository erhält.                                                                  |
| `create`            | Wird ausgelöst, wenn in einer Organisation, zu der Sie gehören, ein neues Team erstellt wird.                                                                       |
| `destroy`           | Wird ausgelöst, wenn ein Team, dessen Mitglied Sie sind, aus einer Organisation gelöscht wird.                                                                      |
| `remove_member`     | Wird ausgelöst, wenn ein Mitglied einer Organisation aus einem [Team entfernt wird](/articles/removing-organization-members-from-a-team), dessen Mitglied Sie sind. |
| `remove_repository` | Wird ausgelöst, wenn ein Repository nicht mehr unter der Kontrolle eines Teams steht.                                                                               |

{% endif %}

{% if currentVersion != "github-ae@latest" %}
#### `two_factor_authentication` category actions

| Aktion     | Beschreibung                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`  | Wird bei der Aktivierung der [Zwei-Faktor-Authentifizierung](/articles/securing-your-account-with-two-factor-authentication-2fa) ausgelöst. |
| `disabled` | Wird bei der Deaktivierung der Zwei-Faktor-Authentifizierung ausgelöst.                                                                     |
{% endif %}

#### `user` category actions

| Aktion                                                                                                                                                                                                              | Beschreibung                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_email`                                                                                                                                                                                                         | Triggered when you                                                                                                                                                                                                        |
| {% if currentVersion != "github-ae@latest" %}[add a new email address](/articles/changing-your-primary-email-address){% else %}add a new email address{% endif %}.{% if currentVersion == "free-pro-team@latest" %} |                                                                                                                                                                                                                           |
| `codespaces_trusted_repo_access_granted`                                                                                                                                                                            | Triggered when you \[allow the codespaces you create for a repository to access other repositories owned by your user account\](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces.    |
| `codespaces_trusted_repo_access_revoked`                                                                                                                                                                            | Triggered when you \[disallow the codespaces you create for a repository to access other repositories owned by your user account\](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces. |{% endif %}
| `create`                                                                                                                                                                                                            | Triggered when you create a new user account.{% if currentVersion != "github-ae@latest" %}
| `change_password`                                                                                                                                                                                                   | Wird ausgelöst, wenn Sie Ihr Passwort ändern.                                                                                                                                                                             |
| `forgot_password`                                                                                                                                                                                                   | Triggered when you ask for [a password reset](/articles/how-can-i-reset-my-password).{% endif %}
| `hide_private_contributions_count`                                                                                                                                                                                  | Wird ausgelöst, wenn Sie [private Beiträge in Ihrem Profil verbergen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).                                                                        |
| `login`                                                                                                                                                                                                             | Triggered when you log in to {% data variables.product.product_location %}.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}


`mandatory_message_viewed`   | Triggered when you view a mandatory message (see "[Customizing user messages](/admin/user-management/customizing-user-messages-for-your-enterprise)" for details) | |{% endif %}| | `failed_login` | Triggered when you failed to log in successfully. | `remove_email` | Triggered when you remove an email address. | `rename` | Triggered when you rename your account.{% if currentVersion == "free-pro-team@latest" %} | `report_content` | Triggered when you [report an issue or pull request, or a comment on an issue, pull request, or commit](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %} | `show_private_contributions_count` | Triggered when you [publicize private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% if currentVersion != "github-ae@latest" %} | `two_factor_requested` | Triggered when {% data variables.product.product_name %} asks you for [your two-factor authentication code](/articles/accessing-github-using-two-factor-authentication).{% endif %}

#### `user_status` category actions

| Aktion          | Beschreibung                                                                                                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aktualisieren` | Wird ausgelöst, wenn Sie den Status Ihres Profils festlegen oder ändern. Weitere Informationen findest Du unter „[Status festlegen](/articles/personalizing-your-profile/#setting-a-status).“ |
| `destroy`       | Wird ausgelöst, wenn Sie den Status Ihres Profils löschen.                                                                                                                                    |
