---
title: 错误：用户/仓库拒绝用户/其他仓库的权限
intro: 此错误意味着您正在推送的密钥作为 deploy key 附加到另一个仓库，并且对您尝试推送到的仓库的没有访问权限。
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
ms.openlocfilehash: 4d4898e947338e39c5ade86b5ea0a71f54f36f03
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084573'
---
若要解决此问题，请从存储库中移除部署密钥，并改为[将密钥添加到个人帐户](/articles/adding-a-new-ssh-key-to-your-github-account)。

如果要使用的密钥为部署密钥，请查看[部署密钥指南](/guides/managing-deploy-keys)了解更多详细信息。
