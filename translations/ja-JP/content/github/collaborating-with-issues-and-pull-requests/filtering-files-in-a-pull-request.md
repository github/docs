---
title: プルリクエスト内のファイルをフィルタリングする
intro: '巨大なプルリクエスト内の変更を素早く確認できるように、変更されたファイルをフィルタリングできます。'
redirect_from:
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

プルリクエスト内のファイルは、`.html` や `.js` などのファイル拡張子の種類、拡張子の欠如、コードの所有権、ドットファイルでフィルタリングできます。

{% tip %}

**ヒント:** ファイルのフィルタドロップダウンメニューから、プルリクエストの diff 内の削除されたファイル、または既に表示したファイルを一時的に非表示にして、プルリクエストの diff 表示を簡素化できます。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、フィルタしたいプルリクエストをクリックします。
{% data reusables.repositories.changed-files %}
4. [File filter] ドロップダウンメニュードロップダウンメニュー使って、目的のフィルタを選択、選択解除、またはクリックします。 ![プルリクエスト diff の上のファイルのフィルタオプション](/assets/images/help/pull_requests/file-filter-option.png)
5. オプションで、フィルタの選択をクリアするには、 [**Files changed**] タブの下で [**Clear**] をクリックします。 ![ファイルのフィルタの選択のクリア](/assets/images/help/pull_requests/clear-file-filter.png)

### 参考リンク

- 「[プルリクエスト内のブランチの比較について](/articles/about-comparing-branches-in-pull-requests)」
- 「[プルリクエストで変更されたメソッドや機能を見つける](/articles/finding-changed-methods-and-functions-in-a-pull-request)」
