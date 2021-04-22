---
title: Pesquisar problemas e pull requests
intro: 'Você pode pesquisar problemas e pull requests no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação destes qualificadores de pesquisa.'
redirect_from:
  - /articles/searching-issues/
  - /articles/searching-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pesquisa do github
---

Você pode pesquisar problemas e pull requests globalmente no {% data variables.product.product_name %} ou pesquisar em uma organização específica. Para obter mais informações, consulte "[Sobre pesquisar no {% data variables.product.company_short %}](/articles/about-searching-on-github)".

{% tip %}

**Dicas:**{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  - Este artigo tem exemplos de pesquisa no site {% data variables.product.prodname_dotcom %}.com, mas você pode usar os mesmos filtros de pesquisa na {% data variables.product.product_location %}.{% endif %}
  - Para obter uma lista de sintaxes de pesquisa que podem ser adicionadas a qualquer qualificador de pesquisa para melhorar ainda mais os resultados, consulte "[Entender a sintaxe de pesquisa](/articles/understanding-the-search-syntax)".
  - Use aspas em termos de pesquisa com várias palavras. Por exemplo, se quiser pesquisar problemas com a etiqueta "In progress," pesquise `label:"in progress"`. A pesquisa não faz distinção entre maiúsculas e minúsculas.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

### Pesquisar somente problemas e pull requests

Por padrão, a pesquisa do {% data variables.product.product_name %} retorna problemas e pull requests. No entanto, você pode restringir os resultados da pesquisa a problemas ou pull requests usando os qualificadores `type` ou `is`.

| Qualifier    | Exemplo                                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:pr`    | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) identifica as pull requests com a palavra "cat".                                                                                     |
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) identifica os problemas que contêm a palavra "github" e um comentário de @defunkt. |
| `is:pr`      | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) identifica as pull requests com a palavra "event".                                                                          |
| `is:issue`   | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) identifica os problemas fechados com a etiqueta "bug".                                |

### Pesquisar por título, texto ou comentários

Com o qualificador `in`, você pode restringir a pesquisa ao título, texto, comentário ou qualquer combinação desses itens. Quando você omite esse qualificador, o título, o texto e os comentários são pesquisados.

| Qualifier     | Exemplo                                                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:title`    | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) identifica os problemas com a palavra "warning" no título.                   |
| `in:body`     | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) identifica os problemas com a palavra "error" no título ou no texto. |
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) identifica os problemas que mencionam "shipit" nos comentários.           |

### Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar problemas e pull requests em todos os repositórios de um usuário ou organização específicos, você pode usar os qualificadores `user` ou `org`. Para pesquisar problemas e pull requests em um repositório específico, você pode usar o qualificador `repo`.

| Qualifier                 | Exemplo                                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) identifica os problemas com a palavra "ubuntu" nos repositórios de @defunkt.                                                                    |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) identifica os problemas nos repositórios da organização GitHub.                                                                                    |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway criado:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) corresponde a problemas do projeto shumway de @mozilla que foram criados antes de março de 2012. |

### Pesquisar por estado aberto ou fechado

Você pode filtrar somente problemas e pull requests abertos ou fechados usando os qualificadores `state` ou `is`.

