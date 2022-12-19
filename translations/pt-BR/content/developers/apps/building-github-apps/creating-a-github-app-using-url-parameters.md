---
title: Criar um aplicativo GitHub usando parâmetros de URL
intro: 'Você pode pré-selecionar as configurações de um novo {% data variables.product.prodname_github_app %} usando a URL [parâmetros de consulta](https://en.wikipedia.org/wiki/Query_string) para definir rapidamente a configuração do novo {% data variables.product.prodname_github_app %}.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation query parameters
ms.openlocfilehash: 94622bfc2de9ba991758a6d1e465d8eb3d770a5f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064023'
---
## Sobre parâmetros de URL do {% data variables.product.prodname_github_app %}.

Você pode adicionar parâmetros de consulta a essas URLs para pré-selecionar a configuração de um {% data variables.product.prodname_github_app %} em uma conta pessoal ou de organização:

* **Conta pessoal:** `{% data variables.product.oauth_host_code %}/settings/apps/new`
* **Conta da organização:** `{% data variables.product.oauth_host_code %}/organizations/:org/settings/apps/new`

A pessoa que está criando o aplicativo pode editar os valores pré-selecionados a partir da página de registro do {% data variables.product.prodname_github_app %}, antes de enviar o aplicativo. Se você não incluir os parâmetros obrigatórios na cadeia de consulta da URL, como `name`, a pessoa que criar o aplicativo precisará inserir um valor antes de enviar o aplicativo.

Para aplicativos que exigem que um segredo proteja seu webhook, o valor do segredo deve ser definido no formulário pela pessoa que criou o aplicativo, não pelo uso de parâmetros de consulta. Para obter mais informações, confira "[Como proteger seus webhooks](/developers/webhooks-and-events/webhooks/securing-your-webhooks)".

A URL a seguir cria um aplicativo público chamado `octocat-github-app` com uma descrição pré-configurada e uma URL de retorno de chamada. Essa URL também seleciona as permissões de leitura e gravação para `checks`, inscreve-se nos eventos de webhook `check_run` e `check_suite` e seleciona a opção para solicitar a autorização do usuário (OAuth) durante a instalação:

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&events[]=check_run&events[]=check_suite
```

Lista completa de parâmetros de consulta, permissões e eventos disponíveis encontra-se nas seções abaixo.

## Parâmetros de configuração do {% data variables.product.prodname_github_app %}

 Nome | Tipo | Descrição
-----|------|-------------
`name` | `string` | O nome do {% data variables.product.prodname_github_app %}. Dê um nome claro e sucinto ao seu aplicativo. Seu aplicativo não pode ter o mesmo nome de um usuário existente no GitHub, a menos que seja o seu próprio nome de usuário ou da sua organização. Uma versão movida do nome do seu aplicativo será exibida na interface do usuário quando sua integração realizar uma ação.
`description` | `string` | Uma descrição do {% data variables.product.prodname_github_app %}.
`url` | `string` | A URL completa da página inicial do site do seu {% data variables.product.prodname_github_app %}.
`callback_urls` | `array of strings` | Uma URL completa para a qual redirecionar após alguém autorizar uma instalação. Você pode fornecer até 10 URLs de retorno de chamada. Essas URLs são usadas se o aplicativo precisar identificar e autorizar solicitações de usuário para servidor. Por exemplo, `callback_urls[]=https://example.com&callback_urls[]=https://example-2.com`.
`request_oauth_on_install` | `boolean` | Se o seu aplicativo autorizar usuários a usar o fluxo do OAuth, defina essa opção como `true` para permitir que pessoas autorizem o aplicativo ao instalá-lo, poupando uma etapa. Se você selecionar essa opção, a `setup_url` não ficará disponível e os usuários serão redirecionados para a `callback_url` após a instalação do aplicativo.
`setup_url` | `string` | A URL completa para redirecionamento após alguém instalar o {% data variables.product.prodname_github_app %}, se o aplicativo precisar de configuração adicional após a instalação.
`setup_on_update` | `boolean` | Defina como `true` para redirecionar as pessoas para a URL de configuração quando as instalações forem atualizadas, por exemplo, depois que os repositórios forem adicionados ou removidos.
`public` | `boolean` | Defina essa opção como `true` quando o {% data variables.product.prodname_github_app %} estiver disponível para o público ou como `false` quando ele só for acessível pelo proprietário do aplicativo.
`webhook_active` | `boolean` | Defina-a como `false` para desabilitar o webhook. O webhook está habilitado por padrão.
`webhook_url` | `string` | A URL completa para a qual você deseja enviar as cargas do evento de webhook.
{% ifversion ghae %}`webhook_secret` | `string` | Você pode especificar um segredo para proteger seus webhooks. Confira "[Como proteger seus webhooks](/webhooks/securing/)" para obter mais detalhes.
{% endif %}`events` | `array of strings` | Eventos de webhook. Alguns eventos de webhook exigem permissões de `read` ou de `write` em um recurso para que você selecione o evento ao registrar um novo {% data variables.product.prodname_github_app %}. Confira a seção "[Eventos de webhook do {% data variables.product.prodname_github_app %}](#github-app-webhook-events)" para ver os eventos disponíveis e as permissões necessárias. Você pode selecionar vários eventos em uma string de consulta. Por exemplo, `events[]=public&events[]=label`.{% ifversion ghes < 3.4 %}
`domain` | `string` | A URL de uma referência de conteúdo.{% endif %}
`single_file_name` | `string` | Esta é uma permissão de escopo limitado que permite que o aplicativo acesse um único arquivo em qualquer repositório. Quando você define a permissão `single_file` como `read` ou `write`, esse campo fornece o caminho para o único arquivo que será gerenciado pelo {% data variables.product.prodname_github_app %}. {% ifversion fpt or ghes or ghec %} Caso você precise gerenciar vários arquivos, confira `single_file_paths` abaixo. {% endif %}{% ifversion fpt or ghes or ghec %}
`single_file_paths` | `array of strings` | Isso permite que o aplicativo acesse até dez arquivos especificados em um repositório. Quando você define a permissão `single_file` como `read` ou `write`, essa matriz pode armazenar os caminhos para até dez arquivos que serão gerenciados pelo {% data variables.product.prodname_github_app %}. Todos esses arquivos recebem a mesma permissão definida por `single_file` e não têm permissões individuais separadas. Quando dois ou mais arquivos são configurados, a API retorna `multiple_single_files=true`, caso contrário, retorna `multiple_single_files=false`.{% endif %}

