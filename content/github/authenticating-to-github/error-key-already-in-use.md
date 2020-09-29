---
title: 'Error: Key already in use'
intro: 'This error occurs when you try to [add a key](/articles/adding-a-new-ssh-key-to-your-github-account) that''s already been added to another account or repository.'
redirect_from:
  - /articles/error-key-already-in-use
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Finding where the key has been used

To determine where the key has already been used, open a terminal and type the `ssh` command. Use the `-i` flag to provide the path to the key you want to check:

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.product.product_location %} using a specific ssh key
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

The *username* in the response is the {% data variables.product.product_name %} account that the key is currently attached to. If the response looks something like "username/repo", the key has been attached to a repository as a [*deploy key*](/guides/managing-deploy-keys#deploy-keys).

### Fixing the issue

To resolve the issue, first remove the key from the other account or repository and then [add it to your account](/articles/adding-a-new-ssh-key-to-your-github-account).

If you don't have permissions to transfer the key, and can't contact a user who does, remove the keypair and [generate a brand new one](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### Deploy keys

Once a key has been attached to one repository as a deploy key, it cannot be used on another repository.  If you're running into this error while setting up deploy keys, see "[Managing deploy keys](/guides/managing-deploy-keys)."
