---
title: 访问企业的合规性报告
intro: '可以为企业访问 {% data variables.product.company_short %} 的合规性报告，例如我们的 SOC 报告和云安全联盟 CAIQ 自我评估 (CSA CAIQ)。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Enterprise owners can access compliance reports for the enterprise.
shortTitle: Access compliance reports
ms.openlocfilehash: d9391e9bb029620ee9c034a5ad3092588e914c36
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148007885'
---
## 关于 {% data variables.product.company_short %} 的合规性报告

可以在企业设置中访问 {% data variables.product.company_short %} 的合规性报告。

{% data reusables.security.compliance-report-list %}

## 访问企业的合规性报告

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. 在“资源”下，在想要访问的报告右侧，单击 {% octicon "download" aria-label="The Download icon" %}“下载”或 {% octicon "link-external" aria-label="The external link icon" %}“查看” 。

   {% data reusables.security.compliance-report-screenshot %}

## 延伸阅读

- “[访问组织的合规性报告](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization)”{% ifversion enterprise-member-csv %}
- “[导出企业的成员身份信息](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)”{% endif %}
