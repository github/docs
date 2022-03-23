---
title: 过滤拉取请求中的文件
intro: 'To help you quickly review changes in a large pull request, you can filter changed files{% if pr-tree-view %} or use the file tree to navigate between files{% endif %}.'
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

You can filter files in a pull request by file extension type, such as `.html` or `.js`, lack of an extension, code ownership, or dotfiles.{% if pr-tree-view %} You can also use the file tree to filter by file path, navigate between files, or see a high level view of the changed files.{% endif %}

## Using the file filter dropdown

{% tip %}

**提示：**为简化拉取请求差异视图，也可以从过滤器下拉菜单在拉取请求差异中临时隐藏删除的文件或您已经查看过的文件。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. 在拉取请求列表中，单击要过滤的拉取请求。
{% data reusables.repositories.changed-files %}
4. 使用文件过滤器下拉菜单选择、取消选择或单击所需的过滤器。 ![拉取请求差异上方的文件过滤器选项](/assets/images/help/pull_requests/file-filter-option.png)
5. （可选）要清除过滤器选择，请在 **Files changed（已更改文件）**选项卡下，单击 **Clear（清除）**。 ![清除文件过滤器选择](/assets/images/help/pull_requests/clear-file-filter.png)

{% if pr-tree-view %}
## Using the file tree

{% data reusables.repositories.sidebar-pr %}
1. 在拉取请求列表中，单击要过滤的拉取请求。
{% data reusables.repositories.changed-files %}
1. If the file tree is hidden, click **Show file tree** to display the file tree.

   {% note %}

   **Note**: The file tree will not display if your screen width is too narrow or if the pull request only includes one file.

   {% endnote %}

1. Click on a file in the file tree to view the corresponding file diff. ![Pull request file tree](/assets/images/help/pull_requests/pr-file-tree.png)
1. To filter by file path, enter part or all of the file path in the **Filter changed files** search box. Alternatively, use the file filter dropdown. For more information, see "[Using the file filter dropdown](#using-the-file-filter-dropdown)."

{% endif %}

## 延伸阅读

- “[关于比较拉取请求中的分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)”
- “[在拉取请求中查找已更改的方法和函数](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)”
