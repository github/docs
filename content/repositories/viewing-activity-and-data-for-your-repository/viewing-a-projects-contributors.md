---
title: Viewing a project's contributors
intro: 'You can see who contributed commits to a repository{% ifversion fpt or ghec %} and its dependencies{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph
  - /articles/viewing-contribution-activity-in-a-repository
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View project contributors
---
## About contributors

{% data reusables.repositories.repo-insights-commit-limit %}

You can view the top 100 contributors to a repository{% ifversion ghes %}, including commit co-authors,{% endif %} in the contributors graph. Merge commits and empty commits aren't counted as contributions for this graph.

{% ifversion fpt or ghec %}
You can also see a list of people who have contributed to the project's Python dependencies. To access this list of community contributors, visit `https://github.com/REPO-OWNER/REPO-NAME/graphs/contributors`.
{% endif %}

## Accessing the contributors graph

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
1. In the left sidebar, click **Contributors**.
{%- ifversion accessible-charts %}
1. Optionally, to view contributors during a specific time period, to the right of "Contributors," click **Period: All**. Then select a time period.
{% data reusables.repositories.repositories-insights-graphs-download-steps %}
{%- else %}
1. Optionally, to view contributors during a specific time period, click, then drag until the time period is selected. The contributors graph sums weekly commit numbers onto each Sunday, so your time period must include a Sunday.
{% endif %}

## Troubleshooting contributors

If you don't appear in a repository's contributors graph, it may be because:
* You aren't one of the top 100 contributors.
* Your commits haven't been merged into the default branch.
* The email address you used to author the commits isn't connected to your account on {% data variables.product.product_name %}.

{% tip %}

**Tip:** To list all commit contributors in a repository, see "[AUTOTITLE](/rest/repos/repos#list-repository-contributors)."

{% endtip %}

If all your commits in the repository are on non-default branches, you won't be in the contributors graph. For example, commits on the `gh-pages` branch aren't included in the graph unless `gh-pages` is the repository's default branch. To have your commits merged into the default branch, you can create a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

If the email address you used to author the commits is not connected to your account on {% data variables.product.product_name %}, your commits won't be linked to your account, and you won't appear in the contributors graph. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)" and "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."
