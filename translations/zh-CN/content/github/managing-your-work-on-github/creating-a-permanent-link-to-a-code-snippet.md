---
title: 创建指向代码段的永久链接
intro: 您可以创建指向特定版本的文件或拉取请求中特定代码行或行范围的永久链接。
redirect_from:
  - /articles/creating-a-permanent-link-to-a-code-snippet
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

此类永久链接仅在其起源仓库中呈现为代码段。 在其他仓库中，永久链接代码段将呈现为 URL。

![评论中呈现的代码段](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**提示：**要创建整个文件的永久链接，请参阅“[获取文件的永久链接](/articles/getting-permanent-links-to-files)”。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. 找到要链接的代码：
    - 要链接到文件中的代码，请导航到该文件。
    - 要链接到拉取请求中的代码，请导航到该拉取请求并单击 {% octicon "diff" aria-label="The file diff icon" %} **Files changed（已更改文件）**。 然后浏览到含有要包含在评论中的代码的文件，并单击 **View（查看）**。
{% data reusables.repositories.choose-line-or-range %}
4. 在代码行或行范围的左侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}。 在下拉菜单中，单击 **Copy permalink（复制永久链接）**。 ![可选择复制所选行的永久链接的 Kebab 菜单](/assets/images/help/repository/copy-permalink-specific-line.png)
5. 导航到要链接到代码段的对话。
6. 将永久链接粘贴到评论中，然后单击 **Comment（评论）**。 ![粘贴在同一个仓库的评论中的永久链接](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

### 延伸阅读

- “[创建议题](/articles/creating-an-issue/)”
- “[从代码打开议题](/articles/opening-an-issue-from-code/)”
- “[审查拉取请求中的更改](/articles/reviewing-changes-in-pull-requests/)”
