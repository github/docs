---
ms.openlocfilehash: 9106c4a2e538e62d23cd0aa2e417758376f6ffcd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158850"
---
- Para filtrar qualquer correspondência de vários valores (uma consulta OR), separe os valores com uma vírgula. Por exemplo, `label:"good first issue",bug` listará todos os problemas rotulados como `good first issue` ou `bug`.
- Para filtrar a ausência de um valor específico, coloque `-` antes do filtro. Por exemplo, `-label:"bug"` mostrará apenas os itens que não têm o rótulo `bug`.
- Para filtrar a ausência de todos os valores, insira `no:` seguido do nome do campo. Por exemplo, `no:assignee` mostrará apenas os itens que não têm um destinatário.
- Para filtrá-lo por estado, insira `is:`. Por exemplo, `is: issue` ou `is:open`.
- Separe vários filtros com um espaço. Por exemplo, `status:"In progress" -label:"bug" no:assignee` mostrará apenas os itens que têm o status `In progress`, não têm o rótulo `bug` e não têm um destinatário.
- Para filtrar a iteração anterior, atual ou próxima de um campo de iteração, use `@previous`, `@current` ou `@next`. Por exemplo, `iteration:@current`.
- Para filtrar os itens atribuídos ao visualizador, use `@me`. Por exemplo, `assignee:@me`. Qualquer pessoa que usar essa exibição verá os itens atribuídos a si mesmos.
- Para filtrar por quando um item foi atualizado pela última vez, use `last-updated:` seguido pelo número de dias. Esse filtro só dá suporte a `{number}days` (ou `1day` para um único dia) como uma unidade. Por exemplo, `last-updated:7days` mostrará apenas os itens que foram atualizados pela última vez há 7 ou mais dias.
- Para filtrar campos de data e número, use os intervalos de consultas `>`, `>=`, `<`, `<=` e `..`. Por exemplo: `target:2022-03-01..2022-03-15`. Para obter mais informações, confira "[Noções básicas sobre a sintaxe de pesquisa](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)". {% ifversion projects-v2-tasklists %}
- Para filtrar problemas rastreados por um problema especificado, use `tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"` e substitua `<OWNER>` pelo proprietário do repositório, `<REPO>` pelo nome do repositório e `<ISSUE NUMBER>` pelo número do problema. {% endif %}
