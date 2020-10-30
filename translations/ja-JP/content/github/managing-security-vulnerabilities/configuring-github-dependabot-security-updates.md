---
title: GitHub Dependabot のセキュリティアップデートを設定する
intro: '{% data variables.product.prodname_dependabot_security_updates %} または手動のプルリクエストを使用して、脆弱性のある依存関係を簡単に更新できます。'
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_dependabot_security_updates %}について

{% data variables.product.prodname_dependabot_short %} は {% data variables.product.prodname_advisory_database %} や [WhiteSource](https://www.whitesourcesoftware.com/vulnerability-database) などのセキュリティアドバイザリを監視し、リポジトリの依存関係グラフで新たに脆弱性のある依存関係を検出すると、プルリクエストを自動的にトリガーします。 {% data variables.product.prodname_advisory_database %} の詳細については、「[{% data variables.product.prodname_advisory_database %} について](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database#about-the-github-advisory-database)」を参照してください。

{% data reusables.dependabot.upgrade-dependency-to-minimum-secure-version %}

{% data variables.product.prodname_dependabot_short %} は、脆弱性のある依存関係のアラートにプルリクエストへのリンクを含めます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」および「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。

各セキュリティアップデートには、提案された修正を迅速かつ安全に確認してプロジェクトにマージするために必要なすべてのものが含まれています。 これには、リリースノート、変更ログエントリ、コミットの詳細などの脆弱性に関する情報が含まれます。 プルリクエストが解決する脆弱性の詳細は、リポジトリの {% data variables.product.prodname_dependabot_short %} アラートにアクセスできないユーザには表示されません。

セキュリティアップデートを含むプルリクエストをマージすると、対応するアラートがリポジトリに対して解決済みとしてマークされます。

{% note %}

**注釈:** {% data variables.product.prodname_dependabot_security_updates %} は、依存関係グラフによって追跡される依存関係のセキュリティの脆弱性のみを解決します。 セキュリティアップデートは、プライベートリポジトリでホストされているプライベートレジストリまたはパッケージの脆弱性を解決するために作成されていません。 ただし、間接的または推移的な依存関係は、ロックファイルなどで明示的に定義されている場合に含まれます。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。 さらに、依存関係が脆弱であると検出された場合、{% data variables.product.prodname_dependabot_security_updates %} がロックファイルへの修正案を含むプルリクエストを自動的に作成することを強調することが重要です。

{% endnote %}

{% data variables.product.prodname_dependabot_short %} アラートと依存関係グラフを使用する任意のリポジトリで {% data variables.product.prodname_dependabot_security_updates %} を有効にすることができます。 個々のリポジトリ、またはユーザアカウントまたは Organization が所有するすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にすることができます。 詳しい情報については、以下の「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-github-dependabot-security-updates-for-your-repositories)」を参照してください。

{% data reusables.dependabot.dependabot-tos %}

### サポートされているリポジトリ

{% data variables.product.prodname_dotcom %} は、これらの前提条件を満たすすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を自動的に有効にします。

{% note %}

**Note**: You can manually enable {% data variables.product.prodname_dependabot_security_updates %}, even if the repository doesn't meet some of the prerequisites below. For example, you can enable {% data variables.product.prodname_dependabot_security_updates %} on a fork, or for a package manager that isn't directly supported by following the instructions in "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-github-dependabot-security-updates-for-your-repositories)."

{% endnote %}

| 自動有効化の前提条件                                                                                                                           | 詳細情報                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| リポジトリがフォークではない                                                                                                                       | 「[フォークについて](/github/collaborating-with-issues-and-pull-requests/about-forks)」                                                                                 |
| リポジトリがアーカイブされていない                                                                                                                    | 「[リポジトリをアーカイブする](/github/creating-cloning-and-archiving-repositories/archiving-repositories)」                                                                 |
| リポジトリがパブリックである、またはリポジトリがプライベートであり、リポジトリの設定で {% data variables.product.prodname_dotcom %}、依存関係グラフ、および脆弱性アラートによる読み取り専用分析が有効化されている | 「[プライベートリポジトリのデータ使用設定を管理する](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)」             |
| リポジトリに {% data variables.product.prodname_dotcom %} がサポートするパッケージエコシステムの依存関係マニフェストファイルが含まれている                                    | 「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」                             |
| {% data variables.product.prodname_dependabot_security_updates %} がリポジトリに対して無効になっていない                                         | 「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-github-dependabot-security-updates-for-your-repositories)」 |
| リポジトリが依存関係管理の統合をまだ使用していない                                                                                                            | "[インテグレーションについて](/github/customizing-your-github-workflow/about-integrations)"                                                                                |

リポジトリでセキュリティアップデートが有効になっておらず、理由が不明の場合は、まず以下の手順のセクションに記載されている指示に従って有効にしてみてください。 それでもセキュリティアップデートが機能しない場合は、[サポートにお問い合わせください](https://support.github.com/contact)。

### 互換性スコアについて

{% data variables.product.prodname_dependabot_security_updates %} には、互換性スコアも含まれています。これは、脆弱性を更新することでプロジェクトに重大な変更が発生する可能性があるかどうかを知らせるものです。 弊社では、アップデートによりテストが失敗するかどうかを確認するため、既存のセキュリティアップデートを生成したパブリックリポジトリから、以前にパスした CI テストを調べます。 更新の互換性スコアは、依存関係に関するバージョンの更新前後で、実行した CI がパスした割合です。

### リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する

個別のリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にできます。

ユーザアカウントまたは Organization が所有するすべてのリポジトリの {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にすることもできます。 詳しい情報については、「[ユーザーアカウントのセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)」または「[Organization のセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% data variables.product.prodname_dependabot_security_updates %} には特定のリポジトリ設定が必要です。 詳しい情報については、「[サポートされているリポジトリについて](#supported-repositories)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. アラート一覧の上にあるドロップダウンメニューで [**{% data variables.product.prodname_dependabot_short %} security updates**] を選択または選択解除します。 ![{% data variables.product.prodname_dependabot_security_updates %} を有効にするオプションを含むドロップダウンメニュー](/assets/images/help/repository/enable-dependabot-security-updates-drop-down.png)

### 参考リンク

- 「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」
- 「[プライベートリポジトリのデータ使用設定を管理する](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)」
- 「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」
