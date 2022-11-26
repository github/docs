---
title: SARIF ファイルを GitHub にアップロードする
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
ms.openlocfilehash: 3def104e487f54e2c48d462d1dcfe8bab63c6fa3
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161162'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %} に対する SARIF ファイルのアップロードについて

{% data variables.product.prodname_dotcom %} は、静的分析結果交換形式 (SARIF) ファイルの情報を使用して、リポジトリに {% data variables.product.prodname_code_scanning %} アラートを作成します。 SARIF ファイルは、API または {% data variables.product.prodname_actions %} を使用してリポジトリにアップロードできます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

SARIF ファイルは、{% data variables.product.prodname_codeql %} を含む多くの静的解析セキュリティテストツールを使用して生成できます。 結果は SARIF バージョン 2.1.0 を使用する必要があります。 詳細については、「[{% data variables.product.prodname_code_scanning %} の SARIF サポート](/code-security/secure-coding/sarif-support-for-code-scanning)」を参照してください。

結果は、{% data variables.product.prodname_actions %}、{% data variables.product.prodname_code_scanning %} API、{% ifversion codeql-runner-supported %} {% data variables.code-scanning.codeql_runner %}、{% endif %}または {% data variables.product.prodname_codeql_cli %} を使ってアップロードできます。 最適なアップロード方法は、SARIF ファイルの生成方法によって異なります。以下、例を示します。

