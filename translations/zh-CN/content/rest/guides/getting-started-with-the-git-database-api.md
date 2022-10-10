---
title: Git 数据库 API 入门指南
intro: 'Git 数据库 API 使您能够在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入原始 Git 对象，并列出和更新您的引用（分支头部和标记）。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Git Database API
ms.openlocfilehash: b7044e299602de42a2c880df8da4a6f19ef9334b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129051'
---
## 概述 

这基本上允许您通过我们的 API 重新实现大量 Git 功能 - 通过直接在数据库中创建原始对象并更新分支引用，从技术上讲，您可以在不安装 Git 的情况下完成 Git 能做的任何事情。

如果 Git 存储库为空或不可用，Git 数据库 API 函数将返回 `409 Conflict`。  仓库不可用通常意味着 {% data variables.product.product_name %} 正在创建仓库。 对于空存储库，可以使用“[创建或更新文件内容](/rest/reference/repos#create-or-update-file-contents)”终结点来创建内容并初始化存储库，以便可以使用 Git 数据库 API。 如果此响应状态仍然存在，请联系 {% data variables.contact.contact_support %}。

![git 数据库概述](/assets/images/git-database-overview.png)

有关 Git 对象数据库的详细信息，请阅读 Pro Git 手册中的 [Git 内部](http://git-scm.com/book/en/v1/Git-Internals)章节。

例如，如果要将更改提交到存储库中的某个文件，需要：

* 获取当前提交对象
* 检索它指向的树
* 检索树中针对该特定文件路径的 blob 对象的内容
* 以某种方式更改内容并发布包含这些新内容的新 blob 对象，以获取 blob SHA
* 发布新的树对象， 将文件路径指针替换为新的 blob SHA， 以获取树 SHA
* 通过作为父级的当前提交 SHA 和新的树 SHA，创建新的提交对象，以获取提交 SHA
* 更新分支的引用以指向新的提交 SHA

看似很复杂，但是当了解模型后，实际上很简单，它将带来崭新的体验，使你可以使用 API 实现许多功能。

## 检查拉取请求的可合并性

{% warning %}

警告！ 请不要依赖于直接使用 Git 或 [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) 来更新 `merge` Git 引用，因为此内容会在没有警告的情况下过时。

{% endwarning %}

使用 API 需要明确请求拉取请求来创建一个 _测试_ 合并提交。 在 UI 中查看拉取请求并显示“合并”按钮时，或者使用 REST API [获取](/rest/reference/pulls#get-a-pull-request)、[创建](/rest/reference/pulls#create-a-pull-request)或 [编辑](/rest/reference/pulls#update-a-pull-request)拉取请求时，将创建一个 _测试_ 合并提交。 如果没有此请求，`merge` Git 引用将过期，直到有人查看拉取请求。

如果当前正在使用会生成过时 `merge` Git 引用的轮询方法，GitHub 建议使用以下步骤从默认分支获取最新更改：

1. 接收拉取请求 web 挂钩。
2. 调用 [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) 以启动创建合并提交候选项的后台作业。
3. 使用 [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) 轮询存储库以查看是否 `mergeable` 属性为 `true` 或 `false`。 只有在执行上述步骤后，才能直接使用 Git 或 [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) 更新 `merge` Git 引用。
