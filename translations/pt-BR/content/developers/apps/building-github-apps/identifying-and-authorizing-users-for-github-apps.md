---
title: Identificar e autorizar usuários para aplicativos GitHub
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization/
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps/
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/identifying-and-authorizing-users-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% data reusables.pre-release-program.expiring-user-access-tokens %}

Quando o seu aplicativo GitHub age em nome de um usuário, ele realiza solicitações de usuário para servidor. Essas solicitações devem ser autorizadas com o token de acesso de um usuário. As solicitações de usuário para servidor incluem a solicitação de dados para um usuário, como determinar quais repositórios devem ser exibidos para um determinado usuário. Essas solicitações também incluem ações acionadas por um usuário, como executar uma criação.

{% data reusables.apps.expiring_user_authorization_tokens %}

### Identificando usuários no seu site

Para autorizar usuários para aplicativos-padrão executados no navegador, use o [fluxo de aplicativo web](#web-application-flow).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
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

| Nome           | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `string` | **Obrigatório.** O ID do cliente para o seu aplicativo GitHub. Você pode encontrá-lo em suas [configurações do aplicativo GitHub](https://github.com/settings/apps) quando você selecionar seu aplicativo. **Observação:** O ID do aplicativo e o ID do cliente não são iguais e não são intercambiáveis.                                                                                                                                                  |
| `redirect_uri` | `string` | A URL no seu aplicativo para o qual os usuários serão enviados após a autorização. Este deve ser um match exato para {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} um dos URLs fornecidos como uma **URL de Callback**{% else %} a URL fornecida no campo de **URL de callback de autorização do usuário**{% endif %} ao configurar o aplicativo GitHub e não pode conter nenhum parâmetro adicional. |
| `estado`       | `string` | Isso deve conter uma string aleatória para proteger contra ataques falsificados e pode conter quaisquer outros dados arbitrários.                                                                                                                                                                                                                                                                                                                          |
| `login`        | `string` | Sugere uma conta específica para iniciar a sessão e autorizar o aplicativo.                                                                                                                                                                                                                                                                                                                                                                                |
| `allow_signup` | `string` | Independentemente de os usuários autenticados ou não atenticados terem a opção de iscrever-se em {% data variables.product.prodname_dotcom %} durante o fluxo do OAuth. O padrão é `verdadeiro`. Use `falso` quando uma política proibir inscrições.                                                                                                                                                                                                       |

{% note %}

**Observação:** Você não precisa fornecer escopos na sua solicitação de autorização. Ao contrário do OAuth tradicional, o token de autorização é limitado às permissões associadas ao seu aplicativo GitHub e às do usuário.

{% endnote %}

#### 2. Os usuários são redirecionados de volta para o seu site pelo GitHub

Se o usuário aceitar o seu pedido, O GitHub irá fazer o redirecionamento para seu site com um `código temporário` em um parâmetro de código, bem como o estado que você forneceu na etapa anterior em um parâmetro do `estado`. Se os estados não corresponderem, o pedido foi criado por terceiros e o processo deve ser abortado.

{% note %}

**Observação:** Se você selecionar **Solicitar autorização de usuário (OAuth) durante a instalação** ao criar ou modificar seu aplicativo, o GitHub irá retornar um `código temporário` que você precisará trocar por um token de acesso. O parâmetro `estado` não é retornado quando o GitHub inicia o fluxo OAuth durante a instalação do aplicativo.

{% endnote %}

Troque este `código` por um token de acesso. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} Quando os tokens com expiração estão habilitados, o token de acesso expira em 8 horas e o token de atualização expira em 6 meses. Toda vez que você atualizar o token, você receberá um novo token de atualização. Para obter mais informações, consulte "[Atualizando tokens de acesso do usuário para servidor](/developers/apps/refreshing-user-to-server-access-tokens)."

Os tokens de usuário expirados são atualmente um recurso opcional e estão sujeitos a alterações. Para optar por participar do recurso de expiração de token de usuário para servidor, consulte "[Habilitar funcionalidades opcionais para aplicativos](/developers/apps/activating-optional-features-for-apps)."{% endif %}

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### Parâmetros

| Nome            | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `string` | **Obrigatório.** O ID do cliente para o seu aplicativo GitHub.                                                                                                                                                                                                                                                                                                                                                                                             |
| `client_secret` | `string` | **Obrigatório.** O segredo do cliente do seu aplicativo GitHub.                                                                                                                                                                                                                                                                                                                                                                                            |
| `código`        | `string` | **Obrigatório.** O código que você recebeu como resposta ao Passo 1.                                                                                                                                                                                                                                                                                                                                                                                       |
| `redirect_uri`  | `string` | A URL no seu aplicativo para o qual os usuários serão enviados após a autorização. Este deve ser um match exato para {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} um dos URLs fornecidos como uma **URL de Callback**{% else %} a URL fornecida no campo de **URL de callback de autorização do usuário**{% endif %} ao configurar o aplicativo GitHub e não pode conter nenhum parâmetro adicional. |
| `estado`        | `string` | A string aleatória inexplicável que você forneceu na etapa 1.                                                                                                                                                                                                                                                                                                                                                                                              |

##### Resposta

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}

Por padrão, a resposta assume o seguinte formato. Os parâmetros de resposta `expires_in`, `refresh_token`, e `refresh_token_expires_in` só são retornados quando você habilita os token de acesso de usuário para servidor vencidos.

```json
{
  "access_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghu_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}",
  "expires_in": 28800,
  "refresh_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498{% else %}r1.c1b4a2e77838347a7e420ce178f2e7c6912e1692{% endif %}",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```
{% else %}

Por padrão, a resposta assume o seguinte formato:

    access_token={% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghu_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}&token_type=bearer

{% endif %}

#### 3. Seu aplicativo GitHub acessa a API com o token de acesso do usuário

O token de acesso do usuário permite que o aplicativo GitHub faça solicitações para a API em nome de um usuário.

    Autorização: token OUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por exemplo, no cURL você pode definir o cabeçalho de autorização da seguinte forma:

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### Fluxo de dispositivo

