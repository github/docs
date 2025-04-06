---
title: Extending an assignment's deadline for an individual or group
intro: You can grant individual students and groups extensions to allow them more time to submit an assignment.
versions:
  fpt: '*'
shortTitle: Extend deadline
---

## About extending assignment deadlines

If you set a cutoff date for an assignment in {% data variables.product.prodname_classroom %}, individual students and groups will lose write access to their assignment repositories once that date has passed. To extend access to assignment repositories for specific students or groups, you can grant those students or groups an extension for that assignment. Extensions extend the cutoff date indefinitely, allowing students to submit an assignment at any time. For more information on setting a cutoff date, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment#assigning-a-deadline-for-an-assignment)" and "[AUTOTITLE](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment#assigning-a-deadline-for-an-assignment)."

{% note %}

**Notes:**
* If your assignment has a deadline, but it does not have a cutoff date, you will not be able to grant students extensions. Instead, you can inform the student or group of their extension directly and ignore the "Late" label applied to the student or group's entry on the assignment overview.
* If you grant a student or group an extension, and they submit their work after the initial cutoff date, the assignment will still be marked "Late". You can ignore the "Late" label, as it will not affect the student or group's grade, or write access to their assignment repository.

{% endnote %}

## Extending an assignment's deadline

{% data reusables.classroom.sign-into-github-classroom %}
1. Navigate to your classroom.
1. Open the assignment for which you would like to grant an extension.
1. In your classroom's roster, find the student or group you would like to grant an extension. In that student or group's row, select {% octicon "kebab-horizontal" aria-label="the dropdown menu" %}, then click {% octicon "calendar" aria-hidden="true" %} **Extend deadline**.

    ![Screenshot of the assignment overview page. An expanded dropdown menu containing the "Extend deadline" option is outlined in dark orange.](/assets/images/help/classroom/classroom-extend-deadline.png)

1. In the modal that appears, select **Extend STUDENT OR GROUP'S assignment deadline**, then click **I understand, extend the deadline**. A "Deadline extended" label will appear next to that student or group's name in the classroom roster.
1. Optionally, to revoke an extension, select {% octicon "kebab-horizontal" aria-label="the dropdown menu" %}, then click {% octicon "calendar" aria-hidden="true" %} **Revoke extension**.

    In the modal that appears, select **Revoke STUDENT OR GROUP'S assignment extension**, then click **I understand, revoke the extension**. The "Deadline extended" label will be removed from the student or group's entry in the classroom roster.
