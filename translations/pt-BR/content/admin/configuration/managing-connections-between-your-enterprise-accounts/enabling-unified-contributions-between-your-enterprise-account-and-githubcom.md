---
title: Habilitar contribuições unificadas entre a conta corporativa e o GitHub.com
shortTitle: Habilitar contribuições unificadas
intro: 'Depois de habilitar o {% data variables.product.prodname_github_connect %}, você pode permitir que os integrantes do {% data variables.product.prodname_ghe_cloud %} destaquem o próprio trabalho no {% data variables.product.product_name %} enviando as contagens de contribuição para seus respectivos perfis do {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified contributions between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
---

{% data reusables.github-connect.beta %}

Como proprietário de uma empresa, você pode permitir que os usuários finais enviem contagens de contribuições anônimas pelo trabalho deles de {% data variables.product.product_location %} para seu gráfico de contribuição de {% data variables.product.prodname_dotcom_the_website %}.

Após habilitar a opção {% data variables.product.prodname_github_connect %} e habilitar {% data variables.product.prodname_unified_contributions %} em ambos os ambientes usuários finais na sua conta corporativa poderão conectar-se às suas contas de {% data variables.product.prodname_dotcom_the_website %} e enviar contagens de contribuição de {% data variables.product.product_name %} para {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.github-connect.sync-frequency %} Para obter mais informações, consulte "[Enviar contribuições corporativas para seu perfil de {% data variables.product.prodname_dotcom_the_website %}](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)".

Se o proprietário da empresa desabilitar a funcionalidade ou o os desenvolvedores optarem pelo cancelamento da conexão, as contagens de contribuição de {% data variables.product.product_name %} serão excluídas em {% data variables.product.prodname_dotcom_the_website %}. Se o desenvolvedor reconectar os perfis após desabilitá-los, as contagens de contribuição dos últimos 90 dias serão restauradas.

O {% data variables.product.product_name %} envia a contagem de contribuição e a origem **somente** para os usuários conectados ({% data variables.product.product_name %}). Nenhuma informação sobre a contribuição ou sobre como ela foi feita é enviada.

Antes de habilitar o {% data variables.product.prodname_unified_contributions %} no {% data variables.product.product_location %}, conecte o {% data variables.product.product_location %} ao {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectando sua conta corporativa a {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Entre na {% data variables.product.product_location %} e no {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Em "Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}" (Usuários podem compartilhar contagens de contribuição com o {% data variables.product.prodname_dotcom_the_website %}), clique em **Request access** (Solicitar acesso). ![Request access to unified contributions option](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. [Faça login](https://enterprise.github.com/login) no site do {% data variables.product.prodname_ghe_server %} para obter mais instruções.

Ao solicitar acesso, podemos redirecioná-lo para o site {% data variables.product.prodname_ghe_server %} para verificar os termos de serviço atuais.
{% endif %}
