---
title: 管理私下报告的安全漏洞
intro: 存储库维护人员可以管理由存储库安全研究人员向其私下报告的安全漏洞，这些存储库已启用了非公开漏洞报告。
permissions: 'Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Manage vulnerability reports
ms.openlocfilehash: 942533788dc6ad9280ddc023f583462c7a0ff7f8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159786'
---
{% data reusables.security-advisory.private-vulnerability-reporting-beta %}

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

## 关于私下报告安全漏洞

通过非公开漏洞报告，安全研究人员可以轻松使用简单的表单直接向你报告漏洞。 

当安全研究人员私下报告漏洞时，你会收到通知并且可以选择接受报告、提出更多问题或拒绝报告。 如果接受报告，则可以与安全研究人员私下协作修复漏洞。

## 管理私下报告的安全漏洞

当安全研究人员私下报告存储库中的漏洞时，{% data variables.product.prodname_dotcom %} 会通知存储库维护人员，并在维护人员监视存储库或为存储库启用通知的情况下发送通知。 有关详细信息，请参阅“[配置通知](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. 单击要查看的通告。 私下报告的通告的状态为 `Needs triage`。
  
   ![通告列表示例的屏幕截图](/assets/images/help/security/advisory-list.png)
   
2. 仔细查看报告。 可以：
   - 单击“启动临时专用分叉”，与安全研究人员私下协作生成修补程序。 这为你提供了一个与参与者进一步讨论的空间，而无需从 `Needs triage` 更改建议的通告状态。
   - 单击“接受并作为草稿打开”，在 {% data variables.product.prodname_dotcom %} 上将漏洞报告作为草稿通告接受。 如果你选择此选项：
      - 该选项不会公开报表。
      - 报表将成为存储库安全通告草稿，可以采用与创建的任何草稿通告相同的方式使用它。
     有关安全通告的详细信息，请参阅“[关于存储库安全通告](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)”。
   - 单击“关闭安全通告”可拒绝报告。 在可能的情况下，在关闭通告之前应添加注释，解释为什么不将报告内容视为安全风险。

     ![查看外部提交的漏洞报告时，存储库维护者可用的选项的屏幕截图](/assets/images/help/security/advisory-maintainer-options.png)
