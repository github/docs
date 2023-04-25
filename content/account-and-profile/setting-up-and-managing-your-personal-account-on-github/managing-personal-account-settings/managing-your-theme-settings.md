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

1. Under "Theme mode", select the dropdown menu, then click a theme preference.

   ![Screenshot of the "Theme mode" sub-section. A dropdown menu, labeled "Single theme," is highlighted with an orange outline.](/assets/images/help/settings/theme-mode-drop-down-menu.png)

1. Click the theme you'd like to use.
    - If you chose a single theme, click a theme.

      {%- ifversion ghes = 3.5 %}
      {% note %}

      **Note**: The light high contrast theme was unavailable in {% data variables.product.product_name %} 3.5.0, 3.5.1, 3.5.2, and 3.5.3. The theme is available in 3.5.4 and later. For more information about upgrades, contact your site administrator.

      For more information about determining the version of {% data variables.product.product_name %} you're using, see "[AUTOTITLE](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."
      {% endnote %}
      {%- endif %}

    - If you chose to follow your system settings, click a day theme and a night theme.{% ifversion fpt or ghec %}
    - If you would like to choose a theme which is currently in public beta, you will first need to enable it with feature preview. For more information, see "[AUTOTITLE](/get-started/using-github/exploring-early-access-releases-with-feature-preview)."{% endif %}

{% ifversion command-palette %}

{% note %}

**Note:** You can also change your theme settings with the command palette. For more information, see "[AUTOTITLE](/get-started/using-github/github-command-palette)".

{% endnote %}

{% endif %}

## Further reading

- "[AUTOTITLE](/desktop/installing-and-configuring-github-desktop/configuring-and-customizing-github-desktop/setting-a-theme-for-github-desktop)"
