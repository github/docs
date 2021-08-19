---
title: プライベートリポジトリ用のデータ利用設定を管理する
intro: '{% data variables.product.product_name %} で、関連するツール、人、プロジェクト、情報につなげるには、プライベートリポジトリ用のデータを設定します。'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

### プライベートリポジトリ用のデータ利用について

プライベートリポジトリのデータ利用を設定すると、依存グラフにアクセスできます。依存グラフでは、リポジトリの依存関係を追跡し、{% data variables.product.product_name %} が脆弱性のある依存関係を検出したときに {% data variables.product.prodname_dependabot_alerts %} を受け取ることができます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)」を参照してください。

### データ利用機能の有効化と無効化

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. [Configure security and analysis features] で、機能の右側にある [**Disable**] または [**Enable**] をクリックします。 ![[Configure security and analysis] 機能の [Enable] または [Disable] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-private.png)

### 参考リンク

- [{% data variables.product.prodname_dotcom %} によるユーザのデータの利用について](/articles/about-github-s-use-of-your-data)
- [リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- 「[リポジトリのセキュリティおよび分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」
