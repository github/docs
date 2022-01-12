---
title: 依存関係のレビューについて
intro: 依存関係のレビューは、脆弱性のある依存関係を自分の環境に持ち込んでしまう前に捉え、ライセンス、依存物、依存関係の期間に関する情報を提供します。
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: 依存関係のレビュー
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
---

{% data reusables.dependency-review.beta %}

## 依存関係のレビューについて

{% data reusables.dependency-review.feature-overview %}

プルリクエストがリポジトリのデフォルトブランチを対象とし、パッケージマニフェストまたはロックファイルへの変更が含まれている場合は、依存関係のレビューを表示して、何が変更されたかを確認できます。 依存関係のレビューには、ロックファイル内の間接的な依存関係への変更の詳細が含まれ、追加または更新された依存関係のいずれかに既知の脆弱性が含まれているかどうかが示されます。

{% ifversion fpt or ghec %}
依存関係のレビューは次の項目で確認できます。

* すべてのパブリックリポジトリ
* 依存関係グラフが有効になっている {% data variables.product.prodname_advanced_security %} ライセンスを持つ Organization が所有するプライベートリポジトリ。 詳しい情報については、「[リポジトリの依存関係を調べる](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)」を参照してください。
{% elsif ghes or ghae %}
Dependency review is available when dependency graph is enabled for {% data variables.product.product_location %} and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository.
{% endif %}

時に、マニフェスト内の 1 つの依存関係のバージョンを更新して、プルリクエストを生成することがあります。 ただし、この直接依存関係の更新バージョンでも依存関係が更新されている場合は、プルリクエストに予想よりも多くの変更が加えられている可能性があります。 各マニフェストとロックファイルの依存関係のレビューにより、何が変更されたか、新しい依存関係バージョンのいずれかに既知の脆弱性が含まれているかどうかを簡単に確認できます。

プルリクエストで依存関係のレビューを確認し、脆弱性としてフラグが付けられている依存関係を変更することで、プロジェクトに脆弱性が追加されるのを防ぐことができます。 For more information about how dependency review works, see "[Reviewing dependency changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)."

{% data variables.product.prodname_dependabot_alerts %} は、すでに依存関係にある脆弱性を検出しますが、あとで修正するよりも、潜在的な問題が持ち込まれることを回避する方がはるかに良いです。 {% data variables.product.prodname_dependabot_alerts %} に関する詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)」を参照してください。

依存関係のレビューは、依存関係グラフと同じ言語とパッケージ管理エコシステムをサポートしています。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

## Enabling dependency review

The dependency review feature becomes available when you enable the dependency graph. {% ifversion fpt or ghec %}For more information, see "[Enabling the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph)."{% endif %}{% ifversion ghes or ghae %}For more information, see "[Enabling the dependency graph and Dependabot alerts on your enterprise account](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)."{% endif %}
