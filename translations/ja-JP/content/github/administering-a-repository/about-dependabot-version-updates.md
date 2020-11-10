---
title: About Dependabot version updates
intro: '{% data variables.product.prodname_dependabot %} を使用して、使用するパッケージを最新バージョンに更新しておくことができます。'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### {% data variables.product.prodname_dependabot_version_updates %} について

{% data variables.product.prodname_dependabot %} は、依存関係を維持する手間を省きます。 これを使用して、リポジトリが依存するパッケージおよびアプリケーションの最新リリースに自動的に対応できるようにすることができます。

{% data variables.product.prodname_dependabot_version_updates %} を有効にするには、リポジトリに設定ファイルをチェックインします。 設定ファイルでは、リポジトリに保存されているマニフェストまたは他のパッケージ定義ファイルの場所を指定します。 {% data variables.product.prodname_dependabot %} はこの情報を使用して、古いパッケージとアプリケーションをチェックします。 {% data variables.product.prodname_dependabot %} は、依存関係のセマンティックバージョニング（[semver](https://semver.org/)）を調べて、そのバージョンへの更新の必要性を判断することにより、依存関係の新しいバージョンの有無を決定します。 For certain package managers, {% data variables.product.prodname_dependabot_version_updates %} also supports vendoring. Vendored (or cached) dependencies are dependencies that are checked in to a specific directory in a repository, rather than referenced in a manifest. Vendored dependencies are available at build time even if package servers are unavailable. {% data variables.product.prodname_dependabot_version_updates %} can be configured to check vendored dependencies for new versions and update them if necessary.

{% data variables.product.prodname_dependabot %} が古い依存関係を特定すると、プルリクエストを発行して、マニフェストを依存関係の最新バージョンに更新します。 For vendored dependencies, {% data variables.product.prodname_dependabot %} raises a pull request to directly replace the outdated dependency with the new version. テストに合格したことを確認し、プルリクエストの概要に含まれている変更履歴とリリースノートを確認して、マージします。 詳しい情報については、「[バージョン更新の有効化と無効化](/github/administering-a-repository/enabling-and-disabling-version-updates)」を参照してください。

セキュリティアップデートを有効にすると、{% data variables.product.prodname_dependabot %} はプルリクエストを発行し、脆弱性のある依存関係を更新します。 For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

{% data reusables.dependabot.dependabot-tos %}

### {% data variables.product.prodname_dependabot %} のプルリクエストの頻度

設定ファイルで、新しいバージョンの各エコシステムをチェックする頻度を、毎日、毎週、毎月の中から指定します。

{% data reusables.dependabot.initial-updates %}

セキュリティアップデートを有効にした場合、セキュリティアップデートの追加に対するプルリクエストが表示されることがあります。 これらは、デフォルトブランチへの依存関係に対する {% data variables.product.prodname_dependabot %} アラートによってトリガーされます。 {% data variables.product.prodname_dependabot %} はプルリクエストを自動的に生成し、脆弱性のある依存関係を更新します。

### サポートされているリポジトリとエコシステム

{% note %}

{% data reusables.dependabot.private-dependencies %}

{% endnote %}

サポートされているパッケージマネージャーのいずれかの依存関係マニフェストまたはロックファイルを含むリポジトリのバージョン更新を設定できます。 For some package managers, you can also configure vendoring for dependencies. 詳しい情報については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#vendor) 」を参照してください。

{% data reusables.dependabot.supported-package-managers %}

リポジトリですでに依存関係管理にインテグレーションを使用している場合は、{% data variables.product.prodname_dependabot %} を有効にする前にそれを無効にする必要があります。 詳しい情報については、「[インテグレーションについて](/github/customizing-your-github-workflow/about-integrations)」を参照してください。
