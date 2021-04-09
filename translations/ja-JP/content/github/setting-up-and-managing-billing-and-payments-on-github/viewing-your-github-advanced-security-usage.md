---
title: GitHub Advanced Security の使用状況を表示する
intro: '{% data variables.product.prodname_GH_advanced_security %} ライセンスの使用状況を表示および管理できます。'
permissions: Organization および Enterprise の所有者は、Organization または Enterprise の Organization の {% data variables.product.prodname_GH_advanced_security %} へのアクセスを管理できます。
product: '{% data reusables.gated-features.ghas %}'
redirect_from: /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_GH_advanced_security %}の各ライセンスは、それらの機能を使用できるアカウントもしくはシートの最大数を指定します。 定期的に、使用がライセンス容量の容量内であることを確認する必要があります。 詳しい情報については、「[{% data variables.product.prodname_GH_advanced_security %} Enterprise ライセンスのライセンスについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)」を参照してください。

### Enterprise アカウントの {% data variables.product.prodname_GH_advanced_security %} ライセンス使用状況の表示と管理

ライセンスに含まれるシート数と、現在使用されているシート数は、[Enterprise ライセンス] ページで確認できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   「{% data variables.product.prodname_GH_advanced_security %}」セクションには、現在の使用状況の詳細が表示されます。 ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) シートが不足すると、セクションが赤色になります。 {% data variables.product.prodname_GH_advanced_security %} の使用を減らすか、シートを追加購入する必要があります。 詳しい情報については、「[{% data variables.product.prodname_GH_advanced_security %} Enterprise ライセンスのライセンスについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security#getting-the-most-out-of-your-github-advanced-security-enterprise-license)」を参照してください。 ![Enterprise ライセンス設定内の {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. 必要に応じて、Organization ごとの使用状況の詳細な内訳を表示するには、左サイドバーで [**Billing**] をクリックします。 ![Billing tab in the enterprise account settings sidebar](/assets/images/help/business-accounts/settings-billing-tab.png) [{% data variables.product.prodname_GH_advanced_security %}] セクションで、各 Organization のコミッターと一意のコミッター数を確認できます。 ![{% data variables.product.prodname_GH_advanced_security %} in enterprise billing settings](/assets/images/help/billing/ghas-orgs-list-enterprise.png)
5. 必要に応じて、所有者である Organization の名前をクリックして、Organization のセキュリティと分析の設定を表示します。 ![Owned organization in {% data variables.product.prodname_GH_advanced_security %} section of enterprise billing settings](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. [Security & analysis] 設定ページで、[{{% data variables.product.prodname_GH_advanced_security %} repositories] セクションまでスクロールして、この Organization のリポジトリごとの使用状況の詳細を確認します。 ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 詳しい情報については、「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

