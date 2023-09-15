---
title: Recovering your SSH key passphrase
intro: 'If you''ve lost your SSH key passphrase, depending on the operating system you use, you may either recover it or you may need to generate a new SSH key passphrase.'
redirect_from:
  - /articles/how-do-i-recover-my-passphrase
  - /articles/how-do-i-recover-my-ssh-key-passphrase
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/troubleshooting-ssh/recovering-your-ssh-key-passphrase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Recover SSH key passphrase
---
{% mac %}

If you [configured your SSH passphrase with the macOS keychain](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain), you may be able to recover it.

1. In Finder, search for the **Keychain Access** app.
1. In Keychain Access, search for **SSH**.
1. Double click on the entry for your SSH key to open a new dialog box.
1. In the lower-left corner, select **Show password**.
1. You'll be prompted for your administrative password. Type it into the "Keychain Access" dialog box.
1. Your password will be revealed.

{% endmac %}

{% windows %}

If you lose your SSH key passphrase, there's no way to recover it. You'll need to [generate a brand new SSH keypair](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) or [switch to HTTPS cloning](/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls) so you can use a {% data variables.product.pat_generic %} instead.

{% endwindows %}

{% linux %}

If you lose your SSH key passphrase, there's no way to recover it. You'll need to [generate a brand new SSH keypair](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) or [switch to HTTPS cloning](/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls) so you can use a {% data variables.product.pat_generic %} instead.

{% endlinux %}
