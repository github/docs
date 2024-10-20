---
title: 'Error: Key already in use'
intro: 'This error occurs when you try to [add a key](/articles/adding-a-new-ssh-key-to-your-github-account) that''s already been added to another account or repository.'
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
  - /github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - SSH
---
## Finding where the key has been used

To determine where the key has already been used, open a terminal and type the `ssh` command. Use the `-i` flag to provide the path to the key you want to check:

```shell
$ ssh -T -ai ~/.ssh/id_rsa git@{% data variables.product.product_url %}
# Connect to {% data variables.location.product_location %} using a specific ssh key
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

The _username_ in the response is the account on {% data variables.location.product_location %} that the key is currently attached to. If the response looks something like "username/repo", the key has been attached to a repository as a [_deploy key_](/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys).

To force SSH to use only the key provided on the command line, use `-o` to add the `IdentitiesOnly=yes` option:

```shell
ssh -v -o "IdentitiesOnly=yes" -i ~/.ssh/id_rsa git@{% data variables.product.product_url %}
```

## Fixing the issue

To resolve the issue, first remove the key from the other account or repository and then [add it to your account](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

If you don't have permissions to transfer the key, and can't contact a user who does, remove the keypair and [generate a brand new one](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Deploy keys

Once a key has been attached to one repository as a deploy key, it cannot be used on another repository.  If you're running into this error while setting up deploy keys, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/managing-deploy-keys)."
