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

## Conflicts between head commit and test merge commit

有时，测试合并提交与头部提交的状态检查结果存在冲突。 如果测试合并提交具有状态，则测试合并提交必须通过。 否则，必须传递头部提交的状态后才可合并该分支。 有关测试合并提交的更多信息，请参阅“[拉取](/rest/reference/pulls#get-a-pull-request)”。

![具有冲突的合并提交的分支](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

## Handling skipped but required checks

Sometimes a required status check is skipped on pull requests due to path filtering. For example, a Node.JS test will be skipped on a pull request that just fixes a typo in your README file and makes no changes to the JavaScript and TypeScript files in the `scripts` directory.

If this check is required and it gets skipped, then the check's status is shown as pending, because it's required. In this situation you won't be able to merge the pull request.

### 示例

In this example you have a workflow that's required to pass.

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

If someone submits a pull request that changes a markdown file in the root of the repository, then the workflow above won't run at all because of the path filtering. As a result you won't be able to merge the pull request. You would see the following status on the pull request:

![Required check skipped but shown as pending](/assets/images/help/repository/PR-required-check-skipped.png)

You can fix this by creating a generic workflow, with the same name, that will return true in any case similar to the workflow below :

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
Now the checks will always pass whenever someone sends a pull request that doesn't change the files listed under `paths` in the first workflow.

![Check skipped but passes due to generic workflow](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**注意：**
* Make sure that the `name` key and required job name in both the workflow files are the same. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".
* The example above uses {% data variables.product.prodname_actions %} but this workaround is also applicable to other CI/CD providers that integrate with {% data variables.product.company_short %}.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-5379 or ghec %}It's also possible for a protected branch to require a status check from a specific {% data variables.product.prodname_github_app %}. If you see a message similar to the following, then you should verify that the check listed in the merge box was set by the expected app.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
