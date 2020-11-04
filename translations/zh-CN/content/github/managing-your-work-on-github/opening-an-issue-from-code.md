---
title: 从代码打开议题
intro: 您可以从文件或拉取请求的特定代码行打开新议题。
redirect_from:
  - /articles/opening-an-issue-from-code
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

从代码打开议题时，议题包含小片段，其中显示所选代码的行或范围。 只能打开存储代码的仓库中的议题。

![在从代码打开的议题中渲染的代码片段](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.create-issue-in-public-repository %}

{% data reusables.repositories.navigate-to-repo %}
2. 找到要在议题中引用的代码：
    - 要打开文件中代码相关的议题，请找到该文件。
    - 要打开拉取请求中代码相关的议题，请找到该拉取请求并单击 {% octicon "diff" aria-label="The file diff icon" %} **Files changed（文件已更改）**。 然后浏览到含有要包含在评论中的代码的文件，并单击 **View（查看）**。
{% data reusables.repositories.choose-line-or-range %}
4. 在代码范围的左侧，单击
{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. 在下拉菜单中，单击 **Reference in new issue（新议题中的引用）**。
  ![带有从所选行打开新议题的选项的烤肉串式菜单](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

### 延伸阅读

- “[创建议题](/github/managing-your-work-on-github/creating-an-issue)”
- "[获取文件的永久链接](/github/managing-files-in-a-repository/getting-permanent-links-to-files)"
- “[创建指向代码段的永久链接](/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)”
