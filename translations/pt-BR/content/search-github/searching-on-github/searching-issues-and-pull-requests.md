---
title: Pesquisar problemas e pull requests
intro: 'Você pode pesquisar problemas e pull requests no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação destes qualificadores de pesquisa.'
redirect_from:
  - /articles/searching-issues
  - /articles/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search issues & PRs
ms.openlocfilehash: 8565d2d31c66291114da8ab4a95312a568d39ae3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106458'
---
Você pode pesquisar problemas e pull requests globalmente no {% data variables.product.product_name %} ou pesquisar em uma organização específica. Para obter mais informações, confira "[Sobre a pesquisa no {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% tip %}

**Tips:** {% ifversion ghes or ghae %}
  - Este artigo contém exemplos de pesquisa no site {% data variables.product.prodname_dotcom %}.com, mas você pode usar os mesmos filtros de pesquisa em {% data variables.location.product_location %}.{% endif %}
  - Para ver uma lista de sintaxes de pesquisa que você pode adicionar a qualquer qualificador de pesquisa para aprimorar ainda mais os resultados, confira "[Noções básicas sobre a sintaxe de pesquisa](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)".
  - Use aspas em termos de pesquisa com várias palavras. Por exemplo, caso deseje pesquisar problemas com o rótulo "Em andamento", pesquise `label:"in progress"`. A pesquisa não faz distinção entre maiúsculas e minúsculas.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

## Pesquisar somente problemas e pull requests

Por padrão, a pesquisa do {% data variables.product.product_name %} retorna problemas e pull requests. No entanto, você pode restringir os resultados da pesquisa apenas aos problemas ou às solicitações de pull usando os qualificadores `type` ou `is`.

| Qualificador  | Exemplo
| ------------- | -------------
| `type:pr` | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) corresponde às solicitações de pull com a palavra "cat".
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) corresponde aos problemas que contêm a palavra "github" e que tem um comentário de @defunkt.
| `is:pr` | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) corresponde às solicitações de pull com a palavra "event".
| `is:issue` | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) corresponde aos problemas fechados com o rótulo "bug".

## Pesquisar por título, texto ou comentários

Com o qualificador `in`, você pode restringir a pesquisa ao título, ao corpo, aos comentários ou a qualquer combinação desses itens. Quando você omite esse qualificador, o título, o texto e os comentários são pesquisados.

| Qualificador     | Exemplo
| ------------- | -------------
| `in:title` | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) corresponde aos problemas com "warning" no título.
| `in:body` | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) corresponde aos problemas com "error" no título ou no corpo.
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) corresponde aos problemas que mencionam "shipit" nos comentários.

## Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar problemas e solicitações de pull em todos os repositórios pertencentes a uma organização ou a um usuário específico, use os qualificadores `user` ou `org`. Para pesquisar problemas e solicitações de pull em um repositório específico, use o qualificador `repo`.

{% data reusables.pull_requests.large-search-workaround %}

| Qualificador        | Exemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) corresponde aos problemas com a palavra "ubuntu" de repositórios pertencentes a @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) corresponde aos problemas em repositórios pertencentes à organização GitHub.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) corresponde aos problemas do projeto shumway de @mozilla que foram criados antes de março de 2012.

## Pesquisar por estado aberto ou fechado

Filtre solicitações de pull e problemas em aberto ou fechados usando o qualificador `state` ou `is`.

| Qualificador        | Exemplo
| ------------- | -------------
| `state:open` | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) corresponde aos problemas em aberto que mencionam @vmg com a palavra "libraries".
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) corresponde aos problemas fechados com a palavra "design" no corpo.
| `is:open` | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) corresponde aos problemas em aberto com a palavra "performance".
| `is:closed` | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) corresponde às solicitações de pull e aos problemas fechados com a palavra "android".

{% ifversion issue-close-reasons %}
## Pesquisar pelo motivo do fechamento de um problema

