---
title: Generating a new SSH key and adding it to the ssh-agent
intro: 'After you''ve checked for existing SSH keys, you can generate a new SSH key to use for authentication, then add it to the ssh-agent.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Generate new SSH key
---

## About SSH key passphrases

{% data reusables.ssh.about-ssh %} For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/about-ssh)."

When you generate an SSH key, you can add a passphrase to further secure the key. Whenever you use the key, you must enter the passphrase. If your key has a passphrase and you don't want to enter the passphrase every time you use the key, you can add your key to the SSH agent. The SSH agent manages your SSH keys and remembers your passphrase.

If you don't already have an SSH key, you must generate a new SSH key to use for authentication. If you're unsure whether you already have an SSH key, you can check for existing keys. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)."

If you want to use a hardware security key to authenticate to {% data variables.product.product_name %}, you must generate a new SSH key for your hardware security key. You must connect your hardware security key to your computer when you authenticate with the key pair. For more information, see the [OpenSSH 8.2 release notes](https://www.openssh.com/txt/release-8.2).

## Generating a new SSH key

You can generate a new SSH key on your local machine. After you generate the key, you can add the public key to your account on {% data variables.location.product_location %} to enable authentication for Git operations over SSH.

{% ifversion ghes %}

If you are a site administrator for {% data variables.location.product_location %}, you can use the same key to grant yourself administrative SSH access to the instance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

{% endif %}

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Paste the text below, replacing the email used in the example with your {% data variables.product.product_name %} email address.

   ```shell
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   {% note %}

   **Note:** If you are using a legacy system that doesn't support the Ed25519 algorithm, use:

   ```shell
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   {% endnote %}

   This creates a new SSH key, using the provided email as a label.

   ```shell
   > Generating public/private ALGORITHM key pair.
   ```

   When you're prompted to "Enter a file in which to save the key", you can press **Enter** to accept the default file location. Please note that if you created SSH keys previously, ssh-keygen may ask you to rewrite another key, in which case we recommend creating a custom-named SSH key. To do so, type the default file location and replace id_ALGORITHM with your custom key name.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```powershell
   > Enter file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endlinux %}

1. At the prompt, type a secure passphrase. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)."

   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

## Adding your SSH key to the ssh-agent

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. <span class="platform-mac">When adding your SSH key to the agent, use the default macOS `ssh-add` command, and not an application installed by [macports](https://www.macports.org/), [homebrew](https://brew.sh/), or some other external source.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

1. If you're using macOS Sierra 10.12.2 or later, you will need to modify your `~/.ssh/config` file to automatically load keys into the ssh-agent and store passphrases in your keychain.

   - First, check to see if your `~/.ssh/config` file exists in the default location.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/YOU/.ssh/config does not exist.
     ```

   - If the file doesn't exist, create the file.

     ```shell
     touch ~/.ssh/config
     ```

   - Open your `~/.ssh/config` file, then modify the file to contain the following lines. If your SSH key file has a different name or path than the example code, modify the filename or path to match your current setup.

     ```text replacedomain copy
     Host {% ifversion ghes %}HOSTNAME{% else %}github.com{% endif %}
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_ed25519
     ```

     {% note %}

     **Notes:**

     - If you chose not to add a passphrase to your key, you should omit the `UseKeychain` line.

     - If you see a `Bad configuration option: usekeychain` error, add an additional line to the configuration's' `Host *.{% ifversion ghes %}HOSTNAME{% else %}github.com{% endif %}` section.

       ```text replacedomain copy
       Host {% ifversion ghes %}HOSTNAME{% else %}github.com{% endif %}
         IgnoreUnknown UseKeychain
       ```

     {% endnote %}

1. Add your SSH private key to the ssh-agent and store your passphrase in the keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

   ```shell
   ssh-add --apple-use-keychain ~/.ssh/id_ed25519
   ```

   {% data reusables.ssh.apple-use-keychain %}

{% data reusables.ssh.add-public-key-to-github %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. In a new _admin elevated_ PowerShell window, ensure the ssh-agent is running. You can use the "Auto-launching the ssh-agent" instructions in "[AUTOTITLE](/articles/working-with-ssh-key-passphrases)", or start it manually:

   ```powershell
   # start the ssh-agent in the background
   Get-Service -Name ssh-agent | Set-Service -StartupType Manual
   Start-Service ssh-agent
   ```

1. In a terminal window without elevated permissions, add your SSH private key to the ssh-agent.
   {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

   ```powershell
   ssh-add c:/Users/YOU/.ssh/id_ed25519
   ```

{% data reusables.ssh.add-public-key-to-github %}

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

1. Add your SSH private key to the ssh-agent.

   {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

   {% indented_data_reference reusables.ssh.add-ssh-key-to-ssh-agent-commandline spaces=3 %}

{% data reusables.ssh.add-public-key-to-github %}

{% endlinux %}

## Generating a new SSH key for a hardware security key

If you are using macOS or Linux, you may need to update your SSH client or install a new SSH client prior to generating a new SSH key. For more information, see "[AUTOTITLE](/authentication/troubleshooting-ssh/error-unknown-key-type)."

1. Insert your hardware security key into your computer.
{% data reusables.command_line.open_the_multi_os_terminal %}

1. Paste the text below, replacing the email address in the example with the email address associated with your account on {% data variables.product.product_name %}.

   {% mac %}

   ```shell
   ssh-keygen -t ed25519-sk -C "your_email@example.com"
   ```

   {% endmac %}

   {% windows %}

   ```powershell
   ssh-keygen -t ed25519-sk -C "your_email@example.com"
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   ssh-keygen -t ed25519-sk -C "your_email@example.com"
   ```

   {% endlinux %}

   {% note %}

   **Note:** If the command fails and you receive the error `invalid format` or `feature not supported,` you may be using a hardware security key that does not support the Ed25519 algorithm. Enter the following command instead.

   ```shell
    ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```

   {% endnote %}

1. When you are prompted, touch the button on your hardware security key.
1. When you are prompted to "Enter a file in which to save the key," press Enter to accept the default file location.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ed25519_sk): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (c:\Users\YOU\.ssh\id_ed25519_sk):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_ed25519_sk):[Press enter]
   ```

   {% endlinux %}

1. When you are prompted to type a passphrase, press **Enter**.

   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

{% data reusables.ssh.add-public-key-to-github %}
