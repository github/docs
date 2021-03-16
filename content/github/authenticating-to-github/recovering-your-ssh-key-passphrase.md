---
title: Recovering your SSH key passphrase
intro: 'If you''ve lost your SSH key passphrase, depending on the operating system you use, you may either recover it or you may need to generate a new SSH key passphrase.'
redirect_from:
  - /articles/how-do-i-recover-my-passphrase/
  - /articles/how-do-i-recover-my-ssh-key-passphrase/
  - /articles/recovering-your-ssh-key-passphrase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% mac %}

If you [configured your SSH passphrase with the OS X Keychain](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain), you may be able to recover it.

1. In Finder, search for the **Keychain Access** app.
   ![Spotlight Search bar](/assets/images/help/setup/keychain-access.png)
2. In Keychain Access, search for **SSH**.
3. Double click on the entry for your SSH key to open a new dialog box.
4. In the lower-left corner, select **Show password**.
   ![Keychain access dialog](/assets/images/help/setup/keychain_show_password_dialog.png)
5. You'll be prompted for your administrative password. Type it into the "Keychain Access" dialog box.
6. Your password will be revealed.

{% endmac %}

{% windows %}

If you lose your SSH key passphrase, there's no way to recover it. You'll need to [generate a brand new SSH keypair](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) or [switch to HTTPS cloning](/articles/changing-a-remote-s-url/#switching-remote-urls-from-ssh-to-https) so you can use your GitHub password instead.

{% endwindows %}

{% linux %}

If you lose your SSH key passphrase, there's no way to recover it. You'll need to [generate a brand new SSH keypair](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) or [switch to HTTPS cloning](/articles/which-remote-url-should-i-use/#cloning-with-https-urls) so you can use your GitHub password instead.

{% endlinux %}
