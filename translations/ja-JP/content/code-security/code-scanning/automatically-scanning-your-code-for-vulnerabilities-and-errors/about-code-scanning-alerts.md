---
title: Code scanningアラートについて
intro: 様々な種類のCode scanningアラートと、それぞれのアラートが示す問題の理解に役立つ情報について学んでください。
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 1e540aa8b061e0bbdd5b7be1a2563cd983cfb753
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881228'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %} からのアラートについて

デフォルトの {% data variables.product.prodname_codeql %} 解析、サードパーティーの解析、または複数のタイプの解析を使用して、リポジトリのコードをチェックするため、{% data variables.product.prodname_code_scanning %} をセットアップできます。 解析が完了すると、解析によるアラートがリポジトリのセキュリティビューに隣り合わせで表示されます。 サードパーティツールまたはカスタムクエリの結果には、{% data variables.product.company_short %} のデフォルト {% data variables.product.prodname_codeql %} 解析により検出されたアラートで表示されるプロパティの一部が含まれていない場合があります。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

デフォルトでは、{% data variables.product.prodname_code_scanning %} はプルリクエスト中にデフォルトブランチのコードを定期的に解析します。 pull request でのアラートの管理については、「[pull request で {% data variables.product.prodname_code_scanning %} アラートをトリアージする](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

## アラートの詳細について

各アラートはコードの問題と、それを特定したツールの名前を表示します。 アラートをトリガーしたコード行と、アラートのプロパティ (アラートの重要度、セキュリティの重要度、問題の性質など) を確認できます。 アラートは、問題が最初に発生したときにも通知します。 {% data variables.product.prodname_codeql %} 解析で特定されたアラートについては、問題を解説する方法についての情報も表示されます。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![{% data variables.product.prodname_code_scanning %} からのアラートの例](/assets/images/help/repository/code-scanning-alert.png) {% else %} ![{% data variables.product.prodname_code_scanning %} からのアラートの例](/assets/images/enterprise/3.4/repository/code-scanning-alert.png) {% endif %}

{% data variables.product.prodname_codeql %}を使って{% data variables.product.prodname_code_scanning %}をセットアップした場合、コード中のデータフローの問題も見つけることができます。 データフロー解析は、データを安全でない方法で利用する、関数に危険な引数を渡す、機密情報を漏洩するなど、コードにおける潜在的なセキュリティ問題を検出します。

{% data variables.product.prodname_code_scanning %} がデータフローアラートを報告すると、{% data variables.product.prodname_dotcom %} はデータがコードを通してどのように移動するかを示します。 {% data variables.product.prodname_code_scanning_capc %} を使用すると、機密情報を漏洩し、悪意のあるユーザによる攻撃の入り口になる可能性があるコードの領域を特定できます。

### 重要度について

アラートの重要度レベルは、`Error`、`Warning`、または `Note` です。

pull request のチェックとして{% data variables.product.prodname_code_scanning %}が有効化されている場合、重要度が `error` の結果が検出されると、チェックは失敗します。 チェック エラーの原因となる code scanning アラートの重要度レベルを指定できます。 詳しくは、「[pull request のチェック エラーの原因になる重要度を定義する](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)」をご覧ください。

### セキュリティ重要度について

{% data variables.product.prodname_code_scanning_capc %}は、セキュリティクエリによって生成されたアラートのセキュリティ重要度を表示します。 セキュリティ重大度レベルは、`Critical`、`High`、`Medium`、`Low` のいずれかになります。

アラートのセキュリティ重要度の計算には、共通脆弱性評価システム（CVSS）のデータを使用しています。 CVSSはソフトウェアの脆弱性の性格と重要度を伝えるためのオープンフレームワークで、アラートのスコアリングのために他のセキュリティ製品で広く使われています。 重要度レベルの計算方法の詳細については、[こちらのブログ記事](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/)を参照してください。

既定では、セキュリティ重要度が `Critical` または `High` の {% data variables.product.prodname_code_scanning %} の結果があれば、チェックは失敗します。 {% data variables.product.prodname_code_scanning %}の結果でチェックの失敗を引き起こすセキュリティ重要度は指定できます。 詳しくは、「[pull request のチェック エラーの原因になる重要度を定義する](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)」をご覧ください。

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %}
### 分析元について

リポジトリでコード分析の複数の構成を設定し、さまざまなツールを使用して、異なる複数の言語またはコード領域をターゲットにすることができます。 コード スキャンの各構成は、生成されるすべてのアラートの分析元です。 たとえば、GitHub Actions で既定の CodeQL 分析を使用して生成されたアラートと、外部で生成され、コード スキャン API を介してアップロードされたアラートは、分析元が異なります。

複数の構成を使用してファイルを分析した場合、同じクエリによって検出された問題が、複数の分析元があるアラートとして報告されます。 アラートの分析元が複数ある場合、アラート ページの右側にある **[影響を受けるブランチ]** セクションで、該当するブランチの横に {% octicon "workflow" aria-label="The workflow icon" %} アイコンが表示されます。 {% octicon "workflow" aria-label="The workflow icon" %} アイコンの上にカーソルを合わせると、各分析元の名前とその分析元のアラートの状態を確認できます。 また、各分析元でいつアラートが発生したかの履歴を、アラート ページのタイムラインに表示することもできます。 アラートに分析元が 1 つしかない場合、アラート ページに分析の発生元に関する情報は表示されません。

