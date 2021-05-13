---
title: Testing your SSH connection
intro: 'After you''ve set up your SSH key and added it to your {% data variables.product.product_name %} account, you can test your connection.'
redirect_from:
  - /articles/testing-your-ssh-connection
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Before testing your SSH connection, you should have:
- [Checked for existing SSH keys](/articles/checking-for-existing-ssh-keys)
- [Generated a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Added a new SSH key to your GitHub account](/articles/adding-a-new-ssh-key-to-your-github-account)

When you test your connection, you'll need to authenticate this action using your password, which is the SSH key passphrase you created earlier. For more information on working with SSH key passphrases, see ["Working with SSH key passphrases"](/articles/working-with-ssh-key-passphrases).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Enter the following:
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  You may see a warning like this:

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. Verify that the fingerprint in the message you see matches {% if currentVersion == "free-pro-team@latest" %}[{% data variables.product.prodname_dotcom %}'s RSA public key fingerprint](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %} your enterprise's public key fingerprint{% endif %}. If it does, then type `yes`:
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  You may see this error message:
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  This is a known problem with certain Linux distributions. For more information, see ["Error: Agent admitted failure to sign"](/articles/error-agent-admitted-failure-to-sign).

  {% endlinux %}

4. Verify that the resulting message contains your username. If you receive a "permission denied" message, see ["Error: Permission denied (publickey)"](/articles/error-permission-denied-publickey).
