---
title: プルリクエスト中でのブランチの比較について
intro: プルリクエストは、変更のマージ対象のbaseブランチに対するトピックブランチ中で作成した変更を比較するdiffを表示します。
redirect_from:
  - /articles/about-comparing-branches-in-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**ノート：**プルリクエストを作成する際には、変更の比較対象となるbaseブランチを変更できます。 詳しい情報については[プルリクエストの作成](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)を参照してください。

{% endnote %}

プルリクエスト中で提案された変更は、Files changed（変更されたファイル）タブで表示できます。

![プルリクエストの変更されたファイルタブ](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

コミットそのものを見るよりは、プルリクエストがマージされた際に提案された変更がファイルに現れるのを見ることができます。 Files changed（変更されたファイル）タブ内では、ファイルはアルファベット順に表示されます。 ファイルへの追加は緑で表示され、先頭に`+`サインが付きます。削除されたコンテンツは赤で表示され、先頭に`-`サインが付きます。

### diff 表示の選択肢

{% tip %}

**ヒント:** 変更した理由を把握しづらい場合、[File changed] タブ中の [**View**] をクリックして、提案された変更中のファイル全体を表示させることができます。

{% endtip %}

diff の見方には複数の選択肢があります。
- 統合ビューでは、更新分と既存の内容が線形ビューに一緒に表示されます。
- 分割ビューでは、古い内容が片側に、新しい内容が反対側に表示されます。
- リッチ diff ビューでは、プルリクエストがマージされたときに変更がどのように見えるかのプレビューが表示されます。
- ソースビューでは、ソース内の変更がリッチ diff ビューのフォーマットなしで表示されます。

プルリクエスト中の大きな変更をもっと正確に表示するために、空白の変更を無視するよう選択することもできます。

![Diff の表示のオプションメニュー](/assets/images/help/pull_requests/diff-settings-menu.png)

To simplify reviewing changes in a large pull request, you can filter the diff to only show selected file types, show files you are a CODEOWNER of, hide files you have already viewed, or hide deleted files. 詳しい情報については、「[プルリクエスト内のファイルをファイルタイプでフィルタリングする](/articles/filtering-files-in-a-pull-request)」を参照してください。

  ![ファイルフィルタのドロップダウンメニュー](/assets/images/help/pull_requests/file-filter-menu.png)

### スリードットおよびツードット Git diff での比較

デフォルトでは、{% data variables.product.prodname_dotcom %} のプルリクエストはスリードットdiff、すなわちトピックブランチの最新バージョンと、トピックブランチが最後に base ブランチと同期されたコミットとの比較を表示します。

{% data variables.product.prodname_dotcom %} 上で、ツードット diff を比較する際に 2 つの committish のリファレンスを見たい場合には、リポジトリの [Comparing changes] ページの URL を編集できます。 詳しい情報については _Pro Git_ ブックサイトの [Git 用語集の "committish"](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) を参照してください。

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

ツードット diff は SHA あるいは OID (Object ID) など、2 つの Git の committish 参照を直接互いに比較します。 {% data variables.product.prodname_dotcom %} では、ツードット diff での比較中の Git の committish 参照は、同じリポジトリあるいはそのフォークにプッシュされなければなりません。

プルリクエスト中でツードット diff をシミュレートし、各ブランチの最新バージョン同士の比較を見たい場合には、ベースブランチをトピックブランチにマージできます。そうすれば、ブランチ間の最後の共通の祖先が更新されます。

For more information about Git commands to compare changes, see "[Git diff options](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)" from the _Pro Git_ book site.

### diffが表示されない理由
- ファイルあるいは特定のファイルタイプの合計での制限を超えた。 詳しい情報については[リポジトリ中のコンテンツとdiffの表示の制限](/articles/limits-for-viewing-content-and-diffs-in-a-repository/#diff-limits)を参照してください。
- ファイルが、デフォルトで表示をブロックするリポジトリの*.gitattributes*ファイルのルールにマッチした。 詳しい情報については[GitHubでの変更されたファイルの表示方法のカスタマイズ](/articles/customizing-how-changed-files-appear-on-github)を参照してください。

### 参考リンク

- [プルリクエストについて](/articles/about-pull-requests)
- [フォークについて](/articles/about-forks)
