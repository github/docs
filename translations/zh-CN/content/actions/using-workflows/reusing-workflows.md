---
title: 重新使用工作流
shortTitle: Reuse workflows
intro: 了解如何通过重用现有工作流程来避免在创建工作流程时重复。
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 2053b2bfd653a1f6633ab5d568e5b2fdb75d7335
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191924'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.reusable-workflows-enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概述

您可以使工作流程可重复使用，而不是从一个工作流程复制并粘贴到另一个工作流程。 然后，您和有权访问可重用工作流程的任何人都可以从另一个工作流程调用可重用工作流程。

重用工作流程可避免重复。 这使得工作流程更易于维护，并允许您通过构建他人的工作来更快地创建新工作流程，就像您对操作所做的那样。 工作流重用还通过帮助你使用设计良好、已经过测试且已证明有效的工作流来促进最佳做法。 您的组织可以构建可集中维护的可重用工作流程库。

下图显示了使用可重用工作流的正在进行的工作流运行。

* 在该图左侧的三个生成作业均成功完成后，将运行一个名为“部署”的依赖作业。
* “部署”作业调用包含三个作业的可重用工作流：“暂存”、“审阅”和“生产”。
* “生产”部署作业仅在“暂存”作业成功完成后运行。
* 当作业以环境为目标时，工作流运行会显示一个进度条，其中显示作业中的步骤数。 在下图中，“生产”作业包含 8 个步骤，目前正在处理步骤 6。
* 使用可重用工作流程运行部署作业，可以为每个构建运行这些作业，而无需在工作流程中重复代码。

![用于部署的可重用工作流程的图示](/assets/images/help/images/reusable-workflows-ci-cd.png)

使用其他工作流程的工作流程称为“调用方”工作流程。 可重用工作流程是“被调用”工作流程。 一个调用方工作流程可以使用多个被调用的工作流程。 每个被调用的工作流程都在一行中引用。 结果是，调用方工作流程文件可能只包含几行 YAML，但在运行时可能会执行大量任务。 当您重用工作流程时，将使用整个被调用的工作流程，就像它是调用方工作流程的一部分一样。

如果重用其他存储库中的工作流程，则被调用工作流程中的任何操作都将像调用方工作流程的一部分一样运行。 例如，如果被调用的工作流使用 `actions/checkout`，则该操作将签出托管调用方工作流（而不是被调用的工作流）的存储库的内容。

当可重用工作流由调用方工作流触发时，`github` 上下文始终与调用方工作流关联。 调用的工作流会自动授予对 `github.token` 和 `secrets.GITHUB_TOKEN` 访问权限。 有关 `github` 上下文的详细信息，请参阅“[GitHub Actions 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”。

您可以将 {% data variables.product.prodname_actions %} 工作流程中引用的重用工作流程视为包含工作流程的仓库依赖图中的依赖项。 有关详细信息，请参阅“[关于依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”。

### 可重用工作流程和入门工作流程

组织中所有有权创建工作流的人员都可利用入门工作流更快、更轻松地创建工作流。 当用户创建新工作流程时，他们可以选择入门工作流程，并且将为他们完成编写工作流程的部分或全部工作。 在入门工作流程中，您还可以引用可重用的工作流程，以便人们能够轻松地从重用集中管理的工作流程代码中受益。 如果在引用可重用工作流时使用提交 SHA，则可以确保重用该工作流的每个人都将始终使用相同的 YAML 代码。 但是，如果通过标记或分支引用可重用工作流程，请确保您可以信任该版本的工作流程。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的安全强化](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)”。

有关详细信息，请参阅“[为组织创建入门工作流](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)”。

## 访问可重复使用的工作流程

如果满足以下 {% ifversion ghes or ghec or ghae %}任一{% endif %} 任一{% else %}条件，则可重用工作流程可由另一个工作流程使用：

* 这两个工作流程位于同一存储库中。
* 调用的工作流存储在公共存储库中{% ifversion actions-workflow-policy %}，并且{% ifversion ghec %}企业{% else %}组织{% endif %}允许你使用公共可重用工作流{% endif %}。{% ifversion ghes or ghec or ghae %}
* 被调用的工作流程存储在内部存储库中，该存储库的设置允许对其进行访问。 有关详细信息，请参阅{% ifversion internal-actions %}“[与企业共享操作和工作流](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)”{% else %}“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}”。{% endif %}

