---
title: 'Error: Permission denied (publickey)'
intro: 'A "Permission denied" error means that the server rejected your connection. There could be several reasons why, and the most common examples are explained below.'
redirect_from:
  - /articles/error-permission-denied-publickey
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Should the `sudo` command be used with Git?

You should not be using the `sudo` command with Git. If you have a *very good reason* you must use `sudo`, then ensure you are using it with every command (it's probably just better to use `su` to get a shell as root at that point). If you [generate SSH keys](/articles/generating-an-ssh-key) without `sudo` and then try to use a command like `sudo git push`, you won't be using the same keys that you generated.

### Check that you are connecting to the correct server

Typing is hard, we all know it. Pay attention to what you type; you won't be able to connect to "githib.com" or "guthub.com". In some cases, a corporate network may cause issues resolving the DNS record as well.

To make sure you are connecting to the right domain, you can enter the following command:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_5.6p1, OpenSSL 0.9.8r 8 Feb 2011
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} [IP ADDRESS] port 22.
```

The connection should be made on port 22{% if currentVersion == "free-pro-team@latest" %}, unless you're overriding settings to use [SSH over HTTPS](/articles/using-ssh-over-the-https-port){% endif %}.

### Always use the "git" user

All connections, including those for remote URLs, must be made as the "git" user. If you try to connect with your {% data variables.product.product_name %} username, it will fail:

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
If your connection failed and you're using a remote URL with your {% data variables.product.product_name %} username, you can [change the remote URL to use the "git" user](/articles/changing-a-remote-s-url/).

You should verify your connection by typing:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

### Make sure you have a key that is being used

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Verify that you have a private key generated and loaded into SSH. If you're using OpenSSH 6.7 or older:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  If you're using OpenSSH 6.8 or newer:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. Verify that you have a private key generated and loaded into SSH. If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  If you're using OpenSSH 6.8 or newer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Verify that you have a private key generated and loaded into SSH. If you're using OpenSSH 6.7 or older:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  If you're using OpenSSH 6.8 or newer:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endlinux %}

The `ssh-add` command *should* print out a long string of numbers and letters. If it does not print anything, you will need to [generate a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and associate it with {% data variables.product.product_name %}.

{% tip %}

**Tip**: On most systems the default private keys (`~/.ssh/id_rsa`{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}, `~/.ssh/id_dsa`{% endif %} and `~/.ssh/identity`) are automatically added to the SSH authentication agent. You shouldn't need to run `ssh-add path/to/key` unless you override the file name when you generate a key.

{% endtip %}

#### Getting more details

You can also check that the key is being used by trying to connect to `git@{% data variables.command_line.backticks %}`:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_rsa
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

In that example, we did not have any keys for SSH to use. The "-1" at the end of the "identity file" lines means SSH couldn't find a file to use. Later on, the "Trying private key" lines also indicate that no file was found. If a file existed, those lines would be "1" and "Offering public key", respectively:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/<em>you</em>/.ssh/id_rsa
```

### Verify the public key is attached to your account

You must provide your public key to {% data variables.product.product_name %} to establish a secure connection.

{% mac %}

1. Open Terminal.
2. Start SSH agent in the background.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Find and take a note of your public key fingerprint. If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  If you're using OpenSSH 6.8 or newer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compare the list of SSH keys with the output from the `ssh-add` command.
![SSH key listing in {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. Open the command line.
2. Start SSH agent in the background.
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. Find and take a note of your public key fingerprint. If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  If you're using OpenSSH 6.8 or newer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compare the list of SSH keys with the output from the `ssh-add` command.
![SSH key listing in {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. Open Terminal.
2. Start SSH agent in the background.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Find and take a note of your public key fingerprint. If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  If you're using OpenSSH 6.8 or newer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compare the list of SSH keys with the output from the `ssh-add` command.
![SSH key listing in {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

If you don't see your public key in {% data variables.product.product_name %}, you'll need to [add your SSH key to {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account) to associate it with your computer.

{% warning %}

**Warning**: If you see an SSH key you're not familiar with on {% data variables.product.product_name %}, delete it immediately and contact {% data variables.contact.contact_support %}, for further help. An unidentified public key may indicate a possible security concern. For more information, see "[Reviewing your SSH keys](/articles/reviewing-your-ssh-keys)."

{% endwarning %}
