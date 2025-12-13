---
title: Register a learning management system with GitHub Classroom
intro: 'You can configure an LTI-compliant learning management system (LMS) with {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}.'
shortTitle: Register an LMS
---
## About registering an LMS to your classroom

Before you can connect your LMS to a classroom, an administrator for your LMS instance needs to configure your LMS to allow {% data variables.product.prodname_classroom %} and then register your LMS with {% data variables.product.prodname_classroom %} to initiate the OAuth handshake. An admin only needs to do this registration process once, then any teacher who uses their LMS instance may sync their LMS courses to classrooms. For more information on connecting an LMS course to a classroom, see [AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom).

> [!NOTE]
> {% data reusables.classroom.google-classroom-note %}

## Supported LMSes

{% data reusables.classroom.supported-lmses %}

## Configuring Blackboard for {% data variables.product.prodname_classroom %}

You can register your Blackboard installation with {% data variables.product.prodname_classroom %} to enable teachers to import roster data into their classrooms. For more information about Blackboard, see the [Blackboard website](https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/blackboard).

### Step 1. Register {% data variables.product.prodname_classroom %} Developer Keys in the Anthology Developer Portal

1. Sign into the [Anthology Developer Portal](https://developer.anthology.com/).
1. Click on the **plus sign** in the [My Application](https://developer.anthology.com/portal/applications) page.
1. Click **Manual Registration** in the dropdown menu.
1. On the "Register a new application" configuration screen, set the fields to the following values.

    | Field in the new app configuration | Value or setting |
    | :- | :- |
    | **Application Name** | `GitHub Classroom` <br/><br/>You can use any name, it will be showed only to administrators.  |
    | **Description** | `Sync Blackboard course roster to GitHub Classroom` (or something similar) |
    | **Domain(s)** | `classroom.github.com` |
    | **Group** | Leave the default value or change it according to your institution needs. |
    | **My Integration supports LTI 1.3** | Enable the flag.|
    | **Login Initiation URL** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **Tool Redirect URL(s)** | `https://classroom.github.com/lti1p3/openid-connect/redirect,https://classroom.github.com/context-link` |
    | **Tool JWKS URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **Signing Algorithm** dropdown | `RS256` |
    | **Custom parameters** | Leave empty. |
1. Click **Register Application**.
1. The Developer Portal will show a screen that contains important information you'll need to input in the next steps of registering your instance in your Blackboard instance and in {% data variables.product.prodname_classroom %} below. Please note them in a safe place and click **Done**.
1. In the table on the "My Applications" page, in the row for the GitHub Classroom application, click on the three dots and then **Manage Placements** in the dropdown menu.
1. Click on the **plus sign**.
1. On the "Register a new placement" configuration screen, set the fields to the following values.

    | Field in the new placement configuration | Value or setting |
    | :- | :- |
    | **Placement Name** | `GitHub Classroom` <br/><br/>You can use any name, but if you set this to something else, be sure this is communicated to teachers.  |
    | **Description** | `Sync Blackboard course roster to GitHub Classroom` (or something similar) |
    | **Type** dropdown | Course Tool |
    | **Allow students access** | Don't enable the flag. |
    | **Launch in new window** | Don't enable the flag, unless you want to offer that user experience. |
    | **Target link URI** | `https://classroom.github.com/context-link` |
    | **Icon URL** | Leave it empty or provide a static URL for the icon. If needed, later in Blackboard can be manually uploaded. |
    | **Custom parameters** | Leave empty. |
1. Click **Register Placement**.

### Step 2. Register {% data variables.product.prodname_classroom %} Developer Keys in Blackboard

1. Sign into your **Blackboard** instance.
1. In the left sidebar on the home page, click **Admin**, then click **LTI Tool Providers**.
1. On the "LTI Tool Providers" page, click **Register LTI 1.3/Advantage Tool**.
1. Insert the **Client ID** / **Application ID** obtained from the Developer Portal and click **Submit**.
1. Blackboard will show all application data. In this page:
    1. Verify that **Tool Status** is `Approved`.
    1. Verify that **User Fields to be Sent** flags are enabled for "Role in Course", "Name", "Email Address".
    1. Verify that **Allow mark service access** radio button is set to "No". To enable this option, navigate to the LTI Tool Providers in the Admin Panel:
       * Select Manage Global Properties
       * Under Creation of Tool Provider Links, select radio button “Allow links to any tool provider, but require approval for each new provider”
    1. Verify that **Allow Membership Service Access** radio button is set to "Yes".
1. Click **Submit**.

### Step 3. Register your developer keys with {% data variables.product.prodname_classroom %}

1. Go to https://classroom.github.com/register-lms.
1. Fill in the following information:

   * Under "LMS Type", choose "Other" from the dropdown menu.
   * "Issuer Identifier": `https://blackboard.com`
   * "Domain": The base URL to your Blackboard instance
   * "Client ID": The "Client ID" / "Application ID" obtained from the registration of the app in the Anthology Developer Portal.
   * "OIDC Initiation URL": The "OIDC auth request endpoint" obtained from the registration of the app in the Anthology Developer Portal.
   * "OAuth 2.0 Token Retrieval URL": The "Auth token endpoint" obtained from the registration of the app in the Anthology Developer Portal.
   * "Key Set URL": The "Public keyset URL" obtained from the registration of the app in the Anthology Developer Portal.

1. Click **Register**.
1. You should see the "Successfully registered LMS" banner at the top of the screen, which means that you've registered your LMS instance and teachers can now link their classrooms.

## Configuring Canvas for {% data variables.product.prodname_classroom %}

You can register your Canvas installation with {% data variables.product.prodname_classroom %} to enable teachers to import roster data into their classrooms. For more information about Canvas, see the [Canvas website](https://www.instructure.com/canvas/).

### 1. Register {% data variables.product.prodname_classroom %} Developer Keys in Canvas

1. Sign into [Canvas](https://www.instructure.com/canvas/#login).
1. In the left sidebar on the home page, click **Admin**, then click **Site Admin**.
1. Click **Developer Keys**.
1. Under "Developer Keys", click the **+ Developer Key** button, then select **+ LTI Key** from the dropdown menu.
1. On the "Key Settings" configuration screen, set the fields to the following values.

    | Field in Canvas app configuration | Value or setting |
    | :- | :- |
    | **Method** | `Manual Entry` |
    | **Title** | `GitHub Classroom` <br/><br/>**Note:** You can use any name, but if you set this to something else, be sure this is communicated to teachers.  |
    | **Description** | `Sync Canvas course rosters to GitHub Classroom` (or something similar) |
    | **Target Link URI** | `https://classroom.github.com/context-link` |
    | **OpenID Connect Initiation URL** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **JWK Method** | `Public JWK URL` |
    | **Public JWK URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **Redirect URIs** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **LTI Advantage Services** dropdown | Select the "Can retrieve user data associated with the context the tool is installed in" checkbox. |
    | **Additional Settings** dropdown | Under "Privacy Level", select `Public` |
    | **Placements** | Select `Course Settings Sub Navigation`. <br/><br/>**Note:** If you set the placement to something else, this must be communicated to teachers. Our documentation will expect that this is the placement of the button. |
1. Click **Save**.
1. In the table on the "Developer Keys" page, in the row for the GitHub Classroom developer key, take note of the value of the client ID in the "Details" column -- this must be communicated to teachers for them to finish setup.
1. In the table on the "Developer Keys" page, under the "State" column, toggle the state of the key to "On".

### 2. Register your developer keys with {% data variables.product.prodname_classroom %}

1. Go to https://classroom.github.com/register-lms.
1. Fill in the following information:

   * Under "LMS Type", choose "Canvas" from the dropdown menu.
   * "Issuer Identifier": `https://canvas.instructure.com`
   * "Domain": The base URL to your Canvas instance
   * "Client ID": The "Client ID" under "Details" from the developer key you created
   * "OIDC Authorization end-point": The base URL to your Canvas instance with `/api/lti/authorize_redirect` appended at the end.
   * "OAuth 2.0 Token Retrieval URL": The base URL to your Canvas instance with `/login/oauth2/token` appended at the end.
   * "Key Set URL": The base URL to your Canvas instance with `/api/lti/security/jwks` appended at the end.

1. Click **Register**.
1. You should see the "Successfully registered LMS" banner at the top of the screen, which means that you've registered your LMS instance and teachers can now link their classrooms.

## Configuring Moodle for {% data variables.product.prodname_classroom %}

You can register your Moodle installation with {% data variables.product.prodname_classroom %} to enable teachers to import roster data into their classrooms. For more information about Moodle, see the [Moodle website](https://moodle.org).

You must be using Moodle version 3.0 or greater.

### 1. Enable publishing as an LTI tool in Moodle

1. Sign into [Moodle](https://moodle.org/login/).
1. Click the "Site administration" tab in the top level menu.
1. On the "Site administration" page, click the "Plugins" tab, then scroll down to the "Authentication" section and click **Manage authentication**.
1. Next to the "LTI" field, click the toggle button to enable LTI.
1. Click the "Plugins" tab again, then scroll down to "Enrolments" and click **Manage enrol plugins**.
1. Next to the "Publish as LTI tool" field, click the toggle button to enable publishing as an LTI tool.
1. Return to the "Site administration" page by clicking on the "Site administration" tab in the top level menu, then scroll down to the "Security" section and click **HTTP Security**.
1. Next to "Allow frame embedding", select the checkbox to enable frame embedding, then click **Save changes**.

### 2. Register {% data variables.product.prodname_classroom %} as an external tool

1. Return to the Moodle "Site administration" page by clicking on the "Site administration" tab in the top level menu.
1. Click the "Plugins" tab, then next to the "Activity modules" section, under "External tool", click **Manage tools**.
1. Click **Configure a tool manually**.
1. Enter the following values in the fields.

    | Field in Moodle app configuration | Value or setting |
    | :- | :- |
    | **Tool name** | `GitHub Classroom` <br/><br/>**Note:** You can use any name, but if you set this to something else, be sure this is communicated to teachers. |
    | **Tool URL** | `https://classroom.github.com` |
    | **LTI version** | `LTI 1.3` |
    | **Public Key type** | `Keyset URL` |
    | **Public keyset** | `https://classroom.github.com/.well-known/jwks.json` |
    | **Initiate login URL** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **Redirection URI(s)** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **Default launch container** | `New window` |

1. Select the **Supports Deep Linking (Content-Item Message)** checkbox.
1. Under the "Services" dropdown, next to "IMS LTI Names and Role Provisioning", select "Use this service to retrieve members' information as per privacy settings" from the dropdown menu.
1. Under the "Privacy" dropdown, set "Share launcher's name with tool" to "Always" and set "Share launcher's email with tool" to "Always."
1. Click **Save changes**.
1. GitHub Classroom has now been registered as an external tool. Under "Tools", on the 'GitHub Classroom" box, click the menu icon to see the "Tool configuration details" screen. This screen contains important information you'll need to input in the last step of registering your instance in {% data variables.product.prodname_classroom %} below.

### 3. Registering your Moodle instance with {% data variables.product.prodname_classroom %}

1. Go to https://classroom.github.com/register-lms.
1. Fill in the following information:

   * Under "LMS Type", choose "Moodle" from the dropdown menu.
   * "Issuer Identifier": The "Platform ID" from the "Tool configuration details" of the external tool you created in Moodle
   * "Domain": The base URL to your Moodle instance
   * "Client ID": The "Client ID" from the "Tool configuration details" of the external tool you created in Moodle
   * "Authentication request URL": The "Authentication Request URL" from the "Tool configuration details" of the external tool you created in Moodle
   * "Access token URL": The "Access token URL" from the "Tool configuration details" of the external tool you created in Moodle
   * "Key Set URL": The "Public keyset URL" from the "Tool configuration details" of the external tool you created in Moodle

1. Click **Register**.
1. You should see the "Successfully registered LMS" banner at the top of the screen, which means that you've registered your LMS instance and teachers can now link their classrooms.

## Configuring Sakai for {% data variables.product.prodname_classroom %}

### 1. Register {% data variables.product.prodname_classroom %} as an external tool

1. Go to Sakai and log in.
1. Go to "Administration Workspace" and select **External Tools** in the left hand sidebar.
1. Click **Install LTI 1.x Tool**.
1. Enter the following values in the fields.

    | Field in Sakai app configuration | Value or setting |
    | :- | :- |
    | **Tool name** | GitHub Classroom - [Your Course Name] <br/><br/>**Note:** You can use any name, but if you set this to something else, be sure this is communicated to teachers. |
    | **Button Text** (Text in tool menu) | What the teacher will see on the button to launch to {% data variables.product.prodname_classroom %}. For example, the value could be `sync`. |
    | **Launch URL** | `https://classroom.github.com/context-link` |
    | **Send User Names to External Tool** | Select this checkbox. |
    | **Provide Roster to External Tool** | Select this checkbox. |
    | **Tool supports LTI 1.3** | Select this checkbox. |
    | **LTI 1.3 Tool Keyset URL** | `https://classroom.github.com/.well-known/jwks.json` |
    | **LTI 1.3 Tool OpenID Connect/Initialization Endpoint** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **LTI 1.3 Tool Redirect Endpoint** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
1. Upon submitting, Sakai will show you the information you need to register your Sakai instance with {% data variables.product.prodname_classroom %}.

### 2. Registering your Sakai instance with {% data variables.product.prodname_classroom %}

1. Go to https://classroom.github.com/register-lms.
1. Fill in the following information:
   * Under "LMS Type", choose "Sakai" from the dropdown menu.
   * "LTI 1.3 Platform Issuer": The "LTI 1.3 Platform Issuer" field as provided by Sakai
   * "Domain": The base URL to your Sakai instance
   * "LTI 1.3 Client ID": The "LTI 1.3 Client ID" field as provided by Sakai
   * "LTI 1.3 Platform OIDC Authentication URL": The "LTI 1.3 Platform OIDC Authentication URL" field as provided by Sakai
   * "LTI 1.3 Platform OAuth2 Bearer Token Retrieval URL": The "LTI 1.3 Platform OAuth2 Bearer Token Retrieval URL" field as provided by Sakai
   * "LTI 1.3 Platform OAuth2 Well-Known/KeySet URL": The "LTI 1.3 Platform OAuth2 Well-Known/KeySet URL" field as provided by Sakai

1. Click **Register**.
1. You should see the "Successfully registered LMS" banner at the top of the screen, which means that you've registered your LMS instance and teachers can now link their classrooms.
