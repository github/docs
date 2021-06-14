---
title: GitHub InsightsとGitHub Enterprise間の接続の設定
intro: '{% data variables.product.prodname_insights %}が{% data variables.product.prodname_enterprise %}に接続する方法を管理できます。'
permissions: 'People with admin permissions to {% data variables.product.prodname_insights %} can configure the connection to {% data variables.product.prodname_enterprise %}.'
versions:
  enterprise-server: '*'
redirect_from:
  - /insights/installing-and-configuring-github-insights/configuring-the-connection-between-github-insights-and-github-enterprise
---

{% data reusables.github-insights.settings-tab %}
2. {% octicon "gear" aria-label="The gear icon" %} Settingsの下で、**Enterprise**をクリックしてください。 ![Enterpriseタブ](/assets/images/help/insights/enterprise-tab.png)
{% data reusables.github-insights.enterprise-api-url %}
{% data reusables.github-insights.app-id %}
{% data reusables.github-insights.client-id %}
{% data reusables.github-insights.client-secret %}
{% data reusables.github-insights.private-key %}
{% data reusables.github-insights.webhook-secret %}
{% data reusables.github-insights.skip-ssl %}
10. [**Save**] をクリックします。
{% data reusables.github-insights.insights-license %}
11. **Update License（ライセンスの更新）**をクリックしてください。
