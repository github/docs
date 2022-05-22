---
title: 向 GitHub 验证
shortTitle: 身份验证
intro: '您可以通过向 {% data variables.product.prodname_dotcom %} 验证来安全地访问您的帐户在 {% data variables.product.prodname_desktop %} 上的资源。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
  - /desktop/getting-started-with-github-desktop/authenticating-to-github
  - /desktop/installing-and-configuring-github-desktop/authenticating-to-github
versions:
  free-pro-team: '*'
---
### 关于身份验证

为确保帐户安全，必须先进行身份验证，然后才可使用 {% data variables.product.prodname_desktop %} 访问 {% data variables.product.prodname_dotcom %}上的资源。

在进行身份验证之前，{% data reusables.desktop.get-an-account %}

{% mac %}

### 在 {% data variables.product.prodname_dotcom %} 上验证帐户

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
3. 在“{% data variables.product.prodname_dotcom_the_website %}”右边单击 **Sign In（登录）**。 ![GitHub 的登录按钮](/assets/images/help/desktop/mac-sign-in-github.png)
4. 在“Sign in（登录）”窗格中，单击 **Sign in using your browser（使用浏览器登录）**。 {% data variables.product.prodname_desktop %} 将打开您的默认浏览器。 ![使用浏览器链接登录](/assets/images/help/desktop/sign-in-browser.png)

  {% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.2fa-in-browser %}
7. 在 {% data variables.product.prodname_dotcom %} 验证帐户后，按照提示返回到 {% data variables.product.prodname_desktop %}。

### 在 {% data variables.product.prodname_enterprise %} 上验证帐户

{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
4. 要添加
{% data variables.product.prodname_enterprise %} 帐户，请在“Enterprise server address（企业服务器地址）”下键入您的凭据，然后单击 **Continue（继续）**。
  ![GitHub Enterprise 的登录按钮](/assets/images/help/desktop/mac-sign-in-button-enterprise.png)
{% data reusables.desktop.retrieve-2fa %}

{% endmac %}

{% windows %}

### 在 {% data variables.product.prodname_dotcom %} 上验证帐户

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
3. 在 "GitHub.com" 右边单击 **Sign in（登录）**。 ![GitHub 的登录按钮](/assets/images/help/desktop/windows-sign-in-github.png)
4. 在 Sign in（登录）窗格中，单击 **Sign in using your browser（使用浏览器登录）**。 ![使用浏览器链接登录](/assets/images/help/desktop/sign-in-browser.png)

  {% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.2fa-in-browser %}
7. 在 {% data variables.product.prodname_dotcom %} 验证帐户后，按照提示返回到 {% data variables.product.prodname_desktop %}。

### 在 {% data variables.product.prodname_enterprise %} 上验证帐户


{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
4. 要添加
{% data variables.product.prodname_enterprise %} 帐户，请在“Enterprise server address（企业服务器地址）”下键入您的凭据，然后单击 **Continue（继续）**。
  ![GitHub Enterprise 的登录按钮](/assets/images/help/desktop/windows-sign-in-button-enterprise.png)
{% data reusables.desktop.retrieve-2fa %}

{% endwindows %}

### 解决身份验证问题

如果 {% data variables.product.prodname_desktop %} 遇到身份验证错误，可以使用错误消息进行故障排除。

如果您遇到身份验证错误，请先尝试在 {% data variables.product.prodname_desktop %} 上注销您的帐户，然后重新登录。

对于某些错误，{% data variables.product.prodname_desktop %} 会以错误消息提示您。 如果没有提示，或者要查找任何错误的更多信息，请使用以下步骤查看 {% data variables.product.prodname_desktop %} 日志文件。

{% mac %}

1. 使用 **Help（帮助）**下拉菜单并单击 **Show Logs in Finder（在 Finder 中显示日志）**。 ![Show Logs in Finder（在 Finder 中显示日志）按钮](/assets/images/help/desktop/mac-show-logs.png)
2. 选择您遇到身份验证错误之日的日志文件。

{% endmac %}

{% windows %}

1. 使用 **Help（帮助）**下拉菜单并单击 **Show Logs in Explorer（在 Explorer 中显示日志）**。 ![Show Logs in Explorer（在 Explorer 中显示日志）按钮](/assets/images/help/desktop/windows-show-logs.png)
2. 选择您遇到身份验证错误之日的日志文件。

{% endwindows %}

查看下面的故障排除信息，了解您遇到的错误消息。

#### 无效凭据

```shell
Error: Bad credentials
```

此错误意味着存储的帐户凭据有问题。

要解决问题，请在 {% data variables.product.prodname_desktop %} 上注销您的帐户，然后重新登录。

#### 空令牌

```shell
info: [ui] [AppStore.withAuthenticatingUser] account found for repository: node - <username> (empty token)
```

这个错误表示 {% data variables.product.prodname_desktop %} 找不到它在系统密钥链中创建的访问令牌。

要解决问题，请在 {% data variables.product.prodname_desktop %} 上注销您的帐户，然后重新登录。

#### 未找到仓库

```shell
fatal: repository 'https://github.com/<user>/<repo>.git' not found

(The error was parsed as 8: The repository does not seem to exist anymore. You may not have access, or it may have been deleted or renamed.)
```

这个错误表示您没有权限访问您想克隆的仓库。

要解决问题，请联系您组织中管理权限的人。

#### 无法读取远程仓库

```shell
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```

这个错误表示您没有设置有效的 SSH 密钥。

要解决问题，请参阅“[生成新的 SSH 密钥并添加到 SSH 代理](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

#### 无法克隆

```shell
fatal: clone of 'git@github.com:<user>/<repo>' into submodule path '<path>' failed
Failed to clone 'src/github.com/<user>/<repo>'. Retry scheduled
Cloning into '<path>'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```

这个错误表示您尝试克隆的仓库包含您无法访问的子模块，或者您没有设置有效的 SSH 密钥。

如果您无法访问子模块，请通过联系管理仓库权限的人解决问题。

如果未设置有效的 SSH 密钥，请参阅“[生成新的 SSH 密钥并添加到 SSH 代理](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

{% windows %}

#### 无法读取 AskPass 响应

```shell
error: unable to read askpass response from '/Users/<path>/GitHub Desktop.app/Contents/Resources/app/static/ask-pass-trampoline.sh'
fatal: could not read Username for 'https://github.com': terminal prompts disabled
```

这个错误可能是多个事件造成的。

如果 `Command Processor` 注册表条目已修改，{% data variables.product.prodname_desktop %} 将以 `Authentication failed` 错误响应。 要检查这些注册表条目是否已修改，请按照以下步骤操作。

1. 打开注册表编辑器 (`regedit.exe`) 并导航到以下位置。 `` HKEY_CURRENT_USER\Software\Microsoft\Command Processor\` ``HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\`
2. 检查任一位置是否有 `Autorun` 值。
3. 如果有 `Autorun` 值，请删除它。

如果您的 Windows 用户名延长了 Unicode 字符，可能导致 AskPass 响应错误。 要解决问题，请创建新的 Windows 用户帐户，然后将文件迁移到该帐户。 更多信息请参阅 Microsoft 文档中的 "[在 Windows 中创建用户帐户](https://support.microsoft.com/en-us/help/13951/windows-create-user-account)"。

{% endwindows %}

### 延伸阅读
- “[关于向 GitHub 验证身份](/github/authenticating-to-github/about-authentication-to-github)”
