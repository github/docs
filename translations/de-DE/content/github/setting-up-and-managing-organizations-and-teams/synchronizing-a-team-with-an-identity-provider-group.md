---
title: Ein Team mit einer Identitätsanbieter-Gruppe synchronisieren
intro: 'Du kannst ein {% data variables.product.product_name %}-Team mit einer Identitätsanbieter-Gruppe (IdP-Gruppe) synchronisieren, um Teammitglieder automatisch hinzuzufügen oder zu entfernen.'
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: 'Organisationsinhaber und Team-Betreuer können ein {% data variables.product.prodname_dotcom %} -Team mit einer IdP-Gruppe synchronisieren.'
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

{% data reusables.gated-features.okta-team-sync %}

### Informationen zur Teamsynchronisierung

{% data reusables.identity-and-permissions.about-team-sync %}

{% if currentVersion == "free-pro-team@latest" %}You can connect up to five IdP groups to a {% data variables.product.product_name %} team.{% elsif currentVersion == "github-ae@latest" %}You can connect a team on {% data variables.product.product_name %} to one IdP group. All users in the group are automatically added to the team and also added to the parent organization as members. When you disconnect a group from a team, users who became members of the organization via team membership are removed from the organization.{% endif %} You can assign an IdP group to multiple {% data variables.product.product_name %} teams.

{% if currentVersion == "free-pro-team@latest" %}Team synchronization does not support IdP groups with more than 5000 members.{% endif %}

Sobald ein {% data variables.product.prodname_dotcom %}-Team mit einer IdP-Gruppe verbunden ist, muss Dein IdP-Administrator Änderungen an der Teammitgliedschaft über den Identitätsanbieter durchführen. You cannot manage team membership on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} or using the API{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}
All team membership changes made through your IdP will appear in the audit log on
{% data variables.product.product_name %} as changes made by the team synchronization bot. Dein IdP wird die Daten der Teammitgliedschaft einmal pro Stunde an {% data variables.product.prodname_dotcom %} senden.
Beim Verbinden eines Teams mit einer IdP-Gruppe werden unter Umständen einige Teammitglieder entfernt. Weitere Informationen findest Du unter „[Anforderungen an Mitglieder synchronisierter Teams](#requirements-for-members-of-synchronized-teams).“
{% endif %}

{% if currentVersion == "github-ae@latest" %}
When group membership changes on your IdP, your IdP sends a SCIM request with the changes to
{% data variables.product.product_name %} according to the schedule determined by your IdP. Any requests that change {% data variables.product.prodname_dotcom %} team or organization membership will register in the audit log as changes made by the account used to configure user provisioning. For more information about this account, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise)." For more information about SCIM request schedules, see "[Check the status of user provisioning](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)" in the Microsoft Docs.
{% endif %}

