---
title: 'Error: Permission to user/repo denied to other-user'
intro: This error means the key you are pushing with is attached to an account which does not have access to the repository.
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-other-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-user
---
To fix this, the owner of the repository (`user`) needs to add your account (`other-user`) as a collaborator on the repository or to a team that has write access to the repository.
