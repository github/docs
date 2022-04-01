---
title: 创建企业帐户
intro: '如果您当前在单个组织中使用 {% data variables.product.prodname_ghe_cloud %} ，则可以创建企业帐户来集中管理多个组织。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: 创建企业帐户
---

## 关于企业帐户创建

{% data variables.product.prodname_ghe_cloud %} 包括创建企业帐户的选项，该选项支持多个组织之间的协作，并为管理员提供单一的可见性和管理点。 更多信息请参阅“[关于企业帐户](/admin/overview/about-enterprise-accounts)”。

{% data reusables.enterprise.create-an-enterprise-account %} 如果您通过发票付款，则可以在 {% data variables.product.prodname_dotcom %} 上自行创建企业帐户。 如果不是，您可以[联系我们的销售团队](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards)转到发票。

企业帐户包含在 {% data variables.product.prodname_ghe_cloud %} 中，因此创建一个帐户不会影响您的帐单。

创建企业帐户时，现有组织将自动归企业帐户所有。 组织的所有当前所有者都将成为企业帐户的所有者。 组织的所有当前帐单管理员都将成为新企业帐户的帐单管理员。 组织的当前帐单详细信息（包括组织的帐单电子邮件地址）将成为新企业帐户的帐单详细信息。

## 在 {% data variables.product.prodname_dotcom %} 上创建企业帐户

若要在 {% data variables.product.prodname_dotcom %} 上创建企业帐户，您的组织必须使用 {% data variables.product.prodname_ghe_cloud %} 并通过发票付款。

{% data reusables.organizations.billing-settings %}
1. 单击 **Upgrade to enterprise account（升级到企业帐户）**。

   !["升级到企业帐户" 按钮的屏幕截图](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. 在“Enterprise name（企业名称）”下，键入企业帐户的名称。

   !["企业名称" 字段的屏幕截图](/assets/images/help/business-accounts/enterprise-name-field.png)
1. 在“Enterprise URL slug（企业 URL 辅助信息域）”下，键入企业帐户的辅助信息。 此数据辅助信息将在企业的 URL 中使用。 例如，如果您选择 `octo-enterprise`，则企业的 URL 将为 `https://github.com/enterprises/octo-enterprise`。

   !["企业 URL 辅助信息域" 字段的屏幕截图](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. 单击 **Confirm and upgrade（确认并升级）**。

   !["确认并升级" 按钮的屏幕截图](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. 阅读警告，然后单击 **Create enterprise account（创建企业帐户）**。

   !["创建企业帐户" 按钮的屏幕截图](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## 后续步骤

创建企业帐户后，我们建议详细了解企业帐户的工作原理以及配置设置和策略。 有关详细信息，请遵循“[开始使用您的企业帐户](/admin/guides#get-started-with-your-enterprise-account)”学习路径。
