---
title: 支持的操作系统
intro: '您可以在任何支持的操作系统上使用 {% data variables.product.prodname_desktop %}。'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
versions:
  free-pro-team: '*'
---

### 关于支持的操作系统

{% data variables.product.prodname_desktop %} 支持以下操作系统。
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. 必须有 64 位操作系统才可运行 {% data variables.product.prodname_desktop %}。

### macOS 问题疑难排解
如果您在 macOS 上使用 {% data variables.product.prodname_desktop %} 时遇到问题，请尝试以下解决方法。 更多信息请参阅 [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md)。

#### 登录帐户后发生 `The username or passphrase you entered is not correct` 错误

当 {% data variables.product.prodname_desktop %} 无法访问您存储在 Keychain 上的凭据时就可能发生这个错误。

要解决此错误，请按照以下步骤操作。

1. 打开“Keychain Access”应用程序。
2. 右键单击 **login（登录）**，然后单击 **Lock Keychain "login"（锁定密钥链 [登录]）**。 !["锁定密钥链 "登录" 选项](/assets/images/help/desktop/mac-lock-keychain.png)
3. 右键单击 **login（登录）**，然后单击 **Unlock Keychain "login"（解锁密钥链 [登录]）**。 按照屏幕上的提示完成解锁密钥链“登录”。 !["解锁密钥链 "登录" 选项](/assets/images/help/desktop/mac-unlock-keychain.png)
4. 重新验证您在 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 上的帐户。

#### 检查更新后发生 `Could not create temporary directory: Permission denied` 错误

此错误可能是缺少对目录 `~/Library/Caches/com.github.GitHubClient.ShipIt` 的权限引起的。 {% data variables.product.prodname_desktop %} 使用此目录创建和解压临时文件，作为更新应用程序的一部分。

要解决此错误，请按照以下步骤操作。

1. 关闭 {% data variables.product.prodname_desktop %}。
2. 打开 "Finder" 并导航到 `~/Library/Caches/`。
3. 右键单击 `.github.githubClient.shipIt` ，然后单击 **Get Info（获取信息）**。
4. 单击“Sharing & Permissions（共享和权限）”左边的箭头。
5. 如果用户帐户右侧的权限没有显示“Read & Write（读取和写入）”，请单击文本，然后单击 **Read & Write（读取和写入）**。 !["共享和权限"选项](/assets/images/help/desktop/mac-adjust-permissions.png)
6. 打开 {% data variables.product.prodname_desktop %} 并检查更新。

### Windows 问题疑难排解
如果您在 Windows 上使用 {% data variables.product.prodname_desktop %} 时遇到问题，请尝试以下解决方法。 更多信息请参阅 [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md)。

#### `The revocation function was unable to check revocation for the certificate.` 错误

如果您在公司网络上使用 {% data variables.product.prodname_desktop %} 阻止Windows 检查证书的撤销状态，就可能发生这个错误。

要解决问题，请联系您的系统管理员。

#### 克隆使用文件夹重定向配置的仓库时发生 `git clone failed` 错误

{% data variables.product.prodname_desktop %} 不支持使用文件夹重定向配置的仓库。

#### `cygheap base mismatch detected` 错误

启用强制 ASLR 时可能会发生此错误。 启用强制 ASLR 会影响 MSYS2 核心库，{% data variables.product.prodname_desktop %} 使用该库来模拟进程复刻。

要排除此错误，请禁用强制 ASLR 或明确允许 `<Git>[usr] bin` 依赖 MSYS2 的所有可执行文件。
