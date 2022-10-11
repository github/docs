---
title: Connect a learning management system to GitHub Classroom
intro: 'You can configure an LTI-compliant learning management system (LMS) to connect to {% data variables.product.prodname_classroom %} so that you can import a roster for your classroom.'
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
  - /education/manage-coursework-with-github-classroom/connect-to-lms
  - /education/manage-coursework-with-github-classroom/generate-lms-credentials
  - /education/manage-coursework-with-github-classroom/setup-canvas
  - /education/manage-coursework-with-github-classroom/setup-generic-lms
  - /education/manage-coursework-with-github-classroom/setup-moodle
  - /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
---

### About configuration of your LMS

You can connect a learning management system (LMS) to {% data variables.product.prodname_classroom %}, and {% data variables.product.prodname_classroom %} can import a roster of student identifiers from the LMS. To connect your LMS to {% data variables.product.prodname_classroom %}, you must enter configuration credentials for {% data variables.product.prodname_classroom %} in your LMS.

### Требования

To configure an LMS to connect to {% data variables.product.prodname_classroom %}, you must first create a classroom. For more information, see "[Manage classrooms](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)."

### Supported LMSes

{% data variables.product.prodname_classroom %} supports import of roster data from LMSes that implement Learning Tools Interoperability (LTI) standards.

- LTI version 1.0 and/or 1.1
- LTI Names and Roles Provisioning 1.X

Using LTI helps keep your information safe and secure. LTI is an industry-standard protocol and GitHub Classroom's use of LTI is certified by the Instructional Management System (IMS) Global Learning Consortium. For more information, see [Learning Tools Interoperability](https://www.imsglobal.org/activity/learning-tools-interoperability) and [About IMS Global Learning Consortium](http://www.imsglobal.org/aboutims.html) on the IMS Global Learning Consortium website.

{% data variables.product.company_short %} has tested import of roster data from the following LMSes into {% data variables.product.prodname_classroom %}.

- Canvas
- Google Classroom
- Moodle
- Sakai

Currently, {% data variables.product.prodname_classroom %} doesn't support import of roster data from Blackboard or Brightspace.

### Generating configuration credentials for your classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. If your classroom already has a roster, you can either update the roster or delete the roster and create a new roster.
    - For more information about deleting and creating a roster, see "[Deleting a roster for a classroom](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" and "[Creating a roster for your classroom](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)."
    - For more information about updating a roster, see "[Adding students to the roster for your classroom](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)."
1. In the list of LMSes, click your LMS. If your LMS is not supported, click **Other LMS**. ![List of LMSes](/assets/images/help/classroom/classroom-settings-click-lms.png)
1. Read about connecting your LMS, then click **Connect to _LMS_**.
1. Copy the "Consumer Key", "Shared Secret", and "Launch URL" for the connection to the classroom. ![Copy credentials](/assets/images/help/classroom/classroom-copy-credentials.png)

### Configuring a generic LMS

You must configure the privacy settings for your LMS to allow external tools to receive roster information.

1. Navigate to your LMS.
1. Configure an external tool.
1. Provide the configuration credentials you generated in {% data variables.product.prodname_classroom %}.
    - Consumer key
    - Shared secret
    - Launch URL (sometimes called "tool URL" or similar)

### Configuring Canvas

