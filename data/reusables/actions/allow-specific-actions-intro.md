<span name="allowing-select-actions-to-run"></span>
<span name="allowing-specific-actions-to-run"></span>

### Allowing select actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} to run

When you choose {% data reusables.actions.policy-label-for-select-actions-workflows %}, local actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} are allowed, and there are additional options for allowing other specific actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}:

{% data reusables.repositories.settings-permissions-org-policy-note %}

- **Allow actions created by {% data variables.product.prodname_dotcom %}:** You can allow all actions created by {% data variables.product.prodname_dotcom %} to be used by workflows. Actions created by {% data variables.product.prodname_dotcom %} are located in the `actions` and `github` organizations. For more information, see the [`actions`](https://github.com/actions) and [`github`](https://github.com/github) organizations.
- **Allow Marketplace actions by verified creators:** {% ifversion ghes %}This option is available if you have {% data variables.product.prodname_github_connect %} enabled and configured with {% data variables.product.prodname_actions %}. For more information, see "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% endif %} You can allow all {% data variables.product.prodname_marketplace %} actions created by verified creators to be used by workflows. When GitHub has verified the creator of the action as a partner organization, the {% octicon "verified" aria-label="The verified badge" %} badge is displayed next to the action in {% data variables.product.prodname_marketplace %}.
- **Allow specified actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}:** You can restrict workflows to use actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} in specific organizations and repositories. Specified actions cannot be set to more than 1000.

  To restrict access to specific tags or commit SHAs of an action{% ifversion actions-workflow-policy %} or reusable workflow{% endif %}, use the same syntax used in the workflow to select the action{% ifversion actions-workflow-policy %} or reusable workflow{% endif %}.

  - For an action, the syntax is `OWNER/REPOSITORY@TAG-OR-SHA`. For example, use `actions/javascript-action@v1.0.1` to select a tag or `actions/javascript-action@a824008085750b8e136effc585c3cd6082bd575f` to select a SHA. For more information, see "[AUTOTITLE](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)."
  {%- ifversion actions-workflow-policy %}
  - For a reusable workflow, the syntax is `OWNER/REPOSITORY/PATH/FILENAME@TAG-OR-SHA`. For example, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. For more information, see "[AUTOTITLE](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)."
  {%- endif %}

  You can use the `*` wildcard character to match patterns. For example, to allow all actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} in organizations that start with `space-org`, you can specify `space-org*/*`. To allow all actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} in repositories that start with octocat, you can use `*/octocat**@*`. For more information about using the `*` wildcard, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."

  {% ifversion fpt or ghec %}
  {% note %}

  **Note:** For {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} for organizations, or {% data variables.product.prodname_team %} plans, the **Allow specified actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}** option is only available in public repositories.

  {% endnote %}
  {% endif %}

This procedure demonstrates how to add specific actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} to the allow list.
