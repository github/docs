---
title: 排查 TLS 错误
intro: 如果你的设备遇到 TLS 问题，可以采取相应措施加以解决。
redirect_from:
  - /enterprise/admin/articles/troubleshooting-ssl-errors
  - /enterprise/admin/categories/dns-ssl-and-subdomain-configuration
  - /enterprise/admin/installation/troubleshooting-ssl-errors
  - /enterprise/admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/configuring-your-enterprise/troubleshooting-ssl-errors
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Errors
  - Infrastructure
  - Networking
  - Security
  - Troubleshooting
shortTitle: Troubleshoot TLS errors
ms.openlocfilehash: 855737f89f0380333b1f37c26d512c889f2ee786
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881249'
---
## 将密码从密钥文件中移除

如果您的 Linux 机器上安装了 OpenSSL，可以移除密码。

1. 重命名原始密钥文件。
  ```shell
  $ mv yourdomain.key yourdomain.key.orig
  ```
2. 生成不含密码的新密钥。
  ```shell
  $ openssl rsa -in yourdomain.key.orig -out yourdomain.key
  ```

运行此命令时系统会提示您输入密钥的密码。

有关 OpenSSL 的详细信息，请参阅 [OpenSSL 文档](https://www.openssl.org/docs/)。

## 将 TLS 证书或密钥转换为 PEM 格式

如果安装了 OpenSSL，可以使用 `openssl` 命令将密钥转换为 PEM 格式。 例如，您可以将密钥从 DER 格式转换为 PEM 格式。

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

否则，可以使用 SSL Converter 工具将证书转换为 PEM 格式。 有关详细信息，请参阅 [SSL 转换器工具的文档](https://www.sslshopper.com/ssl-converter.html)。

## 上传密钥后安装无响应

如果上传 TLS 密钥后 {% data variables.product.product_location %}无响应，请[联系 {% data variables.product.prodname_enterprise %} 支持部门](https://enterprise.github.com/support)，并提供具体详细信息，包括 TLS 证书的副本。 请确保未包含私钥。 

## 证书有效性错误

如果 Web 浏览器和命令行 Git 等客户端无法验证 TLS 证书的有效性，则会显示错误消息。 这种情况通常发生在自签名证书以及由不被客户端承认的中间根证书颁发的“链式根”证书上。

如果您要使用由证书颁发机构 (CA) 签名的证书，那么您上传到 {% data variables.product.prodname_ghe_server %} 的证书文件必须包含具有该 CA 的根证书的证书链。 要创建此类文件，请将整个证书链（“或证书包”）连接到证书末端，确保包含主机名的主要证书在前。 在大多数系统中，您可以使用与下列命令相似的命令来执行此操作：

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

可以从证书颁发机构或 TLS 供应商处下载证书捆绑包（例如 `bundle-certificates.crt`）。

## 安装自签名或不受信任的证书颁发机构 (CA) 根证书

如果您的 {% data variables.product.prodname_ghe_server %} 设备与网络中使用自签名或不受信证书的其他机器进行交互，您需要将签名 CA 的根证书导入到系统范围的证书库中，以通过 HTTPS 访问这些系统。

1. 从本地证书颁发机构获取 CA 的根证书并确保其为 PEM 格式。
2. 以“admin”用户身份在端口 122 上通过 SSH 将文件复制到您的 {% data variables.product.prodname_ghe_server %} 设备。
  ```shell
  $ scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
  ```
3. 以“admin”用户身份在端口 122 上通过 SSH 连接到 {% data variables.product.prodname_ghe_server %} 管理 shell。
  ```shell
  $ ssh -p 122 admin@HOSTNAME
  ```
4. 将证书导入到系统范围的证书库中。
  ```shell
  $ ghe-ssl-ca-certificate-install -c rootCA.crt
  ```

## 更新 TLS 证书

你可以生成新的自签名证书，或者使用 `ghe-ssl-certificate-setup` 命令行实用工具更新 {% data variables.product.product_location %}的现有 TLS 证书。 有关详细信息，请参阅“[命令行实用工具](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup)”。
