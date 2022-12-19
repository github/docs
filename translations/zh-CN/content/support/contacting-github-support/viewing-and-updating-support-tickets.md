---
title: 查看和更新支持工单
intro: '可以查看支持票证{% ifversion ghes or ghec %}，与同事协作处理票证，{% endif %}并使用 {% data variables.contact.support_portal %} 响应 {% data variables.contact.github_support %}。'
shortTitle: Managing your tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
ms.openlocfilehash: b735331d90c590ff6911fed44e181563b44bfc27
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193263'
---
## 关于工单管理

{% data reusables.support.zendesk-old-tickets %}

可以使用 [GitHub 支持门户](https://support.github.com/)查看当前和过去的支持工单并回复 {% data variables.contact.github_support %}。 120 天后，已解决的票证将会存档{% ifversion ghec or ghes or ghae %}，并且只能查看企业帐户的已存档票证{% endif %}。

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

## 查看最近的支持票证

{% data reusables.support.view-open-tickets %}
1. 在文本框下，可以阅读评论历史记录。 最近的回复位于顶部。

   ![支持票证评论历史记录的屏幕截图，最近的回复位于顶部](/assets/images/help/support/support-recent-response.png)

1. （可选）若要翻译票证评论，请单击 {% octicon "globe" aria-label="The globe icon" %}，然后从下拉菜单中选择首选语言。 可以将支持票证翻译为中文（简体）、法语、德语、日语、葡萄牙语（巴西）或西班牙语。

   ![支持票证的屏幕截图，其中下拉菜单突出显示了翻译选项](/assets/images/help/support/support-ticket-translation-options.png)

{% ifversion ghec or ghes or ghae %}

## 查看已存档的支持票证

只能查看企业帐户的已存档票证。

{% data reusables.support.navigate-to-my-tickets %}
1. 选择“我的票证”下拉菜单，然后单击企业帐户的名称。 

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

   ![“我的工单”下拉菜单的屏幕截图。](/assets/images/help/support/ticket-context.png)
1. 在“我的票证”表下，单击“查看已存档的票证”。

{% endif %}

## 更新支持工单

{% data reusables.support.view-open-tickets %}
1. （可选）如果问题得到解决，请在文本框下单击“关闭工单”。
![显示“关闭工单”按钮位置的屏幕截图。](/assets/images/help/support/close-ticket.png)
1. 若要回复 GitHub 支持并向工单添加新评论，请在文本框中输入你的回复。
![“添加评论”文本字段的屏幕截图。](/assets/images/help/support/new-comment-field.png)
1. 若要将评论添加到工单，请单击“评论”。
![“评论”按钮的屏幕截图。](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## 协作处理支持工单

你可以使用支持门户与你的同事协作处理支持工单。 拥有支持权利的所有者、计费管理员和其他企业成员可以查看与企业帐户或由企业帐户管理的组织关联的工单。 有关详细信息，请参阅“[管理企业的支持权利](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)”。

除了查看票据外，如果电子邮件地址复制到了工单上，或者工单创建者使用的电子邮件地址的域名被验证为企业帐户或企业帐户管理的组织，则还可以向支持工单添加评论。 有关验证域的详细信息，请参阅“[为企业验证或批准域](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”和“[为组织验证或批准域](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”。

{% endif %}

## 延伸阅读

- [关于 GitHub 支持](/support/learning-about-github-support/about-github-support)
