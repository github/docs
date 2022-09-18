---
title: Sobre merges de pull request
intro: 'Você pode [mesclar solicitações de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) mantendo todos os commits em um branch de recurso, combinando todos os commits em um único commit ou realocando commits individuais do branch `head` no branch `base`.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /articles/about-pull-request-merge-squashing
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 512a32eb3f918653eab1127aecb70a2fbc220571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580436'
---
## Mesclar seus commits

{% data reusables.pull_requests.default_merge_option %}

## Combinação por squash e mesclagem de commits

{% data reusables.pull_requests.squash_and_merge_summary %}

### Mesclar mensagem para uma mesclagem por squash

{% ifversion default-merge-squash-commit-message %} Quando você faz combinação por squash e mesclagem, o {% data variables.product.prodname_dotcom %} gera uma mensagem de commit padrão, que você pode editar. Dependendo de como o repositório está configurado e do número de commits na solicitação de pull, não incluindo commits de mesclagem, essa mensagem pode incluir o título ou a descrição da solicitação de pull ou informações sobre os commits.
{% else %} Quando você faz combinação por squash e mesclagem, o {% data variables.product.prodname_dotcom %} gera uma mensagem de commit padrão, que você pode editar. A mensagem padrão depende do número de commits na solicitação de pull, não incluindo os commits de mesclagem.

Número de commits | Resumo | Descrição |
----------------- | ------- | ----------- | 
Um commit | O título da mensagem de commit do único commit, seguido do número de pull request | O texto da mensagem de commit para o único commit
Mais de um commit | Título da pull request, seguido do número da pull request | Uma lista das mensagens de commit para todos os commits combinados por squash, por ordem de data
{% endif %}

Número de commits | Resumo | Descrição |
----------------- | ------- | ----------- |
Um commit | O título da mensagem de commit do único commit, seguido do número de pull request | O texto da mensagem de commit para o único commit
Mais de um commit | Título da pull request, seguido do número da pull request | Uma lista das mensagens de commit para todos os commits combinados por squash, por ordem de data

{% ifversion default-merge-squash-commit-message %} Pessoas com acesso de mantenedor ou administrador a um repositório podem configurar a mensagem de mesclagem padrão de seu repositório para todos os commits com combinação por squash de modo a usar o título da solicitação de pull, o título do solicitação de pull e os detalhes do commit, ou o título e a descrição da solicitação de pull. Para obter mais informações, veja "[Configurar a combinação por squash do commit](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)".{% endif %}

{% ifversion ghes = 3.6 %} Pessoas com acesso de administrador a um repositório podem configurar o repositório para usar o título da solicitação de pull como a mensagem de mesclagem padrão para todos os commits combinados por squash. Para obter mais informações, veja "[Configurar o squashing de commit](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)".
{% endif %}

### Fazendo combinação por squash e merge com um branch de longa duração

Se você pretende continuar o trabalho no [branch principal](/github/getting-started-with-github/github-glossary#head-branch) de uma solicitação de pull depois que a solicitação de pull for mesclada, recomendamos que você não use a mesclagem squash nem mescle a solicitação de pull.

Quando você cria uma solicitação de pull, o {% data variables.product.prodname_dotcom %} identifica o commit mais recente que está no branch principal e no [branch base](/github/getting-started-with-github/github-glossary#base-branch): o commit ancestral comum. Quando você combinar por squash e mesclar a pull request, o {% data variables.product.prodname_dotcom %} cria um commit no branch base que contém todas as alterações feitas no branch head desde o commit de ancestral comum.

Uma vez que esse commit está apenas no branch base e não no branch head, o ancestral comum dos dois branches permanece inalterado. Se você continuar a trabalhar no branch head e, em seguida, criar uma nova pull request entre os dois branches, a pull request incluirá todos os commits desde o ancestral comum, incluindo commits que você combinou por squash e fez merge na pull request anterior. Se não houver conflitos, você pode mesclar esses commits com segurança. No entanto, este fluxo de trabalho torna os conflitos de mesclagem mais prováveis. Se você continuar a combinar por squash e mesclar pull requests para um branch head de longo prazo, você terá que resolver os mesmos conflitos repetidamente.

## Troca de base e mesclagem de commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

Você não pode fazer rebase e merge automaticamente no {% data variables.product.product_location %} quando:
- A pull request tem conflitos de merge.
- O rebase dos commits do branch base no branch head se depara com conflitos.
- O rebase dos commits é considerado "não seguro"; por exemplo, quando é possível fazer rebase sem conflitos de merge, mas que geraria um resultado diferente daquele que um merge geraria.

Se ainda quiser fazer rebase dos commits, mas não puder fazer rebase e merge automaticamente no {% data variables.product.product_location %}, você deverá:
- Fazer rebase do branch de tópico (ou branch head) no branch base localmente na linha de comando
- [Resolva todos os conflitos de mesclagem na linha de comando](/articles/resolving-a-merge-conflict-using-the-command-line/).
- Forçar push dos commits com rebase no branch de tópico da pull request (ou branch head remoto).

Qualquer pessoa com permissões de gravação no repositório pode [mesclar as alterações](/articles/merging-a-pull-request/) usando o botão Trocar base e mesclar do {% data variables.product.product_location %}.

## Leitura adicional

- "[Sobre as solicitações de pull](/articles/about-pull-requests/)"
- "[Como resolver conflitos de mesclagem](/github/collaborating-with-pull-requests/addressing-merge-conflicts)"
