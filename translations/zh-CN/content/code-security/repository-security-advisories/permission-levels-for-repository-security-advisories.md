---
title: 仓库安全通告的权限级别
intro: 您在仓库安全通告中可以执行的操作取决于您是公告的管理员还是对其有写入权限。
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
shortTitle: 权限级别
---

本文仅适用于存储库级别的安全通告。 任何人都可以在 [github.com/advisories](https://github.com/advisories) 上为 {% data variables.product.prodname_advisory_database %} 中的全局安全通告做出贡献。 对全局通告的编辑不会更改或影响通告在存储库中的显示方式。  更多信息请参阅“[编辑 {% data variables.product.prodname_advisory_database %} 中的安全通告](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”。

## 权限概述

{% data reusables.repositories.security-advisory-admin-permissions %} 有关添加协作者到安全通告的更多信息，请参阅“[添加协作者到仓库安全通告](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)”。

| 操作                                                                                                                                                                                    | 写入权限 | 管理员权限 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ----- |
| 查看安全通告草稿                                                                                                                                                                              | X    | X     |
| 添加协作者到安全通告（请参阅“[添加协作者到仓库安全通告](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)”）                                                |      | X     |
| 编辑和删除安全通告中的任何评论                                                                                                                                                                       | X    | X     |
| 在安全通告中创建临时私有复刻（请参阅“[在临时私有复刻中协作以解决仓库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”）    |      | X     |
| 添加更改到安全通告中的临时私有复刻（请参阅“[在临时私有复刻中协作以解决仓库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”） | X    | X     |
| 在临时私有复刻中创建拉取请求（请参阅“[在临时私有复刻中协作以解决仓库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”）    | X    | X     |
| 合并安全通告中的更改（请参阅“[在临时私有复刻中协作以解决仓库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)”）        |      | X     |
| 在安全通告中添加和编辑元数据（请参阅“[发布仓库安全通告](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”）                                                              | X    | X     |
| 添加和删除安全通告的积分（请参阅“[编辑仓库安全通告](/code-security/repository-security-advisories/editing-a-repository-security-advisory)”）                                                                   | X    | X     |
| 关闭安全通告草稿                                                                                                                                                                              |      | X     |
| 发布安全通告（请参阅“[发布仓库安全通告](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”）                                                                      |      | X     |

## 延伸阅读

- "[添加协作者到仓库安全通告](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
- "[在临时私有复刻中协作以解决仓库安全漏洞](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- “[从仓库安全通告中删除协作者](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)”
- "[撤销存储库安全通告](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)"
