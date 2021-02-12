---
title: ワークフロー データをアーティファクトとして保存する
shortTitle: ワークフロー アーティファクトを保存する
intro: 成果物を使うと、ワークフロー内のジョブ間でデータを共有し、ワークフローが完了したときに、そのワークフローのデータを保存できます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### ワークフローの成果物について

成果物を使えば、ジョブの完了後にデータを永続化でき、そのデータを同じワークフロー中の他のジョブと共有できます。 成果物とは、ワークフロー実行中に生成されるファイル、またはファイルのコレクションです。 たとえば、ワークフローの実行が終了した後、成果物を使ってビルドとテストの出力を保存しておけます。

{% data reusables.github-actions.artifact-log-retention-statement %} プルリクエストの保持期間は、ユーザが新しいコミットをプルリクエストにプッシュするたびに再開されます。

以下は、アップロードできる一般的な成果物の一部です。

- ログファイルとコアダンプ
- テスト結果、エラー、スクリーンショット
- バイナリあるいは圧縮されたファイル
- ストレステストのパフォーマンス出力およびコードカバレッジの結果

{% if currentVersion == "free-pro-team@latest" %}

成果物の保存には、{% data variables.product.product_name %}上のストレージ領域が使われます。 {% data reusables.github-actions.actions-billing %} 詳細は「[{% data variables.product.prodname_actions %} の支払いの管理](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)」を参照してください。

{% else %}

アーティファクトは、{% data variables.product.product_location %} 上の {% data variables.product.prodname_actions %} 向けに設定された外部 blob ストレージ上のストレージスペースを消費します。

{% endif %}

成果物はワークフローの実行中にアップロードされ、成果物の名前とサイズはUIで見ることができます。 {% data variables.product.product_name %}のUIを使って成果物がダウンロードされる場合、成果物の一部として個別にアップロードされたすべてのファイルはzipして1つのファイルにまとめられます。 これはすなわち、支払いはこのzipファイルのサイズではなく、アップロードされた成果物のサイズを元に計算されるということです。

