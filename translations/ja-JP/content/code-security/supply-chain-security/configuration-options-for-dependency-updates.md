---
title: 依存関係の更新の設定オプション
intro: '{% data variables.product.prodname_dependabot %} がリポジトリを維持する方法をカスタマイズする場合に使用可能なすべてのオプションの詳細情報。'
permissions: 'リポジトリへの書き込み権限を持つユーザは、リポジトリの {% data variables.product.prodname_dependabot %} を設定できます。'
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
topics:
  - repositories
---

{% data reusables.dependabot.beta-note %}

### *dependabot.yml* ファイルについて

{% data variables.product.prodname_dependabot %} の設定ファイルである *dependabot.yml* では YAML 構文を使用します。 YAMLについて詳しくなく、学んでいきたい場合は、「[Learn YAML in five minutes (5分で学ぶYAML)](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)」をお読みください。

このファイルは、リポジトリの `.github` ディレクトリに保存する必要があります。 *dependabot.yml* ファイルを追加または更新すると、即座にバージョン更新を確認します。 セキュリティアップデートに影響するオプションは、次にセキュリティアラートがセキュリティアップデートのためのプルリクエストをトリガーするときにも使用されます。 詳しい情報については、「[バージョン更新の有効化と無効化](/github/administering-a-repository/enabling-and-disabling-version-updates)」および「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。

*dependabot.yml* ファイルには、必須の最上位キーに `version` と `updates` の 2 つがあります。 You can, optionally, include a top-level `registries` key. The file must start with `version: 2`.

### Configuration options for updates

The top-level `updates` key is mandatory. You use it to configure how {% data variables.product.prodname_dependabot %} updates the versions or your project's dependencies. Each entry configures the update settings for a particular package manager. You can use the following options.

