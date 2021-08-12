---
title: Organizationの管理
intro: 'メトリクスに含まれる{% data variables.product.prodname_enterprise %}のOrganizationを管理できます。'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-organizations
  - /insights/installing-and-configuring-github-insights/managing-organizations
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage organizations.'
versions:
  enterprise-server: '*'
---
### Organizationの管理について

{% data variables.product.prodname_insights %}にOrganizationを追加すると、そのOrganizationが所有しているリポジトリはメトリクスに含まれます。 すべてのリポジトリを追加することも、追加するリポジトリを選択することもできます。

{% data variables.product.prodname_enterprise %}でOrganizationのオーナーならば、{% data variables.product.prodname_insights %}にOrganizationを追加できます。 Organizationのオーナーでない場合は、オーナーに対してOrganizationを{% data variables.product.prodname_insights %}に追加してもらうためのリクエストを送信できます。

### {% data variables.product.prodname_insights %}へのOrganizationの追加

{% data variables.product.prodname_insights %}にOrganizationを追加すると、そのOrganizationに{% data variables.product.prodname_insights %}のための{% data variables.product.prodname_github_app %}がインストールされます。 {% data variables.product.prodname_github_app %}に関する詳しい情報については「[{% data variables.product.prodname_insights %}のインストール](/github/installing-and-configuring-github-insights/installing-github-insights)」を参照してください。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
{% data reusables.github-insights.add-organizations %}
4. {% data variables.product.prodname_insights %}に追加したいOrganizationをクリックしてください。
5. すべてのリポジトリを追加するか、指定したリポジトリを含めるかを選択してください。 ![すべてのリポジトリの追加かリポジトリの選択のチェックボックス](/assets/images/help/insights/all-or-select-repos.png)
6. 選択したリポジトリに{% data variables.product.product_name %}をインストールすることにしたなら、ドロップダウンメニューを使い、含めたいリポジトリを選択してください。 ![リポジトリ選択のドロップダウンメニュー](/assets/images/help/insights/select-repos.png)
5. **Install（インストール）**もしくは**Request（リクエスト）**をクリックしてください。

### {% data variables.product.prodname_insights %}からのOrganizationの削除

{% data variables.product.prodname_insights %}からOrganizationを削除すると、そのOrganizationから{% data variables.product.prodname_insights %}のための{% data variables.product.prodname_github_app %}がアンインストールされます。 {% data variables.product.prodname_github_app %}に関する詳しい情報については「[{% data variables.product.prodname_insights %}のインストール](/github/installing-and-configuring-github-insights/installing-github-insights)」を参照してください。

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
{% data reusables.github-insights.add-organizations %}
4. {% data variables.product.prodname_insights %}から削除したいOrganizationをクリックしてください。
4. "Uninstall {% data variables.product.prodname_insights %}（{% data variables.product.prodname_insights %}のアンインストール）"の下で、**Uninstall（アンインストール）**をクリックしてください。 ![アンインストールボタン](/assets/images/help/insights/uninstall-button.png)
5. [**OK**] をクリックします。
