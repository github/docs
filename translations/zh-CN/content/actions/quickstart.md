---
title: GitHub Actions 快速入门
intro: '在 5 分钟或更短时间内将 {% data variables.product.prodname_actions %} 工作流程添加到现有仓库。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

您只需要一个现有的 {% data variables.product.prodname_dotcom %} 仓库来创建和运行 {% data variables.product.prodname_actions %} 工作流程。 在本指南中，您将添加一个工作流程，使用 [{% data variables.product.prodname_dotcom %} Super-Linter 操作](https://github.com/github/super-linter)链接多种编码语言。 每次有新的提交被推送到您的仓库时，工作流程都会使用 Super-Linter 验证源代码。

### 创建第一个工作流程

1. 从 {% data variables.product.prodname_dotcom %} 上的仓库，在 `.github/workflow` 目录中创建一个名为 `superlinter.yml` 的新文件。 更多信息请参阅“[创建新文件](/github/managing-files-in-a-repository/creating-new-files)”。
2. 将以下 YAML 内容复制到 `superlinter.yml` 文件中。 **注：** 如果您的默认分支不是 `main`，请更新 `DEFAULT_BRANCH` 的值以匹配您仓库的默认分支名称。
    {% raw %}
    ```yaml{:copy}
    name: Super-Linter

    # Run this workflow every time a new commit pushed to your repository
    on: push

    jobs:
      # Set the job key. The key is displayed as the job name
      # when a job name is not provided
      super-lint:
        # Name the Job
        name: Lint code base
        # Set the type of machine to run on
        runs-on: ubuntu-latest

        steps:
          # Checks out a copy of your repository on the ubuntu-latest machine
          - name: Checkout code
            uses: actions/checkout@v2

          # Runs the Super-Linter action
          - name: Run Super-Linter
            uses: github/super-linter@v3
            env:
              DEFAULT_BRANCH: main
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```
    {% endraw %}
3. 要运行您的工作流程， 滚动到页面底部，然后选择 **为此提交创建一个新分支并开始拉取请求**。 然后，若要创建拉取请求，请单击 **Propose new file（提议新文件）**。 ![提交工作流程文件](/assets/images/commit-workflow-file.png)

在仓库中提交工作流程文件会触发 `push` 事件并运行工作流程。

### 查看工作流程结果

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
1. 在左侧边栏中，单击 **Lint code base（Lint 代码库）**作业。 ![Lint 代码库作业](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% data reusables.repositories.view-failed-job-results-superlinter %}

### 更多入门工作流程

{% data variables.product.prodname_dotcom %} 提供预配置的工作流程模板，您可以从这些模板开始自动执行或创建持续集成工作流程。 您可以在 {% if currentVersion == "free-pro-team@latest" %}[actions/starter-workflows](https://github.com/actions/starter-workflows) 仓库{% else %} {% data variables.product.product_location %} 上的 `actions/starter-workflows` 仓库{% endif %}中浏览工作流程模板的完整列表。

### 后续步骤

只要代码推送到仓库，您刚才添加的 super-linter 工作流程就会运行，以帮助您发现代码中的错误和不一致。 但是，这只是您可以对 {% data variables.product.prodname_actions %} 执行操作的开始。 您的仓库可以包含多个基于不同事件触发不同任务的工作流程。 {% data variables.product.prodname_actions %} 可以帮助您自动执行应用程序开发过程的几乎每个方面。 准备好开始了吗？ 以下是一些帮助您对 {% data variables.product.prodname_actions %} 执行后续操作的有用资源：

- “[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”，以获取深入教程
- “[指南](/actions/guides)”，以获取特定用例和示例
- [github/super-linter](https://github.com/github/super-linter)，以获取有关配置 Super-Linter 操作的详细信息
