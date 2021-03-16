---
title: '错误：用户/仓库拒绝用户/其他仓库的权限'
intro: '此错误意味着您正在推送的密钥作为 deploy key 附加到另一个仓库，并且对您尝试推送到的仓库的没有访问权限。'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

要解决此问题，请从仓库中删除部署密钥，改为[将密钥添加到您的用户帐户](/articles/adding-a-new-ssh-key-to-your-github-account) 。

如果您正在使用的密钥旨在作为一个 deploy key，请查看[我们的 deploy key 指南](/guides/managing-deploy-keys)了解详细信息。
