---
title: Enabling automatic user license sync for your enterprise
intro: 'You can manage license usage across your {% data variables.product.prodname_enterprise %} deployments by automatically syncing user licenses from {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable automatic user license synchronization.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
---

## Sobre a sincronização de licenças

After you enable license synchronization, you'll be able to view license usage for your entire enterprise across {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. O {% data variables.product.prodname_github_connect %} sincroniza a licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %} semanalmente. Para obter mais informações, consulte "[Gerenciar a sua licença para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)."

Você também pode fazer upload manualmente das informações de licença do usuário do {% data variables.product.prodname_ghe_server %} para o {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

## Habilitar a sincronização de licenças

Before enabling license synchronization on {% data variables.product.product_location %}, you must enable {% data variables.product.prodname_github_connect %}. For more information, see "[Managing {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)."

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. Em "Server can sync user license count and usage" (Servidor pode sincronizar contagem e uso de licenças de usuário), selecione **Enabled** (Habilitado) no menu suspenso. ![Menu suspenso para habilitar a sincronização automática de licenças de usuário](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
