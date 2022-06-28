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

{% ifversion dependency-review-action-configuration %}
## {% data variables.product.prodname_dependency_review_action %}の設定

{% data reusables.dependency-review.dependency-review-action-beta-note %}
{% data reusables.dependency-review.dependency-review-action-overview %}

以下の設定オプションが利用できます。

| オプション              | 必須 | 使い方                                                                                                                                                       |
| ------------------ | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fail-on-severity` | 任意 | 重要度(`low`、`moderate`、`high`、`critical`)の閾値を定義します。</br>指定された重要度以上の脆弱性を導入するPull Requestについて、このアクションは失敗します。                                                  |
| `allow-licenses`   | 任意 | 許可されているライセンスのリストを含みます。 このパラメータで利用できる値は、APIドキュメンテーションの[Licenses](/rest/licenses)ページにあります。</br>このリストにマッチしないライセンスを持つ依存関係を導入するPull Requestについて、このアクションは失敗します。 |
| `deny-licenses`    | 任意 | 禁じられているライセンスのリストを含みます。 このパラメータで利用できる値は、APIドキュメンテーションの[Licenses](/rest/licenses)ページにあります。</br>このリストにマッチするライセンスを持つ依存関係を導入するPull Requestについて、このアクションは失敗します。  |

{% tip %}

**参考:** `allow-licenses`及び`deny-licenses`オプションは、相互排他です。

{% endtip %}

この{% data variables.product.prodname_dependency_review_action %}のサンプルファイルは、これらの設定オプションの使い方を示しています。

```yaml{:copy}
name: 'Dependency Review'
on: [pull_request]

permissions:
  contents: read

jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
      - name: Dependency Review
        uses: actions/dependency-review-action@v2
        with:
          # 取り得る値: "critical", "high", "moderate", "low" 
          fail-on-severity: critical
          # この2つの選択肢のいずれかだけを含めることができる: `allow-licenses` and `deny-licences`
          # ([String]). これらのライセンスだけを許可 (オプション)
          # 取り得る値: https://docs.github.com/en/rest/licensesからの任意の`spdx_id`値
          # 許可ライセンス: GPL-3.0, BSD-3-Clause, MIT

          # ([String]). これらのライセンスでPull Requestはブロック (オプション)
          # 取り得る値: https://docs.github.com/en/rest/licensesからの任意の`spdx_id`値
          # 拒否ライセンス: LGPL-2.0, BSD-2-Clause
```

これらの設定オプションに関する詳細については[`dependency-review-action`](https://github.com/actions/dependency-review-action#readme)を参照してください。
{% endif %}
