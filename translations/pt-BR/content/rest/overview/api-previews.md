---
title: Pré-visualizações da API
intro: Você pode usar pré-visualizações da API para testar novos recursos e fornecer feedback antes que estes recursos se tornem oficiais.
redirect_from:
  - /v3/previews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---


Pré-visualizações da API permitem que você experimente novas APIs e alterações nos métodos de API existentes antes de se tornarem parte da API oficial do GitHub.

Durante o período de pré-visualização, poderemos alterar alguns recursos com base no feedback do desenvolvedor. Se fizermos alterações, iremos anunciá-las no [blogue do desenvolvedor](https://developer.github.com/changes/) sem aviso prévio.

Para acessar uma pré-visualização da API, você precisará fornecer um [tipo de mídia](/rest/overview/media-types) personalizado no cabeçalho `Aceitar` para suas solicitações. A documentação dos recursos para cada pré-visualização especifica qual tipo de mídia personalizado deve ser fornecido.

{% ifversion ghes < 3.3 %}

## Implementações aprimoradas

Exerça um maior controle sobre as [implantações](/rest/reference/repos#deployments) com mais informações e uma granularidade mais precisa.

**Tipo de mídia personalizada:** `ant-man-preview` **Anunciado em:** [2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Reações

Gerencie as [reações](/rest/reference/reactions) de commits, problemas e comentários.

**Custom media type:** `squirrel-girl-preview` **Announced:** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/) **Update:** [2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Linha do tempo

Obter uma [lista de eventos](/rest/reference/issues#timeline) para um problema ou pull request.

**Tipo de mídia personalizada:** `mockingbird-preview` **Anunciado em:** [2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% endif %}

{% ifversion ghes %}
## Ambientes pre-receive

Cria, lista, atualiza e exclui ambientes para hooks pre-receive.

**Tipo de mídia personalizada:** `eye-scream-preview` **Anunciado em:** [2015-07-29](/rest/reference/enterprise-admin#pre-receive-environments)
{% endif %}

{% ifversion ghes < 3.3 %}
## Projetos

Gerencie [projetos](/rest/reference/projects).

**Custom media type:** `inertia-preview` **Announced:** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/) **Update:** [2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/)
{% endif %}

## Pesquisa de commit

[Pesquisa commits](/rest/reference/search).

**Tipo de mídia personalizada:** `cloak-preview` **Anunciado em:** [2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/)

## Tópicos do repositório

Ver uma lista dos [tópicos do repositório](/articles/about-topics/) em [chamadas](/rest/reference/repos) que retornam resultados do repositório.

**Tipo de mídia personalizada:** `mercy-preview` **Anunciado em:** [2017-01-31](https://github.com/blog/2309-introducing-topics)

{% ifversion ghes < 3.3 %}

## Códigos de conduta

Veja todos os [códigos de conduta](/rest/reference/codes-of-conduct) ou obtenha qual código de conduta um repositório tem atualmente.

**Tipo de mídia personalizado:** `scarlet-witch-preview`

{% endif %}

{% ifversion ghae or ghes %}

## Webhooks globais

Habilita [webhooks globais](/rest/reference/enterprise-admin#global-webhooks/) para  [organizações](/webhooks/event-payloads/#organization) e tipos de evento do [usuário](/webhooks/event-payloads/#user). Esta visualização da API só está disponível para {% data variables.product.prodname_ghe_server %}.

**Tipo de mídia personalizada:** `superpro-preview` **Anunciado em:** [2017-12-12](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}


## Exigir commits assinados

Agora você pode usar a API para gerenciar a configuração para [exigir commits assinados em branches protegidos](/rest/reference/repos#branches).

**Tipo de mídia personalizada:** `zzzax-preview` **Anunciado em:** [2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures)

{% ifversion ghes < 3.3 %}

## Exigir múltiplas revisões de aprovação

Agora você pode [exigir múltiplas revisões de aprovação](/rest/reference/repos#branches) para um pull request usando a API.

**Tipo de mídia personalizada:** `luke-cage-preview` **Anunciado em:** [2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% endif %}

{% ifversion ghes < 3.0 %}
## Verificar execuções e a API de conjuntos de verificações

Permite que um aplicativo GitHub execute verificações externas no código de um repositório. Veja as [execuções de verificação](/rest/reference/checks#runs) e [Conjuntos de verificação](/rest/reference/checks#suites) das APIs para obter mais informações.

**Tipo de mídia personalizada:** `antiope-preview` **Anunciado:** [2018-05-07](https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/)
{% endif %}

{% ifversion ghes %}

## Acesso de Git anônimo aos repositórios

Quando uma instância do {% data variables.product.prodname_ghe_server %} estiver em modo privado, os administradores do site e do repositório podem habilitar o acesso anônimo ao Git para um repositório público.

**Tipo de mídia personalizada:** `x ray-preview` **Anunciado:** [2018-07-12](https://blog.github.com/2018-07-12-introducing-enterprise-2-14/)

{% endif %}
{% ifversion ghes < 3.3 %}

## Detalhes do cartão de projeto

As respostas da API REST para [eventos de problemas](/rest/reference/issues#events) e [eventos da linha do tempo de problemas](/rest/reference/issues#timeline) agora retornam o campo `project_card` para eventos relacionados ao projeto.

**Tipo de mídia personalizada:** `starfox-preview` **Anunciado:** [2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% endif %}
{% ifversion fpt %}

## Manifestoes do aplicativo GitHub

Os manifestos do aplicativo GitHub permitem que pessoas criem aplicativos GitHub pré-configurados. Veja "[Criar aplicativos GitHub a partir de um manifesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" para obter mais inoformações.

**Tipo de mídia personalizada:** `fury-preview`

{% endif %}

{% ifversion ghes < 3.3 %}

## Status da implantação

Agora você pode atualizar o ambiente `` de um [status de implantação](/rest/reference/repos#create-a-deployment-status) e usar os estados `in_progress` e `na fila`. Ao criar o status da implantação, agora você pode usar o parâmetro `auto_inactive` para marcar implantações de `produção` antigas como `inativa`.

**Tipo de mídia personalizada:** `flash-preview` **Anunciado:** [2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Permissões de criação de repositório

Agora você pode configurar se os integrantes da organização podem criar repositórios e que tipos de repositórios podem criar. Consulte "[Atualizar uma organização](/rest/reference/orgs#update-an-organization)" para obter mais informações.

**Tipos de mídia personalizada:** `surtur-preview` **Anunciado:** [2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

{% endif %}

## Anexos de conteúdo

Agora você pode fornecer mais informações no GitHub para URLs vinculadas a domínios registrados usando a API de {% data variables.product.prodname_unfurls %}. Consulte "[Usar anexos de conteúdo](/apps/using-content-attachments/)" para obter mais informações.

**Tipos de mídia personalizada:** `corsair-preview` **Anunciado:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% ifversion ghes < 3.3 %}

## Habilitar e desabilitar páginas

Você pode usar os novos pontos de extremidade no [API de páginas](/rest/reference/repos#pages) para habilitar ou desabilitar páginas. Para saber mais sobre páginas, consulte "[Princípios básicos do GitHub Pages](/categories/github-pages-basics)".

**Tipos de mídia personalizada:** `switcheroo-preview` **Anunciado:** [2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Listar branches ou pull requests para um commit

Você pode usar dois novos pontos de extremidade na [API de commits](/rest/reference/repos#commits) para listar branches ou pull requests para um commit.

**Tipos de mídia personalizada:** `groot-preview` **Anunciado:** [2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Atualizar um branch de pull request

Você pode usar um novo ponto de extremidade para [atualizar um branch de pull request](/rest/reference/pulls#update-a-pull-request-branch) com alterações do HEAD do branch upstream.

**Tipos de mídia personalizada:** `lidian-preview` **Anunciado:** [2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% endif %}

## Criar e usar modelos de repositório

Você pode usar um novo ponto de extremidade para [Criar um repositório usando um modelo](/rest/reference/repos#create-a-repository-using-a-template) e [Criar um repositório para o usuário autenticado](/rest/reference/repos#create-a-repository-for-the-authenticated-user) que é um repositório de modelo, definindo o parâmetro `is_template` como `verdadeiro`. [Obter um repositório](/rest/reference/repos#get-a-repository) para verificar se ele é definido como um repositório de modelo usando a chave `is_template`.

**Tipos de mídia personalizada:** `baptiste-preview` **Anunciado:** [2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/)

{% ifversion ghes < 3.3 %}

## Novo parâmetro de visibilidade para a API de repositórios

Você pode definir e recuperar a visibilidade de um repositório na [API de repositórios](/rest/reference/repos).

**Tipos de mídia personalizada:** `nebula-preview` **Anunciado:** [2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)
{% endif %}
