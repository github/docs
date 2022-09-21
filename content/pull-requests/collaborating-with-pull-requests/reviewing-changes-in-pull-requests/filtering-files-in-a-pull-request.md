---
title: Filtering files in a pull request
intro: 'To help you quickly review changes in a large pull request, you can filter changed files{% ifversion pr-tree-view %} or use the file tree to navigate between files{% endif %}.'
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
shortTitle: Filter files
---
You can filter files in a pull request by file extension type, such as `.html` or `.js`, lack of an extension, code ownership, or dotfiles.{% ifversion pr-tree-view %} You can also use the file tree to filter by file path, navigate between files, or see a high level view of the changed files.{% endif %}

## Using the file filter dropdown

{% tip %}

**Tip:** To simplify your pull request diff view, you can also temporarily hide deleted files or files you have already viewed in the pull request diff from the file filter drop-down menu.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request you'd like to filter.
{% data reusables.repositories.changed-files %}
4. Use the File filter drop-down menu, and select, unselect, or click the desired filters.
  ![File filter option above pull request diff](/assets/images/help/pull_requests/file-filter-option.png)
5. Optionally, to clear the filter selection, under the **Files changed** tab, click **Clear**.
  ![Clear file filter selection](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## Using the file tree

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request you'd like to filter.
{% data reusables.repositories.changed-files %}

1. Click on a file in the file tree to view the corresponding file diff. If the file tree is hidden, click {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} to display the file tree.

   {% note %}

   **Note**: The file tree will not display if your screen width is too narrow or if the pull request only includes one file.

   {% endnote %}
   
   ![Screenshot of filter changed files search box and file tree emphasized](/assets/images/help/repository/file-tree.png)
1. To filter by file path, enter part or all of the file path in the **Filter changed files** search box. Alternatively, use the file filter dropdown. For more information, see "[Using the file filter dropdown](#using-the-file-filter-dropdown)."

{% endif %}

## Further reading

- "[About comparing branches in a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)"
- "[Finding changed methods and functions in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)"
