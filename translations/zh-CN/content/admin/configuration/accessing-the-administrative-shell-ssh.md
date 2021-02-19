---
title: 访问管理 shell (SSH)
redirect_from:
  - /enterprise/admin/articles/ssh-access/
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access/
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access/
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
  - /enterprise/admin/configuration/accessing-the-administrative-shell-ssh
intro: '{% data reusables.enterprise_site_admin_settings.about-ssh-access %}'
versions:
  enterprise-server: '*'
---

### 关于管理 shell 访问

如果您有权限通过 SSH 访问管理 shell，可运行 {% data variables.product.prodname_ghe_server %} 的命令行实用程序。 SSH 访问也可用于故障排查、运行备份和配置复制。 管理 SSH 访问与 Git SSH 访问分开管理，仅可通过端口 122 访问。

### 允许通过 SSH 访问管理 shell

要启用管理 SSH 访问，您必须向授权密钥的实例列表添加 SSH 公钥。

{% tip %}

**提示**：对授权 SSH 密钥进行的变更会立即生效。

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. 在“SSH access”下，将密钥粘贴到文本框中，然后单击 **Add key**。 ![添加 SSH 密钥的文本框和按钮](/assets/images/enterprise/settings/add-authorized-ssh-key-admin-shell.png)
{% data reusables.enterprise_management_console.save-settings %}

### 通过 SSH 连接到管理 shell

将 SSH 密钥添加到列表后，以 `admin` 用户的身份在端口 122 上通过 SSH 连接到实例。

```shell
$ ssh -p 122 admin@github.example.com
Last login: Sun Nov 9 07:53:29 2014 from 169.254.1.1
admin@github-example-com:~$ █
```

#### 排查 SSH 连接问题

如果在尝试通过 SSH 连接到 {% data variables.product.product_location %} 时发生 `Permission denied (publickey)` 错误，请确认您是否是通过端口 122 连接的。 您可能需要明确指定要使用的 SSH 私钥。

要使用命令行指定 SSH 私钥，请运行包含 `-i` 参数的 `ssh`。

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@<em>hostname</em>
```

您也可以使用 SSH 配置文件 (`~/.ssh/config`) 指定 SSH 私钥。

```shell
Host <em>hostname</em>
  IdentityFile /path/to/ghe_private_key
  User admin
  Port 122
```

### 使用本地控制台访问管理 shell

在 SSH 不可用等紧急情况下，您可以在本地访问管理 shell。 以 `admin` 用户身份登录，并使用在 {% data variables.product.prodname_ghe_server %} 初始设置期间确定的密码。

### 管理 shell 的访问限制

管理 shell 访问仅可用于故障排查和执行记录的操作程序。 修改系统和应用程序文件、运行程序或安装不受支持的软件包可能导致支持合约失效。 如果您对支持合约允许的活动有任何疑问，请联系 {% data variables.contact.contact_ent_support %}。
