---
title: 代客户创建并支付组织
intro: '您可以代客户创建并支付 {% data variables.product.prodname_dotcom %} 组织。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Organizations
  - Upgrades
shortTitle: On behalf of a client
ms.openlocfilehash: 6c0cdaa09d3e2bf476b6314c38d369ec89840aad
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084432'
---
## 要求

在开始之前，请确保您知道：
- 将成为组织所有者的客户的 {% data variables.product.prodname_dotcom %} 用户名
- 客户希望组织使用的名称
- 您希望收到收据的电子邮件地址
- 客户想要购买的[产品](/articles/github-s-products)
- 客户希望你为组织购买的[付费席位](/articles/about-per-user-pricing/)数量

## 第 1 步：创建您的个人 {% data variables.product.prodname_dotcom %} 帐户。

您将使用您的个人帐户来设置组织。 以后续订或更改客户的订阅时也需要登录此帐户。

如果你在 {% data variables.product.prodname_dotcom %} 上已有个人帐户，请跳到[步骤 2](#step-2-create-the-organization)。

1. 转到“[加入 GitHub](https://github.com/join)”页。
2. 在“创建个人帐户”下，键入你的用户名、电子邮件地址和密码，然后单击“创建帐户”。
![创建个人帐户登记表](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. 为您的个人帐户选择 {% data variables.product.prodname_free_user %}。
4. 单击“完成注册”。

## 第 2 步：创建组织。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
3. 在“选择计划”下，单击“选择 {% data variables.product.prodname_free_team %}”。 您将在下一步升级组织。
{% data reusables.organizations.organization-name %}
5. 在“Contact email（联系电子邮件）”下，键入客户的联系电子邮件地址。
  ![联系电子邮件字段](/assets/images/help/organizations/contact-email-field.png) {% data reusables.dotcom_billing.owned_by_business %}
8. 单击“下一步”。

## 第 3 步：将组织升级到年度付费订阅


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} (You can add more seats to the organization in the next step.)
6. 在“升级摘要”下，选择“按年支付”以每年支付一次组织费用。
![按年计费的单选按钮](/assets/images/help/billing/choose-annual-billing-org-resellers.png) {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## 第 4 步：升级组织中的付费席位数

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

## 第 5 步：邀请客户加入组织

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %}
5. 键入客户的 {% data variables.product.prodname_dotcom %} 用户名，然后按 Enter 键。
![键入客户用户名的字段](/assets/images/help/organizations/org-invite-modal.png)
6. 选择客户端的“所有者”角色，然后单击“发送邀请”。
![所有者单选按钮和发送邀请按钮](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. 客户将收到邀请其加入组织的电子邮件。 他们接受邀请后，您才能进入下一步骤。

## 第 6 步：将组织所有权转让给客户

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 确认你的客户在组织成员名册中，并被授予“所有者”角色。
5. 在用户名右侧，使用 {% octicon "gear" aria-label="The Settings gear" %} 下拉菜单，单击“管理”。
  ![管理访问链接](/assets/images/help/organizations/member-manage-access.png)
6. 在左侧，单击“从组织中删除”。
  ![“从组织中删除”按钮](/assets/images/help/organizations/remove-from-org-button.png)
7. 确认选择并单击“删除成员”。
  ![删除成员确认按钮](/assets/images/help/organizations/confirm-remove-from-org.png)

## 后续步骤

1. 请联系你的客户，要求他们[将你添加到组织中担任帐单管理员](/articles/adding-a-billing-manager-to-your-organization)。 您需要成为组织的帐单管理员以便将来续订或更改客户的订阅。
2. 如果要从组织中删除您组织的信用卡以便不再从该卡付费，请联系 {% data variables.contact.contact_support %}。
3. 需要续订客户的付费订阅时，请参阅“[续订客户的付费组织](/articles/renewing-your-client-s-paid-organization)”。

## 延伸阅读

- [关于采购公司的组织](/articles/about-organizations-for-procurement-companies)
- [升级或降级客户的付费组织](/articles/upgrading-or-downgrading-your-client-s-paid-organization)
- [续订客户的付费组织](/articles/renewing-your-client-s-paid-organization)
