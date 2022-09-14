---
ms.openlocfilehash: 444e70adced8ef2f4fdc5f91b06a28bba89c898a
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876209"
---
{% warning %}

**Aviso:**

- Se você remover o acesso de uma pessoa a um repositório privado, todas as suas bifurcações desse repositório privado serão excluídas. Os clones locais do repositório privado são mantidos. Se o acesso de uma equipe em um repositório privado for revogado ou uma equipe com acesso em um repositório privado for excluída e os membros da equipe não tiverem acesso no repositório por meio de outra equipe, os forks privados do repositório serão excluídos.{% ifversion ghes %}
- Quando a [Sincronização LDAP estiver habilitada](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync), se você remover uma pessoa de um repositório, ela perderá o acesso, mas os forks dela não serão excluídos. Se a pessoa for adicionada a uma equipe com acesso ao repositório original da organização dentro de três meses, seu acesso às bifurcações será automaticamente restaurado na próxima sincronização.{% endif %}
- Você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual.

- As pessoas com permissões de administrador para um repositório privado{% ifversion ghes or ghae or ghec %} ou interno{% endif %} podem não permitir a criação de forks desse repositório, e os proprietários da organização podem não permitir a criação de forks de nenhum repositório privado{% ifversion ghes or ghae or ghec %} ou interno{% endif %} em uma organização. Para obter mais informações, confira "[Como gerenciar a política de criação de forks para sua organização](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)" e "[Como gerenciar a política de criação de forks para seu repositório](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)".

{% endwarning %}
