---
title: 依存関係をキャッシュしてワークフローのスピードを上げる
shortTitle: Cache dependencies
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
ms.openlocfilehash: 380fe568e950a4dc388e8f811ecebd12f242c5df
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164381'
---
## ワークフローの依存関係のキャッシングについて

ワークフローの実行は、しばしば他の実行と同じ出力あるいはダウンロードされた依存関係を再利用します。 たとえばMaven、Gradle、npm、Yarnといったパッケージ及び依存関係管理ツールは、ダウンロードされた依存関係のローカルキャッシュを保持します。

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} ホステッド ランナー上のジョブは、クリーンなランナー イメージで開始されますが、依存関係を毎回ダウンロードする必要があるため、ネットワークの利用率が増大し、実行時間が長くなり、コストが高くなります。 {% endif %}依存関係などのファイルの再生成にかかる時間を短縮しやすくするために、{% data variables.product.prodname_dotcom %} ではワークフロー内で頻繁に使われるファイルをキャッシュできます。

ジョブの依存関係をキャッシュするには、{% data variables.product.prodname_dotcom %} の [`cache` アクション](https://github.com/actions/cache)を使用できます。 このアクションは、一意のキーによって識別されるキャッシュを作成し、復元します。 なお、以下に示すパッケージ マネージャーをキャッシュする場合、それぞれの setup-* アクションを使用するには、最小構成が必要となります。これにより、依存関係キャッシュが作成され、復元されます。

| パッケージ マネージャー | キャッシュの setup-* アクション |
|---|---|
| npm、Yarn、pnpm | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data) |
| pip、pipenv、Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies) |
| Gradle、Maven | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies) |
| RubyGems | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically) |
| Go `go.sum` | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**警告**: {% ifversion fpt or ghec %}{% data variables.product.prodname_actions %} でキャッシュを使用する場合は、次の点に注意してください。

* {% endif %}キャッシュには、機密情報を保存しないことをお勧めします。 たとえばキャッシュパス内のファイルに保存されたアクセストークンあるいはログインクレデンシャルなどがセンシティブな情報です。 また、`docker login` のようなコマンド ライン インターフェイス (CLI) プログラムでは、アクセス資格情報を構成ファイルに保存できます。 読み取りアクセスを持つ人は誰でも、リポジトリに pull request を作成し、キャッシュの内容にアクセスできます。 リポジトリのフォークも、ベースブランチ上にPull Requestを作成し、ベースブランチ上のキャッシュにアクセスできます。
{%- ifversion fpt or ghec %}
* セルフホステッド ランナーを使用する場合、ワークフロー実行のキャッシュは、{% data variables.product.company_short %} 所有のクラウド ストレージに保存されます。 顧客所有のストレージ ソリューションは、{% data variables.product.prodname_ghe_server %} でのみ使用できます。
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

