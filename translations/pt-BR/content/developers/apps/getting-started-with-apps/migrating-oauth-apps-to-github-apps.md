---
title: Migrar aplicativos OAuth para aplicativos GitHub
intro: 'Saiba mais sobre as vantagens de migrar seu {% data variables.product.prodname_oauth_app %} para um {% data variables.product.prodname_github_app %} e como migrar um {% data variables.product.prodname_oauth_app %} que não está listado no {% data variables.product.prodname_marketplace %}. '
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Migrate from OAuth Apps
ms.openlocfilehash: 4fea258cc9677401d8212634fdcc04abf22724c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081029'
---
Este artigo fornece orientações para integradores existentes que estão considerando a migração de um aplicativo OAuth para um aplicativo GitHub.

## Razões para alternar para aplicativos GitHub

Os [Aplicativos do GitHub](/apps/) são a forma oficialmente recomendada de se integrar ao GitHub, pois oferecem muitas vantagens em relação a uma integração pura baseada no OAuth:

- As [permissões refinadas](/apps/differences-between-apps/#requesting-permission-levels-for-resources) são direcionadas às informações específicas que um Aplicativo do GitHub pode acessar, permitindo que o aplicativo seja mais amplamente usado por pessoas e organizações com políticas de segurança do que os Aplicativos OAuth, que não podem ser limitados por permissões.
- Os [tokens de curta duração](/apps/differences-between-apps/#token-based-identification) fornecem um método de autenticação mais seguro em relação aos tokens OAuth. Um token do OAuth não expira até que a pessoa que autorizou o aplicativo OAuth revogue o token. Os aplicativos GitHub usam tokens que expiram rapidamente, o que cria uma janela de tempo muito menor para que tokens comprometidos sejam usados.
- Os [webhooks internos e centralizados](/apps/differences-between-apps/#webhooks) recebem eventos para todos os repositórios e organizações que o aplicativo pode acessar. Inversamente, os aplicativos OAuth exigem a configuração de um webhook para cada repositório e organização acessível ao usuário.
- As [contas de bot](/apps/differences-between-apps/#machine-vs-bot-accounts) não consomem uma estação do {% data variables.product.product_name %} e permanecem instaladas mesmo quando a pessoa que inicialmente instalou o aplicativo deixa a organização.
- O suporte interno para o OAuth ainda está disponível para Aplicativos do GitHub por meio de [pontos de extremidade de usuário para servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).
- Os [limites de taxa de API](/apps/building-github-apps/understanding-rate-limits-for-github-apps/) dedicados para contas de bot são escalados com a sua integração.
- Os proprietários de repositório podem [instalar os Aplicativos do GitHub](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps) nos repositórios da organização. Se a configuração de um aplicativo GitHub tiver permissões que solicitam os recursos de uma organização, o proprietário d organização deverá aprovar a instalação.
- O suporte à comunidade de código aberto está disponível por meio das [bibliotecas Octokit](/rest/overview/libraries) e de outras estruturas, como o [Probot](https://probot.github.io/).
- Os integradores que constroem os aplicativos GitHub têm a oportunidade de adotar acesso prévio às APIs.

## Converter um aplicativo OAuth em um aplicativo GitHub

Essas diretrizes pressupõem que você tenha um Aplicativo OAuth registrado{% ifversion fpt or ghec %} que pode ou não estar listado no GitHub Marketplace{% endif %}. De modo geral, você deverá seguir estas etapas:

1. [Revisar os pontos de extremidade de API disponíveis para os Aplicativos do GitHub](#review-the-available-api-endpoints-for-github-apps)
1. [Design para permanecer dentro dos limites de taxa da API](#design-to-stay-within-api-rate-limits)
1. [Registrar um novo Aplicativo do GitHub](#register-a-new-github-app)
1. [Determinar as permissões necessárias para o seu aplicativo](#determine-the-permissions-your-app-requires)
1. [Inscrever-se em webhooks](#subscribe-to-webhooks)
1. [Entender os diferentes métodos de autenticação](#understand-the-different-methods-of-authentication)
1. [Orientar os usuários a instalar seu Aplicativo do GitHub nos repositórios](#direct-users-to-install-your-github-app-on-repositories)
1. [Remover os ganchos de repositório desnecessários](#remove-any-unnecessary-repository-hooks)
1. [Incentivar os usuários a revogar o acesso ao seu Aplicativo OAuth](#encourage-users-to-revoke-access-to-your-oauth-app)
1. [Excluir o Aplicativo OAuth](#delete-the-oauth-app)

### Revise os pontos finais da API disponíveis para os aplicativos do GitHub

Embora a maioria dos pontos de extremidade da [API REST](/rest) e das consultas do [GraphQL](/graphql) esteja atualmente disponível para os Aplicativos do GitHub, ainda estamos em vias de habilitar alguns pontos de extremidade. Revise os [pontos de extremidade REST disponíveis](/rest/overview/endpoints-available-for-github-apps) para garantir que os pontos de extremidade necessários sejam compatíveis com os Aplicativos do GitHub. Observe que alguns dos pontos finais da API ativados para os aplicativos GitHub permitem que o aplicativo aja em nome do usuário. Confira "[Solicitações de usuário para servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests)" para ver uma lista de pontos de extremidade que permitem que um Aplicativo do GitHub se autentique como um usuário.

Recomendamos que você reveja a lista de pontos finais de API de que você precisa assim que possível. Informe ao suporte se há um ponto de extremidade necessário que ainda não esteja habilitado para {% data variables.product.prodname_github_apps %}.

### Projete para permanecer dentro dos limites de taxa da API

Os Aplicativos do GitHub usam [regras deslizantes para limites de taxa](/apps/building-github-apps/understanding-rate-limits-for-github-apps/), que podem aumentar com base no número de repositórios e de usuários na organização. Um Aplicativo do GitHub também pode usar [solicitações condicionais](/rest/overview/resources-in-the-rest-api#conditional-requests) ou consolidar solicitações usando a [API do GraphQL](/graphql).

### Registre um novo aplicativo GitHub

Depois de decidir mudar para os Aplicativos do GitHub, você precisará [criar um Aplicativo do GitHub](/apps/building-github-apps/).

### Determine as permissões de que seu aplicativo precisa

Ao registrar seu aplicativo GitHub, você deverá selecionar as permissões necessárias por cada ponto final usado no código do seu aplicativo. Confira "[Permissões do Aplicativo do GitHub](/rest/reference/permissions-required-for-github-apps)" para obter uma lista das permissões necessárias para cada ponto de extremidade disponível para os Aplicativos do GitHub.

Nas configurações do Aplicativo do GitHub, você pode especificar se o seu aplicativo precisa do acesso de `No Access`, `Read-only` ou `Read & Write` para cada tipo de permissão. As permissões refinadas permitem que seu aplicativo obtenha acesso direcionado ao subconjunto de dados de que você precisa. Recomendamos especificar o menor conjunto de permissões possível que fornece a funcionalidade desejada.

### Assine os webhooks

Após criar um novo aplicativo GitHub e selecionar suas permissões, você poderá selecionar os eventos do webhook que você deseja que ele assine. Confira "[Como editar as permissões de um Aplicativo do GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)" para saber como se inscrever em webhooks.

### Entenda os diferentes métodos de autenticação

Os aplicativos do GitHub usam principalmente uma autenticação baseada em tokens que expira após um curto período de tempo, o que fornece mais segurança do que um token OAuth que não expira. É importante entender os diferentes métodos de autenticação disponíveis para você e quando você precisa usá-los:

* Um **JWT (Token Web JSON)** [é autenticado como o Aplicativo do GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app). Por exemplo, você pode autenticar com um **JWT** para buscar detalhes da instalação do aplicativo ou trocar o **JWT** por um **token de acesso de instalação**.
* Um **token de acesso à instalação** [é autenticado como uma instalação específica do Aplicativo do GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) (também chamado de solicitações de servidor para servidor). Por exemplo, você pode se autenticar com um **token de acesso de instalação** para abrir um problema ou fornecer comentários sobre uma solicitação de pull.
* Um **token de acesso OAuth** pode [ser autenticado como um usuário do Aplicativo do GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site) (também chamado de solicitações de usuário para servidor). Por exemplo, você pode usar um token de acesso OAuth para se efetuar a autenticação como usuário quando um aplicativo GitHub precisar verificar a identidade de um usuário ou agir em nome de um usuário.

O cenário mais comum é se autenticar como uma instalação específica usando um **token de acesso de instalação**.

### Oriente os usuários para instalar o seu aplicativo GitHub nos repositórios

Uma vez que você fez a transição de um aplicativo OAuth para um aplicativo GitHub, você precisará informar aos usuários que o aplicativo GitHub está disponível para instalação. Por exemplo, você pode incluir um link de instalação para o aplicativo GitHub em um banner de chamada para ação dentro de seu aplicativo. Para facilitar a transição, você pode usar parâmetros de consulta para identificar a conta do usuário ou organização que está passando pelo fluxo de instalação do seu aplicativo GitHub e pré-selecionar quaisquer repositórios aos quais o aplicativo OAuth tem acesso. Isso permite que os usuários instalem facilmente o seu aplicativo GitHub em repositórios aos quais você já tem acesso.

#### Parâmetros de consulta

| Nome | Descrição |
|------|-------------|
| `suggested_target_id` | **Obrigatório**: ID do usuário ou da organização que está instalando seu Aplicativo do GitHub. |
| `repository_ids[]` | Array de IDs do repositório. Se omitido, selecionaremos todos os repositórios. O número máximo de repositórios que pode ser pré-selecionado é 100. |

#### Exemplo de URL
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

Você precisará substituir `YOUR_APP_NAME` pelo nome do Aplicativo do GitHub, `ID_OF_USER_OR_ORG` pela ID do usuário ou da organização de destino e incluir até 100 IDs do repositório (`REPO_A_ID` e `REPO_B_ID`). Para obter uma lista de repositórios aos quais seu Aplicativo OAuth tem acesso, use os pontos de extremidade [Listar os repositórios do usuário autenticado](/rest/reference/repos#list-repositories-for-the-authenticated-user) e [Listar os repositórios da organização](/rest/reference/repos#list-organization-repositories).

### Remova quaisquer hooks de repositório desnecessários

Uma vez que seu aplicativo GitHub foi instalado em um repositório, você deve remover quaisquer webhooks desnecessários criados pelo seu aplicativo de legado OAuth. Se ambos os aplicativos estiverem instalados em um repositório, eles poderão duplicar a funcionalidade do usuário. Para remover webhooks, você pode escutar o [webhook `installation_repositories`](/webhooks/event-payloads/#installation_repositories) com a ação `repositories_added` e [Excluir um webhook do repositório](/rest/reference/webhooks#delete-a-repository-webhook) nesses repositórios criados pelo seu Aplicativo OAuth.

### Incentive os usuários a revogar o acesso ao seu aplicativo OAuth

À medida que sua base de instalação do aplicativo GitHub aumenta, incentive seus usuários a revogar o acesso à integração do legado do OAuth. Para obter mais informações, confira "[Como autorizar aplicativos OAuth](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)".

### Exclua o aplicativo OAuth

Para evitar o abuso das credenciais do aplicativo OAuth, considere excluir o aplicativo OAuth. Esta ação também irá revogar todas as autorizações restantes do aplicativo OAuth. Para obter mais informações, confira "[Como excluir um Aplicativo OAuth](/developers/apps/managing-oauth-apps/deleting-an-oauth-app)".
