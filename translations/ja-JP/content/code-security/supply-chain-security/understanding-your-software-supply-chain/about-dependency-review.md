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

時に、マニフェスト内の 1 つの依存関係のバージョンを更新して、プルリクエストを生成することがあります。 ただし、この直接依存関係の更新バージョンでも依存関係が更新されている場合は、プルリクエストに予想よりも多くの変更が加えられている可能性があります。 各マニフェストとロックファイルの依存関係のレビューにより、何が変更されたか、新しい依存関係バージョンのいずれかに既知の脆弱性が含まれているかどうかを簡単に確認できます。

プルリクエストで依存関係のレビューを確認し、脆弱性としてフラグが付けられている依存関係を変更することで、プロジェクトに脆弱性が追加されるのを防ぐことができます。 依存関係のレビューの動作に関する詳しい情報については「[Pull Request中の依存関係の変更のレビュー](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。

For more information about configuring dependency review, see "[Configuring dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)."

{% data variables.product.prodname_dependabot_alerts %} は、すでに依存関係にある脆弱性を検出しますが、あとで修正するよりも、潜在的な問題が持ち込まれることを回避する方がはるかに良いです。 For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."

依存関係のレビューは、依存関係グラフと同じ言語とパッケージ管理エコシステムをサポートしています。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

{% ifversion ghec or ghes %}
## Enabling dependency review

The dependency review feature becomes available when you enable the dependency graph. For more information, see "{% ifversion ghec %}[Enabling the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6396 %}
## Dependency review enforcement

{% data reusables.dependency-review.dependency-review-action-beta-note %}

You can use the Dependency Review GitHub Action in your repository to enforce dependency reviews on your pull requests. The action scans for vulnerable versions of dependencies introduced by package version changes in pull requests, and warns you about the associated security vulnerabilities. This gives you better visibility of what's changing in a pull request, and helps prevent vulnerabilities being added to your repository. For more information, see [`dependency-review-action`](https://github.com/actions/dependency-review-action).

![Dependency review action example](/assets/images/help/graphs/dependency-review-action.png)

The Dependency Review GitHub Action check will fail if it discovers any vulnerable package, but will only block a pull request from being merged if the repository owner has required the check to pass before merging. 詳しい情報については、「[保護されたブランチについて](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)」を参照してください。

The action uses the Dependency Review REST API to get the diff of dependency changes between the base commit and head commit. You can use the Dependency Review API to get the diff of dependency changes, including vulnerability data, between any two commits on a repository. For more information, see "[Dependency review](/rest/reference/dependency-graph#dependency-review)."
{% endif %}
