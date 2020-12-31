---
title: Configuring Dependabot security updates
intro: '{% data variables.product.prodname_dependabot_security_updates %} または手動のプルリクエストを使用して、脆弱性のある依存関係を簡単に更新できます。'
shortTitle: Configuring Dependabot security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
versions:
  free-pro-team: '*'
---

### About configuring {% data variables.product.prodname_dependabot_security_updates %}

You can enable {% data variables.product.prodname_dependabot_security_updates %} for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

個々のリポジトリ、またはユーザアカウントまたは Organization が所有するすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を無効にすることができます。 詳しい情報については、以下の「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-dependabot-security-updates-for-your-repositories)」を参照してください。

{% data reusables.dependabot.dependabot-tos %}

### サポートされているリポジトリ

{% data variables.product.prodname_dotcom %} は、これらの前提条件を満たすすべてのリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を自動的に有効にします。

{% note %}

**Note**: You can manually enable {% data variables.product.prodname_dependabot_security_updates %}, even if the repository doesn't meet some of the prerequisites below. For example, you can enable {% data variables.product.prodname_dependabot_security_updates %} on a fork, or for a package manager that isn't directly supported by following the instructions in "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-dependabot-security-updates-for-your-repositories)."

{% endnote %}

| 自動有効化の前提条件                                                                                                                      | 詳細情報                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| リポジトリがフォークではない                                                                                                                  | 「[フォークについて](/github/collaborating-with-issues-and-pull-requests/about-forks)」                                                                     |
| リポジトリがアーカイブされていない                                                                                                               | 「[リポジトリをアーカイブする](/github/creating-cloning-and-archiving-repositories/archiving-repositories)」                                                     |
| リポジトリがパブリックである、またはリポジトリがプライベートであり、リポジトリの設定で {% data variables.product.prodname_dotcom %}、依存関係グラフ、および脆弱性アラートによる読み取り専用分析が有効化されている | 「[プライベートリポジトリのデータ使用設定を管理する](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)」 |
| リポジトリに {% data variables.product.prodname_dotcom %} がサポートするパッケージエコシステムの依存関係マニフェストファイルが含まれている                                    | 「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」                 |
| {% data variables.product.prodname_dependabot_security_updates %} がリポジトリに対して無効になっていない                                         | 「[リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する](#managing-dependabot-security-updates-for-your-repositories)」 |
| リポジトリが依存関係管理の統合をまだ使用していない                                                                                                       | "[インテグレーションについて](/github/customizing-your-github-workflow/about-integrations)"                                                                    |

リポジトリでセキュリティアップデートが有効になっておらず、理由が不明の場合は、まず以下の手順のセクションに記載されている指示に従って有効にしてみてください。 それでもセキュリティアップデートが機能しない場合は、[サポートにお問い合わせください](https://support.github.com/contact)。

### リポジトリの {% data variables.product.prodname_dependabot_security_updates %} を管理する

個別のリポジトリに対して {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にできます。

ユーザアカウントまたは Organization が所有するすべてのリポジトリの {% data variables.product.prodname_dependabot_security_updates %} を有効または無効にすることもできます。 詳しい情報については、「[ユーザーアカウントのセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)」または「[Organization のセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% data variables.product.prodname_dependabot_security_updates %} には特定のリポジトリ設定が必要です。 詳しい情報については、「[サポートされているリポジトリについて](#supported-repositories)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. アラート一覧の上にあるドロップダウンメニューで [**{% data variables.product.prodname_dependabot %} security updates**] を選択または選択解除します。 ![{% data variables.product.prodname_dependabot_security_updates %} を有効にするオプションを含むドロップダウンメニュー](/assets/images/help/repository/enable-dependabot-security-updates-drop-down.png)

### 参考リンク

- 「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」
- 「[プライベートリポジトリのデータ使用設定を管理する](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)」
- 「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」
