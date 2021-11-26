---
title: Dependabot.comからGitHubネイティブのDependabotへのアップグレード
intro: 依存関係を継続的に更新できるようにするPull Requestをマージすることによって、GitHubネイティブのDependabotへアップグレードできます。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
redirect_from:
  - /code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot
shortTitle: Dependabot.comのアップグレード
---

{% warning %}

Dependabot Preview has been shut down as of August 3rd, 2021. In order to keep getting Dependabot updates, please migrate to GitHub-native Dependabot.

Open pull requests from Dependabot Preview will remain open, including the pull request to upgrade to GitHub-native Dependabot, but the bot itself will no longer work on your {% data variables.product.prodname_dotcom %} accounts and organizations.

{% endwarning %}

## Dependabot Previewから{% data variables.product.prodname_dotcom %}ネイティブの{% data variables.product.prodname_dependabot %}へのアップグレードについて

Dependabot Previewは{% data variables.product.prodname_dotcom %}に直接組み込まれているので、別個のアプリケーションをインストールして使うことなく、{% data variables.product.prodname_dotcom %}のすべての他の機能とともに{% data variables.product.prodname_dependabot %}を使用できます。 {% data variables.product.prodname_dotcom %}ネイティブの{% data variables.product.prodname_dependabot %}に移行することによって、より多くの[エコシステムの更新](https://github.com/github/roadmap/issues/150)、[改善された通知](https://github.com/github/roadmap/issues/133)、[{% data variables.product.prodname_ghe_server %}](https://github.com/github/roadmap/issues/86)及び[{% data variables.product.prodname_ghe_managed %}](https://github.com/github/roadmap/issues/135)に対する{% data variables.product.prodname_dependabot %}サポートを含む、多くの素晴らしい機能を{% data variables.product.prodname_dependabot %}へもたらすことに私たちが集中できるようにもなります。

## Dependabot Previewと{% data variables.product.prodname_dotcom %}ネイティブの{% data variables.product.prodname_dependabot %}との違い

Dependabot Previewのほとんどの機能は{% data variables.product.prodname_dotcom %}ネイティブの{% data variables.product.prodname_dependabot %}にありますが、いくつか利用できないものもあります。
- **ライブアップデート** これは将来復活させたいと考えています。 現時点では、新しいパッケージをリリース後1日以内に取得するために、{% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}を毎日実行することができます。
- **PHP環境変数レジストリ** 環境変数`ACF_PRO_KEY`に依存しているプロジェクトでは、Advanced Custom Fieldsプラグインのライセンスされたコピーを取り入れることができます。 たとえば、[dependabot/acf-php-example](https://github.com/dependabot/acf-php-example#readme)を参照してください。 他の環境変数については、{% data variables.product.prodname_actions %}を使ってそれらのレジストリから依存関係をフェッチできます。
- **自動マージ** 依存関係をマージする前には、必ずそれらを検証することをおすすめします。そのため、自動マージは予想される将来においてはサポートされません。 依存関係を詳しく吟味していたり、内部的な依存関係のみを使っている場合には、サードパーティの自動マージアプリケーションを追加するか、マージのためのGitHub Actionsをセットアップすることをおすすめします。 We have provided the [`dependabot/fetch-metadata`](https://github.com/marketplace/actions/fetch-metadata-from-dependabot-prs) action to help developers [enable GitHub's automerge](https://github.com/dependabot/fetch-metadata/#enabling-auto-merge).

{% data variables.product.prodname_dotcom %}ネイティブの{% data variables.product.prodname_dependabot %}では、設定ファイルを使ってすべてのバージョン更新を設定できます。 このファイルはDependabot Previewの設定ファイルに似ていますが、アップグレードのPull Requestに自動的に含まれるいくつかの変更と改善点があります。 アップグレードのPull Requestに関する詳しい情報については「[GitHubネイティブDependabotへのアップグレード](/code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot#upgrading-to-github-native-dependabot)」を参照してください。

以前はDependabot.comダッシュボードにあった{% data variables.product.prodname_dotcom %}ネイティブの{% data variables.product.prodname_dependabot %}の更新ログを参照するには以下のようにします。

  1. リポジトリの**Insights**ページにアクセスしてください。
  2. 左にある**Dependency graph（依存関係グラフ）**をクリックしてください。
  3. **{% data variables.product.prodname_dependabot %}**をクリックしてください。

{% data variables.product.prodname_dotcom %}ネイティブの{% data variables.product.prodname_dependabot %}でのバージョン更新に関する詳しい情報については「[Dependabotのバージョン更新について](/code-security/supply-chain-security/about-dependabot-version-updates)」を参照してください。

## {% data variables.product.prodname_dotcom %}ネイティブ{% data variables.product.prodname_dependabot %}へのアップグレード

Dependabot Previewから{% data variables.product.prodname_dotcom %}ネイティブの{% data variables.product.prodname_dependabot %}へアップグレードするには、リポジトリ中の*Upgrade to GitHub-native Dependabot* Pull Requestをマージすることが必要です。 このPull Requestには、{% data variables.product.prodname_dotcom %}ネイティブの{% data variables.product.prodname_dependabot %}が必要とする更新された設定ファイルが含まれています。

プライベートリポジトリを使っているなら、Organizationのセキュリティと分析の設定でDependabotにそれらのリポジトリへのアクセスを許可しなければなりません。 詳しい情報については「[Dependabotに対するプライベートな依存関係へのアクセスの許可](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)」を参照してください。 以前はDependabotはOrganization内のすべてのリポジトリにアクセスできましたが、最小権限の原則をDependabotに適用するほうがはるかに安全であることから、この変更を実装しました。

プライベートリポジトリを使っているなら、既存のDependabot PreviewのシークレットをリポジトリもしくはOrganizationの"Dependabot secrets"に追加しなければなりません。 詳しい情報については「[Dependabotの暗号化されたシークレットの管理](/code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot)」を参照してください。

移行に関する質問があったり支援が必要な場合は、[dependabot/dependabot-core](https://github.com/dependabot/dependabot-core/issues/new?assignees=%40dependabot%2Fpreview-migration-reviewers&labels=E%3A+preview-migration&template=migration-issue.md&title=)リポジトリでIssueを見たりオープンしたりできます。
