---
title: 使用依赖项提交 API
intro: 可以使用依赖项提交 API 来提交项目的依赖项，例如生成或编译项目时解析的依赖项。
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
ms.openlocfilehash: f81967a46763d299afd14727cd884a36cb0b3d9c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880740'
---
{% data reusables.dependency-submission.dependency-submission-api-beta %}

## 关于依赖项提交 API

{% data reusables.dependency-submission.about-dependency-submission %}

依赖项以快照的形式提交到依赖项提交 API。 快照是一组与提交 SHA 和其他元数据关联的依赖项，反映了提交时存储库的当前状态。 有关依赖项提交 API 的详细信息，请参阅[依赖项提交 REST API 文档](/rest/dependency-graph/dependency-submission)。

## 在生成时提交依赖项

可以在 {% data variables.product.prodname_actions %} 工作流中使用依赖项提交 API，从而在生成项目时提交项目的依赖项。 

### 使用预创建的操作

使用依赖项提交 API 最简单的方法是向存储库添加预创建的操作，该操作将收集依赖项列表并将它转换为所需的快照格式，然后将此列表提交到 API。 {% data variables.product.prodname_marketplace %} 上提供了针对各种生态系统完成这些步骤的操作，在 beta 版本以及更高版本中将创建更多的操作。 可以在下表中找到当前可用操作的链接：

生态系统 | 操作 |
--- | --- |
Go | [Go 依赖项提交](https://github.com/actions/go-dependency-submission)

例如，以下 [Go 依赖项提交](https://github.com/actions/go-dependency-submission)工作流将计算 Go 生成目标（带有 `main` 函数的 Go 文件）的依赖项，并将列表提交到依赖项提交 API。 

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main
      
# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Envionment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
        
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"
          
      - name: Run snapshot action
        uses: @actions/go-dependency-submission@v1
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go

```
### 创建自己的操作

你还可以编写你自己操作，以便在生成时提交项目的依赖项。 你的工作流应：

  1. 生成项目的依赖项列表。
  2. 将依赖项列表转换为依赖项提交 API 接受的快照格式。 有关格式的详细信息，请参阅[依赖项提交 REST API 文档](/rest/dependency-graph/dependency-submission)中“创建存储库快照”API 操作的正文参数。
  3. 将格式化的依赖项列表提交到依赖项提交 API。

{% data variables.product.product_name %} 将维护[依赖项提交工具包](https://github.com/github/dependency-submission-toolkit)，这是一个 TypeScript 库，可帮助你生成自己的 GitHub 操作，用于将依赖项提交到依赖项提交 API。 有关编写操作的详细信息，请参阅“[创建操作](/actions/creating-actions)”。
