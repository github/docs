---
title: Configuring SAML single sign-on and SCIM for your enterprise account using Okta
intro: 'You can use Security Assertion Markup Language (SAML) single sign-on (SSO) and System for Cross-domain Identity Management (SCIM) with Okta to automatically manage access to your enterprise account on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---
{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

### Über SAML und SCIM mit Okta

You can control access to your enterprise account in {% data variables.product.product_name %} and other web applications from one central interface by configuring the enterprise account to use SAML SSO and SCIM with Okta, an Identity Provider (IdP).

SAML SSO controls and secures access to enterprise account resources like organizations, repositories, issues, and pull requests. SCIM automatically adds, manages, and removes members' access to organizations owned by your enterprise account when you make changes in Okta. Weiter Informationen findest Du unter „[Sicherheitseinstellungen für Dein Enterprise-Konto erzwingen](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)."

Nachdem Du SCIM aktiviert hast, stehen Dir folgende Bereitstellungsfunktionen für alle Benutzer zur Verfügung, denen Du Deine {% data variables.product.prodname_ghe_cloud %}-Anwendung in Okta zuweist.

| Funktion                     | Beschreibung                                                                                                                                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Push neuer Benutzer          | New users created in Okta will gain access to enterprise account resources, and can optionally be automatically invited to any of the organizations owned by the enterprise account                                                                          |
| Push Benutzer-Deaktivierung  | Deactivating a user in Okta will revoke the user's access to the enterprise account resources and remove the user from all organizations owned by the enterprise account                                                                                     |
| Push Profil-Aktualisierungen | Updates made to the user's profile in Okta will be pushed to the user’s enterprise account metadata                                                                                                                                                          |
| Benutzer reaktivieren        | Reactivating the user in Okta will re-enable the user's access to the enterprise account and will optionally send email invitations for the user to rejoin any of the organizations owned by the enterprise account that the user was previously a member of |

### Vorrausetzungen

{% data reusables.saml.use-classic-ui %}

### Die {% data variables.product.prodname_ghe_cloud %}-Anwendung in Okta hinzufügen

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. Click "{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts".
1. Klicke auf **Add** (Hinzufügen).
1. Optionally, to the right of "Application label", type a descriptive name for the application. ![Application label field](/assets/images/help/saml/okta-application-label.png)
1. To the right of "{% data variables.product.prodname_dotcom %} Enterprises", type the name of your enterprise account. For example, if your enterprise account's URL is `https://github.com/enterprises/octo-corp`, type `octo-corp`. ![GitHub Enterprises field](/assets/images/help/saml/okta-github-enterprises.png)
1. Klicke auf **Done** (Fertig).

### SAML SSO aktivieren und testen

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. To the right of Settings, click **Edit**.
1. Under "Configured SAML Attributes", to the right of "groups", use the drop-down menu and select **Matches regex**.
1. To the right of the drop-down menu, type `.*.*`.
1. Klicke auf **Save** (Speichern).
{% data reusables.saml.okta-view-setup-instructions %}
1. Enable SAML for your enterprise account using the information in the setup instructions. Weitere Informationen findest Du unter „[SAML Single Sign-On für Organisationen in Deinem Enterprise-Konto aktivieren](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

### Creating groups in Okta

1. In Okta, create a group to match each organization owned by your enterprise account. The name of each group must match the account name of the organization (not the organization's display name). For example, if the URL of the organization is `https://github.com/octo-org`, name the group `octo-org`.
1. Assign the application you created for your enterprise account to each group. {% data variables.product.prodname_dotcom %} will receive all `groups` data for each user.
1. Add users to groups based on the organizations you'd like users to belong to.

### Configuring user provisioning with SCIM in Okta

{% data reusables.scim.enterprise-account-scim %}

To configure user provisioning with SCIM in Okta, you must authorize an OAuth application to create a token that Okta can use to authenticate to {% data variables.product.product_name %} on your behalf. The okta-oauth application is created by Okta in partnership with {% data variables.product.prodname_dotcom %}.

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. Click **Authenticate with Github Enterprise Cloud - Enterprise Accounts**. ![Button to authenticate with {% data variables.product.prodname_dotcom %}](/assets/images/help/business-accounts/authenticate-with-github-button.png)
1. To the right of your enterprise account's name, click **Grant**.
1. Click **Authorize okta-oauth**.
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}
1. Under the name of the application, click **Push Groups**. ![Push Groups tab](/assets/images/help/business-accounts/okta-push-groups-tab.png)
1. Use the **Push Groups** drop-down menu, and select **Find groups by name**. ![Push Groups drop-down menu](/assets/images/help/business-accounts/okta-push-groups-drop-down.png)
1. Add a push group for each organization in your enterprise account that you want to enable user provisioning for.
   - Under "PUSH GROUPS BY NAME", search for a group that corresponds to an organization owned by your enterprise account, then click the group in the search results.
   - To the right of the group name, in the "Match results & push action" drop-down menu, verify that **Create Group** is selected. ![Match result drop-down with Create Group selected](/assets/images/help/saml/create-group-okta.png)
   - Klicke auf **Save** (Speichern).
   - Repeat for each organization.
1. Under the name of your application, click **Assignments**. ![Assignments tab](/assets/images/help/business-accounts/okta-assignments-tab.png)
1. If you see **Provision users**, users who were a member of an Okta group before you added a push group for that group have not been provisioned. To send SCIM data to {% data variables.product.product_name %} for these users, click **Provision users**.

### Enabling SAML user provisioning

After you enable SCIM provisioning and deprovisioning, you can optionally enable SAML user provisioning and deprovisioning.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SAML User Provisioning", select **Enable SAML user provisioning**. ![Checkbox to enable user provisioning with SAML](/assets/images/help/business-accounts/user-provisioning.png)
1. Klicke auf **Save** (Speichern).
1. Optionally, enable SAML user deprovisioning.
   - Select **Enable SAML user deprovisioning**, then click **Save**. ![Checkbox to enable user deprovisioning with SAML](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - Read the warning, then click **Enable SAML deprovisioning**. ![Enable SAML deprovisioning button](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
