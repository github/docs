---
title: dependabot.yml ファイルの構成オプション
intro: '{% data variables.product.prodname_dependabot %} がリポジトリを維持する方法をカスタマイズする場合に使用可能なすべてのオプションの詳細情報。'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
ms.openlocfilehash: 3ec6cddf63b2e2d238baf96ea7d437fcb3c21d3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147691998'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## *dependabot.yml* ファイルについて

{% data variables.product.prodname_dependabot %} の構成ファイルである *dependabot.yml* では、YAML 構文を使います。 YAML を初めて使う場合、詳しくは「[YAML を 5 分で学習する](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)」をご覧ください。

このファイルは、リポジトリの `.github` ディレクトリに保存する必要があります。 *dependabot.yml* ファイルを追加または更新すると、バージョン更新の即時チェックがトリガーされます。 詳細と例については、「[{% data variables.product.prodname_dependabot %} のバージョン アップデートの設定](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates)」をご覧ください。

セキュリティアップデートに影響するオプションは、次にセキュリティアラートがセキュリティアップデートのためのプルリクエストをトリガーするときにも使用されます。  詳細については、「[{% data variables.product.prodname_dependabot_security_updates %} の構成](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)」を参照してください。

*dependabot.yml* ファイルには、2 つの必須の最上位キー `version` と `updates` があります。 必要に応じて、最上位レベルの `registries` キー{% ifversion ghes = 3.5 %}や `enable-beta-ecosystems` キー{% endif %}を含めることができます。 このファイルは `version: 2` で始まる必要があります。

## *dependabot.yml* ファイルの構成オプション

最上位レベルの `updates` キーは必須です。 これを使用することで、{% data variables.product.prodname_dependabot %} がバージョンやプロジェクトの依存性を更新する方法を設定できます。 各エントリは、特定のパッケージマネージャーの更新設定を行います。 次のオプションを使用できます。

{% data reusables.dependabot.configuration-options %}

これらのオプションは、次のようなカテゴリに幅広く適合しています。

