---
title: Managing your theme settings
intro: 'You can manage how {% data variables.product.product_name %} looks to you by setting a theme preference that either follows your system settings or always uses a light or dark mode.'
versions:
  fpt: '*'
  ghae: next
  ghes: '>=3.2'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
---

For choice and flexibility in how and when you use {% data variables.product.product_name %}, you can configure theme settings to change how {% data variables.product.product_name %} looks to you. You can choose from themes that are light or dark, or you can configure {% data variables.product.product_name %} to follow your system settings.

You may want to use a dark theme to reduce power consumption on certain devices, to reduce eye strain in low-light conditions, or because you prefer how the theme looks.

{% ifversion fpt or ghae-issue-4618 %} If you have low vision, you may benefit from a high contrast theme, with greater contrast between foreground and background elements.{% endif %}{% ifversion fpt or ghae-issue-4619 %} If you have colorblindness, you may benefit from our light and dark colorblind themes.

{% note %}

**Note:** The colorblind themes are currently in public beta. For more information on enabling features in public beta, see "[Exploring early access releases with feature preview](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."

{% endnote %}{% endif %}

{% data reusables.user_settings.access_settings %}
1. In the user settings sidebar, click **Appearance**. !["Appearance" tab in user settings sidebar](/assets/images/help/settings/appearance-tab.png)
2. Under "Theme mode", select the drop-down menu, then click a theme preference. ![Drop-down menu under "Theme mode" for selection of theme preference](/assets/images/help/settings/theme-mode-drop-down-menu.png)
3. Click the theme you'd like to use.
    - If you chose a single theme, click a theme.
      {% ifversion fpt or ghae-issue-4618 %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - If you chose to follow your system settings, click a day theme and a night theme.
      {% ifversion fpt or ghae-issue-4618 %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %}
    {% ifversion fpt or ghae-issue-4619 %}
    - If you would like to choose a theme which is currently in public beta, you will first need to enable it with feature preview. For more information, see "[Exploring early access releases with feature preview](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."{% endif %}

## 더 읽을거리

- "[Setting a theme for {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
