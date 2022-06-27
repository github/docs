---
title: プルリクエスト内のファイルをフィルタリングする
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

**ヒント:** ファイルのフィルタドロップダウンメニューから、プルリクエストの diff 内の削除されたファイル、または既に表示したファイルを一時的に非表示にして、プルリクエストの diff 表示を簡素化できます。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、フィルタしたいプルリクエストをクリックします。
{% data reusables.repositories.changed-files %}
4. [File filter] ドロップダウンメニュードロップダウンメニュー使って、目的のフィルタを選択、選択解除、またはクリックします。 ![プルリクエスト diff の上のファイルのフィルタオプション](/assets/images/help/pull_requests/file-filter-option.png)
5. オプションで、フィルタの選択をクリアするには、 [**Files changed**] タブの下で [**Clear**] をクリックします。 ![ファイルのフィルタの選択のクリア](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## Using the file tree

{% data reusables.repositories.sidebar-pr %}
1. プルリクエストのリストで、フィルタしたいプルリクエストをクリックします。
{% data reusables.repositories.changed-files %}

1. Click on a file in the file tree to view the corresponding file diff. If the file tree is hidden, click {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} to display the file tree.

   {% note %}

   **Note**: The file tree will not display if your screen width is too narrow or if the pull request only includes one file.

   {% endnote %}

   ![Screenshot of filter changed files search box and file tree emphasized](/assets/images/help/repository/file-tree.png)
1. To filter by file path, enter part or all of the file path in the **Filter changed files** search box. Alternatively, use the file filter dropdown. For more information, see "[Using the file filter dropdown](#using-the-file-filter-dropdown)."

{% endif %}

## 参考リンク

- 「[プルリクエスト内のブランチの比較について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)」
- 「[プルリクエストで変更されたメソッドや機能を見つける](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)」
