选择 **Allow select actions（允许选择操作）**时，您需要选择其他选项才可配置允许的操作：

- **允许 {% data variables.product.prodname_dotcom %} 创建的操作：** 您可以允许 {% data variables.product.prodname_dotcom %} 创建的所有操作用于工作流程。 {% data variables.product.prodname_dotcom %} 创建的操作位于 `actions` 和 `github` 组织中。 更多信息请参阅 [`actions`](https://github.com/actions) 和 [`github`](https://github.com/github) 组织。
- **Allow Marketplace actions by verified creators（允许已验证的创作者的 Marketplace 操作）：**您可以允许已验证的创作者创建的所有 {% data variables.product.prodname_marketplace %} 操作用于工作流程。 如果 GitHub 验证该操作的创建者为合作伙伴组织，{% octicon "verified" aria-label="The verified badge" %} 徽章将显示在 {% data variables.product.prodname_marketplace %} 中的操作旁边。
- **Allow specified actions（允许指定的操作）：**您可以限制工作流程使用特定组织和仓库中的操作。

  要限制对操作中特定标记或提交 SHA 的访问，请使用工作流程中使用的 `<OWNER>/<REPO>@<TAG OR SHA>` 语法来选择操作。 例如，使用 `actions/javascript-action@v1.0.1` 选择标记，或使用 `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` 选择 SHA。 更多信息请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)”。

  您可以使用 `*` 通配符来匹配模式。 例如，要允许以 `space-org` 开头的组织中的所有操作，您可以指定 `space-org*/*`。 要在仓库中添加以 octocat 开头的所有操作，可以使用 `*/octocat*@*`。 有关使用 `*` 通配符的更多信息，请参阅“[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

  {% if currentVersion == "free-pro-team@latest" %}
  {% note %}

  **注：** **Allow specified actions（允许指定的操作）**仅可用于具有 {% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、组织的 {% data variables.product.prodname_free_team %} 或 {% data variables.product.prodname_team %} 计划的公共仓库。

  {% endnote %}
  {% endif %}

此过程演示如何向允许列表添加特定操作。
