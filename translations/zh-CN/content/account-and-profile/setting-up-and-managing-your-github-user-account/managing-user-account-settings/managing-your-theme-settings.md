---
title: 管理主题设置
intro: '通过设置主题首选项以遵循系统设置或始终使用浅色模式或深色模式，您可以管理 {% data variables.product.product_name %} 的外观，'
versions:
  fpt: '*'
  ghes: '>=3.2'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: 管理主题设置
---

为了选择和灵活地使用 {% data variables.product.product_name %}，您可以配置主题设置来更改 {% data variables.product.product_name %} 的外观。 您可以在浅色和深色两个主题中进行选择，也可以配置 {% data variables.product.product_name %} 遵循系统设置。

您可能希望使用深色主题来降低某些设备的功耗，在低光条件下减少眼睛应变，或者因为您更喜欢主题的外观。{% ifversion fpt or ghae-issue-4618 %} 视力障碍者可能受益于深色高对比度主题，前景和背景元素之间的对比度更大。{% endif %}

{% data reusables.user_settings.access_settings %}
1. 在用户设置侧边栏中，单击 **Appearance（外观）**。 ![用户设置侧边栏中的"外观"选项卡](/assets/images/help/settings/appearance-tab.png)
2. 在“Theme mode（主题模式）”下，选择下拉菜单，然后单击主题首选项。 !["主题模式"下的下拉菜单用于选择主题首选项](/assets/images/help/settings/theme-mode-drop-down-menu.png)
3. 单击想要使用的主题。
    - 如果您选择单个主题，请单击一个主题。
      {% ifversion fpt or ghae-issue-4618 %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - 如果您选择遵循系统设置，请单击白天主题和夜间主题。
      {% ifversion fpt or ghae-issue-4618 %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %}

## 延伸阅读

- "[设置 {% data variables.product.prodname_desktop %} 的主题](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
