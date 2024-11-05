---
title: Manage classrooms
intro: 'You can create and manage a classroom for each course that you teach using {% data variables.product.prodname_classroom %}.'
permissions: 'Organization owners who are admins for a classroom can manage the classroom for an organization. {% data reusables.classroom.classroom-admins-link %}'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
  - /education/manage-coursework-with-github-classroom/manage-classrooms
---

## About classrooms

{% data reusables.classroom.about-classrooms %}

## About management of classrooms

{% data variables.product.prodname_classroom %} uses organization accounts on {% data variables.product.product_name %} to manage permissions, administration, and security for each classroom that you create. Each organization can have multiple classrooms.

After you create a classroom, {% data variables.product.prodname_classroom %} will prompt you to invite teaching assistants (TAs) and admins to the classroom. Each classroom can have one or more admins. Admins can be teachers, TAs, or any other course administrator who you'd like to have control over your classrooms on {% data variables.product.prodname_classroom %}.

Invite TAs and admins to your classroom by inviting the personal accounts on {% data variables.product.product_name %} to your organization as organization owners and sharing the URL for your classroom. Organization owners can administer any classroom for the organization. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" and "[AUTOTITLE](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)."

When you're done using a classroom, you can archive the classroom and refer to the classroom, roster, and assignments later, or you can delete the classroom if you no longer need the classroom.

{% data reusables.classroom.reuse-assignment-link %}

You can also view your classrooms and assignments directly from the {% data variables.product.product_name %} command line interface with the {% data variables.product.prodname_classroom %} extension. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/using-github-classroom-with-github-cli)."

## About classroom rosters

Each classroom has a roster. A roster is a list of identifiers for the students who participate in your course.

When you first share the URL for an assignment with a student, the student must sign into {% data variables.product.product_name %} with a personal account to link the personal account to an identifier for the classroom. After the student links a personal account, you can see the associated personal account in the roster. You can also see when the student accepts or submits an assignment.

## Prerequisites

You must have an organization account on {% data variables.product.product_name %} to manage classrooms on {% data variables.product.prodname_classroom %}. For more information, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)" and "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."

You must authorize the {% data variables.product.prodname_oauth_app %} for {% data variables.product.prodname_classroom %} for your organization to manage classrooms for your organization account. For more information, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)."

## Creating a classroom

{% data reusables.classroom.sign-into-github-classroom %}
1. Click **New classroom** on the right side of the page.
{% data reusables.classroom.guide-create-new-classroom %}

After you create a classroom, you can begin creating assignments for students. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-the-git-and-github-starter-assignment)," "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)," "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)," or "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)."

## Creating a roster for your classroom

You can create a roster of the students who participate in your course.

If your course already has a roster, you can update the students on the roster or delete the roster. For more information, see "[Adding a student to the roster for your classroom](#adding-students-to-the-roster-for-your-classroom)" or "[Deleting a roster for a classroom](#deleting-a-roster-for-a-classroom)."

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. To connect {% data variables.product.prodname_classroom %} to your LMS and import a roster, your LMS administrator will first need to register your LMS instance and then you will need to connect your LMS course to your classroom. Once connected, you can click the **Import from...** button to import a roster from your LMS course. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)."

   {% note %}

   **Note:** {% data reusables.classroom.google-classroom-note %}

   {% endnote %}

1. Provide the student identifiers for your roster.

   * To import a roster by uploading a file containing student identifiers, click **Upload a CSV or text file**.
   * To create a roster manually, type your student identifiers in the text field.

1. Click **Create roster**.

## Adding students to the roster for your classroom

Your classroom must have an existing roster to add students to the roster. For more information about creating a roster, see "[Creating a roster for your classroom](#creating-a-roster-for-your-classroom)."

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. To the right of "Classroom roster", click **Update students**. If you have already linked your classroom to an LMS course, then you will see a **Sync from...** button instead.
1. Follow the instructions to add students to the roster.
   * To import students from an LMS, your LMS administrator will first need to register your LMS instance and then you will need to connect your LMS course to your classroom. Once connected, you can click the **Sync from...** button. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)."
     {% note %}

     **Note:** {% data reusables.classroom.google-classroom-note %}

     {% endnote %}
   * To manually add students, under "Manually add students", click **Upload a CSV or text file** or type the identifiers for the students, then click **Add roster entries**.

## Renaming a classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Under "Classroom name", type a new name for the classroom.
1. Click **Rename classroom**.

## Archiving or unarchiving a classroom

You can archive a classroom that you no longer use on {% data variables.product.prodname_classroom %}. When you archive a classroom, you can't create new assignments or edit existing assignments for the classroom. Students can't accept invitations to assignments in archived classrooms.

{% data reusables.classroom.sign-into-github-classroom %}
1. To the right of a classroom's name, select the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} dropdown menu, then click **Archive**.

   ![Screenshot of a tile for a classroom. A dropdown menu labeled with a kebab icon is expanded and the "Archive" option is outlined in dark orange.](/assets/images/help/classroom/use-drop-down-then-click-archive.png)

1. To view an archived classroom, use the dropdown menu next to the search bar to change the view to "Archived" or "All".
1. To unarchive a classroom, to the right of a classroom's name, select the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} drop-down menu, then click **Unarchive**.

   ![Screenshot of a tile for a classroom. A dropdown menu labeled with a kebab icon is expanded and the "Unarchive" option is outlined in dark orange.](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

## Deleting a roster for a classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. Below the list of students, under "Delete this roster", click **Delete roster**.
1. Read the warnings, then click **Delete roster**.

## Deleting a classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. To the right of "Delete this classroom", click **Delete classroom**.
1. **Read the warnings**.
1. To verify that you're deleting the correct classroom, type the name of the classroom you want to delete.
1. Click **Delete classroom**.

## Further reading

* "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/using-github-classroom-with-github-cli)"
