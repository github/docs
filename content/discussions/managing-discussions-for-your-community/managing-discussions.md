---
title: Managing discussions
intro: 'You can categorize, spotlight, transfer, or delete the discussions.'
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Manage discussions
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
---


## About management of discussions

{% data reusables.discussions.about-discussions %} For more information about discussions, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."

Organization owners can choose the permissions required to create a discussion in repositories owned by the organization. Similarly, to choose the permissions required to create an organization discussion, organization owners can change the permissions required in the source repository. For more information, see "[Managing discussion creation for repositories in your organization](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)."

As a discussions maintainer, you can create community resources to encourage discussions that are aligned with the overall project goal and maintain a friendly open forum for collaborators. Creating a code of conduct or contribution guidelines for collaborators to follow will help facilitate a collaborative and productive forum. For more information on creating community resources, see "[Adding a code of conduct to your project](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)," and "[Setting guidelines for repository contributors](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)."

When a discussion yields an idea or bug that is ready to be worked on, you can create a new issue from a discussion. For more information, see "[Creating an issue](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion)."

For more information on facilitating a healthy discussion, see "[Moderating comments and conversations](/communities/moderating-comments-and-conversations)."

{% data reusables.discussions.you-can-label-discussions %}

## Prerequisites

To manage discussions in a repository, {% data variables.product.prodname_discussions %} must be enabled for the repository. For more information, see "[Enabling or disabling {% data variables.product.prodname_discussions %} for a repository](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)."

To manage discussions in an organization, {% data variables.product.prodname_discussions %} must be enabled for the organization. For more information, see "[Enabling or disabling {% data variables.product.prodname_discussions %} for an organization](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)."

## Changing the category for a discussion

You can categorize discussions to help community members find related discussions. For more information, see "[Managing categories for discussions](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

You can also move a discussion to a different category. It's not possible to move a discussion to or from the polls category.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, to the right of "Category", click {% octicon "gear" aria-label="The gear icon" %}.
  !["Category" with gear icon](/assets/images/help/discussions/category-in-sidebar.png)
1. Click a category.
  !["Change category" drop-down menu](/assets/images/help/discussions/change-category-drop-down.png)

## Pinning a discussion

You can pin up to four important discussions above the list of discussions for the repository or organization.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pin" aria-label="The pin icon" %} **Pin discussion**.
  !["Pin discussion" in right sidebar for discussion](/assets/images/help/discussions/click-pin-discussion.png)
1. Optionally, customize the look of the pinned discussion.
  ![Customization options for a pinned discussion](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Click **Pin discussion**.
  !["Pin discussion" button under customization options for pinned discussion](/assets/images/help/discussions/click-pin-discussion-button.png)

## Editing a pinned discussion

Editing a pinned discussion will not change the discussion's category. For more information, see "[Managing categories for discussions](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pencil" aria-label="The pencil icon" %} **Edit pinned discussion**.
  !["Edit pinned discussion" in right sidebar for discussion](/assets/images/help/discussions/click-edit-pinned-discussion.png)
1. Customize the look of the pinned discussion.
  ![Customization options for a pinned discussion](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Click **Pin discussion**.
  !["Pin discussion" button under customization options for pinned discussion](/assets/images/help/discussions/click-pin-discussion-button.png)

## Unpinning a discussion

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pin" aria-label="The pin icon" %} **Unpin discussion**.
  !["Unpin discussion" in right sidebar for discussion](/assets/images/help/discussions/click-unpin-discussion.png)
1. Read the warning, then click **Unpin discussion**.
  !["Unpin discussion" button beneath warning in modal](/assets/images/help/discussions/click-unpin-discussion-button.png)

## Transferring a discussion

To transfer a discussion, you must have permissions to create discussions in the repository where you want to transfer the discussion. If you want to transfer a discussion to an organization, you must have permissions to create discussions in the source repository for the organization's discussions. You can only transfer discussions between repositories owned by the same user or organization account. You can't transfer a discussion from a private repository to a public repository.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "arrow-right" aria-label="The right arrow icon" %} **Transfer discussion**.
  !["Transfer discussion" in right sidebar for discussion](/assets/images/help/discussions/click-transfer-discussion.png)
1. Select the **Choose a repository** drop-down, and click the repository you want to transfer the discussion to. If you want to transfer a discussion to an organization, choose the source repository for the organization's discussions.
  !["Choose a repository" drop-down, "Find a repository" search field, and repository in list](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)
1. Click **Transfer discussion**.
  !["Transfer discussion" button](/assets/images/help/discussions/click-transfer-discussion-button.png)

## Deleting a discussion

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "trash" aria-label="The trash arrow icon" %} **Delete discussion**.
  !["Delete discussion" in right sidebar for discussion](/assets/images/help/discussions/click-delete-discussion.png)
1. Read the warning, then click **Delete this discussion**.
  !["Delete this discussion" button beneath warning in modal](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## Converting issues based on labels

You can convert all issues with the same label to discussions in bulk. Future issues with this label will also automatically convert to the discussion and category you configure.

1. On {% data variables.product.product_location %}, navigate to the main page of the repository or, for organization discussions, the source repository.
{% data reusables.repositories.sidebar-issues %}
{% data reusables.project-management.labels %}
1. Next to the label you want to convert to issues, click **Convert issues**.
1. Select the **Choose a category** drop-down menu, and click a category for your discussion.
1. Click **I understand, convert this issue to a discussion**.
