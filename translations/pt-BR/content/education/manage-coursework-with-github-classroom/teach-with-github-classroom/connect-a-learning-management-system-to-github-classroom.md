---
title: Connect a learning management system to GitHub Classroom
intro: 'You can configure an LTI-compliant learning management system (LMS) to connect to {% data variables.product.prodname_classroom %} so that you can import a roster for your classroom.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
  - /education/manage-coursework-with-github-classroom/connect-to-lms
  - /education/manage-coursework-with-github-classroom/generate-lms-credentials
  - /education/manage-coursework-with-github-classroom/setup-canvas
  - /education/manage-coursework-with-github-classroom/setup-generic-lms
  - /education/manage-coursework-with-github-classroom/setup-moodle
  - /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS
---
## About configuration of your LMS

You can connect a learning management system (LMS) to {% data variables.product.prodname_classroom %}, and {% data variables.product.prodname_classroom %} can import a roster of student identifiers from the LMS. To connect your LMS to {% data variables.product.prodname_classroom %}, you must enter configuration credentials for {% data variables.product.prodname_classroom %} in your LMS.

## Prerequisites

To configure an LMS to connect to {% data variables.product.prodname_classroom %}, you must first create a classroom. For more information, see "[Manage classrooms](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom)."

## Supported LMSes

{% note %}

**Note:** {% data variables.product.prodname_classroom %} previously supported import of roster data from LMSes that implement Learning Tools Interoperability (LTI) versions 1.0 and 1.1. On June 30, 2022, the Instructional Management System (IMS) Global Learning Consortium [ended support for LTI versions 1.0 and 1.1](https://www.imsglobal.org/lti-security-announcement-and-deprecation-schedule). In the interest of keeping sensitive student information safe and secure, {% data variables.product.company_short %} has temporarily disabled importing roster data from LTI-compliant LMSes.<br><br>

Support for the latest version of Learning Tools Interoperability, [LTI 1.3](https://www.imsglobal.org/activity/learning-tools-interoperability), is currently being worked on and will be made available in {% data variables.product.prodname_classroom %} very soon.

{% endnote %}

LTI is an industry-standard protocol and GitHub Classroom's use of LTI is certified by the Instructional Management System (IMS) Global Learning Consortium. For more information, see [Learning Tools Interoperability](https://www.imsglobal.org/activity/learning-tools-interoperability) and [About IMS Global Learning Consortium](http://www.imsglobal.org/aboutims.html) on the IMS Global Learning Consortium website.

{% data variables.product.company_short %} has tested import of roster data from the following LMSes into {% data variables.product.prodname_classroom %}.

- Google Classroom


## Connecting to Google Classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. If your classroom already has a roster, you can either update the roster or delete the roster and create a new roster.
    - For more information about deleting and creating a roster, see "[Deleting a roster for a classroom](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" and "[Creating a roster for your classroom](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)."
    - For more information about updating a roster, see "[Adding students to the roster for your classroom](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)."
1. In the list of LMSes, click Google Classroom.
  ![Google Classroom](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Sign in to Google, then select the Classroom to link to.


## Connecting to Canvas, Moodle, Sakai, and other LMSes

Connecting to other LMSes is temporarily unavailable as {% data variables.product.company_short %} updates to Learning Tools Interoperability (LTI) version 1.3. For more information, see "[Supported LMSes](#supported-lmses)."

In the meantime, you may manually input your roster for your class. For more information about manually importing the roster from your LMS into {% data variables.product.prodname_classroom %}, see "[Manage classrooms](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)."

## Disconnecting your LMS

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Under "Connect to a learning management system (LMS)", click **Connection Settings**.
  !["Connection settings" link in classroom settings](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. Under "Delete Connection to your learning management system", click **Disconnect from your learning management system**.
  !["Disconnect from your learning management system" button in connection settings for classroom](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
