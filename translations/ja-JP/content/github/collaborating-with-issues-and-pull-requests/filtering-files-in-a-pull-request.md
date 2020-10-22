---
title: プルリクエスト内のファイルをフィルタリングする
intro: '巨大なプルリクエスト内の変更を素早く確認できるように、変更されたファイルをフィルタリングできます。'
redirect_from:
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

You can filter files in a pull request by file extension type, such as `.html` or `.js`, lack of an extension, code ownership, or dotfiles.

{% tip %}

**Tip:** To simplify your pull request diff view, you can also temporarily hide deleted files or files you have already viewed in the pull request diff from the file filter drop-down menu.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、フィルタしたいプルリクエストをクリックします。
{% data reusables.repositories.changed-files %}
4. [File filter] ドロップダウンメニュードロップダウンメニュー使って、目的のフィルタを選択、選択解除、またはクリックします。 ![プルリクエスト diff の上のファイルのフィルタオプション](/assets/images/help/pull_requests/file-filter-option.png)
5. オプションで、フィルタの選択をクリアするには、 [**Files changed**] タブの下で [**Clear**] をクリックします。 ![ファイルのフィルタの選択のクリア](/assets/images/help/pull_requests/clear-file-filter.png)

### 参考リンク

- 「[プルリクエスト内のブランチの比較について](/articles/about-comparing-branches-in-pull-requests)」
- 「[プルリクエストで変更されたメソッドや機能を見つける](/articles/finding-changed-methods-and-functions-in-a-pull-request)」
