---
title: 依存関係をキャッシュしてワークフローのスピードを上げる
shortTitle: 依存関係のキャッシング
intro: ワークフローを高速化して効率を上げるために、依存関係や広く再利用されるファイルに対するキャッシュを作成して利用できます。
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
---

## ワークフローの依存関係のキャッシングについて

ワークフローの実行は、しばしば他の実行と同じ出力あるいはダウンロードされた依存関係を再利用します。 たとえばMaven、Gradle、npm、Yarnといったパッケージ及び依存関係管理ツールは、ダウンロードされた依存関係のローカルキャッシュを保持します。

{% data variables.product.prodname_dotcom %}ホストランナー上のジョブは、クリーンな仮想環境で開始され、依存関係を毎回ダウンロードしなければならず、ネットワークの利用率を増大させ、実行時間が長くなり、コストが高まってしまいます。 これらのファイルの再生成にかかる時間を短縮しやすくするために、{% data variables.product.prodname_dotcom %}はワークフロー内で頻繁に使われる依存関係をキャッシュできます。

ジョブのために依存関係をキャッシュするには、{% data variables.product.prodname_dotcom %}の`cache`アクションを使わなければなりません。 このアクションは、ユニークなキーで指定されるキャッシュを取得します。 詳しい情報については「[`actions/cache`](https://github.com/actions/cache)」を参照してください。

If you are caching the package managers listed below, consider using the respective setup-* actions, which require almost zero configuration and are easy to use.

<table>
<thead>
  <tr>
    <th>Package managers</th>
    <th>setup-* action for caching</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>npm, yarn, pnpm</td>
    <td><a href="https://github.com/actions/setup-node">setup-node</a></td>
  </tr>
  <tr>
    <td>pip, pipenv</td>
    <td><a href="https://github.com/actions/setup-python">setup-python</a></td>
  </tr>
  <tr>
    <td>gradle, maven</td>
    <td><a href="https://github.com/actions/setup-java">setup-java</a></td>
  </tr>
  <tr>
    <td>ruby gems</td>
    <td><a href="https://github.com/ruby/setup-ruby">setup-ruby</a></td>
  </tr>
</tbody>
</table>

{% warning %}

**警告**: パブリックリポジトリのキャッシュには、センシティブな情報を保存しないことをおすすめします。 たとえばキャッシュパス内のファイルに保存されたアクセストークンあるいはログインクレデンシャルなどがセンシティブな情報です。 また、`docker login`のようなコマンドラインインターフェース（CLI）プログラムは、アクセスクレデンシャルを設定ファイルに保存することがあります。 読み取りアクセスを持つ人は誰でも、リポジトリにPull Requestを作成し、キャッシュの内容にアクセスできます。 リポジトリのフォークも、ベースブランチ上にPull Requestを作成し、ベースブランチ上のキャッシュにアクセスできます。

{% endwarning %}

## 成果物の比較と依存関係のキャッシング

成果物とキャッシングは、{% data variables.product.prodname_dotcom %}にファイルを保存できるようにするので似ていますが、それぞれの機能のユースケースは異なっており、入れ替えて使うことはできません。

- キャッシングは、ジョブやワークフローの実行間で頻繁に変化しないファイルを再利用したいときに使ってください。
- ジョブによって生成されたファイルをワークフローの終了後に見るために保存したい場合に成果物を使ってください。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

## キャッシュへのアクセスについての制限

`cache` アクションの `v2` を使用すると、`GITHUB_REF` を含むイベントによってトリガーされるワークフローのキャッシュにアクセスできます。 `cache` アクションの `v1` を使用している場合、`pull_request` の `closed` イベントを除いて、`push` イベントと `pull_request` イベントによってトリガーされるワークフローでのみキャッシュにアクセスできます。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

ワークフローは、現在のブランチ、ベースブランチ（フォークされたリポジトリのベースブランチを含む）、またはデフォルトブランチ（通常は `main`）で作成されたキャッシュにアクセスして復元できます。 たとえば、デフォルトブランチで作成されたキャッシュは、どのPull Requestからもアクセスできます。 また、`feature-b` ブランチに `feature-a` ベースブランチがある場合、`feature-b` でトリガーされたワークフローは、デフォルトのブランチ（`main`）、`feature-a`、および `feature-b` で作成されたキャッシュにアクセスできます。

Access restrictions provide cache isolation and security by creating a logical boundary between different branches. たとえば、`feature-a` ブランチ（ベース `main` を使用）向けに作成されたキャッシュは、`feature-b` ブランチ（ベース `main` を使用）のPull Requestにアクセスできません。

Multiple workflows within a repository share cache entries. A cache created for a branch within a workflow can be accessed and restored from another workflow for the same repository and branch.

## `cache`アクションの利用

`cache`アクションは、提供された`key`に基づいてキャッシュをリストアしようとします。 このアクションは、キャッシュを見つけるとそのキャッシュされたファイルを設定された`path`にリストアします。

正確なマッチがなければ、ジョブが成功したならこのアクションは新しいキャッシュエントリを作成します。 新しいキャッシュは提供された`key`を使い、`path`ディレクトリ内にファイルを保存します。

既存のキャッシュに`key`がマッチしなかった場合に使われる、`restore-keys`のリストを提供することもできます。 `restore-keys`のリストは、 `restore-keys`がキャッシュキーと部分的にマッチできるので、他のブランチからのキャッシュをリストアする場合に役立ちます。 `restore-keys`のマッチに関する詳しい情報については「[キャッシュキーのマッチ](#matching-a-cache-key)」を参照してください。

詳しい情報については「[`actions/cache`](https://github.com/actions/cache)」を参照してください。

### `cache` アクションの入力パラメータ

- `key`: **必須** このキーはキャッシュの保存時に作成され、キャッシュの検索に使われます。 変数、コンテキスト値、静的な文字列、関数の任意の組み合わせが使えます。 キーの長さは最大で512文字であり、キーが最大長よりも長いとアクションは失敗します。
- `path`: **必須** ランナーがキャッシュあるいはリストアをするファイルパス。 The path can be an absolute path or relative to the workspace directory.
  - パスはディレクトリまたは単一ファイルのいずれかで、glob パターンがサポートされています。
  - `cache` アクションの `v2` では、単一のパスを指定することも、別々の行に複数のパスを追加することもできます。 例:

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - `cache` アクションの `v1` では、単一のパスのみがサポートされ、かつそれがディレクトリである必要があります。 単一のファイルをキャッシュすることはできません。
- `restore-keys`: **Optional** A string containing alternative restore keys, with each restore key placed on a new line. If no cache hit occurred for `key`, these restore keys are used sequentially in the order provided to find and restore a cache. 例:

  {% raw %}
  ```yaml
  restore-keys: |
    npm-foobar-${{ hashFiles('package-lock.json') }}
    npm-foobar-
    npm-
  ```
  {% endraw %}

### `cache`アクションの出力パラメータ

- `cache-hit`: キーの完全一致が見つかったことを示すブール値。

### `cache` アクションの使用例

以下の例では、`package-lock.json`ファイル内のパッケージが変更された場合、あるいはランナーのオペレーティングシステムが変更された場合に新しいキャッシュが作成されます。 キャッシュキーはコンテキストと式を使い、ランナーのオペレーティングシステムと`package-lock.json`ファイルのSHA-256ハッシュを含むキーを生成します。

```yaml{:copy}
name: Caching with npm

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
            {% raw %}${{ runner.os }}-build-{% endraw %}
            {% raw %}${{ runner.os }}-{% endraw %}

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

`key`が既存のキャッシュにマッチした場合はキャッシュヒットと呼ばれ、このアクションはキャッシュされたファイルを`path`ディレクトリにリストアします。

`key`が既存のキャッシュにマッチしなかった場合はキャッシュミスと呼ばれ、ジョブが成功して完了したなら新しいキャッシュが作成されます。 キャッシュミスが生じた場合、このアクションは`restore-keys`と呼ばれる代理キーを検索します。

1. `restore-keys`が渡された場合、`cache`アクションは`restore-keys`のリストにマッチするキャッシュを順番に検索します。
   - 完全なマッチがあった場合、アクションはそのファイルを`path`ディレクトリ中のキャッシュにリストアします。
   - 完全なマッチがなかった場合、アクションはリストアキーに対する部分一致を検索します。 アクションが部分一致を見つけた場合、最も最近のキャッシュが`path`ディレクトリにリストアされます。
1. `cache` アクションが完了し、ジョブ内の次のワークフローステップが実行されます。
1. ジョブが成功して完了したなら、アクションは`path`ディレクトリの内容で新しいキャッシュを作成します。

複数のディレクトリにファイルをキャッシュするには、各ディレクトリごとに[`cache`](https://github.com/actions/cache) アクションを使うステップが必要です。 キャッシュをいったん作成すると、既存のキャッシュの内容を変更することはできませんが、新しいキーで新しいキャッシュを作成することはできます。

### コンテキストを使ったキャッシュキーの作成

キャッシュキーには、コンテキスト、関数、リテラル、{% data variables.product.prodname_actions %}がサポートする演算子を含めることができます。 For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

式を使って`key`を作成すれば、依存関係が変化したときに自動的に新しいキャッシュを作成できます。 たとえばnpmの`package-lock.json`ファイルのハッシュを計算する式を使って`key`を作成できます。

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %}は`hash "package-lock.json"`という式を評価して、最終的な`key`を導出します。

```yaml
npm-d5ea0750
```

## キャッシュキーのマッチング

`cache` アクションは最初に、ワークフロー実行を含むブランチで `key` および `restore-keys` のキャッシュヒットを検索します。 現在のブランチにヒットがない場合、`cache` アクションは、親ブランチと上流のブランチで `key` および `restore-keys` を検索します。

`key`でキャッシュミスがあった場合に使うリストアキーのリストを提供できます。 特定の度合いが強いものから弱いものへ並べて複数のリストアキーを作成できます。 `cache`アクションは順番に`restore-keys`を検索していきます。 キーが直接マッチしなかった場合、アクションはリストアキーでプレフィックスされたキーを検索します。 リストアキーに対して複数の部分一致があった場合、アクションは最も最近に作成されたキャッシュを返します。

### 複数のリストアキーの利用例

{% raw %}
```yaml
restore-keys: |
  npm-foobar-${{ hashFiles('package-lock.json') }}
  npm-foobar-
  npm-
```
{% endraw %}

ランナーは式を評価します。この式は以下のような`restore-keys`になります。

{% raw %}
```yaml
restore-keys: |
  npm-foobar-d5ea0750
  npm-foobar-
  npm-
```
{% endraw %}

リストアキーの`npm-foobar-`は、`npm-foobar-`という文字列で始まる任意のキーにマッチします。 たとえば`npm-foobar-fd3052de`や`npm-foobar-a9b253ff`というキーはいずれもこのリストアキーにマッチします。 最も最近の期日に作成されたキャッシュが使われます。 この例でのキーは、以下の順序で検索されます。

1. **`npm-foobar-d5ea0750`**は特定のハッシュにマッチします。
1. **`npm-foobar-`**は`npm-foobar-`をプレフィックスとするキャッシュキーにマッチします。
1. **`npm-`**は`npm-`をプレフィックスとする任意のキーにマッチします。

#### 検索の優先度の例

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

たとえば、プルリクエストに `feature` ブランチ（現在のスコープ）が含まれ、デフォルトブランチ（`main`）をターゲットにしている場合、アクションは次の順序で `key` と `restore-keys` を検索します。

1. `feature`ブランチのスコープ内で`npm-feature-d5ea0750`というキー
1. `feature`ブランチのスコープ内で`npm-feature-`というキー
2. `feature`ブランチのスコープ内で`npm-`というキー
1. `main` ブランチのスコープ内で `npm-feature-d5ea0750` というキー
3. `main` ブランチのスコープ内で `npm-feature-` というキー
4. `main` ブランチのスコープ内で `npm-` というキー

## 利用制限と退去のポリシー

{% data variables.product.prodname_dotcom %}は、7日間以上アクセスされていないキャッシュエントリを削除します。 There is no limit on the number of caches you can store, but the total size of all caches in a repository is limited to 10 GB. If you exceed this limit, {% data variables.product.prodname_dotcom %} will save your cache but will begin evicting caches until the total size is less than 10 GB.

{% if actions-cache-management %}

## Managing caches

You can use the {% data variables.product.product_name %} REST API to manage your caches. At present, you can use the API to see your cache usage, with more functionality expected in future updates. For more information, see the "[Actions](/rest/reference/actions#cache)" REST API documentation.

{% endif %}