![複数の分析元があるコード スキャン アラート](/assets/images/help/repository/code-scanning-analysis-origins.png)

{% note %}

**メモ:** 場合によっては、コード スキャン アラートが 1 つの分析元について修正済みとして表示されていても、2 つ目の分析元についてはまだ未解決であることがあります。 これを解決するには、2 番目のコード スキャン構成を再実行して、その分析元のアラートの状態を更新します。

{% endnote %}

{% endif %}
### アプリケーションコード中には見つからないアラートのラベルについて

{% data variables.product.product_name %}は、アプリケーションコード中に見つからないアラートに対し、カテゴリラベルを割り当てます。 ラベルは、アラートの場所に関連づけられます。

- **[生成済み]** : ビルド プロセスによって生成されたコード
- **[テスト]** : テスト コード
- **[ライブラリ]** : ライブラリまたはサードパーティのコード
- **[ドキュメント]** : ドキュメント

{% data variables.product.prodname_code_scanning_capc %}は、ファイルをファイルパスによって分類します。 手動でソースファイルを分類することはできません。

以下は、ライブラリコード内で生じているとマークされたアラートの{% data variables.product.prodname_code_scanning %}アラートリストの例です。

![コード スキャンのライブラリ アラート リスト](/assets/images/help/repository/code-scanning-library-alert-index.png)

アラート ページでは、ファイルパスがライブラリ コードとしてマークされている (`Library` ラベル) ことがわかります。

![コード スキャンのライブラリ アラートの詳細](/assets/images/help/repository/code-scanning-library-alert-show.png)

{% ifversion codeql-ml-queries %}

## 実験的なアラートについて

{% data reusables.code-scanning.beta-codeql-ml-queries %}

{% data variables.product.prodname_codeql %}アクションを使って{% data variables.product.prodname_code_scanning %}を実行するリポジトリでは、実験的としてマークされたアラートを見ることがあるかもしれません。 それらは、既存の{% data variables.product.prodname_codeql %}クエリの機能を拡張するための機械学習モデルを使って見つけられたアラートです。

![コード スキャンの実験的なアラート リスト](/assets/images/help/repository/code-scanning-experimental-alert-list.png)

### クエリを拡張するために機械学習モデルを使う利点

機械学習モデルを使うクエリは、オリジナルのクエリ作成者が含めなかったフレームワークやライブラリを使って書かれたコードの脆弱性を見つけることができます。

{% data variables.product.prodname_codeql %}の各セキュリティクエリは、特定の種類の攻撃に対して脆弱なコードを特定します。 セキュリティの研究者はクエリを書き、最も一般的なフレームワークやライブラリを含めます。 そのため、既存のそれぞれのクエリは、一般的なフレームワークやライブラリの脆弱な使用を見つけます。 しかし、開発者は様々な多くのフレームワークやライブラリを使い、手作業でメンテナンスされるクエリにそれらをすべて含めることはできません。 したがって、手作業でメンテナンスされるクエリは、すべてのフレームワークやライブラリを網羅することはできません。

{% data variables.product.prodname_codeql %}は機械学習モデルを使い、幅広いフレームワークやライブラリをカバーするよう既存のセキュリティクエリを拡張します。 この機械学習モデルは、それまで見たことがないコードに潜む問題を検出するようトレーニングされています。 このモデルを使用するクエリは、元々のクエリには記述されていないフレームワークやライブラリの結果を見つけます。

### 機械学習を使って特定されたアラート

機械学習モデルを使用して検出されたアラートは、テクノロジが現在開発中であることを示す "試験的なアラート" としてタグ付けされます。 これらのアラートは、基になるクエリよりも誤検知の結果の割合が高くなります。 機械学習モデルは、不適切な結果を誤検知としてマークしたり、適切な結果を修正したりするなどのユーザー アクションに基づいて改善されます。

![コード スキャンの試験的なアラートの詳細](/assets/images/help/repository/code-scanning-experimental-alert-show.png)

## 試験的なアラートを有効にする

既定の {% data variables.product.prodname_codeql %} クエリ スイートには、機械学習を使用して試験的なアラートを生成するクエリは含まれません。 {% data variables.product.prodname_code_scanning %} 中に機械学習クエリを実行するには、次のいずれかのクエリ スイートに含まれる追加のクエリを実行する必要があります。

{% data reusables.code-scanning.codeql-query-suites %}

追加のクエリ スイートを実行するようにワークフローを更新すると、分析時間が長くなります。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Run extended queries including queries using machine learning
    queries: security-extended
```

詳細については、「[Code scanning を設定する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)」を参照してください。

## 試験的なアラートを無効にする

機械学習を使用して試験的なアラートを生成するクエリを無効にする最も簡単な方法は、`security-extended` または `security-and-quality` クエリ スイートの実行を停止することです。 上記の例では、`queries` 行をコメントアウトします。 `security-extended` または `security-and-quality` スイートを引き続き実行する必要があり、機械学習クエリで問題が発生している場合は、以下の詳細を使用して [{% data variables.product.company_short %} サポート](https://support.github.com/contact)にチケットを開くことができます。

- チケットのタイトル: "{% data variables.product.prodname_code_scanning %}: 実験的なアラート ベータからの削除"
- 影響を受けているリポジトリまたは組織の詳細を明示する
- エンジニアリングへのエスカレーションを依頼する

{% endif %}
