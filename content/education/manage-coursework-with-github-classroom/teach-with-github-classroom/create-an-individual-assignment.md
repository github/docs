---
title: Create an individual assignment
intro: You can create an assignment for students in your course to complete individually.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage individual assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
shortTitle: Individual assignment
---

{% data reusables.classroom.note-on-assignment-changes %}

## About individual assignments

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

{% data reusables.classroom.reuse-assignment-link %}

## Prerequisites

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Creating an assignment

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Setting up the basics for an assignment

Name your assignment, decide whether to assign a deadline, and choose the visibility of assignment repositories.

- [Naming an assignment](#naming-an-assignment)
- [Assigning a deadline for an assignment](#assigning-a-deadline-for-an-assignment)
- [Choosing an assignment type](#choosing-an-assignment-type)
- [Choosing a visibility for assignment repositories](#choosing-a-visibility-for-assignment-repositories)

### Naming an assignment

For an individual assignment, {% data variables.product.prodname_classroom %} names repositories by the repository prefix and the student's {% data variables.product.product_name %} username. By default, the repository prefix is the assignment title. For example, if you name an assignment "assignment-1" and the student's username on {% data variables.product.product_name %} is @octocat, the name of the assignment repository for @octocat will be `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Assigning a deadline for an assignment

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

{% data reusables.classroom.assignments-guide-make-cutoff-date %}

### Choosing an assignment type

Under "Individual or group assignment", select the drop-down menu, and click **Individual assignment**. You can't change the assignment type after you create the assignment. If you'd rather create a group assignment, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)."

### Choosing a visibility for assignment repositories

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Adding starter code and configuring a development environment

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Choosing a template repository](#choosing-a-template-repository)
- [Choosing an integrated development environment (IDE)](#choosing-an-integrated-development-environment-ide)

### Choosing a template repository

By default, a new assignment will create an empty repository for each student on the roster for the classroom. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### Choosing an integrated development environment (IDE)

{% data reusables.classroom.about-online-ides %} For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)."

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

## Providing feedback for an assignment

Optionally, you can automatically grade assignments and create a space for discussing each submission with the student.

- [Testing assignments automatically](#testing-assignments-automatically)
- [Creating a pull request for feedback](#creating-a-pull-request-for-feedback)

### Testing assignments automatically

{% data reusables.classroom.assignments-guide-using-autograding %}

### Designating protected file paths

{% data reusables.classroom.assignments-guide-protected-paths %}

### Creating a pull request for feedback

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %} For more information on leaving feedback in a pull request, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/leave-feedback-with-pull-requests)."

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## Inviting students to an assignment

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

You can see whether a student has joined the classroom and accepted or submitted an assignment in the **Classroom roster** tab for the assignment. You can also link students' {% data variables.product.prodname_dotcom %} aliases to their associated roster identifier and vice versa in this tab. {% data reusables.classroom.assignments-to-prevent-submission %}

## Monitoring students' progress

{% data reusables.classroom.link-to-assignment-overview-article %}

## Next steps

- Once you create the assignment, students can start work on the assignment using Git and {% data variables.product.product_name %}'s features. Students can clone the repository, push commits, manage branches, create and review pull requests, address merge conflicts, and discuss changes with issues. Both you and student can review the commit history for the repository. For more information, see "[AUTOTITLE](/get-started)," "[AUTOTITLE](/repositories)," and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests)."

- When a student finishes an assignment, you can review the files in the repository, or you can review the history and visualizations for the repository to better understand the student's work. For more information, see "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository)."

- You can provide feedback for an assignment by commenting on individual commits or lines in a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" and "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)." For more information about creating saved replies to provide feedback for common errors, see "[AUTOTITLE](/get-started/writing-on-github/working-with-saved-replies/about-saved-replies)."

## Further reading

- "[AUTOTITLE](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)"
- "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)"
- "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/using-github-classroom-with-github-cli)"
