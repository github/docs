---
title: ワークフロー データをアーティファクトとして保存する
shortTitle: ワークフロー アーティファクトを保存する
intro: アーティファクトを使うと、ワークフローが完了したときに、そのワークフローのジョブとストアデータの間でデータを共有することができます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### ワークフローの成果物について

成果物を使えば、ジョブの完了後にデータを永続化でき、そのデータを同じワークフロー中の他のジョブと共有できます。 アーティファクトとは、ワークフロー実行中に生成されるファイル、またはファイルのコレクションです。 たとえば、成果物を使ってワークフローの実行が終了した後、ビルドとテストの出力を保存しておけます。

{% data reusables.github-actions.artifact-log-retention-statement %} プルリクエストの保持期間は、ユーザが新しいコミットをプルリクエストにプッシュするたびに再開されます。

以下は、アップロードできる一般的な成果物の一部です。

- ログファイルとコアダンプ
- テスト結果、エラー、スクリーンショット
- バイナリあるいは圧縮されたファイル
- ストレステストのパフォーマンス出力およびコード網羅率の結果

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

コードのビルドおよびテストを出力すると多くの場合、エラーのデバッグに使用できるファイルと、デプロイできる本番コードが生成されます。 リポジトリにプッシュされるコードをビルドしてテストし、成功または失敗のステータスをレポートするワークフローを構成することができます。 デプロイメントに使用するビルドおよびテスト出力をアップロードし、失敗したテストまたはクラッシュをデバッグしてテストスイートの範囲を確認できます。

成果物をアップロードするには、`upload-artifact`アクションが使用できます。 成果物をアップロードする場合は、単一のファイルまたはディレクトリー、または複数のファイルまたはディレクトリーを指定できます。 また、特定のファイルやディレクトリを除外したり、ワイルドカードパターンを使用したりすることもできます。 アーティファクトの名前を指定することをお勧めしますが、名前を指定しない場合は、 `アーティファクト` が既定の名前として使用されます。 構文の詳細については、 {% data variables.product.product_location %} 上の {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) アクション{% else %} `actions/upload-artifact` アクション{% endif %}を参照してください。

#### サンプル

たとえば、リポジトリあるいはWebアプリケーションにはCSSやJavaScriptに変換しなければならないSASSやTypeScriptが含まれているかもしれません。 ビルド構成が`dist`ディレクトリにコンパイル後のファイルを出力すると仮定すると、テストがすべて正常に完了した場合、`dist`ディレクトリにあるファイルがWebアプリケーションにデプロイされます。

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

この例では、srcディレクトリにコードを`builds`して、`tests`ディレクトリでテストを実行するNode.jsプロジェクトのワークフローを作成しています。 実行中の`npm test`が、`code-coverage.html`という名前で、`output/test/`ディレクトリに保存されるコード網羅率レポートを生成すると想定できます。

ワークフローは、 `dist` ディレクトリにプロダクション アーティファクトをアップロードしますが、マークダウン ファイルは除きます。 また、 `の code-coverage.html` レポートを別のアーティファクトとしてアップロードします。

```yaml
名前: ノード CI

: [push]

ジョブ:
  build_and_test:
    実行: ubuntu-最新
    ステップ:
      - 名前: チェックアウト リポジトリ
        使用: アクション/checkout@v2
      - 名前: npm インストール、ビルド、テスト
        実行: |
          npm のインストール
          npm 実行ビルド --if-present
          npm テスト
      - 名前: アーカイブ制作アーティファクト
        使用: アクション/アップロードartifact@v2
        :
          名: dist-マークダウンなし
          パス: |
            dist
            !dist/**/*.md
      - 名前: アーカイブ コード カバレッジ結果
        使用: アクション/アップロードartifact@v2
        と共に:
          名: コード カバレッジ レポート
          パス: output/test/code-coverage.html
```

![ワークフローアップロード成果物ワークフロー実行の画像](/assets/images/help/repository/upload-build-test-artifact.png)

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

ワークフローの実行が完了したら、{% data variables.product.prodname_dotcom %} または REST API を使用してアーティファクトをダウンロードまたは削除できます。 詳しい情報については、「[ワークフローアーティファクトをダウンロードする](/actions/managing-workflow-runs/downloading-workflow-artifacts)」、「[ワークフローアーティファクトを削除する](/actions/managing-workflow-runs/removing-workflow-artifacts)」、および「[アーティファクト REST API](/v3/actions/artifacts/)」を参照してください。

#### ワークフロー実行中の成果物のダウンロード