## 使用运行器

{% ifversion fpt or ghes or ghec %}

### 使用 GitHub 托管的运行器

始终仅使用调用方的上下文来评估 {% data variables.product.prodname_dotcom %} 托管的运行器的分配。 {% data variables.product.prodname_dotcom %} 托管的运行器的计费始终与调用方相关联。 调用方工作流程不能使用被调用存储库中 {% data variables.product.prodname_dotcom %} 托管的运行器。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)”。

### 使用自托管的运行器

{% endif %}

与调用方工作流程属于同一用户或组织{% ifversion ghes or ghec or ghae %} 或企业{% endif %} 的被调用工作流程可以从调用方的上下文中访问自托管运行器。 这意味着被调用的工作流程可以访问自托管运行器，这些运行器具有以下特点：
* 在调用方存储库中
* 在调用方存储库的组织{% ifversion ghes or ghec or ghae %} 或企业{% endif %} 中，前提是运行器已可供调用方存储库使用

## 限制

{% ifversion nested-reusable-workflow %}
* 最多可以连接到四个级别的工作流。 有关详细信息，请参阅“[嵌套可重用工作流](#nesting-reusable-workflows)”。
{% else %}
* 可重用工作流程无法调用其他可重用工作流程。
{% endif %}
* 存储在私有存储库中的可重用工作流程只能由同一存储库中的工作流程使用。
* 对于在调用方工作流中的工作流级别定义的 `env` 上下文，在其中设置的任何环境变量都不会传播到被调用的工作流。 有关 `env` 上下文的详细信息，请参阅“[GitHub Actions 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)”。{% ifversion actions-reusable-workflow-matrix %}{% else %}
* 任何调用可重用工作流的作业都不支持 `strategy` 属性。{% endif %}

## 创建可重用的工作流程

可重用工作流程是 YAML 格式的文件，与任何其他工作流程文件非常相似。 与其他工作流文件一样，可以在存储库的 `.github/workflows` 目录中找到可重用的工作流。 不支持 `workflows` 目录的子目录。

若要使工作流可重用，`on` 的值必须包括 `workflow_call`：

```yaml
on:
  workflow_call:
```

### 在可重用工作流程中使用输入和机密

您可以定义输入和机密，这些输入和机密可以从调用方工作流程传递，然后在被调用的工作流程中使用。 在可重用工作流程中使用输入或机密有三个阶段。

1. 在可重用工作流中，使用 `inputs` 和 `secrets` 关键字定义将从调用方工作流传递的输入或机密。
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         config-path:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %}有关定义输入和机密的语法的详细信息，请参阅 [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) 和 [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets)。
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. 在可重用工作流中，引用在上一步的 `on` 键中定义的输入或机密。

   {% note %}

   注意：如果在调用工作流中使用 `secrets: inherit` 继承机密，那么即使未在 `on` 键中显式定义机密，也可以引用它们。 有关详细信息，请参阅“[GitHub Actions 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)”。

   {% endnote %} {%- else %}
1. 在可重用工作流中，引用在上一步的 `on` 键中定义的输入或机密。
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
       - uses: actions/labeler@v4
         with:
           repo-token: ${{ secrets.envPAT }}
           configuration-path: ${{ inputs.config-path }}
   ```
   {% endraw %} 在上面的示例中，`envPAT` 是已添加到 `production` 环境的环境机密。 因此，在作业中引用了此环境。

   {% note %}

   注意：环境机密是存储在为存储库定义的环境中的加密字符串。 环境机密仅适用于引用相应环境的工作流程作业。 有关详细信息，请参阅“[使用环境进行部署](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)”。

   {% endnote %}

1. 传递来自调用方工作流程的输入或机密。

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### 示例可重用工作流程

此名为 `workflow-B.yml` 的可重用工作流文件（稍后将在[调用方工作流示例](#example-caller-workflow)中引用此文件）从调用方工作流中获取输入字符串和机密，并在操作中使用它们。

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      config-path:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v4
      with:
        repo-token: ${{ secrets.token }}
        configuration-path: ${{ inputs.config-path }}
```
{% endraw %}

## 调用可重用工作流程

使用 `uses` 关键字调用可重用工作流。 与在工作流程中使用操作不同，您可以直接在作业中调用可重用工作流程，而不是从作业步骤中调用。

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

