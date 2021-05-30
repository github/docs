---
title: Conectar-se a aplicativos de terceiros
intro: 'Você pode conectar sua identidade do {% data variables.product.product_name %} a aplicativos de terceiros usando o OAuth. Ao autorizar um desses aplicativos, você deve ter certeza de que se trata de um aplicativo confiável, examinar por quem ele foi desenvolvido e analisar os tipos de informação que o aplicativo quer acessar.'
redirect_from:
  - /articles/connecting-with-third-party-applications
  - /github/authenticating-to-github/connecting-with-third-party-applications
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
Quando um aplicativo de terceiro quiser identificar você pelo seu login do {% data variables.product.product_name %}, será exibida uma página com as informações de contato do desenvolvedor e uma lista dos dados específicos que estão sendo solicitados.

### Contatar o desenvolvedor do aplicativo

Como o aplicativo é desenvolvido por um terceiro que não é o {% data variables.product.product_name %}, não sabemos exatamente como o aplicativo usa os dados para os quais está solicitando acesso. Você pode usar as informações do desenvolvedor no topo da página para contatar o administrador do aplicativo se tiver dúvidas sobre o aplicativo.

![Informações de proprietário do {% data variables.product.prodname_oauth_app %}](/assets/images/help/platform/oauth_owner_bar.png)

Se o desenvolvedor tiver optador por fornecê-lo, o lado direito da página fornecerá uma descrição detalhada do aplicativo, bem como seu site associado.

![Informações de aplicativo e site do OAuth](/assets/images/help/platform/oauth_app_info.png)

### Tipos de acesos e dados do aplicativo

Os aplicativos podem ter acesso de *leitura* ou *gravação* aos seus dados no {% data variables.product.product_name %}.

- O **acesso de leitura** permite que um aplicativo apenas *observe* os dados.
- O **acesso de gravação** permite que um aplicativo *altere* os dados.

#### Sobre os escopos do OAuth

Os *escopos* são grupos nomeados de permissões que um aplicativo pode solicitar para acessar dados públicos e não públicos.

Quando você quiser usar um aplicativo de terceiro que se integre ao {% data variables.product.product_name %}, esse aplicativo permitirá que você saiba qual tipo de acesso aos seus dados será necessário. Se você conceder acesso ao aplicativo, este poderá executar ações em seu nome, como ler ou modificar os dados. Por exemplo, se você desejar usar um app que solicite o escopo `user:email`, o app terá acesso somente leitura aos seus endereços de e-mail privados. Para obter mais informações, consulte "[Sobre escopos para {% data variables.product.prodname_oauth_app %}s](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)".

{% tip %}

**Observação:** no momento, não é possível usar o escopo de acesso de código-fonte para somente leitura.

{% endtip %}

#### Tipos de dados solicitados

Há vários tipos de dados que os aplicativos podem solicitar.

![Detalhes de acesso do OAuth](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

**Dica:** {% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

| Tipos de dados            | Descrição                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status do commit          | Você pode conceder acesso para que um aplicativo de terceiro relate seu status de commit. O acesso ao status do commit permite que os aplicativos determinem se uma compilação foi bem-sucedida em relação a um commit específico. Os apps não terão acesso ao seu código, mas <em>poderão</em> ler e gravar informações de status em relação a um commit específico. |
| Implantações              | O acesso ao status de implantação permite que os aplicativos determinem se uma implantação é bem-sucedida com um commit específico para um repositório. Os aplicativos não terão acesso ao seu código.                                                                                                                                                                       |
| Gists                     | O acesso ao [Gist](https://gist.github.com) permite que os aplicativos leiam ou gravem {% if currentVersion ! "github-ae@latest" %}nos seus Gistis públicos e{% else %}nos seus Gists internos e{% endif %} secretos.                                                                                                                                                        |
| Hooks                     | O acesso aos [webhooks](/webhooks) permite que os aplicativos leiam ou gravem configurações de hook em repositórios que você gerencia.                                                                                                                                                                                                                                       |
| Notificações              | O acesso às notificações permite que os aplicativos leiam suas notificações de {% data variables.product.product_name %}, como, por exemplo, comentários em problemas e pull requests. No entanto, os aplicativos continuam sem poder acessar nada nos repositórios.                                                                                                         |
| Organizações e equipes    | O acesso às organizações e equipes permite que os apps acessem e gerenciem a associação à organização e à equipe.                                                                                                                                                                                                                                                            |
| Dados pessoais do usuário | Os dados do usuário incluem informações encontradas no seu perfil de usuário, como nome, endereço de e-mail e localização.                                                                                                                                                                                                                                                   |
| Repositórios              | As informações de repositório incluem os nomes dos contribuidores, os branches que você criou e os arquivos reais dentro do repositório. Os aplicativos podem solicitar acesso para {% if currentVersion != "github-ae@latest" %}público{% else %}interno{% endif %} ou repositórios privados em em um nível amplo de usuários.                                              |
| Exclusão de repositório   | Os aplicativos podem solicitar a exclusão de repositórios que você administra, mas não terão acesso ao seu código.                                                                                                                                                                                                                                                           |

### Solicitar permissões atualizadas

Os aplicativos podem solicitar novos privilégios de acesso. Ao solicitar permissões atualizadas, o aplicativo notificará você das diferenças.

![Alterar acesso de aplicativo de terceiro](/assets/images/help/platform/oauth_existing_access_pane.png)
