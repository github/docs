---
title: GitHub Discussions 快速入门
intro: '在现有仓库上启用 {% data variables.product.prodname_discussions %} ，并发起与社区的对话。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
shortTitle: 快速入门
---


## 简介

{% data variables.product.prodname_discussions %} 是一个围绕开源项目为社区提供协作沟通的论坛。 不像 {% data variables.product.prodname_github_issues %}，讨论用于需要透明和可访问的对话，但不需要在项目板上进行跟踪，并且与代码无关。 讨论使公共论坛中能够进行流畅、公开的对话。

通过连接和提供更集中的区域来连接和查找信息，讨论为更多协作对话提供了空间。

## 在仓库中启用 {% data variables.product.prodname_discussions %}

仓库所有者和具有写入访问权限的人可在其公共和私有仓库中为社区启用 {% data variables.product.prodname_discussions %}。

When you first enable {% data variables.product.prodname_discussions %}, you will be invited to configure a welcome post.

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 {% octicon "gear" aria-label="The gear icon" %} **Settings（设置）**。 ![公共设置按钮](/assets/images/help/discussions/public-repo-settings.png)
1. 在“Features（功能）”下，单击 **Set up discussions（设置讨论）**。 ![Set up a discussion button under "Features" for enabling or disabling GitHub Discussions for a repository](/assets/images/help/discussions/setup-discussions-button.png)
1. 在“Start a new discussion（开始新讨论）”下，编辑模板以与要为社区设置的资源和语气保持一致。
1. 单击 **Start discussion（开始讨论）**。 !["Start discussion（开始讨论）"按钮](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## 欢迎参与您的讨论

You can welcome your community and introduce a new way to communicate in a repository by creating a welcome post and pinning the post to your {% data variables.product.prodname_discussions %} page. 固定和锁定讨论有助于人们知道帖子是作为公告发布的。 您可以使用公告将人员链接到更多资源，并指导在社区中开始讨论。 有关固定讨论的更多信息，请参阅“[管理仓库中的讨论](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository#pinning-a-discussion)”。


## 为贡献者设置社区指南

您可以设置参与指南，以鼓励协作者进行与仓库相关的有意义、有用的对话。 您还可以更新仓库的 README，以传达协作者何时应打开问题或讨论的期望。

有关为项目提供指南的更多信息，请参阅“[为项目添加行为准则](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)”和“[设置健康参与的项目](/communities/setting-up-your-project-for-healthy-contributions)”。

## 创建新讨论

Any authenticated user who can view a repository can create a discussion.

{% data reusables.discussions.starting-a-discussion %}

## 组织讨论

仓库所有者和具有写入权限的人可以创建新类别来保持讨论井然有序。 参与和创建新讨论的协作者可以将讨论分组到最相关的现有类别。 讨论也可以在创建后重新分类。 更多信息请参阅“[管理仓库中讨论的类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)”。

{% data reusables.discussions.you-can-label-discussions %}

## 促进健康的对话

具有仓库写入权限的人可以通过固定讨论、删除不再有用或对社区有害的讨论以及将讨论转移到组织拥有的更相关的仓库，来帮助显示重要的对话。 更多信息请参阅“[管理仓库中的讨论](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository)”。

对仓库具有分类权限的人可以通过将评论标记为答案、锁定不再有用或对社区造成损害的讨论，以及在想法仍处于开发的早期阶段时将问题转换为讨论，从而帮助主持项目的讨论。 更多信息请参阅“[主持讨论](/discussions/managing-discussions-for-your-community/moderating-discussions)”。

## 后续步骤

一旦有明确的路径来确定范围以及将想法从概念变为现实，您就可以创建议题并开始跟踪进度。 有关从讨论创建议题的更多信息，请参阅“[主持讨论](/discussions/managing-discussions-for-your-community/moderating-discussions)”。
