---
title: Leave feedback with pull requests
intro: You can leave feedback for your students in a special pull request within the repository for each assignment.
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
shortTitle: Pull requests
---
## About feedback pull requests for assignments

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

When you enable the pull request for feedback for an assignment, {% data variables.product.prodname_classroom %} will create a special pull request titled **Feedback** in the assignment repository for each student or team. The pull request automatically shows every commit that a student pushed to the assignment repository's default branch.

## Prerequisites

To create and access the feedback pull request, you must enable the feedback pull request when you create the assignment. {% data reusables.classroom.for-more-information-about-assignment-creation %}

## Leaving feedback in a pull request for an assignment

{% data reusables.classroom.sign-into-github-classroom %}
1. In the list of classrooms, click the classroom with the assignment you want to review.
{% data reusables.classroom.click-assignment-in-list %}
1. Each student will have a submission row, press the Feedback link to navigate to the student's pull request.
1. On the Feedback PR select the Files changed tab.
1. Review the pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)."

## Further reading

* "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)"
