---
title: 通过 GitHub Actions 自动化 Dependabot
intro: '如何使用 {% data variables.product.prodname_actions %} 来自动执行常见 {% data variables.product.prodname_dependabot %} 相关任务的示例。'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with Actions
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
ms.openlocfilehash: 573304093b85fcc05d86a99934a94904aa98b816
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147429730'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于 {% data variables.product.prodname_dependabot %} 与 {% data variables.product.prodname_actions %}

{% data variables.product.prodname_dependabot %} 创建拉动请求以保持依赖项的最新状态，并且当创建这些拉取请求时，您可以使用 {% data variables.product.prodname_actions %} 执行自动任务。 例如，获取其他构件、添加标签、运行测试或修改拉取请求。

## 响应事件

{% data variables.product.prodname_dependabot %} 能够在其拉取请求和评论上触发 {% data variables.product.prodname_actions %} 工作流程；但是，某些事件的处理方式不同。

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %} 对于 {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) 使用 `pull_request`、`pull_request_review`、`pull_request_review_comment`、`push`、`create`、`deployment` 和 `deployment_status` 事件发起的工作流，适用以下限制：{% endif %}

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN` 具有只读权限，除非管理员已移除限制。{% else %}默认情况下，`GITHUB_TOKEN` 具有只读权限。{% endif %}
- {% ifversion ghes = 3.3 %}机密是不可访问的，除非管理员已删除限制。{% else %}机密是从 {% data variables.product.prodname_dependabot %} 机密填充的。 {% data variables.product.prodname_actions %} 机密不可用。{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %} 对于 {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) 使用 `pull_request_target` 事件发起的工作流，如果拉取请求的基本引用是由 {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) 创建的，`GITHUB_TOKEN` 将是只读的，并且机密不可用。
{% endif %}

{% ifversion actions-stable-actor-ids %}即使工作流由其他参与者重新运行，这些限制也适用。{% endif %}

有关详细信息，请参阅[“确保 GitHub Actions 和工作流安全：阻止 pwn 请求”](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)。

{% ifversion fpt or ghec or ghes > 3.3 %}

### 更改 `GITHUB_TOKEN` 权限

默认情况下，由 {% data variables.product.prodname_dependabot %} 触发的 {% data variables.product.prodname_actions %} 工作流都会获得具有只读权限的 `GITHUB_TOKEN`。 可以使用工作流中的 `permissions` 密钥来增加对令牌的访问权限：

{% raw %}

```yaml
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

有关详细信息，请参阅“[修改 GITHUB_TOKEN 的权限](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token)”。

### 访问密钥

