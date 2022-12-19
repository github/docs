---
ms.openlocfilehash: b62a0e5829c03ff7879fda2d714c4a7652d762b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108016"
---
{% comment %} 

Sempre inclua uma advertência de segurança acima deste procedimento. É uma das opções a seguir, dependendo se o contexto é de executores auto-hospedados ou de executores maiores.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Todas as organizações têm um só grupo de executores padrão. As organizações dentro de uma conta de empresa podem criar grupos adicionais. Os administradores da organização podem permitir o acesso de repositórios individuais a um grupo de executor. Para obter informações sobre como criar um grupo de executores com a API REST, confira "[Grupos de executores auto-hospedados](/rest/reference/actions#self-hosted-runner-groups)".

Os executores são automaticamente atribuídos ao grupo padrão quando criados e só podem ser membros de um grupo por vez. Você pode mover um executor do grupo- padrão para qualquer grupo que você criar.

Ao criar um grupo, você deve escolher uma política que defina quais repositórios{% ifversion restrict-groups-to-workflows %} e fluxos de trabalho{% endif %} têm acesso ao grupo do executor.

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Na seção "Grupos de executores", clique em **Novo grupo de executores**.
1. Digite um nome para o grupo do seu executor.
 {% data reusables.actions.runner-group-assign-policy-repo %} {% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Os grupos de executores pertencentes à organização não podem acessar os fluxos de trabalho de outra organização na empresa. Você precisa criar um grupo de executores pertencente à empresa.{% endif %} {% data reusables.actions.create-runner-group %} {% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Em {% ifversion ghes or ghae %}"Executores"{% endif %}, clique **Adicionar** e **Novo grupo**.

    ![Adicionar grupo de executor](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Insira um nome para o seu grupo de executor e atribua uma política para acesso ao repositório.

   É possível configurar o grupo de um executor para ser acessível a uma lista específica de repositórios ou a todos os repositórios na organização.{% ifversion ghec or ghes %} Por padrão, apenas repositórios privados podem acessar executores no grupo do executor, mas você pode substituir isso. Esta configuração não pode ser substituída se configurar o grupo de executores da organização que foi compartilhado por uma empresa.{% endif %}
   
   ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Clique em **Salvar grupo** para criar o grupo e aplicar a política.
{% endif %}
