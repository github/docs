---
title: 依存関係の更新の設定オプション
intro: '{% data variables.product.prodname_dependabot %} がリポジトリを維持する方法をカスタマイズする場合に使用可能なすべてのオプションの詳細情報。'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
---

### *dependabot.yml* ファイルについて

{% data variables.product.prodname_dependabot %} の設定ファイルである *dependabot.yml* では YAML 構文を使用します。 YAMLについて詳しくなく、学んでいきたい場合は、「[Learn YAML in five minutes (5分で学ぶYAML)](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)」をお読みください。

このファイルは、リポジトリの `.github` ディレクトリに保存する必要があります。 *dependabot.yml* ファイルを追加または更新すると、即座にバージョン更新を確認します。 セキュリティアップデートに影響するオプションは、次にセキュリティアラートがセキュリティアップデートのためのプルリクエストをトリガーするときにも使用されます。 詳しい情報については、「[バージョン更新の有効化と無効化](/github/administering-a-repository/enabling-and-disabling-version-updates)」および「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。

*dependabot.yml* ファイルには、必須の最上位キーに `version` と `updates` の 2 つがあります。 必要に応じて、最上位に `registries` キーを含めることができます。 ファイルは、`version: 2` で始まる必要があります。

### 更新の設定オプション

最上位の `updates` キーは必須です。 これを使用することで、{% data variables.product.prodname_dependabot %} がバージョンやプロジェクトの依存性を更新する方法を設定できます。 各エントリは、特定のパッケージマネージャーの更新設定を行います。 次のオプションを使用できます。

