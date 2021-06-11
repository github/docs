---
title: Initializing GitHub AE
intro: 'To get your enterprise ready to use, you can complete the initial configuration of {% data variables.product.product_name %}.'
versions:
  github-ae: '*'
type: how_to
topics:
  - Enterprise
redirect_from:
  - /admin/configuration/initializing-github-ae
---

### About initialization

Before you can initialize your enterprise, you must purchase {% data variables.product.product_name %}. For more information, contact {% data variables.contact.contact_enterprise_sales %}.

After you purchase {% data variables.product.product_name %}, we'll ask you to provide an email address and username for the person you want to initialize the enterprise. Your dedicated technical account manager in {% data variables.contact.enterprise_support %} will create an account for the enterprise owner and send the enterprise owner an email to log into {% data variables.product.product_name %} and complete the initialization. Make sure the information you provide matches the intended enterprise owner's information in the IdP. For more information about enterprise owners, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-owner)."

{% note %}

**Hinweise**:

- If the initial password for {% data variables.product.prodname_ghe_managed %} expires before you finish initialization, you can request a password reset at any time from your invitation email.

- Store the initial username and password for {% data variables.product.prodname_ghe_managed %} securely in a password manager. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

During initialization, the enterprise owner will name your enterprise, configure SAML SSO, create policies for all organizations in your enterprise, and configure a support contact for your users.

### Vorrausetzungen

To begin initialization, you will receive an invitation email from {% data variables.product.company_short %}. Before you configure {% data variables.product.prodname_ghe_managed %}, review the following prerequisites.


1. To initialize {% data variables.product.product_location %}, you must have a SAML identity provider (IdP). {% data reusables.saml.ae-uses-saml-sso %} To connect your IdP to your enterprise during initialization, you should have your IdP's Entity ID (SSO) URL, Issuer ID URL, and public signing certificate (Base64-encoded). For more information, see "[About identity and access management for your enterprise](/admin/authentication/about-identity-and-access-management-for-your-enterprise)."

    {% note %}

    **Hinweis**: {% data reusables.saml.create-a-machine-user %}

    {% endnote %}

2. {% data reusables.saml.assert-the-administrator-attribute %}

### Signing in and naming your enterprise

1. Follow the instructions in your welcome email to reach your enterprise.
2. Type your credentials under "Change password", then click **Change password**.
3. Under "What would you like your enterprise account to be named?", type the enterprise's name, then click **Save and continue**. !["Save and continue" button for naming an enterprise](/assets/images/enterprise/configuration/ae-enterprise-configuration.png)

### Connecting your IdP to your enterprise

To configure authentication for {% data variables.product.product_name %}, you must provide {% data variables.product.product_name %} with the details for your SAML IdP. {% data variables.product.company_short %} recommends using Azure AD as your IdP. For more information, see "[Configuring authentication and provisioning with your identity provider](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)."

