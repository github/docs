---
title: GitHub InsightsとGitHub Enterprise間のリンクの有効化
intro: 'ユーザが{{ site.data.variables.product.prodname_ghe_server }}から{{  site.data.variables.product.prodname_insights }}へアクセスできるようにするリンクを有効化できます。'
product: '{{ site.data.reusables.gated-features.github-insights }}'
permissions: '{{ site.data.variables.product.prodname_ghe_server }}のサイト管理者は、{{ site.data.variables.product.prodname_ghe_server }}と{{ site.data.variables.product.prodname_insights }}間のリンクを有効化できます。'
redirect_from:
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
versions:
  enterprise-server: '>=2.19'
---

リンクを有効化した後、それぞれのユーザは{{ site.data.variables.product.prodname_ghe_server }}から{{ site.data.variables.product.prodname_insights }}へ直接アクセスできます。 詳しい情報については「[{{ site.data.variables.product.prodname_enterprise }}と{{ site.data.variables.product.prodname_insights }}間のアクセス](/insights/exploring-your-usage-of-github-enterprise/navigating-between-github-enterprise-and-github-insights)」を参照してください。

1. {{ site.data.variables.product.prodname_ghe_server }}の管理シェルに接続してください。 詳しくは、"[管理シェル（SSH）へのアクセス方法](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)を参照してください。"
2. 以下のコマンドを実行してください。
  ```
  ghe-config 'app.github.insights-available' 'true' && ghe-config-apply
  ```
3. {{ site.data.variables.product.prodname_ghe_server }}に戻ります。
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
7. Under
{% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **{{ site.data.variables.product.prodname_insights }}**.
  {% note %}

  **ノート：** この設定コマンドを実行してから、このオプションが{{ site.data.variables.product.prodname_enterprise }}で有効になるまでには数分かかります。 **{{ site.data.variables.product.prodname_insights }}**が表示されなければ、待ってみるか、{{ site.data.variables.product.prodname_enterprise }}を再起動してください。

  {% endnote %}

  ![{{ site.data.variables.product.prodname_insights }}タブ](/assets/images/help/business-accounts/github-insights-tab.png)
3. "{{ site.data.variables.product.prodname_insights }} instance URL（インスタンスのURL）"の下で、会社が{{ site.data.variables.product.prodname_insights }}で使用するサーバーのURLを入力してください。 ![{{ site.data.variables.product.prodname_insights }}インスタンスURL](/assets/images/help/business-accounts/insights-instance-url.png)
4. [**Save**] をクリックします。
