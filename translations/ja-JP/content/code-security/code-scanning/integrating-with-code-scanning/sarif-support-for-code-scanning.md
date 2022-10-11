---
title: コードスキャンの SARIF サポート
shortTitle: SARIF サポート
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
  ghes: '>=3.0'
  ghae: '*'
type: reference
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - SARIF
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.deprecation-codeql-runner %}

## SARIF サポートについて

SARIF（Static Analysis Results Interchange Format）は、出力ファイル形式を定義する [OASIS 標準](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html)です。 SARIF 標準は、静的分析ツールが結果を共有する方法を合理化するために使用されます。 {% data variables.product.prodname_code_scanning_capc %} は、SARIF 2.1.0 JSON スキーマのサブセットをサポートしています。

サードパーティの静的コード分析エンジンから SARIF ファイルをアップロードするには、アップロードされたファイルが SARIF 2.1.0 バージョンを使用していることを確認する必要があります。 {% data variables.product.prodname_dotcom %} は SARIF ファイルを解析し、{% data variables.product.prodname_code_scanning %} エクスペリエンスの一部としてリポジトリの結果を使用してアラートを表示します。 詳しい情報については、「[SARIF ファイルを {% data variables.product.prodname_dotcom %} にアップロードする](/code-security/secure-coding/uploading-a-sarif-file-to-github)」を参照してください。 SARIF 2.1.0 JSON スキーマの詳細については、「[`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Schemata/sarif-schema-2.1.0.json)」を参照してください。

SARIF ファイルに `partialFingerprints` が含まれていない場合、{% data variables.product.prodname_actions %} を使用して SARIF ファイルをアップロードすると、`partialFingerprints` フィールドが計算されます。 詳しい情報については「[リポジトリに対する{% data variables.product.prodname_code_scanning %}のセットアップ](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」あるいは「[CIシステムでの{% data variables.product.prodname_codeql_runner %}の実行](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)」を参照してください。

{% ifversion fpt or ghes > 3.0 or ghae-next %}
{% data variables.product.prodname_codeql_cli %}を使っているなら、使用するSARIFのバージョンを指定できます。 詳しい情報については「[CIシステムでの{% data variables.product.prodname_codeql_cli %}の設定](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#analyzing-a-codeql-database)」を参照してください。{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
同じツールとコミットに対して複数のSARIFファイルをアップロードして、それぞれのファイルを{% data variables.product.prodname_code_scanning %}を使って分析できます。 それぞれのファイル中で`runAutomationDetails.id`を指定することによって、それぞれの分析に対して「カテゴリ」を示すことができます。 同じカテゴリのSARIFファイル同士だけがお互いを上書きします。 このプロパティに関する詳しい情報については、以下の[`runAutomationDetails` object](#runautomationdetails-object)を参照してください。
{% endif %}

{% data variables.product.prodname_dotcom %} は、SARIF ファイルのプロパティを使用してアラートを表示します。 たとえば、`shortDescription` と `fullDescription` は、{% data variables.product.prodname_code_scanning %} アラートの上部に表示されます。 `location` により、{% data variables.product.prodname_dotcom %} がコードファイルに注釈を表示できるようになります。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

SARIF の使用が初めてで、詳細を確認する必要がある場合は、Microsoft の [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) リポジトリを参照してください。

## フィンガープリントを使用してアラートの重複を防止する

{% data variables.product.prodname_actions %} ワークフローが新しいコードスキャンを実行するたびに、それぞれの実行結果が処理され、アラートがリポジトリに追加されます。 同じ問題に対するアラートの重複を防ぐために、{% data variables.product.prodname_code_scanning %} はフィンガープリントを使用してさまざまな実行結果を照合し、選択したブランチの最新の実行で 1 回だけ表示されるようにします。 これにより、ファイルが編集されたときに、アラートを適切なコードの行にマッチさせることができます。

{% data variables.product.prodname_dotcom %} は、OASIS 標準の `partialFingerprints` プロパティを使用して、2 つの結果が論理的に同一の場合に検出します。 詳しい情報については、OASIS ドキュメントの「"[partialFingerprints プロパティ](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)」エントリを参照してください。

`id` は SARIF ファイルの他の部分から参照され、{% data variables.product.prodname_code_scanning %} が {% data variables.product.prodname_dotcom %} に URL を表示するために使用できます。 `upload-sarif` アクションを使用して SARIF ファイルをアップロードし、このデータが欠落している場合、{% data variables.product.prodname_dotcom %} はソースファイルから `partialFingerprints` フィールドの入力を試みます。 結果のアップロードに関する詳しい情報については、「[SARIF ファイルを {% data variables.product.prodname_dotcom %} にアップロードする](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)」を参照してください。

`/code-scanning/sarifs` API エンドポイントを使用してフィンガープリントデータなしで SARIF ファイルをアップロードする場合、{% data variables.product.prodname_code_scanning %} アラートが処理され表示されますが、アラートが重複して表示される場合があります。 アラートが重複して表示されないようにするには、フィンガープリントデータを計算し、`partialFingerprints` プロパティを入れてから SARIF ファイルをアップロードする必要があります。 `upload-sarif` アクションが使用しているスクリプト (https://github.com/github/codeql-action/blob/main/src/fingerprints.ts) は、取っ掛かりとして役立つかもしれません。 API に関する詳しい情報については、「[解析を SARIF データとしてアップロードする](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)」を参照してください。

## SARIF ファイルを検証する

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

SARIF ファイルが {% data variables.product.prodname_code_scanning %} と互換性があるかどうかは、{% data variables.product.prodname_dotcom %} 収集ルールと照らし合わせることで確認できます。 詳しい情報については、[Microsoft SARIF validator](https://sarifweb.azurewebsites.net/) にアクセスしてください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## サポートされている SARIF 出力ファイルのプロパティ

{% data variables.product.prodname_codeql %} 以外のコード分析エンジンを使用する場合、サポートされている SARIF プロパティを確認して、{% data variables.product.prodname_dotcom %} での分析結果の表示方法を最適化できます。

有効な SARIF 2.1.0 出力ファイルはすべてアップロードできますが、{% data variables.product.prodname_code_scanning %} は以下のサポートされているプロパティのみを使用します。

### `sarifLog` オブジェクト

| 名前        | 説明                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `$schema` | **必須。**バージョン 2.1.0 の SARIF JSON スキーマの URI。 例: `https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json` |
| `version` | **必須。**{% data variables.product.prodname_code_scanning_capc %} は、SARIF バージョン `2.1.0` のみをサポートしています。                                          |
| `runs[]`  | **必須。**SARIF ファイルには、1 つ以上の実行の配列が含まれています。 各実行は、分析ツールの 1 回の実行を表します。 `run` の詳細については、「[`run` オブジェクト](#run-object)」を参照してください。                       |

### `run` オブジェクト

{% data variables.product.prodname_code_scanning_capc %} は `run` オブジェクトを使用して、ツールで結果をフィルタし、結果のソースに関する情報を提供します。 `run` オブジェクトには、結果を生成したツールに関する情報を含む `tool.driver` ツールコンポーネントオブジェクトが含まれます。 `run` ごとに、1 つの分析ツールの結果のみを取得できます。

| 名前                            | 説明                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tool.driver.name`            | **必須。**分析ツールの名前。 {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom %} に名前を表示して、ツールで結果をフィルタできるようにします。                                                                                                                                                                                                                                         |
| `tool.driver.version`         | **任意。**分析ツールのバージョン。 {% data variables.product.prodname_code_scanning_capc %} は、バージョン番号を使用して、分析されているコードでの変更ではなく、ツールのバージョン変更により結果が変更された可能性がある場合に追跡します。 SARIF ファイルに `semanticVersion` フィールドが含まれている場合、`version` は {% data variables.product.prodname_code_scanning %} で使用されません。                                                                                                                     |
| `tool.driver.semanticVersion` | **任意。**セマンティックバージョニング 2.0 形式で指定された分析ツールのバージョン。 {% data variables.product.prodname_code_scanning_capc %} は、バージョン番号を使用して、分析されているコードでの変更ではなく、ツールのバージョン変更により結果が変更された可能性がある場合に追跡します。 SARIF ファイルに `semanticVersion` フィールドが含まれている場合、`version` は {% data variables.product.prodname_code_scanning %} で使用されません。 詳しい情報については、セマンティックバージョニングのドキュメントの「[セマンティックバージョニング 2.0.0](https://semver.org/)」を参照してください。 |
| `tool.driver.rules[]`         | **必須。**ルールを表す `reportingDescriptor` オブジェクトの配列。 分析ツールはルールを使用して、分析対象のコードの問題を見つけます。 詳しい情報については、「[`reportingDescriptor` オブジェクト](#reportingdescriptor-object)」を参照してください。                                                                                                                                                                                                                                 |
| `results[]`                   | **必須。**分析ツールの結果。 {% data variables.product.prodname_code_scanning_capc %} は {% data variables.product.prodname_dotcom %} に結果を表示します。 詳しい情報については、「[`result` オブジェクト](#result-object)」を参照してください。                                                                                                                                                                                                    |

### `reportingDescriptor` オブジェクト

| 名前                                             | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                           | **必須。**ルールの一意の識別子。 `id` は SARIF ファイルの他の部分から参照され、{% data variables.product.prodname_code_scanning %} が {% data variables.product.prodname_dotcom %} に URL を表示するために使用できます。                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `name`                                         | **任意。**ルールの名前。 {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom %} のルールで結果をフィルタできるように名前を表示します。                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `shortDescription.text`                        | **必須。**ルールの簡単な説明。 {% data variables.product.prodname_code_scanning_capc %} は、関連する結果の横にある {% data variables.product.prodname_dotcom %} の簡単な説明を表示します。                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `fullDescription.text`                         | **必須。**ルールの説明。 {% data variables.product.prodname_code_scanning_capc %} は、関連する結果の横にある {% data variables.product.prodname_dotcom %} の説明全体を表示します。 文字数は最大 1000 文字に制限されています。                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `defaultConfiguration.level`                   | **任意。**ルールのデフォルトの重要度レベル。 {% data variables.product.prodname_code_scanning_capc %} は、特定のルールの結果がどの程度重要であるかを理解するために、重要度レベルを使用します。 この値は、`result` オブジェクトの `level` 属性でオーバーライドできます。 詳しい情報については、「[`result` オブジェクト](#result-object)」を参照してください。 デフォルト: `Warning`                                                                                                                                                                                                                                                                                                                                                           |
| `help.text`                                    | **必須。**テキスト形式を使用したルールのドキュメント。 {% data variables.product.prodname_code_scanning_capc %} は、関連する結果の横にこのヘルプドキュメントを表示します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `help.markdown`                                | **推奨。**Markdown 形式を使用したルールのドキュメント。 {% data variables.product.prodname_code_scanning_capc %} は、関連する結果の横にこのヘルプドキュメントを表示します。 `help.markdown` が利用可能な場合は、 `help.text` の代わりに表示されます。                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `properties.tags[]`                            | **任意。**文字列の配列。 {% data variables.product.prodname_code_scanning_capc %} は、`tags` を使用して、{% data variables.product.prodname_dotcom %} の結果をフィルタできます。 たとえば、`security` タグを含むすべての結果をフィルタすることができます。                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.precision`                         | **推奨。**このルールで示される結果が true である頻度を示す文字列。 たとえば、ルールに既知の高誤検知率がある場合、精度は `low` である必要があります。 {% data variables.product.prodname_code_scanning_capc %} は、{% data variables.product.prodname_dotcom %} の精度で結果を並べ替えるため、最高 `level` の精度と最高 `precision` の結果が最初に表示されます。 `very-high`、`high`、`medium`、`low` のいずれかになります。                                                                                                                                                                                                                                                                                                          |{% ifversion fpt or ghes > 3.1 or ghae-next %}
| `properties.problem.severity`                  | **Recommended.** A string that indicates the level of severity of any alerts generated by a non-security query. This, with the `properties.precision` property, determines whether the results are displayed by default on {% data variables.product.prodname_dotcom %} so that the results with the highest `problem.severity`, and highest `precision` are shown first. Can be one of: `error`, `warning`, or `recommendation`.                                                                                                                                                                                  |
| `properties.security-severity`                 | **Recommended.** A score that indicates the level of severity, between 0.0 and 10.0, for security queries (`@tags` includes `security`). This, with the `properties.precision` property, determines whether the results are displayed by default on {% data variables.product.prodname_dotcom %} so that the results with the highest `security-severity`, and highest `precision` are shown first. {% data variables.product.prodname_code_scanning_capc %} translates numerical scores as follows: over 9.0 is `critical`, 7.0 to 8.9  is `high`, 4.0 to 6.9 is `medium` and 3.9 or less is `low`. {% endif %}

### `result` オブジェクト

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| 名前                                      | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ruleId`                                | **任意。**ルールの一意の識別子（`reportingDescriptor.id`）。 詳しい情報については、「[`reportingDescriptor` オブジェクト](#reportingdescriptor-object)」を参照してください。 {% data variables.product.prodname_code_scanning_capc %} は、ルール識別子を使用して、{% data variables.product.prodname_dotcom %} のルールで結果をフィルタします。                                                                                                                                                                                                                                                                                                                           |
| `ruleIndex`                             | **任意。**ツールコンポーネントの `rules` 配列内の関連するルール（`reportingDescriptor` オブジェクト）のインデックス。 詳しい情報については、「[`run` オブジェクト](#run-object)」を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `rule`                                  | **任意。**この結果のルール（レポート記述子）を見つけるために使用される参照。 詳しい情報については、「[`reportingDescriptor` オブジェクト](#reportingdescriptor-object)」を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `level`                                 | **任意。**結果の重要度。 このレベルは、ルールで定義されているデフォルトの重要度をオーバーライドします。 {% data variables.product.prodname_code_scanning_capc %} は、レベルを使用して、{% data variables.product.prodname_dotcom %} の重要度で結果をフィルタします。                                                                                                                                                                                                                                                                                                                                                                                                       |
| `message.text`                          | **必須。**結果を説明するメッセージ。 {% data variables.product.prodname_code_scanning_capc %} は、結果のタイトルとしてメッセージテキストを表示します。 表示スペースが限られている場合、メッセージの最初の文のみが表示されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `locations[]`                           | **必須。**結果が検出された場所。最大値は 10 です。 指定された場所ごとに変更を加えることでのみ問題を修正できる場合を除き、1 つの場所のみを含める必要があります。 **注釈:** {% data variables.product.prodname_code_scanning %} が結果を表示するには、少なくとも 1 つの場所が必要です。 {% data variables.product.prodname_code_scanning_capc %} は、このプロパティを使用して、結果を注釈するファイルを決定します。 この配列の最初の値のみが使用されます。 他のすべての値は無視されます。                                                                                                                                                                                                                                                                                 |
| `partialFingerprints`                   | **必須。**結果の一意の ID を追跡するために使用される文字列。 {% data variables.product.prodname_code_scanning_capc %} は、`partialFingerprints` を使用して、コミットとブランチで同じ結果であるものを正確に識別します。 {% data variables.product.prodname_code_scanning_capc %} は、`partialFingerprints` がある場合、それを使用しようとします。 `upload-action` を使用してサードパーティの SARIF ファイルをアップロードする場合、SARIF ファイルに含まれていないときに、アクションによって `partialFingerprints` が作成されます。 詳しい情報については、「[フィンガープリントを使用してアラートの重複を防止する](#preventing-duplicate-alerts-using-fingerprints)」を参照してください。  **注釈:** {% data variables.product.prodname_code_scanning_capc %} は、`primaryLocationLineHash` のみを使用します。 |
| `codeFlows[].threadFlows[].locations[]` | **任意。**`threadFlow` オブジェクトに対する `location` オブジェクトの配列。実行スレッドを通してプログラムの進行状況を記述します。 `codeFlow` オブジェクトは、結果の検出に使用されるコード実行パターンを記述します。 コードフローが入力されている場合、{% data variables.product.prodname_code_scanning %} は、関連する結果の {% data variables.product.prodname_dotcom %} のコードフローを拡張します。 詳しい情報については、「[`location` オブジェクト](#location-object)」を参照してください。                                                                                                                                                                                                                                                           |
| `relatedLocations[]`                    | この結果に関連する場所。 結果メッセージに埋め込まれている場合、{% data variables.product.prodname_code_scanning_capc %} は、関連する場所にリンクします。 詳しい情報については、「[`location` オブジェクト](#location-object)」を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                           |

### `location` オブジェクト

プログラミングアーティファクト内の場所（リポジトリ内のファイルやビルド中に生成されたファイルなど）。

| 名前                          | 説明                                                                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| `location.id`               | **任意。**この場所を単一の結果オブジェクト内の他のすべての場所と区別する一意の識別子。                                                      |
| `location.physicalLocation` | **必須。**アーティファクトとリージョンを識別します。 詳しい情報については、「[`physicalLocation`](#physicallocation-object)」を参照してください。 |
| `location.message.text`     | **任意。**場所に関連するメッセージ。                                                                               |

### `physicalLocation` オブジェクト

| 名前                     | 説明                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `artifactLocation.uri` | **必須。**アーティファクトの場所を示す URI（通常はリポジトリ内のファイル、またはビルド中に生成されたファイル）。 URI が相対の場合、分析されている {% data variables.product.prodname_dotcom %} リポジトリのルートに相対である必要があります。 たとえば、main.js または src/script.js は、リポジトリのルートを基準にしています。 URI が絶対の場合、{% data variables.product.prodname_code_scanning %} は URI を使用してアーティファクトをチェックアウトし、リポジトリ内のファイルを照合できます。 例: `https://github.com/ghost/example/blob/00/src/promiseUtils.js` |
| `region.startLine`     | **必須。**リージョンの最初の文字の行番号。                                                                                                                                                                                                                                                                                                                                                                       |
| `region.startColumn`   | **必須。**リージョンの最初の文字の列番号。                                                                                                                                                                                                                                                                                                                                                                       |
| `region.endLine`       | **必須。**リージョンの最後の文字の行番号。                                                                                                                                                                                                                                                                                                                                                                       |
| `region.endColumn`     | **必須。**リージョンの末尾に続く文字の列番号。                                                                                                                                                                                                                                                                                                                                                                     |

{% ifversion fpt or ghes > 3.1 or ghae-next %}
### `runAutomationDetails`オブジェクト

`runAutomationDetails`オブジェクトには、実行のアイデンティティを指定する情報が含まれています。

{% note %}

**ノート:** `runAutomationDetails`はSARIF v2.1.0のオブジェクトです。 {% data variables.product.prodname_codeql_cli %}を使っているなら、使用するSARIFのバージョンを指定できます。 `runAutomationDetails`と等価なオブジェクトは、SARIF v1なら`<run>.automationId`で、SARIF v2なら`<run>.automationLogicalId`です。

{% endnote %}

| 名前   | 説明                                                                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------ |
| `id` | **オプション。** 分析のカテゴリと実行のIDを識別する文字列。 同じツールとコミットに対して、ただし様々な言語やコードの様々な部分にを処理した場合に、複数のSARIFファイルをアップロードする際に使ってください。 |

`runAutomationDetails`オブジェクトの利用はオプションです。

`id`フィールドには、分析のカテゴリと実行IDを含めることができます。 `id`の実行IDの部分は使われませんが、保存はされます。

カテゴリを使って、同じツールあるいはコミットに対して行われる、ただし様々な言語やコードの様々な部分に対して行われる複数の分析を区別してください。 実行IDを使って、分析が実行された日付など、特定の分析の実行を識別してください。

`id`は`category/run-id`として解釈されます。 `id`にスラッシュ(`/`)が含まれない場合、文字列全体が`run_id`となり、`category`は空になります。 そうでなければ、`category`は最後のスラッシュまでのすべての文字列になり、`run_id`はその後のすべての文字列になります。

| `id`                         | カテゴリ              | `run_id`              |
| ---------------------------- | ----------------- | --------------------- |
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 2021-02-01            |
| my-analysis/tool1/           | my-analysis/tool1 | _`run-id`なし_          |
| my-analysis for tool1        | _カテゴリなし_          | my-analysis for tool1 |

- "my-analysis/tool1/2021-02-01"という`id`の実行は、"my-analysis/tool1"というカテゴリに属します。 おそらく、これは2021 年2月2日からの実行です。
- "my-analysis/tool1/"という`id`の実行は"my-analysis/tool1"というカテゴリに属しますが、そのカテゴリの他の実行とは区別されません。
- "my-analysis for tool1 "が`id`の実行は、一意の識別子を持ちますが、どのカテゴリにも属していると推定できません。

`runAutomationDetails`オブジェクトと`id`フィールドに関する詳しい情報については、OASISドキュメンテーションの[runAutomationDetails object](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479)を参照してください。

サポートされている残りのフィールドは無視されることに注意してください。

{% endif %}

## SARIF 出力ファイルの例

次の例の SARIF 出力ファイルは、サポートされているプロパティと値の例を示しています。

### 最低限必要なプロパティの例

次の SARIF 出力ファイルには、{% data variables.product.prodname_code_scanning %} の結果が期待どおりに機能するために最低限必要なプロパティを示す値の例が示されています。 プロパティを削除したり、値を含めていない場合、このデータは正しく表示されないか、{% data variables.product.prodname_dotcom %} で同期されません。

```json
{
  "$schema": "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
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

{% ifversion fpt or ghes > 3.1 or ghae-next %}
```json
{
  "$schema": "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
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
{% else %}
```json
{
  "$schema": "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
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
{% endif %}
