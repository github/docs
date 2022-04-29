---
title: GitHub Dependabot のバージョンアップデートについて
intro: '{% data variables.product.prodname_dependabot %} を使用して、使用するパッケージを最新バージョンに更新しておくことができます。'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
  - /github/administering-a-repository/about-dependabot-version-updates
  - /code-security/supply-chain-security/about-dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/upgrading-from-dependabotcom-to-github-native-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabotバージョンアップデート
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot_version_updates %}について

{% data variables.product.prodname_dependabot %} は、依存関係を維持する手間を省きます。 これを使用して、リポジトリが依存するパッケージおよびアプリケーションの最新リリースに自動的に対応できるようにすることができます。

設定ファイルをリポジトリにチェックインすることにより、{% data variables.product.prodname_dependabot_version_updates %} を有効化します。 設定ファイルは、リポジトリに保存されているマニフェストまたは他のパッケージ定義ファイルの場所を指定します。 {% data variables.product.prodname_dependabot %} はこの情報を使用して、古いパッケージとアプリケーションをチェックします。 {% data variables.product.prodname_dependabot %} は、依存関係のセマンティックバージョニング（[semver](https://semver.org/)）を調べて、そのバージョンへの更新の必要性を判断することにより、依存関係の新しいバージョンの有無を決定します。 特定のパッケージマネージャーでは、{% data variables.product.prodname_dependabot_version_updates %} もベンダをサポートしています。 ベンダ (またはキャッシュ) された依存関係は、マニフェストで参照されるのではなく、リポジトリ内の特定のディレクトリにチェックインされる依存関係です。 パッケージサーバーが利用できない場合でも、ビルド時にベンダ依存関係を利用できます。 {% data variables.product.prodname_dependabot_version_updates %} は、ベンダの依存関係をチェックして新しいバージョンを確認し、必要に応じて更新するように設定できます。

{% data variables.product.prodname_dependabot %} が古い依存関係を特定すると、プルリクエストを発行して、マニフェストを依存関係の最新バージョンに更新します。 ベンダーの依存関係の場合、{% data variables.product.prodname_dependabot %} はプルリクエストを生成して、古い依存関係を新しいバージョンに直接置き換えます。 テストに合格したことを確認し、プルリクエストの概要に含まれている変更履歴とリリースノートを確認して、マージします。 詳しい情報については「[{% data variables.product.prodname_dependabot %}のバージョンアップデートの設定](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)」を参照してください。

_セキュリティアップデート_を有効にすると、{% data variables.product.prodname_dependabot %} は脆弱性のある依存関係を更新するPull Requestを起こします。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-tos %}

## {% data variables.product.prodname_dependabot %} のプルリクエストの頻度

設定ファイルで、新しいバージョンの各エコシステムをチェックする頻度を、毎日、毎週、毎月の中から指定します。

{% data reusables.dependabot.initial-updates %}

セキュリティアップデートを有効にした場合、セキュリティアップデートの追加に対するプルリクエストが表示されることがあります。 これらは、デフォルトブランチへの依存関係に対する {% data variables.product.prodname_dependabot %} アラートによってトリガーされます。 {% data variables.product.prodname_dependabot %} はプルリクエストを自動的に生成し、脆弱性のある依存関係を更新します。

## サポートされているリポジトリとエコシステム
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

サポートされているパッケージマネージャーのいずれかの依存関係マニフェストまたはロックファイルを含むリポジトリのバージョン更新を設定できます。 一部のパッケージマネージャーでは、依存関係のベンダを設定することもできます。 詳しい情報については「[dependabot.ymlファイルの設定オプション](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#vendor)」を参照してください。
{% note %}

{% data reusables.dependabot.private-dependencies-note %}

{% data variables.product.prodname_dependabot %} は、すべてのパッケージマネージャーに対してプライベートな {% data variables.product.prodname_dotcom %} 依存関係をサポートしません。 詳細は、以下の表をご覧ください。

{% endnote %}

{% data reusables.dependabot.supported-package-managers %}

リポジトリですでに依存関係管理にインテグレーションを使用している場合は、{% data variables.product.prodname_dependabot %} を有効にする前にそれを無効にする必要があります。 {% ifversion fpt or ghec %}詳しい情報については「[インテグレーションについて](/github/customizing-your-github-workflow/about-integrations)」を参照してください。{% endif %}

## {% data variables.product.prodname_dependabot %} バージョン更新の通知について

{% data variables.product.company_short %}上の通知をフィルタリングして、{% data variables.product.prodname_dependabot %}が作成したPull Requestの通知を表示させることができます。 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)」を参照してください。
