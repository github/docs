---
title: 依存関係をキャッシュしてワークフローのスピードを上げる
shortTitle: 依存関係のキャッシング
intro: ワークフローを高速化して効率を上げるために、依存関係や広く再利用されるファイルに対するキャッシュを作成して利用できます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
versions:
  free-pro-team: '*'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.ae-beta %}

### ワークフローの依存関係のキャッシングについて

ワークフローの実行は、しばしば他の実行と同じ出力あるいはダウンロードされた依存関係を再利用します。 たとえばMaven、Gradle、npm、Yarnといったパッケージ及び依存関係管理ツールは、ダウンロードされた依存関係のローカルキャッシュを保持します。

{% data variables.product.prodname_dotcom %}ホストランナー上のジョブは、クリーンな仮想環境で開始され、依存関係を毎回ダウンロードしなければならず、ネットワークの利用率を増大させ、実行時間が長くなり、コストが高まってしまいます。 これらのファイルの再生成にかかる時間を短縮しやすくするために、{% data variables.product.prodname_dotcom %}はワークフロー内で頻繁に使われる依存関係をキャッシュできます。

ジョブのために依存関係をキャッシュするには、{% data variables.product.prodname_dotcom %}の`cache`アクションを使わなければなりません。 このアクションは、ユニークなキーで指定されるキャッシュを取得します。 詳しい情報については「[`actions/cache`](https://github.com/actions/cache)」を参照してください。 Ruby gem をキャッシュする場合は、代わりに、開始時にバンドルインストールをキャッシュ可能な Ruby で維持されているアクションを使用することを検討してください。 詳しい情報については、[`ruby/setup-ruby`](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically) を参照してください。

{% warning %}

**警告**: パブリックリポジトリのキャッシュには、センシティブな情報を保存しないことをおすすめします。 たとえばキャッシュパス内のファイルに保存されたアクセストークンあるいはログインクレデンシャルなどがセンシティブな情報です。 また、`docker login`のようなコマンドラインインターフェース（CLI）プログラムは、アクセスクレデンシャルを設定ファイルに保存することがあります。 読み取りアクセスを持つ人は誰でも、リポジトリにプルリクエストを作成し、キャッシュの内容にアクセスできます。 リポジトリのフォークも、ベースブランチ上にプルリクエストを作成し、ベースブランチ上のキャッシュにアクセスできます。

{% endwarning %}

### 成果物の比較と依存関係のキャッシング

成果物とキャッシングは、{% data variables.product.prodname_dotcom %}にファイルを保存できるようにするので似ていますが、それぞれの機能のユースケースは異なっており、入れ替えて使うことはできません。

- キャッシングは、ジョブやワークフローの実行間で頻繁に変化しないファイルを再利用したいときに使ってください。
- ジョブによって生成されたファイルをワークフローの終了後に見るために保存したい場合に成果物を使ってください。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

### キャッシュへのアクセスについての制限

`cache` アクションの `v2` を使用すると、`GITHUB_REF` を含むイベントによってトリガーされるワークフローのキャッシュにアクセスできます。 `cache` アクションの `v1` を使用している場合、`pull_request` の `closed` イベントを除いて、`push` イベントと `pull_request` イベントによってトリガーされるワークフローでのみキャッシュにアクセスできます。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

ワークフローは、現在のブランチ、ベースブランチ（フォークされたリポジトリのベースブランチを含む）、またはデフォルトブランチ（通常は `main`）で作成されたキャッシュにアクセスして復元できます。 たとえば、デフォルトブランチで作成されたキャッシュは、どのPull Requestからもアクセスできます。 また、`feature-b` ブランチに `feature-a` ベースブランチがある場合、`feature-b` でトリガーされたワークフローは、デフォルトのブランチ（`main`）、`feature-a`、および `feature-b` で作成されたキャッシュにアクセスできます。

アクセス制限は、様々なワークフローとブランチ間の論理的な境界を作成することによって、キャッシュの分離とセキュリティを提供します。 たとえば、`feature-a` ブランチ（ベース `main` を使用）向けに作成されたキャッシュは、`feature-b` ブランチ（ベース `main` を使用）のPull Requestにアクセスできません。

### `cache`アクションの利用

`cache`アクションは、提供された`key`に基づいてキャッシュをリストアしようとします。 このアクションは、キャッシュを見つけるとそのキャッシュされたファイルを設定された`path`にリストアします。

正確なマッチがなければ、ジョブが成功したならこのアクションは新しいキャッシュエントリを作成します。 新しいキャッシュは提供された`key`を使い、`path`ディレクトリ内にファイルを保存します。

既存のキャッシュに`key`がマッチしなかった場合に使われる、`restore-keys`のリストを提供することもできます。 `restore-keys`のリストは、 `restore-keys`がキャッシュキーと部分的にマッチできるので、他のブランチからのキャッシュをリストアする場合に役立ちます。 `restore-keys`のマッチに関する詳しい情報については「[キャッシュキーのマッチ](#matching-a-cache-key)」を参照してください。

詳しい情報については「[`actions/cache`](https://github.com/actions/cache)」を参照してください。

#### `cache` アクションの入力パラメータ

- `key`: **必須** このキーはキャッシュの保存時に作成され、キャッシュの検索に使われます。 変数、コンテキスト値、静的な文字列、関数の任意の組み合わせが使えます。 キーの長さは最大で512文字であり、キーが最大長よりも長いとアクションは失敗します。
- `path`: **必須** ランナーがキャッシュあるいはリストアをするファイルパス。 このパスは、絶対パスでも、ワーキングディレクトリからの相対パスでもかまいません。
  - パスはディレクトリまたは単一ファイルのいずれかで、glob パターンがサポートされています。
  - `cache` アクションの `v2` では、単一のパスを指定することも、別々の行に複数のパスを追加することもできます。 例:
    ```
    - name: Cache Gradle packages
      uses: actions/cache@v2
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - `cache` アクションの `v1` では、単一のパスのみがサポートされ、かつそれがディレクトリである必要があります。 単一のファイルをキャッシュすることはできません。
- `restore-keys`: **オプション** `key`に対するキャッシュヒットがなかった場合にキャッシュを見つけるために使われる代理キーの順序付きリスト。

#### `cache`アクションの出力パラメータ

- `cache-hit`: キーの完全一致が見つかったことを示すブール値。

#### `cache` アクションの使用例

以下の例では、`package-lock.json`ファイル内のパッケージが変更された場合、あるいはランナーのオペレーティングシステムが変更された場合に新しいキャッシュが作成されます。 キャッシュキーはコンテキストと式を使い、ランナーのオペレーティングシステムと`package-lock.json`ファイルのSHA-256ハッシュを含むキーを生成します。

{% raw %}
```yaml{:copy}
name: Caching with npm

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          # npm キャッシュファイルは Linux/macOS の `~/.npm` に保存される
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```
{% endraw %}

`key`が既存のキャッシュにマッチした場合はキャッシュヒットと呼ばれ、このアクションはキャッシュされたファイルを`path`ディレクトリにリストアします。

`key`が既存のキャッシュにマッチしなかった場合はキャッシュミスと呼ばれ、ジョブが成功して完了したなら新しいキャッシュが作成されます。 キャッシュミスが生じた場合、このアクションは`restore-keys`と呼ばれる代理キーを検索します。

1. `restore-keys`が渡された場合、`cache`アクションは`restore-keys`のリストにマッチするキャッシュを順番に検索します。
   - 完全なマッチがあった場合、アクションはそのファイルを`path`ディレクトリ中のキャッシュにリストアします。
   - 完全なマッチがなかった場合、アクションはリストアキーに対する部分一致を検索します。 アクションが部分一致を見つけた場合、最も最近のキャッシュが`path`ディレクトリにリストアされます。
1. `cache` アクションが完了し、ジョブ内の次のワークフローステップが実行されます。
1. ジョブが成功して完了したなら、アクションは`path`ディレクトリの内容で新しいキャッシュを作成します。

複数のディレクトリにファイルをキャッシュするには、各ディレクトリごとに[`cache`](https://github.com/actions/cache) アクションを使うステップが必要です。 キャッシュをいったん作成すると、既存のキャッシュの内容を変更することはできませんが、新しいキーで新しいキャッシュを作成することはできます。

#### コンテキストを使ったキャッシュキーの作成

キャッシュキーには、コンテキスト、関数、リテラル、{% data variables.product.prodname_actions %}がサポートする演算子を含めることができます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

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

### キャッシュキーのマッチング

`cache` アクションは最初に、ワークフロー実行を含むブランチで `key` および `restore-keys` のキャッシュヒットを検索します。 現在のブランチにヒットがない場合、`cache` アクションは、親ブランチと上流のブランチで `key` および `restore-keys` を検索します。

`key`でキャッシュミスがあった場合に使うリストアキーのリストを提供できます。 特定の度合いが強いものから弱いものへ並べて複数のリストアキーを作成できます。 `cache`アクションは順番に`restore-keys`を検索していきます。 キーが直接マッチしなかった場合、アクションはリストアキーでプレフィックスされたキーを検索します。 リストアキーに対して複数の部分一致があった場合、アクションは最も最近に作成されたキャッシュを返します。

#### 複数のリストアキーの利用例

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

##### 検索の優先度の例

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

### 利用制限と退去のポリシー

{% data variables.product.prodname_dotcom %}は、7日間以上アクセスされていないキャッシュエントリを削除します。 保存できるキャッシュ数には上限がありませんが、1つのリポジトリ内のすべてのキャッシュの合計サイズは5GBに制限されます。 この制限を超えた場合、{% data variables.product.prodname_dotcom %}はキャッシュを保存しますが、合計サイズが5GB以下になるまでキャッシュを退去させはじめます。
