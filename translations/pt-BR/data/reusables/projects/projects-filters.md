---
ms.openlocfilehash: 02959a116ad5d087dc8a9d7fb3293e36b9b9cb24
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145095455"
---
- Para filtrar qualquer correspondência de vários valores (uma consulta OR), separe os valores com uma vírgula. Por exemplo, `label:"good first issue",bug` listará todos os problemas rotulados como `good first issue` ou `bug`.
- Para filtrar a ausência de um valor específico, coloque `-` antes do filtro. Por exemplo, `-label:"bug"` mostrará apenas os itens que não têm o rótulo `bug`.
- Para filtrar a ausência de todos os valores, insira `no:` seguido do nome do campo. Por exemplo, `no:assignee` mostrará apenas os itens que não têm um destinatário.
- Para filtrá-lo por estado, insira `is:`. Por exemplo, `is: issue` ou `is:open`.
- Separe vários filtros com um espaço. Por exemplo, `status:"In progress" -label:"bug" no:assignee` mostrará apenas os itens que têm o status `In progress`, não têm o rótulo `bug` e não têm um destinatário.
- Para filtrar a iteração anterior, atual ou próxima de um campo de iteração, use `@previous`, `@current` ou `@next`. Por exemplo, `sprint:@current`.
- Para filtrar os itens atribuídos ao visualizador, use `@me`. Por exemplo, `assignee:@me`. Qualquer pessoa que usar essa exibição verá os itens atribuídos a si mesmos.
- Para filtrar campos de data e número, use os intervalos de consultas `>`, `>=`, `<`, `<=` e `..`. Por exemplo: `target:2022-03-01..2022-03-15`. Para obter mais informações, confira "[Noções básicas sobre a sintaxe de pesquisa](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)".
