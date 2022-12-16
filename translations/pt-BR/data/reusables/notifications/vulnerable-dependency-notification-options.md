---
ms.openlocfilehash: 3cc118cb9748ada5efb83aad6c0fe3b86c76d9bb
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/05/2022
ms.locfileid: "148134897"
---
{% ifversion fpt or ghec %}Por padrão, você receberá notificações:{% endif %}{% ifversion ghes or ghae %}Por padrão, se o proprietário da empresa tiver configurado um email para notificações na sua instância, você receberá {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- na caixa de entrada, como notificações da Web. Uma notificação da Web é enviada quando {% data variables.product.prodname_dependabot %} é habilitado para um repositório, quando um novo arquivo de manifesto é confirmado no repositório e quando uma nova vulnerabilidade com gravidade crítica ou alta é encontrada (na opção **{% data variables.product.prodname_dotcom %}** ).
- por email, um email é enviado quando {% data variables.product.prodname_dependabot %} é habilitado para um repositório, quando um novo arquivo de manifesto é confirmado no repositório e quando uma nova vulnerabilidade com gravidade crítica ou alta é encontrada (na opção **Email**).{% ifversion ghes < 3.8 or ghae < 3.8 %}
- na interface do usuário, um aviso é mostrado no arquivo do repositório e nas exibições de código quando há dependências não seguras (opção **Alertas da IU**).{% endif %}
- na linha de comando, os avisos são exibidos como retornos de chamada ao fazer envios para repositórios com dependências não seguras (opção **CLI**).
{% ifversion not ghae %}
- em {% data variables.product.prodname_mobile %}, como notificações da web. Para saber mais, confira "[Habilitar notificações por push com o {% data variables.product.prodname_mobile %}](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)".{% endif %}

{% note %}

**Observação:** as notificações por email e da Web{% ifversion not ghae %}/do {% data variables.product.prodname_mobile %}{% endif %} são:

- _por repositório_, quando o {% data variables.product.prodname_dependabot %} está habilitado no repositório ou quando é feito commit de um novo arquivo de manifesto no repositório.

- _por organização_, quando uma nova vulnerabilidade é descoberta.

{% endnote %}

{% ifversion update-notification-settings-22 %} É possível personalizar a maneira que a notificação sobre {% data variables.product.prodname_dependabot_alerts %} é feita. Por exemplo, é possível receber um email de resumo diário ou semanal sobre alertas de até 10 repositórios com a opção **Enviar resumo semanal por email**.
{% else %} É possível personalizar a maneira que a notificação sobre o {% data variables.product.prodname_dependabot_alerts %} é feita. Por exemplo, é possível receber um resumo semanal por email sobre alertas de até 10 repositórios com as opções **Enviar um resumo de vulnerabilidades por email** e **Email de resumo semanal de segurança**.{% endif %}
