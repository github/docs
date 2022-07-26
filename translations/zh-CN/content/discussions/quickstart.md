---
title: GitHub Discussions 快速入门
intro: '在现有仓库或组织上启用 {% data variables.product.prodname_discussions %} ，并发起与社区的对话。'
allowTitleToDifferFromFilename: true
versions:
  feature: discussions
shortTitle: 快速入门
---


## 简介

{% data variables.product.prodname_discussions %} is a collaborative communication forum for the community around an open source or internal project. 不像 {% data variables.product.prodname_github_issues %}，讨论用于需要透明和可访问的对话，但不需要在项目板上进行跟踪，并且与代码无关。 讨论使公共论坛中能够进行流畅、公开的对话。

通过连接和提供更集中的区域来连接和查找信息，讨论为更多协作对话提供了空间。

## 在仓库中启用 {% data variables.product.prodname_discussions %}

Repository owners and people with write access can enable {% data variables.product.prodname_discussions %} for a community on their public{% ifversion ghes > 3.5 %}, internal{% endif %} and private repositories. The visibility of a discussion is inherited from the repository the discussion is created in.

当您首次启用 {% data variables.product.prodname_discussions %} 时，将邀请您配置欢迎帖子。

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 {% octicon "gear" aria-label="The gear icon" %} **Settings（设置）**。 ![公共设置按钮](/assets/images/help/discussions/public-repo-settings.png)
1. 在“Features（功能）”下，单击 **Set up discussions（设置讨论）**。 ![在"Features（功能）"下设置讨论按钮，用于对仓库启用或禁用 GitHub Discussions](/assets/images/help/discussions/setup-discussions-button.png)
1. 在“Start a new discussion（开始新讨论）”下，编辑模板以与要为社区设置的资源和语气保持一致。
1. 单击 **Start discussion（开始讨论）**。 !["Start discussion（开始讨论）"按钮](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## 在组织上启用 {% data variables.product.prodname_discussions %}

组织所有者可以为其组织启用 {% data variables.product.prodname_discussions %}。

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## 欢迎参与您的讨论

您可以欢迎您的社区，并通过创建欢迎帖子并将帖子固定到您的 {% data variables.product.prodname_discussions %} 页面，在存储库或组织中引入一种新的沟通方式。 固定和锁定讨论有助于人们知道帖子是作为公告发布的。 您可以使用公告将人员链接到更多资源，并指导在社区中开始讨论。 有关固定讨论的详细信息，请参阅“[管理讨论](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)”。


## 为贡献者设置社区指南

对于仓库讨论，您可以设置参与指南，以鼓励协作者进行与仓库相关的有意义、有用的对话。 您还可以更新仓库的 README，以传达协作者何时应打开问题或讨论的期望。 For more information about providing guidelines for your project, see{% ifversion fpt or ghec %} "[Adding a code of conduct to your project](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" and{% endif %} "[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)."

对于组织讨论，您可以通过创建组织配置文件 README 来共享有关如何与组织互动的信息。 更多信息请参阅“[自定义组织的配置文件](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)”。

## 创建新讨论

任何可以查看仓库的认证用户都可以在该仓库中创建讨论。 同样，由于组织讨论基于源存储库，因此任何可以查看源存储库的经过身份验证的用户都可以在该组织中创建讨论。

{% data reusables.discussions.starting-a-discussion %}

## 创建新投票

任何可以查看仓库的认证用户都可以创建投票。 同样，由于组织讨论基于源存储库，因此任何可以查看源存储库的经过身份验证的用户都可以在该组织中创建投票。

{% data reusables.discussions.starting-a-poll %}

## 组织讨论

仓库所有者和对仓库具有写入权限的人可以创建新类别来保持讨论井然有序。 同样，由于组织讨论基于源存储库，因此存储库所有者和对源存储库具有写入访问权限的人员可以为组织讨论创建新类别。

Collaborators participating in and creating new discussions can group discussions into the most relevant existing categories. 讨论也可以在创建后重新分类。 更多信息请参阅“[管理讨论的类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”。

{% data reusables.discussions.you-can-label-discussions %}

## 促进健康的对话

对存储库或组织讨论的源存储库具有写入权限的人员可以通过固定讨论、删除不再有用或对社区有害的讨论，以及将讨论转移到组织拥有的更相关的存储库，来帮助显示重要的对话。 更多信息请参阅“[管理讨论](/discussions/managing-discussions-for-your-community/managing-discussions)”。

对存储库或组织讨论的源存储库具有分类权限的人员，可以通过将评论标记为答案、锁定不再有用或对社区有害的讨论，以及在想法仍处于开发的早期阶段时将议题转换为讨论，来帮助调节项目的讨论。 更多信息请参阅“[主持讨论](/discussions/managing-discussions-for-your-community/moderating-discussions)”。

## 后续步骤

一旦有明确的路径来确定范围以及将想法从概念变为现实，您就可以创建议题并开始跟踪进度。 有关从讨论创建议题的更多信息，请参阅“[主持讨论](/discussions/managing-discussions-for-your-community/moderating-discussions)”。