You can configure {% data variables.product.prodname_classroom %} as an external app for Canvas to import roster data into your classroom. For more information about Canvas, see the [Canvas website](https://www.instructure.com/canvas/).

1. Sign into [Canvas](https://www.instructure.com/canvas/#login).
1. Select the Canvas course to integrate with {% data variables.product.prodname_classroom %}.
1. In the left sidebar, click **Settings**.
1. Click the **Apps** tab.
1. Click **View app configurations**.
1. Click **+App**.
1. Select the **Configuration Type** drop-down menu, and click **By URL**.
1. Paste the configuration credentials from {% data variables.product.prodname_classroom %}. For more information, see "[Generating configuration credentials for your classroom](#generating-configuration-credentials-for-your-classroom)."

    | Field in Canvas app configuration                                         | Value or setting                                                   |
    |:------------------------------------------------------------------------- |:------------------------------------------------------------------ |
    | **Consumer Key**                                                          | Consumer key from {% data variables.product.prodname_classroom %}
    | **Shared Secret**                                                         | Shared secret from {% data variables.product.prodname_classroom %}
    | **Allow this tool to access the IMS Names and Role Provisioning Service** | Enabled                                                            |
    | **Configuration URL**                                                     | Launch URL from {% data variables.product.prodname_classroom %}

    {% note %}

    **Note**: If you don't see a checkbox in Canvas labeled "Allow this tool to access the IMS Names and Role Provisioning Service", then your Canvas administrator must contact Canvas support to enable membership service configuration for your Canvas account. Without enabling this feature, you won't be able to sync the roster from Canvas. For more information, see [How do I contact Canvas Support?](https://community.canvaslms.com/t5/Canvas-Basics-Guide/How-do-I-contact-Canvas-Support/ta-p/389767) on the Canvas website.

    {% endnote %}

1. Click **Submit**.
1. In the left sidebar, click **Home**.
1. To prompt Canvas to send a confirmation email, in the left sidebar, click **GitHub Classroom**. Follow the instructions in the email to finish linking {% data variables.product.prodname_classroom %}.

### Configuring Moodle

You can configure {% data variables.product.prodname_classroom %} as an activity for Moodle to import roster data into your classroom. For more information about Moodle, see the [Moodle website](https://moodle.org).

You must be using Moodle version 3.0 or greater.

1. Sign into [Moodle](https://moodle.org/login/index.php).
1. Select the Moodle course to integrate with {% data variables.product.prodname_classroom %}.
1. Click **Turn editing on**.
1. Wherever you'd like {% data variables.product.prodname_classroom %} to be available in Moodle, click **Add an activity or resource**.
1. Choose **External tool** and click **Add**.
1. In the "Activity name" field, type "GitHub Classroom".
1. In the **Preconfigured tool** field, to the right of the drop-down menu, click **+**.
1. Under "External tool configuration", paste the configuration credentials from {% data variables.product.prodname_classroom %}. For more information, see "[Generating configuration credentials for your classroom](#generating-configuration-credentials-for-your-classroom)."

    | Field in Moodle app configuration | Value or setting                                                                                                                                                      |
    |:--------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Tool name**                     | {% data variables.product.prodname_classroom %} - _YOUR CLASSROOM NAME_<br/><br/>**Note**: You can use any name, but we suggest this value for clarity. |
    | **Tool URL**                      | Launch URL from {% data variables.product.prodname_classroom %}
    | **LTI version**                   | LTI 1.0/1.1                                                                                                                                                           |
    | **Default launch container**      | New window                                                                                                                                                            |
    | **Consumer key**                  | Consumer key from {% data variables.product.prodname_classroom %}
    | **Shared secret**                 | Shared secret from {% data variables.product.prodname_classroom %}

1. Scroll to and click **Services**.
1. To the right of "IMS LTI Names and Role Provisioning", select the drop-down menu and click **Use this service to retrieve members' information as per privacy settings**.
1. Scroll to and click **Privacy**.
1. To the right of **Share launcher's name with tool** and **Share launcher's email with tool**, select the drop-down menus to click **Always**.
1. At the bottom of the page, click **Save changes**.
1. In the **Preconfigure tool** menu, click **GitHub Classroom - _YOUR CLASSROOM NAME_**.
1. Under "Common module settings", to the right of "Availability", select the drop-down menu and click **Hide from students**.
1. At the bottom of the page, click **Save and return to course**.
1. Navigate to anywhere you chose to display {% data variables.product.prodname_classroom %}, and click the {% data variables.product.prodname_classroom %} activity.

### Importing a roster from your LMS

For more information about importing the roster from your LMS into {% data variables.product.prodname_classroom %}, see "[Manage classrooms](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)."

### Disconnecting your LMS

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Under "Connect to a learning management system (LMS)", click **Connection Settings**. !["Connection settings" link in classroom settings](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. Under "Delete Connection to your learning management system", click **Disconnect from your learning management system**. !["Disconnect from your learning management system" button in connection settings for classroom](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
