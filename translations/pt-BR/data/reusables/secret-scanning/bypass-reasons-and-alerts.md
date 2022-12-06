---
ms.openlocfilehash: eb4b729cf490728306961ff3d2ef2835700c8735
ms.sourcegitcommit: 80edcdbff4726de4d196584fcb603bca2efffd1f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/24/2022
ms.locfileid: "148181795"
---
Esta tabela mostra o comportamento dos alertas referente a cada maneira como o usuário pode ignorar um bloco de proteção por push.

| Motivo do bypass         | Comportamento do alerta                                              |
|-----------------------|------------------------------------------------------|
| É usado em testes    | O {% data variables.product.prodname_dotcom %} cria um alerta fechado, que é resolvido como "usado em testes"  |
| Isso é um falso positivo | O {% data variables.product.prodname_dotcom %} cria um alerta fechado, que é resolvido como "falso positivo" |
| Farei a correção mais tarde     | O {% data variables.product.prodname_dotcom %} cria um alerta aberto                                |