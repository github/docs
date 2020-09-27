---
title: 配置 Git 用于 GitHub Desktop
shortTitle: 配置 Git
intro: 如果尚未安装 Git，在使用 GitHub Desktop 前必须先配置。
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
versions:
  free-pro-team: '*'
---

{{ site.data.variables.product.prodname_desktop }} 使用您在本地 Git 配置中设置的电子邮件地址连接提交与您在 {{ site.data.variables.product.product_name}} 上的帐户。

{{ site.data.reusables.desktop.update-email-address }}

{% tip %}

**提示**：如果您执行公开提交，任何人都可以在您在的 Git 配置中查看电子邮件地址。 更多信息请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address/)”。

{% endtip %}

{% mac %}

{{ site.data.reusables.desktop.sign-in-choose-product }}
{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.emails }}
{{ site.data.reusables.desktop.copy-email-git-config }}
{{ site.data.reusables.desktop.return-to-desktop }}
{{ site.data.reusables.desktop.mac-select-desktop-menu }}
7. 在 Preferences（首选项）窗口中，单击 **Git**。 ![Preferences（首选项）菜单中的 Git 窗格](/assets/images/help/desktop/mac-select-git-pane.png)
{{ site.data.reusables.desktop.name-field-git-config }}
  ![Git 配置的名称字段](/assets/images/help/desktop/mac-name-git-config.png)
{{ site.data.reusables.desktop.paste-email-git-config }}
  ![Git 配置字段中粘贴的电子邮件地址](/assets/images/help/desktop/mac-email-git-config.png)
{{ site.data.reusables.desktop.click-save-git-config }}
  ![Git 配置字段中的 Save（保存）按钮](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{{ site.data.reusables.desktop.sign-in-choose-product }}
{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.emails }}
{{ site.data.reusables.desktop.copy-email-git-config }}
{{ site.data.reusables.desktop.return-to-desktop }}
{{ site.data.reusables.desktop.windows-choose-options }}
8. 在 Options（选项）窗口中，单击 **Git**。 ![Options（选项）菜单中的 Git 窗格](/assets/images/help/desktop/windows-select-git-pane.png)
{{ site.data.reusables.desktop.name-field-git-config }}
  ![Git 配置的名称字段](/assets/images/help/desktop/windows-name-git-config.png)
{{ site.data.reusables.desktop.paste-email-git-config }}
  ![Git 配置字段中粘贴的电子邮件地址](/assets/images/help/desktop/windows-email-git-config.png)
{{ site.data.reusables.desktop.click-save-git-config }}
  ![Git 配置字段中的 Save（保存）按钮](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

### 延伸阅读

- “[将电子邮件地址添加到您的 GitHub 帐户](/articles/adding-an-email-address-to-your-github-account/)”
- "[设置提交电子邮件地址](/articles/setting-your-commit-email-address/)"
