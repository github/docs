---
title: 'Error: Permission to user/repo denied to other-user'
intro: このエラーは、プッシュしているキーが、リポジトリへのアクセス権を持たないアカウントに添付されていることを示します。
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

これを修正するには、リポジトリの所有者 (`user`) が、あなたのアカウント (`other-user`) をリポジトリのコラボレーターとして追加するか、リポジトリへの書き込みアクセスを持つチームに追加する必要があります。
