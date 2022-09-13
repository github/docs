---
title: Excluir um repositório
intro: Você poderá excluir qualquer repositório ou bifurcação se for proprietário da organização ou tiver permissões de administrador para o repositório ou a bifurcação. A exclusão de um repositório bifurcado não elimina o repositório upstream.
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 53e6b69113a5483ea37c7ddd34dee7921959b62a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127084'
---
Os {% data reusables.organizations.owners-and-admins-can %} excluem um repositório da organização. Se a opção **Permitir que os membros excluam ou transfiram repositórios desta organização** tiver sido desabilitada, somente os proprietários da organização poderão excluir os repositórios da organização. {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}A exclusão de um repositório público não excluirá nenhum fork do repositório.{% endif %}

{% warning %}

**Avisos**:

- A exclusão de um repositório excluirá **permanentemente** os anexos de versão e as permissões da equipe. Essa ação **não** pode ser desfeita.
- Excluir um{% ifversion ghes or ghec or ghae %} privado ou um repositório{% endif %} interno irá excluir todas as bifurcações do repositório.

{% endwarning %}

Alguns repositórios excluídos podem ser restaurados dentro de 90 dias de exclusão. {% ifversion ghes or ghae %}O administrador do seu site pode ser capaz de restaurar um repositório excluído para você. Para obter mais informações, confira "[Como restaurar um repositório excluído](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)". {% else %}Para obter mais informações, confira "[Como restaurar um repositório excluído](/articles/restoring-a-deleted-repository)".{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
2. Em Zona de Perigo, clique em **Excluir este repositório**.
   ![Botão usado para exclusão de repositório](/assets/images/help/repository/repo-delete.png)
3. **Leia os avisos**.
4. Digite o nome do repositório que deseja excluir para verificar se está eliminando o correto.
   ![Rotulagem de exclusão](/assets/images/help/repository/repo-delete-confirmation.png)
5. Clique em **Entendi as consequências. Excluir este repositório**.
