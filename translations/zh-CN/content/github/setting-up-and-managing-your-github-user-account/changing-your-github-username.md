---
title: 更改 GitHub 用户名
intro: '您可以随时更改自己的 {% data variables.product.product_name %} 用户名。'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 帐户
---

### 关于用户名更改

您可以将用户名更改为当前未使用的另一个用户名。{% if currentVersion == "free-pro-team@latest" %} 如果所需的用户名不可用，您在键入所需的用户名时将看到您是否可以申请释放该用户名的信息。

如果该用户名不符合释放条件，并且您不持有该用户名的商标，则可选择其他用户名或保留您当前的用户名。 {% data variables.contact.github_support %} 无法为您释放不可用的用户名。 更多信息请参阅“[更改用户名](#changing-your-username)”。{% endif %}

更改用户名后，您的旧用户名即可供其他人申请使用。 对旧用户名下仓库的大多数引用会自动更改为新用户名。 不过，指向您个人资料的某些链接不会自动重定向。

{% data variables.product.product_name %} 无法为以下各项设置重定向：
- 使用旧用户名的[@提及](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)
- 包含旧用户名的 [gists](/articles/creating-gists) 链接

### 仓库引用

您更改用户名后，{% data variables.product.product_name %} 自动将引用重定向到您的仓库。
- 指向现有仓库的 Web 链接仍然有效。 进行更改后，可能需要几分钟时间才能完成。
- 从本地仓库克隆推送到旧的远程跟踪 URL 的命令行仍然有效。

如果旧用户名的新所有者创建与您的仓库同名的仓库，则会覆盖重定向条目，并且您的重定向将停止工作。 由于这种可能性，我们建议您在更改用户名后更新所有现有的远程仓库 URL。 更多信息请参阅“[管理远程仓库](/github/getting-started-with-github/managing-remote-repositories)”。

### 指向以前的个人资料页面的链接

更改用户名后，指向以前的个人资料页面的链接（例如 `https://{% data variables.command_line.backticks %}/previoususername`）将返回 404 错误。 我们建议从其他位置更新指向 {% data variables.product.product_name %} 帐户的所有链接{% if currentVersion == "free-pro-team@latest" %}，例如您的 LinkedIn 或 Twitter 个人资料{% endif %}。

### 您的 Git 提交

{% if currentVersion == "free-pro-team@latest"%}与您的 {% data variables.product.product_name %} 提供的 `noreply` 电子邮件地址关联的 Git 提交不会归于新的用户名，并且不会在您的贡献图中显示。{% endif %}如果您的 Git 提交与您已[添加到 GitHub 帐户](/articles/adding-an-email-address-to-your-github-account)的其他电子邮件地址关联，{% if currentVersion == "free-pro-team@latest"%}包括基于 ID 的 {% data variables.product.product_name %} 提供的 `noreply` 电子邮件地址，{% endif %}它们在您更改用户名后将继续归于您并在您的贡献图中显示。 有关设置电子邮件地址的更多详细信息，请参阅“[设置您的提交电子邮件地址](/articles/setting-your-commit-email-address)”。

### 更改用户名

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. 在“Change username（更改用户名）”部分，单击 **Change username（更改用户名）**。 ![Change Username button](/assets/images/help/settings/settings-change-username.png){% if currentVersion == "free-pro-team@latest" %}
4. 阅读有关更改用户名的警告。 如果您仍要更改用户名，请单击 **I understand, let's change my username（我了解，让我们更改用户名）**。 ![更改用户名警告按钮](/assets/images/help/settings/settings-change-username-warning-button.png)
5. 键入新的用户名。 ![新用户名字段](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. 如果您选择的用户名可用，请单击 **Change my username（更改我的用户名）**。 如果您选择的用户名不可用，可以尝试其他用户名或您看到的建议之一。 ![更改用户名警告按钮](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

### 延伸阅读

- “[我的提交为什么链接到错误的用户？](/articles/why-are-my-commits-linked-to-the-wrong-user)”{% if currentVersion == "free-pro-team@latest" %}
- "[{% data variables.product.prodname_dotcom %} 用户名策略](/articles/github-username-policy)"{% endif %}
