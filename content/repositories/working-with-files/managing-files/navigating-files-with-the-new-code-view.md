---
title: Navigating files with the new code view (beta)
intro: 'With the new code view (beta), you can view your code in context with an easily navigable file tree and integrated symbol search.'
allowTitleToDifferFromFilename: true
versions:
  feature: file-tree-view
topics:
  - Repositories
shortTitle: New code view (beta)
---

{% note %}

**Note**: {% data reusables.search.code-search-code-view-beta-note %} 

{% data reusables.search.code-search-link %}

{% endnote %}

## About the new code view (beta)
The new code view beta improves navigation with a file tree view, simplifies file editing, introduces a symbols pane for symbol search and navigation, and updates the blame view to maintain file context. The new code view is integrated with a new code search engine and search interface in a limited public beta on {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-search-link %}

To get access to the new code view (beta), along with the new code search, you can sign up for the [waitlist](https://github.com/features/code-search-code-view/signup).

To provide feedback on the new code view beta, see the [discussion forum](https://github.com/orgs/community/discussions/categories/repositories).

## Enabling and disabling the new code search and code view (beta)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Using the file tree view
The new file tree view is a panel that displays a repository's directories and files within an easily navigable tree. You can move between directories and files quickly and understand the context for each item you view.

1. Select a repository, then click a directory or file within that repository to open the file tree view.

  ![Screenshot of the "github/docs" repository with emphasis on the file tree view](/assets/images/help/repository/file-tree-view-directory-selected.png)

1. To search for a specific directory or file, click the {% octicon "filter" aria-label="The filter icon" %} **Jump to file** search bar, then type the directory or file name and select the directory or file from the results. You can view the file path for a directory or file below each search result.

  ![Screenshot of the file tree view with emphasis on the "Jump to file" search bar](/assets/images/help/repository/file-tree-view-jump-to-file.png)

     - To search within the repository using the {% data variables.product.prodname_dotcom %} search bar, click {% octicon "search" aria-label="The search icon" %}.

        ![Screenshot of the file tree view with emphasis on the search icon](/assets/images/help/repository/file-tree-view-search-icon.png)

1. To switch between branches, select the {% octicon "git-branch" aria-label="The branch icon" %} branch dropdown menu, then click the desired branch from the results. To view all branches for a repository, click **View all branches**.

  ![Screenshot of the file tree view with emphasis on the "Branches" tab of the branch dropdown menu](/assets/images/help/repository/file-tree-view-branch-dropdown.png)

1. To switch between tags, select {% octicon "git-branch" aria-label="The branch icon" %} branch dropdown menu, click the **Tags** tab, then click the desired tag from the results. To view all tags for a repository, click **View all tags**.

  ![Screenshot of the file tree view with emphasis on the "Tags" tab of the branch dropdown menu](/assets/images/help/repository/file-tree-view-branch-dropdown-tags.png)

## Working with files
The new code view also includes updates to the ways in which you work with files. Existing functionality like editing a file, creating or uploading a file, and deleting a file or directory has been streamlined. You now have quick access to editing a file in github.dev or {% data variables.product.prodname_desktop %} and an integrated search-in-file function. 

1. Select a repository, then click a file within that repository to open the new code view.

  ![Screenshot of the "github/docs" repository with emphasis on a selected file in the file tree view](/assets/images/help/repository/file-tree-view-file-selected.png)

1. To edit a file in the integrated file editor, click {% octicon "pencil" aria-label="The pencil icon" %}.

  ![Screenshot of the file editor in the new code view with emphasis on the edit icon](/assets/images/help/repository/code-view-edit-icon.png)

1. To edit a file on the {% data variables.codespaces.serverless %} web-based editor or {% data variables.product.prodname_desktop %}, select {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} next to {% octicon "pencil" aria-label="The pencil icon" %}, then click either **github.dev** or **{% data variables.product.prodname_desktop %}**.

  {% note %}

  **Note:** The {% data variables.codespaces.serverless %} editor is currently in beta preview. You can provide feedback [in our discussions](https://github.com/community/community/discussions/categories/general).

  {% endnote %}

  ![Screenshot of the file editor in the new code view with emphasis on the edit dropdown menu](/assets/images/help/repository/code-view-edit-dropdown.png)

1. To find specific characters within a file, view the raw code of the file by clicking the **Code** button. Next, press <kbd>Command</kbd>+<kbd>F</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) and type the characters you want to find. You can navigate between results by pressing <kbd>Return</kbd> (Mac) or <kbd>Enter</kbd> (Windows/Linux), or by clicking {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} and {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.

  {% note %}

  **Note:** To use your browser's default find function, press <kbd>Command</kbd>+<kbd>F</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) twice. Be aware that your browser's default find function will not be able to search the entirety of a large file, while the search integrated in the new code view will.

  {% endnote %}

  ![Screenshot of the "Find in file" function in the new code view](/assets/images/help/repository/code-view-find-in-file.png)

1. To add a new file to a specific directory, click that directory, then click {% octicon "plus" aria-label="The plus sign icon" %} **New file**, or click the {% octicon "plus" aria-label="The plus sign icon" %} in the file tree view.

  ![Screenshot of the file tree view with emphasis on the plus icon](/assets/images/help/repository/file-tree-view-new-file-icon.png)

1. To delete a directory or file, navigate to the directory or file and click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} . Then, click **Delete directory** or **Delete file**.

  ![Screenshot of the options menu in the new code view with emphasis on the "Delete directory" option](/assets/images/help/repository/code-view-delete-directory.png)

1. To upload a file, navigate to the chosen directory, then click {% octicon "upload" aria-label="The upload icon" %} **Upload files** or drag and drop the file into your browser.

  ![Screenshot of the "Upload files" button in the new code view](/assets/images/help/repository/code-view-upload-files.png)

## Using the symbols pane
You can now quickly view and navigate between symbols such as functions or classes in your code with the symbols pane. You can search for a symbol in a single file, in all files in a repository, or even in all public repositories on {% data variables.product.prodname_dotcom %}.

Symbol search is a feature of the new code search (beta). For more information, see "[Understanding GitHub Code Search (beta) syntax](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)."

1. Select a repository, then navigate to a file containing symbols.
2. To bring up the symbols pane, click {% octicon "code-square" aria-label="The code square icon" %}.

  ![Screenshot of the symbols pane icon in the new code view](/assets/images/help/repository/code-view-symbols-pane-icon.png)

  Alternatively, you can open the symbols pane by clicking an eligible symbol in your file. Clickable symbols are highlighted in yellow when you hover over them.

  ![Screenshot of a file in the new code view with emphasis on a clickable symbol](/assets/images/help/repository/code-view-clickable-symbol.png)

1. Click the symbol you would like to find from the symbols pane or within the file itself.

  ![Screenshot of the symbols pane with emphasis on an auto-populated symbol](/assets/images/help/repository/code-view-symbols-pane-symbol.png)

   - To search for a symbol in the repository as a whole, click **Search for this symbol in this repository**. To search for a symbol in all repositories on {% data variables.product.prodname_dotcom %}, click **all repositories**.

      ![Screenshot of the symbols pane with emphasis on the options to broaden the scope of the search for a symbol](/assets/images/help/repository/code-view-symbols-pane-expand-search.png)

1. To navigate between references to a symbol, click {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} or {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.

  ![Screenshot of the symbols pane with emphasis on the search navigation chevrons](/assets/images/help/repository/code-view-symbol-result-navigation.png)

1. To navigate to a specific reference to a symbol, click a result of the symbol search under {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} **In this file**.

  ![Screenshot of the symbols pane with emphasis on a result of the symbol search](/assets/images/help/repository/code-view-symbol-search-result.png)

1. To exit the search for a specific symbol, click {% octicon "arrow-left" aria-label="The left arrow icon" %} **All Symbols**.

  ![Screenshot of the symbols pane with emphasis on the "All Symbols" button](/assets/images/help/repository/code-view-symbols-pane-all-symbols.png)

## Using the blame view
Rather than losing file context when you enter the blame view, you can now use the new code view to quickly toggle between the blame view, the raw code view, and the preview for a file (depending on the file type).

1. Select a repository, then click a file within that repository to open the new code view.

  ![Screenshot of the "github/docs" repository with emphasis on a selected file in the file tree view](/assets/images/help/repository/file-tree-view-file-selected.png)

1. To see the revision history of the file, click **Blame**. This view gives you a line-by-line revision history, with the code in a file separated by commit. Each commit lists the author, commit description, and commit date.

  ![Screenshot of the new code view with emphasis on the "Blame" button](/assets/images/help/repository/code-view-blame-button.png)

   - To see versions of a file before a particular commit, click {% octicon "versions" aria-label="The versions icon" %}.

      ![Screenshot of a commit in the blame view with emphasis on the versions icon](/assets/images/help/repository/code-view-blame-hide-commit.png)

   - To see more detail about particular commits, click the commit description.

      ![Screenshot of a commit in the blame view with emphasis on the commit description](/assets/images/help/repository/code-view-blame-commit-description.png)

1. To return to the raw code view, click **Code**.

  ![Screenshot of the code view toolbar with emphasis on the code view button](/assets/images/help/repository/code-view-button.png)

   - If you are viewing a Markdown file, you can also click **Preview** to return to the view with Markdown formatting applied.

      ![Screenshot of the code view toolbar with emphasis on the Markdown preview button](/assets/images/help/repository/code-view-preview-button.png)

## Further reading

- "[Moving a file to a new location](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)"
- "[About GitHub Code Search (beta)](/search-github/github-code-search/about-github-code-search)"
