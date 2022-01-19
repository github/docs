---
title: 设置提交电子邮件地址
intro: '您可以设置用于在 {% data variables.product.product_location %} 和计算机上创作提交的电子邮件地址。'
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
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: 设置提交电子邮件地址
---

## 关于提交电子邮件地址

{% data variables.product.prodname_dotcom %} uses your commit email address to associate commits with your account on {% data variables.product.product_location %}. 您可以选择要与从命令行以及基于 web 的 Git 操作推送的提交相关联的电子邮件地址。

For web-based Git operations, you can set your commit email address on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. 对于从命令行推送的提交，您可以在 Git 中设置提交电子邮件地址。

{% ifversion fpt or ghec %}在更改提交电子邮件地址之前进行的提交仍与之前的电子邮件地址关联。{% else %}在 {% data variables.product.product_name %} 上更改提交电子邮件地址之后，新电子邮件地址默认在所有未来基于 web 的 Git 操作中可见。 在更改提交电子邮件地址之前进行的任何提交仍与之前的电子邮件地址关联。{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**注**：{% data reusables.user_settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}If you'd like to keep your personal email address private, you can use a `no-reply` email address from {% data variables.product.product_name %} as your commit email address. 要将 `noreply` 电子邮件地址用于从命令行推送的提交，请在 Git 中设置提交电子邮件地址时使用该电子邮件地址。 要将 `noreply` 地址用于基于 web 的 Git 操作，请在 GitHub 上设置提交电子邮件地址并选择**对我的电子邮件地址保密**。

您也可以选择阻止从命令行推送的提交显示您的个人电子邮件地址。 更多信息请参阅“[阻止推送的命令行显示您的个人电子邮件地址](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)”。{% endif %}

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your account on {% data variables.product.product_location %}{% ifversion fpt or ghec %}, or the `noreply` email address provided to you in your email settings{% endif %}. {% ifversion not ghae %}更多信息请参阅“[添加电子邮件地址到 {% data variables.product.prodname_dotcom %} 帐户](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)”。{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Note:** If you created your account on {% data variables.product.product_location %} _after_ July 18, 2017, your `no-reply` email address for {% data variables.product.product_name %} is a seven-digit ID number and your username in the form of <code><em>ID+username</em>@users.noreply.github.com</code>. If you created your account on {% data variables.product.product_location %} _prior to_ July 18, 2017, your `no-reply` email address from {% data variables.product.product_name %} is <code><em>username</em>@users.noreply.github.com</code>. You can get an ID-based `no-reply` email address for {% data variables.product.product_name %} by selecting (or deselecting and reselecting) **Keep my email address private** in your email settings.

{% endnote %}

If you use your `noreply` email address for {% data variables.product.product_name %} to make commits and then [change your username](/articles/changing-your-github-username), those commits will not be associated with your account on {% data variables.product.product_location %}. This does not apply if you're using the ID-based `noreply` address from {% data variables.product.product_name %}. 更多信息请参阅“[更改 {% data variables.product.prodname_dotcom %} 用户名](/articles/changing-your-github-username)”。{% endif %}

## 在 {% data variables.product.prodname_dotcom %} 上设置提交电子邮件地址

{% data reusables.files.commit-author-email-options %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}{% ifversion fpt or ghec %}
{% data reusables.user_settings.keeping_your_email_address_private %}{% endif %}

## 在 Git 中设置您的提交电子邮件地址

您可以使用 `git config` 命令更改与 Git 提交关联的电子邮件地址。 您设置的新电子邮件地址将在从命令行推送到 {% data variables.product.product_location %} 的任何未来提交中显示。 在您更改提交电子邮件地址之前进行的任何提交仍与之前的电子邮件地址关联。

### 为计算机上的每个仓库设置电子邮件地址

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

### 为一个仓库设置电子邮件地址

{% data variables.product.product_name %} uses the email address set in your local Git configuration to associate commits pushed from the command line with your account on {% data variables.product.product_location %}.

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
