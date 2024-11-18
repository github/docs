---
title: Configuring authentication and provisioning with PingFederate
intro: 'You can use PingFederate as an identity provider (IdP) to centrally manage authentication and user provisioning for {% data variables.location.product_location %}.'
permissions: Site administrators with admin access to the IdP
shortTitle: Set up PingFederate
versions:
  feature: scim-for-ghes-public-beta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

{% data reusables.scim.ghes-beta-note %}

{% data reusables.saml.idp-saml-and-scim-explanation %} For more information, see "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes)."

## Overview

This guide will help you to set up both SAML authentication and SCIM provisioning for {% data variables.product.prodname_ghe_server %} on PingFederate.

Before you start, please note the following:

* The use of PingFederate as an IdP for {% data variables.product.prodname_ghe_server %} is in beta. Please contact your account team to provide feedback.
* This guide is based on PingFederate version 12.1. Instructions may vary for other versions.
* This guide assumes that you are using an LDAP server as the backing data store. JDBC data stores should work, but the instructions may vary slightly.
* This guide provides the minimal steps to configure a working setup. Because your identity directory may be connected to PingFederate differently, you’ll need to pick the correct data attributes for SAML and SCIM based on what is available from your backing data store.

## Prerequisites

The general prerequisites for using SCIM on {% data variables.product.product_name %} apply. See the "Prerequisites" section in "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#prerequisites)."

In addition:

* To configure SCIM, you must have completed **steps 1 to 4** in "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users)."
  * You will need the {% data variables.product.pat_v1 %} created for the setup user to authenticate requests from PingFederate.
