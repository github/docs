---
title: 'Error: Permission denied (publickey)'
intro: 'A "Permission denied" error means that the server rejected your connection. There could be several reasons why, and the most common examples are explained below.'
redirect_from:
  - /articles/error-permission-denied-publickey
  - /github/authenticating-to-github/error-permission-denied-publickey
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-denied-publickey
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied (publickey)
---

## Should the `sudo` command or elevated privileges be used with Git?

You should not be using the `sudo` command or elevated privileges, such as administrator permissions, with Git.

If you have a _very good reason_ you must use `sudo`, then ensure you are using it with every command. If you [generate SSH keys](/authentication/connecting-to-github-with-ssh) without `sudo` and then try to use a command like `sudo git push`, you won't be using the same keys that you generated.

## Check that you are connecting to the correct server

To make sure you are connecting to the right domain, you can enter the following command:

```shell replacedomain copy
ssh -vT git@{% data variables.product.product_url %}
```

You should see this output:

```shell replacedomain
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/YOU/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to {% data variables.product.product_url %} port 22.
```

The connection should be made on port 22{% ifversion fpt or ghec %}, unless you're overriding settings to use [SSH over HTTPS](/authentication/troubleshooting-ssh/using-ssh-over-the-https-port){% endif %}.

## Always use the "git" user

All connections, including those for remote URLs, must be made as the "git" user. If you try to connect with your {% data variables.product.product_name %} username, it will fail:

```shell replacedomain
$ ssh -T GITHUB-USERNAME@{% data variables.product.product_url %}
> Permission denied (publickey).
```

If your connection failed and you're using a remote URL with your {% data variables.product.product_name %} username, you can [change the remote URL to use the "git" user](/get-started/getting-started-with-git/managing-remote-repositories).

You should verify your connection by typing:

```shell replacedomain copy
ssh -T git@{% data variables.product.product_url %}
```

You should see this output:

```shell
> Hi USERNAME! You've successfully authenticated...
```

## Make sure you have a key that is being used

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Verify that you have a private key generated and loaded into SSH.

   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

   {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

   {% data reusables.desktop.note-start-ssh-agent %}

1. Verify that you have a private key generated and loaded into SSH.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}

1. Verify that you have a private key generated and loaded into SSH.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

{% endlinux %}

The `ssh-add` command _should_ print out a long string of numbers and letters. If it does not print anything, you will need to [generate a new SSH key](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and associate it with {% data variables.product.product_name %}.

{% tip %}

**Tip**: On most systems the default private keys (`~/.ssh/id_rsa` and `~/.ssh/identity`) are automatically added to the SSH authentication agent. You shouldn't need to run `ssh-add path/to/key` unless you override the file name when you generate a key.

{% endtip %}

### Getting more details

You can also check that the key is being used by trying to connect to `git@{% data variables.product.product_url %}`:

```shell replacedomain copy
ssh -vT git@{% data variables.product.product_url %}
```

You'll see output like this:

```shell
> ...
> debug1: identity file /Users/YOU/.ssh/id_rsa type -1
> debug1: identity file /Users/YOU/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/YOU/.ssh/id_dsa type -1
> debug1: identity file /Users/YOU/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/YOU/.ssh/id_rsa
> debug1: Trying private key: /Users/YOU/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

In this example, SSH did not find any keys.
- "-1" at the end of the "identity file" lines means SSH couldn't find a file to use.
- "Trying private key" lines indicate that no file was found.

If a file existed, those lines would be "1" and "Offering public key", as in this output:

```shell
> ...
> debug1: identity file /Users/YOU/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/YOU/.ssh/id_rsa
```

## Verify the public key is attached to your account

You must provide your public key to {% data variables.product.product_name %} to establish a secure connection.

{% mac %}

1. Open Terminal.
1. Start SSH agent in the background.

   ```shell
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. Compare the list of SSH keys with the output from the `ssh-add` command.

{% endmac %}

{% windows %}

1. Open the command line.
1. Start SSH agent in the background.

   ```shell
   $ ssh-agent -s
   > Agent pid 59566
   ```

1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. Compare the list of SSH keys with the output from the `ssh-add` command.

{% endwindows %}

{% linux %}

1. Open Terminal.
1. Start SSH agent in the background.

   ```shell
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

1. Find and take a note of your public key fingerprint. If you're using OpenSSH 6.7 or older:

   ```shell
   $ ssh-add -l
   > 2048 a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

   If you're using OpenSSH 6.8 or newer:

   ```shell
   $ ssh-add -l -E md5
   > 2048 MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. Compare the list of SSH keys with the output from the `ssh-add` command.

{% endlinux %}

If you don't see your public key in {% data variables.product.product_name %}, you'll need to [add your SSH key to {% data variables.product.product_name %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) to associate it with your computer.

{% warning %}

**Warning**: If you see an SSH key you're not familiar with on {% data variables.product.product_name %}, delete it immediately and contact {% data variables.contact.contact_support %} for further help. An unidentified public key may indicate a possible security concern. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys)."

{% endwarning %}
