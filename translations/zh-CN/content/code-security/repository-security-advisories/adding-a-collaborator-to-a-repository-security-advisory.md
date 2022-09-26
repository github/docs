---
title: 将协作者添加到存储库安全通告
intro: 您可以添加其他用户或团队与您协作处理安全通告。
redirect_from:
  - /articles/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
  - /code-security/security-advisories/adding-a-collaborator-to-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Add collaborators
ms.openlocfilehash: 6fa4062fab8e4ffc59724ceb0ba3b6b536871df9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147877165'
---
对安全通告具有管理员权限的人员可向安全通告添加协作者。

{% data reusables.security-advisory.repository-level-advisory-note %}

## 添加协作者到安全通告

协作者对安全通告具有写入权限。 有关详细信息，请参阅[存储库安全通告的权限级别](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)。

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} 有关删除安全通告协作者的更多信息，请参阅[从存储库安全通告删除协作者](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. 在“Security Advisories（安全通告）”列表中，单击要向其添加协作者的安全通告。
5. 在页面右侧的“Collaborators（协作者）”下，键入要添加到安全通告的用户或团队名称。
  ![用于输入用户或团队名称的字段](/assets/images/help/security/add-collaborator-field.png)
6. 单击“添加”。
  ![“添加”按钮](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## 延伸阅读

- [存储库安全通告的权限级别](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)
- [在临时专用分支中协作以解决存储库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)
- [从存储库安全通告删除协作者](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)。
