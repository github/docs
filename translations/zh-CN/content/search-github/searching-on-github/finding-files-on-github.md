---
title: 在 GitHub 上查找文件
intro: '您可以使用文件查找器在仓库中搜索文件。 要在 {% data variables.product.product_name %} 上的多个仓库中搜索文件，请使用 [`filename` 代码搜索限定符](/search-github/searching-on-github/searching-code#search-by-filename)。'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
---

{% tip %}

**提示：**

- By default, file finder results exclude some directories like `build`, `log`, `tmp`, and `vendor`. To search for files in these directories, use the [`filename` code search qualifier](/search-github/searching-on-github/searching-code#search-by-filename).{% ifversion file-finder-exclusion-controls %} Alternatively, you can customize which directories are excluded by default [using a `.gitattributes` file](#customizing-excluded-files).{% endif %}
- 按键盘上的 `t` 键也可以打开文件查找器。 更多信息请参阅“[键盘快捷键](/articles/keyboard-shortcuts)”。

{% endtip %}

## Using the file finder

{% data reusables.repositories.navigate-to-repo %}
2. 在文件列表上方，单击 **Go to file（转到文件）**。 ![查找文件按钮](/assets/images/help/search/find-file-button.png)
3. 在搜索字段中，键入要查找文件的名称。 ![查找文件搜索字段](/assets/images/help/search/find-file-search-field.png)
4. 在结果列表中 ，单击要查找的文件。

{% ifversion file-finder-exclusion-controls %}

## Customizing excluded files

By default, file finder results do not include files in the following directories if they exist at your repository root:

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `构建`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

You can override these default exclusions using a `.gitattributes` file.

To do this, create or update a file called `.gitattributes` in your repository root, setting the [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) attribute to `false` for each directory that should be included in file finder results.

For example, the following `.gitattributes` file would cause files in the `build/` directory to be available to the file finder:

```
build/** linguist-generated=false
```

Note that this override requires the use of the recursive glob pattern (`**`). For more information, see "[pattern format](https://git-scm.com/docs/gitignore#_pattern_format)" in the Git documentation. More complex overrides of subdirectories within excluded-by-default directories are not supported.

{% endif %}

## 延伸阅读

- "[About searching on GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"{% ifversion file-finder-exclusion-controls %}
- "[Customizing how changed files appear on GitHub](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)"
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) in the Git documentation{% endif %}
