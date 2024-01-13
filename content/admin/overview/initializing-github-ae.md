---
title: Initializing GitHub AE
intro: 'To get your enterprise ready to use, you can complete the initial configuration of {% data variables.product.product_name %}.'
versions:
  ghae: '*'
type: how_to
topics:
  - Enterprise
redirect_from:
  - /admin/configuration/initializing-github-ae
  - /enterprise-server@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae
  - /admin/configuration/configuring-your-enterprise/initializing-github-ae
---
## About initialization

Before you can initialize your enterprise, you must purchase {% data variables.product.product_name %}. For more information, contact {% data variables.contact.contact_enterprise_sales %}.

{% data reusables.github-ae.initialize-enterprise %} Make sure the information you provide matches the intended enterprise owner's information in the IdP. For more information about enterprise owners, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)."

{% note %}

**Notes**:

- If the initial password for {% data variables.product.prodname_ghe_managed %} expires before you finish initialization, you can request a password reset at any time from your invitation email.

- Store the initial username and password for {% data variables.product.prodname_ghe_managed %} securely in a password manager. {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

During initialization, the enterprise owner will name your enterprise, configure SAML SSO, create policies for all organizations in your enterprise, and configure a support contact for your users.

## Prerequisites

To begin initialization, you will receive an invitation email from {% data variables.product.company_short %}. Before you configure {% data variables.product.prodname_ghe_managed %}, review the following prerequisites.

To initialize {% data variables.location.product_location %}, you must have a SAML identity provider (IdP). {% data reusables.saml.ae-uses-saml-sso %} To connect your IdP to your enterprise during initialization, you should have your IdP's Entity ID (SSO) URL, Issuer ID URL, and public signing certificate (Base64-encoded). For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)."

{% note %}

**Note**: {% data reusables.saml.create-a-machine-user %}

{% endnote %}

## Signing in and naming your enterprise

1. Follow the instructions in your welcome email to reach your enterprise.
1. Type your credentials under "Change password", then click **Change password**.
1. Under "What would you like your enterprise account to be named?", type the enterprise's name, then click **Save and continue**.

## Connecting your IdP to your enterprise

To configure authentication for {% data variables.product.product_name %}, you must provide {% data variables.product.product_name %} with the details for your SAML IdP. {% data variables.product.company_short %} recommends using Azure AD as your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam)."

1. To the right of "Set up your identity provider", click **Configure**.
1. Under "Sign on URL", copy and paste the URL for your SAML IdP.
1. Under "Issuer", copy and paste the issuer URL for your SAML IdP.
1. Under "Public certificate", copy and paste the public certificate for your SAML IdP.
1. Click **Test SAML configuration** to ensure that the information you've entered is correct.
1. Click **Save**.
1. {% data reusables.saml.assert-the-administrator-attribute %}

## Setting your enterprise policies

Configuring policies will set limitations for repository and organization management for your enterprise. These can be reconfigured after the initialization process.

1. To the right of "Set your enterprise policies", click **Configure**.
1. Under "Default Repository Permissions", select the drop-down menu and click a default permissions level for repositories in your enterprise. If a person has multiple avenues of access to an organization, either individually, through a team, or as an organization member, the highest permission level overrides any lower permission levels. Optionally, to allow organizations within your enterprise to set their default repository permissions, click **No policy**
1. Under "Repository creation", choose whether you want to allow members to create repositories. Optionally, to allow organizations within your enterprise to set permissions, click **No policy**.
1. Under "Repository forking", choose whether to allow forking of private and internal repositories. Optionally, to allow organizations within your enterprise to set permissions, click **No policy**
1. Under "Repository invitations", choose whether members or organization owners can invite collaborators to repositories. Optionally, to allow organizations within your enterprise to set permissions, click **No policy**
1. Under "Default repository visibility", select the drop-down menu and click the default visibility setting for new repositories.
1. Under "Users can create organizations", select the drop-down menu to enable or disable organization creation access for members of the enterprise.
1. Under "Force pushes", select the drop-down menu and choose whether to allow or block force pushes.
1. Under "Git SSH access", select the drop-down menu and choose whether to enable Git SSH access for all repositories in the enterprise.
1. Optionally, to reset all selections, click "Reset to default policies".
1. Click **Save**.

## Setting your internal support contact

You can configure the method your users will use to contact your internal support team. This can be reconfigured after the initialization process.

1. To the right of "Internal support contact", click **Configure**.
1. Under "Internal support contact", select the method for users of your enterprise to contact support, through a URL or an e-mail address. Then, type the support contact information.
1. Click **Save**.

## Setting your email settings

Once this is initialized, you can reconfigure any settings after the initialization process. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)."

1. To the right of "Configure email settings", click **Configure**.
1. Select **Enable email**. This will enable both outbound and inbound email, however, for inbound email to work you will also need to configure your DNS settings. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-dns-and-firewall-settings-to-allow-incoming-emails)."
1. Complete your email server settings:
    - In the **Server address** field, type the address of your SMTP server.
    - In the **Port** field, type the port that your SMTP server uses to send email.
    - In the **Domain** field, type the domain name that your SMTP server will send with a HELO response, if any.
    - In the **Authentication** dropdown, choose the type of encryption used by your SMTP server.
    - In the **No-reply email address** field, type the email address to use in the From and To fields for all notification emails.

1. If you want to discard all incoming emails that are addressed to the no-reply email address, select **Discard email addressed to the no-reply email address**.
1. Click **Test email settings**.
1. Under "Send test email to," type the email address where you want to send a test email, then click **Send test email**.
1. Click **Save**.
