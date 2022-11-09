---
title: 删除存储库安全公告中的协作者
intro: 协作者从存储库安全公告中删除后，将失去对安全公告的讨论和元数据的读取和写入权限。
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
  - /code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: 77c21bea9c593935ee1b92028fc52859320f5a38
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113991'
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
