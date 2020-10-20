---
title: Autorizar aplicativos OAuth
intro: 'Você pode conectar sua identidade do {% data variables.product.product_name %} a aplicativos de terceiros usando o OAuth. Ao autorizar um {% data variables.product.prodname_oauth_app %}, você deve ter certeza de que se trata de um aplicativo confiável, examinar por quem ele foi desenvolvido e analisar os tipos de informação que o aplicativo quer acessar.'
redirect_from:
  - /articles/authorizing-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Quando um {% data variables.product.prodname_oauth_app %} quiser identificar você pela sua conta do {% data variables.product.product_name %}, será exibida uma página com as informações de contato do desenvolvedor do aplicativo e uma lista dos dados específicos que estão sendo solicitados.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Dica:** você deve [verificar seu endereço de e-mail](/articles/verifying-your-email-address) antes de autorizar um {% data variables.product.prodname_oauth_app %}.

{% endtip %}

{% endif %}

### Acesso do {% data variables.product.prodname_oauth_app %}

Os {% data variables.product.prodname_oauth_app %}s podem ter acesso de *leitura* ou *gravação* aos seus dados no {% data variables.product.product_name %}.

- O **acesso de leitura** permite que um app apenas *observe* os dados.
- O **acesso de gravação** permite que um app *altere* os dados.

{% tip %}

**Dica:** {% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

#### Sobre os escopos do OAuth

Os *escopos* são grupos de permissões nomeados que um {% data variables.product.prodname_oauth_app %} pode solicitar para acessar dados públicos e privados.

Quando quiser usar um {% data variables.product.prodname_oauth_app %} que se integre ao {% data variables.product.product_name %}, esse app permitirá que você saiba qual tipo de acesso aos seus dados será necessário. Se você conceder acesso ao app, este poderá executar ações em seu nome, como ler ou modificar os dados. Por exemplo, se você desejar usar um app que solicite o escopo `user:email`, o app terá acesso somente leitura aos seus endereços de e-mail privados. Para obter mais informações, consulte "[Sobre escopos para {% data variables.product.prodname_oauth_app %}s](//apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)".

{% tip %}

**Observação:** no momento, não é possível usar o escopo de acesso de código-fonte para somente leitura.

{% endtip %}

#### Tipos de dados solicitados

Os {% data variables.product.prodname_oauth_app %} podem solicitar vários tipos de dados.

| Tipos de dados            | Descrição                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status do commit          | Você pode conceder acesso para um app relatar seu status de commit. O acesso ao status do commit permite que os apps determinem se uma compilação foi bem-sucedida em relação a um commit específico. Os apps não terão acesso ao seu código, mas poderão ler e gravar informações de status em relação a um commit específico. |
| Implantações              | O acesso ao status da implantação permite que os apps determinem se uma implantação foi bem-sucedida em relação a um commit específico para repositórios públicos e privados. Os apps não terão acesso ao seu código.                                                                                                           |
| Gists                     | O acesso ao [Gist](https://gist.github.com) permite que os apps leiam ou gravem em seus Gists secretos e públicos.                                                                                                                                                                                                              |
| Hooks                     | O acesso aos [webhooks](/webhooks) permite que os apps leiam ou gravem configurações de hook em repositórios que você gerencia.                                                                                                                                                                                                 |
| Notificações              | O acesso à notificação permite que os apps leiam as notificações do {% data variables.product.product_name %}, como comentários sobre problemas ou pull requests. No entanto, os apps continuam sem poder acessar nada nos repositórios.                                                                                        |
| Organizações e equipes    | O acesso às organizações e equipes permite que os apps acessem e gerenciem a associação à organização e à equipe.                                                                                                                                                                                                               |
| Dados pessoais do usuário | Os dados do usuário incluem informações encontradas no seu perfil de usuário, como nome, endereço de e-mail e localização.                                                                                                                                                                                                      |
| Repositórios              | As informações de repositório incluem os nomes dos contribuidores, os branches que você criou e os arquivos reais dentro do repositório. Os apps podem solicitar acesso para repositórios públicos ou privados em um nível amplo de usuário.                                                                                    |
| Exclusão de repositório   | Os apps podem solicitar a exclusão de repositórios que você administra, mas não terão acesso ao seu código.                                                                                                                                                                                                                     |

### Solicitar permissões atualizadas

Quando os {% data variables.product.prodname_oauth_app %} solicitarem novas permissões de acesso, eles notificarão você quanto às diferenças entre as permissões atuais que possuem e novas que desejam.

{% if currentVersion == "free-pro-team@latest" %}

### {% data variables.product.prodname_oauth_app %}s e organizações

Ao autorizar um {% data variables.product.prodname_oauth_app %} para sua conta de usuário pessoal, você também verá como a autorização vai afetar cada organização da qual você faz parte.

- **Para organizações *com* restrições de acesso do {% data variables.product.prodname_oauth_app %}, você poderá solicitar que os administradores da organização aprovem o aplicativo para uso nessa organização.** Se a organização não aprovar o aplicativo, o aplicativo só poderá acessar os recursos públicos da organização. Se você for administrador de uma organização, você mesmo poderá [aprovar o aplicativo](/articles/approving-oauth-apps-for-your-organization).

- **Para organizações *sem* restrições de acesso do {% data variables.product.prodname_oauth_app %}, o aplicativo terá acesso automaticamente aos recursos da organização em questão.** Por esse motivo, você deve ter cuidado quanto aos {% data variables.product.prodname_oauth_app %}s cujo acesso a recursos de sua conta pessoal e a quaisquer recursos da organização você aprova.

Se você pertence a alguma organização que force o logon único SAML, você deve ter uma sessão de SAML ativa para cada organização toda cada vez que autorizar um {% data variables.product.prodname_oauth_app %}.

### Leia mais

- "[Sobre restrições de acesso do {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"
- "[Suporte do {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-support)"

{% endif %}
