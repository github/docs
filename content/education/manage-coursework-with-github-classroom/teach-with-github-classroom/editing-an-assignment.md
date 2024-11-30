---
title: Editing an assignment
intro: You can edit existing assignments in your course.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can edit assignments for that classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Edit an assignment
---
## About editing assignments

After creating an assignment, you can edit many aspects of the assignment to better fit the needs of yourself and your students. Be aware that you cannot change the assignment type (either individual or group) or the online integrated development environment (IDE) after assignment creation. For more information, see "[Create an individual assignment](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)" and "[Create a group assignment](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)."

## Editing an existing assignment

1. Sign into {% data variables.product.prodname_classroom_with_url %}.
1. Navigate to a classroom.

    ![Screenshot of a classroom tile in GitHub Education with the classroom name emphasized](/assets/images/help/classroom/classroom-card.png)

1. In the {% octicon "repo" aria-label="The repo icon" %} **Assignments** tab, next to the assignment you would like to edit, click {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}
    
    **Note:** You can also edit an assignment from the assignment's page. To access the assignment's page, in the **Assignments** tab, click the assignment name.
    
    {% endnote %}

    ![Screenshot of an assignment with emphasis on the edit icon](/assets/images/help/classroom/edit-assignment.png)

1. Under "Assignment title," click in the text field, then delete the existing text and type the new assignment title.

    ![Screenshot of the assignment editor with emphasis on the "Assignment title" text field](/assets/images/help/classroom/edit-assignment-title.png)

1. Optionally, to edit the default prefix for each student's assignment repository, click {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}

    **Note:** Editing an assignment's title or default repository prefix will not change the name of existing assignment repositories.

    {% endnote %}

    ![Screenshot of the assignment editor with emphasis on the edit icon for student repository prefixes](/assets/images/help/classroom/edit-assignment-repository-prefix-icon.png)

    Then, type the new prefix under "Custom repository prefix."

    ![Screenshot of the assignment editor with emphasis on the "Custom repository prefix" text field](/assets/images/help/classroom/edit-assignment-repository-prefix.png)

1. Under "Deadline (optional)," click in the text field, then use the date picker to reassign a deadline. The new deadline cannot be in the past, and reassigning a deadline will update the deadline for all students.

    ![Screenshot of the assignment editor with emphasis on the "Deadline (optional)" field](/assets/images/help/classroom/edit-assignment-deadline.png)

1. To change the status of an assignment, select the **Assignment status** dropdown menu, then click **Active** or **Inactive**.

    {% note %}
  
    **Note:** Inactive assignments cannot be accepted by students. You should change an assignment status to inactive once no more students should accept an assignment or the assignment deadline has passed.
  
    {% endnote %}

    ![Screenshot of the assignment editor with emphasis on the "Assignment status" dropdown menu](/assets/images/help/classroom/edit-assignment-status-dropdown.png)

1.  Under "Repository visibility," select a visibility. If you use private repositories, only the student or team can see the feedback you provide.

    {% note %}
    
    **Note:** Changing the visibility for assignment repositories will not retroactively change the visibility of existing assignment repositories.
    
    {% endnote %}

    ![Screenshot of the assignment editor with emphasis on the "Repository visibility" radio buttons](/assets/images/help/classroom/edit-assignment-repository-visibility.png)

1.  Optionally, select or deselect **Grant students admin access to their repository**. For more information on admin permissions for repositories, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

    {% note %}

    **Note:** Granting or revoking student admin access after an assignment has been created will not retroactively change the permissions for existing assignment repositories.

    {% endnote %}

    ![Screenshot of the assignment editor with emphasis on the "Grant students admin access to their repository" checkbox](/assets/images/help/classroom/edit-assignment-admin-access.png)

1. To set up or change the template repository for your assignment, in the "Add a template repository to give students starter code" section, select the **Select a repository** dropdown menu.
       - To choose a template repository, begin typing the repository name in the text field, then click the repository in the search results.
       - To remove a template repository, delete any text in the text field.

    {% note %}

    **Note:** By default, an assignment will create an empty repository for each student on the roster for the classroom.

    {% endnote %}

    ![Screenshot of the assignment editor with emphasis on the "Select a repository" dropdown](/assets/images/help/classroom/edit-assignment-template-repository.png)

1. To add a new autograding test, in the "Add autograding tests" section, select the **Add test** drop-down menu, then click a grading method from the options that appear. For more information, see "[Use autograding](/education/manage-coursework-with-github-classroom/use-autograding)."
    
    ![Screenshot of the assignment editor with emphasis on the "Add test" dropdown](/assets/images/help/classroom/edit-assignment-add-test.png)

    Additionally, you can edit or delete existing autograding tests with {% octicon "pencil" aria-label="The pencil icon" %} or {% octicon "trash" aria-label="The trash icon" %}.

    ![Screenshot of the assignment editor with emphasis on the edit test and delete test icons](/assets/images/help/classroom/edit-assignment-edit-test.png)

1.  To turn feedback pull requests on or off, select or deselect **Enable feedback pull requests**.

    {% note %}
    
    **Note:** Enabling or disabling feedback pull requests for an assignment will not create or delete feedback pull requests for existing assignment repositories.
    
    {% endnote %}

    ![Screenshot of the assignment editor with emphasis on the "Enable feedback pull requests" checkbox](/assets/images/help/classroom/edit-assignment-feedback.png)

{% data reusables.classroom.update-assignment %}

## Further reading

- "[Create an individual assignment](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)"
- "[Create a group assignment](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)"
