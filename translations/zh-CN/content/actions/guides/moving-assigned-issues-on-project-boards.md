---
title: 在项目板上移动分配的议题
intro: '您可以使用 {% data variables.product.prodname_actions %} 在议题被分配时自动将议题移到项目板上的特定列。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - 工作流程
  - 项目管理
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### 简介

本教程演示如何使用 [`Alex-page/github-project-automation-plus` 操作](https://github.com/marketplace/actions/github-project-automation)在议题被分配时将议题自动移到项目板上的特定列。 例如，在分配议题时，您可以将其移入项目板的 `In Progress` 列。

在教程中，您将先创建一个使用 [`alex-page/github-project-automation-plus` 操作](https://github.com/marketplace/actions/github-project-automation)的工作流程文件。 然后，您将自定义工作流以适应您的需要。

### 创建工作流程

1. {% data reusables.actions.choose-repo %}
2. 在仓库中，选择项目板。 您可以使用现有项目，也可以创建新项目。 有关创建项目的更多信息，请参阅“[创建项目板](/github/managing-your-work-on-github/creating-a-project-board)”。
3. {% data reusables.actions.make-workflow-file %}
4. 将以下 YAML 内容复制到工作流程文件中。

    {% raw %}
    ```yaml{:copy}
    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@v0.3.0
            with:
              project: Docs Work
              column: In Progress
              repo-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    ```
    {% endraw %}
5. 自定义工工作流程文件中的参数：
   - 将 `project` 的值更改为您的项目板的名称。 如果您有多个具有相同名称的项目板， `Alex-page/github-project-automation-placement-plus` 将对所有具有指定名称的项目采取行动。
   - 将 `column` 的值更改为您想要在议题分配时将议题移入其中的列名称。
   - 更改 `repo-token` 的值：
     1. 使用 `repo` 范围创建个人访问令牌。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
     1. 将此个人访问令牌作为机密存储在仓库中。 有关存储机密的更多信息，请参阅“[加密密码](/actions/reference/encrypted-secrets)”。
     1. 在您的工作流程文件中，将 `PERSONAL_ACCESS_TOKEN` 替换为您的机密名称。
6. {% data reusables.actions.commit-workflow %}

### 测试工作流程

每当分配仓库中的议题时，议题将移到指定的项目板列。 如果议题尚未在项目板上，则将添加到项目板中。

如果您的仓库是用户所有，则 `Alex-page/github-project-automation-plus` 操作将对仓库或用户帐户中具有指定项目名称和列的所有项目执行。 同样，如果您的仓库归组织所有，则该操作将对仓库或组织中具有指定项目名称和列的所有项目执行。

通过在仓库中分配议题来测试工作流程。

1. 在仓库中打开一个议题。 更多信息请参阅“[创建议题](/github/managing-your-work-on-github/creating-an-issue)”。
2. 分配议题。 更多信息请参阅“[分配议题和拉取请求到其他 GitHub 用户](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)”。
3. 要查看分配议题所触发的工作流程运行，请查看工作流程运行的历史记录。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
4. 工作流程完成后，分配的议题应会添加到指定的项目板列中。

### 后续步骤

- 要详细了解您可以使用 `alex-page/github-project-automation-plus` 操作执行的其他事项，如删除或存档项目卡，请访问 [`alex-page/github-project-automation-plus` 操作文档](https://github.com/marketplace/actions/github-project-automation)。
