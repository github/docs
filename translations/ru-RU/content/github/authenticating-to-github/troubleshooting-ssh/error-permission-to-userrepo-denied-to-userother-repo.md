---
title: 'Error: Permission to user/repo denied to user/other-repo'
intro: 'This error means the key you are pushing with is attached to another repository as a deploy key, and does not have access to the repository you are trying to push to.'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

To fix this, remove the deploy key from the repository, and [add the key to your user account](/articles/adding-a-new-ssh-key-to-your-github-account) instead.

If the key you are using is intended to be a deploy key, check out [our guide on deploy keys](/guides/managing-deploy-keys) for more details.
