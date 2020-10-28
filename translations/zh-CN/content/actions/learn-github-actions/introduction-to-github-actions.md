---
title: GitHub Actions 简介
shortTitle: GitHub Actions 简介
intro: '了解 {% data variables.product.prodname_actions %} 的核心概念和各种组件，并查看说明如何为仓库添加自动化的示例。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 概览

{% data variables.product.prodname_actions %} 帮助您自动完成软件开发周期内的任务。 {% data variables.product.prodname_actions %} 是事件驱动的，意味着您可以在指定事件发生后运行一系列命令。 例如，每次有人为仓库创建拉取请求时，您都可以自动运行命令来执行软件测试脚本。

此示意图说明如何使用 {% data variables.product.prodname_actions %} 自动运行软件测试脚本。 事件会自动触发其中包_作业_的_工作流程_。 然后，作业使用_步骤_来控制_操作_运行的顺序。 这些操作是自动化软件测试的命令。

![工作流程概述](/assets/images/help/images/overview-actions-simple.png)

### {% data variables.product.prodname_actions %} 的组件

下面是一起运行作业的多个 {% data variables.product.prodname_actions %} 组件列表。 您可以查看这些组件如何相互作用。

![组件和服务概述](/assets/images/help/images/overview-actions-design.png)

#### 工作流程

工作流程是您添加到仓库的自动化过程。 工作流程由一项或多项作业组成，可以计划或由事件触发。 工作流程可用于在 {% data variables.product.prodname_dotcom %} 上构建、测试、打包、发布或部署项目。

#### 事件

事件是触发工作流程的特定活动。 例如，当有推送提交到仓库或者创建议题或拉取请求时，{% data variables.product.prodname_dotcom %} 就可能产生活动。 您也可以使用仓库调度 web 挂钩在发生外部事件时触发工作流程。 有关可用于触发工作流程的事件的完整列表，请参阅[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)。

#### Jobs

作业是在同一运行服务器上执行的一组步骤。 默认情况下，包含多个作业的工作流程将同时运行这些作业。 您也可以配置工作流程按顺序运行作业。 例如，工作流程可以有两个连续的任务来构建和测试代码，其中测试作业取决于构建作业的状态。 如果构建作业失败，测试作业将不会运行。

#### 步骤

步骤是可以运行命令（称为_操作_）的单个任务。 作业中的每个步骤在同一运行器上执行，可让该作业中的操作互相共享数据。

#### 操作

_操作_ 是独立命令，它们组合到_步骤_以创建_作业_。 操作是工作流程最小的便携式构建块。 您可以创建自己的操作，也可以使用 {% data variables.product.prodname_dotcom %} 社区创建的操作。 要在工作流程中使用操作，必须将其作为一个步骤。

#### 运行器

运行器是安装了 {% data variables.product.prodname_actions %} 运行器应用程序的服务器。 您可以使用 {% data variables.product.prodname_dotcom %} 托管的运行器或托管您自己的运行器。 运行器将侦听可用的作业，每次运行一个作业，并将进度、日志和结果报告回 {% data variables.product.prodname_dotcom %}。 对于 {% data variables.product.prodname_dotcom %} 托管的运行器，工作流程中的每项作业都会在一个新的虚拟环境中运行。

{% data variables.product.prodname_dotcom %} 托管的运行器基于 Ubuntu Linux、Microsoft Windows 和 macOS 。 有关 {% data variables.product.prodname_dotcom %} 托管的运行器的信息，请参阅“[ {% data variables.product.prodname_dotcom %} 托管运行器的虚拟环境](/actions/reference/virtual-environments-for-github-hosted-runners)”。 如果您需要不同的操作系统或需要特定的硬件配置，可以托管自己的运行器。 有关自托管运行器的信息，请参阅“[托管您自己的运行器](/actions/hosting-your-own-runners)”。

### 创建示例工作流程

{% data variables.product.prodname_actions %} 使用 YAML 语法来定义事件、作业和步骤。 这些 YAML 文件存储在代码仓库中名为 `.github/workflows` 的目录中。

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
          - uses: actions/setup-node@v1
          - run: npm install -g bats
          - run: bats -v
    ```
1. Commit these changes and push them to your {% data variables.product.prodname_dotcom %} repository.

Your new {% data variables.product.prodname_actions %} workflow file is now installed in your repository and will run automatically each time someone pushes a change to the repository. For details about a job's execution history, see "[Viewing the workflow's activity](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)."

### Understanding the workflow file

To help you understand how YAML syntax is used to create a workflow file, this section explains each line of the introduction's example:

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>Optional</em> - The name of the workflow as it will appear in the Actions tab of the {% data variables.product.prodname_dotcom %} repository.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
  Specify the event that automatically triggers the workflow file. This example uses the <code>push</code> event, so that the jobs run every time someone pushes a change to the repository. You can set up the workflow to only run on certain branches, paths, or tags. For syntax examples including or excluding branches, paths, or tags, see <a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths">"Workflow syntax for {% data variables.product.prodname_actions %}."</a>
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 Groups together all the jobs that run in the <code>learn-github-actions</code> workflow file.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
  Defines the name of the <code>check-bats-version</code> job stored within the <code>jobs</code> section.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Configures the job to run on an Ubuntu Linux runner. This means that the job will execute on a fresh virtual machine hosted by GitHub. For syntax examples using other runners, see <a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">"Workflow syntax for {% data variables.product.prodname_actions %}."</a>
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  Groups together all the steps that run in the <code>check-bats-version</code> job. Each line nested under this section is a separate action.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
  The <code>uses</code> keyword tells the job to retrieve <code>v2</code> of the community action named <code>actions/checkout@v2</code>. This is an action that checks out your repository and downloads it to the runner, allowing you to run actions against your code (such as testing tools). You must use the checkout action any time your workflow will run against the repository's code or you are using an action defined in the repository.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v1
  ```
</td>
<td>
  This action installs the <code>node</code> software package on the runner, giving you access to the <code>npm</code> command.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
  The <code>run</code> keyword tells the job to execute a command on the runner. In this case, you are using <code>npm</code> to install the <code>bats</code> software testing package. 
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
  Finally, you'll run the <code>bats</code> command with a parameter that outputs the software version.
</td>
</tr>
</table>

#### Visualizing the workflow file

In this diagram, you can see the workflow file you just created and how the {% data variables.product.prodname_actions %} components are organized in a hierarchy. Each step executes a single action. Steps 1 and 2 use prebuilt community actions. To find more prebuilt actions for your workflows, see "[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)."

![工作流程概述](/assets/images/help/images/overview-actions-event.png)


### Viewing the job's activity

Once your job has started running, you can view each step's activity on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 **Actions（操作）**。 ![Navigate to repository](/assets/images/help/images/learn-github-actions-repository.png)
1. In the left sidebar, click the workflow you want to see. ![Screenshot of workflow results](/assets/images/help/images/learn-github-actions-workflow.png)
1. Under "Workflow runs", click the name of the run you want to see. ![Screenshot of workflow runs](/assets/images/help/images/learn-github-actions-run.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. Click on the job name to see the results of each step. ![Screenshot of workflow run details](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. Click on the job name to see the results of each step. ![Screenshot of workflow run details](/assets/images/help/images/overview-actions-result.png)
{% endif %}

### 后续步骤

To continue learning about {% data variables.product.prodname_actions %}, see "[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)."

### 联系支持

{% data reusables.github-actions.contacting-support %}
