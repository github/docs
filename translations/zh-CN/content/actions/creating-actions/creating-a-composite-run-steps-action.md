---
title: 创建组合运行步骤操作
intro: '在本指南中，您将学习如何构建组合运行步骤操作。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

在本指南中，您将了解创建和使用打包的组合运行步骤操作所需的基本组件。 本指南的重点是打包操作所需的组件，因此很少讲操作代码的功能。 该操作将依次打印 "Hello World" 和 "Goodbye"，如果您提供自定义名称，则将依次打印 "Hello [who-to-greet]" 和 "Goodbye"。 该操作还将随机数映射到 `random-number` 输出变量，并运行名为 `goodbye.sh` 的脚本。

完成此项目后，您应会了解如何构建自己的组合运行步骤操作以及在工作流程中测试它。

### 基本要求

在开始之前，您将要创建 {% data variables.product.product_name %} 仓库。

1. 在 {% data variables.product.product_location %} 上创建公共仓库 您可以选择任何仓库名称，或者使用下面的 `hello-world-compposite-run-steps-action` 示例。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。 更多信息请参阅“[创建新仓库](/articles/creating-a-new-repository)”。

1. 将仓库克隆到计算机。 更多信息请参阅“[克隆仓库](/articles/cloning-a-repository)”。

1. 从您的终端，将目录更改为新仓库。

  ```shell
  cd hello-world-composite-run-steps-action
  ```

2. 在 `hello-world-composite-run-steps-action` 仓库中，创建一个名为 `goodbye.sh` 的新文件，并添加以下示例代码：

  ```bash
  echo "Goodbye"
  ```

3. 从您的终端创建 `goodbye.sh` 可执行文件。

  ```shell
  chmod +x goodbye.sh
  ```

1. 从终端检入 `goodbye.sh` 文件。
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

### 创建操作元数据文件

1. 在 `hello-world-composite-run-steps-action` 仓库中，创建一个名为 `action.yml` 的新文件，并添加以下示例代码： 有关此语法的更多信息，请参阅“组合运行步骤的 [`runs`](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-run-steps-actions)”。

    {% raw %}
    **action.yml**
    ```yaml
    name: 'Hello World'
    description: 'Greet someone'
    inputs:
      who-to-greet:  # id of input
        description: 'Who to greet'
        required: true
        default: 'World'
    outputs:
      random-number: 
        description: "Random number"
        value: ${{ steps.random-number-generator.outputs.random-id }}
    runs:
      using: "composite"
      steps: 
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator
          run: echo "::set-output name=random-id::$(echo $RANDOM)"
          shell: bash
        - run: ${{ github.action_path }}/goodbye.sh
          shell: bash
    ```
    {% endraw %}
  此文件定义 `who-greet` 输入，将随机生成的数字映射到 `random-number` 输出变量，并运行 `goodbye.sh` 脚本。 它还告诉运行器如何执行组合运行步骤操作。

  有关管理输出的更多信息，请参阅“组合运行步骤的 [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-run-steps-actions)”。

  有关如何使用 `github.action_path` 的更多信息，请参阅“[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”。

1. 从终端检入 `action.yml` 文件。

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. 从终端添加标记。 此示例使用名为 `v1` 的标记。 更多信息请参阅“[关于操作](/actions/creating-actions/about-actions#using-release-management-for-actions)”。

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

### 在工作流程中测试您的操作

以下工作流程代码使用您在“[创建操作元数据文件](/actions/creating-actions/creating-a-composite-run-steps-action#creating-an-action-metadata-file)”中设置的已完成 hello world 操作。

将工作流程代码复制到另一个仓库中的 `.github/workflows/main.yml` 文件，但用您创建的仓库和标记替换 `actions/hello-world-compposite-run-steps-action@v1`。 您还可以将 `who-to-greet` 输入替换为您的名称。

{% raw %}
**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
    - uses: actions/checkout@v2
    - id: foo
      uses: actions/hello-world-composite-run-steps-action@v1
      with:
        who-to-greet: 'Mona the Octocat'
    - run: echo random-number ${{ steps.foo.outputs.random-number }} 
      shell: bash
```
{% endraw %}

从您的仓库中，单击 **Actions（操作）**选项卡，然后选择最新的工作流程来运行。 输出应包括："Hello Mona the Octocat"、"Goodbye" 脚本的结果以及随机数字。
