---
title: Connect a learning management system course to a classroom
intro: 'You can configure an LTI-compliant learning management system (LMS) course to connect to {% data variables.product.prodname_classroom %} so that you can import a roster for your classroom.'
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
  - /education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS course
---
## About connecting an LMS to your classroom

You can connect a learning management system (LMS) to {% data variables.product.prodname_classroom %} and import a roster of student identifiers from the LMS.

## Prerequisites

Before you can connect your LMS to a classroom, an administrator for your LMS instance needs to register your LMS with GitHub Classroom to initiate the OAuth handshake. An admin only needs to do this registration process once, then any teacher who uses their LMS instance may sync their LMS courses to classrooms. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom)."

{% note %}

**Note:** {% data reusables.classroom.google-classroom-note %}

{% endnote %}

To configure an LMS to connect to {% data variables.product.prodname_classroom %}, you must first create a classroom. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#creating-a-classroom)."

## Supported LMSes

{% data reusables.classroom.supported-lmses %}

## Linking a Canvas course with a classroom

You can link your Canvas course with a classroom in {% data variables.product.prodname_classroom %}. For more information about Canvas, see the [Canvas website](https://www.instructure.com/canvas/).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-canvas-for-github-classroom)."

1. Sign into [Canvas](https://www.instructure.com/canvas/#login).
1. Select the Canvas course to integrate with {% data variables.product.prodname_classroom %}.
1. Click **Setting** in the left sidebar, then click the **Apps** tab.
1. Click the **+ App** button.
1. Under "Configuration Type", select **By Client ID** from the dropdown menu.
1. Under "Client ID", input the Client ID that your LMS administrator created when registering your LMS instance with {% data variables.product.prodname_classroom %}.
1. Click **Submit**, then click **Install**.
1. Refresh the page, and you should see a **GitHub Classroom** link in the course sub-navigation menu on the right hand side of the course details page. Note that the name may be different if your LMS admin named it something else when registering your LMS.
1. Clicking the **GitHub Classroom** link will launch you into {% data variables.product.prodname_classroom %}, where you can select a classroom to link with your LMS course.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see "[Importing a roster from your LMS](#importing-a-roster-from-your-lms)."

## Linking a Moodle course with a classroom

You can link your Moodle course with a classroom in {% data variables.product.prodname_classroom %}. For more information about Moodle, see the [Moodle website](https://moodle.org).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom)."

You must be using Moodle version 3.0 or greater.

1. Sign into [Moodle](https://moodle.org/login/).
1. Select the Moodle course to integrate with {% data variables.product.prodname_classroom %}.
1. Under "External Tools, under "General", you should see a button with the name "GitHub Classroom". Note that the name may be different if your LMS admin named it something else when registering your LMS.
1. Clicking the **GitHub Classroom** button will launch you into {% data variables.product.prodname_classroom %}, where you can select a classroom to link with your LMS course.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see "[Importing a roster from your LMS](#importing-a-roster-from-your-lms)."

## Linking a Sakai course with a classroom

You can link your Sakai course with a classroom in {% data variables.product.prodname_classroom %}. For more information about Sakai, see the [Sakai website](https://www.sakailms.org/).

An administrator needs to register your LMS instance with classroom before you can link an LMS course. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom)."

1. Sign into your Sakai instance.
1. Select the Sakai course to integrate with {% data variables.product.prodname_classroom %}.
1. Click on **External Tools**.
1. Click on **Tool Links**.
1. Clicking the "GitHub Classroom" link will launch you into {% data variables.product.prodname_classroom %}, where you can select a classroom to link with your LMS course.

Once your course is linked, you can import your roster from your LMS course to your classroom. For more information, see "[Importing a roster from your LMS](#importing-a-roster-from-your-lms)."

## Importing a roster from your LMS

To import your roster from your LMS:
1. Open your linked classroom in {% data variables.product.prodname_classroom %} and select the "Students" tab.
1. Click the **Import from...** button containing the name of your LMS (Canvas, Sakai, or Moodle).
1. Select which identifier you'd like to use for your students, then click **Import roster entries**, and your roster will be imported.

To update an existing roster:
1. Open your linked classroom in {% data variables.product.prodname_classroom %} and select the "Students" tab.
1. Click the **Sync from...** button containing the name of your LMS (Canvas, Sakai, or Moodle).

## Importing a roster from Google Classroom

Google Classroom does not use the LTI protocol so does not need to be connected to GitHub Classroom before importing the roster.

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. If your classroom already has a roster, you can either update the roster or delete the roster and create a new roster.
    * For more information about deleting and creating a roster, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom)" and "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom)."
    * For more information about updating a roster, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom)."
1. In the list of LMSes, click **Google Classroom**.
1. Sign in to Google, then select the Classroom to link to.

## Disconnecting your LMS

You can disconnect your classroom from your LMS in {% data variables.product.prodname_classroom %} settings.

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Under "Connect to a learning management system (LMS)", click **Connection Settings**.
1. Under "Delete Connection to your learning management system", click **Disconnect from your learning management system**.
