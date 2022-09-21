---
title: 错误：密钥已被使用
intro: '尝试添加已添加到其他帐户或存储库的[密钥](/articles/adding-a-new-ssh-key-to-your-github-account)时，会发生此错误。'
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
  - /github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: d202de2efe05951fe829a8198b20831fc15bbd72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084576'
---
## 查找已使用密钥的位置

要确定已使用该密钥的位置，请打开终端并键入 `ssh` 命令。 使用 `-i` 标记提供要检查的密钥的路径：

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.product.product_location %} using a specific ssh key
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

响应中的用户名是 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上密钥当前附加到的帐户。 如果响应类似于“username/repo”，则表示密钥已作为[部署密钥](/guides/managing-deploy-keys#deploy-keys)附加到存储库。


要强制 SSH 仅使用命令行上提供的密钥，请使用 `-o` 添加 `IdentitiesOnly=yes` 选项：

```shell
$ ssh -v -o "IdentitiesOnly=yes" -i <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
```

## 修复问题

为解决此问题，请先从其他帐户或存储库删除该密钥，然后[将其添加到帐户](/articles/adding-a-new-ssh-key-to-your-github-account)。

如果没有传输密钥的权限，请联系有权限的用户，删除密钥对并[生成新的密钥对](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。

## 部署密钥

在密钥作为部署密钥附加到一个仓库后，无法再用于另一个仓库。  如果在设置部署密钥时出现此错误，请参阅“[管理部署密钥](/guides/managing-deploy-keys)”。
