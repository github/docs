---
title: Preparar la instancia de origen de GitHub Enterprise Server
intro: 'Antes de migrar datos desde {% data variables.product.prodname_ghe_server %}, asegúrate de tener la autenticación y el acceso administrativo adecuados a la instancia.'
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance/
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
versions:
  enterprise-server: '*'
---

1. Verifica que eres un administrador del sitio en el origen {% data variables.product.prodname_ghe_server %}. La mejor manera de hacerlo es verificar que puedes usar [SSH en la instancia](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

2. {% data reusables.enterprise_migrations.token-generation %} en la instancia de origen {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_migrations.make-a-list %}
