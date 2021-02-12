---
title: GitHub Enterprise Supportについて
intro: '{% data variables.contact.github_support %} can help you troubleshoot issues that arise on {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**注釈**: {% data reusables.support.data-protection-and-privacy %}

{% endnote %}

### {% data variables.contact.enterprise_support %} について

{% data variables.product.product_name %} includes {% data variables.contact.enterprise_support %} in English{% if enterpriseServerVersions contains currentVersion %}and Japanese{% endif %}.

{% if enterpriseServerVersions contains currentVersion %}
You can contact
{% data variables.contact.enterprise_support %} through {% data variables.contact.contact_enterprise_portal %} for help with:
 - {% data variables.product.product_name %} のインストールと利用
 - 調査対象となっているエラーの原因の特定および検証
{% endif %}

In addition to all of the benefits of {% data variables.contact.enterprise_support %}, {% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.premium_support %}{% else %}support for {% data variables.product.product_name %}{% endif %} offers:
  - GitHub Enterprise サポートページを通じた書面による 24 時間 365 日のサポート
  - 24 時間 365 日の電話サポート
  - A{% if currentVersion == "github-ae@latest" %}n enhanced{% endif %} Service Level Agreement (SLA) {% if enterpriseServerVersions contains currentVersion %}with guaranteed initial response times{% endif %}
{% if currentVersion == "github-ae@latest" %}
  - An assigned Technical Service Account Manager
  - Quarterly support reviews
  - Managed Admin services
{% else if enterpriseServerVersions contains currentVersion %}
  - Technical account managers
  - プレミアムコンテンツへのアクセス
  - 定期的なヘルスチェック
  - Managed Admin hours
{% endif %}

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion %}
詳細は、「[{% data variables.product.prodname_ghe_server %}の{% data variables.contact.premium_support %}について](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)」を参照してください。
{% endif %}

{% data reusables.support.scope-of-support %}

### {% data variables.contact.enterprise_support %} への連絡

You can contact {% data variables.contact.enterprise_support %} through {% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %} the {% data variables.contact.ae_azure_portal %}{% endif %} to report issues in writing. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)."

### 営業時間

{% if enterpriseServerVersions contains currentVersion %}
#### 英語でのサポート
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
緊急ではない標準的な問題の場合、英語でのサポートは週末とアメリカの休日をのぞく週 5 日 24 時間提供しています。 （アメリカの祝日は除く） 返信までの標準的な時間は 24 時間です。

For urgent issues, we {% else %}We{% endif %} are available 24 hours per day, 7 days per week, even during national U.S. （アメリカの祝日は除く）

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion  %}
#### 日本語でのサポート

緊急ではない問題については、日本語でのサポートを月曜日から金曜日、日本時間午前9:00から午後5:00まで提供します。これは日本の国民の祝日を除きます。 緊急の問題については、アメリカの祝日を含む、24時間年中無休で英語でサポートを提供しています。 （アメリカの祝日は除く）

また、 and Japanese national holidays observed by {% data variables.contact.enterprise_support %}, see "[Holiday schedules](#holiday-schedules)."{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### 休日のスケジュール

緊急の問題については、アメリカおよび日本の祝日を含め、24時間年中無休で英語で対応します。 {% if enterpriseServerVersions contains currentVersion  %}and Japanese{% endif %} holidays.

#### アメリカ合衆国の祝日

{% data variables.contact.enterprise_support %} は、以下の米国の祝日を休日としています。 holidays{% if enterpriseServerVersions contains currentVersion  %}, although our global support team is available to answer urgent tickets{% endif %}.

| アメリカ合衆国の祝日 祝日               | 対象日付                        |
| --------------------------- | --------------------------- |
| New Year's Day              | January 1                   |
| Martin Luther King, Jr. Day | Third Monday in January     |
| Presidents' Day             | Third Monday in February    |
| Memorial Day                | Last Monday in May          |
| Independence Day            | July 4                      |
| Labor Day                   | First Monday in September   |
| Veterans Day                | November 12                 |
| Thanksgiving Day            | Fourth Thursday in November |
| Day after Thanksgiving      | Fourth Friday in November   |
| Christmas Eve               | December 24                 |
| Christmas Day               | December 25                 |
| Day after Christmas         | December 28                 |
| New Year's Eve              | December 31                 |

#### 日本の祝日

{% data variables.contact.enterprise_support %} は、12月28日～1月3日、および「[国民の祝日について-内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html)」に記載されている祝日は、日本語サポートを提供していません。

{% data reusables.enterprise_enterprise_support.installing-releases %}
{% endif %}

### サポートチケットへの優先度の割り当て

{% data variables.contact.enterprise_support %} へのお問い合わせ時に、チケットの優先度を {% data variables.product.support_ticket_priority_urgent %}、{% data variables.product.support_ticket_priority_high %}、{% data variables.product.support_ticket_priority_normal %}、または {% data variables.product.support_ticket_priority_low %} の 4 つから選択できます。

{% data reusables.support.github-can-modify-ticket-priority %}

{% if enterpriseServerVersions contains currentVersion  %}
{% data reusables.support.ghes-priorities %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.support.ghae-priorities %}
{% endif %}

### サポートチケットの解決とクローズ

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

### 参考リンク

{% if enterpriseServerVersions contains currentVersion %}
- [{% data variables.product.prodname_ghe_server %} に関するよくある質問](https://enterprise.github.com/faq)
- Section 10 on Support in the "[{% data variables.product.prodname_ghe_server %} License Agreement](https://enterprise.github.com/license)"{% endif %}
- "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[Preparing to submit a ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)"{% endif %}
- [チケットのサブミット](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)
