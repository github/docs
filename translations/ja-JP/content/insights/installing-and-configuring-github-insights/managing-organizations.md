---
title: Organizationの管理
intro: 'メトリクスに含まれる{{ site.data.variables.product.prodname_enterprise }}のOrganizationを管理できます。'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-organizations
permissions: '{{ site.data.variables.product.prodname_insights }}の管理権限を持つ人は、Organizationを管理できます。'
versions:
  enterprise-server: '*'
---

### Organizationの管理について

{{ site.data.variables.product.prodname_insights }}にOrganizationを追加すると、そのOrganizationが所有しているリポジトリはメトリクスに含まれます。 すべてのリポジトリを追加することも、追加するリポジトリを選択することもできます。

{{ site.data.variables.product.prodname_enterprise }}でOrganizationのオーナーならば、{{ site.data.variables.product.prodname_insights }}にOrganizationを追加できます。 Organizationのオーナーでない場合は、オーナーに対してOrganizationを{{ site.data.variables.product.prodname_insights }}に追加してもらうためのリクエストを送信できます。

### {{ site.data.variables.product.prodname_insights }}へのOrganizationの追加

{{ site.data.variables.product.prodname_insights }}にOrganizationを追加すると、そのOrganizationに{{ site.data.variables.product.prodname_insights }}のための{{ site.data.variables.product.prodname_github_app }}がインストールされます。 {{ site.data.variables.product.prodname_github_app }}に関する詳しい情報については「[{{ site.data.variables.product.prodname_insights }}のインストール](/github/installing-and-configuring-github-insights/installing-github-insights)」を参照してください。

{{ site.data.reusables.github-insights.settings-tab }}
{{ site.data.reusables.github-insights.repositories-tab }}
{{ site.data.reusables.github-insights.add-organizations }}
4. {{ site.data.variables.product.prodname_insights }}に追加したいOrganizationをクリックしてください。
5. すべてのリポジトリを追加するか、指定したリポジトリを含めるかを選択してください。 ![すべてのリポジトリの追加かリポジトリの選択のチェックボックス](/assets/images/help/insights/all-or-select-repos.png)
6. 選択したリポジトリに{{ site.data.variables.product.product_name }}をインストールすることにしたなら、ドロップダウンメニューを使い、含めたいリポジトリを選択してください。 ![リポジトリ選択のドロップダウンメニュー](/assets/images/help/insights/select-repos.png)
5. **Install（インストール）**もしくは**Request（リクエスト）**をクリックしてください。

### {{ site.data.variables.product.prodname_insights }}からのOrganizationの削除

{{ site.data.variables.product.prodname_insights }}からOrganizationを削除すると、そのOrganizationから{{ site.data.variables.product.prodname_insights }}のための{{ site.data.variables.product.prodname_github_app }}がアンインストールされます。 {{ site.data.variables.product.prodname_github_app }}に関する詳しい情報については「[{{ site.data.variables.product.prodname_insights }}のインストール](/github/installing-and-configuring-github-insights/installing-github-insights)」を参照してください。

{{ site.data.reusables.github-insights.settings-tab }}
{{ site.data.reusables.github-insights.repositories-tab }}
{{ site.data.reusables.github-insights.add-organizations }}
4. {{ site.data.variables.product.prodname_insights }}から削除したいOrganizationをクリックしてください。
4. "Uninstall {{ site.data.variables.product.prodname_insights }}（{{ site.data.variables.product.prodname_insights }}のアンインストール）"の下で、**Uninstall（アンインストール）**をクリックしてください。 ![アンインストールボタン](/assets/images/help/insights/uninstall-button.png)
5. Click **OK**.
