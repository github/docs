---
title: 在企业审核日志中显示 IP 地址
intro: 可以在企业审核日志中显示事件的源 IP 地址。
shortTitle: IP addresses in audit log
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
ms.openlocfilehash: 7dad3642866b637432442591d8e5714e3db6f59f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508073'
---
## 关于在审核日志中显示 IP 地址

默认情况下，{% data variables.product.product_name %} 不会显示企业审核日志中事件的源 IP 地址。 （可选）为了确保合规性并响应威胁，可以显示与负责每个事件的参与者相关联的完整 IP 地址。 参与者通常是用户，但也可以是应用或集成。

你有责任履行查看或存储企业审核日志中显示的 IP 地址所随附的任何法律义务。

如果选择显示 IP 地址，则 IP 地址仅显示在企业的审核日志中。 对于企业拥有的个人组织的审核日志中的事件，不会显示 IP 地址。 有关组织审核日志的详细信息，请参阅“[查看组织的审核日志](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)”。

无论在 {% data variables.product.product_location %} 上为企业使用哪种身份验证方法，都可以在审核日志中显示 IP 地址。 有关详细信息，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”。

当任何人在 {% data variables.product.product_location %} 上创建帐户时，即表示该用户同意 {% data variables.product.company_short %} 收集与 {% data variables.product.company_short %} 服务连接相关的基本信息（包括源 IP 地址）。 有关详细信息，请参阅“[GitHub 隐私声明](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information)”。

## 在审核日志中显示 IP 地址的事件

当企业成员与企业或企业中的组织拥有的资源交互时，{% data variables.product.product_name %} 将在审核日志中显示 IP 地址。 例如，你将看到一个审核事件的 IP 地址，这些事件涉及企业中组织拥有的内部或专用存储库，或与这些存储库关联的资源，例如问题、拉取请求、操作或项目。

如果企业成员使用他们管理的个人帐户访问 {% data variables.product.product_location %}，因为你不使用 {% data variables.product.prodname_emus %}，所以 {% data variables.product.product_name %} 不会在审核日志中针对以下操作显示事件或 IP 地址。
  
- 通过 {% data variables.product.product_location %} 进行身份验证
- 与个人帐户拥有的资源（包括存储库、gist 或项目）的交互
- 与企业中组织拥有的公共存储库交互

## 启用在审核日志中显示 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. 在“审核日志”下，单击“源 IP 泄露”。

   ![“源 IP 泄露”选项卡的屏幕截图](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. 在“在审核日志中披露参与者 IP 地址”下，选择“启用源 IP 泄露”。

   ![启用在审核日志中显示 IP 地址的复选框的屏幕截图](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. 单击“保存” 。

启用该功能后，可以访问审核日志以查看包含 IP 地址的事件。 有关详细信息，请参阅“[访问企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)”。
