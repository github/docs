---
title: リポジトリのコード スキャンのアラートを管理する
shortTitle: Manage alerts
intro: 'セキュリティの観点から、プロジェクトのコード内の潜在的な脆弱性またはエラーに関する{% ifversion delete-code-scanning-alerts %}アラートの表示、修正、却下、または削除{% else %}アラートの表示、修正、または却下{% endif %}を行うことができます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
ms.openlocfilehash: b672af79096c1f52a0670cd747ef159f071a3d07
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147693328'
---
{% data reusables.code-scanning.beta %}

## リポジトリのアラートを表示する

リポジトリへの書き込み権限があるユーザなら誰でも、プルリクエストの {% data variables.product.prodname_code_scanning %} アノテーションを表示できます。 詳細については、「[pull request の {% data variables.product.prodname_code_scanning %} アラートのトリアージ](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

**[セキュリティ]** タブでリポジトリのすべてのアラートの概要を表示するには、書き込みアクセス許可が必要です。

既定では、コード スキャン アラート ページがフィルター処理され、リポジトリの既定のブランチに関するアラートのみが表示されます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. 必要に応じて、フリー テキスト検索ボックスまたはドロップダウン メニューを使用してアラートをフィルター処理します。 たとえば、アラートを識別するために使われたツールによってフィルタリングできます。
   ![[Filter by tool]\(ツール別のフィルター\)](/assets/images/help/repository/code-scanning-filter-by-tool.png) {% data reusables.code-scanning.explore-alert %} ![アラートの概要](/assets/images/help/repository/code-scanning-click-alert.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} ![アラートの [Affected branches]\(影響を受けるブランチ\) セクション](/assets/images/help/repository/code-scanning-affected-branches.png){% endif %}
1. アラートでデータ フローの問題が強調表示された場合は、必要に応じて **[パスの表示]** をクリックし、データソースから、それが使用されているシンクまでのパスを表示します。
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![アラートの "Show paths" リンク](/assets/images/help/repository/code-scanning-show-paths.png) {% else %} ![アラートの "Show paths" リンク](/assets/images/enterprise/3.4/repository/code-scanning-show-paths.png) {% endif %}
2. {% data variables.product.prodname_codeql %} 解析によるアラートには、問題の説明も含まれています。 コードの修正方法に関するガイダンスについては、 **[さらに表示]** をクリックします。
   ![アラートの詳細](/assets/images/help/repository/code-scanning-alert-details.png)

詳細については、「[{% data variables.product.prodname_code_scanning %} アラートについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts)」を参照してください。

{% note %}

**注:** {% data variables.product.prodname_codeql %} による {% data variables.product.prodname_code_scanning %}分析の場合、リポジトリの {% data variables.product.prodname_code_scanning %} アラートの一覧の上部にあるヘッダーで、最新の実行に関する情報を確認することができます。 

たとえば、最後のスキャンが実行されたのがいつか、リポジトリ中のコードの合計行数に対する分析されたコードの行数、生成されたアラートの合計数を見ることができます。
  ![UI バナー](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}

## {% data variables.product.prodname_code_scanning %} アラートのフィルター処理

{% data variables.product.prodname_code_scanning %} アラート ビューに表示されるアラートをフィルター処理できます。 これにより、特定の種類のアラートに集中できるため、数多くのアラートがある場合に便利です。 表示されるアラートの一覧を絞り込むために使用できるいくつかの定義済みのフィルターとさまざまなキーワードがあります。 

- 定義済みのフィルターを使用するには、 **[フィルター]** 、またはアラートの一覧のヘッダーに表示されているフィルターをクリックし、ドロップダウン リストからフィルターを選択します。
  {% ifversion fpt or ghes or ghec %}![定義済みのフィルター](/assets/images/help/repository/code-scanning-predefined-filters.png) {% else %}![定義済みのフィルター](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- キーワードを使用するには、フィルター テキスト ボックスに直接入力するか、または
  1. フィルター テキスト ボックスをクリックして、使用可能なすべてのフィルター キーワードの一覧を表示します。
  2. 使用するキーワードをクリックし、ドロップダウン リストから値を選択します。
  ![キーワード フィルター リスト](/assets/images/help/repository/code-scanning-filter-keywords.png)

キーワード フィルターを使用する利点は、結果が見つかる値のみがドロップダウン リストに表示されます。 これにより、結果が見つからないフィルターの設定を簡単に回避できます。

複数のフィルターを入力すると、ビューには、これらの _すべて_ のフィルターと一致するアラートが表示されます。 たとえば、`is:closed severity:high branch:main` の場合、`main` ブランチに存在し、クローズされた重大度が高いアラートのみが表示されます。 例外は、refs (`ref`、`branch`、`pr`) に関連するフィルターです。`is:open branch:main branch:next` の場合、`main` ブランチと `next` ブランチの両方のオープンなアラートが表示されます。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}

`tag` フィルターにプレフィックス `-` を付けると、そのタグを含む結果を除外できます。 たとえば、`-tag:style` の場合は、`style` タグを含まないアラートのみが表示されます。{% ifversion codeql-ml-queries %}`-tag:experimental` の場合は、すべての実験アラートが省略されます。 詳細については、「[{% data variables.product.prodname_code_scanning %} アラートについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)」を参照してください。{% else %}.{% endif %}

{% endif %}

### 結果をアプリケーション コードのみに制限する

"Only alerts in application code" フィルターまたは `autofilter:true` キーワードと値を使用して、結果をアプリケーション コード内のアラートに制限できます。 アプリケーション コード以外のコードの種類の詳細については、上記の「[About labels for alerts not in application code](#about-labels-for-alerts-that-are-not-found-in-application-code)」 (アプリケーション コード内にないアラートのラベルについて) を参照してください。

{% ifversion fpt or ghes or ghec %}

## {% data variables.product.prodname_code_scanning %}アラートの検索

アラートのリストを検索できます。 これは、リポジトリ中に大量のアラートがある場合や、たとえばアラートの正確な名前を知らないような場合に役立ちます。 {% data variables.product.product_name %}は以下に渡って自由テキスト検索を行います。
- アラートの名前です。
- アラートの詳細 (これには、ビューの **[さらに表示]** 折りたたみ可能セクションで既定により非表示になっている情報も含まれます)。{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![検索で使用されるアラート情報](/assets/images/help/repository/code-scanning-free-text-search-areas.png) {% else %} ![検索で使用されるアラート情報](/assets/images/enterprise/3.4/repository/code-scanning-free-text-search-areas.png) {% endif %}

| サポートされている検索 | 構文の例 | 結果 |
| ---- | ---- | ---- |
| 単一語検索 | `injection` | 語 `injection` を含むすべてのアラートが返されます |
| 複数語検索 | `sql injection` | `sql` または `injection` を含むすべてのアラートが返されます |
| 完全一致検索</br>(二重引用符を使用) |  `"sql injection"` | 句 `sql injection` をこのとおりに含むすべてのアラートが返されます |
| OR検索 | `sql OR injection` | `sql` または `injection` を含むすべてのアラートが返されます |
| AND検索 | `sql AND injection` | `sql` と `injection` の両方の語を含むすべてのアラートが返されます | 

{% tip %}

**ヒント:** 
- 複数語検索はOR検索と等価です。
- AND 検索により、検索語句がアラート名または詳細の _任意の位置_ に任意の順序で見つかった場合に結果が返されます。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. **[フィルター]** ドロップダウン メニューの右側にあるフリー テキスト検索ボックスに、検索するキーワードを入力します。
  ![フリー テキスト検索ボックス](/assets/images/help/repository/code-scanning-search-alerts.png)
2. <kbd>Return</kbd> キーを押します。 アラートリストには、検索条件にマッチしたオープンな{% data variables.product.prodname_code_scanning %}アラートが含まれます。

{% endif %}

{% ifversion code-scanning-task-lists %}
## Issues で {% data variables.product.prodname_code_scanning %} アラートを追跡する

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} {% data reusables.code-scanning.github-issues-integration %} {% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## アラートを解決する

リポジトリへの書き込み権限があるユーザなら誰でも、コードに修正をコミットしてアラートを解決できます。 リポジトリでプルリクエストに対して {% data variables.product.prodname_code_scanning %} が実行されるよう予定されている場合は、修正してプルリクエストを発行するようお勧めします。 これにより、変更の {% data variables.product.prodname_code_scanning %} 解析がトリガーされ、修正で新しい問題が入り込まないようテストされます。 詳細については、「[{% data variables.product.prodname_code_scanning %} の構成](/code-security/secure-coding/configuring-code-scanning)」 および「[pull request の {% data variables.product.prodname_code_scanning %} アラートのトリアージ](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

リポジトリに対して書き込みアクセス許可がある場合、アラートの概要を表示し、 **[クローズ済み]** をクリックして、解決されたアラートを表示することができます。 詳細については、「[Viewing the alerts for a repository](#viewing-the-alerts-for-a-repository)」 (リポジトリのアラートの表示) を参照してください。 "Closed"リストは、修正されたアラートと、ユーザが却下したアラートを示します。

自由テキスト検索またはフィルターを使ってアラートの一部を表示し、一致するすべてのアラートをクローズ済みとマークすることができます。 

あるブランチでは解決されたアラートが、別のブランチでは解決されていないことがあります。 アラートの概要で "Branch" フィルターを使用して、特定のブランチでアラートが解決されているかどうかを確認できます。

![ブランチによるアラートのフィルタリング](/assets/images/help/repository/code-scanning-branch-filter.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% note %}

**注:** 複数の構成を使用してコード スキャンを実行する場合、アラートに複数の分析元が含まれることがあります。 すべての構成を定期的に実行する場合を除いて、ある分析元では解決されており、別の分析元では解決されていないアラートが表示される可能性があります。 詳細については、「[About analysis origins](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-analysis-origins)」 (分析元について) を参照してください。

{% endnote %} {% endif %}
## アラートの却下{% ifversion delete-code-scanning-alerts %}または削除{% endif %}

アラートをクローズする方法は2つあります。 コード中の問題を修正するか、アラートを却下できます。 {% ifversion delete-code-scanning-alerts %}または、リポジトリの管理者アクセス許可を持っている場合は、アラートを削除できます。 アラートの削除は、{% data variables.product.prodname_code_scanning %}ツールをセットアップした後に、それを削除する事にした場合、あるいは使い続けたいよりも大きなクエリセットで{% data variables.product.prodname_codeql %}分析を設定してしまい、ツールからいくつかのクエリを削除した場合といった状況で役立ちます。 どちらの場合も、アラートを削除することで{% data variables.product.prodname_code_scanning %}の結果をクリーンアップできます。 アラートは、 **[Security]\(セキュリティ\)** タブ内の概要リストから削除できます。{% endif %}

アラートを無視することは、修正する必要がないと思われるアラートを閉じる方法です。 {% data reusables.code-scanning.close-alert-examples %} アラートは、コード内の {% data variables.product.prodname_code_scanning %} 注釈、または **[セキュリティ]** タブの概要リストから削除できます。

アラートを却下すると:

- それはすべてのブランチで却下されます。
- アラートはプロジェクトの現在のアラート数から除外されます。
- アラートはアラートのサマリの"Closed"リストに移動されます。必要な場合は、そこからアラートを再オープンできます。
- アラートをクローズした理由は記録されます。{% ifversion comment-dismissed-code-scanning-alert %} 
- 必要に応じて、却下についてコメントを残し、アラートを却下したコンテキストを記録することもできます。{% endif %}
- 次に{% data variables.product.prodname_code_scanning %}が実行されたとき、同じコードはアラートを生成しません。

{% ifversion delete-code-scanning-alerts %}アラートを削除した場合:

- それはすべてのブランチで削除されます。
- アラートはプロジェクトの現在のアラート数から除外されます。
- これは、アラートの概要の "クローズ" リストには追加 _されません_。
- アラートを生成したコードが同じままであり、構成の変更なしで同じ {% data variables.product.prodname_code_scanning %} ツールをもう一度実行すると、分析結果にはアラートが再度表示されます。{% endif %}

アラートを却下{% ifversion delete-code-scanning-alerts %}または削除{% endif %}するには:

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. リポジトリに対して管理アクセス許可を持っていて、この {% data variables.product.prodname_code_scanning %} ツールのアラートを削除する必要がある場合は、チェック ボックスの一部またはすべてを選択して、 **[削除]** をクリックします。

   ![アラートの削除](/assets/images/help/repository/code-scanning-delete-alerts.png)

   必要に応じて、自由テキスト検索またはフィルターを使ってアラートの一部を表示し、一致したすべてのアラートを一度に削除することもできます。 たとえば、クエリを{% data variables.product.prodname_codeql %}分析から削除したら、"Rule"フィルタを使ってそのクエリに対するアラートだけをリストして、それらのアラートをすべて選択して削除できます。

{% ifversion ghes or ghae %} ![[Filter alerts by rule]\(アラートを規則によってフィルター処理する\)](/assets/images/help/repository/code-scanning-filter-by-rule.png) {% else %} ![[Filter alerts by rule]\(アラートを規則によってフィルター処理する\)](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png) {% endif %}{% endif %}
1. アラートを却下したい場合、そのアラートをまず調べて、却下する正しい理由を選択できるようにすることが重要です。 調べたいアラートをクリックしてください。
![概要リストからアラートを開く](/assets/images/help/repository/code-scanning-click-alert.png) {%- ifversion comment-dismissed-code-scanning-alert %}
1. アラートを確認してから **[Dismiss alert]\(アラートの却下\)** をクリックし、アラートをクローズする理由を選ぶか入力します。 
  ![コード スキャン アラートのスクリーンショット。却下理由を選ぶドロップダウンが強調されています。](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png){%- else %}
1. アラートをレビューした後、 **[却下]** をクリックし、アラートをクローズする理由を選択します。
  ![アラートを却下する理由を選びます](/assets/images/help/repository/code-scanning-alert-close-drop-down.png){%- endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### 複数のアラートを一度に却下する

同じ理由で却下したい複数のアラートがプロジェクトにあるなら、アラートのサマリからそれらをまとめて却下できます。 通常は、リストをフィルタしてマッチするアラートをすべて却下することになるでしょう。 たとえば、プロジェクト中で特定の共通脆弱性タイプ (CWE)の脆弱性がタグ付けされた現在のアラートをすべて却下したいことがあるでしょう。

## 参考資料

- 「[pull request の {% data variables.product.prodname_code_scanning %} アラートのトリアージ](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」
- 「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」
- 「[{% data variables.product.prodname_code_scanning %} との統合について](/code-security/secure-coding/about-integration-with-code-scanning)」
