---
title: GitHub's SSH & GPG key fingerprints
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
shortTitle: SSH & GPG key fingerprints
---

## SSH

These are {% data variables.product.prodname_dotcom %}'s public key fingerprints:

{% data reusables.ssh.fingerprints %}

You can add the following ssh key entries to your `~/.ssh/known_hosts` file to avoid manually verifying {% data variables.product.prodname_dotcom %} hosts:

{% data reusables.ssh.known_hosts %}

For more information, see [AUTOTITLE](/rest/meta/meta#get-github-meta-information).

## GPG

This GPG key is used to sign {% data variables.product.prodname_cli %} archive and package releases (for example, Debian and RPM repositories served from `cli.github.com`). It is not used by {% data variables.product.prodname_dotcom %} to sign commits or releases in the web UI.

> [!IMPORTANT]
> _The key expired in Sep. 2024. [It was updated](https://github.com/orgs/community/discussions/138304) and will be valid until Sep. 5, 2026._

Fingerprint is:

    2C6106201985B60E6C7AC87323F3D4EA75716059

Key ID is:

    23F3D4EA75716059

For cli/terminal verifications:

    2C61 0620 1985 B60E 6C7A C873 23F3 D4EA 7571 6059

It is available at [https://cli.github.com/packages/githubcli-archive-keyring.gpg](https://cli.github.com/packages/githubcli-archive-keyring.gpg) and on the following keyservers:

1. `keys.openpgp.org`
2. `keyserver.ubuntu.com`