当 {% data variables.product.prodname_dependabot %} 事件触发工作流程时，工作流程唯一可用的机密是 {% data variables.product.prodname_dependabot %} 机密。 {% data variables.product.prodname_actions %} 机密不可用。 因此，必须将 {% data variables.product.prodname_dependabot %} 事件触发的工作流程使用的任何机密存储为 {% data variables.product.prodname_dependabot %} 机密。 有关详细信息，请参阅“[管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。

{% data variables.product.prodname_dependabot %} 机密添加到 `secrets` 上下文，并使用与 {% data variables.product.prodname_actions %} 的机密完全相同的语法进行引用。 有关详细信息，请参阅“[加密机密](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow)”。

如果您的工作流程将由 {% data variables.product.prodname_dependabot %} 和其他参与者触发，则最简单的解决方案是将令牌与操作以及名称相同的 {% data variables.product.prodname_dependabot %} 密钥中所需的权限一起存储。 然后，工作流程可以包括对这些机密的单个调用。 如果 {% data variables.product.prodname_dependabot %} 的机密具有不同的名称，请使用条件指定正确的机密，以供不同的参与者使用。 有关使用条件的示例，请参阅下面的“[常见自动化](#common-dependabot-automations)”。

要使用用户名和密码访问 AWS 上的私有容器注册表，工作流必须包含 `username` 和 `password` 的机密。 在下面的示例中，当 {% data variables.product.prodname_dependabot %} 触发工作流时，将使用名称为 `READONLY_AWS_ACCESS_KEY_ID` 和 `READONLY_AWS_ACCESS_KEY` 的 {% data variables.product.prodname_dependabot %} 机密。 如果另一个执行组件触发了工作流程，则使用具有这些名称的操作机密。

```yaml
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@v1
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

{% endif %}

{% ifversion ghes = 3.3 %}

{% note %}

注意：站点管理员可以覆盖 {% data variables.product.product_location %} 的这些限制。 有关详细信息，请参阅[排查企业 {% data variables.product.prodname_actions %} 问题](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows)。

如果移除限制，则当工作流由 {% data variables.product.prodname_dependabot %} 触发时，它将有权访问 {% data variables.product.prodname_actions %} 机密，并且可以使用 `permissions` 一词增加 `GITHUB_TOKEN` 只读访问权限的默认范围。 可以忽略“处理 `pull_request` 事件”和“处理 `push` 事件”部分中的特定步骤，因为不再适用。

{% endnote %}

### 处理 `pull_request` 事件

如果工作流需要访问机密或具有写入权限的 `GITHUB_TOKEN`，则有两个选项：使用`pull_request_target`或使用两个单独的工作流。 我们将在本部分中详细介绍如何使用 `pull_request_target`，以及如何在“[处理 `push` 事件](#handling-push-events)”中使用以下两个工作流。

下面是一个简单的 `pull_request` 工作流示例，该工作流现在可能失败：

```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
```

可以将 `pull_request` 替换为 `pull_request_target`，后者用于来自分叉的拉取请求，然后显式签出拉取请求 `HEAD`。

{% warning %}

警告：使用 `pull_request_target` 替代 `pull_request` 会使你面临不安全的行为。 建议使用双工作流方法，如“[处理 `push` 事件](#handling-push-events)”中所述。

{% endwarning %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Workflow
on:
  pull_request_target

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          # Check out the pull request HEAD
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

还强烈建议你缩小授予 `GITHUB_TOKEN` 的权限范围，以避免泄露具有不必要特权的令牌。 有关详细信息，请参阅“[`GITHUB_TOKEN` 的权限](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”。

### 处理 `push` 事件

因为没有等效于 `push` 事件的 `pull_request_target`，因此必须使用两个工作流程：一个是以上传构件结束的不可信工作流，它将触发第二个下载构件并继续处理的可信任工作流程。

第一个工作流程执行任何不信任的工作：

{% raw %}

```yaml
### This workflow doesn't have access to secrets and has a read-only token
name: Dependabot Untrusted Workflow
on:
  push

jobs:
  check-dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: ...
```

{% endraw %}

第二个工作流程在第一个工作流程成功完成后执行受信任的工作：

{% raw %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Trusted Workflow
on:
  workflow_run:
    workflows: ["Dependabot Untrusted Workflow"]
    types:
      - completed

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - uses: ...
```

{% endraw %}

{% endif %}

### 手动重新运行工作流程

{% ifversion actions-stable-actor-ids %}

手动重新运行 Dependabot 工作流时，即使发起重新运行的用户具有不同的权限，该工作流也会使用以前所用的权限运行。 有关详细信息，请参阅“[重新运行工作流和作业](/actions/managing-workflow-runs/re-running-workflows-and-jobs)”。

{% else %}

您还可以手动重新运行失败的 Dependabot 工作流程，它将以读写令牌运行并访问密码。 在手动重新运行失败的工作流程之前，您应始终检查更新的依赖项，以确保更改不会引入任何恶意或意外行为。

{% endif %}

## 常用 Dependabot 自动化

以下是可以使用 {% data variables.product.prodname_actions %} 自动化的几个常见场景。

{% ifversion ghes = 3.3 %}

{% note %}

注意：如果站点管理员已覆盖对 {% data variables.product.product_location %} 上的 {% data variables.product.prodname_dependabot %} 的限制，则可以在以下工作流中使用 `pull_request`，而不是 `pull_request_target`。

{% endnote %}

{% endif %}

### 获取有关拉取请求的元数据

大量自动化需要了解拉取请求内容的信息：依赖项名称是什么，是否为生产依赖项，以及是否为主要、次要或补丁更新。

`dependabot/fetch-metadata` 操作为你提供了所有这些信息：

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.dependabot-metadata.outputs.dependency-names
      #  - steps.dependabot-metadata.outputs.dependency-type
      #  - steps.dependabot-metadata.outputs.update-type      
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```

{% endraw %}

{% endif %}

有关详细信息，请参阅 [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata) 存储库。

### 标记拉取请求

如果您有基于 {% data variables.product.prodname_dotcom %} 标签的其他自动化或分类工作流程，则可以配置操作以根据提供的元数据分配标签。

例如，如果您想用标签标记所有生产依赖项更新：

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.dependabot-metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% endif %}

### 批准拉取请求

如果您想要自动批准 Dependabot 拉取请求，您可以在工作流程中使用 {% data variables.product.prodname_cli %}：

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request_target

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

### 在拉取请求上启用自动合并

如果要允许维护者标记某些拉取请求以进行自动合并，可以使用 {% data variables.product.prodname_dotcom %} 的自动合并功能。 这样，当所有所需的测试和批准都成功满足时，拉取请求即可合并。 有关自动合并的详细信息，请参阅“[自动合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)”。

可以改为使用 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_cli %}。 以下示例会将所有补丁更新自动合并为 `my-dependency`：

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write
  pull-requests: write
  
jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.dependabot-metadata.outputs.dependency-names, 'my-dependency') && steps.dependabot-metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
  contents: write
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

## 失败的工作流程运行故障排除

如果您的工作流程运行失败，请检查以下情况：

{% ifversion ghes = 3.3 %}

- 只有当正确的角色触发工作流程时，才运行工作流程。
- 你正在检查 `pull_request` 的正确 `ref` 值。
- 你不会尝试从 Dependabot 触发的 `pull_request`、`pull_request_review`、`pull_request_review_comment` 或 `push` 事件中访问机密。
- 你不会尝试从 Dependabot 触发的 `pull_request`、`pull_request_review`、`pull_request_review_comment` 或 `push` 事件中执行任何 `write` 操作。

{% else %}

- 只有当正确的角色触发工作流程时，才运行工作流程。
- 你正在检查 `pull_request` 的正确 `ref` 值。
- 您的机密在 {% data variables.product.prodname_dependabot %} 机密中可用，而不是作为 {% data variables.product.prodname_actions %} 机密。
- 你有一个具有适当权限的 `GITHUB_TOKEN`。

{% endif %}

有关编写和调试 {% data variables.product.prodname_actions %} 的详细信息，请参阅“[了解 GitHub Actions](/actions/learn-github-actions)”。
