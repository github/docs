---
title: 在 GitHub 上查找文件
intro: '您可以使用文件查找器在仓库中搜索文件。 要在 {% data variables.product.product_name %} 上的多个仓库中搜索文件，请使用 [`filename` 代码搜索限定符](/articles/searching-code#search-by-filename)。'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

{% tip %}

**提示：**

- 文件查找器的结果不包括某些目录，例如 `build`、`log`、`tmp` 和 `vendor`。 要搜索这些目录中的文件，请使用 [`filename` 代码搜索限定符](/articles/searching-code#search-by-filename)。
- 按键盘上的 `t` 键也可以打开文件查找器。 更多信息请参阅“[键盘快捷键](/articles/keyboard-shortcuts)”。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if currentVersion ver_lt "enterprise-server@2.22" %}
2. 在仓库名称下，单击 **Find file（查找文件）**。 ![查找文件按钮](/assets/images/help/search/find-file-button.png)
{% else %}
2. 在文件列表上方，单击 **Go to file（转到文件）**。 ![查找文件按钮](/assets/images/help/search/find-file-button.png)
{% endif %}
3. 在搜索字段中，键入要查找文件的名称。 ![查找文件搜索字段](/assets/images/help/search/find-file-search-field.png)
4. 在结果列表中 ，单击要查找的文件。

### 延伸阅读

- “[关于在 GitHub 上搜索](/articles/about-searching-on-github)”
