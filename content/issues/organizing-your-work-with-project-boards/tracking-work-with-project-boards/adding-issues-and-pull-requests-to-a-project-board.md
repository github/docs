---
title: 'Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can add issues and pull requests to a {% data variables.projects.projects_v1_board %} in the form of cards and triage them into columns.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add issues & PRs to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

You can add issue or pull request cards to your {% data variables.projects.projects_v1_board %} by:
- Dragging cards from the **Triage** section in the sidebar.
- Typing the issue or pull request URL in a card.
- Searching for issues or pull requests in the {% data variables.projects.projects_v1_board %} search sidebar.

You can put a maximum of 2,500 cards into each project column. If a column has reached the maximum number of cards, no cards can be moved into that column.

{% note %}

**Note:** You can also add notes to your project board to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_name %}, or to add related information to your {% data variables.projects.projects_v1_board %}. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-notes-to-a-project-board)."

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} When you search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %}, the search automatically scopes to your linked repositories. You can remove these qualifiers to search within all organization repositories. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)."

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add issues and pull requests.
1. In your {% data variables.projects.projects_v1_board %}, click {% octicon "plus" aria-hidden="true" %} **Add cards**.
![Screenshot showing the header of a project. The "Add cards" button is highlighted with an orange outline.](/assets/images/help/projects/add-cards-button.png)
1. Search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %} using search qualifiers such as `is:issue is:open`. For more information on search qualifiers you can use, see "[AUTOTITLE](/search-github/searching-on-github/searching-issues-and-pull-requests)."

   {% tip %}

   **Tips:**
   - You can also add an issue or pull request by typing the URL in a card.
   - If you're working on a specific feature, you can apply a label to each related issue or pull request for that feature, and then easily add cards to your {% data variables.projects.projects_v1_board %} by searching for the label name. For more information, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels)."

   {% endtip %}
1. From the filtered list of issues and pull requests, drag the card you'd like to add to your {% data variables.projects.projects_v1_board %} and drop it in the correct column. Alternatively, you can move cards using keyboard shortcuts. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Tip:** You can drag and drop or use keyboard shortcuts to reorder cards and move them between columns. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %} from the sidebar

1. On the right side of an issue or pull request, click **Projects {% octicon "gear" aria-label="The Gear icon" %}**.

   ![Screenshot showing an issue's sidebar. The "Projects" section header is highlighted with an orange outline.](/assets/images/help/projects-v2/issue-sidebar-projects.png)

1. Click the **Recent**, **Repository**, **User**, or **Organization** tab for the {% data variables.projects.projects_v1_board %} you would like to add to.
1. Type the name of the project in **Filter projects** field.
1. Select one or more {% data variables.projects.projects_v1_boards %} where you want to add the issue or pull request.
1. Click **Awaiting triage**{% octicon "triangle-down" aria-hidden="true" %}, then click the column where you want your issue or pull request. The card will move to the bottom of the {% data variables.projects.projects_v1_board %} column you select.
   ![Screenshot showing the projects section in an issue's sidebar. The awaiting triage option is highlighted with an orange outline.](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Further reading

- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/filtering-cards-on-a-project-board)"
