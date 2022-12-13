---
ms.openlocfilehash: 281a3a039c8a557c209e756d107ac1856a181017
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145083796"
---
Registramos e exibimos dois números de autores de commits do {% data variables.product.prodname_GH_advanced_security %} no {% data variables.product.product_location %}:

- **Autores de commits** é o número de autores de commits que contribuíram com, pelo menos, um repositório {% ifversion fpt or ghec %}privado {% endif %}em uma organização e que usam uma estação na sua licença corporativa. Ou seja, eles também são integrantes da organização, um colaborador externo ou têm um convite pendente para ingressar em uma organização na sua empresa.
- **Exclusivo deste repositório/desta organização** é o número de autores de commits que contribuíram apenas neste repositório ou nos repositórios desta organização. Este número mostra a quantidade de estações de licença que você pode liberar, desabilitando {% data variables.product.prodname_GH_advanced_security %} para esse repositório ou organização.

Se não houver committers exclusivos, todos os committers ativos também contribuem para outros repositórios ou organizações que usam {% data variables.product.prodname_GH_advanced_security %}. Desabilitar o recurso para esse repositório ou organização não liberaria nenhuma estação na sua licença.

Ao remover um usuário da sua conta corporativa, a licença do usuário é liberada dentro de 24 horas.

{% note %}

**Observação:** os usuários podem contribuir com vários repositórios ou várias organizações. O uso é medido em toda a conta corporativa para garantir que cada integrante utilize uma estação, independentemente da quantidade de repositórios ou organizações para as quais o usuário contribui.

{% endnote %}
