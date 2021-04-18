---
title: Manage classrooms
intro: You can create and manage a classroom for each course that you teach using {% data variables.product.prodname_classroom %}.
permissions: Organization owners can manage a classroom for an organization.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
---

### About classrooms

{% data reusables.classroom.about-classrooms %}

![Classroom](/assets/images/help/classroom/classroom-hero.png)

### About management of classrooms

{% data variables.product.prodname_classroom %} uses organization accounts on {% data variables.product.product_name %} to manage permissions, administration, and security for each classroom that you create. Each organization can have multiple classrooms.

After you create a classroom, {% data variables.product.prodname_classroom %} will prompt you to invite teaching assistants (TAs) and admins to the classroom. Each classroom can have one or more admins. Admins can be teachers, TAs, or any other course administrator who you'd like to have control over your classrooms on {% data variables.product.prodname_classroom %}.

Invite TAs and admins to your classroom by inviting the user accounts on {% data variables.product.product_name %} to your organization as organization owners and sharing the URL for your classroom. Organization owners can administer any classroom for the organization. For more information, see "[Permission levels for an organization](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization)" and "[Inviting users to join your organization](/github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization)."

When you're done using a classroom, you can archive the classroom and refer to the classroom, roster, and assignments later, or you can delete the classroom if you no longer need the classroom.

### About classroom rosters

Each classroom has a roster. A roster is a list of identifiers for the students who participate in your course.

When you first share the URL for an assignment with a student, the student must sign into {% data variables.product.product_name %} with a user account to link the user account to an identifier for the classroom. After the student links a user account, you can see the associated user account in the roster. You can also see when the student accepts or submits an assignment.

![Classroom roster](/assets/images/help/classroom/roster-hero.png)

### Требования

You must have an organization account on {% data variables.product.product_name %} to manage classrooms on {% data variables.product.prodname_classroom %}. For more information, see "[Types of {% data variables.product.company_short %} accounts](/github/getting-started-with-github/types-of-github-accounts#organization-accounts)" and "[Creating a new organization from scratch](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)."

You must authorize the OAuth app for {% data variables.product.prodname_classroom %} for your organization to manage classrooms for your organization account. For more information, see "[Authorizing OAuth Apps](/github/authenticating-to-github/authorizing-oauth-apps)."

### Creating a classroom

{% data reusables.classroom.sign-into-github-classroom %}
1. Click **New classroom**. !["New classroom" button](/assets/images/help/classroom/click-new-classroom-button.png)
{% data reusables.classroom.guide-create-new-classroom %}

After you create a classroom, you can begin creating assignments for students. For more information, see "[Create an individual assignment](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" or "[Create a group assignment](/education/manage-coursework-with-github-classroom/create-a-group-assignment)."

### Creating a roster for your classroom

You can create a roster of the students who participate in your course.

If your course already has a roster, you can update the students on the roster or delete the roster. For more information, see "[Adding a student to the roster for your classroom](#adding-students-to-the-roster-for-your-classroom)" or "[Deleting a roster for a classroom](#deleting-a-roster-for-a-classroom)."

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. To connect {% data variables.product.prodname_classroom %} to your LMS and import a roster, click {% octicon "mortar-board" aria-label="The mortar board icon" %} **Import from a learning management system** and follow the instructions. For more information, see "[Connect a learning management system to {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)." !["Import from a learning management system" button](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. To create a roster manually, type your student identifiers. Optionally, click **Upload a CSV or text file** to upload a file containing the identifiers. ![Text field for typing student identifiers and "Upload a CSV or text file" button](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. Click **Create roster**. !["Create roster" button](/assets/images/help/classroom/click-create-roster-button.png)

### Adding students to the roster for your classroom

Your classroom must have an existing roster to add students to the roster. For more information about creating a roster, see "[Creating a roster for your classroom](#creating-a-roster-for-your-classroom)."

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. To the right of "Classroom roster", click **Update students**. !["Update students" button to the right of "Classroom roster" heading above list of students](/assets/images/help/classroom/click-update-students-button.png)
1. Follow the instructions to add students to the roster.
    - To import students from an LMS, click **Sync from a learning management system**. For more information about importing a roster from an LMS, see "[Connect a learning management system to {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)."
    - To manually add students, under "Manually add students", click **Upload a CSV or text file** or type the identifiers for the students, then click **Add roster entries**. ![Modal for choosing method of adding students to classroom](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

### Renaming a classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Under "Classroom name", type a new name for the classroom. ![Text field under "Classroom name" for typing classroom name](/assets/images/help/classroom/settings-type-classroom-name.png)
1. Click **Rename classroom**. !["Rename classroom" button](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

### Archiving or unarchiving a classroom

You can archive a classroom that you no longer use on {% data variables.product.prodname_classroom %}. When you archive a classroom, you can't create new assignments or edit existing assignments for the classroom. Students can't accept invitations to assignments in archived classrooms.

{% data reusables.classroom.sign-into-github-classroom %}
1. To the right of a classroom's name, select the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} drop-down menu, then click **Archive**. ![Drop-down menu from horizontal kebab icon and "Archive" menu item](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. To unarchive a classroom, to the right of a classroom's name, select the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} drop-down menu, then click **Unarchive**. ![Drop-down menu from horizontal kebab icon and "Unarchive" menu item](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

### Deleting a roster for a classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. Under "Delete this roster", click **Delete roster**. !["Delete roster" button under "Delete this roster" in "Students" tab for a classroom](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. Read the warnings, then click **Delete roster**. !["Delete roster" button under "Delete this roster" in "Students" tab for a classroom](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

### Deleting a classroom

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. To the right of "Delete this classroom", click **Delete classroom**. !["Delete repository" button](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **Read the warnings**.
1. To verify that you're deleting the correct classroom, type the name of the classroom you want to delete. ![Modal for deleting a classroom with warnings and text field for classroom name](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. Click **Delete classroom**. !["Delete classroom" button](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
