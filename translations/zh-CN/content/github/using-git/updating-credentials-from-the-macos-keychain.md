---
title: 更新 OSX 密钥链中的凭据
intro: 'You''ll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your{% if currentVersion != "github-ae@latest" %} username, password, or{% endif %} personal access token on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - 密钥链中的 GitHub 密码条目
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

Through the command line, you can use the credential helper directly to erase the keychain entry.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

如果成功，则不会打印出任何内容。 To test that it works, try and clone a repository from {% data variables.product.product_location %}. If you are prompted for a password, the keychain entry was deleted.

### 延伸阅读

- “[在 Git 中缓存您的 {% data variables.product.prodname_dotcom %} 凭据](/github/using-git/caching-your-github-credentials-in-git/)”
