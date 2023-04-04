---
title: Finding files on GitHub
intro: 'You can search for a file in a repository using the file finder. To search for a file in multiple repositories on {% data variables.product.product_name %}, use the [`filename` code search qualifier](/search-github/searching-on-github/searching-code#search-by-filename).'
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

**Tips:**

- By default, file finder results exclude some directories like `build`, `log`, `tmp`, and `vendor`. To search for files in these directories, use the [`filename` code search qualifier](/search-github/searching-on-github/searching-code#search-by-filename).{% ifversion file-finder-exclusion-controls %} Alternatively, you can customize which directories are excluded by default [using a `.gitattributes` file](#customizing-excluded-files).{% endif %}
- You can also open the file finder by pressing `t` on your keyboard. For more information, see "[AUTOTITLE](/get-started/using-github/keyboard-shortcuts)."

{% endtip %}

## Using the file finder

{% data reusables.repositories.navigate-to-repo %}
2. Above the list of files, click **Go to file**.
![Find file button](/assets/images/help/search/find-file-button.png)
3. In the search field, type the name of the file you'd like to find.
![Find file search field](/assets/images/help/search/find-file-search-field.png)
4. In the list of results, click the file you wanted to find.

{% ifversion file-finder-exclusion-controls %}

## Customizing excluded files

By default, file finder results do not include files in the following directories if they exist at your repository root:

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
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

## Further reading

- "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"{% ifversion file-finder-exclusion-controls %}
- "[AUTOTITLE](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)"
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) in the Git documentation{% endif %}