{% data variables.product.product_name %}には、ビルドの成果物のアップロードとダウンロードに使用できるアクションが2つあります。 詳しい情報については、 {% data variables.product.product_location %} 上の {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) および [download-artifact](https://github.com/actions/download-artifact) アクション{% else %} `actions/upload-artifact` および `download-artifact` アクション{% endif %}を参照してください。

ジョブ間でデータを共有するには:

* **ファイルをアップロード**: アップロードされたファイルに名前を付けて、ジョブが終了する前にデータをアップロードしてください。
* **ファイルをダウンロード**: 成果物は、同じワークフローの実行中にアップロードされたものだけがダウンロードできます。 ファイルをダウンロードする際には、名前で参照できます。

ジョブのステップは、ランナーマシン上で同じ環境を共有しますが、それぞれが個別のプロセス内で実行されます。 ジョブのステップ間のデータを受け渡すには、入力と出力を使用できます。 入力と出力の詳細については、「[{% data variables.product.prodname_actions %}構文のメタデータ](/articles/metadata-syntax-for-github-actions)」を参照してください。

### ビルドおよびテストの成果物をアップロードする

継続的インテグレーション（CI）ワークフローを作成して、コードのビルドやテストを行えます。 {% data variables.product.prodname_actions %} を使用して CI を実行する方法の詳細については、「[継続的インテグレーションについて](/articles/about-continuous-integration)」を参照してください。

コードのビルドおよびテストからの出力によって、多くの場合、エラーのデバッグに使用できるファイルと、デプロイできる本番コードが生成されます。 リポジトリにプッシュされるコードをビルドしてテストし、成功または失敗のステータスをレポートするワークフローを構成することができます。 デプロイメントに使用するビルドおよびテスト出力をアップロードし、失敗したテストまたはクラッシュをデバッグしてテストスイートのカバレッジを確認できます。

成果物をアップロードするには、`upload-artifact`アクションが使用できます。 成果物をアップロードする場合は、単一のファイルまたはディレクトリ、あるいは複数のファイルまたはディレクトリを指定できます。 また、特定のファイルやディレクトリを除外したり、ワイルドカードパターンを使用したりすることもできます。 成果物の名前を指定することをおすすめしますが、名前を指定しない場合は、 `artifact` がデフォルトの名前として使用されます。 構文の詳細については、 {% data variables.product.product_location %} 上の {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) アクション{% else %} `actions/upload-artifact` アクション{% endif %}を参照してください。

#### サンプル

たとえば、リポジトリあるいはWebアプリケーションにはCSSやJavaScriptに変換しなければならないSASSやTypeScriptが含まれているかもしれません。 ビルド構成が`dist`ディレクトリにコンパイル後のファイルを出力すると仮定すると、テストがすべて正常に完了した場合、`dist`ディレクトリにあるファイルがWebアプリケーションサーバーにデプロイされます。

```
|-- hello-world (repository)
|   └── dist
|   └── tests
|   └── src
|       └── sass/app.scss
|       └── app.ts
|   └── output
|       └── test
|   
```

この例では、srcディレクトリにコードを`builds`して、`tests`ディレクトリでテストを実行するNode.jsプロジェクトのワークフローを作成しています。 実行中の`npm test`が、`code-coverage.html`という名前で、`output/test/`ディレクトリに保存されるコードカバレッジレポートを生成すると想定できます。

このワークフローは `dist` ディレクトリにプロダクションの成果物をアップロードしますが、Markdownファイルはその対象外です。 また、 `code-coverage.html`レポートは別の成果物としてアップロードされます。

```yaml
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: actions/upload-artifact@v2
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: actions/upload-artifact@v2
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### カスタムアーティファクトの保持期間を設定する

ワークフローによって作成された個々のアーティファクトのカスタム保存期間を定義できます。 ワークフローを使用して新しいアーティファクトを作成する場合、`upload-artifact` アクションで `retention-days` を使用できます。 この例は、`my-artifact` という名前のアーティファクトに 5 日間のカスタム保存期間を設定する方法を示しています。

```
  - name: 'Upload Artifact'
    uses: actions/upload-artifact@v2
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```

`retention-days` の値は、リポジトリ、Organization、または Enterprise によって設定された保持制限を超えることはできません。
{% endif %}

### 成果物のダウンロードあるいは削除

ワークフローの実行中に、[`download-artifactaction`](https://github.com/actions/download-artifact) を使用して、同じワークフローの実行で以前にアップロードされたアーティファクトをダウンロードできます。

ワークフローの実行が完了したら、{% data variables.product.prodname_dotcom %} または REST API を使用してアーティファクトをダウンロードまたは削除できます。 詳しい情報については、「[ワークフローアーティファクトをダウンロードする](/actions/managing-workflow-runs/downloading-workflow-artifacts)」、「[ワークフローアーティファクトを削除する](/actions/managing-workflow-runs/removing-workflow-artifacts)」、および「[アーティファクト REST API](/rest/reference/actions#artifacts)」を参照してください。

#### ワークフロー実行中の成果物のダウンロード

[`actions/download-artifact`](https://github.com/actions/download-artifact) のダウンロードアクションを使用して、ワークフローの実行中に以前にアップロードされたアーティファクトをダウンロードできます。

{% note %}

**ノート:** ダウンロードできるのは、同じワークフロー実行中にアップロードされたワークフロー内の成果物のみです。

{% endnote %}

個々の成果物をダウンロードするには、成果物の名前を指定します。 名前を指定せずに成果物をアップロードした場合、デフォルトで名前は`artifact`になります。

```yaml
- name: Download a single artifact
  uses: actions/download-artifact@v2
  with:
    name: my-artifact
```

また、名前を指定しないことで、ワークフロー実行のすべての成果物をダウンロードすることもできます。 これは、多数の成果物を扱っている場合に便利です。

```yaml
- name: Download all workflow run artifacts
  uses: actions/download-artifact@v2
```

ワークフロー実行のすべての成果物をダウンロードすると、各成果物のディレクトリーがその名前を使用して作成されます。

構文の詳細については、{% data variables.product.product_location %} 上の {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/download-artifact) アクション{% else %} `actions/upload-artifact` アクション{% endif %}を参照してください。

### ワークフローのジョブ間でデータを受け渡す

`upload-artifact`アクションと`download-artifact`アクションを使うと、ワークフローのジョブ間でデータを共有できます。 以下のワークフローの例では、同じワークフローのジョブ間でデータを受け渡す方法を説明しています。 詳しい情報については、 {% data variables.product.product_location %} 上の {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) および [download-artifact](https://github.com/actions/download-artifact) アクション{% else %} `actions/upload-artifact` および `download-artifact` アクション{% endif %}を参照してください。

前のジョブの成果物に依存するジョブは、前のジョブが正常に完了するまで待つ必要があります。 このワークフローは、`needs`キーワードを使用して`job_1`、`job_2`、`job_3`を順次実行することができます。 たとえば、`job_2`は`needs: job_1`構文を使って`job_1`を必要とすることができます。

ジョブ1は、以下のステップを実行します。
- 数式の計算を実行し、その結果を`math-homework.txt`というテキストファイルに保存します。
- Uses the `upload-artifact` action to upload the `math-homework.txt` file with the artifact name `homework`.

ジョブ2は、前のジョブの結果を利用して、次の処理を実行します。
- 前のジョブでアップロードされた`homework`成果物をダウンロードします。 デフォルトでは、`download-artifact`アクションは、ステップが実行されているワークスペースディレクトリに成果物をダウンロードします。 入力パラメータの`path`を使って、別のダウンロードディレクトリを指定することもできます。
- Reads the value in the `math-homework.txt` file, performs a math calculation, and saves the result to `math-homework.txt` again, overwriting its contents.
- `math-homework.txt`ファイルをアップロードします。 This upload overwrites the previously uploaded artifact because they share the same name.

ジョブ3は、前のジョブでアップロードされた結果を表示して、次の処理を実行します。
- `homework`成果物をダウンロードします。
- 数式の結果をログに出力します。

このワークフロー例で実行される完全な数式は、`(3 + 7) x 9 = 90`です。

```yaml
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: actions/upload-artifact@v2
        with:
          name: homework
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: actions/download-artifact@v2
        with:
          name: homework
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: actions/upload-artifact@v2
        with:
          name: homework
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: actions/download-artifact@v2
        with:
          name: homework
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

The workflow run will archive any artifacts that it generated. For more information on downloading archived artifacts, see "[Downloading workflow artifacts](/actions/managing-workflow-runs/downloading-workflow-artifacts)."
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
![ジョブ間でデータを受け渡して計算を実行するワークフロー](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)
{% else %}
![ジョブ間でデータを受け渡して計算を実行するワークフロー](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### 参考リンク

- /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions

{% endif %}
