---
title: 创建存储库安全公告
intro: 您可以创建安全通告草稿，以私下讨论和修复开源项目中的安全漏洞。
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
  - /code-security/security-advisories/creating-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Create repository advisories
ms.openlocfilehash: d4b47f84b20873e97b18106448b768288fff3039
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099741'
---
任何对仓库有管理员权限的人都可以创建安全通告。

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## 创建安全通知

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. 单击“新建安全公告草稿”。
  ![“打开公告草稿”按钮](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. 键入安全通告的标题。
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. 单击“创建安全公告草稿”。
  ![“创建安全公告”按钮](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## 后续步骤

- 评论安全通告草稿，与团队讨论漏洞。
- 添加协作者到安全通告。 有关详细信息，请参阅“[将协作者添加到存储库安全公告](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)”。
- 在临时私有复刻中私下协作以修复漏洞。 有关详细信息，请参阅“[在临时专用分支中协作以解决存储库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”。
- 添加因对安全通告做出贡献而应获得积分的个人。 有关详细信息，请参阅“[编辑存储库安全公告](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)”。
- 发布安全通告以向社区提醒安全漏洞。 有关详细信息，请参阅“[发布存储库安全公告](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”。
