---
title: Code scanningの SARIF サポート
shortTitle: SARIF support
intro: '{% data variables.product.prodname_dotcom %} のリポジトリにあるサードパーティの静的分析ツールからの結果を表示するには、{% data variables.product.prodname_code_scanning %} 用に SARIF 2.1.0 JSON スキーマの特定のサブセットをサポートする SARIF ファイルに結果を保存する必要があります。 デフォルトの {% data variables.product.prodname_codeql %} 静的分析エンジンを使用すると、結果は {% data variables.product.prodname_dotcom %} のリポジトリに自動的に表示されます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning
  - /code-security/secure-coding/sarif-support-for-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/sarif-support-for-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - SARIF
ms.openlocfilehash: 98d0e4620d240c3e1863aaee6f57a5834c86018b
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162792'
---
{% data reusables.code-scanning.beta %}

## SARIF サポートについて

SARIF (Static Analysis Results Interchange Format) は、出力ファイル形式を定義する [OASIS 標準](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html)です。 SARIF 標準は、静的分析ツールが結果を共有する方法を合理化するために使用されます。 {% data variables.product.prodname_code_scanning_capc %} は、SARIF 2.1.0 JSON スキーマのサブセットをサポートしています。

サードパーティの静的コード分析エンジンから SARIF ファイルをアップロードするには、アップロードされたファイルが SARIF 2.1.0 バージョンを使用していることを確認する必要があります。 {% data variables.product.prodname_dotcom %} は SARIF ファイルを解析し、{% data variables.product.prodname_code_scanning %} エクスペリエンスの一部としてリポジトリの結果を使用してアラートを表示します。 詳細については、「[{% data variables.product.prodname_dotcom %} への SARIF ファイルのアップロード](/code-security/secure-coding/uploading-a-sarif-file-to-github)」を参照してください。 SARIF 2.1.0 JSON スキーマの詳細については、[`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json) を参照してください。

{% data variables.code-scanning.codeql_workflow %} で {% data variables.product.prodname_actions %} を使っている場合、{% ifversion codeql-runner-supported %}{% data variables.code-scanning.codeql_runner %} を使っている場合、{% endif %}または {% data variables.product.prodname_codeql_cli %} を使っている場合は、SARIF 2.1.0 のサポートされるサブセットが {% data variables.product.prodname_code_scanning %} によって自動的に使われます。 詳しくは、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」{% ifversion codeql-runner-supported %}、「[CI システムでの {% data variables.code-scanning.codeql_runner %} の実行](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)」、{% endif %}または「[CI システムでの CodeQL CLI のインストール](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」をご覧ください。

同じコミットに対して複数の SARIF ファイルをアップロードし、各ファイルのデータを {% data variables.product.prodname_code_scanning %} の結果として表示できます。 コミット用に複数の SARIF ファイルをアップロードする場合は、分析ごとに "カテゴリ" を指定する必要があります。 カテゴリを指定する方法は、分析方法によって異なります。
- {% data variables.product.prodname_codeql_cli %} を直接使用して、SARIF ファイルを生成するときに `--sarif-category` 引数を `codeql database analyze` コマンドに渡します。 詳細については、「[CI システムでの CodeQL CLI の設定](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#about-generating-code-scanning-results-with-codeql-cli)」を参照してください。
- {% data variables.product.prodname_actions %} を `codeql-action/analyze` で使用すると、ワークフロー名とマトリックス変数 (通常は `language`) からカテゴリが自動的に設定されます。 これをオーバーライドするには、アクションの `category` 入力を指定します。これは、単一のワークフローでモノリポジトリのさまざまなセクションを分析する場合に便利です。
- {% data variables.product.prodname_actions %} を使用して他の静的分析ツールから結果をアップロードする場合、1 つのワークフローで同じツールに対して複数の結果ファイルをアップロードするには、`category` 入力を指定する必要があります。 詳細については、「[{% data variables.product.prodname_actions %} を使用した {% data variables.product.prodname_code_scanning %} 分析のアップロード](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)」を参照してください。
- これらの方法のいずれかを使用していない場合は、アップロードする SARIF ファイルごとに一意の `runAutomationDetails.id` を指定する必要があります。 このプロパティの詳細については、下記の「[`runAutomationDetails` オブジェクト](#runautomationdetails-object)」を参照してください。

同じカテゴリと同じツールからコミット用の 2 つ目の SARIF ファイルをアップロードすると、以前の結果が上書きされます。 ただし、1 つの {% data variables.product.prodname_actions %} ワークフロー実行で同じツールとカテゴリに対して複数の SARIF ファイルをアップロードしようとすると、設定ミスが検出され、実行は失敗します。

{% data variables.product.prodname_dotcom %} は、SARIF ファイルのプロパティを使用してアラートを表示します。 たとえば、`shortDescription` と `fullDescription` は {% data variables.product.prodname_code_scanning %} アラートの先頭に表示されます。 `location` により、{% data variables.product.prodname_dotcom %} がコード ファイルにアノテーションを表示できるようになります。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

SARIF を使い慣れていなく、詳細を確認したい場合は、Microsoft の [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) リポジトリを参照してください。

## 実行全体で {% data variables.product.prodname_code_scanning %} アラートを追跡するデータを提供する

新しいコード スキャンの結果がアップロードされるたびに、結果が処理され、アラートがリポジトリに追加されます。 同じ問題に対するアラートの重複を防ぐために、{% data variables.product.prodname_code_scanning %} はフィンガープリントを使用してさまざまな実行結果を照合し、選択したブランチの最新の実行で 1 回だけ表示されるようにします。 これにより、ファイルが編集されたときに、アラートを適切なコードの行に照合させることができます。 結果の `ruleID` は、分析全体で同じである必要があります。
 
### 一貫性のあるファイルパスのレポート

安定したフィンガープリントの計算を可能にするために、ファイルパスは実行全体で一貫している必要があります。 同じ結果に対してファイルパスが異なる場合、新しい分析が行われるたびに新しいアラートが作成され、古いアラートが閉じられます。 これにより、同じ結果に対して複数のアラートが発生します。

### フィンガープリント生成用のデータを含める

{% data variables.product.prodname_dotcom %} は、OASIS 標準の `partialFingerprints` プロパティを使用して、2 つの結果が論理的に同一の場合に検出します。 詳細については、OASIS ドキュメントの [partialFingerprints プロパティ](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)のエントリを参照してください。

{% data variables.code-scanning.codeql_workflow %} によって、{% ifversion codeql-runner-supported %}{% data variables.code-scanning.codeql_runner %} を使って、{% endif %}または {% data variables.product.prodname_codeql_cli %} を使って作成された SARIF ファイルには、フィンガープリント データが含まれます。 `upload-sarif` アクションを使用して SARIF ファイルをアップロードする場合にこのデータが欠落していると、{% data variables.product.prodname_dotcom %} は `partialFingerprints` フィールドにソース ファイルからデータの入力を試みます。 結果のアップロードの詳細については、「[{% data variables.product.prodname_dotcom %} への SARIF ファイルのアップロード](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)」を参照してください。

`/code-scanning/sarifs` API エンドポイントを使用してフィンガープリントデータなしで SARIF ファイルをアップロードする場合、{% data variables.product.prodname_code_scanning %} アラートが処理され表示されますが、アラートが重複して表示される場合があります。 重複するアラートが表示されないようにするには、SARIF ファイルをアップロードする前に、指紋データを計算し、`partialFingerprints` プロパティを設定する必要があります。 `upload-sarif` アクションで便利な始点 https://github.com/github/codeql-action/blob/main/src/fingerprints.ts が使用されるスクリプトが見つかる場合があります。 API の詳細については、「[SARIF データとして分析をアップロードする](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)」を参照してください。

## ルールと結果について

SARIF ファイルは、ルールと結果の両方をサポートします。 これらの要素に格納されている情報は似ていますが、目的は異なります。

- ルールは、`toolComponent` オブジェクトに含まれる `reportingDescriptor` オブジェクトの配列です。 ここに、分析中に実行されるルールの詳細を格納します。 これらのオブジェクト内の情報は、通常、ツールを更新したときに変更される頻度が低いはずです。

- 結果は、`run` オブジェクト内の `results` の下で、一連の `result` オブジェクトとして格納されます。 各 `result` オブジェクトには、コードベース内の 1 つのアラートの詳細が含まれています。 `results` オブジェクト内で、アラートを検出したルールを参照できます。

異なるコードベースを同じツールとルールで分析して生成された SARIF ファイルを比較すると、分析の結果に違いが見られますが、ルールにはありません。

## ソース ファイルのルートの指定

{% data variables.product.prodname_code_scanning_capc %} は、相対パスで報告された結果を、分析されたリポジトリのルートに対する相対パスとして解釈します。 結果に絶対 URI が含まれている場合、URI は相対 URI に変換されます。 その後、リポジトリにコミットされたファイルに対して相対 URI を照合できます。

絶対 URI から相対 URI への変換のソース ルートは、次のいずれかの方法で指定できます。

- `github/codeql-action/analyze` アクションに対する [`checkout_path`](https://github.com/github/codeql-action/blob/c2c0a2908e95769d01b907f9930050ecb5cf050d/analyze/action.yml#L44-L47) 入力
- SARIF アップロード API エンドポイントに対する `checkout_uri` パラメーター。 詳しくは、REST API ドキュメントの「[{% data variables.product.prodname_code_scanning_capc %}](/rest/code-scanning#upload-an-analysis-as-sarif-data)」をご覧ください。
- SARIF ファイルの [`invocation.workingDirectory.uri`](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc9244365) プロパティ

ソース ルートを指定する場合、絶対 URI を使用して指定された成果物の場所では、同じ URI スキームを使用する必要があります。 ソース ルートの URI スキームと 1 つ以上の絶対 URI の間に不一致がある場合、アップロードは拒否されます。

たとえば、SARIF ファイルは `file:///github/workspace` のソース ルートを使用してアップロードされます。 

```
# Conversion of absolute URIs to relative URIs for location artifacts

file:///github/workspace/src/main.go -> src/main.go
file:///tmp/go-build/tmp.go          -> file:///tmp/go-build/tmp.go
```

両方の絶対 URI でソース ルートと同じ URI スキームが使用されると、ファイルが正常にアップロードされます。

## SARIF ファイルを検証する

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

SARIF ファイルが {% data variables.product.prodname_code_scanning %} と互換性があるかどうかは、{% data variables.product.prodname_dotcom %} 収集ルールと照らし合わせることで確認できます。 詳細については、[Microsoft SARIF 検証ツール](https://sarifweb.azurewebsites.net/)を参照してください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## サポートされている SARIF 出力ファイルのプロパティ

{% data variables.product.prodname_codeql %} 以外のコード分析エンジンを使用する場合、サポートされている SARIF プロパティを確認して、{% data variables.product.prodname_dotcom %} での分析結果の表示方法を最適化できます。

{% note %}

**注:** "必須" としてマークされたプロパティには、明示的な値を指定する必要があります。 空の文字列は、必須のプロパティではサポートされていません。

{% endnote %}

有効な SARIF 2.1.0 出力ファイルはすべてアップロードできますが、{% data variables.product.prodname_code_scanning %} は以下のサポートされているプロパティのみを使用します。

### `sarifLog` オブジェクト

| 名前 | 説明 |
|----|----|
|  `$schema` | **必須。** バージョン 2.1.0 の SARIF JSON スキーマの URI。 たとえば、`https://json.schemastore.org/sarif-2.1.0.json` のようにします。 |
| `version` | **必須。** {% data variables.product.prodname_code_scanning_capc %} では、SARIF バージョン `2.1.0` のみがサポートされます。
| `runs[]` | **必須。** SARIF ファイルには、1 つ以上の実行の配列が含まれています。 各実行は、分析ツールの 1 回の実行を表します。 `run` の詳細については、「[`run` オブジェクト](#run-object)」を参照してください。

### `run` オブジェクト

{% data variables.product.prodname_code_scanning_capc %} は `run` オブジェクトを使用して、ツールで結果をフィルターし、結果のソースに関する情報を提供します。 `run` オブジェクトには、結果を生成したツールに関する情報を含む `tool.driver` ツール コンポーネント オブジェクトが含まれます。 `run` ごとに、1 つの分析ツールの結果のみを取得できます。

| 名前 | 説明 |
|----|----|
| `tool.driver` | **必須。** 分析ツールについて説明する `toolComponent` オブジェクト。 詳細については、「[`toolComponent` オブジェクト](#toolcomponent-object)」を参照してください。 |
| `tool.extensions[]` | **省略可。** 分析中にツールによって使用されるプラグインまたは拡張機能を表す `toolComponent` オブジェクトの配列。 詳細については、「[`toolComponent` オブジェクト](#toolcomponent-object)」を参照してください。 |
| `invocation.workingDirectory.uri` | **省略可。** このフィールドは、`checkout_uri` (SARIF アップロード API のみ) または `checkout_path` ({% data variables.product.prodname_actions %} のみ) が指定されていない場合にのみ使用されます。 この値は、[`physicalLocation` オブジェクト](#physicallocation-object)で使用される絶対 URI を相対 URI に変換するために使用されます。 詳しくは、「[ソース ファイルのルートの指定](#specifying-the-root-for-source-files)」を参照してください。|
| `results[]` | **必須。** 分析ツールの結果。 {% data variables.product.prodname_code_scanning_capc %} は {% data variables.product.prodname_dotcom %} に結果を表示します。 詳細については、「[`result` オブジェクト](#result-object)」を参照してください。

### `toolComponent` オブジェクト

| 名前 | 説明 |
|----|----|
| `name` | **必須。** 分析ツールの名前。 {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom %} に名前を表示して、ツールで結果をフィルタできるようにします。 |
| `version` | **省略可。** 分析ツールのバージョン。 {% data variables.product.prodname_code_scanning_capc %} は、バージョン番号を使用して、分析されているコードでの変更ではなく、ツールのバージョン変更により結果が変更された可能性がある場合に追跡します。 SARIF ファイルに `semanticVersion` フィールド含まれている場合、{% data variables.product.prodname_code_scanning %} では `version` が使用されません。 |
| `semanticVersion` | **省略可。** セマンティック バージョニング 2.0 形式で指定された分析ツールのバージョン。 {% data variables.product.prodname_code_scanning_capc %} は、バージョン番号を使用して、分析されているコードでの変更ではなく、ツールのバージョン変更により結果が変更された可能性がある場合に追跡します。 SARIF ファイルに `semanticVersion` フィールド含まれている場合、{% data variables.product.prodname_code_scanning %} では `version` が使用されません。 詳細については、セマンティック バージョニング ドキュメントの「[セマンティック バージョニング 2.0.0](https://semver.org/)」を参照してください。 |
| `rules[]` | **必須。** ルールを表す `reportingDescriptor` オブジェクトの配列。 分析ツールはルールを使用して、分析対象のコードの問題を見つけます。 詳細については、「[`reportingDescriptor` オブジェクト](#reportingdescriptor-object)」を参照してください。 |

### `reportingDescriptor` オブジェクト

ここに、分析中に実行されるルールの詳細を格納します。 これらのオブジェクト内の情報は、通常、ツールを更新したときに変更される頻度が低いはずです。 詳しくは、上の「[ルールと結果について](#understanding-rules-and-results)」を参照してください。

| 名前 | 説明 |
|----|----|
| `id` |  **必須。** ルールの一意の識別子。 `id` は SARIF ファイルの他の部分から参照され、{% data variables.product.prodname_code_scanning %} が {% data variables.product.prodname_dotcom %} に URL を表示するために使用できます。 |
| `name` | **省略可。** ルールの名前です。 {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom %} のルールで結果をフィルタできるように名前を表示します。 |
| `shortDescription.text` | **必須。** ルールの簡潔な説明。 {% data variables.product.prodname_code_scanning_capc %} は、関連する結果の横にある {% data variables.product.prodname_dotcom %} の簡単な説明を表示します。
| `fullDescription.text` | **必須。** ルールの説明。 {% data variables.product.prodname_code_scanning_capc %} は、関連する結果の横にある {% data variables.product.prodname_dotcom %} の説明全体を表示します。 文字数は最大 1000 文字に制限されています。
| `defaultConfiguration.level` | **省略可。** ルールの既定の重大度レベル。 {% data variables.product.prodname_code_scanning_capc %} は、特定のルールの結果がどの程度重要であるかを理解するために、重要度レベルを使用します。 この値は、`result` オブジェクト内の `level` 属性でオーバーライドできます。 詳細については、「[`result` オブジェクト](#result-object)」を参照してください。 既定値:`warning`。
| `help.text` | **必須。** テキスト形式を使用したルールのドキュメント。 {% data variables.product.prodname_code_scanning_capc %} は、関連する結果の横にこのヘルプドキュメントを表示します。
| `help.markdown` | **推奨。** Markdown 形式のルールのドキュメント。 {% data variables.product.prodname_code_scanning_capc %} は、関連する結果の横にこのヘルプドキュメントを表示します。 `help.markdown` が使用可能な場合は、`help.text` の代わりに表示されます。
| `properties.tags[]` | **省略可。** 文字列の配列。 {% data variables.product.prodname_code_scanning_capc %} は、`tags` を使用して、{% data variables.product.prodname_dotcom %} の結果をフィルターできます。 たとえば、`security` タグを含むすべての結果をフィルターすることができます。
| `properties.precision` | **推奨。** このルールによって示される結果が true となる頻度を示す文字列。 たとえば、ルールの誤検知率が高いことがわかっている場合、精度は `low` である必要があります。 {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom %} の精度で結果を並べ替えるため、最高 `level` の精度と最高 `precision` の結果が最初に表示されます。 `very-high`、`high`、`medium`、`low` のいずれかにすることができます。 
| `properties.problem.severity` | **推奨。** セキュリティ以外のクエリによって生成されたアラートの重大度レベルを示す文字列。 これを `properties.precision` プロパティとともに使用すると、{% data variables.product.prodname_dotcom %} に既定で結果が表示されるかどうかが決定されるため、最高の `problem.severity` と最高の `precision` の結果が最初に表示されます。 `error`、`warning`、または `recommendation` のいずれかにすることができます。
| `properties.security-severity` | **推奨。** セキュリティ クエリ (`@tags` には `security` が含まれる) の重大度のレベル (0.0 から 10.0) を示すスコアを表す文字列。 これを `properties.precision` プロパティとともに使用すると、{% data variables.product.prodname_dotcom %} に既定で結果が表示されるかどうかが決定されるため、最高の `security-severity` と最高の `precision` の結果が最初に表示されます。 {% data variables.product.prodname_code_scanning_capc %} は、数値スコアを次のように変換します。9.0 以上が `critical`、7.0 から 8.9 が `high`、4.0 から 6.9 が `medium`、3.9 以下が `low` です。 

### `result` オブジェクト

各 `result` オブジェクトには、コードベース内の 1 つのアラートの詳細が含まれています。 `results` オブジェクト内で、アラートを検出したルールを参照できます。 詳しくは、上の「[ルールと結果について](#understanding-rules-and-results)」を参照してください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| 名前 | 説明 |
|----|----|
| `ruleId`| **省略可。** ルールの一意識別子 (`reportingDescriptor.id`)。 詳細については、「[`reportingDescriptor` オブジェクト](#reportingdescriptor-object)」を参照してください。 {% data variables.product.prodname_code_scanning_capc %} は、ルール識別子を使用して、{% data variables.product.prodname_dotcom %} のルールで結果をフィルタします。
| `ruleIndex`| **省略可。** ツール コンポーネント `rules` 配列内の関連するルール (`reportingDescriptor` オブジェクト) のインデックス。 詳細については、「[`run` オブジェクト](#run-object)」を参照してください。 このプロパティに使用できる範囲は 0 から 2^63 - 1 です。
| `rule`| **省略可。** この結果のルール (レポート記述子) を見つけるために使用される参照。 詳細については、「[`reportingDescriptor` オブジェクト](#reportingdescriptor-object)」を参照してください。
| `level`| **省略可。** 結果の重大度。 このレベルは、ルールで定義されているデフォルトの重要度をオーバーライドします。 {% data variables.product.prodname_code_scanning_capc %} は、レベルを使用して、{% data variables.product.prodname_dotcom %} の重要度で結果をフィルタします。
| `message.text`| **必須。** 結果を説明するメッセージ。 {% data variables.product.prodname_code_scanning_capc %} は、結果のタイトルとしてメッセージテキストを表示します。 表示スペースが限られている場合、メッセージの最初の文のみが表示されます。
| `locations[]`| **必須。** 最大 10 個の結果が検出された場所のセット。 指定された場所ごとに変更を加えることでのみ問題を修正できる場合を除き、1 つの場所のみを含める必要があります。 **メモ:** {% data variables.product.prodname_code_scanning %} が結果を表示するには、少なくとも 1 つの場所が必要です。 {% data variables.product.prodname_code_scanning_capc %} は、このプロパティを使用して、結果を注釈するファイルを決定します。 この配列の最初の値のみが使用されます。 他のすべての値は無視されます。
| `partialFingerprints`| **必須。** 結果の一意の ID を追跡するために使用される文字列のセット。 {% data variables.product.prodname_code_scanning_capc %} は、`partialFingerprints` を使用して、コミットとブランチで同じ結果であるものを正確に識別します。 {% data variables.product.prodname_code_scanning_capc %} は、`partialFingerprints` がある場合、それを使用しようとします。 サード パーティーの SARIF ファイルを `upload-action` でアップロードしているときに `partialFingerprints` が SARIF ファイルに含まれていない場合は、このアクションで作成されます。 詳しくは、「[実行全体でコード スキャン アラートを追跡するデータを提供する](#providing-data-to-track-code-scanning-alerts-across-runs)」を参照してください。  **メモ:** {% data variables.product.prodname_code_scanning_capc %} では `primaryLocationLineHash` のみが使用されます。
| `codeFlows[].threadFlows[].locations[]`| **省略可。** 実行スレッドを介したプログラムの進行状況を記述する、`threadFlow` オブジェクトの `location` オブジェクトの配列。 `codeFlow` オブジェクトは、結果の検出に使用されるコード実行パターンを記述します。 コードフローが入力されている場合、{% data variables.product.prodname_code_scanning %} は、関連する結果の {% data variables.product.prodname_dotcom %} のコードフローを拡張します。 詳細については、「[`location` オブジェクト](#location-object)」を参照してください。
| `relatedLocations[]`| この結果に関連する場所。 結果メッセージに埋め込まれている場合、{% data variables.product.prodname_code_scanning_capc %} は、関連する場所にリンクします。 詳細については、「[`location` オブジェクト](#location-object)」を参照してください。

### `location` オブジェクト

プログラミングアーティファクト内の場所（リポジトリ内のファイルやビルド中に生成されたファイルなど）。

| 名前 | 説明 |
|----|----|
| `location.id` | **省略可。** この場所を単一の結果オブジェクト内の他のすべての場所と区別する一意の識別子。 このプロパティに使用できる範囲は 0 から 2^63 - 1 です。
| `location.physicalLocation` | **必須。** アーティファクトとリージョンを識別します。 詳細については、[`physicalLocation`](#physicallocation-object) を参照してください。
| `location.message.text` | **省略可。** 場所に関連するメッセージ。

### `physicalLocation` オブジェクト

| 名前 | 説明 |
|----|----|
| `artifactLocation.uri`| **必須。** アーティファクトの場所を示す URI (通常はリポジトリ内にあるか、ビルド中に生成されたファイル)。 最良の結果を得るには、これが分析対象の GitHub リポジトリのルートからの相対パスであることをお勧めします。 たとえば、「 `src/main.js` 」のように入力します。 成果物 URI について詳しくは、「[ソース ファイルのルートの指定](#specifying-the-root-for-source-files)」を参照してください。|
| `region.startLine` | **必須。** リージョンの最初の文字の行番号。
| `region.startColumn` | **必須。** リージョンの最初の文字の列番号。
| `region.endLine` | **必須。** リージョンの最後の文字の行番号。
| `region.endColumn` | **必須。** リージョンの末尾に続く文字の列番号。

### `runAutomationDetails` オブジェクト

`runAutomationDetails` オブジェクトには、実行の ID を指定する情報が含まれています。

{% note %}

**メモ:** `runAutomationDetails` は SARIF v2.1.0 オブジェクトです。 {% data variables.product.prodname_codeql_cli %}を使っているなら、使用するSARIFのバージョンを指定できます。 `runAutomationDetails` と同等のオブジェクトは、SARIF v1 で `<run>.automationId`、SARIF v2 で `<run>.automationLogicalId` です。

{% endnote %}

| 名前 | 説明 |
|----|----|
| `id`| **省略可。** 分析のカテゴリと実行 ID を識別する文字列。 同じツールとコミットに対して、ただし様々な言語やコードの様々な部分にを処理した場合に、複数のSARIFファイルをアップロードする際に使ってください。 |

`runAutomationDetails` オブジェクトの使用は省略可能です。

`id` フィールドには、分析のカテゴリと実行 ID を含めることができます。 `id` フィールドの実行 ID の部分は使いませんが、保存はされます。

カテゴリを使って、同じツールあるいはコミットに対して行われる、ただし様々な言語やコードの様々な部分に対して行われる複数の分析を区別してください。 実行IDを使って、分析が実行された日付など、特定の分析の実行を識別してください。

`id` は `category/run-id` として解釈されます。 `id` にスラッシュ (`/`) が含まれていない場合は、文字列全体が `run_id` であり、`category` は空です。 それ以外の場合、`category` は最後のスラッシュまでの文字列内のすべてであり、`run_id` はそれ以降のすべてです。

| `id` | category | `run_id` |
|----|----|----|
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 2021-02-01
| my-analysis/tool1/ | my-analysis/tool1 | _`run-id` なし_
| my-analysis for tool1 | _カテゴリなし_ | my-analysis for tool1

- "my-analysis/tool1/2021-02-01" という `id` での実行は、"my-analysis/tool1" というカテゴリに属します。 おそらく、これは2021 年2月2日からの実行です。
- "my-analysis/tool1/" という `id` での実行は "my-analysis/tool1" というカテゴリに属しますが、そのカテゴリの他の実行とは区別されません。
- "my-analysis for tool1" が `id` の実行は、一意の識別子を持ちますが、いずれかのカテゴリに属していると推定できません。

`runAutomationDetails` オブジェクトと `id` フィールドの詳細については、OASIS ドキュメントの「[runAutomationDetails オブジェクト](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479)」を参照してください。

サポートされている残りのフィールドは無視されることに注意してください。

## SARIF 出力ファイルの例

次の例の SARIF 出力ファイルは、サポートされているプロパティと値の例を示しています。

### 最低限必要なプロパティの例

次の SARIF 出力ファイルには、{% data variables.product.prodname_code_scanning %} の結果が期待どおりに機能するために最低限必要なプロパティを示す値の例が示されています。 プロパティを削除したり、値を省略したり、空の文字列を使用した場合、このデータは正しく表示されないか、{% data variables.product.prodname_dotcom %} で同期されません。 

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "rules": [
            {
              "id": "R01"
                      ...
              "properties" : {
                 "id" : "java/unsafe-deserialization",
                 "kind" : "path-problem",
                 "name" : "...",
                 "problem.severity" : "error",
                 "security-severity" : "9.8",
               }
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "R01",
          "message": {
            "text": "Result text. This result does not have a rule associated."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "fileURI"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1"
          }
        }
      ]
    }
  ]
}
```

### サポートされているすべての SARIF プロパティを示す例

次の SARIF 出力ファイルには、{% data variables.product.prodname_code_scanning %} でサポートされているすべての SARIF プロパティを示す値の例が示されています。

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "semanticVersion": "2.0.0",
          "rules": [
            {
              "id": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
              "name": "js/unused-local-variable",
              "shortDescription": {
                "text": "Unused variable, import, function or class"
              },
              "fullDescription": {
                "text": "Unused variables, imports, functions or classes may be a symptom of a bug and should be examined carefully."
              },
              "defaultConfiguration": {
                "level": "note"
              },
              "properties": {
                "tags": [
                  "maintainability"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
              "name": "js/inconsistent-use-of-new",
              "shortDescription": {
                "text": "Inconsistent use of 'new'"
              },
              "fullDescription": {
                "text": "If a function is intended to be a constructor, it should always be invoked with 'new'. Otherwise, it should always be invoked as a normal function, that is, without 'new'."
              },
              "properties": {
                "tags": [
                  "reliability",
                  "correctness",
                  "language-features"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "R01"
            }
          ]
        }
      },
      "automationDetails": {
        "id": "my-category/"
      },
      "results": [
        {
          "ruleId": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
          "ruleIndex": 0,
          "message": {
            "text": "Unused variable foo."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "main.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1",
            "primaryLocationStartColumnFingerprint": "4"
          }
        },
        {
          "ruleId": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
          "ruleIndex": 1,
          "message": {
            "text": "Function resolvingPromise is sometimes invoked as a constructor (for example [here](1)), and sometimes as a normal function (for example [here](2))."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/promises.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "5061c3315a741b7d:1",
            "primaryLocationStartColumnFingerprint": "7"
          },
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/ParseObject.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2281,
                  "startColumn": 33,
                  "endColumn": 55
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/LiveQueryClient.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 166
                }
              },
              "message": {
                "text": "here"
              }
            }
          ]
        },
        {
          "ruleId": "R01",
          "message": {
            "text": "Specifying both [ruleIndex](1) and [ruleID](2) might lead to inconsistencies."
          },
          "level": "error",
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 54,
                  "startColumn": 10,
                  "endLine": 55,
                  "endColumn": 25
                }
              }
            }
          ],
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 81,
                  "startColumn": 10,
                  "endColumn": 18
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 82,
                  "startColumn": 10,
                  "endColumn": 21
                }
              },
              "message": {
                "text": "here"
              }
            }
          ],
          "codeFlows": [
            {
              "threadFlows": [
                {
                  "locations": [
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "startLine": 11,
                            "endLine": 29,
                            "startColumn": 10,
                            "endColumn": 18
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        },
                        "message": {
                          "text": "Rule has index 0"
                        }
                      }
                    },
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "endColumn": 47,
                            "startColumn": 12,
                            "startLine": 12
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "ABC:2"
          }
        }
      ],
      "columnKind": "utf16CodeUnits"
    }
  ]
}
```