| Qualifier      | Exemplo                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state:open`   | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) identifica os problemas abertos que mencionam @vmg com a palavra "libraries". |
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) identifica os problemas fechados com a palavra "design" no texto.                         |
| `is:open`      | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) identifica os problemas abertos com a palavra "performance".                                           |
| `is:closed`    | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) identifica os problemas e as pull requests fechados com a palavra "android".                                          |

### Filtrar por visibilidade do repositório

É possível filtrar pela visibilidade do repositório que contém os problemas e pull requests usando o qualificador `is`. Para obter mais informações, consulte "[Sobre a visibilidade do repositório](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

| Qualificador | Exemplo | ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) corresponde problemas e pull requests em repositórios públicos.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) corresponde problemas e pull requests em repositórios internos.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) corresponde problemas e pull requests que contêm a palavra "cupcake" em repositórios privados que você pode acessar.

### Pesquisar por autor

O qualificador `author` encontra problemas e pull requests criados por determinado usuário ou conta de integração.

| Qualifier                 | Exemplo                                                                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) corresponde os problemas e os pull requests com a palavra "cool" que foram criados por @gjtorikian. |
|                           | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) corresponde problemas escritos por @mdo que contêm a palavra "bootstrap" no texto.    |
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) corresponde a problemas criados pela conta de integração denominada "robot".                                  |

### Pesquisar por responsável

O qualificador `assignee` encontra problemas e pull requests que foram atribuídos a um determinado usuário. Não é possível pesquisar problemas e pull requests que têm _qualquer_ responsável, mas é possível pesquisar [problemas e pull requests que não tem nenhum responsável](#search-by-missing-metadata).

| Qualifier                 | Exemplo                                                                                                                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) corresponde problemas e pull requests no libgit2 de libgit2 que foram atribuídos a @vmg. |

### Pesquisar por menção

O qualificador `mentions` encontra problemas que mencionam um usuário específico. Para obter mais informações, consulte "[Mencionar pessoas e equipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)".

| Qualifier                 | Exemplo                                                                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>mentions:<em>USERNAME</em></code> | [**resque mentions:defunkt**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) corresponde problemas com a palavra "resque" que mencionam @defunkt. |

### Pesquisar por menção da equipe

Para organizações e equipes das quais você faz parte, você pode usar o qualificador `team` para encontrar problemas ou pull requests que fazem @menção a uma equipe específica na organização. Substitua os nomes de exemplo pelos nome da organização e da equipe para fazer uma pesquisa.

| Qualifier                 | Exemplo                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **team:jekyll/owners** corresponde problemas em que a equipe `@jekyll/owners` é mencionada.                   |
|                           | **team:myorg/ops is:open is:pr** corresponde pull requests abertos em que a equipe `@myorg/ops` é mencionada. |

### Pesquisar por autor do comentário

O qualificador `commenter` encontra problemas que contêm um comentário de um usuário específico.

| Qualifier                 | Exemplo                                                                                                                                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) corresponde problemas nos repositórios do GitHub que contêm a palavra "github" e têm um comentário de @defunkt. |

### Pesquisar por um usuário envolvido em um problema ou uma pull request

Você pode usar o qualificador `involves` para encontrar problemas que envolvem de alguma forma um usuário específico. O qualificador `involves` é uma expressão lógica OR entre os qualificadores `author`, `assignee`, `mentions` e `commenter` para um único usuário. Em outras palavras, esse qualificador encontra problemas e pull requests que foram criados por um usuário, atribuídos a ele, que o mencionam ou que foram comentados por ele.

| Qualifier                 | Exemplo                                                                                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** corresponde problemas que envolvem @defunkt ou @jlord.                                     |
|                           | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) corresponde problemas que envolvem @mdo e não contêm a palavra "bootstrap" no texto. |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### Procurar problema e pull requests vinculados
Você pode restringir seus resultados para apenas incluir problemas vinculados a um pull request com uma referência ou pull requests que estão vinculados a um problema que o pull request pode fechar.

| Qualifier       | Exemplo                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `linked:pr`     | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) corresponde a problemas abertos no re repositório `desktop/desktop` vinculados a um pull request por uma referência fechada.                                     |
| `linked:issue`  | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) corresponde a pull requests fechados no repositório `desktop/desktop` vinculados a um problema que o pull request pode ter fechado.                    |
| `-linked:pr`    | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) corresponde a problemas abertos no repositório `desktop/desktop` que não estão vinculados a um pull request por uma referência fechada.                        |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) corresponde a pull requests abertos no repositório `desktop/desktop` que não estão vinculados a um problema que o pull request pode fechar. 
{% endif %}

### Pesquisar por etiqueta

Você pode limitar os resultados por etiquetas usando o qualificador `label`. Alguns problemas podem ter várias etiquetas, e você pode relacionar um qualificador separado para cada problema.

| Qualifier                  | Exemplo                                                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) identifica os problemas com a etiqueta "help wanted" nos repositórios de Ruby.                                     |
|                            | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) identifica problemas com a palavra "broken" no texto e que não têm a etiqueta "bug", mas *têm* a etiqueta "priority". |
|                            | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) identifica os problemas com as etiquetas "bug" e "resolved".                                                                                         |

### Pesquisar por marco

O qualificador `milestone` encontra problemas ou pull requests que fazem parte de um [marco](/articles/about-milestones) em um repositório.

| Qualifier                  | Exemplo                                                                                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) identifica os problemas que estão em um marco chamado "overhaul". |
|                            | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) identifica os problemas que estão em um marco chamado "bug fix".    |

### Pesquisar por quadro de projeto

Você pode usar o qualificador `project` para encontrar problemas associados a um [quadro de projeto](/articles/about-project-boards/) específico em um repositório ou uma organização. Você deve pesquisar pelo número do quadro de projeto. Você pode encontrar o número do quadro de projeto no final da URL do quadro de projeto.

| Qualifier                  | Exemplo                                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** identifica os problemas do GitHub associados aos quadros de projeto 57 da organização.                |
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** identifica os problemas associados ao quadro de projeto 1 no repositório Linguist de @github. |

### Pesquisar por status do commit

Você pode filtrar pull requests com base no status dos commits. Isso é especialmente útil ao usar [a API de status](/rest/reference/repos#statuses) ou um serviço CI.

| Qualifier        | Exemplo                                                                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) identifica as pull requests abertas nos repositórios de Go com status pendente.                                                   |
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) identifica as pull requests abertas com a palavra "finally" no texto com status de sucesso. |
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) identifica as pull requests abertas em maio de 2015 com status de falha.        |

### Pesquisar por SHA do commit

Se você souber o hash SHA de um commit, poderá usá-lo para pesquisar pull requests que contêm esse SHA. A sintaxe do SHA deve ter no mínimo sete caracteres.

| Qualifier                  | Exemplo                                                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) identifica as pull requests com um SHA de commit que começa com `e1109ab`.                                                  |
|                            | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) identifica as pull requests com merge que têm um SHA de commit que começa com `0eff326d6213c`. |

### Pesquisar por nome do branch

Você pode filtrar pull requests com base no branch de origem (branch "head") ou no branch do merge (branch "base").

| Qualifier                  | Exemplo                                                                                                                                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) identifica as pull requests abertas de branchs cujo nome começa com a palavra "change" e estão fechados. |
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) identifica as pull requests que estão sendo incorporadas no branch `gh-pages`.                                                                       |

### Pesquisar por linguagem

Com o qualificador `language`, você pode pesquisar problemas e pull requests em repositórios que foram escritos em uma linguagem específica.

| Qualifier                  | Exemplo                                                                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) identifica os problemas abertos que estão em repositórios de Ruby. |

### Pesquisar por número de comentários

Você pode usar o qualificador `comments` com os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax) para pesquisar pelo número de comentários.

| Qualifier                  | Exemplo                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) identifica os problemas fechados com mais de 100 comentários. |
|                            | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) identifica os problemas com 500 a 1.000 comentários.                                       |

### Pesquisar por número de interações

Você pode filtrar problemas e pull requests pelo número de interações com o qualificador `interactions` e os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax). O número de interações é o número de interações e comentários em um problema ou uma pull request.

| Qualifier                  | Exemplo                                                                                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) identifica pull requests ou problemas com mais de 2.000 interações. |
|                            | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) identifica pull requests ou problemas com 500 a 1.000 interações.           |

### Pesquisar por número de reações

Você pode filtrar problemas e pull requests pelo número de reações usando o qualificador `reactions` e os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax).

| Qualifier                  | Exemplo                                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) identifica os problemas com mais de 1.000 reações. |
|                            | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) identifica os problemas com 500 a 1.000 reações.                       |

### Pesquisar por pull requests de rascunho
Você pode filtrar por pull requests de rascunho. Para obter mais informações, consulte "[Sobre pull requests](/articles/about-pull-requests#draft-pull-requests)".

| Qualifier        | Example | ------------- | -------------{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %} | `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) matches draft pull requests. | `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) corresponde a pull requests prontos para revisão.{% else %} | `is:draft` | [**is:draft**](https://github.com/search?q=is%3Adraft) corresponde a rascunhos de pull requests.{% endif %}

### Pesquisar por status de revisão e revisor da pull request

Você pode filtrar as pull requests com base no [status de revisão](/articles/about-pull-request-reviews) (_none_ (nenhuma), _required_ (obrigatória), _approved_ (aprovada) ou _changes requested_ (alterações solicitadas)), por revisor e por revisor solicitado.

| Qualifier                  | Exemplo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `review:none`              | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) identifica as pull requests que não foram revisadas.                                                                                                                                                                                                                                                                                                                                                   |
| `review:required`          | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) identifica as pull requests que exigem uma revisão antes do merge.                                                                                                                                                                                                                                                                                                                             |
| `review:approved`          | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) identifica as pull requests aprovadas por um revisor.                                                                                                                                                                                                                                                                                                                                          |
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) identifica as pull requests nas quais um revisor solicitou alterações.                                                                                                                                                                                                                                                                                                       |
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) identifica as pull requests revisadas por uma pessoa específica.                                                                                                                                                                                                                                                                                                                 |
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) identifica as pull requests nas quais uma pessoa específica foi solicitada para revisão. Os revisores solicitados deixam de ser relacionados nos resultados da pesquisa depois de revisarem uma pull request. Se a pessoa solicitada estiver em uma equipe solicitada para a revisão, as solicitações de revisão da equipe também aparecerão nos resultados da pesquisa. |
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:atom/design**](https://github.com/search?q=type%3Apr+team-review-requested%3Aatom%2Fdesign&type=Issues) identifica as pull requests que tem solicitações de revisão da equipe `atom/design`. Os revisores solicitados deixam de ser relacionados nos resultados da pesquisa depois de revisarem uma pull request.                                                                                                                                                               |

### Pesquisar por data da criação ou da última atualização de um problema ou uma pull request

Você pode filtrar problemas com base na data de criação ou da última atualização. Para a criação do problema, você pode usar o qualificador `created`. Para descobrir quando um problema foi atualizado pela última vez, você precisará usar o qualificador `updated`.

Os dois usam uma data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                  | Exemplo                                                                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) corresponde a problemas abertos criados antes de 2011 nos repositórios escritos em C#. |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) corresponde a problemas com a palavra "weird" no texto que foram atualizados após fevereiro de 2013.     |

### Pesquisar por data de encerramento de um problema ou uma pull request

Você pode filtrar somente problemas e pull requests fechados usando o qualificador `closed`.

Esse qualificador usa a data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                  | Exemplo                                                                                                                                                                                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) corresponde a problemas e pull requests no Swift fechados após 11 de junho de 2014.                                             |
|                            | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) corresponde a problemas e pull requests com a palavra "data" no texto, que foram fechados antes de outubro de 2012. |

### Pesquisar por data do merge da pull request

Você pode filtrar somente as pull requests com merge usando o qualificador `merged`.

Esse qualificador usa a data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                  | Exemplo                                                                                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>merged:<em>YYYY-MM-DD</em></code> | [**language:javascript merge:<2011-01-01**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) corresponde a pull requests em repositórios do JavaScript que foram mesclados antes de 2011.                                    |
|                            | [**ast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) corresponde a pull requests no Ruby com a palavra "fast" no título que foram mesclados após maio de 2014. |

### Pesquisar somente pull request com merge ou sem merge

Você pode filtrar as pull requests com ou sem merge usando o qualificador `is`.

| Qualifier     | Exemplo                                                                                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:merged`   | [**bugfix is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) identifica as pull requests com merge que têm a palavra "bugfix". |
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) identifica problemas e pull requests fechados com a palavra "error".          |

