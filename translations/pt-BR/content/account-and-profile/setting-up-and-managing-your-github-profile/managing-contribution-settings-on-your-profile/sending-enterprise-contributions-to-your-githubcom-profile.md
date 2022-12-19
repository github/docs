---
title: Enviar contribuições corporativas para seu perfil do GitHub.com
intro: 'Você pode destacar seu trabalho no {% data variables.product.prodname_enterprise %} enviando as contagens de contribuição ao seu perfil do {% data variables.product.prodname_dotcom_the_website %}.'
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
shortTitle: Send enterprise contributions
ms.openlocfilehash: 6fb1803f3a93dd03af24ce9ea3f360e579d7dbd1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079406'
---
## Sobre contribuições corporativas no seu perfil de {% data variables.product.prodname_dotcom_the_website %}

Seu perfil de {% data variables.product.prodname_dotcom_the_website %} mostra {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} contagens de contribuição nos últimos 90 dias. {% data reusables.github-connect.sync-frequency %} As contagens de contribuição de {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} são consideradas contribuições privadas. Os detalhes de commit mostrarão apenas a contagem de contribuição e que essas contribuições foram feitas em um ambiente {% data variables.product.prodname_enterprise %} fora de {% data variables.product.prodname_dotcom_the_website %}.

Você pode decidir se deseja mostrar contribuições privadas no seu perfil. Para obter mais informações, confira "[Como divulgar ou ocultar suas contribuições privadas no seu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)".

Para obter mais informações sobre como as contribuições são calculadas, confira "[Como gerenciar grafos de contribuição no seu perfil](/articles/managing-contribution-graphs-on-your-profile/)".

{% note %}

**Observações:**
- A conexão entre suas contas é regida pela [Política de Privacidade do GitHub](/free-pro-team@latest/github/site-policy/github-privacy-statement/) e os usuários que habilitam a conexão concordam com os [Termos de Serviço do GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service).

- Antes de você poder conectar seu perfil de {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} ao seu perfil de {% data variables.product.prodname_dotcom_the_website %}, o proprietário da sua empresa deverá habilitar {% data variables.product.prodname_github_connect %} e habilitar o compartilhamento de contribuições entre os ambientes. Para obter mais informações, entre em contato com o proprietário da empresa.

{% endnote %}

## Enviando suas contribuições corporativas para o perfil de {% data variables.product.prodname_dotcom_the_website %}

{% ifversion fpt or ghec %}

- Para enviar contribuições da empresa do {% data variables.product.prodname_ghe_server %} para o perfil do {% data variables.product.prodname_dotcom_the_website %}, confira "[Como enviar as contribuições da empresa para seu perfil do {% data variables.product.prodname_dotcom_the_website %}](/enterprise-server/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)" na documentação do {% data variables.product.prodname_ghe_server %}.
- Para enviar contribuições da empresa do {% data variables.product.prodname_ghe_managed %} para o seu perfil do {% data variables.product.prodname_dotcom_the_website %}, confira "[Como enviar contribuições da empresa para o perfil do {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile) " na documentação do {% data variables.product.prodname_ghe_managed %}.

{% elsif ghes %}

1. Efetue o login em {% data variables.product.prodname_ghe_server %} e em {% data variables.product.prodname_dotcom_the_website %}.
1. No {% data variables.product.prodname_ghe_server %}, no canto superior direito de qualquer página, clique na foto do seu perfil e clique em **Configurações**.
   ![Ícone Configurações na barra de usuário](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. Revise os recursos que o {% data variables.product.prodname_ghe_server %} acessará da sua conta do {% data variables.product.prodname_dotcom_the_website %} e clique em **Autorizar**.
   ![Autorizar a conexão entre o GitHub Enterprise Server e o GitHub.com](/assets/images/help/settings/authorize-ghe-to-connect-to-dotcom.png) {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% elsif ghae %}

1. Efetue o login em {% data variables.product.prodname_ghe_managed %} e em {% data variables.product.prodname_dotcom_the_website %}.
1. No {% data variables.product.prodname_ghe_managed %}, no canto superior direito de qualquer página, clique na foto do seu perfil e clique em **Configurações**.
   ![Ícone de Configurações na barra de usuário](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %} {% data reusables.github-connect.authorize-connection %} {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
