---
title: Gerenciar etiquetas
intro: 'Você pode classificar {% ifversion fpt or ghec %}problemas, solicitações de pull e discussões{% else %}problemas e solicitações de pull {% endif %} criando, editando, aplicando e excluindo etiquetas.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
ms.openlocfilehash: 42feddd5ebbdee81140d3aab48b81f83a2c6e69f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126546'
---
## Sobre etiquetas

Você pode gerenciar seu trabalho no {% data variables.product.product_name %} criando rótulos para classificar {% ifversion fpt or ghec %}problemas, solicitações de pull e discussões{% else %}problemas e solicitações de pull{% endif %}. Você pode aplicar etiquetas no repositório em que foram criadas. Depois que houver um rótulo, você poderá usá-lo em qualquer {% ifversion fpt or ghec %}problema, solicitação de pull ou discussão{% else %}problema ou solicitação de pull{% endif %} nesse repositório.

## Sobre as etiquetas padrão

O {% data variables.product.product_name %} fornece etiquetas padrão para todos os repositórios novos. Você pode usar esses rótulos padrão para ajudar a criar um fluxo de trabalho padrão em um repositório.

Rótulo | Descrição
---  | ---
`bug` | Indica um problema inesperado ou um comportamento não intencional{% ifversion fpt or ghes or ghec %}
`documentation` | Indica a necessidade de aprimoramentos ou adições à documentação{% endif %}
`duplicate` | Indica {% ifversion fpt or ghec %}problemas, solicitações de pull ou discussões{% else %}problemas ou solicitações de pull{% endif %} semelhantes
`enhancement` | Indica novas solicitações de recurso
`good first issue` | Indica um bom problema para contribuidores principiantes
`help wanted` | Indica que um mantenedor deseja ajudar em um problema ou uma pull request
`invalid` | Indica que {% ifversion fpt or ghec %}um problema, uma solicitação de pull ou uma discussão{% else %}um problema ou uma solicitação de pull{% endif %} não é mais relevante
`question` | Indica que {% ifversion fpt or ghec %}um problema, uma solicitação de pull ou uma discussão{% else %}um problema ou uma solicitação de pull{% endif %} precisa de mais informações
`wontfix` | Indica que o trabalho não continuará em um {% ifversion fpt or ghec %}problema, solicitação de pull ou discussão{% else %}problema ou solicitação de pull{% endif %}

Etiquetas padrão são incluídas em todos os novos repositórios quando criados, mas você pode editar ou excluir as etiquetas posteriormente.

Os problemas com o rótulo problema `good first issue` são usados para preencher a página `contribute` do repositório. Para ver um exemplo de uma página `contribute`, confira [github/docs/contribute](https://github.com/github/docs/contribute). 

{% ifversion fpt or ghes or ghec %} Os proprietários da organização podem personalizar os rótulos padrão para os repositórios na organização. Para obter mais informações, confira "[Como gerenciar rótulos padrão para repositórios na sua organização](/articles/managing-default-labels-for-repositories-in-your-organization)".
{% endif %}

## Criar uma etiqueta

Qualquer pessoa com acesso de gravação a um repositório pode criar uma etiqueta.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. À direita do campo de pesquisa, clique em **Novo rótulo**.
{% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Aplicando uma etiqueta

Qualquer pessoa com acesso de triagem a um repositório pode aplicar e ignorar etiquetas.

1. Procure {% ifversion fpt or ghec %}o problema, a solicitação de pull ou a discussão{% else %}o problema ou a solicitação de pull{% endif %}.
1. Na barra lateral direita, à direita de "Etiquetas", clique em {% octicon "gear" aria-label="The gear icon" %} e, em seguida, clique em uma etiqueta.
  ![Menu suspenso "Rótulos"](/assets/images/help/issues/labels-drop-down.png)

## Editar uma etiqueta

Qualquer pessoa com acesso de gravação a um repositório pode editar etiquetas existentes.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Excluir uma etiqueta

Qualquer pessoa com acesso de gravação a um repositório pode excluir etiquetas existentes.

Excluir uma etiqueta removerá a etiqueta dos problemas e pull requests.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.delete-label %}

## Leitura adicional
- "[Como filtrar e pesquisar problemas e solicitações de pull](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"{% ifversion fpt or ghes or ghec %}
- "[Como gerenciar rótulos padrão para repositórios na sua organização](/articles/managing-default-labels-for-repositories-in-your-organization)"{% endif %}{% ifversion fpt or ghec %}
- "[Como incentivar contribuições úteis ao seu projeto com rótulos](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)"{% endif %}
- "[Sintaxe básica de escrita e formatação](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#using-emoji)"
