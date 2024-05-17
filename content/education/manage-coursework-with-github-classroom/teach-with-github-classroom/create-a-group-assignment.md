---
title: Create a group assignment
intro: You can create a collaborative assignment for teams of students who participate in your course.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
---

{% data reusables.classroom.note-on-assignment-changes %}

## About group assignments

{% data reusables.classroom.assignments-group-definition %} Students can work together on a group assignment in a shared repository, like a team of professional developers.

{% data reusables.classroom.about-teams-in-group-assignment %}

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

You can decide how many teams one assignment can have, and how many members each team can have. Each team that a student creates for an assignment is a team within your organization on {% data variables.product.product_name %}. The visibility of the team is secret. Teams that you create on {% data variables.product.product_name %} will not appear in {% data variables.product.prodname_classroom %}. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

{% data reusables.classroom.reuse-assignment-link %}

## Prerequisites

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Creating an assignment

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Setting up the basics for an assignment

Name your assignment, decide whether to assign a deadline, define teams, and choose the visibility of assignment repositories.

- [Naming an assignment](#naming-an-assignment)
- [Assigning a deadline for an assignment](#assigning-a-deadline-for-an-assignment)
- [Choosing an assignment type](#choosing-an-assignment-type)
- [Defining teams for an assignment](#defining-teams-for-an-assignment)
- [Choosing a visibility for assignment repositories](#choosing-a-visibility-for-assignment-repositories)

### Naming an assignment

For a group assignment, {% data variables.product.prodname_classroom %} names repositories by the repository prefix and the name of the team. By default, the repository prefix is the assignment title. For example, if you name an assignment "assignment-1" and the team's name on {% data variables.product.product_name %} is "student-team", the name of the assignment repository for members of the team will be `assignment-1-student-team`.

{% data reusables.classroom.assignments-type-a-title %}

### Assigning a deadline for an assignment

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

{% data reusables.classroom.assignments-guide-make-cutoff-date %}

### Choosing an assignment type

Under "Individual or group assignment", select the drop-down menu, then click **Group assignment**. You can't change the assignment type after you create the assignment. If you'd rather create an individual assignment, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)."

### Defining teams for an assignment

If you've already created a group assignment for the classroom, you can reuse a set of teams for the new assignment. To create a new set with the teams that your students create for the assignment, type the name for the set. Optionally, type the maximum number of team members and total teams.

{% note %}

**Note**:

- We recommend including details about the set of teams in the name for the set. For example, if you want to use the set of teams for one assignment, name the set after the assignment. If you want to reuse the set throughout a semester or course, name the set after the semester or course.

- If you'd like to assign students to a specific team, give your students a name for the team and provide a list of members.

{% endnote %}

### Choosing a visibility for assignment repositories

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Adding starter code and configuring a development environment

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Choosing a template repository](#choosing-a-template-repository)
- [Choosing an integrated development environment (IDE)](#choosing-an-integrated-development-environment-ide)

### Choosing a template repository

By default, a new assignment will create an empty repository for each team that a student creates. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### Choosing an integrated development environment (IDE)

{% data reusables.classroom.about-online-ides %} For more information, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)."

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## Providing feedback

Optionally, you can automatically grade assignments and create a space for discussing each submission with the team.

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

You can see the teams that are working on or have submitted an assignment in the **Teams** tab for the assignment. {% data reusables.classroom.assignments-to-prevent-submission %}

## Monitoring students' progress

{% data reusables.classroom.link-to-assignment-overview-article %}

## Next steps

- After you create the assignment and your students form teams, team members can start work on the assignment using Git and {% data variables.product.product_name %}'s features. Students can clone the repository, push commits, manage branches, create and review pull requests, address merge conflicts, and discuss changes with issues. Both you and the team can review the commit history for the repository. For more information, see "[AUTOTITLE](/get-started)," "[AUTOTITLE](/repositories)," "[AUTOTITLE](/get-started/using-git)," and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests)," and the free course on [resolving merge conflicts](https://github.com/skills/resolve-merge-conflicts) from {% data variables.product.prodname_learning %}.

- When a team finishes an assignment, you can review the files in the repository, or you can review the history and visualizations for the repository to better understand how the team collaborated. For more information, see "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository)."

- You can provide feedback for an assignment by commenting on individual commits or lines in a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" and "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)." For more information about creating saved replies to provide feedback for common errors, see "[AUTOTITLE](/get-started/writing-on-github/working-with-saved-replies/about-saved-replies)."

## Further reading

- "[{% data variables.product.prodname_global_campus %} for teachers](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)"
- "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)"
- "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/using-github-classroom-with-github-cli)"
