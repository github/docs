---
title: Managing accessibility settings
shortTitle: Manage accessibility settings
intro: '{% data variables.product.product_name %}''s user interface can adapt to your vision, hearing, motor, cognitive, or learning needs.'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
---

## About accessibility settings

To create an experience on {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} that fits your needs, you can customize the user interface. Accessibility settings can be essential for people with disabilities, but can be useful to anyone. For example, customization of keyboard shortcuts is essential to people who navigate using voice control, but can be useful to anyone when a keyboard shortcut for {% data variables.product.product_name %} clashes with another application shortcut.

## Managing accessibility settings

You can decide whether you want to use some or all keyboard shortcuts on {% ifversion fpt or ghec %}{% data variables.location.product_location %}{% elsif ghes or ghae %}the website for {% data variables.location.product_location %}{% endif %}, and you can control the display of animated images.

### Managing keyboard shortcuts

You can perform actions across the {% data variables.product.product_name %} website by using your keyboard alone. Keyboard shortcuts can be useful to save time, but can be activated accidentally or interfere with assistive technology.

By default, all keyboard shortcuts are enabled on {% data variables.product.product_name %}. For more information, see "[Keyboard shortcuts](/get-started/using-github/keyboard-shortcuts)."

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.accessibility_settings %}
1. Under "Keyboard shortcuts", manage settings for your keyboard shortcuts.

   - To disable shortcut keys that don't use modifiers keys like <kbd>Control</kbd> or <kbd>Command</kbd>, under "General", deselect **Character keys**.
     - If you disable character keys, you may still be able to trigger shortcuts for your web browser, and you can still trigger shortcuts for {% data variables.product.product_name %} that use a modifier key.
   {%- ifversion command-palette %}
   - To customize the keyboard shortcuts for triggering the command palette, under "Command palette", use the drop-down menus to choose a keyboard shortcut. For more information, see "[{% data variables.product.company_short %} Command Palette](/get-started/using-github/github-command-palette)."
   {%- endif %}

{% ifversion motion-management %}

### Managing motion

You can control how {% data variables.product.product_name %} displays animated _.gif_ images.

By default, {% data variables.product.product_name %} syncs with your system-level preference for reduced motion. For more information, see the documentation or settings for your operating system.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.accessibility_settings %}
1. Under "Motion", manage settings for motion.

   - To control how {% data variables.product.product_name %} displays animated images, under "Autoplay animated images", select **Sync with system**, **Enabled**, or **Disabled**.

{% endif %}
