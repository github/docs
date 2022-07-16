---
title: Identificar e autorizar usuários para aplicativos GitHub
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
shortTitle: Identificar & autorizar usuários
---

{% data reusables.pre-release-program.expiring-user-access-tokens %}

Quando o seu aplicativo GitHub age em nome de um usuário, ele realiza solicitações de usuário para servidor. Essas solicitações devem ser autorizadas com o token de acesso de um usuário. As solicitações de usuário para servidor incluem a solicitação de dados para um usuário, como determinar quais repositórios devem ser exibidos para um determinado usuário. Essas solicitações também incluem ações acionadas por um usuário, como executar uma criação.

{% data reusables.apps.expiring_user_authorization_tokens %}

## Identificando usuários no seu site

Para autorizar usuários para aplicativos-padrão executados no navegador, use o [fluxo de aplicativo web](#web-application-flow).

Para autorizar usuários para aplicativos sem acesso direto ao navegador, como ferramentas de CLI ou gerentes de credenciais do Git, use o [fluxo de dispositivos](#device-flow). O fluxo de dispositivo usa o OAuth 2.0 [Concessão de autorização do dispositivo](https://tools.ietf.org/html/rfc8628).

## Fluxo do aplicativo web

Ao usar o fluxo de aplicativo web, o processo para identificar usuários no seu site é:

1. Os usuários são redirecionados para solicitar sua identidade do GitHub
2. Os usuários são redirecionados de volta para o seu site pelo GitHub
3. Seu aplicativo GitHub acessa a API com o token de acesso do usuário

Se você selecionar **Solicitar autorização de usuário (OAuth) durante a instalação** ao criar ou modificar seu aplicativo, a etapa 1 será concluída durante a instalação do aplicativo. Para obter mais informações, consulte "[Autorizando usuários durante a instalação](/apps/installing-github-apps/#authorizing-users-during-installation)".

### 1. Solicitar identidade do GitHub de um usuário
Direcione o usuário para a seguinte URL em seu navegador:

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Quando seu aplicativo GitHub especifica um parâmetro do `login`, ele solicita aos usuários com uma conta específica que podem usar para iniciar sessão e autorizar seu aplicativo.

#### Parâmetros

| Nome           | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `string` | **Obrigatório.** O ID do cliente para o seu aplicativo GitHub. Você pode encontrá-lo em suas [configurações do aplicativo GitHub](https://github.com/settings/apps) quando você selecionar seu aplicativo. **Observação:** O ID do aplicativo e o ID do cliente não são iguais e não são intercambiáveis.                                                                                                                   |
| `redirect_uri` | `string` | A URL no seu aplicativo para o qual os usuários serão enviados após a autorização. Este deve ser uma correspondência exata para {% ifversion fpt or ghes or ghec %} um dos URLs fornecidos como uma **URL de chamada de retorno**{% else %} ao URL fornecido no campo de **URL de chamada de retorno de autorização do usuário**{% endif %} ao configurar o aplicativo GitHub e não pode conter nenhum parâmetro adicional. |
| `estado`       | `string` | Isso deve conter uma string aleatória para proteger contra ataques falsificados e pode conter quaisquer outros dados arbitrários.                                                                                                                                                                                                                                                                                           |
| `login`        | `string` | Sugere uma conta específica para iniciar a sessão e autorizar o aplicativo.                                                                                                                                                                                                                                                                                                                                                 |
| `allow_signup` | `string` | Independentemente de os usuários autenticados ou não atenticados terem a opção de iscrever-se em {% data variables.product.prodname_dotcom %} durante o fluxo do OAuth. O padrão é `verdadeiro`. Use `falso` quando uma política proibir inscrições.                                                                                                                                                                        |

{% note %}

**Observação:** Você não precisa fornecer escopos na sua solicitação de autorização. Ao contrário do OAuth tradicional, o token de autorização é limitado às permissões associadas ao seu aplicativo GitHub e às do usuário.

{% endnote %}

### 2. Os usuários são redirecionados de volta para o seu site pelo GitHub

Se o usuário aceitar o seu pedido, O GitHub irá fazer o redirecionamento para seu site com um `código temporário` em um parâmetro de código, bem como o estado que você forneceu na etapa anterior em um parâmetro do `estado`. Se os estados não corresponderem, o pedido foi criado por terceiros e o processo deve ser abortado.

{% note %}

**Observação:** Se você selecionar **Solicitar autorização de usuário (OAuth) durante a instalação** ao criar ou modificar seu aplicativo, o GitHub irá retornar um `código temporário` que você precisará trocar por um token de acesso. O parâmetro `estado` não é retornado quando o GitHub inicia o fluxo OAuth durante a instalação do aplicativo.

{% endnote %}

Troque este `código` por um token de acesso.  Quando os tokens vencidos estiverem habilitados, token de acesso irá expirar em 8 horas e o token de atualização irá expirar em 6 meses. Toda vez que você atualizar o token, você receberá um novo token de atualização. Para obter mais informações, consulte "[Atualizando tokens de acesso do usuário para servidor](/developers/apps/refreshing-user-to-server-access-tokens)."

Os tokens de usuário expirados são atualmente um recurso opcional e estão sujeitos a alterações. Para optar por participar do recurso de expiração de token de usuário para servidor, consulte "[Habilitar funcionalidades opcionais para aplicativos](/developers/apps/activating-optional-features-for-apps)."

Faça um pedido para o seguinte ponto de extremidade para receber um token de acesso:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Parâmetros

| Nome            | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `string` | **Obrigatório.** O ID do cliente para o seu aplicativo GitHub.                                                                                                                                                                                                                                                                                                                                                              |
| `client_secret` | `string` | **Obrigatório.** O segredo do cliente do seu aplicativo GitHub.                                                                                                                                                                                                                                                                                                                                                             |
| `código`        | `string` | **Obrigatório.** O código que você recebeu como resposta ao Passo 1.                                                                                                                                                                                                                                                                                                                                                        |
| `redirect_uri`  | `string` | A URL no seu aplicativo para o qual os usuários serão enviados após a autorização. Este deve ser uma correspondência exata para {% ifversion fpt or ghes or ghec %} um dos URLs fornecidos como uma **URL de chamada de retorno**{% else %} ao URL fornecido no campo de **URL de chamada de retorno de autorização do usuário**{% endif %} ao configurar o aplicativo GitHub e não pode conter nenhum parâmetro adicional. |
| `estado`        | `string` | A string aleatória inexplicável que você forneceu na etapa 1.                                                                                                                                                                                                                                                                                                                                                               |

#### Resposta

Por padrão, a resposta assume o seguinte formato. Os parâmetros de resposta `expires_in`, `refresh_token`, e `refresh_token_expires_in` só são retornados quando você habilita os token de acesso de usuário para servidor vencidos.

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

### 3. Seu aplicativo GitHub acessa a API com o token de acesso do usuário

O token de acesso do usuário permite que o aplicativo GitHub faça solicitações para a API em nome de um usuário.

    Autorização: token OUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por exemplo, no cURL você pode definir o cabeçalho de autorização da seguinte forma:

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Fluxo de dispositivo

{% note %}

**Nota:** O fluxo do dispositivo está na versão beta pública e sujeito a alterações.

{% endnote %}

O fluxo de dispositivos permite que você autorize usuários para um aplicativo sem cabeçalho, como uma ferramenta de CLI ou um gerenciador de credenciais do Git.

{% ifversion device-flow-is-opt-in %}Antes de poder usar usar o fluxo do dispositivo para identificar e autorizar usuários, primeiro você deve habilitá-lo nas configurações do aplicativo. Para obter mais informações sobre como habilitar o fluxo do dispositivo, consulte "[Modificando um aplicativo GitHub](/developers/apps/managing-github-apps/modifying-a-github-app)". {% endif %}Para obter mais informações sobre autorização de usuários que usam o fluxo do dispositivo, consulte "[Autorizar aplicativos OAuth](/developers/apps/authorizing-oauth-apps#device-flow)."

## Verifique quais recursos de instalação um usuário pode acessar

Depois de ter um token OAuth para um usuário, você pode verificar quais instalações o usuário poderá acessar.

    Authorization: token OAUTH-TOKEN
    GET /user/installations

Você também pode verificar quais repositórios são acessíveis a um usuário para uma instalação.

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Você pode encontrar mais informações em: [Listar instalações de aplicativos acessíveis para o token de acesso do usuário](/rest/apps#list-app-installations-accessible-to-the-user-access-token) e [Listar repositórios acessíveis para o token de acesso do usuário](/rest/apps#list-repositories-accessible-to-the-user-access-token).

## Tratar uma autorização revogada do aplicativo GitHub

Se um usuário revogar sua autorização de um aplicativo GitHub, o aplicativo receberá o webhook [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) por padrão. Os aplicativos GitHub não podem cancelar a assinatura deste evento. {% data reusables.webhooks.authorization_event %}

## Permissões no nível do usuário

Você pode adicionar permissões de nível de usuário ao seu aplicativo GitHub para acessar os recursos de usuários, como, por exemplo, e-mails de usuários, concedidos por usuários individuais como parte do fluxo de autorização do usuário [](#identifying-users-on-your-site). As permissões de nível de usuário diferem das [permissões do repositório do nível de organização](/rest/overview/permissions-required-for-github-apps), que são concedidas no momento da instalação em uma conta de organização ou pessoal.

Você pode selecionar permissões de nível de usuário nas configurações do seu aplicativo GitHub na seção **Permissões de usuário** na página **Permissões & webhooks**. Para obter mais informações sobre como selecionar permissões, consulte "[Editando permissões de um aplicativo GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

Quando um usuário instala seu aplicativo em sua conta, o prompt de instalação listará as permissões de nível de usuário que seu aplicativo solicita e explicará que o aplicativo pode pedir essas permissões a usuários individuais.

Como as permissões de nível de usuário são concedidas em uma base de usuário individual, você poderá adicioná-las ao aplicativo existente sem pedir que os usuários façam a atualização. No entanto, você precisa enviar usuários existentes através do fluxo de autorização do usuário para autorizar a nova permissão e obter um novo token de usuário para servidor para essas solicitações.

## Solicitações de usuário para servidor

Embora a maior parte da interação da sua API deva ocorrer usando os tokens de acesso de servidor para servidor, certos pontos de extremidade permitem que você execute ações por meio da API usando um token de acesso do usuário. Seu aplicativo pode fazer as seguintes solicitações usando pontos de extremidade do [GraphQL](/graphql) ou [REST](/rest).

### Pontos de extremidade compatíveis

{% ifversion fpt or ghec %}
#### Executores de ações

* [Listar aplicativos executores para um repositório](/rest/actions#list-runner-applications-for-a-repository)
* [Listar executores auto-hospedados para um repositório](/rest/actions#list-self-hosted-runners-for-a-repository)
* [Obter um executor auto-hospedado para um repositório](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [Excluir um executor auto-hospedado de um repositório](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [Criar um token de registro para um repositório](/rest/actions#create-a-registration-token-for-a-repository)
* [Criar um token de remoção para um repositório](/rest/actions#create-a-remove-token-for-a-repository)
* [Listar aplicativos executores para uma organização](/rest/actions#list-runner-applications-for-an-organization)
* [Listar executores auto-hospedados para uma organização](/rest/actions#list-self-hosted-runners-for-an-organization)
* [Obter um executor auto-hospedado para uma organização](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [Excluir um executor auto-hospedado de uma organização](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [Criar um token de registro para uma organização](/rest/actions#create-a-registration-token-for-an-organization)
* [Criar um token de remoção para uma organização](/rest/actions#create-a-remove-token-for-an-organization)

#### Segredos de ações

* [Obter uma chave pública do repositório](/rest/actions#get-a-repository-public-key)
* [Listar segredos do repositório](/rest/actions#list-repository-secrets)
* [Obter um segredo do repositório](/rest/actions#get-a-repository-secret)
* [Criar ou atualizar o segredo de um repositório](/rest/actions#create-or-update-a-repository-secret)
* [Excluir o segredo de um repositório](/rest/actions#delete-a-repository-secret)
* [Obter chave pública de uma organização](/rest/actions#get-an-organization-public-key)
* [Listar segredos da organização](/rest/actions#list-organization-secrets)
* [Obter segredo de uma organização](/rest/actions#get-an-organization-secret)
* [Criar ou atualizar o segredo de uma organização](/rest/actions#create-or-update-an-organization-secret)
* [Listar repositórios selecionados para o segredo de uma organização](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [Definir repositórios selecionados para o segredo de uma organização](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [Adicionar o repositório selecionado ao segredo de uma organização](/rest/actions#add-selected-repository-to-an-organization-secret)
* [Remover o repositório selecionado do segredo de uma organização](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [Excluir o segredo de uma organização](/rest/actions#delete-an-organization-secret)
{% endif %}

{% ifversion fpt or ghec %}
#### Artefatos

* [Listar artefatos para um repositório](/rest/actions#list-artifacts-for-a-repository)
* [Listar artefatos executados por fluxo de trabalho](/rest/actions#list-workflow-run-artifacts)
* [Obter um artefato](/rest/actions#get-an-artifact)
* [Excluir um artefato](/rest/actions#delete-an-artifact)
* [Fazer o download de um artefato](/rest/actions#download-an-artifact)
{% endif %}

#### Execuções de verificação

* [Criar uma verificação de execução](/rest/checks#create-a-check-run)
* [Obter uma verificação de execução](/rest/checks#get-a-check-run)
* [Atualizar uma execução de verificação](/rest/checks#update-a-check-run)
* [Listar anotações de execução de verificação](/rest/checks#list-check-run-annotations)
* [Listar execuções de verificações em um conjunto de verificações](/rest/checks#list-check-runs-in-a-check-suite)
* [Listar execuções de verificação para uma referência do GIt](/rest/checks#list-check-runs-for-a-git-reference)

#### conjuntos de verificações

* [Criar um conjunto de verificações](/rest/checks#create-a-check-suite)
* [Obter um conjunto de verificações](/rest/checks#get-a-check-suite)
* [Ressolicitar um conjunto de verificação](/rest/checks#rerequest-a-check-suite)
* [Atualizar preferências do repositório para conjuntos de verificações](/rest/checks#update-repository-preferences-for-check-suites)
* [Listar os conjuntos de verificação para uma referência do Git](/rest/checks#list-check-suites-for-a-git-reference)

#### Códigos de conduta

* [Obter todos os códigos de conduta](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [Obter um código de conduta](/rest/codes-of-conduct#get-a-code-of-conduct)

#### Status da implementação

* [Listar status de implementação](/rest/deployments#list-deployment-statuses)
* [Criar um status de implementação](/rest/deployments#create-a-deployment-status)
* [Obter um status de implementação](/rest/deployments#get-a-deployment-status)

#### Implantações

* [Listar implementações](/rest/deployments#list-deployments)
* [Criar uma implementação](/rest/deployments#create-a-deployment)
* [Obter uma implantação](/rest/deployments#get-a-deployment)
* [Excluir uma implantação](/rest/deployments#delete-a-deployment)

#### Eventos

* [Listar eventos públicos de uma rede de repositórios](/rest/activity#list-public-events-for-a-network-of-repositories)
* [Listar eventos públicos da organização](/rest/activity#list-public-organization-events)

#### Feeds

* [Obter feeds](/rest/activity#get-feeds)

#### Blobs do Git

* [Criar um blob](/rest/git#create-a-blob)
* [Obter um blob](/rest/git#get-a-blob)

#### Commits do Git

* [Criar um commit](/rest/git#create-a-commit)
* [Obter um commit](/rest/git#get-a-commit)

#### Refs do Git

* [Criar referência](/rest/git#create-a-reference)
* [Obter uma referência](/rest/git#get-a-reference)
* [Lista de referências correspondentes](/rest/git#list-matching-references)
* [Atualizar uma referência](/rest/git#update-a-reference)
* [Excluir uma referência](/rest/git#delete-a-reference)

#### Tags do Git

* [Criar um objeto de tag](/rest/git#create-a-tag-object)
* [Obter uma tag](/rest/git#get-a-tag)

#### Árvores do Git

* [Criar uma árvore](/rest/git#create-a-tree)
* [Obter uma árvore](/rest/git#get-a-tree)

#### Modelos do Gitignore

* [Obter todos os modelos do gitignore](/rest/gitignore#get-all-gitignore-templates)
* [Obter um modelo do gitignore](/rest/gitignore#get-a-gitignore-template)

#### Instalações

* [Listar repositórios acessíveis ao token de acesso do usuário](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### Limites de interação

* [Obter restrições de interação para uma organização](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [Definir restrições de interação para uma organização](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [Remover restrições de interação para uma organização](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [Obter restrições de interação para um repositório](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [Definir restrições de interação para um repositório](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [Remover restrições de interação para um repositório](/rest/interactions#remove-interaction-restrictions-for-a-repository)
{% endif %}

#### Responsáveis pelo problema

* [Adicionar responsáveis a um problema](/rest/issues#add-assignees-to-an-issue)
* [Remover responsáveis de um problema](/rest/issues#remove-assignees-from-an-issue)

#### Comentários do problema

* [Listar comentários do problema](/rest/issues#list-issue-comments)
* [Criar um comentário do problema](/rest/issues#create-an-issue-comment)
* [Listar comentários de problemas para um repositório](/rest/issues#list-issue-comments-for-a-repository)
* [Obter um comentário do issue](/rest/issues#get-an-issue-comment)
* [Atualizar um comentário do problema](/rest/issues#update-an-issue-comment)
* [Excluir comentário do problema](/rest/issues#delete-an-issue-comment)

#### Eventos do problema

* [Listar eventos do problema](/rest/issues#list-issue-events)

#### Linha do tempo do problema

* [Listar eventos da linha do tempo para um problema](/rest/issues#list-timeline-events-for-an-issue)

#### Problemas

* [Listar problemas atribuídos ao usuário autenticado](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [Listar responsáveis](/rest/issues#list-assignees)
* [Verificar se um usuário pode ser atribuído](/rest/issues#check-if-a-user-can-be-assigned)
* [Listar problemas do repositório](/rest/issues#list-repository-issues)
* [Cria um problema](/rest/issues#create-an-issue)
* [Obter um problema](/rest/issues#get-an-issue)
* [Atualizar um problema](/rest/issues#update-an-issue)
* [Bloquear um problema](/rest/issues#lock-an-issue)
* [Desbloquear um problema](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### Trabalhos

* [Obter um trabalho para uma execução de fluxo de trabalho](/rest/actions#get-a-job-for-a-workflow-run)
* [Fazer o download dos registros de trabalho para execução de um fluxo de trabalho](/rest/actions#download-job-logs-for-a-workflow-run)
* [Listar tarefas para execução de um fluxo de trabalho](/rest/actions#list-jobs-for-a-workflow-run)
{% endif %}

#### Etiquetas

* [Listar etiquetas para um problema](/rest/issues#list-labels-for-an-issue)
* [Adicionar etiquetas a um problema](/rest/issues#add-labels-to-an-issue)
* [Definir etiquetas para um problema](/rest/issues#set-labels-for-an-issue)
* [Remover todas as etiquetas de um problema](/rest/issues#remove-all-labels-from-an-issue)
* [Remover uma etiqueta de um problema](/rest/issues#remove-a-label-from-an-issue)
* [Listar etiquetas para um repositório](/rest/issues#list-labels-for-a-repository)
* [Criar uma etiqueta](/rest/issues#create-a-label)
* [Obter uma etiqueta](/rest/issues#get-a-label)
* [Atualizar uma etiqueta](/rest/issues#update-a-label)
* [Excluir uma etiqueta](/rest/issues#delete-a-label)
* [Obter etiquetas para cada problema em um marco](/rest/issues#list-labels-for-issues-in-a-milestone)

#### Licenças

* [Obter todas as licenças comumente usadas](/rest/licenses#get-all-commonly-used-licenses)
* [Obtenha uma licença](/rest/licenses#get-a-license)

#### markdown

* [Renderizar um documento markdown](/rest/markdown#render-a-markdown-document)
* [Renderizar um documento markdown no modo bruto](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### Meta

* [Meta](/rest/meta#meta)

#### Marcos

* [Listar marcos](/rest/issues#list-milestones)
* [Criar um marco](/rest/issues#create-a-milestone)
* [Obter um marco](/rest/issues#get-a-milestone)
* [Atualizar um marco](/rest/issues#update-a-milestone)
* [Excluir um marco](/rest/issues#delete-a-milestone)

#### Hooks da organização

* [Listar webhooks da organização](/rest/orgs#webhooks/#list-organization-webhooks)
* [Criar um webhook da organização](/rest/orgs#webhooks/#create-an-organization-webhook)
* [Obter um webhook da organização](/rest/orgs#webhooks/#get-an-organization-webhook)
* [Atualizar um webhook da organização](/rest/orgs#webhooks/#update-an-organization-webhook)
* [Excluir um webhook da organização](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [Consultar um webhook da organização](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### Convites da organização

* [Listar convites pendentes para organizações](/rest/orgs#list-pending-organization-invitations)
* [Criar um convite de organização](/rest/orgs#create-an-organization-invitation)
* [Listar equipes de convite da organização](/rest/orgs#list-organization-invitation-teams)
{% endif %}

#### Integrantes da organização

* [Listar integrantes da organização](/rest/orgs#list-organization-members)
* [Verificar associação da organização para um usuário](/rest/orgs#check-organization-membership-for-a-user)
* [Remover um membro da organização](/rest/orgs#remove-an-organization-member)
* [Obter a associação de uma organização para um usuário](/rest/orgs#get-organization-membership-for-a-user)
* [Definir associação de organização para um usuário](/rest/orgs#set-organization-membership-for-a-user)
* [Remover associação de organização para um usuário](/rest/orgs#remove-organization-membership-for-a-user)
* [Listar membros públicos da organização](/rest/orgs#list-public-organization-members)
* [Verificar a associação da organização pública para um usuário](/rest/orgs#check-public-organization-membership-for-a-user)
* [Definir associação à organização pública para o usuário autenticado](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Remover associação à organização pública para o usuário autenticado](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### Colaboradores externos da organização

* [Listar colaboradores externos para uma organização](/rest/orgs#list-outside-collaborators-for-an-organization)
* [Converter um integrante da organização em colaborador externo](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [Remover colaboradores externos de uma organização](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### Hooks pre-receive da organização

* [Listar hooks pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Obter um hook pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Atualizar a aplicação do hook pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Remover a aplicação do hook pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

#### Projetos da aquipe da organização

* [Listar projetos da equipe](/rest/teams#list-team-projects)
* [Verificar permissões da equipe para um projeto](/rest/teams#check-team-permissions-for-a-project)
* [Adicionar ou atualizar as permissões do projeto da equipe](/rest/teams#add-or-update-team-project-permissions)
* [Remover um projeto de uma equipe](/rest/teams#remove-a-project-from-a-team)

#### Repositórios da equipe da organização

* [Listar repositórios da equipe](/rest/teams#list-team-repositories)
* [Verificar permissões da equipe para um repositório](/rest/teams#check-team-permissions-for-a-repository)
* [Adicionar ou atualizar as permissões do repositório da equipe](/rest/teams#add-or-update-team-repository-permissions)
* [Remover um repositório de uma equipe](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### Sincronizar equipe da organização

* [Listar grupos de IdP para uma equipe](/rest/teams#list-idp-groups-for-a-team)
* [Criar ou atualizar conexões de grupo de IdP](/rest/teams#create-or-update-idp-group-connections)
* [Listar grupos de IdP para uma organização](/rest/teams#list-idp-groups-for-an-organization)
{% endif %}

#### Equipes da organização

* [Listar equipes](/rest/teams#list-teams)
* [Criar uma equipe](/rest/teams#create-a-team)
* [Obter uma equipe por nome](/rest/teams#get-a-team-by-name)
* [Atualizar uma equipe](/rest/teams#update-a-team)
* [Excluir uma equipe](/rest/teams#delete-a-team)
{% ifversion fpt or ghec %}
* [Listar convites pendentes da equipe](/rest/teams#list-pending-team-invitations)
{% endif %}
* [Listar integrantes da equipe](/rest/teams#list-team-members)
* [Obter a associação à equipe para um usuário](/rest/teams#get-team-membership-for-a-user)
* [Adicionar ou atualizar membros de equipe para um usuário](/rest/teams#add-or-update-team-membership-for-a-user)
* [Remover associação à equipe para um usuário](/rest/teams#remove-team-membership-for-a-user)
* [Listar equipes secundárias](/rest/teams#list-child-teams)
* [Listar equipes para o usuário autenticado](/rest/teams#list-teams-for-the-authenticated-user)

#### Organizações

* [Listar organizações](/rest/orgs#list-organizations)
* [Obter uma organização](/rest/orgs#get-an-organization)
* [Atualizar uma organização](/rest/orgs#update-an-organization)
* [Listar associações de organizações para os usuários autenticados](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [Obter uma associação de organização para o usuário autenticado](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Atualizar uma associação de organização para o usuário autenticado](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [Listar organizações para o usuário autenticado](/rest/orgs#list-organizations-for-the-authenticated-user)
* [Listar organizações para um usuário](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### Autorizações de credencial das organizações

* [Listar autorizações do SAML SSO para uma organização](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [Remover uma autorização do SAML SSO para uma organização](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% ifversion fpt or ghec %}
#### Scim das organizações

* [Listar identidades provisionadas de SCIM](/rest/scim#list-scim-provisioned-identities)
* [Provisionamento e convite para um usuário de SCIM](/rest/scim#provision-and-invite-a-scim-user)
* [Obter informações de provisionamento de SCIM para um usuário](/rest/scim#get-scim-provisioning-information-for-a-user)
* [Definir informações de SCIM para um usuário provisionado](/rest/scim#set-scim-information-for-a-provisioned-user)
* [Atualizar um atributo para um usuário de SCIM](/rest/scim#update-an-attribute-for-a-scim-user)
* [Excluir um usuário de SCIM de uma organização](/rest/scim#delete-a-scim-user-from-an-organization)
{% endif %}

{% ifversion fpt or ghec %}
#### Importação de fonte

* [Obter um status de importação](/rest/migrations#get-an-import-status)
* [Iniciar importação](/rest/migrations#start-an-import)
* [Atualizar uma importação](/rest/migrations#update-an-import)
* [Cancelar uma importação](/rest/migrations#cancel-an-import)
* [Obtenha autores do commit](/rest/migrations#get-commit-authors)
* [Mapear um autor de commit](/rest/migrations#map-a-commit-author)
* [Obter arquivos grandes](/rest/migrations#get-large-files)
* [Atualizar preferência de LFS do Git](/rest/migrations#update-git-lfs-preference)
{% endif %}

#### Colaboradores do projeto

* [Listar colaboradores do projeto](/rest/projects#list-project-collaborators)
* [Adicionar colaborador do projeto](/rest/projects#add-project-collaborator)
* [Remover colaborador do projeto](/rest/projects#remove-project-collaborator)
* [Obter permissão de projeto para um usuário](/rest/projects#get-project-permission-for-a-user)

#### Projetos

* [Listar projetos da organização](/rest/projects#list-organization-projects)
* [Criar um projeto da organização](/rest/projects#create-an-organization-project)
* [Obter um projeto](/rest/projects#get-a-project)
* [Atualizar um projeto](/rest/projects#update-a-project)
* [Excluir um projeto](/rest/projects#delete-a-project)
* [Listar colunas do projeto](/rest/projects#list-project-columns)
* [Criar uma coluna do projeto](/rest/projects#create-a-project-column)
* [Obter uma coluna do projeto](/rest/projects#get-a-project-column)
* [Atualizar uma coluna do projeto](/rest/projects#update-a-project-column)
* [Excluir uma coluna do projeto](/rest/projects#delete-a-project-column)
* [Listar cartões do projeto](/rest/projects#list-project-cards)
* [Criar um cartão de projeto](/rest/projects#create-a-project-card)
* [Mover uma coluna do projeto](/rest/projects#move-a-project-column)
* [Obter um cartão do projeto](/rest/projects#get-a-project-card)
* [Atualizar um cartão do projeto](/rest/projects#update-a-project-card)
* [Excluir um cartão do projeto](/rest/projects#delete-a-project-card)
* [Mover um cartão do projeto](/rest/projects#move-a-project-card)
* [Listar projetos do repositório](/rest/projects#list-repository-projects)
* [Criar um projeto do repositório](/rest/projects#create-a-repository-project)

#### Commentários pull

* [Listar comentários de revisão em um pull request](/rest/pulls#list-review-comments-on-a-pull-request)
* [Criar um comentário de revisão para um pull request](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [Listar comentários de revisão em um repositório](/rest/pulls#list-review-comments-in-a-repository)
* [Obter um comentário de revisão para um pull request](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [Atualizar um comentário de revisão para um pull request](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [Excluir um comentário de revisão para um pull request](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### Eventos de revisão de pull request

* [Ignorar uma revisão para um pull request](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [Enviar uma revisão para um pull request](/rest/pulls#submit-a-review-for-a-pull-request)

#### Solicitações de revisão de pull request

* [Listar revisores solicitados para um pull request](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [Solicitar revisores para um pull request](/rest/pulls#request-reviewers-for-a-pull-request)
* [Remover revisores solicitados de um pull request](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### Revisões de pull request

* [Listar comentários para um pull request](/rest/pulls#list-reviews-for-a-pull-request)
* [Criar uma revisão para um pull request](/rest/pulls#create-a-review-for-a-pull-request)
* [Obter uma revisão para um pull request](/rest/pulls#get-a-review-for-a-pull-request)
* [Atualizar uma revisão para um pull request](/rest/pulls#update-a-review-for-a-pull-request)
* [Listar comentários para uma revisão de pull request](/rest/pulls#list-comments-for-a-pull-request-review)

#### Pulls

* [Listar pull requests](/rest/pulls#list-pull-requests)
* [Criar um pull request](/rest/pulls#create-a-pull-request)
* [Obter um pull request](/rest/pulls#get-a-pull-request)
* [Atualizar um pull request](/rest/pulls#update-a-pull-request)
* [Listar commits em um pull request](/rest/pulls#list-commits-on-a-pull-request)
* [Listar arquivos de pull requests](/rest/pulls#list-pull-requests-files)
* [Verifiarse um pull request foi mesclado](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [Mesclar um pull request (Botão de mesclar)](/rest/pulls#merge-a-pull-request)

#### Reações

* [Excluir uma reação](/rest/reactions)
* [Listar reações para um comentário de commit](/rest/reactions#list-reactions-for-a-commit-comment)
* [Criar reação para um comentário de commit](/rest/reactions#create-reaction-for-a-commit-comment)
* [Listar reações para um problema](/rest/reactions#list-reactions-for-an-issue)
* [Criar reação para um problema](/rest/reactions#create-reaction-for-an-issue)
* [Listar reações para um comentário do problema](/rest/reactions#list-reactions-for-an-issue-comment)
* [Criar reação para um comentário do problema](/rest/reactions#create-reaction-for-an-issue-comment)
* [Listar reações para um comentário de revisão de pull request](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [Criar reação para um comentário de revisão de pull request](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [Listar reações para um comentário de discussão de equipe](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [Criar reação para um comentário de discussão em equipe](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [Listar reações para uma discussão de equipe](/rest/reactions#list-reactions-for-a-team-discussion)
* [Criar reação para uma discussão em equipe](/rest/reactions#create-reaction-for-a-team-discussion)
* [Excluir uma reação de comentário de commit](/rest/reactions#delete-a-commit-comment-reaction)
* [Excluir uma reação do problema](/rest/reactions#delete-an-issue-reaction)
* [Excluir uma reação a um comentário do commit](/rest/reactions#delete-an-issue-comment-reaction)
* [Excluir reação de comentário do pull request](/rest/reactions#delete-a-pull-request-comment-reaction)
* [Excluir reação para discussão em equipe](/rest/reactions#delete-team-discussion-reaction)
* [Excluir reação para discussão em equipe](/rest/reactions#delete-team-discussion-comment-reaction)

#### Repositórios

* [Listar repositórios da organização](/rest/repos#list-organization-repositories)
* [Criar um repositório para o usuário autenticado](/rest/repos#create-a-repository-for-the-authenticated-user)
* [Obter um repositório](/rest/repos#get-a-repository)
* [Atualizar um repositório](/rest/repos#update-a-repository)
* [Excluir um repositório](/rest/repos#delete-a-repository)
* [Comparar dois commits](/rest/commits#compare-two-commits)
* [Listar contribuidores do repositório](/rest/repos#list-repository-contributors)
* [Listar bifurcações](/rest/repos#list-forks)
* [Criar uma bifurcação](/rest/repos#create-a-fork)
* [Listar idiomas do repositório](/rest/repos#list-repository-languages)
* [Listar tags do repositório](/rest/repos#list-repository-tags)
* [Listar equipes do repositório](/rest/repos#list-repository-teams)
* [Transferir um repositório](/rest/repos#transfer-a-repository)
* [Listar repositórios públicos](/rest/repos#list-public-repositories)
* [Listar repositórios para o usuário autenticado](/rest/repos#list-repositories-for-the-authenticated-user)
* [Listar repositórios para um usuário](/rest/repos#list-repositories-for-a-user)
* [Criar repositório usando um modelo de repositório](/rest/repos#create-repository-using-a-repository-template)

#### Atividade do repositório

* [Listar observadores](/rest/activity#list-stargazers)
* [Listar inspetores](/rest/activity#list-watchers)
* [Listar repositórios favoritados pelo usuário](/rest/activity#list-repositories-starred-by-a-user)
* [Verificar se um repositório foi favoritado pelo usuário autenticado](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Favorite um repositório para o usuário autenticado](/rest/activity#star-a-repository-for-the-authenticated-user)
* [Desmarque um repositório como favorito para o usuário autenticado](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [Listar repositórios inspecionados por um usuário](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### Correções de segurança automatizadas no repositório

* [Habilitar as correções de segurança automatizadas](/rest/repos#enable-automated-security-fixes)
* [Desabilitar as correções de segurança automatizadas](/rest/repos#disable-automated-security-fixes)
{% endif %}

#### Branches do repositório

* [Listar branches](/rest/branches#list-branches)
* [Obter um branch](/rest/branches#get-a-branch)
* [Obter proteção do branch](/rest/branches#get-branch-protection)
* [Atualizar proteção do branch](/rest/branches#update-branch-protection)
* [Excluir proteção do branch](/rest/branches#delete-branch-protection)
* [Obter proteção do branch do administrador](/rest/branches#get-admin-branch-protection)
* [Definir proteção do branch de administrador](/rest/branches#set-admin-branch-protection)
* [Excluir proteção do branch de administrador](/rest/branches#delete-admin-branch-protection)
* [Obter proteção de revisão do pull request](/rest/branches#get-pull-request-review-protection)
* [Atualizar proteção de revisão do pull request](/rest/branches#update-pull-request-review-protection)
* [Excluir proteção de revisão do pull request](/rest/branches#delete-pull-request-review-protection)
* [Obter proteção de assinatura do commit](/rest/branches#get-commit-signature-protection)
* [Criar proteção de assinatura do commit](/rest/branches#create-commit-signature-protection)
* [Excluir proteção de assinatura do commit](/rest/branches#delete-commit-signature-protection)
* [Obter proteção contra verificações de status](/rest/branches#get-status-checks-protection)
* [Atualizar proteção da verificação de status](/rest/branches#update-status-check-protection)
* [Remover proteção da verificação de status](/rest/branches#remove-status-check-protection)
* [Obter todos os contextos de verificação de status](/rest/branches#get-all-status-check-contexts)
* [Adicionar contextos de verificação de status](/rest/branches#add-status-check-contexts)
* [Definir contextos de verificação de status](/rest/branches#set-status-check-contexts)
* [Remover contextos de verificação de status](/rest/branches#remove-status-check-contexts)
* [Obter restrições de acesso](/rest/branches#get-access-restrictions)
* [Excluir restrições de acesso](/rest/branches#delete-access-restrictions)
* [Listar equipes com acesso ao branch protegido](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [Adicionar restrições de acesso da equipe](/rest/branches#add-team-access-restrictions)
* [Definir restrições de acesso da equipe](/rest/branches#set-team-access-restrictions)
* [Remover restrição de acesso da equipe](/rest/branches#remove-team-access-restrictions)
* [Listar restrições de usuário do branch protegido](/rest/repos#list-users-with-access-to-the-protected-branch)
* [Adicionar restrições de acesso do usuário](/rest/branches#add-user-access-restrictions)
* [Definir restrições de acesso do usuário](/rest/branches#set-user-access-restrictions)
* [Remover restrições de acesso do usuário](/rest/branches#remove-user-access-restrictions)
* [Mesclar um branch](/rest/branches#merge-a-branch)

#### Colaboradores do repositório

* [Listar colaboradores do repositório](/rest/collaborators#list-repository-collaborators)
* [Verifique se um usuário é colaborador de um repositório](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [Adicionar colaborador de repositório](/rest/collaborators#add-a-repository-collaborator)
* [Remover um colaborador de repositório](/rest/collaborators#remove-a-repository-collaborator)
* [Obter permissões de repositório para um usuário](/rest/collaborators#get-repository-permissions-for-a-user)

#### Comentários do commit do repositório

* [Listar comentários de commit para um repositório](/rest/commits#list-commit-comments-for-a-repository)
* [Obter um comentário de commit](/rest/commits#get-a-commit-comment)
* [Atualizar um comentário de commit](/rest/commits#update-a-commit-comment)
* [Excluir um comentário de commit](/rest/commits#delete-a-commit-comment)
* [Listar comentários de commit](/rest/commits#list-commit-comments)
* [Criar um comentário de commit](/rest/commits#create-a-commit-comment)

#### Commits do repositório

* [Listar commits](/rest/commits#list-commits)
* [Obter um commit](/rest/commits#get-a-commit)
* [Listar branches para o commit principal](/rest/commits#list-branches-for-head-commit)
* [Listar pull requests associados ao commit](/rest/repos#list-pull-requests-associated-with-commit)

#### Comunidade do repositório

* [Obter o código de conduta para um repositório](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository)
{% ifversion fpt or ghec %}
* [Obter métricas do perfil da comunidade](/rest/metrics#get-community-profile-metrics)
{% endif %}

#### Conteúdo do repositório

* [Fazer o download de um arquivo do repositório](/rest/repos#download-a-repository-archive)
* [Obter conteúdo de repositório](/rest/repos#get-repository-content)
* [Criar ou atualizar conteúdo do arquivo](/rest/repos#create-or-update-file-contents)
* [Excluir um arquivo](/rest/repos#delete-a-file)
* [Obter um README do repositório](/rest/repos#get-a-repository-readme)
* [Obter a licença para um repositório](/rest/licenses#get-the-license-for-a-repository)

#### Envio de eventos do repositório

* [Criar um evento de envio de repositório](/rest/repos#create-a-repository-dispatch-event)

#### Hooks do repositório

* [Listar webhooks de repositório](/rest/webhooks#list-repository-webhooks)
* [Criar um webhook do repositório](/rest/webhooks#create-a-repository-webhook)
* [Obter um webhook do repositório](/rest/webhooks#get-a-repository-webhook)
* [Atualizar um webhook do repositório](/rest/webhooks#update-a-repository-webhook)
* [Excluir um webhook do repositório](/rest/webhooks#delete-a-repository-webhook)
* [Fazer ping no webhook de um repositório](/rest/webhooks#ping-a-repository-webhook)
* [Testar o webhook do repositório de push](/rest/repos#test-the-push-repository-webhook)

#### Convites do repositório

* [Listar convites para repositórios](/rest/collaborators#list-repository-invitations)
* [Atualizar um convite para um repositório](/rest/collaborators#update-a-repository-invitation)
* [Excluir um convite para um repositório](/rest/collaborators#delete-a-repository-invitation)
* [Listar convites de repositório para o usuário autenticado](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [Aceitar um convite de repositório](/rest/collaborators#accept-a-repository-invitation)
* [Recusar um convite de repositório](/rest/collaborators#decline-a-repository-invitation)

#### Chaves de repositório

* [Listar chaves de implantação](/rest/deployments#list-deploy-keys)
* [Criar uma chave de implantação](/rest/deployments#create-a-deploy-key)
* [Obter uma chave de implantação](/rest/deployments#get-a-deploy-key)
* [Excluir uma chave de implantação](/rest/deployments#delete-a-deploy-key)

#### Páginas do repositório

* [Obter um site do GitHub Pages](/rest/pages#get-a-github-pages-site)
* [Criar um site do GitHub Pages](/rest/pages#create-a-github-pages-site)
* [Atualizar informações sobre um site do GitHub Pages](/rest/pages#update-information-about-a-github-pages-site)
* [Excluir um site do GitHub Pages](/rest/pages#delete-a-github-pages-site)
* [Listar criações do GitHub Pages](/rest/pages#list-github-pages-builds)
* [Solicitar uma criação do GitHub Pages](/rest/pages#request-a-github-pages-build)
* [Obter uma criação do GitHub Pages](/rest/pages#get-github-pages-build)
* [Obter a última criação de páginas](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### Hooks pre-receive do repositório

* [Listar hooks pre-receive para um repositório](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Obter um hook pre-receive para um repositório](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Atualizar a aplicação de um hook pre-receive para um repositório](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Remover a aplicação de um hook pre-receive para um repositório](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

#### Versões do repositório

* [Listar versões](/rest/repos#list-releases)
* [Criar uma versão](/rest/repos#create-a-release)
* [Obter uma versão](/rest/repos#get-a-release)
* [Atualizar uma versão](/rest/repos#update-a-release)
* [Excluir uma versão](/rest/repos#delete-a-release)
* [Listar ativos da versão](/rest/repos#list-release-assets)
* [Obter um ativo da versão](/rest/repos#get-a-release-asset)
* [Atualizar um ativo da versão](/rest/repos#update-a-release-asset)
* [Excluir um ativo da versão](/rest/repos#delete-a-release-asset)
* [Obter a atualização mais recente](/rest/repos#get-the-latest-release)
* [Obter uma versão pelo nome da tag](/rest/repos#get-a-release-by-tag-name)

#### Estatísticas do repositório

* [Obter a atividade semanal do commit](/rest/metrics#get-the-weekly-commit-activity)
* [Obter o último ano da atividade de commit](/rest/metrics#get-the-last-year-of-commit-activity)
* [Obter toda a atividade do commit do contribuidor](/rest/metrics#get-all-contributor-commit-activity)
* [Obter a contagem semanal do commit](/rest/metrics#get-the-weekly-commit-count)
* [Obter a contagem do commit por hora para cada dia](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### Alertas de vulnerabilidade de repositório

* [Habilitar alertas de vulnerabilidade](/rest/repos#enable-vulnerability-alerts)
* [Desabilitar alertas de vulnerabilidade](/rest/repos#disable-vulnerability-alerts)
{% endif %}

#### Raiz

* [Ponto de extremidade raiz](/rest#root-endpoint)
* [Emojis](/rest/emojis#emojis)
* [Obter status do limite de taxa para o usuário autenticado](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### Pesquisar

* [Buscar código](/rest/search#search-code)
* [Pesquisar commits](/rest/search#search-commits)
* [Pesquisar etiquetas](/rest/search#search-labels)
* [Pesquisar repositórios](/rest/search#search-repositories)
* [Pesquisar tópicos](/rest/search#search-topics)
* [Pesquisar usuários](/rest/search#search-users)

#### Status

* [Obter o status combinado para uma referência específica](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [Listar status de commit para uma referência](/rest/commits#list-commit-statuses-for-a-reference)
* [Criar um status de commit](/rest/commits#create-a-commit-status)

#### Discussões de equipe

* [Listar discussões](/rest/teams#list-discussions)
* [Criar discussão](/rest/teams#create-a-discussion)
* [Obter discussão](/rest/teams#get-a-discussion)
* [Atualizar uma discussão](/rest/teams#update-a-discussion)
* [Excluir uma discussão](/rest/teams#delete-a-discussion)
* [Listar comentários da discussão](/rest/teams#list-discussion-comments)
* [Criar um comentário da discussão](/rest/teams#create-a-discussion-comment)
* [Obter um comentário da discussão](/rest/teams#get-a-discussion-comment)
* [Atualizar um comentário da discussão](/rest/teams#update-a-discussion-comment)
* [Excluir um comentário da discussão](/rest/teams#delete-a-discussion-comment)

#### Tópicos

* [Obter todos os tópicos do repositório](/rest/repos#get-all-repository-topics)
* [Substituir todos os tópicos do repositório](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### Tráfego

* [Obter clones do repositório](/rest/metrics#get-repository-clones)
* [Obter caminhos de referência superior](/rest/metrics#get-top-referral-paths)
* [Obter fontes de referência superior](/rest/metrics#get-top-referral-sources)
* [Obter visualizações de páginas](/rest/metrics#get-page-views)
{% endif %}

{% ifversion fpt or ghec %}
#### Bloquear usuário

* [Listar usuários bloqueados pelo usuário autenticado](/rest/users#list-users-blocked-by-the-authenticated-user)
* [Verificar se um usuário está bloqueado pelo usuário autenticado](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Listar usuários bloqueados por uma organização](/rest/orgs#list-users-blocked-by-an-organization)
* [Verificar se um usuário está bloqueado por uma organização](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Bloquear um usuário de uma organização](/rest/orgs#block-a-user-from-an-organization)
* [Desbloquear um usuário de uma organização](/rest/orgs#unblock-a-user-from-an-organization)
* [Bloquear usuário](/rest/users#block-a-user)
* [Desbloquear usuário](/rest/users#unblock-a-user)
{% endif %}

{% ifversion fpt or ghes or ghec %}
#### Emails do usuário

{% ifversion fpt or ghec %}
* [Configurar visibilidade do e-mail principal para o usuário autenticado](/rest/users#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [Listar endereços de e-mail para o usuário autenticado](/rest/users#list-email-addresses-for-the-authenticated-user)
* [Adicionar endereço(s) de e-mail](/rest/users#add-an-email-address-for-the-authenticated-user)
* [Excluir endereço(s) de e-mail](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [Listar endereços de e-mail públicos para o usuário autenticado](/rest/users#list-public-email-addresses-for-the-authenticated-user)
{% endif %}

#### Seguidores do usuário

* [Listar seguidores de um usuário](/rest/users#list-followers-of-a-user)
* [Listar as pessoas que um usuário segue](/rest/users#list-the-people-a-user-follows)
* [Verificar se uma pessoa é seguida pelo usuário autenticado](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Seguir um usuário](/rest/users#follow-a-user)
* [Deixar de seguir um usuário](/rest/users#unfollow-a-user)
* [Verificar se um usuário segue outro usuário](/rest/users#check-if-a-user-follows-another-user)

#### Chaves Gpg do usuário

* [Listar chaves GPG para o usuário autenticado](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [Criar uma chave GPG para o usuário autenticado](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [Obter uma chave GPG para o usuário autenticado](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [Excluir uma chave GPG para o usuário autenticado](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [Listar chaves gpg para um usuário](/rest/users#list-gpg-keys-for-a-user)

#### Chaves públicas do usuário

* [Listar chaves SSH públicas para o usuário autenticado](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [Criar uma chave SSH pública para o usuário autenticado](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Obter uma chave SSH pública para o usuário autenticado](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Excluir uma chave SSH pública para o usuário autenticado](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [Listar chaves públicas para um usuário](/rest/users#list-public-keys-for-a-user)

#### Usuários

* [Obter o usuário autenticado](/rest/users#get-the-authenticated-user)
* [Listar instalações de aplicativos acessíveis ao token de acesso do usuário](/rest/apps#list-app-installations-accessible-to-the-user-access-token)
{% ifversion fpt or ghec %}
* [Listar assinaturas para o usuário autenticado](/rest/apps#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [Listar usuários](/rest/users#list-users)
* [Obter um usuário](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### Execuções do fluxo de trabalho

* [Listar execuções do fluxo de trabalho para um repositório](/rest/actions#list-workflow-runs-for-a-repository)
* [Obter execução de um fluxo de trabalho](/rest/actions#get-a-workflow-run)
* [Cancelar execução de um fluxo de trabalho](/rest/actions#cancel-a-workflow-run)
* [Fazer o download dos registros de execução do fluxo de trabalho](/rest/actions#download-workflow-run-logs)
* [Excluir registros de execução do fluxo de trabalho](/rest/actions#delete-workflow-run-logs)
* [Rexecutar um fluxo de trabalho](/rest/actions#re-run-a-workflow)
* [Listar execuções do fluxo de trabalho](/rest/actions#list-workflow-runs)
* [Obter uso da execução do fluxo de trabalho](/rest/actions#get-workflow-run-usage)
{% endif %}

{% ifversion fpt or ghec %}
#### Fluxos de trabalho

* [Listar fluxos de trabalho do repositório](/rest/actions#list-repository-workflows)
* [Obter um fluxo de trabalho](/rest/actions#get-a-workflow)
* [Obter uso do workflow](/rest/actions#get-workflow-usage)
{% endif %}

## Leia mais

- "[Sobre a autenticação em {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

