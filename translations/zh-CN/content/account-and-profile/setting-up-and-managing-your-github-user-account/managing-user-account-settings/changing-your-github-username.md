---
title: 更改 GitHub 用户名
intro: 'You can change the username for your account on {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} if your instance uses built-in authentication{% endif %}.'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: 更改用户名
---

{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Note**: Members of an {% data variables.product.prodname_emu_enterprise %} cannot change usernames. Your enterprise's IdP administrator controls your username for {% data variables.product.product_name %}. 更多信息请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。

{% elsif ghes %}

**Note**: If you sign into {% data variables.product.product_location %} with LDAP credentials or single sign-on (SSO), only your local administrator can change your username. For more information about authentication methods for {% data variables.product.product_name %}, see "[Authenticating users for {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)."

{% endif %}

{% endnote %}

{% endif %}

## 关于用户名更改

You can change your username to another username that is not currently in use.{% ifversion fpt or ghec %} If the username you want is not available, consider other names or unique variations. Using a number, hyphen, or an alternative spelling might help you find a similar username that's still available.

If you hold a trademark for the username, you can find more information about making a trademark complaint on our [Trademark Policy](/free-pro-team@latest/github/site-policy/github-trademark-policy) page.

If you do not hold a trademark for the name, you can choose another username or keep your current username. {% data variables.contact.github_support %} 无法为您释放不可用的用户名。 更多信息请参阅“[更改用户名](#changing-your-username)”。{% endif %}

更改用户名后，您的旧用户名即可供其他人申请使用。 对旧用户名下仓库的大多数引用会自动更改为新用户名。 不过，指向您个人资料的某些链接不会自动重定向。

{% data variables.product.product_name %} 无法为以下各项设置重定向：
- 使用旧用户名的[@提及](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)
- 包含旧用户名的 [gists](/articles/creating-gists) 链接

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you cannot make changes to your username. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## 仓库引用

您更改用户名后，{% data variables.product.product_name %} 自动将引用重定向到您的仓库。
- 指向现有仓库的 Web 链接仍然有效。 进行更改后，可能需要几分钟时间才能完成。
- 从本地仓库克隆推送到旧的远程跟踪 URL 的命令行仍然有效。

如果旧用户名的新所有者创建与您的仓库同名的仓库，则会覆盖重定向条目，并且您的重定向将停止工作。 由于这种可能性，我们建议您在更改用户名后更新所有现有的远程仓库 URL。 更多信息请参阅“[管理远程仓库](/github/getting-started-with-github/managing-remote-repositories)”。

## 指向以前的个人资料页面的链接

更改用户名后，指向以前的个人资料页面的链接（例如 `https://{% data variables.command_line.backticks %}/previoususername`）将返回 404 错误。 We recommend updating any links to your account on {% data variables.product.product_location %} from elsewhere{% ifversion fpt or ghec %}, such as your LinkedIn or Twitter profile{% endif %}.

## 您的 Git 提交

{% ifversion fpt or ghec %}Git commits that were associated with your {% data variables.product.product_name %}-provided `noreply` email address won't be attributed to your new username and won't appear in your contributions graph.{% endif %} If your Git commits are associated with another email address you've [added to your GitHub account](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}including the ID-based {% data variables.product.product_name %}-provided `noreply` email address, {% endif %}they'll continue to be attributed to you and appear in your contributions graph after you've changed your username. 有关设置电子邮件地址的更多详细信息，请参阅“[设置您的提交电子邮件地址](/articles/setting-your-commit-email-address)”。

## 更改用户名

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. 在“Change username（更改用户名）”部分，单击 **Change username（更改用户名）**。 ![Change Username button](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. 阅读有关更改用户名的警告。 如果您仍要更改用户名，请单击 **I understand, let's change my username（我了解，让我们更改用户名）**。 ![更改用户名警告按钮](/assets/images/help/settings/settings-change-username-warning-button.png)
5. 键入新的用户名。 ![新用户名字段](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. 如果您选择的用户名可用，请单击 **Change my username（更改我的用户名）**。 如果您选择的用户名不可用，可以尝试其他用户名或您看到的建议之一。 ![更改用户名警告按钮](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

## 延伸阅读

- "[Why are my commits linked to the wrong user?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)"{% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_dotcom %} Username Policy](/free-pro-team@latest/github/site-policy/github-username-policy)"{% endif %}
