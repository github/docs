---
title: Migrar aplicativos OAuth para aplicativos GitHub
intro: 'Saiba mais sobre as vantagens de migrar seu {% data variables.product.prodname_oauth_app %} para um {% data variables.product.prodname_github_app %} e como migrar um {% data variables.product.prodname_oauth_app %} que não está listado no {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

Este artigo fornece orientações para integradores existentes que estão considerando a migração de um aplicativo OAuth para um aplicativo GitHub.

### Razões para alternar para aplicativos GitHub

[Os aplicativos GitHub](/apps/) são a forma oficialmente recomendada de integrar-se ao GitHub, pois oferecem muitas vantagens em relação a uma integração pura baseada no OAuth:

- [Permissões refinadas](/apps/differences-between-apps/#requesting-permission-levels-for-resources) direcionadas às informações específicas que um aplicativo GitHub pode acessar, o que permite que o aplicativo seja mais amplamente utilizado por pessoas e organizações com políticas de segurança do que os aplicativos OAuth, que não podem ser limitados pelas permissões.
- [Os tokens de vida útil curta](/apps/differences-between-apps/#token-based-identification) fornecem um método de autenticação mais seguro em relação aos tokens do OAuth. Um token do OAuth não expira até que a pessoa que autorizou o aplicativo OAuth revogue o token. Os aplicativos GitHub usam tokens que expiram rapidamente, o que cria uma janela de tempo muito menor para que tokens comprometidos sejam usados.
- [Os webhooks integrados e centralizados](/apps/differences-between-apps/#webhooks) recebem eventos para todos os repositórios e organizações que o aplicativo pode acessar. Inversamente, os aplicativos OAuth exigem a configuração de um webhook para cada repositório e organização acessível ao usuário.
- [As contas do bot](/apps/differences-between-apps/#machine-vs-bot-accounts) não consomem um assento do {% data variables.product.product_name %} e permanecem instaladas mesmo quando a pessoa que inicialmente instalou o aplicativo sair da organização.
- O suporte integrado para o OAuth ainda está disponível para aplicativos GitHub usando [pontos finais de usuário para servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).
- [Os limites de taxa de API](/apps/building-github-apps/understanding-rate-limits-for-github-apps/) dedicados para as contas do bot são escalados com a sua integração.
- Os proprietários de repositórios podem [instalar aplicativos GitHub](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps) em repositórios de organizações. Se a configuração de um aplicativo GitHub tiver permissões que solicitam os recursos de uma organização, o proprietário d organização deverá aprovar a instalação.
- O suporte da comunidade do código aberto está disponível nas [bibliotecas do Octokit](/rest/overview/libraries) e outros estruturas como, por exemplo, o [Probot](https://probot.github.io/).
- Os integradores que constroem os aplicativos GitHub têm a oportunidade de adotar acesso prévio às APIs.

### Converter um aplicativo OAuth em um aplicativo GitHub

Essas diretrizes assumem que você tem um aplicativo OAuth registrado{% if currentVersion == "free-pro-team@latest" %} que pode ou não estar listado no GitHub Marketplace{% endif %}. De modo geral, você deverá seguir estas etapas:

1. [Revise os pontos finais da API disponíveis para os aplicativos do GitHub](#review-the-available-api-endpoints-for-github-apps)
1. [Projete para permanecer dentro dos limites de taxa da API](#design-to-stay-within-api-rate-limits)
1. [Cadastre um novo aplicativo GitHub](#register-a-new-github-app)
1. [Determine as permissões de que seu aplicativo precisa](#determine-the-permissions-your-app-requires)
1. [Assine os webhooks](#subscribe-to-webhooks)
1. [Entenda os diferentes métodos de autenticação](#understand-the-different-methods-of-authentication)
1. [Oriente os usuários para instalar o seu aplicativo GitHub nos repositórios](#direct-users-to-install-your-github-app-on-repositories)
1. [Remova quaisquer hooks de repositório desnecessários](#remove-any-unnecessary-repository-hooks)
1. [Incentive os usuários a revogar o acesso ao seu aplicativo OAuth](#encourage-users-to-revoke-access-to-your-oauth-app)

#### Revise os pontos finais da API disponíveis para os aplicativos do GitHub

Embora a maioria dos pontos finais da [API REST](/rest) e as consultas do [GraphQL](/graphql) estejam disponíveis para os aplicativos GitHub atualmente, ainda estamos em vias de habilitar alguns pontos finais. Revise os [pontos finais da REST disponíveis](/rest/overview/endpoints-available-for-github-apps) para garantir que os pontos finais de que você precisa sejam compatíveis com o aplicativo GitHub. Observe que alguns dos pontos finais da API ativados para os aplicativos GitHub permitem que o aplicativo aja em nome do usuário. Consulte "[Solicitações de usuário para servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests)" para obter uma lista de pontos finais que permitem que um aplicativo GitHub seja autenticado como usuário.

Recomendamos que você reveja a lista de pontos finais de API de que você precisa assim que possível. Informe o a equipe de suporte caso haja um ponto final necessário que ainda não esteja habilitado para {% data variables.product.prodname_github_app %}s.

#### Projete para permanecer dentro dos limites de taxa da API

Os aplicativos GitHub usam [regras móveis para limites de taxa](/apps/building-github-apps/understanding-rate-limits-for-github-apps/), que podem aumentar com base no número de repositórios e usuários da organização. Um aplicativo do GitHub também pode usar [solicitações condicionais](/rest#conditional-requests) ou consolidar solicitações usando [GraphQL API V4](/graphql).

#### Cadastre um novo aplicativo GitHub

Uma vez que você decidiu fazer a troca para os aplicativos GitHub, você precisará [criar um novo aplicativo GitHub](/apps/building-github-apps/).

#### Determine as permissões de que seu aplicativo precisa

Ao registrar seu aplicativo GitHub, você deverá selecionar as permissões necessárias por cada ponto final usado no código do seu aplicativo. Consulte "[Permissões do aplicativo GitHub](/rest/reference/permissions-required-for-github-apps)" para obter uma lista das permissões necessárias para cada ponto final disponível nos aplicativos GitHub.

Nas configurações do seu aplicativo GitHub, você pode especificar se seu aplicativo precisa de acesso `Sem Acesso`, `somente leitura`, ou `Leitura & Gravação` para cada tipo de permissão. As permissões refinadas permitem que seu aplicativo obtenha acesso direcionado ao subconjunto de dados de que você precisa. Recomendamos especificar o menor conjunto de permissões possível que fornece a funcionalidade desejada.

#### Assine os webhooks

Após criar um novo aplicativo GitHub e selecionar suas permissões, você poderá selecionar os eventos do webhook que você deseja que ele assine. Consulte "[Editando as permissões do aplicativo GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)" para aprender como assinar webhooks.

#### Entenda os diferentes métodos de autenticação

Os aplicativos do GitHub usam principalmente uma autenticação baseada em tokens que expira após um curto período de tempo, o que fornece mais segurança do que um token OAuth que não expira. É importante entender os diferentes métodos de autenticação disponíveis para você e quando você precisa usá-los:

* Um **JSON Web Token (JWT)** [é autenticado como o aplicativo GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app). Por exemplo, você pode efetuar a autenticação com um **JWT** para buscar informações de instalação do aplicativo ou trocar o **JWT** por um **token de acesso de instalação**.
* Um **token de acesso de instalação** [é autenticado como uma instalação específica do seu aplicativo GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) (também denominado solicitações de servidor para servidor). Por exemplo, você pode efetuar a autenticação com um **token de acesso de instalação** para abrir um problema ou fornecer feedback em um pull request.
* Um **token de acesso do OAuth** pode [efetuar a autenticação como usuário do seu aplicativo GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site) (também denominado solicitações de usuário para servidor). Por exemplo, você pode usar um token de acesso OAuth para se efetuar a autenticação como usuário quando um aplicativo GitHub precisar verificar a identidade de um usuário ou agir em nome de um usuário.

O cenário mais comum é efetuar a autenticação como uma instalação específica usando um **token de acesso de instalação**.

#### Oriente os usuários para instalar o seu aplicativo GitHub nos repositórios

Uma vez que você fez a transição de um aplicativo OAuth para um aplicativo GitHub, você precisará informar aos usuários que o aplicativo GitHub está disponível para instalação. Por exemplo, você pode incluir um link de instalação para o aplicativo GitHub em um banner de chamada para ação dentro de seu aplicativo. Para facilitar a transição, você pode usar parâmetros de consulta para identificar a conta do usuário ou organização que está passando pelo fluxo de instalação do seu aplicativo GitHub e pré-selecionar quaisquer repositórios aos quais o aplicativo OAuth tem acesso. Isso permite que os usuários instalem facilmente o seu aplicativo GitHub em repositórios aos quais você já tem acesso.

##### Parâmetros de consulta

| Nome                  | Descrição                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `suggested_target_id` | **Obrigatório**: ID do usuário ou organização que está instalando o seu aplicativo GitHub.                                                         |
| `repository_ids[]`    | Array de IDs do repositório. Se omitido, selecionaremos todos os repositórios. O número máximo de repositórios que pode ser pré-selecionado é 100. |

##### Exemplo de URL
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

Você deverá substituir `YOUR_APP_NAME` pelo nome do seu aplicativo GitHub, `ID_OF_USER_OR_ORG` pelo ID do seu usuário-alvo ou organização, e incluir até 100 IDs de repositório (`REPO_A_ID` e `REPO_B_ID`). Para obter uma lista de repositórios à qual seu aplicativo OAuth tem acesso, use os pontos finais [Listar repositórios para o usuário autenticado](/rest/reference/repos#list-repositories-for-the-authenticated-user) e [Listar repositórios de organização](/rest/reference/repos#list-organization-repositories).

#### Remova quaisquer hooks de repositório desnecessários

Uma vez que seu aplicativo GitHub foi instalado em um repositório, você deve remover quaisquer webhooks desnecessários criados pelo seu aplicativo de legado OAuth. Se ambos os aplicativos estiverem instalados em um repositório, eles poderão duplicar a funcionalidade do usuário. Para remover os webhooks, Você pode ouvir [`installation_repositories` webhook](/webhooks/event-payloads/#installation_repositories) com a ação `repositórios_added` e [Excluir um webhook do repositório](/rest/reference/repos#delete-a-repository-webhook) naqueles repositórios criados pelo seu aplicativo OAuth.

#### Incentive os usuários a revogar o acesso ao seu aplicativo OAuth

À medida que sua base de instalação do aplicativo GitHub aumenta, incentive seus usuários a [revogar o acesso](/articles/authorizing-oauth-apps/) à integração do legado do OAuth.
