---
title: 访问组织的合规性报告
intro: '你可以为组织访问 {% data variables.product.company_short %} 的合规性报告，例如我们的 SOC 报告和云安全联盟 CAIQ 自我评估 (CSA CAIQ)。'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Teams
permissions: Organization owners can access compliance reports for the organization.
shortTitle: Access compliance reports
ms.openlocfilehash: a260c5a13ed92d6cd3ead55cce1c2ff2a61c8d57
ms.sourcegitcommit: 2ff4a43f0b14939da79d56c54402cfee8d90ae23
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169571'
---
## 关于 {% data variables.product.company_short %} 的合规性报告

可以在组织设置中访问 {% data variables.product.company_short %} 的合规性报告。

{% data reusables.security.compliance-report-list %}


{% note %}

注意：要查看合规性报告，你的组织必须使用 {% data variables.product.prodname_ghe_cloud %}。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## 访问组织的合规性报告

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.compliance %}
1. 在想要访问的报告右侧，单击 {% octicon "download" aria-label="The Download icon" %}“下载”或 {% octicon "link-external" aria-label="The external link icon" %}“查看” 。

   {% data reusables.security.compliance-report-screenshot %}

## 延伸阅读

- [访问企业的合规性报告](/admin/overview/accessing-compliance-reports-for-your-enterprise)
