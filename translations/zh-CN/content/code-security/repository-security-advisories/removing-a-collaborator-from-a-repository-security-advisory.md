---
title: 删除存储库安全公告中的协作者
intro: 协作者从存储库安全公告中删除后，将失去对安全公告的讨论和元数据的读取和写入权限。
redirect_from:
- /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
- /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
- Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: ced0edd0614304c0d33ddd40dce3c6a24a9ffcfd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145099732"
---
对安全通告具有管理员权限的人员可从安全通告删除协作者。

{% data reusables.security-advisory.repository-level-advisory-note %}

## 从安全通告删除协作者

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. 在“Security Advisories（安全通告）”列表中，单击要从中删除协作者的安全通告。
  ![列表中的安全公告](/assets/images/help/security/security-advisory-in-list.png)
5. 在页面右侧的“Collaborators（协作者）”下，键入要从安全通告删除的用户或团队名称。
  ![安全公告协作者](/assets/images/help/security/security-advisory-collaborator.png)
6. 在要移除的协作者旁边，单击“X”图标。
  ![用于删除安全公告协作者的 X 图标](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## 延伸阅读

- [存储库安全公告的权限级别](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)
- [将协作者添加到存储库安全公告](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)
