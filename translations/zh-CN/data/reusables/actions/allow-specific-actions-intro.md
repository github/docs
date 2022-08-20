<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>

### 允许所选操作{% ifversion actions-workflow-policy %} 和可重启工作流程{% endif %} 运行

选择 {% data reusables.actions.policy-label-for-select-actions-workflows %} 时，允许本地操作{% ifversion actions-workflow-policy %} 和可重用工作流程{% endif %} ，并且还有其他选项可用于允许其他特定操作{% ifversion actions-workflow-policy %} 和可重用工作流程{% endif %}：

- **允许 {% data variables.product.prodname_dotcom %} 创建的操作：** 您可以允许 {% data variables.product.prodname_dotcom %} 创建的所有操作用于工作流程。 {% data variables.product.prodname_dotcom %} 创建的操作位于 `actions` 和 `github` 组织中。 更多信息请参阅 [`actions`](https://github.com/actions) 和 [`github`](https://github.com/github) 组织。
- **允许已验证的创建者执行市场操作：** {% ifversion ghes or ghae %}此选项在您启用 {% data variables.product.prodname_github_connect %} 并配置了 {% data variables.product.prodname_actions %} 时可用。 更多信息请参阅“[使用 GitHub Connect 启用对 GitHub.com 操作的自动访问](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。{% endif %} 您可以允许工作流程使用由经过验证的创建者创建的所有 {% data variables.product.prodname_marketplace %} 操作。 如果 GitHub 验证该操作的创建者为合作伙伴组织，{% octicon "verified" aria-label="The verified badge" %} 徽章将显示在 {% data variables.product.prodname_marketplace %} 中的操作旁边。
- **允许指定的操作{% ifversion actions-workflow-policy %} 和可重用工作流程{% endif %}：** 可以将工作流程限制为使用特定组织和存储库中的操作{% ifversion actions-workflow-policy %} 和可重用工作流程{% endif %}。

  要限制对特定标记的访问或者操作{% ifversion actions-workflow-policy %} 或可重用工作流程{% endif %} 的提交 SHA，请使用工作流中使用的相同语法来选择操作{% ifversion actions-workflow-policy %} 或可重用工作流程{% endif %}。

  - 对于操作，语法为 `<OWNER>/<REPO>@<TAG OR SHA>`。 例如，使用 `actions/javascript-action@v1.0.1` 选择标记，或使用 `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` 选择 SHA。 更多信息请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)”。
  {%- ifversion actions-workflow-policy %}
  - 对于可重用的工作流程，语法为 `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`。 例如，`octo-org/another-repo/.github/workflows/workflow.yml@v1`。 更多信息请参阅“[重用工作流程](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)”。
  {%- endif %}

  您可以使用 `*` 通配符来匹配模式。 例如，要允许以 `space-org` 开头的组织中的所有操作{% ifversion actions-workflow-policy %} 和可重用工作流程{% endif %}，可以指定 `space-org*/*`。 要允许以 octocat 开头的存储库中的所有操作{% ifversion actions-workflow-policy %} 和可重用工作流程{% endif %} ，可以使用 `*/octocat**@*`。 有关使用 `*` 通配符的更多信息，请参阅“[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

  {% ifversion fpt or ghec %}
  {% note %}

  **注：** **允许指定的操作{% ifversion actions-workflow-policy %} 和可重用工作流程{% endif %}**选项仅可用于具有 {% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、组织的 {% data variables.product.prodname_free_team %} 或 {% data variables.product.prodname_team %} 计划的公共仓库。

  {% endnote %}
  {% endif %}

此过程演示如何将特定操作{% ifversion actions-workflow-policy %} 和可重用工作流程{% endif %} 添加到允许列表中。
