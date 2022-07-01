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
  feature: actions-caching
type: tutorial
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
---

## ワークフローの依存関係のキャッシングについて

ワークフローの実行は、しばしば他の実行と同じ出力あるいはダウンロードされた依存関係を再利用します。 たとえばMaven、Gradle、npm、Yarnといったパッケージ及び依存関係管理ツールは、ダウンロードされた依存関係のローカルキャッシュを保持します。

{% ifversion fpt or ghec %} Jobs on {% data variables.product.prodname_dotcom %}-hosted runners start in a clean virtual environment and must download dependencies each time, causing increased network utilization, longer runtime, and increased cost. {% endif %}To help speed up the time it takes to recreate files like dependencies, {% data variables.product.prodname_dotcom %} can cache files you frequently use in workflows.

To cache dependencies for a job, you can use {% data variables.product.prodname_dotcom %}'s [`cache` action](https://github.com/actions/cache). The action creates and restores a cache identified by a unique key. Alternatively, if you are caching the package managers listed below, using their respective setup-* actions requires minimal configuration and will create and restore dependency caches for you.

| Package managers    | setup-* action for caching                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------ |
| npm, Yarn, pnpm     | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data)           |
| pip, pipenv, Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies)      |
| Gradle, Maven       | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies)          |
| RubyGems            | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically)      |
| Go `go.sum`         | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**Warning**: {% ifversion fpt or ghec %}Be mindful of the following when using caching with {% data variables.product.prodname_actions %}:

* {% endif %}We recommend that you don't store any sensitive information in the cache. たとえばキャッシュパス内のファイルに保存されたアクセストークンあるいはログインクレデンシャルなどがセンシティブな情報です。 また、`docker login`のようなコマンドラインインターフェース（CLI）プログラムは、アクセスクレデンシャルを設定ファイルに保存することがあります。 Anyone with read access can create a pull request on a repository and access the contents of a cache. リポジトリのフォークも、ベースブランチ上にPull Requestを作成し、ベースブランチ上のキャッシュにアクセスできます。
{%- ifversion fpt or ghec %}
* When using self-hosted runners, caches from workflow runs are stored on {% data variables.product.company_short %}-owned cloud storage. A customer-owned storage solution is only available with {% data variables.product.prodname_ghe_server %}.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

For more information on workflow run artifacts, see "[Persisting workflow data using artifacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

## キャッシュへのアクセスについての制限

ワークフローは、現在のブランチ、ベースブランチ（フォークされたリポジトリのベースブランチを含む）、またはデフォルトブランチ（通常は `main`）で作成されたキャッシュにアクセスして復元できます。 たとえば、デフォルトブランチで作成されたキャッシュは、どのPull Requestからもアクセスできます。 また、`feature-b` ブランチに `feature-a` ベースブランチがある場合、`feature-b` でトリガーされたワークフローは、デフォルトのブランチ（`main`）、`feature-a`、および `feature-b` で作成されたキャッシュにアクセスできます。

Access restrictions provide cache isolation and security by creating a logical boundary between different branches. For example, a cache created for the branch `feature-a` (with the base `main`) would not be accessible to a pull request for the branch `feature-c` (with the base `main`).

Multiple workflows within a repository share cache entries. A cache created for a branch within a workflow can be accessed and restored from another workflow for the same repository and branch.

## `cache`アクションの利用

The [`cache` action](https://github.com/actions/cache) will attempt to restore a cache based on the `key` you provide. このアクションは、キャッシュを見つけるとそのキャッシュされたファイルを設定された`path`にリストアします。

If there is no exact match, the action automatically creates a new cache if the job completes successfully. The new cache will use the `key` you provided and contains the files you specify in `path`.

既存のキャッシュに`key`がマッチしなかった場合に使われる、`restore-keys`のリストを提供することもできます。 `restore-keys`のリストは、 `restore-keys`がキャッシュキーと部分的にマッチできるので、他のブランチからのキャッシュをリストアする場合に役立ちます。 `restore-keys`のマッチに関する詳しい情報については「[キャッシュキーのマッチ](#matching-a-cache-key)」を参照してください。

### `cache` アクションの入力パラメータ

- `key`: **必須** このキーはキャッシュの保存時に作成され、キャッシュの検索に使われます。 It can be any combination of variables, context values, static strings, and functions. キーの長さは最大で512文字であり、キーが最大長よりも長いとアクションは失敗します。
- `path`: **Required** The path(s) on the runner to cache or restore.
  - You can specify a single path, or you can add multiple paths on separate lines. 例:

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - You can specify either directories or single files, and glob patterns are supported.
  - You can specify absolute paths, or paths relative to the workspace directory.
- `restore-keys`: **Optional** A string containing alternative restore keys, with each restore key placed on a new line. If no cache hit occurs for `key`, these restore keys are used sequentially in the order provided to find and restore a cache. 例:

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
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
        id: cache-npm
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

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == 'false' }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

When `key` matches an existing cache, it's called a _cache hit_, and the action restores the cached files to the `path` directory.

When `key` doesn't match an existing cache, it's called a _cache miss_, and a new cache is automatically created if the job completes successfully.

When a cache miss occurs, the action also searches your specified `restore-keys` for any matches:

1. `restore-keys`が渡された場合、`cache`アクションは`restore-keys`のリストにマッチするキャッシュを順番に検索します。
   - 完全なマッチがあった場合、アクションはそのファイルを`path`ディレクトリ中のキャッシュにリストアします。
   - 完全なマッチがなかった場合、アクションはリストアキーに対する部分一致を検索します。 アクションが部分一致を見つけた場合、最も最近のキャッシュが`path`ディレクトリにリストアされます。
1. The `cache` action completes and the next step in the job runs.
1. If the job completes successfully, the action automatically creates a new cache with the contents of the `path` directory.

For a more detailed explanation of the cache matching process, see "[Matching a cache key](#matching-a-cache-key)." キャッシュをいったん作成すると、既存のキャッシュの内容を変更することはできませんが、新しいキーで新しいキャッシュを作成することはできます。

### コンテキストを使ったキャッシュキーの作成

キャッシュキーには、コンテキスト、関数、リテラル、{% data variables.product.prodname_actions %}がサポートする演算子を含めることができます。 For more information, see "[Contexts](/actions/learn-github-actions/contexts)" and "[Expressions](/actions/learn-github-actions/expressions)."

Using expressions to create a `key` allows you to automatically create a new cache when dependencies change.

たとえばnpmの`package-lock.json`ファイルのハッシュを計算する式を使って`key`を作成できます。 So, when the dependencies that make up the `package-lock.json` file change, the cache key changes and a new cache is automatically created.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %}は`hash "package-lock.json"`という式を評価して、最終的な`key`を導出します。

