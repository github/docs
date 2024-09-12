---
title: Managing discussions
intro: 'You can categorize, spotlight, transfer, or delete the discussions.'
permissions: Repository administrators and people with {% ifversion discussions-moderators-control-who-can-report %}triage{% else %}write{% endif %} or greater access to a repository can manage discussions in the repository. Repository administrators and people with {% ifversion discussions-moderators-control-who-can-report %}triage{% else %}write{% endif %} or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage discussions
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
---


## About management of discussions

{% data reusables.discussions.about-discussions %} For more information about discussions, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."

Organization owners can choose the permissions required to create a discussion in repositories owned by the organization. Similarly, to choose the permissions required to create an organization discussion, organization owners can change the permissions required in the source repository. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)."

As a discussions maintainer, you can create community resources to encourage discussions that are aligned with the overall project goal and maintain a friendly open forum for collaborators. Creating{% ifversion fpt or ghec %} a code of conduct or{% endif %} contribution guidelines for collaborators to follow will help facilitate a collaborative and productive forum. For more information on creating community resources, see{% ifversion fpt or ghec %} "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)," and{% endif %} "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)."

When a discussion yields an idea or bug that is ready to be worked on, you can create a new issue from a discussion. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion)."

You can pin a discussion to the top of the list of discussions for the repository or organization. {% ifversion discussions-category-specific-pins %}You can also pin a discussion to a specific category.{% endif %} For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)."

For more information on facilitating a healthy discussion, see "[AUTOTITLE](/communities/moderating-comments-and-conversations)."

{% data reusables.discussions.you-can-label-discussions %}

## Prerequisites

To manage discussions in a repository, {% data variables.product.prodname_discussions %} must be enabled for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)."

To manage discussions in an organization, {% data variables.product.prodname_discussions %} must be enabled for the organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)."

## Changing the category for a discussion

You can categorize discussions to help community members find related discussions. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

You can also move a discussion to a different category. It's not possible to move a discussion to or from the polls category.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, to the right of "Category", click {% octicon "gear" aria-label="The gear icon" %}.
1. Click a category.

## Pinning a discussion

{% ifversion discussions-category-specific-pins %}
You can pin a discussion above the list of discussions for the repository or organization. You can also pin a discussion to a specific category. The globally pinned discussions will be shown in addition to the discussions pinned to a specific category.

This is what it looks like when you have a globally pinned discussion and a discussion pinned to the Ideas category.

![Screenshot of a globally pinned discussion and a discussion pinned to the Ideas category.](/assets/images/help/discussions/overview-pinned-discussions.png)

### Pinning a discussion globally

{% endif %}

You can pin up to four important discussions above the list of discussions for the repository or organization.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pin" aria-hidden="true" %} **Pin discussion**.
{% ifversion discussions-category-specific-pins %}

   ![Screenshot of the right sidebar of a discussion. The "Pin discussion" option is highlighted with an orange outline.](/assets/images/help/discussions/click-pin-discussion-with-category-pins.png){% else %}

   ![Screenshot of the right sidebar of a discussion. The "Pin discussion" option is highlighted with an orange outline.](/assets/images/help/discussions/click-pin-discussion.png){% endif %}

1. Optionally, customize the look of the pinned discussion.
1. Click **Pin discussion**.

{% ifversion discussions-category-specific-pins %}

### Pinning a discussion to a category

You can pin up to four important discussions above the list of discussions in a specific category.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pin" aria-hidden="true" %} **Pin discussion to CATEGORY**.

   ![Screenshot of the right sidebar of a discussion. The "Pin discussion to Q&A" option is outlined in dark orange.](/assets/images/help/discussions/pin-discussion-to-category.png)

1. To confirm, click **Pin to CATEGORY**.
{% endif %}

## Editing a pinned discussion

Editing a pinned discussion will not change the discussion's category. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pencil" aria-hidden="true" %} **Edit pinned discussion**. {% ifversion discussions-category-specific-pins %}

   ![Screenshot of the right sidebar of a discussion. The "Edit pinned discussion" option is outlined in dark orange.](/assets/images/help/discussions/edit-pinned-discussion-with-category-pins.png){% endif %}
