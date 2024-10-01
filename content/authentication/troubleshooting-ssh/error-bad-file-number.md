---
title: 'Error: Bad file number'
intro: This error usually means you were unable to connect to the server. Often this is caused by firewalls and proxy servers.
redirect_from:
  - /articles/error-bad-file-number
  - /github/authenticating-to-github/error-bad-file-number
  - /github/authenticating-to-github/troubleshooting-ssh/error-bad-file-number
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - SSH
---
When running remote Git commands or SSH, your connection might time out:

```shell
$ ssh -vT git@{% data variables.product.product_url %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Connecting to {% data variables.product.product_url %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.product.product_url %} port 22: Connection timed out
> ssh: connect to host {% data variables.product.product_url %} port 22: Bad file number
```

## Solving the issue

### Use HTTPS

Often, the simplest solution is to simply avoid SSH entirely. Most firewalls and proxies allow HTTPS traffic without issue. To take advantage of this, change [the remote URL](/get-started/getting-started-with-git/about-remote-repositories) you're using:

```shell
$ git clone https://{% data variables.product.product_url %}/USERNAME/REPO-NAME.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

### Test from a different network

If you can connect the computer to another network that doesn't have a firewall, you can try testing your SSH connection to {% data variables.product.product_name %}. If everything works as it should, contact your network administrator for help on changing the firewall settings to allow your SSH connection to {% data variables.product.product_name %} to succeed.

{% ifversion fpt or ghec %}

### Using SSH over the HTTPS port

If using HTTPS is not an option, and your firewall admin refuses to allow SSH connections, you can try using [SSH over the HTTPS port](/authentication/troubleshooting-ssh/using-ssh-over-the-https-port) instead.

{% endif %}

{% ifversion fpt or ghec %}

## Further reading

* "[AUTOTITLE](/get-started/using-github/troubleshooting-connectivity-problems)"

{% endif %}
