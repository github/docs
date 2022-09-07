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
ms.openlocfilehash: fd195f8d15e89cf3e1ff9b76ce258d736ffc068f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060400'
---
## 关于 {% data variables.product.company_short %} 的合规性报告

可以在组织设置中访问 {% data variables.product.company_short %} 的合规性报告。

{% data reusables.security.compliance-report-list %}


{% note %}

注意：要查看合规性报告，你的组织必须使用 {% data variables.product.prodname_ghe_cloud %}。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## 访问组织的合规性报告

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. 在“合规性报告”下，单击要访问的报告右侧的 {% octicon "download" aria-label="The Download icon" %}“下载”或 {% octicon "link-external" aria-label="The external link icon" %}“查看” 。

   {% data reusables.security.compliance-report-screenshot %}

## 延伸阅读

- [访问企业的合规性报告](/admin/overview/accessing-compliance-reports-for-your-enterprise)
