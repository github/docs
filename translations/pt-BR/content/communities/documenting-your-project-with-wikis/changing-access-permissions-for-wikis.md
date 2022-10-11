---
title: Alterar as permissões de acesso para wikis
intro: 'Somente os colaboradores do repositório podem editar o wiki de {% ifversion fpt or ghec or ghes %}público{% endif %} por padrão, mas você pode permitir que qualquer pessoa com uma conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} edite seu wiki.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Change access permissions
ms.openlocfilehash: 51a9ec690f0bdad1be302592091565b65e5f9b9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084136'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Em Recursos, desmarque a opção **Restringir edições somente aos colaboradores**.
   ![Edição de restrição do wiki](/assets/images/help/wiki/wiki_restrict_editing.png)

## Leitura adicional

- "[Como desabilitar wikis](/communities/documenting-your-project-with-wikis/disabling-wikis)"
