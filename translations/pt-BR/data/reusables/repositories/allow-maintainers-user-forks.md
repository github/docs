---
ms.openlocfilehash: 3c71b4f4d9bfae794b8325c01d85db55f91c2fa8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145095391"
---
1. Nos forks de propriedade do usuário, caso você deseje permitir que qualquer pessoa com acesso de push no repositório upstream faça alterações na sua solicitação de pull, selecione **Permitir edições de mantenedores**.

    {% warning %}

    **Aviso:** se o fork contiver fluxos de trabalho do {% data variables.product.prodname_actions %}, a opção será **Permitir edições e acesso aos segredos por mantenedores**. Permitir edições no branch de uma bifurcação que contém fluxos de trabalho do {% data variables.product.prodname_actions %} também permite que um mantenedor edite os fluxos de trabalho do repositório bifurcado, o que pode potencialmente revelar valores de segredos e conceder acesso a outros branches.

    {% endwarning %}
