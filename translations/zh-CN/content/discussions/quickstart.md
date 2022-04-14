---
title: GitHub Discussions 快速入门
intro: 'Enable {% data variables.product.prodname_discussions %} on an existing repository or organization and start conversations with your community.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
shortTitle: 快速入门
---


## 简介

{% data variables.product.prodname_discussions %} 是一个围绕开源项目为社区提供协作沟通的论坛。 不像 {% data variables.product.prodname_github_issues %}，讨论用于需要透明和可访问的对话，但不需要在项目板上进行跟踪，并且与代码无关。 讨论使公共论坛中能够进行流畅、公开的对话。

通过连接和提供更集中的区域来连接和查找信息，讨论为更多协作对话提供了空间。

## 在仓库中启用 {% data variables.product.prodname_discussions %}

仓库所有者和具有写入访问权限的人可在其公共和私有仓库中为社区启用 {% data variables.product.prodname_discussions %}。

当您首次启用 {% data variables.product.prodname_discussions %} 时，将邀请您配置欢迎帖子。

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 {% octicon "gear" aria-label="The gear icon" %} **Settings（设置）**。 ![公共设置按钮](/assets/images/help/discussions/public-repo-settings.png)
1. 在“Features（功能）”下，单击 **Set up discussions（设置讨论）**。 ![在"Features（功能）"下设置讨论按钮，用于对仓库启用或禁用 GitHub Discussions](/assets/images/help/discussions/setup-discussions-button.png)
1. 在“Start a new discussion（开始新讨论）”下，编辑模板以与要为社区设置的资源和语气保持一致。
1. 单击 **Start discussion（开始讨论）**。 !["Start discussion（开始讨论）"按钮](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## Enabling {% data variables.product.prodname_discussions %} on your organization

Organization owners can enable {% data variables.product.prodname_discussions %} for their organization.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## 欢迎参与您的讨论

You can welcome your community and introduce a new way to communicate in a repository or organization by creating a welcome post and pinning the post to your {% data variables.product.prodname_discussions %} page. 固定和锁定讨论有助于人们知道帖子是作为公告发布的。 您可以使用公告将人员链接到更多资源，并指导在社区中开始讨论。 For more information about pinning a discussion, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)."


## 为贡献者设置社区指南

For repository discussions, you can set contributing guidelines to encourage collaborators to have meaningful, useful conversations that are relevant to the repository. 您还可以更新仓库的 README，以传达协作者何时应打开问题或讨论的期望。 有关为项目提供指南的更多信息，请参阅“[为项目添加行为准则](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)”和“[设置健康参与的项目](/communities/setting-up-your-project-for-healthy-contributions)”。

For organization discussions, you share information about how to engage with your organization by creating an organization profile README. 更多信息请参阅“[自定义组织的配置文件](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)”。

## 创建新讨论

Any authenticated user who can view the repository can create a discussion in that repository. Similarly, since organization discussions are based on a source repository, any authenticated user who can view the source repository can create a discussion in that organization.

{% data reusables.discussions.starting-a-discussion %}

## Creating a new poll

Any authenticated user who can view a repository can create a poll. Similarly, since organization discussions are based on a source repository, any authenticated user who can view the source repository can create a poll in that organization.

{% data reusables.discussions.starting-a-poll %}

## 组织讨论

Repository owners and people with write access to the repository can create new categories to keep discussions organized. Similarly, since organization discussions are based on a source repository, repository owners and people with write access to the source repository can create new categories for organization discussions.

参与和创建新讨论的协作者可以将讨论分组到最相关的现有类别。 讨论也可以在创建后重新分类。 For more information, see "[Managing categories for discussions](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

{% data reusables.discussions.you-can-label-discussions %}

## 促进健康的对话

People with write permissions for the repository, or for the source repository for organization discussions, can help surface important conversations by pinning discussions, deleting discussions that are no longer useful or are damaging to the community, and transferring discussions to more relevant repositories owned by the organization. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions)."

People with triage permissions for the repository, or for the source repository for organization discussions, can help moderate a project's discussions by marking comments as answers, locking discussions that are no longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. 更多信息请参阅“[主持讨论](/discussions/managing-discussions-for-your-community/moderating-discussions)”。

## 后续步骤

一旦有明确的路径来确定范围以及将想法从概念变为现实，您就可以创建议题并开始跟踪进度。 有关从讨论创建议题的更多信息，请参阅“[主持讨论](/discussions/managing-discussions-for-your-community/moderating-discussions)”。
