---
title: 已删除或缺少的 SSH 密钥
intro: '作为安全预防措施，{% data variables.product.prodname_dotcom %} 会自动删除一年内未使用过的 SSH 密钥。'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
versions:
  free-pro-team: '*'
topics:
  - SSH
---

{% data variables.product.prodname_dotcom %} 会自动删除非活动的 SSH 密钥以确保账户安全，例如在某人离职或丢失计算机后。

可以通过查看帐户的安全日志，检查是否在一年内未使用过 SSH 密钥。 更多信息请参阅“[查看您的安全日志](/articles/reviewing-your-security-log/)”。

在删除非活动 SSH 密钥后，必须生成一个新的 SSH 密钥并将其与帐户关联。 更多信息请参阅“[生成新的 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)”和“[新增 SSH 密钥到 GitHub 帐户](/articles/adding-a-new-ssh-key-to-your-github-account/)”。
