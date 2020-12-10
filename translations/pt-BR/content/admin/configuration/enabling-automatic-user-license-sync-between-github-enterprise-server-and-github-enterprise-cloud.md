---
title: Habilitar a sincronização automática de licenças de usuários entre o GitHub Enterprise Server e o GitHub Enterprise Cloud
intro: 'É possível conectar a {% data variables.product.product_location_enterprise %} ao {% data variables.product.prodname_ghe_cloud %} e permitir que o {% data variables.product.prodname_ghe_server %} faça upload das informações de licença do usuário para a sua conta corporativa no {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Administradores de sites para {% data variables.product.prodname_ghe_server %} que também são proprietários de uma conta corporativa ou organização conectada do {% data variables.product.prodname_ghe_cloud %} podem ativar a sincronização automática de licença de usuário.'
versions:
  enterprise-server: '*'
---

### Sobre a sincronização de licenças

Depois de habilitar a sincronização de licença, você poderá visualizar o uso da licença em toda a sua conta corporativa, no {% data variables.product.prodname_ghe_server %} e no {% data variables.product.prodname_ghe_cloud %}. O {% data variables.product.prodname_github_connect %} sincroniza a licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %} semanalmente. Para obter mais informações, consulte "[Gerenciar sua licença {% data variables.product.prodname_enterprise %}](/enterprise/{{currentVersion}}/admin/installation/managing-your-github-enterprise-server-license)".

Você também pode fazer upload manualmente das informações de licença do usuário do {% data variables.product.prodname_ghe_server %} para o {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

### Habilitar a sincronização de licenças

Antes de habilitar a sincronização de licença na {% data variables.product.product_location_enterprise %}, conecte a {% data variables.product.product_location_enterprise %} ao {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Em "Server can sync user license count and usage" (Servidor pode sincronizar contagem e uso de licenças de usuário), selecione **Enabled** (Habilitado) no menu suspenso. ![Menu suspenso para habilitar a sincronização automática de licenças de usuário](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
