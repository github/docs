---
title: Finding files on GitHub
intro: 'You can search for a file in a repository using the file finder. To search for a file in multiple repositories on {% data variables.product.product_name %}, use the [`filename` code search qualifier](/articles/searching-code#search-by-filename).'
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

**Tips:**

- File finder results exclude some directories like `build`, `log`, `tmp`, and `vendor`. To search for files within these directories, use the [`filename` code search qualifier](/articles/searching-code#search-by-filename).
- You can also open the file finder by pressing `t` on your keyboard. For more information, see "[Keyboard shortcuts](/articles/keyboard-shortcuts)."

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if currentVersion ver_lt "enterprise-server@2.22" %}
2. Under your repository name, click **Find file**.
![Find file button](/assets/images/help/search/find-file-button.png)
{% else %}
2. Above the list of files, click **Go to file**.
![Find file button](/assets/images/help/search/find-file-button.png)
{% endif %}
3. In the search field, type the name of the file you'd like to find.
![Find file search field](/assets/images/help/search/find-file-search-field.png)
4. In the list of results, click the file you wanted to find.

### Further reading

- "[About searching on GitHub](/articles/about-searching-on-github)"
