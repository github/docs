---
title: Sudo mode
intro: '{% data variables.product.product_name %} asks you for your password before you can modify your email address, authorize third-party applications, or add new public keys, or initiate other *sudo-protected* actions.'
redirect_from:
  - /articles/sudo-mode
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

After you've performed a sudo-protected action, you'll only be asked to re-authenticate again after a few hours of inactivity. Every sudo-protected action resets this timer.

![Sudo Mode Dialog](/assets/images/help/settings/sudo_mode_popup.png)

### 더 읽을거리

- [Unix `sudo` command](http://en.wikipedia.org/wiki/Sudo)
