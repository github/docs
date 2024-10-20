---
title: Finding files on GitHub
intro: 'You can search for a file in a repository using the file finder. To search for a file in multiple repositories on {% data variables.product.product_name %}, use the {% ifversion code-search-upgrade %}[`path` code search qualifier](/search-github/github-code-search/understanding-github-code-search-syntax#path-qualifier){% else %}[`filename` code search qualifier](/search-github/searching-on-github/searching-code#search-by-filename){% endif %}.'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub search
---
{% tip %}

**Tips:**

* By default, file finder results exclude some directories like `build`, `log`, `tmp`, and `vendor`. To search for files in these directories, {% ifversion code-search-upgrade %}use the [`path` code search qualifier](/search-github/github-code-search/understanding-github-code-search-syntax#path-qualifier){% else %}use the [`filename` code search qualifier](/search-github/searching-on-github/searching-code#search-by-filename){% endif %}. Alternatively, you can customize which directories are excluded by default [using a `.gitattributes` file](#customizing-excluded-files).
* You can also open the file finder by pressing `t` on your keyboard. For more information, see "[AUTOTITLE](/get-started/accessibility/keyboard-shortcuts)."

{% endtip %}

## Using the file finder

{% ifversion code-view-ui %}
{% data reusables.repositories.navigate-to-repo %}
1. In the “Go to file” search bar, type the name of the file or directory you'd like to find.
   ![Screenshot of the main view for a repository. A search bar, labeled "Go to file", is outlined in dark orange.](/assets/images/help/repository/repository-main-page-go-to-file.png)
1. Alternatively, if there is no "Go to file" search bar, click **Go to file**, then type the name of the file or directory you'd like to find.
   ![Screenshot of the main view for a repository. A "Go to file" button is outlined in dark orange.](/assets/images/help/repository/repository-main-page-go-to-file-no-search-bar.png)
1. In the list of results, click the file or directory you wanted to find. You can view the file path for a directory or file below each search result.
{% else %}
{% data reusables.repositories.navigate-to-repo %}
1. Above the list of files, click **Go to file**.
   ![Screenshot of a row of buttons on the main page of a repository. The "Go to file" button is outlined in dark orange.](/assets/images/help/search/find-file-button.png)
1. In the search field, type the name of the file you'd like to find.
   ![Screenshot of the search bar for finding a file in a repository. The search bar contains the term "readme" and under the search bar is a link to the file that is the result of the search, "README.md". The search bar is outlined in dark orange.](/assets/images/help/search/find-file-search-field.png)
1. In the list of results, click the file you wanted to find.
{% endif %}

## Customizing excluded files

By default, file finder results do not include files in the following directories if they exist at your repository root:

* `.git`
* `.hg`
* `.sass-cache`
* `.svn`
* `build`
* `dot_git`
* `log`
* `tmp`
* `vendor`

You can override these default exclusions using a `.gitattributes` file.

To do this, create or update a file called `.gitattributes` in your repository root, setting the [`linguist-generated`](https://github.com/github-linguist/linguist/blob/master/docs/overrides.md) attribute to `false` for each directory that should be included in file finder results.

For example, the following `.gitattributes` file would cause files in the `build/` directory to be available to the file finder:

```text
build/** linguist-generated=false
```

Note that this override requires the use of the recursive glob pattern (`**`). For more information, see "[pattern format](https://git-scm.com/docs/gitignore#_pattern_format)" in the Git documentation. More complex overrides of subdirectories within excluded-by-default directories are not supported.

## Further reading

* "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
* "[AUTOTITLE](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)"
* [`.gitattributes`](https://git-scm.com/docs/gitattributes) in the Git documentation
