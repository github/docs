# Managing Accessibility Settings

## Introduction

The user interface of {% data variables.product.product_name %} can be customized to better meet your accessibility needs, whether for vision, hearing, motor, cognitive, or learning assistance. Accessibility settings aren't just for users with disabilities—they offer flexibility that can benefit everyone. For example, adjusting keyboard shortcuts helps people using voice control but can also be useful if a shortcut conflicts with another application.

---

## Managing Accessibility Settings

### About Accessibility Settings

To create a customized experience on {% data variables.location.product_location %}, you can adjust the user interface to fit your needs. Accessibility settings are essential for people with disabilities but can also be useful for anyone. For example, modifying keyboard shortcuts is critical for users who navigate with voice control, but it also helps anyone experiencing shortcut conflicts with other applications.

You can choose to enable or disable some or all keyboard shortcuts on {% ifversion fpt or ghec %}{% data variables.location.product_location %}{% elsif ghes %}the website for {% data variables.location.product_location %}{% endif %}. Additionally, you can control how animated images and links are displayed.

---

### Managing the Appearance of Links

You can decide whether links in text blocks on {% data variables.location.product_location %} are underlined for better distinction.

1. Navigate to your user settings.
2. Go to **Accessibility settings**.
3. Under the "Content" section, manage settings for link appearance:
   - To enable underlines on links, under "Link underlines", select **Show link underlines**.
   - To disable underlines on links, select **Hide link underlines**.
   - To disable hovercards for previewing link content, deselect **Hovercards**.

---

### Managing Keyboard Shortcuts

You can perform actions across the {% data variables.product.product_name %} website using keyboard shortcuts. While these can be a time saver, they might also accidentally trigger or interfere with assistive technologies.

By default, all keyboard shortcuts are enabled on {% data variables.product.product_name %}.

1. Navigate to your user settings.
2. Go to **Accessibility settings**.
3. Under "Keyboard shortcuts", manage your keyboard shortcut settings:
   - To disable shortcut keys that don’t use modifier keys like <kbd>Control</kbd> or <kbd>Command</kbd>, deselect **Character keys** under "General".
   - You can still trigger browser shortcuts and shortcuts that use modifier keys for {% data variables.product.product_name %}.

{% ifversion command-palette %}
   - To customize shortcuts for triggering the command palette, choose a shortcut under "Command palette" using the dropdown menus. For more information, refer to the "[GitHub Command Palette Documentation](/get-started/accessibility/github-command-palette)".
{% endif %}

---

### Managing Motion

You can control how {% data variables.product.product_name %} displays animated _.gif_ images. By default, {% data variables.product.product_name %} syncs with your system’s preference for reduced motion.

1. Navigate to your user settings.
2. Go to **Accessibility settings**.
3. Under "Motion", manage settings for motion:
   - To control how animated images are displayed, under "Autoplay animated images", select **Sync with system**, **Enabled**, or **Disabled**.

---

For more information on accessibility settings, visit the official documentation or refer to the settings on your operating system.
