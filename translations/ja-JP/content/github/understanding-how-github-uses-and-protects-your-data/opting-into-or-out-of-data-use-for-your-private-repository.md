---
title: プライベートリポジトリ用のデータ利用のオプトインもしくはオプトアウト
intro: '{% data variables.product.product_name %} で、関連するツール、人、プロジェクト、情報につなげるには、プライベートリポジトリ用のデータをオプトインします。 プライベートリポジトリ用のデータをオプトインし、{% data variables.product.product_name %} でデータを使用する必要がなくなった場合は、オプトアウトできます。'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
---

### プライベートリポジトリ用のデータ利用について

プライベートリポジトリのデータ利用をオプトインすると、依存グラフにアクセスできます。依存グラフでは、リポジトリの依存関係を追跡し、{% data variables.product.product_name %} が脆弱な依存関係を検出したときにセキュリティアラートを受け取ることができます。 詳しい情報については[脆弱性のある依存関係に対するセキュリティアラートについて](/articles/about-security-alerts-for-vulnerable-dependencies)を参照してください。

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

### プライベートリポジトリ用のデータ利用のオプトイン

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Data services] で、[**Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository**] を選択します。 ![[Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository] チェックボックス](/assets/images/help/repository/private-repo-data-use-opt-in.png)
4. オプションで、データ利用を有効にしたい追加のサービスの隣にあるチェックボックスを選択します。 ![追加するサービスとそのチェックボックスのリスト](/assets/images/help/repository/private-repo-data-use-additional-services.png)

### プライベートリポジトリ用のデータ利用のオプトアウト

{% tip %}

**ヒント:** 特定のサービス用のデータ利用をオプトアウトするには、サービスの隣にあるチェックボックスの選択を解除します。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Data services] で、[**Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository**] の選択を解除します。 ![[Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository] チェックボックス](/assets/images/help/repository/private-repo-data-use-opt-out.png)

### 参考リンク

- [{% data variables.product.prodname_dotcom %} によるユーザのデータの利用について](/articles/about-github-s-use-of-your-data)
- 「[リポジトリ内の脆弱な依存関係を表示・更新する](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)」
- [Organization のリポジトリ内の脆弱性のある依存関係に関するアラートの管理](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)
