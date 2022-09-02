---
title: 管理主题设置
intro: '通过设置主题首选项以遵循系统设置或始终使用浅色模式或深色模式，您可以管理 {% data variables.product.product_name %} 的外观，'
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: 管理主题设置
---

为了选择和灵活地使用 {% data variables.product.product_name %}，您可以配置主题设置来更改 {% data variables.product.product_name %} 的外观。 您可以在浅色和深色两个主题中进行选择，也可以配置 {% data variables.product.product_name %} 遵循系统设置。

您可能需要使用深色主题来减少某些设备的功耗，以在低光条件下减小眼睛的压力，或者因为您更喜欢主题的外观。

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}如果您视力不佳，则可以从前景和背景元素之间对比度更高的高对比度主题中受益。{% endif %}{% ifversion fpt or ghae or ghec %} 如果您有色盲，可能会从我们的浅色盲和深色盲主题中受益。

{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}

1. 在“Theme mode（主题模式）”下，选择下拉菜单，然后单击主题首选项。

   !["主题模式"下的下拉菜单用于选择主题首选项](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. 单击想要使用的主题。
    - 如果您选择单个主题，请单击一个主题。

      {%- ifversion ghes = 3.5 %}
      {% note %}

      **Note**: The light high contrast theme was unavailable in {% data variables.product.product_name %} 3.5.0, 3.5.1, 3.5.2, and 3.5.3. The theme is available in 3.5.4 and later. For more information about upgrades, contact your site administrator.

      For more information about determining the version of {% data variables.product.product_name %} you're using, see "[About versions of  {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."
      {% endnote %}
      {%- endif %}

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - 如果您选择遵循系统设置，请单击白天主题和夜间主题。

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %}
    {% ifversion fpt or ghec %}
    - 如果您想选择当前处于公开测试阶段的主题，则首先需要通过功能预览启用它。 更多信息请参阅“[通过功能预览了解早期访问版本](/get-started/using-github/exploring-early-access-releases-with-feature-preview)”。{% endif %}

{% ifversion command-palette %}

{% note %}

**注意：**您还可以使用命令面板更改主题设置。 更多信息请参阅“[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)”。

{% endnote %}

{% endif %}

## 延伸阅读

- "[设置 {% data variables.product.prodname_desktop %} 的主题](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
