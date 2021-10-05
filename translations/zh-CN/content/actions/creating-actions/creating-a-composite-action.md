---
title: Creating a composite action
intro: 'In this guide, you''ll learn how to build a composite action.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Action development
shortTitle: Composite action
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## 简介

In this guide, you'll learn about the basic components needed to create and use a packaged composite action. 本指南的重点是打包操作所需的组件，因此很少讲操作代码的功能。 该操作将依次打印 "Hello World" 和 "Goodbye"，如果您提供自定义名称，则将依次打印 "Hello [who-to-greet]" 和 "Goodbye"。 该操作还将随机数映射到 `random-number` 输出变量，并运行名为 `goodbye.sh` 的脚本。

Once you complete this project, you should understand how to build your own composite action and test it in a workflow.

{% data reusables.github-actions.context-injection-warning %}

## 基本要求

在开始之前，您将要创建 {% data variables.product.product_name %} 仓库。

1. 在 {% data variables.product.product_location %} 上创建公共仓库 You can choose any repository name, or use the following `hello-world-composite-action` example. 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。 更多信息请参阅“[创建新仓库](/articles/creating-a-new-repository)”。

1. 将仓库克隆到计算机。 更多信息请参阅“[克隆仓库](/articles/cloning-a-repository)”。

1. 从您的终端，将目录更改为新仓库。

  ```shell
  cd hello-world-composite-action
  ```

2. In the `hello-world-composite-action` repository, create a new file called `goodbye.sh`, and add the following example code:

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

## 创建操作元数据文件

1. In the `hello-world-composite-action` repository, create a new file called `action.yml` and add the following example code. For more information about this syntax, see "[`runs` for a composite actions](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)".

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
  此文件定义 `who-greet` 输入，将随机生成的数字映射到 `random-number` 输出变量，并运行 `goodbye.sh` 脚本。 It also tells the runner how to execute the composite action.

  For more information about managing outputs, see "[`outputs` for a composite action](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)".

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

## 在工作流程中测试您的操作

以下工作流程代码使用您在“[创建操作元数据文件](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)”中设置的已完成 hello world 操作。

Copy the workflow code into a `.github/workflows/main.yml` file in another repository, but replace `actions/hello-world-composite-action@v1` with the repository and tag you created. 您还可以将 `who-to-greet` 输入替换为您的名称。

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
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number ${{ steps.foo.outputs.random-number }}
        shell: bash
```
{% endraw %}

从您的仓库中，单击 **Actions（操作）**选项卡，然后选择最新的工作流程来运行。 输出应包括："Hello Mona the Octocat"、"Goodbye" 脚本的结果以及随机数字。
