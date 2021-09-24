When you choose **Allow select actions**, local actions are allowed, and there are additional options for allowing other specific actions:

- **Allow actions created by {% data variables.product.prodname_dotcom %}:** You can allow all actions created by {% data variables.product.prodname_dotcom %} to be used by workflows. Actions created by {% data variables.product.prodname_dotcom %} are located in the `actions` and `github` organization. For more information, see the [`actions`](https://github.com/actions) and [`github`](https://github.com/github) organizations.{% ifversion fpt or ghes > 3.0 %}
- **Allow Marketplace actions by verified creators:** {% ifversion ghes > 3.0 %}This option is available if you have {% data variables.product.prodname_github_connect %} enabled and configured with {% data variables.product.prodname_actions %}. For more information, see "[Enabling automatic access to GitHub.com actions using GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% endif %} You can allow all {% data variables.product.prodname_marketplace %} actions created by verified creators to be used by workflows. When GitHub has verified the creator of the action as a partner organization, the {% octicon "verified" aria-label="The verified badge" %} badge is displayed next to the action in {% data variables.product.prodname_marketplace %}.{% endif %}
- **Allow specified actions:** You can restrict workflows to use actions in specific organizations and repositories.

  To restrict access to specific tags or commit SHAs of an action, use the same `<OWNER>/<REPO>@<TAG OR SHA>` syntax used in the workflow to select the action. For example, `actions/javascript-action@v1.0.1` to select a tag or `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` to select a SHA. For more information, see "[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)."

  You can use the `*` wildcard character to match patterns. For example, to allow all actions in organizations that start with `space-org`, you can specify `space-org*/*`. To add all actions in repositories that start with octocat, you can use `*/octocat*@*`. For more information about using the `*` wildcard, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)." 

  {% ifversion fpt %}
  {% note %}

  **Note:** The **Allow specified actions** option is only available in public repositories with the {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} for organizations, or {% data variables.product.prodname_team %} plan.

  {% endnote %}
  {% endif %}

This procedure demonstrates how to add specific actions to the allow list.
