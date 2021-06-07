---
title: 更新 OSX 密钥链中的凭据
intro: '如果在 {% data variables.product.product_name %} 上更改您的{% if currentVersion != "github-ae@latest" %}用户名、密码或{% endif %}个人访问令牌，您需要在 "git-credit al-osxkeychain" 小助手中更新您保存的凭据。'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% data reusables.user_settings.password-authentication-deprecation %}

### 通过 Keychain Access 更新凭据

1. 单击菜单栏右侧的 Spotlight 图标（放大镜）。 键入 `Keychain access`，然后按 Enter 键启动应用程序。 ![Spotlight 搜索栏](/assets/images/help/setup/keychain-access.png)
2. 在 Keychain Access 中，搜索 **{% data variables.command_line.backticks %}**。
3. 查找 `{% data variables.command_line.backticks %}` 的“互联网密码”条目。
4. 相应地编辑或删除该条目。

### 通过命令行删除凭据

通过命令行，您可以使用凭据小助手直接擦除密钥链条目。

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

如果成功，则不会打印出任何内容。 要测试其是否有效，请尝试从 {% data variables.product.product_location %} 克隆私有仓库。 如果提示您输入密码，则该密钥链条目已删除。

### 延伸阅读

- “[在 Git 中缓存您的 {% data variables.product.prodname_dotcom %} 凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git/)”
