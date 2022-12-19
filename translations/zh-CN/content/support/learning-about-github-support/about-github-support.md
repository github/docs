---
title: 关于 GitHub 支持
intro: 您可以联系 GitHub 支持，以获取有关解决您在使用 GitHub 时遇到的问题的帮助。
shortTitle: About GitHub Support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/overview/about-github-enterprise-support
  - /articles/about-github-support
  - /github/working-with-github-support/about-github-support
  - /articles/github-enterprise-cloud-support
  - /github/working-with-github-support/github-enterprise-cloud-support
  - /articles/business-plan-support
  - /articles/github-business-cloud-support
  - /admin/enterprise-support/about-support-for-advanced-security
  - /enterprise-server/admin/enterprise-support/about-support-for-advanced-security
topics:
  - Support
ms.openlocfilehash: aa2b407b96cc7ee2ecc20fee9782e3084b3627db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192911'
---
## 关于 {% data variables.contact.github_support %}

{% data variables.product.prodname_dotcom %} 用户可用的支持选项取决于其个人帐户使用的产品、他们所属的任何组织或企业以及他们管理的任何 {% data variables.product.prodname_ghe_server %} 实例。 每个产品都包括使用 {% data variables.product.prodname_enterprise %} 可以购买 {% data variables.contact.premium_support %} 的默认级别的支持和帐户。

{% ifversion fpt %} 如果你是使用 {% data variables.product.prodname_enterprise %} 的组织的成员，则可以使用 {% data variables.product.prodname_docs %} 右上角的下拉菜单查看适用于产品的这些文章的版本。 有关详细信息，请参阅“[关于 GitHub Docs 的版本](/get-started/learning-about-github/about-versions-of-github-docs)”。
{% endif %}

{% ifversion not ghae %}

