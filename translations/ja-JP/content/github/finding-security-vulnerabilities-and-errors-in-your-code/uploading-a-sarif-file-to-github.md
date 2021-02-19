---
title: SARIF ファイルを GitHub にアップロードする
shortTitle: SARIF ファイルをアップロードする
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'リポジトリへの書き込み権限を持つユーザは、サードパーティツールから {% data variables.product.prodname_code_scanning %} データをアップロードできます。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### {% data variables.product.prodname_code_scanning %} に対する SARIF ファイルのアップロードについて

SARIF ファイルに `partialFingerprints` が含まれていない場合、`upload-sarif` アクションは、`partialFingerprints` フィールドを計算し、アラートの重複を防止しようと試みます。 {% data variables.product.prodname_dotcom %} は、リポジトリに SARIF ファイルと静的分析で使用されるソースコードの両方が含まれている場合にのみ、`partialFingerprints` を作成できます。 For more information, see "[Managing {% data variables.product.prodname_code_scanning %} alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)."

You can generate SARIF files using many static analysis security testing tools, including {% data variables.product.prodname_codeql %}. The results must use SARIF version 2.1.0. 詳しい情報については、「[コードスキャンに対する SARIF サポートについて](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning)」を参照してください。

You can upload the results using {% data variables.product.prodname_actions %}{% if currentVersion == "enterprise-server@2.22" %} (available if your organization is taking part in the beta program){% endif %}, the {% data variables.product.prodname_code_scanning %} API, or the {% data variables.product.prodname_codeql_runner %}. The best upload method will depend on how you generate the SARIF file, for example, if you use:

- {% data variables.product.prodname_actions %} to run the {% data variables.product.prodname_codeql %} action, there is no further action required. SARIF ファイルは、ファイルのアップロードに使用したものと同じ {% data variables.product.prodname_actions %} ワークフローで実行する SARIF 互換の分析ツールから生成できます。
- "[ワークフロー実行の管理](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)"
- {% data variables.product.prodname_dotcom %} は、リポジトリにアップロードされた SARIF ファイルからの {% data variables.product.prodname_code_scanning %} アラートを表示します。 If you block the automatic upload, when you are ready to upload results you can use the `upload` command (for more information, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)").
- A tool that generates results as an artifact outside of your repository, you can use the {% data variables.product.prodname_code_scanning %} API to upload the file (for more information, see "[Upload a SARIF file](/rest/reference/code-scanning#upload-a-sarif-file)").

{% data reusables.code-scanning.not-available %}

### {% data variables.product.prodname_actions %} での {% data variables.product.prodname_code_scanning %} 分析をアップロードする

サードパーティの SARIF ファイルを {% data variables.product.prodname_dotcom %} にアップロードするには、{% data variables.product.prodname_actions %} ワークフローが必要です。 For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)" and "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

