---
title: 已删除或缺少的 SSH 密钥
intro: '作为安全预防措施，{% data variables.product.prodname_dotcom %} 会自动删除一年内未使用过的 SSH 密钥。'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/troubleshooting-ssh/deleted-or-missing-ssh-keys
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Deleted or missing SSH keys
ms.openlocfilehash: aa26a5bf39db3f41aa3c3aa01f59c392a42f467f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084580'
---
{% data variables.product.prodname_dotcom %} 会自动删除非活动的 SSH 密钥以确保账户安全，例如在某人离职或丢失计算机后。

可以通过查看帐户的安全日志，检查是否在一年内未使用过 SSH 密钥。 有关详细信息，请参阅“[查看安全日志](/articles/reviewing-your-security-log/)”。

在删除非活动 SSH 密钥后，必须生成一个新的 SSH 密钥并将其与帐户关联。 有关详细信息，请参阅“[生成新 SSH 密钥并将其添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)”和“[新增 SSH 密钥到 GitHub 帐户](/articles/adding-a-new-ssh-key-to-your-github-account/)”。
