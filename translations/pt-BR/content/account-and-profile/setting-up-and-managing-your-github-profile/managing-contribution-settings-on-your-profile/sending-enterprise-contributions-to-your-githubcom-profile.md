---
title: Enviar contribuições corporativas para seu perfil do GitHub.com
intro: 'Você pode destacar seu trabalho no {% data variables.product.prodname_enterprise %} enviando as contagens de contribuição para seu perfil do {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Envie contribuições corporativas
---

## Sobre contribuições corporativas no seu perfil de {% data variables.product.prodname_dotcom_the_website %}

Seu perfil de {% data variables.product.prodname_dotcom_the_website %} mostra {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} contagens de contribuição nos últimos 90 dias. {% data reusables.github-connect.sync-frequency %} As contagens de contribuição de {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} são consideradas contribuições privadas. Os detalhes de commit mostrarão apenas a contagem de contribuição e que essas contribuições foram feitas em um ambiente {% data variables.product.prodname_enterprise %} fora de {% data variables.product.prodname_dotcom_the_website %}.

Você pode decidir se deseja mostrar contribuições privadas no seu perfil. Para obter mais informações, consulte "[Mostrar ou ocultar contribuições privadas no perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)".

Para obter mais informações sobre como as contribuições são calculadas, consulte "[Gerenciar gráficos de contribuição no perfil](/articles/managing-contribution-graphs-on-your-profile/)".

{% note %}

**Notas:**
- A conexão entre as contas é controlada pela [Declaração de privacidade do GitHub](/free-pro-team@latest/github/site-policy/github-privacy-statement/) e os usuário que habilitam a conexão concordam com os [Termos de serviço do GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service).

- Antes de você poder conectar seu perfil de {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} ao seu perfil de {% data variables.product.prodname_dotcom_the_website %}, o proprietário da sua empresa deverá habilitar {% data variables.product.prodname_github_connect %} e habilitar o compartilhamento de contribuições entre os ambientes. Para obter mais informações, entre em contato com o proprietário da empresa.

{% endnote %}

## Enviando suas contribuições corporativas para o perfil de {% data variables.product.prodname_dotcom_the_website %}

{% ifversion fpt or ghec %}

- Para enviar contribuições corporativas de {% data variables.product.prodname_ghe_server %} para seu perfil de {% data variables.product.prodname_dotcom_the_website %}, consulte "[Enviando contribuições corporativas para o seu perfil de {% data variables.product.prodname_dotcom_the_website %}](/enterprise-server/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)" na documentação de {% data variables.product.prodname_ghe_server %}.
- Para enviar contribuições corporativas de {% data variables.product.prodname_ghe_managed %} para seu perfil de {% data variables.product.prodname_dotcom_the_website %}, consulte "[Enviando contribuições corporativas para o seu perfil de {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)" na documentação de {% data variables.product.prodname_ghe_managed %}.

{% elsif ghes %}

1. Efetue o login em {% data variables.product.prodname_ghe_server %} e em {% data variables.product.prodname_dotcom_the_website %}.
1. No canto superior direito de qualquer página do {% data variables.product.prodname_ghe_server %}, clique na sua foto do perfil e em **Configurações**. ![Ícone Settings (Configurações) na barra de usuário](/assets/images/help/settings/userbar-account-settings.png)
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. Revise os recursos que {% data variables.product.prodname_ghe_server %} terá acesso a partir da sua conta {% data variables.product.prodname_dotcom_the_website %} e então, clique em **Authorize** (Autorizar). ![Autorizar conexão entre o GitHub Enterprise Server e GitHub.com](/assets/images/help/settings/authorize-ghe-to-connect-to-dotcom.png)
{% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% elsif ghae %}

1. Efetue o login em {% data variables.product.prodname_ghe_managed %} e em {% data variables.product.prodname_dotcom_the_website %}.
1. No canto superior direito de qualquer página do {% data variables.product.prodname_ghe_managed %}, clique na sua foto do perfil e em **Configurações**. ![Ícone Settings (Configurações) na barra de usuário](/assets/images/help/settings/userbar-account-settings.png)
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.authorize-connection %}
{% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
