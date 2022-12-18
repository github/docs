---
title: 依存関係の確認について
intro: 依存関係のレビューを使うと、安全でない依存関係を自分の環境に持ち込んでしまう前に捉え、ライセンス、依存物、依存関係の期間に関する情報を確認できます。
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
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
ms.openlocfilehash: 36a80324e75f6ffbe96a2b46016d56561da931f0
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164115'
---
## 依存関係の確認について

{% data reusables.dependency-review.feature-overview %}  

プルリクエストがリポジトリのデフォルトブランチを対象とし、パッケージマニフェストまたはロックファイルへの変更が含まれている場合は、依存関係のレビューを表示して、何が変更されたかを確認できます。 依存関係のレビューには、ロックファイル内の間接的な依存関係への変更の詳細が含まれ、追加または更新された依存関係のいずれかに既知の脆弱性が含まれているかどうかが示されます。

時に、マニフェスト内の 1 つの依存関係のバージョンを更新して、プルリクエストを生成することがあります。 ただし、この直接依存関係の更新バージョンでも依存関係が更新されている場合は、プルリクエストに予想よりも多くの変更が加えられている可能性があります。 各マニフェストとロックファイルの依存関係のレビューにより、何が変更されたか、新しい依存関係バージョンのいずれかに既知の脆弱性が含まれているかどうかを簡単に確認できます。

プルリクエストで依存関係のレビューを確認し、脆弱性としてフラグが付けられている依存関係を変更することで、プロジェクトに脆弱性が追加されるのを防ぐことができます。 依存関係レビューのしくみについて詳しくは、「[プルリクエストでの依存関係の変更の確認](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。

依存関係レビューの構成について詳しくは、「[依存関係レビューの構成](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)」を参照してください。

{% data variables.product.prodname_dependabot_alerts %} は、すでに依存関係にある脆弱性を検出しますが、あとで修正するよりも、潜在的な問題が持ち込まれることを回避する方がはるかに良いです。 {% data variables.product.prodname_dependabot_alerts %} の詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)」を参照してください。

依存関係のレビューは、依存関係グラフと同じ言語とパッケージ管理エコシステムをサポートしています。 詳細については、「[依存関係グラフの概要](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

{% data variables.product.product_name %} で利用できるサプライ チェーン機能の詳細については、「[サプライ チェーンのセキュリティについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)」を参照してください。

{% ifversion ghec or ghes %}
## 依存関係レビューを有効にする

依存関係グラフを有効にすると、依存関係レビューが使用できるようになります。 詳細については、「{% ifversion ghec %}[依存関係グラフの有効化](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[エンタープライズの依存関係グラフの有効化](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
## 依存関係レビューの適用

このアクションは、{% data variables.product.prodname_GH_advanced_security %} が有効になっているすべての{% ifversion fpt or ghec %}パブリック リポジトリと、プライベート {% endif %}リポジトリで使用できます。

{% data reusables.dependency-review.action-enterprise %}

リポジトリで {% data variables.product.prodname_dependency_review_action %} を使用して、pull request に依存関係レビューを適用できます。 このアクションは、pull request のパッケージ バージョンの変更によって発生した依存関係の脆弱なバージョンをスキャンし、関連するセキュリティの脆弱性について警告します。 これにより、pull request で何が変更されているかをより正確に把握でき、リポジトリに脆弱性が追加されるのを防ぐことができます。 詳細については、「[`dependency-review-action`](https://github.com/actions/dependency-review-action)」を参照してください。

![依存関係レビュー アクションの例](/assets/images/help/graphs/dependency-review-action.png)

既定では、脆弱性のあるパッケージが検出された場合、{% data variables.product.prodname_dependency_review_action %} チェックは失敗します。 リポジトリの所有者が依存関係レビューのチェックに合格することを要求している場合、チェックが失敗すると pull request のマージがブロックされます。 詳細については、「[保護されたブランチについて](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)」を参照してください。

このアクションでは、 Dependency Review REST API を使用して、ベース コミットとヘッド コミットの間での依存関係変更の差分が取得されます。 Dependency Review API を使用すると、リポジトリ上の 2 つのコミット間で、依存関係の変更の差分 (脆弱性データを含む) を取得できます。 詳細については、「[依存関係のレビュー](/rest/reference/dependency-graph#dependency-review)」を参照してください。

{% ifversion dependency-review-action-configuration %} ニーズに合わせて {% data variables.product.prodname_dependency_review_action %} を構成できます。 たとえば、アクションが失敗する重大度レベルを指定{% ifversion dependency-review-action-licenses %}したり、スキャンするライセンスの許可または拒否リストを設定したり{% endif %}できます。 詳細については、[依存関係レビューの構成](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)に関するページを参照してください。 {% endif %}

{% endif %}

