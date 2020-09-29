---
title: GitHub InsightsとGitHub Enterprise間のリンクの有効化
intro: 'ユーザが{% data variables.product.prodname_ghe_server %}から{{  site.data.variables.product.prodname_insights }}へアクセスできるようにするリンクを有効化できます。'
product: '{% data reusables.gated-features.github-insights %}'
permissions: '{% data variables.product.prodname_ghe_server %}のサイト管理者は、{% data variables.product.prodname_ghe_server %}と{% data variables.product.prodname_insights %}間のリンクを有効化できます。'
redirect_from:
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
versions:
  enterprise-server: '>=2.19'
---

リンクを有効化した後、それぞれのユーザは{% data variables.product.prodname_ghe_server %}から{% data variables.product.prodname_insights %}へ直接アクセスできます。 詳しい情報については「[{% data variables.product.prodname_enterprise %}と{% data variables.product.prodname_insights %}間のアクセス](/insights/exploring-your-usage-of-github-enterprise/navigating-between-github-enterprise-and-github-insights)」を参照してください。

1. {% data variables.product.prodname_ghe_server %}の管理シェルに接続してください。 詳しくは、"[管理シェル（SSH）へのアクセス方法](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)を参照してください。"
2. 以下のコマンドを実行してください。
  ```
  ghe-config 'app.github.insights-available' 'true' && ghe-config-apply
  ```
3. {% data variables.product.prodname_ghe_server %}に戻ります。
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
7. Under
{% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **{% data variables.product.prodname_insights %}**.
  {% note %}

  **ノート：** この設定コマンドを実行してから、このオプションが{% data variables.product.prodname_enterprise %}で有効になるまでには数分かかります。 **{% data variables.product.prodname_insights %}**が表示されなければ、待ってみるか、{% data variables.product.prodname_enterprise %}を再起動してください。

  {% endnote %}

  ![{% data variables.product.prodname_insights %}タブ](/assets/images/help/business-accounts/github-insights-tab.png)
3. "{% data variables.product.prodname_insights %} instance URL（インスタンスのURL）"の下で、会社が{% data variables.product.prodname_insights %}で使用するサーバーのURLを入力してください。 ![{% data variables.product.prodname_insights %}インスタンスURL](/assets/images/help/business-accounts/insights-instance-url.png)
4. [**Save**] をクリックします。
