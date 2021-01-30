---
title: GitHub Actions 的基本功能
shortTitle: 基本功能
intro: '{% data variables.product.prodname_actions %} 旨在帮助您建立强大而动态的自动化。 本指南说明如何创建包括环境变量、定制化脚本等的 {% data variables.product.prodname_actions %} 工作流程。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'overview'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 概览

{% data variables.product.prodname_actions %} 允许您自定义工作流程，以满足应用程序和团队的独特需求。 在本指南中，我们将讨论一些基本的自定义技术，例如使用变量、运行脚本以及在作业之间共享数据和构件。

### 在工作流程中使用变量

{% data variables.product.prodname_actions %} 包含每个工作流程运行的默认环境变量。 如果您需要使用自定义环境变量，可以在 YAML 工作流程文件中设置这些变量。 此示例演示如何创建名为 `POSTGRES_HOST` 和 `POSTGRES_PORT` 的自定义变量。 然后，这些变量可供 `node client.js` 脚本使用。

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

更多信息请参阅“[使用环境变量](/actions/configuring-and-managing-workflows/using-environment-variables)”。

### 添加脚本到工作流程

您可以使用操作来运行脚本和 shell 命令，然后在指定的运行器上执行。 此示例演示操作如何使用 `run` 关键字在运行器上执行 `npm install -g bats`。

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

例如，要将脚本作为操作运行，您可以将脚本存储在您的仓库中并提供路径和 shell 类型。

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”。

### 在作业之间共享数据

如果作业生成您要与同一工作流程中的另一个作业共享的文件，或者您要保存这些文件供以后参考，可以将它们作为_构件_存储在 {% data variables.product.prodname_dotcom %} 中。 构件是创建并测试代码时所创建的文件。 例如，构件可能包含二进制或包文件、测试结果、屏幕截图或日志文件。 构件与其创建时所在的工作流程运行相关，可被另一个作业使用。

例如，您可以创建一个文件，然后将其作为构件上传。

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: actions/upload-artifact@v1
        with:
          name: output-log-file
          path: output.log
```

要从单独的工作流程运行下载构件，您可以使用 `actions/download-artifact` 操作。 例如，您可以下载名为 `output-log-file` 的构件。

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: actions/download-artifact@v2
        with:
          name: output-log-file
```

有关构件的更多信息，请参阅“[使用构件持久化工作流程](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)”。

### 后续步骤

要继续了解 {% data variables.product.prodname_actions %}，请参阅“[管理复杂的工作流](/actions/learn-github-actions/managing-complex-workflows)”。
