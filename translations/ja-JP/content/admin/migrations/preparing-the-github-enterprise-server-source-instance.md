---
title: GitHub Enterprise Server ソースインスタンスを準備する
intro: '{{ site.data.variables.product.prodname_ghe_server }} からデータを移行する前に、インスタンスへの適切な認証と管理アクセスを持っているか確認してください。'
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance/
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
versions:
  enterprise-server: '*'
---

1. {{ site.data.variables.product.prodname_ghe_server }} ソースのサイト管理者であることを確認します。 そのための最善の方法は、[インスタンスへのSSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)が可能であることを確認することです。

2. {{ site.data.variables.product.prodname_ghe_server }} ソースインスタンス上での {{ site.data.reusables.enterprise_migrations.token-generation }}。

{{ site.data.reusables.enterprise_migrations.make-a-list }}
