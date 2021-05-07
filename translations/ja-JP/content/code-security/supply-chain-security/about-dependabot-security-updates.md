---
title: Dependabot のセキュリティアップデート
intro: '{% data variables.product.prodname_dependabot %} は、セキュリティアップデートプログラムを使用してプルリクエストを発行することにより、脆弱性のある依存関係を修正できます。'
shortTitle: Dependabot のセキュリティアップデート
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/about-dependabot-security-updates
versions:
  free-pro-team: '*'
topics:
  - Security
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About Dependabot security updates".-->

### {% data variables.product.prodname_dependabot_security_updates %} について

{% data variables.product.prodname_dependabot_security_updates %} で、リポジトリ内の脆弱性のある依存関係を簡単に修正できます。 この機能を有効にすると、リポジトリの依存関係グラフで脆弱性のある依存関係に対して {% data variables.product.prodname_dependabot %} アラートが発生すると、{% data variables.product.prodname_dependabot %} は自動的にそれを修正しようとします。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」 および「[{% data variables.product.prodname_dependabot_security_updates %} を設定する](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。

{% data variables.product.prodname_dotcom %} may send {% data variables.product.prodname_dependabot %} alerts to repositories affected by a vulnerability disclosed by a recently published {% data variables.product.prodname_dotcom %} security advisory. 詳しい情報については、「[{% data variables.product.prodname_security_advisories %} について](/github/managing-security-vulnerabilities/about-github-security-advisories#dependabot-alerts-for-published-security-advisories)」を参照してください。


{% data variables.product.prodname_dependabot %} は、リポジトリの依存関係グラフを中断することなく、脆弱性のある依存関係を修正バージョンにアップグレードできるかどうかを確認します。 次に、 {% data variables.product.prodname_dependabot %} はプルリクエストを発生させて、パッチを含む最小バージョンに依存関係を更新し、プルリクエストを {% data variables.product.prodname_dependabot %} アラートにリンクするか、アラートのエラーを報告します。 詳しい情報については、「[{% data variables.product.prodname_dependabot %} エラーのトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)」を参照してください。

{% note %}

**注釈**

{% data variables.product.prodname_dependabot_security_updates %} 機能は、依存関係グラフと {% data variables.product.prodname_dependabot_alerts %} を有効にしているリポジトリで使用できます。 完全な依存関係グラフで識別されたすべての脆弱性のある依存関係について、{% data variables.product.prodname_dependabot %} アラートが表示されます。 ただし、セキュリティアップデートプログラムは、マニフェストファイルまたはロックファイルで指定されている依存関係に対してのみトリガーされます。 {% data variables.product.prodname_dependabot %} は、明示的に定義されていない間接的または推移的な依存関係を更新できません。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included)」を参照してください。

{% endnote %}

関連する機能 {% data variables.product.prodname_dependabot_version_updates %} を有効にして、{% data variables.product.prodname_dependabot %} が古い依存関係を検出するたびに、マニフェストを最新バージョンの依存関係に更新するプルリクエストを生成させることができます。 詳しい情報については、「[{% data variables.product.prodname_dependabot %} バージョン更新について](/github/administering-a-repository/about-dependabot-version-updates)」を参照してください。

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

### セキュリティアップデートのプルリクエストについて

各プルリクエストには、提案された修正を迅速かつ安全に確認してプロジェクトにマージするために必要なすべてのものが含まれています。 これには、リリースノート、変更ログエントリ、コミットの詳細などの脆弱性に関する情報が含まれます。 プルリクエストが解決する脆弱性の詳細は、リポジトリの {% data variables.product.prodname_dependabot_alerts %} にアクセスできないユーザには表示されません。

セキュリティアップデートを含むプルリクエストをマージすると、対応する {% data variables.product.prodname_dependabot %} アラートがリポジトリに対して解決済みとしてマークされます。 {% data variables.product.prodname_dependabot %} プルリクエストの詳細については、「[依存関係の更新に関するプルリクエストを管理する](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)」を参照してください。

{% data reusables.dependabot.automated-tests-note %}

### 互換性スコアについて

{% data variables.product.prodname_dependabot_security_updates %} には、互換性スコアが含まれている場合があります。これは、脆弱性を更新することでプロジェクトに重大な変更が発生する可能性があるかどうかを知らせるものです。 これらは、同じセキュリティアップデートプログラムが生成された他のパブリックリポジトリでの CI テストから計算されます。 更新の互換性スコアは、依存関係の特定のバージョンの更新前後で、実行した CI がパスした割合です。

### {% data variables.product.prodname_dependabot %} セキュリティアップデートの通知について

{% data variables.product.company_short %} で通知をフィルタして、{% data variables.product.prodname_dependabot %} セキュリティアップデートを表示できます。 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)」を参照してください。
