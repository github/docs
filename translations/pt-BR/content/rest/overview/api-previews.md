---
title: Pré-visualizações da API
intro: Você pode usar pré-visualizações da API para testar novos recursos e fornecer feedback antes que estes recursos se tornem oficiais.
redirect_from:
  - /early-access/
  - /v3/previews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


Pré-visualizações da API permitem que você experimente novas APIs e alterações nos métodos de API existentes antes de se tornarem parte da API oficial do GitHub.

Durante o período de pré-visualização, poderemos alterar alguns recursos com base no feedback do desenvolvedor. Se fizermos alterações, iremos anunciá-las no [blogue do desenvolvedor](https://developer.github.com/changes/) sem aviso prévio.

Para acessar uma pré-visualização da API, você precisará fornecer um [tipo de mídia](/v3/media) personalizado no cabeçalho `Aceitar` para suas solicitações. A documentação dos recursos para cada pré-visualização especifica qual tipo de mídia personalizado deve ser fornecido.

{% if currentVersion == "free-pro-team@latest" %}
### Migrações

Permite que você faça o download de repositórios da conta do usuário ou da organização do GitHub para revisar, fazer backup e [fazer a migração dos dados](/v3/migrations/) para {% data variables.product.prodname_ghe_server %}.

**Tipo de mídia personalizada:** `wyandotte-preview` **Anunciado em:** [2018-05-24](https://developer.github.com/changes/2018-05-24-user-migration-api/)
{% endif %}

### Implementações aprimoradas

Exerça um maior controle sobre as [implantações](/rest/reference/repos#deployments) com mais informações e uma granularidade mais precisa.

**Tipo de mídia personalizada:** `ant-man-preview` **Anunciado em:** [2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

### Reações

Gerencie as [reações](/v3/reactions/) de commits, problemas e comentários.

**Tipo de mídia personalizado:** `squirrel-girl-preview` **Anunciado em:** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/) **Atualização em:**
[ 2016-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)</p> 



### Linha do tempo

Obter uma [lista de eventos](/v3/issues/timeline/) para um problema ou pull request.

**Tipo de mídia personalizada:** `mockingbird-preview` **Anunciado em:** [2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% if enterpriseServerVersions contains currentVersion %}


### Ambientes pre-receive

Cria, lista, atualiza e exclui ambientes para hooks pre-receive.

**Tipo de mídia personalizada:** `eye-scream-preview` **Anunciado em:** [2015-07-29](/rest/reference/enterprise-admin#pre-receive-environments) 

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}


### Integrações

Gerencie as [integrações](/early-access/integrations/) através da API.

**Tipo de mídia personalizada:** `machine-man-preview` **Anunciado em:** [2016-09-14](https://developer.github.com/changes/2016-09-14-Integrations-Early-Access/) 

{% endif %}



### Projetos

Gerencie [projetos](/v3/projects/).

**Tipo de mídia personalizada:** `inertia-preview` **Anunciado em:** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/) **Atualização em:** [ 2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/)</p> 



### Pesquisa de commit

[Pesquisa commits](/v3/search/).

**Tipo de mídia personalizada:** `cloak-preview` **Anunciado em:** [2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/)

{% if currentVersion == "free-pro-team@latest" %}


### Bloqueio de usuário

Os usuários podem [bloquear outros usuários](/v3/users/blocking/). As organizações também podem [bloquear usuários](/v3/orgs/blocking/).

**Tipo de mídia personalizado:** `giant-sentry-fist-preview` **Anunciado em:** [2011-05-31](https://github.com/blog/862-block-the-bullies) **Atualização 1:** [2016-04-04](https://github.com/blog/2146-organizations-can-now-block-abusive-users) **Atualização 2:** [2016-08-17](https://github.com/blog/2229-see-the-users-you-ve-blocked-on-your-settings-page) 

{% endif %}



### Tópicos do repositório

Ver uma lista dos [tópicos do repositório](/articles/about-topics/) em [chamadas](/v3/repos/) que retornam resultados do repositório.

**Tipo de mídia personalizada:** `mercy-preview` **Anunciado em:** [2017-01-31](https://github.com/blog/2309-introducing-topics)



### Códigos de conduta

Veja todos os [códigos de conduta](/v3/codes_of_conduct) ou obtenha qual código de conduta um repositório tem atualmente.

**Tipo de mídia personalizado:** `scarlet-witch-preview`

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}


### Equipes aninhadas

Inclua o conteúdo aninhado das cargas da [equipe](/v3/teams/).

**Tipo de mídia personalizada:** `hellcat-preview` **Anunciado em:** [2017-09-01](https://developer.github.com/changes/2017-08-30-preview-nested-teams)

{% endif %}

{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}



### Webhooks globais

Habilita [webhooks globais](/rest/reference/enterprise-admin#global-webhooks/) para  [organizações](/webhooks/event-payloads/#organization) e tipos de evento do [usuário](/webhooks/event-payloads/#user). Esta visualização da API só está disponível para {% data variables.product.prodname_ghe_server %}.

**Tipo de mídia personalizada:** `superpro-preview` **Anunciado em:** [2017-12-12](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}


### Transferência de repositório

Transfira um [repositório](/v3/repos/) para uma organização ou usuário.

**Tipo de mídia personalizada:** `nightshade-preview` **Anunciado em:** [2017-11-09](https://developer.github.com/changes/2017-11-09-repository-transfer-api-preview) 

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}


### Adicionar motivo do bloqueio

Agora você pode adicionar um motivo ao[bloquear um problema](/v3/issues/#lock-an-issue).

**Tipo de mídia personalizada:** `sailor-v-preview` **Anunciado em:** [2018-01-10](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview) 

{% endif %}



### Exigir commits assinados

Agora você pode usar a API para gerenciar a configuração para [exigir commits assinados em branches protegidos](/v3/repos/branches).

**Tipo de mídia personalizada:** `zzzax-preview` **Anunciado em:** [2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures)



### Exigir múltiplas revisões de aprovação

Agora você pode [exigir múltiplas revisões de aprovação](/v3/repos/branches) para um pull request usando a API.

**Tipo de mídia personalizada:** `luke-cage-preview` **Anunciado em:** [2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.19" %}


### Recuperar informações do hovercard

Recuperar informações do [hovercard de alguém](/v3/users/#get-contextual-information-for-a-user).

**Tipo de mídia personalizada:** `hagar-preview` **Anunciado:** [2018-03-21](https://developer.github.com/changes/2018-03-21-hovercard-api-preview)

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}


### Verificar execuções e a API de conjuntos de verificações

Permite que um aplicativo GitHub execute verificações externas no código de um repositório. Veja as [execuções de verificação](/v3/checks/runs/) e [Conjuntos de verificação](/v3/checks/suites/) das APIs para obter mais informações.

**Tipo de mídia personalizada:** `antiope-preview` **Anunciado:** [2018-05-07](https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/) 

{% endif %}

{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}



### Acesso de Git anônimo aos repositórios

Quando uma instância do {% data variables.product.prodname_ghe_server %} estiver em modo privado, os administradores do site e do repositório podem habilitar o acesso anônimo ao Git para um repositório público.

**Tipo de mídia personalizada:** `x ray-preview` **Anunciado:** [2018-07-12](https://blog.github.com/2018-07-12-introducing-enterprise-2-14/)

{% endif %}



### Detalhes do cartão de projeto

As respostas da API REST para [eventos de problemas](/v3/issues/events/) e [eventos da linha do tempo de problemas](/v3/issues/timeline/) agora retornam o campo `project_card` para eventos relacionados ao projeto.

**Tipo de mídia personalizada:** `starfox-preview` **Anunciado:** [2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% if currentVersion == "free-pro-team@latest" %}



### Manifestoes do aplicativo GitHub

Os manifestos do aplicativo GitHub permitem que pessoas criem aplicativos GitHub pré-configurados. Veja "[Criar aplicativos GitHub a partir de um manifesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" para obter mais inoformações.

**Tipo de mídia personalizada:** `fury-preview`

{% endif %}



### Status da implantação

Agora você pode atualizar o ambiente `` de um [status de implantação](/rest/reference/repos#create-a-deployment-status) e usar os estados `in_progress` e `na fila`. Ao criar o status da implantação, agora você pode usar o parâmetro `auto_inactive` para marcar implantações de `produção` antigas como `inativa`.

**Tipo de mídia personalizada:** `flash-preview` **Anunciado:** [2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)



### Permissões de criação de repositório

Agora você pode configurar se os integrantes da organização podem criar repositórios e que tipos de repositórios podem criar. Consulte "[Atualizar uma organização](/v3/orgs/#update-an-organization)" para obter mais informações.

**Tipos de mídia personalizada:** `surtur-preview` **Anunciado:** [2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)



### Anexos de conteúdo

Agora você pode fornecer mais informações no GitHub para URLs vinculadas a domínios registrados usando a API de {% data variables.product.prodname_unfurls %}. Consulte "[Usar anexos de conteúdo](/apps/using-content-attachments/)" para obter mais informações.

**Tipos de mídia personalizada:** `corsair-preview` **Anunciado:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}


### Pull requests de rascunho

Você pode usar a API do Pull Requests de rascunho e seus pontos de extremidade de [pull request](/v3/pulls/) para ver se um pull request está em estado rascunho. Para saber mais sobre pull requests, consulte "[Sobre pull requests](/articles/about-pull-requests/)".

**Tipo de mídia personalizada:** `shadow-cat-preview` **Anunciado:** [2019-02-14](https://developer.github.com/changes/2019-02-14-draft-pull-requests/)

{% endif %}



### Habilitar e desabilitar páginas

Você pode usar os novos pontos de extremidade no [API de páginas](/rest/reference/repos#pages) para habilitar ou desabilitar páginas. Para saber mais sobre páginas, consulte "[Princípios básicos do GitHub Pages](/categories/github-pages-basics)".

**Tipos de mídia personalizada:** `switcheroo-preview` **Anunciado:** [2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)



### Listar branches ou pull requests para um commit

Você pode usar dois novos pontos de extremidade na [API de commits](/v3/repos/commits/) para listar branches ou pull requests para um commit.

**Tipos de mídia personalizada:** `groot-preview` **Anunciado:** [2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}


### Desinstalar um aplicativo do GitHub

Agora os proprietários dos aplicativos GitHub podem desinstalar um aplicativo usando a [API de aplicativos](/v3/apps/#delete-an-installation-for-the-authenticated-app).

**Tipos de mídia personalizada:** `gambit-preview` 

{% endif %}



### Habilitar ou desabilitar alertas de vulnerabilidade para um repositório

Você pode usar dois novos pontos de extremidade na [API de Repositórios](/v3/repos/) para habilitar ou desabilitar os alertas de vulnerabilidade.

**Tipos de mídia personalizada:** `dorian-preview` **Anunciado:** [2019-04-24](https://developer.github.com/changes/2019-04-24-vulnerability-alerts/)



### Atualizar um branch de pull request

Você pode usar um novo ponto de extremidade para [atualizar um branch de pull request](/v3/pulls/#update-a-pull-request-branch) com alterações do HEAD do branch upstream.

**Tipos de mídia personalizada:** `lidian-preview` **Anunciado:** [2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% if currentVersion == "free-pro-team@latest" %}


### Habilitar ou desabilitar correções de segurança automatizadas

Você pode usar um novo conjunto de pontos de extremidade para [habilitar e desabilitar as correções de segurança automatizadas](/v3/repos/#enable-automated-security-fixes).

**Tipo de mídia personalizada:** `london-preview` **Anunciado:** [2019-06-04](https://developer.github.com/changes/2019-06-04-automated-security-fixes/) 

{% endif %}



### Criar e usar modelos de repositório

Você pode usar um novo ponto de extremidade para [Criar um repositório usando um modelo](/v3/repos/#create-a-repository-using-a-template) e [Criar um repositório para o usuário autenticado](/v3/repos/#create-a-repository-for-the-authenticated-user) que é um repositório de modelo, definindo o parâmetro `is_template` como `verdadeiro`. [Obter um repositório](/v3/repos/#get-a-repository) para verificar se ele é definido como um repositório de modelo usando a chave `is_template`.

**Tipos de mídia personalizada:** `baptiste-preview` **Anunciado:** [2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/)

{% if currentVersion == "enterprise-server@2.20" %}


### Novos pontos de extremidade da API de aplicativos OAuth

Você pode gerenciar os tokens de forma mais segura para aplicativos OAuth usando os tokens OAuth como parâmetros de entrada em vez dos parâmetros de caminho com os novos pontos de extremidade da [API dos aplicativos OAuth](/v3/apps/oauth_applications/).

**Tipos de mídia personalizada:** `doutor-strange-preview` **Anunciado:** [2019-11-05](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api/) 

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}


### Novo parâmetro de visibilidade para a API de repositórios

Você pode definir e recuperar a visibilidade de um repositório na [API de repositórios](/v3/repos/).

**Tipos de mídia personalizada:** `nebula-preview` **Anunciado:** [2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/) 

{% endif %}