Você pode filtrar problemas com base no motivo informado quando o problema foi encerrado usando o qualificador `reason`.

| Qualificador        | Exemplo
| ------------- | -------------
| `reason:completed` | [**libraries is:closed reason:complete**](https://github.com/search?q=libraries+is%3Aclosed+reason%3Acompleted&type=Issues) corresponde a problemas com a palavra "libraries" que foram fechados como "completed".
| `reason:"not planned"` | [**libraries is:closed reason:"not planned"**](https://github.com/search?q=libraries+is%3Aclosed+reason%3A%22not+planned%22&type=Issues) corresponde a problemas com a palavra "libraries" que foram fechados como "não planejados".
 
{% endif %}

## Filtrar por visibilidade do repositório

Aplique um filtro de visibilidade do repositório que contém os problemas e as solicitações de pull usando o qualificador `is`. Para obter mais informações, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

| Qualificador | Exemplo | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) corresponde aos problemas e às solicitações de pull de repositórios públicos.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) corresponde aos problemas e às solicitações de pull de repositórios internos.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) corresponde aos problemas e às solicitações de pull que contêm a palavra "cupcake" nos repositórios privados que você pode acessar.

## Pesquisar por autor

O qualificador `author` encontra problemas e solicitações de pull criados por determinado usuário ou conta de integração.

| Qualificador     | Exemplo
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) corresponde aos problemas e às solicitações de pull com a palavra "cool" que foram criados por @gjtorikian.
| | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) corresponde aos problemas escritos por @mdo que contêm a palavra "bootstrap" no corpo.
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) corresponde aos problemas criados pela conta de integração chamada "robot".

## Pesquisar por responsável

O qualificador `assignee` encontra problemas e solicitações de pull que foram atribuídos a determinado usuário. Não é possível pesquisar problemas e solicitações de pull que têm _qualquer_ destinatário, mas é possível pesquisar [problemas e solicitações de pull que não tem nenhum destinatário](#search-by-missing-metadata).

| Qualificador     | Exemplo
| ------------- | -------------
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) corresponde aos problemas e às solicitações de pull no projeto libgit2 que foram atribuídos a @vmg.

## Pesquisar por menção

O qualificador `mentions` encontra os problemas que mencionam um usuário específico. Para obter mais informações, confira "[Como mencionar pessoas e equipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)".

| Qualificador     | Exemplo
| ------------- | -------------
| <code>mentions:<em>USERNAME</em></code> | [ **`resque mentions:defunkt`**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) corresponde aos problemas com a palavra "resque" que mencionam @defunkt.

## Pesquisar por menção da equipe

Para as organizações e as equipes das quais você faz parte, use o qualificador `team` para encontrar problemas ou solicitações de pull que fazem @mention a uma equipe específica na organização. Substitua os nomes de exemplo pelos nome da organização e da equipe para fazer uma pesquisa.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **`team:jekyll/owners`** corresponde aos problemas em que a equipe `@jekyll/owners` é mencionada.
| | **team:myorg/ops is:open is:pr** corresponde às solicitações de pull em aberto em que a equipe `@myorg/ops` é mencionada.

## Pesquisar por autor do comentário

O qualificador `commenter` encontra problemas que contêm um comentário de um usuário específico.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) corresponde aos problemas de repositórios pertencentes ao GitHub que contêm a palavra "github" e que têm um comentário de @defunkt.

## Pesquisar por um usuário envolvido em um problema ou uma pull request

Use o qualificador `involves` para encontrar problemas que envolvem de alguma forma um usuário específico. O qualificador `involves` é um OR lógico entre os qualificadores `author`, `assignee`, `mentions` e `commenter` para um só usuário. Em outras palavras, esse qualificador encontra problemas e pull requests que foram criados por um usuário, atribuídos a ele, que o mencionam ou que foram comentados por ele.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** corresponde aos problemas em que @defunkt ou @jlord está envolvido.
| | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) corresponde aos problemas em que @mdo está envolvido e que não contêm a palavra "bootstrap" no corpo.

