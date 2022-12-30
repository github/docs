---
title: Autorizando Aplicativos OAuth
intro: 'Você pode conectar sua identidade do {% data variables.product.product_name %} a aplicativos de terceiros usando o OAuth. Ao autorizar um {% data variables.product.prodname_oauth_app %}, você deve ter certeza de que se trata de um aplicativo confiável, examinar por quem ele foi desenvolvido e analisar os tipos de informação que o aplicativo quer acessar.'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 7d116f8fc5117cdcbdbd5582e007351c47b2d55d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184017'
---
Quando um {% data variables.product.prodname_oauth_app %} quiser identificá-lo por sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, você verá uma página com as informações de contato do desenvolvedor do aplicativo e uma lista dos dados específicos que estão sendo solicitados.

{% ifversion fpt or ghec %}

{% tip %}

**Dica:** você precisa [verificar seu endereço de email](/articles/verifying-your-email-address) antes de autorizar um {% data variables.product.prodname_oauth_app %}.

{% endtip %}

{% endif %}

## Acesso do {% data variables.product.prodname_oauth_app %}

Os {% data variables.product.prodname_oauth_apps %} podem ter acesso de *leitura* ou de *gravação* nos dados do {% data variables.product.product_name %}.

- O **acesso de leitura** só permite que um aplicativo *visualize* seus dados.
- O **acesso de gravação** permite que um aplicativo *altere* seus dados.

{% tip %}

**Dica:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### Sobre os escopos do OAuth

Os *escopos* são grupos de permissões nomeados que um {% data variables.product.prodname_oauth_app %} pode solicitar para acessar dados públicos e privados.

Quando quiser usar um {% data variables.product.prodname_oauth_app %} que se integre ao {% data variables.product.product_name %}, esse app permitirá que você saiba qual tipo de acesso aos seus dados será necessário. Se você conceder acesso ao app, este poderá executar ações em seu nome, como ler ou modificar os dados. Por exemplo, se você quiser usar um aplicativo que solicite o escopo de `user:email`, o aplicativo terá acesso somente leitura aos seus endereços de email privados. Para obter mais informações, confira "[Sobre os escopos dos {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)".

{% tip %}

**Observação:** atualmente, não é possível definir o escopo do acesso ao código-fonte como somente leitura.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### Tipos de dados solicitados

{% data variables.product.prodname_oauth_apps %} pode solicitar vários tipos de dados.

| Tipo de dados | Descrição |
| --- | --- |
| Status do commit | Você pode conceder acesso para um app relatar seu status de commit. O acesso ao status do commit permite que os apps determinem se uma compilação foi bem-sucedida em relação a um commit específico. Os apps não terão acesso ao seu código, mas poderão ler e gravar informações de status em relação a um commit específico. |
| Implantações | O acesso ao status da implantação permite que os apps determinem se uma implantação foi bem-sucedida em relação a um commit específico para repositórios públicos e privados. Os apps não terão acesso ao seu código. |
| Gists | O acesso de [gist](https://gist.github.com) permite que os aplicativos leiam ou gravem conteúdo dos seus gists públicos e secretos. |
| Ganchos | O acesso de [webhooks](/webhooks) permite que os aplicativos leiam ou gravem configurações de gancho nos repositórios que você gerencia. |
| Notificações | O acesso à notificação permite que os apps leiam as notificações do {% data variables.product.product_name %}, como comentários sobre problemas ou pull requests. No entanto, os apps continuam sem poder acessar nada nos repositórios. |
| Organizações e equipes | O acesso às organizações e equipes permite que os apps acessem e gerenciem a associação à organização e à equipe. |
| Dados pessoais do usuário | Os dados do usuário incluem informações encontradas no seu perfil de usuário, como nome, endereço de e-mail e localização. |
| Repositórios | As informações de repositório incluem os nomes dos contribuidores, os branches que você criou e os arquivos reais dentro do repositório. Os apps podem solicitar acesso para repositórios públicos ou privados em um nível amplo de usuário. |
| Exclusão de repositório | Os apps podem solicitar a exclusão de repositórios que você administra, mas não terão acesso ao seu código. |{% ifversion projects-oauth-scope %}
| Projetos | Acesso {% data variables.projects.projects_v2 %} de usuário e da organização. Os aplicativos podem solicitar acesso de leitura/gravação ou somente leitura. |{% endif %}

## Solicitar permissões atualizadas

Quando {% data variables.product.prodname_oauth_apps %} solicitar novas permissões de acesso, você será notificado sobre as diferenças entre as permissões atuais e as novas permissões.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} e organizações

Quando você autoriza {% data variables.product.prodname_oauth_app %} para sua conta pessoal, também verá como essa autorização afetará cada organização da qual você é membro.

- **Para as organizações *com* restrições de acesso do {% data variables.product.prodname_oauth_app %}, você pode solicitar que os administradores da organização aprovem o aplicativo para uso nessa organização.** Se a organização não aprovar o aplicativo, o aplicativo só poderá acessar os recursos públicos da organização. Se você for um administrador da organização, poderá [aprovar o aplicativo](/articles/approving-oauth-apps-for-your-organization) por conta própria.

- **Para as organizações *sem* restrições de acesso do {% data variables.product.prodname_oauth_app %}, o aplicativo será autorizado automaticamente para acesso aos recursos dessa organização.** Por esse motivo, você deve ter cuidado com quais {% data variables.product.prodname_oauth_apps %} você aprova para acesso aos recursos da sua conta pessoal, bem como a todos os recursos da organização.

Se você pertencer a qualquer organização com SSO (logon único) SAML habilitado e tiver criado uma identidade vinculada para essa organização autenticando via SAML no passado, deverá ter uma sessão SAML ativa para cada organização sempre que autorizar um {% data variables.product.prodname_oauth_app %}.

{% note %}

**Nota:** se você estiver encontrando problemas com um {% data variables.product.prodname_oauth_app %} ou {% data variables.product.prodname_github_app %} autorizado acessando uma organização protegida por SAML, talvez seja necessário revogar o aplicativo de sua página [{% data variables.product.prodname_github_apps %} autorizado](https://github.com/settings/applications) ou [{% data variables.product.prodname_oauth_apps %} autorizado](https://github.com/settings/apps/authorizations), acessar a organização para autenticar e estabelecer uma sessão SAML ativa e tentar autorizar novamente o aplicativo por meio do acesso.

{% endnote %}

## Leitura adicional

- "[Sobre as restrições de acesso do {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"
- "[Como autorizar Aplicativos do GitHub](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[Suporte ao {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-support)"

{% endif %}
