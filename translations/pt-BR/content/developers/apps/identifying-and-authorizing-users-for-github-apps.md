---
title: Identificar e autorizar usuários para aplicativos GitHub
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization/
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps/
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% data reusables.pre-release-program.expiring-user-access-tokens-beta %}

Quando o seu aplicativo GitHub age em nome de um usuário, ele realiza solicitações de usuário para servidor. Essas solicitações devem ser autorizadas com o token de acesso de um usuário. As solicitações de usuário para servidor incluem a solicitação de dados para um usuário, como determinar quais repositórios devem ser exibidos para um determinado usuário. Essas solicitações também incluem ações acionadas por um usuário, como executar uma criação.

{% data reusables.apps.expiring_user_authorization_tokens %}

### Identificando usuários no seu site

Para autorizar usuários para aplicativos-padrão executados no navegador, use o [fluxo de aplicativo web](#web-application-flow).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
Para autorizar usuários para aplicativos sem acesso direto ao navegador, como ferramentas de CLI ou gerentes de credenciais do Git, use o [fluxo de dispositivos](#device-flow). O fluxo de dispositivo usa o OAuth 2.0 [Concessão de autorização do dispositivo](https://tools.ietf.org/html/rfc8628).
{% endif %}

### Fluxo do aplicativo web

Ao usar o fluxo de aplicativo web, o processo para identificar usuários no seu site é:

1. Os usuários são redirecionados para solicitar sua identidade do GitHub
2. Os usuários são redirecionados de volta para o seu site pelo GitHub
3. Seu aplicativo GitHub acessa a API com o token de acesso do usuário

Se você selecionar **Solicitar autorização de usuário (OAuth) durante a instalação** ao criar ou modificar seu aplicativo, a etapa 1 será concluída durante a instalação do aplicativo. Para obter mais informações, consulte "[Autorizando usuários durante a instalação](/apps/installing-github-apps/#authorizing-users-during-installation)".

#### 1. Solicitar identidade do GitHub de um usuário

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Quando seu aplicativo GitHub especifica um parâmetro do `login`, ele solicita aos usuários com uma conta específica que podem usar para iniciar sessão e autorizar seu aplicativo.

##### Parâmetros

| Nome           | Tipo     | Descrição                                                                                                                                                                                                                                                                                  |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `client_id`    | `string` | **Obrigatório.** O ID do cliente para o seu aplicativo GitHub. Você pode encontrá-lo em suas [configurações do aplicativo GitHub](https://github.com/settings/apps) quando você selecionar seu aplicativo.                                                                                 |
| `redirect_uri` | `string` | A URL no seu aplicativo para o qual os usuários serão enviados após a autorização.  Isso deve corresponder exatamente à URL fornecida no campo **URL de chamada de retorno de autorização do usuário** ao configurar o seu aplicativo GitHub e não pode conter nenhum parâmetro adicional. |
| `estado`       | `string` | Isso deve conter uma string aleatória para proteger contra ataques falsificados e pode conter quaisquer outros dados arbitrários.                                                                                                                                                          |
| `login`        | `string` | Sugere uma conta específica para iniciar a sessão e autorizar o aplicativo.                                                                                                                                                                                                                |

{% note %}

**Observação:** Você não precisa fornecer escopos na sua solicitação de autorização. Ao contrário do OAuth tradicional, o token de autorização é limitado às permissões associadas ao seu aplicativo GitHub e às do usuário.

{% endnote %}

#### 2. Os usuários são redirecionados de volta para o seu site pelo GitHub

Se o usuário aceitar o seu pedido, O GitHub irá fazer o redirecionamento para seu site com um `código temporário` em um parâmetro de código, bem como o estado que você forneceu na etapa anterior em um parâmetro do `estado`. Se os estados não corresponderem, o pedido foi criado por terceiros e o processo deve ser abortado.

{% note %}

**Observação:** Se você selecionar **Solicitar autorização de usuário (OAuth) durante a instalação** ao criar ou modificar seu aplicativo, o GitHub irá retornar um `código temporário` que você precisará trocar por um token de acesso. O parâmetro `estado` não é retornado quando o GitHub inicia o fluxo OAuth durante a instalação do aplicativo.

{% endnote %}

Troque este `código` por um token de acesso. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %} Quando os tokens expirados estão habilitados, o token de acesso irá expirar em 8 horas e o token de atualização irá expirar em 6 meses. Toda vez que você atualizar o token, você receberá um novo token de atualização. Para mais informação, consulte "[Refreshing user-to-server access tokens](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)."

Os tokens de usuário expirados atualmente fazem parte da expiração do token beta de usuário para servidor e estão sujeitos a alterações. Para optar por participar do recurso beta do token de usuário para servidor com expiração, consulte "[Ativar os recursos beta para aplicativos](/developers/apps/activating-beta-features-for-apps)".{% endif %}

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### Parâmetros

| Nome            | Tipo     | Descrição                                                                      |
| --------------- | -------- | ------------------------------------------------------------------------------ |
| `client_id`     | `string` | **Obrigatório.** O ID do cliente para o seu aplicativo GitHub.                 |
| `client_secret` | `string` | **Obrigatório.** O segredo do cliente do seu aplicativo GitHub.                |
| `código`        | `string` | **Obrigatório.** O código que você recebeu como resposta ao Passo 1.           |
| `redirect_uri`  | `string` | A URL do seu aplicativo para onde os usuários são enviados após a autorização. |
| `estado`        | `string` | A string aleatória inexplicável que você forneceu na etapa 1.                  |

##### Resposta

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

Por padrão, a resposta assume o seguinte formato. Os parâmetros de resposta `expires_in`, `atualizar_token`, e `refresh_token_expires_in` são apenas retornados quando você ativar o beta para expirar os tokens de acesso do usuário para servidor.

```
{
  "access_token": "e72e16c7e42f292c6912e7710c838347ae178b4a",
  "expires_in": "28800",
  "refresh_token": "r1.c1b4a2e77838347a7e420ce178f2e7c6912e1692",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
{% else %}

Por padrão, a resposta assume o seguinte formato:

    access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer

{% endif %}

#### 3. Seu aplicativo GitHub acessa a API com o token de acesso do usuário

O token de acesso do usuário permite que o aplicativo GitHub faça solicitações para a API em nome de um usuário.

    Autorização: token OUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por exemplo, no cURL você pode definir o cabeçalho de autorização da seguinte forma:

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### Fluxo de dispositivo

{% note %}

**Observação:** O fluxo do dispositivo está na versão beta pública e sujeito a alterações.{% if currentVersion == "free-pro-team@latest" %} Para ativar este recurso beta, consulte "[Ativar recursos beta para aplicativos](/developers/apps/activating-beta-features-for-apps)."{% endif %}

{% endnote %}

O fluxo de dispositivos permite que você autorize usuários para um aplicativo sem cabeçalho, como uma ferramenta de CLI ou um gerenciador de credenciais do Git.

Para obter mais informações sobre autorização de usuários que usam o fluxo do dispositivo, consulte "[Autorizar aplicativos OAuth](/developers/apps/authorizing-oauth-apps#device-flow)".

{% endif %}

### Verifique quais recursos de instalação um usuário pode acessar

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.machine-man-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

Depois de ter um token OAuth para um usuário, você pode verificar quais instalações o usuário poderá acessar.

    Authorization: token OAUTH-TOKEN
    GET /user/installations

Você também pode verificar quais repositórios são acessíveis a um usuário para uma instalação.

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Você pode encontrar mais informações em: [Listar instalações de aplicativos acessíveis para o token de acesso do usuário](/v3/apps/installations/#list-app-installations-accessible-to-the-user-access-token) e [Listar repositórios acessíveis para o token de acesso do usuário](/v3/apps/installations/#list-repositories-accessible-to-the-user-access-token).

### Tratar uma autorização revogada do aplicativo GitHub

Se um usuário revogar sua autorização de um aplicativo GitHub, o aplicativo receberá o webhook [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) por padrão. Os aplicativos GitHub não podem cancelar a assinatura deste evento. {% data reusables.webhooks.authorization_event %}

### Permissões no nível do usuário

Você pode adicionar permissões de nível de usuário ao seu aplicativo GitHub para acessar os recursos de usuários, como, por exemplo, e-mails de usuários, concedidos por usuários individuais como parte do fluxo de autorização do usuário [](#identifying-users-on-your-site). As permissões de nível de usuário diferem das [permissões do repositório do nível de organização](/v3/apps/permissions/), que são concedidas no momento da instalação em uma conta de organização ou usuário.

Você pode selecionar permissões de nível de usuário nas configurações do seu aplicativo GitHub na seção **Permissões de usuário** na página **Permissões & webhooks**. Para obter mais informações sobre como selecionar permissões, consulte "[Editando permissões de um aplicativo GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

Quando um usuário instala seu aplicativo em sua conta, o prompt de instalação listará as permissões de nível de usuário que seu aplicativo solicita e explicará que o aplicativo pode pedir essas permissões a usuários individuais.

Como as permissões de nível de usuário são concedidas em uma base de usuário individual, você poderá adicioná-las ao aplicativo existente sem pedir que os usuários façam a atualização. No entanto, você precisa enviar usuários existentes através do fluxo de autorização do usuário para autorizar a nova permissão e obter um novo token de usuário para servidor para essas solicitações.

### Solicitações de usuário para servidor

Embora a maior parte da interação da sua API deva ocorrer usando os tokens de acesso de servidor para servidor, certos pontos de extremidade permitem que você execute ações por meio da API usando um token de acesso do usuário. Seu aplicativo pode fazer as seguintes solicitações usando pontos de extremidade do [GraphQL v4](/v4/) ou [REST v3](/v3/).

#### Pontos de extremidade compatíveis

{% if currentVersion == "free-pro-team@latest" %}
##### Executores de ações

* [Listar aplicativos executores para um repositório](/v3/actions/self-hosted-runners/#list-runner-applications-for-a-repository)
* [Listar executores auto-hospedados para um repositório](/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-a-repository)
* [Obter um executor auto-hospedado para um repositório](/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-a-repository)
* [Excluir um executor auto-hospedado de um repositório](/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-a-repository)
* [Criar um token de registro para um repositório](/v3/actions/self-hosted-runners/#create-a-registration-token-for-a-repository)
* [Criar um token de remoção para um repositório](/v3/actions/self-hosted-runners/#create-a-remove-token-for-a-repository)
* [Listar aplicativos executores para uma organização](/v3/actions/self-hosted-runners/#list-runner-applications-for-an-organization)
* [Listar executores auto-hospedados para uma organização](/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-an-organization)
* [Obter um executor auto-hospedado para uma organização](/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-an-organization)
* [Excluir um executor auto-hospedado de uma organização](/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-an-organization)
* [Criar um token de registro para uma organização](/v3/actions/self-hosted-runners/#create-a-registration-token-for-an-organization)
* [Criar um token de remoção para uma organização](/v3/actions/self-hosted-runners/#create-a-remove-token-for-an-organization)

##### Segredos de ações

* [Obter uma chave pública do repositório](/v3/actions/secrets/#get-a-repository-public-key)
* [Listar segredos do repositório](/v3/actions/secrets/#list-repository-secrets)
* [Obter um segredo do repositório](/v3/actions/secrets/#get-a-repository-secret)
* [Criar ou atualizar o segredo de um repositório](/v3/actions/secrets/#create-or-update-a-repository-secret)
* [Excluir o segredo de um repositório](/v3/actions/secrets/#delete-a-repository-secret)
* [Obter chave pública de uma organização](/v3/actions/secrets/#get-an-organization-public-key)
* [Listar segredos da organização](/v3/actions/secrets/#list-organization-secrets)
* [Obter segredo de uma organização](/v3/actions/secrets/#get-an-organization-secret)
* [Criar ou atualizar o segredo de uma organização](/v3/actions/secrets/#create-or-update-an-organization-secret)
* [Listar repositórios selecionados para o segredo de uma organização](/v3/actions/secrets/#list-selected-repositories-for-an-organization-secret)
* [Definir repositórios selecionados para o segredo de uma organização](/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret)
* [Adicionar o repositório selecionado ao segredo de uma organização](/v3/actions/secrets/#add-selected-repository-to-an-organization-secret)
* [Remover o repositório selecionado do segredo de uma organização](/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret)
* [Excluir o segredo de uma organização](/v3/actions/secrets/#delete-an-organization-secret)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Artefatos

* [Listar artefatos para um repositório](/v3/actions/artifacts/#list-artifacts-for-a-repository)
* [Listar artefatos executados por fluxo de trabalho](/v3/actions/artifacts/#list-workflow-run-artifacts)
* [Obter um artefato](/v3/actions/artifacts/#get-an-artifact)
* [Excluir um artefato](/v3/actions/artifacts/#delete-an-artifact)
* [Fazer o download de um artefato](/v3/actions/artifacts/#download-an-artifact)
{% endif %}

##### Execuções de verificação

* [Criar uma verificação de execução](/v3/checks/runs/#create-a-check-run)
* [Obter uma verificação de execução](/v3/checks/runs/#get-a-check-run)
* [Atualizar uma execução de verificação](/v3/checks/runs/#update-a-check-run)
* [Listar anotações de execução de verificação](/v3/checks/runs/#list-check-run-annotations)
* [Listar execuções de verificações em um conjunto de verificações](/v3/checks/runs/#list-check-runs-in-a-check-suite)
* [Listar execuções de verificação para uma referência do GIt](/v3/checks/runs/#list-check-runs-for-a-git-reference)

##### conjuntos de verificações

* [Criar um conjunto de verificações](/v3/checks/suites/#create-a-check-suite)
* [Obter um conjunto de verificações](/v3/checks/suites/#get-a-check-suite)
* [Ressolicitar um conjunto de verificação](/v3/checks/suites/#rerequest-a-check-suite)
* [Atualizar preferências do repositório para conjuntos de verificações](/v3/checks/suites/#update-repository-preferences-for-check-suites)
* [Listar os conjuntos de verificação para uma referência do Git](/v3/checks/suites/#list-check-suites-for-a-git-reference)

##### Códigos de conduta

* [Obter todos os códigos de conduta](/v3/codes_of_conduct/#get-all-codes-of-conduct)
* [Obter um código de conduta](/v3/codes_of_conduct/#get-a-code-of-conduct)

##### Status da implementação

* [Listar status de implementação](/v3/repos/deployments/#list-deployment-statuses)
* [Criar um status de implementação](/v3/repos/deployments/#create-a-deployment-status)
* [Obter um status de implementação](/v3/repos/deployments/#get-a-deployment-status)

##### Implantações

* [Listar implementações](/v3/repos/deployments/#list-deployments)
* [Criar uma implementação](/v3/repos/deployments/#create-a-deployment)
* [Obter uma implementação](/v3/repos/deployments/#get-a-deployment){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
* [Excluir uma implementação](/v3/repos/deployments/#delete-a-deployment){% endif %}

##### Eventos

* [Listar eventos públicos de uma rede de repositórios](/v3/activity/events/#list-public-events-for-a-network-of-repositories)
* [Listar eventos públicos da organização](/v3/activity/events/#list-public-organization-events)

##### Feeds

* [Obter feeds](/v3/activity/feeds/#get-feeds)

##### Blobs do Git

* [Criar um blob](/v3/git/blobs/#create-a-blob)
* [Obter um blob](/v3/git/blobs/#get-a-blob)

##### Commits do Git

* [Criar um commit](/v3/git/commits/#create-a-commit)
* [Obter um commit](/v3/git/commits/#get-a-commit)

##### Refs do Git

* [Criar uma referência](/v3/git/refs/#create-a-reference){% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
* [Listar referências](/v3/git/refs/#list-references)
* [Obter uma referência](/v3/git/refs/#get-a-reference){% else %}
* [Obter uma referência](/v3/git/refs/#get-a-reference)
* [Lista de referências correspondentes](/v3/git/refs/#list-matching-references){% endif %}
* [Atualizar uma referência](/v3/git/refs/#update-a-reference)
* [Excluir uma referência](/v3/git/refs/#delete-a-reference)

##### Tags do Git

* [Criar um objeto de tag](/v3/git/tags/#create-a-tag-object)
* [Obter uma tag](/v3/git/tags/#get-a-tag)

##### Árvores do Git

* [Criar uma árvore](/v3/git/trees/#create-a-tree)
* [Obter uma árvore](/v3/git/trees/#get-a-tree)

##### Modelos do Gitignore

* [Obter todos os modelos do gitignore](/v3/gitignore/#get-all-gitignore-templates)
* [Obter um modelo do gitignore](/v3/gitignore/#get-a-gitignore-template)

##### Instalações

* [Listar repositórios acessíveis ao token de acesso do usuário](/v3/apps/installations/#list-repositories-accessible-to-the-user-access-token)

{% if currentVersion == "free-pro-team@latest" %}
##### Limites de interação

* [Obter restrições de interação para uma organização](/v3/interactions/orgs/#get-interaction-restrictions-for-an-organization)
* [Definir restrições de interação para uma organização](/v3/interactions/orgs/#set-interaction-restrictions-for-an-organization)
* [Remover restrições de interação para uma organização](/v3/interactions/orgs/#remove-interaction-restrictions-for-an-organization)
* [Obter restrições de interação para um repositório](/v3/interactions/repos/#get-interaction-restrictions-for-a-repository)
* [Definir restrições de interação para um repositório](/v3/interactions/repos/#set-interaction-restrictions-for-a-repository)
* [Remover restrições de interação para um repositório](/v3/interactions/repos/#remove-interaction-restrictions-for-a-repository)
{% endif %}

##### Responsáveis pelo problema

* [Adicionar responsáveis a um problema](/v3/issues/assignees/#add-assignees-to-an-issue)
* [Remover responsáveis de um problema](/v3/issues/assignees/#remove-assignees-from-an-issue)

##### Comentários do problema

* [Listar comentários do problema](/v3/issues/comments/#list-issue-comments)
* [Criar um comentário do problema](/v3/issues/comments/#create-an-issue-comment)
* [Listar comentários de problemas para um repositório](/v3/issues/comments/#list-issue-comments-for-a-repository)
* [Obter um comentário do issue](/v3/issues/comments/#get-an-issue-comment)
* [Atualizar um comentário do problema](/v3/issues/comments/#update-an-issue-comment)
* [Excluir comentário do problema](/v3/issues/comments/#delete-an-issue-comment)

##### Eventos do problema

* [Listar eventos do problema](/v3/issues/events/#list-issue-events)

##### Linha do tempo do problema

* [Listar eventos da linha do tempo para um problema](/v3/issues/timeline/#list-timeline-events-for-an-issue)

##### Problemas

* [Listar problemas atribuídos ao usuário autenticado](/v3/issues/#list-issues-assigned-to-the-authenticated-user)
* [Listar responsáveis](/v3/issues/assignees/#list-assignees)
* [Verificar se um usuário pode ser atribuído](/v3/issues/assignees/#check-if-a-user-can-be-assigned)
* [Listar problemas do repositório](/v3/issues/#list-repository-issues)
* [Cria um problema](/v3/issues/#create-an-issue)
* [Obter um problema](/v3/issues/#get-an-issue)
* [Atualizar um problema](/v3/issues/#update-an-issue)
* [Bloquear um problema](/v3/issues/#lock-an-issue)
* [Desbloquear um problema](/v3/issues/#unlock-an-issue)

{% if currentVersion == "free-pro-team@latest" %}
##### Trabalhos

* [Obter um trabalho para uma execução de fluxo de trabalho](/v3/actions/workflow-jobs/#get-a-job-for-a-workflow-run)
* [Fazer o download dos registros de trabalho para execução de um fluxo de trabalho](/v3/actions/workflow-jobs/#download-job-logs-for-a-workflow-run)
* [Listar tarefas para execução de um fluxo de trabalho](/v3/actions/workflow-jobs/#list-jobs-for-a-workflow-run)
{% endif %}

##### Etiquetas

* [Listar etiquetas para um problema](/v3/issues/labels/#list-labels-for-an-issue)
* [Adicionar etiquetas a um problema](/v3/issues/labels/#add-labels-to-an-issue)
* [Definir etiquetas para um problema](/v3/issues/labels/#set-labels-for-an-issue)
* [Remover todas as etiquetas de um problema](/v3/issues/labels/#remove-all-labels-from-an-issue)
* [Remover uma etiqueta de um problema](/v3/issues/labels/#remove-a-label-from-an-issue)
* [Listar etiquetas para um repositório](/v3/issues/labels/#list-labels-for-a-repository)
* [Criar uma etiqueta](/v3/issues/labels/#create-a-label)
* [Obter uma etiqueta](/v3/issues/labels/#get-a-label)
* [Atualizar uma etiqueta](/v3/issues/labels/#update-a-label)
* [Excluir uma etiqueta](/v3/issues/labels/#delete-a-label)
* [Obter etiquetas para cada problema em um marco](/v3/issues/labels/#list-labels-for-issues-in-a-milestone)

##### Licenças

* [Obter todas as licenças comumente usadas](/v3/licenses/#get-all-commonly-used-licenses)
* [Obtenha uma licença](/v3/licenses/#get-a-license)

##### markdown

* [Renderizar um documento markdown](/v3/markdown/#render-a-markdown-document)
* [Renderizar um documento markdown no modo bruto](/v3/markdown/#render-a-markdown-document-in-raw-mode)

##### Meta

* [Meta](/v3/meta/#meta)

##### Marcos

* [Listar marcos](/v3/issues/milestones/#list-milestones)
* [Criar um marco](/v3/issues/milestones/#create-a-milestone)
* [Obter um marco](/v3/issues/milestones/#get-a-milestone)
* [Atualizar um marco](/v3/issues/milestones/#update-a-milestone)
* [Excluir um marco](/v3/issues/milestones/#delete-a-milestone)

##### Hooks da organização

* [Listar webhooks da organização](/v3/orgs/hooks/#list-organization-webhooks)
* [Criar um webhook da organização](/v3/orgs/hooks/#create-an-organization-webhook)
* [Obter um webhook da organização](/v3/orgs/hooks/#get-an-organization-webhook)
* [Atualizar um webhook da organização](/v3/orgs/hooks/#update-an-organization-webhook)
* [Excluir um webhook da organização](/v3/orgs/hooks/#delete-an-organization-webhook)
* [Consultar um webhook da organização](/v3/orgs/hooks/#ping-an-organization-webhook)

{% if currentVersion == "free-pro-team@latest" %}
##### Convites da organização

* [Listar convites pendentes para organizações](/v3/orgs/members/#list-pending-organization-invitations)
* [Criar um convite de organização](/v3/orgs/members/#create-an-organization-invitation)
* [Listar equipes de convite da organização](/v3/orgs/members/#list-organization-invitation-teams)
{% endif %}

##### Integrantes da organização

* [Listar integrantes da organização](/v3/orgs/members/#list-organization-members)
* [Verificar associação da organização para um usuário](/v3/orgs/members/#check-organization-membership-for-a-user)
* [Remover um membro da organização](/v3/orgs/members/#remove-an-organization-member)
* [Obter a associação de uma organização para um usuário](/v3/orgs/members/#get-organization-membership-for-a-user)
* [Definir associação de organização para um usuário](/v3/orgs/members/#set-organization-membership-for-a-user)
* [Remover associação de organização para um usuário](/v3/orgs/members/#remove-organization-membership-for-a-user)
* [Listar membros públicos da organização](/v3/orgs/members/#list-public-organization-members)
* [Verificar a associação da organização pública para um usuário](/v3/orgs/members/#check-public-organization-membership-for-a-user)
* [Definir associação à organização pública para o usuário autenticado](/v3/orgs/members/#set-public-organization-membership-for-the-authenticated-user)
* [Remover associação à organização pública para o usuário autenticado](/v3/orgs/members/#remove-public-organization-membership-for-the-authenticated-user)

##### Colaboradores externos da organização

* [Listar colaboradores externos para uma organização](/v3/orgs/outside_collaborators/#list-outside-collaborators-for-an-organization)
* [Converter um integrante da organização em colaborador externo](/v3/orgs/outside_collaborators/#convert-an-organization-member-to-outside-collaborator)
* [Remover colaboradores externos de uma organização](/v3/orgs/outside_collaborators/#remove-outside-collaborator-from-an-organization)

{% if currentVersion != "free-pro-team@latest" %}
##### Hooks pre-receive da organização

* [Listar hooks pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Obter um hook pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Atualizar a aplicação do hook pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Remover a aplicação do hook pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
##### Projetos da aquipe da organização

* [Listar projetos da equipe](/v3/teams/#list-team-projects)
* [Verificar permissões da equipe para um projeto](/v3/teams/#check-team-permissions-for-a-project)
* [Adicionar ou atualizar as permissões do projeto da equipe](/v3/teams/#add-or-update-team-project-permissions)
* [Remover um projeto de uma equipe](/v3/teams/#remove-a-project-from-a-team)
{% endif %}

##### Repositórios da equipe da organização

* [Listar repositórios da equipe](/v3/teams/#list-team-repositories)
* [Verificar permissões da equipe para um repositório](/v3/teams/#check-team-permissions-for-a-repository)
* [Adicionar ou atualizar as permissões do repositório da equipe](/v3/teams/#add-or-update-team-repository-permissions)
* [Remover um repositório de uma equipe](/v3/teams/#remove-a-repository-from-a-team)

{% if currentVersion == "free-pro-team@latest" %}
##### Sincronizar equipe da organização

* [Listar grupos de idp para uma equipe](/v3/teams/team_sync/#list-idp-groups-for-a-team)
* [Criar ou atualizar conexões do grupo de idp](/v3/teams/team_sync/#create-or-update-idp-group-connections)
* [Listar grupos de IdP para uma organização](/v3/teams/team_sync/#list-idp-groups-for-an-organization)
{% endif %}

##### Equipes da organização

* [Listar equipes](/v3/teams/#list-teams)
* [Criar uma equipe](/v3/teams/#create-a-team)
* [Obter uma equipe por nome](/v3/teams/#get-a-team-by-name)
{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
* [Obter uma equipe](/v3/teams/#get-a-team)
{% endif %}
* [Atualizar uma equipe](/v3/teams/#update-a-team)
* [Excluir uma equipe](/v3/teams/#delete-a-team)
{% if currentVersion == "free-pro-team@latest" %}
* [Listar convites pendentes da equipe](/v3/teams/members/#list-pending-team-invitations)
{% endif %}
* [Listar integrantes da equipe](/v3/teams/members/#list-team-members)
* [Obter a associação à equipe para um usuário](/v3/teams/members/#get-team-membership-for-a-user)
* [Adicionar ou atualizar membros de equipe para um usuário](/v3/teams/members/#add-or-update-team-membership-for-a-user)
* [Remover associação à equipe para um usuário](/v3/teams/members/#remove-team-membership-for-a-user)
* [Listar equipes secundárias](/v3/teams/#list-child-teams)
* [Listar equipes para o usuário autenticado](/v3/teams/#list-teams-for-the-authenticated-user)

##### Organizações

* [Listar organizações](/v3/orgs/#list-organizations)
* [Obter uma organização](/v3/orgs/#get-an-organization)
* [Atualizar uma organização](/v3/orgs/#update-an-organization)
* [Listar associações de organizações para os usuários autenticados](/v3/orgs/members/#list-organization-memberships-for-the-authenticated-user)
* [Obter uma associação de organização para o usuário autenticado](/v3/orgs/members/#get-an-organization-membership-for-the-authenticated-user)
* [Atualizar uma associação de organização para o usuário autenticado](/v3/orgs/members/#update-an-organization-membership-for-the-authenticated-user)
* [Listar organizações para o usuário autenticado](/v3/orgs/#list-organizations-for-the-authenticated-user)
* [Listar organizações para um usuário](/v3/orgs/#list-organizations-for-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Autorizações de credencial das organizações

* [Listar autorizações do SAML SSO para uma organização](/v3/orgs/#list-saml-sso-authorizations-for-an-organization)
* [Remover uma autorização do SAML SSO para uma organização](/v3/orgs/#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Scim das organizações

* [Listar identidades provisionadas de SCIM](/v3/scim/#list-scim-provisioned-identities)
* [Provisionamento e convite para um usuário de SCIM](/v3/scim/#provision-and-invite-a-scim-user)
* [Obter informações de provisionamento de SCIM para um usuário](/v3/scim/#get-scim-provisioning-information-for-a-user)
* [Definir informações de SCIM para um usuário provisionado](/v3/scim/#set-scim-information-for-a-provisioned-user)
* [Atualizar um atributo para um usuário de SCIM](/v3/scim/#update-an-attribute-for-a-scim-user)
* [Excluir um usuário de SCIM de uma organização](/v3/scim/#delete-a-scim-user-from-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Importação de fonte

* [Obter um status de importação](/v3/migrations/source_imports/#get-an-import-status)
* [Iniciar importação](/v3/migrations/source_imports/#start-an-import)
* [Atualizar uma importação](/v3/migrations/source_imports/#update-an-import)
* [Cancelar uma importação](/v3/migrations/source_imports/#cancel-an-import)
* [Obtenha autores do commit](/v3/migrations/source_imports/#get-commit-authors)
* [Mapear um autor de commit](/v3/migrations/source_imports/#map-a-commit-author)
* [Obter arquivos grandes](/v3/migrations/source_imports/#get-large-files)
* [Atualizar preferência de LFS do Git](/v3/migrations/source_imports/#update-git-lfs-preference)
{% endif %}

##### Colaboradores do projeto

* [Listar colaboradores do projeto](/v3/projects/collaborators/#list-project-collaborators)
* [Adicionar colaborador do projeto](/v3/projects/collaborators/#add-project-collaborator)
* [Remover colaborador do projeto](/v3/projects/collaborators/#remove-project-collaborator)
* [Obter permissão de projeto para um usuário](/v3/projects/collaborators/#get-project-permission-for-a-user)

##### Projetos

* [Listar projetos da organização](/v3/projects/#list-organization-projects)
* [Criar um projeto da organização](/v3/projects/#create-an-organization-project)
* [Obter um projeto](/v3/projects/#get-a-project)
* [Atualizar um projeto](/v3/projects/#update-a-project)
* [Excluir um projeto](/v3/projects/#delete-a-project)
* [Listar colunas do projeto](/v3/projects/columns/#list-project-columns)
* [Criar uma coluna do projeto](/v3/projects/columns/#create-a-project-column)
* [Obter uma coluna do projeto](/v3/projects/columns/#get-a-project-column)
* [Atualizar uma coluna do projeto](/v3/projects/columns/#update-a-project-column)
* [Excluir uma coluna do projeto](/v3/projects/columns/#delete-a-project-column)
* [Listar cartões do projeto](/v3/projects/cards/#list-project-cards)
* [Criar um cartão de projeto](/v3/projects/cards/#create-a-project-card)
* [Mover uma coluna do projeto](/v3/projects/columns/#move-a-project-column)
* [Obter um cartão do projeto](/v3/projects/cards/#get-a-project-card)
* [Atualizar um cartão do projeto](/v3/projects/cards/#update-a-project-card)
* [Excluir um cartão do projeto](/v3/projects/cards/#delete-a-project-card)
* [Mover um cartão do projeto](/v3/projects/cards/#move-a-project-card)
* [Listar projetos do repositório](/v3/projects/#list-repository-projects)
* [Criar um projeto do repositório](/v3/projects/#create-a-repository-project)

##### Commentários pull

* [Listar comentários de revisão em um pull request](/v3/pulls/comments/#list-review-comments-on-a-pull-request)
* [Criar um comentário de revisão para um pull request](/v3/pulls/comments/#create-a-review-comment-for-a-pull-request)
* [Listar comentários de revisão em um repositório](/v3/pulls/comments/#list-review-comments-in-a-repository)
* [Obter um comentário de revisão para um pull request](/v3/pulls/comments/#get-a-review-comment-for-a-pull-request)
* [Atualizar um comentário de revisão para um pull request](/v3/pulls/comments/#update-a-review-comment-for-a-pull-request)
* [Excluir um comentário de revisão para um pull request](/v3/pulls/comments/#delete-a-review-comment-for-a-pull-request)

##### Eventos de revisão de pull request

* [Ignorar uma revisão para um pull request](/v3/pulls/reviews/#dismiss-a-review-for-a-pull-request)
* [Enviar uma revisão para um pull request](/v3/pulls/reviews/#submit-a-review-for-a-pull-request)

##### Solicitações de revisão de pull request

* [Listar revisores solicitados para um pull request](/v3/pulls/review_requests/#list-requested-reviewers-for-a-pull-request)
* [Solicitar revisores para um pull request](/v3/pulls/review_requests/#request-reviewers-for-a-pull-request)
* [Remover revisores solicitados de um pull request](/v3/pulls/review_requests/#remove-requested-reviewers-from-a-pull-request)

##### Revisões de pull request

* [Listar comentários para um pull request](/v3/pulls/reviews/#list-reviews-for-a-pull-request)
* [Criar uma revisão para um pull request](/v3/pulls/reviews/#create-a-review-for-a-pull-request)
* [Obter uma revisão para um pull request](/v3/pulls/reviews/#get-a-review-for-a-pull-request)
* [Atualizar uma revisão para um pull request](/v3/pulls/reviews/#update-a-review-for-a-pull-request)
* [Listar comentários para uma revisão de pull request](/v3/pulls/reviews/#list-comments-for-a-pull-request-review)

##### Pulls

* [Listar pull requests](/v3/pulls/#list-pull-requests)
* [Criar um pull request](/v3/pulls/#create-a-pull-request)
* [Obter um pull request](/v3/pulls/#get-a-pull-request)
* [Atualizar um pull request](/v3/pulls/#update-a-pull-request)
* [Listar commits em um pull request](/v3/pulls/#list-commits-on-a-pull-request)
* [Listar arquivos de pull requests](/v3/pulls/#list-pull-requests-files)
* [Verifiarse um pull request foi mesclado](/v3/pulls/#check-if-a-pull-request-has-been-merged)
* [Mesclar um pull request (Botão de mesclar)](/v3/pulls/#merge-a-pull-request)

##### Reações

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}* [Excluir uma reação](/v3/reactions/#delete-a-reaction-legacy){% else %}* [Excluir uma reação](/v3/reactions/#delete-a-reaction){% endif %}
* [Listar reações para um comentário de commit](/v3/reactions/#list-reactions-for-a-commit-comment)
* [Criar reação para um comentário de commit](/v3/reactions/#create-reaction-for-a-commit-comment)
* [Listar reações para um problema](/v3/reactions/#list-reactions-for-an-issue)
* [Criar reação para um problema](/v3/reactions/#create-reaction-for-an-issue)
* [Listar reações para um comentário do problema](/v3/reactions/#list-reactions-for-an-issue-comment)
* [Criar reação para um comentário do problema](/v3/reactions/#create-reaction-for-an-issue-comment)
* [Listar reações para um comentário de revisão de pull request](/v3/reactions/#list-reactions-for-a-pull-request-review-comment)
* [Criar reação para um comentário de revisão de pull request](/v3/reactions/#create-reaction-for-a-pull-request-review-comment)
* [Listar reações para um comentário de discussão de equipe](/v3/reactions/#list-reactions-for-a-team-discussion-comment)
* [Criar reação para um comentário de discussão em equipe](/v3/reactions/#create-reaction-for-a-team-discussion-comment)
* [Listar reações para uma discussão de equipe](/v3/reactions/#list-reactions-for-a-team-discussion)
* [Criar reação para uma discussão de equipe](/v3/reactions/#create-reaction-for-a-team-discussion){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
* [Excluir uma reação de comentário de commit](/v3/reactions/#delete-a-commit-comment-reaction)
* [Excluir uma reação do problema](/v3/reactions/#delete-an-issue-reaction)
* [Excluir uma reação a um comentário do commit](/v3/reactions/#delete-an-issue-comment-reaction)
* [Excluir reação de comentário do pull request](/v3/reactions/#delete-a-pull-request-comment-reaction)
* [Excluir reação para discussão em equipe](/v3/reactions/#delete-team-discussion-reaction)
* [Excluir reação de comentário para discussão de equipe](/v3/reactions/#delete-team-discussion-comment-reaction){% endif %}

##### Repositórios

* [Listar repositórios da organização](/v3/repos/#list-organization-repositories)
* [Criar um repositório para o usuário autenticado](/v3/repos/#create-a-repository-for-the-authenticated-user)
* [Obter um repositório](/v3/repos/#get-a-repository)
* [Atualizar um repositório](/v3/repos/#update-a-repository)
* [Excluir um repositório](/v3/repos/#delete-a-repository)
* [Comparar dois commits](/v3/repos/commits/#compare-two-commits)
* [Listar contribuidores do repositório](/v3/repos/#list-repository-contributors)
* [Listar bifurcações](/v3/repos/forks/#list-forks)
* [Criar uma bifurcação](/v3/repos/forks/#create-a-fork)
* [Listar idiomas do repositório](/v3/repos/#list-repository-languages)
* [Listar tags do repositório](/v3/repos/#list-repository-tags)
* [Listar equipes do repositório](/v3/repos/#list-repository-teams)
* [Transferir um repositório](/v3/repos/#transfer-a-repository)
* [Listar repositórios públicos](/v3/repos/#list-public-repositories)
* [Listar repositórios para o usuário autenticado](/v3/repos/#list-repositories-for-the-authenticated-user)
* [Listar repositórios para um usuário](/v3/repos/#list-repositories-for-a-user)
* [Criar repositório usando um modelo de repositório](/v3/repos/#create-repository-using-a-repository-template)

##### Atividade do repositório

* [Listar observadores](/v3/activity/starring/#list-stargazers)
* [Listar inspetores](/v3/activity/watching/#list-watchers)
* [Listar repositórios favoritados pelo usuário](/v3/activity/starring/#list-repositories-starred-by-a-user)
* [Verificar se um repositório foi favoritado pelo usuário autenticado](/v3/activity/starring/#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Favorite um repositório para o usuário autenticado](/v3/activity/starring/#star-a-repository-for-the-authenticated-user)
* [Desmarque um repositório como favorito para o usuário autenticado](/v3/activity/starring/#unstar-a-repository-for-the-authenticated-user)
* [Listar repositórios inspecionados por um usuário](/v3/activity/watching/#list-repositories-watched-by-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Correções de segurança automatizadas no repositório

* [Habilitar as correções de segurança automatizadas](/v3/repos/#enable-automated-security-fixes)
* [Desabilitar as correções de segurança automatizadas](/v3/repos/#disable-automated-security-fixes)
{% endif %}

##### Branches do repositório

* [Listar branches](/v3/repos/branches/#list-branches)
* [Obter um branch](/v3/repos/branches/#get-a-branch)
* [Obter proteção do branch](/v3/repos/branches/#get-branch-protection)
* [Atualizar proteção do branch](/v3/repos/branches/#update-branch-protection)
* [Excluir proteção do branch](/v3/repos/branches/#delete-branch-protection)
* [Obter proteção do branch do administrador](/v3/repos/branches/#get-admin-branch-protection)
* [Definir proteção do branch de administrador](/v3/repos/branches/#set-admin-branch-protection)
* [Excluir proteção do branch de administrador](/v3/repos/branches/#delete-admin-branch-protection)
* [Obter proteção de revisão do pull request](/v3/repos/branches/#get-pull-request-review-protection)
* [Atualizar proteção de revisão do pull request](/v3/repos/branches/#update-pull-request-review-protection)
* [Excluir proteção de revisão do pull request](/v3/repos/branches/#delete-pull-request-review-protection)
* [Obter proteção de assinatura do commit](/v3/repos/branches/#get-commit-signature-protection)
* [Criar proteção de assinatura do commit](/v3/repos/branches/#create-commit-signature-protection)
* [Excluir proteção de assinatura do commit](/v3/repos/branches/#delete-commit-signature-protection)
* [Obter proteção contra verificações de status](/v3/repos/branches/#get-status-checks-protection)
* [Atualizar proteção da verificação de status](/v3/repos/branches/#update-status-check-potection)
* [Remover proteção da verificação de status](/v3/repos/branches/#remove-status-check-protection)
* [Obter todos os contextos de verificação de status](/v3/repos/branches/#get-all-status-check-contexts)
* [Adicionar contextos de verificação de status](/v3/repos/branches/#add-status-check-contexts)
* [Definir contextos de verificação de status](/v3/repos/branches/#set-status-check-contexts)
* [Remover contextos de verificação de status](/v3/repos/branches/#remove-status-check-contexts)
* [Obter restrições de acesso](/v3/repos/branches/#get-access-restrictions)
* [Excluir restrições de acesso](/v3/repos/branches/#delete-access-restrictions)
* [Listar equipes com acesso ao branch protegido](/v3/repos/branches/#list-teams-with-access-to-the-protected-branch)
* [Adicionar restrições de acesso da equipe](/v3/repos/branches/#add-team-access-restrictions)
* [Definir restrições de acesso da equipe](/v3/repos/branches/#set-team-access-restrictions)
* [Remover restrição de acesso da equipe](/v3/repos/branches/#remove-team-access-restrictions)
* [Listar restrições de usuário do branch protegido](/v3/repos/branches/#list-users-with-access-to-the-protected-branch)
* [Adicionar restrições de acesso do usuário](/v3/repos/branches/#add-user-access-restrictions)
* [Definir restrições de acesso do usuário](/v3/repos/branches/#set-user-access-restrictions)
* [Remover restrições de acesso do usuário](/v3/repos/branches/#remove-user-access-restrictions)
* [Mesclar um branch](/v3/repos/merging/#merge-a-branch)

##### Colaboradores do repositório

* [Listar colaboradores do repositório](/v3/repos/collaborators/#list-repository-collaborators)
* [Verifique se um usuário é colaborador de um repositório](/v3/repos/collaborators/#check-if-a-user-is-a-repository-collaborator)
* [Adicionar colaborador de repositório](/v3/repos/collaborators/#add-a-repository-collaborator)
* [Remover um colaborador de repositório](/v3/repos/collaborators/#remove-a-repository-collaborator)
* [Obter permissões de repositório para um usuário](/v3/repos/collaborators/#get-repository-permissions-for-a-user)

##### Comentários do commit do repositório

* [Listar comentários de commit para um repositório](/v3/repos/comments/#list-commit-comments-for-a-repository)
* [Obter um comentário de commit](/v3/repos/comments/#get-a-commit-comment)
* [Atualizar um comentário de commit](/v3/repos/comments/#update-a-commit-comment)
* [Excluir um comentário de commit](/v3/repos/comments/#delete-a-commit-comment)
* [Listar comentários de commit](/v3/repos/comments/#list-commit-comments)
* [Criar um comentário de commit](/v3/repos/comments/#create-a-commit-comment)

##### Commits do repositório

* [Listar commits](/v3/repos/commits/#list-commits)
* [Obter um commit](/v3/repos/commits/#get-a-commit)
* [Listar branches para o commit principal](/v3/repos/commits/#list-branches-for-head-commit)
* [Listar pull requests associados ao commit](/v3/repos/commits/#list-pull-requests-associated-with-commit)

##### Comunidade do repositório

* [Obter o código de conduta para um repositório](/v3/codes_of_conduct/#get-the-code-of-conduct-for-a-repository)
{% if currentVersion == "free-pro-team@latest" %}
* [Obter métricas do perfil da comunidade](/v3/repos/community/#get-community-profile-metrics)
{% endif %}

##### Conteúdo do repositório

* [Fazer o download de um arquivo do repositório](/v3/repos/contents/#download-a-repository-archive)
* [Obter conteúdo de repositório](/v3/repos/contents/#get-repository-content)
* [Criar ou atualizar conteúdo do arquivo](/v3/repos/contents/#create-or-update-file-contents)
* [Excluir um arquivo](/v3/repos/contents/#delete-a-file)
* [Obter um LEIAME do repositório](/v3/repos/contents/#get-a-repository-readme)
* [Obter a licença para um repositório](/v3/licenses/#get-the-license-for-a-repository)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
##### Envio de eventos do repositório

* [Criar um evento de envio de repositório](/v3/repos/#create-a-repository-dispatch-event)
{% endif %}

##### Hooks do repositório

* [Listar webhooks de repositório](/v3/repos/hooks/#list-repository-webhooks)
* [Criar um webhook do repositório](/v3/repos/hooks/#create-a-repository-webhook)
* [Obter um webhook do repositório](/v3/repos/hooks/#get-a-repository-webhook)
* [Atualizar um webhook do repositório](/v3/repos/hooks/#update-a-repository-webhook)
* [Excluir um webhook do repositório](/v3/repos/hooks/#delete-a-repository-webhook)
* [Fazer ping no webhook de um repositório](/v3/repos/hooks/#ping-a-repository-webhook)
* [Testar o webhook do repositório de push](/v3/repos/hooks/#test-the-push-repository-webhook)

##### Convites do repositório

* [Listar convites para repositórios](/v3/repos/invitations/#list-repository-invitations)
* [Atualizar um convite para um repositório](/v3/repos/invitations/#update-a-repository-invitation)
* [Excluir um convite para um repositório](/v3/repos/invitations/#delete-a-repository-invitation)
* [Listar convites de repositório para o usuário autenticado](/v3/repos/invitations/#list-repository-invitations-for-the-authenticated-user)
* [Aceitar um convite de repositório](/v3/repos/invitations/#accept-a-repository-invitation)
* [Recusar um convite de repositório](/v3/repos/invitations/#decline-a-repository-invitation)

##### Chaves de repositório

* [Listar chaves de implantação](/v3/repos/keys/#list-deploy-keys)
* [Criar uma chave de implantação](/v3/repos/keys/#create-a-deploy-key)
* [Obter uma chave de implantação](/v3/repos/keys/#get-a-deploy-key)
* [Excluir uma chave de implantação](/v3/repos/keys/#delete-a-deploy-key)

##### Páginas do repositório

* [Obter um site do GitHub Pages](/v3/repos/pages/#get-a-github-pages-site)
* [Criar um site do GitHub Pages](/v3/repos/pages/#create-a-github-pages-site)
* [Atualizar informações sobre um site do GitHub Pages](/v3/repos/pages/#update-information-about-a-github-pages-site)
* [Excluir um site do GitHub Pages](/v3/repos/pages/#delete-a-github-pages-site)
* [Listar criações do GitHub Pages](/v3/repos/pages/#list-github-pages-builds)
* [Solicitar uma criação do GitHub Pages](/v3/repos/pages/#request-a-github-pages-build)
* [Obter uma criação do GitHub Pages](/v3/repos/pages/#get-github-pages-build)
* [Obter a última criação de páginas](/v3/repos/pages/#get-latest-pages-build)

{% if currentVersion != "free-pro-team@latest" %}
##### Hooks pre-receive do repositório

* [Listar hooks pre-receive para um repositório](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Obter um hook pre-receive para um repositório](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Atualizar a aplicação de um hook pre-receive para um repositório](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Remover a aplicação de um hook pre-receive para um repositório](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

##### Versões do repositório

* [Listar versões](/v3/repos/releases/#list-releases)
* [Criar uma versão](/v3/repos/releases/#create-a-release)
* [Obter uma versão](/v3/repos/releases/#get-a-release)
* [Atualizar uma versão](/v3/repos/releases/#update-a-release)
* [Excluir uma versão](/v3/repos/releases/#delete-a-release)
* [Listar ativos da versão](/v3/repos/releases/#list-release-assets)
* [Obter um ativo da versão](/v3/repos/releases/#get-a-release-asset)
* [Atualizar um ativo da versão](/v3/repos/releases/#update-a-release-asset)
* [Excluir um ativo da versão](/v3/repos/releases/#delete-a-release-asset)
* [Obter a atualização mais recente](/v3/repos/releases/#get-the-latest-release)
* [Obter uma versão pelo nome da tag](/v3/repos/releases/#get-a-release-by-tag-name)

##### Estatísticas do repositório

* [Obter a atividade semanal do commit](/v3/repos/statistics/#get-the-weekly-commit-activity)
* [Obter o último ano da atividade de commit](/v3/repos/statistics/#get-the-last-year-of-commit-activity)
* [Obter toda a atividade do commit do contribuidor](/v3/repos/statistics/#get-all-contributor-commit-activity)
* [Obter a contagem semanal do commit](/v3/repos/statistics/#get-the-weekly-commit-count)
* [Obter a contagem do commit por hora para cada dia](/v3/repos/statistics/#get-the-hourly-commit-count-for-each-day)

{% if currentVersion == "free-pro-team@latest" %}
##### Alertas de vulnerabilidade de repositório

* [Habilitar alertas de vulnerabilidade](/v3/repos/#enable-vulnerability-alerts)
* [Desabilitar alertas de vulnerabilidade](/v3/repos/#disable-vulnerability-alerts)
{% endif %}

##### Raiz

* [Ponto de extremidade raiz](/v3/#root-endpoint)
* [Emojis](/v3/emojis/#emojis)
* [Obter status do limite de taxa para o usuário autenticado](/v3/rate_limit/#get-rate-limit-status-for-the-authenticated-user)

##### Pesquisar

* [Buscar código](/v3/search/#search-code)
* [Pesquisar commits](/v3/search/#search-commits)
* [Pesquisar etiquetas](/v3/search/#search-labels)
* [Pesquisar repositórios](/v3/search/#search-repositories)
* [Pesquisar tópicos](/v3/search/#search-topics)
* [Pesquisar usuários](/v3/search/#search-users)

##### Status

* [Obter o status combinado para uma referência específica](/v3/repos/statuses/#get-the-combined-status-for-a-specific-reference)
* [Listar status de commit para uma referência](/v3/repos/statuses/#list-commit-statuses-for-a-reference)
* [Criar um status de commit](/v3/repos/statuses/#create-a-commit-status)

##### Discussões de equipe

* [Listar discussões](/v3/teams/discussions/#list-discussions)
* [Criar discussão](/v3/teams/discussions/#create-a-discussion)
* [Obter discussão](/v3/teams/discussions/#get-a-discussion)
* [Atualizar uma discussão](/v3/teams/discussions/#update-a-discussion)
* [Excluir uma discussão](/v3/teams/discussions/#delete-a-discussion)
* [Listar comentários da discussão](/v3/teams/discussion_comments/#list-discussion-comments)
* [Criar um comentário da discussão](/v3/teams/discussion_comments/#create-a-discussion-comment)
* [Obter um comentário da discussão](/v3/teams/discussion_comments/#get-a-discussion-comment)
* [Atualizar um comentário da discussão](/v3/teams/discussion_comments/#update-a-discussion-comment)
* [Excluir um comentário da discussão](/v3/teams/discussion_comments/#delete-a-discussion-comment)

##### Tópicos

* [Obter todos os tópicos do repositório](/v3/repos#get-all-repository-topics)
* [Substituir todos os tópicos do repositório](/v3/repos/#replace-all-repository-topics)

{% if currentVersion == "free-pro-team@latest" %}
##### Tráfego

* [Obter clones do repositório](/v3/repos/traffic/#get-repository-clones)
* [Obter caminhos de referência superior](/v3/repos/traffic/#get-top-referral-paths)
* [Obter fontes de referência superior](/v3/repos/traffic/#get-top-referral-sources)
* [Obter visualizações de páginas](/v3/repos/traffic/#get-page-views)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Bloquear usuário

* [Listar usuários bloqueados pelo usuário autenticado](/v3/users/blocking/#list-users-blocked-by-the-authenticated-user)
* [Verificar se um usuário está bloqueado pelo usuário autenticado](/v3/users/blocking/#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Listar usuários bloqueados por uma organização](/v3/orgs/blocking/#list-users-blocked-by-an-organization)
* [Verificar se um usuário está bloqueado por uma organização](/v3/orgs/blocking/#check-if-a-user-is-blocked-by-an-organization)
* [Bloquear um usuário de uma organização](/v3/orgs/blocking/#block-a-user-from-an-organization)
* [Desbloquear um usuário de uma organização](/v3/orgs/blocking/#unblock-a-user-from-an-organization)
* [Bloquear usuário](/v3/users/blocking/#block-a-user)
* [Desbloquear usuário](/v3/users/blocking/#unblock-a-user)
{% endif %}

##### Emails do usuário

{% if currentVersion == "free-pro-team@latest" %}
* [Configurar visibilidade do e-mail principal para o usuário autenticado](/v3/users/emails/#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [Listar endereços de e-mail para o usuário autenticado](/v3/users/emails/#list-email-addresses-for-the-authenticated-user)
* [Adicionar endereço(s) de e-mail](/v3/users/emails/#add-an-email-address-for-the-authenticated-user)
* [Excluir endereço(s) de e-mail](/v3/users/emails/#delete-an-email-address-for-the-authenticated-user)
* [Listar endereços de e-mail públicos para o usuário autenticado](/v3/users/emails/#list-public-email-addresses-for-the-authenticated-user)

##### Seguidores do usuário

* [Listar seguidores de um usuário](/v3/users/followers/#list-followers-of-a-user)
* [Listar as pessoas que um usuário segue](/v3/users/followers/#list-the-people-a-user-follows)
* [Verificar se uma pessoa é seguida pelo usuário autenticado](/v3/users/followers/#check-if-a-person-is-followed-by-the-authenticated-user)
* [Seguir um usuário](/v3/users/followers/#follow-a-user)
* [Deixar de seguir um usuário](/v3/users/followers/#unfollow-a-user)
* [Verificar se um usuário segue outro usuário](/v3/users/followers/#check-if-a-user-follows-another-user)

##### Chaves Gpg do usuário

* [Listar chaves GPG para o usuário autenticado](/v3/users/gpg_keys/#list-gpg-keys-for-the-authenticated-user)
* [Criar uma chave GPG para o usuário autenticado](/v3/users/gpg_keys/#create-a-gpg-key-for-the-authenticated-user)
* [Obter uma chave GPG para o usuário autenticado](/v3/users/gpg_keys/#get-a-gpg-key-for-the-authenticated-user)
* [Excluir uma chave GPG para o usuário autenticado](/v3/users/gpg_keys/#delete-a-gpg-key-for-the-authenticated-user)
* [Listar chaves gpg para um usuário](/v3/users/gpg_keys/#list-gpg-keys-for-a-user)

##### Chaves públicas do usuário

* [Listar chaves SSH públicas para o usuário autenticado](/v3/users/keys/#list-public-ssh-keys-for-the-authenticated-user)
* [Criar uma chave SSH pública para o usuário autenticado](/v3/users/keys/#create-a-public-ssh-key-for-the-authenticated-user)
* [Obter uma chave SSH pública para o usuário autenticado](/v3/users/keys/#get-a-public-ssh-key-for-the-authenticated-user)
* [Excluir uma chave SSH pública para o usuário autenticado](/v3/users/keys/#delete-a-public-ssh-key-for-the-authenticated-user)
* [Listar chaves públicas para um usuário](/v3/users/keys/#list-public-keys-for-a-user)

##### Usuários

* [Obter o usuário autenticado](/v3/users/#get-the-authenticated-user)
* [Listar instalações de aplicativos acessíveis ao token de acesso do usuário](/v3/apps/installations/#list-app-installations-accessible-to-the-user-access-token)
{% if currentVersion == "free-pro-team@latest" %}
* [Listar assinaturas para o usuário autenticado](/v3/apps/marketplace/#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [Listar usuários](/v3/users/#list-users)
* [Obter um usuário](/v3/users/#get-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Execuções do fluxo de trabalho

* [Listar execuções do fluxo de trabalho para um repositório](/v3/actions/workflow-runs/#list-workflow-runs-for-a-repository)
* [Obter execução de um fluxo de trabalho](/v3/actions/workflow-runs/#get-a-workflow-run)
* [Cancelar execução de um fluxo de trabalho](/v3/actions/workflow-runs/#cancel-a-workflow-run)
* [Fazer o download dos registros de execução do fluxo de trabalho](/v3/actions/workflow-runs/#download-workflow-run-logs)
* [Excluir registros de execução do fluxo de trabalho](/v3/actions/workflow-runs/#delete-workflow-run-logs)
* [Rexecutar um fluxo de trabalho](/v3/actions/workflow-runs/#re-run-a-workflow)
* [Listar execuções do fluxo de trabalho](/v3/actions/workflow-runs/#list-workflow-runs)
* [Obter uso da execução do fluxo de trabalho](/v3/actions/workflow-runs/#get-workflow-run-usage)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Fluxos de trabalho

* [Listar fluxos de trabalho do repositório](/v3/actions/workflows/#list-repository-workflows)
* [Obter um fluxo de trabalho](/v3/actions/workflows/#get-a-workflow)
* [Obter uso do workflow](/v3/actions/workflows/#get-workflow-usage)
{% endif %}
