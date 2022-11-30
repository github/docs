---
title: 使用 Okta 为企业配置 SAML 单点登录
intro: '您可以使用安全声明标记语言 (SAML) 单点登录 (SSO) 与 Okta 一起来自动管理对 {% data variables.product.product_name %} 上企业帐户的访问。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML SSO with Okta
ms.openlocfilehash: e9cbf6e70fb5e07f9cd2c5e27d9b952921e18fdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108690'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## 关于使用 Octa 的 SAML

您可以通过配置企业帐户使用 SAML SSO 以及身份提供程序 (IdP) Okta，从一个中心界面控制对 {% data variables.product.product_name %} 企业帐户及其他 web 应用程序的访问。

SAML SSO 控制并保护对企业帐户资源（如组织、仓库、议题和拉取请求）的访问。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

{% data reusables.saml.switching-from-org-to-enterprise %} 有关详细信息，请参阅[将 SAML 配置从组织切换为企业帐户](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)。

或者，您也可以使用 Okta 配置为使用 {% data variables.product.prodname_ghe_cloud %} 的组织 SAML SSO。 有关详细信息，请参阅“[使用 Okta 配置 SAML 单一登录和 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)”。

## 在 Okta 中添加 {% data variables.product.prodname_ghe_cloud %} 应用程序

{% data reusables.saml.okta-sign-into-your-account %}
1. 导航到 [{% data variables.product.prodname_ghe_cloud %} - Okta 集成网络中的企业帐户](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) 应用程序，然后单击“添加集成”。
{% data reusables.saml.okta-dashboard-click-applications %}
1. （可选）在“Application label（应用程序标签）”右边输入应用程序的描述性名称。
1. 在“{% data variables.product.prodname_dotcom %} Enterprises”右侧，键入企业帐户的名称。 例如，如果企业帐户的 URL 为 `https://github.com/enterprises/octo-corp`，则键入 `octo-corp`。
1. 单击“Done”（完成） 。

## 启用和测试 SAML SSO

{% data reusables.saml.okta-sign-into-your-account %} {% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.click-enterprise-account-application %} {% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %}
1. 在“设置”右侧，单击“编辑”。
1. 在“组”右侧的“配置的 SAML 属性”下，使用下拉菜单并选择“匹配正则表达式”。
1. 在下拉菜单右侧，键入 `.*.*`。
1. 单击“ **保存**”。
{% data reusables.saml.okta-view-setup-instructions %}
1. 使用设置说明中的信息为企业帐户启用 SAML。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。
