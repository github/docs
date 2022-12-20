---
title: Sicherheitsprotokoll überprüfen
intro: 'Du kannst das Sicherheitsprotokoll für dein persönliches Konto überprüfen, um dich betreffende Aktionen besser zu verstehen, die von dir oder anderen Benutzer*innen durchgeführt wurden.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-your-security-log
  - /github/authenticating-to-github/reviewing-your-security-log
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Security log
ms.openlocfilehash: 2061c1836300ee21155841d407c46cdfd8712efd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107365'
---
## Zugriff auf dein Sicherheitsprotokoll

Das Sicherheitsprotokoll listet alle innerhalb der letzten 90 Tage durchgeführten Aktionen auf.

{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. Klicke auf der Randleiste im Abschnitt „Archive“ auf **{% octicon "log" aria-label="The log icon" %} Sicherheitsprotokoll**.
{% else %}
1. Klicke auf der Randleiste der Benutzereinstellungen auf **Sicherheitsprotokoll**.
  ![Registerkarte „Sicherheitsprotokoll“](/assets/images/help/settings/audit-log-tab.png) {% endif %}

## Dein Sicherheitsprotokoll durchsuchen

{% data reusables.audit_log.audit-log-search %}

### Suche nach der Art der durchgeführten Aktion

Die in deinem Sicherheitsprotokoll aufgeführten Ereignisse werden durch deine Aktionen ausgelöst. Aktionen sind in folgenden Kategorien angeordnet:

| Kategoriename | Beschreibung |------------------|-------------------{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit deinen Abrechnungsinformationen.
| [`codespaces`](#codespaces-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit {% data variables.product.prodname_github_codespaces %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces).
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Umfasst alle Aktivitäten in Verbindung mit der Signierung der {% data variables.product.prodname_marketplace %}-Entwicklervereinbarung.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit dem Auflisten von Apps in {% data variables.product.prodname_marketplace %}.{% endif %} | [`oauth_access`](#oauth_access-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps), mit denen du verbunden bist. {% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit der Zahlung für dein {% data variables.product.prodname_dotcom %}-Abonnement. {% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit {% data variables.product.pat_v2 %}. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).{% endif %} | [`profile_picture`](#profile_picture-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit deinem Profilbild.
| [`project`](#project-category-actions) | Umfasst alle Aktivitäten in Verbindung mit Projektboards.
| [`public_key`](#public_key-category-actions) | Umfasst alle Aktivitäten in Verbindung mit [deinen öffentlichen SSH-Schlüsseln](/articles/adding-a-new-ssh-key-to-your-github-account).
| [`repo`](#repo-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit den Repositorys, die du besitzt. {% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Enthält alle Ereignisse im Zusammenhang mit {% data variables.product.prodname_sponsors %} und Sponsorschaltflächen (siehe [Informationen zu {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors) und [Anzeigen einer Sponsorschaltfläche in deinem Repository](/articles/displaying-a-sponsor-button-in-your-repository)){% endif %}{% ifversion ghes or ghae %} | [`team`](#team-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit Teams, zu denen du gehörst. {% endif %} {% ifversion not ghae %} | [`two_factor_authentication`](#two_factor_authentication-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit der [zweistufigen Authentifizierung](/articles/securing-your-account-with-two-factor-authentication-2fa). {% endif %} | [`user`](#user-category-actions) | Enthält alle Aktivitäten im Zusammenhang mit deinem Konto.

{% ifversion fpt or ghec %}

## Dein Sicherheitsprotokoll exportieren

{% data reusables.audit_log.export-log %} {% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## Sicherheitsprotokollaktionen

Eine Übersicht über einige der häufigsten Aktionen, die als Ereignisse im Sicherheitsprotokoll aufgezeichnet werden.

{% ifversion fpt or ghec %}

### `billing`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `change_billing_type` | Wird ausgelöst, wenn du für {% data variables.product.prodname_dotcom %} [deine Zahlungsweise änderst](/articles/adding-or-editing-a-payment-method).
| `change_email` | Wird ausgelöst, wenn du [deine E-Mail-Adresse änderst](/articles/changing-your-primary-email-address).

### `codespaces`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn du [einen Codespace erstellst](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Wird ausgelöst, wenn du einen angehaltenen Codespace fortsetzt.
| `delete` | Wird ausgelöst, wenn du [einen Codespace löschst](/github/developing-online-with-codespaces/deleting-a-codespace).
| `manage_access_and_security` | Wird ausgelöst, wenn du [die Repositorys, auf die ein Codespace Zugriff hat](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces), aktualisierst.
| `trusted_repositories_access_update` | Wird ausgelöst, wenn du die [Zugriffs- und Sicherheitseinstellungen deines persönlichen Kontos für {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces) änderst.

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

### `oauth_authorization`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn du [den Zugriff auf eine {% data variables.product.prodname_oauth_app %} gewährst](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps).
| `destroy` | Wird ausgelöst, wenn du [einer {% data variables.product.prodname_oauth_app %} den Zugriff auf dein Konto entziehst](/articles/reviewing-your-authorized-integrations) und wenn [Autorisierungen widerrufen werden oder ablaufen](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

{% ifversion fpt or ghec %}

### `payment_method`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn eine Zahlungsmethode, beispielsweise eine Kreditkarte oder ein PayPal-Konto, hinzugefügt wird.
| `update` | Wird ausgelöst, wenn eine vorhandene Zahlungsmethode geändert wird.

{% endif %}

{% ifversion pat-v2 %}

### `personal_access_token`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `access_granted` | Wird ausgelöst, wenn ein von dir erstelltes {% data variables.product.pat_v2 %} Zugriff auf Ressourcen erhält.
| `access_revoked` | Wird ausgelöst, wenn ein von dir erstelltes {% data variables.product.pat_v2 %} widerrufen wird. Der Token kann weiterhin öffentliche Organisationsressourcen lesen.
| `create` | Wird ausgelöst, wenn du ein {% data variables.product.pat_v2 %} erstellst.
| `credential_regenerated` | Wird ausgelöst, wenn du ein {% data variables.product.pat_v2 %} neu generierst.
| `destroy` | Wird ausgelöst, wenn du ein {% data variables.product.pat_v2 %} löschst.
| `request_cancelled` | Wird ausgelöst, wenn du eine ausstehende Anforderung für dein {% data variables.product.pat_v2 %} zum Zugriff auf Organisationsressourcen stornierst.
| `request_created` | Wird ausgelöst, wenn du ein {% data variables.product.pat_v2 %} für den Zugriff auf Organisationsressourcen erstellst und die Organisation eine Genehmigung verlangt, bevor ein {% data variables.product.pat_v2 %} auf Organisationsressourcen zugreifen kann.
| `request_denied` | Wird ausgelöst, wenn deine Anforderung für ein {% data variables.product.pat_v2 %} zum Zugriff auf Organisationsressourcen verweigert wird. Weitere Informationen findest du unter [Verwalten von Anforderungen für {% data variables.product.pat_generic %} in deiner Organisation](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization).

{% endif %}

### `profile_picture`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `update` | Wird ausgelöst, wenn du [dein Profilbild festlegst oder änderst](/articles/setting-your-profile-picture/).

### `project`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------------------|---------------------
| `access` | Wird ausgelöst, wenn die Sichtbarkeit eines Projektboards geändert wird.
| `create` | Wird bei der Erstellung eines Projektboards ausgelöst.
| `rename` | Wird ausgelöst, wenn ein Projektboard umbenannt wird.
| `update` | Wird ausgelöst, wenn ein Projektboard geändert wird.
| `delete` | Wird ausgelöst, wenn ein Projektboard gelöscht wird.
| `link`   | Wird ausgelöst, wenn ein Repository mit einem Projektboard verknüpft wird.
| `unlink` | Wird ausgelöst, wenn die Verknüpfung eines Repositorys mit einem Projektboard aufgehoben wird.
| `update_user_permission` | Wird ausgelöst, wenn ein externer Mitarbeiter einem Projektboard hinzugefügt oder entfernt wird oder wenn sich seine Berechtigungsebene verändert.

### `public_key`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `create` | Wird ausgelöst, wenn du [deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} einen neuen öffentlichen SSH-Schlüssel hinzufügst](/articles/adding-a-new-ssh-key-to-your-github-account).
| `delete` | Wird ausgelöst, wenn du [einen öffentlichen SSH-Schlüssel für dein Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} entfernst](/articles/reviewing-your-ssh-keys).

### `repo`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `access` | Wird ausgelöst, wenn ein Repository, das du besitzt, [von „privat“ auf „öffentlich“](/articles/making-a-private-repository-public) umgestellt wird (oder umgekehrt).
| `add_member` | Wird ausgelöst, wenn ein {% data variables.product.product_name %}-Benutzer {% ifversion fpt or ghec %}[zum Zugriff auf ein Repository zur Zusammenarbeit eingeladen wird](/articles/inviting-collaborators-to-a-personal-repository){% else %}[Zugriff auf ein Repository zur Zusammenarbeit erhält](/articles/inviting-collaborators-to-a-personal-repository){% endif %}.
| `add_topic` | Wird ausgelöst, wenn ein Repository-Besitzer seinem Repository [ein Thema hinzufügt](/articles/classifying-your-repository-with-topics).
| `archived` | Wird ausgelöst, wenn ein Repositorybesitzer [ein Repository archiviert](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Wird ausgelöst, wenn in einem öffentlichen Repository der [anonyme Git-Lesezugriff deaktiviert wird](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository).
| `config.enable_anonymous_git_access` | Wird ausgelöst, wenn in einem öffentlichen Repository der [anonyme Git-Lesezugriff aktiviert wird](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository).
| `config.lock_anonymous_git_access` | Wird ausgelöst, wenn in einem Repository die [anonyme Git-Lesezugriffseinstellung gesperrt wird](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
| `config.unlock_anonymous_git_access` | Wird ausgelöst, wenn in einem Repository die [anonyme Git-Lesezugriffseinstellung entsperrt wird](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create` | Wird ausgelöst, wenn [ein neues Repository erstellt wird](/articles/creating-a-new-repository).
| `destroy` |  Wird ausgelöst, wenn [ein Repository gelöscht wird](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Wird ausgelöst, wenn ein Repository deaktiviert wird (z. B. aufgrund [unzureichender Mittel](/articles/unlocking-a-locked-account)).{% endif %}{% ifversion fpt or ghec %}
| `download_zip` | Wird ausgelöst, wenn ein ZIP- oder TAR-Archiv eines Repositorys heruntergeladen wird.
| `enable` | Wird ausgelöst, wenn ein Repository wieder aktiviert wird.{% endif %}
| `remove_member` | Wird ausgelöst, wenn ein {% data variables.product.product_name %}-Benutzer [aus einem Repository als Mitwirkender entfernt](/articles/removing-a-collaborator-from-a-personal-repository) wird.
| `remove_topic` | Wird ausgelöst, wenn ein Repository-Inhaber ein Thema aus einem Repository entfernt.
| `rename` | Wird ausgelöst, wenn [ein Repository umbenannt wird](/articles/renaming-a-repository).
| `transfer` | Wird ausgelöst, wenn [ein Repository übertragen wird](/articles/how-to-transfer-a-repository).
| `transfer_start` | Wird ausgelöst, wenn die Übertragung eines Repositorys initiiert wurde.
| `unarchived` | Wird ausgelöst, wenn ein Repository-Inhaber die Archivierung eines Repositorys aufhebt.

{% ifversion fpt or ghec %}
### `sponsors`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `custom_amount_settings_change` | Wird ausgelöst, wenn du benutzerdefinierte Beträge aktivierst oder deaktivierst oder den vorgeschlagenen benutzerdefinierten Betrag änderst (siehe [Verwalten deiner Sponsoringebenen](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)).
| `repo_funding_links_file_action` | Wird ausgelöst, wenn du die FUNDING-Datei in deinem Repository änderst (siehe [Anzeigen einer Sponsorschaltfläche in deinem Repository](/articles/displaying-a-sponsor-button-in-your-repository)).
| `sponsor_sponsorship_cancel` | Wird ausgelöst, wenn du ein Sponsoring kündigst (siehe [Herabstufen eines Sponsorings](/articles/downgrading-a-sponsorship)).
| `sponsor_sponsorship_create` | Wird ausgelöst, wenn du ein Konto sponserst (siehe [Unterstützen eines Open-Source-Mitwirkenden](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)).
| `sponsor_sponsorship_payment_complete` | Wird ausgelöst, nachdem du ein Konto gesponsert hast und deine Zahlung verarbeitet wurde (siehe [Unterstützen eines Open-Source-Mitwirkenden](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor).)
| `sponsor_sponsorship_preference_change` | Wird ausgelöst, wenn du änderst, ob du E-Mail-Updates von einem gesponserten Entwickler empfängst (siehe [Verwalten deines Sponsorings](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)).
| `sponsor_sponsorship_tier_change` | Wird ausgelöst, wenn du dein Sponsoring aktualisierst oder herabstufst (siehe [Aktualisieren eines Sponsorings](/articles/upgrading-a-sponsorship) und [Herabstufen eines Sponsorings](/articles/downgrading-a-sponsorship)).
| `sponsored_developer_approve` | Wird ausgelöst, wenn dein {% data variables.product.prodname_sponsors %}-Konto genehmigt wurde (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für dein persönliches Konto](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
| `sponsored_developer_create` | Wird ausgelöst, wenn dein {% data variables.product.prodname_sponsors %}-Konto erstellt wird (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für dein persönliches Konto](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
| `sponsored_developer_disable` | Wird ausgelöst, wenn dein {% data variables.product.prodname_sponsors %}-Konto deaktiviert wird.
| `sponsored_developer_redraft` | Wird ausgelöst, wenn dein {% data variables.product.prodname_sponsors %}-Konto vom genehmigten Zustand in den Entwurfszustand zurückversetzt wurde.
| `sponsored_developer_profile_update` | Wird ausgelöst, wenn du dein gesponsertes Entwicklerprofil bearbeitest (siehe [Bearbeiten deiner Profildetails für {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)).
| `sponsored_developer_request_approval` | Wird ausgelöst, wenn du deine Anwendung für {% data variables.product.prodname_sponsors %} zur Genehmigung übermittelst (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für dein persönliches Konto](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
| `sponsored_developer_tier_description_update` | Wird ausgelöst, wenn du die Beschreibung für eine Sponsoringebene änderst (siehe [Verwalten deiner Sponsoringebenen](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)).
| `sponsored_developer_update_newsletter_send` | Wird ausgelöst, wenn du ein E-Mail-Update an deine Sponsoren sendest (siehe [Kontaktieren deiner Sponsoren](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)).
| `waitlist_invite_sponsored_developer` | Wird ausgelöst, wenn du eingeladen wirst, {% data variables.product.prodname_sponsors %} von der Warteliste beizutreten (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für dein persönliches Konto](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
| `waitlist_join` | Wird ausgelöst, wenn du der Warteliste beitrittst, um ein gesponserter Entwickler zu werden (siehe [Einrichten von {% data variables.product.prodname_sponsors %} für dein persönliches Konto](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
{% endif %}

{% ifversion fpt or ghec %}
### `successor_invitation`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `accept` | Wird ausgelöst, wenn du eine Erneuerungseinladung annimmst (siehe [Beibehalten der Besitzkontinuität der Repositorys deines persönlichen Kontos](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
| `cancel` | Wird ausgelöst, wenn du eine Erneuerungseinladung kündigst (siehe [Beibehalten der Besitzkontinuität der Repositorys deines persönlichen Kontos](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
| `create` | Wird ausgelöst, wenn du eine Erneuerungseinladung erstellst (siehe [Beibehalten der Besitzkontinuität der Repositorys deines persönlichen Kontos](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
| `decline` | Wird ausgelöst, wenn du eine Erneuerungseinladung ablehnst (siehe [Beibehalten der Besitzkontinuität der Repositorys deines persönlichen Kontos](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
| `revoke` | Wird ausgelöst, wenn du eine Erneuerungseinladung widerrufst (siehe [Beibehalten der Besitzkontinuität der Repositorys deines persönlichen Kontos](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
{% endif %}

{% ifversion ghes or ghae %}

### `team`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `add_member` | Wird ausgelöst, wenn ein Mitglied einer Organisation, zu der du gehörst, [dich zu einem Team hinzufügt](/articles/adding-organization-members-to-a-team).
| `add_repository` | Wird ausgelöst, wenn ein Team, dessen Mitglied du bist, die Kontrolle über ein Repository erhält.
| `create` | Wird ausgelöst, wenn in einer Organisation, zu der du gehörst, ein neues Team erstellt wird.
| `destroy` | Wird ausgelöst, wenn ein Team, dessen Mitglied du bist, aus einer Organisation gelöscht wird.
| `remove_member` | Wird ausgelöst, wenn ein Mitglied einer Organisation [aus einem Team entfernt](/articles/removing-organization-members-from-a-team) wird, in dem du Mitglied bist.
| `remove_repository` | Wird ausgelöst, wenn ein Repository nicht mehr unter der Kontrolle eines Teams steht.

{% endif %}

{% ifversion not ghae %}
### `two_factor_authentication`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `enabled` | Wird bei der Aktivierung der [zweistufigen Authentifizierung](/articles/securing-your-account-with-two-factor-authentication-2fa) ausgelöst.
| `disabled` | Wird bei der Deaktivierung der Zwei-Faktor-Authentifizierung ausgelöst.
{% endif %}

### `user`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------------------|---------------------
| `add_email` | Wird ausgelöst, wenn du {% ifversion not ghae %}[eine neue E-Mail-Adresse hinzufügst](/articles/changing-your-primary-email-address){% else %}eine neue E-Mail-Adresse hinzufügst{% endif %}.{% ifversion fpt or ghec %}
| `codespaces_trusted_repo_access_granted` | Wird ausgelöst, wenn du [die Codespaces zulässt, die du für ein Repository erstellst, um auf andere Repositorys zuzugreifen, die deinem persönlichen Konto gehören](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
| `codespaces_trusted_repo_access_revoked` | Wird ausgelöst, wenn du [die Codespaces nicht zulässt, die du für ein Repository erstellst, um auf andere Repositorys zuzugreifen, die deinem persönlichen Konto gehören](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). {% endif %}
| `create` | Wird ausgelöst, wenn du ein neues persönliches Konto erstellst.{% ifversion not ghae %}
| `change_password` | Wird ausgelöst, wenn du dein Passwort änderst.
| `forgot_password` | Wird ausgelöst, wenn du [eine Kennwortzurücksetzung](/articles/how-can-i-reset-my-password) anforderst.{% endif %}
| `hide_private_contributions_count` | Wird ausgelöst, wenn du [private Beiträge in deinem Profil ausblendest](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `login` | Wird ausgelöst, wenn du dich bei {% data variables.location.product_location %} anmeldest.{% ifversion ghes or ghae %}
`mandatory_message_viewed`   | Wird ausgelöst, wenn du eine obligatorische Nachricht anzeigst (Näheres siehe [Anpassen von Benutzernachrichten](/admin/user-management/customizing-user-messages-for-your-enterprise)). | {% endif %}
| `failed_login` | Wird ausgelöst, wenn deine Anmeldung fehlschlägt.
| `remove_email` | Wird ausgelöst, wenn du eine E-Mail-Adresse entfernst.
| `rename` | Wird ausgelöst, wenn du dein Konto umbenennst.{% ifversion fpt or ghec %}
| `report_content` | Wird ausgelöst, wenn du [ein Issue oder einen Pull Request bzw. einen Kommentar zu einem Issue, einem Pull Request oder einem Commit meldest](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %}
| `show_private_contributions_count` | Wird ausgelöst, wenn du [private Beiträge in deinem Profil veröffentlichst](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile). {% ifversion not ghae %}
| `two_factor_requested` | Wird ausgelöst, wenn {% data variables.product.product_name %} dich nach [deinem zweistufigen Authentifizierungscode](/articles/accessing-github-using-two-factor-authentication) fragt.{% endif %}

### `user_status`-Kategorieaktionen

| Aktion | BESCHREIBUNG
|--------------------|---------------------
| `update` | Wird ausgelöst, wenn du den Status deines Profils festlegst oder änderst. Weitere Informationen findest du unter [Festlegen eines Status](/articles/personalizing-your-profile/#setting-a-status).
| `destroy` | Wird ausgelöst, wenn du den Status deines Profils löschst.
