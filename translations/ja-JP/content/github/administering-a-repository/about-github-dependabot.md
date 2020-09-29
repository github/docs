---
title: GitHub Dependabot について
intro: '{% data variables.product.prodname_dependabot %} を使用して、使用するパッケージを最新バージョンに更新しておくことができます。'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### {% data variables.product.prodname_dependabot %}について

{% data variables.product.prodname_dependabot %} は、依存関係の維持を簡単にする {% data variables.product.prodname_dotcom %} アプリです。 これを使用して、リポジトリが依存するパッケージおよびアプリケーションの最新リリースに自動的に対応できるようにすることができます。

{% data variables.product.prodname_dependabot_version_updates %} を有効にするには、リポジトリに設定ファイルをチェックインします。 設定ファイルでは、リポジトリに保存されているマニフェストまたは他のパッケージ定義ファイルの場所を指定します。 アプリはこの情報を使用して、古いパッケージとアプリケーションをチェックします。 The {% data variables.product.prodname_dependabot_short %} app determines if there is a new version of a dependency by looking at the semantic versioning ([semver](https://semver.org/)) of the dependency to decide whether it should update to that version. アプリが古い依存関係を特定すると、プルリクエストが発行され、マニフェストを最新バージョンの依存関係に更新します。 テストに合格したことを確認し、プルリクエストの概要に含まれている変更履歴とリリースノートを確認して、マージします。 詳しい情報については、「[バージョン更新の有効化と無効化](/github/administering-a-repository/enabling-and-disabling-version-updates)」を参照してください。

セキュリティアップデートを有効にすると、{% data variables.product.prodname_dependabot %} はプルリクエストを発行し、脆弱性のある依存関係を更新します。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)」を参照してください。

{% data reusables.dependabot.dependabot-tos %}

### {% data variables.product.prodname_dependabot %} のプルリクエストの頻度

設定ファイルで、新しいバージョンの各エコシステムをチェックする頻度を、毎日、毎週、毎月の中から指定します。

{% data reusables.dependabot.initial-updates %}

セキュリティアップデートを有効にした場合、セキュリティアップデートの追加に対するプルリクエストが表示されることがあります。 これらは、デフォルトブランチへの依存関係に関する Dependabot アラートによってトリガーされます。 {% data variables.product.prodname_dependabot %} はプルリクエストを自動的に生成し、脆弱性のある依存関係を更新します。

### サポートされているリポジトリとエコシステム

サポートされているパッケージマネージャーのいずれかの依存関係マニフェストまたはロックファイルを含むリポジトリのバージョン更新を設定できます。

{% data reusables.dependabot.supported-package-managers %}

リポジトリですでに依存関係管理にインテグレーションを使用している場合は、{% data variables.product.prodname_dependabot %} を有効にする前にそれを無効にする必要があります。 詳しい情報については、「[インテグレーションについて](/github/customizing-your-github-workflow/about-integrations)」を参照してください。