Übergeordnete Teams können nicht mit IdP-Gruppen synchronisiert werden. Wenn das Team, das Du mit einer IdP-Gruppe verbinden möchtest, ein übergeordnetes Team ist, empfehlen wir, ein neues Team zu erstellen oder die verschachtelten Beziehungen zu entfernen, die aus Deinem Team ein übergeordnetes Team machen. Weitere Informationen findest Du unter „[Über Teams](/articles/about-teams#nested-teams)", „[Teams erstellen](/github/setting-up-and-managing-organizations-and-teams/creating-a-team)" und „[Ein Team in der Organisations-Hierarchie verschieben](/articles/moving-a-team-in-your-organizations-hierarchy)."

Um den Repository-Zugriff für jedes {% data variables.product.prodname_dotcom %}-Team zu verwalten, einschließlich Teams, die mit einer IdP-Gruppe verbunden sind, musst Du Änderungen mit {% data variables.product.product_name %} vornehmen. Weitere Informationen findest Du unter „[Informationen zu Teams](/articles/about-teams)“ und „[Teamzugriff auf ein Organisations-Repository verwalten](/articles/managing-team-access-to-an-organization-repository).“

{% if currentVersion == "free-pro-team@latest" %}You can also manage team synchronization with the API. For more information, see "[Team synchronization](/rest/reference/teams#team-sync)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Anforderungen an Mitglieder synchronisierter Teams

After you connect a team to an IdP group, team synchronization will add each member of the IdP group to the corresponding team on {% data variables.product.product_name %} only if:
- The person is a member of the organization on {% data variables.product.product_name %}.
- The person has already logged in with their user account on {% data variables.product.product_name %} and authenticated to the organization or enterprise account via SAML single sign-on at least once.
- The person's SSO identity is a member of the IdP group.

Existing teams or group members who do not meet these criteria will be automatically removed from the team on {% data variables.product.product_name %} and lose access to repositories. Revoking a user's linked identity will also remove the user from from any teams mapped to IdP groups. For more information, see "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)" and "[Viewing and managing a user's SAML access to your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."

Sobald sich das entfernte Teammitglied jedoch wieder mit SSO bei der Organisations oder beim Enterprise-Konto authentifiziert und der verbundenen IdP-Gruppe hinzugefügt ist, kann es automatisch wieder in das Team aufgenommen werden.

Um zu verhindern, dass Teammitglieder versehentlich aus einem Team entfernt werden, empfehlen wir innerhalb der Organisations oder dem Enterprise-Konto die Erzwingung des SAML SSO, die Erstellung neuer Teams zur Synchronisierung der Mitgliederdaten und die Überprüfung der IdP-Gruppenmitgliedschaften vor der Synchronisierung bestehender Teams. For more information, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)" and "[Enabling SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

Wenn Deine Organisation im Besitz eines Enterprise-Kontos ist, wird die Aktivierung der Teamsynchronisierung für das Enterprise-Konto Deine Einstellungen für die Teamsynchronisierung auf Organisationsebene überschreiben. For more information, see "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

{% endif %}

### Vorrausetzungen

{% if currentVersion == "free-pro-team@latest" %}
Before you can connect a
{% data variables.product.product_name %} team with an identity provider group, an organization or enterprise owner must enable team synchronization for your organization or enterprise account. For more information, see "[Managing team synchronization for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)" and "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

Um zu vermeiden, dass Team-Mitglieder unbeabsichtigt entfernt werden, besuche das administrative Portal Deines IdP und bestätige, dass jedes aktuelle Teammitglied auch in der IdP-Gruppe vorhanden ist, die Du mit diesem Team verbinden willst. Wenn Sie keinen Zugriff auf das Administratorportal Ihres Identity Providers haben, bitten Sie Ihren IdP-Administrator um die Überprüfung.

Du musst Dich mit SAML SSO authentifizieren. Weitere Informationen findest Du unter „[Authentifizierung mit SAML Single Sign-On](/articles/authenticating-with-saml-single-sign-on).“

{% elsif currentVersion == "github-ae@latest" %}
Before you can connect a
{% data variables.product.product_name %} team with an IdP group, you must first configure user provisioning for {% data variables.product.product_location %} using a supported System for Cross-domain Identity Management (SCIM). For more information, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise)."
Once user provisioning for

{% data variables.product.product_name %} is configured using SCIM, you can assign the {% data variables.product.product_name %} application to every IdP group that you want to use on {% data variables.product.product_name %}. For more information, see [Configure automatic user provisioning to GitHub AE](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae) in the Microsoft Docs.
{% endif %}

### Eine IdP-Gruppe mit einem Team verbinden

When you connect an IdP group to a {% data variables.product.product_name %} team, all users in the group are automatically added to the team. {% if currentVersion == "github-ae@latest" %}Any users who were not already members of the parent organization members are also added to the organization.{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. Benutze unter "Identity Provider Groups" (Identitätsanbieter-Gruppen) das Dropdownmenü und wähle bis zu 5 Identitätsanbieter-Gruppen aus. ![Drop-down menu to choose identity provider groups](/assets/images/help/teams/choose-an-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. Under "Identity Provider Group", use the drop-down menu, and select an identity provider group from the list. ![Drop-down menu to choose identity provider group](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. Klicke auf **Save changes** (Änderungen speichern).

### Eine IdP-Gruppe von einem Team trennen

Wenn Du eine IdP-Gruppe von einem {% data variables.product.prodname_dotcom %}-Team trennst, werden Teammitglieder, die dem {% data variables.product.prodname_dotcom %}-Team durch die IdP Gruppe zugewiesen wurden, aus dem Team entfernt. {% if currentVersion == "github-ae@latest" %} Any users who were members of the parent organization only because of that team connection are also removed from the organization.{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. Klicke unter „Identity Provider Groups" (Identitätsanbieter-Gruppen) rechts von der IdP-Gruppe, die Du trennen möchtest, auf {% octicon "x" aria-label="X symbol" %}. ![Unselect a connected IdP group from the GitHub team](/assets/images/help/teams/unselect-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. Under "Identity Provider Group", to the right of the IdP group you want to disconnect, click {% octicon "x" aria-label="X symbol" %}. ![Unselect a connected IdP group from the GitHub team](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. Klicke auf **Save changes** (Änderungen speichern).