- すべての構成に含める必要がある基本的な設定オプション: [`package-ecosystem`](#package-ecosystem)、[`directory`](#directory)、[`schedule.interval`](#scheduleinterval)。
- 更新スケジュールをカスタマイズするためのオプション: [`schedule.time`](#scheduletime)、[`schedule.timezone`](#scheduletimezone)、[`schedule.day`](#scheduleday)。
- 更新される依存関係を制御するオプション: [`allow`](#allow)、[`ignore`](#ignore)、[`vendor`](#vendor)。
- メタデータを pull request に追加するオプション: [`reviewers`](#reviewers)、[`assignees`](#assignees)、[`labels`](#labels)、[`milestone`](#milestone)。
- pull request の動作を変更するオプション: [`target-branch`](#target-branch)、[`versioning-strategy`](#versioning-strategy)、[`commit-message`](#commit-message)、[`rebase-strategy`](#rebase-strategy)、[`pull-request-branch-name.separator`](#pull-request-branch-nameseparator)。

さらに、[`open-pull-requests-limit`](#open-pull-requests-limit) オプションは、{% data variables.product.prodname_dependabot %} で開くことのできるバージョン更新の pull request の最大数を変更します。

{% note %}

**注:** これらの構成オプションの一部は、脆弱性のあるパッケージ マニフェストのセキュリティ更新のために送信される pull request にも影響を与える可能性があります。

脆弱性のあるパッケージマニフェストのセキュリティアップデートは、デフォルトブランチでのみ発生します。 構成オプションが同じブランチに設定されていて (`target-branch` を使っていないかぎり該当します)、脆弱性のあるマニフェストの `package-ecosystem` と `directory` を指定している場合、セキュリティ更新の pull request で関連オプションが使われます。

一般に、セキュリティアップデートでは、メタデータの追加や動作の変更など、プルリクエストに影響する設定オプションが使用されます。 セキュリティ更新について詳しくは、「[{% data variables.product.prodname_dependabot_security_updates %} を構成する](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)」をご覧ください。

{% endnote %}

### `package-ecosystem`

**[必須]** 。 {% data variables.product.prodname_dependabot %} で新しいバージョンを監視するパッケージ マネージャーごとに、1 つの `package-ecosystem` 要素を追加します。 リポジトリには、これらの各パッケージマネージャーの依存関係マニフェストまたはロックファイルも含まれている必要があります。 サポートするパッケージマネージャーに対してベンダリングを有効にする場合、ベンダリングされた依存関係が必須ディレクトリに存在する必要があります。 詳しくは、後の「[`vendor`](#vendor)」をご覧ください。

{% data reusables.dependabot.supported-package-managers %}

```yaml
# Basic set up for three package managers

version: 2
updates:

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

### `directory`

**[必須]** 。 各パッケージ マネージャー (*package.json* や *Gemfile* など) のパッケージ マニフェストの場所を定義する必要があります。 GitHub Actions 以外のすべてのエコシステムで、リポジトリのルートに対する相対ディレクトリを定義します。 GitHub Actions の場合、ディレクトリを `/` に設定し、`.github/workflows` でワークフロー ファイルを確認します。

```yaml
# Specify location of manifest files for each package manager

version: 2
updates:
  - package-ecosystem: "composer"
    # Files stored in repository root
    directory: "/"
    schedule:
      interval: "daily"

  - package-ecosystem: "npm"
    # Files stored in `app` directory
    directory: "/app"
    schedule:
      interval: "daily"

  - package-ecosystem: "github-actions"
    # Workflow files stored in the
    # default location of `.github/workflows`
    directory: "/"
    schedule:
      interval: "daily"
```

### `schedule.interval`

**[必須]** 。 各パッケージマネージャーに対して、新しいバージョンを確認する頻度を定義する必要があります。 デフォルトでは、{% data variables.product.prodname_dependabot %}は設定ファイル中のすべての更新を適用する時間をランダムに割り当てます。 特定の日時を設定するには、[`schedule.time`](#scheduletime) と [`schedule.timezone`](#scheduletimezone) を使うことができます。

- `daily` — 月曜日から金曜日までのすべての平日に実行します。
- `weekly` — 毎週 1 回実行します。 デフォルトでは月曜日に設定されています。 これを変更するには、[`schedule.day`](#scheduleday) を使います。
- `monthly` — 毎月 1 回実行します。 その月の最初の日に設定されています。

```yaml
# Set update schedule for each package manager

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # Check for updates managed by Composer once a week
      interval: "weekly"
```

{% note %}

**注**: `schedule` では、{% data variables.product.prodname_dependabot %} が新しい更新を試みるタイミングを定義します。 ただし、プルリクエストを受け取るタイミングはこれだけではありません。 更新は、`dependabot.yml` ファイルへの変更、更新失敗後のマニフェスト ファイルへの変更、または {% data variables.product.prodname_dependabot_security_updates %} に基づいてトリガーできます。 詳しくは、「[{% data variables.product.prodname_dependabot %} の pull request の頻度](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)」と「[{% data variables.product.prodname_dependabot_security_updates %} について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)」をご覧ください。

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

更新する依存関係をカスタマイズするには、`allow` オプションを使います。 これは、バージョン及びセキュリティのどちらのアップデートにも適用されます。 以下のオプションを使用できます。

- `dependency-name` — 名前が一致する依存関係の更新を許可するために使います。必要に応じて、`*` を使って 0 個以上の文字と一致させます。 Java の依存関係の場合、`dependency-name` 属性の形式は `groupId:artifactId` になります (例: `org.kohsuke:github-api`)。
- `dependency-type` — 特定の種類の依存関係の更新を許可するために使います。

  | 依存関係の種類 | パッケージマネージャーによるサポート | 更新の許可 |
  |------------------|-------------------------------|--------|
  | `direct` | すべて | 明示的に定義されたすべての依存関係。 |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | 直接依存関係の依存関係 (サブ依存関係、または過渡依存関係とも呼ばれる)。|
  | `all` | すべて | 明示的に定義されたすべての依存関係。 `bundler`、`pip`、`composer`、`cargo` の場合は、直接依存関係の依存関係も。|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | "運用依存関係グループ" の依存関係のみ。 |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | [Development dependency group] 内の依存関係のみ。 |

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

### `assignees`

`assignees` を使って、パッケージ マネージャーに対して発行されたすべての pull request の個々の担当者を指定します。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify assignees for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Add assignees
    assignees:
      - "octocat"
```

### `commit-message`

デフォルトでは、{% data variables.product.prodname_dependabot %} はコミットメッセージの設定を検出し、同様のパターンを使用しようとします。 `commit-message` オプションを使って、環境設定を明示的に指定します。

サポートされているオプション

{% note %}

**注:** `prefix` と `prefix-development` オプションには 15 文字の制限があります。

{% endnote %}

- `prefix` では、すべてのコミット メッセージのプレフィックスを指定します。
- `prefix-development` では、Development 依存関係グループ内の依存関係を更新するすべてのコミット メッセージに個別のプレフィックスを指定します。 このオプションの値を指定すると、`prefix` は、Production 依存関係グループの依存関係の更新にのみ使われます。 これは、`bundler`、`composer`、`mix`、`maven`、`npm`、`pip` でサポートされています
- `include: "scope"` では、すべてのプレフィックスの後に、コミットで更新される依存関係のリストが続くことを指定します。

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
上記の例と同じ構成を使用する場合、`pip` 開発依存関係グループの `requests` ライブラリを更新すると、次のコミット メッセージが生成されます。

   `pip dev: bump requests from 1.0.0 to 1.0.1`
   
### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

依存関係は、`ignore` にそれを追加するか、{% data variables.product.prodname_dependabot %} によって開かれる pull request で `@dependabot ignore` コマンドを使うことによって、無視できます。

#### `@dependabot ignore` から `ignore` 条件を作成する

`@dependabot ignore` コマンドを使って無視された依存関係は、各パッケージ マネージャーに集中的に保存されます。 `dependabot.yml` ファイルで依存関係の無視を始めると、これらの既存の設定が、構成での `ignore` の依存関係とともに考慮されます。

リポジトリで `"@dependabot ignore" in:comments` を検索することで、リポジトリに `ignore` の設定が保存されているかどうかを確認できます。 この方法で無視された依存関係の無視を解除したいなら、Pull Requestを再度オープンしてください。

`@dependabot ignore` について詳しくは、「[依存関係の更新に関する pull request を管理する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)」をご覧ください。

#### 無視する依存関係とバージョンを指定する

`ignore` オプションを使って、更新する依存関係をカスタマイズできます。 `ignore` オプションでは、次のオプションがサポートされています。

- `dependency-name` — 名前が一致する依存関係の更新を無視するために使います。必要に応じて、`*` を使って 0 個以上の文字と一致させます。 Java の依存関係の場合、`dependency-name` 属性の形式は `groupId:artifactId` になります (例: `org.kohsuke:github-api`)。 {% ifversion dependabot-grouped-dependencies %} {% data variables.product.prodname_dependabot %} で DefinitelyTyped の TypeScript 型定義が自動的に更新されないようにするには、`@types/*` を使います。{% endif %}
- `versions` — 特定のバージョンまたはバージョン範囲を無視するために使います。 範囲を定義する場合は、パッケージ マネージャーの標準パターンを使います（例: npm の場合は `^1.0.0`、Bundler の場合は `~> 2.0`）。
- `update-types` — バージョン更新での semver の `major`、`minor`、`patch` の更新など、更新の種類を無視するために使います (例: `version-update:semver-patch` でパッチの更新が無視されます)。 これを `dependency-name: "*"` と組み合わせると、すべての依存関係で特定の `update-types` を無視できます。 現在サポートされているオプションは、`version-update:semver-major`、`version-update:semver-minor`、`version-update:semver-patch` だけです。 セキュリティの更新はこの設定には影響されません。

`versions` と `update-types` を一緒に使うと、{% data variables.product.prodname_dependabot %} はいずれのセットでもすべての更新を無視します。

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

**注**: 構成ファイルの `ignore` オプションにアクセスできない依存関係を追加した場合でも、{% data variables.product.prodname_dependabot %} は、ファイル内のすべての依存関係にアクセスできる場合は、マニフェストまたはロック ファイルでのバージョン更新のみを実行できます。 詳しくは、「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)」と「[{% data variables.product.prodname_dependabot %} エラーのトラブルシューティング](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)」をご覧ください。


{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% note %}

**注**: `pub` エコシステムの場合、{% data variables.product.prodname_dependabot %} は、以前のバージョンが使用可能な場合でも、更新を試みるバージョンが無視されているときは更新を実行しません。

{% endnote %}

{% endif %}

### `insecure-external-code-execution`

`package-ecosystem` の値が `bundler`、`mix`、および `pip` であるパッケージ マネージャーは、バージョン更新プロセスの一環としてマニフェスト内の外部コードを実行できます。 これにより、セキュリティが侵害されたパッケージが認証情報を盗んだり、構成済みのレジストリにアクセスしたりすることが可能になる場合もあります。 `updates` の構成に [`registries`](#registries) を追加すると、{% data variables.product.prodname_dependabot %} は自動的に外部コードの実行を禁止し、バージョンの更新が失敗することがあります。 `insecure-external-code-execution` を `allow` に設定することで、この動作をオーバーライドして、`bundler`、`mix`、`pip` パッケージ マネージャーで外部コードを実行できます。

`insecure-external-code-execution` を `deny` に設定することで、この更新設定に `registries` の設定があるかどうかにかかわらず、明示的に外部コードの実行を拒否できます。

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

### `labels`

{% data reusables.dependabot.default-labels %}

既定のラベルをオーバーライドし、パッケージ マネージャーに対して発行されるすべての pull request に代替のラベルを指定するには、`labels` を使います。 これらのラベルのいずれかがリポジトリで定義されていない場合は無視されます。
既定のラベルを含むすべてのラベルを無効にするには、`labels: [ ]` を使います。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify labels for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Specify labels for npm pull requests
    labels:
      - "npm"
      - "dependencies"
```

### `milestone`

パッケージ マネージャーに対して発行されたすべての pull request をマイルストーンと関連付けるには、`milestone` を使います。 ラベルではなくマイルストーンの数値識別子を指定する必要があります。 マイルストーンを表示した場合、ページの URL の `milestone` より後の最後の部分が識別子になります。 (例: `https://github.com/<org>/<repo>/milestone/3`)。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a milestone for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Associate pull requests with milestone "4"
    milestone: 4
```

### `open-pull-requests-limit`

デフォルトでは、{% data variables.product.prodname_dependabot %} は、バージョン更新に対して最大 5 つのプルリクエストをオープンします。 {% data variables.product.prodname_dependabot %} からの未解決の pull request が 5 つあると、{% data variables.product.prodname_dependabot %} は、未解決の要求の一部がマージまたは閉じられるまで、新しい要求を開けません。 この制限を変更するには `open-pull-requests-limit` を使います。 これは、パッケージマネージャーのバージョン更新を一時的に無効にする簡単な方法としても使用できます。

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

### `pull-request-branch-name.separator`

{% data variables.product.prodname_dependabot %} は、プルリクエストごとにブランチを生成します。 各ブランチ名には、`dependabot` および更新されるパッケージ マネージャーと依存関係が含まれます。 既定では、これらの部分は `/` 記号で区切られています (例: `dependabot/npm_and_yarn/next_js/acorn-6.4.1`)。

別の区切り記号を指定するには `pull-request-branch-name.separator` を使います。 これは、`"-"`、`_`、`/` のいずれかです。 ハイフン記号は、引用符で囲む必要があります。囲まない場合、空の YAML リストを開始すると解釈されます。

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

### `rebase-strategy`

デフォルトでは、{% data variables.product.prodname_dependabot %}はオープンなPull Requestへの変更を検出すると、そのPull Requestを自動的にリベースします。 この動作を無効にするには、`rebase-strategy` を使います。

利用可能なリベース戦略

- 自動リベースを無効にするには `disabled`。
- 既定の動作を使い、変更が検出されたときに開かれている pull request をリベースするには `auto`。

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

### `registries`

バージョン更新の実行時に {% data variables.product.prodname_dependabot %} がプライベート パッケージ レジストリにアクセスできるようにするには、関係する `updates` の構成に `registries` の設定を含める必要があります。 `registries` を `"*"` に設定することで、定義されたすべてのリポジトリを使用できるようにすることができます。 また、更新が使用できるレジストリをリストすることもできます。 これを行うには、_dependabot.yml_ ファイルの最上位の `registries` セクションで定義されているレジストリの名前を使います。 詳しくは、後の「[プライベート レジストリの設定オプション](#configuration-options-for-private-registries)」をご覧ください。

{% data variables.product.prodname_dependabot %} が `bundler`、`mix`、`pip` パッケージ マネージャーを使ってプライベート レジストリの依存関係を更新できるようにするため、外部コードの実行を許可できます。 詳しくは、上の「[`insecure-external-code-execution`](#insecure-external-code-execution)」をご覧ください。

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries
# when updating dependency versions for this ecosystem

{% raw %}
version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
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

### `reviewers`

パッケージ マネージャーに対して発行されたすべての pull request に個々のレビュー担当者またはレビュー担当者のチームを指定するには、`reviewers` を使います。 チームを @mentioning している場合と同様に、Organization を含む完全なチーム名を使う必要があります。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify reviewers for pull requests

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Add reviewers
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

### `schedule.day`

`weekly` の更新スケジュールを設定すると、既定では、{% data variables.product.prodname_dependabot %} は月曜日の、リポジトリに設定されたランダムな時刻に、新しいバージョンをチェックします。 更新をチェックする代替日を指定するには、`schedule.day` を使います。

サポート状況の値

- `monday`
- `tuesday`
- `wednesday`
- `thursday`
- `friday`
- `saturday`
- `sunday`

```yaml
# Specify the day for weekly checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
```

### `schedule.time`

既定では、{% data variables.product.prodname_dependabot %} は、リポジトリに設定されたランダムな時刻に、新しいバージョンをチェックします。 更新をチェックする別の時刻を指定するには、`schedule.time` を使います (形式: `hh:mm`)。

```yaml
# Set a time for checks
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # Check for npm updates at 9am UTC
      time: "09:00"
```

### `schedule.timezone`

既定では、{% data variables.product.prodname_dependabot %} は、リポジトリに設定されたランダムな時刻に、新しいバージョンをチェックします。 別のタイム ゾーンを指定するには、`schedule.timezone` を使います。 タイム ゾーン識別子は、[iana](https://www.iana.org/time-zones) が管理するタイム ゾーン データベースのものである必要があります。 詳しくは、[tz データベースのタイム ゾーンの一覧](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)をご覧ください。

```yaml
# Specify the timezone for checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # Use Japan Standard Time (UTC +09:00)
      timezone: "Asia/Tokyo"
```

### `target-branch`

デフォルトでは、{% data variables.product.prodname_dependabot %} はデフォルトのブランチでマニフェストファイルをチェックし、このブランチに対するバージョン更新のプルリクエストを発行します。 マニフェスト ファイルと pull request に別のブランチを指定するには、`target-branch` を使います。 このオプションを使用すると、このパッケージマネージャーの設定は、セキュリティアップデートのために発行されたプルリクエストに影響しなくなります。

```yaml
# Specify a non-default branch for pull requests for pip

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for version updates
    # to pip against the `develop` branch
    target-branch: "develop"
    # Labels on pull requests for version updates only
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
    # Labels on pull requests for security and version updates
    labels:
      - "npm dependencies"
```

### `vendor`

依存関係を更新するときに、依存関係のベンダリングを {% data variables.product.prodname_dependabot %} に指示するには、`vendor` オプションを使います。 `gomod` を使っている場合は、{% data variables.product.prodname_dependabot %} がこのツールに対するベンダリングを自動的に検出するため、このオプションを使わないでください。

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

| パッケージ マネージャー | ベンダリングされた依存関係のための必須パス | 詳細情報 |
  |------------------|-------------------------------|--------|
  | `bundler` | 依存関係は _vendor/cache_ ディレクトリにある必要があります。</br>他のファイル パスはサポートされません。 | [`bundle cache` ドキュメント](https://bundler.io/man/bundle-cache.1.html) |
  | `gomod` | パス要件なし (通常、依存関係は _vendor_ ディレクトリにあります) | [`go mod vendor` ドキュメント](https://golang.org/ref/mod#go-mod-vendor) |


### `versioning-strategy`

{% data variables.product.prodname_dependabot %} がマニフェストファイルを編集してバージョンを更新する場合、次の全体的な戦略を使用します。

- アプリケーションでは、バージョン要件が増えます（npm、pip、Composer など）。
- ライブラリでは、バージョンの範囲が広がります（Bundler や Cargo など）。

サポートされているパッケージ マネージャーでこの動作を変更するには、`versioning-strategy` オプションを使います。

{% data reusables.dependabot.option-affects-security-updates %}

利用可能な更新戦略

| オプション | サポートしているもの | アクション |
|--------|--------------|--------|
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | ロックファイルを更新するプルリクエストのみを作成します。 パッケージマニフェストの変更が必要になる新しいバージョンは無視します。 |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | 前述のデフォルトの戦略に従います。|
| `widen`| `composer`, `npm` | 可能であれば、バージョン要件を緩和して、新旧両方のバージョンを含めます。 |
| `increase`| `bundler`, `composer`, `npm` | 新しいバージョンに一致するように、常にバージョン要件を増やします。 |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | 新しいバージョンで必要な場合にのみ、バージョン要件を増やします。 |

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

## プライベートレジストリの設定オプション

最上位の `registries` キーは省略可能です。 このキーでは、{% data variables.product.prodname_dependabot %} がプライベートパッケージレジストリにアクセスするために使用する認証の詳細を指定できます。

{% note %}

**注:** プライベート ネットワーク上のファイアーウォールの内側のプライベート レジストリはサポートされていません。

{% endnote %}

`registries` キーの値は連想配列で、その各要素は、特定のレジストリを指定するキーと、そのレジストリへのアクセスに必要な設定を指定する連想配列の値により構成されます。 次の *dependabot.yml* ファイルでは、ファイルの `registries` セクションで `dockerhub` として指定されたレジストリが構成された後、ファイルの `updates` でそれが参照されています。

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

以下のオプションを使用して、アクセス設定を指定します。 レジストリの設定には、`type` と `url`、そして通常は `username` と `password` の組み合わせまたは `token` を含める必要があります。

| オプション&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 説明 |
|:---|:---|
| `type`                     | レジストリのタイプを指定します。 タイプの一覧については下記をご覧ください。 |
| `url`                      | このレジストリの依存関係にアクセスするために使用する URL。 プロトコルはオプションです。 指定しないと、`https://` が想定されます。 {% data variables.product.prodname_dependabot %} が必要に応じて末尾のスラッシュを追加または無視します。 |
| `username`                 | {% data variables.product.prodname_dependabot %} がレジストリにアクセスするために使用するユーザ名。 |
| `password`                 | 指定したユーザのパスワードを含む {% data variables.product.prodname_dependabot %} シークレットへのリファレンス。 詳しくは、「[Dependabot に対する暗号化されたシークレットを管理する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」をご覧ください。 |
| `key`                    | このレジストリへのアクセスキーを含む{% data variables.product.prodname_dependabot %}シークレットへの参照 詳しくは、「[Dependabot に対する暗号化されたシークレットを管理する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」をご覧ください。 |
| `token`                    | このレジストリへのアクセストークンを含む {% data variables.product.prodname_dependabot %} シークレットへのリファレンス。 詳しくは、「[Dependabot に対する暗号化されたシークレットを管理する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」をご覧ください。 |
| `replaces-base`            | `type: python-index` であるレジストリでは、ブール値が `true` の場合、pip は、Python Package Index のベース URL (既定では `https://pypi.org/simple`) ではなく、指定された URL を使って依存関係を解決します。 |


各構成の `type` には、特定の設定を指定する必要があります。 タイプによっては、複数の接続方法を使用できます。 以下のセクションでは、各 `type` に使う必要がある設定の詳細を説明します。

### `composer-repository`

`composer-repository` タイプは、ユーザー名とパスワードをサポートします。

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

### `docker-registry`

{% note %}

**注:** Azure Container Registry (ACR) はサポートされていません。

{% endnote %}

`docker-registry` タイプは、ユーザー名とパスワードをサポートします。

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

`docker-registry` タイプは、静的な AWS 資格情報を使って Amazon ECR からプルするためにも使用できます。

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

### `git`

`git` タイプは、ユーザー名とパスワードをサポートします。

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

### `hex-organization`

`hex-organization` タイプは、Organization とキーをサポートします。

{% raw %}
```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```
{% endraw %}

### `maven-repository`

`maven-repository` タイプは、ユーザー名とパスワードをサポートします。

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

### `npm-registry`

`npm-registry` タイプは、ユーザー名とパスワード、またはトークンをサポートします。

ユーザー名とパスワードを使うとき、`.npmrc` の認証トークンには `base64` でエンコードされた `_password` を含めることができます。ただし、{% data variables.product.prodname_dependabot %} の構成ファイルで参照されるパスワードは、元の (エンコードされていない) パスワードである必要があります。

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
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

### `nuget-feed`

`nuget-feed` タイプは、ユーザー名とパスワード、またはトークンをサポートします。

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

### `python-index`

`python-index` タイプは、ユーザー名とパスワード、またはトークンをサポートします。

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

### `rubygems-server`

`rubygems-server` タイプは、ユーザー名とパスワード、またはトークンをサポートします。

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

### `terraform-registry`

`terraform-registry` タイプは、トークンをサポートします。

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}

{% ifversion fpt or ghec or ghes > 3.4 %} 
## ベータ レベルのエコシステムのサポートを有効にする

### `enable-beta-ecosystems`

既定では、{% data variables.product.prodname_dependabot %} は、完全にサポートされているエコシステムについてのみ、依存関係マニフェストとロック ファイルを更新します。 まだ一般提供されていないエコシステムの更新にオプトインするには、`enable-beta-ecosystems` フラグを使います。

```yaml
# Configure beta ecosystem

version: 2
enable-beta-ecosystems: true
updates:{% ifversion fpt or ghec or ghes > 3.5 %}
  - package-ecosystem: "beta-ecosystem"{% else %}
  - package-ecosystem: "pub"{% endif %}
    directory: "/"
    schedule:
      interval: "daily"
```
{% endif %}
