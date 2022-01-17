---
title: Understanding GitHub Actions
shortTitle: Understanding GitHub Actions
intro: 'Learn the basics of {% data variables.product.prodname_actions %}, including core concepts and essential terminology.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概览

{% data reusables.actions.about-actions %}  You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

{% data variables.product.prodname_actions %} goes beyond just DevOps and lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

{% data variables.product.prodname_dotcom %} provides Linux, Windows, and macOS virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure.

## {% data variables.product.prodname_actions %} 的组件

You can configure a {% data variables.product.prodname_actions %} _workflow_ to be triggered when an _event_ occurs in your repository, such as a pull request being opened or an issue being created.  Your workflow contains one or more _jobs_ which can run in sequential order or in parallel.  Each job will run inside its own virtual machine _runner_, or inside a container, and has one or more _steps_ that either run a script that you define or run an _action_, which is a reusable extension that can simplify your workflow.

![工作流程概述](/assets/images/help/images/overview-actions-simple.png)

### 工作流程

A workflow is a configurable automated process that will run one or more jobs.  Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

Your repository can have multiple workflows in a repository, each of which can perform a different set of steps.  For example, you can have one workflow to build and test pull requests, another workflow to deploy your application every time a release is created, and still another workflow that adds a label every time someone opens a new issue.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}You can reference a workflow within another workflow, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."{% endif %}

### 事件