[`actions/download-artifact`](https://github.com/actions/download-artifact) のダウンロードアクションを使用して、ワークフローの実行中に以前にアップロードされたアーティファクトをダウンロードできます。

{% note %}

**注意:** 同じワークフロー実行中にアップロードされたワークフロー内のアーティファクトのみをダウンロードできます。

{% endnote %}

個々の成果物をダウンロードする成果物の名前を指定します。 名前を指定せずにアーティファクトをアップロードした場合、デフォルト名はアーティファクト</code>`されます。</p>

<pre><code class="yaml">- 名前: 使用
  単一のアーティファクトをダウンロード: アクション/ダウンロードartifact@v2
  と共に:
    名: my-artifact
`</pre>

また、名前を指定しないことで、ワークフロー実行のすべての成果物をダウンロードすることもできます。 これは、多数のアーティファクトを扱っている場合に便利です。

```yaml
- 名前: 使用
  すべてのワークフロー実行アーティファクトをダウンロード: アクション/ダウンロードartifact@v2
```

ワークフロー実行のすべての成果物をダウンロードすると、各成果物のディレクトリーがその名前を使用して作成されます。

構文の詳細については、{% data variables.product.product_location %} 上の {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/download-artifact) アクション{% else %} `actions/upload-artifact` アクション{% endif %}を参照してください。

### ワークフローのジョブ間でデータを受け渡す

`upload-artifact`アクションと`download-artifact`アクションを使うと、ワークフローのジョブ間でデータを共有できます。 以下のワークフローの例では、同じワークフローのジョブ間でデータを受け渡す方法を説明しています。 詳しい情報については、 {% data variables.product.product_location %} 上の {% if currentVersion == "free-pro-team@latest" %}[actions/upload-artifact](https://github.com/actions/upload-artifact) および [download-artifact](https://github.com/actions/download-artifact) アクション{% else %} `actions/upload-artifact` および `download-artifact` アクション{% endif %}を参照してください。

前のジョブのアーティファクトに依存するジョブは、前のジョブが正常に完了するまで待つ必要があります。 このワークフローは、`needs`キーワードを使用して`job_1`、`job_2`、`job_3`を順次実行することができます。 たとえば、`job_2`には`needs: job_1`構文を使用する`job_1`が必要です。

ジョブ1は、以下のステップを実行します。
- 数式の計算を実行し、その結果を`math-homework.txt`というテキストファイルに保存します。
- `upload-artifact`アクションを使って、`math-homework.txt`ファイルを`homework`という名前でアップロードします。 このアクションで、ファイルが`homework`という名前のディレクトリに配置されます。

ジョブ2は、前のジョブの結果を利用して、次の処理を実行します。
- 前のジョブでアップロードされた`homework`成果物をダウンロードします。 デフォルトでは、`download-artifact`アクションは、ステップが実行されているワークスペースディレクトリに成果物をダウンロードします。 入力パラメータの`path`を使って、別のダウンロードディレクトリを指定することもできます。
- `homework/math-homework.txt`ファイル中の値を読み取り、数式の計算を実行し、結果を`math-homework.txt`に保存します。
- `math-homework.txt`ファイルをアップロードします。 このアップロードは、前のアップロードを上書きします。どちらも同じ名前を使っているからです。

ジョブ3は、前のジョブでアップロードされた結果を表示して、次の処理を実行します。
- `homework`成果物をダウンロードします。
- 数式の結果をログに出力します。

このワークフロー例で実行される完全な数式は、`(3 + 7) x 9 = 90`です。

```yaml
名前:

ジョブ間でデータを共有: [push]

ジョブ:
  job_1:
    名: 3 と 7
    実行を追加: ubuntu 最新
    ステップ:
      - シェル: バッシュ
        実行: |
          expr 3 + 7 > math-homework.txt
      - 名前: ジョブ1の数学の結果をアップロード
        使用: アクション/アップロードartifact@v2
        使用:
          名: 宿題
          パス: math-homework.txt

  job_2:
    名: job_1
    の
    ニーズ: job_1 実行: windows-最新
    ステップ:
      - 名前: ジョブ1
        の数学結果をダウンロード使用: アクション/ダウンロードartifact@v2

        
      
          :
          値='cat math-homework.txt'
          は、数学-homework.txt
      $value 9 > - 名前:ジョブ2
        の数学の結果をアップロード使用:アクション/アップロードartifact@v2
        :
          名:宿題
          パス:数学-宿題.txt

  job_3:
    名 結果
    表示:のニーズを表示する:job_2
    実行:macOS最新
    ステップ:
      - 名前:ジョブ2の数学の結果をダウンロード
        使用:アクション/ダウンロードartifact@v2
        :
          名:宿題
      - 名前:シェル
        最終結果を印刷する:バッシュ
        実行: |
          値='cat数学宿題.txt'
          エコー 結果は $value
```

![ジョブ間でデータを受け渡して数学を実行するワークフロー](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow.png)

{% if currentVersion == "free-pro-team@latest" %}

### 参考リンク

- /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions

{% endif %}