### Pesquisar com base no fato de o repositório estar arquivado

O qualificador `archived` restringe os resultados a problemas ou pull requests em um repositório arquivado.

| Qualifier        | Exemplo                                                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) identifica problemas e pull requests que contêm a palavra "GNOME" em repositórios arquivados aos quais você tem acesso.   |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) identifica problemas e pull requests que contêm a palavra "GNOME" em repositórios arquivados aos quais você tem acesso. |

### Pesquisar conversas bloqueadas e não bloqueadas

Você pode pesquisar problema ou pull requests que têm uma conversa bloqueada usando o qualificador `is`. Para obter mais informações, consulte "[Bloquear conversas](/communities/moderating-comments-and-conversations/locking-conversations)".

| Qualifier     | Exemplo                                                                                                                                                                                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:locked`   | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) identifica problemas ou pull requests com as palavras "code of conduct" que têm uma conversa bloqueada em um repositório que não está arquivado. |
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) identifica problemas ou pull requests com as palavras "code of conduct" que têm uma conversa desbloqueada em um repositório que não está arquivado.     |

### Pesquisar por metadados ausentes

Você pode limitar a pesquisa a problemas e pull requests que não têm determinados metadados usando o qualificador `no`. Esses metadados incluem:

* Etiquetas
* Marcos
* Responsáveis
* Projetos

| Qualifier      | Exemplo                                                                                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `no:label`     | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) identifica problemas e pull requests com a palavra "priority" que não têm nenhuma etiqueta.                                                                                              |
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) identifica problemas que não estão associados a um marco e contêm a palavra "sprint".                                                                        |
| `no:assignee`  | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) identifica problemas que não estão associados a um responsável, contêm a palavra "important" e estão em repositórios Java. |
| `no:project`   | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) identifica problemas que não estão associados a um quadro de projeto e contêm a palavra "build".                                                                            |

### Leia mais

- "[Ordenar os resultados da pesquisa](/articles/sorting-search-results/)"