ワークフローは、`upload-sarif` アクションを使用する必要があります。 これには、アップロードの設定に使用できる入力パラメータがあります。 使用する主な入力パラメータは、アップロードする SARIF ファイルのファイルまたはディレクトリを設定する `sarif-file` です。 ディレクトリまたはファイルのパスは、リポジトリのルートからの相対パスです。 For more information see the [`upload-sarif` action](https://github.com/github/codeql-action/tree/HEAD/upload-sarif).

`upload-sarif` アクションは、`push` および `scheduled` イベントが発生したときに実行するように設定できます。 {% data variables.product.prodname_actions %} イベントについて詳しい情報は、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

SARIF ファイルに `partialFingerprints` が含まれていない場合、`upload-sarif` アクションは、`partialFingerprints` フィールドを計算し、アラートの重複を防止しようと試みます。 {% data variables.product.prodname_dotcom %} は、リポジトリに SARIF ファイルと静的分析で使用されるソースコードの両方が含まれている場合にのみ、`partialFingerprints` を作成できます。 重複アラートの防止に関する詳しい情報については、「[コードスキャンに対する SARIF サポートについて](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning#preventing-duplicate-alerts-using-fingerprints)」を参照してください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

#### リポジトリ外で生成された SARIF ファイルのワークフロー例

SARIF ファイルをリポジトリにコミットした後でアップロードする新しいワークフローを作成できます。 これは、SARIF ファイルがリポジトリ外のアーティファクトとして生成される場合に役立ちます。

この例のワークフローは、コミットがリポジトリにプッシュされるたびに実行されます。 アクションは `partialFingerprints` プロパティを使用して、変更が発生したかどうかを判断します。 コミットがプッシュされたときに実行されるだけでなく、ワークフローは週に 1 回実行されるようにスケジュールされます。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

このワークフローは、リポジトリのルートにある `results.sarif` ファイルをアップロードします。 For more information about creating a workflow file, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

または、このワークフローを変更して、SARIF ファイルのディレクトリをアップロードすることもできます。 たとえば、すべての SARIF ファイルをリポジトリのルートにある `sarif-output` というディレクトリに配置し、アクションの入力パラメータ `sarif_file` を `sarif-output` に設定できます。

```yaml
name: "Upload SARIF"

# コードがリポジトリにプッシュされるたびに、スケジュールに従ってワークフローを実行します。
# スケジュールされたワークフローは、毎週日曜日の 00:00（UTC）に実行されます。
on:
  push:
  schedule:
  - cron: '0 0 * * 0'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    # このステップでは、リポジトリのコピーをチェックアウトします。
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Upload SARIF file
      uses: github/codeql-action/upload-sarif@v1
      with:
        # リポジトリのルートに対する SARIF ファイルへの相対パス
        sarif_file: results.sarif
```

#### ESLint 分析ツールを実行するワークフローの例

継続的インテグレーション（CI）ワークフローの一部としてサードパーティの SARIF ファイルを生成する場合は、CI テストの実行後のステップとして、`upload-sarif` アクションを追加できます。 CI ワークフローがない場合は、{% data variables.product.prodname_actions %} テンプレートを使用して作成できます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のクイックスタート](/actions/quickstart)」を参照してください。

この例のワークフローは、コミットがリポジトリにプッシュされるたびに実行されます。 アクションは `partialFingerprints` プロパティを使用して、変更が発生したかどうかを判断します。 コミットがプッシュされたときに実行されるだけでなく、ワークフローは週に 1 回実行されるようにスケジュールされます。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

ワークフローでは、ESLint 静的分析ツールをワークフローのステップとして実行する例を示しています。 `Run ESLint` ステップは ESLint ツールを実行して、`results.sarif` ファイルを出力します。 次に、ワークフローは `upload-sarif` アクションを使用して、`results.sarif` ファイルを {% data variables.product.prodname_dotcom %} にアップロードします。 For more information about creating a workflow file, see "[Introduction to GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions)."

```yml
name: "ESLint analysis"

# コードがリポジトリにプッシュされるたびに、スケジュールに従ってワークフローを実行します。
# スケジュールされたワークフローは、毎週日曜日の 00:00（UTC）に実行されます。
on:
  push:
  schedule:
  - cron: '0 0 * * 0'

jobs:
  build:
    steps:
    - uses: actions/checkout@v2
    - name: Run npm install
      run: npm install
    # ESlint コード分析を実行する
    - name: Run ESLint
      # eslint は報告するものを見つけると 1 を終了する
      run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
    # upload-sarif アクションを使用して、results.sarif を GitHub リポジトリにアップロードする
    - uses: github/codeql-action/upload-sarif@v1
      with:
        # リポジトリのルートに対する SARIF ファイルへの相対パス
        sarif_file: results.sarif
```

### 参考リンク

- "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)"
- "[Viewing your workflow history](/actions/managing-workflow-runs/viewing-workflow-run-history)"
- "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)"
- "[Upload a SARIF file](/rest/reference/code-scanning#upload-a-sarif-file)"
