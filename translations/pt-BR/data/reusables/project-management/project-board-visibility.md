---
ms.openlocfilehash: 6f5f7b9a1ef172b471215d5ea66d834fb00e19d7
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147875674"
---
Por padrão, os {% data variables.projects.projects_v1_boards %} em toda a organização ou pertencente a um usuário são privados e somente visíveis para pessoas com permissões de leitura, gravação ou administrador para o {% data variables.projects.projects_v1_board %}. {% ifversion ghae %} Um {% data variables.projects.projects_v1_board %} interno{% else %}público{% endif %} é visível para {% ifversion ghae %}qualquer pessoa com acesso à sua empresa{% else %}qualquer pessoa{% endif %} com a URL do {% data variables.projects.projects_v1_board %}. Os {% data variables.projects.projects_v1_boards %} em nível do repositório compartilham a visibilidade do repositório. Ou seja, um repositório privado terá um projeto privado e essa visibilidade não poderá ser alterada.
