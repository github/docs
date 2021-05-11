---
title: Viewing a project's contributors
intro: 'You can see who contributed commits to a repository{% if currentVersion == "free-pro-team@latest" %} and its dependencies{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph/
  - /articles/viewing-contribution-activity-in-a-repository/
  - /articles/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### About contributors

You can view the top 100 contributors to a repository{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}, including commit co-authors,{% endif %} in the contributors graph. Merge commits and empty commits aren't counted as contributions for this graph.

{% if currentVersion == "free-pro-team@latest" %}
You can also see a list of people who have contributed to the project's Python dependencies. To access this list of community contributors, visit `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
{% endif %}

### Accessing the contributors graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. In the left sidebar, click **Contributors**.
  ![Contributors tab](/assets/images/help/graphs/contributors_tab.png)
4. Optionally, to view contributors during a specific time period, click, then drag until the time period is selected.
  ![Selected time range in the contributors graph](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

### Troubleshooting contributors

If you don't appear in a repository's contributors graph, it may be because:
- You aren't one of the top 100 contributors.
- Your commits haven't been merged into the default branch.
- The email address you used to author the commits isn't connected to your account on {% data variables.product.product_name %}.

{% tip %}

**Tip:** To list all commit contributors in a repository, see "[Repositories](/rest/reference/repos#list-contributors)."

{% endtip %}

If all your commits in the repository are on non-default branches, you won't be in the contributors graph. For example, commits on the `gh-pages` branch aren't included in the graph unless `gh-pages` is the repository's default branch. To have your commits merged into the default branch, you can create a pull request. For more information, see "[About pull requests](/articles/about-pull-requests)."

If the email address you used to author the commits is not connected to your account on {% data variables.product.product_name %}, your commits won't be linked to your account, and you won't appear in the contributors graph. For more information, see "[Setting your commit email address](/articles/setting-your-commit-email-address){% if currentVersion != "github-ae@latest" %}" and "[Adding an email address to your {% data variables.product.product_name %} account](/articles/adding-an-email-address-to-your-github-account){% endif %}."
