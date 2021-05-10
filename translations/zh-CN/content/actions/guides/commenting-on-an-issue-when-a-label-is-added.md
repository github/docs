---
title: 添加标签时评论议题
intro: '您可以使用 {% data variables.product.prodname_actions %} 在应用特定标签时自动评论议题。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### 简介

本教程演示如何使用 [`peter-evans/create-or update-` 操作](https://github.com/marketplace/actions/create-or-update-comment)在应用特定标签时评论议题。 例如，当 `help-wanted` 标签添加到议题中后，您可以添加评论来鼓励贡献者处理该议题。

在教程中，您将先创建一个使用 [`peter-evans/create-or-update-comment` 操作](https://github.com/marketplace/actions/create-or-update-comment)的工作流程文件。 然后，您将自定义工作流以适应您的需要。

### 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. 将以下 YAML 内容复制到工作流程文件中。

    {% raw %}
    ```yaml{:copy}
    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@v1
            with:
              issue-number: ${{ github.event.issue.number }}
              body: |
                This issue is available for anyone to work on. **请确保在您的拉请求中引用此议题。** :sparkles: 谢谢您的贡献！ :sparkles:
    ```
    {% endraw %}
4. 自定义工工作流程文件中的参数：
   - 将 `if: github.event.label.name == 'help-wanted'` 中的 `help-wanted` 替换为您想要操作的标签。 如果您想要操作多个标签，请用 `||` 分隔条件。 例如，只要 `bug` 或 `fix me` 标签添加到议题，`if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` 就会评论。
   - 将 `body` 的值更改为您想要添加的评论。 支持 GitHub Flavored Markdown。 有关 Markdown 的更多信息，请参阅“[基本撰写和格式语法](/github/writing-on-github/basic-writing-and-formatting-syntax)”。
5. {% data reusables.actions.commit-workflow %}

### 测试工作流程

每当仓库中的问题被标记时，此工作流就会运行。 如果添加的标签是您在工作流程文件中指定的标签之一，`peter-evans/create-or update-comment` 操作将添加您指定的评论到此议题。

通过将指定的标签应用于议题来测试工作流程。

1. 在仓库中打开一个议题。 更多信息请参阅“[创建议题](/github/managing-your-work-on-github/creating-an-issue)”。
2. 使用工作流程文件中的指定标签标记议题。 更多信息请参阅“[管理标签](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)”。
3. 要查看通过标记议题所触发的工作流程运行，请查看工作流程运行的历史记录。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
4. 当工作流程完成时，您标记的议题应已添加评论。

### 后续步骤

- 要详细了解您可以使用 `peter-evans/create-or-update-comment` 操作执行的其他事项，如添加反应，请访问 [`peter-evans/create-or-update-comment` 操作文档](https://github.com/marketplace/actions/create-or-update-comment)。
