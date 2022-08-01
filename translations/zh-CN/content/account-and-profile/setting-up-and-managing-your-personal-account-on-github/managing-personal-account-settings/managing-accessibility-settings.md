---
title: 管理辅助功能设置
shortTitle: Manage accessibility settings
intro: '{% data variables.product.product_name %}''s user interface can adapt to your vision, hearing, motor, cognitive, or learning needs.'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
---

## 关于辅助功能设置

To accommodate your vision, hearing, motor, cognitive, or learning needs, you can customize the user interface for {% data variables.product.product_location %}.

## 管理辅助功能设置

You can decide whether you want to use some or all keyboard shortcuts on {% ifversion fpt or ghec %}{% data variables.product.product_location %}{% elsif ghes or ghae %}the website for {% data variables.product.product_location %}{% endif %}, and you can control the display of animated images.

### Managing keyboard shortcuts

You can perform actions across the {% data variables.product.product_name %} website without using your mouse by using your keyboard instead. Keyboard shortcuts can be useful to save time for some people, but may interfere with accessibility if you don't intend to use the shortcuts.

By default, all keyboard shortcuts are enabled on {% data variables.product.product_name %}. 更多信息请参阅“[键盘快捷键](/get-started/using-github/keyboard-shortcuts)”。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.accessibility_settings %}
1. Under "Keyboard shortcuts", manage settings for your keyboard shortcuts.

   - Optionally, to disable or enable shortcut keys that don't use modifiers keys like <kbd>Control</kbd> or <kbd>Command</kbd>, under "General", deselect **Character keys**. If you disable character keys, you may still be able to trigger shortcuts for your web browser, and you can still trigger shortcuts for {% data variables.product.product_name %} that use a modifier key.
{%- ifversion command-palette %}
   - Optionally, to customize the keyboard shortcuts for triggering the command palette, under "Command palette", use the drop-down menus to choose a keyboard shortcut. For more information, see "[{% data variables.product.company_short %} Command Palette](/get-started/using-github/github-command-palette)."
   {%- endif %}

{% ifversion motion-management %}

### Managing motion

You can control how {% data variables.product.product_name %} displays animated images.

By default, {% data variables.product.product_name %} syncs with your system-level preference for reduced motion. For more information, see the documentation or settings for your operating system.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.accessibility_settings %}
1. Under "Motion", manage settings for motion.

   - Optionally, to control how {% data variables.product.product_name %} displays animaged images, under "Autoplay animated images", select **Sync with system**, **Enabled**, or **Disabled**.

{% endif %}
