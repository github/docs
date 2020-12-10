---
title: 过滤拉取请求中的文件
intro: '要快速查看大型拉取请求中的更改，您可以过滤已更改的文件。'
redirect_from:
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

您可以按文件扩展名类型（例如 `.html` 或 `.js`）、无扩展名、代码所有权或点文件过滤拉取请求中的文件。

{% tip %}

**提示：**为简化拉取请求差异视图，也可以从过滤器下拉菜单在拉取请求差异中临时隐藏删除的文件或您已经查看过的文件。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. 在拉取请求列表中，单击要过滤的拉取请求。
{% data reusables.repositories.changed-files %}
4. 使用文件过滤器下拉菜单选择、取消选择或单击所需的过滤器。 ![拉取请求差异上方的文件过滤器选项](/assets/images/help/pull_requests/file-filter-option.png)
5. （可选）要清除过滤器选择，请在 **Files changed（已更改文件）**选项卡下，单击 **Clear（清除）**。 ![清除文件过滤器选择](/assets/images/help/pull_requests/clear-file-filter.png)

### 延伸阅读

- “[关于比较拉取请求中的分支](/articles/about-comparing-branches-in-pull-requests)”
- “[在拉取请求中查找已更改的方法和函数](/articles/finding-changed-methods-and-functions-in-a-pull-request)”
