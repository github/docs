---
title: 'Error: Permission to user/repo denied to user/other-repo'
intro: このエラーは、プッシュに使用しているキーが、他のリポジトリにデプロイキーとして添付されており、プッシュ先のリポジトリへのアクセス権がないことを示しています。
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
---

To fix this, remove the deploy key from the repository, and [add the key to your personal account](/articles/adding-a-new-ssh-key-to-your-github-account) instead.

使用中のキーが、デプロイキーとしての使用が意図されたものである場合は、[デプロイキーのガイド](/guides/managing-deploy-keys)で詳細をご確認ください。
