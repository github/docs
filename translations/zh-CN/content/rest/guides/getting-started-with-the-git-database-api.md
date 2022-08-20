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
shortTitle: 开始 - Git 数据库 API
---

## 概览

这基本上允许您通过我们的 API 重新实现大量 Git 功能 - 通过直接在数据库中创建原始对象并更新分支引用，从技术上讲，您可以在不安装 Git 的情况下完成 Git 能做的任何事情。

如果 Git 仓库为空或不可用，Git 数据库 API 函数将返回 `409 Conflict`。  仓库不可用通常意味着 {% data variables.product.product_name %} 正在创建仓库。 对于空仓库，您可以使用“[创建或更新文件内容](/rest/reference/repos#create-or-update-file-contents)”端点来创建内容并初始化仓库，以便您可以使用 Git 数据库 API。 如果此响应状态仍然存在，请联系 {% data variables.contact.contact_support %}。

![git 数据库概述](/assets/images/git-database-overview.png)

有关 Git 对象数据库的更多信息，请阅读 Pro Git 手册中的 [Git 内部](http://git-scm.com/book/en/v1/Git-Internals)章节。

例如，如果要将更改提交到仓库中的某个文件，您需要：

* 获取当前提交对象
* 检索它指向的树
* 检索树中针对该特定文件路径的 blob 对象的内容
* 以某种方式更改内容并发布包含这些新内容的新 blob 对象，以获取 blob SHA
* 发布新的树对象， 将文件路径指针替换为新的 blob SHA， 以获取树 SHA
* 通过作为父级的当前提交 SHA 和新的树 SHA，创建新的提交对象，以获取提交 SHA
* 更新分支的引用以指向新的提交 SHA

看似很复杂，但是当您了解模型后，实际上很简单，它为您开辟了广阔的天地，使您可以使用 API 实现许多功能。

## 检查拉取请求的可合并性

{% warning %}

**警告！**请不要依赖直接使用 Git 或 [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference)  更新 `merge` Git 引用，因为此内容会在不发出警告的情况下过期。

{% endwarning %}

消费 API 需要明确请求拉取请求来创建一个_测试_合并提交。 当您在 UI 中查看拉取请求并且“ Merge（合并）”按钮显示时，或者当您使用 REST API 来[获取](/rest/reference/pulls#get-a-pull-request)、[创建](/rest/reference/pulls#create-a-pull-request)或[编辑](/rest/reference/pulls#update-a-pull-request)拉取请求时，将创建一个_测试_合并提交。 如果没有此请求，`merge` Git 引用将过时，直到下次有人查看拉取请求。

如果您当前正在使用会生成过时 `merge` Git 引用的轮询方法，GitHub 建议使用以下步骤从默认分支获取最新更改：

1. 接收拉取请求 web 挂钩。
2. 调用 [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) 以启动创建合并提交候选项的后台作业。
3. 使用 [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) 轮询仓库，以查看 `mergeable` 属性是 `true` 还是 `false`。 您仅在执行上述步骤后才可直接使用 Git 或 [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) 更新 `merge` Git 引用。
