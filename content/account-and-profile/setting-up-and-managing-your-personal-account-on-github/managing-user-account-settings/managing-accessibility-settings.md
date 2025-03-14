---
title: Managing accessibility settings
shortTitle: Manage accessibility settings
intro: '{% data variables.product.github %}''s user interface can adapt to your vision, hearing, motor, cognitive, or learning needs.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings
type: how_to
---

## About accessibility settings

To create an experience on {% data variables.product.github %} that fits your needs, you can customize the user interface. Accessibility settings can be essential for people with disabilities, but can be useful to anyone. For example, customization of keyboard shortcuts is essential to people who navigate using voice control, but can be useful to anyone when a keyboard shortcut for {% data variables.product.github %} clashes with another application shortcut.

You can decide whether you want to use some or all keyboard shortcuts, and control the display of animated images and how links are displayed.

This article will help you customize your experience on the {% data variables.product.github %} website as a whole. For information on using specific {% data variables.product.github %} products with screen readers and other assistive technologies, see the [{% data variables.product.github %} Accessibility Documentation](https://accessibility.github.com/documentation).

## Managing the appearance of links

You can control whether links in text blocks are underlined and therefore more distinguishable.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.accessibility_settings %}
1. Under "Content", manage settings for link appearance.

    * To enable underlines on links in text blocks, under "Link underlines", select **Show link underlines**.
    * To disable underlines on links in text blocks, under "Link underlines", select **Hide link underlines**.
    * To disable hovercards for previewing link content, deselect **Hovercards**.

## Managing keyboard shortcuts

You can perform actions across the {% data variables.product.github %} website by using your keyboard alone. Keyboard shortcuts can be useful to save time, but can be activated accidentally or interfere with assistive technology.

By default, all keyboard shortcuts are enabled. For more information, see [AUTOTITLE](/get-started/accessibility/keyboard-shortcuts).

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.accessibility_settings %}
1. Under "Keyboard shortcuts", manage settings for your keyboard shortcuts.

   * To disable shortcut keys that don't use modifiers keys like <kbd>Control</kbd> or <kbd>Command</kbd>, under "General", deselect **Character keys**.
     * If you disable character keys, you may still be able to trigger shortcuts for your web browser, and you can still trigger shortcuts that use a modifier key.
   {%- ifversion command-palette %}
   * To customize the keyboard shortcuts for triggering the command palette, under "Command palette", use the drop-down menus to choose a keyboard shortcut. For more information, see [AUTOTITLE](/get-started/accessibility/github-command-palette).
   {%- endif %}

## Managing motion

You can control how {% data variables.product.github %} displays animated _.gif_ images.

By default, {% data variables.product.github %} syncs with your system-level preference for reduced motion. For more information, see the documentation or settings for your operating system.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.accessibility_settings %}
1. Under "Motion", manage settings for motion.

   * To control how {% data variables.product.github %} displays animated images, under "Autoplay animated images", select **Sync with system**, **Enabled**, or **Disabled**.
