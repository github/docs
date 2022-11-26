---
title: 导出企业的成员身份信息
intro: 可以导出有关所有企业成员的信息。
versions:
  feature: enterprise-member-csv
topics:
  - Enterprise
shortTitle: Export membership information
permissions: Enterprise owners can export membership information for an enterprise.
ms.openlocfilehash: ba7519aae1b38cd629a46baeacd5edc9d138efdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106419'
---
{% note %}

注意：导出企业的成员身份信息目前为 beta 版，可能会随时更改。

{% endnote %}

若要对有权访问企业资源的人员执行审核，可以下载企业成员身份信息的 CSV 报表。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. 在“成员”右侧，单击 {% octicon "download" aria-label="The download icon" %} CSV 报表。

   - 如果企业成员少于 1,000 人，报表将立即下载。
   - 如果企业成员等于或超过 1,000 人，你很快将收到一封带有下载报表链接的电子邮件。
   ![“CSV 报表”按钮的屏幕截图](/assets/images/help/business-accounts/csv-report-button.png)