{% if currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**Nota:** O fluxo do dispositivo está na versão beta pública e sujeito a alterações.

{% endnote %}
{% endif %}

O fluxo de dispositivos permite que você autorize usuários para um aplicativo sem cabeçalho, como uma ferramenta de CLI ou um gerenciador de credenciais do Git.

Para obter mais informações sobre autorização de usuários que usam o fluxo do dispositivo, consulte "[Autorizar aplicativos OAuth](/developers/apps/authorizing-oauth-apps#device-flow)".

{% endif %}

### Verifique quais recursos de instalação um usuário pode acessar

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.machine-man-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

Depois de ter um token OAuth para um usuário, você pode verificar quais instalações o usuário poderá acessar.

    Authorization: token OAUTH-TOKEN
    GET /user/installations

Você também pode verificar quais repositórios são acessíveis a um usuário para uma instalação.

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

Você pode encontrar mais informações em: [Listar instalações de aplicativos acessíveis para o token de acesso do usuário](/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token) e [Listar repositórios acessíveis para o token de acesso do usuário](/rest/reference/apps#list-repositories-accessible-to-the-user-access-token).

### Tratar uma autorização revogada do aplicativo GitHub

Se um usuário revogar sua autorização de um aplicativo GitHub, o aplicativo receberá o webhook [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) por padrão. Os aplicativos GitHub não podem cancelar a assinatura deste evento. {% data reusables.webhooks.authorization_event %}

### Permissões no nível do usuário

Você pode adicionar permissões de nível de usuário ao seu aplicativo GitHub para acessar os recursos de usuários, como, por exemplo, e-mails de usuários, concedidos por usuários individuais como parte do fluxo de autorização do usuário [](#identifying-users-on-your-site). As permissões de nível de usuário diferem das [permissões do repositório do nível de organização](/rest/reference/permissions-required-for-github-apps), que são concedidas no momento da instalação em uma conta de organização ou usuário.

Você pode selecionar permissões de nível de usuário nas configurações do seu aplicativo GitHub na seção **Permissões de usuário** na página **Permissões & webhooks**. Para obter mais informações sobre como selecionar permissões, consulte "[Editando permissões de um aplicativo GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

Quando um usuário instala seu aplicativo em sua conta, o prompt de instalação listará as permissões de nível de usuário que seu aplicativo solicita e explicará que o aplicativo pode pedir essas permissões a usuários individuais.

Como as permissões de nível de usuário são concedidas em uma base de usuário individual, você poderá adicioná-las ao aplicativo existente sem pedir que os usuários façam a atualização. No entanto, você precisa enviar usuários existentes através do fluxo de autorização do usuário para autorizar a nova permissão e obter um novo token de usuário para servidor para essas solicitações.

### Solicitações de usuário para servidor

Embora a maior parte da interação da sua API deva ocorrer usando os tokens de acesso de servidor para servidor, certos pontos de extremidade permitem que você execute ações por meio da API usando um token de acesso do usuário. Seu aplicativo pode fazer as seguintes solicitações usando pontos de extremidade do [GraphQL v4](/graphql) ou [REST v3](/rest).

#### Pontos de extremidade compatíveis

{% if currentVersion == "free-pro-team@latest" %}
##### Executores de ações

* [Listar aplicativos executores para um repositório](/rest/reference/actions#list-runner-applications-for-a-repository)
* [Listar executores auto-hospedados para um repositório](/rest/reference/actions#list-self-hosted-runners-for-a-repository)
* [Obter um executor auto-hospedado para um repositório](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository)
* [Excluir um executor auto-hospedado de um repositório](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository)
* [Criar um token de registro para um repositório](/rest/reference/actions#create-a-registration-token-for-a-repository)
* [Criar um token de remoção para um repositório](/rest/reference/actions#create-a-remove-token-for-a-repository)
* [Listar aplicativos executores para uma organização](/rest/reference/actions#list-runner-applications-for-an-organization)
* [Listar executores auto-hospedados para uma organização](/rest/reference/actions#list-self-hosted-runners-for-an-organization)
* [Obter um executor auto-hospedado para uma organização](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization)
* [Excluir um executor auto-hospedado de uma organização](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization)
* [Criar um token de registro para uma organização](/rest/reference/actions#create-a-registration-token-for-an-organization)
* [Criar um token de remoção para uma organização](/rest/reference/actions#create-a-remove-token-for-an-organization)

##### Segredos de ações

* [Obter uma chave pública do repositório](/rest/reference/actions#get-a-repository-public-key)
* [Listar segredos do repositório](/rest/reference/actions#list-repository-secrets)
* [Obter um segredo do repositório](/rest/reference/actions#get-a-repository-secret)
* [Criar ou atualizar o segredo de um repositório](/rest/reference/actions#create-or-update-a-repository-secret)
* [Excluir o segredo de um repositório](/rest/reference/actions#delete-a-repository-secret)
* [Obter chave pública de uma organização](/rest/reference/actions#get-an-organization-public-key)
* [Listar segredos da organização](/rest/reference/actions#list-organization-secrets)
* [Obter segredo de uma organização](/rest/reference/actions#get-an-organization-secret)
* [Criar ou atualizar o segredo de uma organização](/rest/reference/actions#create-or-update-an-organization-secret)
* [Listar repositórios selecionados para o segredo de uma organização](/rest/reference/actions#list-selected-repositories-for-an-organization-secret)
* [Definir repositórios selecionados para o segredo de uma organização](/rest/reference/actions#set-selected-repositories-for-an-organization-secret)
* [Adicionar o repositório selecionado ao segredo de uma organização](/rest/reference/actions#add-selected-repository-to-an-organization-secret)
* [Remover o repositório selecionado do segredo de uma organização](/rest/reference/actions#remove-selected-repository-from-an-organization-secret)
* [Excluir o segredo de uma organização](/rest/reference/actions#delete-an-organization-secret)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Artefatos

* [Listar artefatos para um repositório](/rest/reference/actions#list-artifacts-for-a-repository)
* [Listar artefatos executados por fluxo de trabalho](/rest/reference/actions#list-workflow-run-artifacts)
* [Obter um artefato](/rest/reference/actions#get-an-artifact)
* [Excluir um artefato](/rest/reference/actions#delete-an-artifact)
* [Fazer o download de um artefato](/rest/reference/actions#download-an-artifact)
{% endif %}

##### Execuções de verificação

* [Criar uma verificação de execução](/rest/reference/checks#create-a-check-run)
* [Obter uma verificação de execução](/rest/reference/checks#get-a-check-run)
* [Atualizar uma execução de verificação](/rest/reference/checks#update-a-check-run)
* [Listar anotações de execução de verificação](/rest/reference/checks#list-check-run-annotations)
* [Listar execuções de verificações em um conjunto de verificações](/rest/reference/checks#list-check-runs-in-a-check-suite)
* [Listar execuções de verificação para uma referência do GIt](/rest/reference/checks#list-check-runs-for-a-git-reference)

##### conjuntos de verificações

* [Criar um conjunto de verificações](/rest/reference/checks#create-a-check-suite)
* [Obter um conjunto de verificações](/rest/reference/checks#get-a-check-suite)
* [Ressolicitar um conjunto de verificação](/rest/reference/checks#rerequest-a-check-suite)
* [Atualizar preferências do repositório para conjuntos de verificações](/rest/reference/checks#update-repository-preferences-for-check-suites)
* [Listar os conjuntos de verificação para uma referência do Git](/rest/reference/checks#list-check-suites-for-a-git-reference)

##### Códigos de conduta

* [Obter todos os códigos de conduta](/rest/reference/codes-of-conduct#get-all-codes-of-conduct)
* [Obter um código de conduta](/rest/reference/codes-of-conduct#get-a-code-of-conduct)

##### Status da implementação

* [Listar status de implementação](/rest/reference/repos#list-deployment-statuses)
* [Criar um status de implementação](/rest/reference/repos#create-a-deployment-status)
* [Obter um status de implementação](/rest/reference/repos#get-a-deployment-status)

##### Implantações

* [Listar implementações](/rest/reference/repos#list-deployments)
* [Criar uma implementação](/rest/reference/repos#create-a-deployment)
* [Faça um deploy](/rest/reference/repos#get-a-deployment){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
* [Excluir um deploy](/rest/reference/repos#delete-a-deployment){% endif %}

##### Eventos

* [Listar eventos públicos de uma rede de repositórios](/rest/reference/activity#list-public-events-for-a-network-of-repositories)
* [Listar eventos públicos da organização](/rest/reference/activity#list-public-organization-events)

##### Feeds

* [Obter feeds](/rest/reference/activity#get-feeds)

##### Blobs do Git

* [Criar um blob](/rest/reference/git#create-a-blob)
* [Obter um blob](/rest/reference/git#get-a-blob)

##### Commits do Git

* [Criar um commit](/rest/reference/git#create-a-commit)
* [Obter um commit](/rest/reference/git#get-a-commit)

##### Refs do Git

* [Criar uma referência](/rest/reference/git#create-a-reference)* [Obter uma referência](/rest/reference/git#get-a-reference)
* [Lista de referências correspondentes](/rest/reference/git#list-matching-references)
* [Atualizar uma referência](/rest/reference/git#update-a-reference)
* [Excluir uma referência](/rest/reference/git#delete-a-reference)

##### Tags do Git

* [Criar um objeto de tag](/rest/reference/git#create-a-tag-object)
* [Obter uma tag](/rest/reference/git#get-a-tag)

##### Árvores do Git

* [Criar uma árvore](/rest/reference/git#create-a-tree)
* [Obter uma árvore](/rest/reference/git#get-a-tree)

##### Modelos do Gitignore

* [Obter todos os modelos do gitignore](/rest/reference/gitignore#get-all-gitignore-templates)
* [Obter um modelo do gitignore](/rest/reference/gitignore#get-a-gitignore-template)

##### Instalações

* [Listar repositórios acessíveis ao token de acesso do usuário](/rest/reference/apps#list-repositories-accessible-to-the-user-access-token)

{% if currentVersion == "free-pro-team@latest" %}
##### Limites de interação

* [Obter restrições de interação para uma organização](/rest/reference/interactions#get-interaction-restrictions-for-an-organization)
* [Definir restrições de interação para uma organização](/rest/reference/interactions#set-interaction-restrictions-for-an-organization)
* [Remover restrições de interação para uma organização](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization)
* [Obter restrições de interação para um repositório](/rest/reference/interactions#get-interaction-restrictions-for-a-repository)
* [Definir restrições de interação para um repositório](/rest/reference/interactions#set-interaction-restrictions-for-a-repository)
* [Remover restrições de interação para um repositório](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository)
{% endif %}

##### Responsáveis pelo problema

* [Adicionar responsáveis a um problema](/rest/reference/issues#add-assignees-to-an-issue)
* [Remover responsáveis de um problema](/rest/reference/issues#remove-assignees-from-an-issue)

##### Comentários do problema

* [Listar comentários do problema](/rest/reference/issues#list-issue-comments)
* [Criar um comentário do problema](/rest/reference/issues#create-an-issue-comment)
* [Listar comentários de problemas para um repositório](/rest/reference/issues#list-issue-comments-for-a-repository)
* [Obter um comentário do issue](/rest/reference/issues#get-an-issue-comment)
* [Atualizar um comentário do problema](/rest/reference/issues#update-an-issue-comment)
* [Excluir comentário do problema](/rest/reference/issues#delete-an-issue-comment)

##### Eventos do problema

* [Listar eventos do problema](/rest/reference/issues#list-issue-events)

##### Linha do tempo do problema

* [Listar eventos da linha do tempo para um problema](/rest/reference/issues#list-timeline-events-for-an-issue)

##### Problemas

* [Listar problemas atribuídos ao usuário autenticado](/rest/reference/issues#list-issues-assigned-to-the-authenticated-user)
* [Listar responsáveis](/rest/reference/issues#list-assignees)
* [Verificar se um usuário pode ser atribuído](/rest/reference/issues#check-if-a-user-can-be-assigned)
* [Listar problemas do repositório](/rest/reference/issues#list-repository-issues)
* [Cria um problema](/rest/reference/issues#create-an-issue)
* [Obter um problema](/rest/reference/issues#get-an-issue)
* [Atualizar um problema](/rest/reference/issues#update-an-issue)
* [Bloquear um problema](/rest/reference/issues#lock-an-issue)
* [Desbloquear um problema](/rest/reference/issues#unlock-an-issue)

{% if currentVersion == "free-pro-team@latest" %}
##### Trabalhos

* [Obter um trabalho para uma execução de fluxo de trabalho](/rest/reference/actions#get-a-job-for-a-workflow-run)
* [Fazer o download dos registros de trabalho para execução de um fluxo de trabalho](/rest/reference/actions#download-job-logs-for-a-workflow-run)
* [Listar tarefas para execução de um fluxo de trabalho](/rest/reference/actions#list-jobs-for-a-workflow-run)
{% endif %}

##### Etiquetas

* [Listar etiquetas para um problema](/rest/reference/issues#list-labels-for-an-issue)
* [Adicionar etiquetas a um problema](/rest/reference/issues#add-labels-to-an-issue)
* [Definir etiquetas para um problema](/rest/reference/issues#set-labels-for-an-issue)
* [Remover todas as etiquetas de um problema](/rest/reference/issues#remove-all-labels-from-an-issue)
* [Remover uma etiqueta de um problema](/rest/reference/issues#remove-a-label-from-an-issue)
* [Listar etiquetas para um repositório](/rest/reference/issues#list-labels-for-a-repository)
* [Criar uma etiqueta](/rest/reference/issues#create-a-label)
* [Obter uma etiqueta](/rest/reference/issues#get-a-label)
* [Atualizar uma etiqueta](/rest/reference/issues#update-a-label)
* [Excluir uma etiqueta](/rest/reference/issues#delete-a-label)
* [Obter etiquetas para cada problema em um marco](/rest/reference/issues#list-labels-for-issues-in-a-milestone)

##### Licenças

* [Obter todas as licenças comumente usadas](/rest/reference/licenses#get-all-commonly-used-licenses)
* [Obtenha uma licença](/rest/reference/licenses#get-a-license)

##### markdown

* [Renderizar um documento markdown](/rest/reference/markdown#render-a-markdown-document)
* [Renderizar um documento markdown no modo bruto](/rest/reference/markdown#render-a-markdown-document-in-raw-mode)

##### Meta

* [Meta](/rest/reference/meta#meta)

##### Marcos

* [Listar marcos](/rest/reference/issues#list-milestones)
* [Criar um marco](/rest/reference/issues#create-a-milestone)
* [Obter um marco](/rest/reference/issues#get-a-milestone)
* [Atualizar um marco](/rest/reference/issues#update-a-milestone)
* [Excluir um marco](/rest/reference/issues#delete-a-milestone)

##### Hooks da organização

* [Listar webhooks da organização](/rest/reference/orgs#webhooks/#list-organization-webhooks)
* [Criar um webhook da organização](/rest/reference/orgs#webhooks/#create-an-organization-webhook)
* [Obter um webhook da organização](/rest/reference/orgs#webhooks/#get-an-organization-webhook)
* [Atualizar um webhook da organização](/rest/reference/orgs#webhooks/#update-an-organization-webhook)
* [Excluir um webhook da organização](/rest/reference/orgs#webhooks/#delete-an-organization-webhook)
* [Consultar um webhook da organização](/rest/reference/orgs#webhooks/#ping-an-organization-webhook)

{% if currentVersion == "free-pro-team@latest" %}
##### Convites da organização

* [Listar convites pendentes para organizações](/rest/reference/orgs#list-pending-organization-invitations)
* [Criar um convite de organização](/rest/reference/orgs#create-an-organization-invitation)
* [Listar equipes de convite da organização](/rest/reference/orgs#list-organization-invitation-teams)
{% endif %}

##### Integrantes da organização

* [Listar integrantes da organização](/rest/reference/orgs#list-organization-members)
* [Verificar associação da organização para um usuário](/rest/reference/orgs#check-organization-membership-for-a-user)
* [Remover um membro da organização](/rest/reference/orgs#remove-an-organization-member)
* [Obter a associação de uma organização para um usuário](/rest/reference/orgs#get-organization-membership-for-a-user)
* [Definir associação de organização para um usuário](/rest/reference/orgs#set-organization-membership-for-a-user)
* [Remover associação de organização para um usuário](/rest/reference/orgs#remove-organization-membership-for-a-user)
* [Listar membros públicos da organização](/rest/reference/orgs#list-public-organization-members)
* [Verificar a associação da organização pública para um usuário](/rest/reference/orgs#check-public-organization-membership-for-a-user)
* [Definir associação à organização pública para o usuário autenticado](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user)
* [Remover associação à organização pública para o usuário autenticado](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user)

##### Colaboradores externos da organização

* [Listar colaboradores externos para uma organização](/rest/reference/orgs#list-outside-collaborators-for-an-organization)
* [Converter um integrante da organização em colaborador externo](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator)
* [Remover colaboradores externos de uma organização](/rest/reference/orgs#remove-outside-collaborator-from-an-organization)

{% if enterpriseServerVersions contains currentVersion %}
##### Hooks pre-receive da organização

* [Listar hooks pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Obter um hook pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Atualizar a aplicação do hook pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Remover a aplicação do hook pre-receive para uma organização](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### Projetos da aquipe da organização

* [Listar projetos da equipe](/rest/reference/teams#list-team-projects)
* [Verificar permissões da equipe para um projeto](/rest/reference/teams#check-team-permissions-for-a-project)
* [Adicionar ou atualizar as permissões do projeto da equipe](/rest/reference/teams#add-or-update-team-project-permissions)
* [Remover um projeto de uma equipe](/rest/reference/teams#remove-a-project-from-a-team)
{% endif %}

##### Repositórios da equipe da organização

* [Listar repositórios da equipe](/rest/reference/teams#list-team-repositories)
* [Verificar permissões da equipe para um repositório](/rest/reference/teams#check-team-permissions-for-a-repository)
* [Adicionar ou atualizar as permissões do repositório da equipe](/rest/reference/teams#add-or-update-team-repository-permissions)
* [Remover um repositório de uma equipe](/rest/reference/teams#remove-a-repository-from-a-team)

{% if currentVersion == "free-pro-team@latest" %}
##### Sincronizar equipe da organização

* [Listar grupos de idp para uma equipe](/rest/reference/teams#list-idp-groups-for-a-team)
* [Criar ou atualizar conexões do grupo de idp](/rest/reference/teams#create-or-update-idp-group-connections)
* [Listar grupos de IdP para uma organização](/rest/reference/teams#list-idp-groups-for-an-organization)
{% endif %}

##### Equipes da organização

* [Listar equipes](/rest/reference/teams#list-teams)
* [Criar uma equipe](/rest/reference/teams#create-a-team)
* [Obter uma equipe por nome](/rest/reference/teams#get-a-team-by-name)
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
* [Obter uma equipe](/rest/reference/teams#get-a-team)
{% endif %}
* [Atualizar uma equipe](/rest/reference/teams#update-a-team)
* [Excluir uma equipe](/rest/reference/teams#delete-a-team)
{% if currentVersion == "free-pro-team@latest" %}
* [Listar convites pendentes da equipe](/rest/reference/teams#list-pending-team-invitations)
{% endif %}
* [Listar integrantes da equipe](/rest/reference/teams#list-team-members)
* [Obter a associação à equipe para um usuário](/rest/reference/teams#get-team-membership-for-a-user)
* [Adicionar ou atualizar membros de equipe para um usuário](/rest/reference/teams#add-or-update-team-membership-for-a-user)
* [Remover associação à equipe para um usuário](/rest/reference/teams#remove-team-membership-for-a-user)
* [Listar equipes secundárias](/rest/reference/teams#list-child-teams)
* [Listar equipes para o usuário autenticado](/rest/reference/teams#list-teams-for-the-authenticated-user)

##### Organizações

* [Listar organizações](/rest/reference/orgs#list-organizations)
* [Obter uma organização](/rest/reference/orgs#get-an-organization)
* [Atualizar uma organização](/rest/reference/orgs#update-an-organization)
* [Listar associações de organizações para os usuários autenticados](/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user)
* [Obter uma associação de organização para o usuário autenticado](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user)
* [Atualizar uma associação de organização para o usuário autenticado](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user)
* [Listar organizações para o usuário autenticado](/rest/reference/orgs#list-organizations-for-the-authenticated-user)
* [Listar organizações para um usuário](/rest/reference/orgs#list-organizations-for-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Autorizações de credencial das organizações

* [Listar autorizações do SAML SSO para uma organização](/rest/reference/orgs#list-saml-sso-authorizations-for-an-organization)
* [Remover uma autorização do SAML SSO para uma organização](/rest/reference/orgs#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Scim das organizações

* [Listar identidades provisionadas de SCIM](/rest/reference/scim#list-scim-provisioned-identities)
* [Provisionamento e convite para um usuário de SCIM](/rest/reference/scim#provision-and-invite-a-scim-user)
* [Obter informações de provisionamento de SCIM para um usuário](/rest/reference/scim#get-scim-provisioning-information-for-a-user)
* [Definir informações de SCIM para um usuário provisionado](/rest/reference/scim#set-scim-information-for-a-provisioned-user)
* [Atualizar um atributo para um usuário de SCIM](/rest/reference/scim#update-an-attribute-for-a-scim-user)
* [Excluir um usuário de SCIM de uma organização](/rest/reference/scim#delete-a-scim-user-from-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Importação de fonte

* [Obter um status de importação](/rest/reference/migrations#get-an-import-status)
* [Iniciar importação](/rest/reference/migrations#start-an-import)
* [Atualizar uma importação](/rest/reference/migrations#update-an-import)
* [Cancelar uma importação](/rest/reference/migrations#cancel-an-import)
* [Obtenha autores do commit](/rest/reference/migrations#get-commit-authors)
* [Mapear um autor de commit](/rest/reference/migrations#map-a-commit-author)
* [Obter arquivos grandes](/rest/reference/migrations#get-large-files)
* [Atualizar preferência de LFS do Git](/rest/reference/migrations#update-git-lfs-preference)
{% endif %}

##### Colaboradores do projeto

* [Listar colaboradores do projeto](/rest/reference/projects#list-project-collaborators)
* [Adicionar colaborador do projeto](/rest/reference/projects#add-project-collaborator)
* [Remover colaborador do projeto](/rest/reference/projects#remove-project-collaborator)
* [Obter permissão de projeto para um usuário](/rest/reference/projects#get-project-permission-for-a-user)

##### Projetos

* [Listar projetos da organização](/rest/reference/projects#list-organization-projects)
* [Criar um projeto da organização](/rest/reference/projects#create-an-organization-project)
* [Obter um projeto](/rest/reference/projects#get-a-project)
* [Atualizar um projeto](/rest/reference/projects#update-a-project)
* [Excluir um projeto](/rest/reference/projects#delete-a-project)
* [Listar colunas do projeto](/rest/reference/projects#list-project-columns)
* [Criar uma coluna do projeto](/rest/reference/projects#create-a-project-column)
* [Obter uma coluna do projeto](/rest/reference/projects#get-a-project-column)
* [Atualizar uma coluna do projeto](/rest/reference/projects#update-a-project-column)
* [Excluir uma coluna do projeto](/rest/reference/projects#delete-a-project-column)
* [Listar cartões do projeto](/rest/reference/projects#list-project-cards)
* [Criar um cartão de projeto](/rest/reference/projects#create-a-project-card)
* [Mover uma coluna do projeto](/rest/reference/projects#move-a-project-column)
* [Obter um cartão do projeto](/rest/reference/projects#get-a-project-card)
* [Atualizar um cartão do projeto](/rest/reference/projects#update-a-project-card)
* [Excluir um cartão do projeto](/rest/reference/projects#delete-a-project-card)
* [Mover um cartão do projeto](/rest/reference/projects#move-a-project-card)
* [Listar projetos do repositório](/rest/reference/projects#list-repository-projects)
* [Criar um projeto do repositório](/rest/reference/projects#create-a-repository-project)

##### Commentários pull

* [Listar comentários de revisão em um pull request](/rest/reference/pulls#list-review-comments-on-a-pull-request)
* [Criar um comentário de revisão para um pull request](/rest/reference/pulls#create-a-review-comment-for-a-pull-request)
* [Listar comentários de revisão em um repositório](/rest/reference/pulls#list-review-comments-in-a-repository)
* [Obter um comentário de revisão para um pull request](/rest/reference/pulls#get-a-review-comment-for-a-pull-request)
* [Atualizar um comentário de revisão para um pull request](/rest/reference/pulls#update-a-review-comment-for-a-pull-request)
* [Excluir um comentário de revisão para um pull request](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request)

##### Eventos de revisão de pull request

* [Ignorar uma revisão para um pull request](/rest/reference/pulls#dismiss-a-review-for-a-pull-request)
* [Enviar uma revisão para um pull request](/rest/reference/pulls#submit-a-review-for-a-pull-request)

##### Solicitações de revisão de pull request

* [Listar revisores solicitados para um pull request](/rest/reference/pulls#list-requested-reviewers-for-a-pull-request)
* [Solicitar revisores para um pull request](/rest/reference/pulls#request-reviewers-for-a-pull-request)
* [Remover revisores solicitados de um pull request](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request)

##### Revisões de pull request

* [Listar comentários para um pull request](/rest/reference/pulls#list-reviews-for-a-pull-request)
* [Criar uma revisão para um pull request](/rest/reference/pulls#create-a-review-for-a-pull-request)
* [Obter uma revisão para um pull request](/rest/reference/pulls#get-a-review-for-a-pull-request)
* [Atualizar uma revisão para um pull request](/rest/reference/pulls#update-a-review-for-a-pull-request)
* [Listar comentários para uma revisão de pull request](/rest/reference/pulls#list-comments-for-a-pull-request-review)

##### Pulls

* [Listar pull requests](/rest/reference/pulls#list-pull-requests)
* [Criar um pull request](/rest/reference/pulls#create-a-pull-request)
* [Obter um pull request](/rest/reference/pulls#get-a-pull-request)
* [Atualizar um pull request](/rest/reference/pulls#update-a-pull-request)
* [Listar commits em um pull request](/rest/reference/pulls#list-commits-on-a-pull-request)
* [Listar arquivos de pull requests](/rest/reference/pulls#list-pull-requests-files)
* [Verifiarse um pull request foi mesclado](/rest/reference/pulls#check-if-a-pull-request-has-been-merged)
* [Mesclar um pull request (Botão de mesclar)](/rest/reference/pulls#merge-a-pull-request)

##### Reações

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}* [Excluir uma reação](/rest/reference/reactions#delete-a-reaction-legacy){% else %}* [Excluir uma reação](/rest/reference/reactions#delete-a-reaction){% endif %}
* [Listar reações para um comentário de commit](/rest/reference/reactions#list-reactions-for-a-commit-comment)
* [Criar reação para um comentário de commit](/rest/reference/reactions#create-reaction-for-a-commit-comment)
* [Listar reações para um problema](/rest/reference/reactions#list-reactions-for-an-issue)
* [Criar reação para um problema](/rest/reference/reactions#create-reaction-for-an-issue)
* [Listar reações para um comentário do problema](/rest/reference/reactions#list-reactions-for-an-issue-comment)
* [Criar reação para um comentário do problema](/rest/reference/reactions#create-reaction-for-an-issue-comment)
* [Listar reações para um comentário de revisão de pull request](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment)
* [Criar reação para um comentário de revisão de pull request](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment)
* [Listar reações para um comentário de discussão de equipe](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment)
* [Criar reação para um comentário de discussão em equipe](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)
* [Listar reações para uma discussão de equipe](/rest/reference/reactions#list-reactions-for-a-team-discussion)
* [Crie uma reação para discussão de equipe](/rest/reference/reactions#create-reaction-for-a-team-discussion){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
* [Excluir uma reação de comentário de commit](/rest/reference/reactions#delete-a-commit-comment-reaction)
* [Excluir uma reação do problema](/rest/reference/reactions#delete-an-issue-reaction)
* [Excluir uma reação a um comentário do commit](/rest/reference/reactions#delete-an-issue-comment-reaction)
* [Excluir reação de comentário do pull request](/rest/reference/reactions#delete-a-pull-request-comment-reaction)
* [Excluir reação para discussão em equipe](/rest/reference/reactions#delete-team-discussion-reaction)
* [Excluir reação de comentário para discussão de equipe](/rest/reference/reactions#delete-team-discussion-comment-reaction){% endif %}

##### Repositórios

* [Listar repositórios da organização](/rest/reference/repos#list-organization-repositories)
* [Criar um repositório para o usuário autenticado](/rest/reference/repos#create-a-repository-for-the-authenticated-user)
* [Obter um repositório](/rest/reference/repos#get-a-repository)
* [Atualizar um repositório](/rest/reference/repos#update-a-repository)
* [Excluir um repositório](/rest/reference/repos#delete-a-repository)
* [Comparar dois commits](/rest/reference/repos#compare-two-commits)
* [Listar contribuidores do repositório](/rest/reference/repos#list-repository-contributors)
* [Listar bifurcações](/rest/reference/repos#list-forks)
* [Criar uma bifurcação](/rest/reference/repos#create-a-fork)
* [Listar idiomas do repositório](/rest/reference/repos#list-repository-languages)
* [Listar tags do repositório](/rest/reference/repos#list-repository-tags)
* [Listar equipes do repositório](/rest/reference/repos#list-repository-teams)
* [Transferir um repositório](/rest/reference/repos#transfer-a-repository)
* [Listar repositórios públicos](/rest/reference/repos#list-public-repositories)
* [Listar repositórios para o usuário autenticado](/rest/reference/repos#list-repositories-for-the-authenticated-user)
* [Listar repositórios para um usuário](/rest/reference/repos#list-repositories-for-a-user)
* [Criar repositório usando um modelo de repositório](/rest/reference/repos#create-repository-using-a-repository-template)

##### Atividade do repositório

* [Listar observadores](/rest/reference/activity#list-stargazers)
* [Listar inspetores](/rest/reference/activity#list-watchers)
* [Listar repositórios favoritados pelo usuário](/rest/reference/activity#list-repositories-starred-by-a-user)
* [Verificar se um repositório foi favoritado pelo usuário autenticado](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Favorite um repositório para o usuário autenticado](/rest/reference/activity#star-a-repository-for-the-authenticated-user)
* [Desmarque um repositório como favorito para o usuário autenticado](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user)
* [Listar repositórios inspecionados por um usuário](/rest/reference/activity#list-repositories-watched-by-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Correções de segurança automatizadas no repositório

* [Habilitar as correções de segurança automatizadas](/rest/reference/repos#enable-automated-security-fixes)
* [Desabilitar as correções de segurança automatizadas](/rest/reference/repos#disable-automated-security-fixes)
{% endif %}

##### Branches do repositório

* [Listar branches](/rest/reference/repos#list-branches)
* [Obter um branch](/rest/reference/repos#get-a-branch)
* [Obter proteção do branch](/rest/reference/repos#get-branch-protection)
* [Atualizar proteção do branch](/rest/reference/repos#update-branch-protection)
* [Excluir proteção do branch](/rest/reference/repos#delete-branch-protection)
* [Obter proteção do branch do administrador](/rest/reference/repos#get-admin-branch-protection)
* [Definir proteção do branch de administrador](/rest/reference/repos#set-admin-branch-protection)
* [Excluir proteção do branch de administrador](/rest/reference/repos#delete-admin-branch-protection)
* [Obter proteção de revisão do pull request](/rest/reference/repos#get-pull-request-review-protection)
* [Atualizar proteção de revisão do pull request](/rest/reference/repos#update-pull-request-review-protection)
* [Excluir proteção de revisão do pull request](/rest/reference/repos#delete-pull-request-review-protection)
* [Obter proteção de assinatura do commit](/rest/reference/repos#get-commit-signature-protection)
* [Criar proteção de assinatura do commit](/rest/reference/repos#create-commit-signature-protection)
* [Excluir proteção de assinatura do commit](/rest/reference/repos#delete-commit-signature-protection)
* [Obter proteção contra verificações de status](/rest/reference/repos#get-status-checks-protection)
* [Atualizar proteção da verificação de status](/rest/reference/repos#update-status-check-protection)
* [Remover proteção da verificação de status](/rest/reference/repos#remove-status-check-protection)
* [Obter todos os contextos de verificação de status](/rest/reference/repos#get-all-status-check-contexts)
* [Adicionar contextos de verificação de status](/rest/reference/repos#add-status-check-contexts)
* [Definir contextos de verificação de status](/rest/reference/repos#set-status-check-contexts)
* [Remover contextos de verificação de status](/rest/reference/repos#remove-status-check-contexts)
* [Obter restrições de acesso](/rest/reference/repos#get-access-restrictions)
* [Excluir restrições de acesso](/rest/reference/repos#delete-access-restrictions)
* [Listar equipes com acesso ao branch protegido](/rest/reference/repos#list-teams-with-access-to-the-protected-branch)
* [Adicionar restrições de acesso da equipe](/rest/reference/repos#add-team-access-restrictions)
* [Definir restrições de acesso da equipe](/rest/reference/repos#set-team-access-restrictions)
* [Remover restrição de acesso da equipe](/rest/reference/repos#remove-team-access-restrictions)
* [Listar restrições de usuário do branch protegido](/rest/reference/repos#list-users-with-access-to-the-protected-branch)
* [Adicionar restrições de acesso do usuário](/rest/reference/repos#add-user-access-restrictions)
* [Definir restrições de acesso do usuário](/rest/reference/repos#set-user-access-restrictions)
* [Remover restrições de acesso do usuário](/rest/reference/repos#remove-user-access-restrictions)
* [Mesclar um branch](/rest/reference/repos#merge-a-branch)

##### Colaboradores do repositório

* [Listar colaboradores do repositório](/rest/reference/repos#list-repository-collaborators)
* [Verifique se um usuário é colaborador de um repositório](/rest/reference/repos#check-if-a-user-is-a-repository-collaborator)
* [Adicionar colaborador de repositório](/rest/reference/repos#add-a-repository-collaborator)
* [Remover um colaborador de repositório](/rest/reference/repos#remove-a-repository-collaborator)
* [Obter permissões de repositório para um usuário](/rest/reference/repos#get-repository-permissions-for-a-user)

##### Comentários do commit do repositório

* [Listar comentários de commit para um repositório](/rest/reference/repos#list-commit-comments-for-a-repository)
* [Obter um comentário de commit](/rest/reference/repos#get-a-commit-comment)
* [Atualizar um comentário de commit](/rest/reference/repos#update-a-commit-comment)
* [Excluir um comentário de commit](/rest/reference/repos#delete-a-commit-comment)
* [Listar comentários de commit](/rest/reference/repos#list-commit-comments)
* [Criar um comentário de commit](/rest/reference/repos#create-a-commit-comment)

##### Commits do repositório

* [Listar commits](/rest/reference/repos#list-commits)
* [Obter um commit](/rest/reference/repos#get-a-commit)
* [Listar branches para o commit principal](/rest/reference/repos#list-branches-for-head-commit)
* [Listar pull requests associados ao commit](/rest/reference/repos#list-pull-requests-associated-with-commit)

##### Comunidade do repositório

* [Obter o código de conduta para um repositório](/rest/reference/codes-of-conduct#get-the-code-of-conduct-for-a-repository)
{% if currentVersion == "free-pro-team@latest" %}
* [Obter métricas do perfil da comunidade](/rest/reference/repos#get-community-profile-metrics)
{% endif %}

##### Conteúdo do repositório

* [Fazer o download de um arquivo do repositório](/rest/reference/repos#download-a-repository-archive)
* [Obter conteúdo de repositório](/rest/reference/repos#get-repository-content)
* [Criar ou atualizar conteúdo do arquivo](/rest/reference/repos#create-or-update-file-contents)
* [Excluir um arquivo](/rest/reference/repos#delete-a-file)
* [Obter um README do repositório](/rest/reference/repos#get-a-repository-readme)
* [Obter a licença para um repositório](/rest/reference/licenses#get-the-license-for-a-repository)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### Envio de eventos do repositório

* [Criar um evento de envio de repositório](/rest/reference/repos#create-a-repository-dispatch-event)
{% endif %}

##### Hooks do repositório

* [Listar webhooks de repositório](/rest/reference/repos#list-repository-webhooks)
* [Criar um webhook do repositório](/rest/reference/repos#create-a-repository-webhook)
* [Obter um webhook do repositório](/rest/reference/repos#get-a-repository-webhook)
* [Atualizar um webhook do repositório](/rest/reference/repos#update-a-repository-webhook)
* [Excluir um webhook do repositório](/rest/reference/repos#delete-a-repository-webhook)
* [Fazer ping no webhook de um repositório](/rest/reference/repos#ping-a-repository-webhook)
* [Testar o webhook do repositório de push](/rest/reference/repos#test-the-push-repository-webhook)

##### Convites do repositório

* [Listar convites para repositórios](/rest/reference/repos#list-repository-invitations)
* [Atualizar um convite para um repositório](/rest/reference/repos#update-a-repository-invitation)
* [Excluir um convite para um repositório](/rest/reference/repos#delete-a-repository-invitation)
* [Listar convites de repositório para o usuário autenticado](/rest/reference/repos#list-repository-invitations-for-the-authenticated-user)
* [Aceitar um convite de repositório](/rest/reference/repos#accept-a-repository-invitation)
* [Recusar um convite de repositório](/rest/reference/repos#decline-a-repository-invitation)

##### Chaves de repositório

* [Listar chaves de implantação](/rest/reference/repos#list-deploy-keys)
* [Criar uma chave de implantação](/rest/reference/repos#create-a-deploy-key)
* [Obter uma chave de implantação](/rest/reference/repos#get-a-deploy-key)
* [Excluir uma chave de implantação](/rest/reference/repos#delete-a-deploy-key)

##### Páginas do repositório

* [Obter um site do GitHub Pages](/rest/reference/repos#get-a-github-pages-site)
* [Criar um site do GitHub Pages](/rest/reference/repos#create-a-github-pages-site)
* [Atualizar informações sobre um site do GitHub Pages](/rest/reference/repos#update-information-about-a-github-pages-site)
* [Excluir um site do GitHub Pages](/rest/reference/repos#delete-a-github-pages-site)
* [Listar criações do GitHub Pages](/rest/reference/repos#list-github-pages-builds)
* [Solicitar uma criação do GitHub Pages](/rest/reference/repos#request-a-github-pages-build)
* [Obter uma criação do GitHub Pages](/rest/reference/repos#get-github-pages-build)
* [Obter a última criação de páginas](/rest/reference/repos#get-latest-pages-build)

{% if enterpriseServerVersions contains currentVersion %}
##### Hooks pre-receive do repositório

* [Listar hooks pre-receive para um repositório](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Obter um hook pre-receive para um repositório](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Atualizar a aplicação de um hook pre-receive para um repositório](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Remover a aplicação de um hook pre-receive para um repositório](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

##### Versões do repositório

* [Listar versões](/rest/reference/repos/#list-releases)
* [Criar uma versão](/rest/reference/repos/#create-a-release)
* [Obter uma versão](/rest/reference/repos/#get-a-release)
* [Atualizar uma versão](/rest/reference/repos/#update-a-release)
* [Excluir uma versão](/rest/reference/repos/#delete-a-release)
* [Listar ativos da versão](/rest/reference/repos/#list-release-assets)
* [Obter um ativo da versão](/rest/reference/repos/#get-a-release-asset)
* [Atualizar um ativo da versão](/rest/reference/repos/#update-a-release-asset)
* [Excluir um ativo da versão](/rest/reference/repos/#delete-a-release-asset)
* [Obter a atualização mais recente](/rest/reference/repos/#get-the-latest-release)
* [Obter uma versão pelo nome da tag](/rest/reference/repos/#get-a-release-by-tag-name)

##### Estatísticas do repositório

* [Obter a atividade semanal do commit](/rest/reference/repos#get-the-weekly-commit-activity)
* [Obter o último ano da atividade de commit](/rest/reference/repos#get-the-last-year-of-commit-activity)
* [Obter toda a atividade do commit do contribuidor](/rest/reference/repos#get-all-contributor-commit-activity)
* [Obter a contagem semanal do commit](/rest/reference/repos#get-the-weekly-commit-count)
* [Obter a contagem do commit por hora para cada dia](/rest/reference/repos#get-the-hourly-commit-count-for-each-day)

{% if currentVersion == "free-pro-team@latest" %}
##### Alertas de vulnerabilidade de repositório

* [Habilitar alertas de vulnerabilidade](/rest/reference/repos#enable-vulnerability-alerts)
* [Desabilitar alertas de vulnerabilidade](/rest/reference/repos#disable-vulnerability-alerts)
{% endif %}

##### Raiz

* [Ponto de extremidade raiz](/rest#root-endpoint)
* [Emojis](/rest/reference/emojis#emojis)
* [Obter status do limite de taxa para o usuário autenticado](/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user)

##### Pesquisar

* [Buscar código](/rest/reference/search#search-code)
* [Pesquisar commits](/rest/reference/search#search-commits)
* [Pesquisar etiquetas](/rest/reference/search#search-labels)
* [Pesquisar repositórios](/rest/reference/search#search-repositories)
* [Pesquisar tópicos](/rest/reference/search#search-topics)
* [Pesquisar usuários](/rest/reference/search#search-users)

##### Status

* [Obter o status combinado para uma referência específica](/rest/reference/repos#get-the-combined-status-for-a-specific-reference)
* [Listar status de commit para uma referência](/rest/reference/repos#list-commit-statuses-for-a-reference)
* [Criar um status de commit](/rest/reference/repos#create-a-commit-status)

##### Discussões de equipe

* [Listar discussões](/rest/reference/teams#list-discussions)
* [Criar discussão](/rest/reference/teams#create-a-discussion)
* [Obter discussão](/rest/reference/teams#get-a-discussion)
* [Atualizar uma discussão](/rest/reference/teams#update-a-discussion)
* [Excluir uma discussão](/rest/reference/teams#delete-a-discussion)
* [Listar comentários da discussão](/rest/reference/teams#list-discussion-comments)
* [Criar um comentário da discussão](/rest/reference/teams#create-a-discussion-comment)
* [Obter um comentário da discussão](/rest/reference/teams#get-a-discussion-comment)
* [Atualizar um comentário da discussão](/rest/reference/teams#update-a-discussion-comment)
* [Excluir um comentário da discussão](/rest/reference/teams#delete-a-discussion-comment)

##### Tópicos

* [Obter todos os tópicos do repositório](/rest/reference/repos#get-all-repository-topics)
* [Substituir todos os tópicos do repositório](/rest/reference/repos#replace-all-repository-topics)

{% if currentVersion == "free-pro-team@latest" %}
##### Tráfego

* [Obter clones do repositório](/rest/reference/repos#get-repository-clones)
* [Obter caminhos de referência superior](/rest/reference/repos#get-top-referral-paths)
* [Obter fontes de referência superior](/rest/reference/repos#get-top-referral-sources)
* [Obter visualizações de páginas](/rest/reference/repos#get-page-views)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Bloquear usuário

* [Listar usuários bloqueados pelo usuário autenticado](/rest/reference/users#list-users-blocked-by-the-authenticated-user)
* [Verificar se um usuário está bloqueado pelo usuário autenticado](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Listar usuários bloqueados por uma organização](/rest/reference/orgs#list-users-blocked-by-an-organization)
* [Verificar se um usuário está bloqueado por uma organização](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Bloquear um usuário de uma organização](/rest/reference/orgs#block-a-user-from-an-organization)
* [Desbloquear um usuário de uma organização](/rest/reference/orgs#unblock-a-user-from-an-organization)
* [Bloquear usuário](/rest/reference/users#block-a-user)
* [Desbloquear usuário](/rest/reference/users#unblock-a-user)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
##### Emails do usuário

{% if currentVersion == "free-pro-team@latest" %}
* [Configurar visibilidade do e-mail principal para o usuário autenticado](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [Listar endereços de e-mail para o usuário autenticado](/rest/reference/users#list-email-addresses-for-the-authenticated-user)
* [Adicionar endereço(s) de e-mail](/rest/reference/users#add-an-email-address-for-the-authenticated-user)
* [Excluir endereço(s) de e-mail](/rest/reference/users#delete-an-email-address-for-the-authenticated-user)
* [Listar endereços de e-mail públicos para o usuário autenticado](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user)
{% endif %}

##### Seguidores do usuário

* [Listar seguidores de um usuário](/rest/reference/users#list-followers-of-a-user)
* [Listar as pessoas que um usuário segue](/rest/reference/users#list-the-people-a-user-follows)
* [Verificar se uma pessoa é seguida pelo usuário autenticado](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [Seguir um usuário](/rest/reference/users#follow-a-user)
* [Deixar de seguir um usuário](/rest/reference/users#unfollow-a-user)
* [Verificar se um usuário segue outro usuário](/rest/reference/users#check-if-a-user-follows-another-user)

##### Chaves Gpg do usuário

* [Listar chaves GPG para o usuário autenticado](/rest/reference/users#list-gpg-keys-for-the-authenticated-user)
* [Criar uma chave GPG para o usuário autenticado](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user)
* [Obter uma chave GPG para o usuário autenticado](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user)
* [Excluir uma chave GPG para o usuário autenticado](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user)
* [Listar chaves gpg para um usuário](/rest/reference/users#list-gpg-keys-for-a-user)

##### Chaves públicas do usuário

* [Listar chaves SSH públicas para o usuário autenticado](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user)
* [Criar uma chave SSH pública para o usuário autenticado](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user)
* [Obter uma chave SSH pública para o usuário autenticado](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user)
* [Excluir uma chave SSH pública para o usuário autenticado](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [Listar chaves públicas para um usuário](/rest/reference/users#list-public-keys-for-a-user)

##### Usuários

* [Obter o usuário autenticado](/rest/reference/users#get-the-authenticated-user)
* [Listar instalações de aplicativos acessíveis ao token de acesso do usuário](/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token)
{% if currentVersion == "free-pro-team@latest" %}
* [Listar assinaturas para o usuário autenticado](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [Listar usuários](/rest/reference/users#list-users)
* [Obter um usuário](/rest/reference/users#get-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Execuções do fluxo de trabalho

* [Listar execuções do fluxo de trabalho para um repositório](/rest/reference/actions#list-workflow-runs-for-a-repository)
* [Obter execução de um fluxo de trabalho](/rest/reference/actions#get-a-workflow-run)
* [Cancelar execução de um fluxo de trabalho](/rest/reference/actions#cancel-a-workflow-run)
* [Fazer o download dos registros de execução do fluxo de trabalho](/rest/reference/actions#download-workflow-run-logs)
* [Excluir registros de execução do fluxo de trabalho](/rest/reference/actions#delete-workflow-run-logs)
* [Rexecutar um fluxo de trabalho](/rest/reference/actions#re-run-a-workflow)
* [Listar execuções do fluxo de trabalho](/rest/reference/actions#list-workflow-runs)
* [Obter uso da execução do fluxo de trabalho](/rest/reference/actions#get-workflow-run-usage)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Fluxos de trabalho

* [Listar fluxos de trabalho do repositório](/rest/reference/actions#list-repository-workflows)
* [Obter um fluxo de trabalho](/rest/reference/actions#get-a-workflow)
* [Obter uso do workflow](/rest/reference/actions#get-workflow-usage)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}

### Leia mais

- "[Sobre a autenticação em {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

{% endif %}
