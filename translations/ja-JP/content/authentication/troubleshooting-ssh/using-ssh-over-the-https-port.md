---
title: Using SSH over the HTTPS port
intro: 'Sometimes, firewalls refuse to allow SSH connections entirely.  If using [HTTPS cloning with credential caching](/github/getting-started-with-github/caching-your-github-credentials-in-git) is not an option, you can attempt to clone using an SSH connection made over the HTTPS port.  Most firewall rules should allow this, but proxy servers may interfere.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
---
{% tip %}

**{% data variables.product.prodname_ghe_server %} users**: Accessing {% data variables.product.prodname_ghe_server %} via SSH over the HTTPS port is currently not supported.

{% endtip %}

To test if SSH over the HTTPS port is possible, run this SSH command:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% note %}

**Note**: The hostname for port 443 is `ssh.{% data variables.command_line.backticks %}`, not `{% data variables.command_line.backticks %}`.

{% endnote %} 

If that worked, great! If not, you may need to [follow our troubleshooting guide](/articles/error-permission-denied-publickey).

Now, to clone the repository, you can run the following command:

```
$ git clone ssh://git@ssh.{% data variables.command_line.codeblock %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## Enabling SSH connections over HTTPS

If you are able to SSH into `git@ssh.{% data variables.command_line.backticks %}` over port 443, you can override your SSH settings to force any connection to {% data variables.location.product_location %} to run through that server and port.

To set this in your SSH configuration file, edit the file at `~/.ssh/config`, and add this section:

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

You can test that this works by connecting once more to {% data variables.location.product_location %}:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

## Updating known hosts

The first time you interact with GitHub after switching to port 443, you may get a warning message
that the host wasn't found in `known_hosts`, or that it was found by another name.

```ShellSession
> The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> This host key is known by the following other names/addresses:
>     ~/.ssh/known_hosts:32: github.com
> Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```

It is safe to answer `yes` to this question, assuming that the SSH fingerprint matches
one of GitHub's published fingerprints. For more information, see "[Github's SSH key fingerprints](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)."
