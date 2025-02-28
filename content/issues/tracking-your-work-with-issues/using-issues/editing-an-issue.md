---
title: Editing an issue
intro: 'Learn how to make changes to an existing issue.'
permissions: 'Issue authors, people with write access or higher in repositories owned by an organization, and collaborators in repositories owned by a personal account can make changes to issues. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
---

## Editing an issue title

You can edit an issue's title. The change to the title is added to the issue's timeline.

1. Navigate to the issue you want to edit.
1. To the right of the issue title, click **Edit**.

   ![Screenshot of an issue header, the "Edit" button is highlighted with an orange outline.](/assets/images/help/issues/issue-edit-title.png)

1. Type your new title.
1. Click **Save**.

## Editing an issue description

You can also make changes to the issue description. The edit history is available unless the author or a person with write access removes it. See [AUTOTITLE](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment).

1. Navigate to the issue you want to edit.
1. At the top right of the issue description, click {% octicon "kebab-horizontal" aria-label="Issue body actions" %}.

   ![Screenshot of an issue description. The "Issue body actions" button is highlighted with an orange outline.](/assets/images/help/issues/issue-edit-description.png)

1. In the menu, click **{% octicon "pencil" aria-hidden="true" %} Edit**.
1. Type your changes to the issue description.
1. Click **Save**.

{% ifversion issue-types %}

## Adding or changing the issue type

{% data reusables.issues.release-stage %}

You can add an issue type or make changes to an existing issue type.

1. Navigate to the issue you want to edit.
1. To the right of the issue, in the sidebar, click **Type**.

   ![Screenshot of an issue sidebar. The "Add issue type" button is highlighted with an orange outline.](/assets/images/help/issues/issue-add-type.png)

1. In the list, select a new issue type.
1. Click **Save**.

{% endif %}

## Further reading

* [AUTOTITLE](/issues/tracking-your-work-with-issues/administering-issues/closing-an-issue)
* [AUTOTITLE](/issues/tracking-your-work-with-issues/administering-issues/deleting-an-issue)
