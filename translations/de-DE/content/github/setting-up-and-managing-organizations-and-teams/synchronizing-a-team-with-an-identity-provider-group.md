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

Sobald ein {% data variables.product.prodname_dotcom %}-Team mit einer IdP-Gruppe verbunden ist, muss Dein IdP-Administrator Änderungen an der Teammitgliedschaft über den Identitätsanbieter durchführen. Du kannst die Teammitgliedschaft nicht mehr über {% data variables.product.product_name %} oder das API verwalten.

Alle über den IdP vorgenommenen Änderungen an der Teammitgliedschaft werden im Auditprotokoll von {% data variables.product.product_name %} als Änderungen des Teamsynchronisierungs-Bots angezeigt. Dein IdP wird die Daten der Teammitgliedschaft einmal pro Stunde an {% data variables.product.prodname_dotcom %} senden. Beim Verbinden eines Teams mit einer IdP-Gruppe werden unter Umständen einige Teammitglieder entfernt. Weitere Informationen findest Du unter „[Anforderungen an Mitglieder synchronisierter Teams](#requirements-for-members-of-synchronized-teams).“

Übergeordnete Teams können nicht mit IdP-Gruppen synchronisiert werden. Wenn das Team, das Du mit einer IdP-Gruppe verbinden möchtest, ein übergeordnetes Team ist, empfehlen wir, ein neues Team zu erstellen oder die verschachtelten Beziehungen zu entfernen, die aus Deinem Team ein übergeordnetes Team machen. Weitere Informationen findest Du unter „[Über Teams](/articles/about-teams#nested-teams)", „[Teams erstellen](/github/setting-up-and-managing-organizations-and-teams/creating-a-team)" und „[Ein Team in der Organisations-Hierarchie verschieben](/articles/moving-a-team-in-your-organizations-hierarchy)."

Um den Repository-Zugriff für jedes {% data variables.product.prodname_dotcom %}-Team zu verwalten, einschließlich Teams, die mit einer IdP-Gruppe verbunden sind, musst Du Änderungen mit {% data variables.product.product_name %} vornehmen. Weitere Informationen findest Du unter „[Informationen zu Teams](/articles/about-teams)“ und „[Teamzugriff auf ein Organisations-Repository verwalten](/articles/managing-team-access-to-an-organization-repository).“

Du kannst die Teamsynchronisierung auch mit dem API verwalten. For more information, see "[Team synchronization](/v3/teams/team_sync/)."

### Anforderungen an Mitglieder synchronisierter Teams

Nachdem Du ein Team mit einer IdP-Gruppe verbunden hast, werden Mitgliederdaten für jedes Teammitglied synchronisiert, wenn die Person sich weiterhin mit SAML SSO mit der gleichen SSO-Identität auf {% data variables.product.prodname_dotcom %} authentifiziert, und wenn die Person ein Mitglied der verbundenen IdP-Gruppe bleibt.

Bestehende Teams oder Gruppenmitglieder können auf {% data variables.product.prodname_dotcom %} automatisch aus dem Team entfernt werden. Bestehende Teams oder Gruppenmitglieder, die sich nicht beim Organisations- oder Enterprise-Konto mit SSO authentifizieren, können den Zugriff auf Repositorys verlieren. Alle existierenden Teams oder Gruppenmitglieder, die nicht in der verbundenen IdP-Gruppe sind, können möglicherweise den Zugriff auf Repositorys verlieren.

Sobald sich das entfernte Teammitglied jedoch wieder mit SSO bei der Organisations oder beim Enterprise-Konto authentifiziert und der verbundenen IdP-Gruppe hinzugefügt ist, kann es automatisch wieder in das Team aufgenommen werden.

Um zu verhindern, dass Teammitglieder versehentlich aus einem Team entfernt werden, empfehlen wir innerhalb der Organisations oder dem Enterprise-Konto die Erzwingung des SAML SSO, die Erstellung neuer Teams zur Synchronisierung der Mitgliederdaten und die Überprüfung der IdP-Gruppenmitgliedschaften vor der Synchronisierung bestehender Teams. Weitere Informationen findest Du unter „[SAML Single Sign-On für Deine Organisation erzwingen](/articles/enforcing-saml-single-sign-on-for-your-organization).“

Wenn Deine Organisation im Besitz eines Enterprise-Kontos ist, wird die Aktivierung der Teamsynchronisierung für das Enterprise-Konto Deine Einstellungen für die Teamsynchronisierung auf Organisationsebene überschreiben. Weiter Informationen findest Du unter „[Sicherheitseinstellungen für Dein Enterprise-Konto erzwingen](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-team-synchronization-for-organizations-in-your-enterprise-account)."

### Vorrausetzungen

Bevor Du ein Team mit einer Identitätsanbieter-Gruppe verbinden kannst, muss ein Organisations- oder Enterprise-Inhaber die Teamsynchronisierung für Dein Organisations- oder Enterprise-Konto aktivieren. Weitere Informationen findest Du unter „[Teamsynchronisierung für Deine Organisation verwalten](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)" und „[Sicherheitseinstellungen für Dein Enterprise-Konto durchsetzen](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-team-synchronization-for-organizations-in-your-enterprise-account)."

Um zu vermeiden, dass Team-Mitglieder unbeabsichtigt entfernt werden, besuche das administrative Portal Deines IdP und bestätige, dass jedes aktuelle Teammitglied auch in der IdP-Gruppe vorhanden ist, die Du mit diesem Team verbinden willst. Wenn Du keinen Zugriff auf das Administratorenportal Deines Identitätsanbieters hast, bitte Deinen IdP-Administrator um die Überprüfung.

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
