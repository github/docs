---
title: Monitor students' progress with the assignment overview page
shortTitle: Use assignment overview
intro: You can use the assignment overview page to track the progress of each student or team on an assignment.
versions:
    fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
topics:
  - Education
---

## About the assignment overview page

Each assignment you create on {% data variables.product.prodname_classroom %} has an assignment overview page. The assignment overview page provides an overview of your assignment acceptances and student progress. You may see different summary information on an assignment overview page based on the configurations of your assignments.

For individual assignments, you can view the following information at the top of the assignment overview page:

* **Rostered students**: The number of students on the classroom's roster.
* **Added students**: The number of {% data variables.product.prodname_dotcom %} accounts that have accepted the assignment and are not associated with a roster identifier.
* **Accepted students**: The number of accounts that have accepted this assignment.
* **Assignment submissions**: The number of students that have submitted the assignment. Submission is triggered at the assignment deadline.
* **Passing students**: The number of students currently passing the autograding tests for this assignment.

For group assignments, you can view the following information at the top of the assignment overview page:

* **Total teams**: The number of teams that have been created.
* **Rostered students**: The number of students on the classroom's roster.
* **Students not on a team**: The number of students on the classroom roster who have not yet joined a team.
* **Accepted teams**: The number of teams who have accepted this assignment.
* **Assignment submissions**: The number of teams that have submitted the assignment. Submission is triggered at the assignment deadline.
* **Passing teams**: The number of teams that are currently passing the autograding tests for this assignment.

## Viewing the assignment overview page for an assignment

The assignment overview page displays information for a specific assignment. You can view general information at a glance, or apply searches, sorts, and filters to find students or teams that meet specific criteria.

{% data reusables.classroom.sign-into-github-classroom %}
1. Navigate to a classroom.
1. To open the assignment overview page for an assignment, in the "Assignments" section, click the name of that assignment.

## Searching and sorting the assignment overview page

You can search and sort the assignment overview page to find specific students or teams.

1. To find a specific student or team on the assignment overview page, in the search bar, type the student's {% data variables.product.prodname_dotcom %} handle, the student's identifier, or the team's name, then press <kbd>Enter</kbd> or <kbd>Return</kbd>.

   If the search term you enter matches multiple students or teams, each student or team will be shown in the search results. For example, if you have two students with the {% data variables.product.prodname_dotcom %} handles "@octocat" and "@monacat", and you search for "cat", both "@octocat" and "@monacat" will appear in the search results.
1. To sort the students or teams displayed on an assignment overview page, select **Sort by:** {% octicon "triangle-down" aria-hidden="true" %}, then click **Alphabetical A-Z**, **Alphabetical Z-A**, **Newest**, or **Oldest**.

   The **Newest** sort orders the results from the most recently updated assignment to the least recently updated assignment, while the **Oldest** sort does the opposite.
{% data reusables.classroom.clear-all-assignment-overview %}

## Filtering the assignment overview page

Using a series of dropdown menus, you can apply multiple filters to the assignment overview page to search for students or teams based on specific criteria. You can even apply multiple filters from a single dropdown menu to include all students or teams that match the criteria.

1. To filter for students with unlinked accounts, select the **Unlinked accounts** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **Student identifiers** or **{% data variables.product.prodname_dotcom %} accounts**.
1. To filter by which students have or haven't accepted the assignment, select the **Accepted** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **Accepted** or **Unaccepted**.
1. To filter by the submission status for each student's assignment repository, select the **Submitted** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **Submitted**, **On-time**, **Late**, or **Not submitted**.
1. To filter for students by passing or failing grades, select the **Passing** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **Passing** or **Failing**.
1. To unapply a filter, select the associated dropdown menu, then click the filter once more. A {% octicon "check" aria-hidden="true" %} is displayed alongside the name of an applied filter, while unapplied filters only display their names.
{% data reusables.classroom.clear-all-assignment-overview %}

## Downloading assignment details

{% data reusables.classroom.download-results %}
