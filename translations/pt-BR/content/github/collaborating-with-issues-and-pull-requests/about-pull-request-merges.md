---
title: Sobre merges de pull request
intro: 'Você pode [fazer merge de pull requests](/articles/merging-a-pull-request) retendo todos os commits em um branch de recurso, combinando por squash todos os commits em um único commit ou fazendo rebase de commits individuais do branch ''head'' no branch ''base''.'
redirect_from:
  - /articles/about-pull-request-merge-squashing/
  - /articles/about-pull-request-merges
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pull_requests.default_merge_option %}

### Combinar por squash e fazer merge de commits da pull request

{% data reusables.pull_requests.squash_and_merge_summary %}

#### Mesclar mensagem para uma mesclagem por squash

Quando você faz combinação por squash e merge, o {% data variables.product.prodname_dotcom %} gera uma mensagem de commit que você pode mudar se quiser. O padrão da mensagem depende se a  pull request contém vários commits ou apenas um.

| Número de commits | Sumário                                                                           | Descrição                                                                                        |
| ----------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Um commit         | O título da mensagem de commit do único commit, seguido do número de pull request | O texto da mensagem de commit para o único commit                                                |
| Mais de um commit | Título da pull request, seguido do número da pull request                         | Uma lista das mensagens de commit para todos os commits combinados por squash, por ordem de data |

#### Fazendo combinação por squash e merge com um branch de longa duração

Se você planeja continuar trabalhando no [branch head](/github/getting-started-with-github/github-glossary#head-branch) de uma pull request depois que a pull request for mesclada, recomendamos que você não combine por squash nem faça o merge da pull request.

Quando você cria uma pull request, o {% data variables.product.prodname_dotcom %} identifica o commit mais recente que existe tanto no branch head quanto no [branch base](/github/getting-started-with-github/github-glossary#base-branch): o commit de ancestral comum. Quando você combinar por squash e mesclar a pull request, o {% data variables.product.prodname_dotcom %} cria um commit no branch base que contém todas as alterações feitas no branch head desde o commit de ancestral comum.

Uma vez que esse commit está apenas no branch base e não no branch head, o ancestral comum dos dois branches permanece inalterado. Se você continuar a trabalhar no branch head e, em seguida, criar uma nova pull request entre os dois branches, a pull request incluirá todos os commits desde o ancestral comum, incluindo commits que você combinou por squash e fez merge na pull request anterior. Se não houver conflitos, você pode mesclar esses commits com segurança. No entanto, este fluxo de trabalho torna os conflitos de mesclagem mais prováveis. Se você continuar a combinar por squash e mesclar pull requests para um branch head de longo prazo, você terá que resolver os mesmos conflitos repetidamente.

### Fazer rebase e merge dos commits da sua pull request

{% data reusables.pull_requests.rebase_and_merge_summary %}

Você não pode fazer rebase e merge automaticamente no {% data variables.product.product_location %} quando:
- A pull request tem conflitos de merge.
- O rebase dos commits do branch base no branch head se depara com conflitos.
- O rebase dos commits é considerado "não seguro"; por exemplo, quando é possível fazer rebase sem conflitos de merge, mas que geraria um resultado diferente daquele que um merge geraria.

Se ainda quiser fazer rebase dos commits, mas não puder fazer rebase e merge automaticamente no {% data variables.product.product_location %}, você deverá:
- Fazer rebase do branch de tópico (ou branch head) no branch base localmente na linha de comando
- [Resolver qualquer conflito de merge na linha de comando](/articles/resolving-a-merge-conflict-using-the-command-line/).
- Forçar push dos commits com rebase no branch de tópico da pull request (ou branch head remoto).

Qualquer pessoa com permissões de gravação no repositório pode [fazer merge das alterações](/articles/merging-a-pull-request/) usando o botão de rebase e merge no {% data variables.product.product_location %}.

### Leia mais

- "[Sobre pull requests](/articles/about-pull-requests)"
- "[Solucionar conflitos de merge](/articles/addressing-merge-conflicts)"
