
---
title: Sudo mode
intro: '{% data variables.product.product_name %} asks you for your password before you can modify your email address, authorize third-party applications, or add new public keys, or initiate other *sudo-protected* actions.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Identity
  - Access management
---
After you've performed a sudo-protected action, you'll only be asked to re-authenticate again after a few hours of inactivity. Every sudo-protected action resets this timer.

![Sudo Mode Dialog](https://user-images.githubusercontent.com/81427437/128669096-258fbc3e-2761-4f33-80f1-5bc82d73502a.jpg)

## Further reading

- [Unix `sudo` command](http://en.wikipedia.org/wiki/Sudo)
