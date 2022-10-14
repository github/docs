---
ms.openlocfilehash: 255dcb0346e9413e32492c34a7724df6284cd325
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455738"
---
Ao decidir quais repositórios e organizações priorizar para {% data variables.product.prodname_GH_advanced_security %}, você deverá revisá-los e identificá-los:

- As bases de código que são as mais críticas para o sucesso da sua empresa. Esses são os projetos em que a introdução de códigos vulneráveis, segredos codificados ou dependências inseguras teriam o maior impacto na sua empresa.
- Bases de código com a maior frequência de commit. Estes são os projetos mais ativamente desenvolvidos e, consequentemente, há um risco maior de poder introduzir problemas de segurança.

Quando você tiver habilitado o {% data variables.product.prodname_GH_advanced_security %} para essas organizações ou esses repositórios, avalie quais outras bases de código você poderá adicionar sem gerar cobrança de autores de commits exclusivos. Por fim, revise as bases de código importantes e ocupadas restantes. {% ifversion fpt or ghes or ghec %}Caso deseje aumentar o número de estações na sua licença, entre em contato com {% data variables.contact.contact_enterprise_sales %}.{% endif %}
