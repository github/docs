---
title: Habilitar contribuições unificadas entre o GitHub Enterprise Server e o GitHub.com
intro: 'Depois de habilitar o {% data variables.product.prodname_github_connect %}, você pode permitir que os integrantes do {% data variables.product.prodname_ghe_cloud %} destaquem o próprio trabalho no {% data variables.product.prodname_ghe_server %} enviando as contagens de contribuição para seus respectivos perfis do {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified contributions between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
---

Como administrador do site, você pode permitir que os usuários finais enviem as contagens de contribuição anônimas do trabalho deles no {% data variables.product.prodname_ghe_server %} pelos respectivos gráficos de contribuição no {% data variables.product.prodname_dotcom_the_website %}.

Após habilitar o {% data variables.product.prodname_github_connect %} e o {% data variables.product.prodname_unified_contributions %} nos dois ambientes, os usuários finais da instância podem se conectar a suas respectivas contas do {% data variables.product.prodname_dotcom_the_website %} e enviar contagens de contribuição do {% data variables.product.prodname_ghe_server %} para o {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.github-connect.sync-frequency %} Para obter mais informações, consulte "[Enviar contribuições do {% data variables.product.prodname_ghe_server %} para o perfil do {% data variables.product.prodname_dotcom_the_website %}](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)".

Se o administrador do site desabilitar a funcionalidade ou se os desenvolvedores interromperem a conexão, as contagens de contribuição do {% data variables.product.prodname_ghe_server %} serão excluídas no {% data variables.product.prodname_dotcom_the_website %}. Se o desenvolvedor reconectar os perfis após desabilitá-los, as contagens de contribuição dos últimos 90 dias serão restauradas.

O {% data variables.product.prodname_ghe_server %} envia a contagem de contribuição e a origem **somente** para os usuários conectados ({% data variables.product.prodname_ghe_server %}). Nenhuma informação sobre a contribuição ou sobre como ela foi feita é enviada.

Antes de habilitar o {% data variables.product.prodname_unified_contributions %} na {% data variables.product.product_location_enterprise %}, conecte a {% data variables.product.product_location_enterprise %} ao {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)".

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
4. Em "Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}" (Usuários podem compartilhar contagens de contribuição com o {% data variables.product.prodname_dotcom_the_website %}), clique em **Request access** (Solicitar acesso). ![Solicitar acesso à opção de contribuições unificadas](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
5. [Faça login](https://enterprise.github.com/login) no site do {% data variables.product.prodname_ghe_server %} para obter mais instruções.

Ao solicitar acesso, você será redirecionado para o site do {% data variables.product.prodname_ghe_server %} a fim de verificar seus termos de serviço. Se a {% data variables.product.product_location_enterprise %} usar os termos de serviço padrão, a solicitação redirecionará você automaticamente para as instruções sobre como ativar o {% data variables.product.prodname_unified_contributions %}. Se você estiver usando termos de serviço personalizados, vamos registrar sua solicitação e entrar em contato para configurar o acesso.
