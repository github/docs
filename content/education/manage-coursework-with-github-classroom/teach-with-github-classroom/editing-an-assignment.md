---
title: Editing an assignment
intro: You can edit existing assignments in your course.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can edit assignments for that classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Edit an assignment
---
## About editing assignments

After creating an assignment, you can edit many aspects of the assignment to better fit the needs of yourself and your students. Be aware that you cannot change the assignment type (either individual or group) or the online integrated development environment (IDE) after assignment creation. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)" and "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)."

## Editing an existing assignment

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
1. In the {% octicon "repo" aria-hidden="true" %} **Assignments** tab, next to the assignment you would like to edit, click {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}

    **Note:** You can also edit an assignment from the assignment's page. To access the assignment's page, in the **Assignments** tab, click the assignment name.

    {% endnote %}

1. Under "Assignment title," click in the text field, then delete the existing text and type the new assignment title.
1. Optionally, to edit the default prefix for each student's assignment repository, next to the name of the prefix, click {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}

    **Note:** Editing an assignment's title or default repository prefix will not change the name of existing assignment repositories.

    {% endnote %}

    Then, type the new prefix under "Custom repository prefix."

1. Under "Deadline (optional)," click in the text field, then use the date picker to reassign a deadline. The new deadline cannot be in the past, and reassigning a deadline will update the deadline for all students.

    {% data reusables.classroom.assignments-guide-make-cutoff-date %}

1. To change the status of an assignment, select the **Assignment status** dropdown menu, then click **Active** or **Inactive**.

    {% note %}

    **Note:** Inactive assignments cannot be accepted by students. You should change an assignment status to inactive once no more students should accept an assignment or the assignment deadline has passed.

    {% endnote %}

1. Under "Repository visibility," select a visibility. If you use private repositories, only the student or team can see the feedback you provide.

    {% note %}

    **Note:** Changing the visibility for assignment repositories will not retroactively change the visibility of existing assignment repositories.

    {% endnote %}

1. Optionally, select or deselect **Grant students admin access to their repository**. For more information on admin permissions for repositories, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

    {% note %}

    **Note:** Granting or revoking student admin access after an assignment has been created will not retroactively change the permissions for existing assignment repositories.

    {% endnote %}

1. To set up or change the template repository for your assignment, in the "Add a template repository to give students starter code" section, select the **Select a repository** dropdown menu.
   * To choose a template repository, begin typing the repository name in the text field, then click the repository in the search results.
   * To remove a template repository, delete any text in the text field.

  You cannot change the template repository after a student has accepted the assignment. If you wish to provide updates to the starter code after students have accepted the assignment, see "[Making changes to assignment starter code](#making-changes-to-assignment-starter-code)."

   {% note %}

   **Note:** By default, an assignment will create an empty repository for each student on the roster for the classroom.

   {% endnote %}

1. To add a new autograding test, in the "Add autograding tests" section, select the **Add test** dropdown menu, then click a grading method from the options that appear. For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-autograding)."

    Additionally, you can edit or delete existing autograding tests with {% octicon "pencil" aria-label="The pencil icon" %} or {% octicon "trash" aria-label="The trash icon" %}.

1. To add new protected path, in the "Protected file paths" section, type out the file or path and click **Add path**.

    Additionally, delete existing protected paths by clicking {% octicon "trash" aria-label="The trash icon" %}.

    {% note %}

    **Note:** If you remove a protected file path, the "Protected file(s) modified" label will be removed from any submissions that edited files in that path

    {% endnote %}

1. To turn feedback pull requests on or off, select or deselect **Enable feedback pull requests**.

    {% note %}

    **Note:** Enabling or disabling feedback pull requests for an assignment will not create or delete feedback pull requests for existing assignment repositories.

    {% endnote %}

{% data reusables.classroom.update-assignment %}

## Making changes to assignment starter code

If you need to update the starter code for your assignment after students have already accepted it, you can do so by modifying the original repository. Since student assignments are based on forks of this repository, you can make changes to the starter code and then create pull requests for students to merge these updates into their assignments. See, "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-assignment-from-a-template-repository)."

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}

1. Select the assignment that has a starter code repository.
1. Below the title of the assignment, click the link to your starter code repository.
1. Make the necessary changes to your starter code's content.
1. Return to the assignment overview page.
1. Click **Sync assignments**. If changes are detected, an **Assignments are out of date** button will be shown.
1. To open pull requests in all of your students' assignment repositories, click **Assignments are out of date**.

The pull requests will be titled  "{% data variables.product.prodname_classroom %}: Sync Assignment". Ask your students to merge these pull requests.

## Further reading

* "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)"
* "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)"
