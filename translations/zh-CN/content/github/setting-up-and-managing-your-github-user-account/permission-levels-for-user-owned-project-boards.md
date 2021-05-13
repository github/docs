---
title: 用户拥有的项目板的权限级别
intro: 用户帐户拥有的项目板有两种权限级别：项目板所有者和协作者。
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
---

### 权限概述

用户拥有的项目板只有一个所有者，此权限无法与其他用户帐户共享。 除了所有者之外，其他人可以在项目板上协作。

项目板协作者有三种权限级别：

{% data reusables.project-management.project-board-permissions %}

### 用户拥有的项目板的所有者和管理员权限

项目板所有者和具有管理员权限的协作者对项目板有完全控制权限。 除了项目板协作者拥有的所有权限之外，项目板所有者和具有管理员权限的协作者还可以：

- [管理、查看和添加协作者](/articles/managing-access-to-your-user-account-s-project-boards)
- [将项目板配置为{% if currentVersion == "github-ae@latest" %}内部{% else %}公共{% endif %}或私有](/articles/changing-project-board-visibility)
- [删除项目板](/articles/deleting-a-project-board/)
- [关闭项目板](/articles/closing-a-project-board/)
- [重新打开关闭的项目板](/articles/reopening-a-closed-project-board)

### 用户拥有的项目板的读取和写入权限

对用户拥有的项目板具有读取权限的协作者可以：

- 查看项目板
- 复制项目板
- 过滤项目板上的卡

对用户拥有的项目板具有写入权限的协作者可以：

- 查看项目板
- 复制项目板
- 过滤项目板上的卡
- 编辑项目板
- 将仓库链接到项目板
- 配置项目板的自动化
- 复制项目板
- 添加议题和拉取请求到项目板
- 添加注释到项目板
- 跟踪项目板上的进度
- 存档项目板上的卡

### 项目板可见性

您可以将项目板的可见性从私有更改为{% if currentVersion == "github-ae@latest" %}内部{% else %}公共{% endif %}，反之亦然。 默认情况下，用户拥有的项目板为私有。 更多信息请参阅“[更改项目板可见性](/articles/changing-project-board-visibility)”。

### 延伸阅读

  - "[管理对用户帐户项目板的访问](/articles/managing-access-to-your-user-account-s-project-boards)"