## Procurar problema e pull requests vinculados
Você pode restringir seus resultados para apenas incluir problemas vinculados a um pull request com uma referência ou pull requests que estão vinculados a um problema que o pull request pode fechar.

| Qualificador | Exemplo |
| ------------- | ------------- |
| `linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) corresponde aos problemas em aberto no repositório `desktop/desktop` que estão vinculados a uma solicitação de pull por uma referência de fechamento. |
| `linked:issue` | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) corresponde às solicitações de pull fechadas no repositório `desktop/desktop` que estavam vinculadas a um problema que a solicitação de pull poderá ter fechado. |
| `-linked:pr` | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) corresponde aos problemas em aberto no repositório `desktop/desktop` que não estão vinculados a uma solicitação de pull por uma referência de fechamento. |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) corresponde às solicitações de pull em aberto no repositório `desktop/desktop` que não estão vinculadas a um problema que a solicitação de pull poderá fechar. |

## Pesquisar por etiqueta

Você pode restringir os resultados por rótulos usando o qualificador `label`. Alguns problemas podem ter várias etiquetas, e você pode relacionar um qualificador separado para cada problema.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) corresponde aos problemas com o rótulo "help wanted" que estão em repositórios do Ruby.
|  | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) corresponde aos problemas com a palavra "broken" no corpo que não tem o rótulo "bug", mas que *tem* o rótulo "priority".
| | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) corresponde a problemas com os rótulos "bug" e "resolved".
| | [**label:bug,resolved**](https://github.com/search?q=label%3Abug%2Cresolved&type=Issues) corresponde a problemas com o rótulo "bug" ou com o rótulo "resolved".

## Pesquisar por marco

O qualificador `milestone` encontra problemas ou solicitações de pull que fazem parte de um [marco](/articles/about-milestones) dentro de um repositório.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) corresponde aos problemas que estão em um marco chamado "overhaul".
| | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) corresponde aos problemas que estão em um marco chamado "bug fix".

## Pesquisar por quadro de projeto

Use o qualificador `project` para encontrar problemas associados a um [quadro de projetos](/articles/about-project-boards/) específico em um repositório ou uma organização. Você deve pesquisar pelo número do quadro de projeto. Você pode encontrar o número do quadro de projeto no final da URL do quadro de projeto.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** identifica os problemas pertencentes ao GitHub associados ao quadro de projetos 57 da organização.
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** identifica os problemas associados ao quadro de projetos 1 no repositório linguist do @github.

## Pesquisar por status do commit

Você pode filtrar pull requests com base no status dos commits. Isso será especialmente útil se você estiver usando [a API de Status](/rest/reference/commits#commit-statuses) ou um serviço de CI.

| Qualificador        | Exemplo
| ------------- | -------------
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) corresponde às solicitações de pull em aberto em repositórios do Go nas quais o status é Pendente.
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) corresponde às solicitações de pull em aberto com a palavra "finally" no corpo com o status Êxito.
| `status:failure` | [**created:2015-05-01..2015-05-30 status:fail**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) corresponde às solicitações de pull abertas em maio de 2015 com o status Com falha.

## Pesquisar por SHA do commit

Se você souber o hash SHA de um commit, poderá usá-lo para pesquisar pull requests que contêm esse SHA. A sintaxe do SHA deve ter no mínimo sete caracteres.

| Qualificador        | Exemplo
| ------------- | -------------
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) corresponde às solicitações de pull com um SHA de commit que começa com `e1109ab`.
| | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) corresponde às solicitações de pull mescladas com um SHA de commit que começa com `0eff326d6213c`.

## Pesquisar por nome do branch

Você pode filtrar pull requests com base no branch de origem (branch "head") ou no branch do merge (branch "base").

| Qualificador        | Exemplo
| ------------- | -------------
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) corresponde às solicitações de pull em aberto de nomes de branches que começam com a palavra "change" que estão fechados.
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) corresponde às solicitações de pull que estão sendo mescladas no branch `gh-pages`.

## Pesquisar por linguagem

Com o qualificador `language`, você pode pesquisar problemas e solicitações de pull em repositórios que foram escritos em uma linguagem específica.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) corresponde aos problemas em aberto que estão em repositórios do Ruby.

## Pesquisar por número de comentários

Use o qualificador `comments` com os [qualificadores maior que, menor que e intervalo](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) para fazer a pesquisa pelo número de comentários.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) corresponde aos problemas fechados com mais de 100 comentários.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) corresponde aos problemas com comentários que variam de 500 a 1.000.

## Pesquisar por número de interações

Filtre problemas e solicitações de pull pelo número de interações com o qualificador `interactions` acompanhado dos [qualificadores maior que, menor que e intervalo](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax). O número de interações é o número de interações e comentários em um problema ou uma pull request.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) corresponde aos problemas e às solicitações de pull com mais de duas mil interações.
| | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) corresponde às solicitações de pull ou aos problemas com interações que variam de 500 a 1.000.

## Pesquisar por número de reações

Filtre problemas e solicitações de pull pelo número de reações usando o qualificador `reactions` acompanhado dos [qualificadores maior que, menor que e intervalo](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Qualificador        | Exemplo
| ------------- | -------------
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) corresponde aos problemas com mais de mil reações.
| | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) corresponde aos problemas com reações que variam de 500 a 1.000.

## Pesquisar por pull requests de rascunho
Você pode filtrar por pull requests de rascunho. Para obter mais informações, confira "[Sobre as solicitações de pull](/articles/about-pull-requests#draft-pull-requests)".

| Qualificador        | Exemplo
| ------------- | -------------
| `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) corresponde a solicitações de pull de rascunho.
| `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) corresponde a solicitações de pull que estão prontas para revisão.

## Pesquisar por status de revisão e revisor da pull request

Filtre solicitações de pull com base no [status de revisão](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) (_nenhuma_, _obrigatória_, _aprovada_ ou _alterações solicitadas_), pelo revisor e pelo revisor solicitado.

| Qualificador        | Exemplo
| ------------- | -------------
| `review:none` | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) corresponde às solicitações de pull que não foram revisadas.
| `review:required` | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) corresponde às solicitações de pull que exigem uma revisão antes de serem mescladas.
| `review:approved` | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) corresponde às solicitações de pull aprovadas por um revisor.
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) corresponde às solicitações de pull nas quais um revisor solicitou alterações.
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) corresponde às solicitações de pull revisadas por uma pessoa específica.
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) corresponde às solicitações de pull em que uma pessoa específica é solicitada para revisão. Os revisores solicitados deixam de ser relacionados nos resultados da pesquisa depois de revisarem uma pull request. Se a pessoa solicitada estiver em uma equipe com revisão solicitada, as solicitações de revisão dessa equipe também aparecerão nos resultados da pesquisa.
| <code>user-review-requested:@me</code> | [**type:pr user-review-requested:@me** ](https://github.com/search?q=is%3Apr+user-review-requested%3A%40me+) corresponde às solicitações de pull que você foi solicitado a revisar diretamente.
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:github/docs**](https://github.com/search?q=type%3Apr+team-review-requested%3Agithub%2Fdocs&type=pullrequests) corresponde às solicitações de pull que têm solicitações de revisão da equipe `github/docs`. Os revisores solicitados deixam de ser relacionados nos resultados da pesquisa depois de revisarem uma pull request.

## Pesquisar por data da criação ou da última atualização de um problema ou uma pull request

Você pode filtrar problemas com base na data de criação ou da última atualização. Para a criação do problema, você pode usar o qualificador `created`. Para descobrir quando um problema foi atualizado pela última vez, o ideal é usar o qualificador `updated`.

Os dois usam uma data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificador        | Exemplo
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) corresponde aos problemas em aberto que foram criados antes de 2011 em repositórios escritos em C#.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) corresponde aos problemas com a palavra "weird" no corpo que foram atualizados após fevereiro de 2013.

## Pesquisar por data de encerramento de um problema ou uma pull request

Filtre problemas e solicitações de pull de acordo com o fato de eles estarem fechados usando o qualificador `closed`.

Esse qualificador usa a data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificador        | Exemplo
| ------------- | -------------
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) corresponde aos problemas e às solicitações de pull no Swift que foram fechadas após 11 de junho de 2014.
| | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) corresponde aos problemas e às solicitações de pull com a palavra "data" no corpo que foram fechados antes de outubro de 2012.

## Pesquisar por data do merge da pull request

Filtre solicitações de pull de acordo com o fato de elas terem sido mescladas usando o qualificador `merged`.

Esse qualificador usa a data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificador        | Exemplo
| ------------- | -------------
| <code>merged:<em>YYYY-MM-DD</em></code> | [ **`language:javascript merged:<2011-01-01`**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) corresponde às solicitações de pull em repositórios JavaScript que foram mescladas antes de 2011.
| | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) corresponde às solicitações de pull no Ruby com a palavra "fast" no título que foram mescladas após maio de 2014.

## Pesquisar somente pull request com merge ou sem merge

Filtre solicitações de pull com ou sem mesclagem usando o qualificador `is`.

| Qualificador        | Exemplo
| ------------- | -------------
| `is:merged` | [**bug is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) corresponde às solicitações de pull mescladas com a palavra "bug".
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) corresponde a solicitações de pull com a palavra "erro" que estão abertas ou foram fechadas sem mesclar.

## Pesquisar com base no fato de o repositório estar arquivado

O qualificador `archived` restringe os resultados aos problemas ou às solicitações de pull em um repositório arquivado.

| Qualificador     | Exemplo
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) corresponde aos problemas e às solicitações de pull que contêm a palavra "GNOME" nos repositórios arquivados aos quais você tem acesso.
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) corresponde aos problemas e às solicitações de pull que contêm a palavra "GNOME" nos repositórios não arquivados aos quais você tem acesso.

## Pesquisar conversas bloqueadas e não bloqueadas

Você pode pesquisar problema ou uma solicitação de pull que têm uma conversa bloqueada usando o qualificador `is`. Para obter mais informações, confira "[Como bloquear conversas](/communities/moderating-comments-and-conversations/locking-conversations)".

| Qualificador        | Exemplo
| ------------- | -------------
| `is:locked` | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) corresponde aos problemas ou às solicitações de pull com as palavras "code of conduct" que têm uma conversa bloqueada em um repositório que não está arquivado.
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) corresponde aos problemas ou às solicitações de pull com as palavras "code of conduct" que têm uma conversa desbloqueada em um repositório que não está arquivado.

## Pesquisar por metadados ausentes

Você pode restringir a pesquisa a problemas e solicitações de pull que não têm determinados metadados usando o qualificador `no`. Esses metadados incluem:

* Rótulos
* Marcos
* Responsáveis
* Projetos

| Qualificador        | Exemplo
| ------------- | -------------
| `no:label` | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) corresponde aos problemas e às solicitações de pull com a palavra "priority" que também não têm rótulos.
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) corresponde aos problemas não associados a um marco que contêm a palavra "sprint".
| `no:assignee` | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) corresponde aos problemas não associados a um destinatário, contendo a palavra "important" e em repositórios do Java.
| `no:project` | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) corresponde aos problemas não associados a um quadro de projetos que contém a palavra "build".

## Leitura adicional

- "[Como classificar os resultados da pesquisa](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
