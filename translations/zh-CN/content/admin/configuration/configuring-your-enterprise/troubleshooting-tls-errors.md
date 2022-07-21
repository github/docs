---
title: Troubleshooting TLS errors
intro: 'If you run into TLS issues with your appliance, you can take actions to resolve them.'
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

关于 OpenSSL 的更多信息，请参阅 [OpenSSL 的文档](https://www.openssl.org/docs/)。

## Converting your TLS certificate or key into PEM format

如果安装了 OpenSSL，您可以使用 `openssl` 命令将密钥转换为 PEM 格式。 例如，您可以将密钥从 DER 格式转换为 PEM 格式。

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

否则，可以使用 SSL Converter 工具将证书转换为 PEM 格式。 更多信息请参阅 [SSL Converter 工具文档](https://www.sslshopper.com/ssl-converter.html)。

## 上传密钥后安装无响应

If {% data variables.product.product_location %} is unresponsive after uploading an TLS key, please [contact {% data variables.product.prodname_enterprise %} Support](https://enterprise.github.com/support) with specific details, including a copy of your TLS certificate.

## 证书有效性错误

Clients such as web browsers and command-line Git will display an error message if they cannot verify the validity of an TLS certificate. 这种情况通常发生在自签名证书以及由不被客户端承认的中间根证书颁发的“链式根”证书上。

如果您要使用由证书颁发机构 (CA) 签名的证书，那么您上传到 {% data variables.product.prodname_ghe_server %} 的证书文件必须包含具有该 CA 的根证书的证书链。 要创建此类文件，请将整个证书链（“或证书包”）连接到证书末端，确保包含主机名的主要证书在前。 在大多数系统中，您可以使用与下列命令相似的命令来执行此操作：

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

You should be able to download a certificate bundle (for example, `bundle-certificates.crt`) from your certificate authority or TLS vendor.

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

## Updating a TLS certificate

You can generate a new self-signed certificate or update an existing TLS certificate for {% data variables.product.product_location %} with the `ghe-ssl-certificate-setup` command line utility. 更多信息请参阅“[命令行实用程序](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup)”。
