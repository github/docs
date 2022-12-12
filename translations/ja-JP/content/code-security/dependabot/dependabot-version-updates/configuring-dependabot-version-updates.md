---
title: Dependabot のバージョン アップデートの設定
intro: '{% data variables.product.prodname_dependabot %} が使用するパッケージを自動的に更新するようにリポジトリを設定できます。'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure version updates
ms.openlocfilehash: 8513bd41ec86d353241297d2a5bd6111a49fec3d
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135815'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 依存関係のバージョン更新について

リポジトリの `.github` ディレクトリに *dependabot.yml* 構成ファイルをチェックインして、{% data variables.product.prodname_dependabot_version_updates %} を有効にします。 すると、{% data variables.product.prodname_dependabot %} は設定した依存関係を最新の状態に保つためにプルリクエストを発行します。 更新するパッケージマネージャーの依存関係ごとに、パッケージマニフェストファイルの場所と、それらのファイルにリストされている依存関係の更新をチェックする頻度を指定する必要があります。 セキュリティ更新プログラムの有効化の詳細については、「[{% data variables.product.prodname_dependabot_security_updates %}の構成](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。

{% data reusables.dependabot.initial-updates %} 詳しい情報については、「[依存関係の更新をカスタマイズする](/github/administering-a-repository/customizing-dependency-updates)」を参照してください。

既定では、マニフェストで明示的に定義されている直接の依存関係のみが、{% data variables.product.prodname_dependabot_version_updates %} によって最新の状態に保たれます。 ロック ファイルで定義されている間接的な依存関係に対する更新を受け取ることができます。 詳細については、「[dependabot.yml ファイルの構成オプション](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow)」を参照してください。

{% data reusables.dependabot.private-dependencies-note %} さらに、 {% data variables.product.prodname_dependabot %} はすべてのパッケージマネージャーに対して、プライべートな {% data variables.product.prodname_dotcom %} 依存関係をサポートしません。 詳しい情報については、「[GitHub Dependabot のバージョン アップデートについて](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)」と「[{% data variables.product.prodname_dotcom %} 言語サポート](/github/getting-started-with-github/github-language-support)」を参照してください。

## {% data variables.product.prodname_dependabot_version_updates %} を有効化する

*dependabot.yml* 構成ファイルをリポジトリにコミットして、{% data variables.product.prodname_dependabot_version_updates %} を有効にします。 {% ifversion dependabot-settings-update-37 %}設定ページでこの機能を有効にした場合、GitHub によって編集可能な基本ファイルが作成されます。それ以外の場合は、任意のファイル エディターを使用してファイルを作成できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. [Code security and analysis]\(コードのセキュリティと分析\) の {% data variables.product.prodname_dependabot_version_updates %} の右側にある **[Enable]\(有効\)** をクリックして、リポジトリの `.github` ディレクトリにある基本的な *dependabot.yml* 構成ファイルを開きます。
{% else %}
1. リポジトリの `.github` ディレクトリに *dependabot.yml* 構成ファイルを作成します。 {% endif %}
1. `version` を追加します。 
1. プライベート レジストリに依存関係がある場合は、必要に応じて、認証情報が含まれている `registries` セクションを追加します。 
1. `updates` セクションを追加し、{% data variables.product.prodname_dependabot %} で監視したい各パッケージ モニターのエントリを追加します。
1. パッケージマネージャーごとに、以下を使用します。
    - `package-ecosystem`: パッケージ マネージャーを指定します。
    - `directory`: マニフェストや他の定義ファイルの場所を指定します。
    - `schedule.interval`: 新しいバージョンをチェックする頻度を指定します。
{% data reusables.dependabot.check-in-dependabot-yml %}

すべての構成オプションについて詳しくは、「[dependabot.yml ファイルの構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates)」を参照してください。

### *dependabot.yml* ファイルの例

次の *dependabot.yml* ファイルの例では、npm と Docker の 2 つのパッケージ マネージャーのバージョン アップデートを構成します。 このファイルがチェックインされると、{% data variables.product.prodname_dependabot %} が、デフォルトブランチのマニフェストファイルで古い依存関係がないかをチェックします。 古い依存関係が見つかった場合、デフォルトブランチに対してプルリクエストを発行して依存関係を更新します。

```yaml
# Basic dependabot.yml file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```

上記の例では、Docker の依存関係がとても古い場合、その依存関係が最新の状態になるまで、まずは `daily` (毎日) スケジュールを設定して、その後 Weekly (毎週) スケジュールに戻すことができます。

### フォークのバージョン更新を有効にする

フォークでバージョン更新を有効にする場合は、追加の手順があります。 *dependabot.yml* 構成ファイルが存在していると、フォークでのバージョン アップデートが自動的に有効になることはありません。 これにより、元のリポジトリからの *dependabot.yml* 構成ファイルを含む変更をプルするときに、フォーク所有者が意図せずバージョン アップデートを有効にしてしまうことがなくなります。 

フォークでは、{% data variables.product.prodname_dependabot %} を明示的に有効にする必要もあります。

{% ifversion dependabot-version-updates-for-forks %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. [Code security and analysis]\(コードのセキュリティと分析\) の [{% data variables.product.prodname_dependabot_version_updates %}] の右側にある **[有効にする]** をクリックし、{% data variables.product.prodname_dependabot %} がバージョン更新を開始できるようにします。
![フォークされたリポジトリの {% data variables.product.prodname_dependabot_version_updates %} 設定のスクリーンショット](/assets/images/help/dependabot/dependabot-version-update-forks.png)

{% else %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
5. [Dependabot を有効にする] で、 **[Dependabot を有効にする]** をクリックします。

{% endif %}

## バージョン更新のステータスを確認する

バージョン アップデートを有効にすると、リポジトリの依存関係グラフにある **[Dependabot]** タブが設定されます。 このタブには、{% data variables.product.prodname_dependabot %} が監視するように設定されているパッケージマネージャーと、{% data variables.product.prodname_dependabot %} が最後に新しいバージョンをチェックした日時が表示されます。

![[Repository Insights] タブ、[Dependency graph]、[Dependabot] タブ](/assets/images/help/dependabot/dependabot-tab-view.png)

情報については、「[バージョン更新用に設定された依存関係を一覧表示する](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)」を参照してください。

## {% data variables.product.prodname_dependabot_version_updates %} を無効にする

リポジトリから *dependabot.yml* ファイルを削除することで、バージョン アップデートを完全に無効にすることができます。 通常、1 つ以上の依存関係やパッケージマネージャーの更新を一時的に無効にする必要がある場合があります。

- パッケージ マネージャー: 構成ファイル内で `open-pull-requests-limit: 0` を設定するか、関連する `package-ecosystem` をコメントアウトして無効にします。
- 特定の依存関係: アップデートから除外したいパッケージまたはアプリケーションの `ignore` 属性を追加して無効にします。

依存関係を無効にすると、ワイルドカードを使用して、関連する一連のライブラリを照合できます。 除外するバージョンを指定することもできます。 これは、ライブラリの更新をブロックする必要がある場合や、API の重大な変更をサポートするために作業を保留する必要があるが、使用するバージョンのセキュリティ修正を取得する場合に特に便利です。

### 一部の依存関係のバージョン更新を無効にする例

次の *dependabot.yml* ファイルの例には、別の方法で一部の依存関係の更新を無効にしながら他の更新を引き続き行うことができるようにする例が含まれています。

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
      interval: "weekly"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

既存の無視設定のチェックの詳しい情報については、「[dependabot.yml ファイルの構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)」を参照してください。
