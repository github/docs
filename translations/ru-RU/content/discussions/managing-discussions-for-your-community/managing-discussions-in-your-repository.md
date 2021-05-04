---
title: Managing discussions in your repository
intro: 'You can categorize, spotlight, transfer, or delete the discussions in a repository.'
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository.
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### About management of discussions

{% data reusables.discussions.about-discussions %} For more information about discussions, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."

Organization owners can choose the permissions required to create a discussion for repositories owned by the organization. For more information, see "[Managing discussion creation for repositories in your organization](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)."

As a discussions maintainer, you can create community resources to encourage discussions that are aligned with the overall project goal and maintain a friendly open forum for collaborators. Creating a code of conduct or contribution guidelines for collaborators to follow will help facilitate a collaborative and productive forum. For more information on creating community resources, see "[Adding a code of conduct to your project](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)," and "[Setting guidelines for repository contributors](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)."

For more information on facilitating a healthy discussion, see "[Moderating comments and conversations](/communities/moderating-comments-and-conversations)."

### Требования

To manage discussions in a repository, discussions must be enabled for the repository. For more information, see "[Enabling or disabling discussions for a repository](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)."

### Changing the category for a discussion

You can categorize discussions to help community members find related discussions. For more information, see "[Managing categories for discussions in your repository](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."

You can also move a discussion to a different category.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pencil" aria-label="The pencil icon" %} **Edit pinned discussion**. !["Pin discussion" in right sidebar for discussion](/assets/images/help/discussions/click-edit-pinned-discussion.png)

### Pinning a discussion

You can pin up to four important discussions above the list of discussions for the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pin" aria-label="The pin icon" %} **Pin discussion**. !["Pin discussion" in right sidebar for discussion](/assets/images/help/discussions/click-pin-discussion.png)
1. Optionally, customize the look of the pinned discussion. ![Customization options for a pinned discussion](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Click **Pin discussion**. !["Pin discussion" button under customization options for pinned discussion](/assets/images/help/discussions/click-pin-discussion-button.png)

### Editing a pinned discussion

Editing a pinned discussion will not change the discussion's category. For more information, see "[Managing categories for discussions in your repository](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pencil" aria-label="The pencil icon" %} **Edit pinned discussion**. !["Pin discussion" in right sidebar for discussion](/assets/images/help/discussions/click-edit-pinned-discussion.png)
1. Customize the look of the pinned discussion. ![Customization options for a pinned discussion](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Click **Pin discussion**. !["Pin discussion" button under customization options for pinned discussion](/assets/images/help/discussions/click-pin-discussion-button.png)

### Unpinning a discussion

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "pin" aria-label="The pin icon" %} **Unpin discussion**. !["Unpin discussion" in right sidebar for discussion](/assets/images/help/discussions/click-unpin-discussion.png)
1. Read the warning, then click **Unpin discussion**. !["Unpin discussion" button beneath warning in modal](/assets/images/help/discussions/click-unpin-discussion-button.png)

### Transferring a discussion

To transfer a discussion, you must have permissions to create discussions in the repository where you want to transfer the discussion.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "arrow-right" aria-label="The right arrow icon" %} **Transfer discussion**. !["Transfer discussion" in right sidebar for discussion](/assets/images/help/discussions/click-transfer-discussion.png)
1. Select the **Choose a repository** drop-down, and click the repository you want to transfer the discussion to. !["Choose a repository" drop-down, "Find a repository" search field, and repository in list](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)
1. Click **Transfer discussion**. !["Transfer discussion" button](/assets/images/help/discussions/click-transfer-discussion-button.png)

### Deleting a discussion

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "trash" aria-label="The trash arrow icon" %} **Delete discussion**. !["Delete discussion" in right sidebar for discussion](/assets/images/help/discussions/click-delete-discussion.png)
1. Read the warning, then click **Delete this discussion**. !["Delete this discussion" button beneath warning in modal](/assets/images/help/discussions/click-delete-this-discussion-button.png)

### Converting issues based on labels

You can convert all issues with the same label to discussions in bulk. Future issues with this label will also automatically convert to the discussion and category you configure.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.project-management.labels %}
1. Next to the label you want to convert to issues, click **Convert issues**.
1. Select the **Choose a category** drop-down menu, and click a category for your discussion.
1. Click **I understand, convert this issue to a discussion**.
