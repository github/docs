---
title: GitHub InsightsとGitHub Enterprise間の接続の設定
intro: '{% data variables.product.prodname_insights %}が{% data variables.product.prodname_enterprise %}に接続する方法を管理できます。'
product: '{% data reusables.gated-features.github-insights %}'
permissions: '{% data variables.product.prodname_insights %}の管理権限を持つ人は、{% data variables.product.prodname_enterprise %}への接続を設定できます。'
versions:
  enterprise-server: '*'
---

{% data reusables.github-insights.settings-tab %}
2. Under
{% octicon "gear" aria-label="The gear icon" %} Settings, click **Enterprise**.
  ![Enterpriseタブ](/assets/images/help/insights/enterprise-tab.png)
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
