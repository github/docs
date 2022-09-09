---
title: 错误：SSL 证书有问题，请验证 CA 证书是否正常
intro: '此错误意味着您的 CA 根证书已过期。 如果您的 CA 根证书需要更新，您将无法从 {% data variables.product.product_name %} 仓库推送或拉取。'
redirect_from:
  - /articles/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
  - /github/authenticating-to-github/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSL certificate problem
ms.openlocfilehash: 26777edf5b312c8f45c5b1fb211b87648778cf13
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084569'
---
您可能收到像以下这样的错误：

```shell
$ git push -u github.main
> fatal: 'github.main' does not appear to be a git repository
> fatal: The remote end hung up unexpectedly

$ git pull -u github
> error: SSL certificate problem, verify that the CA cert is OK. Details:
> error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed while accessing https://github.com/tqisjim/google-oauth.git/info/refs
> fatal: HTTP request failed
```

“CA”是“证书颁发机构”的简写，该机构是负责处理 Web 上安全连接的第三方团体。 他们建立数字“证书”，这是确保两台机器（如您的计算机和 GitHub.com）之间存在有效连接的一种方式。 没有证书，两台机器之间的安全风险就会更高。

当您收到此错误时，可能意味您的 CA 已过期且需要更新。 通常情况下，更新操作系统会同时更新 CA，并解决此问题。
