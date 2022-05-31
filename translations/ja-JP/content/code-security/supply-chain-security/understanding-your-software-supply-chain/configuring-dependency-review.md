---
title: 依存関係レビューの設定
intro: 依存関係レビューを使って、プロジェクトに追加される前に脆弱性を捕捉できます。
shortTitle: 依存関係レビューの設定
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
---

{% data reusables.dependency-review.beta %}

## 依存関係のレビューについて

{% data reusables.dependency-review.feature-overview %}

詳しい情報については「[依存関係レビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」及び「[Pull Request中での依存関係の変化のレビュー](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。

## 依存関係レビューの設定について

{% ifversion fpt %}
依存関係レビューは、すべての製品のすべてのパブリックリポジトリで利用可能であり、無効化できません。 依存関係レビューは、GitHub Enterprise Cloudを利用し、[{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)のライセンスを持っているOrganizationが所有するプライベートリポジトリで利用できます。 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)を参照してください。

{% elsif ghec %}
依存関係レビューは、パブリックリポジトリに対して{% data variables.product.product_name %}に含まれています。 依存関係レビューをOrganizationが所有するプライベートリポジトリで使うには、[{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)を持っていることと、依存関係グラフが有効化されていることが必要です。

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. "{% data variables.product.prodname_GH_advanced_security %}"が有効化されていない場合、その隣の**Enable（有効化）**をクリックしてください。 !["Enable" ボタンが強調されたGitHub Advanced Security機能のスクリーンショット](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes %}
依存関係レビューは、依存関係グラフが{% data variables.product.product_location %}で有効化されており、Organizationもしくはリポジトリで{% data variables.product.prodname_advanced_security %}が有効化されている場合に利用できます。 詳しい情報については「[Enterpriseでの{% data variables.product.prodname_GH_advanced_security %}の有効化](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)」を参照してください。

### 依存関係グラフが有効化されているかの確認


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. "Configure security and analysis features（セキュリティと分析機能の設定）"の下で、依存関係グラフが有効化されているかを確認してください。
1. 依存関係グラフが有効化されているなら、"{% data variables.product.prodname_GH_advanced_security %}"の隣の**Enable（有効化）**をクリックして、依存関係レビューを含む{% data variables.product.prodname_advanced_security %}を有効化してください。 Enterpriseが利用できる{% data variables.product.prodname_advanced_security %}のライセンスを持っていない場合、有効化のボタンは無効になっています。{% ifversion ghes < 3.3 %}![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.2/repository/code-security-and-analysis-enable-ghas-3.2.png){% endif %}{% ifversion ghes > 3.2 %}![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}
{% endif %}
