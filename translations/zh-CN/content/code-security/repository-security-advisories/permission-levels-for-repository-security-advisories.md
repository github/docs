---
title: 存储库安全公告的权限级别
intro: 你在存储库安全公告中可以执行的操作取决于你是公告的管理员还是对其有写入权限。
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
  - /code-security/security-advisories/permission-levels-for-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
shortTitle: Permission levels
ms.openlocfilehash: 9c2ad0d30b98b79786df09a224766bd826cb84f6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099740'
---
本文仅适用于存储库级别的安全公告。 任何人都可以在 [github.com/advisories](https://github.com/advisories) 上的 {% data variables.product.prodname_advisory_database %} 中提供全局安全公告内容。 对全局公告的编辑不会改变或影响公告在存储库中的显示方式。  有关详细信息，请参阅“[在 {% data variables.product.prodname_advisory_database %} 中编辑安全公告](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”。

## 权限概述

{% data reusables.repositories.security-advisory-admin-permissions %} 有关将协作者添加到安全公告的详细信息，请参阅“[将协作者添加到存储库安全公告](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)”。

操作 | 写入权限 | 管理员权限 |
------ | ----------------- | ----------------- |
查看安全通告草稿 | X | X |
将协作者添加到安全公告（请参阅“[将协作者添加到存储库安全公告](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)”） | | X |
编辑和删除安全通告中的任何评论 | X | X |
在安全公告中创建临时专用分支（请参阅“[在临时专用分支中协作以解决存储库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”） | | X |
在安全公告中添加对临时专用分支的更改（请参阅“[在临时专用分支中协作以解决存储库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”） | X | X |
在临时专用分支中创建拉取请求（请参阅“[在临时专用分支中协作以解决存储库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”） | X | X |
合并安全公告中的更改（请参阅“[在临时专用分支中协作以解决存储库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”） | | X |
在安全公告中添加和编辑元数据（请参阅“[发布存储库安全公告](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”） | X | X |
添加和删除安全公告的积分（请参阅“[编辑存储库安全公告](/code-security/repository-security-advisories/editing-a-repository-security-advisory)”） | X | X |
关闭安全通告草稿 | | X |
发布安全公告（请参阅“[发布存储库安全公告](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”） | | X |

## 延伸阅读

- [将协作者添加到存储库安全公告](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)
- [在临时专用分支中协作以解决存储库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)
- [从存储库安全公告删除协作者](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)
- [撤消存储库安全公告](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)
