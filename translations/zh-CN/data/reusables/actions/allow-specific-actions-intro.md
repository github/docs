<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>

### Allowing select actions{% if actions-workflow-policy %} and reusable workflows{% endif %} to run

When you choose {% data reusables.actions.policy-label-for-select-actions-workflows %}, local actions{% if actions-workflow-policy %} and reusable workflows{% endif %} are allowed, and there are additional options for allowing other specific actions{% if actions-workflow-policy %} and reusable workflows{% endif %}:

- **允许 {% data variables.product.prodname_dotcom %} 创建的操作：** 您可以允许 {% data variables.product.prodname_dotcom %} 创建的所有操作用于工作流程。 {% data variables.product.prodname_dotcom %} 创建的操作位于 `actions` 和 `github` 组织中。 更多信息请参阅 [`actions`](https://github.com/actions) 和 [`github`](https://github.com/github) 组织。{% ifversion fpt or ghes or ghae-issue-5094 or ghec %}
- **Allow Marketplace actions by verified creators:** {% ifversion ghes or ghae-issue-5094 %}This option is available if you have {% data variables.product.prodname_github_connect %} enabled and configured with {% data variables.product.prodname_actions %}. For more information, see "[Enabling automatic access to GitHub.com actions using GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% endif %} You can allow all {% data variables.product.prodname_marketplace %} actions created by verified creators to be used by workflows. 如果 GitHub 验证该操作的创建者为合作伙伴组织，{% octicon "verified" aria-label="The verified badge" %} 徽章将显示在 {% data variables.product.prodname_marketplace %} 中的操作旁边。{% endif %}
- **Allow specified actions{% if actions-workflow-policy %} and reusable workflows{% endif %}:** You can restrict workflows to use actions{% if actions-workflow-policy %} and reusable workflows{% endif %} in specific organizations and repositories.

  To restrict access to specific tags or commit SHAs of an action{% if actions-workflow-policy %} or reusable workflow{% endif %}, use the same syntax used in the workflow to select the action{% if actions-workflow-policy %} or reusable workflow{% endif %}.

  - For an action, the syntax is `<OWNER>/<REPO>@<TAG OR SHA>`. For example, use `actions/javascript-action@v1.0.1` to select a tag or `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` to select a SHA. 更多信息请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)”。
  {%- if actions-workflow-policy %}
  - For a reusable workflow, the syntax is `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. For example, `octo-org/another-repo/.github/workflows/workflow.yml@v1`. 更多信息请参阅“[重用工作流程](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)”。
  {%- endif %}

  您可以使用 `*` 通配符来匹配模式。 For example, to allow all actions{% if actions-workflow-policy %} and reusable workflows{% endif %} in organizations that start with `space-org`, you can specify `space-org*/*`. To allow all actions{% if actions-workflow-policy %} and reusable workflows{% endif %} in repositories that start with octocat, you can use `*/octocat**@*`. 有关使用 `*` 通配符的更多信息，请参阅“[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

  {% ifversion fpt or ghec %}
  {% note %}

  **Note:** The **Allow specified actions{% if actions-workflow-policy %} and reusable workflows{% endif %}** option is only available in public repositories with the {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} for organizations, or {% data variables.product.prodname_team %} plan.

  {% endnote %}
  {% endif %}

This procedure demonstrates how to add specific actions{% if actions-workflow-policy %} and reusable workflows{% endif %} to the allow list.
