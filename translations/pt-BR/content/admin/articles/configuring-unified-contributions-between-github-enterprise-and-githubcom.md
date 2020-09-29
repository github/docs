---
title: Configurar contribuições unificadas entre o GitHub Enterprise e o GitHub.com
intro: 'Como administrador do site, se tiver habilitado o {% data variables.product.prodname_github_connect %}, você poderá permitir que os usuários finais vejam as contagens de contribuição anônimas do trabalho feito no {% data variables.product.prodname_enterprise %} em seus respectivos gráficos de contribuição do {% data variables.product.prodname_dotcom_the_website %}.'
hidden: true
redirect_from:
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-githubcom
versions:
  enterprise-server: '*'
---


Após habilitar o {% data variables.product.prodname_github_connect %} e o {% data variables.product.prodname_unified_contributions %} nos dois ambientes, os usuários finais na sua instância podem se conectar a suas respectivas contas do {% data variables.product.prodname_dotcom_the_website %} e enviar contagens de contribuição do {% data variables.product.prodname_enterprise %} para o {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte os artigos "[Habilitar o {% data variables.product.prodname_unified_contributions %} entre o {% data variables.product.prodname_enterprise %} e o {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com)" e "[Enviar suas contribuições do {% data variables.product.prodname_ghe_server %} para o perfil do {% data variables.product.prodname_dotcom_the_website %}](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)".

Se o administrador do site desativar a funcionalidade ou se os desenvolvedores interromperem a conexão, as contagens de contribuição do {% data variables.product.prodname_enterprise %} serão excluídas no {% data variables.product.prodname_dotcom_the_website %}. Se o desenvolvedor reconectar os perfis após desabilitá-los, as contagens de contribuição dos últimos 90 dias serão restauradas.

1.  No shell administrativo, habilite a configuração do {% data variables.product.prodname_unified_contributions %} na {% data variables.product.product_location_enterprise %}:
  ```shell
  $ ghe-config 'app.github.dotcom-contributions-configurable' 'true'
  $ ghe-config-apply
  ```
2. Retorne ao {% data variables.product.prodname_enterprise %}.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.business-settings %}
{% data reusables.enterprise-accounts.github-connect-tab %}
7. Em "Usuários podem compartilhar contagens de contribuição no {% data variables.product.prodname_dotcom_the_website %}", use o menu suspenso e clique em **Habilitado**.
8. Após seu redirecionamento ao {% data variables.product.prodname_dotcom_the_website %} para gravar suas contas de contribuição no {% data variables.product.prodname_enterprise %} nas contas dos usuários conectados, você deverá atualizar o {% data variables.product.prodname_github_app %}. Um administrador da organização conectada do {% data variables.product.prodname_dotcom_the_website %} deve aprovar a atualização do {% data variables.product.prodname_github_app %} com permissões de `external_contributions`.

