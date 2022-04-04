---
title: 添加电子邮件地址到 GitHub 帐户
intro: '{% data variables.product.product_name %} 允许您根据需要为帐户添加多个电子邮件地址。 如果在本地 Git 配置中设置电子邮件地址，您需要将其添加到帐户设置，以将提交连接到帐户。 有关电子邮件地址和提交的更多信息，请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address/)”。'
redirect_from:
  - /articles/adding-an-email-address-to-your-github-account
  - /github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: 添加电子邮件地址
---

{% ifversion fpt or ghec %}

{% note %}

**注意**：
  - {% data reusables.user-settings.no-verification-disposable-emails %}
  -  如果您是 {% data variables.product.prodname_emu_enterprise %} 的成员，则无法在 {% data variables.product.prodname_dotcom_the_website %} 上更改您的电子邮件地址。 {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %}

{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
{% data reusables.user-settings.add_and_verify_email %}
{% data reusables.user-settings.select_primary_email %}

## 延伸阅读

- “[管理电子邮件首选项](/articles/managing-email-preferences/)”
