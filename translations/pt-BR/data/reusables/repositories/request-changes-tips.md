---
ms.openlocfilehash: e4a946e027ffef0f6e52a55d3591eb0a00556625
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145084213"
---
{% tip %}

**Dicas**:
- Se as revisões necessárias estiverem habilitadas e um colaborador com acesso de _gravação_, _administrador_ ou _proprietário_ no repositório enviar uma revisão solicitando alterações, a solicitação de pull não poderá ser mesclada até que o mesmo colaborador envie outra revisão aprovando as alterações na solicitação de pull.
- Proprietários e administradores do repositório podem fazer merge de um pull request mesmo que não tenham recebido uma revisão de aprovação; ou se um revisor que solicitou alterações saiu da organização ou estiver indisponível.
- Se as revisões necessárias e o descarte de uma revisão obsoleta estiverem habilitados e um commit de modificação de código for enviado para o branch de um pull request aprovado, a aprovação será ignorada. O pull request deve ser revisado e aprovado novamente antes de poder ser mesclado.
- Quando vários pull requests abertos têm um branch principal que aponta para o mesmo commit, você não conseguirá mesclá-los se um ou ambos tiverem uma revisão pendente ou rejeitada.
- Se o repositório exigir a aprovação de revisões de pessoas com permissões de gravação ou de administrador, todas as aprovações de pessoas com essas permissões serão indicadas com uma marca de seleção verde e as aprovações de pessoas sem essas permissões têm uma marca de seleção cinza. As aprovações com uma marca de seleção cinza não afetam a possibilidade de mesclagem da solicitação de pull.
- Os autores de pull request não podem aprovar seus próprios pull requests.

{% endtip %}
