---
ms.openlocfilehash: ef09954dd829eae3eb7cfaefbefab65b9a2fffc5
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/30/2022
ms.locfileid: "145083837"
---
1. Atribua uma política para acesso ao repositório.

    É possível configurar o grupo de um executor para ser acessível a uma lista específica de repositórios ou a todos os repositórios na organização.{% ifversion ghec or ghes %} Por padrão, apenas repositórios privados podem acessar executores no grupo do executor, mas você pode substituir isso. Esta configuração não pode ser substituída se configurar o grupo de executores da organização que foi compartilhado por uma empresa.{% endif %}
