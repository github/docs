---
title: Checking for existing SSH keys
intro: 'Before you generate an SSH key, you can check to see if you have any existing SSH keys.'
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Check for existing SSH key
---

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Enter `ls -al ~/.ssh` to see if existing SSH keys are present.

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. Check the directory listing to see if you already have a public SSH key. By default, the {% ifversion ghae %}filename of a supported public key for {% data variables.product.product_name %} is *id_rsa.pub*.{% elsif fpt or ghes %}filenames of supported public keys for {% data variables.product.product_name %} are one of the following.
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **Tip**: If you receive an error that *~/.ssh* doesn't exist, you do not have an existing SSH key pair in the default location. You can create a new SSH key pair in the next step.

  {% endtip %}

4. Either generate a new SSH key or upload an existing key.
    - If you don't have a supported public and private key pair, or don't wish to use any that are available, generate a new SSH key.
    - If you see an existing public and private key pair listed (for example, *id_rsa.pub* and *id_rsa*) that you would like to use to connect to {% data variables.product.product_name %}, you can add the key to the ssh-agent.

      For more information about generation of a new SSH key or addition of an existing key to the ssh-agent, see "[Generating a new SSH key and adding it to the ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."