可以使用{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}以下语法之一：{% else %}语法：{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

您可以调用多个工作流程，在单独的作业中引用每个工作流程。

{% data reusables.actions.uses-keyword-example %}

### 将输入和机密传递到可重用的工作流程

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

{% ifversion actions-reusable-workflow-matrix %}
### 将矩阵策略与可重用工作流配合使用

使用矩阵策略的作业可以调用可重用工作流。

使用矩阵策略，可以在单个作业定义中使用变量自动创建基于变量组合的多个作业运行。 例如，可以使用矩阵策略将不同输入传递给可重用工作流。 有关矩阵的详细信息，请参阅“[为作业使用矩阵](/actions/using-jobs/using-a-matrix-for-your-jobs)”。

以下示例作业调用可重用工作流，并通过使用值 `[dev, stage, prod]` 定义变量 `target` 来引用矩阵上下文。 它将运行三个作业，变量中的每个值对应一个作业。

{% raw %}
```yaml{:copy}
jobs:
  ReuseableMatrixJobForDeployment:
    strategy:
      matrix:
        target: [dev, stage, prod]
    uses: octocat/octo-repo/.github/workflows/deployment.yml@main
    with:
      target: ${{ matrix.target }}
```
{% endraw %} {% endif %}

### 调用可重用工作流程的作业支持的关键字

调用可重用工作流程时，只能在包含调用的作业中使用以下关键字：

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id) {%- ifversion actions-inherit-secrets-reusable-workflows %}
* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) {%- endif %} {%- ifversion actions-reusable-workflow-matrix %}
* [`jobs.<job_id>.strategy`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategy) {%- endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **注意：**

   * 如果调用作业中未指定 `jobs.<job_id>.permissions`，则调用的工作流将具有 `GITHUB_TOKEN` 的默认权限。 有关详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”。
   * 从调用方工作流传递的 `GITHUB_TOKEN` 权限只能由被调用的工作流降级（不能升级）。

   {% endnote %}

### 示例调用方工作流程

此工作流程文件调用两个工作流程文件。 向其中的第二个文件 `workflow-B.yml`（如[可重用工作流示例](#example-reusable-workflow)中所示）传递了一个输入 (`config-path`) 和一个机密 (`token`)。

{% raw %}
```yaml{:copy}
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    permissions:
      contents: read
      pull-requests: write
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% ifversion nested-reusable-workflow %}
## 嵌套可重用工作流

最多可以连接四个级别的工作流 - 即顶级调用方工作流和最多三个级别的可重用工作流。 例如：caller-workflow.yml → called-workflow-1.yml → called-workflow-2.yml → called-workflow-3.yml   。 不允许工作流树中存在循环。

在可重用工作流中，可以调用另一个可重用工作流。

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:

jobs:
  call-another-reusable:
    uses: octo-org/example-repo/.github/workflows/another-reusable.yml@v1
```
{% endraw %}

### 将机密传递给嵌套工作流

可以在调用工作流中使用 `jobs.<job_id>.secrets` 将命名机密传递给直接调用的工作流。 或者，可以使用 `jobs.<job_id>.secrets.inherit` 将调用工作流的所有机密传递给直接调用的工作流。 有关详细信息，请参阅上面的“[将输入和机密传递给可重用工作流](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow)”部分，以及参考文章“[GitHub Actions 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)”。 机密仅传递给直接调用的工作流，因此在工作流链 A > B > C 中，工作流 C 仅从 A 接收从 A 传递给 B，然后从 B 传递给 C 的机密。

在以下示例中，工作流 A 使用 `inherit` 关键字将其所有机密传递给工作流 B，但工作流 B 仅将一个机密传递给工作流 C。传递给工作流 B 的任何其他机密都不可供工作流 C 使用。

{% raw %}
```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit # pass all secrets
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
    secrets:
      envPAT: ${{ secrets.envPAT }} # pass just this secret
```
{% endraw %}

### 访问和权限

如果初始调用方工作流无法访问任何嵌套工作流，则包含嵌套可重用工作流的工作流会失败。 有关详细信息，请参阅“[访问可重用工作流](/actions/using-workflows/reusing-workflows#access-to-reusable-workflows)”。

`GITHUB_TOKEN` 权限在嵌套工作流中只能相同或更严格。 例如，在工作流链 A > B > C 中，如果工作流 A 具有 `package: read` 令牌权限，则 B 和 C 不能具有 `package: write` 权限。 有关详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。

有关如何使用 API 确定特定工作流运行中涉及哪些工作流文件的信息，请参阅“[监视正在使用哪些工作流](#monitoring-which-workflows-are-being-used)”。
{% endif %}

## 使用可重用工作流程的输出

可重用工作流程可能会生成要在调用方工作流程中使用的数据。 若要使用这些输出，必须将它们指定为可重用工作流的输出。{% ifversion actions-reusable-workflow-matrix %}

如果设置输出的可重用工作流使用矩阵策略来执行，则输出会是由矩阵的最后一个成功完成且实际设置值的可重用工作流设置的输出。
这意味着，如果最后一个成功完成可重用工作流为其输出设置空字符串，而倒数第二个成功完成可重用工作流为其输出设置实际值，则输出会包含倒数第二个完成可重用工作流的值。{% endif %}

以下可重用工作流程具有包含两个步骤的单个作业。 在每个步骤中，我们设置一个单词作为输出："hello" 和 "world"。 在作业的 `outputs` 部分，我们将这些步骤输出映射到名为 `output1` 和 `output2` 的作业输出。 然后，在 `on.workflow_call.outputs` 部分中，为工作流本身定义两个输出，一个称为 `firstword`，映射到 `output1`，另一个称为 `secondword`，映射到 `output2`。

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

现在，我们可以在调用方工作流程中使用输出，就像使用同一工作流程中作业的输出一样。 我们使用在可重用工作流中的工作流级别定义的名称引用输出：`firstword` 和 `secondword`。 在此工作流中，`job1` 调用可重用工作流，`job2` 将可重用工作流的输出（“hello world”）呈现在工作流日志的标准输出中。

{% raw %}
```yaml{:copy}
name: Call a reusable workflow and use its outputs

on:
  workflow_dispatch:

jobs:
  job1:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@v1

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.firstword }} ${{ needs.job1.outputs.secondword }}
```
{% endraw %}

有关使用作业输出的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)”。

## 监控正在使用的工作流程

您可以使用 {% data variables.product.prodname_dotcom %} REST API 来监控可重用工作流程的使用过程。 `prepared_workflow_job` 审核日志操作会在工作流作业启动时触发。 记录的数据包括：
* `repo` - 工作流作业所在的组织/存储库。 对于调用其他工作流程的作业，这是调用方工作流程的组织/存储库。
* `@timestamp` - 启动作业的日期和时间，采用 Unix 纪元格式。
* `job_name` - 运行的作业的名称。
{% ifversion nested-reusable-workflow %}
* `calling_workflow_refs` - 此工作流作业中涉及的所有调用方工作流的文件路径数组。 数组中的项的顺序与它们被调用的顺序相反。 例如，在工作流 A > B > C 的链中，当查看工作流 C 中作业的日志时，数组为 `["octo-org/octo-repo/.github/workflows/B.yml", "octo-org/octo-repo/.github/workflows/A.yml"]`。
* `calling_workflow_shas` - 此工作流作业中涉及的所有调用方工作流的 SHA 数组。 数组包含的项数与 `calling_workflow_refs` 数组的相同，并且这些项的顺序相同。 {% endif %}
* `job_workflow_ref` - 使用的工作流文件，采用 `{owner}/{repo}/{path}/{filename}@{ref}` 格式。 对于调用其他工作流程的作业，这用于标识被调用的工作流程。

有关使用 REST API 查询组织的审核日志的信息，请参阅“[组织](/rest/reference/orgs#get-the-audit-log-for-an-organization)”。

{% note %}

注意：只能使用 REST API 查看 `prepared_workflow_job` 的审核数据。 它在 {% data variables.product.prodname_dotcom %} Web 界面中不可见，也不包含在 JSON/CSV 导出的审核数据中。

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## 使用可重用工作流重新运行工作流和作业

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## 后续步骤

若要继续了解 {% data variables.product.prodname_actions %}，请参阅“[触发工作流的事件](/actions/learn-github-actions/events-that-trigger-workflows)”。

{% ifversion restrict-groups-to-workflows %}你可以通过创建只能执行特定可重用工作流的自托管运行器组来标准化部署。 有关详细信息，请参阅“[使用组管理对自托管运行器的访问权限](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”。{% endif %}
