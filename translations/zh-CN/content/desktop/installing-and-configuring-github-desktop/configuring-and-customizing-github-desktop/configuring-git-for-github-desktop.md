---
title: 配置 Git 用于 GitHub Desktop
shortTitle: 配置 Git
intro: '您可以使用 {% data variables.product.prodname_desktop %} 管理本地存储库的 Git 配置设置。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
---

## 关于 {% data variables.product.prodname_desktop %} 的 Git 配置

{% data variables.product.prodname_desktop %} 使用本地 Git 配置设置，并提供配置其中一些设置的选项，例如全局作者信息和创建新存储库时使用的默认分支。

{% data variables.product.prodname_desktop %} 允许您设置要与存储库中的提交关联的名称和电子邮件地址。 如果已在计算机的全局 Git 配置中设置了您的姓名和电子邮件地址，{% data variables.product.prodname_desktop %} 将检测并使用这些值。 {% data variables.product.prodname_desktop %} 还允许您为单个存储库设置不同的名称和电子邮件地址。 当您需要为特定存储库使用单独的工作电子邮件地址时，这很有用。

如果在 Git 配置中设置的电子邮件地址与您当前登录 {% data variables.product.product_name %} 帐户关联的电子邮件地址不匹配，{% data variables.product.prodname_desktop %} 将在提交之前显示警告。

{% data variables.product.prodname_desktop %} 还允许您更改创建新存储库时要使用的默认分支名称。 默认情况下，{% data variables.product.prodname_desktop %} 使用 `main` 作为您创建的任何新存储库中的默认分支名称。

{% tip %}

**提示**：如果您执行公开提交，任何人都可以在您在的 Git 配置中查看电子邮件地址。 更多信息请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address/)”。

{% endtip %}

## 配置全局作者信息

在 {% data variables.product.prodname_desktop %} 中配置全局作者信息将更新全局 Git 配置中的姓名和电子邮件地址。 这将是您在 {% data variables.product.prodname_desktop %} 中创建的所有新本地存储库的默认名称和电子邮件地址。

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. 在 Preferences（首选项）窗口中，单击 **Git**。 ![Preferences（首选项）菜单中的 Git 窗格](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![Git 配置的名称字段](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![在 Git 配置字段中选择电子邮件地址](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Git 配置字段中的 Save（保存）按钮](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. 在 Options（选项）窗口中，单击 **Git**。 ![Options（选项）菜单中的 Git 窗格](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![Git 配置的名称字段](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![在 Git 配置字段中选择电子邮件地址](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Git 配置字段中的 Save（保存）按钮](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## 为单个存储库配置不同的作者信息

您可以更改用于在特定存储库中创作提交的名称和电子邮件地址。 此本地 Git 配置将仅覆盖此存储库的全局 Git 配置设置。

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## 为新存储库配置默认分支

您可以配置在 {% data variables.product.prodname_desktop %} 中创建新存储库时将使用的默认分支。 有关默认分支的更多信息，请参阅“[关于默认分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. 在 Preferences（首选项）窗口中，单击 **Git**。 ![Preferences（首选项）菜单中的 Git 窗格](/assets/images/help/desktop/mac-select-git-pane.png)
1. 在“Default branch name for new repositories（新存储库的默认分支名称）”下，选择要使用的默认分支名称，或者，要输入自定义名称，请选择“Other...（其他...）”。 ![默认分支名称选择选项](/assets/images/help/desktop/mac-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Git 配置字段中的 Save（保存）按钮](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. 在 Options（选项）窗口中，单击 **Git**。 ![Options（选项）菜单中的 Git 窗格](/assets/images/help/desktop/windows-select-git-pane.png)
1. 在“Default branch name for new repositories（新存储库的默认分支名称）”下，选择要使用的默认分支名称，或者，选择“Other...（其他...）”输入自定义名称。 ![默认分支名称选择选项](/assets/images/help/desktop/windows-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Git 配置字段中的 Save（保存）按钮](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## 延伸阅读

- “[将电子邮件地址添加到您的 GitHub 帐户](/articles/adding-an-email-address-to-your-github-account/)”
- "[设置提交电子邮件地址](/articles/setting-your-commit-email-address/)"
- "[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches)"
