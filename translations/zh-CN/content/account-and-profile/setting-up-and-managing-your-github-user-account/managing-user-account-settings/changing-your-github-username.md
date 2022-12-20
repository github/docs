---
title: 更改 GitHub 用户名
intro: You can change the username for your account on {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} if your instance uses built-in authentication{% endif %}.
redirect_from:
- /articles/how-to-change-your-username
- /articles/changing-your-github-user-name
- /articles/renaming-a-user
- /articles/what-happens-when-i-change-my-username
- /articles/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Change your username
ms.openlocfilehash: 30139a0dab508f1e8db0f33174d6e25ec28afef4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145085068"
---
{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

注意：{% data variables.product.prodname_emu_enterprise %} 成员不能更改用户名。 企业的 IdP 管理员控制您的 {% data variables.product.product_name %} 用户名。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。

{% elsif ghes %}

注意：如果你使用 LDAP 凭据或单一登录 (SSO) 登录 {% data variables.product.product_location %}，则只有你的本地管理员才能更改你的用户名。 有关 {% data variables.product.product_name %} 身份验证方法的详细信息，请参阅“[对 {% data variables.product.product_location %} 的用户进行身份验证](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)”。

{% endif %}

{% endnote %}

{% endif %}

## <a name="about-username-changes"></a>关于用户名更改

您可以将用户名更改为当前未使用的其他用户名。{% ifversion fpt or ghec %} 如果所需的用户名不可用，请考虑其他名称或唯一变体。 使用数字、连字符或其他拼写可能有助于您找到仍可用的类似用户名。

如果你拥有该用户名的商标，可以在我们的[商标政策](/free-pro-team@latest/github/site-policy/github-trademark-policy)页面上找到有关提出商标投诉的更多信息。 

如果您没有该名称的商标，则可以选择其他用户名或保留当前用户名。 {% data variables.contact.github_support %} 无法为您释放不可用的用户名。 有关详细信息，请参阅“[更改用户名](#changing-your-username)”。{% endif %}

更改用户名后，您的旧用户名即可供其他人申请使用。 对旧用户名下仓库的大多数引用会自动更改为新用户名。 不过，指向您个人资料的某些链接不会自动重定向。

{% data variables.product.product_name %} 无法为以下各项设置重定向：
- 使用旧用户名的 [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)
- 包含旧用户名的 [gists](/articles/creating-gists) 链接

{% ifversion fpt or ghec %} 

如果您是 {% data variables.product.prodname_emu_enterprise %} 的成员，则无法更改用户名。 {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## <a name="repository-references"></a>仓库引用

您更改用户名后，{% data variables.product.product_name %} 自动将引用重定向到您的仓库。
- 指向现有仓库的 Web 链接仍然有效。 进行更改后，可能需要几分钟时间才能完成。
- 从本地仓库克隆推送到旧的远程跟踪 URL 的命令行仍然有效。

如果旧用户名的新所有者创建与您的仓库同名的仓库，则会覆盖重定向条目，并且您的重定向将停止工作。 由于这种可能性，我们建议您在更改用户名后更新所有现有的远程仓库 URL。 有关详细信息，请参阅“[管理远程存储库](/github/getting-started-with-github/managing-remote-repositories)”。

## <a name="links-to-your-previous-profile-page"></a>指向以前的个人资料页面的链接

更改用户名后，指向以前的配置文件页面的链接（例如 `https://{% data variables.command_line.backticks %}/previoususername`）将返回 404 错误。 我们建议从其他位置更新指向 {% data variables.product.product_location %} 帐户的所有链接{% ifversion fpt or ghec %}，例如您的 LinkedIn 或 Twitter 个人资料{% endif %}。

## <a name="your-git-commits"></a>您的 Git 提交

{% ifversion fpt or ghec %}与你的 {% data variables.product.product_name %} 提供的 `noreply` 电子邮件地址关联的 Git 提交不会归于新的用户名，并且不会在你的贡献图中显示。{% endif %}如果你的 Git 提交与你已[添加到 GitHub 帐户](/articles/adding-an-email-address-to-your-github-account)的其他电子邮件地址关联，{% ifversion fpt or ghec %}包括基于 ID 的 {% data variables.product.product_name %} 提供的 `noreply` 电子邮件地址，{% endif %}它们在你更改用户名后将继续归于你并在你的贡献图中显示。 有关设置电子邮件地址的详细信息，请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address)”。

## <a name="changing-your-username"></a>更改用户名

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. 在“更改用户名”部分中，单击“更改用户名”。
   ![更改用户名按钮](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. 阅读有关更改用户名的警告。 如果你仍要更改用户名，请单击“我了解，让我们更改用户名”。
   ![更改用户名警告按钮](/assets/images/help/settings/settings-change-username-warning-button.png)
5. 键入新的用户名。
   ![新用户名字段](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. 如果你选择的用户名可用，请单击“更改用户名”。 如果您选择的用户名不可用，可以尝试其他用户名或您看到的建议之一。
   ![更改用户名警告按钮](/assets/images/help/settings/settings-change-my-username-button.png) {% endif %}

## <a name="further-reading"></a>延伸阅读

- [我的提交为什么链接到错误的用户？](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_dotcom %} 用户名策略](/free-pro-team@latest/github/site-policy/github-username-policy){% endif %}
