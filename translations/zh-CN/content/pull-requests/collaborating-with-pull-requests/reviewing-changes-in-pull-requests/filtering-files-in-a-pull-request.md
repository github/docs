---
title: 过滤拉取请求中的文件
intro: '为了帮助您快速查看大型拉取请求中的更改，可以筛选更改的文件{% if pr-tree-view %} 或使用文件树在文件之间导航{% endif %}。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 筛选文件
---

您可以按文件扩展名类型（如 `.html` 或 `.js`）、缺少扩展名、代码所有权或 dotfile）筛选拉取请求中的文件。{% if pr-tree-view %} 您还可以使用文件树按文件路径进行筛选、在文件之间导航或查看已更改文件的高级视图。{% endif %}

## 使用文件筛选器下拉列表

{% tip %}

**提示：**为简化拉取请求差异视图，也可以从过滤器下拉菜单在拉取请求差异中临时隐藏删除的文件或您已经查看过的文件。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. 在拉取请求列表中，单击要过滤的拉取请求。
{% data reusables.repositories.changed-files %}
4. 使用文件过滤器下拉菜单选择、取消选择或单击所需的过滤器。 ![拉取请求差异上方的文件过滤器选项](/assets/images/help/pull_requests/file-filter-option.png)
5. （可选）要清除过滤器选择，请在 **Files changed（已更改文件）**选项卡下，单击 **Clear（清除）**。 ![清除文件过滤器选择](/assets/images/help/pull_requests/clear-file-filter.png)

{% if pr-tree-view %}
## 使用文件树

{% data reusables.repositories.sidebar-pr %}
1. 在拉取请求列表中，单击要过滤的拉取请求。
{% data reusables.repositories.changed-files %}
1. 如果文件树处于隐藏状态，请单击 **Show file tree（显示文件树）**以显示文件树。

   {% note %}

   **注意**：如果您的屏幕太窄或拉取请求仅包含一个文件，则不会显示文件树。

   {% endnote %}

1. 单击文件树中的文件可查看相应的文件差异 ![拉取请求文件树](/assets/images/help/pull_requests/pr-file-tree.png)
1. 要按文件路径进行筛选，请在 **Filter changed files（筛选已更改的文件）**搜索框中输入部分或全部文件路径。 或者，使用文件筛选器下拉列表。 更多信息请参阅“[使用文件筛选器下拉列表](#using-the-file-filter-dropdown)”。

{% endif %}

## 延伸阅读

- “[关于比较拉取请求中的分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)”
- “[在拉取请求中查找已更改的方法和函数](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)”
