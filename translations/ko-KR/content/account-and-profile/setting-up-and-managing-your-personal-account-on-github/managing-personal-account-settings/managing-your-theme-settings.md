---
title: Managing your theme settings
intro: 'You can manage how {% data variables.product.product_name %} looks to you by setting a theme preference that either follows your system settings or always uses a light or dark mode.'
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
shortTitle: Manage theme settings
---

For choice and flexibility in how and when you use {% data variables.product.product_name %}, you can configure theme settings to change how {% data variables.product.product_name %} looks to you. You can choose from themes that are light or dark, or you can configure {% data variables.product.product_name %} to follow your system settings.

You may want to use a dark theme to reduce power consumption on certain devices, to reduce eye strain in low-light conditions, or because you prefer how the theme looks.

If you have low vision, you may benefit from a high contrast theme, with greater contrast between foreground and background elements.{% ifversion fpt or ghae or ghec %} If you have colorblindness, you may benefit from our light and dark colorblind themes.

{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}

1. Under "Theme mode", select the drop-down menu, then click a theme preference.

   ![Drop-down menu under "Theme mode" for selection of theme preference](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Click the theme you'd like to use.
    - If you chose a single theme, click a theme.

      {%- ifversion ghes = 3.5 %}
      {% note %}

      **Note**: The light high contrast theme was unavailable in {% data variables.product.product_name %} 3.5.0, 3.5.1, 3.5.2, and 3.5.3. The theme is available in 3.5.4 and later. For more information about upgrades, contact your site administrator.

      For more information about determining the version of {% data variables.product.product_name %} you're using, see "[About versions of  {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."
      {% endnote %}
      {%- endif %}

      ![Radio buttons for the choice of a single theme](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png)
    - If you chose to follow your system settings, click a day theme and a night theme.

      ![Buttons for the choice of a theme to sync with the system setting](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png)
    {% ifversion fpt or ghec %}
    - If you would like to choose a theme which is currently in public beta, you will first need to enable it with feature preview. For more information, see "[Exploring early access releases with feature preview](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."{% endif %}

{% ifversion command-palette %}

{% note %}

**Note:** You can also change your theme settings with the command palette. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".

{% endnote %}

{% endif %}

## Further reading

- "[Setting a theme for {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)"
