---
title: バージョンアップデートの有効化と無効化
intro: '{% data variables.product.prodname_dependabot %} が使用するパッケージを自動的に更新するようにリポジトリを設定できます。'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->

### 依存関係のバージョン更新について

{% data variables.product.prodname_dependabot_version_updates %} を有効にするには、リポジトリの `.github` ディレクトリにある *dependabot.yml* 構成ファイルをチェックします。 すると、{% data variables.product.prodname_dependabot %} は設定した依存関係を最新の状態に保つためにプルリクエストを発行します。 更新するパッケージマネージャーの依存関係ごとに、パッケージマニフェストファイルの場所と、それらのファイルにリストされている依存関係の更新をチェックする頻度を指定する必要があります。 セキュリティ更新の有効化については、「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。

{% data reusables.dependabot.initial-updates %} 詳しい情報については、「[依存関係の更新をカスタマイズする](/github/administering-a-repository/customizing-dependency-updates)」をご覧ください。

{% data reusables.dependabot.private-dependencies-note %} さらに、 {% data variables.product.prodname_dependabot %} はすべてのパッケージマネージャーに対して、プライべートな {% data variables.product.prodname_dotcom %} 依存関係をサポートしません。 For more information, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)" and "[{% data variables.product.prodname_dotcom %} language support](/github/getting-started-with-github/github-language-support)."

### {% data variables.product.prodname_dependabot_version_updates %} を有効化する

{% data reusables.dependabot.create-dependabot-yml %}詳しい情報については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates)」を参照してください。
1. `version` を追加します。
1. プライベートレジストリに依存関係がある場合、必要に応じて認証情報を含む `registries` セクションを追加します。
1. `updates` セクションを追加し、{% data variables.product.prodname_dependabot %} に監視させるパッケージマネージャーごとにエントリを追加します。
1. パッケージマネージャーごとに、以下を使用します。
    - `package-ecosystem`: パッケージマネージャーを指定します。
    - `directory`: マニフェストまたはその他の定義ファイルの場所を指定します。
    - `schedule.interval`: 新しいバージョンをチェックする頻度を指定します。
{% data reusables.dependabot.check-in-dependabot-yml %}

#### *dependabot.yml*ファイルの例

下記のサンプルの *dependabot.yml* ファイルは、2 つのパッケージマネージャー (npm と Docker) のバージョン更新を設定しています。 このファイルがチェックインされると、{% data variables.product.prodname_dependabot %} が、デフォルトブランチのマニフェストファイルで古い依存関係がないかをチェックします。 古い依存関係が見つかった場合、デフォルトブランチに対してプルリクエストを発行して依存関係を更新します。

```yaml
# 2 つのパッケージマネージャーの最低限の設定を含む
# 基本的な dependabot.yml ファイル

version: 2
updates:
  # npm のバージョン更新を有効にする
  - package-ecosystem: "npm"
    # 「root」ディレクトリで「package.json」と「lock」ファイルを探す
    directory: "/"
    # npm レジストリの更新を毎日（平日）チェックする
    schedule:
      interval: "daily"

  # Docker のバージョン更新を有効にする
  - package-ecosystem: "docker"
    # 「root」ディレクトリで「Dockerfile」を探す
    directory: "/"
    # 週に 1 回更新を確認する
    schedule:
      interval: "weekly"
```

上記の例では、Docker の依存関係が非常に古い場合、依存関係が最新になるまで `daily`（毎日）のスケジュールで開始し、その後、毎週のスケジュールに戻すことができます。

#### フォークのバージョン更新を有効にする

フォークでバージョン更新を有効にする場合は、追加の手順があります。 *dependabot.yml* 設定ファイルが存在する場合、バージョン更新はフォークで自動的に有効になりません。 これにより、フォークの所有者は、*dependabot.yml* 設定ファイルを含む変更を元のリポジトリからプルするときに、意図せずバージョン更新を有効にすることがなくなります。

フォークでは、{% data variables.product.prodname_dependabot %} を明示的に有効にする必要もあります。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
5. [**Enable Dependabot**] で、[Enable Dependabot] をクリックします。

### バージョン更新のステータスを確認する

バージョン更新を有効にすると、リポジトリの依存関係グラフに新しい **Dependabot** タブが表示されます。 このタブには、{% data variables.product.prodname_dependabot %} が監視するように設定されているパッケージマネージャーと、{% data variables.product.prodname_dependabot %} が最後に新しいバージョンをチェックした日時が表示されます。

![[Repository Insights] タブ、[Dependency graph]、[Dependabot] タブ](/assets/images/help/dependabot/dependabot-tab-view-beta.png)

詳しい情報については、「[バージョン更新用に設定された依存関係を一覧表示する](/github/administering-a-repository/listing-dependencies-configured-for-version-updates) 」を参照してください。

### {% data variables.product.prodname_dependabot_version_updates %} を無効にする

リポジトリから *dependabot.yml* ファイルを削除することで、バージョン更新を完全に無効にすることができます。 通常、1 つ以上の依存関係やパッケージマネージャーの更新を一時的に無効にする必要がある場合があります。

- パッケージマネージャー: `open-pull-requests-limit: 0` を設定するか、設定ファイル内で関連する `package-ecosystem` でコメントアウトして無効にします。
- 特定の依存関係: 更新から除外するパッケージまたはアプリケーションの `ignore` 属性を追加して無効にします。

依存関係を無効にすると、ワイルドカードを使用して、関連する一連のライブラリを照合できます。 除外するバージョンを指定することもできます。 これは、ライブラリの更新をブロックする必要がある場合や、API の重大な変更をサポートするために作業を保留する必要があるが、使用するバージョンのセキュリティ修正を取得する場合に特に便利です。

#### 一部の依存関係のバージョン更新を無効にする例

以下の *dependabot.yml* ファイルの例には、一部の依存関係の更新を無効にし、他の更新を続行できるようにするさまざまな方法が含まれています。

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Overwrite any ignores created using `@dependabot ignore` commands
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
```

{% data reusables.dependabot.warning-ignore-option %}

既存の無視設定の確認に関する詳細については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)」を参照してください。
