---
title: 自動セキュリティアップデートを設定する
intro: 自動または手動のプルリクエストを使って、脆弱性のある依存対象を簡単に更新できます。
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
versions:
  free-pro-team: '*'
---

### 自動セキュリティアップデートについて

セキュリティアラートと依存関係グラフを使っているどのリポジトリに対しても、自動セキュリティアップデートを有効化できます。 個々のリポジトリ、またはユーザアカウントあるいは Organization が所有するすべてのリポジトリの自動セキュリティアップデートを無効にすることができます。

リポジトリで脆弱性のある依存関係についてのセキュリティアラートを受信した場合、そのセキュリティアラートに対応するプルリクエスト内の自動セキュリティアップデートを使って、脆弱性を解決できます。 自動セキュリティアップデートは、依存関係グラフを使っているリポジトリ内で利用できます。 デフォルトでは、{% data variables.product.prodname_dotcom %} は、脆弱性のある依存関係を、脆弱性を避けるために必要な、可能な限り最小のバージョンに更新するため、リポジトリ内に自動的にプルリクエストを作成します。 自動的なプルリクエストを無効にし、手動でプルリクエストを作成して任意で脆弱性を更新するようにすることもできます。

自動的なセキュリティリクエストには、リリースノート、変更ログのエントリ、コミットの詳細などの、脆弱性についての情報を含めて、提案された修正を素早く安全にレビューしマージするために必要なものがすべて含まれています。

自動セキュリティアップデートは、{% data variables.product.prodname_dotcom %} の代理である Dependabot によりオープンされます。 Dependabot {% data variables.product.prodname_github_app %} は、自動セキュリティアップデートが有効なすべてのリポジトリに、自動的にインストールされます。

リポジトリのセキュリティアラートにアクセスできる人には、関連するセキュリティアラートのリンクが表示されます。ただし、リポジトリのセキュリティアラートにアクセスできないがプルリクエストにはアクセスできる人は、プルリクエストがどの脆弱性を解決するかを見ることはできません。

自動セキュリティアップデートを含むプルリクエストをマージすると、リポジトリの対応するセキュリティアラートは解決済みとマークされます。

{% note %}

**注釈:** 自動セキュリティアップデートが解決するのは、セキュリティの脆弱性のみです。 自動セキュリティアップデートは、プライベートレジストリや、プライベートリポジトリにホストされたパッケージにある脆弱性を解決するようには作られていません。

{% endnote %}

### サポートされているリポジトリ

{% data variables.product.prodname_dotcom %} は、これらの要件を満たすすべてのリポジトリの自動セキュリティアップデートを自動的に有効にします。

{% note %}

**注釈**: 2019年11月以前に作成されたリポジトリについては、リポジトリが次の基準を満たし、2019年5月23日以降に少なくとも1回のプッシュを受け取った場合、{% data variables.product.prodname_dotcom %} は自動セキュリティアップデートを自動的に有効にしています。

{% endnote %}

| 要件                                                                                                                                   | 詳細                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| リポジトリがフォークではない                                                                                                                       | 「[フォークについて](/github/collaborating-with-issues-and-pull-requests/about-forks)」                                                                                                                           |
| リポジトリがアーカイブされていない                                                                                                                    | 「[リポジトリをアーカイブする](/github/creating-cloning-and-archiving-repositories/archiving-repositories)」                                                                                                           |
| リポジトリがパブリックである、またはリポジトリがプライベートであり、リポジトリの設定で {% data variables.product.prodname_dotcom %}、依存関係グラフ、および脆弱性アラートによる読み取り専用分析が有効化されている | 「[プライベートリポジトリのデータ使用をオプトインする](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)」 |
| リポジトリに {% data variables.product.prodname_dotcom %} がサポートするパッケージエコシステムの依存関係マニフェストファイルが含まれている                                    | 「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)」                                                |
| 自動セキュリティアップデートがリポジトリに対して無効化されていない                                                                                                    | 「[リポジトリの自動セキュリティアップデートを管理する](#managing-automated-security-updates-for-your-repository)」                                                                                                                 |
| リポジトリが依存関係管理の統合をまだ使用していない                                                                                                            | "[インテグレーションについて](/github/customizing-your-github-workflow/about-integrations)"                                                                                                                          |

リポジトリで自動セキュリティアップデートが有効になっておらず、その原因が不明の場合は、[サポートにお問い合わせ](https://support.github.com/contact)ください。

### 互換性スコアについて

自動セキュリティアップデートには、互換性スコアも含まれています。これは、脆弱性を更新することで、プロジェクトに破壊的な変更が起こる可能性があるかどうかを知らせるものです。 弊社では、アップデートによりテストが失敗するかどうかを確認するため、既存のセキュリティアップデートを生成したパブリックリポジトリから、以前にパスした CI テストを調べます。 更新の互換性スコアは、依存関係に関するバージョンの更新前後で、実行した CI がパスした割合です。

### リポジトリの自動セキュリティアップデートを管理する

個々のリポジトリの自動セキュリティアップデートは、有効化または無効化できます。

自動セキュリティアップデートには、特定のリポジトリ設定が必要です。 詳しい情報については、「[サポートされているリポジトリについて](#supported-repositories)」を参照してください。

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
4. アラート一覧の上にあるドロップダウンメニューで [**Automated security updates**] を選択または選択解除します。 ![自動セキュリティアップデートを有効にするオプションがあるドロップダウンメニュー](/assets/images/help/repository/enable-automated-security-updates-drop-down.png)

### ユーザアカウントの自動セキュリティアップデートを管理する

ユーザアカウントが所有するすべてのリポジトリの自動セキュリティアップデートを無効にすることができます。 その場合でも、ユーザアカウントが所有する個々のリポジトリの自動セキュリティアップデートを有効にすることができます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### Organization の自動セキュリティアップデートを管理する

Organization のオーナーは、Organization が所有するすべてのリポジトリの自動セキュリティアップデートを無効にすることができます。 その場合、Organization が所有する個々のリポジトリに対する管理者権限を持つユーザは、そのリポジトリの自動セキュリティアップデートを有効にすることができます。

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### 参考リンク

- 「[脆弱性のある依存関係に対するセキュリティアラートについて](/articles/about-security-alerts-for-vulnerable-dependencies)」
- 「[プライベートリポジトリのデータ使用をオプトインする](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)」
- 「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)」