1. To the right of "Set up your identity provider", click **Configure**. !["Configure" button for IdP configuration](/assets/images/enterprise/configuration/ae-idp-configure.png)
1. Under "Sign on URL", copy and paste the URL for your SAML IdP. ![Text field for SAML IdP's sign-on URL](/assets/images/enterprise/configuration/ae-idp-sign-on-url.png)
1. Under "Issuer", copy and paste the issuer URL for your SAML IdP. ![Text field for SAML IdP's issuer URL](/assets/images/enterprise/configuration/ae-idp-issuer-url.png)
1. Under "Public certificate", copy and paste the public certificate for your SAML IdP. ![Text field for SAML IdP's public certificate](/assets/images/enterprise/configuration/ae-idp-public-certificate.png)
1. Click **Test SAML configuration** to ensure that the information you've entered is correct. !["Test SAML configuration" button](/assets/images/enterprise/configuration/ae-test-saml-configuration.png)
1. Klicke auf **Save** (Speichern). !["Save" button for IdP configuration](/assets/images/enterprise/configuration/ae-save.png)

### Setting your enterprise policies

Configuring policies will set limitations for repository and organization management for your enterprise. These can be reconfigured after the initialization process.

1. To the right of "Set your enterprise policies", click **Configure**. !["Configure" button for policies configuration](/assets/images/enterprise/configuration/ae-policies-configure.png)
2. Under "Default Repository Permissions", use the drop-down menu and click a default permissions level for repositories in your enterprise. If a person has multiple avenues of access to an organization, either individually, through a team, or as an organization member, the highest permission level overrides any lower permission levels. Optionally, to allow organizations within your enterprise to set their default repository permissions, click **No policy** ![Drop-down menu for default repository permissions options](/assets/images/enterprise/configuration/ae-repository-permissions-menu.png)
3. Under "Repository creation", choose whether you want to allow members to create repositories. Optionally, to allow organizations within your enterprise to set permissions, click **No policy**. !["Members can create repositories" button for enterprise policies configuration](/assets/images/enterprise/configuration/ae-repository-creation-permissions.png)
4. Under "Repository forking", choose whether to allow forking of private and internal repositories. Optionally, to allow organizations within your enterprise to set permissions, click **No policy** ![Drop-down menu for repository forking permissions options](/assets/images/enterprise/configuration/ae-repository-forking-menu.png)
5. Under "Repository invitations", choose whether members or organization owners can invite collaborators to repositories. Optionally, to allow organizations within your enterprise to set permissions, click **No policy** ![Drop-down menu for repository invitation permissions options](/assets/images/enterprise/configuration/ae-repository-invitations-menu.png)
6. Under "Default repository visibility", use the drop-down menu and click the default visibility setting for new repositories. ![Drop-down menu for default repository visibility options](/assets/images/enterprise/configuration/ae-repository-visibility-menu.png)
7. Under "Users can create organizations", use the drop-down menu to enable or disable organization creation access for members of the enterprise. ![Drop-down menu for organization creation permissions options](/assets/images/enterprise/configuration/ae-organization-creation-permissions-menu.png)
8. Under "Force pushes", use the drop-down menu and choose whether to allow or block force pushes. ![Drop-down menu for force pushes configuration options](/assets/images/enterprise/configuration/ae-force-pushes-configuration-menu.png)
9. Under "Git SSH access", use the drop-down menu and choose whether to enable Git SSH access for all repositories in the enterprise. ![Drop-down menu for Git SSH access options](/assets/images/enterprise/configuration/ae-git-ssh-access-menu.png)
10. Click **Save** !["Save" button for enterprise policies configuration](/assets/images/enterprise/configuration/ae-save.png)
11. Optionally, to reset all selections, click "Reset to default policies". ![Link to reset all default policies](/assets/images/enterprise/configuration/ae-reset-default-options.png)

### Setting your internal support contact

You can configure the method your users will use to contact your internal support team. This can be reconfigured after the initialization process.

1. To the right of "Internal support contact", click **Configure**. !["Configure" button for internal support contact configuration](/assets/images/enterprise/configuration/ae-support-configure.png)
2. Under "Internal support contact", select the method for users of your enterprise to contact support, through a URL or an e-mail address. Then, type the support contact information. ![Text field for internal support contact URL](/assets/images/enterprise/configuration/ae-support-link-url.png)
3. Klicke auf **Save** (Speichern). !["Save" button for enterprise support contact configuration](/assets/images/enterprise/configuration/ae-save.png)

### Setting your email settings

Once this is initialized, you can reconfigure any settings after the initialization process. For more information, see "[Configuring email for notifications](/admin/configuration/configuring-email-for-notifications)."

1. To the right of "Configure email settings", click **Configure**. !["Configure" button for email settings configuration](/assets/images/enterprise/configuration/ae-email-configure.png)
2. Wählen Sie **Enable email** (E-Mail aktivieren) aus. This will enable both outbound and inbound email, however, for inbound email to work you will also need to configure your DNS settings. For more information, see "[Configuring DNS and firewall settings to allow incoming emails](/admin/configuration/configuring-email-for-notifications#configuring-dns-and-firewall-settings-to-allow-incoming-emails)." !["Enable" checkbox for email settings configuration](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Complete your email server settings:
    - Geben Sie im Feld **Server address** (Serveradresse) die Adresse Ihres SMTP-Servers ein.
    - Geben Sie im Feld **Port** den Port ein, der von Ihrem SMTP-Server zum Senden von E-Mails verwendet wird.
    - Geben Sie im Feld **Domain** den Domain-Namen ein, der ggf. von Ihrem SMTP-Server mit einer HELO-Antwort gesendet wird.
    - Wählen Sie im Dropdownmenü **Authentication** (Authentifizierung) den von Ihrem SMTP-Server verwendeten Verschlüsselungstyp aus.
    - Geben Sie im Feld **No-reply email address** („no-reply“-E-Mail-Adresse) die E-Mail-Adresse ein, die für alle Benachrichtigungs-E-Mails in den Feldern „From“ (Von) und „To“ (An) verwendet werden soll.

4. Wenn Sie alle eingehenden E-Mails verwerfen möchten, die an die „no-reply“-E-Mail-Adresse adressiert sind, sollten Sie **Discard email addressed to the no-reply email address** (An die „no-reply“-E-Mail-Adresse adressierte E-Mails verwerfen) aktivieren. !["Discard" checkbox for email settings configuration](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Click **Test email settings**. !["Test email settings" button for email settings configuration](/assets/images/enterprise/configuration/ae-test-email.png)
6. Under "Send test email to," type the email address where you want to send a test email, then click **Send test email**. !["Send test email" button for email settings configuration](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Klicke auf **Save** (Speichern). !["Save" button for enterprise support contact configuration](/assets/images/enterprise/configuration/ae-save.png)
