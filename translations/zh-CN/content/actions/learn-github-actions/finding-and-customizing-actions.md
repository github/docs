---
title: 查找和自定义操作
shortTitle: 查找和自定义操作
intro: 操作是支持工作流程的构建块。 工作流程可以包含社区创建的操作，您也可以直接在应用程序的仓库中创建您自己的操作。 本指南说明如何发现、使用和自定义操作。
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概览

在工作流程中使用的操作可以定义于：

- 与工作流程文件相同的仓库{% ifversion internal-actions %}
- 在同一企业帐户中被配置为允许访问工作流程的内部仓库{% endif %}
- 任何公共仓库
- Docker Hub 上发布的 Docker 容器图像

{% data variables.product.prodname_marketplace %} 是您查找 {% data variables.product.prodname_dotcom %} 社区创建的操作的中心位置。{% ifversion fpt or ghec %} [{% data variables.product.prodname_marketplace %} 页面](https://github.com/marketplace/actions/)可用于按类别筛选操作。 {% endif %}

{% data reusables.actions.enterprise-marketplace-actions %}

{% ifversion fpt or ghec %}

## 在工作流程编辑器中浏览 Marketplace 操作

您可以直接在仓库的工作流程编辑器中搜索和浏览操作。 从边栏可以搜索特定的操作、查看特色操作和浏览特色类别。 您也可以查看操作从 {% data variables.product.prodname_dotcom %} 社区获得的星标数。

1. 在仓库中，浏览至要编辑的工作流程文件。
1. 要打开工作流程编辑器，在文件视图右上角单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![编辑工作流程文件按钮](/assets/images/help/repository/actions-edit-workflow-file.png)
1. 在编辑器右侧，使用 {% data variables.product.prodname_marketplace %} 边栏浏览操作。 带有 {% octicon "verified" aria-label="The verified badge" %} 徽章的操作表示 {% data variables.product.prodname_dotcom %} 已验证操作的创建者为合作伙伴组织。 ![Marketplace 工作流程边栏](/assets/images/help/repository/actions-marketplace-sidebar.png)

## 添加操作到工作流程

您可以通过在工作流程文件中引用操作来向工作流程添加操作。

您可以将 {% data variables.product.prodname_actions %} 工作流程中引用的操作视为包含工作流程的仓库依赖图中的依赖项。 更多信息请参阅“[关于依赖关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6269 %}

{% note %}

**注意：**为了增强安全性，{% data variables.product.prodname_actions %} 弃用了操作的重定向。 这意味着，当操作存储库的所有者或名称发生更改时，使用该操作并具有先前名称的任何工作流程都将失败。

{% endnote %}

{% endif %}

### 从 {% data variables.product.prodname_marketplace %} 添加操作

操作的列表页包括操作的版本以及使用操作所需的工作流程语法。 为使工作流程在操作有更新时也保持稳定，您可以在工作流程文件中指定 Git 或 Docker 标记号以引用所用操作的版本。

1. 导航到要在工作流程中使用的操作。
1. 在“Installation（安装）”下，单击 {% octicon "clippy" aria-label="The edit icon" %} 复制工作流程语法。 ![查看操作列表](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. 将语法粘贴为工作流程中的新步骤。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)”。
1. 如果操作要求您提供输入，请将其设置在工作流程中。 有关操作可能需要的输入的更多信息，请参阅“[对操作使用输入和输出](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)”。

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### 从相同仓库添加操作

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
      - uses: {% data reusables.actions.action-checkout %}
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```

`action.yml` 文件用于提供操作的元数据。 要了解此文件的内容，请参阅“[GitHub Actions 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions)”。

### 从不同仓库添加操作

如果在与工作流程文件不同的仓库中定义了某个操作，则可以在工作流程文件中使用 `{owner}/{repo}@{ref}` 语法引用该操作。

该操作必须存储在公共仓库{% ifversion internal-actions %} 或配置为允许访问工作流程的内部仓库中。 更多信息请参阅“[与您的企业分享操作和工作流程](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)。”{% else %}。{% endif %}

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: {% data reusables.actions.action-setup-node %}
```

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


## 对自定义操作使用发行版管理

社区操作的创建者可以选择使用标记、分支或 SHA 值来管理操作的版本。 与任何依赖项类似，您应该根据自动接受操作更新的舒适程度来指示要使用的操作版本。

您将在工作流程文件中指定操作的版本。 检查操作的文档，了解其发行版管理方法的信息，并查看要使用的标记、分支或 SHA 值。

{% note %}

**注意：** 我们建议您在使用第三方操作时使用 SHA 值。 更多信息请参阅“[GitHub Actions 的安全性增强](/actions/learn-github-actions/security-hardening-for-github-actions#using-third-party-actions)”。

{% endnote %}

### 使用标记

标记可用于让您决定何时在主要版本和次要版本之间切换，但这只是临时的，可能被维护员移动或删除。 此示例演示如何定位已标记为 `v1.0.1` 的操作：

```yaml
steps:
  - uses: actions/javascript-action@v1.0.1
```

### 使用 SHA

如果需要更可靠的版本控制，应使用与操作版本关联的 SHA 值。 SHA 是不可变的，因此比标记或分支更可靠。 但是，此方法意味着您不会自动接收操作的更新，包括重要的 Bug 修复和安全更新。 {% ifversion fpt or ghes > 3.0 or ghae or ghec %}您必须使用提交的完整 SHA 值，而不是缩写值。 {% endif %}此示例针对操作的 SHA：

```yaml
steps:
  - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

### 使用分支

为操作指定目标分支意味着它将始终在该分支上运行当前的版本。 如果对分支的更新包含重大更改，此方法可能会造成问题。 此示例针对名为 `@main`的分支：

```yaml
steps:
  - uses: actions/javascript-action@main
```

更多信息请参阅“[对操作使用发行版管理](/actions/creating-actions/about-actions#using-release-management-for-actions)”。

## 对操作使用输入和输出

操作通常接受或需要输入并生成可以使用的输出。 例如，操作可能要求您指定文件的路径、标签的名称或它将用作操作处理一部分的其他数据。

要查看操作的输入和输出，请检查仓库根目录中的 `action.yml` 或 `action.yaml`。

在此示例 `.yml` 中， `inputs` 关键字定义名为 `file-path` 的必需输入，并且包括在未指定任何输入时使用的默认值。 `outputs` 关键字定义名为 `results-file` 的输出，告诉您到何处查找结果。

```yaml
name: "Example"
description: "Receives file and generates output"
inputs:
  file-path: # id of input
    description: "Path to test script"
    required: true
    default: "test-file.js"
outputs:
  results-file: # id of output
    description: "Path to results file"
```

{% ifversion ghae %}

## 使用 {% data variables.product.prodname_ghe_managed %} 随附的操作
默认情况下，您可以使用大多数官方

{% data variables.product.prodname_dotcom %} 授权的操作（在 {% data variables.product.prodname_ghe_managed %} 中）。 更多信息请参阅“[使用 {% data variables.product.prodname_ghe_managed %} 中的操作](/admin/github-actions/using-actions-in-github-ae)”。
{% endif %}

## 后续步骤

要继续了解 {% data variables.product.prodname_actions %}，请参阅“[{% data variables.product.prodname_actions %} 的基本功能](/actions/learn-github-actions/essential-features-of-github-actions)”。
