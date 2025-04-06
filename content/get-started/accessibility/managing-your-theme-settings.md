---
title: Managing your theme settings
intro: 'You can manage how {% data variables.product.product_name %} looks to you by setting a theme preference that either follows your system settings or always uses a light or dark mode.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
---

For choice and flexibility in how and when you use {% data variables.product.product_name %}, you can configure theme settings to change how {% data variables.product.product_name %} looks to you. You can choose from themes that are light or dark, or you can configure {% data variables.product.product_name %} to follow your system settings.

You may want to use a dark theme to reduce power consumption on certain devices, to reduce eye strain in low-light conditions, or because you prefer how the theme looks.

If you have low vision, you may benefit from a high contrast theme, with greater contrast between foreground and background elements.{% ifversion fpt or ghec %} If you have colorblindness, you may benefit from our light and dark colorblind themes.

{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}

1. Under "Theme mode", select the dropdown menu, then click a theme preference.

   ![Screenshot of the "Theme mode" sub-section. A dropdown menu, labeled "Single theme," is highlighted with an orange outline.](/assets/images/help/settings/theme-mode-drop-down-menu.png)

1. Click the theme you'd like to use.
    * If you chose a single theme, click a theme.

    * If you chose to follow your system settings, click a day theme and a night theme.{% ifversion fpt or ghec %}
    * If you would like to choose a theme which is currently in public beta, you will first need to enable it with feature preview. For more information, see "[AUTOTITLE](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."{% endif %}

{% ifversion command-palette %}

{% note %}

**Note:** You can also change your theme settings with the command palette. For more information, see "[AUTOTITLE](/get-started/accessibility/github-command-palette)."

{% endnote %}

{% endif %}

## Further reading

* "[AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/setting-a-theme-for-github-desktop)"
