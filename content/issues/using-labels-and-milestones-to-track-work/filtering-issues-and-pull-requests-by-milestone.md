---
title: Filtering issues and pull requests by milestone
intro: 'Issues and pull requests can be filtered based on the milestone they''re associated with. Once you''ve [associated an issue or pull request with a milestone](/articles/associating-milestones-with-issues-and-pull-requests), you can find items based on their milestones. Within a milestone, you can prioritize issues and pull requests.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
---
{% tip %}

**Tips:**

- If you'd rather filter issues and pull requests using the Search bar, you can use the milestone search syntax. For a milestone called My Milestone, the search syntax would be: `milestone:"My Milestone"`.
- To clear your filter selection, click **Clear current search query, filters, and sorts**.
- You can also filter issues or pull requests using the {% data variables.product.prodname_cli %}. For more information, see "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" or "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
1. Select **Milestones** to see a list of all available milestones for the repository.

   ![Screenshot of the list of issues for a repository. Above the list, a button, labeled with a signpost icon and "Milestones," is outlined in dark orange.](/assets/images/help/issues/issues-milestone-button.png)
1. Select the milestone you're interested in from the list. You can view relevant information for the milestone, including all issues and pull requests associated with it, from the milestone page. For more information, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/about-milestones)."

## Further reading

- "[AUTOTITLE](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/filtering-cards-on-a-project-board)"
