---
title: 複合実行ステップ アクションの作成
intro: 'このガイドでは、複合実行ステップ アクションを構築する方法について説明します。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

このガイドでは、パッケージ化された複合実行ステップ アクションを作成および使用するために必要な基本的なコンポーネントについて説明します。 アクションのパッケージ化に必要なコンポーネントのガイドに焦点を当てるため、アクションのコードの機能は最小限に留めます。 アクションは「ハローワールド」と「さよなら」を印刷するか、カスタム名を指定すると「こんにちは [who-to-greet]」と「さようなら」を出力します。 このアクションでは、乱数も `乱数` 出力変数にマップされ、 `goodbye.sh`という名前のスクリプトが実行されます。

このプロジェクトを完了したら、独自の複合実行ステップ アクションをビルドし、ワークフローでテストする方法を理解する必要があります。

### 必要な環境

始める前に、{% data variables.product.product_name %} リポジトリを作成します。

1. {% data variables.product.product_location %} に新しいパブリックリポジトリを作成します。 任意のリポジトリ名を選択するか、hello-world コンポジット実行ステップアクション</code> 例 `次の方法を使用できます。 これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。 詳しい情報については、「<a href="/articles/creating-a-new-repository">新しいリポジトリの作成</a>」を参照してください。</p></li>
<li><p spaces-before="0">リポジトリをお手元のコンピューターにクローンします。 詳しい情報については<a href="/articles/cloning-a-repository">リポジトリのクローン</a>を参照してください。</p></li>
<li><p spaces-before="0">ターミナルから、ディレクトリを新しいリポジトリに変更します。
<pre><code class="shell">  cd ハローワールドコンポジット実行ステップアクション
`</pre>

2. `hello-world-composite-run-steps-action` リポジトリで、 `goodbye.sh`という名前の新しいファイルを作成し、次のコード例を追加します。

  ```bash
  エコー"さようなら"
  ```

3. ターミナルから、`goodbye.sh` を実行可能にします。

  ```shell
  chmod +x goodbye.sh
  ```

1. 端末から、 `goodbye.sh` ファイルをチェックインします。
  ```shell
  git を追加goodbye.sh
  git コミット -m "さよならスクリプトを追加"
  git プッシュ
  ```

### アクションのメタデータファイルの作成

1. `hello-world-composite-run-steps-action` リポジトリで、action.yml</code> `という名前の新しいファイルを作成し、次のコード例を追加します。 この構文の詳細については、「<a href="/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-run-steps-actions"><code>実行` 」を参照</a>してください。

    {% raw %}
    **アクション.yml**
    ```yaml
    name:「 Hello World」
    の説明:「 誰かに挨拶する」
    入力:
      誰が挨拶する:入力
        説明の#id:「誰を迎えるか」が必要
        です:true
        デフォルト
      : 
        デフォルト:
    の乱数:説明:${{ steps.random-number-generator.outputs.random-id }}
    の
        値:
      使用:
 
        - 実行:エコーこんにちは{{ inputs.who-to-greet }}。
          シェル: バッシュ
        - id: 乱数ジェネレータ
          実行: echo "::セット出力名=ランダム id::$(エコー $RANDOM)"
          シェル: バッシュ
        - 実行: ${{ github.action_path }}/goodbye.sh
          シェル: bash
    ```
    {% endraw %}
  このファイルは、入力</code> に誰が挨拶 `を定義し、ランダムに生成された数値を <code>乱数` 出力変数にマップし、 `goodbye.sh` スクリプトを実行します。 また、複合実行ステップアクションの実行方法をランナーに指示します。

  出力の管理の詳細については、「複合実行手順の出力</code> を[`する」</a>参照してください。 </p>

<p spaces-before="2"><code>github.action_path`の使用方法の詳細については、「github コンテキスト</code>](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-run-steps-actions)の

`」を参照してください。</p></li>
<li><p spaces-before="0">ターミナルから、<code>action.yml` ファイルをチェックインします。 



  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```
</p></li> 

1 ターミナルから、タグを追加します。 この例では、`v1` というタグを使用しています。 詳しい情報については、「[アクションについて](/actions/creating-actions/about-actions#using-release-management-for-actions)」を参照してください。 
  
  

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```
</ol> 



### ワークフローでアクションを試す

次のワークフロー コードでは、「アクション メタデータ ファイルの作成」で行った完了した hello world アクション[使用](/actions/creating-actions/creating-a-composite-run-steps-action#creating-an-action-metadata-file)。

ワークフローコードを別のリポジトリの `.github/workflows/main.yml` ファイルにコピーしますが、`actions/hello-world-composite-run-steps-action@v1` は作成したリポジトリとタグに置き換えます。 `who-to-greet` 入力を自分の名前に置き換えることもできます。

{% raw %}

**.github/ワークフロー/メイン.yml**


```yaml
on: [push]

ジョブ:
  hello_world_job:
    実行: ubuntu-latest
    名: こんにちは
    ステップを言うジョブ:
    - 使用: アクション/checkout@v2
    - id: foo
      使用: アクション/ハローワールドコンポジットランステップaction@v1
      :
        誰が挨拶: 'モナ・ザ・オクトキャット'
    - 実行: エコー乱数 ${{ steps.foo.outputs.random-number }} 
      シェル:
```


{% endraw %}

リポジトリから [**Actions**] タブをクリックして、最新のワークフロー実行を選択します。 出力には、「こんにちはモナオクトキャット」、"Goodbye"スクリプトの結果、および乱数が含まれている必要があります。
