---
title: GitHub Actions 快速入门
intro: '在 5 分钟或更短时间内将 {% data variables.product.prodname_actions %} 工作流程添加到现有仓库。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'quick_start'
topics:
  - '基础'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 简介

您只需要一个现有的 {% data variables.product.prodname_dotcom %} 仓库来创建和运行 {% data variables.product.prodname_actions %} 工作流程。 在本指南中，您将添加一个工作流程，使用 [{% data variables.product.prodname_dotcom %} Super-Linter 操作](https://github.com/github/super-linter)链接多种编码语言。 每次有新的提交被推送到您的仓库时，工作流程都会使用 Super-Linter 验证源代码。

### 创建第一个工作流程

1. 从 {% data variables.product.prodname_dotcom %} 上的仓库，在 `.github/workflows` 目录中创建一个名为 `superlinter.yml` 的新文件。 更多信息请参阅“[创建新文件](/github/managing-files-in-a-repository/creating-new-files)”。
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
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
1. 在 **Jobs（作业）**下或可视化图中，单击 **Lint code base（Lint 代码基础）**作业。 ![Lint 代码库作业](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% else %}
1. 在左侧边栏中，单击 **Lint code base（Lint 代码库）**作业。 ![Lint 代码库作业](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% endif %}
{% data reusables.repositories.view-failed-job-results-superlinter %}

### 更多工作流程模板

{% data reusables.actions.workflow-template-overview %}

### 后续步骤

每次将代码推送到仓库时，您刚添加的 super-linter 工作流程都会运行，以帮助您发现代码中的错误和不一致。 但是，这只是您可以对 {% data variables.product.prodname_actions %} 执行操作的开始。 您的仓库可以包含多个基于不同事件触发不同任务的工作流程。 {% data variables.product.prodname_actions %} 可以帮助您自动执行应用程序开发过程的几乎每个方面。 准备好开始了吗？ 以下是一些帮助您对 {% data variables.product.prodname_actions %} 执行后续操作的有用资源：

- “[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”，以获取深入教程
- “[指南](/actions/guides)”，以获取特定用例和示例
- [github/super-linter](https://github.com/github/super-linter)，以获取有关配置 Super-Linter 操作的详细信息

<div id="quickstart-treatment" hidden>

### Introduction

打印“Hello, World!”是探索新编程语言的基本设置和语法的好方法。 在本指南中，您将使用 GitHub Actions 在 {% data variables.product.prodname_dotcom %} 仓库的工作流程日志中打印“Hello, World!”。 您只需要一个您可以在其中轻松创建和运行示例 {% data variables.product.prodname_actions %} 工作流程的 {% data variables.product.prodname_dotcom %} 仓库。 请随时为此快速启动创建一个新仓库，以测试这个及未来的 {% data variables.product.prodname_actions %} 工作流程。

### Creating your first workflow

1. 从 {% data variables.product.prodname_dotcom %} 上的仓库，在 `.github/workflows` 目录中创建一个名为 `hello-world.yml` 的新文件。 更多信息请参阅“[创建新文件](/github/managing-files-in-a-repository/creating-new-files)”。
2. 将以下 YAML 内容复制到 `hello-world.yml` 文件中。
    {% raw %}
    ```yaml{:copy}
    name: Say hello!

    # GitHub Actions Workflows are automatically triggered by GitHub events
    on:
      # For this workflow, we're using the workflow_dispatch event which is triggered when the user clicks Run workflow in the GitHub Actions UI
      workflow_dispatch:
        # The workflow_dispatch event accepts optional inputs so you can customize the behavior of the workflow
        inputs:
          name:
            description: 'Person to greet'
            required: true
            default: 'World'
    # When the event is triggered, GitHub Actions will run the jobs indicated
    jobs:
      say_hello:
        # Uses a ubuntu-latest runner to complete the requested steps
        runs-on: ubuntu-latest
        steps:
        - run: |
            echo "Hello ${{ github.event.inputs.name }}!"
    ```
    {% endraw %}
3. 滚动到页面底部，然后选择 **Create a new branch for this commit and start a pull request（为此提交创建一个新分支并开始拉取请求）**。 然后，若要创建拉取请求，请单击 **Propose new file（提议新文件）**。
    ![提交工作流程文件](/assets/images/help/repository/commit-hello-world-file.png)
4. 合并拉取请求后，即可继续“触发工作流程”。

### Trigger your workflow

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要运行的工作流程。
   ![选择 say hello 作业](/assets/images/help/repository/say-hello-job.png)
1. 在右侧，单击 **Run workflow（运行工作流程）**下拉菜单，然后单击 **Run workflow（运行工作流程）**。 （可选）您可以在运行工作流程之前在“问候的人（Person to greet）”输入中输入自定义消息。
   ![触发手动工作流程](/assets/images/help/repository/manual-workflow-trigger.png)
1. 工作流程运行将出现在 "Say hello!" 工作流程运行列表顶部。 单击 "Say hello!" 可查看工作流程运行结果。
   ![工作流程运行结果列表](/assets/images/help/repository/workflow-run-listing.png)
1. 在左侧栏中，单击 "say_hello" 作业。
   ![工作流程作业列表](/assets/images/help/repository/workflow-job-listing.png)
1. 在工作流程日志中，展开 'Run echo "Hello World!"' 部分。
   ![Workflow detail](/assets/images/help/repository/workflow-log-listing.png)

### More workflow templates

{% data reusables.actions.workflow-template-overview %}

### Next steps

The hello-world workflow you just added is a minimal example of a manually triggered workflow. 这只是您可以对 {% data variables.product.prodname_actions %} 执行操作的开始。 您的仓库可以包含多个基于不同事件触发不同任务的工作流程。 {% data variables.product.prodname_actions %} 可以帮助您自动执行应用程序开发过程的几乎每个方面。 准备好开始了吗？ 下面是一些可帮助您执行 {% data variables.product.prodname_actions %} 后续步骤的有用资源：

- “[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”，用于深入的教程
- “[Guides](/actions/guides)”，用于特定的使用情况和示例

</div>