- {% data variables.product.prodname_actions %} を使用して {% data variables.product.prodname_codeql %} アクションを実行している場合、追加のアクションは不要です。 {% data variables.product.prodname_codeql %} アクションは、分析の完了時に SARIF ファイルを自動的にアップロードします。
- {% data variables.product.prodname_actions %} を使用して SARIF 互換の分析ツールを実行します。ワークフローを更新して、結果をアップロードする最後の手順を含めることができます (下記を参照)。
 - {% data variables.product.prodname_codeql_cli %} は、CI システムで {% data variables.product.prodname_code_scanning %} を実行するために、CLI を使用して結果を {% data variables.product.prodname_dotcom %} にアップロードできます (詳細については、「[CI システムでの {% data variables.product.prodname_codeql_cli %} のインストール](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」を参照してください)。{% ifversion codeql-runner-supported %}
- {% data variables.code-scanning.codeql_runner %}は、CI システムで {% data variables.product.prodname_code_scanning %} を実行するためのものであり、既定では、完了時に、このランナーによって結果が {% data variables.product.prodname_dotcom %} に自動的にアップロードされます。 自動アップロードをブロックする場合、結果をアップロードする準備ができたら、`upload` コマンドを使うことができます (詳しくは、「[CI システムでの {% data variables.code-scanning.codeql_runner %}の実行](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)」を参照してください)。{% endif %}
- リポジトリの外部で成果物として結果を生成するツールでは、{% data variables.product.prodname_code_scanning %} API を使用してファイルをアップロードできます (詳細については、「[SARIF データとして分析をアップロードする](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)」を参照してください)。

{% data reusables.code-scanning.not-available %}

## {% data variables.product.prodname_actions %} での {% data variables.product.prodname_code_scanning %} 分析をアップロードする

{% data variables.product.prodname_actions %} を使用してサードパーティの SARIF ファイルをリポジトリにアップロードするには、ワークフローが必要です。 詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

ワークフローでは、`github/codeql-action` リポジトリの一部である `upload-sarif` アクションを使用する必要があります。 これには、アップロードの設定に使用できる入力パラメータがあります。 使用する主な入力パラメーターは次のとおりです。

- `sarif-file` は、アップロードする SARIF ファイルのファイルまたはディレクトリを構成します。 ディレクトリまたはファイルのパスは、リポジトリのルートからの相対パスです。
- `category` (省略可能) は、SARIF ファイルで結果のカテゴリを割り当てます。 これにより、複数の方法で同じコミットを分析し、{% data variables.product.prodname_dotcom %} の {% data variables.product.prodname_code_scanning %} ビューを使用して結果を確認できます。 たとえば、複数のツールを使用して分析できます。mono リポジトリでは、変更されたファイルのサブセットに基づいてリポジトリのさまざまなスライスを分析できます。

詳細については、「[`upload-sarif` アクション](https://github.com/github/codeql-action/tree/{% ifversion actions-node16-action %}v2{% else %}v1{% endif %}/upload-sarif)」を参照してください。

`upload-sarif` アクションは、`push` および `scheduled` イベントが発生したときに実行されるように構成できます。 {% data variables.product.prodname_actions %} イベントの詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

SARIFファイルに `partialFingerprints` が含まれていない場合、`upload-sarif` アクションは `partialFingerprints` フィールドを自動的に計算して、重複するアラートが発生しないようにします。 {% data variables.product.prodname_dotcom %} では、リポジトリに SARIF ファイルと、スタティック分析で使用されるソース コードの両方が含まれている場合にのみ、`partialFingerprints` を作成できます。 重複するアラートの防止方法の詳細については、[コード スキャンの SARIF サポート](/code-security/secure-coding/sarif-support-for-code-scanning#providing-data-to-track-code-scanning-alerts-across-runs)に関するセクションを参照してください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### リポジトリ外で生成された SARIF ファイルのワークフロー例

SARIF ファイルをリポジトリにコミットした後でアップロードする新しいワークフローを作成できます。 これは、SARIF ファイルがご自分のリポジトリの外部の成果物として生成される場合に便利です。

この例のワークフローは、コミットがリポジトリにプッシュされるたびに実行されます。 このアクションでは、`partialFingerprints` プロパティを使用して、変更が発生したかどうかを確認します。 コミットがプッシュされたときの実行に加えて、ワークフローは週に 1 回実行されるようにスケジュールされています。 詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

このワークフローは、リポジトリのルートにある `results.sarif` ファイルをアップロードします。 ワークフロー ファイルの作成の詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

または、このワークフローを変更して、SARIF ファイルのディレクトリをアップロードすることもできます。 たとえば、すべての SARIF ファイルをリポジトリのルートにある `sarif-output` というディレクトリに配置し、アクションの入力パラメーター `sarif_file` を `sarif-output` に設定できます。 ディレクトリをアップロードする場合、各 SARIF ファイルには、結果のカテゴリを定義するための一意の `runAutomationDetails.id` が含まれている必要があることにご注意ください。 詳細については、「[`runAutomationDetails` オブジェクト](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object)」を参照してください。

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Upload SARIF file
        uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### ESLint 分析ツールを実行するワークフローの例

継続的インテグレーション (CI) ワークフローの一部としてサードパーティの SARIF ファイルを生成する場合は、CI テストを実行した後に `upload-sarif` アクションをステップとして追加できます。 CI ワークフローがない場合は、{% data variables.product.prodname_actions %} テンプレートを使用して作成できます。 詳細については、[{% data variables.product.prodname_actions %} クイックスタート](/actions/quickstart)に関するページを参照してください。

この例のワークフローは、コミットがリポジトリにプッシュされるたびに実行されます。 このアクションでは、`partialFingerprints` プロパティを使用して、変更が発生したかどうかを確認します。 コミットがプッシュされたときの実行に加えて、ワークフローは週に 1 回実行されるようにスケジュールされています。 詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

ワークフローでは、ESLint 静的分析ツールをワークフローのステップとして実行する例を示しています。 `Run ESLint` ステップは、ESLint ツールを実行し、`results.sarif` ファイルを出力します。 その後、ワークフローにより、`upload-sarif` アクションが使用され `results.sarif` ファイルが {% data variables.product.prodname_dotcom %} にアップロードされます。 ワークフロー ファイルの作成の詳細については、「[GitHub Actions の概要](/actions/learn-github-actions/introduction-to-github-actions)」を参照してください。

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## 参考資料

- [{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions)
- "[ワークフローの履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)"
- "[CI システムでの {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} について](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)"
- "[分析を SARIF データとしてアップロードする](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)"
