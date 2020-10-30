---
title: プルリクエスト内のファイルをフィルタリングする
intro: 巨大なプルリクエスト内の変更を素早く確認できるように、変更されたファイルをフィルタリングできます。
redirect_from:
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

プルリクエスト内のファイルは、`.html` や `.js` などの拡張子、拡張子なし、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}コード所有権、{% endif %}またはドットファイルかどうかなどでフィルタリングできます。

{% tip %}

**ヒント:** ファイルのフィルタドロップダウンメニューから、プルリクエストの diff 内の削除されたファイル{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}か、既に表示したファイル{% endif %}を一時的に非表示にして、プルリクエストの diff 表示を簡素化できます。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、フィルタしたいプルリクエストをクリックします。
{% data reusables.repositories.changed-files %}
4. [File filter] ドロップダウンメニュードロップダウンメニュー使って、目的のフィルタを選択、選択解除、またはクリックします。 ![プルリクエスト diff の上のファイルのフィルタオプション](/assets/images/help/pull_requests/file-filter-option.png)
5. オプションで、フィルタの選択をクリアするには、 [**Files changed**] タブの下で [**Clear**] をクリックします。 ![ファイルのフィルタの選択のクリア](/assets/images/help/pull_requests/clear-file-filter.png)

### 参考リンク

- 「[プルリクエスト内のブランチの比較について](/articles/about-comparing-branches-in-pull-requests)」
- 「[プルリクエストで変更されたメソッドや機能を見つける](/articles/finding-changed-methods-and-functions-in-a-pull-request)」
