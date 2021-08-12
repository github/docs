---
title: 安全通告的权限级别
intro: 您在安全通告中可以执行的操作取决于您是公告的管理员还是对其有写入权限。
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
versions:
  free-pro-team: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
---

### 权限概述

{% data reusables.repositories.security-advisory-admin-permissions %} 有关添加协作者到安全通告的更多信息，请参阅“[添加协作者到安全通告](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)”。

| 操作                                                                                                                                                                | 写入权限 | 管理员权限 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ----- |
| 查看安全通告草稿                                                                                                                                                          | X    | X     |
| 添加协作者到安全通告（请参阅“[添加协作者到安全通告](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)”）                                             |      | X     |
| 编辑和删除安全通告中的任何评论                                                                                                                                                   | X    | X     |
| 在安全通告中创建临时私有复刻（请参阅“[在临时私有复刻中协作以解决安全漏洞](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)”）                                 |      | X     |
| 添加更改到安全通告中的临时私有复刻（请参阅“[在临时私有复刻中协作以解决安全漏洞](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)”）                              | X    | X     |
| 在临时私有复刻中创建拉取请求（请参阅“[在临时私有复刻中协作以解决安全漏洞](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)”） | X    | X     |
| 合并安全通告中的更改（请参阅“[在临时私有复刻中协作以解决安全漏洞](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)”）                                     |      | X     |
| 在安全通告中添加和编辑元数据（请参阅“[发布安全通告](/github/managing-security-vulnerabilities/publishing-a-security-advisory)”）                                                           | X    | X     |
| 添加和删除安全通告的积分（请参阅“[编辑安全通告](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)”）                          | X    | X     |
| 关闭安全通告草稿                                                                                                                                                          |      | X     |
| 发布安全通告（请参阅“[发布安全通告](/github/managing-security-vulnerabilities/publishing-a-security-advisory)”）                                                                   |      | X     |

### 延伸阅读

- "[添加协作者到安全通告](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)"
- "[在临时私有复刻中协作以解决安全漏洞](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)"
- "[从安全通告删除协作者](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)"
- "[撤销安全通告](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
