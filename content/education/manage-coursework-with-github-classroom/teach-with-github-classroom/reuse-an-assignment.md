---
title: Reuse an assignment
intro: 'You can reuse existing assignments in more than one classroom, including classrooms in a different organization.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reuse an assignment
---
## About reusing assignments

You can reuse an existing individual or group assignment in any other classroom you have access to, including classrooms in a different organization. You can also reuse multiple assignments at once from a classroom. If you choose to reuse an assignment, {% data variables.product.prodname_classroom %} will copy the assignment to the classroom you choose. If the assignment uses a template repository and you choose to reuse it in a classroom from a different organization, {% data variables.product.prodname_classroom %} will create a copy of the repository and its contents in the target organization.

The copied assignment includes assignment details such as the name, source repository, autograding test, and preferred editor. You can edit the assignment after it has been copied to make changes. You cannot make changes to the preferred editor.

## Reusing an assignment

1. Sign into {% data variables.product.prodname_classroom_with_url %}.
1. Navigate to the classroom that has the assignment that you want to reuse.
1. In the list of assignments, click the assignment you want to reuse.
1. Select the **{% octicon "pencil" aria-hidden="true" %} Edit** dropdown menu in the top right of the page, then click **{% octicon "sync" aria-hidden="true" %} Reuse assignment**.

   ![Screenshot of an assignment. The "Edit" dropdown is expanded and the "Reuse assignment" option is outlined in dark orange.](/assets/images/help/classroom/reuse-assignment-button.png)

1. In the "Reuse assignment" modal, use the **Choose an organization** dropdown menu to select the organization you want the assignment to be in.  Then use the **Choose a classroom** dropdown menu to select the classroom within that organization that you want to copy the assignment to.
1. Click **Create assignment**.
1. The assignment is copied to the selected classroom, and a confirmation message is shown. If you chose to reuse an assignment with a template repository, the copying process may take a few minutes to complete, and you may need to refresh the page to see the completed message.

## Reusing multiple assignments from a classroom

1. Sign into {% data variables.product.prodname_classroom_with_url %}.
1. To the right of a classroom's name, select the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} dropdown menu, then click **Reuse assignment**.

    ![Screenshot of the tile for a classroom. The "Reuse assignment" option in the dropdown menu is outlined in dark orange.](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

1. In the "Reuse assignments" modal, use the **Choose an organization** dropdown menu to select the organization you want the assignments to be in.  Then use the **Choose a classroom** dropdown menu to select the classroom within that organization that you want to copy the assignments to.
1. To the left of each assignment, select the assignment you want to reuse.
1. Click **Create assignments**.
1. The assignments are copied to the selected classroom. If you chose to reuse an assignment with a template repository, the copying process may take a few minutes to complete.
