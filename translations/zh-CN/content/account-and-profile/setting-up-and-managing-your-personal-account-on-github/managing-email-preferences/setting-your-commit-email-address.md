---
title: 设置提交电子邮件地址
intro: '你可以设置用于在 {% data variables.product.product_location %} 和计算机上创作提交的电子邮件地址。'
redirect_from:
  - /articles/keeping-your-email-address-private
  - /articles/setting-your-commit-email-address-on-github
  - /articles/about-commit-email-addresses
  - /articles/git-email-settings
  - /articles/setting-your-email-in-git
  - /articles/set-your-user-name-email-and-github-token
  - /articles/setting-your-commit-email-address-in-git
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Set commit email address
ms.openlocfilehash: 76b0af2a1afa776281434c36cf33fa0e082c2c56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '146338947'
---
## 关于提交电子邮件地址

{% data variables.product.prodname_dotcom %} 使用您的提交电子邮件地址将提交与您的 {% data variables.product.product_location %} 关联。 您可以选择要与从命令行以及基于 web 的 Git 操作推送的提交相关联的电子邮件地址。

对于基于 Web 的 Git 操作，您可以在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上设置提交电子邮件地址。 对于从命令行推送的提交，您可以在 Git 中设置提交电子邮件地址。

{% ifversion fpt or ghec %} 在更改提交电子邮件地址之前进行的提交仍与之前的电子邮件地址关联。{% else %} 在 {% data variables.product.product_name %} 上更改提交电子邮件地址后，新电子邮件地址默认在所有未来基于 Web 的 Git 操作中可见。 在更改提交电子邮件地址之前进行的任何提交仍与之前的电子邮件地址关联。{% endif %}

{% ifversion fpt or ghec %}

{% note %}

注意：{% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %} 如果想将个人电子邮件地址设为私密，则可以使用 {% data variables.product.product_name %} 的 `noreply` 电子邮件地址作为提交电子邮件地址。 要将 `noreply` 电子邮件地址用于从命令行推送的提交，请在 Git 中设置提交电子邮件地址时使用该电子邮件地址。 要将 `noreply` 地址用于基于 Web 的 Git 操作，请在 GitHub 上设置提交电子邮件地址并选择“对我的电子邮件地址保密”。

您也可以选择阻止从命令行推送的提交显示您的个人电子邮件地址。 有关详细信息，请参阅“[阻止会暴露个人电子邮件的命令行推送](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)。”{% endif %}

为确保提交归因于你并且出现在你的贡献图中，请使用已连接到你在 {% data variables.product.product_location %} 上的帐户的电子邮件地址{% ifversion fpt or ghec %}，或者在电子邮件设置中提供给你的 `noreply` 电子邮件地址{% endif %}。 {% ifversion not ghae %} 有关详细信息，请参阅“[将电子邮件地址添加到 {% data variables.product.prodname_dotcom %} 帐户](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)”。{% endif %}

{% ifversion fpt or ghec %}

{% note %}

注意：如果于 2017 年 7 月 18 日之后在 {% data variables.product.product_location %} 上创建了帐户，则用于 {% data variables.product.product_name %} 的 `noreply` 电子邮件地址是一个七位数的 ID 号以及格式为 <code>ID+username@users.noreply.github.com</code> 的用户名。 如果于 2017 年 7 月 18 日之前在 {% data variables.product.product_location %} 上创建了帐户，则来自 {% data variables.product.product_name %} 的 `noreply` 电子邮件地址是 <code>username@users.noreply.github.com</code>。 可以通过在电子邮件设置中选择（或取消选择并重新选择）“对我的电子邮件地址保密”，为 {% data variables.product.product_name %} 获取基于 ID 的 `noreply` 电子邮件地址。

{% endnote %}

如果使用 {% data variables.product.product_name %} 的 `noreply` 电子邮件地址进行提交，然后[更改用户名](/articles/changing-your-github-username)，则这些提交将不会与你在 {% data variables.product.product_location %} 上的帐户相关联。 如果使用的是基于 ID 的 {% data variables.product.product_name %} `noreply` 地址，则不适用。 有关详细信息，请参阅“[更改 {% data variables.product.prodname_dotcom %} 用户名](/articles/changing-your-github-username)。”{% endif %}

## 在 {% data variables.product.prodname_dotcom %} 上设置提交电子邮件地址

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %} {% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## 在 Git 中设置您的提交电子邮件地址

可以使用 `git config` 命令更改与 Git 提交关联的电子邮件地址。 设置的新电子邮件地址将在从命令行推送到 {% data variables.product.product_location %} 的任何未来提交中显示。 在您更改提交电子邮件地址之前进行的任何提交仍与之前的电子邮件地址关联。

### 为计算机上的每个仓库设置电子邮件地址

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user-settings.link_email_with_your_account %}

### 为一个仓库设置电子邮件地址

{% data variables.product.product_name %} 使用在您的本地 Git 配置中设置的电子邮件地址将从命令行推送的提交与您在 {% data variables.product.product_location %} 上的帐户相关联。

您可以更改与您在一个仓库中所进行的提交关联的电子邮件地址。 此操作将覆盖这一个仓库中的全局 Git 配置设置，但不会影响任何其他仓库。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您想要在其中配置与 Git 提交关联的电子邮件地址的本地仓库。
3. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user-settings.link_email_with_your_account %}