1. Customize the look of the pinned discussion.
1. Click **Pin discussion**.

## Unpinning a discussion

{% ifversion discussions-category-specific-pins %}

You can unpin a discussion from the list of discussions for the repository or organization, or from the list of discussions in a specific category.

### Unpinning a globally pinned discussion

You can unpin a globally pinned discussion. This will not delete the discussion, but the discussion will no longer be displayed above the list of discussions.
{% endif %}

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pin" aria-hidden="true" %} **Unpin discussion**.

   ![Screenshot of the right sidebar of a discussion. The "Unpin discussion" option is highlighted with an orange outline.](/assets/images/help/discussions/click-unpin-discussion.png)

1. Read the warning, then click **Unpin discussion**.

{% ifversion discussions-category-specific-pins %}

### Unpinning a discussion from a category

You can unpin a discussion pinned to a specific category. This will not delete the discussion, but the discussion will no longer be displayed at the top of the category.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pin" aria-hidden="true" %} **Unpin discussion from this category**.

   ![Screenshot of the right sidebar of a discussion. The "Unpin discussion from this category" option is outlined in dark orange.](/assets/images/help/discussions/unpin-discussion-from-category.png)

1. Read the warning, then click **Unpin from this category**.
{% endif %}

## Transferring a discussion

To transfer a discussion, you must have permissions to create discussions in the repository where you want to transfer the discussion. If you want to transfer a discussion to an organization, you must have permissions to create discussions in the source repository for the organization's discussions. You can only transfer discussions between repositories owned by the same user or organization account. You can't transfer a discussion from a private{% ifversion ghec or ghes %} or internal{% endif %} repository to a public repository. Additionally, you can't transfer discussions if they are announcements. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#creating-a-category)."

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "arrow-right" aria-hidden="true" %} {% ifversion discussions-category-specific-pins %}**Transfer this discussion**{% else %}**Transfer discussion**{% endif %}.
{% ifversion discussions-category-specific-pins %}

   ![Screenshot of the right sidebar of a discussion. The "Transfer this discussion" option is outlined in dark orange.](/assets/images/help/discussions/transfer-discussion-with-category-pin.png) {% else %}

   ![Screenshot of the right sidebar of a discussion. The "Transfer this discussion" option is outlined in dark orange.](/assets/images/help/discussions/click-transfer-discussion.png){% endif %}

1. Select the repository you want to transfer the discussion to. You can also search for repositories. If you want to transfer a discussion to an organization, choose the source repository for the organization's discussions.
1. Click **Transfer discussion**.

## Deleting a discussion

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "trash" aria-hidden="true" %} **Delete discussion**.
{% ifversion discussions-category-specific-pins %}

   ![Screenshot of the right sidebar of a discussion. The "Delete discussion" option is outlined in dark orange.](/assets/images/help/discussions/delete-discussion-with-category-pins.png){% endif %}

1. Read the warning, then click **Delete this discussion**.

{% ifversion discussions-closable %}

## Closing a discussion

{% data reusables.discussions.closing-discussions %}

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. At the bottom of the discussion, below the comment box, click **Close discussion**.
1. Optionally, to change the reason for closing the discussion, select the {% octicon "triangle-down" aria-label="The down triangle octicon" %} dropdown next to "Close discussion" and click a reason.

{% endif %}

{% ifversion converting-issues-to-discussions %}

## Converting issues based on labels

You can convert all issues with the same label to discussions in bulk. Future issues with this label will also automatically convert to the discussion and category you configure.

1. Navigate to the main page of the repository or, for organization discussions, the source repository.
{% data reusables.repositories.sidebar-issues %}
{% data reusables.project-management.labels %}
1. Next to the label you want to convert to issues, click **Convert issues**.
1. Select the **Choose a category** drop-down menu, and click a category for your discussion.
1. Click **I understand, convert this issue to a discussion**.
{% endif %}