## Permissões do {% data variables.product.prodname_github_app %}

Você pode selecionar permissões em uma string de consultas usando o nome da permissão na tabela a seguir como o nome do parâmetro de consulta e o tipo de permissão como valor da consulta. Por exemplo, para selecionar as permissões `Read & write` na interface do usuário de `contents`, a cadeia de consulta incluirá `&contents=write`. Para selecionar as permissões `Read-only` na interface do usuário de `blocking`, a cadeia de consulta incluirá `&blocking=read`. Para selecionar `no-access` na interface do usuário de `checks`, a cadeia de consulta não incluirá a permissão `checks`.

Permissão | Descrição
---------- | -----------
[`administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-administration) | Concede acesso a vários pontos finais para administração de organização e repositório. Pode ser: `none`, `read` ou `write`.{% ifversion fpt or ghec %}
[`blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-blocking) | Permite o acesso à [API de Bloqueio de Usuários](/rest/reference/users#blocking). Pode ser: `none`, `read` ou `write`.{% endif %}
[`checks`](/rest/reference/permissions-required-for-github-apps/#permission-on-checks) | Permite o acesso à [API de Verificações](/rest/reference/checks). Pode ser: `none`, `read` ou `write`.{% ifversion ghes < 3.4 %}
`content_references` | Permite o acesso ao ponto de extremidade "[Criar um anexo de conteúdo](/rest/reference/apps#create-a-content-attachment)". Pode ser: `none`, `read` ou `write`.{% endif %}
[`contents`](/rest/reference/permissions-required-for-github-apps/#permission-on-contents) |  Concede acesso a vários pontos finais que permitem modificar o conteúdo do repositório. Pode ser: `none`, `read` ou `write`.
[`deployments`](/rest/reference/permissions-required-for-github-apps/#permission-on-deployments) | Permite o acesso à [API de Implantações](/rest/reference/repos#deployments). Pode ser: `none`, `read` ou `write`.{% ifversion fpt or ghes or ghec %}
[`emails`](/rest/reference/permissions-required-for-github-apps/#permission-on-emails) | Permite o acesso à [API de Emails](/rest/reference/users#emails). Pode ser: `none`, `read` ou `write`.{% endif %}
[`followers`](/rest/reference/permissions-required-for-github-apps/#permission-on-followers) | Permite o acesso à [API de Seguidores](/rest/reference/users#followers). Pode ser: `none`, `read` ou `write`.
[`gpg_keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-gpg-keys) | Permite o acesso à [API de Chaves GPG](/rest/reference/users#gpg-keys). Pode ser: `none`, `read` ou `write`.
[`issues`](/rest/reference/permissions-required-for-github-apps/#permission-on-issues) | Permite o acesso à [API de Problemas](/rest/reference/issues). Pode ser: `none`, `read` ou `write`.
[`keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-keys) | Permite o acesso à [API de Chaves Públicas](/rest/reference/users#keys). Pode ser: `none`, `read` ou `write`.
[`members`](/rest/reference/permissions-required-for-github-apps/#permission-on-members) |  Concede acesso para gerenciar os membros de uma organização. Pode ser: `none`, `read` ou `write`.{% ifversion fpt or ghec %}
[`metadata`](/rest/reference/permissions-required-for-github-apps/#metadata-permissions) | Concede acesso a pontos finais somente leitura que não vazam dados confidenciais. Pode ser `read` ou `none`. Usa `read` como padrão quando qualquer permissão é definida ou `none` quando nenhuma permissão é especificada para o {% data variables.product.prodname_github_app %}.
[`organization_administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-administration) | Permite o acesso ao ponto de extremidade "[Atualizar uma organização](/rest/reference/orgs#update-an-organization)" e à [API de Restrições de Interação da Organização](/rest/reference/interactions#set-interaction-restrictions-for-an-organization). Pode ser: `none`, `read` ou `write`.{% endif %}
[`organization_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-hooks) | Permite o acesso à [API de Webhooks da Organização](/rest/reference/orgs#webhooks/). Pode ser: `none`, `read` ou `write`.
`organization_plan` | Permite o acesso para obter informações sobre o plano de uma organização usando o ponto de extremidade "[Obter uma organização](/rest/reference/orgs#get-an-organization)". Pode ser: `none` ou `read`.
[`organization_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) |  Permite o acesso à [API de Projetos](/rest/reference/projects). Pode ser: `none`, `read`, `write` ou `admin`.{% ifversion fpt or ghec %}
[`organization_user_blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) | Permite o acesso à [API de Bloqueio de Usuários da Organização](/rest/reference/orgs#blocking). Pode ser: `none`, `read` ou `write`.{% endif %}
[`pages`](/rest/reference/permissions-required-for-github-apps/#permission-on-pages) | Permite o acesso à [API do Pages](/rest/reference/repos#pages). Pode ser: `none`, `read` ou `write`.
`plan` | Permite o acesso para obter informações sobre o plano do GitHub de um usuário usando o ponto de extremidade "[Obter um usuário](/rest/reference/users#get-a-user)". Pode ser: `none` ou `read`.
[`pull_requests`](/rest/reference/permissions-required-for-github-apps/#permission-on-pull-requests) | Concede acesso a vários pontos finais do pull request. Pode ser: `none`, `read` ou `write`.
[`repository_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-hooks) | Permite o acesso à [API de Webhooks do Repositório](/rest/reference/repos#hooks). Pode ser: `none`, `read` ou `write`.
[`repository_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-projects) |  Permite o acesso à [API de Projetos](/rest/reference/projects). Pode ser: `none`, `read`, `write` ou `admin`.{% ifversion ghes or ghec %}
[`secret_scanning_alerts`](/rest/reference/permissions-required-for-github-apps/#permission-on-secret-scanning-alerts) |  Permite o acesso à [API de verificação de segredos](/rest/reference/secret-scanning). Pode ser: `none`, `read` ou `write`.{% endif %}{% ifversion fpt or ghes or ghec %}
[`security_events`](/rest/reference/permissions-required-for-github-apps/#permission-on-security-events) |  Permite o acesso à [API de verificação de código](/rest/reference/code-scanning/). Pode ser: `none`, `read` ou `write`.{% endif %}
[`single_file`](/rest/reference/permissions-required-for-github-apps/#permission-on-single-file) | Permite o acesso à [API de Conteúdo](/rest/reference/repos#contents). Pode ser: `none`, `read` ou `write`.
[`starring`](/rest/reference/permissions-required-for-github-apps/#permission-on-starring) | Permite o acesso à [API de Marcação com Estrelas](/rest/reference/activity#starring). Pode ser: `none`, `read` ou `write`.
[`statuses`](/rest/reference/permissions-required-for-github-apps/#permission-on-statuses) | Permite o acesso à [API de Status](/rest/reference/commits#commit-statuses). Pode ser: `none`, `read` ou `write`.
[`team_discussions`](/rest/reference/permissions-required-for-github-apps/#permission-on-team-discussions) | Permite o acesso à [API de Discussões em Equipe](/rest/reference/teams#discussions) e à [API de Comentários de Discussão em Equipe](/rest/reference/teams#discussion-comments). Pode ser `none`, `read` ou `write`.
`vulnerability_alerts`| Permite acesso para receber {% data variables.product.prodname_dependabot_alerts %} em um repositório. Confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)" para saber mais. Pode ser: `none` ou `read`.
`watching` | Concede acesso à lista e alterações de repositórios que um usuário assinou. Pode ser: `none`, `read` ou `write`.

## Eventos webhook do {% data variables.product.prodname_github_app %}

Nome do evento webhook | Permissão necessária | Descrição
------------------ | ------------------- | -----------
[`check_run`](/webhooks/event-payloads/#check_run) |`checks` | {% data reusables.webhooks.check_run_short_desc %}
[`check_suite`](/webhooks/event-payloads/#check_suite) |`checks` | {% data reusables.webhooks.check_suite_short_desc %}
[`commit_comment`](/webhooks/event-payloads/#commit_comment) | `contents` | {% data reusables.webhooks.commit_comment_short_desc %}{% ifversion ghes < 3.4 %}
[`content_reference`](/webhooks/event-payloads/#content_reference) |`content_references` | {% data reusables.webhooks.content_reference_short_desc %}{% endif %}
[`create`](/webhooks/event-payloads/#create) | `contents` | {% data reusables.webhooks.create_short_desc %}
[`delete`](/webhooks/event-payloads/#delete) | `contents` | {% data reusables.webhooks.delete_short_desc %}
[`deployment`](/webhooks/event-payloads/#deployment) | `deployments` | {% data reusables.webhooks.deployment_short_desc %}
[`deployment_status`](/webhooks/event-payloads/#deployment_status) | `deployments` | {% data reusables.webhooks.deployment_status_short_desc %}
[`fork`](/webhooks/event-payloads/#fork) | `contents` | {% data reusables.webhooks.fork_short_desc %}
[`gollum`](/webhooks/event-payloads/#gollum) | `contents` | {% data reusables.webhooks.gollum_short_desc %}
[`issues`](/webhooks/event-payloads/#issues) | `issues` | {% data reusables.webhooks.issues_short_desc %}
[`issue_comment`](/webhooks/event-payloads/#issue_comment) | `issues` | {% data reusables.webhooks.issue_comment_short_desc %}
[`label`](/webhooks/event-payloads/#label) | `metadata` | {% data reusables.webhooks.label_short_desc %}
[`member`](/webhooks/event-payloads/#member) | `members` | {% data reusables.webhooks.member_short_desc %}
[`membership`](/webhooks/event-payloads/#membership) | `members` | {% data reusables.webhooks.membership_short_desc %}
[`milestone`](/webhooks/event-payloads/#milestone) | `pull_request` | {% data reusables.webhooks.milestone_short_desc %}{% ifversion fpt or ghec %}
[`org_block`](/webhooks/event-payloads/#org_block) | `organization_administration` | {% data reusables.webhooks.org_block_short_desc %}{% endif %}
[`organization`](/webhooks/event-payloads/#organization) | `members` | {% data reusables.webhooks.organization_short_desc %}
[`page_build`](/webhooks/event-payloads/#page_build) | `pages` | {% data reusables.webhooks.page_build_short_desc %}
[`project`](/webhooks/event-payloads/#project) | `repository_projects` ou `organization_projects` | {% data reusables.webhooks.project_short_desc %}
[`project_card`](/webhooks/event-payloads/#project_card) | `repository_projects` ou `organization_projects` | {% data reusables.webhooks.project_card_short_desc %}
[`project_column`](/webhooks/event-payloads/#project_column) | `repository_projects` ou `organization_projects` | {% data reusables.webhooks.project_column_short_desc %}
[`public`](/webhooks/event-payloads/#public) | `metadata` | {% data reusables.webhooks.public_short_desc %}
[`pull_request`](/webhooks/event-payloads/#pull_request) | `pull_requests` | {% data reusables.webhooks.pull_request_short_desc %}
[`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | `pull_request` | {% data reusables.webhooks.pull_request_review_short_desc %}
[`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | `pull_request` | {% data reusables.webhooks.pull_request_review_comment_short_desc %}
[`pull_request_review_thread`](/webhooks/event-payloads/#pull_request_review_thread) | `pull_request` | {% data reusables.webhooks.pull_request_review_thread_short_desc %}
[`push`](/webhooks/event-payloads/#push) | `contents` | {% data reusables.webhooks.push_short_desc %}
[`release`](/webhooks/event-payloads/#release) | `contents` | {% data reusables.webhooks.release_short_desc %}
[`repository`](/webhooks/event-payloads/#repository) |`metadata` | {% data reusables.webhooks.repository_short_desc %}{% ifversion fpt or ghec %}
[`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) | `contents` | Permite aos integradores que usam o GitHub Actions acionar eventos personalizados.{% endif %}
[`status`](/webhooks/event-payloads/#status) | `statuses` | {% data reusables.webhooks.status_short_desc %}
[`team`](/webhooks/event-payloads/#team) | `members` | {% data reusables.webhooks.team_short_desc %}
[`team_add`](/webhooks/event-payloads/#team_add) | `members` | {% data reusables.webhooks.team_add_short_desc %}
[`watch`](/webhooks/event-payloads/#watch) | `metadata` | {% data reusables.webhooks.watch_short_desc %}
