## 创建示例工作流程

{% data variables.product.prodname_actions %} 使用 YAML 语法来定义工作流程。  每个工作流程都作为单独的 YAML 文件存储在代码存储库中的目录 `.github/workflows` 下。

您可以在仓库中创建示例工作流程，只要推送代码，该工作流程就会自动触发一系列命令。 在此工作流程中，{% data variables.product.prodname_actions %} 检出推送的代码，安装 [bats](https://www.npmjs.com/package/bats) 测试框架，并运行基本命令以输出 bats 版本：`bats -v`。

1. 在您的仓库中，创建 `.github/workflows/` 目录来存储工作流程文件。
1. 在 `.github/workflows/` 目录中，创建一个名为 `learn-github-actions.yml` 的新文件并添加以下代码。

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. 提交这些更改并将其推送到您的 {% data variables.product.prodname_dotcom %} 仓库。

您的新 {% data variables.product.prodname_actions %} 工作流程文件现在安装在您的仓库中，每次有人推送更改到仓库时都会自动运行。 要查看有关工作流程执行历史记录的详细信息，请参阅[查看工作流程运行的活动](#viewing-the-activity-for-a-workflow-run)”。

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
指定此工作流程的触发器。 此示例使用<code>推送</code>事件，因此每次有人将更改推送到存储库或合并拉取请求时，都会触发工作流程运行。  这是由推送到每个分支触发的；有关仅在推送到特定分支、路径或标记时运行的语法示例，请参阅“<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">{% data variables.product.prodname_actions %} 的工作流程语法”</a>。
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 将 <code>learn-github-actions</code> 工作流程中运行的所有作业组合在一起。
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
定义名为 <code>check-bats-version</code> 的作业。 子键将定义作业的属性。
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  将作业配置为在最新版本的 Ubuntu Linux 运行器上运行。 这意味着该作业将在 GitHub 托管的新虚拟机上执行。 有关使用其他运行器的语法示例，请参阅<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">“{% data variables.product.prodname_actions %} 的工作流程语法</a>”。
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  将 <code>check-bats-version</code> 作业中运行的所有步骤组合在一起。 此部分下嵌套的每项都是一个单独的操作或 shell 脚本。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
<code>uses</code> 关键字指定此步骤将运行 <code>actions/checkout</code> 操作的 <code>v3</code>。 这是一个将存储库签出到运行器上的操作，允许您对代码（如生成和测试工具）运行脚本或其他操作。 每当工作流程将针对存储库的代码运行时，都应使用签出操作。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
  此步骤使用 <code>{% data reusables.actions.action-setup-node %}</code> 操作来安装指定版本的 Node.js（此示例使用 v14）。 这会将 <code>node</code> 和 <code>npm</code> 命令放在 <code>PATH</code>中。
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

在此关系图中，您可以看到刚刚创建的工作流程文件，以及 {% data variables.product.prodname_actions %} 组件在层次结构中的组织方式。 每个步骤执行单个操作或 shell 脚本。 步骤 1 和 2 运行操作，步骤 3 和 4 运行 shell 脚本。 要查找更多为工作流预构建的操作，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions)”。

![工作流程概述](/assets/images/help/images/overview-actions-event.png)

## 查看工作流程运行的活动

触发工作流程时，将创建执行工作流程的_工作流程运行_。 工作流程运行启动后，您可以在 {% data variables.product.prodname_dotcom %} 上查看运行进度的可视化图形并查看每个步骤的活动。

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 **Actions（操作）**。

   ![导航到仓库](/assets/images/help/images/learn-github-actions-repository.png)
1. 在左侧边栏中，单击您想要查看的工作流程。

   ![工作流程结果的屏幕截图](/assets/images/help/images/learn-github-actions-workflow.png)
1. 在“Workflow runs（工作流程运行）”下，单击您想要查看的运行的名称。

   ![工作流程运行的屏幕截图](/assets/images/help/images/learn-github-actions-run.png)
1. 在 **Jobs（作业）**下或可视化图中，单击您要查看的作业。

   ![选择作业](/assets/images/help/images/overview-actions-result-navigate.png)
1. 查看每个步骤的结果。

   ![工作流程运行详细信息的屏幕截图](/assets/images/help/images/overview-actions-result-updated-2.png)
