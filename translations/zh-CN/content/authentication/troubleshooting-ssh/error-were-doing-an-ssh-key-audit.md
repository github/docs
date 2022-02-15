---
title: 错误：我们正在进行 SSH 密钥审核
intro: 此错误意味着无法验证正在用于执行 Git 操作的 SSH 密钥。
redirect_from:
  - /articles/error-we-re-doing-an-ssh-key-audit
  - /articles/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/troubleshooting-ssh/error-were-doing-an-ssh-key-audit
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH 密钥审计
---

使用一个未验证的密钥执行 Git 操作时，系统会提示您执行 SSH 密钥审核。

```shell
ERROR: We're doing an SSH key audit.
Reason: unverified due to lack of use
Please visit https://github.com/settings/ssh
to approve this key so we know it's safe.
Fingerprint: ab:08:46:83:ff:f6:c4:f8:a9:4e:68:6b:94:17:f2:46
fatal: could not read from remote repository
```
## 解决问题

要解决此问题，您需要[审查您的 SSH 密钥](/articles/reviewing-your-ssh-keys)，然后拒绝或批准未验证的密钥。 单击错误消息中的 URL 链接将转到 SSH 设置页面，会在 SSH 密钥列表中突出显示未验证的 SSH 密钥。
