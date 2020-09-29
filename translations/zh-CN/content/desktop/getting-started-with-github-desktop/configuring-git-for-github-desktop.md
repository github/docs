---
title: 配置 Git 用于 GitHub Desktop
shortTitle: Configuring Git
intro: 如果尚未安装 Git，在使用 GitHub Desktop 前必须先配置。
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_desktop %} uses the email address you set in your local Git configuration to connect commits with your account on {% data variables.product.product_name %}.

{% data reusables.desktop.update-email-address %}

{% tip %}

**提示**：如果您执行公开提交，任何人都可以在您在的 Git 配置中查看电子邮件地址。 更多信息请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address/)”。

{% endtip %}

{% mac %}

{% data reusables.desktop.sign-in-choose-product %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.desktop.copy-email-git-config %}
{% data reusables.desktop.return-to-desktop %}
{% data reusables.desktop.mac-select-desktop-menu %}
7. In the Preferences window, click **Git**. ![Preferences（首选项）菜单中的 Git 窗格](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![Git 配置的名称字段](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.paste-email-git-config %}
  ![Git 配置字段中粘贴的电子邮件地址](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Save button in Git configuration field](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.sign-in-choose-product %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.desktop.copy-email-git-config %}
{% data reusables.desktop.return-to-desktop %}
{% data reusables.desktop.windows-choose-options %}
8. In the Options window, click **Git**. ![Options（选项）菜单中的 Git 窗格](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![Git 配置的名称字段](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.paste-email-git-config %}
  ![Git 配置字段中粘贴的电子邮件地址](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Save button in Git configuration field](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

### 延伸阅读

- “[将电子邮件地址添加到您的 GitHub 帐户](/articles/adding-an-email-address-to-your-github-account/)”
- "[设置提交电子邮件地址](/articles/setting-your-commit-email-address/)"
