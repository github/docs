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
1. In the list of pull requests, click the pull request you'd like to filter.
{% data reusables.repositories.changed-files %}
1. Use the File filter dropdown menu, and select, deselect, or click the desired filters.

   ![Screenshot of the view options for a pull request. The file filter option is outlined in dark orange.](/assets/images/help/pull_requests/file-filter-option.png)

1. Optionally, to clear the filter selection, under the **Files changed** tab, click **Clear filters**.

   ![Screenshot of the view options for a pull request. The "Clear filters" option is outlined in dark orange.](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}

## Using the file tree

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request you'd like to filter.
{% data reusables.repositories.changed-files %}

1. Click on a file in the file tree to view the corresponding file diff. If the file tree is hidden, click {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} to display the file tree.

   {% note %}

   **Note**: The file tree will not display if your screen width is too narrow or if the pull request only includes one file.

   {% endnote %}

   ![Screenshot of the "Files changed" tab of a pull request. In the left sidebar, the file tree is outlined in dark orange.](/assets/images/help/repository/file-tree.png)
1. To filter by file path, enter part or all of the file path in the **Filter changed files** search box. Alternatively, use the file filter dropdown. For more information, see "[Using the file filter dropdown](#using-the-file-filter-dropdown)."

{% endif %}

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)"