* You must have installed the "GitHub EMU connector" on PingFederate. To download and install the connector, see [Install the connector](https://docs.pingidentity.com/r/en-us/pingfederate-github-emu-connector/pingfederate_github_connector_install_the_connector) in the PingIdentity documentation.
  * You may need to configure the firewall in PingFederate to allow outbound connections to the `https://HOSTNAME/api/v3/scim/v2` endpoint on your {% data variables.product.prodname_ghe_server %} instance.
* PingFederate's "provisioner mode" must be set to a value that allows SCIM provisioning. See the "Before you begin" section in PingIdentity's [Configuring outbound provisioning settings](https://docs.pingidentity.com/r/en-us/pingfederate-112/help_protocolsettingstasklet_saasglobalprovisioningsettingsstate) guide.
* During this procedure, you will need to upload an X509 certificate to PingFederate. You may want to create and store the certificate before proceeding. You will also need the challenge password for the certificate. See the "[Example of creating an X509 certificate](#example-of-creating-an-x509-certificate)" section later in this article.

## 1. Configure SAML

In this section you will create a SAML connector in PingFederate, set up an LDAP IdP adapter instance, and manage SAML output from your IdP adapter.

1. [Create a SAML adapter](#create-a-saml-adapter)
1. [Set up an LDAP IdP adapter instance](#set-up-an-ldap-idp-adapter-instance)
1. [Manage SAML output from your IdP adapter](#manage-saml-output-from-your-idp-adapter)

Before starting this section, ensure you have followed steps **1 and 2** in "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users)."

### Create a SAML adapter

1. Open the PingFederate administrative console.
1. Click **Applications** in the header, then click **SP Connections** in the left sidebar.
1. Click **Use a template for this connection**, then select the "GitHub EMU Connector" from the "Connection Template" dropdown.

   >[!NOTE] If you don't see this option, the GitHub EMU Connector has not been installed. If you need assistance, contact your Ping representative.
1. In a new tab, sign in to your {% data variables.product.prodname_ghe_server %} instance as the built-in setup user, then navigate to `https://HOSTNAME/saml/metadata`. Download the page as an XML file.
1. On the PingFederate "SP Connection" page, upload the file from the previous step as the metadata file. Ensure you do this within 5 minutes of downloading the file.
1. Go to the "Connection Type" tab.
1. Select **Browser SSO Profiles**, and deselect **Outbound provisioning** (this will be enabled later).
1. Click **Next**.
1. On the "Connection Options" tab, ensure only **Browser SSO** is selected.
1. Click **Next**.
1. On the "General Info" tab, enter the following details.

   * "Partner’s Entity ID": your {% data variables.product.prodname_ghe_server %} host URL (`https://HOSTNAME.com`)
   * "Connection Name": A descriptive name for your SP connection within PingFederate
   * "Base URL": your {% data variables.product.prodname_ghe_server %} host URL (`https://HOSTNAME.com`)
   * "Transaction Logging": Standard
   * All other fields may be left blank.

1. Click **Next**.
1. Click **Configure Browser SSO**.
1. Click **Configure Assertion Creation**.
1. On the "Authentication Source Mapping" tab, click **Map New Adapter Instance**.
1. On the "Adapter Instance" Tab, click **Manage Adapter Instances**.
1. Click **Create New Instance**.

### Set up an LDAP IdP adapter instance

>[!NOTE] This section applies if you use an LDAP server. If you don't use LDAP, you will need to connect to your adapter using the appropriate settings for your requirements.

1. On the "Create Adapter Instance" page on PingFederate, on the "Type" tab, enter the following details.

   * "Instance Name": A name to identify the instance, such as `pfghadapter`
   * "Instance ID": An ID for the instance, such as `pfghadapter`
   * "Type": HTML Form IDP Adaptor
   * "Parent Instance": None
1. Click **Next**.
1. On the "IDP Adapter" tab, at the bottom of the page, click **Manage Password Credential Validators**.
1. Click **Create New Instance**.
1. On the "Type" tab, enter the following details.

   * "Instance Name": A name to identify the instance, such as `pfghdocscv`
   * "Instance ID": An ID for the instance, such as `pfghdocscv`
   * "Type": LDAP Username Password Credential Validator
   * "Parent Instance": None
1. Click **Next**.
1. On the "Instance Configuration" tab, click **Manage Data Stores**.
1. Click **Add New Data Store**.
1. On the "Data Store Type" tab, enter the following details.

   * "Instance Name": Any unique value, such as `pfghdocsds`
   * "Type": Directory (LDAP)
   * "Mask Values In Log": Deselected

1. Click **Next**.
1. On the "LDAP Configuration" tab, configure your LDAP server details.
1. Click **Test Connection**. You should see "Connectivity test was successful."
1. At the bottom of the page, click **Advanced**.
1. Click the "LDAP Binary Attributes" tab, and add `guidAttribute` and `objectGUID` as attributes.
1. Click **Done**. You should be back on the "LDAP Configuration" tab.
1. Click **Next**, then **Save**.
1. On the "Manage Data Stores" tab, click **Done**.
1. On the "Instance Configuration" tab, enter the following details.

   * "LDAP Datastore": The name of the data store you created above
   * "Search Base": The location in the directory where you want LDAP searches to begin
   * "Search Filter": A filter that ensures the username the user enters when signing in matches a field in the LDAP server (for example: `sAMAccountName=${username}`)
   * "Scope of Search": Subtree
   * "Case-Sensitive Matching": Selected

1. Click **Next**, **Next** again, then **Save**.

### Manage SAML output from your IdP adapter

1. On the "Manage Password Credential Validators" page, click **Done**.
1. On the "IDP Adapter" tab, enter the following details.

   * "Password Credential Validator Instance": The name of the validator instance you created above (for example `pfghdocscv`). Click **Update** to finalize your selection.
   * All other fields can be left as the defaults, or modified to your requirements.
1. Click **Next**, then **Next** again.
1. On the "Adapter Attributes" tab, enter the following details.

   * "Unique User Key Attribute": `username`
   * Next to the `username` attribute, select "Pseudonym".

   >[!NOTE] This step is important. The adapter attribute is used to uniquely identify a user on your instance during SCIM provisioning.
1. Click **Next**, then **Next** again.
1. Review your settings on the summary page, then click **Save**.
1. On the "IdP Adapters" tab, you should see the adapter you just created. Click **Done**.
1. On the "Adapter Instance" tab, in the "Adapter Instance" dropdown, select the adapter you just created.
1. Click **Next**.
1. On the "Mapping Method" tab, select **Use only the Adapter Contract Values in the SAML Assertion** (other selections may work, but have not been confirmed).
1. Click **Next**.
1. On the "Attribute Contract Fulfillment" tab, map the `SAML_SUBJECT` to "Adapter" as the source and `username` as the value.

   >[!NOTE] This step is important. The normalized `SAML_SUBJECT` will need to match the normalized usernames of users provisioned by SCIM.
1. Click **Next**, **Next** again, then **Done**.
1. You should be back on the "Authentication Source Mapping" tab, and the "Adapter Instance Name" section should contain the adapter instance that you just created.
1. Click **Next** and **Done** until you reach the "Credentials" tab.
1. On the "Credentials" tab, click **Configure Credentials**, then click **Manage Certificates**.
1. On the "Certificate Management" page, click **Import**, then upload an X509 certificate (for help, see the "[Example of creating an X509 certificate](#example-of-creating-an-x509-certificate)" section).
1. For the "Password," use the challenge password for the certificate.
1. Click **Next**, then **Save**.
1. On the "Certificate Management" tab, you should see the certificate you just imported. Click **Done**.
1. On the "Digital Signature Settings" tab:

   * Select the certificate you just created for the "Signing Certificate."
   * You can leave the secondary certificate blank and the "Include the certificate in the signature" checkbox deselected.
   * The signing algorithm should be "RSA SHA256."

1. Click **Next**, then **Done**, then **Next**.
1. On the "Summary" tab, enable the toggle for "SSO Application Endpoint."
1. Click **Save**. You should be taken back to the list of SP connections, where you should see your newly created SP connection.

### Collect information for your SAML configuration

You will need some details from PingFederate to configure SAML on {% data variables.product.prodname_dotcom %}.

1. On the "SP Connections" page, in the row for your new connection, click **Select Action**, then **Export Metadata**.
1. On the "Metadata Signing" tab, in the row for your new connection, select the signing certificate you created above. To download the certificate, click **Next**, then click **Export**.
1. On PingFederate, click **System** in the header, then **Server**, then **Protocol Settings**. Check that the `SAML 2.0 ENTITY ID` is defined. Make a note of this, as you will need it for the “Issuer” field in {% data variables.product.prodname_dotcom %}'s SAML settings.
1. Open the metadata file you downloaded, and have it ready for the next steps.

### Configure {% data variables.product.prodname_ghe_server %}

1. Sign in to {% data variables.location.product_location %} as a user with access to the Management Console.
1. Navigate to the "Authentication" section of the Management Console, then enable SAML. See "[AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)."
1. Enter the following values from the metadata file you downloaded in the previous section.

   * For the "Single sign-on URL," use the `location` value of the `<md: SingleSignOnService>` field. This should be a URL ending `/idp/SSO.saml2`.
   * For the "Issuer," use the `entityId` value of the `<md: EntityDescriptor>` field (a URL).

1. For the "Verification certificate," upload the X509 certificate file that you created earlier.
1. Click **Save settings**.

## 2. Configure SCIM

In this section, you'll configure SCIM settings and attribute mapping on PingFederate.

1. [Configure SCIM settings](#configure-scim-settings)
1. [Map LDAP fields to SCIM](#map-ldap-fields-to-scim)
1. [Finish configuration and test](#finish-configuration-and-test)

Before starting this section, ensure you have followed steps **1 to 4** in "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users)."

### Configure SCIM settings

1. Go back to the "SP Connections" page on PingFederate, and select the SP connection you created earlier.
1. Click the "Connection Type" tab.
1. Select **Outbound Provisioning**.
1. Ensure **Browser SSO Profiles** is selected.
1. Click **Next** until you reach the "Outbound Provisioning" tab, then click **Configure Provisioning**.
1. On the "Target" tab, enter the following details.

   * "Base URL": `https://HOSTNAME/api/v3/scim/v2/`
   * "Access Token": The {% data variables.product.pat_v1 %} created for the built-in setup user
1. Click **Next**.
1. On the "Manage Channel" tab, click **Create**, then enter a unique channel name, such as `pfghscim`.
1. Click **Next**.
1. On the "Source" tab, choose the data store that you created earlier.
1. Click **Next**.
1. On the "Source Settings" tab, you can keep all default settings. Other settings are likely to work, but have not been confirmed.
1. Click **Next**.
1. On the "Source Location" tab, configure where in your LDAP server you would like provisioned users to come from. This will vary depending on your setup and needs. After configuring, click **Next**.

### Map LDAP fields to SCIM

On the "Attribute Mapping" tab, you will need to map fields from your LDAP server to SCIM fields. See the following list for {% data variables.product.prodname_dotcom %}'s supported SCIM fields and the values expected in each one.

* **Username**: This will be normalized and used as the {% data variables.product.company_short %} username for the provisioned user. See "[AUTOTITLE](/admin/managing-iam/iam-configuration-reference/username-considerations-for-external-authentication#about-username-normalization)." This must match the normalization of the subject sent with the SAML assertion that you configured with the `SAML_SUBJECT` property in PingFederate.
* **Email**: A field containing the user's email address.
* **Display Name**: A human-readable name for the user.
* **Formatted Name**: The user's full name, including all middle names, titles, and suffixes, formatted for display.
* **First Name**: The first name of the user.
* **Last Name**: The last name of the user.
* **External ID**: This identifier is generated by an IdP provider.
* **Roles**: This field should contain a string that represents the user's intended role on {% data variables.product.prodname_dotcom %}. Valid roles are `enterprise_owner` and `user`.

When you have finished configuring these settings, click **Next**.

### Finish configuration and test

1. On the "Activation & Summary" tab, for the "Channel Status," select **Active**.
1. On the "Manage Channels" tab, click **Done**.
1. On the "Outbound Provisioning" tab, click **Save**. SCIM is now configured and enabled.
1. Wait a few minutes for provisioning to run, then open a new private browser window and navigate to your instance at `https://HOSTNAME/login`.
1. Click **Sign in with SAML**. You should be redirected to the PingFederate login page.
1. You should be able to sign in with the credentials for a user in the LDAP server that has been provisioned to {% data variables.product.prodname_ghe_server %}.

PingFederate provisioning handles users and groups independently. Users must be assigned directly in order to be provisioned. Users who are in an assigned group but not directly assigned will not be provisioned.

When you have finished configuring SCIM, you may want to disable some SAML settings you enabled for the configuration process. See "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#6-disable-optional-settings)."

## Example of creating an X509 certificate

There are multiple ways to create an X509 certificate. Here is an example that may work for your requirements.

1. In a terminal window, check that OpenSSL is installed by running `openssl version`. If it's not installed, install it.
1. Generate the private key using the following command.

   ```shell copy
   openssl req -nodes -sha256 -newkey rsa:2048 -keyout MyPrivateKey.key -out MyCertificateRequest.csr
   ```

   Enter the required information, and **take note** of the challenge password you create.
1. To ensure the key was created, run the following command. A file named `MyPrivateKey.key` should be listed in the command output.

   ```shell copy
   ls | grep MyPrivateKey.key
   ```

1. Generate the certificate using the following command.

   ```shell copy
   openssl x509 -req -days 365 -sha256 -in MyCertificateRequest.csr -signkey MyPrivateKey.key -out pfgh256.crt
   ```

1. To ensure the certificate was created, run the following command. A file named `pfgh256.crt` should be listed in the command output.

   ```shell copy
   ls | grep pfgh256.crt
   ```

1. Export a PKCS #12 file using the following command. This is the file you should **upload to PingFederate**.

   ```shell copy
   openssl pkcs12 -export -in pfgh256.crt -inkey MyPrivateKey.key -out pfgh256.p12
   ```

1. To ensure the file was exported, run the following command. A file named `pfgh256.p12` should be listed in the command output.

   ```shell copy
   ls | grep pfgh256.p12
   ```
