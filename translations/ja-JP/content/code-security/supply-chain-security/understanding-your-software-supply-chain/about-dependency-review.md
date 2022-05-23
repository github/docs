---
title: 依存関係のレビューについて
intro: 依存関係のレビューは、脆弱性のある依存関係を自分の環境に持ち込んでしまう前に捉え、ライセンス、依存物、依存関係の期間に関する情報を提供します。
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: 依存関係のレビュー
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
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

時に、マニフェスト内の 1 つの依存関係のバージョンを更新して、プルリクエストを生成することがあります。 ただし、この直接依存関係の更新バージョンでも依存関係が更新されている場合は、プルリクエストに予想よりも多くの変更が加えられている可能性があります。 各マニフェストとロックファイルの依存関係のレビューにより、何が変更されたか、新しい依存関係バージョンのいずれかに既知の脆弱性が含まれているかどうかを簡単に確認できます。

プルリクエストで依存関係のレビューを確認し、脆弱性としてフラグが付けられている依存関係を変更することで、プロジェクトに脆弱性が追加されるのを防ぐことができます。 依存関係のレビューの動作に関する詳しい情報については「[Pull Request中の依存関係の変更のレビュー](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。

依存関係レビューの設定に関する詳しい情報については「[依存関係レビューの設定](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)」を参照してください。

{% data variables.product.prodname_dependabot_alerts %} は、すでに依存関係にある脆弱性を検出しますが、あとで修正するよりも、潜在的な問題が持ち込まれることを回避する方がはるかに良いです。 {% data variables.product.prodname_dependabot_alerts %}に関する詳しい情報については「[{% data variables.product.prodname_dependabot_alerts %}について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)」を参照してください。

依存関係のレビューは、依存関係グラフと同じ言語とパッケージ管理エコシステムをサポートしています。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

{% data variables.product.product_name %}で利用できるサプライチェーンの機能に関する詳しい情報については「[サプライチェーンのセキュリティについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)」を参照してください。

{% ifversion ghec or ghes %}
## 依存関係レビューの有効化

依存関係レビューの機能は、依存関係グラフを有効化すると利用できるようになります。 詳しい情報については{% ifversion ghec %}「[依存関係グラフの有効化](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph)」{% elsif ghes %}「[Enterpriseでの依存関係グラフの有効化](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)」{% endif %}を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6396 %}
## 依存関係レビューの施行

{% data reusables.dependency-review.dependency-review-action-beta-note %}

Dependency Review GitHub Actionをリポジトリで使って、Pull Requestに対する依存関係レビューを施行できます。 このアクションは、Pull Request中のパッケージバージョンの変更によってもたらされる依存関係の脆弱なバージョンをスキャンし、関連するセキュリティ脆弱性について警告してくれます。 これによって、Pull Requestで何が変更されるかが見えやすくなり、リポジトリに脆弱性が追加されることを避けやすくなります。 詳しい情報については[`dependency-review-action`](https://github.com/actions/dependency-review-action)を参照してください。

![依存関係レビューアクションの例](/assets/images/help/graphs/dependency-review-action.png)

Dependency Review GitHub Actionのチェックは、脆弱性のあるパッケージを見つけると失敗しますが、リポジトリのオーナーがマージの前にチェックをパスすることを必須としている場合にのみ、そのPull Requestがマージされるのをブロックします。 詳しい情報については、「[保護されたブランチについて](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)」を参照してください。

このアクションはDependency Review REST APIを使ってベースコミットとheadコミット間の依存関係の変化のdiffを取得します。 Dependency Review API を使って、リポジトリでの任意の2つのコミット間の脆弱性のデータを含む依存関係の変化のdiffを取ることができます。 詳しい情報については「[依存関係レビュー](/rest/reference/dependency-graph#dependency-review)」を参照してください。
{% endif %}
