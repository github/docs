---
title: 错误：ssh-add：非法选项 -- K
intro: 此错误意味着你的 `ssh-add` 版本不支持 macOS 密钥链集成，此集成允许你将密码存储在密钥链中。
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssh-add-illegal-option----k
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 'ssh-add: illegal option -- K'
ms.openlocfilehash: a9c563f637d2deb544611c8b357761ff1148fa1c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084572'
---
`-K` 选项位于 Apple 的 `ssh-add` 标准版本中，当你将 ssh 密钥添加到 ssh-agent 时，它会将密码存储在你的密钥链中。 如果安装了其他版本的 `ssh-add`，则该版本可能缺少对 `-K` 的支持。

## 解决问题

要将 SSH 私钥添加到 ssh-agent，可以指定到 `ssh-add` Apple 版本的路径：

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_ed25519
```

{% note %}

**注意：** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

## 延伸阅读

- “[生成新 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”
- [SSH-ADD 的 Linux 手册页](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- 若要查看 Apple 的 SSH-ADD 手册页，请在终端中运行 `man ssh-add`
