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
shortTitle: 必需状态检查
---

如果您有名称相同的检查和状态，并且选择该名称作为必需状态检查，则检查和状态都是必需的。 更多信息请参阅“[检查](/rest/reference/checks)”。

在启用必需状态检查后，您的分支在合并之前可能需要使用基础分支更新。 这可确保您的分支已经使用基本分支的最新代码做过测试。 如果您的分支过期，则需要将基本分支合并到您的分支。 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)”。

{% note %}

**注：**您也可以使用 Git 变基以基础分支更新您的分支。 更多信息请参阅“[关于 Git 变基](/github/getting-started-with-github/about-git-rebase)”。

{% endnote %}

在通过所有必需状态检查之前，无法向受保护分支推送本地更改。 反而会收到类似如下的错误消息。

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**注：**最新且通过必需状态检查的拉取请求可以本地合并，并且推送到受保护分支。 此操作无需对合并提交本身运行状态检查。

{% endnote %}

{% ifversion fpt or ghae or ghes or ghec %}

## 头部提交与测试合并提交之间的冲突

有时，测试合并提交与头部提交的状态检查结果存在冲突。 如果测试合并提交具有状态，则测试合并提交必须通过。 否则，必须传递头部提交的状态后才可合并该分支。 有关测试合并提交的更多信息，请参阅“[拉取](/rest/reference/pulls#get-a-pull-request)”。

![具有冲突的合并提交的分支](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

## 处理已跳过但需要检查

有时，由于路径筛选，在拉取请求上会跳过所需的状态检查。 例如，Node.JS 测试在仅修复自述文件中拼写错误的拉取请求上将跳过，并且不会更改 `scripts` 目录中的 JavaScript 和 TypeScript 文件。

如果此检查是必需的，并且被跳过，则检查的状态将显示为挂起，因为它是必需的。 在此情况下，您将无法合并拉取请求。

### 示例

在此示例中，您有一个需要通过的工作流程。

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

如果有人提交更改存储库根目录中 Markdown 文件的拉取请求，则上述工作流程将因路径筛选而完全不会运行。 因此，您将无法合并拉取请求。 您将在拉取请求上看到以下状态：

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
      - run: 'echo "No build required" '
```
现在，每当有人发送拉取请求时，检查将始终通过，该请求不会更改第一个工作流程中`路径下`列出的文件。

![检查已跳过，但由于通用工作流程而通过](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**注意：**
* 确保两个工作流程文件中`名称`键和所需的作业名称相同。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions)”。
* 上面的示例使用 {% data variables.product.prodname_actions %} 但此解决方法也适用于与 {% data variables.product.company_short %} 集成的其他 CI/CD 提供程序。

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-5379 or ghec %}受保护分支也可能要求特定 {% data variables.product.prodname_github_app %} 进行状态检查。 如果看到类似于以下内容的消息，则应验证合并框中列出的检查项是否由预期的应用设置。

```
必需状态检查 "build" 未由预期的 {% data variables.product.prodname_github_app %} 设置。
```
{% endif %}
