---
title: Como identificar e autorizar usuários para aplicativos GitHub
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/identifying-and-authorizing-users-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Identify & authorize users
ms.openlocfilehash: 302e7a25931c3af2957dae7a67e0ca080fc5bd50
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160577'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

Quando o seu aplicativo GitHub age em nome de um usuário, ele realiza solicitações de usuário para servidor. Essas solicitações devem ser autorizadas com o token de acesso de um usuário. As solicitações de usuário para servidor incluem a solicitação de dados para um usuário, como determinar quais repositórios devem ser exibidos para um determinado usuário. Essas solicitações também incluem ações acionadas por um usuário, como executar uma criação.

{% data reusables.apps.expiring_user_authorization_tokens %}

## Identificando usuários no seu site

Para autorizar usuários em aplicativos padrão executados no navegador, use o [fluxo do aplicativo Web](#web-application-flow).

Para autorizar usuários em aplicativos sem periféricos que não têm acesso direto ao navegador, como ferramentas da CLI ou gerenciadores de credenciais do Git, use o [fluxo do dispositivo](#device-flow). O fluxo do dispositivo usa a [Concessão de Autorização de Dispositivo](https://tools.ietf.org/html/rfc8628) do OAuth 2.0.

## Fluxo do aplicativo web

Ao usar o fluxo de aplicativo web, o processo para identificar usuários no seu site é:

1. Os usuários são redirecionados para solicitar sua identidade do GitHub
2. Os usuários são redirecionados de volta para o seu site pelo GitHub
3. Seu aplicativo GitHub acessa a API com o token de acesso do usuário

Se você selecionar **Solicitar autorização do usuário (OAuth) durante a instalação** ao criar ou modificar seu aplicativo, a etapa 1 será concluída durante a instalação do aplicativo. Para obter mais informações, confira "[Como autorizar usuários durante a instalação](/apps/installing-github-apps/#authorizing-users-during-installation)".

### 1. Solicitar a identidade do GitHub de um usuário
Direcione o usuário para a seguinte URL em seu navegador:

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Quando seu Aplicativo do GitHub especifica um parâmetro `login`, ele mostra um prompt para os usuários com uma conta específica que eles podem usar para se conectarem e autorizar seu aplicativo.

#### Parâmetros

Nome | Tipo | Descrição
-----|------|------------
`client_id` | `string` | **Necessário.** A ID do cliente do Aplicativo do GitHub. Encontre isso nas [configurações do Aplicativo do GitHub](https://github.com/settings/apps) ao selecionar seu aplicativo. **Observação:** a ID do aplicativo e a ID do cliente não são iguais e não são intercambiáveis.
`redirect_uri` | `string` | A URL no seu aplicativo para o qual os usuários serão enviados após a autorização. Isso precisa ser uma correspondência exata com {% ifversion fpt or ghes or ghec %} uma das URLs fornecidas como uma **URL de retorno de chamada** {% else %} com a URL fornecida no campo **URL de retorno de chamada de autorização do usuário**{% endif %} quando o Aplicativo do GitHub é configurado e não pode conter nenhum parâmetro adicional.
`state` | `string` | Isso deve conter uma string aleatória para proteger contra ataques falsificados e pode conter quaisquer outros dados arbitrários.
`login` | `string` | Sugere uma conta específica para iniciar a sessão e autorizar o aplicativo.
`allow_signup` | `string` | Independentemente de os usuários autenticados ou não atenticados terem a opção de iscrever-se em {% data variables.product.prodname_dotcom %} durante o fluxo do OAuth. O padrão é `true`. Use `false` quando uma política proibir inscrições.

{% note %}

**Observação:** você não precisa fornecer escopos na solicitação de autorização. Ao contrário do OAuth tradicional, o token de autorização é limitado às permissões associadas ao seu aplicativo GitHub e às do usuário.

{% endnote %}

### 2. Os usuários são redirecionados para seu site pelo GitHub

Se o usuário aceitar sua solicitação, o GitHub o redirecionará para seu site com um `code` temporário em um parâmetro de código, bem como o estado que você forneceu na etapa anterior em um parâmetro `state`. Se os estados não corresponderem, o pedido foi criado por terceiros e o processo deve ser abortado.

{% note %}

**Observação:** se você selecionar **Solicitar autorização do usuário (OAuth) durante a instalação** ao criar ou modificar seu aplicativo, o GitHub retornará um `code` temporário que você precisará trocar por um token de acesso. O parâmetro `state` não é retornado quando o GitHub inicia o fluxo do OAuth durante a instalação do aplicativo.

{% endnote %}

Troque este `code` por um token de acesso.  Quando os tokens vencidos estiverem habilitados, token de acesso irá expirar em 8 horas e o token de atualização irá expirar em 6 meses. Toda vez que você atualizar o token, você receberá um novo token de atualização. Para obter mais informações, confira "[Como atualizar tokens de acesso de usuário para servidor](/developers/apps/refreshing-user-to-server-access-tokens)".

Os tokens de usuário expirados são atualmente um recurso opcional e estão sujeitos a alterações. Para aceitar o recurso de expiração do token de usuário para servidor, confira "[Como ativar recursos opcionais para aplicativos](/developers/apps/activating-optional-features-for-apps)".

Faça um pedido para o seguinte ponto de extremidade para receber um token de acesso:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Parâmetros

Nome | Tipo | Descrição
-----|------|------------
`client_id` | `string` | **Necessário.** A ID do cliente do Aplicativo do GitHub.
`client_secret` | `string`   | **Necessário.** O segredo do cliente do Aplicativo do GitHub.
`code` | `string`   | **Necessário.** O código que você recebeu como resposta à Etapa 1.
`redirect_uri` | `string` | A URL no seu aplicativo para o qual os usuários serão enviados após a autorização. Isso precisa ser uma correspondência exata com {% ifversion fpt or ghes or ghec %} uma das URLs fornecidas como uma **URL de retorno de chamada** {% else %} com a URL fornecida no campo **URL de retorno de chamada de autorização do usuário**{% endif %} quando o Aplicativo do GitHub é configurado e não pode conter nenhum parâmetro adicional.

#### Resposta

Por padrão, a resposta assume o seguinte formato. Os parâmetros de resposta `expires_in`, `refresh_token` e `refresh_token_expires_in` só são retornados quando você habilita o vencimento dos tokens de acesso de usuário para servidor.

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": 28800,
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```

### 3. Seu Aplicativo do GitHub acessa a API com o token de acesso do usuário

O token de acesso do usuário permite que o aplicativo GitHub faça solicitações para a API em nome de um usuário.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por exemplo, no cURL você pode definir o cabeçalho de autorização da seguinte forma:

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Fluxo de dispositivo

{% note %}

**Observação:** o fluxo do dispositivo está em versão beta pública e sujeito a alterações.

{% endnote %}

O fluxo de dispositivos permite que você autorize usuários para um aplicativo sem cabeçalho, como uma ferramenta de CLI ou um gerenciador de credenciais do Git.

{% ifversion device-flow-is-opt-in %}Para usar o fluxo do dispositivo a fim de identificar e autorizar usuários, primeiro você precisa habilitá-lo nas configurações do aplicativo. Para obter mais informações sobre como habilitar o fluxo do dispositivo, confira "[Como modificar um Aplicativo do GitHub](/developers/apps/managing-github-apps/modifying-a-github-app)". {% endif %}Para obter mais informações sobre como autorizar usuários usando o fluxo do dispositivo, confira "[Como autorizar aplicativos do OAuth](/developers/apps/authorizing-oauth-apps#device-flow)".

## Verifique quais recursos de instalação um usuário pode acessar

Depois de ter um token OAuth para um usuário, você pode verificar quais instalações o usuário poderá acessar.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations

Você também pode verificar quais repositórios são acessíveis a um usuário para uma instalação.

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Encontre mais detalhes em: [Listar as instalações de aplicativo acessíveis para o token de acesso do usuário](/rest/apps#list-app-installations-accessible-to-the-user-access-token) e [Listar os repositórios acessíveis para o token de acesso do usuário](/rest/apps#list-repositories-accessible-to-the-user-access-token).

## Tratar uma autorização revogada do aplicativo GitHub

Se um usuário revogar a autorização dele de um Aplicativo do GitHub, o aplicativo receberá o webhook [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) por padrão. Os aplicativos GitHub não podem cancelar a assinatura deste evento. {% data reusables.webhooks.authorization_event %}

## Permissões no nível do usuário

Você pode adicionar permissões de nível de usuário ao seu Aplicativo do GitHub para acessar os recursos do usuário, como emails de usuários, que são concedidas por usuários individuais como parte do [fluxo de autorização do usuário](#identifying-users-on-your-site). As permissões de nível de usuário são diferentes das [permissões de nível da organização e do repositório](/rest/overview/permissions-required-for-github-apps), que são concedidas no momento da instalação em uma conta pessoal ou corporativa.

Você pode selecionar permissões de nível de usuário nas configurações do Aplicativo do GitHub na seção **Permissões do usuário** da página **Permissões e webhooks**. Para obter mais informações sobre como selecionar permissões, confira "[Como editar as permissões de um Aplicativo do GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

Quando um usuário instala seu aplicativo em sua conta, o prompt de instalação listará as permissões de nível de usuário que seu aplicativo solicita e explicará que o aplicativo pode pedir essas permissões a usuários individuais.

Como as permissões de nível de usuário são concedidas em uma base de usuário individual, você poderá adicioná-las ao aplicativo existente sem pedir que os usuários façam a atualização. No entanto, você precisa enviar usuários existentes através do fluxo de autorização do usuário para autorizar a nova permissão e obter um novo token de usuário para servidor para essas solicitações.

## Solicitações de usuário para servidor

Embora a maior parte da interação da sua API deva ocorrer usando os tokens de acesso de servidor para servidor, certos pontos de extremidade permitem que você execute ações por meio da API usando um token de acesso do usuário. O aplicativo pode fazer as solicitações a seguir usando pontos de extremidade do [GraphQL](/graphql) ou [REST](/rest).

### Pontos de extremidade compatíveis

{% ifversion fpt or ghec %}
#### Executores de ações

* [Listar os aplicativos executores de um repositório](/rest/actions#list-runner-applications-for-a-repository)
* [Listar os executores auto-hospedados de um repositório](/rest/actions#list-self-hosted-runners-for-a-repository)
* [Obter um executor auto-hospedado de um repositório](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [Excluir um executor auto-hospedado de um repositório](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [Criar um token de registro para um repositório](/rest/actions#create-a-registration-token-for-a-repository)
* [Criar um token de remoção para um repositório](/rest/actions#create-a-remove-token-for-a-repository)
* [Listar os aplicativos executores de uma organização](/rest/actions#list-runner-applications-for-an-organization)
* [Listar os executores auto-hospedados de uma organização](/rest/actions#list-self-hosted-runners-for-an-organization)
* [Obter um executor auto-hospedado de uma organização](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [Excluir um executor auto-hospedado de uma organização](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [Criar um token de registro para uma organização](/rest/actions#create-a-registration-token-for-an-organization)
* [Criar um token de remoção para uma organização](/rest/actions#create-a-remove-token-for-an-organization)

#### Segredos de ações

* [Obter uma chave pública do repositório](/rest/actions#get-a-repository-public-key)
* [Listar os segredos do repositório](/rest/actions#list-repository-secrets)
* [Obter um segredo do repositório](/rest/actions#get-a-repository-secret)
* [Criar ou atualizar um segredo do repositório](/rest/actions#create-or-update-a-repository-secret)
* [Excluir um segredo do repositório](/rest/actions#delete-a-repository-secret)
* [Obter uma chave pública da organização](/rest/actions#get-an-organization-public-key)
* [Listar os segredos da organização](/rest/actions#list-organization-secrets)
* [Obter um segredo da organização](/rest/actions#get-an-organization-secret)
* [Criar ou atualizar um segredo da organização](/rest/actions#create-or-update-an-organization-secret)
* [Listar os repositórios selecionados de um segredo da organização](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [Definir os repositórios selecionados para um segredo da organização](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [Adicionar o repositório selecionado a um segredo da organização](/rest/actions#add-selected-repository-to-an-organization-secret)
* [Remover o repositório selecionado de um segredo da organização](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [Excluir um segredo da organização](/rest/actions#delete-an-organization-secret) {% endif %}

{% ifversion fpt or ghec %}
#### Artifacts

* [Listar os artefatos de um repositório](/rest/actions#list-artifacts-for-a-repository)
* [Listar os artefatos de execução de fluxo de trabalho](/rest/actions#list-workflow-run-artifacts)
* [Obter um artefato](/rest/actions#get-an-artifact)
* [Excluir um artefato](/rest/actions#delete-an-artifact)
* [Baixar um artefato](/rest/actions#download-an-artifact) {% endif %}

#### Execuções de verificação

* [Criar uma execução de verificação](/rest/checks#create-a-check-run)
* [Obter uma execução de verificação](/rest/checks#get-a-check-run)
* [Atualizar uma execução de verificação](/rest/checks#update-a-check-run)
* [Listar as anotações da execução de verificação](/rest/checks#list-check-run-annotations)
* [Listar as execuções de verificação em um conjunto de verificações](/rest/checks#list-check-runs-in-a-check-suite)
* [Listar as execuções de verificação de uma referência do Git](/rest/checks#list-check-runs-for-a-git-reference)

#### conjuntos de verificações

* [Criar um conjunto de verificações](/rest/checks#create-a-check-suite)
* [Obter um conjunto de verificações](/rest/checks#get-a-check-suite)
* [Solicitar um conjunto de verificações novamente](/rest/checks#rerequest-a-check-suite)
* [Atualizar as preferências de conjuntos de verificações do repositório](/rest/checks#update-repository-preferences-for-check-suites)
* [Listar os conjuntos de verificações de uma referência do Git](/rest/checks#list-check-suites-for-a-git-reference)

#### Códigos de conduta

* [Obter todos os códigos de conduta](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [Obter um código de conduta](/rest/codes-of-conduct#get-a-code-of-conduct)

#### Status da implementação

* [Listar os status de implantação](/rest/deployments#list-deployment-statuses)
* [Criar um status de implantação](/rest/deployments#create-a-deployment-status)
* [Obter um status de implantação](/rest/deployments#get-a-deployment-status)

#### Implantações

* [Listar as implementações](/rest/deployments#list-deployments)
* [Criar uma implantação](/rest/deployments#create-a-deployment)
* [Obter uma implantação](/rest/deployments#get-a-deployment)
* [Excluir uma implantação](/rest/deployments#delete-a-deployment)

#### Eventos

* [Listar os eventos públicos de uma rede de repositórios](/rest/activity#list-public-events-for-a-network-of-repositories)
* [Listar os eventos públicos da organização](/rest/activity#list-public-organization-events)

#### Feeds

* [Obter feeds](/rest/activity#get-feeds)

#### Blobs do Git

* [Criar um blob](/rest/git#create-a-blob)
* [Obter um blob](/rest/git#get-a-blob)

#### Confirmações do Git

* [Criar um commit](/rest/git#create-a-commit)
* [Obter um commit](/rest/git#get-a-commit)

#### Refs do Git

* [Criar uma referência](/rest/git#create-a-reference)
* [Obter uma referência](/rest/git#get-a-reference)
* [Listar as referências correspondentes](/rest/git#list-matching-references)
* [Atualizar uma referência](/rest/git#update-a-reference)
* [Excluir uma referência](/rest/git#delete-a-reference)

#### Tags do Git

* [Criar um objeto de marca](/rest/git#create-a-tag-object)
* [Obtém uma marca](/rest/git#get-a-tag)

#### Árvores do Git

* [Criar uma árvore](/rest/git#create-a-tree)
* [Obter uma árvore](/rest/git#get-a-tree)

#### Modelos do Gitignore

* [Obter todos os modelos gitignore](/rest/gitignore#get-all-gitignore-templates)
* [Obter um modelo gitignore](/rest/gitignore#get-a-gitignore-template)

#### Instalações

* [Listar os repositórios acessíveis para o token de acesso do usuário](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### Limites de interação

* [Obter as restrições de interação de uma organização](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [Definir as restrições de interação de uma organização](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [Remover as restrições de interação de uma organização](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [Obter as restrições de interação de um repositório](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [Definir as restrições de interação de um repositório](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [Remover as restrições de interação de um repositório](/rest/interactions#remove-interaction-restrictions-for-a-repository) {% endif %}

#### Responsáveis pelo problema

* [Adicionar destinatários a um problema](/rest/issues#add-assignees-to-an-issue)
* [Remover destinatários de um problema](/rest/issues#remove-assignees-from-an-issue)

#### Comentários do problema

* [Listar os comentários de um problema](/rest/issues#list-issue-comments)
* [Criar um comentário de um problema](/rest/issues#create-an-issue-comment)
* [Listar os comentários de um problema de um repositório](/rest/issues#list-issue-comments-for-a-repository)
* [Obter um comentário de um problema](/rest/issues#get-an-issue-comment)
* [Atualizar um comentário de um problema](/rest/issues#update-an-issue-comment)
* [Excluir um comentário de um problema](/rest/issues#delete-an-issue-comment)

#### Eventos do problema

* [Listar os eventos de um problema](/rest/issues#list-issue-events)

#### Linha do tempo do problema

* [Listar os eventos da linha do tempo de um problema](/rest/issues#list-timeline-events-for-an-issue)

#### Problemas

* [Listar os problemas atribuídos ao usuário autenticado](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [Listar os destinatários](/rest/issues#list-assignees)
* [Verificar se um usuário pode ser atribuído](/rest/issues#check-if-a-user-can-be-assigned)
* [Listar os problemas de um repositório](/rest/issues#list-repository-issues)
* [Criar um problema](/rest/issues#create-an-issue)
* [Obter um problema](/rest/issues#get-an-issue)
* [Atualizar um problema](/rest/issues#update-an-issue)
* [Bloquear um problema](/rest/issues#lock-an-issue)
* [Desbloquear um problema](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### Trabalhos

* [Obter um trabalho de uma execução de fluxo de trabalho](/rest/actions#get-a-job-for-a-workflow-run)
* [Baixar os logs de trabalho de uma execução de fluxo de trabalho](/rest/actions#download-job-logs-for-a-workflow-run)
* [Listar os trabalhos de uma execução de fluxo de trabalho](/rest/actions#list-jobs-for-a-workflow-run) {% endif %}

#### Rótulos

* [Listar os rótulos de um problema](/rest/issues#list-labels-for-an-issue)
* [Adicionar rótulos a um problema](/rest/issues#add-labels-to-an-issue)
* [Definir os rótulos de um problema](/rest/issues#set-labels-for-an-issue)
* [Remover todos os rótulos de um problema](/rest/issues#remove-all-labels-from-an-issue)
* [Remover um rótulo de um problema](/rest/issues#remove-a-label-from-an-issue)
* [Listar os rótulos de um repositório](/rest/issues#list-labels-for-a-repository)
* [Criar um rótulo](/rest/issues#create-a-label)
* [Obter um rótulo](/rest/issues#get-a-label)
* [Atualizar um rótulo](/rest/issues#update-a-label)
* [Excluir um rótulo](/rest/issues#delete-a-label)
* [Obter os rótulos de cada problema em um marco](/rest/issues#list-labels-for-issues-in-a-milestone)

#### Licenças

* [Obter todas as licenças comumente usadas](/rest/licenses#get-all-commonly-used-licenses)
* [Obter uma licença](/rest/licenses#get-a-license)

#### Markdown

* [Renderizar um documento Markdown](/rest/markdown#render-a-markdown-document)
* [Renderizar um documento Markdown no modo bruto](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### Meta

* [Meta](/rest/meta#meta)

#### Marcos

* [Listar os marcos](/rest/issues#list-milestones)
* [Criar um marco](/rest/issues#create-a-milestone)
* [Obter um marco](/rest/issues#get-a-milestone)
* [Atualizar um marco](/rest/issues#update-a-milestone)
* [Excluir um marco](/rest/issues#delete-a-milestone)

#### Hooks da organização

* [Listar os webhooks de uma organização](/rest/orgs#webhooks/#list-organization-webhooks)
* [Criar um webhook de uma organização](/rest/orgs#webhooks/#create-an-organization-webhook)
* [Obter um webhook de uma organização](/rest/orgs#webhooks/#get-an-organization-webhook)
* [Atualizar um webhook de uma organização](/rest/orgs#webhooks/#update-an-organization-webhook)
* [Excluir um webhook de uma organização](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [Executar ping em um webhook de uma organização](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### Convites da organização

* [Listar os convites pendentes de uma organização](/rest/orgs#list-pending-organization-invitations)
* [Criar um convite de uma organização](/rest/orgs#create-an-organization-invitation)
* [Listar as equipes de convite de uma organização](/rest/orgs#list-organization-invitation-teams) {% endif %}

#### Integrantes da organização

* [Listar os membros de uma organização](/rest/orgs#list-organization-members)
* [Verificar a associação a uma organização de um usuário](/rest/orgs#check-organization-membership-for-a-user)
* [Remover um membro de uma organização](/rest/orgs#remove-an-organization-member)
* [Obter a associação a uma organização de um usuário](/rest/orgs#get-organization-membership-for-a-user)
* [Definir a associação a uma organização de um usuário](/rest/orgs#set-organization-membership-for-a-user)
* [Remover a associação a uma organização de um usuário](/rest/orgs#remove-organization-membership-for-a-user)
* [Listar os membros públicos de uma organização](/rest/orgs#list-public-organization-members)
* [Verificar a associação a uma organização pública de um usuário](/rest/orgs#check-public-organization-membership-for-a-user)
* [Definir a associação a uma organização pública do usuário autenticado](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Remover a associação a uma organização pública do usuário autenticado](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### Colaboradores externos da organização

* [Listar os colaboradores externos de uma organização](/rest/orgs#list-outside-collaborators-for-an-organization)
* [Converter um membro de uma organização em um colaborador externo](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [Remover os colaboradores externos de uma organização](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### Hooks pre-receive da organização

* [Listar os ganchos de pré-recebimento de uma organização](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Obter um gancho de pré-recebimento de uma organização](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Atualizar a imposição de um gancho de pré-recebimento de uma organização](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Remover a imposição de um gancho de pré-recebimento de uma organização](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) {% endif %}

#### Projetos da aquipe da organização

* [Listar os projetos de equipe](/rest/teams#list-team-projects)
* [Verificar as permissões da equipe em um projeto](/rest/teams#check-team-permissions-for-a-project)
* [Adicionar ou atualizar as permissões de projeto de equipe](/rest/teams#add-or-update-team-project-permissions)
* [Remover um projeto de uma equipe](/rest/teams#remove-a-project-from-a-team)

#### Repositórios da equipe da organização

* [Listar os repositórios da equipe](/rest/teams#list-team-repositories)
* [Verificar as permissões da equipe em um repositório](/rest/teams#check-team-permissions-for-a-repository)
* [Adicionar ou atualizar as permissões de repositório da equipe](/rest/teams#add-or-update-team-repository-permissions)
* [Remover um repositório de uma equipe](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### Sincronizar equipe da organização

* [Listar os grupos de IdP de uma equipe](/rest/teams#list-idp-groups-for-a-team)
* [Criar ou atualizar as conexões de grupo de IdP](/rest/teams#create-or-update-idp-group-connections)
* [Listar os grupos de IdP de uma organização](/rest/teams#list-idp-groups-for-an-organization) {% endif %}

#### Equipes da organização

* [Listar as equipes](/rest/teams#list-teams)
* [Criar uma equipe](/rest/teams#create-a-team)
* [Obter uma equipe pelo nome](/rest/teams#get-a-team-by-name)
* [Atualizar uma equipe](/rest/teams#update-a-team)
* [Excluir uma equipe](/rest/teams#delete-a-team) {% ifversion fpt or ghec %}
* [Listar os convites pendentes de uma equipe](/rest/teams#list-pending-team-invitations) {% endif %}
* [Listar os membros da equipe](/rest/teams#list-team-members)
* [Obter a associação a uma equipe de um usuário](/rest/teams#get-team-membership-for-a-user)
* [Adicionar ou atualizar a associação a uma equipe de um usuário](/rest/teams#add-or-update-team-membership-for-a-user)
* [Remover a associação a uma equipe de um usuário](/rest/teams#remove-team-membership-for-a-user)
* [Listar as equipes filho](/rest/teams#list-child-teams)
* [Listar as equipes do usuário autenticado](/rest/teams#list-teams-for-the-authenticated-user)

#### Organizações

* [Listar organizações](/rest/orgs#list-organizations)
* [Obter uma organização](/rest/orgs#get-an-organization)
* [Atualizar uma organização](/rest/orgs#update-an-organization)
* [Listar as associações a uma organização do usuário autenticado](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [Obter a associação a uma organização do usuário autenticado](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Atualizar a associação a uma organização do usuário autenticado](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [Listar as organizações do usuário autenticado](/rest/orgs#list-organizations-for-the-authenticated-user)
* [Listar as organizações de um usuário](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### Autorizações de credencial das organizações

* [Listar as autorizações de SSO do SAML de uma organização](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [Remover uma autorização de SSO do SAML de uma organização](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### Scim das organizações

* [Listar as identidades provisionadas do SCIM](/rest/scim#list-scim-provisioned-identities)
* [Provisionar e convidar um usuário do SCIM](/rest/scim#provision-and-invite-a-scim-user)
* [Obter informações de provisionamento do SCIM de um usuário](/rest/scim#get-scim-provisioning-information-for-a-user)
* [Definir as informações do SCIM de um usuário provisionado](/rest/scim#set-scim-information-for-a-provisioned-user)
* [Atualizar um atributo de um usuário do SCIM](/rest/scim#update-an-attribute-for-a-scim-user)
* [Excluir um usuário do SCIM de uma organização](/rest/scim#delete-a-scim-user-from-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### Importação de fonte

* [Obter um status de importação](/rest/migrations#get-an-import-status)
* [Iniciar uma importação](/rest/migrations#start-an-import)
* [Atualizar uma importação](/rest/migrations#update-an-import)
* [Cancelar uma importação](/rest/migrations#cancel-an-import)
* [Obter os autores do commit](/rest/migrations#get-commit-authors)
* [Mapear o autor de um commit](/rest/migrations#map-a-commit-author)
* [Obter arquivos grandes](/rest/migrations#get-large-files)
* [Atualizar a preferência de LFS do Git](/rest/migrations#update-git-lfs-preference) {% endif %}

#### Colaboradores do projeto

* [Listar os colaboradores do projeto](/rest/projects#list-project-collaborators)
* [Adicionar um colaborador do projeto](/rest/projects#add-project-collaborator)
* [Remover um colaborador do projeto](/rest/projects#remove-project-collaborator)
* [Obter a permissão de projeto para um usuário](/rest/projects#get-project-permission-for-a-user)

#### Projetos

* [Listar os projetos da organização](/rest/projects#list-organization-projects)
* [Criar um projeto da organização](/rest/projects#create-an-organization-project)
* [Obter um projeto](/rest/projects#get-a-project)
* [Atualizar um projeto](/rest/projects#update-a-project)
* [Excluir um projeto](/rest/projects#delete-a-project)
* [Listar as colunas do projeto](/rest/projects#list-project-columns)
* [Criar uma coluna do projeto](/rest/projects#create-a-project-column)
* [Obter uma coluna do projeto](/rest/projects#get-a-project-column)
* [Atualizar uma coluna do projeto](/rest/projects#update-a-project-column)
* [Excluir uma coluna do projeto](/rest/projects#delete-a-project-column)
* [Listar os cartões do projeto](/rest/projects#list-project-cards)
* [Criar um cartão de projeto](/rest/projects#create-a-project-card)
* [Mover uma coluna do projeto](/rest/projects#move-a-project-column)
* [Obter um cartão do projeto](/rest/projects#get-a-project-card)
* [Atualizar um cartão do projeto](/rest/projects#update-a-project-card)
* [Excluir um cartão do projeto](/rest/projects#delete-a-project-card)
* [Mover um cartão do projeto](/rest/projects#move-a-project-card)
* [Listar os projetos do repositório](/rest/projects#list-repository-projects)
* [Criar um projeto do repositório](/rest/projects#create-a-repository-project)

#### Commentários pull

* [Listar os comentários de revisão em uma solicitação de pull](/rest/pulls#list-review-comments-on-a-pull-request)
* [Criar um comentário de revisão para uma solicitação de pull](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [Listar os comentários de revisão em um repositório](/rest/pulls#list-review-comments-in-a-repository)
* [Obter um comentário de revisão para uma solicitação de pull](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [Atualizar um comentário de revisão para uma solicitação de pull](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [Excluir um comentário de revisão para uma solicitação de pull](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### Eventos de revisão de pull request

* [Ignorar uma revisão para uma solicitação de pull](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [Enviar uma revisão para uma solicitação de pull](/rest/pulls#submit-a-review-for-a-pull-request)

#### Solicitações de revisão de pull request

* [Listar os revisores solicitados para uma solicitação de pull](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [Solicitar revisores para uma solicitação de pull](/rest/pulls#request-reviewers-for-a-pull-request)
* [Remover os revisores solicitados de uma solicitação de pull](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### Revisões de pull request

* [Listar as revisões para uma solicitação de pull](/rest/pulls#list-reviews-for-a-pull-request)
* [Criar uma revisão para uma solicitação de pull](/rest/pulls#create-a-review-for-a-pull-request)
* [Obter uma revisão para uma solicitação de pull](/rest/pulls#get-a-review-for-a-pull-request)
* [Atualizar uma revisão para uma solicitação de pull](/rest/pulls#update-a-review-for-a-pull-request)
* [Listar os comentários para uma revisão de solicitação de pull](/rest/pulls#list-comments-for-a-pull-request-review)

#### Pulls

* [Listar as solicitações de pull](/rest/pulls#list-pull-requests)
* [Criar uma solicitação de pull](/rest/pulls#create-a-pull-request)
* [Obter uma solicitação de pull](/rest/pulls#get-a-pull-request)
* [Atualizar uma solicitação de pull](/rest/pulls#update-a-pull-request)
* [Listar os commits em uma solicitação de pull](/rest/pulls#list-commits-on-a-pull-request)
* [Listar os arquivos de solicitações de pull](/rest/pulls#list-pull-requests-files)
* [Verificar se uma solicitação de pull foi mesclada](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [Mesclar uma solicitação de pull (botão Mesclar)](/rest/pulls#merge-a-pull-request)

#### Reações

* [Excluir uma reação](/rest/reactions)
* [Listar as reações a um comentário sobre um commit](/rest/reactions#list-reactions-for-a-commit-comment)
* [Criar uma reação a um comentário sobre um commit](/rest/reactions#create-reaction-for-a-commit-comment)
* [Listar as reações a um problema](/rest/reactions#list-reactions-for-an-issue)
* [Criar uma reação a um problema](/rest/reactions#create-reaction-for-an-issue)
* [Listar as reações a um comentário sobre um problema](/rest/reactions#list-reactions-for-an-issue-comment)
* [Criar uma reação a um comentário sobre um problema](/rest/reactions#create-reaction-for-an-issue-comment)
* [Listar as reações a um comentário de revisão de solicitação de pull](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [Criar uma reação a um comentário de revisão de solicitação de pull](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [Listar as reações a um comentário de discussão em equipe](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [Criar uma reação a um comentário de discussão em equipe](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [Listar as reações a uma discussão em equipe](/rest/reactions#list-reactions-for-a-team-discussion)
* [Criar uma reação a uma discussão em equipe](/rest/reactions#create-reaction-for-a-team-discussion)
* [Excluir uma reação a um comentário sobre um commit](/rest/reactions#delete-a-commit-comment-reaction)
* [Excluir uma reação a um problema](/rest/reactions#delete-an-issue-reaction)
* [Excluir uma reação a um comentário sobre um commit](/rest/reactions#delete-an-issue-comment-reaction)
* [Excluir uma reação a um comentário sobre uma solicitação de pull](/rest/reactions#delete-a-pull-request-comment-reaction)
* [Excluir uma reação a uma discussão em equipe](/rest/reactions#delete-team-discussion-reaction)
* [Excluir uma reação a um comentário sobre uma discussão em equipe](/rest/reactions#delete-team-discussion-comment-reaction)

#### Repositórios

* [Listar os repositórios da organização](/rest/repos#list-organization-repositories)
* [Criar um repositório para o usuário autenticado](/rest/repos#create-a-repository-for-the-authenticated-user)
* [Obter um repositório](/rest/repos#get-a-repository)
* [Atualizar um repositório](/rest/repos#update-a-repository)
* [Excluir um repositório](/rest/repos#delete-a-repository)
* [Comparar dois commits](/rest/commits#compare-two-commits)
* [Listar os colaboradores do repositório](/rest/repos#list-repository-contributors)
* [Listar os forks](/rest/repos#list-forks)
* [Criar um fork](/rest/repos#create-a-fork)
* [Listar as linguagens do repositório](/rest/repos#list-repository-languages)
* [Listar as marcas do repositório](/rest/repos#list-repository-tags)
* [Listar as equipes do repositório](/rest/repos#list-repository-teams)
* [Transferir um repositório](/rest/repos#transfer-a-repository)
* [Listar os repositórios públicos](/rest/repos#list-public-repositories)
* [Listar os repositórios do usuário autenticado](/rest/repos#list-repositories-for-the-authenticated-user)
* [Listar os repositórios de um usuário](/rest/repos#list-repositories-for-a-user)
* [Criar um repositório usando um modelo de repositório](/rest/repos#create-repository-using-a-repository-template)

#### Atividade do repositório

* [Listar os observadores de favoritos](/rest/activity#list-stargazers)
* [Listar os inspetores](/rest/activity#list-watchers)
* [Listar os repositórios adicionados aos favoritos por um usuário](/rest/activity#list-repositories-starred-by-a-user)
* [Verificar se um repositório foi adicionado aos favoritos pelo usuário autenticado](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Adicionar um repositório aos favoritos para o usuário autenticado](/rest/activity#star-a-repository-for-the-authenticated-user)
* [Remover dos favoritos um repositório do usuário autenticado](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [Listar os repositórios inspecionados por um usuário](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### Correções de segurança automatizadas no repositório

* [Habilitar as correções de segurança automatizadas](/rest/repos#enable-automated-security-fixes)
* [Desabilitar as correções de segurança automatizadas](/rest/repos#disable-automated-security-fixes) {% endif %}

#### Branches do repositório

* [Listar os branches](/rest/branches#list-branches)
* [Obter um branch](/rest/branches#get-a-branch)
* [Obter uma proteção do branch](/rest/branches#get-branch-protection)
* [Atualizar uma proteção do branch](/rest/branches#update-branch-protection)
* [Excluir uma proteção do branch](/rest/branches#delete-branch-protection)
* [Obter uma proteção do branch do administrador](/rest/branches#get-admin-branch-protection)
* [Definir uma proteção do branch do administrador](/rest/branches#set-admin-branch-protection)
* [Excluir uma proteção do branch do administrador](/rest/branches#delete-admin-branch-protection)
* [Obter uma proteção de revisão da solicitação de pull](/rest/branches#get-pull-request-review-protection)
* [Atualizar uma proteção de revisão da solicitação de pull](/rest/branches#update-pull-request-review-protection)
* [Excluir uma proteção de revisão da solicitação de pull](/rest/branches#delete-pull-request-review-protection)
* [Obter uma proteção de assinatura do commit](/rest/branches#get-commit-signature-protection)
* [Criar uma proteção de assinatura do commit](/rest/branches#create-commit-signature-protection)
* [Excluir uma proteção de assinatura do commit](/rest/branches#delete-commit-signature-protection)
* [Obter uma proteção contra verificações de status](/rest/branches#get-status-checks-protection)
* [Atualizar uma proteção de verificação de status](/rest/branches#update-status-check-protection)
* [Remover uma proteção de verificação de status](/rest/branches#remove-status-check-protection)
* [Obter todos os contextos de verificação de status](/rest/branches#get-all-status-check-contexts)
* [Adicionar contextos de verificação de status](/rest/branches#add-status-check-contexts)
* [Definir contextos de verificação de status](/rest/branches#set-status-check-contexts)
* [Remover contextos de verificação de status](/rest/branches#remove-status-check-contexts)
* [Obter restrições de acesso](/rest/branches#get-access-restrictions)
* [Excluir restrições de acesso](/rest/branches#delete-access-restrictions)
* [Listar as equipes com acesso ao branch protegido](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [Adicionar restrições de acesso da equipe](/rest/branches#add-team-access-restrictions)
* [Definir restrições de acesso da equipe](/rest/branches#set-team-access-restrictions)
* [Remover uma restrição de acesso da equipe](/rest/branches#remove-team-access-restrictions)
* [Listar as restrições de usuário do branch protegido](/rest/repos#list-users-with-access-to-the-protected-branch)
* [Adicionar restrições de acesso do usuário](/rest/branches#add-user-access-restrictions)
* [Definir restrições de acesso do usuário](/rest/branches#set-user-access-restrictions)
* [Remover restrições de acesso do usuário](/rest/branches#remove-user-access-restrictions)
* [Mesclar uma ramificação](/rest/branches#merge-a-branch)

#### Colaboradores do repositório

* [Listar os colaboradores do repositório](/rest/collaborators#list-repository-collaborators)
* [Verificar se um usuário é colaborador de um repositório](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [Adicionar um colaborador do repositório](/rest/collaborators#add-a-repository-collaborator)
* [Remover um colaborador do repositório](/rest/collaborators#remove-a-repository-collaborator)
* [Obter permissões de repositório de um usuário](/rest/collaborators#get-repository-permissions-for-a-user)

#### Comentários do commit do repositório

* [Listar os comentários sobre um commit de um repositório](/rest/commits#list-commit-comments-for-a-repository)
* [Obter um comentário sobre um commit](/rest/commits#get-a-commit-comment)
* [Atualizar um comentário sobre um commit](/rest/commits#update-a-commit-comment)
* [Excluir um comentário sobre um commit](/rest/commits#delete-a-commit-comment)
* [Listar os comentários sobre um commit](/rest/commits#list-commit-comments)
* [Criar um comentário sobre um commit](/rest/commits#create-a-commit-comment)

#### Commits do repositório

* [Listar os commits](/rest/commits#list-commits)
* [Obter um commit](/rest/commits#get-a-commit)
* [Listar os branches do commit principal](/rest/commits#list-branches-for-head-commit)
* [Listar as solicitações de pull associados ao commit](/rest/repos#list-pull-requests-associated-with-commit)

#### Comunidade do repositório

* [Obter o código de conduta de um repositório](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository) {% ifversion fpt or ghec %}
* [Obter as métricas do perfil da comunidade](/rest/metrics#get-community-profile-metrics) {% endif %}

#### Conteúdo do repositório

* [Baixar um arquivo do repositório](/rest/repos#download-a-repository-archive)
* [Obter o conteúdo de um repositório](/rest/repos#get-repository-content)
* [Criar ou atualizar o conteúdo de um arquivo](/rest/repos#create-or-update-file-contents)
* [Excluir um arquivo](/rest/repos#delete-a-file)
* [Obter o README de um repositório](/rest/repos#get-a-repository-readme)
* [Obter a licença de um repositório](/rest/licenses#get-the-license-for-a-repository)

#### Envio de eventos do repositório

* [Criar um evento de envio de repositório](/rest/repos#create-a-repository-dispatch-event)

#### Hooks do repositório

* [Listar os webhooks de um repositório](/rest/webhooks#list-repository-webhooks)
* [Criar um webhook de um repositório](/rest/webhooks#create-a-repository-webhook)
* [Obter um webhook de um repositório](/rest/webhooks#get-a-repository-webhook)
* [Atualizar um webhook de um repositório](/rest/webhooks#update-a-repository-webhook)
* [Excluir um webhook de um repositório](/rest/webhooks#delete-a-repository-webhook)
* [Executar ping em um webhook de um repositório](/rest/webhooks#ping-a-repository-webhook)
* [Testar o webhook de um repositório de push](/rest/repos#test-the-push-repository-webhook)

#### Convites do repositório

* [Listar os convites de um repositório](/rest/collaborators#list-repository-invitations)
* [Atualizar um convite de um repositório](/rest/collaborators#update-a-repository-invitation)
* [Excluir um convite de um repositório](/rest/collaborators#delete-a-repository-invitation)
* [Listar os convites de um repositório do usuário autenticado](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [Aceitar um convite de um repositório](/rest/collaborators#accept-a-repository-invitation)
* [Recusar um convite de um repositório](/rest/collaborators#decline-a-repository-invitation)

#### Chaves de repositório

* [Listar as chaves de implantação](/rest/deployments#list-deploy-keys)
* [Criar uma chave de implantação](/rest/deployments#create-a-deploy-key)
* [Obter uma chave de implantação](/rest/deployments#get-a-deploy-key)
* [Excluir uma chave de implantação](/rest/deployments#delete-a-deploy-key)

#### Páginas do repositório

* [Obter um site do GitHub Pages](/rest/pages#get-a-github-pages-site)
* [Criar um site do GitHub Pages](/rest/pages#create-a-github-pages-site)
* [Atualizar informações sobre um site do GitHub Pages](/rest/pages#update-information-about-a-github-pages-site)
* [Excluir um site do GitHub Pages](/rest/pages#delete-a-github-pages-site)
* [Listar os builds do GitHub Pages](/rest/pages#list-github-pages-builds)
* [Solicitar um build do GitHub Pages](/rest/pages#request-a-github-pages-build)
* [Obter um build do GitHub Pages](/rest/pages#get-github-pages-build)
* [Obter o último build do Pages](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### Hooks pre-receive do repositório

* [Listar os ganchos de pré-recebimento de um repositório](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Obter um gancho de pré-recebimento de um repositório](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Atualizar a imposição de um gancho de pré-recebimento de um repositório](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Remover a imposição de um gancho de pré-recebimento de um repositório](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) {% endif %}

#### Versões do repositório

* [Listar versões](/rest/repos#list-releases)
* [Criar uma versão](/rest/repos#create-a-release)
* [Obter uma versão](/rest/repos#get-a-release)
* [Atualizar uma versão](/rest/repos#update-a-release)
* [Excluir uma versão](/rest/repos#delete-a-release)
* [Listar os ativos da versão](/rest/repos#list-release-assets)
* [Obter um ativo da versão](/rest/repos#get-a-release-asset)
* [Atualizar um ativo da versão](/rest/repos#update-a-release-asset)
* [Excluir um ativo da versão](/rest/repos#delete-a-release-asset)
* [Obter a última atualização](/rest/repos#get-the-latest-release)
* [Obter uma versão pelo nome da marca](/rest/repos#get-a-release-by-tag-name)

#### Estatísticas do repositório

* [Obter as atividades semanais do commit](/rest/metrics#get-the-weekly-commit-activity)
* [Obter o último ano de atividades do commit](/rest/metrics#get-the-last-year-of-commit-activity)
* [Obter todas as atividades do commit do contribuidor](/rest/metrics#get-all-contributor-commit-activity)
* [Obter a contagem semanal de commits](/rest/metrics#get-the-weekly-commit-count)
* [Obter a contagem de commits por hora para cada dia](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### Alertas de vulnerabilidade de repositório

* [Habilitar os alertas de vulnerabilidade](/rest/repos#enable-vulnerability-alerts)
* [Desabilitar os alertas de vulnerabilidade](/rest/repos#disable-vulnerability-alerts) {% endif %}

#### Root

* [Ponto de extremidade raiz](/rest#root-endpoint)
* [Emojis](/rest/emojis#emojis)
* [Obter o status do limite de taxa do usuário autenticado](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### Pesquisar

* [Buscar um código](/rest/search#search-code)
* [Pesquisar commits](/rest/search#search-commits)
* [Pesquisar rótulos](/rest/search#search-labels)
* [Pesquisar repositórios](/rest/search#search-repositories)
* [Pesquisar tópicos](/rest/search#search-topics)
* [Pesquisar usuários](/rest/search#search-users)

#### Status

* [Obter o status combinado de uma referência específica](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [Listar os status de commit de uma referência](/rest/commits#list-commit-statuses-for-a-reference)
* [Criar um status de commit](/rest/commits#create-a-commit-status)

#### Discussões de equipe

* [Listar as discussões](/rest/teams#list-discussions)
* [Criar uma discussão](/rest/teams#create-a-discussion)
* [Obter uma discussão](/rest/teams#get-a-discussion)
* [Atualizar uma discussão](/rest/teams#update-a-discussion)
* [Excluir uma discussão](/rest/teams#delete-a-discussion)
* [Listar os comentários de uma discussão](/rest/teams#list-discussion-comments)
* [Criar um comentário sobre uma discussão](/rest/teams#create-a-discussion-comment)
* [Obter um comentário sobre uma discussão](/rest/teams#get-a-discussion-comment)
* [Atualizar um comentário sobre uma discussão](/rest/teams#update-a-discussion-comment)
* [Excluir um comentário sobre uma discussão](/rest/teams#delete-a-discussion-comment)

#### Tópicos

* [Obter todos os tópicos de um repositório](/rest/repos#get-all-repository-topics)
* [Substituir todos os tópicos de um repositório](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### Tráfego

* [Obter os clones de um repositório](/rest/metrics#get-repository-clones)
* [Obter os principais caminhos de referência](/rest/metrics#get-top-referral-paths)
* [Obter as principais fontes de referência](/rest/metrics#get-top-referral-sources)
* [Obter as exibições de página](/rest/metrics#get-page-views) {% endif %}

{% ifversion fpt or ghec %}
#### Bloquear usuário

* [Listar os usuários bloqueados pelo usuário autenticado](/rest/users#list-users-blocked-by-the-authenticated-user)
* [Verificar se um usuário foi bloqueado pelo usuário autenticado](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Listar os usuários bloqueados por uma organização](/rest/orgs#list-users-blocked-by-an-organization)
* [Verificar se um usuário foi bloqueado por uma organização](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Bloquear um usuário de uma organização](/rest/orgs#block-a-user-from-an-organization)
* [Desbloquear um usuário de uma organização](/rest/orgs#unblock-a-user-from-an-organization)
* [Bloquear um usuário](/rest/users#block-a-user)
* [Desbloquear um usuário](/rest/users#unblock-a-user) {% endif %}

{% ifversion fpt or ghes or ghec %}
#### Emails do Usuário

{% ifversion fpt or ghec %}
* [Configurar a visibilidade do email principal do usuário autenticado](/rest/users#set-primary-email-visibility-for-the-authenticated-user) {% endif %}
* [Listar os endereços de email do usuário autenticado](/rest/users#list-email-addresses-for-the-authenticated-user)
* [Adicionar endereços de email](/rest/users#add-an-email-address-for-the-authenticated-user)
* [Excluir endereços de email](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [Listar os endereços de email públicos do usuário autenticado](/rest/users#list-public-email-addresses-for-the-authenticated-user) {% endif %}

#### Seguidores do usuário

* [Listar os seguidores de um usuário](/rest/users#list-followers-of-a-user)
* [Listar as pessoas que um usuário segue](/rest/users#list-the-people-a-user-follows)
* [Verificar se uma pessoa é seguida pelo usuário autenticado](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Seguir um usuário](/rest/users#follow-a-user)
* [Deixar de seguir um usuário](/rest/users#unfollow-a-user)
* [Verificar se um usuário segue outro usuário](/rest/users#check-if-a-user-follows-another-user)

#### Chaves Gpg do usuário

* [Listar as chaves GPG do usuário autenticado](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [Criar uma chave GPG do usuário autenticado](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [Obter uma chave GPG do usuário autenticado](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [Excluir uma chave GPG do usuário autenticado](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [Listar as chaves GPG de um usuário](/rest/users#list-gpg-keys-for-a-user)

#### Chaves públicas do usuário

* [Listar as chaves SSH públicas do usuário autenticado](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [Criar uma chave SSH pública do usuário autenticado](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Obter uma chave SSH pública do usuário autenticado](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Excluir uma chave SSH pública do usuário autenticado](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [Listar as chaves públicas de um usuário](/rest/users#list-public-keys-for-a-user)

#### Usuários

* [Obter o usuário autenticado](/rest/users#get-the-authenticated-user)
* [Listar as instalações de aplicativos acessíveis ao token de acesso do usuário](/rest/apps#list-app-installations-accessible-to-the-user-access-token) {% ifversion fpt or ghec %}
* [Listar as assinaturas do usuário autenticado](/rest/apps#list-subscriptions-for-the-authenticated-user) {% endif %}
* [Listar usuários](/rest/users#list-users)
* [Obter um usuário](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### Execuções do fluxo de trabalho

* [Listar as execuções de fluxo de trabalho de um repositório](/rest/actions#list-workflow-runs-for-a-repository)
* [Obter uma execução de fluxo de trabalho](/rest/actions#get-a-workflow-run)
* [Cancelar uma execução de fluxo de trabalho](/rest/actions#cancel-a-workflow-run)
* [Baixar os logs de uma execução de fluxo de trabalho](/rest/actions#download-workflow-run-logs)
* [Excluir logs de uma execução de fluxo de trabalho](/rest/actions#delete-workflow-run-logs)
* [Executar um fluxo de trabalho novamente](/rest/actions#re-run-a-workflow)
* [Listar as execuções de fluxo de trabalho](/rest/actions#list-workflow-runs)
* [Obter o uso de uma execução de fluxo de trabalho](/rest/actions#get-workflow-run-usage) {% endif %}

{% ifversion fpt or ghec %}
#### Fluxos de trabalho

* [Listar os fluxos de trabalho de um repositório](/rest/actions#list-repository-workflows)
* [Obter um fluxo de trabalho](/rest/actions#get-a-workflow)
* [Obter o uso de um fluxo de trabalho](/rest/actions#get-workflow-usage) {% endif %}

## Leitura adicional

- "[Sobre a autenticação no {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

