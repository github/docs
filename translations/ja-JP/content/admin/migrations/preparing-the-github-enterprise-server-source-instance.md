---
title: GitHub Enterprise Server ソースインスタンスを準備する
intro: '{% data variables.product.prodname_ghe_server %} からデータを移行する前に、インスタンスへの適切な認証と管理アクセスを持っているか確認してください。'
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance/
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
versions:
  enterprise-server: '*'
---

1. {% data variables.product.prodname_ghe_server %} ソースのサイト管理者であることを確認します。 そのための最善の方法は、[インスタンスへのSSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)が可能であることを確認することです。

2. {% data variables.product.prodname_ghe_server %} ソースインスタンス上での {% data reusables.enterprise_migrations.token-generation %}。

{% data reusables.enterprise_migrations.make-a-list %}
