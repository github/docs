---
title: Checking for existing SSH keys
intro: 'Before you generate an SSH key, you can check to see if you have any existing SSH keys.'
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - SSH
shortTitle: Check for existing SSH key
---
{% data reusables.ssh.dsa-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Enter `ls -al ~/.ssh` to see if existing SSH keys are present:

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```
3. Check the directory listing to see if you already have a public SSH key. By default, the filenames of the public keys are one of the following:
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*

If you don't have an existing public and private key pair, or don't wish to use any that are available to connect to {% data variables.product.product_name %}, then [generate a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

If you see an existing public and private key pair listed (for example *id_rsa.pub* and *id_rsa*) that you would like to use to connect to {% data variables.product.product_name %}, you can [add your SSH key to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#adding-your-ssh-key-to-the-ssh-agent).

{% tip %}

**Tip:** If you receive an error that *~/.ssh* doesn't exist, don't worry! We'll create it when we [generate a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% endtip %}
