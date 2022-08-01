---
title: 错误：未知密钥类型
intro: 此错误表示您使用的 SSH 密钥类型无法识别或不受 SSH 客户端支持。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
  - /github/authenticating-to-github/troubleshooting-ssh/error-unknown-key-type
---

## 关于 `unknown key type` 错误

生成新的 SSH 密钥时，如果您的 SSH 客户端不支持您指定的密钥类型，您可能会收到 `unknown key type` 错误。{% mac %}要在 macOS 上解决此问题，您可以更新 SSH 客户端或安装新的 SSH 客户端。

## 基本要求

您必须安装 Homebrew。 更多信息请参阅 Homebrew 文档中的[安装指南](https://docs.brew.sh/Installation)。

## 解决问题

{% warning %}

**警告：** 如果您安装 OpenSSH，您的计算机将无法检索存储在 Apple 密钥链中的密码。 每次使用 SSH 向 {% data variables.product.prodname_dotcom %} 或其他 Web 服务验证时，您都需要输入密码或与硬件安全密钥进行交互。

如果删除 OpenSSH，则存储在密钥链中的密码将再次可检索。 通过在终端输入命令 `brew uninstall openssh` 可删除 OpenSSH。

{% endwarning %}

1. 打开终端。
2. 输入命令 `brew install openssh`。
3. 退出并重新启动终端。
4. 再次尝试生成新 SSH 密钥的过程。 更多信息请参阅“[生成新的 SSH 密钥并添加到 ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)”。

{% endmac %}{% linux %}要在 Linux 上解决此问题，请使用 Linux 发行版的包管理器来安装 OpenSSH 的新版本，或从源代码编译新版本。 如果您安装不同版本的 OpenSSH，则其他应用程序通过 SSH 进行身份验证的能力可能会受到影响。 有关更多信息，请查看发行版的文档。{% endlinux %}
