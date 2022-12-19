---
title: 必需状态检查故障排除
intro: 您可以检查必需状态检查的常见错误并解决问题，
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Required status checks
ms.openlocfilehash: 6e99f8ebf0275d065c640bb7b4c7b60462f51ec0
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135804'
---
如果您有名称相同的检查和状态，并且选择该名称作为必需状态检查，则检查和状态都是必需的。 有关详细信息，请参阅“[检查](/rest/reference/checks)”。

在启用必需状态检查后，您的分支在合并之前可能需要使用基础分支更新。 这可确保您的分支已经使用基本分支的最新代码做过测试。 如果您的分支过期，则需要将基本分支合并到您的分支。 有关详细信息，请参阅“[关于受保护的分支](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)”。

{% note %}

注意：也可以使用 Git 变基以基础分支更新分支。 有关详细信息，请参阅“[关于 Git 变基](/github/getting-started-with-github/about-git-rebase)”。

{% endnote %}

在通过所有必需状态检查之前，无法向受保护分支推送本地更改。 反而会收到类似如下的错误消息。

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

注意：最新且通过所需状态检查的拉取请求可以在本地合并，并推送到受保护的分支。 此操作无需对合并提交本身运行状态检查。

{% endnote %}

## 头部提交与测试合并提交之间的冲突

有时，测试合并提交与头部提交的状态检查结果存在冲突。 如果测试合并提交具有状态，则测试合并提交必须通过。 否则，必须传递头部提交的状态后才可合并该分支。 有关测试合并提交的详细信息，请参阅“[拉取](/rest/reference/pulls#get-a-pull-request)”。

![具有冲突的合并提交的分支](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## 处理已跳过但需要检查

{% note %}

注意：如果因[路径筛选](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、[分支筛选](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)或[提交消息](/actions/managing-workflow-runs/skipping-workflow-runs)而跳过某工作流，则与该工作流关联的检查将保持为“挂起”状态。 要求这些检查成功的拉取请求将被阻止合并。

如果由于某条件而跳过工作流中的作业，该作业状态将报告为“成功”。 有关详细信息，请参阅[跳过工作流运行](/actions/managing-workflow-runs/skipping-workflow-runs)和[使用条件控制作业执行](/actions/using-jobs/using-conditions-to-control-job-execution)。

{% endnote %}

### 示例

以下示例显示了要求 `build` 作业为“成功”完成状态的工作流，但如果拉取请求未更改 `scripts` 目录中的任何文件，则将跳过该工作流。

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

由于[路径筛选](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)，仅更改存储库根目录中文件的拉取请求不会触发此工作流，并且将被阻止合并。 您将在拉取请求上看到以下状态：

![必需的检查已跳过，但显示为挂起](/assets/images/help/repository/PR-required-check-skipped.png)

您可以通过创建具有相同名称的通用工作流程来解决此问题，该工作流程在任何情况下都将返回 true，类似于下面的工作流程：

```yaml
name: ci
on:
  pull_request:
    paths-ignore:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: 'echo "No build required"'
```
现在，只要有人发送不会更改第一个工作流中 `paths` 下列出的文件的拉取请求，检查将始终通过。

![检查已跳过，但由于通用工作流程而通过](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**注意：**
* 请确保两个工作流文件中 `name` 键和所需的作业名称相同。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法”](/actions/reference/workflow-syntax-for-github-actions)。
* 上面的示例使用 {% data variables.product.prodname_actions %} 但此解决方法也适用于与 {% data variables.product.company_short %} 集成的其他 CI/CD 提供程序。

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## 要求从意外源进行状态检查

受保护的分支也可能要求从特定的 {% data variables.product.prodname_github_app %} 进行状态检查。 如果看到类似于以下内容的消息，则应验证合并框中列出的检查项是否由预期的应用设置。

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
