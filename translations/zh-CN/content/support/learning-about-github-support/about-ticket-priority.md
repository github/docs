---
title: 关于票证优先级
intro: 可以通过设置支持票证的优先级来传达问题的严重性及它对你和团队的影响。
shortTitle: Ticket priority
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Support
ms.openlocfilehash: bce2a30ad25b93274e982991f81be5b1b796c685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130216'
---
联系 {% data variables.contact.enterprise_support %} 时，可为票证选择以下{% ifversion ghes or ghae %}四种{% else %}三种{% endif %}优先级之一：{% ifversion ghes or ghae %}{% data variables.product.support_ticket_priority_urgent %}、{% endif %} {% data variables.product.support_ticket_priority_high %}、{% data variables.product.support_ticket_priority_normal %} 或 {% data variables.product.support_ticket_priority_low %}。

{% ifversion ghes or ghae %}

{% data reusables.support.github-can-modify-ticket-priority %}

{% ifversion ghes %}

## Ticket priority for {% data variables.product.prodname_ghe_server %}

{% data reusables.support.ghes-priorities %}

## Ticket priority for {% data variables.product.prodname_advanced_security %}

| 优先级 | 说明 |
| :---: | --- |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_advanced_security %} 未运行、已停止或受到严重影响，以致终端用户无法合理地继续使用软件，也没有可用的解决方法。 |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_advanced_security %} 运行不一致，影响终端用户的使用和效率。 |
| {% data variables.product.support_ticket_priority_low %} | {% data variables.product.prodname_advanced_security %} 能够一致地运行，但终端用户要求对软件稍作改动，例如文档更新、装饰性缺陷或增强功能。|

{% elsif ghae %} {% data reusables.support.ghae-priorities %} {% endif %}

{% elsif ghec %}

<!-- /github/working-with-github-support/github-enterprise-cloud-support.md -->

{% data reusables.support.zendesk-old-tickets %}

如果您购买了 {% data variables.product.prodname_ghe_cloud %}，或者您是当前订阅了 {% data variables.product.prodname_ghe_cloud %} 的 {% data variables.product.prodname_dotcom %} 组织的成员、外部协作者或帐单管理员，则可以提交优先问题。

有资格获得优先响应的问题：
- 包含与无法访问或使用 {% data variables.product.prodname_dotcom %} 的核心版本控制功能相关的问题
- 包含与帐户安全相关的情况
- 不包含有关外围设备和功能的问题，例如与 Gist、{% data variables.product.prodname_pages %} 或电子邮件通知相关的问题
- 只包含与当前使用 {% data variables.product.prodname_ghe_cloud %} 的组织相关的问题

要获得优先响应，您必须：
- 使用与当前使用 {% data variables.product.prodname_ghe_cloud %} 的组织关联的已验证电子邮件地址，将问题提交到 [{% data variables.contact.enterprise_support %}](https://support.github.com/contact?tags=docs-generic)
- 为每个优先情况提交新的支持事件单
- 在您当地时区的周一至周五提交问题
- 知道将通过电子邮件接收优先问题的响应
- 与 {% data variables.contact.github_support %} 合作，提供 {% data variables.contact.github_support %} 所要求的所有信息

{% note %}

注意：在你所在司法管辖区的当地节假日提交的问题不符合优先响应条件。

{% endnote %}

八小时响应服务：
- 在 {% data variables.contact.github_support %} 收到符合条件的问题时开始
- 在您提供足够的信息以回答问题之前，响应不会开始，除非您明确指出您没有足够的信息。
- 不适用于您当地时区的周末或您所在司法管辖区的当地节假日

{% note %}

注意：{% data variables.contact.github_support %} 不保证能够解决你的优先问题。 {% data variables.contact.github_support %} 可能会根据对您所提供信息的合理评估，将您的问题从一般问题升级为优先问题或从优先问题降级为一般问题。

{% endnote %}

{% endif %}

## 延伸阅读

- “[创建支持票证](/support/contacting-github-support/creating-a-support-ticket)”
