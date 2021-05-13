---
title: Filtering issues and pull requests by milestone
intro: 'Issues and pull requests can be filtered based on the milestone they''re associated with. Once you''ve [associated an issue or pull request with a milestone](/articles/associating-milestones-with-issues-and-pull-requests), you can find items based on their milestones. Within a milestone, you can prioritize issues and pull requests.'
redirect_from:
  - /articles/filtering-issues-and-pull-requests-by-milestone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% tip %}

**Tips:**

- If you'd rather filter issues and pull requests using the Search bar, you can use the milestone search syntax. For a milestone called My Milestone, the search syntax would be: `milestone:"My Milestone"`.
- To clear your filter selection, click **Clear current search query, filters, and sorts**.
-  You can also filter issues or pull requests using the {% data variables.product.prodname_cli %}. For more information, see "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" or "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Select **Milestones** to see a list of all available milestones for the repository.
  ![Milestones button](/assets/images/help/issues/issues_milestone_button.png)
4. Select the milestone you're interested in from the list. You can view relevant information for the milestone, including all issues and pull requests associated with it, from the milestone page. For more information, see "[About milestones](/articles/about-milestones)."

### Further reading

- "[Filtering issues and pull requests](/articles/filtering-issues-and-pull-requests)"
- "[Sorting issues and pull requests](/articles/sorting-issues-and-pull-requests)"
- "[Using search to filter issues and pull requests](/articles/using-search-to-filter-issues-and-pull-requests)"
- "[Sharing filters](/articles/sharing-filters)"
- "[Filtering cards on a project board](/articles/filtering-cards-on-a-project-board)"