```yaml
npm-d5ea0750
```

### Using the output of the `cache` action

You can use the output of the `cache` action to do something based on whether a cache hit or miss occurred. If there is a cache miss (an exact match for a cache was not found for the specified `key`), the `cache-hit` output is set to `false`.

In the example workflow above, there is a step that lists the state of the Node modules if a cache miss occurred:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == 'false' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## キャッシュキーのマッチング

`cache` アクションは最初に、ワークフロー実行を含むブランチで `key` および `restore-keys` のキャッシュヒットを検索します。 現在のブランチにヒットがない場合、`cache` アクションは、親ブランチと上流のブランチで `key` および `restore-keys` を検索します。

`restore-keys` allows you to specify a list of alternate restore keys to use when there is a cache miss on `key`. 特定の度合いが強いものから弱いものへ並べて複数のリストアキーを作成できます。 The `cache` action searches the `restore-keys` in sequential order. キーが直接マッチしなかった場合、アクションはリストアキーでプレフィックスされたキーを検索します。 リストアキーに対して複数の部分一致があった場合、アクションは最も最近に作成されたキャッシュを返します。

### 複数のリストアキーの利用例

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

ランナーは式を評価します。この式は以下のような`restore-keys`になります。

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

The restore key `npm-feature-` matches any key that starts with the string `npm-feature-`. For example, both of the keys `npm-feature-fd3052de` and `npm-feature-a9b253ff` match the restore key. 最も最近の期日に作成されたキャッシュが使われます。 この例でのキーは、以下の順序で検索されます。

1. **`npm-feature-d5ea0750`** matches a specific hash.
1. **`npm-feature-`** matches cache keys prefixed with `npm-feature-`.
1. **`npm-`**は`npm-`をプレフィックスとする任意のキーにマッチします。

#### 検索の優先度の例

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

For example, if a pull request contains a `feature` branch and targets the default branch (`main`), the action searches for `key` and `restore-keys` in the following order:

1. Key `npm-feature-d5ea0750` in the `feature` branch
1. Key `npm-feature-` in the `feature` branch
1. Key `npm-` in the `feature` branch
1. Key `npm-feature-d5ea0750` in the `main` branch
1. Key `npm-feature-` in the `main` branch
1. Key `npm-` in the `main` branch

## 利用制限と退去のポリシー

{% data variables.product.prodname_dotcom %}は、7日間以上アクセスされていないキャッシュエントリを削除します。 There is no limit on the number of caches you can store, but the total size of all caches in a repository is limited{% ifversion actions-cache-policy-apis %}. By default, the limit is 10 GB per repository, but this limit might be different depending on policies set by your enterprise owners or repository administrators.{% else %} to 10 GB.{% endif %}

{% data reusables.actions.cache-eviction-process %}

{% ifversion actions-cache-policy-apis %}
For information on changing the policies for the repository cache size limit, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" and "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)."
{% endif %}

{% ifversion actions-cache-management %}

## Managing caches

You can use the {% data variables.product.product_name %} REST API to manage your caches. {% ifversion actions-cache-list-delete-apis %}You can use the API to list and delete cache entries, and see your cache usage.{% elsif actions-cache-management %}At present, you can use the API to see your cache usage, with more functionality expected in future updates.{% endif %} For more information, see the "[{% data variables.product.prodname_actions %} Cache](/rest/actions/cache)" REST API documentation.

{% endif %}
