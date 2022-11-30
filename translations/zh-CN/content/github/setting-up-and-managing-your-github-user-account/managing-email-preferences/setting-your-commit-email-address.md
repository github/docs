---
title: 设置提交电子邮件地址
intro: '您可以设置用于在 {% data variables.product.product_name %} 和计算机上创作提交的电子邮件地址。'
redirect_from:
  - /articles/keeping-your-email-address-private/
  - /articles/setting-your-commit-email-address-on-github/
  - /article/about-commit-email-addresses/
  - /articles/git-email-settings/
  - /articles/setting-your-email-in-git/
  - /articles/set-your-user-name-email-and-github-token/
  - /articles/setting-your-commit-email-address-in-git/
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
  - Notifications
---
### 关于提交电子邮件地址

{% data variables.product.product_name %} 使用您的提交电子邮件地址将提交与您的 {% data variables.product.product_name %} 帐户关联。 您可以选择要与从命令行以及基于 web 的 Git 操作推送的提交相关联的电子邮件地址。

对于基于 web 的 Git 操作，您可以在 {% data variables.product.product_name %} 上设置提交电子邮件地址。 对于从命令行推送的提交，您可以在 Git 中设置提交电子邮件地址。

{% if currentVersion == "free-pro-team@latest" %}在更改提交电子邮件地址之前进行的提交仍与之前的电子邮件地址关联。{% else %}在 {% data variables.product.product_name %} 上更改提交电子邮件地址之后，新电子邮件地址默认在所有未来基于 web 的 Git 操作中可见。 在更改提交电子邮件地址之前进行的任何提交仍与之前的电子邮件地址关联。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**注**：{% data reusables.user_settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}如果要对个人电子邮件地址保密，可以使用 {% data variables.product.product_name %}-provided `no-reply` 电子邮件地址作为提交电子邮件地址。 要将 `noreply` 电子邮件地址用于从命令行推送的提交，请在 Git 中设置提交电子邮件地址时使用该电子邮件地址。 要将 `noreply` 地址用于基于 web 的 Git 操作，请在 GitHub 上设置提交电子邮件地址并选择**对我的电子邮件地址保密**。

您也可以选择阻止从命令行推送的提交显示您的个人电子邮件地址。 更多信息请参阅“[阻止推送的命令行显示您的个人电子邮件地址](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)”。{% endif %}

为确保提交归因于您并且出现在您的贡献图表中，请使用已连接到 {% data variables.product.product_name %} 帐户的电子邮件地址{% if currentVersion == "free-pro-team@latest" %}，或者在电子邮件设置中提供给您的 `noreply` 电子邮件地址{% endif %}。 {% if currentVersion != "github-ae@latest" %}更多信息请参阅“[添加电子邮件地址到 {% data variables.product.prodname_dotcom %} 帐户](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**注：**如果您的 {% data variables.product.product_name %} 帐户创建于 2017 年 7 月 18 日_之后_，则 {% data variables.product.product_name %}-provided `no-reply` 电子邮件地址是一个七位数的 ID 号，用户名形式为 <code><em>ID+username</em>@users.noreply.github.com</code>。 如果您的 {% data variables.product.product_name %} 帐户创建于 2017 年 7 月 18 日_之前_，则 {% data variables.product.product_name %}-provided `no-reply` 电子邮件地址是 <code><em>username</em>@users.noreply.github.com</code> 形式的用户名。 在电子邮件设置中选择（或者取消选择并重新选择）**对我的电子邮件保密**，便可获取基于 ID 的 {% data variables.product.product_name %}-provided `no-reply` 电子邮件地址。

{% endnote %}

如果使用 {% data variables.product.product_name %}-provided `noreply` 电子邮件地址进行提交，然后[更改您的用户名](/articles/changing-your-github-username)，这些提交不会与您的 {% data variables.product.product_name %} 帐户关联。 如果您使用基于 ID 的 {% data variables.product.product_name %}-provided `noreply` 地址，此原则不适用。 更多信息请参阅“[更改 {% data variables.product.prodname_dotcom %} 用户名](/articles/changing-your-github-username)”。{% endif %}

### 在 {% data variables.product.prodname_dotcom %} 上设置提交电子邮件地址

{% data reusables.files.commit-author-email-options %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.user_settings.keeping_your_email_address_private %}{% endif %}

### 在 Git 中设置您的提交电子邮件地址

您可以使用 `git config` 命令更改与 Git 提交关联的电子邮件地址。 您设置的新电子邮件地址将在从命令行推送到 {% data variables.product.product_name %} 的任何未来提交中显示。 在您更改提交电子邮件地址之前进行的任何提交仍与之前的电子邮件地址关联。

#### 为计算机上的每个仓库设置电子邮件地址

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user_settings.link_email_with_your_account %}

#### 为一个仓库设置电子邮件地址

{% data variables.product.product_name %} 使用在您的本地 Git 配置中设置的电子邮件地址将从命令行推送的提交与您的 {% data variables.product.product_name %} 帐户相关联。

您可以更改与您在一个仓库中所进行的提交关联的电子邮件地址。 此操作将覆盖这一个仓库中的全局 Git 配置设置，但不会影响任何其他仓库。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您想要在其中配置与 Git 提交关联的电子邮件地址的本地仓库。
3. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user_settings.link_email_with_your_account %}
