---
title: 为组织添加帐单管理员
intro: 账单管理员是负责为组织管理账单设置的用户管理员，例如更新付款信息。 如果组织的常规成员通常不能访问帐单资源，这将是一个很好的选择。
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-a-billing-manager-to-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Billing
shortTitle: Add a billing manager
ms.openlocfilehash: f7b4e6d17ff0e6680fdf9509b467f314b1a9e4ec
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145099699'
---
组织所有者团队的成员可向人们授予“帐单管理员”权限。 在个人接受其邀请成为组织的帐单管理员后，他们可邀请其他人员为帐单管理员。

{% note %}

注意：帐单管理员在组织的订阅中不使用付费许可。

{% endnote %}

## 帐单管理员的权限

帐单管理员可以：

- 升级或降级帐户
- 添加、更新或删除付款方式
- 查看付款历史记录
- 下载收据
- 查看、邀请和删除帐单管理员
- 开始、修改或取消赞助

此外，所有帐单管理员在组织的结算日期都会通过电子邮件收到结算收据。

帐单管理员无法执行以下操作：

- 在组织中创建或访问仓库
- 查看组织的私人成员
- 出现在组织成员列表中
- 购买、编辑或取消 {% data variables.product.prodname_marketplace %} 应用程序订阅

{% tip %}

提示：如果你的组织[要求成员、帐单管理员和外部协作者使用双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)，则用户必须启用双重身份验证后才可接受你的邀请，成为组织的帐单管理员。

{% endtip %}

## 邀请帐单管理员

{% ifversion ghec %} {% note %}

注意：如果你的组织由企业帐户拥有，则无法在组织级别邀请帐单管理员。 有关详细信息，请参阅[关于企业帐户](/admin/overview/about-enterprise-accounts)。

{% endnote %} {% endif %}

受邀人员将会收到邀请电子邮件，邀请他们成为您的组织的帐单管理员。 在受邀人员单击其邀请电子邮件中的接受链接后，他们会自动加入组织成为帐单管理员。 如果他们还没有 GitHub 帐户，将被重定向到注册页面注册一个，在创建帐户后会自动加入组织成为帐单管理员。

{% data reusables.organizations.billing-settings %}
1. 在“帐单管理”下，单击“账单管理员”旁边的“添加”。
  ![邀请帐单管理员](/assets/images/help/billing/settings_billing_managers_list.png)
6. 键入你要添加的人员的用户名或电子邮件地址，然后单击“发送邀请”。
  ![“邀请帐单管理员”页面](/assets/images/help/billing/billing_manager_invite.png)

## 延伸阅读

- 在 {% data variables.product.prodname_ghe_cloud %} 文档中“[邀请人员管理企业](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)”{% ifversion fpt %}{% endif %}
