---
title: 管理主题设置
intro: '通过设置主题首选项以遵循系统设置或始终使用浅色模式或深色模式，您可以管理 {% data variables.product.product_name %} 的外观，'
versions:
  fpt: '*'
  ghae: '*'
  ghes: '>=3.2'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: 管理主题设置
---

为了选择和灵活地使用 {% data variables.product.product_name %}，您可以配置主题设置来更改 {% data variables.product.product_name %} 的外观。 您可以在浅色和深色两个主题中进行选择，也可以配置 {% data variables.product.product_name %} 遵循系统设置。

您可能需要使用深色主题来减少某些设备的功耗，以在低光条件下减小眼睛的压力，或者因为您更喜欢主题的外观。

{% ifversion fpt or ghes > 3.2 or ghae-issue-4618 or ghec %}If you have low vision, you may benefit from a high contrast theme, with greater contrast between foreground and background elements.{% endif %}{% ifversion fpt or ghae-issue-4619 or ghec %} If you have colorblindness, you may benefit from our light and dark colorblind themes.

{% note %}

**Note:** The colorblind themes and light high contrast theme are currently in public beta. For more information on enabling features in public beta, see "[Exploring early access releases with feature preview](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."

{% endnote %}

{% endif %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.appearance-settings %}

1. Under "Theme mode", select the drop-down menu, then click a theme preference.

   !["主题模式"下的下拉菜单用于选择主题首选项](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. 单击想要使用的主题。
    - 如果您选择单个主题，请单击一个主题。

      {% ifversion fpt or ghes > 3.2 or ghae-issue-4618 or ghec %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - 如果您选择遵循系统设置，请单击白天主题和夜间主题。

      {% ifversion fpt or ghes > 3.2 or ghae-issue-4618 or ghec %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %}
    {% ifversion fpt or ghae-issue-4619 or ghec %}
    - If you would like to choose a theme which is currently in public beta, you will first need to enable it with feature preview. For more information, see "[Exploring early access releases with feature preview](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."{% endif %}

{% if command-palette %}

{% note %}

**Note:** You can also change your theme settings with the command palette. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".

{% endnote %}

{% endif %}

## 延伸阅读

- "[设置 {% data variables.product.prodname_desktop %} 的主题](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
