---
title: GitHub's SSH key fingerprints
intro: Public key fingerprints can be used to validate a connection to a remote server.
redirect_from:
  - /articles/what-are-github-s-ssh-key-fingerprints
  - /articles/github-s-ssh-key-fingerprints
  - /articles/githubs-ssh-key-fingerprints
  - /github/authenticating-to-github/githubs-ssh-key-fingerprints
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: SSH key fingerprints
---
These are {% data variables.product.prodname_dotcom %}'s public key fingerprints:

{% data reusables.ssh.fingerprints %}

You can add the following ssh key entries to your `~/.ssh/known_hosts` file to avoid manually verifying {% data variables.product.prodname_dotcom %} hosts:

{% data reusables.ssh.known_hosts %}

For more information, see "[AUTOTITLE](/rest/meta/meta#get-github-meta-information)."
