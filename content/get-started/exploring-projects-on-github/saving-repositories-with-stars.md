---
title: Saving repositories with stars
intro: 'You can star repositories and topics to keep track of projects you find interesting{% ifversion fpt or ghec %} and discover related content in your news feed{% endif %}.'
redirect_from:
  - /articles/stars
  - /articles/about-stars
  - /articles/browsing-friends-stars
  - /articles/managing-your-stars
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
  - /github/getting-started-with-github/exploring-projects-on-github/saving-repositories-with-stars
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Save repos with stars
---
You can search, sort, and filter your starred repositories and topics on your {% data variables.explore.your_stars_page %}.

## About stars

Starring makes it easy to find a repository or topic again later. You can see all the repositories and topics you have starred by going to your {% data variables.explore.your_stars_page %}.

{% ifversion fpt or ghec %}
You can star repositories and topics to discover similar projects on {% data variables.product.product_name %}. When you star repositories or topics, {% data variables.product.product_name %} may recommend related content on your personal dashboard. For more information, see "[AUTOTITLE](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)" and "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)."
{% endif %}

Starring a repository also shows appreciation to the repository maintainer for their work. Many of {% data variables.product.prodname_dotcom %}'s repository rankings depend on the number of stars a repository has. In addition, [Explore {% data variables.product.prodname_dotcom %}](https://github.com/explore) shows popular repositories based on the number of stars they have.

## Starring a repository

Starring a repository is a simple two-step process.

{% data reusables.repositories.navigate-to-repo %}
1. In the top-right corner of the page, click **Star**.
![Screenshot of the repository bar with the "Star" option highlighted with a dark orange outline.](/assets/images/help/stars/starring-a-repository.png)
1. Optionally, to unstar a previously starred repository, click **Starred**. This will remove the repository from your starred list.
![Screenshot of the repository bar. The "Starred" button is highlighted with a dark orange outline.](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## Viewing who has starred a repository

You can view everyone who has starred a public repository or a private repository you have access to.

To view everyone who has starred a repository, add `/stargazers` to the end of the URL of a repository. For example, to view stargazers for the github/docs repository, visit https://github.com/github/docs/stargazers.

## Organizing starred repositories with lists

{% note %}

**Note:** Lists are currently in public beta and subject to change.

{% endnote %}

Curate repositories that you've starred with public lists. You can create public lists that appear on your stars page at `https://github.com/USERNAME?tab=stars`.

![Screenshot the "Stars" tab of Octocat's profile. Two named lists of stars are displayed.](/assets/images/help/stars/lists-overview-on-stars-page.png)

If you add a private repository to a list, then the private repository will only appear in your list for people with `read` access to the repository.

You can add a repository to an existing or new list wherever you see a repository's **Star** or **Starred** dropdown menu, whether on a repository page or in a list of starred repositories.

![Screenshot of a repository page. The "Star" dropdown menu is expanded, with a list options highlighted with a dark orange outline.](/assets/images/help/stars/stars-dropdown-on-repo.png)

### Creating a list

{% data reusables.stars.stars-page-navigation %}
1. Next to "Lists", click **Create list**.
1. Enter a name and description for your list and click **Create**.

### Adding a repository to a list

{% data reusables.stars.stars-page-navigation %}
1. Find the repository you want to add to your list by typing it into the search bar.
1. Next to the repository you want to add, use the **Starred** dropdown menu and select your list.
   ![Screenshot of a list of repositories on the "Stars" page. Next to a repository, under the "Starred" button, a dropdown menu is outlined in orange.](/assets/images/help/stars/add-repo-to-list.png)

### Removing a repository from your list

{% data reusables.stars.stars-page-navigation %}
1. Select your list.
1. Next to the repository you want to remove, use the **Starred** drop-down menu and deselect your list.
   ![Screenshot of a list of repositories on the "Stars" page. Next to a repository, under the "Starred" button, a dropdown menu is outlined in orange.](/assets/images/help/stars/add-repo-to-list.png)

### Editing a list name or description

{% data reusables.stars.stars-page-navigation %}
1. Select the list you want to edit.
1. Click **Edit list**.
1. Update the name or description and click **Save list**.

### Deleting a list

{% data reusables.stars.stars-page-navigation %}
1. Select the list you want to delete.
1. Click **Delete list**.
1. To confirm, click **Delete**.

{% endif %}

## Searching starred repositories and topics

You can use the search bar on your {% data variables.explore.your_stars_page %} to quickly find repositories and topics you've starred.

{% data reusables.stars.stars-page-navigation %}
1. Use the search bar to find your starred repositories or topics by their name.

The search bar only searches based on the name of a repository or topic, and not on any other qualifiers (such as the size of the repository or when it was last updated).

## Sorting and filtering stars on your stars page

You can use sorting or filtering to customize how you see starred repositories and topics on your stars page.

{% data reusables.stars.stars-page-navigation %}
1. To sort stars, select the **Sort by:** dropdown menu, then select **Recently starred**, **Recently active**, or **Most stars**.
1. To filter your list of stars based on their language, click on the desired language under the **Language** dropdown menu.
1. To filter your list of stars based on repository type, click on the desired option under the **Type:** dropdown menu.

## Further reading

- "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)"
