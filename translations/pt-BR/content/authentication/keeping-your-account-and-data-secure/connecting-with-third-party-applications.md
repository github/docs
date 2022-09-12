---
title: Conectar-se a aplicativos de terceiros
intro: 'Você pode conectar sua identidade do {% data variables.product.product_name %} a aplicativos de terceiros usando o OAuth. Ao autorizar um desses aplicativos, você deve ter certeza de que se trata de um aplicativo confiável, examinar por quem ele foi desenvolvido e analisar os tipos de informação que o aplicativo quer acessar.'
redirect_from:
  - /articles/connecting-with-third-party-applications
  - /github/authenticating-to-github/connecting-with-third-party-applications
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/connecting-with-third-party-applications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Third-party applications
ms.openlocfilehash: b8cd20d36926c373116061e211be62701b1bd2f6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145094561'
---
Quando um aplicativo de terceiro quiser identificar você pelo seu login do {% data variables.product.product_name %}, será exibida uma página com as informações de contato do desenvolvedor e uma lista dos dados específicos que estão sendo solicitados.

## Contatar o desenvolvedor do aplicativo

Como o aplicativo é desenvolvido por um terceiro que não é o {% data variables.product.product_name %}, não sabemos exatamente como o aplicativo usa os dados para os quais está solicitando acesso. Você pode usar as informações do desenvolvedor no topo da página para contatar o administrador do aplicativo se tiver dúvidas sobre o aplicativo.

![Informações de proprietário do {% data variables.product.prodname_oauth_app %}](/assets/images/help/platform/oauth_owner_bar.png)

Se o desenvolvedor tiver optador por fornecê-lo, o lado direito da página fornecerá uma descrição detalhada do aplicativo, bem como seu site associado.

![Informações de aplicativo e site do OAuth](/assets/images/help/platform/oauth_app_info.png)

## Tipos de acesos e dados do aplicativo

Os aplicativos podem ter acesso de *leitura* ou de *gravação* no {% data variables.product.product_name %}.

- O **acesso de leitura** só permite que um aplicativo *visualize* seus dados.
- O **acesso de gravação** permite que um aplicativo *altere* seus dados.

### Sobre os escopos do OAuth

Os *escopos* são grupos nomeados de permissões que um aplicativo pode solicitar para acessar dados públicos e não públicos.

Quando você quiser usar um aplicativo de terceiro que se integre ao {% data variables.product.product_name %}, esse aplicativo permitirá que você saiba qual tipo de acesso aos seus dados será necessário. Se você conceder acesso ao aplicativo, este poderá executar ações em seu nome, como ler ou modificar os dados. Por exemplo, se você quiser usar um aplicativo que solicite o escopo de `user:email`, o aplicativo terá acesso somente leitura aos seus endereços de email privados. Para obter mais informações, confira "[Sobre os escopos dos {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)".

{% tip %}

**Observação:** atualmente, não é possível definir o escopo do acesso ao código-fonte como somente leitura.

{% endtip %}

### Tipos de dados solicitados

Há vários tipos de dados que os aplicativos podem solicitar.

![Detalhes de acesso do OAuth](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

**Dica:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

| Tipo de dados | Descrição |
| --- | --- |
| Status do commit | Você pode conceder acesso para que um aplicativo de terceiro relate seu status de commit. O acesso ao status do commit permite que os aplicativos determinem se uma compilação foi bem-sucedida em relação a um commit específico. Os aplicativos não terão acesso ao seu código, mas <em>podem</em> ler e gravar informações de status em um commit específico. |
| Implantações | O acesso ao status de implantação permite que os aplicativos determinem se uma implantação é bem-sucedida com um commit específico para um repositório. Os aplicativos não terão acesso ao seu código. |
| Gists | O acesso de [gist](https://gist.github.com) permite que os aplicativos façam leituras ou gravações {% ifversion not ghae %}tanto nos gists públicos{% else %}quanto nos gists secretos internos{% endif %}. |
| Ganchos | O acesso de [webhooks](/webhooks) permite que os aplicativos façam leiam ou gravem configurações de gancho nos repositórios que você gerencia. |
| Notificações | O acesso às notificações permite que os aplicativos leiam suas notificações de {% data variables.product.product_name %}, como, por exemplo, comentários em problemas e pull requests. No entanto, os aplicativos continuam sem poder acessar nada nos repositórios. |
| Organizações e equipes | O acesso às organizações e equipes permite que os apps acessem e gerenciem a associação à organização e à equipe. |
| Dados pessoais do usuário | Os dados do usuário incluem informações encontradas no seu perfil de usuário, como nome, endereço de e-mail e localização. |
| Repositórios | As informações de repositório incluem os nomes dos contribuidores, os branches que você criou e os arquivos reais dentro do repositório. Uma aplicação pode solicitar acesso a todos os seus repositórios de qualquer nível de visibilidade. Para obter mais informações, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)". |
| Exclusão de repositório | Os aplicativos podem solicitar a exclusão de repositórios que você administra, mas não terão acesso ao seu código. |

## Solicitar permissões atualizadas

Os aplicativos podem solicitar novos privilégios de acesso. Ao solicitar permissões atualizadas, o aplicativo notificará você das diferenças.

![Alterar acesso de aplicativo de terceiro](/assets/images/help/platform/oauth_existing_access_pane.png)