| Option                                                                     |  必須   | 説明                                                                   |
|:-------------------------------------------------------------------------- |:-----:|:-------------------------------------------------------------------- |
| [`package-ecosystem`](#package-ecosystem)                                  | **X** | 使用するパッケージマネージャー                                                      |
| [`directory`](#directory)                                                  | **X** | パッケージマニフェストの場所                                                       |
| [`schedule.interval`](#scheduleinterval)                                   | **X** | 更新を確認する頻度                                                            |
| [`allow`](#allow)                                                          |       | 許可する更新をカスタマイズする                                                      |
| [`assignees`](#assignees)                                                  |       | プルリクエストのアサイン担当者                                                      |
| [`commit-message`](#commit-message)                                        |       | コミットメッセージの環境設定                                                       |
| [`ignore`](#ignore)                                                        |       | 特定の依存関係またはバージョンを無視する                                                 |
| [`insecure-external-code-execution`](#insecure-external-code-execution)    |       | マニフェストファイル内でコードの実行を許可または拒否する                                         |
| [`labels`](#labels)                                                        |       | プルリクエストに設定するラベル                                                      |
| [`マイルストーン`](#milestone)                                                    |       | プルリクエストに設定するマイルストーン                                                  |
| [`open-pull-requests-limit`](#open-pull-requests-limit)                    |       | バージョン更新時のオープンなプルリクエスト数を制限する                                          |
| [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator) |       | プルリクエストブランチ名の区切り文字を変更する                                              |
| [`rebase-strategy`](#rebase-strategy)                                      |       | 自動リベースを無効にする                                                         |
| [`registries`](#registries)                                                |       | {% data variables.product.prodname_dependabot %} がアクセスできるプライベートリポジトリ |
| [`reviewers`](#reviewers)                                                  |       | プルリクエストのレビュー担当者                                                      |
| [`schedule.day`](#scheduleday)                                             |       | 更新を確認する曜日                                                            |
| [`schedule.time`](#scheduletime)                                           |       | 更新を確認する時刻 (hh:mm)                                                    |
| [`schedule.timezone`](#scheduletimezone)                                   |       | 時刻のタイムゾーン（ゾーン識別子）                                                    |
| [`target-branch`](#target-branch)                                          |       | プルリクエストを作成するブランチ                                                     |
| [`vendor`](#vendor)                                                        |       | ベンダーまたはキャッシュされた依存関係を更新する                                             |
| [`versioning-strategy`](#versioning-strategy)                              |       | マニフェストのバージョン要件の更新方法                                                  |

これらのオプションは、次のようなカテゴリに幅広く適合しています。

- すべての設定に含める必要がある必須のセットアップオプション: [`package-ecosystem`](#package-ecosystem)、 [`directory`](#directory)、[`schedule.interval`](#scheduleinterval)
- 更新スケジュールをカスタマイズするためのオプション: [`schedule.time`](#scheduletime)、[`schedule.timezone`](#scheduletimezone)、 [`schedule.day`](#scheduleday)
- 更新する依存関係を制御するオプション: [`allow`](#allow)、[`ignore`](#ignore)、[`vendor`](#vendor)
- プルリクエストにメタデータを追加するオプション: [`reviewers`](#reviewers)、[`assignees`](#assignees)、[`labels`](#labels)、 [`milestone`](#milestone)
- プルリクエストの動作を変更するオプション: [`target-branch`](#target-branch)、[`versioning-strategy`](#versioning-strategy)、[`commit-message`](#commit-message)、[`rebase-strategy`](#rebase-strategy)、[`pull-request-branch-name.separator`](#pull-request-branch-nameseparator)

さらに、[`open-pull-requests-limit`](#open-pull-requests-limit) オプションでは、{% data variables.product.prodname_dependabot %} が開くことができるバージョン更新のプルリクエストの最大数を変更できます。

{% note %}

**注釈:** これらの設定オプションの一部は、脆弱性のあるパッケージマニフェストのセキュリティアップデートのために発行されたプルリクエストにも影響を与える可能性があります。

脆弱性のあるパッケージマニフェストのセキュリティアップデートは、デフォルトブランチでのみ発生します。 設定オプションが同じブランチに設定され（`target-branch` を使用しない場合は true）、脆弱性のあるマニフェストの `package-ecosystem` と `directory` を指定している場合、セキュリティアップデートのプルリクエストで関連オプションが使用されます。

一般に、セキュリティアップデートでは、メタデータの追加や動作の変更など、プルリクエストに影響する設定オプションが使用されます。 セキュリティアップデートに関する詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。

{% endnote %}

#### `package-ecosystem`

**必須**。 {% data variables.product.prodname_dependabot %} で新しいバージョンを監視するパッケージマネージャーごとに、`package-ecosystem` 要素を1つ追加してください。 リポジトリには、これらの各パッケージマネージャーの依存関係マニフェストまたはロックファイルも含まれている必要があります。 サポートするパッケージマネージャーに対してベンダリングを有効にする場合、ベンダリングされた依存関係が必須ディレクトリに存在する必要があります。 詳しい情報については、以下の [`vendor`](#vendor) を参照してください。

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

**必須**。 各パッケージマネージャー (*package.json* や *Gemfile* など) のパッケージマニフェストの場所を定義する必要があります。 GitHub Actions 以外のすべてのエコシステムで、リポジトリのルートに対する相対ディレクトリを定義します。 GitHub Actions の場合、ディレクトリを `/` に設定し、`.github/workflows` でワークフローファイルを確認します。

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

**必須**。 各パッケージマネージャーに対して、新しいバージョンを確認する頻度を定義する必要があります。 デフォルトでは、午前 5 時 (UTC) に設定されています。 これを変更するには、[`schedule.time`](#scheduletime) と [`schedule.timezone`](#scheduletimezone) を使用します。

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

**注釈**: `schedule` は、{% data variables.product.prodname_dependabot %} が新規更新を試行するタイミングを設定します。 ただし、プルリクエストを受け取るタイミングはこれだけではありません。 更新は、 `dependabot.yml` ファイルへの変更、更新失敗後のマニフェストファイルへの変更、または {% data variables.product.prodname_dependabot_security_updates %} に基づいてトリガーされることがあります。 詳しい情報については、「[{% data variables.product.prodname_dependabot %} プルリクエストの頻度](/github/administering-a-repository/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)」および「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。

{% endnote %}

#### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

更新する依存関係をカスタマイズするには、`allow` オプションを使用します。 This applies to both version and security updates. 次のオプションを使用できます。

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

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Dependencies can be ignored either by adding them to `ignore` or by using the `@dependabot ignore` command on a pull request opened by {% data variables.product.prodname_dependabot %}.

##### Creating `ignore` conditions from `@dependabot ignore`

Dependencies ignored by using the `@dependabot ignore` command are stored centrally for each package manager. If you start ignoring dependencies in the `dependabot.yml` file, these existing preferences are considered alongside the `ignore` dependencies in the configuration.

You can check whether a repository has stored `ignore` preferences by searching the repository for `"@dependabot ignore" in:comments`. If you wish to un-ignore a dependency ignored this way, re-open the pull request.

`@dependabot ignore` コマンドに関する詳細については、「[依存関係の更新に関するプルリクエストを管理する](/github/administering-a-repository/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)」をご覧ください。

##### 無視する依存関係とバージョンを指定する

`ignore` オプションを使用して、更新する依存関係をカスタマイズできます。 `ignore` オプションは、次のオプションに対応しています。

- `dependency-name`: 名前が一致する依存関係の更新を無視するために使用し、必要に応じて `*` を使用して 0 文字以上の文字と一致させます。 For Java dependencies, the format of the `dependency-name` attribute is: `groupId:artifactId` (for example: `org.kohsuke:github-api`).
- `versions`: 特定のバージョンまたはバージョンの範囲を無視するために使用します。 範囲を定義する場合は、パッケージマネージャーの標準パターンを使用します（例: npm の場合は `^1.0.0`、Bundler の場合は `~> 2.0`）。
- `update-types`—use to ignore types of updates, such as semver `major`, `minor`, or `patch` updates on version updates (for example: `version-update:semver-patch` will ignore patch updates). You can combine this with `dependency-name: *` to ignore particular `update-types` for all dependencies. Currently, `version-update:semver-major`, `version-update:semver-minor`, and `version-update:semver-patch` are the only supported options. Security updates are unaffected by this setting.

If `versions` and `update-types` are used together, {% data variables.product.prodname_dependabot %} will ignore any update in either set.

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
        # For AWS SDK, ignore all patch updates
      - dependency-name: "aws-sdk"
        update-types: ["version-update:semver-patch"]
```

{% note %}

**注釈**: 設定ファイルの `ignore` オプションにアクセス不可の依存関係を追加した場合でも、 ファイルの依存関係のすべてにアクセスできる場合には、{% data variables.product.prodname_dependabot %} は、マニフェストまたはロックされたファイルのみにバージョン更新を実行します。 For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)" and "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)."


{% endnote %}

#### `insecure-external-code-execution`

`package-ecosystem` の値が `bundler`、`mix`、および`pip` であるパッケージマネージャーは、バージョン更新プロセスの一環として間にファスト内の外部コードを実行できます。 これにより、セキュリティが侵害されたパッケージが認証情報を盗んだり、構成済みのレジストリにアクセスしたりすることが可能になる場合もあります。 `updates` 設定内で [`registries`](#registries) を追加すると、{% data variables.product.prodname_dependabot %} は自動的に外部コードの実行を防ぎ、この場合はバージョン更新が失敗することもあります。 この動作をオーバーライドし、`bundler`、`mix`、および `pip` パッケージマネージャーで外部コードの実行を許可するには、`insecure-external-code-execution` を `allow` に設定します。

`insecure-external-code-execution` を `deny` に設定することで、この更新設定に `registries` 設定があるかどうかにかかわらず、明示的に外部コードの実行を拒否できます。

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

デフォルトでは、{% data variables.product.prodname_dependabot %} は、バージョン更新に対して最大 5 つのプルリクエストをオープンします。 5 つのプルリクエストがオープンになると、オープンになっているリクエストの一部をマージまたはクローズするまで、新しいリクエストはブロックされます。オープンになっているリクエストの一部をマージまたはクローズしたら、その後の更新で新しいプルリクエストを開くことができます。 この制限を変更するには、`open-pull-requests-limit` を使用します。 これは、パッケージマネージャーのバージョン更新を一時的に無効にする簡単な方法としても使用できます。

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

By default, {% data variables.product.prodname_dependabot %} automatically rebases open pull requests when it detects any changes to the pull request. この動作を無効にするには、`rebase-strategy` を使用します。

利用可能なリベース戦略

- `disabled` で自動リベースを無効にします。
- `auto` to use the default behavior and rebase open pull requests when changes are detected.

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

バージョン更新の実行時に {% data variables.product.prodname_dependabot %} がプライベートパッケージレジストリにアクセスできるようにするには、関係する `updates` 設定に `registries` 設定を含める必要があります。 `registries` を `"*"` に設定することで、定義されたリポジトリをすべて使用できるようにすることができます。 また、更新が使用できるレジストリをリストすることもできます。 これを行うには、_dependabot.yml_ ファイルの最上位の `registries` セクションで定義されているレジストリの名前を使用します。

{% data variables.product.prodname_dependabot %} が `bundler`、`mix`、および `pip` パッケージマネージャーを使用してプライベートレジストリの依存関係を更新できるようにするため、外部コードの実行を許可できます。 詳しい情報については、[`insecure-external-code-execution`](#insecure-external-code-execution) を参照してください。

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries 
# when updating dependency versions for this ecosystem

{% raw %}
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
{% endraw %}
```

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

`vendor` オプションは、依存関係を更新する際に、{% data variables.product.prodname_dependabot %} にベンダリングを指示するために使用します。 `gomod` を使用している場合は、{% data variables.product.prodname_dependabot %} がこのツールに対するベンダリングを自動的に検出するため、このオプションを使用しないでください。

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

{% data variables.product.prodname_dependabot %} は、リポジトリの特定の場所にあるベンダリングされた依存関係のみを更新します。

| パッケージマネージャー | ベンダリングされた依存関係のための必須パス                                              | 詳細情報                                                                |
| ----------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| `bundler`   | 依存関係は _vendor/cache_ ディレクトリにある必要があります。</br>その他のファイルパスはサポートされていません。 | [`bundle cache` ドキュメント](https://bundler.io/man/bundle-cache.1.html) |
| `gomod`     | パス要件なし (通常、依存関係は _vendor_ ディレクトリ内に存在)                              | [`go mod vendor` ドキュメント](https://golang.org/ref/mod#go-mod-vendor)  |


#### `versioning-strategy`

{% data variables.product.prodname_dependabot %} がマニフェストファイルを編集してバージョンを更新する場合、次の全体的な戦略を使用します。

- アプリケーションでは、バージョン要件が増えます（npm、pip、Composer など）。
- ライブラリでは、バージョンの範囲が広がります（Bundler や Cargo など）。

サポートされているパッケージマネージャーでこの動作を変更するには、`version-stratege` オプションを使用します。

{% data reusables.dependabot.option-affects-security-updates %}

利用可能な更新戦略

| Option                  | サポート                                           | アクション                                                            |
| ----------------------- | ---------------------------------------------- | ---------------------------------------------------------------- |
| `lockfile-only`         | `bundler`、`cargo`、`composer`、`mix`、`npm`、`pip` | ロックファイルを更新するプルリクエストのみを作成します。 パッケージマニフェストの変更が必要になる新しいバージョンは無視します。 |
| `auto`                  | `bundler`、`cargo`、`composer`、`mix`、`npm`、`pip` | 前述のデフォルトの戦略に従います。                                                |
| `widen`                 | `composer`、`npm`                               | 可能であれば、バージョン要件を緩和して、新旧両方のバージョンを含めます。                             |
| `increase`              | `bundler`、`composer`、`npm`                     | 新しいバージョンに一致するように、常にバージョン要件を増やします。                                |
| `increase-if-necessary` | `bundler`、`composer`、`npm`                     | 新しいバージョンで必要な場合にのみ、バージョン要件を増やします。                                 |

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

### プライベートレジストリの設定オプション

最上位の `registries` キーはオプションです。 このキーでは、{% data variables.product.prodname_dependabot %} がプライベートパッケージレジストリにアクセスするために使用する認証の詳細を指定できます。

{% note %}

**注釈:** プライベートネットワークにあるファイアーウォールの内側のプライベートレジストリはサポートされていません。

{% endnote %}

`registries` キーの値は連想配列で、その各要素は、特定のレジストリを指定するキーと、そのレジストリへのアクセスに必要となる設定を指定する連想配列の値により構成されます。 以下の *dependabot.yml* ファイルでは、ファイルの `registries` セクションで `dockerhub` として指定されたレジストリを設定し、次にファイルの `dockerhub` でそれを参照しています。

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

以下のオプションを使用して、アクセス設定を指定します。 レジストリ設定には `type` と `url`、そして通常は `username` と `password` の組み合わせか `token` を含める必要があります。

| オプション           | 説明                                                                                                                                                                                                                                                           |
|:--------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`          | レジストリのタイプを指定します。 タイプの一覧については下記をご覧ください。                                                                                                                                                                                                                       |
| `url`           | このレジストリの依存関係にアクセスするために使用する URL。 プロトコルはオプションです。 指定しない場合には、`https://` が使用されます。 {% data variables.product.prodname_dependabot %} が必要に応じて末尾のスラッシュを追加または無視します。                                                                                                    |
| `ユーザ名`          | {% data variables.product.prodname_dependabot %} がレジストリにアクセスするために使用するユーザ名。                                                                                                                                                                                   |
| `パスワード`         | 指定したユーザのパスワードを含む {% data variables.product.prodname_dependabot %} シークレットへのリファレンス。 詳しい情報については、「[Dependabot に対して暗号化されたシークレットを管理する](/github/administering-a-repository/managing-encrypted-secrets-for-dependabot)」を参照してください。                                    |
| `key`           | A reference to a {% data variables.product.prodname_dependabot %} secret containing an access key for this registry. 詳しい情報については、「[Dependabot に対して暗号化されたシークレットを管理する](/github/administering-a-repository/managing-encrypted-secrets-for-dependabot)」を参照してください。 |
| `トークン`          | このレジストリへのアクセストークンを含む {% data variables.product.prodname_dependabot %} シークレットへのリファレンス。 詳しい情報については、「[Dependabot に対して暗号化されたシークレットを管理する](/github/administering-a-repository/managing-encrypted-secrets-for-dependabot)」を参照してください。                                |
| `replaces-base` | `type: python-index` となっているレジストリで、ブール値が `true` の場合、pip は、Python Package Index のベース URL (デフォルトでは `https://pypi.org/simple`) ではなく指定された URL を使用して依存関係を解決します。                                                                                                    |


各設定 `type` には、特定の設定を指定する必要があります。 タイプによっては、複数の接続方法を使用できます。 以下のセクションで、各 `type` に使用する設定の詳細を説明します。

#### `composer-repository`

`composer-repository` タイプは、ユーザ名とパスワードをサポートします。

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

The `docker-registry` type can also be used to pull from Amazon ECR using static AWS credentials.

{% raw %}
```yaml
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
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

#### `hex-organization`

The `hex-organization` type supports organization and key.

{% raw %}
```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
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

#### `terraform-registry`

The `terraform-registry` type supports a token.

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}