| Option                                                                     |  必須   | 説明                                                                                  |
|:-------------------------------------------------------------------------- |:-----:|:----------------------------------------------------------------------------------- |
| [`package-ecosystem`](#package-ecosystem)                                  | **X** | 使用するパッケージマネージャー                                                                     |
| [`directory`](#directory)                                                  | **X** | パッケージマニフェストの場所                                                                      |
| [`schedule.interval`](#scheduleinterval)                                   | **X** | 更新を確認する頻度                                                                           |
| [`allow`](#allow)                                                          |       | 許可する更新をカスタマイズする                                                                     |
| [`assignees`](#assignees)                                                  |       | プルリクエストのアサイン担当者                                                                     |
| [`commit-message`](#commit-message)                                        |       | コミットメッセージの環境設定                                                                      |
| [`ignore`](#ignore)                                                        |       | 特定の依存関係またはバージョンを無視する                                                                |
| [`insecure-external-code-execution`](#insecure-external-code-execution)    |       | Allow or deny code execution in manifest files                                      |
| [`labels`](#labels)                                                        |       | プルリクエストに設定するラベル                                                                     |
| [`マイルストーン`](#milestone)                                                    |       | プルリクエストに設定するマイルストーン                                                                 |
| [`open-pull-requests-limit`](#open-pull-requests-limit)                    |       | バージョン更新時のオープンなプルリクエスト数を制限する                                                         |
| [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator) |       | プルリクエストブランチ名の区切り文字を変更する                                                             |
| [`rebase-strategy`](#rebase-strategy)                                      |       | 自動リベースを無効にする                                                                        |
| [`registries`](#registries)                                                |       | Private registries that {% data variables.product.prodname_dependabot %} can access |
| [`reviewers`](#reviewers)                                                  |       | プルリクエストのレビュー担当者                                                                     |
| [`schedule.day`](#scheduleday)                                             |       | 更新を確認する曜日                                                                           |
| [`schedule.time`](#scheduletime)                                           |       | 更新を確認する時刻 (hh:mm)                                                                   |
| [`schedule.timezone`](#scheduletimezone)                                   |       | 時刻のタイムゾーン（ゾーン識別子）                                                                   |
| [`target-branch`](#target-branch)                                          |       | プルリクエストを作成するブランチ                                                                    |
| [`vendor`](#vendor)                                                        |       | Update vendored or cached dependencies                                              |
| [`versioning-strategy`](#versioning-strategy)                              |       | マニフェストのバージョン要件の更新方法                                                                 |

これらのオプションは、次のようなカテゴリに幅広く適合しています。

- すべての設定に含める必要がある必須のセットアップオプション: [`package-ecosystem`](#package-ecosystem)、 [`directory`](#directory)、[`schedule.interval`](#scheduleinterval)
- 更新スケジュールをカスタマイズするためのオプション: [`schedule.time`](#scheduletime)、[`schedule.timezone`](#scheduletimezone)、 [`schedule.day`](#scheduleday)
- Options to control which dependencies are updated: [`allow`](#allow), [`ignore`](#ignore), [`vendor`](#vendor).
- プルリクエストにメタデータを追加するオプション: [`reviewers`](#reviewers)、[`assignees`](#assignees)、[`labels`](#labels)、 [`milestone`](#milestone)
- プルリクエストの動作を変更するオプション: [`target-branch`](#target-branch)、[`versioning-strategy`](#versioning-strategy)、[`commit-message`](#commit-message)、[`rebase-strategy`](#rebase-strategy)、[`pull-request-branch-name.separator`](#pull-request-branch-nameseparator)

さらに、[`open-pull-requests-limit`](#open-pull-requests-limit) オプションでは、{% data variables.product.prodname_dependabot %} が開くことができるバージョン更新のプルリクエストの最大数を変更できます。

{% note %}

**注釈:** これらの設定オプションの一部は、脆弱性のあるパッケージマニフェストのセキュリティアップデートのために発行されたプルリクエストにも影響を与える可能性があります。

脆弱性のあるパッケージマニフェストのセキュリティアップデートは、デフォルトブランチでのみ発生します。 設定オプションが同じブランチに設定され（`target-branch` を使用しない場合は true）、脆弱性のあるマニフェストの `package-ecosystem` と `directory` を指定している場合、セキュリティアップデートのプルリクエストで関連オプションが使用されます。

一般に、セキュリティアップデートでは、メタデータの追加や動作の変更など、プルリクエストに影響する設定オプションが使用されます。 セキュリティアップデートに関する詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。

{% endnote %}

#### `package-ecosystem`

**必須**。 You add one `package-ecosystem` element for each package manager that you want {% data variables.product.prodname_dependabot %} to monitor for new versions. リポジトリには、これらの各パッケージマネージャーの依存関係マニフェストまたはロックファイルも含まれている必要があります。 If you want to enable vendoring for a package manager that supports it, the vendored dependencies must be located in the required directory. For more information, see [`vendor`](#vendor) below.

{% data reusables.dependabot.supported-package-managers %}

```yaml
# 3つのパッケージマネージャー用の基本設定

version: 2
updates:

  # GitHub アクションの依存関係を維持する
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # npm の依存関係を維持する
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Composer の依存関係を維持する
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

#### `directory`

**必須**。 You must define the location of the package manifests for each package manager (for example, the *package.json* or *Gemfile*). GitHub Actions 以外のすべてのエコシステムで、リポジトリのルートに対する相対ディレクトリを定義します。 GitHub Actions の場合、ディレクトリを `/` に設定し、`.github/workflows` でワークフローファイルを確認します。

```yaml
# 各パッケージマネージャーのマニフェストファイルの場所を指定する

version: 2
updates:
  - package-ecosystem: "composer"
    # リポジトリのルートに保存されているファイル
    directory: "/"
    schedule:
      interval: "daily"

  - package-ecosystem: "npm"
    # 「app」ディレクトリに保存されているファイル
    directory: "/app"
    schedule:
      interval: "daily"

  - package-ecosystem: "github-actions"
    # 「.github / workflows」のデフォルトの場所に
    # 保存されたワークフローファイル
    directory: "/"
    schedule:
      interval: "daily"
```

#### `schedule.interval`

**必須**。 You must define how often to check for new versions for each package manager. デフォルトでは、午前 5 時 (UTC) に設定されています。 これを変更するには、[`schedule.time`](#scheduletime) と [`schedule.timezone`](#scheduletimezone) を使用します。

- `毎日`: 月曜日～金曜日の平日に実行されます。
- `毎週`: 毎週 1 回実行されます。 デフォルトでは月曜日に設定されています。 これを変更するには、[`schedule.day`](#scheduleday) を使用します。
- `毎月`: 毎月 1 回実行されます。 その月の最初の日に設定されています。

```yaml
# 各パッケージマネージャーの更新スケジュールを設定する

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # GitHub Actions の更新を毎週確認する
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # 週に 1 回、Composer が管理する更新を確認する
      interval: "weekly"
```

{% note %}

**Note**: `schedule` defines when {% data variables.product.prodname_dependabot %} attempts a new update. However, it's not the only time you may receive pull requests. Updates can be triggered based on changes to your `dependabot.yml` file, changes to your manifest file(s) after a failed update, or {% data variables.product.prodname_dependabot_security_updates %}. For more information, see "[Frequency of {% data variables.product.prodname_dependabot %} pull requests](/github/administering-a-repository/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)" and "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

{% endnote %}

#### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

更新する依存関係をカスタマイズするには、`allow` オプションを使用します。 これは、脆弱性のある依存関係のセキュリティアップデートに影響しません。 次のオプションを使用できます。

- `dependency-name`: 名前が一致する依存関係の更新を許可するために使用し、必要に応じて `*` を使用して 0 文字以上の文字と一致させます。 Java の依存関係の場合、`dependency-name` 属性のフォーマットは `groupId:artifactId` です（`org.kohsuke:github-api` など）。
- `dependency-type`: 特定の種類の依存関係の更新を許可するために使用します。

  | 依存関係の種類       | パッケージマネージャーによるサポート                              | 更新の許可                                                                         |
  | ------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
  | `direct`      | すべて                                             | 明示的に定義されたすべての依存関係。                                                            |
  | `indirect`    | `bundler`、`pip`、`composer`、`cargo`              | 直接依存関係の依存関係 (サブ依存関係、または過渡依存関係とも呼ばれる)。                                         |
  | `すべて`         | すべて                                             | 明示的に定義されたすべての依存関係。 `bundler`、`pip`、`composer`、`cargo` についても、直接依存関係の依存関係になります。 |
  | `production`  | `bundler`、`composer`、`mix`, `maven`、`npm`、`pip` | [Product dependency group] 内の依存関係のみ。                                          |
  | `development` | `bundler`、`composer`、`mix`, `maven`、`npm`、`pip` | [Development dependency group] 内の依存関係のみ。                                      |

```yaml
# Use `allow` to specify which dependencies to maintain

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow updates for Lodash
      - dependency-name: "lodash"
      # Allow updates for React and any packages starting "react"
      - dependency-name: "react*"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow both direct and indirect updates for all packages
      - dependency-type: "all"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow only direct updates for
      # Django and any packages starting "django"
      - dependency-name: "django*"
        dependency-type: "direct"
      # Allow only production updates for Sphinx
      - dependency-name: "sphinx"
        dependency-type: "production"
```

#### `assignees`

`assignees` を使用して、パッケージマネージャーに対して発行されたすべてのプルリクエストの個々の担当者を指定します。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# プルリクエストの担当者を指定する

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # 担当者を追加する
    assignees:
      - "octocat"
```

#### `commit-message`

デフォルトでは、{% data variables.product.prodname_dependabot %} はコミットメッセージの設定を検出し、同様のパターンを使用しようとします。 `commit-message` オプションを使用して、環境設定を明示的に指定します。

対応しているオプション

- `prefix` では、すべてのコミットメッセージのプレフィックスを指定します。
- `prefix-development` は、Development の依存関係グループ内の依存関係を更新するすべてのコミットメッセージに個別のプレフィックスを指定します。 このオプションの値を指定すると、`prefix` は、Production の依存関係グループの依存関係の更新にのみ使用されます。 これは、`bundler`、`composer`、`mix`、`maven`、`npm`、`pip` に対応しています。
- `include: "scope"` では、任意のプレフィックスの後に、コミットで更新された依存関係のリストが続くことを指定します。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customize commit messages

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    commit-message:
      # Prefix all commit messages with "npm"
      prefix: "npm"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Prefix all commit messages with "Composer"
    # include a list of updated dependencies
    commit-message:
      prefix: "Composer"
      include: "scope"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Include a list of updated dependencies
    # with a prefix determined by the dependency group
    commit-message:
      prefix: "pip prod"
      prefix-development: "pip dev"
      include: "scope"
```

#### `ignore`

{% data reusables.dependabot.warning-ignore-option %}

##### ignore の既存の設定を確認する

設定ファイルに `ignore` オプションを追加する前に、セキュリティアップデートまたはバージョンアップデートのプルリクエストで `@dependabot ignore` コマンドのいずれかを以前に使用したことがあるかどうかを確認します。 {% data variables.product.prodname_dependabot %} は、各パッケージマネージャーのこれらの環境設定を一元的に保存し、この情報は `ignore` オプションによって上書きされます。 `@dependabot ignore` コマンドに関する詳細については、「[依存関係の更新に関するプルリクエストを管理する](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)」をご覧ください。

リポジトリで `"@dependabot ignore" in:comments` を検索して、リポジトリに設定が保存されているかどうかを確認できます。 検索結果でプルリクエストを確認する場合、無視された依存関係またはバージョンを設定ファイルで指定するかどうかを決めることができます。

##### 無視する依存関係とバージョンを指定する

{% data reusables.dependabot.default-dependencies-allow-ignore %}

`ignore` オプションを使用して、更新する依存関係をカスタマイズできます。 `ignore` オプションは、次のオプションに対応しています。

- `dependency-name`: 名前が一致する依存関係の更新を無視するために使用し、必要に応じて `*` を使用して 0 文字以上の文字と一致させます。 Java の依存関係の場合、`dependency-name` 属性のフォーマットは `groupId:artifactId` です（`org.kohsuke:github-api` など）。
- `versions`: 特定のバージョンまたはバージョンの範囲を無視するために使用します。 範囲を定義する場合は、パッケージマネージャーの標準パターンを使用します（例: npm の場合は `^1.0.0`、Bundler の場合は `~> 2.0`）。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Use `ignore` to specify dependencies that should not be updated 

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "express"
        # For Express, ignore all updates for version 4 and 5
        versions: ["4.x", "5.x"]
        # For Lodash, ignore all updates
      - dependency-name: "lodash"
```

{% note %}

**Note**: {% data variables.product.prodname_dependabot %} can only run version updates on manifest or lock files if it can access all of the dependencies in the file, even if you add inaccessible dependencies to the `ignore` option of your configuration file. For more information, see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)" and "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)."


{% endnote %}

#### `insecure-external-code-execution`

Package managers with the `package-ecosystem` values `bundler`, `mix`, and `pip` may execute external code in the manifest as part of the version update process. This might allow a compromised package to steal credentials or gain access to configured registries. When you add a [`registries`](#registries) setting within an `updates` configuration, {% data variables.product.prodname_dependabot %} automatically prevents external code execution, in which case the version update may fail. You can choose to override this behavior and allow external code execution for `bundler`, `mix`, and `pip` package managers by setting `insecure-external-code-execution` to `allow`.

You can explicitly deny external code execution, irrespective of whether there is a `registries` setting for this update configuration, by setting `insecure-external-code-execution` to `deny`.

{% raw %}
```yaml
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
```
{% endraw %}

#### `labels`

{% data reusables.dependabot.default-labels %}

`labels` を使用してデフォルトのラベルを上書きし、パッケージマネージャーに対して発行されたすべてのプルリクエストに代替のラベルを指定します。 これらのラベルのいずれかがリポジトリで定義されていない場合は無視されます。 デフォルトのラベルを含むすべてのラベルを無効にするには、`labels: [ ]` を使用します。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# プルリクエストのラベルを指定する
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # npm プルリクエストのラベルを指定する
    labels:
      - "npm"
      - "dependencies"
```

#### `マイルストーン`

`milestone` を使用して、パッケージマネージャーに対して発行されたすべてのプルリクエストをマイルストーンに関連付けます。 ラベルではなくマイルストーンの数値識別子を指定する必要があります。 マイルストーンを表示する場合、`milestone` の後の、ページ URL の最後の部分が識別子になります。 たとえば、`https://github.com/<org>/<repo>/milestone/3` などです。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# プルリクエストのマイルストーンを指定する

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # プルリクエストをマイルストーン「4」に関連付ける
    milestone: 4
```

#### `open-pull-requests-limit`

デフォルトでは、{% data variables.product.prodname_dependabot %} は、バージョン更新に対して最大 5 つのプルリクエストをオープンします。 Once there are five open pull requests, new requests are blocked until you merge or close some of the open requests, after which new pull requests can be opened on subsequent updates. この制限を変更するには、`open-pull-requests-limit` を使用します。 これは、パッケージマネージャーのバージョン更新を一時的に無効にする簡単な方法としても使用できます。

このオプションはセキュリティアップデートに影響を与えません。セキュリティアップデートには、10 件のオープンプルリクエストの内部制限があります。

```yaml
# Specify the number of open pull requests allowed

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Allow up to 10 open pull requests for pip dependencies
    open-pull-requests-limit: 10
```

#### `pull-request-branch-name.separator`

{% data variables.product.prodname_dependabot %} は、プルリクエストごとにブランチを生成します。 各ブランチ名には、`dependabot` および更新されたパッケージマネージャーと依存関係が含まれます。 デフォルトでは、これらの部分は `/` 記号で区切られています。たとえば、`dependabot/npm_and_yarn/next_js/acorn-6.4.1` のような形です。

別の区切り文字を指定するには、 `pull-request-branch-name.separator` を使用します。 `"-"`、`_`、`/` などが使用できます。 ハイフン記号は、引用符で囲む必要があります。囲まない場合、空の YAML リストを開始すると解釈されます。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a different separator for branch names

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      # for example, `dependabot-npm_and_yarn-next_js-acorn-6.4.1`
      separator: "-"
```

#### `rebase-strategy`

デフォルトでは、{% data variables.product.prodname_dependabot %} は、競合を検出すると、オープンなプルリクエストを自動的にリベースします。 この動作を無効にするには、`rebase-strategy` を使用します。

利用可能なリベース戦略

- `disabled` で自動リベースを無効にします。
- `auto` をデフォルトの動作に使用し、競合が検出されたときにオープンなプルリクエストをリベースします。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disable automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

#### `registries`

To allow {% data variables.product.prodname_dependabot %} to access a private package registry when performing a version update, you must include a `registries` setting within the relevant `updates` configuration. You can allow all of the defined registries to be used by setting `registries` to `"*"`. Alternatively, you can list the registries that the update can use. To do this, use the name of the registry as defined in the top-level `registries` section of the _dependabot.yml_ file.

To allow {% data variables.product.prodname_dependabot %} to use `bundler`, `mix`, and `pip` package managers to update dependencies in private registries, you can choose to allow external code execution. For more information, see [`insecure-external-code-execution`](#insecure-external-code-execution).

{% raw %}
```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries 
# when updating dependency versions for this ecosystem

version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
updates:
  - package-ecosystem: "gitsubmodule"
    directory: "/"
    registries:
    - maven-github
    schedule:
      interval: "monthly"
```
{% endraw %}

#### `reviewers`

`reviewers` を使用して、パッケージマネージャーに対して発行されたすべてのプルリクエストの個々のレビュー担当者またはレビュー担当者の Team を指定します。 チームを@メンションしている場合と同様に、Organization を含む完全な Team 名を使用する必要があります。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# プルリクエストのレビュー担当者を指定する

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # レビュー担当者を追加する
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

#### `schedule.day`

更新スケジュールを `weekly` で設定すると、デフォルトで {% data variables.product.prodname_dependabot %} は月曜日の 5:00 (UTC) に新しいバージョンをチェックします。 `schedule.day` を使用して、更新をチェックする代替日を指定します。

サポートされている値

- `monday`
- `tuesday`
- `wednesday`
- `thursday`
- `friday`
- `saturday`
- `sunday`

```yaml
# 週次のチェック日を指定する

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # 毎週日曜日に npm の更新をチェックする
      day: "sunday"
```

#### `schedule.time`

デフォルトでは、{% data variables.product.prodname_dependabot %} は 5:00(UTC) に新しいバージョンをチェックします。 `schedule.time` を使用して、更新をチェックする別の時刻を指定します（形式: `hh:mm`）。

```yaml
# チェックする時刻を設定する
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # 午前 9 時 (UTC) に npm の更新をチェックする
      time: "09:00"
```

#### `schedule.timezone`

デフォルトでは、{% data variables.product.prodname_dependabot %} は 5:00(UTC) に新しいバージョンをチェックします。 別のタイムゾーンを指定するには、`schedule.timezone` を使用します。 タイムゾーン識別子は、[iana](https://www.iana.org/time-zones) が管理するタイムゾーンデータベースのものである必要があります。 詳しい情報については、[List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) を参照してください。

```yaml
# チェック時のタイムゾーンを指定する

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # 日本標準時 (UTC +09:00) を使用する
      timezone: "Asia/Tokyo"
```

#### `target-branch`

デフォルトでは、{% data variables.product.prodname_dependabot %} はデフォルトのブランチでマニフェストファイルをチェックし、このブランチに対するバージョン更新のプルリクエストを発行します。 `target-branch` を使用して、マニフェストファイルとプルリクエストに別のブランチを指定します。 このオプションを使用すると、このパッケージマネージャーの設定は、セキュリティアップデートのために発行されたプルリクエストに影響しなくなります。

```yaml
# pip のプルリクエストにデフォルト以外のブランチを指定する

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # 「develop」ブランチに対して pip する
    # バージョン更新のプルリクエストを発行する
    target-branch: "develop"
    # バージョン更新のみのプルリクエストのラベル
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # 毎週日曜日に npm の更新を確認する
      day: "sunday"
    # セキュリティおよびバージョン更新に対するプルリクエストのラベル
    labels:
      - "npm dependencies"
```

#### `vendor`

Use the `vendor` option to tell {% data variables.product.prodname_dependabot %} to vendor dependencies when updating them. Don't use this option if you're using `gomod` as {% data variables.product.prodname_dependabot %} automatically detects vendoring for this tool.

```yaml
# Configure version updates for both dependencies defined in manifests and vendored dependencies

version: 2
updates:
  - package-ecosystem: "bundler"
    # Raise pull requests to update vendored dependencies that are checked in to the repository
    vendor: true
    directory: "/"
    schedule:
      interval: "weekly"
```

{% data variables.product.prodname_dependabot %} only updates the vendored dependencies located in specific directories in a repository.

| パッケージマネージャー | Required file path for vendored dependencies                                                      | 詳細情報                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `bundler`   | The dependencies must be in the _vendor/cache_ directory.</br>Other file paths are not supported. | [`bundle cache` documentation](https://bundler.io/man/bundle-cache.1.html) |
| `gomod`     | No path requirement (dependencies are usually located in the _vendor_ directory)                  | [`go mod vendor` documentation](https://golang.org/ref/mod#go-mod-vendor)  |


#### `versioning-strategy`

{% data variables.product.prodname_dependabot %} がマニフェストファイルを編集してバージョンを更新する場合、次の全体的な戦略を使用します。

- アプリケーションでは、バージョン要件が増えます（npm、pip、Composer など）。
- ライブラリでは、バージョンの範囲が広がります（Bundler や Cargo など）。

サポートされているパッケージマネージャーでこの動作を変更するには、`version-stratege` オプションを使用します。

{% data reusables.dependabot.option-affects-security-updates %}

利用可能な更新戦略

| Option                  | サポート                                           | アクション                                                                              |
| ----------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| `lockfile-only`         | `bundler`、`cargo`、`composer`、`mix`、`npm`、`pip` | Only create pull requests to update lockfiles. パッケージマニフェストの変更が必要になる新しいバージョンは無視します。 |
| `auto`                  | `bundler`、`cargo`、`composer`、`mix`、`npm`、`pip` | 前述のデフォルトの戦略に従います。                                                                  |
| `widen`                 | `composer`、`npm`                               | 可能であれば、バージョン要件を緩和して、新旧両方のバージョンを含めます。                                               |
| `increase`              | `bundler`、`composer`、`npm`                     | 新しいバージョンに一致するように、常にバージョン要件を増やします。                                                  |
| `increase-if-necessary` | `bundler`、`composer`、`npm`                     | 新しいバージョンで必要な場合にのみ、バージョン要件を増やします。                                                   |

```yaml
# Customize the manifest version strategy

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Update the npm manifest file to relax
    # the version requirements
    versioning-strategy: widen

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Increase the version requirements for Composer
    # only when required
    versioning-strategy: increase-if-necessary

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Only allow updates to the lockfile for pip and
    # ignore any version updates that affect the manifest
    versioning-strategy: lockfile-only
```

### Configuration options for private registries

The top-level `registries` key is optional. It allows you to specify authentication details that {% data variables.product.prodname_dependabot %} can use to access private package registries.

{% note %}

**Note:** Private registries behind firewalls on private networks are not supported.

{% endnote %}

The value of the `registries` key is an associative array, each element of which consists of a key that identifies a particular registry and a value which is an associative array that specifies the settings required to access that registry. The following *dependabot.yml* file, configures a registry identified as `dockerhub` in the `registries` section of the file and then references this in the `updates` section of the file.

{% raw %}
```yaml
# Minimal settings to update dependencies in one private registry

version: 2
registries:
  dockerhub: # Define access for a private registry 
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "docker"
    directory: "/docker-registry/dockerhub"
    registries:
    - dockerhub # Allow version updates for dependencies in this registry
    schedule:
      interval: "monthly"
```
{% endraw %}

You use the following options to specify access settings. Registry settings must contain a `type` and a `url`, and typically either a `username` and `password` combination or a `token`.

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 説明                                                                                                                                                                                                                                                                              |
|:------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                 | Identifies the type of registry. See the full list of types below.                                                                                                                                                                                                              |
| `url`                                                                                                  | The URL to use to access the dependencies in this registry. The protocol is optional. If not specified, `https://` is assumed. {% data variables.product.prodname_dependabot %} adds or ignores trailing slashes as required.                                                   |
| `ユーザ名`                                                                                                 | The username that {% data variables.product.prodname_dependabot %} uses to access the registry.                                                                                                                                                                                 |
| `パスワード`                                                                                                | A reference to a {% data variables.product.prodname_dependabot %} secret containing the password for the specified user. For more information, see "[Managing encrypted secrets for Dependabot](/github/administering-a-repository/managing-encrypted-secrets-for-dependabot)." |
| `トークン`                                                                                                 | A reference to a {% data variables.product.prodname_dependabot %} secret containing an access token for this registry. For more information, see "[Managing encrypted secrets for Dependabot](/github/administering-a-repository/managing-encrypted-secrets-for-dependabot)."   |
| `replaces-base`                                                                                        | For registries with `type: python-index`, if the boolean value is `true`, pip resolves dependencies by using the specified URL rather than the base URL of the Python Package Index (by default `https://pypi.org/simple`).                                                     |


Each configuration `type` requires you to provide particular settings. Some types allow more than one way to connect. The following sections provide details of the settings you should use for each `type`.

#### `composer-repository`

The `composer-repository` type supports username and password.

{% raw %}
```yaml
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
```
{% endraw %}

#### `docker-registry`

`docker-registry` タイプは、ユーザ名とパスワードをサポートします。

{% raw %}
```yaml
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
```
{% endraw %}

#### `git`

`git` タイプは、ユーザ名とパスワードをサポートします。

{% raw %}
```yaml
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

#### `maven-repository`

`maven-repository` タイプは、ユーザ名とパスワード、またはトークンをサポートします。

{% raw %}
```yaml
registries:
  maven-artifactory:
    type: maven-repository
    url: https://artifactory.example.com
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

#### `npm-registry`

`npm-registry` タイプは、ユーザ名とパスワード、またはトークンをサポートします。

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

#### `nuget-feed`

`nuget-feed` タイプは、ユーザ名とパスワード、またはトークンをサポートします。

{% raw %}
```yaml
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_NUGET_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  nuget-azure-devops:
    type: nuget-feed
    url: https://pkgs.dev.azure.com/.../_packaging/My_Feed/nuget/v3/index.json
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
```
{% endraw %}

#### `python-index`

`python-index` タイプは、ユーザ名とパスワード、またはトークンをサポートします。

{% raw %}
```yaml
registries:
  python-example:
    type: python-index
    url: https://example.com/_packaging/my-feed/pypi/example
    username: octocat
    password: ${{secrets.MY_BASIC_AUTH_PASSWORD}}
    replaces-base: true
```
{% endraw %}

{% raw %}
```yaml
registries:
  python-azure:
    type: python-index
    url: https://pkgs.dev.azure.com/octocat/_packaging/my-feed/pypi/example
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
    replaces-base: true
```
{% endraw %}

#### `rubygems-server`

`rubygems-server` タイプは、ユーザ名とパスワード、またはトークンをサポートします。

{% raw %}
```yaml
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}