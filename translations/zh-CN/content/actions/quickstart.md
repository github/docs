---
title: GitHub Actions 快速入门
intro: 'Try out the features of {% data variables.product.prodname_actions %} in 5 minutes or less.'
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

You only need a {% data variables.product.prodname_dotcom %} repository to create and run a {% data variables.product.prodname_actions %} workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of {% data variables.product.prodname_actions %}.

The following example shows you how {% data variables.product.prodname_actions %} jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.

### 创建第一个工作流程

1. 从 {% data variables.product.prodname_dotcom %} 上的仓库，在 `.github/workflows` 目录中创建一个名为 `github-actions-demo.yml` 的新文件。 更多信息请参阅“[创建新文件](/github/managing-files-in-a-repository/creating-new-files)”。
2. Copy the following YAML contents into the `github-actions-demo.yml` file:
    {% raw %}
    ```yaml{:copy}
    name: GitHub Actions Demo
    on: [push]
    jobs:
      Explore-GitHub-Actions:
        runs-on: ubuntu-latest
        steps:
          - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
          - name: Check out repository code
            uses: actions/checkout@v2
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. 滚动到页面底部，然后选择 **Create a new branch for this commit and start a pull request（为此提交创建一个新分支并开始拉取请求）**。 然后，若要创建拉取请求，请单击 **Propose new file（提议新文件）**。 ![提交工作流程文件](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Committing the workflow file to a branch in your repository triggers the `push` event and runs your workflow.

### 查看工作流程结果

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要查看的工作流程。

   ![左侧边栏中的工作流程列表](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. 从工作流程运行列表中，单击要查看的运行的名称。

   ![工作流程运行的名称](/assets/images/help/repository/actions-quickstart-run-name.png)
1. Under **Jobs** , click the **Explore-GitHub-Actions** job.

   ![Locate job](/assets/images/help/repository/actions-quickstart-job.png)
1. The log shows you how each of the steps was processed. Expand any of the steps to view its details.

   ![Example workflow results](/assets/images/help/repository/actions-quickstart-logs.png)

   For example, you can see the list of files in your repository: ![Example action detail](/assets/images/help/repository/actions-quickstart-log-detail.png)

### 更多工作流程模板

{% data reusables.actions.workflow-template-overview %}

### 后续步骤

The example workflow you just added runs each time code is pushed to the branch, and shows you how {% data variables.product.prodname_actions %} can work with the contents of your repository. But this is only the beginning of what you can do with {% data variables.product.prodname_actions %}:

- 您的仓库可以包含多个基于不同事件触发不同任务的工作流程。
- You can use a workflow to install software testing apps and have them automatically test your code on {% data variables.product.prodname_dotcom %}'s runners.

{% data variables.product.prodname_actions %} 可以帮助您自动执行应用程序开发过程的几乎每个方面。 准备好开始了吗？ 以下是一些帮助您对 {% data variables.product.prodname_actions %} 执行后续操作的有用资源：

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial.
- "[Guides](/actions/guides)" for specific uses cases and examples.
