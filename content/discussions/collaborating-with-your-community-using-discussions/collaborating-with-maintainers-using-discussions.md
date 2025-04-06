---
title: Collaborating with maintainers using discussions
shortTitle: Collaborating with maintainers
intro: 'You can contribute to the goals, plans, health, and community for a project on {% data variables.product.product_name %} by communicating with the maintainers of the project in a discussion.'
permissions: 'People with read access to a repository can start and participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can start and participate in discussions and polls in the organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
---


## About collaboration with maintainers using {% data variables.product.prodname_discussions %}

{% data reusables.discussions.about-discussions %} If you use or contribute to a project, you can start a discussion to make suggestions and engage with maintainers and community members about your plans, questions, ideas, and feedback. For more information, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."

{% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.about-announcement-format %}

Repository administrators and project maintainers can delete a discussion in that repository. Similarly, administrators and maintainers of the source repository for an organization's discussions can delete a discussion in that organization. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)."

{% data reusables.discussions.github-recognizes-members %} {%- ifversion fpt %} These members appear in a list of the most helpful contributors to the project's discussions, if their privacy settings allow. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/setting-your-profile-to-private)."{%- endif %}{%- ifversion ghes or ghec %} These members appear in a list of the most helpful contributors to the project's discussions.{%- endif %}

As your project grows, you can grant higher access permissions to active members of your community. For more information, see "[AUTOTITLE](/discussions/guides/granting-higher-permissions-to-top-contributors)."

![Screenshot of the "Discussions" page in a repository. The "Most helpful" section is outlined in dark orange.](/assets/images/help/discussions/most-helpful.png)

Community members can upvote discussions and top-level comments inside discussions to communicate with maintainers about ideas that matter to them. Project maintainers can then sort discussions and comments based on upvotes to gain insight into what community members value.

For more information about participation in discussions, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)."

## Prerequisites

To collaborate with maintainers in repository discussions, a repository administrator or project maintainer must enable {% data variables.product.prodname_discussions %} for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)."

To collaborate with maintainers in organization discussions, {% data variables.product.prodname_discussions %} must be enabled for the organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)."

## Starting a discussion

{% data reusables.discussions.starting-a-discussion %}

## Starting a poll

{% data reusables.discussions.starting-a-poll %}

## Filtering the list of discussions

You can search for discussions and filter the list of discussions in a repository or organization. For more information, see "[AUTOTITLE](/search-github/searching-on-github/searching-discussions)."

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. In the **Search all discussions** field, type a search query. Optionally, to the right of the search field, click a button to further filter the results.

   ![Screenshot of the search bar and buttons for filtering discussions.](/assets/images/help/discussions/search-and-filter-controls.png)

1. In the list of discussions, click the discussion you want to view.

## Sorting the list of discussions

You can choose how to sort the list of discussions.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. To the right of the **Search all discussions** field, select the **Sort by** dropdown menu, and click a time period.

   ![Screenshot of a row of buttons for sorting discussions. A button labeled "Sort by: Latest activity" is highlighted with an orange outline.](/assets/images/help/discussions/sort-discussions-buttons.png)

    * Sort by **Latest activity** to display the discussions with the most recent activity at the top of the list.
    * Sort by **Date created** to display the discussions that were created most recently at the top of the list.
    * Sort by **Top** to display the discussions with the most upvotes at the top of the list. You can limit the list to only display discussions from a specific time period.

## Sorting top-level comments in discussions

You can choose how to sort top-level comments in discussions. Comment threads do not impact the order comments are sorted in.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. Under the main discussion post, select **Oldest**, **Newest**, or **Top**.

   ![Screenshot of a discussion. The buttons for sorting comments in discussions are outlined in dark orange.](/assets/images/help/discussions/sort-comments-buttons.png)

    * Sort by **Oldest** to display the oldest top-level comments first.
    * Sort by **Newest** to display the newest top-level comments first.
    * Sort by **Top** to display the most upvoted top-level comments first.

## Converting an issue to a discussion

{% data reusables.discussions.you-can-convert-an-issue %} For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)."

## Further reading

* "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)"
{%- ifversion fpt or ghec %}
* "[AUTOTITLE](/communities/maintaining-your-safety-on-github)"
{%- endif %}
