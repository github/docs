---
title: 快速开始 GitHub Actions
intro: '在 5 分钟或者更短的时间试用 {% data variables.product.prodname_actions %} 的功能。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: 快速开始
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 介绍

你仅需要一个 {% data variables.product.prodname_dotcom %} 仓库即可创建并且运行 {% data variables.product.prodname_actions %} 工作流。在这个指导中，你将会添加一个工作流，其展示了一些基本的 {% data variables.product.prodname_actions %} 功能。

以下示例向你展示如何自动触发 {% data variables.product.prodname_actions %} 作业，它们是如何运行，以及它们如何在你的仓库与代码交互。

## 创建你的第一个工作流

1. 如果该目录不存在，在你 {% data variables.product.prodname_dotcom %} 的仓库中创建一个 `.github/workflows` 目录。
2. 在 `.github/workflows` 目录，创建一个叫做 `github-actions-demo.yml` 的文件。有关更多信息，请参见“[创建新的文件](/github/managing-files-in-a-repository/creating-new-files)。”
3. 复制以下 YAML 内容到 `github-actions-demo.yml` 文件：

   ```yaml{:copy}
   name: GitHub Actions Demo
   {%- ifversion actions-run-name %}
   run-name: {% raw %}${{ github.actor }}{% endraw %} is testing out GitHub Actions 🚀
   {%- endif %}
   on: [push]
   jobs:
     Explore-GitHub-Actions:
       runs-on: ubuntu-latest
       steps:
         - run: echo "🎉 The job was automatically triggered by a {% raw %}${{ github.event_name }}{% endraw %} event."
         - run: echo "🐧 This job is now running on a {% raw %}${{ runner.os }}{% endraw %} server hosted by GitHub!"
         - run: echo "🔎 The name of your branch is {% raw %}${{ github.ref }}{% endraw %} and your repository is {% raw %}${{ github.repository }}{% endraw %}."
         - name: Check out repository code
           uses: {% data reusables.actions.action-checkout %}
         - run: echo "💡 The {% raw %}${{ github.repository }}{% endraw %} repository has been cloned to the runner."
         - run: echo "🖥️ The workflow is now ready to test your code on the runner."
         - name: List files in the repository
           run: |
             ls {% raw %}${{ github.workspace }}{% endraw %}
         - run: echo "🍏 This job's status is {% raw %}${{ job.status }}{% endraw %}."
   ```

4. 滚动到页面底部，选择 **Create a new branch for this commit and start a pull request**。然后，创建拉取请求，点击 **Propose new file**。

   ![提交工作流文件](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

将工作流文件提交到你仓库的分支，会触发 `push` 事件并且运行你的工作流。

## 查看你的工作流结果

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}

1. 在左侧边栏中，单击你想要查看的工作流程。

   ![左侧边栏的工作流列表](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
2. 来自工作流运行的列表，点击你想看的运行名称。

   ![工作流运行的名称](/assets/images/help/repository/actions-quickstart-run-name.png)
3. 在 **Jobs** 下，单机 **Explore-GitHub-Actions** 作业。

   ![显示作业](/assets/images/help/repository/actions-quickstart-job.png)
4. 日志向你显示每个步骤的处理方式。展开任意的步骤以查看它的细节。

   ![工作流结果示例](/assets/images/help/repository/actions-quickstart-logs.png)

   示例，你可以看到你仓库的文件列表：
   ![Example action detail](/assets/images/help/repository/actions-quickstart-log-detail.png)

每次将代码推送到分支时，都会触发你刚刚添加的示例工作流程，并向你展示 {% data variables.product.prodname_actions %} 如何处理存储库的内容。有关深入的教程，请参见 “[理解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)”。

## 更多入门的工作流程

{% data reusables.actions.workflow-template-overview %}

## 后续步骤

{% data reusables.actions.onboarding-next-steps %}
