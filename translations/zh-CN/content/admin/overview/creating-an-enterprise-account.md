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

{% data reusables.enterprise.create-an-enterprise-account %} 如果您通过发票付款，则可以在 {% data variables.product.prodname_dotcom %} 上自行创建企业帐户。 如果没有，您可以[联系我们的销售团队](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards)为您创建一个企业帐户。

An enterprise account is included with {% data variables.product.prodname_ghe_cloud %}. Creation of an enterprise account does not result in additional charges on your bill.

When you create an enterprise account that owns your existing organization on {% data variables.product.product_name %}, the organization's resources remain accessible to members at the same URLs. After you add your organization to the enterprise account, the following changes will apply to the organization.

- Your existing organization will automatically be owned by the enterprise account.
- {% data variables.product.company_short %} bills the enterprise account for usage within all organizations owned by the enterprise. The current billing details for the organization, including the organization's billing email address, will become billing details for the new enterprise account. 更多信息请参阅“[管理企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”。
- All current owners of your organization will become owners of the enterprise account, and all current billing managers of the organization will become billing managers of the new enterprise account. 更多信息请参阅“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”。

For more information about the changes that apply to an organization after you add the organization to an enterprise, see "[Adding organizations to your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)."

## 在 {% data variables.product.prodname_dotcom %} 上创建企业帐户

要创建企业帐户，您的组织必须使用 {% data variables.product.prodname_ghe_cloud %}。

如果按发票付款，可以直接通过 {% data variables.product.prodname_dotcom %} 创建企业帐户。 如果您目前不通过发票付款，可以[联系我们的销售团队](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards)为您创建企业帐户。


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