ワークフロー実行のアーティファクトについて詳しくは、「[アーティファクトを使用してワークフロー データを永続化する](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

## キャッシュへのアクセスについての制限

アクセス制限を使用すると、さまざまなブランチまたはタグ間に論理境界を作成することで、キャッシュを分離しセキュリティで保護することができます。 ワークフロー実行では、現在のブランチまたは既定のブランチ (通常は `main`) で作成されたキャッシュを復元できます。 pull request に対してワークフロー実行がトリガーされた場合は、ベース ブランチで作成されたキャッシュを復元することもできます (フォークされたリポジトリのベース ブランチも含む)。 たとえば、ブランチ `feature-b` にベース ブランチ `feature-a` がある場合、pull request でトリガーされたワークフロー実行では、既定のブランチ `main`、ベース ブランチ `feature-a`、および現在のブランチ `feature-b` で作成されたキャッシュにアクセスできます。

ワークフロー実行では、子ブランチまたは兄弟ブランチ用に作成されたキャッシュを復元することはできません。 たとえば、子ブランチ `feature-b` 用に作成されたキャッシュに、親ブランチ `main` でトリガーされたワークフロー実行からアクセスすることはできません。 同様に、ベース `main` を持つブランチ `feature-a` 用に作成されたキャッシュに、ベース `main` を持つその兄弟ブランチ `feature-c` からアクセスすることはできません。 また、ワークフロー実行では、異なるタグ名に対して作成されたキャッシュを復元することもできません。 たとえば、タグ `release-a` に対してベース `main` で作成されたキャッシュに、タグ `release-b` に対してベース `main` でトリガーされたワークフロー実行からアクセスすることはできません。

pull request でトリガーされたワークフロー実行によってキャッシュが作成される場合、そのキャッシュは merge ref (`refs/pull/.../merge`) に対して作成されます。 このため、このキャッシュのスコープは制限され、pull request の再実行によってのみ復元できます。 ベース ブランチ、またはそのベース ブランチを対象とする他の pull request では、復元できません。

リポジトリ内の複数のワークフロー実行で、キャッシュを共有できます。 あるワークフロー実行でブランチ用に作成されたキャッシュは、同じリポジトリとブランチの別のワークフロー実行からアクセスおよび復元できます。

## `cache` アクションの使用

[`cache` action](https://github.com/actions/cache) アクションは、指定した `key` に基づいてキャッシュの復元を試みます。 アクションがそのキーと "_厳密に_" 一致するキャッシュを見つけた場合、構成した `path` にキャッシュされたファイルが復元されます。
必要に応じて、`key` が既存のキャッシュと一致しない場合に使用する `restore-keys` のリストを指定できます。 `restore-keys` のリストは、別のブランチからキャッシュを復元する場合に便利です。`restore-keys` はキャッシュ キーと "_部分的に_" 一致する可能性があるためです。 `restore-keys` の照合の詳細については、「[キャッシュ キーのマッチング](#matching-a-cache-key)」を参照してください。

指定した `key` との完全な一致があった場合は、キャッシュ ヒットと見なされます。 指定した `key` と完全に一致するキャッシュがなかった場合は、キャッシュ ミスと見なされます。 キャッシュ ミスの場合は、ジョブが正常に完了すると、このアクションによって新しいキャッシュが自動的に作成されます。 新しいキャッシュでは、指定した `key` が使用され、`path` で指定したファイルが含められます。 この処理方法について詳しくは、「[キャッシュ ヒットとキャッシュ ミス](#cache-hits-and-misses)」を参照してください。

既存のキャッシュの内容を変更することはできません。 代わりに、新しいキーを使って新しいキャッシュを作成できます。


### `cache` アクションの入力パラメーター

- `key`: **必須** キャッシュの保存時に作成されたキーと、キャッシュの検索に使用されるキー。 変数、コンテキスト値、静的な文字列、関数の任意の組み合わせが使えます。 キーの長さは最大で512文字であり、キーが最大長よりも長いとアクションは失敗します。
- `path`: **必須** キャッシュまたは復元するランナー上のパス。
  - 1 つのパスを指定することも、複数のパスを別々の行に追加することもできます。 たとえば次のような点です。

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - ディレクトリまたは単一ファイルのいずれかを指定できます。glob パターンがサポートされています。
  - 絶対パス、またはワークスペース ディレクトリに対する相対パスを指定できます。
- `restore-keys`: **オプション** 代替の復元キーを含んだ文字列。各復元キーは新しい行に配置されます。 `key` に対するキャッシュ ヒットが発生しない場合は、キャッシュを検索して復元するために、これらの復元キーが指定された順序で使用されます。 たとえば次のような点です。

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### `cache` アクションの出力パラメーター

- `cache-hit`: キーに対して完全一致が見つかったかどうかを示すブール値。

### キャッシュ ヒットとキャッシュ ミス
`key` が既存のキャッシュと厳密に一致した場合、それは "_キャッシュ ヒット_" と呼ばれ、アクションによってキャッシュされたファイルが `path` ディレクトリに復元されます。

`key` が既存のキャッシュと一致しない場合 (これは _キャッシュ ミス_ と呼ばれます)、ジョブが正常に完了すると、新しいキャッシュが作成されます。

キャッシュ ミスが発生した場合、アクションはユーザーが指定した `restore-keys` の一致も検索します。

1. `restore-keys` を指定した場合、`cache` アクションは `restore-keys` のリストに一致するすべてのキャッシュを順次検索します。
   - 完全に一致する場合、アクションはキャッシュ内のファイルを `path` ディレクトリに復元します。
   - 完全なマッチがなかった場合、アクションはリストアキーに対する部分一致を検索します。 アクションで部分的な一致が見つかると、最新のキャッシュが `path` ディレクトリに復元されます。
1. `cache` アクションが完了し、ジョブの次のステップが実行されます。
1. ジョブが正常に完了すると、アクションは `path` ディレクトリのコンテンツを含んだ新しいキャッシュを自動的に作成します。

キャッシュ照合プロセスの詳細については、「[キャッシュキーのマッチング](#matching-a-cache-key)」を参照してください。

### `cache` アクションの使用例

次の例では、`package-lock.json` ファイル内のパッケージが変更されたとき、またはランナーのオペレーティング システムが変更されたときに、新しいキャッシュを作成します。 キャッシュ キーは、コンテキストと式を使用して、ランナーのオペレーティング システムと `package-lock.json` ファイルの SHA-256 ハッシュを含むキーを生成します。

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

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
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

### コンテキストを使ったキャッシュキーの作成

キャッシュキーには、コンテキスト、関数、リテラル、{% data variables.product.prodname_actions %}がサポートする演算子を含めることができます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」および「[式](/actions/learn-github-actions/expressions)」を参照してください。

式を使用して `key` を作成すると、依存関係が変更されたときに新しいキャッシュを自動的に作成できます。

たとえば、npm `package-lock.json` ファイルのハッシュを計算する式を使用して `key` を作成できます。 その場合、`package-lock.json` ファイルを構成する依存関係が変更されると、キャッシュ キーが変更され、新しいキャッシュが自動的に作成されます。

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} は、式 `hash "package-lock.json"` を評価して最終的な `key` を導き出します。

```yaml
npm-d5ea0750
```

### `cache` アクションの出力の使用

`cache` アクションの出力を使用すると、キャッシュ ヒットやキャッシュ ミスが発生したどうかに基づいて操作を実行することができます。 指定した `key` のキャッシュに完全一致が見つかった場合、`cache-hit` の出力は `true` に設定されます。

上記のワークフロー例では、キャッシュ ミスが発生した場合に、Node モジュールの状態をリストする手順があります。

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## キャッシュキーのマッチング

`cache` アクションは、最初にワークフロー実行を含むブランチで、`key` とキャッシュ "_バージョン_" のキャッシュ ヒットを検索します。 ヒットがない場合は、`restore-keys` と "_バージョン_" を検索します。 それでも現在のブランチにヒットがない場合、`cache` アクションは既定のブランチに対して同じ手順を再試行します。 検索中はスコープの制限が適用されることに注意してください。 詳しくは、「[キャッシュへのアクセスについての制限](#restrictions-for-accessing-a-cache)」を参照してください。

キャッシュ バージョンは、キャッシュの作成時に使用された `path` と圧縮ツールのメタデータを使って、キャッシュにスタンプを付ける方法です。 これにより、使用するワークフロー実行が、実際に圧縮を解除して使用できるキャッシュと一意に一致することが保証されます。 詳しくは、Actions Cache に関するドキュメントの「[Cache Version (キャッシュ バージョン)](https://github.com/actions/cache#cache-version)」を参照してください。

`restore-keys` では、`key` でキャッシュ ミスが発生した場合に使用する代替復元キーのリストを指定できます。 特定の度合いが強いものから弱いものへ並べて複数のリストアキーを作成できます。 `cache` アクションは `restore-keys` を順番に検索します。 キーが直接マッチしなかった場合、アクションはリストアキーでプレフィックスされたキーを検索します。 リストアキーに対して複数の部分一致があった場合、アクションは最も最近に作成されたキャッシュを返します。

### 複数のリストアキーの利用例

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

ランナーは式を評価し、次の `restore-keys` に解決します。

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

復元キー `npm-feature-` は、文字列 `npm-feature-` で始まるすべてのキーと一致します。 たとえば、`npm-feature-fd3052de` および `npm-feature-a9b253ff` の両方のキーと復元キーが一致します。 最も最近の期日に作成されたキャッシュが使われます。 この例でのキーは、以下の順序で検索されます。

1. **`npm-feature-d5ea0750`** は特定のハッシュと一致します。
1. **`npm-feature-`** は `npm-feature-` というプレフィックスが付いたキャッシュ キーと一致します。
1. **`npm-`** は `npm-` というプレフィックスが付いたすべてのキーと一致します。

#### 検索の優先度の例

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

たとえば、pull request が `feature` ブランチを含んでいて、既定のブランチ (`main`) をターゲットとしている場合、アクションは `key` と `restore-keys` を次の順序で検索します。

1. `feature` ブランチ内のキー `npm-feature-d5ea0750`
1. `feature` ブランチ内のキー `npm-feature-`
1. `feature` ブランチ内のキー `npm-`
1. `main` ブランチ内のキー `npm-feature-d5ea0750`
1. `main` ブランチ内のキー `npm-feature-`
1. `main` ブランチ内のキー `npm-`

## 利用制限と退去のポリシー

{% data variables.product.prodname_dotcom %}は、7日間以上アクセスされていないキャッシュエントリを削除します。 保存できるキャッシュの数に制限はありませんが、リポジトリ内のすべてのキャッシュの合計サイズは制限されています{% ifversion actions-cache-policy-apis %}。 既定では、リポジトリあたり 10 GB の制限ですが、この制限は、エンタープライズ所有者やリポジトリ管理者が設定したポリシーによって変わる場合があります。{% else %} (最大 10 GB)。{% endif %} 

{% data reusables.actions.cache-eviction-process %} {% ifversion actions-cache-ui %}キャッシュの削除プロセスが原因で、キャッシュのスラッシングが発生する場合があります。その場合は、キャッシュが高い頻度で作成および削除されます。 これを軽減するには、リポジトリのキャッシュを確認し、修正手順を実行できます (特定のワークフローからキャッシュを削除するなど)。 詳細については、「[キャッシュの管理](#managing-caches)」を参照してください。{% endif %}{% ifversion actions-cache-admin-ui %}リポジトリのキャッシュ サイズ制限を増やすこともできます。 詳細については、「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)」を参照してください。

{% elsif actions-cache-policy-apis %}

リポジトリのキャッシュ サイズ制限のポリシー変更については、「[エンタープライズで {% data variables.product.prodname_actions %} のポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)」および「[リポジトリの {% data variables.product.prodname_actions %} の設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)」を参照してください。

{% endif %}

{% ifversion actions-cache-management %}

## キャッシュの管理

{% ifversion actions-cache-ui %}

ワークフローから作成されたキャッシュを管理する場合、次の操作を実行できます。

- リポジトリの全キャッシュ エントリの一覧を表示する。
- 特定のメタデータを使って、キャッシュの一覧のフィルター処理と並べ替えを行う (キャッシュ サイズ、作成日時、最終アクセス日時など)。
- リポジトリからキャッシュ エントリを削除する。
- リポジトリと組織の集計されたキャッシュ使用状況を監視する。

リポジトリのキャッシュを管理する方法は複数あります。

- 以下に示すように、{% data variables.product.prodname_dotcom %} Web インターフェイスを使う。
- REST API を使う。 詳しくは、「[{% data variables.product.prodname_actions %} Cache](/rest/actions/cache)」REST API ドキュメントを参照してください。
- {% data variables.product.prodname_cli %} 拡張機能をインストールして、コマンド ラインからキャッシュを管理する。 詳細については、「[gh-actions-cache](https://github.com/actions/gh-actions-cache)」拡張機能を参照してください。

{% else %}

{% data variables.product.product_name %} REST API を使用してキャッシュを管理できます。 {% ifversion actions-cache-list-delete-apis %}API を使って、キャッシュ エントリの一覧表示と削除を行い、キャッシュの使用状況を確認できます。{% elsif actions-cache-management %}現時点では、API を使ってキャッシュの使用状況を確認できます。今後の更新で、さらに多くの機能が追加される予定です。{% endif %}詳しくは、REST API のドキュメント「[{% data variables.product.prodname_actions %} キャッシュ](/rest/actions/cache)」をご覧ください。

{% data variables.product.prodname_cli %} 拡張機能をインストールして、コマンド ラインからキャッシュを管理することもできます。 拡張機能について詳しくは、[拡張機能のドキュメント](https://github.com/actions/gh-actions-cache#readme)を参照してください。 {% data variables.product.prodname_cli %} 拡張機能について詳しくは、「[GitHub CLI 拡張機能を使用する](/github-cli/github-cli/using-github-cli-extensions)」を参照してください。

{% endif %}

{% ifversion actions-cache-ui %}

### キャッシュ エントリの表示

Web インターフェイスを使って、リポジトリのキャッシュ エントリの一覧を表示できます。 キャッシュの一覧では、各キャッシュで使用されているディスク領域の量、キャッシュが作成された日時、キャッシュが最後に使用された日時を確認できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. リポジトリのキャッシュ エントリの一覧を確認します。

   * 特定のブランチ用に使用されるキャッシュ エントリを検索するには、 **[Branch]** ドロップダウン メニューをクリックして、ブランチを選択します。 キャッシュの一覧に、選択したブランチ用に使用されるすべてのキャッシュが表示されます。
   * 特定のキャッシュ キーを持つキャッシュ エントリを検索するには、 **[Filter caches]** フィールドで構文 `key: key-name` を使用します。 キャッシュの一覧に、そのキーが使用されたすべてのブランチのキャッシュが表示されます。

   ![キャッシュ エントリの一覧のスクリーンショット](/assets/images/help/repository/actions-cache-entry-list.png)

### キャッシュ エントリの削除

リポジトリへの `write` アクセス権を持つユーザーは、{% data variables.product.prodname_dotcom %} Web インターフェイスを使ってキャッシュ エントリを削除できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. 削除するキャッシュ エントリの右側にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。 

   ![キャッシュ エントリの一覧のスクリーンショット](/assets/images/help/repository/actions-cache-delete.png)

{% endif %}

{% endif %}
