---
title: 审核 SSH 密钥
intro: 站点管理员可以发起 SSH 密钥的实例级审核。
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys/
  - /enterprise/admin/user-management/auditing-ssh-keys
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

发起后，审计会禁用所有现有的 SSH 密钥并强制用户批准或拒绝它们，然后他们才能克隆、拉取任意仓库或推送至仓库。 审核在员工或合同工离开公司时十分有用，您需要确保所有密钥均已验证。

### 发起审核

您可以在站点管理员仪表板的“All users”选项卡中发起 SSH 密钥审核：

![启动公钥审核](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

单击“Start public key audit”按钮后，您将转到确认屏幕，此屏幕会向您解释接下来要发生的情况：

![确认审核](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

单击“Begin audit”按钮后，所有 SSH 密钥将失效，并需要批准。 您会看到一个指示审核已开始的通知。

### 用户看到的内容

如果用户通过 SSH 执行任何 git 操作，它会失败，用户将看到以下消息：

```shell
ERROR: Hi <em>username</em>. We're doing an SSH key audit.
Please visit http(s)://<em>hostname</em>/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

在用户单击链接后，他们会被要求在帐户上批准密钥：

![审核密钥](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

在用户批准或拒绝密钥后，他们将能够像以往一样与仓库进行交互。

### 添加 SSH 密钥

新用户在添加 SSH 密钥时将会收到需要输入密码的提示：

![密码确认](/assets/images/help/settings/sudo_mode_popup.png)

在用户添加密钥时，他们会收到如下所示的通知电子邮件：

    The following SSH key was added to your account:
    
    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
    
    If you believe this key was added in error, you can remove the key and disable access at the following location:
    
    http(s)://HOSTNAME/settings/ssh
