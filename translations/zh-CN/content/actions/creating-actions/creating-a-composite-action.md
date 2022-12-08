---
title: 创建组合操作
shortTitle: Create a composite action
intro: 在本指南中，您将学习如何构建组合操作。
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
ms.openlocfilehash: 5c7d332d2b3626a5628e85b09c35ffa6a0ca5f33
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192037'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

在本指南中，您将了解创建和使用打包的组合操作所需的基本组件。 本指南的重点是打包操作所需的组件，因此很少讲操作代码的功能。 该操作将依次打印 "Hello World" 和 "Goodbye"，如果您提供自定义名称，则将依次打印 "Hello [who-to-greet]" 和 "Goodbye"。 该操作还会将随机数映射到 `random-number` 输出变量，并运行名为 `goodbye.sh` 的脚本。

完成此项目后，您应了解如何构建自己的组合操作和在工作流程测试该操作。

{% data reusables.actions.context-injection-warning %}

## 先决条件

在开始之前，你将在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上创建一个存储库。

1. 在 {% data variables.location.product_location %} 上创建一个公共存储库。 可以选择任何存储库名称，或使用以下 `hello-world-composite-action` 示例。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。 有关详细信息，请参阅“[创建新存储库](/articles/creating-a-new-repository)”。

1. 将仓库克隆到计算机。 有关详细信息，请参阅“[克隆存储库](/articles/cloning-a-repository)”。

1. 从您的终端，将目录更改为新仓库。

  ```shell
  cd hello-world-composite-action
  ```

2. 在 `hello-world-composite-action` 存储库中，新建一个名为 `goodbye.sh` 的文件，并添加以下示例代码：

  ```bash
  echo "Goodbye"
  ```

3. 在终端中，生成 `goodbye.sh` 可执行文件。

  ```shell
  chmod +x goodbye.sh
  ```

1. 从终端签入 `goodbye.sh` 文件。
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## 创建操作元数据文件

1. 在 `hello-world-composite-action` 存储库中，新建一个名为 `action.yml` 的文件，并添加以下示例代码。 有关此语法的详细信息，请参阅“[组合操作的 `runs`](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)”。

    {% raw %} action.yml
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
        value: ${{ steps.random-number-generator.outputs.random-number }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
          run: echo "random-number=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
          run: echo "::set-output name=random-number::$(echo $RANDOM)"
{%- endif %}{% raw %}
          shell: bash
        - run: echo "${{ github.action_path }}" >> $GITHUB_PATH
          shell: bash
        - run: goodbye.sh
          shell: bash
    ```
    {% endraw %} 此文件定义 `who-to-greet` 输入，将随机生成的数字映射到 `random-number` 输出变量，将操作路径添加到运行器系统路径（以在执行期间查找 `goodbye.sh` 脚本），并运行 `goodbye.sh` 脚本。

  有关管理输出的详细信息，请参阅“[组合操作的 `outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)”。

  有关如何使用 `github.action_path` 的详细信息，请参阅“[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”。

1. 从终端签入 `action.yml` 文件。

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. 从终端添加标记。 本示例使用名为 `v1` 的标记。 有关详细信息，请参阅“[关于操作](/actions/creating-actions/about-actions#using-release-management-for-actions)”。

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## 在工作流程中测试您的操作

以下工作流代码使用你在“[创建操作元数据文件](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file)”中完成的 hello world 操作。

将工作流代码复制到另一个存储库中的 `.github/workflows/main.yml` 文件中，但将 `actions/hello-world-composite-action@v1` 替换为你创建的存储库和标记。 还可以将 `who-to-greet` 输入替换为你的名称。

.github/workflows/main.yml
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - id: foo
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number {% raw %}${{ steps.foo.outputs.random-number }}{% endraw %}
        shell: bash
```

从存储库中，单击“操作”选项卡，然后选择最新的工作流运行。 输出应包括："Hello Mona the Octocat"、"Goodbye" 脚本的结果以及随机数字。
