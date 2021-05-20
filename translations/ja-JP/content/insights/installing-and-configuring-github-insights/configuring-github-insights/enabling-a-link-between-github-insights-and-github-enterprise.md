---
title: GitHub InsightsとGitHub Enterprise間のリンクの有効化
intro: 'ユーザが{% data variables.product.prodname_ghe_server %}から{% data variables.product.prodname_insights %}へアクセスできるようにするリンクを有効化できます。'
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} can enable a link between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_insights %}.'
redirect_from:
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
  - /insights/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
versions:
  enterprise-server: '*'
---
リンクを有効化した後、それぞれのユーザは{% data variables.product.prodname_ghe_server %}から{% data variables.product.prodname_insights %}へ直接アクセスできます。 詳しい情報については「[{% data variables.product.prodname_enterprise %}と{% data variables.product.prodname_insights %}間のアクセス](/insights/exploring-your-usage-of-github-enterprise/navigating-between-github-enterprise-and-github-insights)」を参照してください。

1. {% data variables.product.prodname_ghe_server %}の管理シェルに接続してください。 詳しくは、"[管理シェル（SSH）へのアクセス方法](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)を参照してください。"
2. 以下のコマンドを実行してください。
  ```shell
  ghe-config 'app.github.insights-available' 'true' && ghe-config-apply
  ```
3. 次に、
{% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
7. GitHub Insightsの
{% octicon "gear" aria-label="The Settings gear" %} **Setting（設定）**の下で、**{% data variables.product.prodname_insights %}**をクリックしてください。
  {% note %}

  **ノート：** この設定コマンドを実行してから、このオプションが{% data variables.product.prodname_enterprise %}で有効になるまでには数分かかります。 **{% data variables.product.prodname_insights %}**が表示されなければ、待ってみるか、{% data variables.product.prodname_enterprise %}を再起動してください。

  {% endnote %}

  ![{% data variables.product.prodname_insights %}タブ](/assets/images/help/business-accounts/github-insights-tab.png)
3. "{% data variables.product.prodname_insights %} instance URL（インスタンスのURL）"の下で、会社が{% data variables.product.prodname_insights %}で使用するサーバーのURLを入力してください。 ![{% data variables.product.prodname_insights %}インスタンスURL](/assets/images/help/business-accounts/insights-instance-url.png)
4. [**Save**] をクリックします。
