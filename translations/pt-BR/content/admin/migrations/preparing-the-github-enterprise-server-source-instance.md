---
title: Preparar a instância de origem do GitHub Enterprise Server
intro: 'Antes de migrar os dados do {% data variables.product.prodname_ghe_server %}, verifique se você tem a autenticação e o acesso administrativo adequados à instância.'
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance/
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
versions:
  enterprise-server: '*'
---

1. Verifique se você é administrador do site na origem do {% data variables.product.prodname_ghe_server %}. A melhor maneira de fazer isso é verificar se você consegue fazer [SSH na instância](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

2. {% data reusables.enterprise_migrations.token-generation %} na instância de origem do {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_migrations.make-a-list %}
