---
title: Ein Team mit einer Identitätsanbieter-Gruppe synchronisieren
intro: 'Du kannst ein {% data variables.product.prodname_dotcom %}-Team mit einer Identitätsanbieter-Gruppe (IdP-Gruppe) synchronisieren, um Teammitglieder automatisch hinzuzufügen oder zu entfernen.'
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: 'Organisationsinhaber und Team-Betreuer können ein {% data variables.product.prodname_dotcom %} -Team mit einer IdP-Gruppe synchronisieren.'
versions:
  free-pro-team: '*'
---

{% data reusables.gated-features.okta-team-sync %}

### Informationen zur Teamsynchronisierung

{% data reusables.identity-and-permissions.about-team-sync %}

Du kannst bis zu fünf IdP-Gruppen mit einem {% data variables.product.prodname_dotcom %} -Team verbinden. Eine IdP-Gruppe kann ohne Einschränkung mehreren {% data variables.product.prodname_dotcom %}-Teams zugewiesen werden.

Team synchronization does not support IdP groups with more than 5000 members.

Sobald ein {% data variables.product.prodname_dotcom %}-Team mit einer IdP-Gruppe verbunden ist, muss Dein IdP-Administrator Änderungen an der Teammitgliedschaft über den Identitätsanbieter durchführen. Du kannst die Teammitgliedschaft nicht mehr über {% data variables.product.product_name %} oder das API verwalten.

Alle über den IdP vorgenommenen Änderungen an der Teammitgliedschaft werden im Auditprotokoll von {% data variables.product.product_name %} als Änderungen des Teamsynchronisierungs-Bots angezeigt. Dein IdP wird die Daten der Teammitgliedschaft einmal pro Stunde an {% data variables.product.prodname_dotcom %} senden. Beim Verbinden eines Teams mit einer IdP-Gruppe werden unter Umständen einige Teammitglieder entfernt. Weitere Informationen findest Du unter „[Anforderungen an Mitglieder synchronisierter Teams](#requirements-for-members-of-synchronized-teams).“

Übergeordnete Teams können nicht mit IdP-Gruppen synchronisiert werden. Wenn das Team, das Du mit einer IdP-Gruppe verbinden möchtest, ein übergeordnetes Team ist, empfehlen wir, ein neues Team zu erstellen oder die verschachtelten Beziehungen zu entfernen, die aus Deinem Team ein übergeordnetes Team machen. Weitere Informationen findest Du unter „[Über Teams](/articles/about-teams#nested-teams)", „[Teams erstellen](/github/setting-up-and-managing-organizations-and-teams/creating-a-team)" und „[Ein Team in der Organisations-Hierarchie verschieben](/articles/moving-a-team-in-your-organizations-hierarchy)."

Um den Repository-Zugriff für jedes {% data variables.product.prodname_dotcom %}-Team zu verwalten, einschließlich Teams, die mit einer IdP-Gruppe verbunden sind, musst Du Änderungen mit {% data variables.product.product_name %} vornehmen. Weitere Informationen findest Du unter „[Informationen zu Teams](/articles/about-teams)“ und „[Teamzugriff auf ein Organisations-Repository verwalten](/articles/managing-team-access-to-an-organization-repository).“

Du kannst die Teamsynchronisierung auch mit dem API verwalten. For more information, see "[Team synchronization](/rest/reference/teams#team-sync)."

### Anforderungen an Mitglieder synchronisierter Teams

After you connect a team to an IdP group, team synchronization will add each member of the IdP group to the corresponding team on {% data variables.product.prodname_dotcom %} only if:
- The person is a member of the organization on {% data variables.product.prodname_dotcom %}.
- The person has already logged in with their user account on {% data variables.product.prodname_dotcom %} and authenticated to the organization or enterprise account via SAML single sign-on at least once.
- The person's SSO identity is a member of the IdP group.

Existing teams or group members who do not meet these criteria will be automatically removed from the team on {% data variables.product.prodname_dotcom %} and lose access to repositories. Revoking a user's linked identity will also remove the user from from any teams mapped to IdP groups. For more information, see "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)" and "[Viewing and managing a user's SAML access to your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."

Sobald sich das entfernte Teammitglied jedoch wieder mit SSO bei der Organisations oder beim Enterprise-Konto authentifiziert und der verbundenen IdP-Gruppe hinzugefügt ist, kann es automatisch wieder in das Team aufgenommen werden.

Um zu verhindern, dass Teammitglieder versehentlich aus einem Team entfernt werden, empfehlen wir innerhalb der Organisations oder dem Enterprise-Konto die Erzwingung des SAML SSO, die Erstellung neuer Teams zur Synchronisierung der Mitgliederdaten und die Überprüfung der IdP-Gruppenmitgliedschaften vor der Synchronisierung bestehender Teams. For more information, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)" and "[Enabling SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

Wenn Deine Organisation im Besitz eines Enterprise-Kontos ist, wird die Aktivierung der Teamsynchronisierung für das Enterprise-Konto Deine Einstellungen für die Teamsynchronisierung auf Organisationsebene überschreiben. For more information, see "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

### Vorrausetzungen

Bevor Du ein Team mit einer Identitätsanbieter-Gruppe verbinden kannst, muss ein Organisations- oder Enterprise-Inhaber die Teamsynchronisierung für Dein Organisations- oder Enterprise-Konto aktivieren. For more information, see "[Managing team synchronization for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)" and "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

Um zu vermeiden, dass Team-Mitglieder unbeabsichtigt entfernt werden, besuche das administrative Portal Deines IdP und bestätige, dass jedes aktuelle Teammitglied auch in der IdP-Gruppe vorhanden ist, die Du mit diesem Team verbinden willst. Wenn Sie keinen Zugriff auf das Administratorportal Ihres Identity Providers haben, bitten Sie Ihren IdP-Administrator um die Überprüfung.

Du musst Dich mit SAML SSO authentifizieren. Weitere Informationen findest Du unter „[Authentifizierung mit SAML Single Sign-On](/articles/authenticating-with-saml-single-sign-on).“

### Eine IdP-Gruppe mit einem Team verbinden

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Benutze unter "Identity Provider Groups" (Identitätsanbieter-Gruppen) das Dropdownmenü und wähle bis zu 5 Identitätsanbieter-Gruppen aus. ![Dropdownmenü zur Auswahl einer Identitätsanbieter-Gruppe](/assets/images/help/teams/choose-an-idp-group.png)
6. Klicke auf **Save changes** (Änderungen speichern).

### Eine IdP-Gruppe von einem Team trennen

Wenn Du eine IdP-Gruppe von einem {% data variables.product.prodname_dotcom %}-Team trennst, werden Teammitglieder, die dem {% data variables.product.prodname_dotcom %}-Team durch die IdP Gruppe zugewiesen wurden, aus dem Team entfernt.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
6. Klicke unter „Identity Provider Groups" (Identitätsanbieter-Gruppen) rechts von der IdP-Gruppe, die Du trennen möchtest, auf {% octicon "x" aria-label="X symbol" %}. ![Trennen einer verbundenen IdP-Gruppe von einem GitHub-Team](/assets/images/help/teams/unselect-idp-group.png)
7. Klicke auf **Save changes** (Änderungen speichern).
