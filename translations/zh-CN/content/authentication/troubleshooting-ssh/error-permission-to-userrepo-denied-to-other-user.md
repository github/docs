---
title: 错误：用户/仓库拒绝其他用户的权限
intro: 此错误意味着您正在推送的密钥附加到无仓库访问权限的帐户。
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-other-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-user
ms.openlocfilehash: b46df8f9e8671008b37d3db69e2094e96e0413b8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084574'
---
要解决此问题，存储库的所有者 (`user`) 需将帐户 (`other-user`) 添加为存储库的协作者或对存储库具有写入权限的团队。