An event is a specific activity in a repository that triggers a workflow run. For example, activity can originate from {% data variables.product.prodname_dotcom %} when someone creates a pull request, opens an issue, or pushes a commit to a repository.  You can also trigger a workflow run on a schedule, by [posting to a REST API](/rest/reference/repos#create-a-repository-dispatch-event), or manually.

有关可用于触发工作流程的事件的完整列表，请参阅[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)。

### Jobs

A job is a set of _steps_ in a workflow that execute on the same runner.  Each step is either a shell script that will be executed, or an _action_ that will be run.  Steps are executed in order and are dependent on each other.  Since each step is executed on the same runner, you can share data from one step to another.  For example, you can have a step that builds your application followed by a step that tests the application that was built.

You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel with each other.  When a job takes a dependency on another job, it will wait for the dependent job to complete before it can run.  For example, you may have multiple build jobs for different architectures that have no dependencies, and a packaging job that is dependent on those jobs.  The build jobs will run in parallel, and when they have all completed successfully, the packaging job will run.

### 操作

An _action_ is a custom application for the {% data variables.product.prodname_actions %} platform that performs a complex but frequently repeated task.  Use an action to help reduce the amount of repetitive code that you write in your workflow files.  An action can pull your git repository from {% data variables.product.prodname_dotcom %}, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.

You can write your own actions, or you can find actions to use in your workflows in the {% data variables.product.prodname_marketplace %}.

### 运行器

{% data reusables.actions.about-runners %} Each runner can run a single job at a time. {% ifversion ghes or ghae %} You must host your own runners for {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows; each workflow run executes in a fresh, newly-provisioned virtual machine. If you need a different operating system or require a specific hardware configuration, you can host your own runners.{% endif %} For more information{% ifversion fpt or ghec %} about self-hosted runners{% endif %}, see "[Hosting your own runners](/actions/hosting-your-own-runners)."

## 创建示例工作流程

{% data variables.product.prodname_actions %} uses YAML syntax to define the workflow.  Each workflow is stored as a separate YAML file in your code repository, in a directory called `.github/workflows`.

您可以在仓库中创建示例工作流程，只要推送代码，该工作流程就会自动触发一系列命令。 在此工作流程中，{% data variables.product.prodname_actions %} 检出推送的代码，安装软件依赖项，并运行 `-v`。

1. 在您的仓库中，创建 `.github/workflows/` 目录来存储工作流程文件。
1. 在 `.github/workflows/` 目录中，创建一个名为 `learn-github-actions.yml` 的新文件并添加以下代码。
    ```yaml
    name: learn-github-actions
    on: [push]
    jobs:
      check-bats-version:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v2
            with:
              node-version: '14'
          - run: npm install -g bats
          - run: bats -v
    ```
1. 提交这些更改并将其推送到您的 {% data variables.product.prodname_dotcom %} 仓库。

您的新 {% data variables.product.prodname_actions %} 工作流程文件现在安装在您的仓库中，每次有人推送更改到仓库时都会自动运行。 有关作业的执行历史记录的详细信息，请参阅“[查看工作流程的活动](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)”。

## 了解工作流程文件

为帮助您了解如何使用 YAML 语法来创建工作流程文件，本节解释介绍示例的每一行：

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>可选</em> - 将出现在 {% data variables.product.prodname_dotcom %} 仓库的 Actions（操作）选项卡中的工作流程名称。
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Specifies the trigger for this workflow. This example uses the <code>push</code> event, so a workflow run is triggered every time someone pushes a change to the repository or merges a pull request.  This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, see <a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths">"Workflow syntax for {% data variables.product.prodname_actions %}."</a>
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 Groups together all the jobs that run in the <code>learn-github-actions</code> workflow.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Defines a job named <code>check-bats-version</code>. The child keys will define properties of the job.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Configures the job to run on the latest version of an Ubuntu Linux runner. 这意味着该作业将在 GitHub 托管的新虚拟机上执行。 有关使用其他运行器的语法示例，请参阅<a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">“{% data variables.product.prodname_actions %} 的工作流程语法”</a>。
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  将 <code>check-bats-version</code> 作业中运行的所有步骤组合在一起。 Each item nested under this section is a separate action or shell script.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
The <code>uses</code> keyword specifies that this step will run <code>v2</code> of the <code>actions/checkout</code> action.  This is an action that checks out your repository onto the runner, allowing you to run scripts or other actions against your code (such as build and test tools). You should use the checkout action any time your workflow will run against the repository's code.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
  ```
</td>
<td>
  This step uses the <code>actions/setup-node@v2</code> action to install the specified version of the Node.js (this example uses v14). This puts both the <code>node</code> and <code>npm</code> commands in your <code>PATH</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
  <code>run</code> 关键字指示作业在运行器上执行命令。 在这种情况下，使用 <code>npm</code> 来安装 <code>bats</code> 软件测试包。
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
  最后，您将运行 <code>bats</code> 命令，并且带有输出软件版本的参数。
</td>
</tr>
</table>

### 可视化工作流程文件

在此关系图中，您可以看到刚刚创建的工作流程文件，以及 {% data variables.product.prodname_actions %} 组件在层次结构中的组织方式。 Each step executes a single action or shell script. Steps 1 and 2 run actions, while steps 3 and 4 run shell scripts. 要查找更多为工作流预构建的操作，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions)”。

![工作流程概述](/assets/images/help/images/overview-actions-event.png)

## Viewing the workflow's activity

Once your workflow has started running, you can {% ifversion fpt or ghes > 3.0 or ghae or ghec %}see a visualization graph of the run's progress and {% endif %}view each step's activity on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 **Actions（操作）**。 ![导航到仓库](/assets/images/help/images/learn-github-actions-repository.png)
1. 在左侧边栏中，单击您想要查看的工作流程。 ![工作流程结果的屏幕截图](/assets/images/help/images/learn-github-actions-workflow.png)
1. 在“Workflow runs（工作流程运行）”下，单击您想要查看的运行的名称。 ![工作流程运行的屏幕截图](/assets/images/help/images/learn-github-actions-run.png)
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. 在 **Jobs（作业）**下或可视化图中，单击您要查看的作业。 ![选择作业](/assets/images/help/images/overview-actions-result-navigate.png)
{% endif %}
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. 查看每个步骤的结果。 ![工作流程运行详细信息的屏幕截图](/assets/images/help/images/overview-actions-result-updated-2.png)
{% elsif ghes %}
1. 单击作业名称以查看每个步骤的结果。 ![工作流程运行详细信息的屏幕截图](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. 单击作业名称以查看每个步骤的结果。 ![工作流程运行详细信息的屏幕截图](/assets/images/help/images/overview-actions-result.png)
{% endif %}

## 后续步骤

要继续了解 {% data variables.product.prodname_actions %}，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions)”。

{% ifversion fpt or ghec or ghes %}

To understand how billing works for {% data variables.product.prodname_actions %}, see "[About billing for {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)".

{% endif %}

## 联系支持

{% data reusables.github-actions.contacting-support %}
