---
title: Using SSH over the HTTPS port
intro: 'Sometimes, firewalls refuse to allow SSH connections entirely. If using [HTTPS cloning with credential caching](/github/getting-started-with-github/caching-your-github-credentials-in-git) is not an option, you can attempt to clone using an SSH connection made over the HTTPS port. Most firewall rules should allow this, but proxy servers may interfere.'
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

> [!WARNING]
> **{% data variables.product.prodname_ghe_server %} users:** Accessing {% data variables.product.prodname_ghe_server %} via SSH over the HTTPS port is currently not supported.

To test if SSH over the HTTPS port is possible, run this SSH command:

```bash
$ ssh -T -p 443 git@ssh.github.com
# Hi USERNAME! You've successfully authenticated, but GitHub does not
# provide shell access.
```

If that worked, great! If not, you may need to [follow our troubleshooting guide](/authentication/troubleshooting-ssh/error-permission-denied-publickey).

> [!NOTE] The hostname for port 443 is `ssh.{% data variables.product.product_url %}`, not `{% data variables.product.product_url %}`.
> {% ifversion ghec %}
> {% data reusables.enterprise-data-residency.access-domain %}
{% endif %}

Now, to clone the repository, you can run the following command:

```shell
git clone ssh://git@ssh.{% data variables.product.product_url %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## Enabling SSH connections over HTTPS

If you are able to SSH into `git@ssh.{% data variables.product.product_url %}` over port 443, you can override your SSH settings to force any connection to {% data variables.location.product_location %} to run through that server and port.

To set this in your SSH configuration file, edit the file at `~/.ssh/config`, and add this section:

```text
Host {% data variables.product.product_url %}
    Hostname ssh.{% data variables.product.product_url %}
    Port 443
    User git
```

You can test that this works by connecting once more to {% data variables.location.product_location %}:

```bash
$ ssh -T git@{% data variables.product.product_url %}
# Hi USERNAME! You've successfully authenticated, but GitHub does not
# provide shell access.
```

## Updating known hosts

The first time you interact with {% data variables.product.prodname_dotcom %} after switching to port 443, you may get a warning message
that the host wasn't found in `known_hosts`, or that it was found by another name.

```bash
# The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
# ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
# This host key is known by the following other names/addresses:
#     ~/.ssh/known_hosts:32: github.com
# Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

It is safe to answer "yes" to this question, assuming that the SSH fingerprint matches
one of {% data variables.product.prodname_dotcom %}'s published fingerprints. For the list of fingerprints, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints).
