---
title: '错误：ssh-add：非法选项 -- K'
intro: '此错误意味着您的‘ssh-add’版本不支持 macOS 密钥链集成，此集成允许您将密码存储在密钥链中。'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

`-K` 选项位于 Apple 的 `ssh-add` 标准版本中，当您将 ssh 密钥添加到 ssh-agent 时，它会将密码存储在您的密钥链中。 如果您已安装不同版本的 `ssh-add`，该版本可能缺少对 `-K` 的支持。

### 解决问题

要将 SSH 私钥添加到 ssh 代理，可以指定到 `ssh-add` Apple 版本的路径：

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_rsa
```

{% note %}

**注意：** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

### 延伸阅读

- "[生成新的 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"
- [SSH-ADD 的 Linux 手册页](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- 要查看 Apple 的 SSH-ADD 手册页，请在终端中运行 `man ssh-add`。
