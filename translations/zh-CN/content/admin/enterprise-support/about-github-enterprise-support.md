---
title: 关于 GitHub Enterprise Support
intro: '{% data variables.contact.github_support %} can help you troubleshoot issues that arise on {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**注意**：{% data reusables.support.data-protection-and-privacy %}

{% endnote %}

### 关于 {% data variables.contact.enterprise_support %}

{% data variables.product.product_name %} includes {% data variables.contact.enterprise_support %} in English{% if enterpriseServerVersions contains currentVersion %}and Japanese{% endif %}.

{% if enterpriseServerVersions contains currentVersion %}
You can contact
{% data variables.contact.enterprise_support %} through {% data variables.contact.contact_enterprise_portal %} for help with:
 - 安装和使用 {% data variables.product.product_name %}
 - 识别并验证可疑错误的原因
{% endif %}

In addition to all of the benefits of {% data variables.contact.enterprise_support %}, {% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.premium_support %}{% else %}support for {% data variables.product.product_name %}{% endif %} offers:
  - 通过我们的支持门户网站全天候提供书面支持
  - 全天候电话支持
  - A{% if currentVersion == "github-ae@latest" %}n enhanced{% endif %} Service Level Agreement (SLA) {% if enterpriseServerVersions contains currentVersion %}with guaranteed initial response times{% endif %}
  - Access to premium content{% if enterpriseServerVersions contains currentVersion %}
  - Scheduled health checks{% endif %}
  - 管理的服务

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion %}
更多信息请参阅“[关于 {% data variables.product.prodname_ghe_server %} 的 {% data variables.contact.premium_support %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)”。
{% endif %}

{% data reusables.support.scope-of-support %}

### 联系 {% data variables.contact.enterprise_support %}

You can contact {% data variables.contact.enterprise_support %} through {% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %} the {% data variables.contact.ae_azure_portal %}{% endif %} to report issues in writing. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)."

### 运行时间

{% if enterpriseServerVersions contains currentVersion %}
#### 英语支持
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
对于标准的非紧急问题，我们提供每天 24 小时、每周 5 天的英语支持，不包括周末和美国国家法定节假日。 </em>GitHub 每天二十四 (24) 小时、每周五 (5) 天（不包括周末和美国全国性假日）对软件提供标准技术支持，不收取额外费用。 标准响应时间为 24 小时。

For urgent issues, we {% else %}We{% endif %} are available 24 hours per day, 7 days per week, even during national U.S. </em>GitHub 每天二十四 (24) 小时、每周五 (5) 天（不包括周末和美国全国性假日）对软件提供标准技术支持，不收取额外费用。

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion  %}
#### 日语支持

对于非紧急问题，日语支持的服务时间为周一至周五上午 9:00 至下午 5:00（日本标准时间），不包括日本的法定节假日。 对于紧急问题，我们每周 7 天、每天 24 小时提供英语支持，即使在美国法定节假日也不例外。 </em>GitHub 每天二十四 (24) 小时、每周五 (5) 天（不包括周末和美国全国性假日）对软件提供标准技术支持，不收取额外费用。

有关 and Japanese national holidays observed by {% data variables.contact.enterprise_support %}, see "[Holiday schedules](#holiday-schedules)."{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### 节假日安排

对于紧急问题，我们全天候为您提供英语帮助，包括美国 {% if enterpriseServerVersions contains currentVersion  %}and Japanese{% endif %} holidays.

#### 美国的节假日

{% data variables.contact.enterprise_support %} observes these U.S. holidays. holidays{% if enterpriseServerVersions contains currentVersion  %}, although our global support team is available to answer urgent tickets{% endif %}.

| 美国 美国节假日    | 观察日期        |
| ----------- | ----------- |
| 元旦          | 1 月 1 日     |
| 马丁·路德·金纪念 日 | 1 月的第三个星期一  |
| 总统日         | 2 月的第三个星期一  |
| 阵亡将士纪念日     | 5 月的最后一个星期一 |
| 独立日         | 7 月 4 日     |
| 劳动节         | 9 月的第一个星期一  |
| 老兵节         | 11 月 12 日   |
| 感恩节         | 11 月的第四个星期四 |
| 感恩节后的第一天    | 11 月的第四个星期五 |
| 平安夜         | 12 月 24 日   |
| 圣诞节         | 12 月 25 日   |
| 圣诞节后的第一天    | 12 月 26 日   |
| 新年除夕        | 12 月 31 日   |

#### 日本节假日

{% data variables.contact.enterprise_support %} 在 12 月 28 日至 1 月 3 日以及 [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html)中所列的节假日不提供日语支持。

{% data reusables.enterprise_enterprise_support.installing-releases %}
{% endif %}

### 为支持事件单分配优先级

联系 {% data variables.contact.enterprise_support %} 时，可为事件单选择以下四种优先级之一：{% data variables.product.support_ticket_priority_urgent %}、{% data variables.product.support_ticket_priority_high %}、{% data variables.product.support_ticket_priority_normal %} 或 {% data variables.product.support_ticket_priority_low %}。

{% data reusables.support.github-can-modify-ticket-priority %}

{% if enterpriseServerVersions contains currentVersion  %}
{% data reusables.support.ghes-priorities %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.support.ghae-priorities %}
{% endif %}

### 解决和关闭支持事件单

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

### 延伸阅读

{% if enterpriseServerVersions contains currentVersion %}
- [关于 {% data variables.product.prodname_ghe_server %} 的常见问题](https://enterprise.github.com/faq)
- Section 10 on Support in the "[{% data variables.product.prodname_ghe_server %} License Agreement](https://enterprise.github.com/license)"{% endif %}
- "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[Preparing to submit a ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)"{% endif %}
- “[提交事件单](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)”
