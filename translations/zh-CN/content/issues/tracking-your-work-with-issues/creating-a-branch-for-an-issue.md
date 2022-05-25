---
title: 创建分支以处理议题
intro: 您可以创建一个分支，直接从议题页面处理议题，然后立即开始。
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: issue-6234
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: 为议题创建分支
---

{% note %}

**注意：** 为议题创建分支的功能目前处于公开测试阶段，可能会发生更改。

{% endnote %}

## 关于与议题相关联的分支
与议题相关的分支显示在议题边栏的“开发”部分下。 当您为其中一个分支创建拉取请求时，它会自动链接到议题。 与该分支的连接将被删除，并且只有拉取请求显示在“开发”部分中。 更多信息请参阅“[将拉取请求链接到议题](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)”。

## 为议题创建分支

对存储库具有写入权限的任何人都可以为议题创建分支。 您可以为一个议题链接多个分支。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. 在议题列表中，单击要为其创建分支的议题。
4. 在右侧边栏的“Development（开发）”下，单击 **Create a branch（创建分支）**。 如果议题已具有链接的分支或拉取请求，请单击 {% octicon "gear" aria-label="The Gear icon" %} ，然后在下拉菜单底部单击 **Create a branch（创建分支）**。 ![显示侧边栏中突出显示的“创建分支”选项的屏幕截图](/assets/images/help/issues/create-a-branch.png)
5. 默认情况下，新分支是从默认分支在当前存储库中创建的。 根据“Create a branch for this issue（为此议题创建分支）”对话框中的需要编辑分支名称和详细信息。 ![显示“创建分支”对话框选项的屏幕截图](/assets/images/help/issues/create-a-branch-options.png)
6. 选择是在本地处理分支，还是在 GitHub Desktop 中打开分支。
7. 准备好创建分支后，单击 **Create branch（创建分支）**。
