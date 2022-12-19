---
title: Removendo um integrante da sua empresa
intro: Você pode remover um integrante de todas as organizações pertencentes à sua empresa.
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Remove member
ms.openlocfilehash: c3090cd49c2c2e8089093dc01ddeb7b69ae39416
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717986'
---
## Sobre a remoção de integrantes da empresa

Ao remover um integrante da sua empresa, o integrante será removido de todas as organizações pertencentes à sua empresa.

Se o integrante da empresa que você está removendo for o último proprietário de uma organização que pertence à sua empresa, você irá tornar-se o priprietário dessa organização.

Se sua empresa ou qualquer uma das organizações pertencentes à sua empresa usar um provedor de identidade (IdP) para gerenciar a associação à organização, o integrante poderá ser adicionado de volta à organização pelo IdP. Certifique-se também de fazer as alterações necessárias no seu IdP.

## Removendo um integrante da sua empresa

{% note %}

**Observação:** se um membro da empresa só usar o {% data variables.product.prodname_ghe_server %} e não o {% data variables.product.prodname_ghe_cloud %}, você não poderá remover o membro da empresa dessa forma.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. À direita da pessoa que deseja remover, selecione o menu suspenso {% octicon "gear" aria-label="The gear icon" %} e clique em **Remover da empresa**.

   ![Captura de tela da opção "Remover da empresa" para um membro da empresa](/assets/images/help/business-accounts/remove-member.png)
