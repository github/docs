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
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Generate new SSH key
---

## About SSH key passphrases

{% data reusables.ssh.about-ssh %} For more information, see "[About SSH](/authentication/connecting-to-github-with-ssh/about-ssh)."

When you generate an SSH key, you can add a passphrase to further secure the key. Whenever you use the key, you must enter the passphrase. If your key has a passphrase and you don't want to enter the passphrase every time you use the key, you can add your key to the SSH agent. The SSH agent manages your SSH keys and remembers your passphrase.

If you don't already have an SSH key, you must generate a new SSH key to use for authentication. If you're unsure whether you already have an SSH key, you can check for existing keys. For more information, see "[Checking for existing SSH keys](/github/authenticating-to-github/checking-for-existing-ssh-keys)."

If you want to use a hardware security key to authenticate to {% data variables.product.product_name %}, you must generate a new SSH key for your hardware security key. You must connect your hardware security key to your computer when you authenticate with the key pair. For more information, see the [OpenSSH 8.2 release notes](https://www.openssh.com/txt/release-8.2).

## Generating a new SSH key

You can generate a new SSH key on your local machine. After you generate the key, you can add the key to your account on {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} to enable authentication for Git operations over SSH.

{% ifversion ghes %}

If you are a site administrator for {% data variables.product.product_location %}, you can use the same key to grant yourself administrative SSH access to the instance. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

{% endif %}

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Paste the text below, substituting in your {% data variables.product.product_name %} email address.
   {%- ifversion ghae %}
    <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com" 
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   {% note %}

   **Note:** If you are using a legacy system that doesn't support the Ed25519 algorithm, use:
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   {% endnote %}
   {%- endif %}

   This creates a new SSH key, using the provided email as a label.
   ```shell
   > Generating public/private ALGORITHM key pair.
   ```
3. When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM: [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/ALGORITHM):[Press enter]
   ```

   {% endlinux %}

4. At the prompt, type a secure passphrase. For more information, see ["Working with SSH key passphrases](/articles/working-with-ssh-key-passphrases)."
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

## Adding your SSH key to the ssh-agent

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. <span class="platform-mac">When adding your SSH key to the agent, use the default macOS `ssh-add` command, and not an application installed by [macports](https://www.macports.org/), [homebrew](http://brew.sh/), or some other external source.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. If you're using macOS Sierra 10.12.2 or later, you will need to modify your `~/.ssh/config` file to automatically load keys into the ssh-agent and store passphrases in your keychain.

   * First, check to see if your `~/.ssh/config` file exists in the default location.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/YOU/.ssh/config does not exist.
     ```

   * If the file doesn't exist, create the file.

     ```shell
     $ touch ~/.ssh/config
     ```

   * Open your `~/.ssh/config` file, then modify the file to contain the following lines. If your SSH key file has a different name or path than the example code, modify the filename or path to match your current setup.

     ```
     Host *
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **Notes:**

     - If you chose not to add a passphrase to your key, you should omit the `UseKeychain` line.

     - If you see a `Bad configuration option: usekeychain` error, add an additional line to the configuration's' `Host *` section.

       ```
       Host *
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. Add your SSH private key to the ssh-agent and store your passphrase in the keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add --apple-use-keychain ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
  ```
  {% note %}

   **Note:** The `--apple-use-keychain` option stores the passphrase in your keychain for you when you add an SSH key to the ssh-agent. If you chose not to add a passphrase to your key, run the command without the `--apple-use-keychain` option.

   The `--apple-use-keychain` option is in Apple's standard version of `ssh-add`. In MacOS versions prior to Monterey (12.0), the `--apple-use-keychain` and `--apple-load-keychain` flags used the syntax `-K` and `-A`, respectively.

  If you don't have Apple's standard version of `ssh-add` installed, you may receive an error. For more information, see "[Error: ssh-add: illegal option -- K](/articles/error-ssh-add-illegal-option-k)."


   {% endnote %}

4. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Ensure the ssh-agent is running. You can use the "Auto-launching the ssh-agent" instructions in "[Working with SSH key passphrases](/articles/working-with-ssh-key-passphrases)", or start it manually:
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. Add your SSH private key to the ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Add your SSH private key to the ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endlinux %}

## Generating a new SSH key for a hardware security key

If you are using macOS or Linux, you may need to update your SSH client or install a new SSH client prior to generating a new SSH key. For more information, see "[Error: Unknown key type](/github/authenticating-to-github/error-unknown-key-type)."

1. Insert your hardware security key into your computer.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Paste the text below, substituting in the email address for your account on {% data variables.product.product_name %}.
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "YOUR_EMAIL"
   ```

   {%- ifversion not ghae %}
   {% note %}

   **Note:** If the command fails and you receive the error `invalid format` or `feature not supported,` you may be using a hardware security key that does not support the Ed25519 algorithm. Enter the following command instead.
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```

   {% endnote %}
   {%- endif %}
4. When you are prompted, touch the button on your hardware security key.
5. When you are prompted to "Enter a file in which to save the key," press Enter to accept the default file location.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endlinux %}

6. When you are prompted to type a passphrase, press **Enter**.
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```
7. Add the SSH key to your account on {% data variables.product.prodname_dotcom %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."
