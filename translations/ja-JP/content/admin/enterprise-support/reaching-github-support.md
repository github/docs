---
title: GitHub Support への連絡
intro: '{% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %}{% data variables.enterprise.management_console %} または {% endif %}GitHub Enterprise サポートページから {% data variables.contact.enterprise_support %} に連絡してください。'
redirect_from:
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support/
  - /enterprise/admin/enterprise-support/reaching-github-support
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Support
---

### 自動チケットシステムを使用する

自動化されたサポートリクエストへの対応には最善を尽くしますが、問題解決のためには、自動化されたチケットシステムが提供する以上の情報が、通常必要になります。 可能な場合は、{% data variables.contact.enterprise_support %} がやりとりできる方もしくはマシンからサポートリクエストを出してください。 詳しい情報については[チケットのサブミットの準備](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)を参照してください。

### {% data variables.contact.enterprise_support %} への連絡

{% data variables.contact.enterprise_support %} のお客様は、{% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %}{% data variables.enterprise.management_console %} または {% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %} the {% data variables.contact.contact_ae_portal %}サポートチケットをオープンできます{% endif %}。 チケットの優先度を {% data variables.product.support_ticket_priority_urgent %}、{% data variables.product.support_ticket_priority_high %}、{% data variables.product.support_ticket_priority_normal %}、または {% data variables.product.support_ticket_priority_low %} としてマークします。 詳しい情報については、「[サポートチケットに優先度を割り当てる](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket)」および「[チケットをサブミットする](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)」を参照してください。

### {% data variables.contact.enterprise_support %} への連絡

{% if enterpriseServerVersions contains currentVersion %}
#### 過去のサポートチケットの閲覧

{% data variables.contact.enterprise_portal %} を使って過去のサポートチケットを見ることができます。

1. {% data variables.contact.contact_enterprise_portal %} に移動します。
2. [**My tickets**] をクリックします。 ![過去にサブミットされたチケットを表示する](/assets/images/enterprise/support/view-past-tickets.png)

### {% data variables.contact.premium_support %} への連絡

{% data variables.contact.enterprise_support %} のお客様は、{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} あるいは {% data variables.contact.contact_enterprise_portal %} を使ってサポートチケットをオープンできます。 その優先度を {% data variables.product.support_ticket_priority_urgent %}、{% data variables.product.support_ticket_priority_high %}、{% data variables.product.support_ticket_priority_normal %}、または {% data variables.product.support_ticket_priority_low %} としてマークします。 詳しい情報については、「[サポートチケットに優先度を割り当てる](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server#assigning-a-priority-to-a-support-ticket)」および「[チケットをサブミットする](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)」を参照してください。

{% endif %}
### 営業チームへの連絡

価格、ライセンス、更新、見積もり、支払い、およびその他の関連するご質問については、{% data variables.contact.contact_enterprise_sales %} にお問い合わせいただくか、[+1 (877) 448-4820](tel:+1-877-448-4820) にお電話してください。

{% if enterpriseServerVersions contains currentVersion %}
### トレーニングチームへの連絡

カスタマイズされたトレーニングを含むトレーニングの選択肢に関する詳しい情報については[{% data variables.product.company_short %}のトレーニングサイト](https://services.github.com/)を参照してください。

{% note %}

**メモ:** トレーニングは {% data variables.product.premium_plus_support_plan %} に含まれています。 詳細は、「[{% data variables.product.prodname_ghe_server %}の{% data variables.contact.premium_support %}について](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)」を参照してください。

{% endnote %}
{% endif %}

### 参考リンク

- [{% data variables.contact.enterprise_support %} について](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)
- [{% data variables.product.prodname_ghe_server %}の{% data variables.contact.premium_support %}について](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)
