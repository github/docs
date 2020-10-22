---
title: Finding and customizing actions
shortTitle: Finding and customizing actions
intro: 'Actions are the building blocks that power your workflow. A workflow can contain actions created by the community, or you can create your own actions directly within your application''s repository. This guide will show you how to discover, use, and customize actions.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 概览

The actions you use in your workflow can be defined in:

- 公共仓库
- The same repository where your workflow file references the action
- Docker Hub 上发布的 Docker 容器图像

{% data variables.product.prodname_marketplace %} 是一个中心位置，可供查找由 {% data variables.product.prodname_dotcom %} 社区构建的操作。 [{% data variables.product.prodname_marketplace %} page](https://github.com/marketplace/actions/) enables you to filter for actions by category.

{% data reusables.actions.enterprise-marketplace-actions %}

### Browsing Marketplace actions in the workflow editor

您可以直接在仓库的工作流程编辑器中搜索和浏览操作。 从边栏可以搜索特定的操作、查看特色操作和浏览特色类别。 您也可以查看操作从 {% data variables.product.prodname_dotcom %} 社区获得的星标数。

1. 在仓库中，浏览至要编辑的工作流程文件。
1. 要打开工作流程编辑器，在文件视图右上角单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![编辑工作流程文件按钮](/assets/images/help/repository/actions-edit-workflow-file.png)
1. 在编辑器右侧，使用 {% data variables.product.prodname_marketplace %} 边栏浏览操作。 Actions with the {% octicon "verified" aria-label="The verified badge" %} badge indicate {% data variables.product.prodname_dotcom %} has verified the creator of the action as a partner organization. ![Marketplace 工作流程边栏](/assets/images/help/repository/actions-marketplace-sidebar.png)

### Adding an action to your workflow

操作的列表页包括操作的版本以及使用操作所需的工作流程语法。 To keep your workflow stable even when updates are made to an action, you can reference the version of the action to use by specifying the Git or Docker tag number in your workflow file.

1. 导航到要在工作流程中使用的操作。
1. 在“Installation（安装）”下，单击 {% octicon "clippy" aria-label="The edit icon" %} 复制工作流程语法。 ![查看操作列表](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. 将语法粘贴为工作流程中的新步骤。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)”。
1. If the action requires you to provide inputs, set them in your workflow. For information on inputs an action might require, see "[Using inputs and outputs with an action](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)."

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### Using release management for your custom actions

The creators of a community action have the option to use tags, branches, or SHA values to manage releases of the action. Similar to any dependency, you should indicate the version of the action you'd like to use based on your comfort with automatically accepting updates to the action.

You will designate the version of the action in your workflow file. Check the action's documentation for information on their approach to release management, and to see which tag, branch, or SHA value to use.

#### Using tags

Tags are useful for letting you decide when to switch between major and minor versions, but these are more ephemeral and can be moved or deleted by the maintainer. This example demonstrates how to target an action that's been tagged as `v1.0.1`:

```yaml
steps:
    - uses: actions/javascript-action@v1.0.1
```

#### Using SHAs

If you need more reliable versioning, you should use the SHA value associated with the version of the action. SHAs are immutable and therefore more reliable than tags or branches. However this approach means you will not automatically receive updates for an action, including important bug fixes and security updates. This example targets an action's SHA:

```yaml
steps:
    - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

#### Using branches

Referring to a specific branch means that the action will always use include the latest updates on the target branch, but can create problems if those updates include breaking changes. This example targets a branch named `@main`:

```yaml
steps:
    - uses: actions/javascript-action@main
```

For more information, see "[Using release management for actions](/actions/creating-actions/about-actions#using-release-management-for-actions)."

### Using inputs and outputs with an action

An action often accepts or requires inputs and generates outputs that you can use. For example, an action might require you to specify a path to a file, the name of a label, or other data it will uses as part of the action processing.

To see the inputs and outputs of an action, check the `action.yml` or `action.yaml` in the root directory of the repository.

In this example `action.yml`, the `inputs` keyword defines a required input called `file-path`, and includes a default value that will be used if none is specified. The `outputs` keyword defines an output called `results-file`, which tells you where to locate the results.

```yaml
name: 'Example'
description: 'Receives file and generates output'
inputs:
  file-path:  # id of input
    description: "Path to test script"
    required: true
    default: 'test-file.js'
outputs:
  results-file: # id of output
    description: "Path to results file"
```

### 在工作流程文件使用操作的同一仓库中引用操作

如果操作在工作流程文件使用该操作的同一仓库中定义，您可以在工作流程文件中通过 ‌`{owner}/{repo}@{ref}` 或 `./path/to/dir` 语法引用操作。

示例仓库文件结构：

```
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

示例工作流程文件：

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - uses: actions/checkout@v2
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```

The `action.yml` file is used to provide metadata for the action. Learn about the content of this file in "[Metadata syntax for GitHub Actions](/actions/creating-actions/metadata-syntax-for-github-actions)"

### 引用 Docker Hub 上的容器

如果操作在 Docker Hub 上发布的 Docker 容器图像中定义，您必须在工作流程文件中通过 `docker://{image}:{tag}` 语法引用操作。 为保护代码和数据，强烈建议先验证 Docker Hub 中 Docker 容器图像的完整性后再将其用于工作流程。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

有关 Docker 操作的部分示例，请参阅 [Docker-image.yml 工作流程](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml)和“[创建 Docker 容器操作](/articles/creating-a-docker-container-action)”。

### 后续步骤

To continue learning about {% data variables.product.prodname_actions %}, see "[Essential features of {% data variables.product.prodname_actions %}](/actions/learn-github-actions/essential-features-of-github-actions)."