|  | {% data variables.product.prodname_gcf %} | 标准支持 | 高级支持 |
|----|---------------|-------|---------------|
| {% data variables.product.prodname_free_user %} | {% octicon "check" aria-label="Check" %}  |  |  |  
| {% data variables.product.prodname_pro %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |  
| {% data variables.product.prodname_team %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |
| {% data variables.product.prodname_ghe_cloud %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | 可购买 |
| {% data variables.product.prodname_ghe_server %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | 可购买 |

{% endif %}

{% ifversion ghes %}

您可以通过 {% data variables.contact.enterprise_support %} 联系 {% data variables.contact.contact_enterprise_portal %} 来寻求以下帮助：
 - 安装和使用 {% data variables.product.product_name %}
 - 识别并验证可疑错误的原因
 - 安装和使用 {% data variables.product.prodname_advanced_security %}

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.support.premium-support-features %}

有关详细信息，请参阅“[关于 GitHub Premium 支持](/support/about-github-support/about-github-premium-support)”。

{% endif %}

{% ifversion fpt or ghec or ghae %}

在联系 {% data variables.contact.github_support %} 之前，请检查当前是否有任何影响 {%- ifversion fpt or ghec %} [{% data variables.product.prodname_dotcom %} 状态](https://githubstatus.com/) {%- elsif ghae %} [{% data variables.product.product_name %} 状态](https://ghestatus.com/)的 {% data variables.product.product_name %} 服务的事件{%- endif %}。 有关详细信息，请参阅“[关于 GitHub 状态](#about-github-status)”。

{% endif %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %}

要报告帐户、安全和滥用问题，或获得付费帐户的辅助支持，请访问 {% data variables.contact.contact_support_portal %}。 有关详细信息，请参阅“[创建支持工单](/support/contacting-github-support/creating-a-support-ticket)”。
{% endif %}

{% ifversion fpt %}如果你有任何付费产品，或者是拥有付费产品的组织的成员，可用英语联系 {% data variables.contact.github_support %}。
{% else %}通过 {% data variables.product.product_name %}，可获得英语和日语的支持。
{% endif %}

{% ifversion fpt or ghec or ghes %} {% data reusables.support.support-ticket-translation-option %} {% endif %}

{% ifversion ghes or ghec %}

要联系 {% data variables.contact.github_support %}，请访问 {% data variables.contact.contact_support_portal %}。 有关详细信息，请参阅“[创建支持工单](/support/contacting-github-support/creating-a-support-ticket)”。

{% elsif ghae %}

您可以通过 {% data variables.contact.ae_azure_portal %} 联系 {% data variables.contact.enterprise_support %}，以书面报告问题。 有关详细信息，请参阅“[创建支持工单](/support/contacting-github-support/creating-a-support-ticket)”。

{% endif %}

{% ifversion not ghae %}来自 GitHub 支持的电子邮件通信将始终从 `github.com` 或 `githubsupport.com` 地址发送。
{% endif %}

## 支持范围

{% data reusables.support.scope-of-support %}

{% ifversion ghec or fpt or ghae %}
## 关于 GitHub 状态

可检查当前影响 {% data variables.product.product_name %} 服务的任何事件，并在 {% data variables.product.prodname_dotcom %} 的[“状态”页]({% ifversion fpt or ghec %}https://githubstatus.com{% elsif ghae %}https://ghestatus.com{% endif %})上查看有关过去事件的信息。

你还可以订阅并在每次发生影响 {% data variables.product.product_name %} 的事件时通过电子邮件、短信和 Webhook 收到警报。

{% endif %}

{% ifversion ghec or ghes %}
## 关于支持权利

企业所有者和帐单管理员自动拥有支持权利，这使他们能够创建、查看和评论与其企业帐户关联的支持单。

企业所有者还可以向其企业帐户拥有的组织的成员添加支持权利，从而允许这些成员创建、查看和评论支持单。 有关详细信息，请参阅[管理企业的支持权利](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)。

{% endif %}

{% ifversion fpt or ghec %}
## 授予 {% data variables.contact.github_support %} 临时访问私有仓库的权限

如果 {% data variables.contact.github_support %} 需要访问私有仓库来解决您的支持请求，仓库所有者将会收到一封电子邮件，其中包含接受或拒绝临时访问的链接。 该所有者有 20 天时间接受或拒绝该请求，此时间过后请求即过期。 如果所有者接受请求，{% data variables.contact.github_support %} 在五天内都可访问仓库。 在此时段内，具有所需权限的 {% data variables.contact.github_support %} 员工一次最多可以解锁存储库两个小时，如果工作提前完成，则会重新锁定存储库。 所有 {% data variables.contact.github_support %} 员工访问都会生成审核日志事件，并且存储库的可见性在任何时候都不会受到影响。

{% data variables.contact.github_support %} 没有您的明确同意将永远无法访问您的私有仓库。 有关详细信息，请参阅[服务条款](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access)。
{% endif %}

{% ifversion ghec or ghes %}
## 联系 GitHub 销售和 GitHub 培训

有关定价、许可、续订、报价、付款和其他相关问题，请联系 {% data variables.contact.contact_enterprise_sales %} 或拨打 [+1 (877) 448-4820](tel:+1-877-448-4820)。

若要详细了解培训选项（包括自定义培训），请参阅 [{% data variables.product.company_short %} 的培训网站](https://services.github.com/)。

{% note %}

注意：培训包含在 {% data variables.product.premium_plus_support_plan %} 中。 有关详细信息，请参阅“[关于 GitHub Premium 支持](/support/about-github-support/about-github-premium-support)”。

{% endnote %}

{% endif %}

{% ifversion ghes or ghec %}
## 营业时间

### 英语支持

对于标准的非紧急问题，我们提供每天 24 小时、每周 5 天的英语支持，不包括周末和美国国家法定节假日。 标准响应时间为 24 小时。

{% ifversion ghes %}对于紧急问题，我们每周 7 天、每天 24 小时提供服务，即使在美国法定节假日也不例外。
{% endif %}

### 日语支持

对于一般非紧急问题，日语支持的服务时间为周一至周五上午 9:00 至下午 5:00（日本标准时间），不包括日本的法定节假日。 

{% ifversion ghes %}对于紧急问题，我们每周 7 天、每天 24 小时提供英语支持，即使在美国法定节假日也不例外。
{% endif %}

有关 {% data variables.contact.enterprise_support %} 遵守的美国和日本法定节假日的完整列表，请参阅“[节假日安排](#holiday-schedules)”。

## 节假日安排

对于紧急问题，我们全天候为您提供英语帮助，包括美国和日本的节假日。

### 美国的节假日

{% data variables.contact.enterprise_support %} 会庆祝这些美国节假日，但我们的全球支持团队可以回答紧急事件单。

{% data reusables.enterprise_enterprise_support.support-holiday-availability %}

### 日本节假日

{% data variables.contact.enterprise_support %} 在 12 月 28 日至 1 月 3 日以及[国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html)中所列的节假日不提供日语支持。

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

## 解决和关闭支持事件单

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

{% endif %}

## 延伸阅读

{%- ifversion ghes %}
- “[{% data variables.product.prodname_ghe_server %} 许可协议](https://enterprise.github.com/license)”中“支持”的第 10 节{%- endif %}
- [创建支持工单](/support/contacting-github-support/creating-a-support-ticket){%- ifversion not ghae %}
- [查看和更新支持工单](/support/contacting-github-support/viewing-and-updating-support-tickets){%- endif %}
