---
ms.openlocfilehash: 7ab0c705855f1bd271c17eacc9a2533184d1b5f1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145095250"
---
{% ifversion ghae %}Se as políticas da sua empresa permitirem a criação de forks privados e repositórios internos, você poderá criar forks de um repositório para sua conta pessoal ou para qualquer organização em que tenha permissões de criação de repositórios. Para obter mais informações, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% elsif ghes or ghec %} Você poderá criar forks de um repositório privado ou interno para sua conta pessoal ou uma organização no {% data variables.product.product_location %} em que tem permissões de criação de repositório se as configurações para o repositório e suas políticas corporativas permitirem a criação de fork.

{% elsif fpt %} Se você tiver acesso a um repositório privado e o proprietário permitir a criação de fork, poderá criar fork do repositório para sua conta pessoal ou uma organização no {% data variables.product.prodname_team %} em que terá permissões de criação de repositório. Não é possível criar forks de um repositório privado em uma organização que usa o {% data variables.product.prodname_free_team %}. Para obter mais informações, confira "[Produtos do GitHub](/articles/githubs-products)".
{% endif %}
