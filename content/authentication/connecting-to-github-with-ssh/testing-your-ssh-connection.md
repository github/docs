---
title: Testing your SSH connection
intro: 'After you''ve set up your SSH key and added it to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, you can test your connection.'
redirect_from:
  - /articles/testing-your-ssh-connection
  - /github/authenticating-to-github/testing-your-ssh-connection
  - /github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Test your SSH connection
---
Before testing your SSH connection, you should have:
- [Checked for existing SSH keys](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)
- [Generated a new SSH key](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Added a new SSH key to your GitHub account](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

When you test your connection, you'll need to authenticate this action using your password, which is the SSH key passphrase you created earlier. For more information on working with SSH key passphrases, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)."

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Enter the following:

   ```shell
   $ ssh -T git@{% data variables.command_line.codeblock %}
   # Attempts to ssh to {% data variables.product.product_name %}
   ```

   You may see a warning like this:

   ```shell
   > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
   > ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
   > Are you sure you want to continue connecting (yes/no)?
   ```

1. Verify that the fingerprint in the message you see matches {% ifversion fpt or ghec %}[{% data variables.product.prodname_dotcom %}'s public key fingerprint](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints){% else %} your enterprise's public key fingerprint{% endif %}. If it does, then type `yes`:

   ```shell
   > Hi USERNAME! You've successfully authenticated, but GitHub does not
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

   This is a known problem with certain Linux distributions. For more information, see "[AUTOTITLE](/authentication/troubleshooting-ssh/error-agent-admitted-failure-to-sign)."

   {% endlinux %}

   {% note %}

   **Note:** The remote command should exit with code 1.

   {% endnote %}

1. Verify that the resulting message contains your username. If you receive a "permission denied" message, see "[AUTOTITLE](/authentication/troubleshooting-ssh/error-permission-denied-publickey)."
